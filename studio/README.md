# Young’s seaside studio

A coastal-sunset room: project CDs, a working disc selector, and 杂谈 as newspapers. React + TypeScript + Vite; original SVG/CSS scene and pixel cursors. No runtime API or backend.

## Run

Requires Node.js 22.12+ (or a newer supported LTS).

```sh
cd studio
npm ci
npm run import:notes
npm run dev
```

For a production preview that includes old blog URLs:

```sh
npm test
npm run build
npm run preview -- --port 4173
```

## Content

- `src/content/profile.ts`: display name and public links.
- `src/content/projects.ts`: CD order, titles, descriptions, repository/live URLs and colours. Keep ownership and prototype status accurate. These descriptions were checked against the public repository READMEs on 2026-11-08.
- The first three discs are shipped products: Ancher, PlanFlow Meter and AI Emoji Converter. Their links, responsibilities and the first-screen introduction come from [the profile README](https://github.com/BettTer/BettTer/blob/main/README.md), read on 2026-11-08. Keep the seven localized descriptions/categories in `src/i18n/messages.ts` aligned with disc order. Production discs link to websites/stores; source-code links belong only to public repositories.
- Existing `../blog/**/index.html` articles are imported by `scripts/import-notes.mjs`; never edit `notes.generated.json` by hand.
- Add a Markdown file under `content/notes/` with `title:` and `date:` in a `---` frontmatter block. Keep images in `public/studio-art/` and reference them by absolute path.
- No audio is bundled. Project selection works independently of any soundtrack. A soundtrack can be added later from a user-provided source.

## Behaviour

Native scrolling works throughout. CSS scroll-timeline progressively moves the room where supported. Touch devices have a vertical composition; reduced-motion disables visual movement. The CD selector uses transition tokens to reject stale completions. Notes open in a native modal dialog, with Escape, focus restoration and background scroll lock.

The scene also has independent cloud drift, water ripples, solar light and reflection animations in `src/living-studio.css`. These respect reduced motion, pause when the scene is outside the viewport or the document is hidden, and use no video or animation dependency. The About link points to the introduction in the first screen; the later section describes the working process.

`src/scene-day-cycle.css` adds stronger wind/water, individually rooted palm fronds and four lighting palettes. Automatic lighting follows browser-local hours: morning 05:00–09:59, day 10:00–15:59, dusk 16:00–19:59, night 20:00–04:59. These are stylized clock bands, not astronomical sunrise times. The clock refreshes every minute and on returning to a visible tab. The footer selector previews each period; choosing Local time immediately restores Auto. Manual previews are not saved across reloads, and no location or external time service is used.

Default cursor and clickable cursor are original pixel SVGs; text controls keep the I-beam. They apply only to fine pointers.

## Legacy and release

The build copies `blog`, `assets`, `stylesheets`, `javascripts`, `images`, the feed, sitemap, robots and favicon into the output. The old homepage is kept at `/legacy/index.html`; all original article URLs remain valid. New bundles live under `/studio-assets/`.

The repository currently publishes `master` root directly. Until the reviewed production release, do not push the new root source homepage over the old one. The new source lives in `studio/`.

After user review:

1. Push reviewed commits to `master`.
2. Change repository Settings → Pages → Source to **GitHub Actions**.
3. Manually run **Publish coastal studio**. It builds and publishes `studio/dist`.
4. Verify the homepage, a direct old article URL, `/blog/archives/` and the project subsite `/master-duel-ai-advisor/`.

The deploy workflow is manual so content pushes do not unexpectedly replace the live site. For rollback to the original site, set Pages source back to master/root: original root files have been retained. The pre-change commit is `e7f0ed4b6d4457fb566c4d2e88f49c10d9c0e0c4`.

## Languages and music

English, Simplified Chinese, Traditional Chinese and Japanese are available in the header. The first visit follows the browser language, and an explicit choice is saved under `studio-language` in localStorage. Translation strings and project descriptions live in `src/i18n/messages.ts`. Project names and printed cover branding retain their original names; imported articles retain the original text, with a language label in the reader.

The Music section links to the user-provided Young CRT Spotify artist page. `public/studio-art/young-crt-header.png` is the header artwork supplied by the user. Update the artist URL/name in `src/content/profile.ts`. No Spotify SDK, embedded player, account login, or autoplay is required.

## Celestial motion

`scene/celestialState.ts` keeps the requested period separate from the displayed body. Forward morning/day/dusk changes follow one elliptical path. Backward requests (including dusk to morning) and sun/moon changes finish the current setting before starting the next rise. Requests during a phase are queued; the latest wins at the next safe boundary. `orbitGeometry.ts` and `orbitAnimation.ts` generate body and reflection movement from the same sampled ellipse. Shared phase durations drive both the reducer timer and CSS. Offscreen/reduced-motion updates settle immediately, with no residual transform transition.

The player and speaker leave the western window visible on desktop; compact layouts stack the player and reframe the window to keep the sunset in view.
