
## Goal

Rework `/stormai-learning` so it presents **StormAI Learning** as an umbrella with three tabs:

1. **Personalized Learning** (existing content, condensed)
2. **StormAI Studio** — custom course creation from topics within courses
3. **Skill Atlas** — video-game-style skill tree tied to certifications and job roles

No navigation/mega-menu changes. Videos and full copy for the two new sections will be provided later — scaffold with placeholders.

## Structure

Update `src/pages/PersonalizedLearning.tsx` (keep the same route/file to avoid router churn):

```text
PageLayout (title: "StormAI Learning")
└── Tabs (shadcn Tabs, styled to match Index.tsx tab pills)
    ├── Personalized Learning
    ├── StormAI Studio
    └── Skill Atlas
```

Tab pill styling reuses the pattern from `src/pages/Index.tsx` (bg-card/50, active = primary) for visual consistency.

### Tab 1 — Personalized Learning (condensed)

Keep the essence, cut the length so it feels like 1 of 3 peers:

- Keep: intro paragraph, VideoEmbed (`axic12xcaf`), the **7-tool BentoGrid**.
- Remove/collapse: the 3-step "Personalize Your Experience" section and the "Tool Categories" section (redundant with the bento grid).
- Keep the "Save up to 80% of your time" ROI callout as a single compact card.

### Tab 2 — StormAI Studio

Scaffold with:

- Section intro: "Create custom courses built from topics inside our existing courses."
- Placeholder `VideoEmbed` slot (empty `videoId=""` with a TODO comment; user will supply).
- 3–4 placeholder BentoCards (icon + short lorem-style copy marked `TODO: copy`).
- Icon direction: `Wand2`, `BookPlus`, `Layers`, `Sparkles` from lucide.

### Tab 3 — Skill Atlas

Scaffold with:

- Section intro: "A skill-tree view of certifications and job roles — pick a path, unlock the courses that build it."
- Placeholder `VideoEmbed` slot.
- 3–4 placeholder BentoCards with icons: `Map`, `GitBranch`, `Trophy`, `Target`.
- Note in card copy that content will be filled in when videos/copy arrive.

## Technical Details

- File touched: `src/pages/PersonalizedLearning.tsx` only.
- Reuse existing primitives: `PageLayout`, `Tabs/TabsList/TabsTrigger/TabsContent`, `BentoGrid`, `BentoCard`, `VideoEmbed`.
- Preserve `usePageView("StormAI Learning")` call.
- Add a small `useState` for `activeTab` (default `"personalized"`) so we can later hook deep-links (`?tab=studio`) if desired — not implemented now.
- Placeholder `VideoEmbed` components will be commented out or rendered inside a bordered "Video coming soon" placeholder div to avoid runtime errors from an empty `videoId`.
- No route changes, no nav changes, no new files.

## Out of Scope

- Uploading/wiring the actual Studio and Atlas videos (waiting on user).
- Final marketing copy for the two new sections.
- Mega-menu or Navigation updates.
