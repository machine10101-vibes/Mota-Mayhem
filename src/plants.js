import { VoxelModel, hash3, mix, mulberry, shade } from './voxel.js';
import { strainOf } from './strains.js';

export const PVS = 0.05;
export const PLANT_VS = 0.046;
const U = 1.4;

const FAN = {
  1: [{ a: 0, l: 1 }],
  3: [
    { a: -0.7, l: 0.68 },
    { a: 0, l: 1 },
    { a: 0.7, l: 0.68 },
  ],
  5: [
    { a: -1.22, l: 0.44 },
    { a: -0.62, l: 0.74 },
    { a: 0, l: 1 },
    { a: 0.62, l: 0.74 },
    { a: 1.22, l: 0.44 },
  ],
  7: [
    { a: -1.62, l: 0.34 },
    { a: -1.12, l: 0.54 },
    { a: -0.56, l: 0.78 },
    { a: 0, l: 1 },
    { a: 0.56, l: 0.78 },
    { a: 1.12, l: 0.54 },
    { a: 1.62, l: 0.34 },
  ],
};

const PISTIL_CREAM = 0xf4efe0;
const PISTIL_ORANGE = 0xe37820;
const PISTIL_AMBER = 0xc45614;
const FROST = 0xf7fbee;
const SUGAR_TIP = 0xd4b15a;

function plot(m, x, y, z, col, j = 0.02) {
  const yi = Math.round(y);
  if (yi < 0 || yi > 96) return;
  const xi = Math.round(x);
  const zi = Math.round(z);
  if (Math.abs(xi) > 64 || Math.abs(zi) > 64) return;
  m.set(xi, yi, zi, col, j);
}

function stalk(m, h, col, dark, thick) {
  const light = mix(col, 0xead9a4, thick ? 0.2 : 0.4);
  for (let y = 0; y <= h; y++) {
    plot(m, 0, y, 0, light, 0.02);
    if (!thick) continue;
    plot(m, 1, y, 0, dark, 0.02);
    plot(m, -1, y, 0, col, 0.02);
    plot(m, 0, y, 1, y % 2 === 0 ? dark : col, 0.02);
    plot(m, 0, y, -1, y % 2 === 0 ? col : dark, 0.02);
    if (h > 18 && y % 2 === 0) {
      plot(m, 1, y, 1, dark, 0.02);
      plot(m, -1, y, -1, shade(col, 0.88), 0.02);
    }
  }
  plot(m, 1, 0, 0, dark, 0.02);
  plot(m, -1, 0, 0, dark, 0.02);
  plot(m, 0, 0, 1, dark, 0.02);
  plot(m, 0, 0, -1, dark, 0.02);
}

function leaflet(m, bx, by, bz, ang, len, dark, light, droop, fade) {
  const dx = Math.cos(ang);
  const dz = Math.sin(ang);
  const px = -dz;
  const pz = dx;
  const L = Math.max(4, len);
  const maxHalf = L >= 16 ? 2.9 : L >= 11 ? 2.35 : L >= 7 ? 1.95 : 1.6;
  const vein = mix(light, 0xe7f6a4, 0.55);
  const blade = mix(dark, light, 0.42);
  const pad = Math.ceil(L + maxHalf + 2);
  const ox = Math.round(bx);
  const oz = Math.round(bz);
  for (let ix = ox - pad; ix <= ox + pad; ix++) {
    for (let iz = oz - pad; iz <= oz + pad; iz++) {
      const along = (ix - bx) * dx + (iz - bz) * dz;
      const across = (ix - bx) * px + (iz - bz) * pz;
      if (along < 0.15 || along > L + 0.35) continue;
      const t = Math.min(1, along / L);
      const belly = Math.sin(Math.PI * Math.pow(t, 0.78));
      const envelope = belly * maxHalf;
      const seg = 3.05;
      const segPos = ((along % seg) + seg) % seg;
      const toothT = segPos / seg;
      const half = t > 0.9 ? Math.max(0.42, envelope * 0.32) : envelope * (0.2 + 0.8 * toothT);
      if (envelope < 0.2 || Math.abs(across) > half) continue;
      const arc = Math.max(1.15, L * 0.11);
      const y = by + Math.sin(t * Math.PI) * arc * 0.62 - droop * t * t * arc;
      const onVein = Math.abs(across) <= 0.7;
      const onTooth = Math.abs(across) >= half - 0.55;
      const sideVein = !onVein && segPos < seg * 0.4 && Math.abs(across) > 0.5 && t > 0.14 && t < 0.86;
      let col = onVein ? vein : onTooth ? dark : sideVein ? mix(vein, blade, 0.4) : blade;
      if (fade && t > 0.58) col = mix(col, SUGAR_TIP, (t - 0.58) / 0.42);
      plot(m, ix, y, iz, col, 0.012);
      if (onVein && t > 0.08 && t < 0.9) plot(m, ix, y + 1, iz, vein, 0.01);
    }
  }
  const tipArc = Math.max(1.15, L * 0.11);
  const tipY = by - droop * tipArc;
  plot(m, bx + dx * (L + 0.9), tipY, bz + dz * (L + 0.9), fade ? SUGAR_TIP : dark, 0.01);
}

