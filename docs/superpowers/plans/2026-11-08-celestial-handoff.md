# Celestial handoff implementation plan

> Implement inline with superpowers:executing-plans. User requested visibility and physical setting/rising transitions.

**Goal:** Keep the western sunset/reflection visible and exchange sun/moon below the horizon.
**Architecture:** A small reducer separates requested period from the currently shown period. Shared phase durations drive CSS travel/set/rise animations. Responsive scene framing reserves visible sky/water without foreground compositing.
**Spec:** docs/superpowers/specs/2026-11-08-celestial-handoff-design.md
**Stack:** React, TypeScript, SVG/CSS, Vitest. No new dependencies.

## Constraints and review focus

- Preserve east-to-west direction and real backdrop occlusion; no sun or reflection over the CD player.
- Do not swap body identity while setting; rapid requests use the latest target at the next safe boundary.
- A request during travel/rise must not restart or jump an in-progress body; obsolete completions do nothing.
- Offscreen/reduced-motion updates skip the sequence safely; all timers clean up.
- At 1280/1440 desktop widths the sunset disc and an appreciable reflection area must be outside the player bounds. At 768/390, intro and player must not overlap or overflow.
- Keep this change local for user review.

### Task 1: Phase sequencing

- [x] Write reducer tests for setting old identity, safe swap/rise, same-body travel, queued latest requests, stale completions and immediate settling. Run red.
- [x] Implement reducer and hook with shared phase durations; use shown period for SVG palette/body and timer cleanup on phase change.

### Task 2: Composition and animation

- [x] Reserve the western scene beside the player and reframe compact layouts. Add set/rise/reflection keyframes and horizon clipping; retain normal static body travel.
- [x] Run all tests/build; inspect desktop sunset/reflection, dusk→night and night→morning, rapid requests and compact layouts in browser.
- [x] Obtain a focused review, fix findings, commit locally and show a screenshot plus preview.

## User refinement during preview

Extend phase tests so dusk/day → morning starts a new setting/rising cycle. Add pure ellipse-geometry tests and sample the same ellipse into CSS keyframes for every phase. No backward interpolation; reflection uses the same per-frame x coordinate. Disable old transform transitions entirely (including while paused), and compact the player caption so the arc apex stays visible.

## Verification

42 tests passed; production typecheck/build and legacy routes passed. Browser checks verified dusk→morning retains dusk while setting then starts morning near the eastern below-horizon point. Four active rising samples progressed from (780.109,500.883) to (791.806,411.008), each within0.002 of the normalized ellipse equation, confirming that generated keyframes execute as an arc. Dusk sunset/reflection and the high night moon are visible beside/above the repositioned player. At390×844 and768×700 there was no page overflow, the SVG covers the viewport width, and the player stays below the introduction. Review found an offscreen residual-transition risk; old transform transitions were removed entirely and paused motion is disabled. No new blocking findings on arc/state re-review.

Release: apply the user's earlier request to resubmit the fixes after this final arc refinement; update the live site after validation.
