

## Remove Contact Us Page and Redirect to External URL

### Summary
Remove the Contact Us page entirely, delete the associated edge function, and redirect all "Contact Us" buttons/links to `https://stormwindstudios.com/#request-demo` (external link).

### Changes

**1. Delete files**
- `src/pages/Contact.tsx` — the contact page
- `supabase/functions/send-contact-email/index.ts` — the edge function

**2. Update `src/App.tsx`**
- Remove the `Contact` lazy import
- Remove the `/contact` route

**3. Update `src/components/Navigation.tsx`**
- Desktop (line ~127): Change `<Link to="/contact">` to `<a href="https://stormwindstudios.com/#request-demo" target="_blank" rel="noopener noreferrer">`
- Mobile (line ~260): Same change

**4. Update `src/components/Hero.tsx`**
- Line ~146: Change `<Link to="/contact">Contact Us</Link>` to `<a href="https://stormwindstudios.com/#request-demo" target="_blank" rel="noopener noreferrer">Contact Us</a>`

**5. Update `src/components/Footer.tsx`**
- Line ~24: Change the Contact Us link from `{ label: "Contact Us", to: "/contact" }` to point to the external URL

**6. Update `src/pages/NotFound.tsx`**
- Line ~10: Remove the Contact entry from the suggested links array

**7. Update `src/pages/Mentoring.tsx`**
- Line ~132: Change `<Link to="/contact">` to `<a href="https://stormwindstudios.com/#request-demo" target="_blank" rel="noopener noreferrer">`

**8. Delete the edge function deployment**
- Use the edge function delete tool to remove `send-contact-email`

### Database
No database tables are specifically associated with the contact form — `form_submissions` is a general analytics table used across the site, so it will be left intact unless you want it removed too.

