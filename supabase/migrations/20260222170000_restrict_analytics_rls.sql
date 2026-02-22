-- Restrict analytics SELECT policies to admin users only.
-- Previously these used USING (true) which exposed all analytics data publicly.
-- INSERT/UPDATE policies are left untouched (anonymous tracking is intentional).

-- page_views
DROP POLICY IF EXISTS "Allow public read access to page_views" ON public.page_views;

CREATE POLICY "admin_read_page_views" ON public.page_views
FOR SELECT USING (
  public.has_role(auth.uid(), 'admin')
);

-- user_sessions
DROP POLICY IF EXISTS "Allow public read access to user_sessions" ON public.user_sessions;

CREATE POLICY "admin_read_user_sessions" ON public.user_sessions
FOR SELECT USING (
  public.has_role(auth.uid(), 'admin')
);

-- interaction_events
DROP POLICY IF EXISTS "Allow public read access to interaction_events" ON public.interaction_events;

CREATE POLICY "admin_read_interaction_events" ON public.interaction_events
FOR SELECT USING (
  public.has_role(auth.uid(), 'admin')
);

-- course_analytics
DROP POLICY IF EXISTS "Allow public read access to course_analytics" ON public.course_analytics;

CREATE POLICY "admin_read_course_analytics" ON public.course_analytics
FOR SELECT USING (
  public.has_role(auth.uid(), 'admin')
);

-- chatbot_analytics
DROP POLICY IF EXISTS "Allow public read access to chatbot_analytics" ON public.chatbot_analytics;

CREATE POLICY "admin_read_chatbot_analytics" ON public.chatbot_analytics
FOR SELECT USING (
  public.has_role(auth.uid(), 'admin')
);

-- form_submissions
DROP POLICY IF EXISTS "Allow public read access to form_submissions" ON public.form_submissions;

CREATE POLICY "admin_read_form_submissions" ON public.form_submissions
FOR SELECT USING (
  public.has_role(auth.uid(), 'admin')
);
