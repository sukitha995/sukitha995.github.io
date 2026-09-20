# Kothuru Sukitha — Portfolio

Personal developer portfolio built with **React + Vite + Tailwind CSS** (dark mode, single page, static — ready for GitHub Pages).

## Stack

- React (JavaScript / JSX)
- Vite (dev + build tool)
- Tailwind CSS v4
- Font Awesome (CDN icons)

No backend, no animation libraries, minimal dependencies.

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
    ├── sections.jsx  # Navbar, Hero, About, Skills
    ├── data.js       # all content (skills, projects, education, achievements)
    └── index.css     # Tailwind theme + base styles
```

## Customization

- **Content**: edit the data arrays in `src/data.js` (name, links, skills, projects, education, achievements).
- **Headshot**: replace `public/profile-placeholder.svg` with a real photograph (same position, keep the filename) — the SVG placeholder already uses the initials "KS".

## Resume

- Live resume link: https://drive.google.com/file/d/1vxjxSlcWXBEYkJsPaSny9TXn_AJswCe3/view?usp=sharing