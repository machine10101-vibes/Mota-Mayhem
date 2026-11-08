import { VoxelModel, mix, mulberry, shade } from './voxel.js';
import { strainOf } from './strains.js';

export const PVS = 0.05;

const FAN = {
  1: [{ a: 0, l: 1 }],
  3: [
    { a: -0.78, l: 0.7 },
    { a: 0, l: 1 },
    { a: 0.78, l: 0.7 },
  ],
  5: [
    { a: -1.35, l: 0.46 },
    { a: -0.66, l: 0.76 },
    { a: 0, l: 1 },
    { a: 0.66, l: 0.76 },
    { a: 1.35, l: 0.46 },
  ],
  7: [
    { a: -2.02, l: 0.34 },
    { a: -1.36, l: 0.58 },
    { a: -0.7, l: 0.82 },
    { a: 0, l: 1 },
    { a: 0.7, l: 0.82 },
    { a: 1.36, l: 0.58 },
    { a: 2.02, l: 0.34 },
  ],
};

const PISTIL_CREAM = 0xf4efe0;
const PISTIL_ORANGE = 0xe37820;
const PISTIL_AMBER = 0xc45614;
const FROST = 0xf7fbee;
const SUGAR_TIP = 0xd4b15a;

function plot(m, x, y, z, col, j = 0.02) {
  const yi = Math.round(y);
  if (yi < 0 || yi > 72) return;
  const xi = Math.round(x);
  const zi = Math.round(z);
  if (Math.abs(xi) > 48 || Math.abs(zi) > 48) return;
  m.set(xi, yi, zi, col, j);
}

