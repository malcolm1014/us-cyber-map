// Build regions.js for the US map: per-state polygons (STATE_GEO) plus the
// 5 super-regions (REGION_GEO), derived in-file from the state geometries.
//
// Source: US Census cartographic boundary file, 1:20,000,000 state polygons —
//   https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_20m.json
//
// Why not the original PublicaMundi us-states.json: it was too coarse. DC was a
// 5-vertex bounding box that swallowed a strip of Arlington VA, and simplified
// coastlines put real Hawaii / Puerto Rico / Rhode Island points outside their
// own state. That produced 75 false positives in the point-in-state validator;
// this source with the settings below brings it to 21, nearly all of which are
// genuine coastal/border-precision cases or actual bad coordinates in data.js.
//
// Coordinates are Douglas-Peucker simplified, because the raw Census file emits
// ~871KB verbatim. Tolerance 0.005 deg (~500 m) keeps validator accuracy
// essentially identical to the unsimplified file (21 flags vs 20) at ~1/3 the
// size (294KB).
//
// Usage: node scripts/make-regions.js <census-states.json> regions.js [tol] [precision]
const fs = require('fs');

const SRC  = process.argv[2];
const OUT  = process.argv[3];
const TOL  = Number(process.argv[4] || 0.005);   // degrees
const PREC = Number(process.argv[5] || 1000);    // 1000 => 3dp (~110 m)

// name -> [postal code, region]  ·  1 NE  2 SE  3 MW  4 SW  5 W
const STATE_META = {
  'Connecticut':['CT',1],'Maine':['ME',1],'Massachusetts':['MA',1],'New Hampshire':['NH',1],
  'Rhode Island':['RI',1],'Vermont':['VT',1],'New Jersey':['NJ',1],'New York':['NY',1],
  'Pennsylvania':['PA',1],'Delaware':['DE',1],'Maryland':['MD',1],'District of Columbia':['DC',1],
  'Virginia':['VA',2],'West Virginia':['WV',2],'Kentucky':['KY',2],'Tennessee':['TN',2],
  'North Carolina':['NC',2],'South Carolina':['SC',2],'Georgia':['GA',2],'Florida':['FL',2],
  'Alabama':['AL',2],'Mississippi':['MS',2],'Arkansas':['AR',2],'Louisiana':['LA',2],'Puerto Rico':['PR',2],
  'Ohio':['OH',3],'Michigan':['MI',3],'Indiana':['IN',3],'Illinois':['IL',3],'Wisconsin':['WI',3],
  'Minnesota':['MN',3],'Iowa':['IA',3],'Missouri':['MO',3],'North Dakota':['ND',3],
  'South Dakota':['SD',3],'Nebraska':['NE',3],'Kansas':['KS',3],
  'Texas':['TX',4],'Oklahoma':['OK',4],'New Mexico':['NM',4],'Arizona':['AZ',4],
  'Colorado':['CO',5],'Wyoming':['WY',5],'Montana':['MT',5],'Idaho':['ID',5],'Utah':['UT',5],
  'Nevada':['NV',5],'Washington':['WA',5],'Oregon':['OR',5],'California':['CA',5],
  'Alaska':['AK',5],'Hawaii':['HI',5],
};

// --- Douglas-Peucker ---------------------------------------------------------
function perpDist(p, a, b){
  const [px,py]=p, [ax,ay]=a, [bx,by]=b;
  const dx=bx-ax, dy=by-ay;
  if (dx===0 && dy===0) return Math.hypot(px-ax, py-ay);
  const t = ((px-ax)*dx + (py-ay)*dy) / (dx*dx+dy*dy);
  const cx = ax + Math.max(0,Math.min(1,t))*dx;
  const cy = ay + Math.max(0,Math.min(1,t))*dy;
  return Math.hypot(px-cx, py-cy);
}
function dp(pts, tol){
  if (pts.length < 3) return pts;
  let maxD=0, idx=0;
  for (let i=1;i<pts.length-1;i++){
    const d = perpDist(pts[i], pts[0], pts[pts.length-1]);
    if (d>maxD){ maxD=d; idx=i; }
  }
  if (maxD <= tol) return [pts[0], pts[pts.length-1]];
  return dp(pts.slice(0,idx+1), tol).slice(0,-1).concat(dp(pts.slice(idx), tol));
}
// Simplify a closed ring, keeping it closed and never collapsing below a triangle.
function simplifyRing(ring, tol){
  if (ring.length <= 5) return ring;
  const open = ring.slice(0, -1);
  let out = dp(open, tol);
  if (out.length < 3) out = open.filter((_,i)=> i % Math.ceil(open.length/3) === 0);
  return out.concat([out[0]]);
}

const round = c => Array.isArray(c[0]) ? c.map(round)
  : [Math.round(c[0]*PREC)/PREC, Math.round(c[1]*PREC)/PREC];

// Alaska's Aleutians cross the antimeridian. Census data expresses them as
// positive (east) longitudes, which makes Leaflet draw them on the far side of
// the world map with a band stretching across it. Shift east-hemisphere points
// to their continuous negative equivalents (e.g. 179.8 -> -180.2) so the state
// stays in one piece — this is what the previous regions.js did.
function unwrapAntimeridian(coords){
  const pts = coords.flat(2);
  const hasFarEast = pts.some(p => p[0] > 150);
  const hasFarWest = pts.some(p => p[0] < -150);
  if (!(hasFarEast && hasFarWest)) return coords;
  const shift = c => Array.isArray(c[0]) ? c.map(shift)
    : [c[0] > 0 ? c[0] - 360 : c[0], c[1]];
  return shift(coords);
}

// Census cartographic files are latin-1, not utf-8.
const src = JSON.parse(fs.readFileSync(SRC, 'latin1'));

const states = [];
const missing = [];
for (const f of src.features){
  const pname = f.properties.name || f.properties.NAME;   // accept either source schema
  const meta = STATE_META[pname];
  if (!meta){ missing.push(pname); continue; }
  const g = f.geometry;
  const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  const simplified = polys
    .map(poly => poly.map(ring => simplifyRing(ring, TOL)).filter(r => r.length >= 4))
    .filter(poly => poly.length > 0);
  states.push({
    type:'Feature',
    properties:{ code: meta[0], name: pname, region: meta[1] },
    geometry:{ type:'MultiPolygon', coordinates: round(unwrapAntimeridian(simplified)) }
  });
}
if (missing.length) console.error('UNASSIGNED:', missing.join(', '));
states.sort((a, b) => a.properties.code.localeCompare(b.properties.code));

const out = `/* Generated by scripts/make-regions.js from the US Census cartographic
   boundary file gz_2010_us_040_00_20m.json (Douglas-Peucker simplified).
   STATE_GEO — one MultiPolygon per state/territory (code, name, region).
   REGION_GEO — the 5 super-regions, derived below by grouping states. */
const STATE_GEO = ${JSON.stringify({type:'FeatureCollection', features:states})};
const REGION_GEO = { type:'FeatureCollection', features:[1,2,3,4,5].map(id => ({
  type:'Feature', properties:{ region:id },
  geometry:{ type:'MultiPolygon',
    coordinates: STATE_GEO.features.filter(f => f.properties.region === id)
      .flatMap(f => f.geometry.coordinates) }
})) };
`;
fs.writeFileSync(OUT, out);
const verts = states.reduce((s,f)=>s+f.geometry.coordinates.flat(2).length, 0);
console.log('wrote', OUT, (out.length/1024).toFixed(0)+'KB,', states.length, 'states,', verts, 'vertices');
