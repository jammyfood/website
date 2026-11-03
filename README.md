# Jamily Lee — Minimal website

Four-tab Astro portfolio: **About me**, **Philosophy**, **Resume**, and **Lesson plans**, with the original site preserved under `/old/`.

## Latest changes

- Removed the phone number and its telephone link from the resume. The public contact method is email, with Instagram and YouTube in the footer.
- Added two fully linked academic references below the Teaching Philosophy, with restrained formatting and hanging indents.
- Kept the entire original portrait visible (`object-fit: contain`, natural aspect ratio), sized at up to 280px on desktop and up to 224px on phones. It stacks above the biography on smaller screens.
- Preserved the previous resume layout, including the corrected Elemental Music date of October 2025–June 2026, the four-page navigation, matcha accent, and archived site at `/old/`.

## Update an existing checkout

In your project directory:

```bash
unzip -o ~/Downloads/jamily-lee-contact-references-portrait.zip -d .
npm install
npm run dev
```

The archive overwrites matching files but does not delete unrelated files from the existing directory. Requires Node.js 22.12 or later. To publish changes, use your repository's GitHub Pages deployment workflow.
