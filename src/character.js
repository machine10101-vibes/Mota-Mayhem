import * as THREE from 'three';
import { VoxelModel, hash3, toMesh, shade } from './voxel.js';

export const CVS = 0.058;

const C = {
  skin: 0xe8a76b,
  skinD: 0xd08b55,
  skinL: 0xf2b87c,
  blush: 0xea9a70,
  hair: 0x4b2b18,
  hair2: 0x623b21,
  brow: 0x3a1f10,
  green: [0x4a6b30, 0x56783a, 0x425f2b],
  greenD: 0x37501f,
  cuff: 0x6b8f45,
  hat: [0x4f6d30, 0x5a7a37, 0x445f29],
  hatBand: 0x2f4420,
  hatBrim: [0x587a34, 0x4a6a2b],
  leaf: 0x93c85a,
  leafD: 0x6fa23f,
  boot: [0x7c4b27, 0x6e411f, 0x8a5730],
  bootD: 0x4d2e17,
  sole: 0x362213,
  lace: 0xc9a46a,
  gold: 0xe9ba3e,
  teeth: 0xf8f4ea,
  mouth: 0x7a2a2a,
  tongue: 0xd9686a,
};

const pick = (arr, x, y, z, s = 0) => arr[Math.floor(hash3(x, y, z, s) * arr.length)];
const greenFn = (x, y, z) => pick(C.green, x, y, z, 3);

function plaid(x, y, z) {
  const h = x + z;
  const a = (((Math.floor(h / 2) % 3) + 3) % 3);
  const b = (((Math.floor(y / 2) % 3) + 3) % 3);
  if (a === 0 && b === 0) return 0x36482b;
  if (a === 0 || b === 0) return 0x7f1f22;
  return 0xb22e2e;
}

const LEAF_BIG = ['...XX...', 'X..XX..X', 'XX.XX.XX', '.XXXXXX.', 'X.XXXX.X', '..XXXX..', '...XX...'];
const LEAF_POCKET = ['..XX..', 'X.XX.X', 'XXXXXX', '.XXXX.', '..XX..'];

function buildLeg(side) {
  const x0 = side < 0 ? -6 : 1;
  const x1 = x0 + 5;
  const m = new VoxelModel();
  m.box(x0, 9, -2, x1, 13, 3, greenFn, 0.02);
  const cx0 = side < 0 ? x0 - 1 : x0;
  const cx1 = side < 0 ? x1 : x1 + 1;
  m.box(cx0, 6, -3, cx1, 9, 4, (x, y, z) => (y === 8 ? shade(C.cuff, 0.85) : C.cuff), 0.05);
  const boot = (x, y, z) => pick(C.boot, x, y, z, 5);
  m.box(x0, 1, -2, x1, 6, 3, boot, 0.03);
  m.box(cx0, 1, -3, cx1, 5, 6, boot, 0.03);
  m.delBox(cx0, 4, 5, cx1, 5, 6);
  m.box(cx0, 1, 4, cx1, 4, 6, (x, y, z) => shade(pick(C.boot, x, y, z, 6), 1.14), 0.03);
  m.box(cx0, 0, -3, cx1, 1, 6, C.sole, 0.03);
  m.box(cx0, 1, -3, cx1, 2, -2, C.bootD, 0.02);
  m.box(cx0, 1, 3, cx1, 2, 6, C.bootD, 0.02);
  for (let z = 1; z < 5; z += 2) m.box(cx0 + 1, 4, z, cx1 - 1, 5, z + 1, C.lace, 0.02);
  return m;
}

