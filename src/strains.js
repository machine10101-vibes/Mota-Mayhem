export const STRAINS = {
  bd: {
    id: 'bd',
    name: 'BLUE DREAM',
    short: 'BD',
    kind: 'HYBRID',
    weeks: 9,
    flower: 1,
    veg: 1,
    stature: 1,
    frost: 1,
    seed: 0,
    bud: [0x8cc34b, 0x5d9a2f, 0xb7e070],
    leafDark: 0x2b6a2a,
    leafLight: 0x5fae3e,
    stem: 0x3f7a2e,
    stemD: 0x35682a,
  },
  gdp: {
    id: 'gdp',
    name: 'GRANDDADDY PURPLE',
    short: 'GDP',
    kind: 'INDICA',
    weeks: 9,
    flower: 1,
    veg: 1,
    stature: 1,
    frost: 1.1,
    seed: 2,
    bud: [0x9d7cc6, 0x6c4f9a, 0xc6a9e8],
    leafDark: 0x3a2a55,
    leafLight: 0x6d508c,
    stem: 0x4a3a28,
    stemD: 0x3a2c22,
  },
  gc: {
    id: 'gc',
    name: 'GREEN CRACK',
    short: 'GC',
    kind: 'SATIVA',
    weeks: 8,
    flower: 8 / 9,
    veg: 1.15,
    stature: 0.96,
    frost: 1.15,
    seed: 4,
    bud: [0x8fde3a, 0x4ea818, 0xd4f56a],
    leafDark: 0x1e6a24,
    leafLight: 0x7ed44a,
    stem: 0x3c7a2c,
    stemD: 0x2e6224,
    hair: { cream: 0xf6e2b0, orange: 0xf07818, amber: 0xd25510 },
  },
  gg: {
    id: 'gg',
    name: 'GORILLA GLUE #4',
    short: 'GG4',
    kind: 'INDICA',
    weeks: 9.5,
    flower: 9.5 / 9,
    veg: 1.05,
    stature: 1.04,
    frost: 1.7,
    seed: 6,
    bud: [0x6e8a3c, 0x445828, 0xa8b86a],
    leafDark: 0x243616,
    leafLight: 0x5a8434,
    stem: 0x4a3828,
    stemD: 0x3a2c1e,
    hair: { cream: 0xe8d2b0, orange: 0xc45a22, amber: 0xa34416 },
  },
  lis: {
    id: 'lis',
    name: 'LONG ISLAND SKUNK',
    short: 'LIS',
    kind: 'HYBRID',
    weeks: 9,
    flower: 1,
    veg: 1,
    stature: 1.05,
    frost: 1.05,
    seed: 8,
    bud: [0x2f6e32, 0x1d4e24, 0x5aa05a],
    leafDark: 0x184820,
    leafLight: 0x3e8c3e,
    stem: 0x3a6a2a,
    stemD: 0x2c5420,
    hair: { cream: 0xf0d0a0, orange: 0xd44820, amber: 0xb03018 },
  },
  uw: {
    id: 'uw',
    name: 'UW PURPLE',
    short: 'UW',
    kind: 'INDICA',
    weeks: 8,
    flower: 8 / 9,
    veg: 0.9,
    stature: 0.9,
    frost: 1.25,
    seed: 10,
    bud: [0x7a3ea8, 0x4a2078, 0xd0a0e8],
    leafDark: 0x2a5a32,
    leafLight: 0x7a58a8,
    stem: 0x4a3428,
    stemD: 0x3a281e,
    hair: { cream: 0xf0d8c0, orange: 0xc46830, amber: 0xa85020 },
  },
  bb: {
    id: 'bb',
    name: 'DJ SHORT BLUEBERRY',
    short: 'BB',
    kind: 'INDICA',
    weeks: 7.5,
    flower: 7.5 / 9,
    veg: 0.85,
    stature: 0.92,
    frost: 1.3,
    seed: 12,
    bud: [0x6a68c8, 0x3a3878, 0xb0b4ee],
    leafDark: 0x323868,
    leafLight: 0x6a62a4,
    stem: 0x5a3a62,
    stemD: 0x442848,
    hair: { cream: 0xf0e0d0, orange: 0xd07040, amber: 0xb05030 },
  },
};

export const STRAIN_IDS = ['bd', 'gdp', 'gc', 'gg', 'lis', 'uw', 'bb'];
export const STARTER_SEEDS = { bd: 10, gdp: 10, gc: 4, gg: 4, lis: 4, uw: 4, bb: 4 };

export function strainOf(id) {
  if (id && STRAINS[id]) return STRAINS[id];
  if (typeof id === 'number') return STRAINS[STRAIN_IDS[Math.abs(id) % STRAIN_IDS.length]];
  return STRAINS.bd;
}

export function strainPace(id, stage) {
  const spec = strainOf(id);
  if (stage === 2) return spec.veg || 1;
  if (stage >= 3) return spec.flower || 1;
  return 1;
}

