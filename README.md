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

Desktop

| Action | Keys |
| --- | --- |
| Move / run | WASD or arrows / Shift |
| Plant, water, harvest | Space (or F) next to a bed plot |
| Rotate / zoom camera | Q, E or drag / mouse wheel |
| Pixel size | `[` and `]` |
| Toggle help | H |

Phone and tablet: tap to start. Left stick moves, **RUN** sprints, **ACT** plants / waters / harvests, **Q** / **E** rotate the camera, drag the yard to look around, pinch to zoom, **?** toggles help.

## Gameplay

Plant seeds in the 24 bed plots. Each plant grows through sprout, seedling, vegetative, flowering and ready.
Keep soil watered: dry plants slow down and accumulate stress. Harvest grade (A, AA, AAA, AAAA) starts from how
consistently you watered, then you finish it in the shed. Open the shed door, walk in, hang wet flower to dry,
jar it, and burp the jar while it cures. Skipping the burp or leaving a hang too long drops the grade. Cured
flower lands in the jars. Post-harvest is half the quality, sped up from the 10–14 day dry and multi-week cure.

## How the look is built

- `src/voxel.js` - voxel mesher with face culling, baked per-vertex ambient occlusion, per-voxel colour jitter,
  and spatial chunking for frustum culling.
- `src/character.js` - the hero (bucket hat with leaf, plaid shirt, leaf-pocket overalls, boots), animated rig.
- `src/plants.js` - procedural cannabis plants for 5 growth stages and 4 strain colourways.
- `src/world.js` - backyard: ground, fence, house, porch, beds, shed, greenhouse, props, trees.
- `src/main.js` - low-res render target upscaled with nearest filtering, depth-based outline pass,
  shadows, camera, input, game loop and HUD.
