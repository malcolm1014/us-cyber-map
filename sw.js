/* Service worker for offline support — bump CACHE_VERSION on any deploy that
   changes cached files (data.js updates especially) so the activate handler
   purges the old cache instead of stranding visitors on stale data. */
const CACHE_VERSION = 'uscm-v1';
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const TILE_CACHE = `${CACHE_VERSION}-tiles`;

const SHELL_FILES = [
  './',
  './index.html',
  './regions.js',
  './data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png',
  './og-image.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => Promise.all(
      names
        .filter(name => name.startsWith('uscm-') && name !== SHELL_CACHE && name !== TILE_CACHE)
        .map(name => caches.delete(name))
    )).then(() => self.clients.claim())
  );
});

function isTileRequest(url){
  return url.hostname === 'server.arcgisonline.com'
    || url.hostname.endsWith('.tile.openstreetmap.org')
    || url.hostname === 'tile.openstreetmap.org';
}
function isShellRequest(url){
  if (url.origin !== self.location.origin) return false;
  const last = url.pathname.split('/').pop();
  return ['', 'index.html', 'data.js', 'regions.js', 'manifest.json'].includes(last);
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  /* Never cache Nominatim geocoding results — a stale "where is X" answer
     would be actively wrong, not just outdated. Let it hit the network
     directly and fail normally offline. */
  if (url.hostname === 'nominatim.openstreetmap.org') return;

  /* Map tiles: cache-first. Static imagery — safe to serve from cache
     indefinitely, and this is the main offline win (previously-viewed areas
     stay visible with no connection), updating the cache in the background
     on every hit so it doesn't go stale forever. */
  if (isTileRequest(url)){
    event.respondWith(
      caches.open(TILE_CACHE).then(async cache => {
        const cached = await cache.match(req);
        const network = fetch(req).then(res => {
          /* Tile <img> loads are browser-issued as mode:'no-cors', so even a
             CORS-friendly server (Esri's is) comes back as an opaque
             response here: type:'opaque', status:0, ok:FALSE — a plain
             `res.ok` check silently skips caching every tile, which is
             exactly what happened until this was caught in testing. Opaque
             responses are still valid to cache and replay as an <img> src,
             just not inspectable, so accept them explicitly. */
          if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
          return res;
        }).catch(() => null);
        return cached || (await network) || new Response('', { status: 504 });
      })
    );
    return;
  }

  /* App shell + data: network-first, but with {cache:'no-store'} — plain
     network-first still lets the BROWSER's own HTTP cache silently serve
     stale bytes even when this worker's own strategy intends to fetch
     fresh (the exact bug already hit and fixed on the sibling
     path-to-freedom-map site's service worker). Falls back to the cached
     copy only when the network is genuinely unreachable. */
  if (isShellRequest(url)){
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => {
          if (res && res.ok){
            const copy = res.clone();
            caches.open(SHELL_CACHE).then(cache => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  /* Everything else (icons, og-image, third-party CDN scripts/styles):
     cache-first, network fallback — static assets, fine to serve stale
     until a new service worker version replaces the whole cache bucket. */
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      if (res && res.ok && url.origin === self.location.origin){
        const copy = res.clone();
        caches.open(SHELL_CACHE).then(cache => cache.put(req, copy));
      }
      return res;
    }).catch(() => cached))
  );
});
