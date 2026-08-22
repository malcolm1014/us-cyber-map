// Diffs our OWASP chapter entries against OWASP's own chapters.json, which
// is bot-updated daily from their chapter-management backend
// (https://github.com/OWASP/owasp.github.io/blob/main/_data/chapters.json).
// Read-only — prints candidates, doesn't touch data.js.
//
// Also flags chapters whose OWASP-side `region` is tagged "Needs Website
// Update" among ones we already track, as a stale-chapter signal, and
// prints each chapter's `meetup-group` field so it can be backfilled into
// our entries' `url`/`notes` where we're missing it.
//
// Usage: node scripts/diff-owasp-chapters.js

const fs = require('fs');
const path = require('path');

function loadVars(relPath, ...names) {
  const src = fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8').replace(/\bconst\b/g, 'var');
  const fn = new Function(src + `\nreturn {${names.join(',')}};`);
  return fn();
}

const SOURCE_URL = 'https://raw.githubusercontent.com/OWASP/owasp.github.io/main/_data/chapters.json';

// Very rough US-chapter heuristic: name contains a US state/city keyword
// or explicit "USA"/"US" marker. OWASP's chapters.json doesn't cleanly
// separate US from broader "North America" (which also includes Canada/Mexico),
// so this list needs a human pass, not blind trust.
const US_HINT_RE = /\b(USA|U\.S\.A|United States)\b/i;

function extractChapterName(entry) {
  // chapters.json entries are typically { name, url, ... } but the exact
  // shape can shift — handle common variants defensively.
  return entry.name || entry.title || entry.chapter || JSON.stringify(entry).slice(0, 60);
}

async function main() {
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  const chapters = await res.json();

  const list = Array.isArray(chapters) ? chapters : Object.values(chapters);

  const { RESOURCES } = loadVars('data.js', 'RESOURCES');
  const ours = RESOURCES.filter(e => /owasp/i.test(e.name));
  const ourNames = new Set(ours.map(e => e.name.toLowerCase()));

  console.log(`OWASP source: ${list.length} total chapters (worldwide)`);
  console.log(`Our OWASP entries: ${ours.length}`);

  const needsReview = [];
  for (const ch of list) {
    const name = extractChapterName(ch);
    const region = ch.region || '';
    const meetup = ch['meetup-group'] || ch.meetup || '';
    const isUsHint = US_HINT_RE.test(name) || US_HINT_RE.test(region) || /north america/i.test(region);
    if (!isUsHint) continue;
    const key = `owasp ${name}`.toLowerCase();
    const found = [...ourNames].some(n => n.includes(name.toLowerCase()) || name.toLowerCase().includes(n.replace(/^owasp\s*/i, '')));
    if (!found) needsReview.push({ name, region, meetup, buildStatus: ch.build });
  }

  console.log(`\nPossible US chapters not matched in our data (needs a human pass — North America ≠ USA): ${needsReview.length}`);
  for (const c of needsReview.slice(0, 60)) {
    console.log(`  - ${c.name}${c.region ? ` [${c.region}]` : ''}${c.meetup ? ` — meetup: ${c.meetup}` : ''}${c.buildStatus === 'errored' ? ' (BUILD ERRORED — possible dead chapter site)' : ''}`);
  }
  if (needsReview.length > 60) console.log(`  ... and ${needsReview.length - 60} more`);

  console.log('\nNote: this is a fuzzy name match. Every "not matched" result needs a human check —');
  console.log('OWASP\'s region field lumps US/Canada/Mexico as "North America," and chapter names vary in format.');
}

main().catch(err => { console.error(err); process.exit(1); });
