-- Create analytics tables for comprehensive tracking

-- Page views table
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  url TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  user_agent TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- User sessions table
CREATE TABLE public.user_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  entry_page TEXT NOT NULL,
  exit_page TEXT,
  pages_visited INTEGER DEFAULT 1,
  total_duration INTEGER DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ended_at TIMESTAMP WITH TIME ZONE,
  device_type TEXT,
  referrer TEXT
);

-- Interaction events table
CREATE TABLE public.interaction_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_category TEXT,
  event_label TEXT,
  event_value TEXT,
  page_url TEXT NOT NULL,
  element_id TEXT,
  element_class TEXT,
  scroll_depth INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Course analytics table
CREATE TABLE public.course_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  course_name TEXT NOT NULL,
  course_category TEXT,
  action_type TEXT NOT NULL,
  page_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Chatbot analytics table
CREATE TABLE public.chatbot_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  message_count INTEGER DEFAULT 0,
  session_duration INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Form submissions table
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  form_type TEXT NOT NULL,
  page_url TEXT NOT NULL,
  success BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interaction_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chatbot_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public write access (since we're tracking anonymous users)
CREATE POLICY "Allow public insert to page_views" 
ON public.page_views 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert to user_sessions" 
ON public.user_sessions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public update to user_sessions" 
ON public.user_sessions 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public insert to interaction_events" 
ON public.interaction_events 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert to course_analytics" 
ON public.course_analytics 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert to chatbot_analytics" 
ON public.chatbot_analytics 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert to form_submissions" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policies for public read access (for dashboard)
CREATE POLICY "Allow public read access to page_views" 
ON public.page_views 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public read access to user_sessions" 
ON public.user_sessions 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public read access to interaction_events" 
ON public.interaction_events 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public read access to course_analytics" 
ON public.course_analytics 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public read access to chatbot_analytics" 
ON public.chatbot_analytics 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public read access to form_submissions" 
ON public.form_submissions 
FOR SELECT 
USING (true);

-- Create indexes for better query performance
CREATE INDEX idx_page_views_session_id ON public.page_views(session_id);
CREATE INDEX idx_page_views_created_at ON public.page_views(created_at DESC);
CREATE INDEX idx_page_views_url ON public.page_views(url);

CREATE INDEX idx_user_sessions_session_id ON public.user_sessions(session_id);
CREATE INDEX idx_user_sessions_started_at ON public.user_sessions(started_at DESC);

CREATE INDEX idx_interaction_events_session_id ON public.interaction_events(session_id);
CREATE INDEX idx_interaction_events_event_type ON public.interaction_events(event_type);
CREATE INDEX idx_interaction_events_created_at ON public.interaction_events(created_at DESC);

CREATE INDEX idx_course_analytics_course_name ON public.course_analytics(course_name);
CREATE INDEX idx_course_analytics_action_type ON public.course_analytics(action_type);
CREATE INDEX idx_course_analytics_created_at ON public.course_analytics(created_at DESC);

CREATE INDEX idx_chatbot_analytics_session_id ON public.chatbot_analytics(session_id);
CREATE INDEX idx_chatbot_analytics_created_at ON public.chatbot_analytics(created_at DESC);

CREATE INDEX idx_form_submissions_form_type ON public.form_submissions(form_type);
CREATE INDEX idx_form_submissions_created_at ON public.form_submissions(created_at DESC);