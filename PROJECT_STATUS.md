# Project Status

## Current Status

The GitHub repository is the working source for Anne Naukkarinen's portfolio. The public site is static, self-contained, Cargo-independent, and deployed from GitHub Pages. Future edits happen in the local editor or directly in this repository.

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
- GitHub Pages is enabled from the `main` branch at `/`.
- Expected public URL: `https://tiagomartinspinto.github.io/anne-naukkarinen-portfolio/`.
- The public URL returned HTTP 200 after deployment on May 27, 2026.
- `https://tiagomartinspinto.github.io/anne-naukkarinen-portfolio/tools/admin/` returned HTTP 404, confirming the local editor is not published.
- Paths are relative and intended to work from `/anne-naukkarinen-portfolio/`.

## Final QA

- `npm run check` passed on May 27, 2026: 21 projects, 21 published, 0 draft.
- Local public preview opened successfully at `http://127.0.0.1:8080/`.
- All 21 project routes opened in the browser preview with the expected active project and no browser console errors.
- Desktop and mobile layouts were visually checked; the mobile project controls were adjusted so they no longer compress.
- Local admin opened successfully at `http://127.0.0.1:8787/`, loaded project data, and showed the `LOCAL EDITOR ONLY` banner.
- Forced public/read-only mode disables save, check, and publish buttons.
- GitHub Pages branch deployment was enabled and verified live.

## Rigorous QA Pass - May 28, 2026

- Re-ran `npm run check`: passed with 21 projects, 21 published, 0 draft.
- Re-ran `npm run preview` at `http://127.0.0.1:8080/` and `npm run admin` at `http://127.0.0.1:8787/`.
- Compared all 21 migrated project routes against their original Cargo URLs in the browser. Normalized visible project text, image counts, and external link lists matched Cargo for every page.
- Compared the homepage/index against Cargo. Project order matched exactly, with 21 thumbnails on both sites and matching desktop thumbnail box positions/crops.
- Verified previous/next project buttons and the return-to-index button in the local preview.
- Verified the About page text against Cargo as part of the page-by-page comparison.
- Verified that the Jousikvartetto credit line `Documentation: Tiago Martins Pinto.` is present in the original Cargo portfolio text. It is an original documentation credit and was kept.
- Checked public-facing Tiago references. The remaining references are original Cargo credits or documentation acknowledgements, not migration-added branding.
- Checked the local editor: project/site/media tabs load, the `LOCAL EDITOR ONLY` banner appears, Save + Preview works, backups are created, and forced public/read-only mode disables save, check, and publish actions.
- Fixed project-page image sizing on desktop so Cargo-width images render at their original 670px width instead of being constrained to the 560px text column. Mobile still constrains images to the viewport.
- Fixed the editor save pipeline so a no-op Save/Preview preserves Cargo text spacing, empty metadata placeholders, `aboutHtml`, `navigationLabel`, and the existing quoted data-file style instead of creating noisy formatting/content churn.

## Broken External Links Handled

Known broken non-Cargo links were removed or replaced on May 28, 2026:

- Removed the dead Fienta ticket link from Jousikvartetto. The ticket text remains readable without a live link.
- Replaced the old Vesireitit link with `https://www.riikkathitz.com/vesireitit-2026`.
- Removed the dead Ehkä event link from Kyse on kaikesta while keeping the festival name in the text.
- Replaced the old Mad House event link with the official archive URL: `https://archive.madhousehelsinki.fi/events/Kyse%20on%20kaikesta%20%E2%80%93%20viisi%20sooloa%20ja%20kirja?locale=fi`.
- Removed the Nide URL because both `https://www.nidekauppa.fi/` and `https://nidekauppa.fi/` have a certificate/domain mismatch, while the HTTP host serves only a default placeholder.
- Replaced the dead Khaos product URL with the current Khaos shop URL: `https://www.khaospublishing.com/shop/`.

## Cargo Independence Check

Date of check: May 28, 2026.

- Cargo runtime dependencies remaining: none found.
- Runtime files checked: `index.html`, `styles.css`, `script.js`, `data/site.js`, `data/projects.js`, and `tools/admin/`.
- Cargo source URLs were removed from live project data and editor fields. Remaining Cargo URLs are historical migration/source references only in `README.md`, `MIGRATION_INVENTORY.md`, and this status file.
- Local assets under `assets/projects/`: 167 files.
- Migrated project records: 21 projects, 21 published, 0 draft.
- `npm install`: passed with 0 vulnerabilities.
- `npm run check`: passed with 21 projects, 21 published, 0 draft.
- Local public preview: passed at `http://127.0.0.1:8080/`; homepage, all 21 project routes, active navigation, previous/next/index controls, canonical metadata, social image metadata, and console errors were checked.
- Local editor: passed at `http://127.0.0.1:8787/`; project list, site data, Save + Preview, local asset dimension lookup, missing asset detection, publish check, Publish tab presence, and forced public/read-only safety mode were checked.
- GitHub Pages: public URL returned HTTP 200, and `tools/admin/` returned HTTP 404. `_config.yml` excludes `tools/`, `node_modules/`, `package-lock.json`, and backup data files.
- Public save/publish API exposure: not present in preview/public routes; `POST /api/save` on the public preview returns 404.
- Cargo deletion readiness: the GitHub Pages portfolio should continue to work after the Cargo account is deleted because no public runtime asset, page, script, CSS, thumbnail, image, social preview image, or editor validation path depends on Cargo.

Anne should give final approval for credits, collaborators, and the responsive mobile adaptation before deleting Cargo.

## Steve Jobs Polish Pass

Date of pass: May 28, 2026.

- Simplified the normal editor language so the workflow reads as edit, preview, publish.
- Renamed the editor's Media tab to Images and Publish / Safety to Publish while keeping all safety checks.
- Moved exact project layout editing into an Advanced section on the Text tab with a quiet warning. Normal editing no longer requires touching layout HTML.
- Added a minimal bad-project state for URLs such as `?project=bad-slug`: `Project not found.` plus `View all projects`.
- Removed or replaced every known broken non-Cargo link listed in the QA notes; no known broken external links remain live from that list.
- Hardened the local editor server path containment with `path.relative` checks.
- Added a per-run local admin token for POST actions. The terminal prints the full local editor URL; save, restore, publish check, publish, and image-dimension POST actions require that token.
- Added `.github/workflows/check.yml` so GitHub Actions runs `npm install` and `npm run check` on push and pull request.
- Kept the public visual identity intact: no redesign, no new framework, no tracking, no public backend.
- Tested `npm install`, `npm run check`, local preview, local editor, bad project slug, editor save/preview flow, publish check, public read-only safety, and GitHub Pages path behavior.

Anne should still give final human approval for credits, collaborators, and any project text that references past events or ticketing.

## Next Recommended Checks

- Review the site with Anne for final text and credit accuracy.
- Anne should approve the responsive mobile adaptation, since the original Cargo mobile layout overflows horizontally while the GitHub Pages version is intentionally usable on narrow screens.
- Run `npm run check`, local preview, and local admin before publishing future edits.
