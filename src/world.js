import * as THREE from 'three';
import { VoxelModel, hash3, mulberry, noise2, shade, mix, toMesh, toChunkedMeshes, voxelMaterial } from './voxel.js';
import { buildPlant, PVS } from './plants.js';

export const YARD = { x: 20, z: 14 };
export const BED_SIZE = { w: 5.6, d: 4.9 };
export const BEDS = [];
for (const bx of [-7.5, 7.5]) for (const bz of [-6.5, -0.5, 5.5]) BEDS.push({ x: bx, z: bz });
export const SLOT_OFFSETS = [
  [-1.4, -1.2],
  [1.4, -1.2],
  [-1.4, 1.2],
  [1.4, 1.2],
];
export const SOIL_TOP = 7 / 16;

const WOOD = [0xb68a58, 0xad8150, 0xbf9362, 0xa87b4a];
const pick = (arr, x, y, z, s = 0) => arr[Math.floor(hash3(x, y, z, s) * arr.length)];

function place(group, model, vs, x, y, z, rotY = 0, origin = [0, 0, 0], mat, shadows = true) {
  const mesh = toMesh(model, vs, origin, mat, shadows);
  mesh.position.set(x, y, z);
  mesh.rotation.y = rotY;
  group.add(mesh);
  return mesh;
}

function placeChunked(group, model, vs, shadows = true, chunk = 64) {
  const g = new THREE.Group();
  for (const mesh of toChunkedMeshes(model, vs, [0, 0, 0], undefined, shadows, chunk)) g.add(mesh);
  group.add(g);
  return g;
}

function line3(m, x0, y0, z0, x1, y1, z1, col, w = 1, j = 0.04) {
  const n = Math.ceil(Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0), Math.abs(z1 - z0))) + 1;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = Math.round(x0 + (x1 - x0) * t);
    const y = Math.round(y0 + (y1 - y0) * t);
    const z = Math.round(z0 + (z1 - z0) * t);
    m.box(x, y, z, x + w, y + w, z + w, col, j);
  }
}

/* ------------------------------------------------------------------ ground */

const G = 8;

function stonePave(vx, vz) {
  const row = Math.floor((vz + 4000) / 6);
  const off = (row % 2) * 6;
  const col = Math.floor((vx + off + 4000) / 12);
  const cx = (vx + off + 4000) % 12;
  const cz = (vz + 4000) % 6;
  const tone = hash3(col, row, 0, 77);
  const base = tone < 0.33 ? 0x9a9a94 : tone < 0.66 ? 0x8d8d88 : 0xa6a59d;
  return { grout: cx === 0 || cz === 0, color: base };
}

function inRect(x, z, r, pad = 0) {
  return x > r.x0 - pad && x < r.x1 + pad && z > r.z0 - pad && z < r.z1 + pad;
}

function buildGround(colliderInfo) {
  const m = new VoxelModel();
  const bedRects = BEDS.map((b) => ({ x0: b.x - BED_SIZE.w / 2, x1: b.x + BED_SIZE.w / 2, z0: b.z - BED_SIZE.d / 2, z1: b.z + BED_SIZE.d / 2 }));
  const flowerCols = [0xf6f3ea, 0xf5d547, 0xf08ab0, 0xb48be8, 0xff7f5f, 0x8fc8f2];
  for (let vx = -YARD.x * G - 8; vx < YARD.x * G + 8; vx++)
    for (let vz = -(YARD.z + 1) * G; vz < (YARD.z + 1) * G; vz++) {
      const wx = (vx + 0.5) / G;
      const wz = (vz + 0.5) / G;
      const dirt = bedRects.some((r) => inRect(wx, wz, r, 0.3 + noise2(wx * 3, wz * 3, 5) * 0.2));
      const pathHalf = 1.3 + (noise2(wz * 1.7, 0, 9) - 0.5) * 0.25;
      const onPath = Math.abs(wx) < pathHalf && wz > -9.8 && wz < YARD.z + 0.5;
      const plaza = wz > -9.9 && wz < -7.6 && Math.abs(wx) < 4.2 - (wz > -8.4 ? (wz + 8.4) * -0.0 : 0);
      if (onPath || plaza) {
        const s = stonePave(vx, vz);
        if (s.grout) m.set(vx, -1, vz, 0x4d4033, 0.06);
        else {
          m.set(vx, -1, vz, 0x5a4a3a, 0);
          m.set(vx, 0, vz, s.color, 0.05);
        }
        continue;
      }
      if (dirt) {
        m.set(vx, -1, vz, pick([0x7a5a3c, 0x6e5034, 0x856442], vx, 0, vz, 3), 0.08);
        if (hash3(vx, 1, vz, 4) > 0.9) m.set(vx, 0, vz, 0x6a4c32, 0.1);
        continue;
      }
      const stripe = Math.floor((wx + 20) / 2.5) & 1;
      const patch = (noise2(wx * 0.4, wz * 0.4, 2) - 0.5) * 0.14;
      let base = stripe ? 0x6db444 : 0x62a63b;
      base = shade(base, 1 + patch);
      m.set(vx, -1, vz, base, 0.07);
      const h = hash3(vx, 2, vz, 8);
      const edge = Math.min(YARD.x - Math.abs(wx), YARD.z - Math.abs(wz));
      const nearPath = Math.abs(wx) < pathHalf + 0.5 && wz > -9.8;
      if (h > 0.95 - (edge < 2.5 ? 0.04 : 0)) {
        const tall = hash3(vx, 3, vz, 9) > 0.8;
        const tc = pick([0x58a032, 0x7bc44c, 0x4e8f2c], vx, 0, vz, 6);
        m.set(vx, 0, vz, tc, 0.05);
        if (tall) m.set(vx, 1, vz, shade(tc, 1.15), 0.05);
      } else if (h < 0.005 + (edge < 3 ? 0.03 : 0) && !nearPath && edge > 0.6) {
        const col = flowerCols[Math.floor(hash3(Math.floor(vx / 6), 0, Math.floor(vz / 6), 14) * flowerCols.length)];
        m.set(vx, 0, vz, 0x3f8a2a, 0.04);
        m.set(vx, 1, vz, 0x4a9a30, 0.04);
        m.set(vx, 2, vz, col, 0.03);
        if (hash3(vx, 5, vz, 15) > 0.5) {
          m.set(vx + 1, 2, vz, col, 0.03);
          m.set(vx - 1, 2, vz, col, 0.03);
          m.set(vx, 2, vz + 1, col, 0.03);
          m.set(vx, 2, vz - 1, col, 0.03);
          m.set(vx, 3, vz, 0xf5d547, 0);
          m.del(vx, 2, vz);
          m.set(vx, 2, vz, 0xf5d547, 0);
        }
      }
    }
  void colliderInfo;
  return m;
}

