# Add Networking Range Section

## Scope
- Add a new Networking Range band near the bottom of `/networking`, immediately before Related Topics.
- Match the Cloud page’s two-column range treatment: explanatory copy and action on the left, video on the right.
- Use the existing Network Range description and feature language already present on the Ranges page.
- Embed the existing Network Range demo video (`6i6y01qjp0`) with its current analytics labels.
- Keep every existing Networking section unchanged and do not alter other pages.

## Visual treatment
- Adapt the Cloud range band to the Networking page’s rack-console style and green status-light accent.
- Stack the video beneath the copy on mobile while retaining the balanced two-column desktop layout.
- Keep the “See the Range” action linked to `/ranges`.

## Technical details
- Update only `src/pages/Networking.tsx` unless a narrowly scoped style is required.
- Reuse `VideoEmbed`, the existing Button component, and Lucide icons.
- Verify type checking and render `/networking` at desktop and mobile widths in light and dark mode.
