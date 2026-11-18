import * as THREE from 'three';
import { VoxelModel, hash3, toMesh, voxelMaterial } from './voxel.js';
import { LOFT, WH } from './estate.js';

const glowMat = new THREE.MeshBasicMaterial({ vertexColors: true });
const S = 16;

function put(group, model, vs, x, y, z, rotY = 0, mat = voxelMaterial, shadows = true) {
  const mesh = toMesh(model, vs, [0, 0, 0], mat, shadows);
  mesh.position.set(x, y, z);
  mesh.rotation.y = rotY;
  if (!shadows) mesh.castShadow = false;
  group.add(mesh);
  return mesh;
}

function block(colliders, x, z, hx, hz) {
  colliders.push({ x0: x - hx, x1: x + hx, z0: z - hz, z1: z + hz });
}

const FONT = {
  0: ['111', '101', '101', '101', '111'],
  1: ['010', '110', '010', '010', '111'],
  2: ['111', '001', '111', '100', '111'],
  3: ['111', '001', '111', '001', '111'],
  4: ['101', '101', '111', '001', '001'],
  5: ['111', '100', '111', '001', '111'],
  6: ['111', '100', '111', '101', '111'],
  7: ['111', '001', '010', '010', '010'],
  8: ['111', '101', '111', '101', '111'],
  9: ['111', '101', '111', '001', '111'],
  F: ['111', '100', '110', '100', '100'],
  H: ['101', '101', '111', '101', '101'],
  V: ['101', '101', '101', '101', '010'],
  E: ['111', '100', '110', '100', '111'],
  G: ['111', '100', '101', '101', '111'],
  B: ['110', '101', '110', '101', '110'],
  U: ['101', '101', '101', '101', '111'],
  D: ['110', '101', '101', '101', '110'],
  O: ['111', '101', '101', '101', '111'],
  P: ['110', '101', '110', '100', '100'],
  N: ['101', '111', '111', '101', '101'],
  '/': ['001', '001', '010', '100', '100'],
  ' ': ['0', '0', '0', '0', '0'],
};

function stamp(m, text, x, y, z, col, s = 2) {
  let cx = x;
  for (const ch of text) {
    const g = FONT[ch] || FONT[' '];
    const gw = g[0].length;
    for (let r = 0; r < g.length; r++) {
      for (let c = 0; c < gw; c++) {
        if (g[r][c] !== '1') continue;
        for (let dy = 0; dy < s; dy++) for (let dx = 0; dx < s; dx++) m.set(cx + c * s + dx, y - r * s - dy, z, col, 0);
      }
    }
    cx += (gw + 1) * s;
  }
}

function makeReadout(line1, line2, accent) {
  const g = new THREE.Group();
  const body = new VoxelModel();
  body.box(-2, -2, -1, 34, 28, 1, 0x1c241c, 0.03);
  body.box(-1, -1, 0, 33, 27, 1, 0x121812, 0.02);
  const screen = new VoxelModel();
  screen.box(0, 0, 1, 32, 24, 2, 0x07140c, 0);
  stamp(screen, line1, 2, 20, 2, accent, 2);
  stamp(screen, line2, 2, 9, 2, 0xe7ffd8, 2);
  screen.box(2, 2, 2, 12, 5, 3, accent, 0);
  screen.box(14, 2, 2, 22, 4, 3, 0x355c40, 0);
  g.add(toMesh(body, 1 / S));
  g.add(toMesh(screen, 1 / S, [0, 0, 0], glowMat, false));
  return g;
}

function makePanel(halfX, halfZ, hex) {
  const g = new THREE.Group();
  const rim = new VoxelModel();
  rim.box(-halfX - 2, 0, -halfZ - 2, halfX + 2, 2, halfZ + 2, 0x241c14, 0.02);
  rim.delBox(-halfX, 0, -halfZ, halfX, 2, halfZ);
  g.add(toMesh(rim, 1 / S));
  const glow = new VoxelModel();
  glow.box(-halfX, 0, -halfZ, halfX, 1, halfZ, 0xfff6e4, 0);
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, color: hex });
  g.add(toMesh(glow, 1 / S, [0, 0, 0], mat, false));
  return g;
}

