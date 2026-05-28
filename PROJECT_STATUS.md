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

## Links Needing Anne's Review

These links are preserved from Cargo, but currently fail or need a replacement check:

- `https://fienta.com/fi/s/jousikvartetto` returns 404.
- `https://www.riikkathitz.com/vesireitit` returns 404.
- `https://www.ehka.net/xs-kyse-on-kaikesta-viisi-sooloa-ja-kirja/` returns 404.
- `https://madhousehelsinki.fi/events/Kyse%20on%20kaikesta%20%E2%80%93%20viisi%20sooloa%20ja%20kirja` returns 404.
- `https://www.nidekauppa.fi/` currently has a certificate/domain mismatch on the `www` host.
- `http://khaospublishing.com/product/kyse-on-kaikesta/` returns 404.

## Next Recommended Checks

- Review the migrated site with Anne for final text/credit accuracy and replacement URLs for the broken original external links above.
- Anne should approve the responsive mobile adaptation, since the original Cargo mobile layout overflows horizontally while the GitHub Pages version is intentionally usable on narrow screens.
- Run `npm run check`, local preview, and local admin before publishing future edits.
