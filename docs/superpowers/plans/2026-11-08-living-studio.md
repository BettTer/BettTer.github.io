# Living studio implementation plan

> Implement inline with superpowers:executing-plans; user has requested the changes and supplied the content source.

**Goal:** Make the seaside scene visibly alive and lead with Young's identity and shipped products.
**Architecture:** Keep the React/SVG scene and existing disc reducer. Add three production discs, localized copy and category selection; use compositor-friendly CSS for scene layers and an intersection/visibility lifecycle for pausing.
**Stack:** React, TypeScript, SVG/CSS, Vitest.
**Spec:** docs/superpowers/specs/2026-11-08-living-studio-design.md

## Constraints and review focus

- Existing master, no new dependencies, local preview before release.
- README is the evidence for experience, products and ownership. No invented roles, metrics or public repositories.
- The initial disc, labels, category, descriptions and links must agree for all seven projects in four languages.
- Mobile must keep the introduction above the player without overlap; desktop first screen must show shipped work.
- Reduced motion disables ambient motion; background/offscreen scenes pause and resume.
- About navigation must reach the early introduction, with exactly one matching anchor.

### Task 1: Identity and real products

- [x] Add rendering tests proving the first screen contains the introduction and real product links, and the initial player shows Ancher. Verify failure on existing page.
- [x] Add the product data, localized content and store links. Default the collection to products, preserve open-source discs as a selectable group, derive counts from data, and retain actual authorship labels on covers.
- [x] Move about anchor into the first screen; turn former about into working-method/contact area. Style responsive hero copy and production links.

### Task 2: Animated scenery and preview

- [x] Layer and animate halo, clouds, sea ripples and reflection; pause when offscreen/hidden, honor reduced motion.
- [x] Run all tests and production build, review all languages and responsive layouts in browser, inspect moving transforms over time and pause state, and verify transport across product/open-source boundary.
- [x] Obtain a focused code review, address concrete issues, commit locally and show preview with a screenshot.

## Verification

19 tests pass; production typecheck/build and legacy-route packaging pass. Browser checks confirmed the Ancher default, PlanFlow/AI Emoji descriptions and store links, the four-disc open-source group, and transport wrapping from Ancher to Pin It Here and back. Sampled wave/cloud/reflection transforms changed over time; navigating to Journal paused the offscreen scene. Reduced-motion and document-visibility paths were reviewed in code; no OS motion setting was changed. English, simplified/traditional Chinese and Japanese copy were inspected. At 768×700 Japanese intro/product links fit the fixed hero with a positive gap from the player; at 390×844 there was no page overflow and a 48px vertical gap before the player. A review prompted keeping Young. as the shared name across locales to avoid oversized Japanese wrapping; no blocking findings remained.