function placePanel(parent, x, y, z, halfX, halfZ, hex) {
  const panel = makePanel(halfX, halfZ, hex);
  panel.position.set(x, y, z);
  parent.add(panel);
  return panel;
}

function makeFan() {
  const g = new THREE.Group();
  const stand = new VoxelModel();
  stand.box(-2, 0, -2, 2, 3, 2, 0x3a4046, 0.03);
  stand.box(-1, 3, -1, 1, 16, 1, 0x4a5450, 0.03);
  stand.box(-7, 14, -1, 7, 17, 2, 0x232826, 0.02);
  g.add(toMesh(stand, 1 / S));
  const blades = new VoxelModel();
  blades.box(-1, -1, 0, 2, 2, 2, 0xe8e2d4, 0);
  blades.box(-9, -1, 1, -1, 1, 2, 0xd5dbd6, 0);
  blades.box(2, -1, 1, 10, 1, 2, 0xd5dbd6, 0);
  blades.box(-1, -9, 1, 1, -1, 2, 0xd5dbd6, 0);
  blades.box(-1, 2, 1, 1, 10, 2, 0xd5dbd6, 0);
  const bm = toMesh(blades, 1 / S, [0, 0, 0], voxelMaterial, false);
  bm.position.set(0, 15.5 / S, 0);
  g.add(bm);
  g.userData.blades = bm;
  return g;
}

function addFan(parent, fans, x, y, z, rotY) {
  const fan = makeFan();
  fan.position.set(x, y, z);
  fan.rotation.y = rotY;
  parent.add(fan);
  fans.push(fan.userData.blades);
}

function runner(group, x, z, w, d, voxelY, c0, c1) {
  const m = new VoxelModel();
  const x0 = Math.round((x - w / 2) * S);
  const x1 = Math.round((x + w / 2) * S);
  const z0 = Math.round((z - d / 2) * S);
  const z1 = Math.round((z + d / 2) * S);
  for (let px = x0; px < x1; px++) {
    for (let pz = z0; pz < z1; pz++) {
      const edge = px === x0 || pz === z0 || px === x1 - 1 || pz === z1 - 1;
      const stripe = Math.floor((pz - z0) / 3) % 2;
      m.set(px, voxelY, pz, edge ? 0x2a2418 : stripe ? c0 : c1, 0.02);
    }
  }
  put(group, m, 1 / S, 0, 0, 0, 0, voxelMaterial, false);
}

function hangSheets(group, spots) {
  const m = new VoxelModel();
  for (const [x, y, z, w, h, d] of spots) {
    m.box(
      Math.round(x * S),
      Math.round(y * S),
      Math.round(z * S),
      Math.round((x + w) * S),
      Math.round((y + h) * S),
      Math.round((z + d) * S),
      (px, py, pz) => (hash3(px, py, pz, 4) > 0.45 ? 0xf7fafc : 0xc5d0d8),
      0.03,
    );
  }
  put(group, m, 1 / S, 0, 0, 0, 0, voxelMaterial, false);
}

function buildLantern() {
  const post = new VoxelModel();
  post.box(-2, 0, -2, 2, 22, 2, 0x5c4030, 0.04);
  post.box(-4, 21, -4, 4, 23, 4, 0x2c2418, 0.02);
  post.box(-4, 28, -4, 4, 30, 4, 0x2c2418, 0.02);
  const glow = new VoxelModel();
  glow.box(-3, 23, -3, 3, 28, 3, 0xfff3c4, 0);
  return { post, glow };
}

function buildSconce() {
  const wood = new VoxelModel();
  wood.box(-1, 0, 0, 2, 6, 2, 0x5c4030, 0.03);
  wood.box(-4, 4, 1, 4, 7, 3, 0x2c2418, 0.02);
  const glow = new VoxelModel();
  glow.box(-3, 1, 3, 3, 4, 5, 0xfff1c2, 0);
  return { wood, glow };
}

