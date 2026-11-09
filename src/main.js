import * as THREE from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import '@fontsource/press-start-2p';
import './style.css';
import { createPlayer, LOOK_KEYS, LOOK_OPTIONS, normalizeLook } from './character.js';
import { BEDS, buildWorld, SLOT_OFFSETS } from './world.js';
import { buildPlant, PVS } from './plants.js';
import { VoxelModel, toMesh, voxelMaterial } from './voxel.js';
import { buildMotaToken, HOUSE, LOFT, MOTA_PER_G, SEED_PACK, SUPPLIES, UNLOCK, WAREHOUSE_PRICE } from './estate.js';
import { Particles, Butterflies } from './fx.js';
import { STRAIN_IDS, STRAINS, seedTotal, starterSeeds, strainOf, strainPace } from './strains.js';
import { loadSave, writeSave } from './save.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const coarse = matchMedia('(pointer: coarse)').matches;

/* ---------------------------------------------------------------- renderer */
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: params.has('shot') });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.NoToneMapping;
$('stage').appendChild(renderer.domElement);

let pixelScale = Number(params.get('px')) || Number(localStorage.getItem('mm-pixel')) || 0;
const autoScale = () => Math.max(1, Math.round(viewSize().h / 440));
let rt = null;
const post = new THREE.ShaderMaterial({
  uniforms: {
    tColor: { value: null },
    tDepth: { value: null },
    res: { value: new THREE.Vector2(1, 1) },
    near: { value: 1 },
    far: { value: 220 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
  fragmentShader: `
    uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 res; uniform float near; uniform float far;
    varying vec2 vUv;
    float lin(float d){ float z = d * 2.0 - 1.0; return (2.0 * near * far) / (far + near - z * (far - near)); }
    float L(vec2 o){ return lin(texture2D(tDepth, vUv + o / res).x); }
    void main(){
      vec4 c = texture2D(tColor, vUv);
      float d = L(vec2(0.0));
      float e = max(max(d - L(vec2(-1.0, 0.0)), d - L(vec2(1.0, 0.0))), max(d - L(vec2(0.0, 1.0)), d - L(vec2(0.0, -1.0))));
      float edge = step(0.018 * d + 0.12, e);
      vec3 col = c.rgb;
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, 1.12);
      col = mix(col, col * vec3(0.16, 0.19, 0.24), edge * 0.92);
      vec2 q = vUv - 0.5;
      col *= 1.0 - dot(q, q) * 0.42;
      gl_FragColor = vec4(col, 1.0);
      #include <colorspace_fragment>
    }
  `,
  depthTest: false,
  depthWrite: false,
});
const quad = new FullScreenQuad(post);

function viewSize() {
  const vv = window.visualViewport;
  return { w: Math.max(1, Math.floor(vv?.width || window.innerWidth)), h: Math.max(1, Math.floor(vv?.height || window.innerHeight)) };
}

function resize() {
  const vs = viewSize();
  const ps = pixelScale || autoScale();
  const w = Math.max(64, Math.floor(vs.w / ps));
  const h = Math.max(64, Math.floor(vs.h / ps));
  renderer.setPixelRatio(1);
  renderer.setSize(w, h, false);
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  if (rt) rt.dispose();
  rt = new THREE.WebGLRenderTarget(w, h, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthTexture: new THREE.DepthTexture(w, h) });
  post.uniforms.res.value.set(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

/* ------------------------------------------------------------------- scene */
const scene = new THREE.Scene();
const SKY = 0xa8d8ee;
scene.background = new THREE.Color(SKY);
scene.fog = new THREE.Fog(SKY, 55, 120);
const camera = new THREE.PerspectiveCamera(33, 16 / 9, 1, 220);

scene.add(new THREE.HemisphereLight(0xd8ecff, 0x6f8a45, 1.55));
const sun = new THREE.DirectionalLight(0xfff0cf, 2.6);
sun.position.set(-16, 30, 16);
sun.target.position.set(0, 0, -3);
sun.castShadow = true;
sun.shadow.mapSize.set(coarse ? 2048 : 4096, coarse ? 2048 : 4096);
const sc = sun.shadow.camera;
sc.left = -36;
sc.right = 46;
sc.top = 26;
sc.bottom = -34;
sc.near = 5;
sc.far = 110;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.035;
scene.add(sun, sun.target);

/* ------------------------------------------------------------------- state */
const state = {
  mode: 'loading',
  seeds: starterSeeds(),
  clones: [],
  nutrients: 0,
  cubes: 0,
  mota: 0,
  jars: { AAAA: 0, AAA: 0, AA: 0, A: 0 },
  grams: 0,
  harvested: 0,
  wet: [],
  look: null,
  strainPick: 'bd',
  returnMode: 'title',
};

let world;
let player;
let particles;
let butterflies;
const slotsData = [];
const plantMeshes = [];
const whData = [];
const whMeshes = [];
const geoCache = new Map();
const marker = new THREE.Group();

const GROW = 6;
const DUR = [7, 11, 15, 15].map((n) => n * GROW);
const RIPE_TIME = 20 * GROW;
const THIRST = 110;
const DRY_TIME = 14 * GROW;
const CURE_TIME = 16 * GROW;
const HANG_GRACE = 10 * GROW;
const ROOT_TIME = 12 * GROW;
const VEG_TIME = 16 * GROW;
const MOTHER_DUR = [8, 10].map((n) => n * GROW);
const STAGE_NAMES = ['SPROUT', 'SEEDLING', 'VEGETATIVE', 'FLOWERING', 'READY'];

function trichomeBand(ripe) {
  if (ripe < 0.34) return { id: 'clear', label: 'TRICHOMES CLEAR', pick: false };
  if (ripe < 0.72) return { id: 'cloudy', label: 'TRICHOMES CLOUDY', pick: true };
  if (ripe < 0.88) return { id: 'milky', label: 'CLOUDY + AMBER', pick: true };
  return { id: 'amber', label: 'TRICHOMES AMBER', pick: false };
}

function paintLights(W = world?.warehouse) {
  if (!W?.bulbMat) return;
  const flower = W.lights === 'flower';
  W.bulbMat.color.setHex(flower ? 0xffc56a : 0xb48cff);
}

function plantGeo(stage, strain) {
  const id = strainOf(strain).id;
  const k = stage + ':' + id;
  let g = geoCache.get(k);
  if (!g) {
    g = buildPlant(stage, id).build(PVS, [0, 0, 0]);
    geoCache.set(k, g);
  }
  return g;
}

let saveDirty = false;
let saveWait = 0;
let saveClock = 0;
let canSave = false;
function markDirty() {
  saveDirty = true;
  canSave = true;
}

function seedChoice() {
  const id = STRAINS[state.strainPick] ? state.strainPick : 'bd';
  const spec = strainOf(id);
  if ((state.seeds[id] | 0) > 0) return { id, text: `PLANT ${spec.name}`, ok: true };
  if (seedTotal(state.seeds) > 0) return { id, text: `NO ${spec.short} SEEDS`, ok: false };
  return { id, text: 'NO SEEDS', ok: false };
}

function buildMarker() {
  const m = new VoxelModel();
  const r = 17;
  const L = 6;
  for (const sx of [-1, 1])
    for (const sz of [-1, 1]) {
      const x0 = sx < 0 ? -r : r - 1;
      const z0 = sz < 0 ? -r : r - 1;
      for (let i = 0; i < L; i++) {
        m.set(sx < 0 ? -r + i : r - 1 - i, 0, z0, 0xffe66a, 0);
        m.set(x0, 0, sz < 0 ? -r + i : r - 1 - i, 0xffe66a, 0);
      }
    }
  const mesh = toMesh(m, PVS, [0, 0, 0], new THREE.MeshBasicMaterial({ vertexColors: true }), false);
  marker.add(mesh);
  marker.visible = false;
  scene.add(marker);
}

const tokens = [];
function spawnTokens() {
  const src = toMesh(buildMotaToken(), 0.1, [0, 0, 0], new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }), false);
  const geo = src.geometry;
  const mat = src.material;
  const add = (x, y, z, parent, show, scale) => {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(scale);
    mesh.name = 'mota-token';
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    parent.add(mesh);
    tokens.push({ mesh, y, phase: tokens.length * 0.7, show });
  };
  for (const mom of world.house.mothers) {
    if (!mom.locked) continue;
    add(mom.x, 2.85, mom.z, scene, () => !motherOpen(mom), 1.05);
  }
  const lockedTrays = world.house.trays.filter((t) => t.locked);
  if (lockedTrays.length) {
    const x = lockedTrays.reduce((n, t) => n + t.x, 0) / lockedTrays.length;
    add(x, 2.7, lockedTrays[0].z, scene, () => !trayOpen(lockedTrays[0]), 1.05);
  }
  for (const room of ['west', 'center']) {
    const pots = world.house.veg.filter((v) => v.room === room);
    if (!pots.length) continue;
    const x = pots.reduce((n, p) => n + p.x, 0) / pots.length;
    const z = pots.reduce((n, p) => n + p.z, 0) / pots.length;
    add(x, pots[0].y + 1.65, z, world.house.upper, () => !vegOpen(pots[0]), 1.05);
  }
  BEDS.forEach((b, bed) => add(b.x, 2.55, b.z, scene, () => !!slotsData[bed * 4]?.locked, 1.45));
}

function updateTokens(time) {
  for (const tok of tokens) {
    const show = tok.show();
    tok.mesh.visible = show;
    if (!show) continue;
    tok.mesh.position.y = tok.y + Math.sin(time * 2.2 + tok.phase) * 0.12;
    tok.mesh.lookAt(camera.position.x, tok.mesh.position.y, camera.position.z);
    tok.mesh.rotateZ(Math.sin(time * 1.3 + tok.phase) * 0.16);
  }
}

/* ------------------------------------------------------------------- input */
const keys = new Set();
const pressed = new Set();
const stick = { x: 0, y: 0, run: false, cam: 0 };
let touchUI = coarse;
let ignoreCam = false;
const pointers = new Map();
let camDrag = null;
let pinch0 = 0;

function shouldTouch() {
  return matchMedia('(pointer: coarse)').matches || matchMedia('(max-width: 820px)').matches;
}

function setTouchUI(on) {
  touchUI = on;
  document.body.classList.toggle('touch-ui', on);
  if (on && state.mode === 'play') $('touch').classList.remove('hidden');
  else if (!on) $('touch').classList.add('hidden');
}

addEventListener('keydown', (e) => {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  if (!keys.has(e.code)) pressed.add(e.code);
  keys.add(e.code);
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => {
  keys.clear();
  stick.x = 0;
  stick.y = 0;
  stick.run = false;
  stick.cam = 0;
});
addEventListener('contextmenu', (e) => e.preventDefault());

const cam = { yaw: 0, yawT: 0, pitch: 0.85, dist: 30, distT: 28, target: new THREE.Vector3(0, 0.8, -3), t: 0 };
addEventListener(
  'wheel',
  (e) => {
    cam.distT = THREE.MathUtils.clamp(cam.distT + Math.sign(e.deltaY) * 1.6, 12, 36);
  },
  { passive: true }
);

function pinchDist() {
  const pts = [...pointers.values()];
  if (pts.length < 2) return 0;
  return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
}

function swallow(e) {
  if (e.cancelable) e.preventDefault();
  e.stopPropagation();
}

let lastTouchAt = 0;
addEventListener('touchstart', () => { lastTouchAt = performance.now(); }, { passive: true });
function isGhostMouse(e) {
  if (e.touches || e.changedTouches || e.pointerType === 'touch') return false;
  return performance.now() - lastTouchAt < 800;
}

function forChanged(e, fn) {
  if (e.changedTouches) {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      fn({ id: 't' + t.identifier, x: t.clientX, y: t.clientY, touch: true });
    }
    return;
  }
  if (e.pointerType === 'touch') return;
  fn({ id: 'p' + (e.pointerId ?? 1), x: e.clientX, y: e.clientY, touch: false });
}

function uiTarget(el) {
  return !!el?.closest?.('#touch, #hud, #dress, #shop, #strains, .title-actions, button, .tbtn');
}

function onCamDown(e) {
  if (e.button && e.button !== 0) return;
  if (isGhostMouse(e)) return;
  if (uiTarget(e.target)) return;
  if (state.mode === 'title') {
    if (e.touches || e.pointerType === 'touch') setTouchUI(true);
    startGame();
    ignoreCam = true;
    return;
  }
  if (ignoreCam || state.mode !== 'play') return;
  forChanged(e, (p) => {
    if (p.touch) setTouchUI(true);
    pointers.set(p.id, { x: p.x, y: p.y });
    if (pointers.size === 1) camDrag = { id: p.id, x: p.x, y: p.y, moved: false };
    if (pointers.size === 2) {
      camDrag = null;
      pinch0 = pinchDist();
    }
  });
}

function onCamMove(e) {
  forChanged(e, (p) => {
    const cur = pointers.get(p.id);
    if (!cur) return;
    cur.x = p.x;
    cur.y = p.y;
    if (pointers.size >= 2 && pinch0) {
      const d = pinchDist();
      cam.distT = THREE.MathUtils.clamp(cam.distT + (pinch0 - d) * 0.04, 12, 36);
      pinch0 = d;
      return;
    }
    if (!camDrag || camDrag.id !== p.id) return;
    const dx = p.x - camDrag.x;
    if (!camDrag.moved && Math.abs(dx) < 8) return;
    camDrag.moved = true;
    cam.yawT -= dx * 0.006;
    camDrag.x = p.x;
    camDrag.y = p.y;
  });
}

function onCamUp(e) {
  forChanged(e, (p) => {
    const drag = camDrag && camDrag.id === p.id ? camDrag : null;
    pointers.delete(p.id);
    if (!drag) return;
    camDrag = null;
    if (!drag.moved) tryPlotTap(p.x, p.y);
  });
  if (pointers.size < 2) pinch0 = 0;
  ignoreCam = false;
}

function bindStart() {
  const go = (e) => {
    if (state.mode !== 'title') return;
    if (uiTarget(e.target) || e.target.closest?.('#help')) return;
    if (e.touches || e.pointerType === 'touch') setTouchUI(true);
    startGame();
    ignoreCam = true;
  };
  $('title').addEventListener('touchstart', go, { passive: true });
  $('title').addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' || isGhostMouse(e)) return;
    go(e);
  });
}