function buildTorso() {
  const m = new VoxelModel();
  m.box(-6, 13, -3, 6, 25, 3, plaid, 0);
  m.box(-6, 13, -3, 6, 17, 3, greenFn, 0.02);
  m.box(-4, 17, 2, 4, 24, 4, greenFn, 0.02);
  m.box(-4, 17, -3, 4, 20, -2, greenFn, 0.02);
  for (const sx of [-4, 2]) {
    m.box(sx, 24, -3, sx + 2, 25, 4, C.green[1], 0.03);
    m.box(sx, 20, -3, sx + 2, 24, -2, C.green[1], 0.03);
    m.box(sx, 24, 3, sx + 2, 25, 4, C.green[1], 0.03);
  }
  m.box(-3, 17, 4, 3, 22, 5, 0x34491f, 0.03);
  for (let r = 0; r < LEAF_POCKET.length; r++)
    for (let c = 0; c < 6; c++)
      if (LEAF_POCKET[r][c] === 'X') m.set(c - 3, 21 - r, 4, r === 0 || c === 0 || c === 5 ? 0x86bf4e : 0xa8dc6a, 0.03);
  m.box(-4, 22, 4, -2, 24, 5, C.gold, 0.03);
  m.box(2, 22, 4, 4, 24, 5, C.gold, 0.03);
  m.set(-3, 23, 5, shade(C.gold, 1.2), 0);
  m.set(2, 23, 5, shade(C.gold, 1.2), 0);
  m.box(-3, 25, -3, 3, 26, 3, (x, y, z) => shade(plaid(x, y, z), 1.0), 0);
  m.delBox(-2, 25, -2, 2, 26, 2);
  m.delBox(-1, 25, 2, 1, 26, 3);
  m.box(-1, 24, 2, 1, 25, 3, C.skinD, 0.02);
  return m;
}

function buildHead() {
  const m = new VoxelModel();
  m.box(-2, 24, -2, 2, 26, 2, C.skinD, 0.03);
  m.box(-7, 26, -6, 7, 41, 6, (x, y, z) => (y === 26 ? C.skinD : C.skin), 0.025);
  m.box(-8, 29, -1, -7, 34, 3, C.skinD, 0.02);
  m.box(7, 29, -1, 8, 34, 3, C.skinD, 0.02);
  m.box(-8, 30, 0, -7, 33, 2, shade(C.skinD, 0.85), 0);
  m.box(7, 30, 0, 8, 33, 2, shade(C.skinD, 0.85), 0);
  m.box(-6, 28, 5, -4, 31, 6, C.blush, 0.03);
  m.box(4, 28, 5, 6, 31, 6, C.blush, 0.03);
  m.box(-7, 28, -6, 7, 36, -3, (x, y, z) => pick([C.hair, C.hair2], x, y, z, 7), 0.05);
  m.box(-7, 31, -6, -5, 38, 2, (x, y, z) => pick([C.hair, C.hair2], x, y, z, 8), 0.05);
  m.box(5, 31, -6, 7, 38, 2, (x, y, z) => pick([C.hair, C.hair2], x, y, z, 9), 0.05);
  m.box(-7, 36, -6, 7, 41, 6, (x, y, z) => pick([C.hair, C.hair2], x, y, z, 10), 0.05);
  m.box(-7, 35, 2, 7, 36, 6, (x, y, z) => pick([C.hair, C.hair2], x, y, z, 12), 0.05);
  for (const x of [-7, -4, -3, 0, 3, 6]) m.box(x, 34, 3, x + 1, 35, 6, C.hair, 0.05);
  m.box(-1, 30, 6, 1, 32, 7, C.skinD, 0.03);
  m.set(-1, 30, 6, shade(C.skinD, 0.9), 0);
  m.set(0, 30, 6, shade(C.skinD, 0.9), 0);
  const eye = (x0) => {
    for (let c = 0; c < 4; c++) {
      m.set(x0 + c, 33, 5, 0x2a2118, 0);
      const white = c === 0 || c === 3;
      m.set(x0 + c, 32, 5, white ? 0xfdfdf8 : c === 1 ? 0x2f8a3a : 0x2a7a35, 0);
      m.set(x0 + c, 31, 5, white ? 0xf0f0e8 : c === 1 ? 0x3d9d47 : 0x359042, 0);
    }
  };
  eye(-5);
  eye(1);
  m.set(-4, 32, 5, 0x14260f, 0);
  m.set(2, 32, 5, 0x14260f, 0);
  m.set(-4, 32, 6, 0xffffff, 0);
  m.set(2, 32, 6, 0xffffff, 0);
  m.delBox(-4, 32, 6, -3, 33, 7);
  m.delBox(2, 32, 6, 3, 33, 7);
  const browY = [34, 35, 35, 35, 34];
  for (let i = 0; i < 5; i++) {
    m.set(-5 + i, browY[i], 6, C.brow, 0.03);
    m.set(1 + i, browY[4 - i], 6, C.brow, 0.03);
    m.set(-5 + i, 34, 6, C.brow, 0.03);
    m.set(1 + i, 34, 6, C.brow, 0.03);
  }
  const mouthCells = [];
  for (let x = -4; x < 4; x++) mouthCells.push([x, 28]);
  for (let x = -3; x < 3; x++) mouthCells.push([x, 27]);
  mouthCells.push([-4, 29], [3, 29]);
  for (const [x, y] of mouthCells) {
    m.del(x, y, 5);
    m.set(x, y, 4, C.skinD, 0);
  }
  const lip = 0x6a2424;
  for (let x = -3; x < 3; x++) m.set(x, 28, 4, C.teeth, 0);
  m.set(-4, 28, 4, lip, 0);
  m.set(3, 28, 4, lip, 0);
  m.set(-4, 29, 4, lip, 0);
  m.set(3, 29, 4, lip, 0);
  m.set(-3, 27, 4, lip, 0);
  m.set(2, 27, 4, lip, 0);
  for (let x = -2; x < 2; x++) m.set(x, 27, 4, C.tongue, 0);
  m.set(-1, 27, 4, shade(C.tongue, 1.1), 0);
  m.set(0, 27, 4, shade(C.tongue, 1.1), 0);
  buildHat(m);
  return m;
}

