import * as THREE from 'three';
import { VoxelModel, hash3, shade, toMesh, voxelMaterial } from './voxel.js';
import { buildPlant, PVS } from './plants.js';

export const WAREHOUSE_PRICE = 520;
export const SEED_PACK = { n: 4, cost: 16 };
export const MOTA_PER_G = { A: 4, AA: 6, AAA: 9, AAAA: 14 };
export const WH = { x: 30, z: 0, hx: 7, hz: 5.5 };
export const HOUSE = {
  half: 16.45,
  back: -23.2,
  front: -14.4,
  walkX: 15.6,
  walkZ: -22.45,
};

const GLYPH = {
  M: ['10001', '11011', '10101', '10001', '10001', '10001', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  V: ['10001', '10001', '10001', '10001', '01010', '01010', '00100'],
  G: ['01111', '10000', '10000', '10111', '10001', '10001', '01111'],
  W: ['10001', '10001', '10001', '10101', '10101', '01010', '01010'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
  F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  '5': ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
  '2': ['01110', '10001', '00001', '00010', '00100', '01000', '11111'],
  '0': ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  ' ': ['000', '000', '000', '000', '000', '000', '000'],
};

function place(group, model, vs, x, y, z, rotY = 0, mat, shadows = true) {
  const mesh = toMesh(model, vs, [0, 0, 0], mat, shadows);
  mesh.position.set(x, y, z);
  mesh.rotation.y = rotY;
  group.add(mesh);
  return mesh;
}

function textSize(text, scale) {
  let w = 0;
  for (const ch of text) w += ((GLYPH[ch] || GLYPH[' '])[0].length + 1) * scale;
  return { w: w - scale, h: 7 * scale };
}

function paintFlat(m, text, cx, cz, y, scale, col) {
  const { w, h } = textSize(text, scale);
  let x = Math.round(cx - w / 2);
  const far = Math.round(cz - h / 2);
  for (const ch of text) {
    const g = GLYPH[ch] || GLYPH[' '];
    for (let r = 0; r < g.length; r++) {
      for (let c = 0; c < g[0].length; c++) {
        if (g[r][c] !== '1') continue;
        for (let dz = 0; dz < scale; dz++)
          for (let dx = 0; dx < scale; dx++) m.set(x + c * scale + dx, y, far + r * scale + dz, col, 0.02);
      }
    }
    x += (g[0].length + 1) * scale;
  }
}

function paintWall(m, text, cx, cy, z, scale, col) {
  const { w, h } = textSize(text, scale);
  let x = Math.round(cx - w / 2);
  const top = Math.round(cy + h / 2);
  for (const ch of text) {
    const g = GLYPH[ch] || GLYPH[' '];
    for (let r = 0; r < g.length; r++) {
      for (let c = 0; c < g[0].length; c++) {
        if (g[r][c] !== '1') continue;
        for (let dy = 0; dy < scale; dy++)
          for (let dx = 0; dx < scale; dx++) m.set(x + c * scale + dx, top - r * scale - dy, z, col, 0.02);
      }
    }
    x += (g[0].length + 1) * scale;
  }
}

function buildHouseDoor() {
  const m = new VoxelModel();
  const wood = (x, y) => (x % 5 === 0 ? 0x5a3d25 : hash3(x, y, 1, 9) > 0.5 ? 0x7a5636 : 0x6d4c30);
  m.box(0, 0, -1, 18, 26, 1, wood, 0.03);
  m.box(3, 2, 1, 8, 11, 2, 0x8d6844, 0.03);
  m.box(10, 2, 1, 16, 11, 2, 0x8d6844, 0.03);
  m.box(3, 13, 1, 8, 23, 2, 0x8d6844, 0.03);
  m.box(10, 13, 1, 16, 23, 2, 0x8d6844, 0.03);
  m.box(14, 11, 1, 16, 15, 3, 0xe9ba3e, 0.02);
  return m;
}

function buildPot(big) {
  const m = new VoxelModel();
  const r = big ? 7 : 5;
  const h = big ? 9 : 7;
  m.box(-r, 0, -r, r, h, r, 0xc2653a, 0.05);
  m.box(-r - 1, h, -r - 1, r + 1, h + 2, r + 1, 0xd2754a, 0.04);
  m.box(-r + 1, h + 2, -r + 1, r - 1, h + 3, r - 1, 0x4b3424, 0.05);
  return m;
}

function buildTray() {
  const m = new VoxelModel();
  m.box(-5, 0, -4, 6, 2, 5, 0xe7ece6, 0.02);
  m.box(-4, 2, -3, 5, 3, 4, 0x5d4630, 0.03);
  m.box(-4, 3, -3, 5, 4, 4, 0x6a8f45, 0.03);
  return m;
}

function buildDome() {
  const m = new VoxelModel();
  for (let x = -4; x <= 4; x++)
    for (let z = -3; z <= 3; z++)
      for (let y = 4; y <= 8; y++) {
        const shell = Math.abs(x) >= 3 || Math.abs(z) >= 2 || y >= 7;
        if (shell) m.set(x, y, z, y === 8 ? 0xe7f7fb : 0xb7e2f2, 0.01);
      }
  return m;
}

function buildHouseInterior(group, colliders, cutaway) {
  const S = 16;
  const m = new VoxelModel();
  const vx = (n) => Math.round(n * S);
  const plaster = 0xe7dcc4;
  const trim = 0x2f4420;
  const zBack = HOUSE.back - 0.05;
  const zFront = -14.2;
  const xWest = -HOUSE.half + 0.1;
  const xEast = HOUSE.half - 0.1;
  const splitL = -5.48;
  const splitR = 5.32;
  const floor = (x0, x1, col) => {
    m.box(vx(x0), 8, vx(zBack + 0.15), vx(x1), 12, vx(zFront), (x, y, z) => (Math.floor(z / 4) % 2 === 0 ? col : shade(col, 0.9)), 0.04);
  };
  floor(xWest, splitL, 0x3f5c34);
  floor(splitL, splitR, 0xd5ddd4);
  floor(splitR, xEast, 0xc49a62);
  const wall = (x0, z0, x1, z1) => m.box(vx(x0), 12, vx(z0), vx(x1), vx(3.15), vx(z1), plaster, 0.03);
  wall(xWest, HOUSE.back - 0.2, xEast, zBack);
  wall(-HOUSE.half - 0.05, HOUSE.back - 0.2, xWest, -14.25);
  wall(xEast, HOUSE.back - 0.2, HOUSE.half + 0.05, -14.25);
  const divider = (x) => {
    wall(x, zBack, x + 0.28, -19.7);
    wall(x, -17.3, x + 0.28, -14.4);
    m.box(vx(x), vx(2.7), vx(zBack), vx(x + 0.28), vx(2.95), vx(-14.4), trim, 0.02);
  };
  divider(splitL);
  divider(splitR);
  const band = (x0, x1, z, col) => m.box(vx(x0), vx(2.85), vx(z), vx(x1), vx(3.05), vx(z + 0.25), col, 0.02);
  band(xWest + 0.15, splitL - 0.15, -22.35, 0x93c85a);
  band(splitL + 0.4, splitR - 0.4, -22.35, 0xc5e9f6);
  band(splitR + 0.4, xEast - 0.15, -22.35, 0xffe08a);
  band(xWest + 0.15, splitL - 0.15, -18.15, 0x93c85a);
  band(splitL + 0.4, splitR - 0.4, -18.15, 0xc5e9f6);
  band(splitR + 0.4, xEast - 0.15, -18.15, 0xffe08a);
  paintFlat(m, 'MOTHER', vx(-10.85), vx(-16.05), 12, 2, 0xf3e7b0);
  paintFlat(m, 'CLONE', vx(0), vx(-16.35), 12, 2, 0x234026);
  paintFlat(m, 'VEG', vx(10.85), vx(-16.05), 12, 2, 0xf3e7b0);
  place(group, m, 1 / S, 0, 0, 0);

  const push = (r) => colliders.push(r);
  push({ x0: xWest, x1: xEast, z0: HOUSE.back - 0.25, z1: zBack });
  push({ x0: -HOUSE.half - 0.1, x1: xWest, z0: HOUSE.back - 0.2, z1: -14.3 });
  push({ x0: xEast, x1: HOUSE.half + 0.1, z0: HOUSE.back - 0.2, z1: -14.3 });
  push({ x0: xWest, x1: -1.2, z0: -14.48, z1: -13.92 });
  push({ x0: 1.2, x1: xEast, z0: -14.48, z1: -13.92 });
  for (const x0 of [splitL, splitR]) {
    push({ x0, x1: x0 + 0.28, z0: zBack, z1: -19.7 });
    push({ x0, x1: x0 + 0.28, z0: -17.3, z1: -14.4 });
  }

  const door = new THREE.Group();
  door.add(toMesh(buildHouseDoor(), 1 / 8));
  door.position.set(-9 / 8, 0.75, -13.9);
  group.add(door);

  const domeMat = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.38, depthWrite: false });
  const trayGeo = buildTray().build(1 / 16);
  const domeGeo = buildDome().build(1 / 16);
  const potBig = buildPot(true);
  const potSm = buildPot(false);

  const mothers = [
    { x: -13.7, z: -21.55 },
    { x: -8.15, z: -21.55 },
  ].map((mom) => {
    place(group, potBig, 1 / 14, mom.x, 0.75, mom.z);
    const plant = toMesh(buildPlant(0, 'bd'), PVS);
    plant.position.set(mom.x, 0.75 + 0.78, mom.z);
    plant.scale.setScalar(0.55);
    plant.visible = false;
    plant.castShadow = true;
    group.add(plant);
    return { ...mom, state: 'empty', strain: null, stage: 0, prog: 0, water: 1, cool: 0, plant };
  });

  const trayX = [-3.15, 0, 3.15];
  const trays = trayX.flatMap((x) => [-21.35, -18.85].map((z) => ({ x, z }))).map(({ x, z }) => {
    const base = new THREE.Mesh(trayGeo, voxelMaterial);
    base.position.set(x, 0.75, z);
    base.castShadow = true;
    group.add(base);
    const dome = new THREE.Mesh(domeGeo, domeMat);
    dome.position.set(x, 0.75, z);
    dome.renderOrder = 2;
    group.add(dome);
    const plant = toMesh(buildPlant(0, 'bd'), PVS);
    plant.position.set(x, 0.75 + 0.28, z);
    plant.scale.setScalar(0.62);
    plant.visible = false;
    plant.castShadow = true;
    group.add(plant);
    return { x, z, state: 'empty', t: 0, strain: null, plant, dome };
  });

  const vegSpots = [
    [8.15, -21.55],
    [13.7, -21.55],
    [8.15, -18.85],
    [13.7, -18.85],
  ].map(([x, z]) => {
    place(group, potSm, 1 / 15, x, 0.75, z);
    const plant = toMesh(buildPlant(2, 'bd'), PVS);
    plant.position.set(x, 0.75 + 0.62, z);
    plant.scale.setScalar(0.78);
    plant.visible = false;
    plant.castShadow = true;
    group.add(plant);
    return { x, z, state: 'empty', t: 0, strain: null, plant };
  });

  return {
    roof: cutaway.roof,
    facade: cutaway.facade,
    door,
    open: false,
    doorBlock: { x0: -1.15, x1: 1.2, z0: -14.25, z1: -13.72 },
    mothers,
    trays,
    veg: vegSpots,
    contains(x, z) {
      return x > -HOUSE.half + 0.4 && x < HOUSE.half - 0.4 && z < -14.25 && z > HOUSE.back + 0.32;
    },
  };
}

