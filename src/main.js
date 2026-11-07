import * as THREE from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import '@fontsource/press-start-2p';
import './style.css';
import { createPlayer } from './character.js';
import { buildWorld, SLOT_OFFSETS } from './world.js';
import { buildPlant, PVS } from './plants.js';
import { VoxelModel, toMesh, voxelMaterial } from './voxel.js';
import { Particles, Butterflies } from './fx.js';

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
sc.left = -30;
sc.right = 30;
sc.top = 30;
sc.bottom = -30;
sc.near = 5;
sc.far = 90;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.035;
scene.add(sun, sun.target);

/* ------------------------------------------------------------------- state */
const state = {
  mode: 'loading',
  seeds: 8,
  jars: { AAAA: 0, AAA: 0, AA: 0, A: 0 },
  grams: 0,
  harvested: 0,
};

let world;
let player;
let particles;
let butterflies;
const slotsData = [];
const plantMeshes = [];
const geoCache = new Map();
const marker = new THREE.Group();

const DUR = [7, 11, 15, 15];
const STAGE_NAMES = ['SPROUT', 'SEEDLING', 'VEGETATIVE', 'FLOWERING', 'READY'];

function plantGeo(stage, variant) {
  const k = stage * 10 + variant;
  let g = geoCache.get(k);
  if (!g) {
    g = buildPlant(stage, variant).build(PVS, [0, 0, 0]);
    geoCache.set(k, g);
  }
  return g;
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
addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

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

function onCamDown(e) {
  if (e.button && e.button !== 0) return;
  if (e.target.closest('#touch, #hud, #help, button')) return;
  if (state.mode === 'title') {
    startGame();
    ignoreCam = true;
    return;
  }
  if (ignoreCam || state.mode !== 'play') return;
  if (e.pointerType === 'touch') setTouchUI(true);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 1) camDrag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false };
  if (pointers.size === 2) {
    camDrag = null;
    pinch0 = pinchDist();
  }
}

function onCamMove(e) {
  const p = pointers.get(e.pointerId);
  if (p) {
    p.x = e.clientX;
    p.y = e.clientY;
  }
  if (pointers.size >= 2 && pinch0) {
    const d = pinchDist();
    cam.distT = THREE.MathUtils.clamp(cam.distT + (pinch0 - d) * 0.04, 12, 36);
    pinch0 = d;
    return;
  }
  if (!camDrag || camDrag.id !== e.pointerId) return;
  const dx = e.clientX - camDrag.x;
  if (!camDrag.moved && Math.abs(dx) < 8) return;
  camDrag.moved = true;
  cam.yawT -= dx * 0.006;
  camDrag.x = e.clientX;
  camDrag.y = e.clientY;
}

function onCamUp(e) {
  pointers.delete(e.pointerId);
  if (camDrag && camDrag.id === e.pointerId) camDrag = null;
  if (pointers.size < 2) pinch0 = 0;
  if (e.type === 'pointerup' || e.type === 'pointercancel') ignoreCam = false;
}

renderer.domElement.addEventListener('pointerdown', onCamDown);
addEventListener('pointerdown', (e) => {
  if (e.pointerType === 'touch') setTouchUI(true);
  if (state.mode === 'title' && !e.target.closest('#help, #touch, button')) startGame();
});
addEventListener('pointermove', onCamMove);
addEventListener('pointerup', onCamUp);
addEventListener('pointercancel', onCamUp);

function bindHold(el, on, off) {
  const down = (e) => {
    e.preventDefault();
    e.stopPropagation();
    el.setPointerCapture?.(e.pointerId);
    el.classList.add('held');
    on(e);
  };
  const up = (e) => {
    el.classList.remove('held');
    off?.(e);
  };
  el.addEventListener('pointerdown', down);
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
}

function bindStick() {
  const pad = $('stick');
  const knob = $('stick-knob');
  const R = () => pad.clientWidth * 0.5;
  let active = -1;
  const setFrom = (e) => {
    const r = pad.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    let dx = e.clientX - cx;
    let dy = e.clientY - cy;
    const max = R() - 8;
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
    active = -1;
    stick.x = 0;
    stick.y = 0;
    knob.style.transform = 'translate(0,0)';
  };
  pad.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    active = e.pointerId;
    pad.setPointerCapture(e.pointerId);
    setFrom(e);
  });
  pad.addEventListener('pointermove', (e) => {
    if (e.pointerId === active) setFrom(e);
  });
  pad.addEventListener('pointerup', (e) => {
    if (e.pointerId === active) clear();
  });
  pad.addEventListener('pointercancel', clear);
}