function fan(m, x, y, z, ang, size, fingers, droop, dark, light, stemCol, fade) {
  const dx = Math.cos(ang);
  const dz = Math.sin(ang);
  const pet = Math.max(2, Math.round(size * 0.36));
  const petCol = mix(stemCol, light, 0.62);
  const pxn = -dz;
  const pzn = dx;
  let py = y;
  for (let i = 1; i <= pet; i++) {
    const lift = Math.sin((i / pet) * Math.PI) * Math.max(0.85, size * 0.08);
    py = y + lift + i * 0.06;
    plot(m, x + dx * i, py, z + dz * i, i === pet ? light : petCol, 0.02);
    if (size > 8) plot(m, x + dx * i + pxn * 0.7, py, z + dz * i + pzn * 0.7, petCol, 0.02);
  }
  const px = x + dx * pet;
  const pz = z + dz * pet;
  for (const f of FAN[fingers] || FAN[5]) {
    leaflet(m, px, py, pz, ang + f.a, Math.max(3, size * f.l), dark, light, droop + Math.abs(f.a) * 0.06, fade);
  }
}

function pair(m, y, ang, size, fingers, droop, dark, light, stemCol) {
  fan(m, 0, y, 0, ang, size, fingers, droop, dark, light, stemCol, false);
  fan(m, 0, y, 0, ang + Math.PI, size * 0.96, fingers, droop, dark, light, stemCol, false);
}

function limb(m, x, y, z, ang, len, rise, col, dark) {
  const dx = Math.cos(ang);
  const dz = Math.sin(ang);
  const n = Math.max(2, Math.round(len));
  let ex = x;
  let ey = y;
  let ez = z;
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    ex = x + dx * i;
    ey = y + rise * t;
    ez = z + dz * i;
    plot(m, ex, ey, ez, col, 0.02);
    plot(m, ex, ey - 1, ez, dark, 0.02);
  }
  return { x: ex, y: ey, z: ez };
}

function spearProfile(t) {
  let p;
  if (t < 0.18) p = 0.55 + (t / 0.18) * 0.45;
  else if (t < 0.5) p = 1;
  else p = Math.pow(1 - (t - 0.5) / 0.5, 0.8);
  return Math.max(0.28, p);
}

function hair(m, x, y, z, ang, late, short, hairCol) {
  const cream = hairCol?.cream ?? PISTIL_CREAM;
  const orange = hairCol?.orange ?? PISTIL_ORANGE;
  const amber = hairCol?.amber ?? PISTIL_AMBER;
  const col = late > 0.72 ? orange : late > 0.32 ? mix(cream, orange, (late - 0.32) / 0.4) : cream;
  const n = short ? 2 : 4;
  let a = ang;
  for (let i = 1; i <= n; i++) {
    a += short ? 0.18 : late > 0.65 ? 0.42 : 0.1;
    const lift = short ? 0.4 : late > 0.72 ? 0.32 : 0.72;
    const tip = i === n && late > 0.78;
    plot(m, x + Math.cos(a) * i * 1.15, y + i * lift, z + Math.sin(a) * i * 1.15, tip ? amber : col, 0);
  }
}

