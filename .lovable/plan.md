

## Plan: Enhance Personalized Learning Experience Page

### Overview
Add comprehensive content from the PDF to the Personalized Learning Experience page, matching the aesthetic of other Platform Feature pages (like AILearning, EnterpriseReporting, and Phishing).

### Content from PDF to Add

The PDF reveals **7 powerful tools** that make up the Personalized Learning Experience:

| Tool | Description |
|------|-------------|
| **Study Notes** | Instant notes capturing key points, so learners stay focused |
| **Realtime Exam** | See practice questions as instructors mention them, reinforcing learning |
| **Topic Guide** | A complete map of every video lets learners jump to specific topics |
| **Fast Track** | Save hours skipping over material you already know |
| **StormAI Examiner** | Generate unlimited practice tests on the fly for any topic |
| **Flashcards** | Built-in flashcards for quick review, all downloadable |
| **Highlights** | Search any keyword to see exactly where topics appear across the course |

**Key messaging:**
- "Seven tools. One personalized experience."
- "Skill up faster while saving up to 80% of your time!"
- Personalization setup: experience level + goals + custom highlights

---

### Page Structure

```text
┌─────────────────────────────────────────────────────────────┐
│  Navigation + Breadcrumb                                    │
├─────────────────────────────────────────────────────────────┤
│  Hero: Title + Description + Sparkles Icon                  │
├─────────────────────────────────────────────────────────────┤
│  Video Embed (existing - KEEP AS IS)                        │
│  Caption: "Watch the full product walkthrough"              │
├─────────────────────────────────────────────────────────────┤
│  Section: "Seven Tools. One Personalized Experience."       │
│  ┌─────────┬─────────┬─────────┬─────────┐                  │
│  │ Study   │ Realtime│ Topic   │ Fast    │                  │
│  │ Notes   │ Exam    │ Guide   │ Track   │                  │
│  ├─────────┼─────────┼─────────┼─────────┤                  │
│  │ StormAI │ Flash   │ High-   │ (empty) │                  │
│  │ Examiner│ cards   │ lights  │         │                  │
│  └─────────┴─────────┴─────────┴─────────┘                  │
├─────────────────────────────────────────────────────────────┤
│  Highlight Card: "Save up to 80% of your time"              │
├─────────────────────────────────────────────────────────────┤
│  Section: "Personalize Your Experience"                     │
│  3-step flow showing the setup process:                     │
│  1. Choose Experience Level                                 │
│  2. Set Your Goals                                          │
│  3. Create Custom Highlights                                │
├─────────────────────────────────────────────────────────────┤
│  Section: "Tool Categories"                                 │
│  Three category cards:                                      │
│  - Enhanced Study (Study Notes + Realtime Exam)             │
│  - Targeted Learning (Topic Guide + Fast Track)             │
│  - Practice & Review (StormAI Examiner + Flashcards)        │
└─────────────────────────────────────────────────────────────┘
```

---

### Files to Modify

#### 1. `src/pages/PersonalizedLearning.tsx`

**Keep existing:**
- Video embed with ID `axic12xcaf` (unchanged)
- PageLayout wrapper with Sparkles icon
- usePageView analytics hook

**Add new content:**

1. **Update description** to match PDF messaging:
   - "StormWind's Personalized Learning Experience adapts to each learner, delivering seven powerful tools that maximize ROI on every training hour. Skill up faster while saving up to 80% of your time!"

2. **Section: Seven Tools Grid** (using BentoGrid + BentoCard):
   - 7 cards in a responsive grid (4 columns on desktop)
   - Each card with appropriate icon, title, and description
   - Icons to use:
     - Study Notes: `FileText`
     - Realtime Exam: `Clock` or `Timer`
     - Topic Guide: `LayoutGrid` or `Map`
     - Fast Track: `FastForward` or `Zap`
     - StormAI Examiner: `Brain` or `Bot`
     - Flashcards: `Layers` or `Copy`
     - Highlights: `Search` or `Highlighter`

3. **Highlight Card** (gradient background):
   - "Save up to 80% of your time!"
   - Emphasize the ROI/efficiency message

4. **Section: Personalize Your Experience** (3-step flow):
   - Step 1: "Choose Your Experience" - First time watching vs. already know material
   - Step 2: "Set Your Goals" - Certification, real-world prep, or specific topics
   - Step 3: "Create Custom Highlights" - Enter topics for StormAI to mark on timeline

5. **Section: Tool Categories** (3 gradient cards):
   - "Enhanced Study" - Study Notes + Realtime Exam
   - "Targeted Learning" - Topic Guide + Fast Track
   - "Practice & Review" - StormAI Examiner + Flashcards + Highlights

---

### Technical Details

**Imports to add:**
```typescript
import { 
  FileText, 
  Timer, 
  LayoutGrid, 
  FastForward, 
  Brain, 
  Layers, 
  Search,
  Zap,
  Target,
  GraduationCap,
  Lightbulb
} from "lucide-react";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
```

**Styling patterns to follow:**
- Use `BentoGrid columns={4}` for the 7 tools section (matching AILearning page)
- Use gradient cards (`bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10`) for highlight sections
- Use numbered step indicators (`w-8 h-8 rounded-full bg-primary text-primary-foreground`) for the 3-step flow (matching Phishing page)
- Add `animate-fade-in` for entrance animations
- Section headers with icon + title pattern

**Responsive behavior:**
- 7 tools: 1 column mobile, 2 columns tablet, 4 columns desktop
- 3-step flow: Stacked on mobile, horizontal on desktop
- Tool categories: 1 column mobile, 3 columns desktop

