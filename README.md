# Jamily Lee — music education portfolio

A small personal Astro site with gingham margins, a paper-like page, and strawberry tabs. Four pages, responsive navigation, no client-side JavaScript, no external fonts.

## Start locally

Use Node.js 22.12 or newer (Node 22 LTS recommended). With nvm, run `nvm install` in this folder.

```sh
npm install
npm run dev
```

Open the local URL printed in your terminal (normally http://localhost:4321).

## Publish on GitHub Pages

1. Unzip this project into your existing repository folder. Files are at the ZIP root, so there is no extra enclosing directory. Your existing `.git` folder is preserved.
2. In the GitHub repository, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Commit and push to `main`:

```sh
git add .
git commit -m "Add Jamily's music education portfolio"
git push origin main
```

4. Open the repository's **Actions** tab. When **Deploy to GitHub Pages** finishes, find the live link in **Settings → Pages**.

The workflow reads the site's origin and repository path from GitHub automatically, including project paths such as `/website/`. No username or repository-name edits are needed. If your default branch has a different name, update `branches: [main]` in `.github/workflows/deploy.yml`. Pages must be available for your repository and account plan.

## Edit content

- `src/pages/index.astro`: About Me. Replace all bracketed placeholders with Jamily's real school, instrument, musical history, teaching experiences, and reasons for studying music education before submitting. The introductory wording is a proposed draft to personalize.
- `src/pages/philosophy.astro`: Philosophy placeholder; add part 1 and APA references for Week 5, then parts 1 and 2 for Week 10.
- `src/pages/resume.astro`: Resume placeholder; add first draft for Week 5 and final for Week 10, most recent experiences first.
- `src/pages/lesson-plans.astro`: Selected lesson plans placeholder.
- `src/layouts/Layout.astro`: Shared navigation and footer.
- `src/styles/global.css`: Colors, typography, responsive layout.
- `public/`: Images, PDFs, and other public files.

The navigation has four visible links at every size. It sits below the wordmark in one row on wide screens and forms a two-by-two grid on narrow phones. The active page is marked visually and with `aria-current`.

For any new local link or asset, prefix its path with `import.meta.env.BASE_URL` (as the layout does) so it works under GitHub Pages' repository path.

## Build and preview

```sh
npm run build
npm run preview
```

To simulate a project path locally on macOS/Linux:

```sh
BASE_PATH=/website npm run build
npm run preview
```

Then open `/website/` at the preview URL.

## Send the project back for edits

```sh
npm run site:zip
```

Upload the ZIP printed by the command, in `exports/`. It contains the source, assets, lockfile, documentation, and deployment workflow. It omits installed dependencies, generated builds, Git history, previous archives, environment files (except `.env.example`), logs, and common private key files. Review any other private files you add before sharing. Symbolic links are skipped; keep site assets as regular files in this project.

After extracting a future ZIP update, run `npm install` again if dependencies changed. `unzip -o` replaces included files but does not delete old files.

Deployment reference: https://docs.astro.build/en/guides/deploy/github/
