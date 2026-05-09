# Jokoh Portfolio Website

A multi-page portfolio website for Joseph Koh (Jokoh), a multimedia designer specialising in motion graphics, 3D animation, and visual design.

## File Structure

```
/portfolio
├── index.html       # Home — hero, featured work preview, brand marquee
├── work.html        # Full works gallery with category filters
├── process.html     # Creative process gallery (sketches & studies)
├── about.html       # Bio, skills, and testimonials
├── contact.html     # Contact form (Formspree) and social links
├── 404.html         # Custom 404 page
├── project.html     # Project detail — general template (query param: ?project=id)
├── unify.html       # Project detail — Unify UI/UX case study
├── my10.html        # Project detail — My 10 UX/UI case study
├── styles.css       # Shared stylesheet for all pages
├── script.js        # Shared JS — animations, modal, hamburger menu
└── assets/
    └── images/
        ├── og-preview.jpg        # ⚠️ Required for social previews
        ├── joseph-koh.jpg        # About page photo
        ├── projects/             # Project GIFs and static thumbnails
        ├── process/              # Process gallery images
        ├── brands/               # Brand logo images
        └── testimonials/         # Testimonial PDF files
```

## Setup

1. Clone or download the repo and keep all files in the same root directory.
2. **Add your assets** under `assets/images/` — see the structure above.
3. **OG preview image** — upload `assets/images/og-preview.jpg` or social link previews will be broken.
4. **Video reel** — update `VIDEO_URL` in `script.js` (search for `VIDEO_URL`) with your YouTube embed URL.
5. **Contact form** — the Formspree ID is already set in `contact.html`. Replace it with your own at [formspree.io](https://formspree.io) if needed.
6. **CV download** — update the `href` on the CV button in `contact.html` to point to your actual PDF.
7. Open `index.html` in a browser to test locally, or deploy to Netlify (see below).

## Features

### Reel Video Modal
- Floating reel button appears on every page (bottom-right)
- Opens a full-screen video modal with autoplay
- Close via ✕ button, clicking outside, or pressing Escape
- To change the video: update `VIDEO_URL` in `script.js`

### Navigation
- Desktop: horizontal nav with active-page highlight
- Mobile: full-screen hamburger overlay with smooth fade transition
- Consistent across all pages

### Animations
- Scroll-triggered fade/reveal via `IntersectionObserver`
- Paint-trail cursor effect (desktop only)
- Logo glitch effect
- Parallax on hero section
- GIF lazy-loading on scroll (`work.html` and `index.html`)

### Project Gallery (`project.html`)
- Driven by a `projects` data array — one template serves all projects via `?project=id` query parameter
- Each project defines its own image count, optional `gifIndex` for animated images, and per-image captions
- Custom standalone pages (`unify.html`, `my10.html`) used for case studies requiring unique layouts

### Contact Form
- Handled via Formspree AJAX — no page reload
- Shows success/error message inline
- Form ID is set in `contact.html` → `<form action="https://formspree.io/f/YOUR_ID">`

## Customisation

### Colours
Defined as CSS variables at the top of `styles.css`:
- `--coal`: #0a0a0a — dark background
- `--rust`: #ff6b35 — primary accent (orange)
- `--lime`: #00ff88 — secondary accent (green)
- `--steel`: #8a95a5 — muted text / tertiary

### Fonts (Google Fonts)
- **Archivo Black** — headings and bold labels
- **Space Grotesk** — body text
- **Bebas Neue** — display / button labels

### Adding a New Project
1. Add a static JPG thumbnail to `assets/images/projects/` (and a GIF if needed)
2. Add an entry to the `projects` array in `work.html`
3. Add a matching entry to the `projects` array in `project.html` with image count, captions, and an optional `gifIndex`
4. For a fully custom layout, duplicate `unify.html` or `my10.html` and set `customUrl` in the project entry

## Browser Support

Modern browsers — Chrome, Firefox, Safari, Edge. Uses CSS Grid, Flexbox, `IntersectionObserver`, and `backdrop-filter`.

## Deployment (Netlify — recommended)

Netlify is recommended over GitHub Pages as it serves clean URLs without `.html` extensions (e.g. `/work` instead of `/work.html`).

1. Go to [netlify.com](https://netlify.com) and sign up with your GitHub account
2. Click **Add new site → Import an existing project** and connect your GitHub repo
3. Leave all build settings blank — no build command or publish directory needed
4. Click **Deploy site**
5. Once live, rename your site under **Site configuration → Site details** (e.g. `jokoh.netlify.app`)
6. Pretty URLs are enabled by default — all `.html` extensions are stripped automatically

> ⚠️ Make sure `assets/images/og-preview.jpg` exists in the repo before going live, or Open Graph previews (LinkedIn, iMessage, etc.) will show a broken image.

---

© 2026 Joseph Koh (Jokoh). All Rights Reserved.
