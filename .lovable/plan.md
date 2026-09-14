# Security Awareness Shield Redesign

## Scope
- Redesign only `/security-awareness` using the supplied Shield layout and unchanged page copy.
- Keep the work preview-only; do not publish or deploy.

## Implementation
1. Add the supplied shield and phishing pipeline SVG markup helpers without altering their source markup.
2. Add the `ShieldScene` and `PhishMini` illustration components using the same rendering pattern as the Networking rack.
3. Append the supplied light/dark Security Awareness scope, animations, phishing panel styling, and reduced-motion handling to the existing page utilities.
4. Replace the Security Awareness page with the supplied custom hero, overview, series cards, StormAI Phishing panel, and benefits layout.

## Validation
- Run TypeScript validation.
- Check `/security-awareness` in light and dark modes at desktop and mobile widths.
- Confirm the page renders without browser console errors and remains preview-only.