function spear(m, cx, cy, cz, len, girth, pal, R, opt) {
  const L = Math.max(4, Math.round(len));
  const edge = [];
  for (let y = 0; y < L; y++) {
    const t = y / (L - 1);
    const r = Math.max(0.75, girth * spearProfile(t));
    const ox = cx + (opt.leanX || 0) * t * 3;
    const oy = cy + y;
    const oz = cz + (opt.leanZ || 0) * t * 3;
    const cr = Math.ceil(r);
    for (let dx = -cr; dx <= cr; dx++) {
      for (let dz = -cr; dz <= cr; dz++) {
        const d = Math.hypot(dx, dz);
        if (d > r) continue;
        const rim = d > r - 0.95;
        let col = rim ? pal[2] : (dx + y + dz) % 4 === 0 ? pal[1] : pal[0];
        if (rim && R() < opt.frost) col = mix(pal[2], FROST, 0.8);
        plot(m, ox + dx, oy, oz + dz, col, 0.03);
        if (rim) edge.push([Math.round(ox + dx), Math.round(oy), Math.round(oz + dz), Math.atan2(dz, dx)]);
      }
    }
  }
  const bumps = Math.max(3, Math.round(L * 0.42));
  for (let i = 0; i < bumps; i++) {
    const t = (i + 0.45) / bumps;
    const y = cy + t * (L - 1);
    const a = i * 2.399 + (opt.spin || 0);
    const rad = Math.max(0.85, girth * spearProfile(t));
    const ox = cx + (opt.leanX || 0) * t * 3 + Math.cos(a) * rad;
    const oz = cz + (opt.leanZ || 0) * t * 3 + Math.sin(a) * rad;
    let col = i % 2 === 0 ? pal[0] : pal[1];
    if (R() < opt.frost) col = mix(pal[2], FROST, 0.72);
    plot(m, ox, y, oz, col, 0.03);
    plot(m, ox + Math.cos(a) * 0.85, y + 0.75, oz + Math.sin(a) * 0.85, pal[2], 0.02);
    if (R() < (opt.late > 0.5 ? 0.42 : 0.72)) hair(m, ox, y + 0.6, oz, a, opt.late, !!opt.shortHair, opt.hair);
  }
  const sugarLen = opt.sugarLen || 5;
  const sugars = opt.sugars | 0;
  for (let i = 0; i < sugars; i++) {
    const t = (i + 0.4) / sugars;
    const y = cy + 1 + t * (L - 3);
    const a = i * 2.513 + (opt.spin || 0);
    const rad = Math.max(1, girth * spearProfile(t) * 0.65);
    leaflet(m, cx + Math.cos(a) * rad, y, cz + Math.sin(a) * rad, a, sugarLen, opt.leafD, opt.leafL, 0.28 + t * 0.25, !!opt.fade);
  }
  const stride = opt.shortHair ? 4 : 6;
  for (let i = 0; i < edge.length; i += stride) {
    if (R() > opt.pistil * 0.65) continue;
    const [x, y, z, a] = edge[i];
    hair(m, x, y, z, a, opt.late, !!opt.shortHair, opt.hair);
  }
}

function fleshyCotyledon(m, ang, y0, len, lift, yellow = 0) {
  const dx = Math.cos(ang);
  const dz = Math.sin(ang);
  const px = -dz;
  const pz = dx;
  const body = mix(0xc6e06e, 0xd2c25a, yellow);
  const pale = mix(0xe8f4a8, 0xf0e4a4, yellow);
  const rim = mix(0x7eac46, 0xa09038, yellow);
  const vein = mix(0xf3f7c4, 0xf7efb8, yellow);
  for (let i = 0; i <= len; i++) {
    const t = i / len;
    const width = Math.sin(Math.PI * Math.pow(Math.max(0.04, t), 0.7)) * (len * 0.64);
    const y = y0 + lift * t;
    const reach = 1.2 + i;
    const steps = Math.ceil(width);
    for (let s = -steps; s <= steps; s++) {
      if (Math.abs(s) > width + 0.05) continue;
      const x = dx * reach + px * s;
      const z = dz * reach + pz * s;
      const edge = Math.abs(s) > width - 0.7;
      const mid = Math.abs(s) < 0.6;
      plot(m, x, y, z, edge ? rim : mid ? vein : body, 0.02);
      if (t > 0.22 && t < 0.86 && !edge) plot(m, x, y + 1, z, pale, 0.015);
    }
  }
}

