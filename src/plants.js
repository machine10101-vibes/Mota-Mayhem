import { VoxelModel, hash3, mix, mulberry, shade } from './voxel.js';
import { strainOf } from './strains.js';

export const PVS = 0.05;
export const PLANT_VS = 0.06;
const U = 1.55;

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
  const maxHalf = L >= 18 ? 1.85 : L >= 12 ? 1.95 : L >= 7 ? 1.75 : 1.5;
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
    leaflet(m, px, py, pz, ang + f.a, Math.max(3, size * f.l), dark, light, droop + Math.abs(f.a) * 0.32, fade);
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
  const n = short ? 2 : 3;
  const step = short ? 1.0 : late > 0.55 ? 1.15 : 1.45;
  let a = ang;
  for (let i = 1; i <= n; i++) {
    a += short ? 0.22 : late > 0.65 ? 0.4 : 0.12;
    const lift = short ? 0.4 : late > 0.7 ? 0.28 : 0.48;
    const tip = i === n && late > 0.78;
    plot(m, x + Math.cos(a) * i * step, y + i * lift, z + Math.sin(a) * i * step, tip ? amber : col, 0);
  }
}

function calyx(m, x, y, z, ang, pal, frostChance, R) {
  const dx = Math.cos(ang);
  const dz = Math.sin(ang);
  const px = -dz;
  const pz = dx;
  const frosty = R() < frostChance;
  plot(m, x, y, z, pal[0], 0.03);
  plot(m, x + px, y + 0.4, z + pz, pal[1], 0.03);
  plot(m, x - px, y + 0.35, z - pz, pal[1], 0.03);
  plot(m, x + dx, y + 0.8, z + dz, pal[0], 0.03);
  plot(m, x + dx * 1.5 + px * 0.65, y + 1.2, z + dz * 1.5 + pz * 0.65, pal[2], 0.02);
  plot(m, x + dx * 1.5 - px * 0.65, y + 1.1, z + dz * 1.5 - pz * 0.65, pal[0], 0.02);
  plot(m, x + dx * 1.7, y + 1.45, z + dz * 1.7, pal[0], 0.02);
  const tipX = x + dx * 2.35;
  const tipY = y + 2.05;
  const tipZ = z + dz * 2.35;
  plot(m, tipX, tipY, tipZ, frosty ? mix(pal[2], FROST, 0.88) : pal[2], 0.02);
  return { x: tipX, y: tipY, z: tipZ };
}

