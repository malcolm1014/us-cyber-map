// Data-quality audit for a set of categories: stale dated events/talks,
// near-duplicate names (catches variant-spelling dupes that validate.js's
// exact-coordinate check misses), and thin entries with no verifiable
// detail (no org, no events/talks, no named contact in notes) that are
// candidates for a future enrichment pass.
//
// This is a read-only report — it doesn't touch data.js. Cross-reference
// its output against the project's standing rules (a flag is a candidate
// to investigate, not an automatic fix) before editing anything.
//
// Usage: node scripts/audit.js [category,category,...]

const fs = require('fs');
const path = require('path');

function loadVars(relPath, ...names) {
  const src = fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8').replace(/\bconst\b/g, 'var');
  const fn = new Function(src + `\nreturn {${names.join(',')}};`);
  return fn();
}

const { RESOURCES } = loadVars('data.js', 'RESOURCES');
const filterCats = process.argv[2] ? process.argv[2].split(',') : null;
const targets = RESOURCES.filter(r => !filterCats || filterCats.includes(r.category));

const TODAY = new Date(); TODAY.setHours(0, 0, 0, 0);
function parseISO(s) { return new Date(s + 'T12:00:00'); }

// --- 1. Stale `next` dates ---
const staleNext = targets.filter(r => r.next && parseISO(r.next) < TODAY);

// --- 2. Old-year mentions in `when` free text (2023/2024/2025 with no 2026/2027) ---
const OLD_YEAR_RE = /\b(202[0-5])\b/;
const CURRENT_YEAR_RE = /\b(2026|2027)\b/;
const staleWhen = targets.filter(r => r.when && OLD_YEAR_RE.test(r.when) && !CURRENT_YEAR_RE.test(r.when));

// --- 3. Near-duplicate names within the same category (normalized fuzzy match) ---
function normalize(name) {
  return name.toLowerCase()
    .replace(/[—–-]/g, ' ')
    .replace(/\([^)]*\)/g, '')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\b(inc|llc|corp|corporation|the|of|center|centre|training|centers|training centers)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
const byCat = {};
for (const r of targets) {
  (byCat[r.category] = byCat[r.category] || []).push(r);
}
const fuzzyDupes = [];
for (const [cat, list] of Object.entries(byCat)) {
  const seen = {};
  for (const r of list) {
    const key = normalize(r.name);
    if (!key) continue;
    (seen[key] = seen[key] || []).push(r);
  }
  for (const [key, group] of Object.entries(seen)) {
    if (group.length > 1) fuzzyDupes.push({ cat, key, names: group.map(r => `${r.name} (${r.city})`) });
  }
}

// --- 3b. Coordinate-proximity + name-prefix-overlap dupes (catches cases like
// "University of Nevada, Reno" vs "University of Nevada, Reno — Cybersecurity
// Center" that normalize() alone misses because it's a suffix, not noise). ---
function haversineKm(a, b) {
  const R = 6371, toR = d => d * Math.PI / 180;
  const dLat = toR(b.lat - a.lat), dLng = toR(b.lng - a.lng);
  const s = Math.sin(dLat/2)**2 + Math.cos(toR(a.lat)) * Math.cos(toR(b.lat)) * Math.sin(dLng/2)**2;
  return 2 * R * Math.asin(Math.sqrt(s));
}
function sharesPrefix(a, b) {
  const wa = normalize(a).split(' '), wb = normalize(b).split(' ');
  const n = Math.min(wa.length, wb.length, 3);
  if (n < 2) return false;
  return wa.slice(0, n).join(' ') === wb.slice(0, n).join(' ');
}
const proxDupes = [];
for (const [cat, list] of Object.entries(byCat)) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const a = list[i], b = list[j];
      if (a.name === b.name) continue; // already caught by exact-key pass
      if (haversineKm(a, b) < 3 && sharesPrefix(a.name, b.name)) {
        proxDupes.push({ cat, pair: [`${a.name} (${a.city})`, `${b.name} (${b.city})`] });
      }
    }
  }
}

// --- 4. Thin entries: no org, no events/talks, no named-contact pattern in notes ---
const NAMED_CONTACT_RE = /contact:\s*["']?[a-z]|director|president|founder|founded\s+(?:in\s+)?(?:[a-z]+\s+)?(?:\d{4}\s+)?by\s+[a-z]|co-founded\s+.*\s+by\s+[a-z]|coordinator|instructor|organizer|Board:/i;
function isEnriched(r) {
  return Boolean(r.org) || (r.events && r.events.length > 0) || (r.talks && r.talks.length > 0)
    || (r.certs && r.certs.length > 0) || NAMED_CONTACT_RE.test(r.notes || '');
}
const thin = targets.filter(r => !isEnriched(r));

console.log('=== AUDIT:', filterCats ? filterCats.join(',') : 'ALL', '===');
console.log('Total entries checked:', targets.length);

console.log(`\n--- Stale \`next\` date (${staleNext.length}) ---`);
staleNext.forEach(r => console.log(' ', r.name, '|', r.category, '|', r.next));

console.log(`\n--- Old year in \`when\` text, no current year (${staleWhen.length}) ---`);
staleWhen.forEach(r => console.log(' ', r.name, '|', r.category, '|', r.when));

console.log(`\n--- Near-duplicate names within same category (${fuzzyDupes.length} groups) ---`);
fuzzyDupes.forEach(d => console.log(' ', `[${d.cat}]`, d.names.join('  <->  ')));

console.log(`\n--- Coordinate-proximity + name-prefix dupes (${proxDupes.length} pairs) ---`);
proxDupes.forEach(d => console.log(' ', `[${d.cat}]`, d.pair.join('  <->  ')));

console.log(`\n--- Thin entries (no org/events/talks/certs/named-contact) (${thin.length}/${targets.length} = ${((100*thin.length)/targets.length).toFixed(0)}%) ---`);
console.log('  (sample of 30, not printing all — these are enrichment candidates, not necessarily errors)');
thin.slice(0, 30).forEach(r => console.log('  -', r.name, '|', r.category, '|', r.city));
