DROP POLICY IF EXISTS "Allow public insert to chatbot_analytics" ON public.chatbot_analytics;
DROP POLICY IF EXISTS "Allow public read access to chatbot_analytics" ON public.chatbot_analytics;
CREATE POLICY "Only admins can view chatbot_analytics" ON public.chatbot_analytics FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Allow public insert to course_analytics" ON public.course_analytics;
DROP POLICY IF EXISTS "Allow public read access to course_analytics" ON public.course_analytics;
CREATE POLICY "Only admins can view course_analytics" ON public.course_analytics FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Allow public insert to user_sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Allow public read access to user_sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Allow public update to user_sessions" ON public.user_sessions;
CREATE POLICY "Only admins can view user_sessions" ON public.user_sessions FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Allow public access to chat messages" ON public.chat_messages;
CREATE POLICY "Only admins can view chat_messages" ON public.chat_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Allow public insert to interaction_events" ON public.interaction_events;
DROP POLICY IF EXISTS "Allow public read access to interaction_events" ON public.interaction_events;
CREATE POLICY "Only admins can view interaction_events" ON public.interaction_events FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

GRANT ALL ON public.chatbot_analytics, public.course_analytics, public.user_sessions, public.chat_messages, public.interaction_events TO service_role;