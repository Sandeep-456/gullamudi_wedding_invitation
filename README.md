# Bhadrachalam Wedding Invitation — Local Prototype

This is the first visual prototype of the scroll-driven Telugu wedding invitation.

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## What is already implemented

- React + Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- GSAP + ScrollTrigger
- Pinned cinematic scenes
- Gopuram tier-by-tier assembly animation
- Temple doors opening
- Mandapam + homam visual
- Soft animated bride/groom cutout-style illustrations
- Varmala scene with falling flower petals
- Pinky-finger zoom transition
- Venue + Google Maps button
- Live countdown to 14 Oct 2026, 08:59 IST
- Telugu typography and responsive layouts
- Mobile/tablet/desktop/4K-friendly fluid sizing
- Music toggle (add your MP3 at `public/audio/wedding-bgm.mp3`)

## Important next asset pass

The included temple and couple visuals are intentionally lightweight prototype artwork so the app can be tested immediately.

For the final version, replace these CSS/illustration layers with generated transparent WebP assets:
- Bhadrachalam-inspired gopuram tiers
- realistic temple doors
- realistic mandapam interior
- realistic Sri Rama artwork
- soft 3D/animated bride and groom transparent cutouts
- walking/pinky-hold couple asset
- individual garland assets
- diya and petal overlays

Do not change the scene/timeline architecture when replacing assets; keep the same class names or adapt the selectors in `src/App.jsx`.

## Reference material

The supplied wedding invitation is copied into `public/reference/` for visual/content reference only.
