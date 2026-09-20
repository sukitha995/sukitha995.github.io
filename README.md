# Kothuru Sukitha — Portfolio

Personal developer portfolio built with **React + Vite + Tailwind CSS** (dark mode, single page, static — ready for GitHub Pages).

## Stack

- React (JavaScript / JSX)
- Vite (dev + build tool)
- Tailwind CSS v4
- lucide-react (icons)

No backend, no animation libraries, minimal dependencies. Interactivity is handled with React state and light `IntersectionObserver`-based reveal-on-scroll transitions.

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

Vite uses `base: "./"`, so the `dist/` output works on GitHub Pages project sites (e.g. `https://<user>.github.io/<repo>/`).

## Deploy to GitHub Pages

Push the built `dist/` folder to the `gh-pages` branch, or use a GitHub Action that runs `npm run build` and deploys `dist/`.

## Structure

```
portfolio/
├── package.json
├── vite.config.js
├── index.html
├── public/
│   └── profile-placeholder.svg
└── src/
    ├── main.jsx
    ├── App.jsx       # App shell + Projects, Experience, Contact, Footer
    ├── sections.jsx  # Navbar, Hero, About, Skills + Reveal/SectionHeading
    ├── data.js       # all content (skills, projects, education, achievements)
    └── index.css     # Tailwind theme + base styles
```

## Customization

- **Content**: edit the data arrays in `src/data.js` (name, links, skills, projects, education, achievements).
- **Headshot**: replace `public/profile.jpg` with your real photograph (keep the filename). The `/src` code falls back to `public/profile-placeholder.svg` if the photo is missing.
- **Resume**: update `RESUME_URL` in `src/data.js`.

## Resume

- Live resume link: https://drive.google.com/file/d/1vxjxSlcWXBEYkJsPaSny9TXn_AJswCe3/view?usp=sharing