function spear(m, cx, cy, cz, len, girth, pal, R, opt) {
  const L = Math.max(4, Math.round(len));
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
      }
    }
  }
  const bumps = Math.max(5, Math.round(L * 0.7));
  for (let i = 0; i < bumps; i++) {
    const t = (i + 0.35) / bumps;
    const y = cy + t * (L - 1);
    const a = i * 2.513 + (opt.spin || 0);
    const rad = Math.max(1.1, girth * spearProfile(t) * 0.85);
    const ox = cx + (opt.leanX || 0) * t * 3 + Math.cos(a) * rad;
    const oz = cz + (opt.leanZ || 0) * t * 3 + Math.sin(a) * rad;
    const tip = calyx(m, ox, y, oz, a, pal, opt.frost || 0, R);
    const density = opt.pistil ?? 1;
    if (density > 0.2) hair(m, tip.x, tip.y, tip.z, a + 0.5, opt.late, !!opt.shortHair, opt.hair);
    if (density > 0.45) hair(m, tip.x, tip.y, tip.z, a - 0.5, opt.late, !!opt.shortHair, opt.hair);
  }
  if (opt.crown !== false) {
    for (let k = 0; k < 5; k++) {
      hair(m, cx, cy + L - 1, cz, k * 1.256 + (opt.spin || 0), opt.late, !!opt.shortHair, opt.hair);
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

function budBall(m, x, y, z, rad, pal, R, frost) {
  const r = Math.max(1.35, rad);
  const y0 = -Math.max(1, Math.round(r * 0.42));
  const y1 = Math.max(2, Math.round(r * 0.72));
  for (let dy = y0; dy <= y1; dy++) {
    const yt = dy / (r * 0.85);
    const slice = r * Math.sqrt(Math.max(0, 1 - yt * yt));
    const cr = Math.ceil(slice);
    for (let dx = -cr; dx <= cr; dx++) {
      for (let dz = -cr; dz <= cr; dz++) {
        const d = Math.hypot(dx, dz);
        if (d > slice) continue;
        const rim = d > slice - 0.85;
        let col = rim ? pal[2] : (dx + dy + dz) % 3 === 0 ? pal[1] : pal[0];
        if (rim && R() < frost) col = mix(pal[2], FROST, 0.62);
        plot(m, x + dx, y + dy, z + dz, col, 0.02);
      }
    }
  }
}

function stackCola(m, x, y, z, dx, dy, dz, count, girth, pal, R, opt) {
  const len = Math.hypot(dx, dy, dz) || 1;
  dx /= len;
  dy /= len;
  dz /= len;
  let px = -dz;
  let pz = dx;
  const pLen = Math.hypot(px, pz) || 1;
  px /= pLen;
  pz /= pLen;
  const n = Math.max(2, count | 0);
  const step = Math.max(2.35, girth * 0.92);
  for (let i = 0; i < n; i++) {
    const t = n === 1 ? 0 : i / (n - 1);
    const rad = girth * (0.82 + 0.18 * Math.sin(Math.PI * Math.min(1, t + 0.05))) * (1 - t * 0.2);
    const spin = i * 2.15 + (opt.spin || 0);
    const swirl = girth * 0.28;
    const bx = x + dx * i * step + Math.cos(spin) * px * swirl;
    const by = y + dy * i * step;
    const bz = z + dz * i * step + Math.sin(spin) * pz * swirl;
    budBall(m, bx, by, bz, rad, pal, R, opt.frost || 0);
    const hairs = opt.hairs ?? 4;
    for (let h = 0; h < hairs; h++) {
      const a = spin + (h / hairs) * Math.PI * 2;
      hair(m, bx + Math.cos(a) * rad * 0.45, by + rad * 0.35, bz + Math.sin(a) * rad * 0.45, a, opt.late, true, opt.hair);
    }
    if (i % 2 === 0 && opt.leafD != null) {
      leaflet(m, bx, by + 0.4, bz, spin + 0.6, opt.sugarLen || 4, opt.leafD, opt.leafL, 0.18, !!opt.fade);
    }
  }
}

function finishTree(m, spec, R, ready) {
  const stemCol = ready ? mix(0x6a4a24, spec.stem, 0.2) : mix(spec.stem, 0xd7e7a8, 0.16);
  const stemDark = ready ? 0x3a2814 : spec.stemD;
  const dark = spec.leafDark;
  const light = spec.leafLight;
  const gold = [0xe8b84a, 0xb88828, 0xf2d56a];
  const bud = spec.bud.map((c, i) => mix(c, gold[i], ready ? 0.86 : 0.58));
  const late = ready ? 0.88 : 0.05;
  const frost = (ready ? 0.16 : 0.02) * (spec.frost || 1);
  const hairCol = ready
    ? { cream: 0xf8e9a4, orange: 0xe8c44a, amber: 0xd4ae3a }
    : spec.hair || { cream: 0xf4f1e2, orange: 0xf7f3e6, amber: 0xe7f0cc };
  const tiers = ready
    ? [
        { y: 8, fan: 18, fingers: 7, droop: 0.5, arms: 4, reach: 14, rise: 6, buds: 6, girth: 3.15 },
        { y: 15, fan: 16, fingers: 7, droop: 0.36, arms: 4, reach: 11, rise: 6, buds: 5, girth: 2.9 },
        { y: 22, fan: 13, fingers: 7, droop: 0.22, arms: 4, reach: 8, rise: 5, buds: 5, girth: 2.65 },
        { y: 28, fan: 10, fingers: 5, droop: 0.12, arms: 4, reach: 6, rise: 4, buds: 4, girth: 2.4 },
        { y: 33, fan: 7, fingers: 5, droop: 0.06, arms: 0 },
      ]
    : [
        { y: 7, fan: 13, fingers: 7, droop: 0.5, arms: 4, reach: 8, rise: 4, buds: 5, girth: 2.55 },
        { y: 13, fan: 11, fingers: 7, droop: 0.28, arms: 4, reach: 6, rise: 4, buds: 4, girth: 2.35 },
        { y: 19, fan: 8, fingers: 5, droop: 0.12, arms: 4, reach: 5, rise: 3, buds: 4, girth: 2.15 },
        { y: 24, fan: 6, fingers: 5, droop: 0.04, arms: 0 },
      ];
  const top = tiers[tiers.length - 1].y;
  stalk(m, top + (ready ? 18 : 8), stemCol, stemDark, true);
  for (let y = 0; y <= 7; y++) {
    const rad = 2.35 - y * 0.16;
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2 + 0.2;
      plot(m, Math.cos(a) * rad, y, Math.sin(a) * rad, k % 2 ? stemDark : stemCol, 0.02);
    }
  }
  const colaAt = (x, y, z, count, girth, a) => {
    stackCola(m, x, y, z, Math.cos(a) * 0.38, 0.92, Math.sin(a) * 0.38, count, girth, bud, R, {
      frost,
      late,
      hair: hairCol,
      hairs: ready ? 4 : 1,
      spin: a,
      leafD: dark,
      leafL: light,
      sugarLen: ready ? 4.4 : 3.2,
      fade: ready,
    });
  };
  let ang = 0.22 + (spec.seed % 5) * 0.18;
  for (const n of tiers) {
    knuckle(m, n.y, stemCol, stemDark);
    pair(m, n.y, ang, n.fan, n.fingers, n.droop, dark, light, stemCol);
    if (n.fan >= 11) pair(m, n.y + 1, ang + Math.PI / 4, n.fan * 0.72, n.fingers, n.droop + 0.08, dark, light, stemCol);
    if (ready && n.fan >= 16) pair(m, n.y + 2, ang + Math.PI / 8, n.fan * 0.62, 5, n.droop + 0.16, dark, light, stemCol);
    if (n.arms) {
      for (let i = 0; i < n.arms; i++) {
        const a = ang + 0.4 + (i * Math.PI * 2) / n.arms;
        const end = limb(m, Math.cos(a) * 1.6, n.y + 0.5, Math.sin(a) * 1.6, a, n.reach, n.rise, stemCol, stemDark);
        fan(
          m,
          Math.cos(a) * (1.6 + n.reach * 0.42),
          n.y + 0.5 + n.rise * 0.42,
          Math.sin(a) * (1.6 + n.reach * 0.42),
          a + 0.6,
          Math.max(5, n.fan * 0.5),
          n.fan > 11 ? 7 : 5,
          n.droop + 0.12,
          dark,
          light,
          stemCol,
          false,
        );
        colaAt(end.x, end.y + 0.6, end.z, n.buds, n.girth, a);
      }
    }
    ang += Math.PI / 2;
  }
  stackCola(m, 0, ready ? 20 : 15, 0, 0, 1, 0, ready ? 11 : 9, ready ? 3.45 : 2.7, bud, R, {
    frost,
    late,
    hair: hairCol,
    hairs: ready ? 5 : 1,
    spin: 0.4,
    leafD: dark,
    leafL: light,
    sugarLen: ready ? 5.2 : 3.4,
    fade: ready,
  });
}

function flowering(m, stage, spec, R) {
  finishTree(m, spec, R, stage === 4);
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