function bush(m, cx, cz, r, flowerCol) {
  const greens = [0x3f8a32, 0x4a9a38, 0x357a2c, 0x56a840];
  m.sphereShell(cx, Math.round(r * 0.35), cz, r, 2.2, (x, y, z, t) => {
    if (y < 0) return null;
    if (flowerCol && hash3(x, y, z, 41) > 0.9) return flowerCol;
    return shade(pick(greens, x, y, z, 42), 0.85 + t * 0.3);
  }, 0.06, 0.8);
}

function buildOuterGround() {
  const m = new VoxelModel();
  const S = 4;
  for (let vx = -44 * S; vx < 44 * S; vx++)
    for (let vz = -38 * S; vz < 34 * S; vz++) {
      const wx = (vx + 0.5) / S;
      const wz = (vz + 0.5) / S;
      if (wx > -YARD.x - 1 && wx < YARD.x + 1 && wz > -YARD.z - 1 && wz < YARD.z + 1) continue;
      const patch = (noise2(wx * 0.18, wz * 0.18, 4) - 0.5) * 0.3;
      m.set(vx, -1, vz, shade(0x4d8f35, 1 + patch), 0.09);
      const h = hash3(vx, 2, vz, 8);
      if (h > 0.9) m.set(vx, 0, vz, shade(pick([0x3f7f2c, 0x5a9f3c, 0x356f26], vx, 0, vz, 6), 1), 0.06);
      else if (h < 0.015) {
        const col = pick([0xf6f3ea, 0xf5d547, 0xf08ab0, 0xb48be8], Math.floor(vx / 4), 0, Math.floor(vz / 4), 3);
        m.set(vx, 0, vz, col, 0.03);
      }
    }
  return { m, S };
}

function buildTrees() {
  const m = new VoxelModel();
  const R = mulberry(2024);
  const spots = [];
  for (let z = -30; z <= 20; z += 5.2) {
    spots.push([-25 - R() * 7, z + R() * 2]);
    spots.push([25 + R() * 7, z + R() * 2]);
  }
  for (let x = -32; x <= 32; x += 7) spots.push([x + R() * 2, -30 - R() * 6]);
  for (const [wx, wz] of spots) {
    const cx = Math.round(wx * 4);
    const cz = Math.round(wz * 4);
    const th = 14 + Math.floor(R() * 8);
    const trunk = [0x6b4528, 0x5c3b21, 0x79502e];
    for (let y = 0; y < th; y++) {
      const w = y < 3 ? 3 : 2;
      for (let dx = 0; dx < w; dx++) for (let dz = 0; dz < w; dz++) m.set(cx + dx - (w === 3 ? 1 : 0), y, cz + dz - (w === 3 ? 1 : 0), pick(trunk, dx, y, dz, 4), 0.05);
    }
    const tint = R();
    const greens = tint > 0.75 ? [0x7ab540, 0x8cc84c, 0x6aa238] : [0x3f8a32, 0x4f9e3a, 0x347a2b, 0x5aaa42];
    const blobs = 4 + Math.floor(R() * 2);
    for (let i = 0; i < blobs; i++) {
      const a = (i / blobs) * Math.PI * 2 + R();
      const off = i === 0 ? 0 : 5 + R() * 4;
      const r = 8 + R() * 4;
      const bx = cx + Math.round(Math.cos(a) * off);
      const bz = cz + Math.round(Math.sin(a) * off);
      const by = th + 4 + Math.round(R() * 5) + (i === 0 ? 3 : 0);
      m.sphereShell(bx, by, bz, r, 2.4, (x, y, z, t) => {
        const hgt = (y - (th - 2)) / 22;
        return shade(pick(greens, x, y, z, 51), 0.78 + hgt * 0.35 + t * 0.08);
      }, 0.07, 0.85);
    }
  }
  return m;
}

/* ------------------------------------------------------------------- fence */

function fenceRun(lenUnits, gateEnds = false) {
  const L = Math.round(lenUnits * 16);
  const m = new VoxelModel();
  const xs = -L / 2;
  const n = Math.floor(L / 6);
  const used = n * 6;
  const start = Math.round(xs + (L - used) / 2);
  for (const ry of [4, 14]) m.box(Math.round(xs), ry, -2, Math.round(xs) + L, ry + 3, 0, (x, y, z) => pick([0x8a5f37, 0x7e5530, 0x94683d], x, y, z, 61), 0.04);
  for (let i = 0; i < n; i++) {
    const x0 = start + i * 6;
    const tone = 0.9 + hash3(i, 0, 0, 62) * 0.2;
    const hOff = hash3(i, 1, 0, 63) < 0.12 ? -1 : 0;
    const base = pick(WOOD, i, 0, 0, 64);
    for (let y = 0; y < 22 + hOff; y++) {
      const top = y >= 21 + hOff;
      const moss = y === 0 && hash3(i, 5, 0, 65) < 0.4;
      for (let dx = top ? 1 : 0; dx < (top ? 3 : 4); dx++) {
        let col = shade(base, tone * (dx % 2 ? 0.96 : 1.02) * (y > 18 ? 1.06 : 1));
        if (moss) col = mix(col, 0x5a8a3a, 0.55);
        m.set(x0 + dx, y, 0, col, 0.035);
        m.set(x0 + dx, y, 1, shade(col, 0.95), 0.035);
      }
    }
  }
  const posts = [];
  const step = 64;
  const count = Math.max(1, Math.round(L / step));
  for (let i = 0; i <= count; i++) posts.push(Math.round(xs + (L * i) / count));
  for (const px of posts) {
    const tall = gateEnds && (px === posts[0] || px === posts[posts.length - 1]);
    const H = tall ? 34 : 27;
    m.box(px - 3, 0, -3, px + 3, H, 3, (x, y, z) => pick([0x7a5230, 0x6f4a2b, 0x835a35], x, y, z, 66), 0.04);
    m.box(px - 4, H, -4, px + 4, H + 2, 4, 0xc89a62, 0.04);
    m.box(px - 2, H + 2, -2, px + 2, H + 3, 2, 0xd8aa70, 0.03);
    if (tall) {
      m.box(px - 2, H + 3, -2, px + 2, H + 8, 2, 0xffd36a, 0.02);
      m.box(px - 3, H + 8, -3, px + 3, H + 9, 3, 0x3a3a3a, 0.02);
      m.box(px - 1, H + 9, -1, px + 1, H + 10, 1, 0x3a3a3a, 0.02);
    }
  }
  return m;
}

function buildFence(group) {
  const add = (len, cx, cz, rot, gate) => place(group, fenceRun(len, gate), 1 / 16, cx, 0, cz, rot);
  const gx = 2.4;
  add(YARD.x - gx, -(YARD.x + gx) / 2, YARD.z, 0, true);
  add(YARD.x - gx, (YARD.x + gx) / 2, YARD.z, 0, true);
  add(YARD.x - 13, -(YARD.x + 13) / 2, -YARD.z, Math.PI);
  add(YARD.x - 13, (YARD.x + 13) / 2, -YARD.z, Math.PI);
  add(YARD.z * 2, YARD.x, 0, Math.PI / 2);
  add(YARD.z * 2, -YARD.x, 0, -Math.PI / 2);
}

