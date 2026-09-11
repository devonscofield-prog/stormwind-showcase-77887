# DevOps Playgrounds preview redesign

## Goal
Update only the right-hand visual in the DevOps “Hands-on / DevOps Playgrounds” section, using the supplied reference as inspiration.

## Changes
- Replace the current light browser-library mockup with a dark playground catalog.
- Organize the preview into “Kubernetes Playgrounds” and “Kubernetes Extended Playgrounds.”
- Use compact dark tiles, crisp technology icons, subtle borders, and a restrained indigo/blue accent treatment.
- Keep the existing left-side heading, copy, checklist, button, page layout, and all other DevOps sections unchanged.
- Preserve responsive stacking and make the denser catalog remain legible on narrow screens.

## Technical details
- Update `src/components/PlaygroundLibraryWindow.tsx` only.
- Use existing Lucide icons and semantic project colors rather than embedding the screenshot.
- Verify type checking and the `/devops` section at desktop and mobile widths.
