// Build regions.js for the US map: 5 super-regions as MultiPolygons
// assembled from state polygons (interior state lines render faintly — intentional).
const fs = require('fs');
const src = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

const REGION_OF = {
  // 1 Northeast
  'Connecticut':1,'Maine':1,'Massachusetts':1,'New Hampshire':1,'Rhode Island':1,'Vermont':1,
  'New Jersey':1,'New York':1,'Pennsylvania':1,'Delaware':1,'Maryland':1,'District of Columbia':1,
  // 2 Southeast
  'Virginia':2,'West Virginia':2,'Kentucky':2,'Tennessee':2,'North Carolina':2,'South Carolina':2,
  'Georgia':2,'Florida':2,'Alabama':2,'Mississippi':2,'Arkansas':2,'Louisiana':2,'Puerto Rico':2,
  // 3 Midwest
  'Ohio':3,'Michigan':3,'Indiana':3,'Illinois':3,'Wisconsin':3,'Minnesota':3,'Iowa':3,'Missouri':3,
  'North Dakota':3,'South Dakota':3,'Nebraska':3,'Kansas':3,
  // 4 Southwest
  'Texas':4,'Oklahoma':4,'New Mexico':4,'Arizona':4,
  // 5 West
  'Colorado':5,'Wyoming':5,'Montana':5,'Idaho':5,'Utah':5,'Nevada':5,
  'Washington':5,'Oregon':5,'California':5,'Alaska':5,'Hawaii':5,
};

const groups = {1:[],2:[],3:[],4:[],5:[]};
const missing = [];
for (const f of src.features){
  const r = REGION_OF[f.properties.name];
  if (!r){ missing.push(f.properties.name); continue; }
  const g = f.geometry;
  if (g.type === 'Polygon') groups[r].push(g.coordinates);
  else if (g.type === 'MultiPolygon') groups[r].push(...g.coordinates);
}
if (missing.length) console.error('UNASSIGNED:', missing.join(', '));

// Trim coordinate precision to 3 decimals (~110 m) to keep the file small.
const round = c => Array.isArray(c[0]) ? c.map(round) : [Math.round(c[0]*1000)/1000, Math.round(c[1]*1000)/1000];

const fc = {
  type:'FeatureCollection',
  features: Object.entries(groups).map(([id, polys]) => ({
    type:'Feature',
    properties:{ region: Number(id) },
    geometry:{ type:'MultiPolygon', coordinates: polys.map(round) }
  }))
};

const out = '/* US super-region borders — generated from PublicaMundi us-states.json\n' +
  '   (state polygons grouped per region; regenerate with scripts/make-regions.js). */\n' +
  'const REGION_GEO = ' + JSON.stringify(fc) + ';\n';
fs.writeFileSync(process.argv[3], out);
console.log('wrote', process.argv[3], (out.length/1024).toFixed(0)+'KB',
  Object.entries(groups).map(([k,v])=>k+':'+v.length+'polys').join(' '));