function bindPress(el, { down, up, move }) {
  el.addEventListener(
    'touchstart',
    (e) => {
      swallow(e);
      forChanged(e, down);
    },
    { passive: false }
  );
  if (move) {
    addEventListener(
      'touchmove',
      (e) => {
        let hit = false;
        forChanged(e, (p) => {
          if (move(p, e)) hit = true;
        });
        if (hit && e.cancelable) e.preventDefault();
      },
      { passive: false }
    );
  }
  const touchUp = (e) => forChanged(e, up);
  addEventListener('touchend', touchUp);
  addEventListener('touchcancel', touchUp);
  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' || isGhostMouse(e)) return;
    swallow(e);
    forChanged(e, down);
  });
  if (move) {
    addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch' || isGhostMouse(e)) return;
      forChanged(e, (p) => move(p, e));
    });
  }
  const pUp = (e) => {
    if (e.pointerType === 'touch' || isGhostMouse(e)) return;
    forChanged(e, up);
  };
  addEventListener('pointerup', pUp);
  addEventListener('pointercancel', pUp);
}

$('title').addEventListener('touchstart', () => setTouchUI(true), { passive: true });
renderer.domElement.addEventListener('pointerdown', onCamDown);
renderer.domElement.addEventListener('touchstart', onCamDown, { passive: true });
addEventListener('pointermove', onCamMove);
addEventListener('touchmove', onCamMove, { passive: true });
addEventListener('pointerup', onCamUp);
addEventListener('pointercancel', onCamUp);
addEventListener('touchend', onCamUp);
addEventListener('touchcancel', onCamUp);

function bindHold(el, on, off) {
  let heldId = null;
  bindPress(el, {
    down: (p) => {
      if (heldId != null) return;
      heldId = p.id;
      el.classList.add('held');
      on();
    },
    up: (p) => {
      if (heldId !== p.id) return;
      heldId = null;
      el.classList.remove('held');
      off?.();
    },
  });
}

function bindStick() {
  const pad = $('stick');
  const knob = $('stick-knob');
  let active = null;
  const setFrom = (p) => {
    const r = pad.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    let dx = p.x - cx;
    let dy = p.y - cy;
    const max = Math.max(16, pad.clientWidth * 0.5 - 8);
    const len = Math.hypot(dx, dy) || 1;
    if (len > max) {
      dx *= max / len;
      dy *= max / len;
    }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    stick.x = dx / max;
    stick.y = dy / max;
  };
  const clear = () => {
    active = null;
    stick.x = 0;
    stick.y = 0;
    knob.style.transform = 'translate(0,0)';
  };
  bindPress(pad, {
    down: (p) => {
      active = p.id;
      setFrom(p);
    },
    move: (p) => {
      if (p.id !== active) return false;
      setFrom(p);
      return true;
    },
    up: (p) => {
      if (p.id === active) clear();
    },
  });
}

function bindTap(el, fn) {
  bindPress(el, {
    down: () => fn(),
    up: () => {},
  });
}

function bindTouch() {
  bindStart();
  bindStick();
  bindHold($('btn-run'), () => (stick.run = true), () => (stick.run = false));
  bindHold($('btn-cam-l'), () => (stick.cam = -1), () => (stick.cam = 0));
  bindHold($('btn-cam-r'), () => (stick.cam = 1), () => (stick.cam = 0));
  bindTap($('btn-act'), () => {
    if (state.mode === 'play') act();
  });
  bindTap($('btn-help'), () => toggleHelp());
  bindPrompt();
}

function bindPrompt() {
  const el = $('prompt');
  const go = (e) => {
    if (state.mode !== 'play' || el.style.display === 'none') return;
    swallow(e);
    act();
  };
  el.addEventListener('touchstart', go, { passive: false });
  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' || isGhostMouse(e)) return;
    go(e);
  });
}

/* ------------------------------------------------------------------ player */
const P = { x: 0, z: -6.3, y: 0, facing: 0, speed: 0, cool: 0, dust: 0 };
const PR = 0.42;

function playLimits() {
  const H = world.house;
  const W = world.warehouse;
  const insideH = H.contains(P.x, P.z);
  const crossH = H.open && Math.abs(P.x) < 1.65 && P.z < -12.4 && P.z > -15.2;
  if (insideH || crossH) {
    const lim = { x0: -19.1, x1: 19.1, z0: HOUSE.walkZ, z1: 13.3 };
    if (P.z < -14.05) {
      lim.x0 = -HOUSE.walkX;
      lim.x1 = HOUSE.walkX;
    }
    return lim;
  }
  const insideW = W.contains(P.x, P.z);
  if (insideW) return { x0: 23.72, x1: 36.32, z0: -4.82, z1: 4.82 };
  const crossW = W.owned && W.open && Math.abs(P.z) < 1.45 && P.x > 21.1 && P.x < 25.5;
  if (crossW) return { x0: 20.2, x1: 36.32, z0: -1.35, z1: 1.35 };
  const lane = W.gateOpen && Math.abs(P.z) < 1.05 && P.x > 16.4;
  if (lane) return { x0: -19.1, x1: 22.85, z0: -1.02, z1: 1.02 };
  return { x0: -19.1, x1: 19.1, z0: -13.4, z1: 13.3 };
}

function resolveCollisions() {
  const lim = playLimits();
  P.x = THREE.MathUtils.clamp(P.x, lim.x0, lim.x1);
  P.z = THREE.MathUtils.clamp(P.z, lim.z0, lim.z1);
  const blocks = world.colliders.slice();
  if (!world.shed.open) blocks.push(...world.shed.doorBlocks);
  if (!world.house.open) blocks.push(world.house.doorBlock);
  if (!world.warehouse.gateOpen) blocks.push(world.warehouse.gateBlock);
  if (world.warehouse.owned && !world.warehouse.open) blocks.push(world.warehouse.doorBlock);
  const upstairs = P.y > 1.85;
  for (let it = 0; it < 3; it++)
    for (const r of blocks) {
      if (r.floor === 1 && !upstairs) continue;
      if (r.floor === 0 && upstairs) continue;
      const nx = THREE.MathUtils.clamp(P.x, r.x0, r.x1);
      const nz = THREE.MathUtils.clamp(P.z, r.z0, r.z1);
      let dx = P.x - nx;
      let dz = P.z - nz;
      const d2 = dx * dx + dz * dz;
      if (d2 >= PR * PR) continue;
      if (d2 < 1e-6) {
        const l = P.x - r.x0;
        const rr = r.x1 - P.x;
        const t = P.z - r.z0;
        const b = r.z1 - P.z;
        const m = Math.min(l, rr, t, b);
        if (m === l) P.x = r.x0 - PR;
        else if (m === rr) P.x = r.x1 + PR;
        else if (m === t) P.z = r.z0 - PR;
        else P.z = r.z1 + PR;
        continue;
      }
      const d = Math.sqrt(d2);
      dx /= d;
      dz /= d;
      P.x = nx + dx * PR;
      P.z = nz + dz * PR;
    }
}

function updatePlayer(dt) {
  let ix = 0;
  let iz = 0;
  if (state.mode === 'play') {
    if (keys.has('KeyW') || keys.has('ArrowUp')) iz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) iz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) ix -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) ix += 1;
    if (Math.abs(stick.x) > 0.12 || Math.abs(stick.y) > 0.12) {
      ix += stick.x;
      iz += stick.y;
    }
  }
  const len = Math.hypot(ix, iz);
  let moving = false;
  if (len > 0 && P.cool <= 0.35) {
    ix /= len;
    iz /= len;
    const sy = Math.sin(cam.yaw);
    const cy = Math.cos(cam.yaw);
    const wx = ix * cy + iz * sy;
    const wz = -ix * sy + iz * cy;
    const run = keys.has('ShiftLeft') || keys.has('ShiftRight') || stick.run;
    const sp = run ? 8 : 5;
    P.x += wx * sp * dt;
    P.z += wz * sp * dt;
    const target = Math.atan2(wx, wz);
    let da = target - P.facing;
    da = Math.atan2(Math.sin(da), Math.cos(da));
    P.facing += da * Math.min(1, dt * 16);
    moving = true;
    P.speed += ((run ? 1.5 : 1) - P.speed) * Math.min(1, dt * 10);
    P.dust -= dt;
    if (P.dust <= 0) {
      P.dust = run ? 0.07 : 0.11;
      const dirt = Math.abs(P.x) < 1.4 && P.z > -9;
      particles.emit({ x: P.x - wx * 0.2, y: P.y + 0.05, z: P.z - wz * 0.2, vx: -wx * 0.6 + (Math.random() - 0.5) * 0.6, vy: 0.9 + Math.random() * 0.6, vz: -wz * 0.6 + (Math.random() - 0.5) * 0.6, life: 0.45, size: 0.07, color: dirt ? 0xb8b2a2 : 0x78b64a, g: -7 });
    }
  } else {
    P.speed += (0 - P.speed) * Math.min(1, dt * 10);
  }
  resolveCollisions();
  const gy = world.groundHeight(P.x, P.z, P.y);
  const climbed = P.y > 2.2;
  P.y += (gy - P.y) * Math.min(1, dt * 18);
  if (world.house) {
    const up = P.y > 1.45 || world.house.onStair(P.x, P.z, P.y);
    world.house.upper.visible = up;
    if (up && !climbed && P.y > 2.2) cam.distT = Math.min(Math.max(cam.distT, 16), 22);
    if (!up && climbed) cam.distT = Math.max(cam.distT, 24);
  }
  P.cool = Math.max(0, P.cool - dt);
  player.root.position.set(P.x, P.y, P.z);
  player.root.rotation.y = P.facing;
  player.update(dt, moving ? P.speed : 0);
}

/* ------------------------------------------------------------------ plants */
function initSlots() {
  world.slots.forEach((s, i) => {
    const d = { state: 'empty', stage: 0, prog: 0, water: 0, waterVis: 0, stress: 0, age: 0, strain: 'bd', pop: 1, rot: ((i * 2654435761) % 628) / 100, fromClone: false, locked: (i / 4 | 0) !== 0 };
    slotsData.push(d);
    const mesh = new THREE.Mesh(plantGeo(0, d.strain), voxelMaterial);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(s.x, s.y + 0.1, s.z);
    mesh.rotation.y = d.rot;
    mesh.visible = false;
    scene.add(mesh);
    plantMeshes.push(mesh);
  });
}

function initWarehouse() {
  world.warehouse.slots.forEach((s, i) => {
    const d = { state: 'empty', stage: 0, prog: 0, water: 0, stress: 0, age: 0, strain: 'bd', pop: 1, fromClone: false };
    whData.push(d);
    const mesh = new THREE.Mesh(plantGeo(0, d.strain), voxelMaterial);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(s.x, s.y, s.z);
    mesh.visible = false;
    scene.add(mesh);
    whMeshes.push(mesh);
  });
}

function setStage(i, stage) {
  const d = slotsData[i];
  d.stage = stage;
  d.prog = 0;
  d.pop = 0;
  d.holdVeg = false;
  plantMeshes[i].geometry = plantGeo(stage, d.strain);
  if (stage >= 4) {
    d.state = 'ripening';
    d.ripe = 0;
  }
}

function finishStage(d, mesh, indoor) {
  const next = d.stage + 1;
  if (indoor && next === 3 && world.warehouse.lights !== 'flower') {
    d.holdVeg = true;
    d.prog = 0;
    d.pop = 0;
    return;
  }
  d.stage = next;
  d.prog = 0;
  d.pop = 0;
  d.holdVeg = false;
  if (next >= 4) {
    d.state = 'ripening';
    d.ripe = 0;
  }
  mesh.geometry = plantGeo(d.stage, d.strain);
}

function gradeOf(d) {
  const q = Math.max(0, 1 - (d.stress / Math.max(1, d.age)) * 1.6);
  if (q >= 0.94) return 'AAAA';
  if (q >= 0.8) return 'AAA';
  if (q >= 0.55) return 'AA';
  return 'A';
}

function gramsFor(grade) {
  return grade === 'AAAA' ? 9 : grade === 'AAA' ? 7 : grade === 'AA' ? 5 : 3;
}

