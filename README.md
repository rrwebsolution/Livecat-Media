# LiveCat Multimedia website

The public landing and download site for LiveCat Multimedia. **Present. Produce. Go Live.**

React, Vite, TypeScript, Tailwind CSS and Lucide. This is its own project: LiveCat Multimedia (the Java desktop app) and
LiveCat Remote (the companion remote) live in their own repositories and share no code with it.

## Run

```
npm install
npm run dev
```

`npm run build` type-checks and writes the static site to `dist/`, ready for any static host. `npm run preview` serves
that build. `npm run lint` runs the linter.

## Publishing a release

Everything about downloads is in `src/config/release.ts`:

| Field | Effect |
|-------|--------|
| `windowsDownloadUrl` | Every Windows button downloads the newest `.exe` from GitHub Releases, found when the page loads, so a new release needs no change. This address is only where they go if GitHub cannot be asked. |
| `version` | The line inside the download buttons, under "Download for Windows", normally shows the version from the GitHub release tag. Fill this in only to override it. |
| `windowsFileSize`, `releaseDate` | Shown on the Windows card. Each stays hidden while empty. |
| `macAvailable`, `macDownloadUrl` | Set both to replace every macOS "Coming Soon" with a real download. |

## Before going live

- Set `VITE_SITE_URL` to the public address, so social networks can find the Open Graph image. On Vercel, set it under
  Project Settings → Environment Variables and redeploy.
- Add the Support, Privacy and Terms addresses in `src/config/site.ts`. Without an address they show as plain text.

## Deploying to Vercel

Import the repository in Vercel. `vercel.json` sets the build command, the output folder and the headers, so no other
settings are needed. It also turns on clean addresses, so `/user-manual.html` becomes `/user-manual`.

## User manual

`public/user-manual.html` is a copy of `docs/User-Manual.html` from the desktop project, so update it when the manual
changes there. The copy has three extra things to keep: a link back to the site at the top of the contents list, a
description and an icon in the `<head>`.

## Brand rules

- Solid colors only, defined in `src/index.css`. No gradients anywhere.
- `public/LiveCat logo/icon.png` and `logo.png` are the supplied originals. The `icon-*.png` files are the same artwork
  with the empty transparent margin removed, scaled down. Do not redraw the icon or put a frame behind it.

## Screenshots

The images in `src/assets/screenshots` are real captures. The desktop one comes from the Presenter's `ScreenshotTour`
developer tool, and the remote ones come from LiveCat Remote's Demo Mode.

## Designs

There are two complete designs with the same wording, which lives in `src/config/content.ts`:

- **Classic** is in `src/components`.
- **Studio** is in `src/designs/studio`, and it uses Archivo and IBM Plex Mono.

Set `activeDesign` in `src/config/site.ts` to choose what visitors get. Add `?design=classic` or `?design=studio` to the
address to view either one. The feature images in `src/assets/screenshots/features` are crops of real app captures.
