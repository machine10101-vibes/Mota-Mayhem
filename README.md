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

Phone and tablet: tap to start. Left stick moves, **RUN** sprints, **ACT** (or the on-screen prompt) plants, waters, harvests, opens doors, clones, sells, and buys, drag the yard to look around, pinch to zoom, **?** toggles help. The farmer icon opens the character menu. The backpack icon opens the inventory. **1** and **2** (or the strain chips) pick which seed you plant.

## Gameplay

A new grow starts with 10 Blue Dream seeds and 10 Granddaddy Purple seeds. Plant either strain in the 24 bed
plots, or plant a vegged clone if you have one. Each plant grows through sprout, seedling, vegetative, flowering
and ready, and a harvest returns one seed of that strain. Clones skip ahead to vegetative and keep the mother's
strain. Keep soil watered: dry plants slow down and accumulate stress. Harvest grade (A, AA, AAA, AAAA) starts
from how consistently you watered, then you finish it in the shed. Open the shed door, walk in, hang wet flower
to dry, jar it, and burp the jar while it cures. Skipping the burp or leaving a hang too long drops the grade.
Cured flower lands in the jars.

Open the house from the porch. The mother, clone, and veg rooms run deep enough to walk into and wide enough to move around the pots. The mother room on the left starts with two empty pots. Plant a seed you are
holding and that plant grows into a mother, then stays there for cuttings. The clone room is straight ahead.
Cuttings root in tube-style hydroponic lines: two NFT tubes, a reservoir, and a pump, with a net cup at each
site. The veg room is on the right. Water a mother, take a cutting, wait for it to root, move it into veg, then
carry the finished clone out to a bed or the warehouse.

Stairs in the mother room climb to the second story. Two bedrooms sit over the front of the house, and the
east bedroom has a computer. Use it to spend MOTA on Blue Dream seeds, Granddaddy Purple seeds, nutrients,
and root cubes. Nutrients feed a mother or a veg pot. Root cubes speed a tube that is still rooting. The
upstairs floor stays out of the way until you are on the stairs, so the grow rooms stay visible from above.

The porch stand sells cured jars for MOTA, the in-game
token. A mixed seed pack (2 Blue Dream and 2 Granddaddy Purple) is there too when you are low. The east lot
sells a warehouse for 520 MOTA. Buying it opens the gate. Inside are nine indoor pots under lights that flower
a little faster than the yard. Post-harvest is sped up from the 10–14 day dry and multi-week cure.

The farmer icon on the title screen and while you play, and the C key, open the character menu: skin, hair, hat,
shirt, overalls, and boots, with a live preview. The backpack icon opens the inventory of MOTA, seeds, clones, feed, and jars. Both panels stay closed until that icon is clicked. **NEW GROW** resets the farm to the starter seeds and keeps
the look. The character, MOTA, seeds, nutrients, root cubes, clones, beds, mothers, hydro tubes, veg pots, shed, and warehouse are saved in
this browser.

## How the look is built

- `src/voxel.js` - voxel mesher with face culling, baked per-vertex ambient occlusion, per-voxel colour jitter,
  and spatial chunking for frustum culling.
- `src/character.js` - the hero (bucket hat with leaf, plaid shirt, leaf-pocket overalls, boots), animated rig.
- `src/plants.js` - procedural cannabis plants for 5 growth stages. Blue Dream stays green; Granddaddy Purple flowers purple.
- `src/strains.js` - the two starter strains. `src/save.js` writes the grow to local storage.
- `src/world.js` - backyard: ground, fence, house, porch, beds, shed, greenhouse, props, trees.
- `src/main.js` - low-res render target upscaled with nearest filtering, depth-based outline pass,
  shadows, camera, input, game loop and HUD.