function bindTouch() {
  bindStick();
  bindHold($('btn-run'), () => (stick.run = true), () => (stick.run = false));
  bindHold($('btn-cam-l'), () => (stick.cam = -1), () => (stick.cam = 0));
  bindHold($('btn-cam-r'), () => (stick.cam = 1), () => (stick.cam = 0));
  $('btn-act').addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (state.mode === 'play') act();
  });
  $('btn-help').addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    $('help').classList.toggle('hidden');
  });
}

/* ------------------------------------------------------------------ player */
const P = { x: 0, z: -6.3, y: 0, facing: 0, speed: 0, cool: 0, dust: 0 };
const PR = 0.42;

function resolveCollisions() {
  P.x = THREE.MathUtils.clamp(P.x, -19.1, 19.1);
  P.z = THREE.MathUtils.clamp(P.z, -13.4, 13.3);
  for (let it = 0; it < 3; it++)
    for (const r of world.colliders) {
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
  const gy = world.groundHeight(P.x, P.z);
  P.y += (gy - P.y) * Math.min(1, dt * 18);
  P.cool = Math.max(0, P.cool - dt);
  player.root.position.set(P.x, P.y, P.z);
  player.root.rotation.y = P.facing;
  player.update(dt, moving ? P.speed : 0);
}

/* ------------------------------------------------------------------ plants */
function initSlots() {
  world.slots.forEach((s, i) => {
    const d = { state: 'empty', stage: 0, prog: 0, water: 0, waterVis: 0, stress: 0, age: 0, variant: (i * 7 + Math.floor(i / 4)) % 4, pop: 1, rot: ((i * 2654435761) % 628) / 100 };
    slotsData.push(d);
    const mesh = new THREE.Mesh(plantGeo(0, d.variant), voxelMaterial);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(s.x, s.y + 0.1, s.z);
    mesh.rotation.y = d.rot;
    mesh.visible = false;
    scene.add(mesh);
    plantMeshes.push(mesh);
  });
}

function setStage(i, stage) {
  const d = slotsData[i];
  d.stage = stage;
  d.prog = 0;
  d.pop = 0;
  plantMeshes[i].geometry = plantGeo(stage, d.variant);
  if (stage >= 4) d.state = 'ready';
}

function gradeOf(d) {
  const q = Math.max(0, 1 - (d.stress / Math.max(1, d.age)) * 1.6);
  if (q >= 0.94) return 'AAAA';
  if (q >= 0.8) return 'AAA';
  if (q >= 0.55) return 'AA';
  return 'A';
}

function updatePlants(dt, time) {
  slotsData.forEach((d, i) => {
    const mesh = plantMeshes[i];
    const s = world.slots[i];
    if (d.state === 'empty') {
      mesh.visible = false;
    } else {
      mesh.visible = true;
      if (d.state === 'growing') {
        d.water = Math.max(0, d.water - dt / 38);
        const dry = d.water <= 0;
        d.age += dt;
        if (dry) d.stress += dt;
        d.prog += (dt * (dry ? 0.35 : 1)) / DUR[d.stage];
        if (d.prog >= 1) {
          const next = d.stage + 1;
          setStage(i, next);
          const col = next >= 4 ? 0xfff3a0 : 0xbfe88a;
          for (let k = 0; k < 14; k++) particles.emit({ x: s.x, y: s.y + 0.4, z: s.z, vx: (Math.random() - 0.5) * 2.4, vy: 1.5 + Math.random() * 2, vz: (Math.random() - 0.5) * 2.4, life: 0.8, size: 0.07, color: col, g: -6 });
        }
      }
      d.pop = Math.min(1, d.pop + dt * 2.4);
      const back = 1 + 1.70158;
      const e = 1 + back * Math.pow(d.pop - 1, 3) + 1.70158 * Math.pow(d.pop - 1, 2);
      const sc2 = 0.2 + 0.8 * e;
      mesh.scale.set(sc2, sc2, sc2);
      mesh.rotation.z = Math.sin(time * 1.4 + i * 1.7) * 0.022 * (0.4 + d.stage * 0.3);
      mesh.rotation.x = Math.cos(time * 1.1 + i) * 0.015 * (0.4 + d.stage * 0.3);
    }
    d.waterVis += (Math.min(1, d.water * 3) - d.waterVis) * Math.min(1, dt * 4);
    const v = 1.05 - 0.5 * d.waterVis;
    s.patchMat.color.setRGB(v, v * 0.98, v * 0.96);
  });
}

function nearestSlot() {
  const fx = P.x + Math.sin(P.facing) * 0.95;
  const fz = P.z + Math.cos(P.facing) * 0.95;
  let best = -1;
  let bd = 1.9 * 1.9;
  world.slots.forEach((s, i) => {
    const dx = s.x - fx;
    const dz = s.z - fz;
    const d2 = dx * dx + dz * dz;
    if (d2 < bd) {
      bd = d2;
      best = i;
    }
  });
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

function act() {
  if (P.cool > 0) return;
  const i = nearestSlot();
  if (i < 0) return;
  const d = slotsData[i];
  const s = world.slots[i];
  const fdx = s.x - P.x;
  const fdz = s.z - P.z;
  if (Math.hypot(fdx, fdz) > 0.3) P.facing = Math.atan2(fdx, fdz);
  if (d.state === 'empty') {
    if (state.seeds <= 0) return toast('NO SEEDS LEFT');
    state.seeds--;
    d.state = 'growing';
    d.water = 0.6;
    d.stress = 0;
    d.age = 0;
    d.variant = (d.variant + 1) % 4;
    setStage(i, 0);
    P.cool = 0.6;
    player.playAction('plant');
    later(0.25, () => {
      for (let k = 0; k < 12; k++) particles.emit({ x: s.x, y: s.y + 0.15, z: s.z, vx: (Math.random() - 0.5) * 2, vy: 1 + Math.random() * 1.4, vz: (Math.random() - 0.5) * 2, life: 0.55, size: 0.08, color: 0x6e5034, g: -9 });
    });
    updateHud();
  } else if (d.state === 'growing') {
    if (d.water > 0.7) return toast('PLANT IS WELL WATERED');
    d.water = 1;
    P.cool = 0.75;
    player.playAction('water');
    for (let k = 0; k < 26; k++)
      later(0.2 + k * 0.016, () => particles.emit({ x: P.x + Math.sin(P.facing) * 0.95 + (Math.random() - 0.5) * 0.15, y: 1.25, z: P.z + Math.cos(P.facing) * 0.95 + (Math.random() - 0.5) * 0.15, vx: Math.sin(P.facing) * 0.5, vy: -0.5, vz: Math.cos(P.facing) * 0.5, life: 0.5, size: 0.065, color: 0x7ec8f2, color2: 0x3f86c8, g: -9 }));
  } else if (d.state === 'ready') {
    const grade = gradeOf(d);
    const grams = grade === 'AAAA' ? 9 : grade === 'AAA' ? 7 : grade === 'AA' ? 5 : 3;
    state.jars[grade]++;
    state.grams += grams;
    state.harvested++;
    state.seeds += 1;
    P.cool = 0.7;
    player.playAction('harvest');
    d.state = 'empty';
    d.water = 0;
    plantMeshes[i].visible = false;
    later(0.3, () => {
      for (let k = 0; k < 34; k++) particles.emit({ x: s.x, y: s.y + 0.7, z: s.z, vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 3, vz: (Math.random() - 0.5) * 3, life: 1, size: 0.08, color: k % 3 === 0 ? 0xf08a2e : 0xf4fbe6, g: -5 });
      toast(`+${grams}G  ${grade} FLOWER  +1 SEED`, 'good');
    });
    updateHud();
  }
}

/* --------------------------------------------------------------------- HUD */
function updateHud() {
  $('seeds').textContent = state.seeds;
  $('grams').textContent = state.grams;
  for (const g of ['AAAA', 'AAA', 'AA', 'A']) $('jar-' + g).textContent = state.jars[g];
}

const tip = $('tip');
const prompt = $('prompt');
const v3 = new THREE.Vector3();
function updateTarget() {
  if (state.mode !== 'play') {
    marker.visible = false;
    tip.style.display = 'none';
    prompt.style.display = 'none';
    return -1;
  }
  const i = nearestSlot();
  if (i < 0) {
    marker.visible = false;
    tip.style.display = 'none';
    prompt.style.display = 'none';
    return -1;
  }
  const s = world.slots[i];
  const d = slotsData[i];
  marker.visible = true;
  marker.position.set(s.x, s.y + 0.06 + Math.sin(cam.t * 5) * 0.02, s.z);
  const scale = 1 + Math.sin(cam.t * 5) * 0.03;
  marker.scale.set(scale, 1, scale);
  const actLbl = touchUI ? 'TAP' : 'SPACE';
  let text;
  if (d.state === 'empty') text = state.seeds > 0 ? `${actLbl}  PLANT SEED` : 'NO SEEDS';
  else if (d.state === 'ready') text = `${actLbl}  HARVEST`;
  else text = d.water > 0.7 ? 'WELL WATERED' : `${actLbl}  WATER`;
  prompt.textContent = text;
  prompt.style.display = 'block';
  if (d.state === 'empty') {
    tip.style.display = 'none';
  } else {
    v3.set(s.x, s.y + 0.4 + d.stage * 0.35 + 0.8, s.z).project(camera);
    tip.style.display = 'block';
    tip.style.left = ((v3.x * 0.5 + 0.5) * 100).toFixed(2) + '%';
    tip.style.top = ((-v3.y * 0.5 + 0.5) * 100).toFixed(2) + '%';
    $('tip-name').textContent = STAGE_NAMES[d.stage];
    $('tip-water').style.width = Math.round(d.water * 100) + '%';
    $('tip-water').style.background = d.water > 0 ? '#58b4ee' : '#d9534f';
    $('tip-grow').style.width = Math.round((d.state === 'ready' ? 1 : (d.stage + d.prog) / 4) * 100) + '%';
    $('tip-grade').textContent = d.state === 'ready' ? gradeOf(d) : '';
  }
  return i;
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
  } else if (state.mode === 'play') {
    cam.pitch += (0.85 - cam.pitch) * k;
    const tx = THREE.MathUtils.clamp(P.x, -11, 11);
    const tz = THREE.MathUtils.clamp(P.z, -9, 7);
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
  if (pressed.has('KeyH')) $('help').classList.toggle('hidden');
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
  butterflies.update(time);
  smokeT -= dt;
  if (smokeT <= 0) {
    smokeT = 0.32;
    const a = world.smokeAt;
    particles.emit({ x: a.x + (Math.random() - 0.5) * 0.5, y: a.y, z: a.z + (Math.random() - 0.5) * 0.5, vx: 0.45 + Math.random() * 0.2, vy: 0.9 + Math.random() * 0.3, vz: 0.25, life: 4, size: 0.34, grow: 1.6, color: 0xe9eef2, color2: 0xb9d3e6, g: 0 });
  }
  particles.update(dt);
  updateCamera(dt);
  updateTarget();

  renderer.setRenderTarget(rt);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);
  post.uniforms.tColor.value = rt.texture;
  post.uniforms.tDepth.value = rt.depthTexture;
  quad.render(renderer);
}

function startGame() {
  if (state.mode === 'play') return;
  state.mode = 'play';
  $('title').classList.add('gone');
  $('hud').classList.remove('hidden');
  if (touchUI) {
    $('touch').classList.remove('hidden');
    $('help').classList.add('hidden');
  }
  cam.yawT = 0;
  cam.distT = 27;
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

/* -------------------------------------------------------------------- boot */
function boot() {
  world = buildWorld();
  scene.add(world.group);
  player = createPlayer();
  scene.add(player.root);
  particles = new Particles(scene);
  butterflies = new Butterflies(scene);
  buildMarker();
  initSlots();
  resize();
  addEventListener('resize', resize);
  visualViewport?.addEventListener('resize', resize);
  addEventListener('orientationchange', () => setTimeout(resize, 120));
  bindTouch();
  setTouchUI(shouldTouch());
  matchMedia('(max-width: 820px)').addEventListener('change', () => setTouchUI(shouldTouch() || touchUI));
  state.mode = 'title';
  updateHud();
  $('loading').classList.add('gone');
  if (params.has('autostart')) startGame();
  window.__mm = { scene, renderer, state, cam, P, slotsData, world, camera, player, startGame, act, setStage, plantMeshes };
}

requestAnimationFrame(() => setTimeout(boot, 30));
requestAnimationFrame(frame);
void SLOT_OFFSETS;
