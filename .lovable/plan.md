
## Plan: Cross-Reference and Validate All Course Links

### Overview
Audit every course link in the Course Catalog against the PDF mapping to ensure 100% accuracy. For courses without verified URLs, links will be disabled.

### Scope of Work

**Current State:**
- ~5,000 lines of courses in `Courses.tsx` (potentially 2,000+ individual courses)
- ~150 manual URL overrides in `courseUrlOverrides.ts`
- Auto-generation function that converts course names to URL slugs

**PDF Data (First 50 Pages):**
- Contains course-to-URL mappings for hundreds of courses
- Some entries show explicit URLs, others show only "Link" placeholder
- Only first 50 pages were parsed (~3,400 lines) - document likely has more pages

---

### Implementation Strategy

#### Phase 1: Build Complete URL Mapping from PDF

Extract all explicit URL mappings from the PDF. Examples found:

| Course Name (PDF) | URL |
|-------------------|-----|
| `Accelerating Front End Development With Chatgpt` | `https://stormwindstudios.com/courses/accelerating-front-end-development-with-chatgpt/` |
| `CompTIA A Core 1 220 1201 V15` | `https://stormwindstudios.com/courses/comptia-a-core-1-220-1201-v15/` |
| `Certified Kubernetes Administrator Cka` | `https://stormwindstudios.com/courses/certified-kubernetes-administrator-cka/` |

**Key findings from PDF analysis:**
- URL slugs use lowercase with hyphens
- Numbers are preserved (e.g., `220-1201`)
- Version numbers are included (e.g., `-v15`)
- Special characters removed

#### Phase 2: Create Safe URL Lookup Utility

Modify the URL generation system to:
1. Only return URLs for courses with **verified mappings**
2. Return `null` for courses without verified URLs
3. Remove guesswork from the slug generation

**New Utility Function:**
```typescript
// Returns URL if verified, null if unknown
export const getVerifiedCourseUrl = (courseName: string): string | null => {
  // Check exact match in verified mappings
  if (verifiedCourseUrls[courseName]) {
    return verifiedCourseUrls[courseName];
  }
  
  // Check normalized match
  const normalized = normalizeName(courseName);
  if (verifiedCourseUrls[normalized]) {
    return verifiedCourseUrls[normalized];
  }
  
  // No verified URL - don't guess
  return null;
};
```

#### Phase 3: Update Course Rendering

Modify `Courses.tsx` to handle nullable URLs:

```tsx
// Current
const courseUrl = getCourseUrl(courseName);
return (
  <a href={courseUrl} target="_blank" ...>
    {courseName}
  </a>
);

// New
const courseUrl = getVerifiedCourseUrl(courseName);
return courseUrl ? (
  <a href={courseUrl} target="_blank" ...>
    {courseName}
  </a>
) : (
  <span className="text-foreground">
    {courseName}
  </span>
);
```

#### Phase 4: Build Verified URL Database

Create a comprehensive mapping file from the PDF data. This will be a phased process:

**Batch 1: Courses A-C** (~300 courses verified)
**Batch 2: Courses D-H** (~300 courses verified)  
**Batch 3: Courses I-M** (~300 courses verified)
**Batch 4: Courses N-R** (~300 courses verified)
**Batch 5: Courses S-Z** (~300 courses verified)

Each batch will:
1. Match PDF course names to catalog course names
2. Handle variations in naming (e.g., colons, parentheses)
3. Add verified mappings to the overrides file

---

### Technical Details

**Files to Modify:**

| File | Changes |
|------|---------|
| `src/lib/courseUrlUtils.ts` | Add `getVerifiedCourseUrl()` function that returns `null` for unverified courses |
| `src/lib/courseUrlOverrides.ts` | Expand from ~150 to ~1,500+ verified mappings |
| `src/pages/Courses.tsx` | Update to handle nullable URLs - show plain text for unverified courses |

**Name Normalization Rules:**
- Convert to lowercase
- Remove colons, semicolons, periods, apostrophes
- Replace `&` with `and`
- Remove `+` symbols
- Remove parentheses
- Collapse multiple spaces/hyphens

**Example Mappings from PDF:**

```typescript
export const courseUrlOverrides: Record<string, string> = {
  // Existing mappings...
  
  // New verified mappings from PDF
  "Accelerating Front End Development With ChatGPT": "https://stormwindstudios.com/courses/accelerating-front-end-development-with-chatgpt/",
  "Access 2019 Advanced": "https://stormwindstudios.com/courses/access-2019-advanced/",
  "Access 2019 Beginner": "https://stormwindstudios.com/courses/access-2019-beginner/",
  "Access 365 Advanced": "https://stormwindstudios.com/courses/access-365-advanced/",
  "Account Management: Establishing Lasting Partnerships": "https://stormwindstudios.com/courses/account-management-establishing-lasting-partnerships/",
  // ... hundreds more
};
```

---

### Quality Assurance

**Verification Process:**
1. For each course in catalog, check against PDF mapping
2. If exact match found → use PDF URL
3. If normalized match found → use PDF URL  
4. If no match → disable link (render as plain text)

**Testing:**
- Sample 50 random courses to verify links work
- Check for 404s by testing against live site
- Ensure all PDF URLs are captured correctly

---

### Expected Outcome

| Metric | Before | After |
|--------|--------|-------|
| Courses with links | ~2000 (all) | Only verified (~1500+) |
| Incorrect links | Unknown | 0 |
| Missing links | 0 | ~500 (unverified courses show as plain text) |

---

### Implementation Order

1. **Update `courseUrlUtils.ts`** - Add verification layer
2. **Update `Courses.tsx`** - Handle null URLs gracefully  
3. **Expand `courseUrlOverrides.ts`** - Add all verified mappings from PDF in batches
4. **Test** - Verify random sample of courses link correctly

---

### Important Notes

- The PDF only contains first 50 pages, so some courses may not have verified URLs
- Courses without verified URLs will display as plain text (no link)
- This approach prioritizes accuracy over completeness
- Future PDFs can be used to add more verified mappings
