# Local Editor

Run from the repository root:

```bash
npm run admin
```

The editor serves only on `127.0.0.1`. It saves local files, refreshes backups before saving, and publishes only from an authenticated computer.

When the editor starts, the terminal prints a local URL with a temporary token. Use that full URL to save, restore, check, or publish.

Tabs:

- Projects: title, order, draft status, date, role, venue, collaborators, credits, and thumbnail.
- Site: contact email, about text, public links, and social preview text.
- Text: project text, links, and advanced exact-layout editing.
- Images: local image browser, image/video/audio/embed rows, captions, credits, alt text, and dimensions.
- Preview: current project details and a compact card preview.
- Publish: publish check, backups, commit, and push.

Public GitHub Pages excludes `tools/`, so this editor is not deployed as a public admin panel.
