import { VoxelModel, hash3, mulberry, mix, shade } from './voxel.js';

export const PVS = 0.05;

const BUD = [
  [0x8cc34b, 0x5d9a2f, 0xb7e070],
  [0x62a346, 0x3e7a2c, 0x88c45c],
  [0x9d7cc6, 0x6c4f9a, 0xc6a9e8],
  [0xb3b64c, 0x868c31, 0xd6d870],
];
const LEAF_FINGERS = [-1.25, -0.8, -0.4, 0, 0.4, 0.8, 1.25];
const LEAF_LENS = [0.45, 0.72, 0.92, 1, 0.92, 0.72, 0.45];

function leaf(m, bx, by, bz, ang, size, droop, nf, dark, light) {
  const start = nf >= 7 ? 0 : nf === 5 ? 1 : 2;
  const end = nf >= 7 ? 7 : nf === 5 ? 6 : 5;
  for (let i = start; i < end; i++) {
    const a = ang + LEAF_FINGERS[i];
    const len = size * LEAF_LENS[i];
    const px = -Math.sin(a);
    const pz = Math.cos(a);
    const center = i >= 2 && i <= 4;
    for (let t = 0.6; t <= len; t += 0.5) {
      const x = bx + Math.cos(a) * t;
      const z = bz + Math.sin(a) * t;
      const y = by + t * 0.32 - t * t * droop * 0.03;
      const col = mix(dark, light, t / len);
      m.set(x, y, z, col, 0.07);
      if (size > 5 && t > 1.2 && t < len * 0.85) m.set(x + px * 0.8, y, z + pz * 0.8, col, 0.07);
      if (center && size > 7 && t > 1.6 && t < len * 0.75) m.set(x - px * 0.8, y, z - pz * 0.8, col, 0.07);
      if (center && size > 9 && t > 3 && t < len * 0.6) m.set(x, y + 1, z, shade(col, 1.12), 0.07);
    }
  }
}

function line(m, x0, y0, z0, x1, y1, z1, col, thick = 1) {
  const n = Math.ceil(Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0), Math.abs(z1 - z0)) * 1.5) + 1;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = Math.round(x0 + (x1 - x0) * t);
    const y = Math.round(y0 + (y1 - y0) * t);
    const z = Math.round(z0 + (z1 - z0) * t);
    if (thick === 2) m.box(x - 1, y, z - 1, x + 1, y + 1, z + 1, col, 0.05);
    else m.set(x, y, z, col, 0.05);
  }
}

function cola(m, cx, cy, cz, len, rad, pal, R, opt) {
  const cells = new Map();
  for (let y = 0; y < len; y++) {
    const t = (y + 0.5) / len;
    const prof = Math.pow(Math.sin(Math.PI * Math.min(1, t * 0.9 + 0.06)), 0.65);
    const r = rad * prof;
    const ox = Math.round(cx + (opt.leanX || 0) * t * len);
    const oz = Math.round(cz + (opt.leanZ || 0) * t * len);
    const rr = Math.ceil(r + 1);
    for (let dx = -rr; dx <= rr; dx++)
      for (let dz = -rr; dz <= rr; dz++) {
        const d = Math.hypot(dx, dz);
        const nz = hash3(dx + ox, y + cy, dz + oz, 5) - 0.5;
        if (d <= r + nz * 1.1 && (r > 0.6 || d < 0.6)) {
          const col = nz > 0.2 ? pal[2] : nz < -0.25 ? pal[1] : pal[0];
          const key = `${ox + dx},${y + cy},${oz + dz}`;
          cells.set(key, [ox + dx, y + cy, oz + dz, mix(pal[1], col, 0.35 + t * 0.65)]);
        }
      }
  }
  for (const [, c] of cells) m.set(c[0], c[1], c[2], c[3], 0.06);
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (const [, c] of cells) {
    const [x, y, z] = c;
    const surface = !m.has(x + 1, y, z) || !m.has(x - 1, y, z) || !m.has(x, y, z + 1) || !m.has(x, y, z - 1) || !m.has(x, y + 1, z);
    if (!surface) continue;
    const rv = R();
    if (rv < opt.pistil * 0.55) m.set(x, y, z, R() < 0.5 ? 0xf08a2e : 0xd9731f, 0.05);
    else if (rv < opt.pistil * 0.55 + opt.frost * 1.7) m.set(x, y, z, mix(c[3], 0xf4f9ea, 0.62), 0.03);
    if (R() < opt.pistil * 0.4) {
      const [dx, dz] = dirs[Math.floor(R() * 4)];
      if (!m.has(x + dx, y, z + dz)) m.set(x + dx, y, z + dz, 0xe27a24, 0.05);
    }
  }
}