function buildStandModel() {
  const m = new VoxelModel();
  m.box(-12, 0, -7, 12, 14, 7, (x, y) => (y % 4 === 0 ? 0x6e5030 : 0x8a5e36), 0.04);
  m.box(-13, 14, -8, 13, 16, 8, 0xd7b072, 0.03);
  m.box(-12, 0, -7, -9, 30, -4, 0xf3ecdc, 0.02);
  m.box(9, 0, -7, 12, 30, -4, 0xf3ecdc, 0.02);
  m.box(-14, 28, -9, 14, 31, 8, 0x2f7f4a, 0.03);
  m.box(-14, 31, -9, 14, 33, -6, 0x3f9a58, 0.02);
  m.box(-9, 17, 6, 9, 26, 8, 0x1d3318, 0.02);
  paintWall(m, 'MOTA', 0, 21, 8, 1, 0xf3e7b0);
  m.box(-2, 16, 2, 2, 17, 6, 0xe9ba3e, 0.02);
  return m;
}

function buildLotSign() {
  const m = new VoxelModel();
  m.box(-3, 0, -2, 1, 20, 2, 0x7a5230, 0.04);
  m.box(18, 0, -2, 22, 20, 2, 0x7a5230, 0.04);
  m.box(-6, 16, -1, 26, 46, 3, (x, y) => (y < 18 || y > 44 || x < -4 || x > 24 ? 0x5d3f24 : 0x2f4420), 0.02);
  paintWall(m, 'WAREHOUSE', 10, 38, 3, 1, 0xf3e7b0);
  paintWall(m, '520 MOTA', 10, 26, 3, 1, 0xffe66a);
  return m;
}

