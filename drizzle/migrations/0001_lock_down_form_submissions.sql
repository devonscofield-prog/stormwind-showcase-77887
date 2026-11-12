DROP POLICY IF EXISTS "Allow public insert to form_submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Allow public read access to form_submissions" ON public.form_submissions;
CREATE POLICY "Only admins can view form_submissions" ON public.form_submissions FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
GRANT ALL ON public.form_submissions TO service_role;