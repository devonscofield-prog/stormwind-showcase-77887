## Goal

Reformat `src/pages/EnterpriseEndUserPage.tsx` into three "parts" — like the StormAI Learning page — with an equal 3-up card layout inside each part. No visual design changes: same dark cards, brand green, gradient page title, hero buttons, borders, hover lift, bullet dots, and typography as today.

## Structure

Hero (unchanged) → overview panel → tab row → tab content.

```text
[ Transform Your Workforce  (intro paragraph, unchanged) ]

[ Desktop Applications | Business Skills | HR Compliance ]

[  card  ][  card  ][  card  ]      <- equal 3-up grid

[ Training Benefits (unchanged, below tabs) ]
```

### Tab 1 — Desktop Applications
Three equal cards, reusing the existing card markup verbatim:
- **Microsoft Apps** (FileText) — Word/Excel/PowerPoint, Outlook & Teams, OneDrive & SharePoint, OneNote & Planner → Learn More `/desktop-apps`
- **AI Tools** (Sparkles) — Copilot, ChatGPT Essentials, Prompt Engineering, AI Best Practices
- **Security** (Shield) — Phishing Awareness, Password Security, Data Protection, Safe Browsing → Learn More `/security-awareness`

### Tab 2 — Business Skills
Three equal cards, splitting today's single Business Skills card into its natural groups (same card styling, same bullet content, no new copy invented beyond regrouping):
- **Communication** (TrendingUp) — Communication Skills, Presentation & Writing basics
- **Productivity** — Time Management, Problem Solving
- **Leadership** — Leadership & Teamwork
Each with a Learn More button to `/business-skills`.

### Tab 3 — HR Compliance
Three equal cards from today's HR Compliance bullets:
- **Harassment Prevention** (FileCheck)
- **Workplace Safety & Data Protection** (Shield)
- **Ethics & Compliance** (FileCheck)
Each with Learn More → `/hr-compliance`. Keeps the existing learning-director disclaimer behavior of the HR Compliance page (that page is untouched).

## Technical notes

- Use the same shadcn `Tabs`/`TabsList`/`TabsTrigger`/`TabsContent` component and trigger styling already used on `src/pages/PersonalizedLearning.tsx`, so the tab chrome matches the StormAI Learning page exactly.
- Card grid becomes `grid md:grid-cols-2 lg:grid-cols-3 gap-6` (replacing the current `lg:grid-cols-4` row of 5 that leaves an orphan).
- Restore the missing hover classes on the Business Skills card so all cards behave identically.
- No changes to `index.css`, tokens, PageLayout, navigation, or any other page. Only `EnterpriseEndUserPage.tsx` is edited.
