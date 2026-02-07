# Jokoh Portfolio Website

A multi-page portfolio website for Joseph Koh (Jokoh), a multimedia designer specializing in motion graphics, 3D animation, and visual design.

## Website Structure

This portfolio consists of 5 main pages:

1. **index.html** - Home page with hero section and featured work preview
2. **works.html** - Redirects to jokoh_all_works.html (complete works gallery with filters)
3. **process.html** - Creative process gallery showcasing sketches and studies
4. **about.html** - About section with bio, skills, and testimonials
5. **contact.html** - Contact form and social links

## Additional Pages

- **jokoh_all_works.html** - Full works gallery with category filters
- **jokoh_project_detail.html** - Individual project detail page template

## Shared Files

- **styles.css** - Main stylesheet for all pages
- **script.js** - JavaScript for interactions, animations, and video modal

## Features

### Reel Video Popup
- The reel button (bottom right) appears on ALL pages
- Clicking it opens a video modal with an embedded video player
- Users can close by:
  - Clicking the X button
  - Clicking outside the video
  - Pressing the Escape key
- To change the video URL, edit line 66 in `script.js`:
  ```javascript
  const VIDEO_URL = 'YOUR_YOUTUBE_OR_VIMEO_EMBED_URL';
  ```

### Navigation
- Consistent navigation across all pages
- Active page highlighting
- Smooth transitions

### Animations
- Scroll-triggered animations
- Paint trail cursor effect
- Logo glitch effect
- Parallax effects on hero section

## Setup Instructions

1. Place all files in the same directory:
   ```
   /portfolio
   ├── index.html
   ├── works.html
   ├── process.html
   ├── about.html
   ├── contact.html
   ├── jokoh_all_works.html
   ├── jokoh_project_detail.html
   ├── styles.css
   └── script.js
   ```

2. Update the video URL in `script.js` (line 66)

3. Replace placeholder images/content as needed

4. Test all pages in a browser

## Customization

### Colors
The color scheme is defined in CSS variables at the top of `styles.css`:
- `--coal`: #0a0a0a (dark background)
- `--rust`: #ff6b35 (primary accent - orange)
- `--lime`: #00ff88 (secondary accent - green)
- `--steel`: #8a95a5 (tertiary color)

### Fonts
The site uses three Google Fonts:
- **Archivo Black** - For headings and bold text
- **Space Grotesk** - For body text
- **Bebas Neue** - For labels and buttons

### Video Modal
To use a different video service:
1. Get the embed URL from YouTube, Vimeo, etc.
2. Update `VIDEO_URL` in `script.js`
3. Make sure to use the embed format (e.g., youtube.com/embed/VIDEO_ID)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and tablet
- CSS Grid and Flexbox for layouts

## Contact Form

The contact form currently shows an alert on submission. To make it functional:
1. Set up a backend service (e.g., FormSpree, Netlify Forms, or your own server)
2. Update the form submission handler in `script.js` (around line 185)
3. Add proper form validation and error handling

## Notes

- All pages share the same gritty, industrial aesthetic
- The reel button is persistent across all pages
- Navigation is consistent for easy site-wide browsing
- Works page redirects to the full works gallery for better organization

## Future Enhancements

- Add actual project images
- Connect contact form to email service
- Add project detail pages linked from works gallery
- Implement loading animations
- Add more interactive elements

---

© 2024 Joseph Koh (Jokoh). All Rights Reserved.