function seedHusk(m, ang, y, reach) {
  const dx = Math.cos(ang);
  const dz = Math.sin(ang);
  const px = -dz;
  const pz = dx;
  for (let i = 0; i < 2; i++) {
    const along = reach + i * 0.8;
    const open = 0.7 + i * 0.45;
    plot(m, dx * along + px * open, y + 0.9, dz * along + pz * open, i === 0 ? 0x8a6244 : 0x3a291f, 0.02);
    plot(m, dx * along - px * open, y + 0.45, dz * along - pz * open, 0x6b4b34, 0.02);
  }
}

function knuckle(m, y, col, dark) {
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.4;
    plot(m, Math.cos(a) * 2.15, y, Math.sin(a) * 2.15, i % 2 ? dark : col, 0.02);
  }
}

function colaOpt(spec, stemCol, late, pistil, frost, sugars, sugarLen, fade, spin = 0) {
  return {
    stem: stemCol,
    late,
    pistil,
    frost,
    sugars,
    sugarLen,
    fade,
    spin,
    leafD: spec.leafDark,
    leafL: spec.leafLight,
    hair: spec.hair || null,
  };
}

function sideBranch(m, y, ang, len, rise, dark, light, stemCol, stemDark, fingers, leaf, droop, fade) {
  const end = limb(m, Math.cos(ang) * 1.25, y + 0.4, Math.sin(ang) * 1.25, ang, len, rise, stemCol, stemDark);
  fan(m, end.x, end.y, end.z, ang, leaf, fingers, droop, dark, light, stemCol, fade);
  return end;
}

function flowering(m, stage, spec, R) {
  const ready = stage === 4;
  const stemCol = ready ? mix(0x8d7344, spec.stem, 0.4) : mix(spec.stem, 0xd5e7a4, 0.22);
  const stemDark = ready ? 0x64502e : spec.stemD;
  const dark = spec.leafDark;
  const light = spec.leafLight;
  const late = ready ? 0.9 : 0.08;
  const pistil = ready ? 0.4 : 0.7;
  const frost = (ready ? 0.38 : 0.03) * (spec.frost || 1);
  stalk(m, (ready ? 14 : 17) * U, stemCol, stemDark, true);

  const nodes = ready
    ? [
        { y: 3 * U, fingers: 7, size: 12 * U, droop: 1.7 },
        { y: 6 * U, fingers: 5, size: 9 * U, droop: 0.85 },
        { y: 9 * U, fingers: 3, size: 6 * U, droop: 0.25 },
      ]
    : [
        { y: 3 * U, fingers: 5, size: 10 * U, droop: 1.45 },
        { y: 7 * U, fingers: 7, size: 12 * U, droop: 0.9 },
        { y: 11 * U, fingers: 7, size: 10 * U, droop: 0.4 },
        { y: 14 * U, fingers: 5, size: 7 * U, droop: 0.08 },
      ];
  let ang = 0.22 + (spec.seed % 6) * 0.15;
  for (const n of nodes) {
    knuckle(m, n.y, stemCol, stemDark);
    pair(m, n.y, ang, n.size, n.fingers, n.droop, dark, light, stemCol);
    ang += Math.PI / 2;
  }

  const sides = ready
    ? [
        { y: 6 * U, len: 5 * U, rise: 3.4 * U, cola: 7 * U, girth: 2.7, sugars: 4 },
        { y: 9 * U, len: 4 * U, rise: 2.8 * U, cola: 6 * U, girth: 2.45, sugars: 3 },
      ]
    : [
        { y: 11 * U, len: 5 * U, rise: 2.6 * U, cola: 4 * U, girth: 1.8, sugars: 3 },
        { y: 14 * U, len: 4 * U, rise: 2.3 * U, cola: 4 * U, girth: 1.65, sugars: 2 },
      ];
  for (const s of sides) {
    for (const side of [0, Math.PI]) {
      const a = ang + side;
      const end = limb(m, Math.cos(a) * 1.6, s.y, Math.sin(a) * 1.6, a, s.len, s.rise, stemCol, stemDark);
      spear(m, end.x, end.y, end.z, s.cola, s.girth, spec.bud, R, {
        ...colaOpt(spec, stemCol, late, pistil, frost, s.sugars, ready ? 6 : 4.4, ready, a),
        leanX: Math.cos(a) * 0.14,
        leanZ: Math.sin(a) * 0.14,
      });
    }
    ang += Math.PI / 2;
  }

  spear(
    m,
    0,
    (ready ? 11 : 15) * U,
    0,
    (ready ? 12 : 7) * U,
    ready ? 4.1 : 2.5,
    spec.bud,
    R,
    colaOpt(spec, stemCol, late, pistil, frost, ready ? 6 : 4, ready ? 6.2 : 4.6, ready, 0.35),
  );
}