function buildBulb() {
  const m = new VoxelModel();
  m.box(0, 3, 0, 1, 6, 1, 0x2c261c, 0);
  m.box(-1, 0, -1, 2, 3, 2, 0xfff6c8, 0);
  m.set(0, -1, 0, 0xffd56a, 0);
  return m;
}

function buildChair() {
  const m = new VoxelModel();
  m.box(-4, 0, -4, -2, 6, -2, 0xf3ecdc, 0.02);
  m.box(2, 0, -4, 4, 6, -2, 0xf3ecdc, 0.02);
  m.box(-4, 0, 2, -2, 6, 4, 0xf3ecdc, 0.02);
  m.box(2, 0, 2, 4, 6, 4, 0xf3ecdc, 0.02);
  m.box(-5, 6, -5, 5, 8, 5, 0x2f6a3a, 0.03);
  m.box(-5, 8, -5, 5, 16, -3, 0xf7f4ea, 0.02);
  m.box(-4, 10, -4, 4, 14, -3, 0x3f7a4a, 0.02);
  return m;
}

function buildCat() {
  const m = new VoxelModel();
  m.box(-5, 0, -3, 4, 4, 3, 0xc47a3a, 0.04);
  m.box(-2, 3, 2, 3, 7, 6, 0xd08a48, 0.03);
  m.box(-3, 6, 3, -1, 8, 5, 0xc47a3a, 0.03);
  m.box(1, 6, 3, 3, 8, 5, 0xc47a3a, 0.03);
  m.set(-1, 5, 6, 0x1c140c, 0);
  m.set(1, 5, 6, 0x1c140c, 0);
  m.set(0, 4, 6, 0xf2c2a0, 0);
  m.box(3, 1, -1, 8, 3, 1, 0xc47a3a, 0.04);
  m.box(6, 3, -1, 8, 6, 1, 0xd08a48, 0.03);
  return m;
}

function buildPlanter() {
  const m = new VoxelModel();
  m.box(-5, 0, -5, 5, 6, 5, 0xc2653a, 0.04);
  m.box(-6, 6, -6, 6, 8, 6, 0xd2754a, 0.03);
  m.box(-4, 7, -4, 4, 9, 4, 0x4b3424, 0.04);
  m.box(-2, 8, -2, 2, 14, 2, 0x3f8a2a, 0.05);
  m.set(-3, 11, 0, 0xf6f3ea, 0);
  m.set(2, 12, 1, 0xf08ab0, 0);
  m.set(0, 14, -1, 0xf5d547, 0);
  return m;
}

function buildMat() {
  const m = new VoxelModel();
  m.box(-8, 0, -5, 8, 1, 5, (x, _y, z) => {
    if (Math.abs(x) > 6 || Math.abs(z) > 3) return 0x6b4428;
    return (x + z) & 1 ? 0x8d6844 : 0xc4a06a;
  }, 0.02);
  return m;
}

function buildArch() {
  const m = new VoxelModel();
  m.box(-36, 0, -3, -32, 40, 3, 0xf3ecdc, 0.02);
  m.box(32, 0, -3, 36, 40, 3, 0xf3ecdc, 0.02);
  for (let i = 0; i <= 24; i++) {
    const a = Math.PI * (i / 24);
    const x = Math.round(Math.cos(a) * 34);
    const y = 36 + Math.round(Math.sin(a) * 12);
    m.box(x - 2, y, -2, x + 2, y + 4, 2, 0xf3ecdc, 0.02);
    if (i % 3 === 0) {
      m.set(x, y + 4, 0, 0x3f8a2a, 0.04);
      m.set(x, y + 5, 1, i % 2 ? 0xf08ab0 : 0xf6f3ea, 0);
    }
  }
  return m;
}

