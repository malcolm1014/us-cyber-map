// Validate data.js: point-in-state coordinate check + basic schema sanity.
//
// Every past enrichment session reconstructed this point-in-polygon check
// from scratch via `node -e "..."`. Saving it here means future sessions
// (and CI, eventually) can just run `node scripts/validate.js` instead.
//
// A FLAG from the point-in-state check is not automatically a bug — real
// coastal/border resources correctly sit just outside their state's
// simplified polygon (Golden Gate Bridge, Honolulu, El Paso, etc). Treat
// every flag as "investigate," not "fix blindly." See project memory for
// the running list of known-good flags.
//
// Usage: node scripts/validate.js

const fs = require('fs');
const path = require('path');

function loadVars(relPath, ...names) {
  const src = fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8').replace(/\bconst\b/g, 'var');
  const fn = new Function(src + `\nreturn {${names.join(',')}};`);
  return fn();
}

const { RESOURCES } = loadVars('data.js', 'RESOURCES');
const { STATE_GEO } = loadVars('regions.js', 'STATE_GEO');

function pointInPolygon(pt, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
    const intersect = (yi > pt[1]) !== (yj > pt[1]) &&
      pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function inState(lng, lat, code) {
  const f = STATE_GEO.features.find(f => f.properties.code === code);
  if (!f) return null; // unknown state code — separate error, not a geo flag
  const polys = f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [f.geometry.coordinates];
  return polys.some(poly => pointInPolygon([lng, lat], poly[0]));
}

const VALID_CATEGORIES = new Set([
  'con', 'meetup', 'ctf', 'maker', 'school', 'library', 'youth', 'gov', 'hamradio',
]);

let geoFlags = 0, badState = 0, badCategory = 0, missingFields = 0, dupeCoords = 0;
const seenCoords = new Map(); // "lat,lng" -> [names]

for (const r of RESOURCES) {
  if (!r.name || !r.category || r.lat == null || r.lng == null || !r.st || !r.region) {
    console.log('MISSING FIELDS:', r.name || '(unnamed)');
    missingFields++;
    continue;
  }
  if (!VALID_CATEGORIES.has(r.category)) {
    console.log('BAD CATEGORY:', r.name, '->', r.category);
    badCategory++;
  }
  const ok = inState(r.lng, r.lat, r.st);
  if (ok === null) {
    console.log('UNKNOWN STATE CODE:', r.name, '->', r.st);
    badState++;
  } else if (!ok) {
    console.log('GEO FLAG:', r.name, `(${r.st}) at ${r.lat},${r.lng}`);
    geoFlags++;
  }
  const key = `${r.lat.toFixed(4)},${r.lng.toFixed(4)}`;
  if (!seenCoords.has(key)) seenCoords.set(key, []);
  seenCoords.get(key).push(r.name);
}

for (const [coord, names] of seenCoords) {
  if (names.length > 1) {
    const uniqueNames = new Set(names);
    if (uniqueNames.size < names.length) {
      // Same name at the same coordinate more than once = likely a true duplicate.
      console.log('POSSIBLE DUPLICATE:', [...uniqueNames].join(', '), 'at', coord, `(x${names.length})`);
      dupeCoords++;
    }
  }
}

console.log('\n--- Summary ---');
console.log('Total entries:', RESOURCES.length);
console.log('Geo flags (point outside its state polygon):', geoFlags);
console.log('Unknown state codes:', badState);
console.log('Bad categories:', badCategory);
console.log('Missing required fields:', missingFields);
console.log('Possible exact-duplicate entries:', dupeCoords);
