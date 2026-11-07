export const STRAINS = {
  bd: {
    id: 'bd',
    name: 'BLUE DREAM',
    short: 'BD',
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
    seed: 2,
    bud: [0x9d7cc6, 0x6c4f9a, 0xc6a9e8],
    leafDark: 0x3a2a55,
    leafLight: 0x6d508c,
    stem: 0x4a3a28,
    stemD: 0x3a2c22,
  },
};

export const STRAIN_IDS = ['bd', 'gdp'];
export const STARTER_SEEDS = { bd: 10, gdp: 10 };

export function strainOf(id) {
  if (id && STRAINS[id]) return STRAINS[id];
  if (typeof id === 'number') return id % 2 === 0 ? STRAINS.bd : STRAINS.gdp;
  return STRAINS.bd;
}

export function starterSeeds() {
  return { bd: STARTER_SEEDS.bd, gdp: STARTER_SEEDS.gdp };
}

export function seedTotal(seeds) {
  return STRAIN_IDS.reduce((n, id) => n + ((seeds?.[id] | 0) || 0), 0);
}
