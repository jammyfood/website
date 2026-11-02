# Jamily Lee — Minimal website

A four-tab Astro site: **About me**, **Philosophy**, **Resume**, and **Lesson plans**. The previous site remains under `/old/`.

## Latest revision

- Updated the Elemental Music Teaching Fellow date to **October 2025–June 2026**.
- Reduced the desktop header to a compact 52px line and the footer to a 47px line; both scale down appropriately on mobile.
- Replaced oversized serif headings and decorative kicker labels with a restrained sans-serif type scale, tighter paragraph spacing, and fewer rules.
- Preserved the existing resume sections and two-column format. The About me biography and Teaching Philosophy wording remain unchanged.
- Kept both performance videos, contact links, the small strawberry-matcha footer icon, and the archived `/old/` site.

## Update an existing checkout

In your website project directory:

```bash
unzip -o ~/Downloads/jamily-lee-minimal-refined.zip -d .
npm install
npm run dev
```

To deploy, push the updated source to the repository using the included GitHub Pages workflow. The `astro.config.mjs` is set up for `jamilylee.com`.

Requires Node.js 22.12 or later. The archive has been structurally checked, but a full Astro build was not available in the packaging environment due to dependency-installation timeouts.
