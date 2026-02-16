
## Remove All External Links from Course Catalog

### What Changes
All courses on the Course Catalog page will be rendered as plain text items -- no clickable links to external sites. This eliminates the 404 errors caused by broken/unverified URLs.

### Technical Details

**File: `src/pages/Courses.tsx`**

1. **Remove unused imports** (lines 4, 7):
   - Remove `ExternalLink` from lucide-react import
   - Remove `getVerifiedCourseUrl` import from `@/lib/courseUrlUtils`

2. **Simplify the course rendering logic** (lines 4881-4962):
   - Remove the `courseUrl` variable and the `if (courseUrl)` branch that renders courses as `<a>` tags with external links
   - Keep only the plain text rendering (the current "unverified" path), which displays each course as a styled `<div>` with a bullet point, course name, and optional Bytes/Webinar/Coming Soon badges
   - All courses will use the same consistent, non-clickable styling

This is a straightforward change -- the "unverified course" rendering block (lines 4930-4962) already has the exact styling needed. We just remove the link variant above it.