/* ------------------------------------------------------------------- house */

function windowCut(m, cx, y0, w, h, z, siding) {
  const hw = w / 2;
  m.delBox(cx - hw, y0, z - 2, cx + hw, y0 + h, z);
  m.box(cx - hw, y0, z - 1, cx + hw, y0 + h, z, (x, y) => {
    const diag = (x + y) % 11 < 2 || (x + y) % 11 === 5;
    const g = (y - y0) / h;
    return diag ? 0xd5ecf7 : mix(0x6fa6c8, 0x9ccbe0, g);
  }, 0.02);
  const f = 0xf3ecdc;
  m.box(cx - hw - 1, y0 - 1, z - 1, cx + hw + 1, y0 + 1, z + 1, f, 0.02);
  m.box(cx - hw - 1, y0 + h - 1, z - 1, cx + hw + 1, y0 + h + 1, z + 1, f, 0.02);
  m.box(cx - hw - 1, y0, z - 1, cx - hw + 1, y0 + h, z + 1, f, 0.02);
  m.box(cx + hw - 1, y0, z - 1, cx + hw + 1, y0 + h, z + 1, f, 0.02);
  m.box(cx - 1, y0, z - 1, cx + 1, y0 + h, z + 1, f, 0.02);
  m.box(cx - hw, y0 + h / 2 - 1, z - 1, cx + hw, y0 + h / 2 + 1, z + 1, f, 0.02);
  m.box(cx - hw - 3, y0 - 3, z, cx + hw + 3, y0 - 1, z + 3, 0xcfc6b0, 0.03);
  m.box(cx - hw - 2, y0 + h + 1, z, cx + hw + 2, y0 + h + 3, z + 1, f, 0.02);
  for (const s of [-1, 1]) {
    const sx0 = s < 0 ? cx - hw - 7 : cx + hw + 1;
    m.box(sx0, y0 - 1, z, sx0 + 6, y0 + h + 1, z + 1, (x, y) => (y % 3 === 0 ? 0x2f5f3a : 0x3f7a4a), 0.03);
  }
  void siding;
}

function buildHouse() {
  const m = new VoxelModel();
  const X0 = -104;
  const X1 = 104;
  const WZ = -112;
  const WALL_H = 64;
  const siding = 0xe6d8b0;
  m.box(X0, 6, WZ - 2, X1, WALL_H, WZ, (x, y, z) => (y % 4 === 3 ? shade(siding, 0.86) : shade(siding, 1 + ((x >> 4) % 2) * 0.0)), 0.025);
  m.box(X0, 0, WZ - 2, X1, 6, WZ, (x, y, z) => pick([0x8c8e90, 0x7c7e80, 0x9a9c9c], x >> 2, y >> 1, z, 91), 0.05);
  m.box(X0 - 1, WALL_H - 2, WZ - 2, X1 + 1, WALL_H, WZ + 1, 0xf3ecdc, 0.02);
  for (const wx of [-78, -42, 42, 78]) windowCut(m, wx, 24, 18, 26, WZ, siding);
  m.delBox(-9, 6, WZ - 2, 9, 42, WZ);
  m.box(-9, 6, WZ - 1, 9, 42, WZ, (x, y) => (y > 30 && y < 40 && Math.abs(x) < 6 ? (((x + y) % 7) < 2 ? 0xd5ecf7 : 0x6fa6c8) : 0x2f7f7a), 0.04);
  const df = 0xf3ecdc;
  m.box(-11, 6, WZ - 1, -9, 44, WZ + 1, df, 0.02);
  m.box(9, 6, WZ - 1, 11, 44, WZ + 1, df, 0.02);
  m.box(-11, 42, WZ - 1, 11, 44, WZ + 1, df, 0.02);
  m.box(-6, 20, WZ, 6, 21, WZ + 1, 0x24625e, 0.02);
  m.box(-6, 28, WZ, 6, 29, WZ + 1, 0x24625e, 0.02);
  m.box(5, 22, WZ, 7, 25, WZ + 1, 0xe9ba3e, 0.02);

  const yt = (z) => WALL_H + 3 + Math.round((WZ - z) * 0.62);
  for (let z = -153; z <= -100; z++) {
    const top = yt(z);
    const row = Math.floor((-100 - z) / 3);
    for (let x = X0 - 6; x <= X1 + 6; x++) {
      const tile = Math.floor((x + (row % 2) * 4) / 8);
      const tone = hash3(tile, row, 0, 95);
      let col = tone < 0.33 ? 0x7d3f35 : tone < 0.66 ? 0x8f4a3b : 0x6f372f;
      if ((x + (row % 2) * 4) % 8 === 0) col = shade(col, 0.82);
      if ((-100 - z) % 3 === 0) col = shade(col, 0.86);
      for (let y = top - 3; y <= top; y++) m.set(x, y, z, y === top ? col : shade(col, 0.7), 0.02);
    }
    if (z >= -153 && z < -150) for (let x = X0 - 6; x <= X1 + 6; x++) m.set(x, top + 1, z, 0xb15a46, 0.03);
  }
  for (let z = -152; z < WZ; z++) {
    const top = yt(z) - 4;
    for (const x of [X0 - 3, X1 + 2]) for (let y = WALL_H; y <= top; y++) m.set(x, y, z, siding, 0.03);
  }
  m.box(56, 60, -146, 72, 104, -130, (x, y, z) => (y % 4 === 0 || (x + (Math.floor(y / 4) % 2) * 3) % 6 === 0 ? 0xcbbfa8 : pick([0xa04d3c, 0x934332, 0xb05a45], x, y, z, 97)), 0.03);
  m.box(54, 104, -148, 74, 108, -128, 0x8a8a8a, 0.04);
  m.delBox(58, 105, -146, 70, 108, -132);
  m.box(58, 105, -146, 70, 106, -132, 0x2e2e2e, 0.02);

  m.box(-40, 0, WZ, 40, 6, -88, (x, y, z) => {
    if (y < 5) return 0x8d6a42;
    const board = Math.floor((z + 200) / 4);
    return (z + 200) % 4 === 0 ? 0x6e5030 : shade(pick([0xb98e5e, 0xc59a68, 0xae8454], board, 0, 0, 98), 1);
  }, 0.03);
  m.box(-32, 0, -88, 32, 4, -83, (x, y, z) => ((z + 200) % 5 === 0 ? 0x6e5030 : 0xb48957), 0.03);
  m.box(-32, 0, -83, 32, 2, -78, (x, y, z) => ((z + 200) % 5 === 0 ? 0x6e5030 : 0xae8454), 0.03);
  const rail = 0xf1ead8;
  const post = (x, z) => {
    m.box(x - 1, 6, z - 1, x + 2, 26, z + 2, rail, 0.02);
    m.box(x - 2, 26, z - 2, x + 3, 27, z + 3, 0xfff8e8, 0.02);
  };
  const runZ = (x) => {
    post(x, WZ + 1);
    post(x, -89);
    m.box(x, 21, WZ + 3, x + 1, 23, -89, rail, 0.02);
    m.box(x, 8, WZ + 3, x + 1, 10, -89, rail, 0.02);
    for (let z = WZ + 6; z < -91; z += 6) m.box(x, 10, z, x + 1, 21, z + 1, rail, 0.02);
  };
  runZ(-40);
  runZ(39);
  for (const [a, b] of [
    [-40, -33],
    [33, 40],
  ]) {
    post(a === -40 ? -40 : 38, -89);
    m.box(a, 21, -90, b, 23, -89, rail, 0.02);
    m.box(a, 8, -90, b, 10, -89, rail, 0.02);
    for (let x = a + 2; x < b; x += 6) m.box(x, 10, -90, x + 1, 21, -89, rail, 0.02);
  }
  post(-33, -89);
  post(32, -89);
  return m;
}

