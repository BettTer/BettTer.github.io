# Local day cycle implementation plan

> Implement inline with superpowers:executing-plans, on existing master as requested.

**Goal:** A visibly moving seaside room that follows the browser-local clock, with four previewable periods.
**Architecture:** A small tested time resolver and clock hook drive a period prop on the SVG scene. A native localized selector lives in the hero footer. CSS variables provide palettes; leaf, cloud, wave and reflection layers animate independently.
**Stack:** React, TypeScript, SVG/CSS, Vitest. No dependency changes.
**Spec:** docs/superpowers/specs/2026-11-08-studio-day-cycle-design.md

## Constraints and review focus

- Automatic uses local hours and minutes, not UTC, geolocation or a server timestamp.
- Date rollover, period boundaries and returning from a background tab update correctly.
- Manual preview remains selected during clock ticks; choosing Auto resolves the current time again.
- All moving layers pause offscreen/hidden and respect reduced motion.
- Palm joints remain connected; moon/stars appear at night; first-screen text remains readable in every palette.
- Four UI languages; controls fit at 390 and 768 CSS pixels; no deployment yet.

### Task 1: Local time and controls

- [x] Write boundary/override tests for the time resolver and watch them fail.
- [x] Implement the local clock hook, period resolver and localized native selector. Pass period into the scene without affecting existing project selection.

### Task 2: Daylight and visible wind/water

- [x] Add four SVG palettes, sun/moon and stars; strengthen clouds, waves and reflected light, and animate individually rooted palm fronds.
- [x] Run all tests and production build. Check Auto, four manual palettes, resuming Auto, motion sampling, offscreen pause, mobile/tablet readability and unchanged product navigation.
- [x] Request a focused review, address findings, commit locally and present a screenshot plus interactive preview.

## Verification

31 tests passed; production typecheck/build and legacy route packaging passed. Browser checks covered Auto resolving local hour 22 to night, all four manual periods, and returning to Auto with the updated clock. Captured morning and night visuals; sampled changing palm/frond/wave/reflection transforms. All sampled new animated layers paused after navigating to Journal. At 390×844 and 768×700 there was no page overflow and the selector fit inside the hero footer, including Japanese labels. The code review found no blocking issues. Reduced-motion and background visibility behavior were reviewed in code; no system motion setting was changed.
