// Check every resource's `url` for basic reachability, with a low enough
// concurrency and a browser User-Agent to avoid the false-failure trap this
// project has hit repeatedly: a high-concurrency sweep or a bare curl UA
// gets rate-limited or WAF-blocked and reports "dead" links that are
// actually fine.
//
// FAILURES HERE ARE SUSPECTS, NOT VERDICTS. Past sessions established:
//   - A 403 is almost always a WAF blocking the checker, not a missing page.
//   - Re-check failures sequentially (this script already does, at low
//     concurrency) before touching data.js.
//   - Only treat a link as confirmed-dead if it fails the SAME way (usually
//     ENOTFOUND/NXDOMAIN) from two independent tools/paths — e.g. this
//     script AND a manual `curl` from a different network path. A single
//     script run is not enough to justify blanking a url.
//
// Usage: node scripts/check-urls.js [category]
//   node scripts/check-urls.js            -> checks every resource's url
//   node scripts/check-urls.js maker      -> just the maker category

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function loadVars(relPath, ...names) {
  const src = fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8').replace(/\bconst\b/g, 'var');
  const fn = new Function(src + `\nreturn {${names.join(',')}};`);
  return fn();
}

const { RESOURCES } = loadVars('data.js', 'RESOURCES');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const CONCURRENCY = 4;       // stay low — this is what avoids the false-failure trap
const TIMEOUT_MS = 12000;

function checkOne(url) {
  return new Promise(resolve => {
    let u;
    try { u = new URL(url); } catch { return resolve({ url, ok: false, reason: 'malformed URL' }); }
    const lib = u.protocol === 'http:' ? http : https;
    const req = lib.request(u, { method: 'HEAD', timeout: TIMEOUT_MS, headers: { 'User-Agent': UA } }, res => {
      // Many sites don't support HEAD — treat any response (even a WAF 403) as "reachable, needs a human look."
      resolve({ url, ok: res.statusCode < 500, status: res.statusCode });
      res.resume();
    });
    req.on('timeout', () => { req.destroy(); resolve({ url, ok: false, reason: 'timeout' }); });
    req.on('error', e => resolve({ url, ok: false, reason: e.code || e.message }));
    req.end();
  });
}

async function main() {
  const filterCat = process.argv[2];
  const targets = RESOURCES.filter(r => r.url && (!filterCat || r.category === filterCat));
  console.log(`Checking ${targets.length} URLs at concurrency ${CONCURRENCY}...\n`);

  const results = [];
  let i = 0;
  async function worker() {
    while (i < targets.length) {
      const r = targets[i++];
      const res = await checkOne(r.url);
      results.push({ name: r.name, ...res });
      if (!res.ok) console.log('SUSPECT:', r.name, '|', r.url, '|', res.reason || res.status);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const failed = results.filter(r => !r.ok);
  console.log(`\n--- ${failed.length}/${results.length} suspects (re-check these manually before editing data.js) ---`);
  const nxdomain = failed.filter(r => r.reason === 'ENOTFOUND');
  if (nxdomain.length) {
    console.log(`\n${nxdomain.length} of those are NXDOMAIN (no DNS record) — the closest this script gets to a real verdict,`);
    console.log('but still confirm with a second tool/network path before blanking a url:');
    nxdomain.forEach(r => console.log('  -', r.name, '|', r.url));
  }
}

main();
