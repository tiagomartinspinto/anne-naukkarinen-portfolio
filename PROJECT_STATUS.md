# Project Status

## Migrated

- Initialized the repository from the local-only static/editor baseline.
- Migrated 21 Cargo navigation items into `data/projects.js`, including About.
- Downloaded 167 Cargo image/thumbnail assets into `assets/projects/[slug]/`.
- Preserved Cargo project HTML in `contentHtml` for close visual/content fidelity.
- Preserved original page order, project titles, visible text, external links, image order, and inline captions/credits.
- Rebuilt the public site as a static Cargo-style layout: fixed left header/nav, narrow content column, thumbnail index, active highlights, and Cargo-like hover states.
- Adapted the local editor fields and validation for Anne's project metadata, preserved HTML, thumbnails, media credits, and embed entries.
- Added `MIGRATION_INVENTORY.md` with page order, metadata, links, media, text inventory, design observations, and uncertainties.

## Design Decisions

- Cargo template identified as Polaris.
- Public typography uses generic/system sans-serif, matching Cargo's `font-family: sans-serif`.
- Cargo's fixed desktop geometry was reproduced for desktop and adapted responsively for narrow screens.
- Cargo runtime scripts, analytics, and "Running on Cargo" footer were intentionally not migrated.
- Public project routes use query strings such as `?project=jousikvartetto` so GitHub Pages works reliably under the repository subpath without a build step.

## Font Substitution

The Cargo stylesheet uses generic `sans-serif`; no proprietary font files were present or migrated.

## Media Notes

- Final public media paths are local under `assets/projects/`.
- No Cargo-hosted image hotlinks remain in `data/projects.js` or `data/site.js`.
- No video/audio iframe embeds were found in the Cargo HTML; Vimeo and other media references are preserved as external links.
- Most captions are inline Cargo text rather than separate image metadata. They are preserved in the rendered project HTML and text inventory.

## Remaining Uncertainty

- Some structured metadata fields such as role, collaborators, and location were inferred from the visible Cargo text to make the editor easier to use. The original text remains preserved for verification.
- Image alt text was created neutrally because Cargo did not provide meaningful alt text.
- Exact Cargo thumbnail crop intent may differ slightly, but Cargo thumbnail files were downloaded and used as local thumbnail sources.

## GitHub Pages Status

- `_config.yml` excludes `tools/`, `node_modules/`, and `package-lock.json`.
- Expected public URL: `https://tiagomartinspinto.github.io/anne-naukkarinen-portfolio/`.
- Paths are relative and intended to work from `/anne-naukkarinen-portfolio/`.

## Next Recommended Checks

- Review the migrated site with Anne for text/credit accuracy.
- Confirm GitHub Pages is enabled for the `main` branch in repository settings.
- Run `npm run check`, local preview, and local admin before publishing future edits.