function buildFirePit() {
  const ring = new VoxelModel();
  const ember = new VoxelModel();
  for (let x = -10; x <= 10; x++) {
    for (let z = -10; z <= 10; z++) {
      const d = Math.hypot(x, z);
      if (d < 9.2 && d > 5.6) {
        const col = hash3(x, 0, z, 2) > 0.55 ? 0x8d9398 : 0x6a7278;
        ring.set(x, 0, z, col, 0.04);
        ring.set(x, 1, z, 0x9aa0a4, 0.03);
        ring.set(x, 2, z, 0xb0b6ba, 0.03);
      }
      if (d <= 5) ember.set(x, 0, z, hash3(x, 1, z, 3) > 0.72 ? 0xffe08a : hash3(x, 2, z, 4) > 0.4 ? 0xff6a2a : 0xc43a1c, 0);
    }
  }
  ring.box(-16, 0, -3, -9, 3, 2, 0x6b4528, 0.04);
  ring.box(9, 0, -2, 16, 3, 3, 0x5c3b21, 0.04);
  ring.box(-2, 0, 9, 3, 3, 15, 0x6b4528, 0.04);
  return { ring, ember };
}

function buildBath() {
  const m = new VoxelModel();
  m.box(-2, 0, -2, 2, 10, 2, 0x9aa0a4, 0.03);
  m.box(-7, 10, -7, 7, 12, 7, 0xdfe3e6, 0.02);
  m.box(-5, 12, -5, 5, 13, 5, 0x7eb6d8, 0.02);
  m.box(2, 12, -1, 6, 15, 2, 0xf4f0e6, 0.02);
  m.box(5, 13, -1, 8, 15, 1, 0xf6c84a, 0.02);
  m.set(3, 14, 2, 0x1c140c, 0);
  return m;
}

function buildMailbox() {
  const m = new VoxelModel();
  m.box(-1, 0, -1, 2, 16, 2, 0x6b4428, 0.03);
  m.box(-5, 14, -3, 6, 20, 4, 0x3a6fb5, 0.03);
  m.box(-5, 18, -3, 6, 21, 4, 0xe4e8f0, 0.02);
  m.box(6, 16, -1, 10, 18, 1, 0xc43a2e, 0.02);
  return m;
}

function buildBench() {
  const m = new VoxelModel();
  m.box(-18, 8, -6, 18, 11, 6, 0x8a5e36, 0.03);
  for (const x of [-16, 12]) for (const z of [-4, 3]) m.box(x, 0, z, x + 3, 8, z + 3, 0x5c4030, 0.03);
  m.box(-14, 11, -3, -6, 16, 2, 0xc9a24a, 0.02);
  m.box(-4, 11, -2, 2, 14, 2, 0x3d8f6a, 0.02);
  m.box(5, 11, -4, 14, 13, 3, 0x6e5030, 0.03);
  return m;
}

function buildTools() {
  const m = new VoxelModel();
  m.box(-10, 0, 0, 10, 14, 1, 0x6b4428, 0.03);
  m.box(-7, 2, 1, -5, 12, 2, 0xb7bcc2, 0.02);
  m.box(2, 3, 1, 4, 12, 2, 0x8a5a30, 0.03);
  m.box(1, 10, 1, 7, 12, 2, 0xd5dbd6, 0.02);
  return m;
}

function buildBasket() {
  const m = new VoxelModel();
  m.box(-1, 4, 0, 1, 10, 1, 0x5c4030, 0.02);
  m.box(-3, 0, -3, 3, 3, 3, 0x8a5a30, 0.03);
  m.box(-2, 3, -2, 2, 8, 2, 0x3f8a2a, 0.05);
  m.set(-3, 2, 1, 0xf08ab0, 0);
  m.set(2, 4, 0, 0xf6f3ea, 0);
  return m;
}

function buildHose() {
  const m = new VoxelModel();
  for (let a = 0; a < 20; a++) {
    const r = 3 + (a % 3);
    const x = Math.round(Math.cos(a * 0.85) * r);
    const z = Math.round(Math.sin(a * 0.85) * r);
    m.set(x, 0, z, a % 2 ? 0x2f7f4a : 0x3d8f6a, 0.02);
    m.set(x, 1, z, 0x245c36, 0.02);
  }
  return m;
}