function stalk(m, h, col, dark, thick) {
  const light = mix(col, 0xead9a4, thick ? 0.2 : 0.4);
  for (let y = 0; y <= h; y++) {
    plot(m, 0, y, 0, light, 0.02);
    if (!thick) continue;
    plot(m, 1, y, 0, dark, 0.02);
    plot(m, 0, y, 1, y % 2 === 0 ? dark : col, 0.02);
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
  const maxHalf = L >= 11 ? 2.55 : L >= 7 ? 2.05 : 1.45;
  const vein = mix(light, 0xe7f6a4, 0.5);
  const blade = mix(dark, light, 0.38);
  const pad = Math.ceil(L + maxHalf + 2);
  const ox = Math.round(bx);
  const oz = Math.round(bz);
  for (let ix = ox - pad; ix <= ox + pad; ix++) {
    for (let iz = oz - pad; iz <= oz + pad; iz++) {
      const along = (ix - bx) * dx + (iz - bz) * dz;
      const across = (ix - bx) * px + (iz - bz) * pz;
      if (along < 0.15 || along > L + 0.35) continue;
      const t = Math.min(1, along / L);
      const envelope = Math.sin(Math.PI * Math.pow(t, 0.55)) * maxHalf;
      const tooth = Math.floor(along / 2) % 2 === 0;
      const half = tooth ? envelope : Math.min(0.4, envelope);
      if (envelope < 0.25 || Math.abs(across) > half) continue;
      const y = by + Math.sin(t * Math.PI) * 0.3 - droop * t * t * 1.15;
      const onVein = Math.abs(across) <= 0.45;
      const onTooth = Math.abs(across) >= half - 0.55;
      let col = onVein ? vein : onTooth ? dark : blade;
      if (fade && t > 0.62) col = mix(col, SUGAR_TIP, (t - 0.62) / 0.38);
      plot(m, ix, y, iz, col, 0.012);
    }
  }
  plot(m, bx + dx * (L + 0.7), by - droop, bz + dz * (L + 0.7), fade ? SUGAR_TIP : dark, 0.01);
}

function fan(m, x, y, z, ang, size, fingers, droop, dark, light, stemCol, fade) {
  const dx = Math.cos(ang);
  const dz = Math.sin(ang);
  const pet = Math.max(2, Math.round(size * 0.2));
  for (let i = 1; i <= pet; i++) plot(m, x + dx * i, y + i * 0.2, z + dz * i, stemCol, 0.02);
  const px = x + dx * pet;
  const py = y + pet * 0.2;
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
  const dx = Math.cos(ang);
  const dz = Math.sin(ang);
  const cream = hairCol?.cream ?? PISTIL_CREAM;
  const orange = hairCol?.orange ?? PISTIL_ORANGE;
  const amber = hairCol?.amber ?? PISTIL_AMBER;
  const col = late > 0.75 ? orange : late > 0.3 ? mix(cream, orange, late * 0.7) : cream;
  const n = short ? 1 : 2;
  for (let i = 1; i <= n; i++) {
    const tip = i === n && late > 0.8;
    plot(m, x + dx * i, y + i * 0.55, z + dz * i, tip ? amber : col, 0);
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
  const sugarLen = opt.sugarLen || 5;
  const sugars = opt.sugars | 0;
  for (let i = 0; i < sugars; i++) {
    const t = (i + 0.4) / sugars;
    const y = cy + 1 + t * (L - 3);
    const a = i * 2.513 + (opt.spin || 0);
    const rad = Math.max(1, girth * spearProfile(t) * 0.65);
    leaflet(m, cx + Math.cos(a) * rad, y, cz + Math.sin(a) * rad, a, sugarLen, opt.leafD, opt.leafL, 0.28 + t * 0.25, !!opt.fade);
  }
  const stride = opt.shortHair ? 3 : 5;
  for (let i = 0; i < edge.length; i += stride) {
    if (R() > opt.pistil * 0.65) continue;
    const [x, y, z, a] = edge[i];
    hair(m, x, y, z, a, opt.late, !!opt.shortHair, opt.hair);
  }
}

function cotyledon(m, ang, y0, len, light, dark) {
  const dx = Math.cos(ang);
  const dz = Math.sin(ang);
  const px = -dz;
  const pz = dx;
  const col = mix(light, 0xe7f0a4, 0.5);
  const edge = shade(dark, 1.08);
  const a = len * 0.5;
  const b = 3.1;
  const pad = Math.ceil(len + 2);
  for (let ix = -pad; ix <= pad; ix++) {
    for (let iz = -pad; iz <= pad; iz++) {
      const along = ix * dx + iz * dz;
      const across = ix * px + iz * pz;
      const u = (along - a) / a;
      const v = across / b;
      const d = u * u + v * v;
      if (d > 1) continue;
      plot(m, ix, y0 - along * 0.04, iz, d > 0.72 ? edge : col, 0.02);
    }
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

function flowering(m, stage, spec, R) {
  const ready = stage === 4;
  const stemCol = mix(0x8d7344, spec.stem, 0.22);
  const stemDark = 0x64502e;
  const dark = spec.leafDark;
  const light = spec.leafLight;
  stalk(m, ready ? 16 : 14, stemCol, stemDark, true);

  let ang = 0.15;
  pair(m, 4, ang, ready ? 15 : 13, 7, 0.7, dark, light, stemCol);
  ang += Math.PI / 2;
  pair(m, 9, ang, ready ? 12 : 10, 7, 0.4, dark, light, stemCol);
  ang += Math.PI / 2;

  const late = ready ? 0.9 : 0.16;
  const pistil = ready ? 0.42 : 0.28;
  const frost = (ready ? 0.26 : 0.05) * (spec.frost || 1);
  const sites = ready
    ? [
        [14, 6, 3, 6, 2.35],
        [19, 5, 2.4, 4, 1.9],
      ]
    : [[13, 6, 2.8, 5, 1.85]];
  for (const [y, len, rise, colaLen, girth] of sites) {
    for (const side of [0, Math.PI]) {
      const a = ang + side;
      const end = limb(m, 0, y, 0, a, len, rise, stemCol, stemDark);
      spear(m, end.x, end.y, end.z, colaLen, girth, spec.bud, R, {
        ...colaOpt(spec, stemCol, late, pistil, frost, 1, 3.6, ready),
        leanX: Math.cos(a) * 0.1,
        leanZ: Math.sin(a) * 0.1,
      });
      leaflet(m, Math.cos(a) * 2, y + 0.4, Math.sin(a) * 2, a, ready ? 8 : 6, dark, light, 0.45, false);
    }
    ang += Math.PI / 2;
  }

  spear(
    m,
    0,
    ready ? 13 : 12,
    0,
    ready ? 14 : 10,
    ready ? 3.7 : 2.7,
    spec.bud,
    R,
    colaOpt(spec, stemCol, late, pistil, frost, ready ? 4 : 2, 4.2, ready, 0.4),
  );
}

function vegetative(m, spec) {
  const stemCol = spec.stem;
  const stemDark = spec.stemD;
  const dark = spec.leafDark;
  const light = spec.leafLight;
  stalk(m, 16, stemCol, stemDark, true);
  pair(m, 4, 0.15, 11, 5, 0.7, dark, light, stemCol);
  pair(m, 12, Math.PI / 2 + 0.05, 15, 7, 0.28, dark, light, stemCol);
}

function seedling(m, spec) {
  const stemCol = mix(spec.leafLight, 0xd7eeae, 0.4);
  const dark = spec.leafDark;
  const light = spec.leafLight;
  stalk(m, 12, stemCol, shade(stemCol, 0.78), false);
  cotyledon(m, 0.1, 2.2, 5, light, dark);
  cotyledon(m, Math.PI + 0.1, 2.2, 5, light, dark);
  pair(m, 6, Math.PI / 2, 7, 1, 0.35, dark, light, stemCol);
  pair(m, 10, 0.15, 6.5, 3, 0.28, dark, light, stemCol);
  fan(m, 0, 12, 0, 0.3, 4.5, 5, 0.15, dark, light, stemCol, false);
}

function sprout(m, spec) {
  const stemCol = mix(spec.leafLight, 0xe8f4c4, 0.5);
  const dark = spec.leafDark;
  const light = spec.leafLight;
  stalk(m, 5, stemCol, shade(stemCol, 0.8), false);
  cotyledon(m, 0, 2, 5, light, dark);
  cotyledon(m, Math.PI, 2, 5, light, dark);
  leaflet(m, 0, 5, 0, Math.PI / 2, 9, dark, light, 0.18, false);
  leaflet(m, 0, 5, 0, -Math.PI / 2, 9, dark, light, 0.18, false);
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