export function buildPlant(stage, variant) {
  const R = mulberry(stage * 977 + variant * 131 + 7);
  const m = new VoxelModel();
  const pal = BUD[variant % 4];
  const leafDark = variant === 2 ? 0x2a5a30 : 0x2b6a2a;
  const leafLight = variant === 3 ? 0x6bb040 : 0x5fae3e;
  const stem = 0x3f7a2e;
  const stemD = 0x35682a;

  if (stage === 0) {
    line(m, 0, 0, 0, 0, 3, 0, 0x7ec24f);
    m.box(-2, 3, 0, 0, 4, 1, 0x9bd66a, 0.05);
    m.box(1, 3, 0, 3, 4, 1, 0x9bd66a, 0.05);
    m.set(0, 4, 0, 0xa9e078, 0.04);
    m.set(-3, 3, 0, 0x86c458, 0.04);
    m.set(3, 3, 0, 0x86c458, 0.04);
    return m;
  }

  if (stage === 1) {
    line(m, 0, 0, 0, 0, 8, 0, stem);
    leaf(m, 0, 3, 0, 0, 5, 1.2, 5, leafDark, leafLight);
    leaf(m, 0, 3, 0, Math.PI, 5, 1.2, 5, leafDark, leafLight);
    leaf(m, 0, 5, 0, Math.PI / 2, 5, 1.2, 5, leafDark, leafLight);
    leaf(m, 0, 5, 0, -Math.PI / 2, 5, 1.2, 5, leafDark, leafLight);
    for (let i = 0; i < 4; i++) leaf(m, 0, 8, 0, Math.PI / 4 + (i * Math.PI) / 2, 4, 0.2, 3, leafDark, leafLight);
    return m;
  }

  const H = [0, 0, 17, 28, 32][stage];
  line(m, 0, 0, 0, 0, H, 0, stemD, 2);
  const flower = stage >= 3;
  const nodeStep = flower ? 3 : 2.5;
  let k = 0;
  for (let y = 3; y < H - (flower ? 6 : 1); y += nodeStep) {
    const t = y / H;
    const size = (flower ? 14 : 11) - t * (flower ? 6 : 5);
    const nf = size > 7 ? 7 : 5;
    const a0 = k * (Math.PI / 2) + R() * 0.5;
    for (let s = 0; s < 2; s++)
      leaf(m, s ? 1 : -1, y, 0, a0 + s * Math.PI, size, 1.0 + R() * 0.8, nf, leafDark, leafLight);
    k++;
  }

  const opt = {
    pistil: stage === 4 ? 0.1 : 0.06,
    frost: stage === 4 ? 0.1 : 0.0,
  };

  if (!flower) {
    for (let i = 0; i < 6; i++) leaf(m, 0, H, 0, (i * Math.PI) / 3 + R(), 5, -0.6, 5, leafDark, leafLight);
    for (const y of [8, 12]) {
      for (let s = 0; s < 2; s++) {
        const a = (y * 0.5 + s * Math.PI) + R() * 0.6;
        const ex = Math.cos(a) * 6;
        const ez = Math.sin(a) * 6;
        line(m, 0, y, 0, ex, y + 3, ez, stem);
        for (let i = 0; i < 3; i++) leaf(m, ex, y + 3, ez, a + (i - 1) * 1.1, 5, 0.6, 5, leafDark, leafLight);
      }
    }
    return m;
  }

  const sc = stage === 4 ? 1 : 0.85;
  const brs = flower ? [11, 15, 19, 23] : [];
  let bi = 0;
  for (const y of brs) {
    for (let s = 0; s < 2; s++) {
      const a = bi * 1.9 + s * Math.PI + R() * 0.4;
      const reach = (7 + (y < 16 ? 2 : 0)) * sc;
      const ex = Math.cos(a) * reach;
      const ez = Math.sin(a) * reach;
      line(m, 0, y, 0, ex, y + 4, ez, stem);
      cola(m, Math.round(ex), y + 4, Math.round(ez), Math.round((stage === 4 ? 9 : 7) - bi * 0.6), stage === 4 ? 3 : 2.5, pal, R, { ...opt, leanX: 0, leanZ: 0 });
      leaf(m, ex, y + 3, ez, a, 6, 1.2, 5, leafDark, leafLight);
    }
    bi++;
  }
  cola(m, 0, H - 3, 0, stage === 4 ? 17 : 13, stage === 4 ? 4.6 : 3.6, pal, R, opt);
  for (let i = 0; i < 5; i++) leaf(m, 0, H - 2, 0, (i * Math.PI * 2) / 5 + R(), 6, 0.9, 5, leafDark, leafLight);
  return m;
}

export function buildMiniCola(variant) {
  const m = new VoxelModel();
  const R = mulberry(variant * 31 + 3);
  cola(m, 0, 0, 0, 8, 2.8, BUD[variant % 4], R, { pistil: 0.1, frost: 0.18 });
  return m;
}

export { BUD, shade };
