# Block Archive website

Public explainer and download page. `dist/` is the complete deployable site; it contains synthetic SVG illustrations and no archive data. GitHub Pages publishes it using the included workflow.

The source ZIP and installation guide are available now. Desktop installer links remain unavailable until a tested, signed release exists. `dist/releases.json` is the only download catalog. Each enabled entry requires `os`, `label`, `version`, `url`, `sha256`, `status: "available"`, `tested: true`, and `signing_verified: true`. URLs must point to a published release asset in `noordenbos/block-archive`. Verify those claims against the actual release before editing the catalog. Draft releases and unsigned previews must never be entered as verified downloads.

For Linux, `signing_verified` means the release checksum manifest has a verified maintainer signature; for macOS it requires Developer ID signing and notarization; for Windows it requires a verified Authenticode signature. Do not simply flip the flag to enable a link.

Serve `dist/` with any local static server to preview. The page uses no analytics, cookies, remote fonts or photo upload endpoints.