function presentPlant(mesh, d, i, time, dt) {
  d.pop = Math.min(1, d.pop + dt * 2.4);
  const back = 1 + 1.70158;
  const e = 1 + back * Math.pow(d.pop - 1, 3) + 1.70158 * Math.pow(d.pop - 1, 2);
  const sc2 = (0.2 + 0.8 * e) * (strainOf(d.strain).stature || 1);
  mesh.scale.set(sc2, sc2, sc2);
  mesh.rotation.z = Math.sin(time * 1.4 + i * 1.7) * 0.022 * (0.4 + d.stage * 0.3);
  mesh.rotation.x = Math.cos(time * 1.1 + i) * 0.015 * (0.4 + d.stage * 0.3);
}

function growTick(d, dt, speed) {
  if (d.stage >= 4) return false;
  d.water = Math.max(0, d.water - dt / THIRST);
  const dry = d.water <= 0;
  d.age += dt;
  if (dry) d.stress += dt * (d.fromClone ? 0.7 : 1);
  d.prog += (dt * (dry ? 0.35 : 1) * speed) / (DUR[d.stage] * strainPace(d.strain, d.stage));
  return d.prog >= 1;
}

function updatePlants(dt, time) {
  slotsData.forEach((d, i) => {
    const mesh = plantMeshes[i];
    const s = world.slots[i];
    if (d.state === 'empty') mesh.visible = false;
    else {
      mesh.visible = true;
      if (d.state === 'ripening') {
        d.water = Math.max(0, d.water - dt / THIRST);
        d.age += dt;
        if (d.water <= 0) d.stress += dt * (d.fromClone ? 0.7 : 1);
        d.ripe = Math.min(1.25, (d.ripe || 0) + dt / (RIPE_TIME * strainPace(d.strain, 4)));
      } else if (d.state === 'growing' && growTick(d, dt, 1)) {
        finishStage(d, mesh, false);
        burst(s, d.state === 'ripening' ? 0xfff3a0 : 0xbfe88a);
      }
      presentPlant(mesh, d, i, time, dt);
    }
    d.waterVis += (Math.min(1, d.water * 3) - d.waterVis) * Math.min(1, dt * 4);
    const v = 1.05 - 0.5 * d.waterVis;
    s.patchMat.color.setRGB(v, v * 0.98, v * 0.96);
  });
  if (!world.warehouse.owned) return;
  whData.forEach((d, i) => {
    const mesh = whMeshes[i];
    const s = world.warehouse.slots[i];
    if (d.state === 'empty') mesh.visible = false;
    else {
      mesh.visible = true;
      const flower = world.warehouse.lights === 'flower';
      if (d.holdVeg) {
        d.water = Math.max(0, d.water - dt / THIRST);
        d.age += dt;
        if (d.water <= 0) d.stress += dt * (d.fromClone ? 0.7 : 1);
        if (flower) {
          d.holdVeg = false;
          d.stage = 3;
          d.prog = 0;
          d.pop = 0;
          mesh.geometry = plantGeo(3, d.strain);
          burst(s, 0xd7b4ff);
        }
      } else if (d.state === 'ripening') {
        d.water = Math.max(0, d.water - dt / THIRST);
        d.age += dt;
        if (d.water <= 0) d.stress += dt * (d.fromClone ? 0.7 : 1);
        if (flower) d.ripe = Math.min(1.25, (d.ripe || 0) + dt / ((RIPE_TIME / 1.15) * strainPace(d.strain, 4)));
      } else if (d.state === 'growing' && d.stage >= 3 && !flower) {
        d.water = Math.max(0, d.water - dt / THIRST);
        d.age += dt;
        if (d.water <= 0) d.stress += dt * (d.fromClone ? 0.7 : 1);
      } else if (d.state === 'growing' && growTick(d, dt, 1.35)) {
        finishStage(d, mesh, true);
        burst(s, d.state === 'ripening' ? 0xfff3a0 : 0xd7b4ff);
      }
      presentPlant(mesh, d, i + 40, time, dt);
    }
  });
}

function burst(s, col) {
  for (let k = 0; k < 14; k++) particles.emit({ x: s.x, y: s.y + 0.4, z: s.z, vx: (Math.random() - 0.5) * 2.4, vy: 1.5 + Math.random() * 2, vz: (Math.random() - 0.5) * 2.4, life: 0.8, size: 0.07, color: col, g: -6 });
}

function nearestPlot() {
  const fx = P.x + Math.sin(P.facing) * 0.95;
  const fz = P.z + Math.cos(P.facing) * 0.95;
  let best = null;
  let bd = 1.9 * 1.9;
  const scan = (slots, data, where) => {
    if (where === 'wh' && (!world.warehouse.owned || (!world.warehouse.open && !world.warehouse.contains(P.x, P.z)))) return;
    slots.forEach((s, i) => {
      const d2 = (s.x - fx) ** 2 + (s.z - fz) ** 2;
      if (d2 < bd) {
        bd = d2;
        best = { where, i, s, d: data[i], d2: (s.x - P.x) ** 2 + (s.z - P.z) ** 2 };
      }
    });
  };
  scan(world.slots, slotsData, 'yard');
  scan(world.warehouse.slots, whData, 'wh');
  return best;
}

const delayed = [];
function later(t, fn) {
  delayed.push({ t, fn });
}

