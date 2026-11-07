import * as THREE from 'three';
import { VoxelModel, toMesh } from './voxel.js';

export class Particles {
  constructor(scene, max = 900) {
    this.max = max;
    this.list = [];
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, depthWrite: false });
    this.mesh = new THREE.InstancedMesh(geo, mat, max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 3;
    this.mesh.setColorAt(0, new THREE.Color(1, 1, 1));
    scene.add(this.mesh);
    this.tmp = new THREE.Object3D();
    this.col = new THREE.Color();
  }

  emit(o) {
    if (this.list.length >= this.max) this.list.shift();
    this.list.push({
      x: o.x,
      y: o.y,
      z: o.z,
      vx: o.vx || 0,
      vy: o.vy || 0,
      vz: o.vz || 0,
      g: o.g === undefined ? -9 : o.g,
      life: o.life || 0.6,
      age: 0,
      size: o.size || 0.08,
      grow: o.grow || 0,
      color: o.color === undefined ? 0xffffff : o.color,
      color2: o.color2,
      drag: o.drag || 0,
    });
  }

  update(dt) {
    const l = this.list;
    let n = 0;
    for (let i = 0; i < l.length; i++) {
      const p = l[i];
      p.age += dt;
      if (p.age >= p.life) continue;
      p.vy += p.g * dt;
      if (p.drag) {
        const k = Math.max(0, 1 - p.drag * dt);
        p.vx *= k;
        p.vz *= k;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      if (p.y < 0.02 && p.g < 0) {
        p.y = 0.02;
        p.vy *= -0.2;
        p.vx *= 0.6;
        p.vz *= 0.6;
      }
      const t = p.age / p.life;
      let s = p.size * (1 + p.grow * t);
      if (t > 0.7) s *= Math.max(0, 1 - (t - 0.7) / 0.3);
      this.tmp.position.set(p.x, p.y, p.z);
      this.tmp.scale.setScalar(s);
      this.tmp.updateMatrix();
      this.mesh.setMatrixAt(n, this.tmp.matrix);
      this.col.set(p.color);
      if (p.color2 !== undefined) this.col.lerp(new THREE.Color(p.color2), t);
      this.mesh.setColorAt(n, this.col);
      l[n] = p;
      n++;
    }
    l.length = n;
    this.mesh.count = n;
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }
}

const WING_COLORS = [
  [0xff9a2e, 0x2a1a10],
  [0xf8f6ee, 0x8a8a8a],
  [0xffe04a, 0x3a2a10],
  [0x6fb7ff, 0x1c2a4a],
];

export class Butterflies {
  constructor(scene, count = 7) {
    this.items = [];
    for (let i = 0; i < count; i++) {
      const [main, edge] = WING_COLORS[i % WING_COLORS.length];
      const w = new VoxelModel();
      w.box(0, 0, -2, 4, 1, 3, (x, y, z) => (x === 3 || z === -2 ? edge : main), 0);
      w.box(0, 0, 3, 3, 1, 5, main, 0);
      const wingGeoOrigin = [0, 0, 0];
      const body = new VoxelModel();
      body.box(-1, 0, -3, 1, 1, 4, 0x2a2018, 0);
      const g = new THREE.Group();
      const bodyMesh = toMesh(body, 0.034, [0, 0, 0], undefined, false);
      g.add(bodyMesh);
      const wl = new THREE.Group();
      const wr = new THREE.Group();
      const meshL = toMesh(w, 0.034, wingGeoOrigin, undefined, false);
      meshL.scale.x = -1;
      wl.add(meshL);
      wr.add(toMesh(w, 0.034, wingGeoOrigin, undefined, false));
      wl.position.x = -0.03;
      wr.position.x = 0.03;
      g.add(wl, wr);
      scene.add(g);
      this.items.push({
        g,
        wl,
        wr,
        cx: (Math.random() - 0.5) * 30,
        cz: (Math.random() - 0.5) * 20,
        r1: 2 + Math.random() * 4,
        r2: 1.5 + Math.random() * 3,
        s1: 0.15 + Math.random() * 0.2,
        s2: 0.2 + Math.random() * 0.2,
        ph: Math.random() * 10,
        h: 1 + Math.random() * 0.8,
      });
    }
  }

  pos(it, t) {
    const a = t * it.s1 + it.ph;
    const b = t * it.s2 + it.ph * 2;
    return [it.cx + Math.cos(a) * it.r1 + Math.sin(b * 1.7) * 0.8, it.h + Math.sin(t * 1.3 + it.ph) * 0.35, it.cz + Math.sin(a * 1.3) * it.r2 + Math.cos(b) * 0.6];
  }

  update(t) {
    for (const it of this.items) {
      const [x, y, z] = this.pos(it, t);
      const [x2, , z2] = this.pos(it, t + 0.05);
      it.g.position.set(x, y, z);
      it.g.rotation.y = Math.atan2(x2 - x, z2 - z);
      const f = Math.sin(t * 22 + it.ph) * 0.9 + 0.3;
      it.wl.rotation.z = -f;
      it.wr.rotation.z = f;
    }
  }
}
