

## Plan: Create "Personalized Learning Experience" Page

### Overview
Create a new page that showcases the personalized learning experience with an embedded Wistia video (ID: `axic12xcaf`).

### Files to Create/Modify

#### 1. Create `src/pages/PersonalizedLearning.tsx` (New File)
A new page following the existing Linear-style aesthetic using:
- `PageLayout` component for consistent navigation, breadcrumbs, and hero section
- `VideoEmbed` component to embed the Wistia video (ID: `axic12xcaf`)
- Appropriate icon (e.g., `UserCheck`, `Sparkles`, or `GraduationCap`)
- Gradient background variant for visual consistency

**Page Structure:**
```text
┌─────────────────────────────────────────┐
│  Navigation                             │
├─────────────────────────────────────────┤
│  Breadcrumb: Home > Personalized...     │
├─────────────────────────────────────────┤
│  Hero: Title + Description + Icon       │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │     Wistia Video Embed          │    │
│  │     (axic12xcaf)                │    │
│  │                                 │    │
│  └─────────────────────────────────┘    │
│  Caption text below video               │
└─────────────────────────────────────────┘
```

---

#### 2. Update `src/App.tsx`
- Add lazy import for `PersonalizedLearning`
- Add route: `/personalized-learning`

---

#### 3. Update `src/lib/trainingLinks.ts`
- Add link mapping: `"Personalized Learning Experience": "/personalized-learning"`

---

### Technical Details

**Video Embedding:**
- Use the existing `VideoEmbed` component instead of raw Wistia embed code
- Pass `videoId="axic12xcaf"` and appropriate title
- Include `trackingMetadata` for analytics consistency

**Styling:**
- Use `backgroundVariant="gradient"` for the page
- Center the video with `max-w-4xl mx-auto`
- Add rounded corners and shadow to the video container
- Include descriptive caption below the video