export function starterSeeds() {
  return { ...STARTER_SEEDS };
}

export function seedTotal(seeds) {
  return STRAIN_IDS.reduce((n, id) => n + ((seeds?.[id] | 0) || 0), 0);
}


// Hybrid cultivars are stored as full trait profiles so they can be restored
// before a saved garden's seed inventory and plants are hydrated.
const BASE_STRAIN_IDS = [...STRAIN_IDS];
let hybridSerial = 0;

function blendColor(a, b) {
  const ch = (shift) => Math.round((((a >>> shift) & 255) + ((b >>> shift) & 255)) / 2);
  return (ch(16) << 16) | (ch(8) << 8) | ch(0);
}

export function registerHybridStrain(definition) {
  if (!definition || typeof definition !== 'object') return null;
  const id = String(definition.id || '');
  if (!/^hyb\d+$/.test(id)) return null;
  const parents = Array.isArray(definition.parents) ? definition.parents.slice(0, 2).map((p) => STRAINS[p] ? p : 'bd') : ['bd', 'gdp'];
  const base = strainOf(parents[0]);
  const other = strainOf(parents[1]);
  const number = Number(id.slice(3)) || 1;
  const average = (key, fallback = 1) => {
    const n = Number(definition[key]);
    return Number.isFinite(n) ? Math.max(0.65, Math.min(1.8, n)) : (base[key] + other[key]) / 2 || fallback;
  };
  const colors = (key, fallback) => {
    const value = definition[key];
    return Array.isArray(value) && value.length >= 3 ? value.slice(0, 3).map((v) => Number(v) >>> 0) : fallback;
  };
  const profile = {
    id, name: String(definition.name || `${base.name} × ${other.name}`).slice(0, 64),
    short: String(definition.short || `${base.short.slice(0, 2)}×${other.short.slice(0, 2)}`).slice(0, 8),
    kind: 'HYBRID', weeks: Number(definition.weeks) || (base.weeks + other.weeks) / 2,
    flower: average('flower'), veg: average('veg'), stature: average('stature'),
    frost: average('frost'), seed: Number.isFinite(Number(definition.seed)) ? Number(definition.seed) : (base.seed + other.seed) / 2,
    bud: colors('bud', base.bud.map((c, i) => blendColor(c, other.bud[i]))),
    leafDark: Number(definition.leafDark) >>> 0 || blendColor(base.leafDark, other.leafDark),
    leafLight: Number(definition.leafLight) >>> 0 || blendColor(base.leafLight, other.leafLight),
    stem: Number(definition.stem) >>> 0 || blendColor(base.stem, other.stem),
    stemD: Number(definition.stemD) >>> 0 || blendColor(base.stemD, other.stemD),
    parents, hybrid: true,
  };
  if (definition.hair && typeof definition.hair === 'object') profile.hair = { ...definition.hair };
  STRAINS[id] = profile;
  if (!STRAIN_IDS.includes(id)) STRAIN_IDS.push(id);
  hybridSerial = Math.max(hybridSerial, number);
  return profile;
}

export function createHybridStrain(parentAId, parentBId) {
  const a = strainOf(parentAId);
  const b = strainOf(parentBId);
  if (a.id === b.id) return null;
  const id = `hyb${++hybridSerial}`;
  const blend = (key) => (Number(a[key]) + Number(b[key])) / 2;
  const hair = a.hair || b.hair;
  const definition = {
    id, parents: [a.id, b.id],
    name: `${a.name} × ${b.name}`,
    short: `${a.short.slice(0, 2)}×${b.short.slice(0, 2)}`,
    weeks: (a.weeks + b.weeks) / 2,
    flower: blend('flower'), veg: blend('veg'), stature: blend('stature'),
    frost: blend('frost'), seed: blend('seed'),
    bud: a.bud.map((c, i) => blendColor(c, b.bud[i])),
    leafDark: blendColor(a.leafDark, b.leafDark),
    leafLight: blendColor(a.leafLight, b.leafLight),
    stem: blendColor(a.stem, b.stem), stemD: blendColor(a.stemD, b.stemD),
    ...(hair ? { hair: { ...hair } } : {}),
  };
  return registerHybridStrain(definition);
}

export function hybridDefinitions() {
  return STRAIN_IDS.filter((id) => STRAINS[id]?.hybrid).map((id) => {
    const { hybrid, ...profile } = STRAINS[id];
    return { ...profile, parents: [...profile.parents], bud: [...profile.bud], ...(profile.hair ? { hair: { ...profile.hair } } : {}) };
  });
}

export function clearHybridStrains() {
  for (const id of STRAIN_IDS.filter((key) => !BASE_STRAIN_IDS.includes(key))) delete STRAINS[id];
  STRAIN_IDS.splice(0, STRAIN_IDS.length, ...BASE_STRAIN_IDS);
  hybridSerial = 0;
}