function buildGate() {
  const m = new VoxelModel();
  const wood = (x, y, z) => (y % 5 === 0 ? 0x6e5030 : hash3(x, y, z, 4) > 0.5 ? 0x8a5e36 : 0x7b552f);
  m.box(-1, 0, 1, 2, 24, 38, wood, 0.04);
  m.box(-2, 4, 2, 3, 7, 36, 0xc9a06a, 0.03);
  m.box(-2, 14, 2, 3, 17, 36, 0xc9a06a, 0.03);
  m.box(0, 9, 30, 3, 13, 34, 0xe9ba3e, 0.02);
  return m;
}

function buildRollDoor() {
  const m = new VoxelModel();
  m.box(-1, 0, 1, 2, 32, 32, (x, y) => (y % 3 === 0 ? 0xc5ccd3 : 0x8e99a3), 0.03);
  m.box(-2, 14, 14, 3, 20, 20, 0xe9ba3e, 0.02);
  return m;
}

function buildWarehouseParts() {
  const shell = new VoxelModel();
  const roof = new VoxelModel();
  const glass = new VoxelModel();
  const U = 12;
  const hx = WH.hx * U;
  const hz = WH.hz * U;
  const H = 48;
  const metal = (x, y, z) => {
    if (y % 5 === 0) return 0x66707a;
    return (Math.floor(x / 6) + Math.floor(z / 6)) % 2 === 0 ? 0x8b949e : 0x7a848e;
  };
  shell.box(-hx + 2, 0, -hz + 2, hx - 2, 2, hz - 2, (x, y, z) => ((x + z) % 8 === 0 ? 0x8e9398 : 0xa3a8ad), 0.03);
  const stripe = (x, y, z) => (y > 6 && y < 10 ? 0x2f7f4a : metal(x, y, z));
  shell.box(-hx, 0, -hz, -hx + 3, H, hz, stripe, 0.03);
  shell.box(hx - 3, 0, -hz, hx, H, hz, stripe, 0.03);
  shell.box(-hx, 0, -hz, hx, H, -hz + 3, stripe, 0.03);
  shell.box(-hx, 0, hz - 3, hx, H, hz, stripe, 0.03);
  shell.delBox(-hx - 1, 0, -16, -hx + 4, 32, 16);
  shell.delBox(-hx - 1, 18, 24, -hx + 4, 34, 46);
  shell.delBox(-hx - 1, 18, -46, -hx + 4, 34, -24);
  shell.delBox(-20, 18, hz - 4, 20, 34, hz + 1);
  glass.box(-hx + 1, 18, 24, -hx + 2, 34, 46, 0xc5e7f6, 0.01);
  glass.box(-hx + 1, 18, -46, -hx + 2, 34, -24, 0xc5e7f6, 0.01);
  glass.box(-20, 18, hz - 2, 20, 34, hz - 1, 0xc5e7f6, 0.01);
  for (const lz of [-38, 0, 38]) {
    shell.box(-50, 2, lz - 9, 44, 6, lz + 9, 0x4a5450, 0.03);
    shell.box(-46, 38, lz - 1, 40, 40, lz + 2, 0x241c33, 0.02);
    shell.box(-44, 37, lz, 38, 38, lz + 1, 0xd7b4ff, 0.01);
  }
  paintWall(shell, 'WAREHOUSE', 0, 30, hz, 2, 0xf3e7b0);
  roof.box(-hx - 3, H - 1, -hz - 3, hx + 3, H + 2, hz + 3, 0x3a4450, 0.03);
  roof.box(-hx - 1, H + 2, -3, hx + 1, H + 5, 3, 0x2f7f4a, 0.02);
  for (let x = -hx; x <= hx; x += 18) roof.box(x, H - 4, -hz, x + 2, H, hz, 0x2c3540, 0.02);
  return { shell, roof, glass };
}

