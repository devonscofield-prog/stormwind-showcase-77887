-- Create the video analytics table
CREATE TABLE public.video_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  video_id TEXT NOT NULL,
  course_id TEXT,
  course_name TEXT,
  variant_id TEXT,
  variant_name TEXT,
  lesson_id TEXT,
  lesson_title TEXT,
  instructor TEXT,
  watch_time_seconds INTEGER DEFAULT 0,
  video_duration_seconds INTEGER,
  percentage_watched DECIMAL(5,2) DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  play_count INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.video_analytics ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT (tracking works for all users)
CREATE POLICY "Allow public insert to video_analytics"
  ON public.video_analytics FOR INSERT
  WITH CHECK (true);

-- Allow SELECT only for admin users
CREATE POLICY "Only admins can view video analytics"
  ON public.video_analytics FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Allow UPDATE only for admin users (edge function uses service role)
CREATE POLICY "Only admins can update video analytics"
  ON public.video_analytics FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

-- Create indexes for efficient querying
CREATE INDEX idx_video_analytics_video_id ON public.video_analytics(video_id);
CREATE INDEX idx_video_analytics_created_at ON public.video_analytics(created_at);
CREATE INDEX idx_video_analytics_session_video ON public.video_analytics(session_id, video_id);