/* -------------------------------------------------------------------- beds */

function buildBed() {
  const m = new VoxelModel();
  const W = 90;
  const D = 78;
  const x0 = -W / 2;
  const z0 = -D / 2;
  m.box(x0 + 3, 0, z0 + 3, x0 + W - 3, 7, z0 + D - 3, (x, y, z) => pick([0x4b3424, 0x3f2c1f, 0x56402c], x, y, z, 101), 0.06);
  for (let x = x0 + 3; x < x0 + W - 3; x++) for (let z = z0 + 3; z < z0 + D - 3; z++) if (hash3(x, 9, z, 102) > 0.93) m.set(x, 6, z, 0x6b5238, 0.08);
  const plank = (xa, za, xb, zb) => {
    m.box(xa, 0, za, xb, 8, zb, (x, y, z) => {
      const p = y < 4 ? 0 : 1;
      const tone = 0.92 + hash3(Math.floor(x / 10), p, Math.floor(z / 10), 103) * 0.18;
      const seam = y === 3 || y === 4;
      return shade(0xa87444, seam ? 0.7 : tone * (x % 3 === 0 && z % 3 === 0 ? 0.96 : 1));
    }, 0.035);
  };
  plank(x0, z0, x0 + W, z0 + 3);
  plank(x0, z0 + D - 3, x0 + W, z0 + D);
  plank(x0, z0 + 3, x0 + 3, z0 + D - 3);
  plank(x0 + W - 3, z0 + 3, x0 + W, z0 + D - 3);
  for (const [px, pz] of [
    [x0 - 1, z0 - 1],
    [x0 + W - 3, z0 - 1],
    [x0 - 1, z0 + D - 3],
    [x0 + W - 3, z0 + D - 3],
  ]) {
    m.box(px, 0, pz, px + 4, 11, pz + 4, 0x8a5a30, 0.04);
    m.box(px - 1, 11, pz - 1, px + 5, 12, pz + 5, 0xc89a62, 0.04);
  }
  return m;
}

function buildSoilPatch() {
  const m = new VoxelModel();
  const r = 14;
  for (let x = -r; x <= r; x++)
    for (let z = -r; z <= r; z++) {
      const d = Math.hypot(x + 0.5, z + 0.5);
      if (d > r) continue;
      const h = d < r * 0.3 ? 4 : d < r * 0.55 ? 3 : d < r * 0.8 ? 2 : 1;
      for (let y = 0; y < h; y++) m.set(x, y, z, pick([0x6e5238, 0x624830, 0x7a5c40], x, y, z, 111), 0.1);
    }
  return m;
}

/* ------------------------------------------------------------------- props */

function buildShed() {
  const m = new VoxelModel();
  const W = 96;
  const D = 80;
  const WH = 52;
  const hx = W / 2;
  const hz = D / 2;
  const siding = (x, y, z) => ((x + 100) % 8 === 0 ? 0x6e8c5e : pick([0x86a574, 0x7f9e6e, 0x8caa7a], x >> 3, 0, z, 121));
  m.box(-hx, 3, hz - 2, hx, WH, hz, siding, 0.03);
  m.box(-hx, 3, -hz, hx, WH, -hz + 2, siding, 0.03);
  m.box(-hx, 3, -hz, -hx + 2, WH, hz, (x, y, z) => ((z + 100) % 8 === 0 ? 0x6e8c5e : 0x86a574), 0.03);
  m.box(hx - 2, 3, -hz, hx, WH, hz, (x, y, z) => ((z + 100) % 8 === 0 ? 0x6e8c5e : 0x86a574), 0.03);
  m.box(-hx - 1, 0, -hz - 1, hx + 1, 3, hz + 1, (x, y, z) => pick([0x8c8e90, 0x7c7e80], x >> 2, 0, z >> 2, 122), 0.05);
  m.delBox(-16, 3, hz - 3, 16, 44, hz + 1);
  const fr = 0x4d3320;
  m.box(-17, 3, hz - 1, -15, 46, hz + 1, fr, 0.02);
  m.box(15, 3, hz - 1, 17, 46, hz + 1, fr, 0.02);
  m.box(-17, 44, hz - 1, 17, 46, hz + 1, fr, 0.02);
  m.delBox(26, 20, hz - 2, 42, 38, hz);
  m.box(26, 20, hz - 1, 42, 38, hz, (x, y) => ((x + y) % 9 < 2 ? 0xd5ecf7 : 0x74a8c6), 0.02);
  const f = 0xf3ecdc;
  m.box(25, 19, hz - 1, 43, 21, hz + 1, f, 0.02);
  m.box(25, 37, hz - 1, 43, 39, hz + 1, f, 0.02);
  m.box(25, 19, hz - 1, 27, 39, hz + 1, f, 0.02);
  m.box(41, 19, hz - 1, 43, 39, hz + 1, f, 0.02);
  m.box(33, 19, hz - 1, 35, 39, hz + 1, f, 0.02);
  m.box(25, 28, hz - 1, 43, 30, hz + 1, f, 0.02);
  m.box(24, 14, hz, 44, 19, hz + 5, 0x8a5a30, 0.04);
  m.box(25, 17, hz + 1, 43, 19, hz + 4, 0x4b3424, 0.05);
  const fc = [0xf08ab0, 0xf5d547, 0xf6f3ea, 0xb48be8];
  for (let x = 26; x < 43; x += 2) {
    m.set(x, 19, hz + 2, 0x3f8a2a, 0.05);
    m.set(x, 20, hz + 2, pick(fc, x, 0, 0, 124), 0.03);
    m.set(x, 19, hz + 3, 0x4a9a30, 0.05);
  }
  const roof = new VoxelModel();
  const yt = (z) => WH + Math.round((44 - Math.abs(z)) * 0.7);
  for (let z = -44; z <= 44; z++) {
    const top = yt(z);
    const row = Math.floor((44 - Math.abs(z)) / 3);
    for (let x = -52; x <= 52; x++) {
      const tile = Math.floor((x + (row % 2) * 4) / 8);
      let col = hash3(tile, row, z < 0 ? 1 : 0, 125) < 0.5 ? 0x9b4a3a : 0x8a3e31;
      if ((x + (row % 2) * 4) % 8 === 0) col = shade(col, 0.82);
      if ((44 - Math.abs(z)) % 3 === 0) col = shade(col, 0.88);
      for (let y = top - 2; y <= top; y++) roof.set(x, y, z, y === top ? col : shade(col, 0.7), 0.02);
    }
    if (Math.abs(z) <= 1) for (let x = -52; x <= 52; x++) roof.set(x, top + 1, z, 0xb85a48, 0.03);
  }
  for (let z = -hz; z < hz; z++) for (const x of [-hx - 3, hx + 1]) for (let y = WH; y <= yt(z) - 3; y++) m.set(x, y, z, 0x86a574, 0.03);
  m.box(-hx + 2, 0, -hz + 2, hx - 2, 1, hz - 2, 0x3a2a1c, 0.05);
  return { shell: m, roof };
}

