// Diffs our DEF CON Group (DCG) entries against DefconParrot/DefconGroups,
// the community-maintained source of truth for DCG numbers worldwide
// (https://github.com/DefconParrot/DefconGroups). Read-only — prints gaps,
// doesn't touch data.js.
//
// Run this at the start of every future data-sweep instead of a one-time
// pull: DCGs get added there via community PR between our sweeps.
//
// Usage: node scripts/diff-defcon-groups.js

const fs = require('fs');
const path = require('path');

function loadVars(relPath, ...names) {
  const src = fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8').replace(/\bconst\b/g, 'var');
  const fn = new Function(src + `\nreturn {${names.join(',')}};`);
  return fn();
}

const SOURCE_URL = 'https://raw.githubusercontent.com/DefconParrot/DefconGroups/main/DCGroups/DCG_USA.md';

// Matches markdown table rows like: | 83 | DC509  |Spokane, Washington USA | ...
const ROW_RE = /^\|\s*\d+\s*\|\s*(DC[\w.]+)\s*\|\s*([^|]+?)\s*\|/gm;

function normalizeId(id) {
  // The source sometimes prefixes "DCG" instead of "DC" for the same group — normalize.
  return id.replace(/^DCG/i, 'DC').toUpperCase();
}

async function main() {
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  const md = await res.text();

  const sourceGroups = new Map(); // normalizedId -> { id, location }
  let m;
  while ((m = ROW_RE.exec(md))) {
    const id = normalizeId(m[1].trim());
    const location = m[2].trim();
    if (!/usa$/i.test(location) && !/,\s*[A-Z]{2}\s*$/.test(location) && !/puerto rico/i.test(location)) continue; // US-only heuristic
    sourceGroups.set(id, { id, location });
  }

  const { RESOURCES } = loadVars('data.js', 'RESOURCES');
  const ourIds = new Set();
  for (const e of RESOURCES) {
    const m2 = e.name.match(/\b(DC[\w.]+)\b/i);
    if (m2) ourIds.add(normalizeId(m2[1]));
  }

  const missing = [...sourceGroups.values()].filter(g => !ourIds.has(g.id));

  console.log(`Source US-ish groups: ${sourceGroups.size}`);
  console.log(`Our DCG entries matched by ID: ${ourIds.size}`);
  console.log(`Missing from data.js: ${missing.length}`);
  for (const g of missing) console.log(`  - ${g.id} — ${g.location}`);
  if (missing.length === 0) console.log('  (none — we are current with the source)');
  console.log('\nNote: this is a name/ID match only. Verify each before adding — see project memory for state-name-collision traps.');
}

main().catch(err => { console.error(err); process.exit(1); });
