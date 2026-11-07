# Mota Mayhem

Play: [machine10101-vibes.github.io/Mota-Mayhem](https://machine10101-vibes.github.io/Mota-Mayhem/)

A cannabis-farming game rendered as cartoon 3D pixel art (voxels), played from an overhead third-person camera.
This first slice focuses on graphics: a fully fenced backyard with a house and porch, greenhouse, shed, raised beds,
and props, a voxel hero based on the reference sprite, and a small plant / water / harvest loop.

## Run

```bash
npm install
npm run dev      # http://localhost:5173/Mota-Mayhem/
npm run build    # production build in dist/ (GitHub Pages base /Mota-Mayhem/)
```

## Controls

| Action | Keys |
| --- | --- |
| Move / run | WASD or arrows / Shift |
| Plant, water, harvest | Space (or F) next to a bed plot |
| Rotate / zoom camera | Q, E or drag / mouse wheel |
| Pixel size | `[` and `]` |
| Toggle help | H |

## Gameplay

Plant seeds in the 24 bed plots. Each plant grows through sprout, seedling, vegetative, flowering and ready.
Keep soil watered: dry plants slow down and accumulate stress. The harvest grade (A, AA, AAA, AAAA) reflects how
consistently you kept the plant watered, mirroring the craft-grade idea of consistency over volume.

## How the look is built

- `src/voxel.js` - voxel mesher with face culling, baked per-vertex ambient occlusion, per-voxel colour jitter,
  and spatial chunking for frustum culling.
- `src/character.js` - the hero (bucket hat with leaf, plaid shirt, leaf-pocket overalls, boots), animated rig.
- `src/plants.js` - procedural cannabis plants for 5 growth stages and 4 strain colourways.
- `src/world.js` - backyard: ground, fence, house, porch, beds, shed, greenhouse, props, trees.
- `src/main.js` - low-res render target upscaled with nearest filtering, depth-based outline pass,
  shadows, camera, input, game loop and HUD.