function toast(msg, cls = '') {
  const el = document.createElement('div');
  el.className = 'toast ' + cls;
  el.textContent = msg;
  $('toasts').appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function plotMesh(plot) {
  return plot.where === 'wh' ? whMeshes[plot.i] : plantMeshes[plot.i];
}

function beginGrow(plot, stage, fromClone, strain) {
  const { d, i, where } = plot;
  d.state = 'growing';
  d.fromClone = fromClone;
  d.strain = strainOf(strain).id;
  d.water = fromClone ? 0.9 : 0.6;
  d.stress = 0;
  d.age = 0;
  d.ripe = 0;
  d.holdVeg = false;
  if (where === 'yard') setStage(i, stage);
  else {
    d.stage = stage;
    d.prog = 0;
    d.pop = 0;
    const mesh = plotMesh(plot);
    mesh.geometry = plantGeo(stage, d.strain);
    mesh.visible = true;
  }
  markDirty();
}

function actPlot(plot) {
  const { d, s } = plot;
  const mesh = plotMesh(plot);
  if (plot.where === 'yard' && d.locked) return tryUnlockBed(s.bed);
  if (Math.hypot(s.x - P.x, s.z - P.z) > 0.3) P.facing = Math.atan2(s.x - P.x, s.z - P.z);
  if (d.state === 'empty') {
    if (state.clones.length) {
      const clone = state.clones.shift();
      beginGrow(plot, 2, true, clone.strain);
      toast(`${strainOf(clone.strain).name} CLONE PLANTED`, 'good');
    } else {
      const pick = seedChoice();
      if (!pick.ok) return toast(seedTotal(state.seeds) ? pick.text : 'NO SEEDS OR CLONES');
      state.seeds[pick.id]--;
      beginGrow(plot, 0, false, pick.id);
      toast(`${strainOf(pick.id).name} PLANTED`, 'good');
    }
    P.cool = 0.6;
    player.playAction('plant');
    later(0.25, () => {
      for (let k = 0; k < 12; k++) particles.emit({ x: s.x, y: s.y + 0.15, z: s.z, vx: (Math.random() - 0.5) * 2, vy: 1 + Math.random() * 1.4, vz: (Math.random() - 0.5) * 2, life: 0.55, size: 0.08, color: 0x6e5034, g: -9 });
    });
    updateHud();
  } else if (d.state === 'growing') {
    if (d.water <= 0.7) {
      d.water = 1;
      P.cool = 0.75;
      player.playAction('water');
      markDirty();
      for (let k = 0; k < 26; k++)
        later(0.2 + k * 0.016, () => particles.emit({ x: P.x + Math.sin(P.facing) * 0.95 + (Math.random() - 0.5) * 0.15, y: 1.25, z: P.z + Math.cos(P.facing) * 0.95 + (Math.random() - 0.5) * 0.15, vx: Math.sin(P.facing) * 0.5, vy: -0.5, vz: Math.cos(P.facing) * 0.5, life: 0.5, size: 0.065, color: 0x7ec8f2, color2: 0x3f86c8, g: -9 }));
      return;
    }
    if (d.holdVeg) return toast('FLIP THE WAREHOUSE TO 12/12');
    if (d.stage >= 3 && state.nutrients > 0) {
      state.nutrients--;
      d.water = 1;
      d.stress = Math.max(0, d.stress - Math.max(1, d.age) * 0.15);
      P.cool = 0.45;
      player.playAction('water');
      toast('BLOOM FEED — FLOWER STRESS EASED', 'good');
      updateHud();
      markDirty();
      return;
    }
    return toast('PLANT IS WELL WATERED');
  } else if (d.state === 'ready' || d.state === 'ripening') {
    let grade = gradeOf(d);
    let call = '';
    if (d.state === 'ripening') {
      const band = trichomeBand(d.ripe || 0);
      const next = band.pick ? grade : dropGrade(grade);
      call = ` — ${band.label}`;
      if (next !== grade) {
        grade = next;
        call += ' — GRADE DROPPED';
      }
    }
    const grams = gramsFor(grade);
    if (state.wet.length >= 12) return toast('HANDS ARE FULL — HANG IT IN THE SHED');
    const id = strainOf(d.strain).id;
    state.wet.push({ grade, grams, strain: id, trimmed: false });
    state.harvested++;
    state.seeds[id] = (state.seeds[id] | 0) + 1;
    markDirty();
    P.cool = 0.7;
    player.playAction('harvest');
    d.state = 'empty';
    d.water = 0;
    d.ripe = 0;
    d.holdVeg = false;
    d.fromClone = false;
    mesh.visible = false;
    later(0.3, () => {
      for (let k = 0; k < 34; k++) particles.emit({ x: s.x, y: s.y + 0.7, z: s.z, vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 3, vz: (Math.random() - 0.5) * 3, life: 1, size: 0.08, color: k % 3 === 0 ? 0xf08a2e : 0xf4fbe6, g: -5 });
      toast(`${strainOf(id).short} ${grade} WET FLOWER${call} — TRIM IT IN THE SHED`, call.includes('DROPPED') ? '' : 'good');
    });
    updateHud();
  }
}

function act(slotIndex = -1) {
  if (state.mode !== 'play' || P.cool > 0) return;
  let forced = null;
  if (slotIndex && typeof slotIndex === 'object') forced = slotIndex;
  else if (slotIndex >= 0) {
    const s = world.slots[slotIndex];
    forced = { where: 'yard', i: slotIndex, s, d: slotsData[slotIndex], d2: 0 };
  }
  if (!forced) {
    const st = stationFocus();
    const plot = nearestPlot();
    if (st && (!plot || st.d2 + 0.12 < plot.d2)) return actStation(st);
    forced = plot;
  }
  if (!forced) {
    if (world.house.contains(P.x, P.z)) return toast(P.y > 2.2 ? 'WALK TO A VEG POT OR THE COMPUTER' : 'WALK TO A MOTHER, HYDRO TUBE, OR VEG POT');
    if (world.warehouse.contains(P.x, P.z)) return toast('WALK TO A GROW POT');
    return toast('WALK TO A GARDEN BED');
  }
  actPlot(forced);
}

const GRADES = ['A', 'AA', 'AAA', 'AAAA'];
function dropGrade(g) {
  const i = GRADES.indexOf(g);
  return GRADES[Math.max(0, i - 1)] || g;
}

function applyGradeDrop(it) {
  const next = dropGrade(it.grade);
  if (!next || next === it.grade) return false;
  it.grade = next;
  it.grams = gramsFor(next);
  return true;
}

function syncCuredGrams() {
  state.grams = GRADES.reduce((n, g) => n + (state.jars[g] | 0) * gramsFor(g), 0);
}

function stationFocus() {
  if (!world?.shed) return null;
  let best = null;
  const consider = (x, z, kind, ref, reach = 1.55, y = 0.08, priority = 0) => {
    const d2 = (x - P.x) ** 2 + (z - P.z) ** 2;
    if (d2 > reach * reach) return;
    if (!best || priority > best.priority || (priority === best.priority && d2 < best.d2)) best = { kind, ref, x, z, d2, y, priority };
  };
  const shed = world.shed;
  consider(shed.door.x, shed.door.z, 'shed-door', null, 1.9);
  if (shed.open || shed.contains(P.x, P.z)) {
    for (const h of shed.hooks) consider(h.x, h.z + 0.4, 'hook', h, 1.35);
    for (const j of shed.cureJars) {
      if (!j.item) continue;
      const burp = !!(j.item.needsBurp && !j.item.burped && !j.item.missed);
      const missed = !!(j.item.missed && (j.item.cure || 0) < 1);
      const explain = missed && state.wet.length === 0;
      consider(j.x + 0.55, j.z, 'jar', j, burp ? 2.4 : explain ? 2.2 : 1.2, 0.08, burp ? 2 : explain ? 1 : 0);
    }
  }
  const house = world.house;
  consider(0, -13.15, 'house-door', null, 1.7);
  if (house.open || house.contains(P.x, P.z)) {
    if (P.y > 2.2) {
      consider(house.computer.x, house.computer.z, 'computer', house.computer, 1.45, LOFT.y + 0.08);
      for (const veg of house.veg) if (veg.up) consider(veg.x, veg.z + 0.75, 'veg', veg, 1.05, LOFT.y + 0.08);
    } else {
      for (const mom of house.mothers) consider(mom.x, mom.z + 0.85, 'mother', mom, 1.25);
      for (const tray of house.trays) consider(tray.x, tray.z + 0.55, 'tray', tray, 1.05);
      for (const veg of house.veg) if (!veg.up) consider(veg.x, veg.z + 0.75, 'veg', veg, 1.05);
    }
  }
  consider(world.stand.x, world.stand.z, 'stand', null, 1.55);
  if (!world.warehouse.owned) consider(world.lot.x, world.lot.z, 'lot', null, 1.7);
  else {
    consider(22.15, 0, 'wh-door', null, 1.65);
    if (world.warehouse.open || world.warehouse.contains(P.x, P.z)) consider(world.warehouse.lightSwitch.x, world.warehouse.lightSwitch.z, 'wh-lights', null, 1.55, 1.15, 1);
  }
  return best;
}

function motaInJars() {
  let n = 0;
  let mota = 0;
  for (const g of GRADES) {
    n += state.jars[g];
    mota += state.jars[g] * gramsFor(g) * MOTA_PER_G[g];
  }
  return { n, mota };
}

function actStation(f) {
  P.facing = Math.atan2(f.x - P.x, f.z - P.z);
  const shed = world.shed;
  const house = world.house;
  if (f.kind === 'shed-door') {
    shed.open = !shed.open;
    P.cool = 0.3;
    toast(shed.open ? 'SHED DOOR OPEN' : 'SHED DOOR CLOSED');
    return true;
  }
  if (f.kind === 'house-door') {
    house.open = !house.open;
    P.cool = 0.3;
    toast(house.open ? 'HOUSE OPEN — MOTHERS, CLONES, VEG' : 'HOUSE DOOR CLOSED');
    return true;
  }
  if (f.kind === 'wh-door') {
    if (!world.warehouse.owned) return toast('BUY THE WAREHOUSE FIRST');
    world.warehouse.open = !world.warehouse.open;
    P.cool = 0.3;
    toast(world.warehouse.open ? 'WAREHOUSE OPEN' : 'WAREHOUSE CLOSED');
    return true;
  }
  if (f.kind === 'mother') return actMother(f.ref);
  if (f.kind === 'tray') return actTray(f.ref);
  if (f.kind === 'veg') return actVeg(f.ref);
  if (f.kind === 'computer') return openShop();
  if (f.kind === 'stand') return actStand();
  if (f.kind === 'lot') return actBuyWarehouse();
  if (f.kind === 'wh-lights') {
    const W = world.warehouse;
    W.lights = W.lights === 'flower' ? 'veg' : 'flower';
    paintLights(W);
    P.cool = 0.35;
    const waiting = whData.some((d) => d.holdVeg);
    toast(W.lights === 'flower' ? (waiting ? '12/12 — FLOWER STARTED' : '12/12 — FLOWERING LIGHTS') : '18/6 — VEG LIGHTS', 'good');
    markDirty();
    return true;
  }
  if (f.kind === 'hook') {
    const h = f.ref;
    if (!h.item) {
      if (!state.wet.length) {
        toast('HARVEST A PLANT FIRST');
        return true;
      }
      const bud = state.wet[0];
      if (!bud.trimmed) {
        bud.trimmed = true;
        P.cool = 0.35;
        player.playAction('harvest');
        toast('HAND TRIMMED — TRICHOMES KEPT', 'good');
        markDirty();
        return true;
      }
      state.wet.shift();
      h.item = { ...bud, t: 0, dry: 0, hold: 0, dropped: false };
      h.mesh.geometry = world.shed.nugGeo[strainOf(bud.strain).id] || world.shed.nugGeo.bd;
      h.mesh.visible = true;
      h.mesh.scale.setScalar(1);
      P.cool = 0.4;
      player.playAction('harvest');
      toast(`${bud.grade} HUNG TO DRY`);
      updateHud();
      markDirty();
      return true;
    }
    if (h.item.dry < 1) {
      toast('STILL DRYING');
      return true;
    }
    const slot = shed.cureJars.find((j) => !j.item);
    if (!slot) {
      toast('CURE JARS ARE FULL');
      return true;
    }
    slot.item = { grade: h.item.grade, grams: gramsFor(h.item.grade), strain: h.item.strain || 'bd', t: 0, cure: 0, burped: false, missed: false, needsBurp: false, sealed: false };
    slot.mesh.visible = true;
    h.item = null;
    h.mesh.visible = false;
    P.cool = 0.4;
    toast('JARRED — BURP IT WHILE IT CURES', 'good');
    updateHud();
    markDirty();
    return true;
  }
  const it = f.ref.item;
  if (it?.needsBurp && !it.burped && !it.missed) {
    it.burped = true;
    it.needsBurp = false;
    P.cool = 0.3;
    toast('BURPED — CURE STAYS ON TRACK', 'good');
    markDirty();
    return true;
  }
  if (it?.missed) return toast('BURP MISSED — LET IT FINISH');
  toast(it?.burped ? 'CURING' : 'WAIT TO BURP');
  return true;
}

function motherOpen(mom) {
  return !mom.locked || world.house.mother2;
}
function trayOpen(tray) {
  return !tray.locked || world.house.tube2;
}
function vegOpen(pot) {
  if (!pot.up) return true;
  return pot.room === 'west' ? world.house.vegWest : world.house.vegCenter;
}
function tryUnlockBed(bed) {
  if (!slotsData.some((d, i) => (i / 4 | 0) === bed && d.locked)) return false;
  if (state.mota < UNLOCK.bed) {
    toast(`NEED ${UNLOCK.bed} MOTA — GROW BOX`);
    return true;
  }
  state.mota -= UNLOCK.bed;
  slotsData.forEach((d, i) => {
    if ((i / 4 | 0) === bed) d.locked = false;
  });
  P.cool = 0.4;
  toast('GROW BOX UNLOCKED', 'good');
  updateHud();
  markDirty();
  return true;
}

function tryUnlock(flag, cost, label) {
  if (world.house[flag]) return false;
  if (state.mota < cost) {
    toast(`NEED ${cost} MOTA — ${label}`);
    return true;
  }
  state.mota -= cost;
  world.house[flag] = true;
  P.cool = 0.4;
  toast(`${label} UNLOCKED`, 'good');
  updateHud();
  markDirty();
  return true;
}

function actMother(mom) {
  if (!motherOpen(mom)) return tryUnlock('mother2', UNLOCK.mother, '2ND MOTHER');
  if (!mom.state || mom.state === 'empty') {
    const pick = seedChoice();
    if (!pick.ok) return toast(pick.text);
    state.seeds[pick.id]--;
    mom.state = 'growing';
    mom.strain = pick.id;
    mom.stage = 0;
    mom.prog = 0;
    mom.water = 0.9;
    mom.cool = 0;
    mom.plant.visible = true;
    mom.plant.geometry = plantGeo(0, pick.id);
    mom.plant.scale.setScalar(0.5);
    P.cool = 0.55;
    player.playAction('plant');
    toast(`${strainOf(pick.id).name} PLANTED AS A MOTHER`, 'good');
    updateHud();
    markDirty();
    return true;
  }
  if (mom.state === 'growing') {
    if (mom.water < 0.45) {
      mom.water = 1;
      P.cool = 0.55;
      player.playAction('water');
      toast('MOTHER WATERED');
      markDirty();
      return true;
    }
    if (state.nutrients > 0) return feedMother(mom);
    const pct = Math.round((((mom.stage || 0) + (mom.prog || 0)) / 2) * 100);
    return toast(`${strainOf(mom.strain).short} MOTHER ${pct}%`);
  }
  if (mom.water < 0.4) {
    mom.water = 1;
    P.cool = 0.55;
    player.playAction('water');
    toast('MOTHER WATERED');
    markDirty();
    return true;
  }
  if (mom.cool > 0) {
    if (state.nutrients > 0) return feedMother(mom);
    return toast('MOTHER IS RESTING');
  }
  const tray = world.house.trays.find((t) => t.state === 'empty' && trayOpen(t));
  if (!tray) return toast(world.house.tube2 ? 'HYDRO TUBES ARE FULL' : 'TUBES ARE FULL — UNLOCK THE BACK ROW');
  mom.cool = 8;
  mom.water = Math.max(0, mom.water - 0.22);
  tray.state = 'rooting';
  tray.t = 0;
  tray.strain = mom.strain || 'bd';
  tray.plant.geometry = plantGeo(0, tray.strain);
  tray.plant.visible = true;
  tray.plant.scale.setScalar(0.48);
  P.cool = 0.45;
  player.playAction('harvest');
  toast(`${strainOf(tray.strain).short} CUTTING IS IN THE TUBE`);
  markDirty();
  return true;
}

function feedMother(mom) {
  if (state.nutrients <= 0) return toast('BUY NUTRIENTS UPSTAIRS');
  state.nutrients--;
  mom.water = 1;
  mom.cool = 0;
  if (mom.state === 'growing') mom.prog = Math.min(0.92, (mom.prog || 0) + 0.4);
  P.cool = 0.4;
  player.playAction('water');
  toast('MOTHER FED', 'good');
  updateHud();
  markDirty();
  return true;
}

function actTray(tray) {
  if (!trayOpen(tray)) return tryUnlock('tube2', UNLOCK.tube, 'BACK TUBE ROW');
  if (tray.state === 'empty') return toast('TAKE A CUTTING FROM A MOTHER');
  if (tray.state === 'rooting') {
    if (state.cubes > 0) {
      state.cubes--;
      tray.t += ROOT_TIME * 0.65;
      P.cool = 0.35;
      toast('ROOT CUBE IN THE TUBE', 'good');
      updateHud();
      markDirty();
      return true;
    }
    if (state.nutrients > 0) {
      state.nutrients--;
      tray.t += ROOT_TIME * 0.45;
      P.cool = 0.35;
      toast('TUBE FED', 'good');
      updateHud();
      markDirty();
      return true;
    }
    return toast('STILL ROOTING');
  }
  if (tray.state !== 'ready') return toast('STILL ROOTING');
  const pot = world.house.veg.find((v) => v.state === 'empty' && vegOpen(v));
  if (!pot) return toast(world.house.vegWest && world.house.vegCenter ? 'VEG POTS ARE FULL' : 'DOWNSTAIRS VEG IS FULL — UPSTAIRS ROOMS TAKE MOTA');
  pot.state = 'veg';
  pot.t = 0;
  pot.strain = tray.strain || 'bd';
  pot.plant.geometry = plantGeo(2, pot.strain);
  pot.plant.visible = true;
  tray.state = 'empty';
  tray.t = 0;
  tray.strain = null;
  tray.plant.visible = false;
  P.cool = 0.4;
  toast(`${strainOf(pot.strain).short} MOVED INTO A VEG ROOM`);
  markDirty();
  return true;
}

function actVeg(pot) {
  if (!vegOpen(pot)) {
    const west = pot.room === 'west';
    return tryUnlock(west ? 'vegWest' : 'vegCenter', west ? UNLOCK.vegWest : UNLOCK.vegCenter, west ? 'WEST VEG ROOM' : 'CENTER VEG ROOM');
  }
  if (pot.state === 'empty') return toast('BRING A ROOTED CLONE');
  if (pot.state === 'veg' && state.nutrients > 0) {
    state.nutrients--;
    pot.t += VEG_TIME * 0.5;
    P.cool = 0.35;
    player.playAction('water');
    toast('VEG POT FED', 'good');
    updateHud();
    markDirty();
    return true;
  }
  if (pot.state !== 'ready') return toast('STILL VEGETATING');
  if (state.clones.length >= 8) return toast('HANDS ARE FULL OF CLONES');
  const strain = pot.strain || 'bd';
  state.clones.push({ strain });
  pot.state = 'empty';
  pot.strain = null;
  pot.plant.visible = false;
  P.cool = 0.35;
  toast(`${strainOf(strain).name} CLONE READY TO PLANT`, 'good');
  updateHud();
  markDirty();
  return true;
}

function actStand() {
  const offer = motaInJars();
  P.cool = 0.35;
  if (offer.n > 0) {
    for (const g of GRADES) state.jars[g] = 0;
    syncCuredGrams();
    state.mota += offer.mota;
    toast(`+${offer.mota} MOTA`, 'good');
    markDirty();
    updateHud();
    return true;
  }
  if (seedTotal(state.seeds) < 4) {
    if (state.mota < SEED_PACK.cost) return toast(`NEED ${SEED_PACK.cost} MOTA FOR SEEDS`);
    state.mota -= SEED_PACK.cost;
    const pack = STRAIN_IDS.slice().sort((a, b) => (state.seeds[a] | 0) - (state.seeds[b] | 0) || STRAIN_IDS.indexOf(a) - STRAIN_IDS.indexOf(b)).slice(0, SEED_PACK.n);
    for (const id of pack) state.seeds[id] = (state.seeds[id] | 0) + 1;
    toast(`+1 ${pack.map((id) => strainOf(id).short).join('  +1 ')}`, 'good');
    updateHud();
    markDirty();
    return true;
  }
  toast('CURE JARS, THEN SELL THEM FOR MOTA');
  return true;
}

function actBuyWarehouse() {
  if (world.warehouse.owned) return true;
  if (state.mota < WAREHOUSE_PRICE) return toast(`NEED ${WAREHOUSE_PRICE} MOTA`);
  state.mota -= WAREHOUSE_PRICE;
  world.warehouse.owned = true;
  world.warehouse.gateOpen = true;
  world.lot.mesh.visible = false;
  world.warehouse.forSale.visible = false;
  P.cool = 0.4;
  toast('WAREHOUSE IS YOURS — EAST GATE IS OPEN', 'good');
  updateHud();
  markDirty();
  return true;
}

function updateShed(dt) {
  const shed = world?.shed;
  if (!shed) return;
  const swing = shed.open ? 1.35 : 0;
  const k = 1 - Math.exp(-dt * 14);
  shed.doorL.rotation.y += (swing - shed.doorL.rotation.y) * k;
  shed.doorR.rotation.y += (-swing - shed.doorR.rotation.y) * k;
  const nearDoor = (shed.door.x - P.x) ** 2 + (shed.door.z - P.z) ** 2 < 2.8 * 2.8;
  shed.roof.visible = !(shed.open && (shed.contains(P.x, P.z) || nearDoor));
  for (const h of shed.hooks) {
    const it = h.item;
    if (!it) continue;
    if (it.dry < 1) {
      it.t += dt;
      it.dry = Math.min(1, it.t / DRY_TIME);
    } else {
      it.hold += dt;
      if (it.hold > HANG_GRACE && !it.dropped) {
        it.dropped = true;
        if (applyGradeDrop(it)) toast('OVERDRIED — GRADE DROPPED');
        markDirty();
      }
    }
    const sway = Math.sin(cam.t * 1.6 + h.x) * 0.04;
    h.mesh.rotation.z = sway;
    h.mesh.scale.setScalar(1.2 + 0.35 * (1 - it.dry));
  }
  for (const j of shed.cureJars) {
    const it = j.item;
    if (!it || it.sealed) continue;
    it.t += dt;
    it.cure = Math.min(1, it.t / CURE_TIME);
    if (it.cure >= 0.4 && it.cure < 0.62 && !it.burped && !it.missed) it.needsBurp = true;
    if (it.cure >= 0.62 && it.needsBurp && !it.burped) {
      it.missed = true;
      it.needsBurp = false;
      if (applyGradeDrop(it)) toast('MISSED THE BURP — GRADE DROPPED');
      markDirty();
    }
    if (it.cure >= 1) {
      it.sealed = true;
      const grade = it.grade;
      state.jars[grade] = (state.jars[grade] | 0) + 1;
      syncCuredGrams();
      toast(`+${gramsFor(grade)}G  ${grade} CURED`, 'good');
      j.mesh.visible = false;
      j.item = null;
      updateHud();
      markDirty();
    }
  }
  const house = world.house;
  const W = world.warehouse;
  const swingK = 1 - Math.exp(-dt * 10);
  house.door.rotation.y += ((house.open ? -1.15 : 0) - house.door.rotation.y) * swingK;
  const nearHouse = house.open && Math.abs(P.x) < 4 && P.z < -11.4 && P.z > -15.4;
  const showHouseShell = !(house.open && (house.contains(P.x, P.z) || nearHouse));
  house.roof.visible = showHouseShell;
  house.facade.visible = showHouseShell;
  for (const mom of house.mothers) {
    if (mom.state === 'growing') {
      mom.water = Math.max(0, mom.water - dt / THIRST);
      const rate = mom.water <= 0 ? 0.35 : 1;
      mom.prog += (dt * rate) / (MOTHER_DUR[Math.min(mom.stage, 1)] * strainPace(mom.strain, 2));
      if (mom.prog >= 1) {
        mom.prog = 0;
        mom.stage += 1;
        if (mom.stage >= 2) {
          mom.state = 'mother';
          mom.stage = 2;
          mom.water = Math.max(mom.water, 0.8);
          toast(`${strainOf(mom.strain).short} MOTHER IS READY`, 'good');
          markDirty();
        }
        mom.plant.geometry = plantGeo(mom.stage, mom.strain);
      }
      mom.plant.scale.setScalar((mom.state === 'mother' ? 1.2 : 0.5 + mom.stage * 0.28 + mom.prog * 0.1) * (strainOf(mom.strain).stature || 1));
    } else if (mom.state === 'mother') {
      mom.water = Math.max(0, mom.water - dt / (THIRST * 1.25));
      mom.cool = Math.max(0, mom.cool - dt);
    }
    if (mom.plant.visible) mom.plant.rotation.z = Math.sin(cam.t * 1.3 + mom.x) * 0.03;
  }
  for (const tray of house.trays) {
    if (tray.state !== 'rooting') continue;
    tray.t += dt;
    if (tray.t >= ROOT_TIME) {
      tray.state = 'ready';
      tray.plant.geometry = plantGeo(1, tray.strain || 'bd');
      toast(`${strainOf(tray.strain).short} CLONE ROOTED — MOVE IT TO VEG`, 'good');
      markDirty();
    }
  }
  for (const pot of house.veg) {
    if (pot.state !== 'veg') continue;
    pot.t += dt / strainPace(pot.strain, 2);
    pot.plant.scale.setScalar((0.72 + 0.18 * Math.min(1, pot.t / VEG_TIME)) * (strainOf(pot.strain).stature || 1));
    if (pot.t >= VEG_TIME) {
      pot.state = 'ready';
      toast(`${strainOf(pot.strain).short} VEG DONE — POT IT UP`, 'good');
      markDirty();
    }
  }
  W.gate.rotation.y += ((W.gateOpen ? 1.15 : 0) - W.gate.rotation.y) * swingK;
  W.door.rotation.y += ((W.open ? 1.25 : 0) - W.door.rotation.y) * swingK;
  const nearWh = W.owned && W.open && Math.abs(P.z) < 2.1 && P.x > 20.4 && P.x < 25.2;
  W.roof.visible = !(W.owned && W.open && (W.contains(P.x, P.z) || nearWh));
  W.forSale.visible = !W.owned;
  world.lot.mesh.visible = !W.owned;
}

/* --------------------------------------------------------------------- HUD */
function budHex(n) {
  return '#' + (n >>> 0).toString(16).padStart(6, '0');
}

function updateHud() {
  const pick = STRAINS[state.strainPick] ? state.strainPick : 'bd';
  const held = strainOf(pick);
  $('mota').textContent = state.mota;
  $('strain-label').textContent = held.short;
  $('strain-count').textContent = state.seeds[pick] | 0;
  $('strain-swatch').style.background = budHex(held.bud[0]);
  $('clones').textContent = state.clones.length;
  $('nuts').textContent = state.nutrients | 0;
  $('cubes').textContent = state.cubes | 0;
  $('grams').textContent = state.grams;
  $('wet').textContent = state.wet.length;
  const shed = world?.shed;
  const busy = shed ? shed.hooks.filter((h) => h.item).length + shed.cureJars.filter((j) => j.item).length : 0;
  $('shed-count').textContent = busy;
  for (const g of ['AAAA', 'AAA', 'AA', 'A']) $('jar-' + g).textContent = state.jars[g];
  const seeds = $('seeds');
  const sig = STRAIN_IDS.map((id) => state.seeds[id] | 0).join(',') + '|' + pick;
  if (seeds.dataset.sig !== sig) {
    seeds.dataset.sig = sig;
    seeds.replaceChildren();
    for (const id of STRAIN_IDS) {
      const spec = strainOf(id);
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'seed-tile' + (id === pick ? ' on' : '');
      const sw = document.createElement('i');
      sw.style.background = budHex(spec.bud[0]);
      const name = document.createElement('span');
      name.textContent = spec.short;
      const count = document.createElement('b');
      count.textContent = String(state.seeds[id] | 0);
      b.append(sw, name, count);
      b.addEventListener('pointerdown', (e) => {
        swallow(e);
        state.strainPick = id;
        seeds.dataset.sig = '';
        markDirty();
        updateHud();
      });
      seeds.append(b);
    }
  }
}

const tip = $('tip');
const prompt = $('prompt');
const v3 = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const soilPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -(7 / 16));
const soilHit = new THREE.Vector3();