function vegetative(m, spec) {
  const stemCol = spec.stem;
  const stemDark = spec.stemD;
  const dark = spec.leafDark;
  const light = spec.leafLight;
  stalk(m, 16 * U, stemCol, stemDark, true);
  const nodes = [
    { y: 3 * U, fingers: 5, size: 9 * U, droop: 1.45, ax: 3 * U },
    { y: 7 * U, fingers: 7, size: 12 * U, droop: 0.85, ax: 0 },
    { y: 11 * U, fingers: 7, size: 11 * U, droop: 0.35, ax: 0 },
    { y: 14 * U, fingers: 5, size: 8 * U, droop: 0.05, ax: 0 },
  ];
  let ang = 0.2 + (spec.seed % 5) * 0.18;
  for (const n of nodes) {
    knuckle(m, n.y, stemCol, stemDark);
    pair(m, n.y, ang, n.size, n.fingers, n.droop, dark, light, stemCol);
    if (n.ax) {
      for (const side of [0, Math.PI]) {
        sideBranch(m, n.y, ang + side + 0.42, n.ax, n.ax * 0.72, dark, light, stemCol, stemDark, Math.min(5, n.fingers), Math.max(5, n.size * 0.5), 0.55, false);
      }
    }
    ang += Math.PI / 2;
  }
  pair(m, 16.4 * U, ang, 4.4 * U, 3, -0.7, dark, light, stemCol);
}

function seedling(m, spec) {
  const stemCol = mix(0xd7eeae, spec.leafLight, 0.28);
  const stemDark = shade(stemCol, 0.78);
  const dark = spec.leafDark;
  const light = spec.leafLight;
  stalk(m, 12 * U, stemCol, stemDark, true);
  fleshyCotyledon(m, 0.12, 2.3 * U, 4.4 * U, -0.7 * U, 0.7);
  fleshyCotyledon(m, Math.PI + 0.04, 2.3 * U, 3.5 * U, -0.9 * U, 0.82);
  knuckle(m, 6 * U, stemCol, stemDark);
  fan(m, 0, 6 * U, 0, Math.PI / 2, 7.2 * U, 1, 0.35, dark, light, stemCol, false);
  fan(m, 0, 6 * U, 0, -Math.PI / 2, 6.2 * U, 1, 0.45, dark, light, stemCol, false);
  knuckle(m, 9 * U, stemCol, stemDark);
  pair(m, 9.2 * U, 0.06, 8 * U, 3, -0.15, dark, light, stemCol);
  pair(m, 12 * U, Math.PI / 2, 4 * U, 1, -1.35, dark, light, stemCol);
}

function sprout(m, spec) {
  const hypo = mix(0xe7f6c4, spec.leafLight, 0.12);
  for (let y = 0; y <= 6 * U; y++) {
    const hook = y > 4 * U ? (y - 4 * U) * 0.8 : 0;
    plot(m, hook, y, 0, y < 2 * U ? mix(hypo, 0xc8b878, 0.4) : hypo, 0.02);
  }
  fleshyCotyledon(m, 0.16, 4.5 * U, 4.2 * U, 3.5 * U, 0.04);
  fleshyCotyledon(m, Math.PI - 0.06, 4.5 * U, 3.3 * U, 2.8 * U, 0.12);
  fan(m, 0.3 * U, 6.1 * U, 0, Math.PI / 2, 6.4 * U, 1, -0.3, spec.leafDark, spec.leafLight, hypo, false);
  fan(m, 0.3 * U, 6.1 * U, 0, -Math.PI / 2, 5.3 * U, 1, -0.15, spec.leafDark, spec.leafLight, hypo, false);
  seedHusk(m, 0.16, 7.4 * U, 4.8 * U);
}

