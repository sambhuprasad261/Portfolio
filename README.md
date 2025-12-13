# Portfolio React — Deployment

This repository is a Vite + React single-page portfolio. Below are steps to publish it to GitHub Pages from this repository.

1) Update `package.json` homepage

- Edit the `homepage` field in `package.json` and replace `<your-username>` and `<repo>` with your GitHub username and repository name. Example:

```
"homepage": "https://sambhu123.github.io/portfolio"
```

2) Commit and push these changes

```
git add package.json README.md
git commit -m "Add gh-pages deploy config and README"
git push origin main
```

3) Install dependencies and deploy

```
npm install
npm run deploy
```

Notes:
- If your default branch is `master`, replace `main` with `master` in the git commands.
- `npm run deploy` uses `gh-pages` to publish the `dist` folder to GitHub Pages.
- If you prefer, you can also deploy by connecting the repo to Netlify or Vercel and pointing to the `build` output.

If you'd like, provide the repository URL and confirm you want me to push and run the deploy steps from this environment; you'll need to either add a deploy key/PAT or allow push access from this machine.React (Vite) portfolio

How to run:

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open the printed local URL in your browser.

Notes:
- Edit all content in `src/profile.js` (the single `PROFILE_DATA` export).
- Place `resume.pdf` in the project root or update `links.resume` in `src/profile.js`.
 - A static non-React backup of the site is available at `static/index.html` which uses `static/style.css` and `static/script.js`.
 - To use the static version open `static/index.html` directly in a browser (no build step).