function setActLabel(text) {
  const btn = $('btn-act');
  if (btn && btn.textContent !== text) btn.textContent = text;
}

function setPrompt(text) {
  const key = text.startsWith('SPACE  ') ? 'SPACE' : text.startsWith('TAP  ') ? 'TAP' : '';
  $('prompt-key').textContent = key;
  $('prompt-label').textContent = key ? text.slice(key.length).trim() : text;
  prompt.style.display = 'flex';
}

function toggleHelp(force) {
  const help = $('help');
  const open = typeof force === 'boolean' ? force : help.classList.contains('hidden');
  help.classList.toggle('hidden', !open);
  setIcon($('btn-help-hud'), open);
}

function slotAtScreen(x, y) {
  if (!world) return null;
  const rect = renderer.domElement.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  ndc.set(((x - rect.left) / rect.width) * 2 - 1, -((y - rect.top) / rect.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const useWh = world.warehouse.owned && (world.warehouse.contains(P.x, P.z) || P.x > 22);
  soilPlane.constant = useWh ? -0.55 : -(7 / 16);
  if (!raycaster.ray.intersectPlane(soilPlane, soilHit)) return null;
  const slots = useWh ? world.warehouse.slots : world.slots;
  const data = useWh ? whData : slotsData;
  let best = -1;
  let bd = 1.25 * 1.25;
  slots.forEach((s, i) => {
    const d2 = (s.x - soilHit.x) ** 2 + (s.z - soilHit.z) ** 2;
    if (d2 < bd) {
      bd = d2;
      best = i;
    }
  });
  if (best < 0) return null;
  const s = slots[best];
  return { where: useWh ? 'wh' : 'yard', i: best, s, d: data[best], d2: 0 };
}

function tryPlotTap(x, y) {
  if (state.mode !== 'play') return;
  const plot = slotAtScreen(x, y);
  if (!plot) return;
  if (Math.hypot(plot.s.x - P.x, plot.s.z - P.z) > 3.1) return toast('WALK CLOSER');
  act(plot);
}

function updateTarget() {
  if (state.mode !== 'play') {
    marker.visible = false;
    tip.style.display = 'none';
    prompt.style.display = 'none';
    setStrainBar(false);
    return -1;
  }
  const st = stationFocus();
  const plot = nearestPlot();
  const gardenD = plot ? plot.d2 : Infinity;
  const atStation = st && st.d2 + 0.12 < gardenD;
  const plantingSeed = atStation
    ? st.kind === 'mother' && motherOpen(st.ref) && (!st.ref.state || st.ref.state === 'empty')
    : !!(plot && plot.d.state === 'empty' && !plot.d.locked && state.clones.length === 0);
  setStrainBar(plantingSeed);
  if (atStation) {
    showStation(st);
    return -1;
  }
  if (!plot) {
    marker.visible = false;
    tip.style.display = 'none';
    prompt.style.display = 'none';
    setActLabel('ACT');
    return -1;
  }
  const s = plot.s;
  const d = plot.d;
  marker.visible = true;
  marker.position.set(s.x, s.y + 0.06 + Math.sin(cam.t * 5) * 0.02, s.z);
  const scale = 1 + Math.sin(cam.t * 5) * 0.03;
  marker.scale.set(scale, 1, scale);
  const actLbl = touchUI ? 'TAP' : 'SPACE';
  let text;
  let btn = 'ACT';
  if (plot.where === 'yard' && d.locked) {
    const short = state.mota < UNLOCK.bed;
    text = short ? `GROW BOX  ${state.mota}/${UNLOCK.bed} MOTA` : `${actLbl}  UNLOCK GROW BOX  ${UNLOCK.bed} MOTA`;
    btn = short ? 'ACT' : 'BUY';
  } else if (d.state === 'empty') {
    if (state.clones.length) {
      const clone = state.clones[0];
      text = `${actLbl}  PLANT ${strainOf(clone.strain).short} CLONE`;
      btn = 'CLONE';
    } else {
      const pick = seedChoice();
      text = pick.ok ? `${actLbl}  ${pick.text}` : pick.text;
      btn = pick.ok ? 'PLANT' : 'ACT';
    }
  } else if (d.state === 'ripening') {
    const band = trichomeBand(d.ripe || 0);
    text = `${actLbl}  HARVEST — ${band.label}`;
    btn = band.pick ? 'PICK' : band.id === 'amber' ? 'LATE' : 'EARLY';
  } else if (d.state === 'ready') {
    text = `${actLbl}  HARVEST`;
    btn = 'PICK';
  } else if (d.water <= 0.7) {
    text = `${actLbl}  WATER`;
    btn = 'WATER';
  } else if (d.holdVeg) {
    text = 'WAITING FOR 12/12';
    btn = 'ACT';
  } else if (d.stage >= 3 && state.nutrients > 0) {
    text = `${actLbl}  BLOOM FEED`;
    btn = 'FEED';
  } else {
    text = 'WELL WATERED';
  }
  setActLabel(btn);
  setPrompt(text);
  if (d.state === 'empty' || d.locked) {
    tip.style.display = 'none';
  } else {
    v3.set(s.x, s.y + 0.4 + d.stage * 0.35 + 0.8, s.z).project(camera);
    tip.style.display = 'block';
    tip.style.left = ((v3.x * 0.5 + 0.5) * 100).toFixed(2) + '%';
    tip.style.top = ((-v3.y * 0.5 + 0.5) * 100).toFixed(2) + '%';
    const band = d.state === 'ripening' ? trichomeBand(d.ripe || 0) : null;
    const spec = strainOf(d.strain);
    $('tip-name').textContent = `${spec.short} ${d.holdVeg ? 'VEGETATIVE' : STAGE_NAMES[d.stage]}`;
    $('tip-water').style.width = Math.round(d.water * 100) + '%';
    $('tip-water').style.background = d.water > 0 ? '#58b4ee' : '#d9534f';
    $('tip-grow').style.width = Math.round((d.state === 'ready' ? 1 : d.state === 'ripening' ? Math.min(1, d.ripe || 0) : d.holdVeg ? 0.5 : (d.stage + d.prog) / 4) * 100) + '%';
    $('tip-grade').textContent = band ? band.label : d.holdVeg ? '18/6' : d.state === 'ready' ? gradeOf(d) : `${spec.kind} ${spec.weeks}WK`;
  }
  return plot.i;
}

function showStation(st) {
  marker.visible = true;
  marker.position.set(st.x, (st.y || 0.08) + Math.sin(cam.t * 5) * 0.02, st.z);
  const scale = 1 + Math.sin(cam.t * 5) * 0.03;
  marker.scale.set(scale, 1, scale);
  const actLbl = touchUI ? 'TAP' : 'SPACE';
  const ui = stationUi(st, actLbl);
  setActLabel(ui.btn);
  setPrompt(ui.text);
  if (!ui.tip) {
    tip.style.display = 'none';
    return;
  }
  v3.set(st.x, (st.y || 0.08) + 1.5, st.z).project(camera);
  tip.style.display = 'block';
  tip.style.left = ((v3.x * 0.5 + 0.5) * 100).toFixed(2) + '%';
  tip.style.top = ((-v3.y * 0.5 + 0.5) * 100).toFixed(2) + '%';
  $('tip-name').textContent = ui.tip.name;
  $('tip-water').style.width = ui.tip.water;
  $('tip-water').style.background = ui.tip.wet ? '#58b4ee' : '#d9534f';
  $('tip-grow').style.width = ui.tip.grow;
  $('tip-grade').textContent = ui.tip.grade || '';
}

function stationUi(st, actLbl) {
  if (st.kind === 'shed-door') {
    const open = world.shed.open;
    return { text: open ? `${actLbl}  CLOSE SHED` : `${actLbl}  OPEN SHED`, btn: open ? 'CLOSE' : 'OPEN' };
  }
  if (st.kind === 'house-door') {
    const open = world.house.open;
    return { text: open ? `${actLbl}  CLOSE HOUSE` : `${actLbl}  OPEN HOUSE`, btn: open ? 'CLOSE' : 'OPEN' };
  }
  if (st.kind === 'wh-door') {
    const open = world.warehouse.open;
    return { text: open ? `${actLbl}  CLOSE WAREHOUSE` : `${actLbl}  OPEN WAREHOUSE`, btn: open ? 'CLOSE' : 'OPEN' };
  }
  if (st.kind === 'wh-lights') {
    const flower = world.warehouse.lights === 'flower';
    return { text: flower ? `${actLbl}  FLIP TO 18/6` : `${actLbl}  FLIP TO 12/12`, btn: flower ? '18/6' : '12/12' };
  }
  if (st.kind === 'hook') {
    const it = st.ref.item;
    const bud = state.wet[0];
    if (!it && bud && !bud.trimmed) return { text: `${actLbl}  HAND TRIM ${bud.grade}`, btn: 'TRIM' };
    if (!it) return { text: bud ? `${actLbl}  HANG ${bud.grade}` : 'HARVEST FIRST', btn: bud ? 'HANG' : 'ACT' };
    if (it.dry < 1) return { text: `DRYING ${Math.round(it.dry * 100)}%  ${it.grade}`, btn: 'ACT' };
    const left = Math.max(0, Math.ceil(HANG_GRACE - (it.hold || 0)));
    return { text: `${actLbl}  JAR ${it.grade} · ${left}s`, btn: 'JAR' };
  }
  if (st.kind === 'jar') {
    const it = st.ref.item;
    const pct = Math.round((it?.cure || 0) * 100);
    if (it?.needsBurp && !it.burped && !it.missed) return { text: `${actLbl}  BURP JAR`, btn: 'BURP' };
    if (it?.missed) return { text: `BURP MISSED · CURING ${pct}%`, btn: 'ACT' };
    if (!it?.burped && (it?.cure || 0) >= 0.2) return { text: `CURING ${pct}% · BURP SOON`, btn: 'ACT' };
    return { text: `CURING ${pct}%`, btn: 'ACT' };
  }
  if (st.kind === 'mother') {
    const mom = st.ref;
    if (!motherOpen(mom)) {
      const short = state.mota < UNLOCK.mother;
      return { text: short ? `2ND MOTHER  ${state.mota}/${UNLOCK.mother} MOTA` : `${actLbl}  UNLOCK 2ND MOTHER  ${UNLOCK.mother} MOTA`, btn: short ? 'ACT' : 'BUY' };
    }
    if (!mom.state || mom.state === 'empty') {
      const pick = seedChoice();
      return { text: pick.ok ? `${actLbl}  ${pick.text}` : pick.text, btn: pick.ok ? 'PLANT' : 'ACT' };
    }
    if (mom.state === 'growing') {
      const thirsty = mom.water < 0.45;
      const pct = Math.round((((mom.stage || 0) + (mom.prog || 0)) / 2) * 100);
      const name = strainOf(mom.strain).short;
      const feed = !thirsty && state.nutrients > 0;
      return {
        text: thirsty ? `${actLbl}  WATER MOTHER` : feed ? `${actLbl}  FEED MOTHER` : `${name} MOTHER ${pct}%`,
        btn: thirsty ? 'WATER' : feed ? 'FEED' : 'ACT',
        tip: { name, water: Math.round(mom.water * 100) + '%', grow: pct + '%', wet: mom.water > 0.15, grade: 'GROWING' },
      };
    }
    const thirsty = mom.water < 0.4;
    const name = strainOf(mom.strain).name;
    return {
      text: thirsty ? `${actLbl}  WATER MOTHER` : mom.cool > 0 ? (state.nutrients > 0 ? `${actLbl}  FEED MOTHER` : 'MOTHER IS RESTING') : `${actLbl}  TAKE ${strainOf(mom.strain).short} CLONE`,
      btn: thirsty ? 'WATER' : mom.cool > 0 ? (state.nutrients > 0 ? 'FEED' : 'ACT') : 'CLONE',
      tip: { name, water: Math.round(mom.water * 100) + '%', grow: mom.cool > 0 ? Math.round((1 - mom.cool / 8) * 100) + '%' : '100%', wet: mom.water > 0.15, grade: thirsty ? 'THIRSTY' : 'MOTHER' },
    };
  }
  if (st.kind === 'tray') {
    const tray = st.ref;
    if (!trayOpen(tray)) {
      const short = state.mota < UNLOCK.tube;
      return { text: short ? `BACK TUBE ROW  ${state.mota}/${UNLOCK.tube} MOTA` : `${actLbl}  UNLOCK BACK TUBE  ${UNLOCK.tube} MOTA`, btn: short ? 'ACT' : 'BUY' };
    }
    const name = strainOf(tray.strain).short;
    if (tray.state === 'empty') return { text: 'EMPTY TUBE', btn: 'ACT' };
    if (tray.state === 'rooting') {
      const pct = Math.round(Math.min(1, tray.t / ROOT_TIME) * 100);
      const boost = state.cubes > 0 ? `${actLbl}  ADD ROOT CUBE` : state.nutrients > 0 ? `${actLbl}  FEED TUBE` : `${name} ROOTING ${pct}%`;
      return { text: boost, btn: state.cubes > 0 ? 'CUBE' : state.nutrients > 0 ? 'FEED' : 'ACT', tip: { name, water: '100%', grow: pct + '%', wet: true, grade: 'HYDRO' } };
    }
    return { text: `${actLbl}  MOVE ${name} TO VEG`, btn: 'VEG', tip: { name, water: '100%', grow: '100%', wet: true, grade: 'READY' } };
  }
  if (st.kind === 'veg') {
    const pot = st.ref;
    if (!vegOpen(pot)) {
      const west = pot.room === 'west';
      const cost = west ? UNLOCK.vegWest : UNLOCK.vegCenter;
      const name = west ? 'WEST VEG ROOM' : 'CENTER VEG ROOM';
      const short = state.mota < cost;
      return { text: short ? `${name}  ${state.mota}/${cost} MOTA` : `${actLbl}  UNLOCK ${name}  ${cost} MOTA`, btn: short ? 'ACT' : 'BUY' };
    }
    const name = strainOf(pot.strain).short;
    if (pot.state === 'empty') return { text: 'EMPTY VEG POT', btn: 'ACT' };
    if (pot.state === 'veg') {
      const pct = Math.round(Math.min(1, pot.t / VEG_TIME) * 100);
      return {
        text: state.nutrients > 0 ? `${actLbl}  FEED VEG` : `${name} VEG ${pct}%`,
        btn: state.nutrients > 0 ? 'FEED' : 'ACT',
        tip: { name, water: '100%', grow: pct + '%', wet: true, grade: '' },
      };
    }
    return { text: `${actLbl}  TAKE ${name} CLONE`, btn: 'TAKE', tip: { name, water: '100%', grow: '100%', wet: true, grade: 'PLANT IT' } };
  }
  if (st.kind === 'stand') {
    const offer = motaInJars();
    if (offer.n > 0) return { text: `${actLbl}  SELL ${offer.n} JAR${offer.n > 1 ? 'S' : ''}  +${offer.mota} MOTA`, btn: 'SELL' };
    if (seedTotal(state.seeds) < 4) return { text: `${actLbl}  BUY ${SEED_PACK.n} SEEDS  ${SEED_PACK.cost} MOTA`, btn: 'BUY' };
    return { text: 'BRING CURED JARS', btn: 'ACT' };
  }
  if (st.kind === 'computer') return { text: `${actLbl}  USE COMPUTER`, btn: 'SHOP' };
  const short = state.mota < WAREHOUSE_PRICE;
  return {
    text: short ? `WAREHOUSE  ${state.mota}/${WAREHOUSE_PRICE} MOTA` : `${actLbl}  BUY WAREHOUSE  ${WAREHOUSE_PRICE} MOTA`,
    btn: short ? 'ACT' : 'BUY',
  };
}

/* ------------------------------------------------------------------ camera */
function updateCamera(dt) {
  cam.t += dt;
  const k = 1 - Math.exp(-dt * 5);
  if (state.mode === 'title') {
    cam.yawT = Math.sin(cam.t * 0.22) * 0.55;
    cam.distT = 25;
    cam.pitch = 0.74;
    cam.target.lerp(v3.set(0, 1.2, -4.2), k);
  } else if (state.mode === 'dress') {
    const narrow = viewSize().w < 820;
    cam.pitch += ((narrow ? 0.72 : 0.46) - cam.pitch) * k;
    cam.yawT = 0.62;
    cam.distT = narrow ? 6.6 : 8.8;
    cam.target.lerp(v3.set(P.x, P.y + (narrow ? 0.35 : 0.95), P.z), k);
  } else if (state.mode === 'play') {
    const indoor = P.z < -13.8 || world.warehouse.contains(P.x, P.z);
    cam.pitch += ((indoor ? 1.08 : 0.85) - cam.pitch) * k;
    let xLo = -11;
    let xHi = P.x > 10 ? 18 : 11;
    let zLo = P.z < -8 ? -12 : -9;
    let zHi = 7;
    if (P.z < -13.6) {
      xLo = -HOUSE.half;
      xHi = HOUSE.half;
      zLo = HOUSE.back - 0.4;
    }
    if (P.x > 18) {
      xLo = 16;
      xHi = 36;
      zLo = -7;
      zHi = 7;
    }
    const tx = THREE.MathUtils.clamp(P.x, xLo, xHi);
    const tz = THREE.MathUtils.clamp(P.z, zLo, zHi);
    const tgt = v3.set(tx * 0.85 + P.x * 0.15, 0.9 + P.y, tz * 0.85 + P.z * 0.15);
    if (!cam.free) cam.target.lerp(tgt, 1 - Math.exp(-dt * 4));
    if (keys.has('KeyQ') || stick.cam < 0) cam.yawT += dt * 1.6;
    if (keys.has('KeyE') || stick.cam > 0) cam.yawT -= dt * 1.6;
    cam.yawT = THREE.MathUtils.clamp(cam.yawT, -1.3, 1.3);
  }
  cam.yaw += (cam.yawT - cam.yaw) * (1 - Math.exp(-dt * 8));
  cam.dist += (cam.distT - cam.dist) * (1 - Math.exp(-dt * 6));
  const cp = Math.cos(cam.pitch);
  camera.position.set(cam.target.x + Math.sin(cam.yaw) * cp * cam.dist, cam.target.y + Math.sin(cam.pitch) * cam.dist, cam.target.z + Math.cos(cam.yaw) * cp * cam.dist);
  camera.lookAt(cam.target);
}

/* -------------------------------------------------------------------- loop */
let last = performance.now();
let smokeT = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (!world) return;
  const time = now / 1000;

  if (state.mode === 'title' && (pressed.has('Space') || pressed.has('Enter'))) startGame();
  if (pressed.has('Escape') && state.mode === 'dress') closeDress();
  if (pressed.has('Escape') && state.mode === 'shop') closeShop();
  if (pressed.has('KeyC') && state.mode !== 'dress' && state.mode !== 'shop' && state.mode !== 'loading') openDress();
  if (state.mode === 'play' && (pressed.has('Digit1') || pressed.has('Numpad1') || pressed.has('Digit2') || pressed.has('Numpad2'))) {
    const dir = pressed.has('Digit2') || pressed.has('Numpad2') ? 1 : -1;
    const i = Math.max(0, STRAIN_IDS.indexOf(state.strainPick));
    state.strainPick = STRAIN_IDS[(i + dir + STRAIN_IDS.length) % STRAIN_IDS.length];
    markDirty();
    updateHud();
  }
  if (pressed.has('KeyH') && state.mode === 'play') toggleHelp();
  if (pressed.has('BracketLeft') || pressed.has('BracketRight')) {
    const cur = pixelScale || autoScale();
    pixelScale = THREE.MathUtils.clamp(cur + (pressed.has('BracketRight') ? 1 : -1), 1, 5);
    localStorage.setItem('mm-pixel', pixelScale);
    resize();
  }
  if (state.mode === 'play' && (pressed.has('Space') || pressed.has('KeyF'))) act();
  pressed.clear();

  for (let i = delayed.length - 1; i >= 0; i--) {
    delayed[i].t -= dt;
    if (delayed[i].t <= 0) {
      const f = delayed[i].fn;
      delayed.splice(i, 1);
      f();
    }
  }

  updatePlayer(dt);
  updatePlants(dt, time);
  updateShed(dt);
  butterflies.update(time);
  smokeT -= dt;
  if (smokeT <= 0 && world.house.roof.visible) {
    smokeT = 0.32;
    const a = world.smokeAt;
    particles.emit({ x: a.x + (Math.random() - 0.5) * 0.5, y: a.y, z: a.z + (Math.random() - 0.5) * 0.5, vx: 0.45 + Math.random() * 0.2, vy: 0.9 + Math.random() * 0.3, vz: 0.25, life: 4, size: 0.34, grow: 1.6, color: 0xe9eef2, color2: 0xb9d3e6, g: 0 });
  }
  particles.update(dt);
  updateCamera(dt);
  updateTokens(time);
  updateTarget();
  saveClock += dt;
  if ((state.mode === 'play' || state.mode === 'dress' || state.mode === 'shop') && saveClock > 4) {
    saveClock = 0;
    saveDirty = true;
  }
  if (saveDirty) {
    saveWait += dt;
    if (saveWait > 0.25) flushSave();
  }

  renderer.setRenderTarget(rt);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);
  post.uniforms.tColor.value = rt.texture;
  post.uniforms.tDepth.value = rt.depthTexture;
  quad.render(renderer);
}