function buildDoorLeaf(dir) {
  const m = new VoxelModel();
  const x0 = dir > 0 ? 1 : -16;
  const x1 = dir > 0 ? 16 : -1;
  m.box(x0, 3, -1, x1, 44, 1, (x, y) => (Math.abs(x) % 6 === 0 ? 0x5a3d25 : pick([0x7a5636, 0x6d4c30], x, y, 0, 123)), 0.03);
  line3(m, dir > 0 ? 2 : -2, 8, 0, dir > 0 ? 13 : -13, 40, 0, 0x4d3320, 2);
  const hx = dir > 0 ? 12 : -14;
  m.box(hx, 20, 1, hx + 2, 27, 2, 0xe9ba3e, 0.02);
  return m;
}

function buildHangBud() {
  const m = new VoxelModel();
  m.box(0, 8, 0, 1, 12, 1, 0xc9b98a, 0.02);
  const pal = [0x8cc34b, 0x5d9a2f, 0xf4fbe6];
  for (let y = 0; y < 8; y++) {
    const r = 1.2 + Math.sin((y / 8) * Math.PI) * 2.4;
    for (let x = -3; x <= 3; x++)
      for (let z = -3; z <= 3; z++) {
        if (Math.hypot(x, z) > r) continue;
        m.set(x, y, z, pal[(x + y + z + 6) % 3], 0.05);
      }
  }
  return m;
}

function buildCureJar() {
  const m = new VoxelModel();
  m.box(-2, 0, -2, 3, 1, 3, 0x6e5034, 0.02);
  m.box(-2, 1, -2, 3, 7, 3, (x, y) => (y % 3 === 0 ? 0xd7f3ee : 0x9fd8cf), 0.01);
  m.box(-1, 7, -1, 2, 8, 2, 0xe7c56a, 0.02);
  m.box(-2, 8, -2, 3, 9, 3, 0xc9a24a, 0.02);
  return m;
}

function buildShedInterior() {
  const m = new VoxelModel();
  const wood = 0x8a5e36;
  m.box(-28, 22, -18, 28, 24, -16, wood, 0.03);
  m.box(-28, 22, 2, 28, 24, 4, wood, 0.03);
  for (const x of [-22, -8, 8, 22]) {
    m.box(x, 14, -18, x + 1, 24, -16, 0xc9b98a, 0.02);
    m.box(x, 14, 2, x + 1, 24, 4, 0xc9b98a, 0.02);
  }
  m.box(-36, 8, -22, -30, 10, 16, wood, 0.03);
  m.box(-38, 0, -22, -36, 10, -19, wood, 0.03);
  m.box(-38, 0, 14, -36, 10, 17, wood, 0.03);
  m.box(24, 0, -6, 34, 10, 6, 0x5c6770, 0.03);
  m.box(26, 10, -4, 32, 16, 4, 0x8aa0aa, 0.02);
  m.box(28, 16, -1, 30, 20, 2, 0xd7dee4, 0.02);
  return m;
}

function buildGreenhouse() {
  const frame = new VoxelModel();
  const glass = new VoxelModel();
  const hx = 48;
  const hz = 48;
  const WH = 36;
  const white = 0xf0f2ee;
  frame.box(-hx, 0, -hz, hx, 8, hz, (x, y, z) => pick([0x9a6a3c, 0x8e6035, 0xa4743f], x >> 3, y >> 2, z >> 3, 131), 0.04);
  frame.delBox(-hx + 2, 6, -hz + 2, hx - 2, 8, hz - 2);
  frame.box(-hx + 2, 0, -hz + 2, hx - 2, 6, hz - 2, 0x4b3424, 0.05);
  for (const px of [-hx, hx - 3]) for (const pz of [-hz, hz - 3]) frame.box(px, 8, pz, px + 3, WH + 1, pz + 3, white, 0.01);
  const rt = (z) => WH + Math.round((hz - Math.abs(z)) * 0.5);
  for (const z of [-hz, hz - 3]) {
    frame.box(-hx, WH - 1, z, hx, WH + 1, z + 3, white, 0.01);
    frame.box(-hx, 8, z, hx, 10, z + 3, white, 0.01);
    for (let x = -hx + 24; x < hx - 2; x += 24) frame.box(x - 1, 8, z, x + 1, WH, z + 3, white, 0.01);
  }
  for (const x of [-hx, hx - 3]) {
    frame.box(x, WH - 1, -hz, x + 3, WH + 1, hz, white, 0.01);
    frame.box(x, 8, -hz, x + 3, 10, hz, white, 0.01);
    for (let z = -hz + 24; z < hz - 2; z += 24) frame.box(x, 8, z - 1, x + 3, WH, z + 1, white, 0.01);
  }
  for (let x = -hx; x < hx; x += 16) {
    for (let z = -hz; z < hz; z++) {
      const t = rt(z);
      frame.box(x, t, z, x + 2, t + 2, z + 1, white, 0.01);
    }
  }
  frame.box(-hx, WH + 24, -2, hx, WH + 26, 2, white, 0.01);
  for (let z = -hz; z <= hz; z++) {
    const t = rt(z);
    for (const x of [-hx, hx - 3]) frame.box(x, WH, z, x + 3, t, z + 1, (xx, yy, zz) => (yy === t - 1 ? white : null), 0.01);
  }
  frame.delBox(-10, 8, hz - 3, 10, WH, hz);
  frame.box(-11, 8, hz - 3, -9, WH, hz, white, 0.01);
  frame.box(9, 8, hz - 3, 11, WH, hz, white, 0.01);
  frame.box(-11, WH - 3, hz - 3, 11, WH - 1, hz, white, 0.01);
  frame.box(-1, 8, hz - 3, 1, WH - 3, hz, white, 0.01);
  const gcol = (x, y) => (((x + y) % 13 < 2) ? 0xe2f6f2 : mix(0xa6e0d8, 0xbdeee6, ((y * 7) % 10) / 10));
  const notMull = (x, y, z, along) => !(((along + 1000) % 24 === 0) || ((along + 1001) % 24 === 0));
  for (const z of [-hz + 1, hz - 2]) glass.box(-hx + 3, 10, z, hx - 3, WH - 1, z + 1, (x, y) => (z === hz - 2 && Math.abs(x) < 11 ? null : notMull(x, y, z, x + hx) ? gcol(x, y) : null), 0);
  for (const x of [-hx + 1, hx - 2]) glass.box(x, 10, -hz + 3, x + 1, WH - 1, hz - 3, (xx, y, z) => (notMull(xx, y, z, z + hz) ? gcol(z, y) : null), 0);
  for (let z = -hz; z < hz; z++) {
    const t = rt(z);
    for (let x = -hx + 3; x < hx - 3; x++) {
      if ((x + hx) % 16 < 2) continue;
      glass.set(x, t - 1, z, gcol(x, z), 0);
    }
  }
  for (const z of [-hz + 1, hz - 2]) {
    for (let x = -hx + 3; x < hx - 3; x++) {
      if (z === hz - 2 && Math.abs(x) < 11) continue;
      for (let y = WH - 1; y < rt(z) - 0; y++) if (z === -hz + 1 || z === hz - 2) glass.set(x, y, z, gcol(x, y), 0);
    }
  }
  frame.box(-36, 14, -40, 36, 17, -22, 0x9a6a3c, 0.04);
  for (const x of [-34, 33]) frame.box(x, 0, -40, x + 2, 14, -22, 0x8a5a30, 0.04);
  return { frame, glass };
}