function buildCan() {
  const m = new VoxelModel();
  m.box(-4, 0, -3, 4, 6, 4, 0x3d8f6a, 0.03);
  m.box(-2, 6, -2, 2, 8, 2, 0x2f7f4a, 0.02);
  m.box(3, 3, 0, 9, 5, 2, 0x2f7f4a, 0.02);
  m.box(-7, 4, -1, -3, 8, 1, 0x245c36, 0.02);
  return m;
}

function buildTrimTable() {
  const m = new VoxelModel();
  m.box(0, 10, 0, 22, 12, 12, 0xc4a06a, 0.03);
  for (const x of [1, 18]) for (const z of [1, 9]) m.box(x, 0, z, x + 2, 10, z + 2, 0x8a9094, 0.03);
  m.box(2, 12, 2, 8, 14, 7, 0x6e5030, 0.03);
  m.box(10, 12, 3, 15, 15, 7, 0xd7a24a, 0.03);
  m.box(16, 12, 2, 20, 16, 5, 0xd5dbd6, 0.02);
  return m;
}

function buildDuct() {
  const m = new VoxelModel();
  for (let z = -36; z <= 36; z++) {
    for (let x = -3; x <= 3; x++) {
      for (let y = -3; y <= 3; y++) {
        const d = Math.hypot(x, y);
        if (d > 3.1 || d < 1.8) continue;
        m.set(x, y, z, (z & 7) === 0 ? 0x7d868e : 0xb7c0c8, 0.02);
      }
    }
  }
  return m;
}

function buildStripes() {
  const m = new VoxelModel();
  for (let i = 0; i < 8; i++) m.box(i * 2, 0, 0, i * 2 + 2, 1, 14, i % 2 ? 0xf5d547 : 0x1a1a1a, 0);
  return m;
}

function buildCrate(body, tape) {
  const m = new VoxelModel();
  m.box(0, 0, 0, 8, 6, 6, body, 0.04);
  m.box(3, 0, 0, 5, 6, 6, tape, 0);
  return m;
}

function buildPoster() {
  const m = new VoxelModel();
  m.box(0, 0, 0, 14, 18, 1, 0xf4efe2, 0.02);
  m.box(2, 2, 1, 12, 16, 2, 0x21401c, 0.02);
  m.box(6, 4, 2, 8, 14, 3, 0x93c85a, 0);
  m.box(3, 8, 2, 11, 11, 3, 0x6fa23f, 0);
  m.box(4, 6, 2, 6, 9, 3, 0x8ed15a, 0);
  m.box(8, 6, 2, 10, 9, 3, 0x8ed15a, 0);
  return m;
}

function catenary(m, x0, z0, x1, z1, y, sag, col, scale = 8) {
  const n = Math.max(8, Math.ceil(Math.hypot(x1 - x0, z1 - z0) * scale));
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = x0 + (x1 - x0) * t;
    const z = z0 + (z1 - z0) * t;
    const yy = y - Math.sin(Math.PI * t) * sag;
    m.set(Math.round(x * scale), Math.round(yy * scale), Math.round(z * scale), col, 0);
  }
}

