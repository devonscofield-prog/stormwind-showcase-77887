## Goal

Three content updates sourced from the uploaded PDFs, all using the existing design system (dark glass cards, brand green, gradient page titles, PageLayout + breadcrumbs) with no new visual language:

1. A new **ROI & Case Studies** page.
2. **Enterprise Reporting** updated with the Spectre Admin Portal capabilities.
3. **StormAI Phishing** updated with the new AI-Powered Phishing Simulation details.

Applied decisions: hour-based ROI claims only (no dollar figures, no breach-cost table), ITIL quotes omitted from case studies, new page gets a top-level nav item, and the two customer headshots are used.

---

## 1. New page: ROI & Case Studies

Route `/roi-case-studies` in `src/App.tsx` (lazy-loaded, above the catch-all), new file `src/pages/ROICaseStudies.tsx` using `PageLayout` with gradient title, breadcrumb, and hero buttons matching sibling pages.

**Section A — The ROI of StormWind Training**
"Training's real cost is time." Four capability cards (existing card styling, lucide icons):

| Capability | What it solves | Time reclaimed |
|---|---|---|
| Assess — Skill Atlas & Assessments | Searching for relevant content | 1-2 hrs / mo |
| Build — StormAI Studio | Generic training not tied to role | 1-2 hrs / mo |
| Guide — Guided Paths + LXP | Manager guiding learners manually | 2-5 hrs / mo |
| Learn — Fast Track | Sitting through known material | 1-3 hrs / mo |

Headline stat band: **Up to 12 hours reclaimed per learner, per month.** Followed by the PDF's estimate disclaimer verbatim (figures are industry estimates, vary by team size and role mix).

**Section B — Phishing program admin ROI**
One panel: ~24 admin hours recovered per year; campaigns, scoring, and follow-up that used to take 3-5 hours a month run themselves. Industry benchmark pair — initial click rate 20-35% vs. mature program 2-5%, and 40-50% fewer employees clicking within the first year. No dollar values.

**Section C — Client case studies**
Two cards linking to detail views (tabs or in-page anchors — one card expands to the full Q&A, same interaction pattern already used on the site):

- **Nathan Mielke** — K-12 EdTech, Director of Technology Services, Milwaukee WI, student since 2016. Pull quotes: "We've been able to see real results in real time," the PowerShell-to-deployment story, flexibility vs. week-long offsite training, instructors with real-world experience, "StormWind's product is much more real-world applicable." ITIL quotes omitted.
- **IJ Rosenblum** — Director of IT, SMG Philadelphia Convention Center, student since 2016. Pull quotes: "Jack of all trades training program," more bang for our buck, cross-training Cisco and Microsoft staff from one package, live classes with real interaction, catch-up video if you miss a day, calendar-based scheduling. His certification quote is reworded to drop ITIL.

Headshots extracted from the PDFs are uploaded via the assets CLI and referenced by pointer, not committed as binaries.

**Navigation:** add "ROI & Case Studies" as a top-level item in `src/components/Navigation.tsx` (desktop + mobile) and to `src/lib/trainingLinks.ts`. Add the route to `public/sitemap.xml`.

---

## 2. Enterprise Reporting page update

`src/pages/EnterpriseReporting.tsx` keeps its hero, screenshot carousel, and fullscreen dialog. The six existing feature cards are rewritten and extended to match the actual Spectre admin tools:

- **Dashboard Overview** — total / available licenses, students assigned, total hours trained, total courses completed, plus the full searchable roster with group and status filters.
- **Add & Manage Users** — invite by name/email with license assignment and copies, batch invites up to 9,990 at a time, resend welcome email, per-student profile with license and engagement tabs.
- **Reports** — one-click Team License Report and Team Activity Report (student selection + date range), emailed to the admin.
- **Skills Assessments Data** — team-wide performance: most popular assessment, average score, total completions.
- **Due Dates** — Completed / In Progress / Overdue totals, searchable list, and assigning a due date by course + students + date.
- **Custom Learning Paths** — Active and Archived paths with course count, total hours, and enrolled students; create a path with title, description, group access, courses and assessments, save as draft or publish.

Adds a short "Spectre Platform" framing line to the page intro and a new step-by-step "How admins work in Spectre" section (Admin menu → Dashboard, Skills Assessments Data, Due Dates, Add Users, Manage Learning Paths) as a compact numbered list in existing card styling. No screenshots added from the guide unless you want them later.

---

## 3. StormAI Phishing page update

`src/pages/Phishing.tsx` keeps the hero, existing carousel, and layout. Content changes:

- **Admin capabilities** — rewrite the key-feature cards to the PDF's four: Effortless Scalability (Entra ID auto-provisioning, deploys in under 15 min, auto-scales), Tailored by Role (AD roles drive content- and app-specific lures), Adaptive Learning (difficulty tracks each user's proficiency, peer benchmarking), Seamless Reporting (three one-click exports: compliance, management, all-time).
- **Simulation types** — expand to the full seven channels: email spoofing, C-suite impersonation, sequenced reminders, phone / voice callback, Microsoft Teams external chat, replies, and QR codes.
- **Instant feedback loop** — new section: real-time coaching the moment a user interacts, clue-by-clue explanation of what they missed, and auto-assigned microlearning video for slips.
- **Admin visibility** — new section: every interaction mapped by difficulty, outcome, and user, drillable to a single event.
- **Course library** — new section listing the five tracks: Core Series (12 courses, all employees — full titles listed), Ransomware Defense (6), Email Protection (6), Executive Briefings (6), Technical Security (6, IT staff).
- **Delivered through Spectre** — short band: create groups, assign courses, department paths, assessments, linking to `/enterprise-reporting`.
- **ROI callout** — ~24 admin hours recovered per year and the 40-50% click-rate reduction benchmark, linking to the new ROI page. No dollar figures.

---

## Technical notes

- New page follows `PageLayout` + `BentoGrid`/`BentoCard` and the existing card pattern; no new tokens, no changes to `index.css`.
- Headshots: `lovable-assets create` from the parsed-document images, referenced through `.asset.json` pointers; no binaries added to the repo.
- ITIL and EC-Council remain fully absent — case study quotes are trimmed to respect that.
- Files touched: `src/pages/ROICaseStudies.tsx` (new), `src/App.tsx`, `src/components/Navigation.tsx`, `src/lib/trainingLinks.ts`, `public/sitemap.xml`, `src/pages/EnterpriseReporting.tsx`, `src/pages/Phishing.tsx`, plus asset pointers under `src/assets/`.
