

## Plan: Add Prominent "Personalized Learning Experience" Feature Callout to Homepage

### Overview
Create an eye-catching, unmissable feature callout on the homepage that directs users to the Personalized Learning Experience page. This will be positioned prominently to ensure it's one of the first things visitors see.

### Design Concept: "Floating Feature Banner"

A premium, attention-grabbing component positioned between the Hero section and the tabbed content. The design will feature:

- **Animated shimmer/glow border** that pulses with the brand's teal/green accent colors
- **Sparkles icon** with pulsing animation to match the Personalized Learning page branding
- **Glassmorphism design** with backdrop blur for the Linear-style aesthetic
- **Magnetic hover effect** (similar to Hero CTA buttons) for interactivity
- **"NEW" badge** to emphasize innovation
- **Staggered fade-in animation** for dramatic entrance

---

### Visual Layout

```text
┌─────────────────────────────────────────────────────────────────┐
│                        HERO SECTION                              │
│              "Empowering the Future of Learning"                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  ✨ NEW FEATURE CALLOUT                                          │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  ┌──────┐                                                  ║  │
│  ║  │ ✨   │  Personalized Learning Experience                ║  │
│  ║  │ icon │  Seven AI-powered tools. One customized journey. ║  │
│  ║  └──────┘  Save up to 80% of your training time.           ║  │
│  ║                                                            ║  │
│  ║                    [ Explore Now → ]                       ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
│  ↑ Animated glow border + shimmer effect                         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     TABBED CONTENT SECTION                       │
│           Enterprise IT | Project Management | etc.              │
└─────────────────────────────────────────────────────────────────┘
```

---

### Implementation Details

#### 1. Create New Component: `PersonalizedLearningBanner.tsx`

A dedicated, reusable banner component with:

**Structure:**
```tsx
<section className="relative py-12 px-6">
  <Link to="/personalized-learning">
    {/* Animated glow border container */}
    <div className="animated-glow-border">
      {/* "NEW" badge */}
      <span className="badge">NEW</span>
      
      {/* Icon with pulse animation */}
      <Sparkles className="animate-pulse" />
      
      {/* Content */}
      <h3>Personalized Learning Experience</h3>
      <p>Seven AI-powered tools. One customized journey. 
         Save up to 80% of your training time.</p>
      
      {/* CTA */}
      <span>Explore Now <ArrowRight /></span>
    </div>
  </Link>
</section>
```

**Key Features:**
- `Link` wrapper for navigation (supports open in new tab)
- Animated gradient border using CSS `@keyframes` for shimmer effect
- 3D tilt effect on hover (matching AnimatedFeatureCard)
- Scale-up animation on hover
- Sparkles icon with pulsing glow
- ArrowRight icon that slides on hover
- Responsive design (stacks vertically on mobile)

---

#### 2. CSS Animations (in component or index.css)

**Shimmer Border Animation:**
```css
@keyframes shimmer-border {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animated-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    hsl(166 100% 30%),
    hsl(177 70% 41%),
    hsl(160 64% 52%),
    hsl(177 70% 41%),
    hsl(166 100% 30%)
  );
  background-size: 300% 100%;
  animation: shimmer-border 3s ease infinite;
  z-index: -1;
}
```

**Glow Pulse Animation:**
```css
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px hsl(166 100% 30% / 0.3);
  }
  50% {
    box-shadow: 0 0 40px hsl(166 100% 30% / 0.5);
  }
}
```

---

#### 3. Update `src/pages/Index.tsx`

**Changes:**
1. Import the new banner component
2. Place it between the Hero section and the tabbed content section
3. Add entrance animation with slight delay after Hero content loads

```tsx
// After Hero, before Tabs section
<PersonalizedLearningBanner />
```

---

### Component Styling Specifications

| Element | Specification |
|---------|--------------|
| **Container** | `max-w-4xl mx-auto`, rounded-2xl, glassmorphism background |
| **Background** | `bg-gradient-to-br from-primary/5 via-background to-primary/10` with backdrop-blur-xl |
| **Border** | Animated gradient border (shimmer effect) |
| **"NEW" Badge** | `bg-primary text-primary-foreground`, uppercase, tracking-wider |
| **Icon** | Sparkles, `w-10 h-10`, primary color with pulsing glow |
| **Title** | `text-2xl md:text-3xl font-bold`, tracking-tight |
| **Description** | `text-muted-foreground`, max 2 lines |
| **CTA** | `text-primary font-semibold`, ArrowRight icon with hover translate-x |
| **Hover** | Scale 1.02, intensified glow, 3D tilt effect |

---

### Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| **Mobile** (<640px) | Stacked layout, icon above text, full-width CTA button |
| **Tablet** (640-1024px) | Horizontal layout, icon left, text center, CTA right |
| **Desktop** (>1024px) | Same as tablet with larger padding and text sizes |

---

### Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `src/components/PersonalizedLearningBanner.tsx` | **Create** | New banner component |
| `src/pages/Index.tsx` | **Modify** | Import and place banner between Hero and Tabs |

---

### Accessibility Considerations

- Use semantic `<section>` with appropriate ARIA label
- Ensure sufficient color contrast for all text
- Banner is wrapped in a `Link` component for proper navigation
- Focus states visible and clear
- Respects `prefers-reduced-motion` for animations

---

### Expected Result

When users land on the homepage, they will see:
1. Hero section with typing animation
2. **Immediately below:** A prominent, glowing banner showcasing the Personalized Learning Experience feature
3. The banner will have animated borders and a "NEW" badge making it impossible to miss
4. Clicking anywhere on the banner navigates to `/personalized-learning`
5. Tabbed content section follows below