function buildPicnic() {
  const m = new VoxelModel();
  const w = (x, y, z) => pick([0xb08050, 0xa57648, 0xbb8a58], x >> 2, y, z >> 2, 141);
  for (let i = 0; i < 4; i++) m.box(-22, 18, -13 + i * 7, 22, 21, -7 + i * 7, w, 0.03);
  for (const s of [-1, 1]) {
    const z0 = s < 0 ? -31 : 19;
    m.box(-22, 9, z0, 22, 12, z0 + 12, w, 0.03);
    for (const x of [-15, 12]) {
      line3(m, x, 18, s * 8, x, 0, s * 26, 0x8a5e36, 3);
    }
  }
  m.box(-22, 9, -2, 22, 12, 2, 0x9a6a3c, 0.03);
  m.box(-4, 21, -3, 4, 22, 3, 0xe8e2d0, 0.02);
  m.box(-2, 22, -1, 2, 26, 1, 0xf4f0e0, 0.02);
  return m;
}

function buildBarrel() {
  const m = new VoxelModel();
  const H = 26;
  for (let y = 0; y < H; y++) {
    const bulge = Math.sin((y / H) * Math.PI) * 1.4;
    const r = 9 + bulge;
    for (let x = -12; x <= 12; x++)
      for (let z = -12; z <= 12; z++) {
        const d = Math.hypot(x + 0.5, z + 0.5);
        if (d > r) continue;
        const ang = Math.atan2(z, x);
        const stave = Math.floor((ang + Math.PI) / (Math.PI / 6));
        const hoop = y === 3 || y === 4 || y === 13 || y === 14 || y === 22 || y === 23;
        if (y === H - 2 && d < r - 1.5) m.set(x, y, z, hash3(x, y, z, 5) > 0.8 ? 0x9ad0ec : 0x5f9fcc, 0.03);
        else if (y >= H - 2 && d < r - 1.5) continue;
        else if (d > r - 1.2 || y === 0) m.set(x, y, z, hoop ? 0x6e7276 : pick([0x8a5a30, 0x7a4f2a, 0x946236], stave, 0, 0, 151), 0.04);
      }
  }
  return m;
}

function buildCompost() {
  const m = new VoxelModel();
  const slat = (x, y, z) => (y % 5 === 4 ? 0x5d4026 : pick([0x9a6a3c, 0x8a5e36, 0xa4743f], x >> 3, y, z >> 3, 161));
  m.box(-24, 0, -20, 24, 26, -17, slat, 0.04);
  m.box(-24, 0, -20, -21, 26, 20, slat, 0.04);
  m.box(21, 0, -20, 24, 26, 20, slat, 0.04);
  m.box(-24, 0, 17, -21, 26, 20, 0x6e4a2a, 0.04);
  m.box(21, 0, 17, 24, 26, 20, 0x6e4a2a, 0.04);
  for (let x = -20; x < 20; x++)
    for (let z = -16; z < 18; z++) {
      const d = Math.hypot(x / 20, (z - 1) / 17);
      if (d > 1) continue;
      const h = Math.round(6 + (1 - d) * 14 + hash3(x, 0, z, 162) * 2);
      for (let y = 0; y < h; y++) m.set(x, y, z, hash3(x, y, z, 163) > 0.9 ? pick([0x7bb04a, 0xd9c36a, 0xb04a3a], x, y, z, 164) : pick([0x2e2118, 0x3a2a1c, 0x4a3524], x, y, z, 165), 0.06);
    }
  return m;
}

function buildWheelbarrow() {
  const m = new VoxelModel();
  const green = 0x3f9a58;
  m.box(-9, 8, -14, 9, 10, 10, green, 0.03);
  for (let z = -14; z <= 12; z++) {
    const lift = Math.max(0, z - 4) * 0.6;
    const w = 9 + (z + 14) * 0.15;
    for (const s of [-1, 1]) m.box(Math.round(s * w) - (s > 0 ? 0 : 0), 8, z, Math.round(s * w) + (s > 0 ? 2 : -2), 17 + Math.round(lift), z + 1, green, 0.03);
  }
  m.box(-9, 17, -14, 9, 18, -12, 0x7fcc90, 0.02);
  m.box(-8, 10, -12, 8, 15, 8, (x, y, z) => pick([0x4b3424, 0x56402c, 0x3f2c1f], x, y, z, 171), 0.07);
  line3(m, -7, 8, -14, -6, 14, -34, 0x8a5a30, 3);
  line3(m, 6, 8, -14, 5, 14, -34, 0x8a5a30, 3);
  m.box(-4, 0, 14, 4, 8, 17, 0xb0b4b8, 0.03);
  for (let x = -7; x <= 7; x++)
    for (let y = 0; y <= 14; y++) {
      const d = Math.hypot(x + 0.5, y - 6.5);
      if (d < 7.5 && d > 3.5) m.set(x, y, 15, d > 6 ? 0x2a2a2a : 0x3a3a3c, 0.03);
    }
  m.box(-1, 5, 14, 2, 8, 18, 0xe9ba3e, 0.02);
  for (const s of [-8, 6]) m.box(s, 0, -22, s + 3, 8, -19, 0x8a5a30, 0.04);
  return m;
}

