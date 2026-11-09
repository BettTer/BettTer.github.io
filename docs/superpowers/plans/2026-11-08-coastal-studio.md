# Coastal CD Studio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Build a usable coastal-sunset studio homepage that combines a CD project collection with the existing 杂谈 notes as newspapers.

**Architecture:** A React application in studio/ renders an original layered SVG/CSS room over ordinary scroll sections. Explicit CD selection state updates a reusable project display. A build script imports old article content and packages legacy URLs alongside the new homepage.

**Tech Stack:** React, TypeScript, Vite, CSS/SVG; Node build scripts; focused Vitest state tests; GitHub Actions + Pages at release. Resolve compatible stable package versions once at setup and commit package-lock.json.

**Spec:** ../specs/2026-11-08-coastal-studio-design.md

## Global Constraints

- Work directly on master in BettTer/BettTer.github.io, as explicitly requested; no extra development branch.
- Local implementation first; preserve existing /blog/, /blog/archives, legacy assets and atom.xml.
- Art and projects appear together on the first screen; each CD is a project, each note is a newspaper.
- No backend, runtime GitHub API, fabricated content, generated concept-image round, or bundled commercial audio.
- Mobile and reduced-motion modes must remain usable without scroll animation.

## Review Focus

- Rapid repeated selection must settle on the last chosen disc; stale animation callbacks cannot overwrite it (Task 2).
- Long project names and small screens must not clip descriptions or controls (Tasks 1–2).
- Notes containing original HTML must retain links, dates and formatting without importing old scripts (Task 3).
- Closing the reader must restore scroll and focus; reduced motion must not hide content (Tasks 3–4).
- Deployment must not lose legacy article paths or mix new bundle filenames with old assets (Task 4).

## File Map

All application paths below are relative to studio/.

- package.json, package-lock.json, tsconfig.json, vite.config.ts, index.html: build setup; asset output directory studio-assets/.
- src/App.tsx, src/styles.css: page sections, room framing, typography, responsiveness.
- src/components/StudioScene.tsx, public/studio-art/: original scenery and CD machine visuals.
- src/content/projects.ts, src/content/profile.ts: reviewed public project and identity information.
- src/components/ProjectCollection.tsx, src/player/discState.ts: disc browser and cancellation-safe animation state.
- src/components/NewspaperDesk.tsx, src/components/NoteReader.tsx: newspaper selection and accessible reading.
- content/notes/, src/content/notes.generated.json, scripts/import-notes.mjs: local notes and imported legacy content.
- scripts/package-site.mjs: combine built homepage and preserved legacy files into dist/.
- ../.github/workflows/check-site.yml: build/check changes without publishing.
- ../.github/workflows/deploy-site.yml: manual production release workflow, enabled at handoff.
- README.md: local run, content edits, release and rollback instructions.

### Task 1: A real, readable studio homepage

**Produces:** typed Project[] and Profile content; StudioScene and four scroll sections.

- [x] Read the four candidate repositories' public READMEs; save concise, defensible project descriptions and provenance in projects.ts. Do not read private repositories.
- [x] Set up studio/ with React/TypeScript/Vite and a lockfile. Define Project as {id, title, summary, technologies: string[], repoUrl, coverColor}; optional demoUrl and imageUrl only for verified destinations/assets.
- [x] Implement the original sunset room, silver CD machine, window/seascape, desk and disc shelf in SVG/CSS. Use Young and BettTer as configurable defaults.
- [x] Render a real selected project immediately, plus clear project/notes/about navigation; four normal-scroll sections work before adding motion.
- [x] Run npm run build. Check desktop 1440×900 and mobile 390×844: no horizontal overflow, first project readable, controls reachable. Commit the working base locally.

### Task 2: Switching projects through CDs

**Consumes:** Project[]. **Produces:** selected project and deterministic disc phases idle → ejecting → loading → idle.

- [x] Add focused tests to src/player/discState.test.ts: selecting the current disc is a no-op; next/previous wrap; after A→B→C only C may become current; completion with an old transition token is ignored.
- [x] Run npm test -- discState and confirm those tests fail before implementing the reducer in discState.ts.
- [x] Implement ProjectCollection, disc shelf, previous/next controls and visible project details. Reduced-motion selection updates immediately; normal selection animates tray/disc with transition tokens.
- [x] Run focused tests; manually stress rapid clicking and a long title on mobile. GitHub links always follow the displayed project; animation never changes scroll position. Commit locally.

### Task 3: Integrate 杂谈 as newspapers

**Consumes:** original ../blog/ article HTML. **Produces:** Note[] with {id,title,date,html,legacyUrl} and a reader.

- [x] Create import-notes.mjs to extract existing article title, machine-readable date, .entry-content and canonical local path. Copy content, not the Octopress page chrome or script tags; retain relative-link meaning.
- [x] Use the existing 开天 article as the regression fixture: imported title/date/body match the source and legacyUrl is /blog/2020/07/28/kai-tian/.
- [x] Add local Markdown note support using a build-time parser; regenerate notes.generated.json deterministically during build, without runtime network requests.
- [x] Implement newspaper thumbnails and NoteReader with a readable paper layout, open/close control, Escape handling, focus containment/restoration and scroll locking/restoration.
- [x] Build and verify the real old note, internal/external links, keyboard open/close and mobile scrolling. Commit locally.

### Task 4: Explore, verify, then prepare release

**Consumes:** complete static studio, player and reader. **Produces:** reviewed preview and deployable Pages artifact.

- [x] Add scroll view movement with a static fallback: window/foreground layers move at different rates, CD section approaches, newspaper section comes into focus, final window view offers GitHub/contact. Keep native wheel/keyboard scrolling.
- [x] Disable movement under prefers-reduced-motion; preserve all content, links and player selection. Avoid continuous animation loops when the page is idle.
- [x] Implement package-site.mjs to copy ../blog/, ../assets/, ../stylesheets/, ../javascripts/, ../images/, atom.xml, sitemap.xml, robots.txt and favicon.png into studio/dist alongside the new root homepage. Preserve an archival copy of the old root HTML at /legacy/index.html. New bundle assets live only under studio-assets/.
- [x] Add build checks asserting /index.html, /blog/archives/index.html, /blog/2020/07/28/kai-tian/index.html, /atom.xml and all emitted local asset references exist. Exclude unrelated source/notebook files from deployed output.
- [x] Run typecheck, targeted state/content tests and production build once. Inspect the built preview at desktop/mobile sizes, reduced motion, rapid disc changes, note open/close and direct legacy URLs. Save screenshots of the complete first screen and project/notes sections.
- [ ] Give the user the local preview and request one consolidated visual correction round. Finish those corrections before production deployment.
- [x] Prepare check-site.yml and manual deploy-site.yml using current official GitHub Pages action instructions. Deploy requires changing Pages source from master/root to GitHub Actions; do that only at the release step after user review.
- [ ] Document npm commands, project/note edits and rollback to the pre-change commit. Record the original master commit before implementation; commit completed source locally. Push/publish when the user approves the concrete finished site.

## Coordination

Implement inline in the current chat to conserve credit. No user-provided graphics or music file is needed for the first build. The user reviews one runnable version rather than approving each intermediate component. Optional display-name/contact/music changes can be supplied while work proceeds.

## Delivery status — 2026-11-08

Local source, production build and browser verification are complete. Seven regression tests pass, including the independent review finding fixed RED→GREEN. Preview is at http://127.0.0.1:4173. README and rollback instructions are ready; source is committed locally. User visual review, any resulting corrections, remote push and production release remain pending. No remote repository or Pages configuration has been changed.