function buildSaleBanner() {
  const m = new VoxelModel();
  m.box(-28, 0, 0, 28, 12, 2, 0x1d3318, 0.02);
  paintWall(m, 'FOR SALE', 0, 6, 2, 1, 0xffe66a);
  return m;
}

function buildWarehouse(group, colliders) {
  const parts = buildWarehouseParts();
  const U = 12;
  place(group, parts.shell, 1 / U, WH.x, 0, WH.z);
  const roof = place(group, parts.roof, 1 / U, WH.x, 0, WH.z);
  const glassMat = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.32, depthWrite: false });
  const glass = place(group, parts.glass, 1 / U, WH.x, 0, WH.z, 0, glassMat, false);
  glass.renderOrder = 2;
  const forSale = place(group, buildSaleBanner(), 1 / 14, WH.x, 1.15, WH.z + WH.hz + 0.08);

  const door = new THREE.Group();
  door.add(toMesh(buildRollDoor(), 1 / U));
  door.position.set(WH.x - WH.hx + 0.02, 0, -1.28);
  group.add(door);

  const gate = new THREE.Group();
  gate.add(toMesh(buildGate(), 1 / 16));
  gate.position.set(20.02, 0, -1.2);
  group.add(gate);

  const x = WH.x;
  const hz = WH.hz;
  const west = x - WH.hx;
  const east = x + WH.hx;
  colliders.push(
    { x0: west - 0.12, x1: west + 0.32, z0: -hz, z1: -1.4 },
    { x0: west - 0.12, x1: west + 0.32, z0: 1.4, z1: hz },
    { x0: east - 0.32, x1: east + 0.12, z0: -hz, z1: hz },
    { x0: west, x1: east, z0: hz - 0.32, z1: hz + 0.12 },
    { x0: west, x1: east, z0: -hz - 0.12, z1: -hz + 0.32 },
  );

  const slots = [];
  for (const lx of [-3.5, -0.3, 2.9]) {
    for (const lz of [-3.15, 0, 3.15]) slots.push({ x: x + lx, z: lz, y: 0.72 });
  }

  return {
    roof,
    door,
    gate,
    forSale,
    open: false,
    owned: false,
    gateOpen: false,
    slots,
    doorBlock: { x0: west - 0.05, x1: west + 0.4, z0: -1.35, z1: 1.35 },
    gateBlock: { x0: 19.7, x1: 20.4, z0: -1.25, z1: 1.25 },
    contains(px, pz) {
      return px > west + 0.45 && px < east - 0.4 && pz > -hz + 0.45 && pz < hz - 0.45;
    },
  };
}

export function attachEstate(group, colliders, cutaway) {
  const house = buildHouseInterior(group, colliders, cutaway);
  const standMesh = place(group, buildStandModel(), 1 / 16, -3.55, 0.75, -12.65);
  colliders.push({ x0: -4.4, x1: -2.7, z0: -13.15, z1: -12.15 });
  const stand = { x: -3.55, z: -11.45, mesh: standMesh };
  const lotMesh = place(group, buildLotSign(), 1 / 16, 16.15, 0, -1.85);
  colliders.push({ x0: 15.7, x1: 17.7, z0: -2.15, z1: -1.55 });
  const lot = { x: 16.4, z: -1.05, mesh: lotMesh };
  const warehouse = buildWarehouse(group, colliders);
  return { house, stand, lot, warehouse };
}
