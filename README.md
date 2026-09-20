# Kothuru Sukitha — Portfolio

Personal developer portfolio built with **React + Vite + Tailwind CSS + lucide-react** (dark mode, single page, static — deployed to GitHub Pages).

## Stack

- React (JavaScript / JSX)
- Vite (dev + build tool)
- Tailwind CSS v4
- lucide-react (icons)

Interactivity is implemented with React state/hooks and small utilities:

- Hero typewriter effect + animated gradient role text
- Particle-network background (canvas) + mouse-follow glow in the Hero
- Reveal-on-scroll (IntersectionObserver) across all sections
- Scroll-progress bar, scroll-aware navbar, active-section highlighting
- Combined skills chips with per-skill lucide icons, unique colors, and color transitions
- 3D tilt cards on projects, back-to-top button
- `prefers-reduced-motion` respected

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

Vite uses `base: "./"`, so `dist/` works on GitHub Pages project sites.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` runs `npm ci && npm run build` on every push to `main` and deploys `dist/`.

## Structure

```
portfolio/
├── package.json
├── vite.config.js
├── index.html
├── public/
│   ├── profile.jpg             # real headshot (photo)
│   └── profile-placeholder.svg # fallback "KS" placeholder
└── src/
    ├── main.jsx
    ├── App.jsx                 # Projects, Experience, Contact, Footer + tilt/back-to-top
    ├── sections.jsx            # Navbar, Hero, About, Skills + Reveal/SectionHeading/Typewriter
    ├── brand-icons.jsx         # inline GitHub/LinkedIn SVGs (removed from lucide v1)
    ├── data.js                 # all content (skills, projects, education, achievements)
    └── index.css               # Tailwind theme + custom effects
```

## Customization

- **Content**: edit `src/data.js` (name, links, skills, projects, education, achievements).
- **Headshot**: replace `public/profile.jpg` (keep the filename) — falls back to `profile-placeholder.svg` if missing.
- **Resume**: update `RESUME_URL` in `src/data.js`.
- **Skill chips**: each entry in `SKILLS` has `name`, `icon` (lucide key), and `color` (hex) driving the icon color + hover transition.