function buildHat(m) {
  const brimTop = (x, z) => pick([0x6a8a3a, 0x628236, 0x73943f], x, 0, z, 21);
  for (let x = -12; x <= 11; x++)
    for (let z = -12; z <= 11; z++) {
      const r = Math.hypot(x + 0.5, z + 0.5);
      const R = z >= 0 ? 10.4 : 11.4;
      if (r > R) continue;
      if (r > R - 2.5) {
        m.set(x, 39, z, shade(brimTop(x, z), 0.62), 0.03);
        m.set(x, 40, z, brimTop(x, z), 0.03);
      } else {
        m.set(x, 40, z, shade(brimTop(x, z), 0.8), 0.03);
        m.set(x, 41, z, brimTop(x, z), 0.03);
      }
    }
  const hf = [8.3, 8.3, 8.3, 8.1, 7.7, 7.1, 6.1, 4.8];
  const inCrown = (x, y, z) => {
    const h = hf[y - 41];
    return Math.pow(Math.abs(x + 0.5), 3) + Math.pow(Math.abs(z + 0.5), 3) <= Math.pow(h, 3);
  };
  for (let y = 41; y <= 48; y++)
    for (let x = -9; x <= 8; x++)
      for (let z = -9; z <= 8; z++) {
        if (!inCrown(x, y, z)) continue;
        const outer = !inCrown(x + 1, y, z) || !inCrown(x - 1, y, z) || !inCrown(x, y, z + 1) || !inCrown(x, y, z - 1) || y === 48;
        let col;
        if (y <= 42) col = shade(C.hatBand, 0.92 + hash3(x, y, z, 2) * 0.2);
        else col = pick(C.hat, x, y, z, 31);
        if (y >= 47 && outer) col = shade(col, 1.12);
        m.set(x, y, z, col, 0.03);
      }
  const LEAF6 = ['...XX...', 'X..XX..X', 'XX.XX.XX', '.XXXXXX.', '..XXXX..', '...XX...'];
  for (let r = 0; r < LEAF6.length; r++) {
    const y = 47 - r;
    for (let c = 0; c < 8; c++) {
      if (LEAF6[r][c] !== 'X') continue;
      const x = c - 4;
      let zf = 9;
      while (zf > -9 && !inCrown(x, y, zf)) zf--;
      m.set(x, y, zf + 1, r === 5 ? C.leafD : c === 0 || c === 7 || r === 0 ? 0xa4d56a : 0xb8e67c, 0.03);
    }
  }
}

function buildArm(side) {
  const m = new VoxelModel();
  const x0 = side < 0 ? -10 : 6;
  const x1 = x0 + 4;
  const ox0 = side < 0 ? x0 - 1 : x0;
  const ox1 = side < 0 ? x1 : x1 + 1;
  m.box(x0, 20, -2, x1, 25, 2, plaid, 0);
  m.box(ox0, 17, -3, ox1, 20, 3, (x, y, z) => (y === 17 ? 0x6a1a1c : 0x9a2428), 0.05);
  m.box(x0, 13, -2, x1, 17, 2, C.skin, 0.025);
  m.box(ox0, 9, -2, ox1, 13, 3, C.skin, 0.025);
  m.box(ox0, 9, 2, ox1, 13, 3, (x, y) => (y % 2 === 0 ? C.skinD : C.skin), 0.02);
  m.box(ox0, 9, -2, ox1, 10, 3, C.skinD, 0.02);
  const tx = side < 0 ? ox1 - 1 : ox0;
  m.box(tx, 11, 3, tx + 1, 13, 4, C.skinL, 0.02);
  return m;
}

