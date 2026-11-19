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
