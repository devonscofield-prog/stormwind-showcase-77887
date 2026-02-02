

## Plan: Add Course Links to Course Catalog

### Overview
Add clickable links to all courses in the Course Catalog page, enabling users to click on any course and be directed to the corresponding StormWind Studios course page.

### Scope Analysis

**PDF Content:**
- The PDF contains a mapping of course names to their corresponding URLs on `stormwindstudios.com`
- Only the first 50 pages were parsed (~3,400 lines of content)
- Pattern: Course links follow the format `https://stormwindstudios.com/courses/[course-slug]/`

**Current Implementation:**
- Courses are stored as strings or objects (`{ name: string; isBytes?: boolean; isComingSoon?: boolean; isWebinar?: boolean }`)
- The Courses.tsx file is ~5,000 lines with extensive course data
- Courses are displayed as text without links

### Implementation Strategy

Due to the large volume of courses (potentially thousands), this needs to be done in **phases** to ensure accuracy:

---

### Phase 1: Create URL Generation Utility

Create a utility function that converts course names to StormWind URL slugs:

```typescript
// src/lib/courseUrlUtils.ts

/**
 * Converts a course name to a StormWind Studios URL
 * Pattern: lowercase, replace spaces/special chars with hyphens
 * Example: "CompTIA Security+ (SY0-701)" → "comptia-security-sy0-701"
 */
export const getCourseUrl = (courseName: string): string => {
  const slug = courseName
    .toLowerCase()
    .replace(/[&]/g, 'and')
    .replace(/[+]/g, '')
    .replace(/[()]/g, '')
    .replace(/[:;,.']/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  return `https://stormwindstudios.com/courses/${slug}/`;
};
```

---

### Phase 2: Update Course Data Type

Extend the Course type to support optional URLs:

```typescript
type Course = string | { 
  name: string; 
  isBytes?: boolean; 
  isComingSoon?: boolean; 
  isWebinar?: boolean;
  url?: string;  // Optional explicit URL override
};
```

---

### Phase 3: Update Course Display Component

Modify the course rendering to make courses clickable:

```tsx
// Current (line ~4880-4917 in Courses.tsx)
<p className="text-xs sm:text-sm leading-snug text-foreground">
  {courseName}
</p>

// New: Wrap in anchor tag
<a 
  href={courseUrl} 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-xs sm:text-sm leading-snug text-foreground hover:text-primary transition-colors underline-offset-2 hover:underline"
>
  {courseName}
</a>
```

---

### Phase 4: Create Override Mapping for Special Cases

For courses where the auto-generated URL doesn't match, create an explicit mapping file:

```typescript
// src/lib/courseUrlOverrides.ts

export const courseUrlOverrides: Record<string, string> = {
  // Special cases where auto-generation doesn't work
  "CompTIA A+ Core 1 (220-1201)": "https://stormwindstudios.com/courses/comptia-a-core-1-220-1201-v15/",
  "CompTIA A+ Core 2 (220-1202)": "https://stormwindstudios.com/courses/comptia-a-core-2-220-1202-v15/",
  // ... more overrides as needed
};
```

---

### Phase 5: Verification Process

Since accuracy is critical, the implementation will include:

1. **Batch Processing**: Process courses in batches of ~100-200 to verify URL generation
2. **Cross-Reference**: Compare generated URLs against PDF-provided URLs
3. **Manual Override File**: Store exceptions where auto-generation fails
4. **Testing**: Use the browser tool to verify random samples of course links work correctly

---

### Technical Details

**Files to Create:**
- `src/lib/courseUrlUtils.ts` - URL generation utility
- `src/lib/courseUrlOverrides.ts` - Manual overrides for special cases

**Files to Modify:**
- `src/pages/Courses.tsx` - Update course rendering to include links

**URL Generation Logic:**
Based on PDF analysis, StormWind URLs follow this pattern:
- All lowercase
- Spaces become hyphens
- Special characters removed or converted:
  - `+` → removed
  - `&` → "and"
  - Parentheses → removed
  - Colons, commas, periods → removed
  - Multiple hyphens → single hyphen

**Example Transformations:**
| Course Name | Generated URL |
|-------------|---------------|
| "CompTIA Security+ (SY0-701)" | `/courses/comptia-security-sy0-701/` |
| "Excel 365 Advanced" | `/courses/excel-365-advanced/` |
| "ChatGPT for IT Professionals" | `/courses/chatgpt-for-it-professionals/` |
| "A Guide to Healthy Communication" | `/courses/a-guide-to-healthy-communication/` |

---

### Risk Mitigation

1. **External Links Open in New Tab**: All course links will use `target="_blank"` to preserve user's place in the catalog

2. **Fallback Behavior**: If a URL doesn't work, users can still see the course name and search for it manually

3. **Progressive Enhancement**: The catalog remains fully functional even if JavaScript fails

---

### Implementation Order

1. Create `courseUrlUtils.ts` with URL generation function
2. Create `courseUrlOverrides.ts` with known special cases from PDF
3. Update `Courses.tsx` to:
   - Import the utility functions
   - Generate URLs for each course
   - Wrap course names in anchor tags
4. Test a sample of courses to verify links work
5. Iterate on the override file as needed for edge cases

---

### Expected Outcome

- All courses in the catalog will be clickable links
- Links open in new tabs to `stormwindstudios.com/courses/[slug]/`
- Consistent hover styling indicates clickability
- Special cases are handled through the override mapping

