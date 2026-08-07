// Report enrichment coverage per category: how many resources have a real
// named organizer/officer (`org`) or real dated events/talks, vs. how many
// are still bare listings.
//
// This is a LOWER BOUND, not an exact count — a resource can be genuinely
// improved (repointed from a generic homepage to its real program subpage,
// a specific meeting time added to `when`, a factual detail added to
// `notes`) without ever setting `org` or `events`/`talks`. Past sessions
// hand-rolled slightly different regex heuristics each time and got
// inconsistent numbers as a result; this script is the one source of truth
// going forward — extend it here, not ad hoc in a `node -e`, so counts stay
// comparable session to session.
//
// Usage: node scripts/coverage.js [category]
//   node scripts/coverage.js            -> table for every category
//   node scripts/coverage.js meetup     -> just meetup, plus a sample of
//                                          un-enriched entries to work on next

const fs = require('fs');
const path = require('path');

function loadVars(relPath, ...names) {
  const src = fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8').replace(/\bconst\b/g, 'var');
  const fn = new Function(src + `\nreturn {${names.join(',')}};`);
  return fn();
}

const { RESOURCES } = loadVars('data.js', 'RESOURCES');

const NAMED_CONTACT_RE = /contact:\s*["']?[a-z]|director|president|founder|founded\s+(?:in\s+)?(?:[a-z]+\s+)?(?:\d{4}\s+)?by\s+[a-z]|co-founded\s+.*\s+by\s+[a-z]|coordinator|instructor|organizer|Board:/i;

function isEnriched(r) {
  return Boolean(r.org)
    || (r.events && r.events.length > 0)
    || (r.talks && r.talks.length > 0)
    || (r.certs && r.certs.length > 0)
    || NAMED_CONTACT_RE.test(r.notes || '');
}

const filterCat = process.argv[2];
const cats = {};
for (const r of RESOURCES) {
  cats[r.category] = cats[r.category] || { total: 0, enriched: 0 };
  cats[r.category].total++;
  if (isEnriched(r)) cats[r.category].enriched++;
}

const order = ['school', 'meetup', 'youth', 'maker', 'con', 'ctf', 'library', 'gov', 'hamradio', 'testing', 'accelerator', 'gadgets'];
console.log('Category'.padEnd(10), 'Enriched'.padEnd(12), 'Pct');
for (const c of order) {
  if (!cats[c]) continue;
  const { enriched, total } = cats[c];
  console.log(c.padEnd(10), `${enriched}/${total}`.padEnd(12), `${((100 * enriched) / total).toFixed(0)}%`);
}

if (filterCat) {
  const un = RESOURCES.filter(r => r.category === filterCat && !isEnriched(r) && r.url);
  console.log(`\n${un.length} un-enriched "${filterCat}" entries with a URL (sample of 20):`);
  const step = Math.max(1, Math.floor(un.length / 20));
  for (let i = 0; i < un.length; i += step) {
    console.log('-', un[i].name, '|', un[i].city, '|', un[i].url);
  }
}