function dressYard(group, colliders, bulbs) {
  const lantern = buildLantern();
  const posts = [
    [-2.55, -8.7],
    [2.55, -8.7],
    [-2.55, 0.4],
    [2.55, 0.4],
    [-2.55, 12.3],
    [2.55, 12.3],
  ];
  for (const [x, z] of posts) {
    put(group, lantern.post, 1 / S, x, 0, z);
    put(group, lantern.glow, 1 / S, x, 0, z, 0, glowMat, false);
    block(colliders, x, z, 0.18, 0.18);
  }

  const wire = new VoxelModel();
  const spans = [
    [-2.55, -8.7, -2.55, 0.4],
    [-2.55, 0.4, -2.55, 12.3],
    [2.55, -8.7, 2.55, 0.4],
    [2.55, 0.4, 2.55, 12.3],
    [-2.55, -8.7, 2.55, -8.7],
    [-2.55, 12.3, 2.55, 12.3],
  ];
  for (const [x0, z0, x1, z1] of spans) catenary(wire, x0, z0, x1, z1, 2.55, 0.28, 0x2a241c, 8);
  put(group, wire, 1 / 8, 0, 0, 0, 0, voxelMaterial, false);

  const bulb = buildBulb();
  for (const [x0, z0, x1, z1] of spans) {
    for (const t of [0.28, 0.62]) {
      const x = x0 + (x1 - x0) * t;
      const z = z0 + (z1 - z0) * t;
      const y = 2.55 - Math.sin(Math.PI * t) * 0.28 - 0.22;
      bulbs.push(put(group, bulb, 1 / 12, x, y, z, 0, glowMat, false));
    }
  }

  const sconce = buildSconce();
  for (const x of [-2.35, 2.35]) {
    put(group, sconce.wood, 1 / S, x, 1.55, -13.92);
    put(group, sconce.glow, 1 / S, x, 1.55, -13.92, 0, glowMat, false);
  }

  const chair = buildChair();
  put(group, chair, 1 / S, -3.55, 0.78, -12.55);
  put(group, chair, 1 / S, 3.55, 0.78, -12.55);
  block(colliders, -3.55, -12.55, 0.38, 0.38);
  block(colliders, 3.55, -12.55, 0.38, 0.38);
  put(group, buildCat(), 1 / S, -4.35, 0.78, -13.45, 0.4);
  block(colliders, -4.35, -13.45, 0.28, 0.22);
  put(group, buildMat(), 1 / S, 0, 0.78, -13.45, 0, voxelMaterial, false);
  const planter = buildPlanter();
  put(group, planter, 1 / S, -6.55, 0, -12.85);
  put(group, planter, 1 / S, 6.55, 0, -12.85);
  block(colliders, -6.55, -12.85, 0.42, 0.42);
  block(colliders, 6.55, -12.85, 0.42, 0.42);

  put(group, buildArch(), 1 / S, 0, 0, 9.15);
  block(colliders, -2.15, 9.15, 0.18, 0.2);
  block(colliders, 2.15, 9.15, 0.18, 0.2);

  const pit = buildFirePit();
  put(group, pit.ring, 1 / S, 6.55, 0, 10.45);
  bulbs.push(put(group, pit.ember, 1 / S, 6.55, 0.02, 10.45, 0, glowMat, false));
  block(colliders, 6.55, 10.45, 0.7, 0.7);

  put(group, buildBath(), 1 / S, -8.7, 0, 9.35);
  block(colliders, -8.7, 9.35, 0.42, 0.42);
  put(group, buildMailbox(), 1 / S, 4.85, 0, 12.15);
  block(colliders, 4.85, 12.15, 0.32, 0.28);
  put(group, buildCan(), 1 / S, 10.85, 0, -5.35, 0.6);
  block(colliders, 10.85, -5.35, 0.28, 0.24);

  const flowers = new VoxelModel();
  const blooms = [0xf6f3ea, 0xf5d547, 0xf08ab0, 0xb48be8, 0xff7f5f];
  const plant = (wx, wz) => {
    const x = Math.round(wx * 8);
    const z = Math.round(wz * 8);
    flowers.set(x, 0, z, 0x3f8a2a, 0.04);
    flowers.set(x, 1, z, 0x4a9a30, 0.04);
    flowers.set(x, 2, z, blooms[Math.abs(x + z) % blooms.length], 0.02);
  };
  for (let z = -8.2; z <= 12.2; z += 0.85) {
    plant(-1.75, z);
    plant(1.75, z);
  }
  for (let x = 6.6; x <= 14.6; x += 0.7) {
    plant(x, -13.15);
    plant(-x, -13.15);
  }
  put(group, flowers, 1 / 8, 0, 0, 0, 0, voxelMaterial, false);
}

