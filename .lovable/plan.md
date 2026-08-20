# Performance fix: StormAI Learning (and similar pages)

## What's actually slowing the page down

I reviewed the page and its shared components. The video embed is a contributor, but it is not the main cost — the background effects are.

1. **Three animated, full-screen blur blobs.** The page renders three fixed-position elements sized ~50% of the viewport with a 140–150px blur, each running an infinite 18–26s animation that changes scale and opacity. The browser must re-render a very large blur every single frame, forever. This is the single biggest cost and it never stops, even when idle.
2. **Fixed background + fixed grid overlay.** The page background uses `background-attachment: fixed` plus a fixed pseudo-element grid with a radial mask. Both force full-viewport repaints while scrolling.
3. **~15 frosted-glass cards.** Every bento card uses `backdrop-blur-xl`. Each one samples the layer behind it — which is the animated blur from item 1 — so their cost multiplies with the animation.
4. **Video embed inefficiencies.** The Wistia player script is downloaded on mount even when nobody presses play; a separate JSONP request fetches each thumbnail; a ready-state check polls every 100ms and its effect re-subscribes on each state change; and switching tabs unmounts/remounts the embeds so the thumbnail work repeats each time.

## The fix

**Background (biggest win)**
- Replace the three animated blur blobs with a single static gradient layer baked into the page background, or keep one slow-moving blob at a much smaller blur radius. Remove the per-frame scale/opacity animation.
- Drop `background-attachment: fixed` and make the grid overlay `absolute` instead of `fixed` so scrolling stops triggering full repaints.
- Respect `prefers-reduced-motion` (already partly there) and disable ambient motion on small screens.

**Cards**
- Remove `backdrop-blur-xl` from the bento cards and use a solid/semi-opaque tinted surface instead. Visually near-identical against these backgrounds, dramatically cheaper.

**Video**
- Load `player.js` only after the user clicks play, not on mount.
- Use Wistia's predictable thumbnail image URL instead of a JSONP round-trip per video, keeping the current fetch only as a fallback.
- Replace the 100ms polling loop with the player's own ready event and a single timeout fallback.
- Keep tab content mounted (or cache the resolved thumbnail per video id) so switching tabs doesn't redo the work.
- Add `loading="lazy"` / `decoding="async"` on the poster image.

**Other pages with the same pattern**
The same ambient-blur + `backdrop-blur-xl` combination appears on: StormAI Tutor, AI & ML, Microsoft, Cybersecurity, Full Stack Developer, Learning Paths, and Certification Prep. Once the approach is proven on StormAI Learning, apply the same two changes (static ambient layer, no backdrop blur on cards) to those pages. Visual design and copy stay unchanged.

## Verification

Compare before/after: frame timings while idle and while scrolling, plus screenshots in light and dark mode to confirm nothing looks different.

## Technical notes

- Files: `src/pages/PersonalizedLearning.tsx`, `src/components/VideoEmbed.tsx`, `src/index.css` (`.bg-stormai-aurora`, `.animate-aurora-drift`), then the sibling pages listed above.
- No backend, data, or copy changes; purely rendering and asset-loading work.
