# RECLIPSE — Product Photography Studio

A minimal, whitish, product-photography-focused site built with React + TypeScript + Tailwind CSS + Framer Motion + React Router.

## Design notes
- **Palette**: warm paper white (`#FAFAF6`), near-black ink, muted stone/grey, and a single restrained accent — an oxblood/darkroom red (`#7A2E24`) used only for links, underlines, and hover states.
- **Type**: Fraunces (display serif) for headlines, Inter for body copy, JetBrains Mono for small caps labels and EXIF-style image captions (e.g. `f/8 · 100mm · natural light`) — a nod to how photographers actually describe a shot.
- **Motion**: kept deliberately small — a hero line-reveal on load, one consistent scroll-reveal (fade + 22px rise), image hover scale, and a soft page-fade transition between routes. Respects `prefers-reduced-motion`.
- **Pages / routes**:
  - `/` — Home (hero, statement, featured work, services, CTA)
  - `/work` — Full gallery with category filter + lightbox
  - `/studio` — About the studio
  - `/contact` — Contact form

## Run it
```bash
npm install
npm run dev
```

Placeholder images use picsum.photos seeded URLs — swap `src` values in `src/lib/data.ts` and the page files for real photography.