export function buildPlant(stage, strain) {
  const spec = strainOf(strain);
  const R = mulberry(stage * 977 + spec.seed * 131 + 7);
  const m = new VoxelModel();
  if (stage <= 0) sprout(m, spec);
  else if (stage === 1) seedling(m, spec);
  else if (stage === 2) vegetative(m, spec);
  else flowering(m, stage, spec, R);
  return m;
}

export function buildCannabisSeed(strain) {
  const spec = strainOf(strain);
  const m = new VoxelModel();
  const x0 = -8;
  const x1 = 8;
  const span = x1 - x0;
  const phase = spec.seed * 0.85;
  for (let x = x0; x <= x1; x++) {
    const t = (x - x0) / span;
    let s;
    if (t < 0.28) s = Math.sqrt(Math.max(0, 1 - Math.pow((0.28 - t) / 0.28, 2)));
    else s = Math.pow(Math.cos((((t - 0.28) / 0.72) * Math.PI) / 2), 0.62);
    const wz = 5.4 * s;
    const hy = 3.15 * s;
    for (let z = Math.floor(-wz - 0.2); z <= Math.ceil(wz + 0.2); z++) {
      for (let y = Math.floor(-hy - 0.2); y <= Math.ceil(hy + 0.2); y++) {
        if (wz < 0.45 || hy < 0.45) continue;
        const nz = z / wz;
        const ny = y / hy;
        if (nz * nz + ny * ny > 1) continue;
        const top = y >= hy * 0.35;
        const wave = Math.sin(x * 0.72 + phase);
        const stripe = wave > 0.38;
        const soft = !stripe && wave > 0.12;
        let col = top ? 0xdcc4a2 : 0xa67c52;
        if (soft) col = top ? 0x8d6844 : 0x6a4a32;
        if (stripe) col = 0x3a291f;
        if (!stripe && hash3(x, y, z, spec.seed + 5) > 0.93) col = 0x241812;
        if (top && !stripe && y > hy * 0.55 && z < 0) col = 0xf0e2c6;
        m.set(x, y, z, col, 0.03);
      }
    }
    if (t > 0.14 && t < 0.9 && wz > 1.2) {
      const z = Math.round(wz);
      m.set(x, 1, z, 0x241812, 0.02);
      m.set(x, 2, z + 1, 0xc4a078, 0.02);
    }
  }
  m.set(x1 + 1, 0, 0, 0x2a1c14, 0.02);
  m.set(x0, -1, 0, 0x4a3828, 0.02);
  m.set(x0 + 1, -1, 0, 0x5c4636, 0.02);
  return m;
}

export function buildMiniCola(strain) {
  const spec = strainOf(strain);
  const m = new VoxelModel();
  const R = mulberry(spec.seed * 31 + 3);
  const stemCol = mix(0x8d7344, spec.stem, 0.25);
  spear(m, 0, 0, 0, 8, 2.3, spec.bud, R, colaOpt(spec, stemCol, 0.85, 0.5, 0.18, 3, 4, true));
  return m;
}

export function buildHangNug(strain) {
  const spec = strainOf(strain);
  const m = new VoxelModel();
  const R = mulberry(99 + spec.seed * 17);
  spear(m, 0, 0, 0, 7, 2.15, spec.bud, R, {
    stem: mix(0x6a8f32, spec.stem, 0.45),
    late: 0.92,
    pistil: 0.85,
    frost: 0.34 * (spec.frost || 1),
    sugars: 0,
    sugarLen: 2,
    fade: false,
    shortHair: true,
    leafD: spec.leafDark,
    leafL: spec.leafLight,
    hair: spec.hair || null,
    spin: 0.5,
  });
  for (let y = 8; y <= 12; y++) plot(m, 0, y, 0, 0xc9b98a, 0.02);
  return m;
}
