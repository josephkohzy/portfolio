# Jokoh Portfolio Website

A multi-page portfolio website for Joseph Koh (Jokoh), a multimedia designer specialising in motion graphics, 3D animation, and visual design.

## File Structure

```
/portfolio
├── index.html                   # Home — hero, featured work preview, brand marquee
├── works.html                   # Full works gallery with category filters
├── process.html                 # Creative process gallery (sketches & studies)
├── about.html                   # Bio, skills, and testimonials
├── contact.html                 # Contact form (Formspree) and social links
├── 404.html                     # Custom 404 page
├── my10-project-detail.html     # Project detail — My 10 UX/UI case study
├── project-detail-improved.html # Project detail — general template
├── unify-project-detail.html    # Project detail — Unify UI/UX case study
├── styles.css                   # Shared stylesheet for all pages
├── script.js                    # Shared JS — animations, modal, hamburger menu
└── assets/
    └── images/
        ├── og-preview.jpg           # ⚠️ Required for social previews
        ├── joseph-koh.jpg           # About page photo
        ├── projects/                # Project GIFs and static thumbnails
        ├── process/                 # Process gallery images
        ├── brands/                  # Brand logo images
        └── testimonials/            # Testimonial PDF files
```

## Setup

1. Clone or download the repo and keep all files in the same root directory.
2. **Add your assets** under `assets/images/` — see the structure above.
3. **OG preview image** — upload `assets/images/og-preview.jpg` or social link previews will be broken.
4. **Video reel** — update `VIDEO_URL` in `script.js` (search for `VIDEO_URL`) with your YouTube embed URL.
5. **Contact form** — the Formspree ID is already set in `contact.html`. Replace it with your own at [formspree.io](https://formspree.io) if needed.
6. **CV download** — update the `href` on the CV button in `contact.html` to point to your actual PDF.
7. Open `index.html` in a browser to test locally, or push to GitHub Pages.

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
- GIF lazy-loading on scroll (works/index pages)

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
1. Add GIF + static JPG to `assets/images/projects/`
2. Add an entry to the `projects` array in `works.html`
3. Optionally create a new `*-project-detail.html` from the existing templates

## Browser Support

Modern browsers — Chrome, Firefox, Safari, Edge. Uses CSS Grid, Flexbox, `IntersectionObserver`, and `backdrop-filter`.

## GitHub Pages Deployment

Push all files (including `assets/`) to the root of your GitHub Pages branch. The site runs entirely from static files — no build step needed.

> ⚠️ Make sure `assets/images/og-preview.jpg` exists in the repo before going live, or Open Graph previews (LinkedIn, iMessage, etc.) will show a broken image.

---

© 2026 Joseph Koh (Jokoh). All Rights Reserved.
