# RustAI LLC — Enterprise AI Infrastructure

Production-grade marketing website for **RustAI LLC**, the AI infrastructure and intelligent automation company founded by **Leo Markopoulos**.

Built with an institutional-fintech aesthetic — visual references include Palantir, Bloomberg Terminal, Thinkorswim, BlackRock Aladdin, Anduril, and Vercel Enterprise.

## Stack

- **Framework** — Next.js 15 (App Router), React 19, TypeScript (strict)
- **Styling** — Tailwind CSS v4, shadcn-style primitives, Radix UI, `clsx`, `tailwind-merge`
- **Animation** — Framer Motion, GSAP, Lenis smooth scrolling
- **Visuals** — Three.js, React Three Fiber, Drei, custom canvas neural networks, SVG charts
- **Charts** — Bespoke SVG candle / area / sparkline components built for performance
- **Icons** — Lucide React
- **Fonts** — Inter, Space Grotesk, IBM Plex Mono (via `next/font`)
- **Deployment** — GitHub Pages via GitHub Actions, static export

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Build the static export
npm run build
# → output is emitted to `out/`
```

The dev server runs at `http://localhost:3000`.

## Project structure

```
rust-ai-website/
├── app/
│   ├── globals.css            # Tailwind v4 + design tokens
│   ├── layout.tsx             # Root layout, fonts, smooth scroll
│   └── page.tsx               # Homepage assembled from sections
├── components/
│   ├── effects/               # Grid, ambient orbs, scanline, cursor glow, neural net
│   ├── layout/                # Navbar, Footer
│   ├── providers/             # SmoothScroll (Lenis)
│   ├── sections/              # Hero, Trust, Services, Platform, Why, Case Studies, Leadership, CTA
│   ├── ui/                    # Button, Badge, GlowCard, Metric, Section, Terminal, Logo
│   └── widgets/               # Ticker, Sparkline, Candle chart, Area chart
├── lib/
│   ├── site.ts                # Branding & nav config (single source of truth)
│   └── utils.ts               # `cn`, `formatNumber`, deterministic series generator
├── next.config.ts             # Static export + dynamic basePath for GH Pages
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── .github/workflows/deploy.yml
```

## Branding

The single source of truth for company information lives in [lib/site.ts](lib/site.ts). Update name, tagline, founder bio, navigation, and contact there — every component consumes it.

## Deploying to GitHub Pages

This repo ships with a complete GitHub Actions workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

### One-time setup

1. Push this repository to GitHub.
2. In your repo, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`. The workflow builds, exports, and deploys automatically.

The site will be served at:

```
https://<username>.github.io/<repo-name>/
```

### How basePath works

`next.config.ts` reads the repository name from `GITHUB_REPOSITORY` at build time and sets `basePath` / `assetPrefix` accordingly. Locally, `basePath` is empty so `http://localhost:3000` Just Works. In CI, it's set to `/<repo-name>` so assets resolve correctly under GitHub Pages.

If you point a custom domain at the Pages site, set `basePath = ""` in `next.config.ts` and add a `CNAME` file to `public/`.

### Manual deploy

```bash
NODE_ENV=production npm run build
# upload `out/` to your static host
```

## Architectural notes

- **Static export** — `output: "export"` in `next.config.ts`; no server runtime is needed.
- **Deterministic charts** — `generateSeries()` in `lib/utils.ts` uses a seeded PRNG so the same chart renders identically on every build (no hydration mismatches).
- **Smooth scroll** — Lenis is wrapped in a client-only provider mounted from the root layout.
- **Cursor glow** — Soft cyan halo follows the pointer on `md+` viewports; spring-damped via Framer Motion.
- **Neural network background** — Pure-canvas particles + edge-distance gradients; ResizeObserver-aware and DPR-scaled.
- **Glow cards** — Pointer-tracked radial spotlights, lit borders, and accent gradients with `cva`-style API.

## Polish recommendations

- Drop a real founder portrait at `public/founder.jpg` and swap the SVG placeholder in [components/sections/leadership.tsx](components/sections/leadership.tsx).
- Replace fake integration glyphs in [components/sections/trust.tsx](components/sections/trust.tsx) with real SVG logos once partnerships are confirmed.
- Add an OG / Twitter card image at `public/og.png` (1200×630). The metadata is already wired in [app/layout.tsx](app/layout.tsx).
- Drop the favicon set into `public/` (`favicon.ico`, `icon.png`, `apple-icon.png`).
- Consider adding a contact form route with form-action posting to your CRM of choice.

## License

© RustAI LLC. All rights reserved.
