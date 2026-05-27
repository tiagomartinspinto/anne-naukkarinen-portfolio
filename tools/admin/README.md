# Local Editor

Run from the repository root:

```bash
npm run admin
```

The editor serves only on `127.0.0.1`. It writes local data files, refreshes backups before saving, and publishes only through the local git credentials on this computer.

Tabs:

- Projects: identity, order, draft status, date, role, venue, collaborators, credits, Cargo source fields, thumbnail metadata.
- Site: metadata, contact email, about text, public links.
- Content: short/full descriptions, preserved Cargo HTML, external links.
- Media: local image browser, media rows for image/video/audio/embed, captions, credits, alt text, dimensions.
- Preview: current project JSON and a compact card preview.
- Publish / Safety: validation, git status, commit, and push.

Public GitHub Pages excludes `tools/`, so this editor is not deployed as a public admin panel.