function startGame() {
  if (state.mode === 'play' || state.mode === 'dress' || state.mode === 'loading') return;
  state.mode = 'play';
  $('title').classList.add('gone');
  $('title').classList.remove('dressing');
  $('dress').classList.add('hidden');
  $('hud').classList.remove('hidden');
  setInv(false);
  setIcon($('btn-you'), false);
  if (touchUI) {
    $('touch').classList.remove('hidden');
    $('help').classList.add('hidden');
  }
  cam.yawT = 0;
  cam.distT = 27;
  canSave = true;
  flushSave();
  refreshTitle();
}

const LEAF = ['...XX...', 'X..XX..X', 'XX.XX.XX', '.XXXXXX.', 'X.XXXX.X', '..XXXX..', '...XX...', '...XX...', '...XX...', '...XX...'];
for (const id of ['leaf-icon', 'leaf-logo']) {
  const c = $(id);
  const g = c.getContext('2d');
  c.width = 8;
  c.height = 10;
  LEAF.forEach((row, y) => [...row].forEach((ch, x) => {
    if (ch !== 'X') return;
    g.fillStyle = y > 6 ? '#6fa23f' : (x + y) % 3 === 0 ? '#7fb44a' : '#93c85a';
    g.fillRect(x, y, 1, 1);
  }));
}

