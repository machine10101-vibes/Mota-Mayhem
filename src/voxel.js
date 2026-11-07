import * as THREE from 'three';

const OFF = 1024;
const SY = 2048;
const SZ = 4194304;
export const vkey = (x, y, z) => x + OFF + (y + OFF) * SY + (z + OFF) * SZ;

const LIN = new Float32Array(256);
for (let i = 0; i < 256; i++) {
  const s = i / 255;
  LIN[i] = s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

export function hash3(x, y, z, s = 0) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(z | 0, 2147483629) ^ Math.imul(s | 0, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

export function mulberry(a) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp255 = (v) => (v < 0 ? 0 : v > 255 ? 255 : v | 0);
const rgbCache = new Map();
export function rgb(c) {
  if (typeof c === 'number') return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  let v = rgbCache.get(c);
  if (!v) {
    const n = parseInt(c.slice(1), 16);
    v = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    rgbCache.set(c, v);
  }
  return v;
}

export function shade(c, f) {
  const [r, g, b] = rgb(c);
  return (clamp255(r * f) << 16) | (clamp255(g * f) << 8) | clamp255(b * f);
}

export function mix(a, b, t) {
  const A = rgb(a);
  const B = rgb(b);
  return (clamp255(A[0] + (B[0] - A[0]) * t) << 16) | (clamp255(A[1] + (B[1] - A[1]) * t) << 8) | clamp255(A[2] + (B[2] - A[2]) * t);
}

export function noise2(x, z, seed = 0) {
  const xi = Math.floor(x);
  const zi = Math.floor(z);
  const xf = x - xi;
  const zf = z - zi;
  const u = xf * xf * (3 - 2 * xf);
  const v = zf * zf * (3 - 2 * zf);
  const a = hash3(xi, 0, zi, seed);
  const b = hash3(xi + 1, 0, zi, seed);
  const c = hash3(xi, 0, zi + 1, seed);
  const d = hash3(xi + 1, 0, zi + 1, seed);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

const FACES = [
  { n: [1, 0, 0], t1: [0, 1, 0], t2: [0, 0, 1] },
  { n: [-1, 0, 0], t1: [0, 0, 1], t2: [0, 1, 0] },
  { n: [0, 1, 0], t1: [0, 0, 1], t2: [1, 0, 0] },
  { n: [0, -1, 0], t1: [1, 0, 0], t2: [0, 0, 1] },
  { n: [0, 0, 1], t1: [1, 0, 0], t2: [0, 1, 0] },
  { n: [0, 0, -1], t1: [0, 1, 0], t2: [1, 0, 0] },
];
const CORNERS = [
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 1],
];
const AO_FACTOR = [0.58, 0.74, 0.88, 1.0];

export class VoxelModel {
  constructor() {
    this.v = new Map();
  }

  set(x, y, z, c, j = 0.06) {
    x = Math.round(x);
    y = Math.round(y);
    z = Math.round(z);
    let [r, g, b] = rgb(c);
    if (j) {
      const f = 1 + (hash3(x, y, z, 11) - 0.5) * 2 * j;
      r = clamp255(r * f);
      g = clamp255(g * f);
      b = clamp255(b * f);
    }
    this.v.set(vkey(x, y, z), (r << 16) | (g << 8) | b);
  }

  has(x, y, z) {
    return this.v.has(vkey(x, y, z));
  }

  del(x, y, z) {
    this.v.delete(vkey(Math.round(x), Math.round(y), Math.round(z)));
  }

  box(x0, y0, z0, x1, y1, z1, c, j = 0.06) {
    const fn = typeof c === 'function';
    for (let x = x0; x < x1; x++)
      for (let y = y0; y < y1; y++)
        for (let z = z0; z < z1; z++) {
          const col = fn ? c(x, y, z) : c;
          if (col !== null && col !== undefined) this.set(x, y, z, col, j);
        }
  }

  delBox(x0, y0, z0, x1, y1, z1) {
    for (let x = x0; x < x1; x++) for (let y = y0; y < y1; y++) for (let z = z0; z < z1; z++) this.v.delete(vkey(x, y, z));
  }

  sphereShell(cx, cy, cz, r, thick, colorFn, j = 0.08, squash = 1) {
    const R = Math.ceil(r) + 1;
    for (let x = -R; x <= R; x++)
      for (let y = -R; y <= R; y++)
        for (let z = -R; z <= R; z++) {
          const d = Math.sqrt(x * x + (y / squash) * (y / squash) + z * z);
          if (d <= r && d > r - thick) {
            const px = cx + x;
            const py = cy + y;
            const pz = cz + z;
            const col = colorFn(px, py, pz, d / r);
            if (col !== null && col !== undefined) this.set(px, py, pz, col, j);
          }
        }
  }

  get size() {
    return this.v.size;
  }

  build(vs, origin = [0, 0, 0], entries = this.v) {
    const pos = [];
    const nor = [];
    const col = [];
    const idx = [];
    const has = (x, y, z) => this.v.has(x + OFF + (y + OFF) * SY + (z + OFF) * SZ);
    const ao = [0, 0, 0, 0];
    for (const [k, val] of entries) {
      const x = (k % SY) - OFF;
      const y = (Math.floor(k / SY) % SY) - OFF;
      const z = Math.floor(k / SZ) - OFF;
      const cr = LIN[(val >> 16) & 255];
      const cg = LIN[(val >> 8) & 255];
      const cb = LIN[val & 255];
      for (let fi = 0; fi < 6; fi++) {
        const f = FACES[fi];
        const [nx, ny, nz] = f.n;
        if (has(x + nx, y + ny, z + nz)) continue;
        const [t1x, t1y, t1z] = f.t1;
        const [t2x, t2y, t2z] = f.t2;
        const ox = nx > 0 ? 1 : 0;
        const oy = ny > 0 ? 1 : 0;
        const oz = nz > 0 ? 1 : 0;
        const bx = x + nx;
        const by = y + ny;
        const bz = z + nz;
        const base = pos.length / 3;
        for (let c = 0; c < 4; c++) {
          const a = CORNERS[c][0];
          const b = CORNERS[c][1];
          const sa = a ? 1 : -1;
          const sb = b ? 1 : -1;
          const s1 = has(bx + sa * t1x, by + sa * t1y, bz + sa * t1z) ? 1 : 0;
          const s2 = has(bx + sb * t2x, by + sb * t2y, bz + sb * t2z) ? 1 : 0;
          const cc = has(bx + sa * t1x + sb * t2x, by + sa * t1y + sb * t2y, bz + sa * t1z + sb * t2z) ? 1 : 0;
          const o = s1 && s2 ? 0 : 3 - (s1 + s2 + cc);
          ao[c] = o;
          const f2 = AO_FACTOR[o];
          pos.push((x + ox + a * t1x + b * t2x - origin[0]) * vs, (y + oy + a * t1y + b * t2y - origin[1]) * vs, (z + oz + a * t1z + b * t2z - origin[2]) * vs);
          nor.push(nx, ny, nz);
          col.push(cr * f2, cg * f2, cb * f2);
        }
        if (ao[0] + ao[2] < ao[1] + ao[3]) idx.push(base, base + 1, base + 3, base + 1, base + 2, base + 3);
        else idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(new THREE.Uint32BufferAttribute(idx, 1));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}

VoxelModel.prototype.buildChunks = function (vs, origin = [0, 0, 0], chunk = 64) {
  const buckets = new Map();
  for (const e of this.v) {
    const k = e[0];
    const x = (k % SY) - OFF;
    const z = Math.floor(k / SZ) - OFF;
    const ck = Math.floor(x / chunk) * 4096 + Math.floor(z / chunk);
    let b = buckets.get(ck);
    if (!b) buckets.set(ck, (b = []));
    b.push(e);
  }
  return [...buckets.values()].map((entries) => this.build(vs, origin, entries));
};

export const voxelMaterial = new THREE.MeshLambertMaterial({ vertexColors: true });

export function toMesh(model, vs, origin = [0, 0, 0], material = voxelMaterial, shadows = true) {
  const mesh = new THREE.Mesh(model.build(vs, origin), material);
  mesh.castShadow = shadows;
  mesh.receiveShadow = true;
  return mesh;
}

export function toChunkedMeshes(model, vs, origin = [0, 0, 0], material = voxelMaterial, shadows = true, chunk = 64) {
  return model.buildChunks(vs, origin, chunk).map((g) => {
    const mesh = new THREE.Mesh(g, material);
    mesh.castShadow = shadows;
    mesh.receiveShadow = true;
    return mesh;
  });
}
