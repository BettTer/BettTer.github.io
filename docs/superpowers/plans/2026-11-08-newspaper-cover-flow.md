# Newspaper Cover Flow Implementation Plan

> Implement inline with superpowers:executing-plans. User approved the direction and requested the finished preview.

**Goal:** Browse real journal issues as overlapping newspapers with stable hover and horizontal navigation.
**Architecture:** A native scroll-snap track owns positions; a small state reducer separates the centered issue from the hovered/focused issue. Existing note reader remains the click destination.
**Tech Stack:** React, TypeScript, CSS, Vitest.
**Spec:** docs/superpowers/specs/2026-11-08-newspaper-cover-flow-design.md

## Global Constraints

- Work on current master as requested earlier; no branch or worktree.
- Local preview only for this review; do not publish this change yet.
- Use only real articles, no carousel dependency, four UI languages.
- Keep normal vertical page scrolling, native touch pan and existing reader.

## Review Focus

- Hover must not move track positions or reset when the pointer leaves.
- Drag release must not open an article; a real click must still open it.
- First/last issues stay reachable with two issues and with a longer collection.
- Long bilingual titles fit small screens; keyboard focus remains visible.
- Reduced motion and modal focus return remain usable.

### Task 1: Newspaper browsing

**Files:** src/components/NewspaperDesk.tsx, src/components/paperFlow.ts, src/components/paperFlow.test.ts, src/newspaper.css, src/i18n/messages.ts (all within studio/).

- [x] Test the state contract: hover changes foreground without centering; scroll switches foreground when the nearest issue changes; repeated scroll does not discard hover; boundary requests clamp and never wrap. Run tests and observe failure.
- [x] Implement the state reducer and native overlapping scroll track. Add persistent hover/focus, scroll centering, arrow/key navigation, mouse drag with click suppression, and four-language labels.
- [x] Replace newspaper layout styling with scoped CSS for folds, inward tilt, overlap, mobile and reduced motion.
- [x] Run all tests and production build. Inspect desktop hover, switching, reader close, vertical scroll, touch/narrow layout and keyboard. Serve local preview and show the user the result.

## Verification

13 tests passed and the production build packaged the original routes successfully. Desktop browser checks covered finite scroll endpoints, hover with unchanged scrollLeft, drag release without a dialog, keyboard navigation, opening both real articles and focus return. At 390 CSS pixels the page had no horizontal overflow and both papers fit their content boxes. Independent review identified stale click suppression after a canceled drag; cancellation now clears suppression, keyboard activation bypasses it, and every new pointer gesture resets it. Keyboard arrows also use the focused issue as their starting point. Native touch panning is retained; no physical phone was used.