/* --------------------------------------------------------------- save / look */
function plotSnap(d) {
  return {
    state: d.state,
    stage: d.stage,
    prog: d.prog,
    water: d.water,
    stress: d.stress,
    age: d.age,
    strain: d.strain || 'bd',
    fromClone: !!d.fromClone,
    ripe: d.ripe || 0,
    holdVeg: !!d.holdVeg,
  };
}

function itemSnap(it) {
  if (!it) return null;
  return {
    strain: it.strain || 'bd',
    grade: it.grade,
    grams: it.grams | 0,
    t: it.t || 0,
    dry: it.dry || 0,
    hold: it.hold || 0,
    dropped: !!it.dropped,
    cure: it.cure || 0,
    burped: !!it.burped,
    missed: !!it.missed,
    needsBurp: !!it.needsBurp,
  };
}

function snapshot() {
  return {
    look: state.look || player.getLook(),
    mota: state.mota | 0,
    grams: state.grams | 0,
    harvested: state.harvested | 0,
    jars: { AAAA: state.jars.AAAA | 0, AAA: state.jars.AAA | 0, AA: state.jars.AA | 0, A: state.jars.A | 0 },
    wet: state.wet.slice(0, 12).map((w) => ({ grade: w.grade, grams: w.grams | 0, strain: w.strain || 'bd', trimmed: !!w.trimmed })),
    seeds: Object.fromEntries(STRAIN_IDS.map((id) => [id, state.seeds[id] | 0])),
    clones: state.clones.slice(0, 8).map((c) => ({ strain: strainOf(c.strain).id })),
    nutrients: state.nutrients | 0,
    cubes: state.cubes | 0,
    strainPick: STRAINS[state.strainPick] ? state.strainPick : 'bd',
    px: P.x,
    py: P.y,
    pz: P.z,
    facing: P.facing,
    warehouse: !!world.warehouse.owned,
    lights: world.warehouse.lights === 'flower' ? 'flower' : 'veg',
    plots: slotsData.map(plotSnap),
    wh: whData.map(plotSnap),
    mothers: world.house.mothers.map((m) => ({
      state: m.state || 'empty',
      strain: m.strain,
      stage: m.stage | 0,
      prog: m.prog || 0,
      water: m.water,
      cool: m.cool || 0,
    })),
    trays: world.house.trays.map((t) => ({ state: t.state, strain: t.strain, t: t.t || 0 })),
    veg: world.house.veg.map((v) => ({ state: v.state, strain: v.strain, t: v.t || 0 })),
    hooks: world.shed.hooks.map((h) => itemSnap(h.item)),
    cure: world.shed.cureJars.map((j) => itemSnap(j.item)),
    unlocks: {
      mother2: !!world.house.mother2,
      tube2: !!world.house.tube2,
      vegWest: !!world.house.vegWest,
      vegCenter: !!world.house.vegCenter,
      beds: BEDS.map((_, bed) => !slotsData[bed * 4]?.locked),
    },
  };
}

function flushSave() {
  if (!canSave || !world || !player) return;
  saveDirty = false;
  saveWait = 0;
  writeSave(snapshot());
}

function applyPlot(d, mesh, snap) {
  const growing = snap.state === 'growing' || snap.state === 'ready' || snap.state === 'ripening';
  d.state = growing ? snap.state : 'empty';
  d.stage = Math.max(0, Math.min(4, snap.stage | 0));
  d.prog = Number(snap.prog) || 0;
  d.water = Number(snap.water) || 0;
  d.stress = Number(snap.stress) || 0;
  d.age = Number(snap.age) || 0;
  d.ripe = Number(snap.ripe) || 0;
  d.holdVeg = !!snap.holdVeg && d.state === 'growing';
  d.strain = strainOf(snap.strain).id;
  d.fromClone = !!snap.fromClone;
  d.pop = 0;
  mesh.geometry = plantGeo(d.state === 'empty' ? 0 : d.stage, d.strain);
  mesh.visible = d.state !== 'empty';
}

function restoreItem(slot, snap) {
  if (!snap || !GRADES.includes(snap.grade)) {
    slot.item = null;
    slot.mesh.visible = false;
    return;
  }
  slot.item = {
    strain: strainOf(snap.strain).id,
    grade: snap.grade,
    grams: snap.grams | 0,
    t: Number(snap.t) || 0,
    dry: Number(snap.dry) || 0,
    hold: Number(snap.hold) || 0,
    dropped: !!snap.dropped,
    cure: Number(snap.cure) || 0,
    burped: !!snap.burped,
    missed: !!snap.missed,
    needsBurp: !!snap.needsBurp,
    sealed: false,
  };
  if (slot.nug) slot.mesh.geometry = world.shed.nugGeo[slot.item.strain] || world.shed.nugGeo.bd;
  slot.mesh.visible = true;
}

function syncStationPlants() {
  for (const mom of world.house.mothers) {
    const alive = mom.state === 'growing' || mom.state === 'mother';
    mom.plant.visible = alive;
    if (!alive) continue;
    const stage = mom.state === 'mother' ? 2 : mom.stage || 0;
    mom.plant.geometry = plantGeo(stage, mom.strain || 'bd');
    mom.plant.scale.setScalar(mom.state === 'mother' ? 1.2 : 0.5 + stage * 0.3);
  }
  for (const tray of world.house.trays) {
    const on = tray.state === 'rooting' || tray.state === 'ready';
    tray.plant.visible = on;
    if (!on) continue;
    tray.plant.geometry = plantGeo(tray.state === 'ready' ? 1 : 0, tray.strain || 'bd');
    tray.plant.scale.setScalar(0.48);
  }
  for (const pot of world.house.veg) {
    const on = pot.state === 'veg' || pot.state === 'ready';
    pot.plant.visible = on;
    if (!on) continue;
    pot.plant.geometry = plantGeo(2, pot.strain || 'bd');
    pot.plant.scale.setScalar(pot.state === 'ready' ? 0.9 : 0.72 + 0.18 * Math.min(1, (pot.t || 0) / VEG_TIME));
  }
}

function blankPlots(list, meshes) {
  list.forEach((d, i) => {
    d.state = 'empty';
    d.stage = 0;
    d.prog = 0;
    d.water = 0;
    d.stress = 0;
    d.age = 0;
    d.strain = 'bd';
    d.ripe = 0;
    d.holdVeg = false;
    d.fromClone = false;
    d.pop = 0;
    meshes[i].visible = false;
    meshes[i].geometry = plantGeo(0, 'bd');
  });
}

function resetWorld() {
  state.seeds = starterSeeds();
  state.clones = [];
  state.nutrients = 0;
  state.cubes = 0;
  state.mota = 0;
  state.jars = { AAAA: 0, AAA: 0, AA: 0, A: 0 };
  state.grams = 0;
  state.harvested = 0;
  state.wet = [];
  state.strainPick = 'bd';
  P.x = 0;
  P.z = -6.3;
  P.y = 0;
  world.house.upper.visible = false;
  P.facing = state.mode === 'dress' ? 0.62 : 0;
  blankPlots(slotsData, plantMeshes);
  slotsData.forEach((d, i) => { d.locked = (i / 4 | 0) !== 0; });
  blankPlots(whData, whMeshes);
  const W = world.warehouse;
  W.owned = false;
  W.gateOpen = false;
  W.open = false;
  W.lights = 'veg';
  paintLights(W);
  W.forSale.visible = true;
  world.lot.mesh.visible = true;
  world.house.open = false;
  world.shed.open = false;
  world.house.mother2 = false;
  world.house.tube2 = false;
  world.house.vegWest = false;
  world.house.vegCenter = false;
  for (const mom of world.house.mothers) Object.assign(mom, { state: 'empty', strain: null, stage: 0, prog: 0, water: 1, cool: 0 });
  for (const tray of world.house.trays) Object.assign(tray, { state: 'empty', strain: null, t: 0 });
  for (const pot of world.house.veg) Object.assign(pot, { state: 'empty', strain: null, t: 0 });
  for (const h of world.shed.hooks) {
    h.item = null;
    h.mesh.visible = false;
  }
  for (const j of world.shed.cureJars) {
    j.item = null;
    j.mesh.visible = false;
  }
  syncStationPlants();
}