function buildDryingRack() {
  const m = new VoxelModel();
  const wood = 0x8a5e36;
  for (const x of [-40, 38]) for (const z of [-8, 6]) m.box(x, 0, z, x + 3, 50, z + 3, wood, 0.04);
  for (const x of [-40, 38]) {
    m.box(x, 46, -8, x + 3, 49, 9, wood, 0.04);
    line3(m, x + 1, 12, -8, x + 1, 40, 0, wood, 2);
  }
  for (const y of [47, 36]) m.box(-40, y, -2, 41, y + 2, 1, 0x9a6a3c, 0.04);
  const pals = [
    [0x8cc34b, 0x5d9a2f],
    [0x62a346, 0x3e7a2c],
    [0x9d7cc6, 0x6c4f9a],
    [0xb3b64c, 0x868c31],
  ];
  let i = 0;
  for (let x = -34; x <= 34; x += 8, i++) {
    const row = i % 2 ? 36 : 47;
    const pal = pals[i % 4];
    const len = 13 + (i % 3) * 2;
    m.box(x, row - 4, -1, x + 1, row, 0, 0xc9b98a, 0.03);
    for (let y = 0; y < len; y++) {
      const t = y / len;
      const r = 1 + Math.sin(Math.min(1, (1 - t) * 1.1 + 0.05) * Math.PI) * 3.2;
      for (let dx = -4; dx <= 4; dx++)
        for (let dz = -4; dz <= 4; dz++) {
          const d = Math.hypot(dx, dz);
          if (d > r + (hash3(dx + x, y, dz, 181) - 0.5)) continue;
          const col = hash3(dx + x, y, dz, 182) > 0.5 ? pal[0] : pal[1];
          m.set(x + dx, row - 4 - y, dz, hash3(dx, y, dz + x, 183) > 0.9 ? 0xf08a2e : col, 0.06);
        }
    }
  }
  return m;
}

function buildGnome() {
  const m = new VoxelModel();
  m.box(-4, 0, -3, -1, 3, 4, 0x3a2a1c, 0.03);
  m.box(1, 0, -3, 4, 3, 4, 0x3a2a1c, 0.03);
  m.box(-4, 3, -3, 4, 11, 3, (x, y, z) => pick([0x3a6fb5, 0x3f78c0], x, y, z, 191), 0.04);
  m.box(-3, 6, 3, 3, 11, 5, 0xf4f0e6, 0.03);
  m.box(-2, 4, 3, 2, 6, 5, 0xe8e4da, 0.03);
  m.box(-3, 3, 3, 3, 4, 4, 0x2a2a2a, 0.02);
  m.box(-1, 8, 5, 1, 10, 7, 0xe8a76b, 0.03);
  m.box(-5, 6, -1, -4, 10, 1, 0x3a6fb5, 0.03);
  m.box(4, 6, -1, 5, 10, 1, 0x3a6fb5, 0.03);
  m.box(-3, 11, -3, 3, 13, 3, 0xe8a76b, 0.02);
  for (let y = 0; y < 14; y++) {
    const r = Math.max(0, 4.5 - y * 0.33);
    for (let x = -5; x <= 5; x++) for (let z = -5; z <= 5; z++) if (Math.hypot(x + 0.5, z + 0.5) < r + 0.5) m.set(x, 13 + y, z, (x + y) % 5 === 0 ? 0xd94a3a : 0xc43a2e, 0.04);
  }
  return m;
}