function buildCan() {
  const m = new VoxelModel();
  m.box(6, 8, 4, 12, 14, 10, 0x4f86b8, 0.04);
  m.box(6, 13, 4, 12, 14, 10, 0x74a6d4, 0.03);
  m.box(8, 12, 10, 10, 13, 14, 0x4f86b8, 0.03);
  m.box(8, 13, 12, 10, 14, 16, 0x4f86b8, 0.03);
  m.box(8, 14, 15, 10, 15, 17, 0x9ac4e8, 0.03);
  m.box(11, 14, 5, 12, 17, 9, 0x3e6e9a, 0.03);
  return m;
}

export function createPlayer() {
  const root = new THREE.Group();
  const rig = new THREE.Group();
  root.add(rig);
  const S = CVS;

  const mk = (model, pivot, parent, parentPivot = [0, 0, 0], shadows = true) => {
    const g = new THREE.Group();
    g.position.set((pivot[0] - parentPivot[0]) * S, (pivot[1] - parentPivot[1]) * S, (pivot[2] - parentPivot[2]) * S);
    g.add(toMesh(model, S, pivot, undefined, shadows));
    parent.add(g);
    return g;
  };

  const hipP = [0, 13, 0];
  const legL = mk(buildLeg(-1), [-3.5, 13, 0], rig);
  const legR = mk(buildLeg(1), [3.5, 13, 0], rig);
  const torso = mk(buildTorso(), hipP, rig);
  const head = mk(buildHead(), [0, 25, 0], torso, hipP);
  const armL = mk(buildArm(-1), [-8, 24, 0], torso, hipP);
  const armR = mk(buildArm(1), [8, 24, 0], torso, hipP);
  const canMesh = toMesh(buildCan(), S, [8, 24, 0]);
  canMesh.visible = false;
  armR.add(canMesh);

  const state = { phase: 0, action: 0, actionKind: 'none', blend: 0, idle: 0, lookT: 0 };

  function playAction(kind) {
    state.action = 1;
    state.actionKind = kind;
    canMesh.visible = kind === 'water';
  }

  function update(dt, speed01) {
    state.idle += dt;
    state.phase += dt * (5 + speed01 * 5);
    state.blend += (speed01 - state.blend) * Math.min(1, dt * 12);
    const b = state.blend;
    const sw = Math.sin(state.phase);
    const swing = sw * 0.75 * b;
    legL.rotation.x = swing;
    legR.rotation.x = -swing;
    armL.rotation.x = -swing * 0.9;
    armR.rotation.x = swing * 0.9;
    armL.rotation.z = -0.1;
    armR.rotation.z = 0.1;
    const bob = Math.abs(Math.cos(state.phase)) * 0.045 * b;
    const breathe = Math.sin(state.idle * 2.2) * 0.012 * (1 - b);
    torso.position.y = 13 * S + bob + breathe;
    torso.rotation.x = 0.08 * b;
    torso.rotation.y = Math.sin(state.phase) * 0.09 * b;
    head.rotation.x = -0.04 * b + Math.sin(state.idle * 1.3) * 0.015;
    head.rotation.y = -torso.rotation.y * 0.6;
    rig.position.y = 0;
    rig.scale.set(1, 1, 1);

    if (state.action > 0) {
      state.action = Math.max(0, state.action - dt / 0.75);
      const t = 1 - state.action;
      const k = Math.sin(Math.min(1, t) * Math.PI);
      if (state.actionKind === 'water') {
        armR.rotation.x = -1.35 * k + armR.rotation.x * (1 - k);
        armR.rotation.z = 0.1 * (1 - k);
        canMesh.rotation.x = 0.5 * k;
        torso.rotation.x += 0.12 * k;
      } else {
        const dip = k;
        torso.rotation.x += 0.45 * dip;
        torso.position.y -= 0.16 * dip;
        legL.rotation.x = -0.5 * dip;
        legR.rotation.x = -0.5 * dip;
        head.rotation.x = -0.3 * dip;
        armL.rotation.x = -1.2 * dip + armL.rotation.x * (1 - dip);
        armR.rotation.x = -1.2 * dip + armR.rotation.x * (1 - dip);
      }
      if (state.action === 0) canMesh.visible = false;
    }
  }

  return { root, rig, update, playAction, head, torso };
}