function dressRooms(group, fans) {
  placePanel(group, -11, 3.05, -19.15, 12, 6, 0xf0d7a4);
  placePanel(group, 0.35, 2.55, -20.3, 18, 5, 0x9fd4e4);
  placePanel(group, 10.9, 3.08, -20.2, 12, 5, 0xf3e2b0);

  const mother = makeReadout('76F', '60H', 0xfff0c0);
  mother.position.set(-16.15, 1.2, -20.3);
  mother.rotation.y = Math.PI / 2;
  group.add(mother);
  const clone = makeReadout('78F', '75H', 0x9aecff);
  clone.position.set(-2.2, 1.25, -23.05);
  group.add(clone);
  const veg = makeReadout('18/6', 'VEG', 0xfff6d4);
  veg.position.set(16.15, 1.2, -21.6);
  veg.rotation.y = -Math.PI / 2;
  group.add(veg);

  hangSheets(group, [
    [-15.2, 1.15, -23.12, 0.22, 1.35, 0.06],
    [-13.4, 1.15, -23.12, 0.22, 1.35, 0.06],
    [-11.5, 1.15, -23.12, 0.22, 1.35, 0.06],
    [-9.4, 1.15, -23.12, 0.22, 1.35, 0.06],
    [7.1, 1.15, -23.12, 0.22, 1.35, 0.06],
    [9.2, 1.15, -23.12, 0.22, 1.35, 0.06],
    [11.4, 1.15, -23.12, 0.22, 1.35, 0.06],
    [13.5, 1.15, -23.12, 0.22, 1.35, 0.06],
  ]);
  runner(group, -11, -19.6, 1.15, 2.6, 12, 0x6e5030, 0xc4a06a);
  runner(group, 10.9, -20.2, 1.2, 1.15, 12, 0x8a6844, 0xc4a06a);

  addFan(group, fans, -15.85, 0.78, -18.4, Math.PI / 2);
  addFan(group, fans, 4.55, 0.78, -16.7, Math.PI);
  addFan(group, fans, 15.55, 0.78, -16.7, -Math.PI / 2);
}

function dressLoft(upper, fans) {
  const y = LOFT.y;
  placePanel(upper, -10.9, y + 1.72, -21.55, 8, 3, 0xf3e2b0);
  placePanel(upper, 0, y + 1.72, -21.45, 8, 3, 0xf3e2b0);
  const west = makeReadout('18/6', 'VEG', 0xfff6d4);
  west.position.set(-14.8, y + 0.55, -20.6);
  west.rotation.y = Math.PI / 2;
  upper.add(west);
  const mid = makeReadout('18/6', 'VEG', 0xfff6d4);
  mid.position.set(-1.6, y + 0.85, -22.85);
  upper.add(mid);

  hangSheets(upper, [
    [-14.6, y + 0.45, -22.85, 0.2, 1.15, 0.06],
    [-12.2, y + 0.45, -22.85, 0.2, 1.15, 0.06],
    [-9.6, y + 0.45, -22.85, 0.2, 1.15, 0.06],
    [-3.5, y + 0.45, -22.85, 0.2, 1.15, 0.06],
    [-1.1, y + 0.45, -22.85, 0.2, 1.15, 0.06],
    [1.3, y + 0.45, -22.85, 0.2, 1.15, 0.06],
  ]);
  runner(upper, -10.9, -20.9, 1.05, 1.5, 58, 0x8a6844, 0xc4a06a);
  runner(upper, 0, -20.2, 1.15, 1.2, 58, 0x8a6844, 0xc4a06a);
  runner(upper, 12.2, -17.6, 1.8, 1.15, 58, 0x243428, 0x314434);

  addFan(upper, fans, -15.7, y, -17.2, Math.PI / 2);
  addFan(upper, fans, 4.7, y, -16.8, -Math.PI / 2);

  const board = new VoxelModel();
  board.box(0, 0, 0, 28, 12, 2, 0x141814, 0.02);
  const neon = new VoxelModel();
  stamp(neon, 'OPEN', 2, 9, 3, 0xffffff, 2);
  const sign = new THREE.Group();
  sign.add(toMesh(board, 1 / S));
  sign.add(toMesh(neon, 1 / S, [0, 0, 0], new THREE.MeshBasicMaterial({ vertexColors: true, color: 0xb6ff6a }), false));
  sign.position.set(8.4, y + 1.2, -22.85);
  upper.add(sign);
  put(upper, buildPoster(), 1 / S, 14.15, y + 0.7, -22.9);
  put(upper, buildCrate(0xc4a06a, 0xf3e7b0), 1 / S, 15.15, y, -16.85);
  put(upper, buildCrate(0x8a5e36, 0x3d8f6a), 1 / S, 15.05, y + 0.4, -16.7, 0.2);
}