const FONT = {
  M: ['10001', '11011', '10101', '10001', '10001', '10001', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  ' ': ['000', '000', '000', '000', '000', '000', '000'],
};

function buildSign() {
  const m = new VoxelModel();
  const text = 'MOTA MAYHEM';
  let width = 0;
  for (const ch of text) width += FONT[ch][0].length + 1;
  width -= 1;
  const bw = width + 8;
  const x0 = -Math.floor(bw / 2);
  for (const px of [x0 + 3, x0 + bw - 6]) m.box(px, 0, -2, px + 3, 17, 1, 0x7a5230, 0.04);
  m.box(x0, 7, 1, x0 + bw, 18, 4, (x, y) => (y === 7 || y === 17 || x === x0 || x === x0 + bw - 1 ? 0x5d3f24 : pick([0xb68a58, 0xad8150, 0xbf9362], x >> 3, y >> 1, 0, 201)), 0.03);
  m.box(x0 + 1, 8, 4, x0 + bw - 1, 17, 5, 0x2f4420, 0.02);
  let cx = x0 + 4;
  for (const ch of text) {
    const g = FONT[ch];
    const gw = g[0].length;
    for (let r = 0; r < 7; r++) for (let c = 0; c < gw; c++) if (g[r][c] === '1') m.set(cx + c, 15 - r, 5, 0xf3e7b0, 0.03);
    cx += gw + 1;
  }
  m.box(x0 + bw - 8, 18, 1, x0 + bw - 5, 19, 4, 0x5d3f24, 0);
  return m;
}

/* ------------------------------------------------------------------- world */

export function buildWorld() {
  const group = new THREE.Group();
  const colliders = [];

  const ground = buildGround();
  placeChunked(group, ground, 1 / G, false, 64);

  const bushes = new VoxelModel();
  const bushSpots = [
    [-15, -13.2, 1.5, 0xf08ab0],
    [-17.5, -12.8, 1.2, 0xf6f3ea],
    [15.5, -13.2, 1.6, 0xb48be8],
    [18, -12.6, 1.2, 0xf6f3ea],
    [-12.2, -13.4, 1.3, 0xf5d547],
    [12.2, -13.4, 1.3, 0xf08ab0],
    [-19, 2, 1.4, 0xf6f3ea],
    [19, 0, 1.3, 0xf08ab0],
    [-19, 9, 1.5, 0xb48be8],
    [19, 9, 1.4, 0xf5d547],
    [-9, 13, 1.2, 0xf6f3ea],
    [9.5, 13, 1.3, 0xf08ab0],
    [-17, 12.5, 1.5, 0xf5d547],
    [17.5, 12.5, 1.4, 0xf6f3ea],
  ];
  for (const [x, z, r, c] of bushSpots) bush(bushes, Math.round(x * G), Math.round(z * G), Math.round(r * G), c);
  placeChunked(group, bushes, 1 / G, true, 64);

  const outer = buildOuterGround();
  placeChunked(group, outer.m, 1 / outer.S, false, 48);
  const far = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), new THREE.MeshLambertMaterial({ color: new THREE.Color(0x4a8a33) }));
  far.rotation.x = -Math.PI / 2;
  far.position.y = -0.27;
  far.receiveShadow = true;
  group.add(far);

  placeChunked(group, buildTrees(), 0.25, true, 40);
  buildFence(group);
  placeChunked(group, buildHouse(), 1 / 8, true, 64);
  colliders.push({ x0: -13.2, x1: 13.2, z0: -30, z1: -14 });

  const bedModel = buildBed();
  const patchModel = buildSoilPatch();
  const slots = [];
  BEDS.forEach((b, bi) => {
    place(group, bedModel, 1 / 16, b.x, 0, b.z);
    colliders.push({ x0: b.x - BED_SIZE.w / 2 + 0.05, x1: b.x + BED_SIZE.w / 2 - 0.05, z0: b.z - BED_SIZE.d / 2 + 0.05, z1: b.z + BED_SIZE.d / 2 - 0.05 });
    SLOT_OFFSETS.forEach(([ox, oz], si) => {
      const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
      const patch = place(group, patchModel, PVS, b.x + ox, SOIL_TOP, b.z + oz, 0, [0, 0, 0], mat, false);
      patch.castShadow = false;
      slots.push({ x: b.x + ox, z: b.z + oz, y: SOIL_TOP, bed: bi, index: slots.length, patch, patchMat: mat });
    });
  });

  const shedParts = buildShed();
  const SHED_S = 1 / 16;
  place(group, shedParts.shell, SHED_S, 16, 0, -9.5);
  const shedRoof = place(group, shedParts.roof, SHED_S, 16, 0, -9.5);
  const doorL = new THREE.Group();
  doorL.add(toMesh(buildDoorLeaf(1), SHED_S));
  doorL.position.set(16 - 16 * SHED_S, 0, -9.5 + 40 * SHED_S + 0.06);
  group.add(doorL);
  const doorR = new THREE.Group();
  doorR.add(toMesh(buildDoorLeaf(-1), SHED_S));
  doorR.position.set(16 + 16 * SHED_S, 0, -9.5 + 40 * SHED_S + 0.06);
  group.add(doorR);
  place(group, buildShedInterior(), SHED_S, 16, 0, -9.5);
  const budGeo = buildHangBud().build(SHED_S);
  const jarGeo = buildCureJar().build(SHED_S);
  const hooks = [
    [14.7, -10.55],
    [15.7, -10.55],
    [16.5, -10.55],
    [17.5, -10.55],
  ].map(([x, z]) => {
    const mesh = new THREE.Mesh(budGeo, voxelMaterial);
    mesh.position.set(x, 1.05, z);
    mesh.scale.setScalar(1.45);
    mesh.castShadow = true;
    mesh.visible = false;
    group.add(mesh);
    return { x, z, y: 0, mesh, item: null };
  });
  const cureJars = [
    [13.85, -10.7],
    [13.85, -9.9],
    [13.85, -9.1],
    [13.85, -8.3],
  ].map(([x, z]) => {
    const mesh = new THREE.Mesh(jarGeo, voxelMaterial);
    mesh.position.set(x, 0.62, z);
    mesh.scale.setScalar(1.4);
    mesh.castShadow = true;
    mesh.visible = false;
    group.add(mesh);
    return { x, z, y: 0.62, mesh, item: null };
  });
  colliders.push(
    { x0: 12.85, x1: 19.15, z0: -12.25, z1: -11.5 },
    { x0: 12.85, x1: 13.5, z0: -12.2, z1: -6.75 },
    { x0: 18.5, x1: 19.15, z0: -12.2, z1: -6.75 },
    { x0: 12.85, x1: 14.85, z0: -7.4, z1: -6.7 },
    { x0: 17.15, x1: 19.15, z0: -7.4, z1: -6.7 },
  );
  const shed = {
    roof: shedRoof,
    doorL,
    doorR,
    open: false,
    doorBlocks: [
      { x0: 14.9, x1: 16.02, z0: -7.4, z1: -6.72 },
      { x0: 15.98, x1: 17.12, z0: -7.4, z1: -6.72 },
    ],
    hooks,
    cureJars,
    contains(x, z) {
      return x > 13.55 && x < 18.45 && z < -7.5 && z > -11.45;
    },
  };

  const gh = buildGreenhouse();
  place(group, gh.frame, 1 / 16, -16, 0, -9);
  const glassMat = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.3, depthWrite: false });
  const glassMesh = place(group, gh.glass, 1 / 16, -16, 0, -9, 0, [0, 0, 0], glassMat, false);
  glassMesh.renderOrder = 2;
  colliders.push({ x0: -19.1, x1: -12.9, z0: -12.1, z1: -5.9 });
  const potModel = new VoxelModel();
  potModel.box(-4, 0, -4, 4, 6, 4, 0xc2653a, 0.05);
  potModel.box(-5, 6, -5, 5, 8, 5, 0xd2754a, 0.05);
  potModel.box(-4, 8, -4, 4, 9, 4, 0x4b3424, 0.05);
  [-1.7, -0.55, 0.6, 1.75].forEach((px, i) => {
    place(group, potModel, 1 / 16, -16 + px, 17 / 16, -9 - 1.9 + 0.1);
    const pl = toMesh(buildPlant(1 + (i % 2), i), PVS);
    pl.position.set(-16 + px, 17 / 16 + 9 / 16, -9 - 1.8);
    pl.scale.setScalar(0.9);
    group.add(pl);
  });

  place(group, buildPicnic(), 1 / 16, -16.5, 0, 6.5, 0.15);
  colliders.push({ x0: -19.2, x1: -13.8, z0: 4.4, z1: 8.9 });

  const barrel = place(group, buildBarrel(), 1 / 16, 12, 0, -6.2);
  void barrel;
  colliders.push({ x0: 11.4, x1: 12.6, z0: -6.8, z1: -5.6 });

  place(group, buildCompost(), 1 / 16, 16.5, 0, 11);
  colliders.push({ x0: 15, x1: 18, z0: 9.7, z1: 12.4 });

  place(group, buildWheelbarrow(), 1 / 16, -12.6, 0, 3.8, -0.5);
  colliders.push({ x0: -13.6, x1: -11.6, z0: 2.4, z1: 5.4 });

  place(group, buildDryingRack(), 1 / 16, 16.5, 0, 3.2);
  colliders.push({ x0: 13.8, x1: 19.2, z0: 2.4, z1: 3.9 });

  place(group, buildGnome(), 0.06, -11.5, 0, 9.5, 0.4);
  colliders.push({ x0: -11.8, x1: -11.2, z0: 9.2, z1: 9.8 });

  place(group, buildSign(), 3 / 32, -6.5, 0, 11.6);
  colliders.push({ x0: -9.2, x1: -3.8, z0: 11.4, z1: 11.8 });

  const smokeAt = new THREE.Vector3(66 / 8, 108 / 8, -139 / 8);

  function groundHeight(x, z) {
    if (Math.abs(x) < 5 && z < -11 && z > -14.2) return 6 / 8;
    if (Math.abs(x) < 4) {
      if (z >= -11 && z < -10.375) return 4 / 8;
      if (z >= -10.375 && z < -9.75) return 2 / 8;
    }
    return 0;
  }

  return { group, colliders, slots, groundHeight, smokeAt, shed };
}
