-- Drop existing public SELECT policy on page_views
DROP POLICY IF EXISTS "Allow public read access to page_views" ON public.page_views;

-- Create admin-only SELECT policy for page_views
CREATE POLICY "Only admins can view page_views" 
ON public.page_views 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'::app_role));