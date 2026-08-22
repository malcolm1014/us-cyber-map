// Diffs our "ctf" (and con-hosted CTF) entries against CTFtime's public API
// for onsite US events in a rolling date window. CTFtime's site itself isn't
// open source, but its API is free/unauthenticated — confirmed via
// tomek7667/openctf's client: GET /api/v1/events/?limit=N&start=UNIX&finish=UNIX,
// filter onsite === true.
//
// Read-only — prints candidates, doesn't touch data.js. CTFtime's `location`
// field is free text (not always a clean "City, ST, USA"), so results need a
// human read, not blind trust — this just narrows down what to go check.
//
// Usage: node scripts/diff-ctftime.js [daysAhead=180]

const fs = require('fs');
const path = require('path');

function loadVars(relPath, ...names) {
  const src = fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8').replace(/\bconst\b/g, 'var');
  const fn = new Function(src + `\nreturn {${names.join(',')}};`);
  return fn();
}

const daysAhead = parseInt(process.argv[2], 10) || 180;
const now = Math.floor(Date.now() / 1000);
const finish = now + daysAhead * 86400;
// CTFtime also lists events that started recently and may still be relevant
// to a "just happened, worth checking" pass — look 30 days back too.
const start = now - 30 * 86400;

const API_URL = `https://ctftime.org/api/v1/events/?limit=100&start=${start}&finish=${finish}`;

const US_HINT_RE = /\b(USA|United States|U\.S\.A?\.?)\b/i;
// A rough but useful state-abbreviation catcher for CTFtime's free-text location field.
const STATE_ABBR_RE = /,\s*([A-Z]{2})\b/;

async function main() {
  const res = await fetch(API_URL, { headers: { 'User-Agent': 'us-cyber-map-research/1.0' } });
  if (!res.ok) throw new Error(`CTFtime API fetch failed: ${res.status} ${res.statusText}`);
  const events = await res.json();

  const onsiteUS = events.filter(e => e.onsite && e.location && (US_HINT_RE.test(e.location) || STATE_ABBR_RE.test(e.location)));

  const { RESOURCES } = loadVars('data.js', 'RESOURCES');
  const ours = RESOURCES.filter(r => r.category === 'ctf' || (r.category === 'con' && /ctf/i.test(r.name + ' ' + (r.notes || ''))));
  const ourNamesNorm = ours.map(r => r.name.toLowerCase().replace(/[^a-z0-9]/g, ''));

  console.log(`CTFtime onsite events in window (${new Date(start*1000).toISOString().slice(0,10)} to ${new Date(finish*1000).toISOString().slice(0,10)}): ${events.filter(e=>e.onsite).length}`);
  console.log(`...of those, US-located (heuristic): ${onsiteUS.length}`);
  console.log(`Our CTF-relevant entries: ${ours.length}`);

  const candidates = onsiteUS.filter(e => {
    const key = e.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    return !ourNamesNorm.some(n => n.includes(key.slice(0, 8)) || key.includes(n.slice(0, 8)));
  });

  console.log(`\nOnsite US CTFtime events not obviously in our data (${candidates.length}):`);
  for (const e of candidates) {
    const date = new Date(e.start).toISOString().slice(0, 10);
    console.log(`  - ${e.title} — ${e.location} — starts ${date} — ${e.url || e.ctftime_url || ''}`);
  }
  if (candidates.length === 0) console.log('  (none in this window)');

  console.log('\nNote: CTFtime titles/locations are free text — verify each candidate (venue, still active,');
  console.log('not already tracked as part of a larger con) before adding to data.js.');
}

main().catch(err => { console.error(err); process.exit(1); });