function applySave(save) {
  state.mota = save.mota | 0;
  state.harvested = save.harvested | 0;
  for (const g of GRADES) state.jars[g] = Math.max(0, save.jars?.[g] | 0);
  syncCuredGrams();
  state.wet = Array.isArray(save.wet) ? save.wet.slice(0, 12).map((w) => ({ grade: GRADES.includes(w.grade) ? w.grade : 'A', grams: w.grams | 0, strain: strainOf(w.strain).id, trimmed: w.trimmed === undefined ? true : !!w.trimmed })) : [];
  state.seeds = Object.fromEntries(STRAIN_IDS.map((id) => [id, Math.max(0, save.seeds?.[id] | 0)]));
  state.clones = Array.isArray(save.clones) ? save.clones.slice(0, 8).map((c) => ({ strain: strainOf(c.strain || c).id })) : [];
  state.nutrients = Math.max(0, save.nutrients | 0);
  state.cubes = Math.max(0, save.cubes | 0);
  state.strainPick = STRAINS[save.strainPick] ? save.strainPick : 'bd';
  state.look = normalizeLook(save.look);
  player.setLook(state.look);
  if (Number.isFinite(save.px)) P.x = save.px;
  if (Number.isFinite(save.py)) P.y = save.py;
  if (Number.isFinite(save.pz)) P.z = save.pz;
  if (Number.isFinite(save.facing)) P.facing = save.facing;
  if (Array.isArray(save.plots)) save.plots.forEach((snap, i) => slotsData[i] && snap && applyPlot(slotsData[i], plantMeshes[i], snap));
  if (Array.isArray(save.wh)) save.wh.forEach((snap, i) => whData[i] && snap && applyPlot(whData[i], whMeshes[i], snap));
  world.house.mothers.forEach((mom, i) => {
    const snap = save.mothers?.[i];
    if (!snap) return;
    const alive = snap.state === 'growing' || snap.state === 'mother';
    mom.state = alive ? snap.state : 'empty';
    mom.strain = alive ? strainOf(snap.strain).id : null;
    mom.stage = alive ? Math.max(0, Math.min(2, snap.stage | 0)) : 0;
    mom.prog = Number(snap.prog) || 0;
    mom.water = Number.isFinite(snap.water) ? snap.water : 1;
    mom.cool = Number(snap.cool) || 0;
  });
  world.house.trays.forEach((tray, i) => {
    const snap = save.trays?.[i];
    if (!snap) return;
    const on = snap.state === 'rooting' || snap.state === 'ready';
    tray.state = on ? snap.state : 'empty';
    tray.strain = on ? strainOf(snap.strain).id : null;
    tray.t = Number(snap.t) || 0;
  });
  world.house.veg.forEach((pot, i) => {
    const snap = save.veg?.[i];
    if (!snap) return;
    const on = snap.state === 'veg' || snap.state === 'ready';
    pot.state = on ? snap.state : 'empty';
    pot.strain = on ? strainOf(snap.strain).id : null;
    pot.t = Number(snap.t) || 0;
  });
  const u = save.unlocks;
  const legacy = !u;
  world.house.mother2 = legacy ? true : !!u.mother2;
  world.house.tube2 = legacy ? true : !!u.tube2;
  world.house.vegWest = legacy ? true : !!u.vegWest;
  world.house.vegCenter = legacy ? true : !!u.vegCenter;
  const beds = !legacy && Array.isArray(u.beds) ? u.beds : null;
  slotsData.forEach((d, i) => {
    d.locked = beds ? beds[i / 4 | 0] === false : false;
  });
  world.shed.hooks.forEach((h, i) => restoreItem(h, save.hooks?.[i]));
  world.shed.cureJars.forEach((j, i) => restoreItem(j, save.cure?.[i]));
  const owned = !!save.warehouse;
  world.warehouse.owned = owned;
  world.warehouse.gateOpen = owned;
  world.warehouse.open = false;
  world.warehouse.forSale.visible = !owned;
  world.warehouse.lights = save.lights === 'flower' ? 'flower' : 'veg';
  paintLights(world.warehouse);
  world.lot.mesh.visible = !owned;
  world.house.open = false;
  world.shed.open = false;
  if (world.shed.contains(P.x, P.z)) world.shed.open = true;
  if (world.house.contains(P.x, P.z)) world.house.open = true;
  world.house.upper.visible = P.y > 1.45 || world.house.onStair(P.x, P.z, P.y);
  if (owned && world.warehouse.contains(P.x, P.z)) world.warehouse.open = true;
  syncStationPlants();
}

function refreshTitle() {
  const saved = !!loadSave();
  $('press-desk').textContent = saved ? 'CLICK OR SPACE TO CONTINUE' : 'CLICK OR SPACE TO START';
  $('press-touch').textContent = saved ? 'TAP TO CONTINUE' : 'TAP TO START';
  $('btn-new').classList.toggle('hidden', !saved);
}

let dressFacing = 0;
let resetArm = 0;

function renderDress() {
  const root = $('dress-rows');
  root.replaceChildren();
  for (const { key, label } of LOOK_KEYS) {
    const opts = LOOK_OPTIONS[key];
    const cur = opts.find((o) => o.id === state.look?.[key]) || opts[0];
    const row = document.createElement('div');
    row.className = 'dress-row';
    const name = document.createElement('span');
    name.textContent = label;
    const prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'tbtn';
    prev.dataset.k = key;
    prev.dataset.d = '-1';
    prev.setAttribute('aria-label', `Previous ${label}`);
    prev.textContent = '<';
    const value = document.createElement('b');
    value.textContent = cur.name;
    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'tbtn';
    next.dataset.k = key;
    next.dataset.d = '1';
    next.setAttribute('aria-label', `Next ${label}`);
    next.textContent = '>';
    row.append(name, prev, value, next);
    root.append(row);
  }
}

function setIcon(btn, on) {
  if (!btn) return;
  btn.classList.toggle('on', on);
  btn.setAttribute('aria-pressed', on ? 'true' : 'false');
}

function setInv(open) {
  $('inv').classList.toggle('hidden', !open);
  setIcon($('btn-inv'), open);
}

function openDress() {
  if (!player || state.mode === 'loading' || state.mode === 'dress' || state.mode === 'shop') return;
  state.returnMode = state.mode === 'play' ? 'play' : 'title';
  state.mode = 'dress';
  dressFacing = P.facing;
  P.facing = 0.62;
  $('dress').classList.remove('hidden');
  $('title').classList.add('dressing');
  toggleHelp(false);
  setInv(false);
  setIcon($('btn-character'), true);
  if (state.returnMode === 'play') {
    $('brand').classList.add('hidden');
    $('btn-inv').classList.add('hidden');
    $('touch').classList.add('hidden');
    setIcon($('btn-you'), true);
  }
  renderDress();
}

function closeDress() {
  if (state.mode !== 'dress') return;
  $('dress').classList.add('hidden');
  $('title').classList.remove('dressing');
  P.facing = dressFacing;
  const back = state.returnMode === 'play' ? 'play' : 'title';
  state.mode = back;
  setIcon($('btn-character'), false);
  setIcon($('btn-you'), false);
  $('brand').classList.remove('hidden');
  $('btn-inv').classList.remove('hidden');
  if (back === 'play') {
    $('hud').classList.remove('hidden');
    if (touchUI) $('touch').classList.remove('hidden');
    cam.distT = 27;
    cam.yawT = 0;
  }
  canSave = true;
  flushSave();
  refreshTitle();
}

function cycleLook(key, dir) {
  const opts = LOOK_OPTIONS[key];
  if (!opts) return;
  const i = Math.max(0, opts.findIndex((o) => o.id === state.look[key]));
  const next = opts[(i + dir + opts.length) % opts.length];
  state.look = { ...state.look, [key]: next.id };
  player.setLook(state.look);
  renderDress();
  markDirty();
}

function newGrow() {
  canSave = true;
  const look = { ...(state.look || player.getLook()) };
  resetWorld();
  state.look = look;
  player.setLook(look);
  if (state.mode === 'dress') P.facing = 0.62;
  flushSave();
  refreshTitle();
  updateHud();
  toast('NEW GROW — ONE MOTHER, ONE TUBE, ONE GROW BOX', 'good');
}

function armReset(btn) {
  if (resetArm > performance.now()) {
    resetArm = 0;
    btn.textContent = 'NEW GROW';
    newGrow();
    return;
  }
  resetArm = performance.now() + 4000;
  btn.textContent = 'CONFIRM';
  setTimeout(() => {
    if (btn.textContent === 'CONFIRM') btn.textContent = 'NEW GROW';
  }, 4000);
}

function fillChip(b, id, on) {
  const spec = strainOf(id);
  b.className = 'chip' + (on ? ' on' : '');
  b.replaceChildren();
  const sw = document.createElement('i');
  sw.style.background = budHex(spec.bud[0]);
  b.append(sw, document.createTextNode(`${spec.short} ${state.seeds[id] | 0}`));
}

function setStrainBar(on) {
  const el = $('strains');
  if (!on) {
    el.classList.add('hidden');
    return;
  }
  el.classList.remove('hidden');
  const pick = STRAINS[state.strainPick] ? state.strainPick : 'bd';
  if (el.dataset.pick === pick && el.childElementCount === STRAIN_IDS.length) {
    STRAIN_IDS.forEach((id, i) => fillChip(el.children[i], id, id === pick));
    return;
  }
  el.dataset.pick = pick;
  el.replaceChildren();
  for (const id of STRAIN_IDS) {
    const b = document.createElement('button');
    b.type = 'button';
    fillChip(b, id, id === pick);
    b.dataset.strain = id;
    b.addEventListener('pointerdown', (e) => {
      swallow(e);
      state.strainPick = id;
      el.dataset.pick = '';
      setStrainBar(true);
      markDirty();
      updateHud();
    });
    el.append(b);
  }
}

function renderShop() {
  $('shop-mota').textContent = String(state.mota | 0);
  const root = $('shop-rows');
  root.replaceChildren();
  for (const item of SUPPLIES) {
    const row = document.createElement('div');
    row.className = 'shop-row';
    const name = document.createElement('div');
    name.className = 'shop-name';
    const title = document.createElement('b');
    title.textContent = item.name;
    const detail = document.createElement('span');
    detail.textContent = item.detail;
    name.append(title, detail);
    const cost = document.createElement('b');
    cost.className = 'shop-cost';
    cost.textContent = `${item.cost}`;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tbtn';
    btn.dataset.buy = item.id;
    btn.textContent = state.mota >= item.cost ? 'BUY' : 'NEED';
    row.append(name, cost, btn);
    root.append(row);
  }
}

function openShop() {
  if (state.mode !== 'play') return true;
  state.mode = 'shop';
  P.cool = 0.25;
  $('shop').classList.remove('hidden');
  $('touch').classList.add('hidden');
  prompt.style.display = 'none';
  renderShop();
  return true;
}

function closeShop() {
  if (state.mode !== 'shop') return;
  $('shop').classList.add('hidden');
  state.mode = 'play';
  if (touchUI) $('touch').classList.remove('hidden');
}

function buySupply(id) {
  const item = SUPPLIES.find((s) => s.id === id);
  if (!item) return;
  if (state.mota < item.cost) return toast(`NEED ${item.cost} MOTA`);
  state.mota -= item.cost;
  if (item.kind === 'seed') state.seeds[item.strain] = (state.seeds[item.strain] | 0) + item.n;
  else if (item.kind === 'nutrient') state.nutrients += item.n;
  else state.cubes += item.n;
  toast(`${item.name} BOUGHT`, 'good');
  updateHud();
  renderShop();
  markDirty();
}

function bindShop() {
  $('btn-shop-close').addEventListener('pointerdown', (e) => {
    swallow(e);
    closeShop();
  });
  $('shop-rows').addEventListener('pointerdown', (e) => {
    const btn = e.target.closest('button[data-buy]');
    if (!btn) return;
    swallow(e);
    buySupply(btn.dataset.buy);
  });
}

function bindDress() {
  const open = (e) => {
    swallow(e);
    if (state.mode === 'dress') closeDress();
    else openDress();
  };
  $('btn-character').addEventListener('pointerdown', open);
  $('btn-you').addEventListener('pointerdown', open);
  $('btn-inv').addEventListener('pointerdown', (e) => {
    swallow(e);
    if (state.mode !== 'play') return;
    setInv($('inv').classList.contains('hidden'));
  });
  $('strain-now').addEventListener('pointerdown', (e) => {
    swallow(e);
    if (state.mode !== 'play') return;
    const i = Math.max(0, STRAIN_IDS.indexOf(state.strainPick));
    state.strainPick = STRAIN_IDS[(i + 1) % STRAIN_IDS.length];
    markDirty();
    updateHud();
  });
  const helpBtn = (e) => {
    swallow(e);
    if (state.mode !== 'play') return;
    toggleHelp();
  };
  $('btn-help-hud').addEventListener('pointerdown', helpBtn);
  $('btn-help-close').addEventListener('pointerdown', helpBtn);
  $('btn-dress-done').addEventListener('pointerdown', (e) => {
    swallow(e);
    closeDress();
  });
  $('btn-new').addEventListener('pointerdown', (e) => {
    swallow(e);
    armReset($('btn-new'));
  });
  $('btn-dress-new').addEventListener('pointerdown', (e) => {
    swallow(e);
    armReset($('btn-dress-new'));
  });
  $('dress-rows').addEventListener('pointerdown', (e) => {
    const btn = e.target.closest('button[data-k]');
    if (!btn) return;
    swallow(e);
    cycleLook(btn.dataset.k, Number(btn.dataset.d) || 1);
  });
}

/* -------------------------------------------------------------------- boot */
function boot() {
  const save = loadSave();
  canSave = !!save;
  world = buildWorld();
  scene.add(world.group);
  player = createPlayer(save?.look);
  state.look = player.getLook();
  scene.add(player.root);
  particles = new Particles(scene);
  butterflies = new Butterflies(scene);
  buildMarker();
  initSlots();
  initWarehouse();
  spawnTokens();
  if (save) applySave(save);
  resize();
  addEventListener('resize', resize);
  visualViewport?.addEventListener('resize', resize);
  addEventListener('orientationchange', () => setTimeout(resize, 120));
  bindTouch();
  bindDress();
  bindShop();
  setTouchUI(shouldTouch());
  matchMedia('(max-width: 820px)').addEventListener('change', () => setTouchUI(shouldTouch() || touchUI));
  state.mode = 'title';
  refreshTitle();
  updateHud();
  addEventListener('pagehide', flushSave);
  $('loading').classList.add('gone');
  if (params.has('autostart')) startGame();
  window.__mm = { scene, renderer, state, cam, P, slotsData, whData, world, camera, player, startGame, act, setStage, plantMeshes, whMeshes, stick, openDress, closeDress, openShop, closeShop, buySupply, newGrow, flushSave, loadSave };
}

requestAnimationFrame(() => setTimeout(boot, 30));
requestAnimationFrame(frame);
void SLOT_OFFSETS;
