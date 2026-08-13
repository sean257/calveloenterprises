# Calvelo Business Development — Website

## Running this in VS Code

1. **Unzip** the project folder anywhere on your computer.
2. **Open it in VS Code**: `File → Open Folder…` and select the `calvelo-website` folder
   (or from a terminal, `cd` into the folder and run `code .`).
3. VS Code will prompt you to install a few **recommended extensions** (ESLint, Prettier,
   React snippets) — click **Install** on that prompt. This gives you inline error checking
   and auto-formatting on save.
4. **Open the built-in terminal**: `Terminal → New Terminal` (or `` Ctrl+` ``).
5. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
6. VS Code will show a clickable `http://localhost:5173` link in the terminal — open it,
   or `Ctrl/Cmd + Click` it — to see the site live. It hot-reloads as you edit files.

### Other useful commands

```bash
npm run lint     # check code for errors (also runs automatically on save in VS Code)
npm run format   # auto-format every file with Prettier
npm run build    # produce a production build in dist/
npm run preview  # locally preview that production build
```

Requires **Node.js 18+** — check with `node -v`. If you don't have Node installed, download it
from [nodejs.org](https://nodejs.org).

## Deploying

```bash
npm run build
```

This outputs a static `dist/` folder you can host anywhere (Netlify, Vercel, cPanel, etc).

## Structure

```
src/
  theme.js          brand colors, gradients, helper functions
  data.js           site content: nav, services, industries, values, process, contact info
  components/       reusable pieces (Nav, Footer, Logo, icon badges, backgrounds, etc.)
  pages/            one file per page (Home, Services, Industries, About, Contact, Privacy, Terms)
  App.jsx           top-level layout + page switching
  main.jsx          React entry point
  index.css         global styles: fonts, animations, responsive grid system
  assets/logo.png   your logo (used in the nav + footer)
public/
  favicon.png       square version of your logo, used as the browser tab icon
```

## Editing content

Most text lives in `src/data.js` (services, industries, values, process steps, contact details) — edit there
and it updates everywhere it's used. Page-specific copy (headlines, intro paragraphs) lives in each file
under `src/pages/`.

## Legal pages

`src/pages/Privacy.jsx` and `src/pages/Terms.jsx` are a solid starting template, not a substitute for legal
advice — since Calvelo is expanding into multiple countries, have them reviewed by a lawyer familiar with
data protection and consumer law in your target markets before publishing.

## Replacing the logo

Swap `src/assets/logo.png` for a new file with the same name, or update the import path in
`src/components/Logo.jsx` if you rename it.
