# Anne Naukkarinen Portfolio

Static GitHub Pages portfolio migrated from Anne Naukkarinen's former Cargo Collective site.

Public site:
https://tiagomartinspinto.github.io/anne-naukkarinen-portfolio/

Historical migration source:
https://cargocollective.com/annenaukkarinen

## What This Is

This repository is a static HTML/CSS/vanilla JS portfolio with a local-only editor. The public site has no backend, no database, no tracking, no public save action, and no remote CMS.

The local editor edits files on your computer only:

- `data/projects.js`
- `data/site.js`
- media under `assets/projects/[slug]/`

After the migration is checked and published, Cargo is no longer needed for the public portfolio.

## After deleting Cargo

GitHub is now the canonical source for Anne's portfolio. All public content, project data, site/about/contact text, thumbnails, images, captions, credits, metadata, and local editor code live in this repository.

Cargo is no longer needed after this repository is published to GitHub Pages. Do not edit Cargo anymore; future edits should happen through the local editor or direct git edits in this repo. Deleting the Cargo account should not break the GitHub Pages portfolio because the public site does not load Cargo images, thumbnails, scripts, CSS, pages, navigation, or runtime assets.

Use this post-Cargo workflow:

1. Run `npm run admin` to open the local-only editor.
2. Run `npm run preview` to preview the static public site locally.
3. Run `npm run check` before publishing.
4. Publish through the local editor's Publish / Safety tab, or commit and push with git from an authenticated local machine.

The source files are:

- Project data: `data/projects.js`
- Site/about/contact data: `data/site.js`
- Media assets: `assets/projects/[project-slug]/`
- Local editor/backend: `tools/admin/`

To add a new project, create `assets/projects/new-project-slug/`, add the local image/video/embed metadata in the editor, check that all media paths start with `assets/projects/new-project-slug/`, use Save + Preview, run validation, then publish.

## Local Setup

Install Node.js, then run:

```bash
npm install
```

Open the local editor:

```bash
npm run admin
```

Open the public preview:

```bash
npm run preview
```

Validate the site:

```bash
npm run check
```

## Editing Projects

In the local editor, use the Projects tab to select a project. You can edit:

- title, slug, year, date, type, role, venue, collaborators, credits
- categories and tags
- short description and full description
- preserved migrated HTML for faithful public rendering
- external links
- media entries for images, video, audio, and embeds
- thumbnail path, position, and zoom metadata
- draft status and project order

Use the Media tab to browse local images, add media rows, detect image dimensions, and check missing assets.

## Adding A Project

1. Put images in `assets/projects/new-project-slug/`.
2. Open `npm run admin`.
3. Click New project.
4. Fill in the project fields.
5. Add media rows using local paths like `assets/projects/new-project-slug/image-01.jpg`.
6. Use Save + Preview.
7. Run `npm run check`.
8. Publish when validation passes.

## Publishing

Publishing is local-only. The editor runs validation, stages the approved portfolio files, commits, and pushes using the git credentials already configured on this machine.

The publish flow stages:

- `index.html`
- `styles.css`
- `script.js`
- `data/`
- `assets/`
- `tools/admin/`
- `README.md`
- `PROJECT_STATUS.md`
- `MIGRATION_INVENTORY.md`
- `_config.yml`
- `package.json`

GitHub Pages is configured to deploy from the `main` branch at `/`. The site is built to work under:

```text
/anne-naukkarinen-portfolio/
```

## Safety Notes

The editor binds to `127.0.0.1`. GitHub Pages excludes `tools/`, so the local editor is not published as a public admin panel.

The public site cannot save, publish, write files, or run local scripts. If editor files are opened from a public/static context, write actions are disabled by the editor runtime checks.

## Troubleshooting

If preview images are missing, check that the path starts with `assets/projects/` and that the file exists.

If publishing fails, run `npm run check`, then inspect the editor's Publish / Safety tab and git output.

If the preview URL is busy, run with another port:

```bash
PORT=8090 npm run preview
```
