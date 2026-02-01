

## Plan: Add Eye-Catching "New AI Feature" Banner to Homepage

### Overview
Add a prominent, attention-grabbing section to the main page that directs users to the Personalized Learning Experience page. This will be positioned strategically between the Hero and the tabbed content section to maximize visibility.

### Design Approach

The banner will follow a "Linear-style" aesthetic with extra flair to make it stand out as something special:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│     ✨ NEW                                                                  │
│                                                                             │
│     ██████  ███████ ██████  ███████  ██████  ███    ██  █████  ██           │
│     Personalized AI Learning Experience                                     │
│                                                                             │
│     Seven powerful tools that adapt to YOU. Skill up faster while           │
│     saving up to 80% of your time.                                          │
│                                                                             │
│                    [ Discover Now →  ]                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Visual Design Elements

1. **Animated "NEW" Badge**: Pulsing/glowing badge with sparkle effects
2. **Gradient Border**: Animated gradient border that shifts colors (teal to green)
3. **Background Effects**: Subtle aurora/glow effect behind the content
4. **Icon Animation**: Sparkles icon with continuous animation
5. **CTA Button**: Magnetic effect button (matching Hero pattern) with hover glow
6. **Glass morphism**: Backdrop blur with semi-transparent background

### Component Structure

Create a new component `AIFeatureBanner.tsx` that includes:

```typescript
// Key visual features:
- Animated gradient border using CSS animation
- "NEW" badge with pulse animation
- Sparkles icon with glow effect
- Glass morphism card styling
- Magnetic CTA button (reusing Hero pattern)
- Link to /personalized-learning
```

### Technical Implementation

#### 1. Create `src/components/AIFeatureBanner.tsx`

```typescript
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

// Features:
- Animated gradient border (keyframe animation)
- Pulsing "NEW" badge
- Sparkles icon with glow
- Magnetic button effect (from Hero)
- Tool preview icons
- Link to /personalized-learning
```

**Styling Details:**
- Background: `bg-gradient-to-br from-primary/10 via-background to-primary/5` with `backdrop-blur-xl`
- Border: Animated gradient using pseudo-element with rotating colors
- Badge: `bg-primary text-primary-foreground` with `animate-pulse`
- Card: `rounded-2xl` with `shadow-2xl shadow-primary/20`
- Text: Large heading with glow effect (matching Hero style)

#### 2. Update `src/pages/Index.tsx`

- Import the new `AIFeatureBanner` component
- Place it between the Hero section and the tabbed content section
- Add appropriate spacing (`py-12` or similar)

### Placement on Page

```text
┌──────────────────────────────────────┐
│              NAVIGATION              │
├──────────────────────────────────────┤
│                                      │
│               HERO                   │
│   "Empowering the Future of..."      │
│                                      │
├──────────────────────────────────────┤
│                                      │
│      ✨ AI FEATURE BANNER ✨         │  <-- NEW SECTION
│      (Links to /personalized-...)    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│           TABBED CONTENT             │
│   Enterprise IT | PM | Phishing...   │
│                                      │
└──────────────────────────────────────┘
```

### Copy/Messaging Options

**Badge Text:**
- "NEW" or "NEW AI FEATURE" or "INCREDIBLE NEW FEATURE"

**Headline:**
- "Personalized AI Learning Experience"
- "Meet Your AI-Powered Learning Assistant"
- "Introducing: Seven Tools. One Personalized Experience."

**Subtext:**
- "StormWind's newest innovation adapts to each learner, delivering seven powerful tools that maximize ROI on every training hour. Skill up faster while saving up to 80% of your time!"

**CTA Button:**
- "Discover Now" or "Experience It" or "Learn More"

### Animation Details

1. **Border Animation**: Rotating gradient using `@keyframes` (360deg rotation over 4-6 seconds)
2. **Badge Pulse**: `animate-pulse` from Tailwind
3. **Icon Glow**: Box-shadow with primary color, pulsing
4. **Entrance Animation**: `animate-fade-in` when scrolled into view
5. **Button Magnetic Effect**: Reuse the `MagneticButton` component pattern from Hero

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/AIFeatureBanner.tsx` | Create new component |
| `src/pages/Index.tsx` | Import and add banner between Hero and tabs |

### Mobile Responsiveness

- Full width on mobile with reduced padding
- Stacked layout on small screens
- Smaller font sizes on mobile (`text-3xl md:text-4xl lg:text-5xl`)
- Touch-friendly CTA button size

