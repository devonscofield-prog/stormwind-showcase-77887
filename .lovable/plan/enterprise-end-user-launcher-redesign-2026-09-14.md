# Enterprise End User Launcher Redesign

## Scope
- Redesign only `/enterprise-end-user` using the supplied Launcher layout and unchanged page copy.
- Keep this preview-only; do not publish or deploy.

## Implementation
1. Add the `AppLauncher` illustration component exactly as supplied, including twelve application tiles and labelled fallbacks for missing images.
2. Create `public/apps/` with a placeholder file so the folder is ready for separately uploaded icons.
3. Add the supplied light-first blue Enterprise End User scope, launcher animation, tab styling, dark-mode rules, responsive behavior, and reduced-motion handling to the existing page-scope utilities in the global stylesheet.
4. Replace the Enterprise End User page with the supplied scoped `PageLayout` structure: custom split hero, launcher illustration, overview panel, three track tabs, course cards, and dynamic benefits panel.
5. Preserve all existing visible wording and links exactly, while removing the old unused navigation and icon code.

## Validation
- Run the project’s TypeScript validation.
- Check `/enterprise-end-user` at 1440px and 390px in light and dark modes.
- Confirm tab switching, links, labelled icon fallbacks, layout, and browser console behavior.
