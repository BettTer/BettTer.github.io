# Visible sunset and a horizon handoff

The user reports that the west-side sunset/reflection are hidden by the CD player and asks for a physical sun/moon handoff rather than an icon swap. Preserve the established left/east to right/west scene direction.

Reserve visible water/sky to the right of the desktop player by moving it left. Put sunset near the western open-water gap, rather than behind the far-right skyline. On compact layouts keep the player below the introduction and reframe the illustration so both eastern and western positions fit the visible window. Do not lift the sun/reflection into a foreground layer over the player.

Use a finite celestial transition: same-body periods travel smoothly; a body change first sets the old body in the west, keeps its identity until it is below the sea horizon, then raises the new body from the east. Palette changes accompany the incoming body. Reflection fades out with the setting body and grows with the rising body. Use CSS keyframes, with a tested reducer and shared durations. Queue the latest requested period during an active phase; never replace a visible sun with a moon halfway through a gesture. Reduced-motion/offscreen updates settle immediately, and obsolete timer completions are ignored.

Keep first-screen identity/product links, all four languages, native time selector and existing project/note interactions. Work on master; provide a local preview for this iteration before publishing.

User refinement: both bodies follow one east-to-west elliptical arc, not vertical or diagonal linear segments. Going backward in time (especially dusk → morning) must finish setting the old sun, then raise a new sun from the eastern horizon. Only forward same-body requests may travel directly. Ellipse geometry is shared by body and reflection; explicit sampled keyframes avoid browser motion-path compatibility differences. Compact captions leave the upper arc clear.