function dressWarehouse(group, colliders, warehouse, fans) {
  put(group, buildDuct(), 1 / 12, 24.7, 3.55, 0, 0, voxelMaterial, false);
  put(group, buildStripes(), 1 / S, 24.15, 0.22, -0.55, 0, voxelMaterial, false);
  put(group, buildTrimTable(), 1 / S, 34.85, 0, 3.45);
  block(colliders, 35.55, 3.85, 0.72, 0.42);
  addFan(group, fans, 28.2, 0, 4.35, Math.PI);

  hangSheets(group, [
    [36.35, 0.7, -2.6, 0.08, 1.5, 0.35],
    [36.35, 0.7, -0.4, 0.08, 1.5, 0.35],
    [36.35, 0.7, 1.8, 0.08, 1.5, 0.35],
  ]);

  const veg = makeReadout('18/6', 'VEG', 0xd8c8ff);
  const flower = makeReadout('12/12', 'BUD', 0xffc56a);
  for (const screen of [veg, flower]) {
    screen.position.set(23.72, 1.15, 2.55);
    screen.rotation.y = Math.PI / 2;
    group.add(screen);
  }
  flower.visible = warehouse.lights === 'flower';
  veg.visible = warehouse.lights !== 'flower';
  warehouse.vegScreen = veg;
  warehouse.flowerScreen = flower;
}

function dressShed(group, fans) {
  put(group, buildBench(), 1 / S, 16, 0, -11.95);
  put(group, buildTools(), 1 / S, 16.1, 1.15, -12.08);
  addFan(group, fans, 18.25, 0, -7.6, -Math.PI / 2);
}

function dressGreenhouse(group) {
  put(group, buildBasket(), 1 / S, -17.35, 1.35, -10.35);
  put(group, buildBasket(), 1 / S, -14.55, 1.45, -7.7);
  put(group, buildHose(), 1 / S, -14.35, 0.15, -10.55);
  placePanel(group, -16, 1.85, -9.7, 8, 3, 0xc9e6cf);
}

function dressClouds(group) {
  const m = new VoxelModel();
  const spots = [
    [-18, 16, -6, 8],
    [10, 17, 8, 7],
    [26, 15, -14, 6],
    [-28, 16, 12, 7],
    [4, 18, 20, 5],
  ];
  for (const [x, y, z, r] of spots) {
    m.sphereShell(Math.round(x * 2), Math.round(y * 2), Math.round(z * 2), r, 3, () => 0xf4f8ff, 0.03, 0.42);
  }
  const mesh = toMesh(m, 0.5, [0, 0, 0], voxelMaterial, false);
  mesh.castShadow = false;
  group.add(mesh);
}

export function attachDressing(group, colliders, estate) {
  const bulbs = [];
  const fans = [];
  const lamps = {
    down: new THREE.PointLight(0xfff0cc, 0, 14, 2),
    loft: new THREE.PointLight(0xfff6e0, 0, 12, 2),
    wh: new THREE.PointLight(0xc9b6ff, 0, 16, 2),
  };
  lamps.down.position.set(-1.5, 2.45, -19.4);
  lamps.loft.position.set(0, LOFT.y + 1.35, -19.6);
  lamps.wh.position.set(WH.x, 2.8, 0);
  group.add(lamps.down, lamps.wh);
  estate.house.upper.add(lamps.loft);

  dressYard(group, colliders, bulbs);
  dressRooms(group, fans);
  dressLoft(estate.house.upper, fans);
  dressWarehouse(group, colliders, estate.warehouse, fans);
  dressShed(group, fans);
  dressGreenhouse(group);
  dressClouds(group);
  return { lamps, fans, bulbs };
}
