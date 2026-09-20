# Kothuru Sukitha — Portfolio

Personal developer portfolio built with **Astro + Tailwind CSS + lucide-react icons** (dark mode, single page, static — deployed to GitHub Pages).

## Stack

- Astro (static site generator — framework-light, no heavy client runtime)
- Tailwind CSS v4
- lucide icons via `astro-icon` (`@iconify-json/lucide`, build-time only)
- Interactivity with a small vanilla JS script (`src/scripts/main.js`): mobile menu, scroll-aware navbar, scroll progress, active-section highlighting, reveal-on-scroll, hero typewriter, particle background, back-to-top

No React islands were needed — the site is fully static with minimal inline JS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

`astro.config.mjs` sets `site` to `https://sukitha995.github.io` with `base: "/"`, so the output works on GitHub Pages.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` runs `npm ci && npm run build` on every push to `main` and deploys `dist/` via the Pages API.

## Structure

```
portfolio/
├── astro.config.mjs
├── package.json
├── public/
│   ├── profile.jpg             # real headshot (photo)
│   └── profile-placeholder.svg # fallback "KS" placeholder
└── src/
    ├── data.js                 # all content (skills, projects, education, achievements)
    ├── styles/global.css       # Tailwind theme + base styles
    ├── scripts/main.js         # client-side interactivity (vanilla)
    ├── layouts/Layout.astro    # SEO head + shared script
    ├── components/             # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, BrandIcon
    └── pages/index.astro       # page assembling the sections
```

## Customization

- **Content**: edit `src/data.js` (name, links, skills, projects, education, achievements).
- **Headshot**: replace `public/profile.jpg` with your real photograph (keep the filename). The page falls back to `public/profile-placeholder.svg` if the photo is missing.
- **Resume**: update `RESUME_URL` in `src/data.js`.
- **Icons**: configured in `astro.config.mjs` under the `astro-icon` `include` block (lucide set).