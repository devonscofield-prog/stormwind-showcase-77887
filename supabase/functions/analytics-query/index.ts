import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { queryType, startDate, endDate, limit = 100 } = await req.json();

    const start = startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const end = endDate || new Date().toISOString();

    console.log(`Analytics query: ${queryType} from ${start} to ${end}`);

    let result;

    switch (queryType) {
      case 'overview':
        // Get overview metrics
        const [pageViewsData, sessionsData, eventsData] = await Promise.all([
          supabase
            .from('page_views')
            .select('*', { count: 'exact' })
            .gte('created_at', start)
            .lte('created_at', end),
          supabase
            .from('user_sessions')
            .select('*')
            .gte('started_at', start)
            .lte('started_at', end),
          supabase
            .from('interaction_events')
            .select('*', { count: 'exact' })
            .gte('created_at', start)
            .lte('created_at', end)
        ]);

        const totalPageViews = pageViewsData.count || 0;
        const sessionsList = sessionsData.data || [];
        const totalSessions = sessionsList.length;
        const avgSessionDuration = sessionsList.length > 0
          ? sessionsList.reduce((acc, s) => acc + (s.total_duration || 0), 0) / sessionsList.length
          : 0;
        const avgPagesPerSession = sessionsList.length > 0
          ? sessionsList.reduce((acc, s) => acc + (s.pages_visited || 0), 0) / sessionsList.length
          : 0;

        result = {
          totalPageViews,
          totalSessions,
          avgSessionDuration: Math.round(avgSessionDuration),
          avgPagesPerSession: parseFloat(avgPagesPerSession.toFixed(2)),
          totalInteractions: eventsData.count || 0
        };
        break;

      case 'top_pages':
        const { data: topPages } = await supabase
          .from('page_views')
          .select('url, page_title')
          .gte('created_at', start)
          .lte('created_at', end)
          .limit(50000);

        const pageCounts = (topPages || []).reduce((acc: any, page) => {
          const key = page.url;
          acc[key] = (acc[key] || 0) + 1;
          return acc;
        }, {});

        result = Object.entries(pageCounts)
          .map(([url, count]) => ({ url, count }))
          .sort((a: any, b: any) => b.count - a.count)
          .slice(0, limit);
        break;

      case 'traffic_sources':
        const { data: trafficSessions } = await supabase
          .from('user_sessions')
          .select('referrer')
          .gte('started_at', start)
          .lte('started_at', end)
          .limit(50000);

        const sources = (trafficSessions || []).reduce((acc: any, session) => {
          const source = session.referrer || 'Direct';
          acc[source] = (acc[source] || 0) + 1;
          return acc;
        }, {});

        result = Object.entries(sources)
          .map(([source, count]) => ({ source, count }))
          .sort((a: any, b: any) => b.count - a.count);
        break;

      case 'device_breakdown':
        const { data: deviceData } = await supabase
          .from('page_views')
          .select('device_type')
          .gte('created_at', start)
          .lte('created_at', end)
          .limit(50000);

        const devices = (deviceData || []).reduce((acc: any, item) => {
          const device = item.device_type || 'Unknown';
          acc[device] = (acc[device] || 0) + 1;
          return acc;
        }, {});

        result = Object.entries(devices)
          .map(([device, count]) => ({ device, count }));
        break;

      case 'popular_courses':
        const { data: courseData } = await supabase
          .from('course_analytics')
          .select('course_name, action_type')
          .gte('created_at', start)
          .lte('created_at', end);

        const courses = (courseData || []).reduce((acc: any, item) => {
          if (!acc[item.course_name]) {
            acc[item.course_name] = { views: 0, clicks: 0 };
          }
          if (item.action_type === 'view') acc[item.course_name].views++;
          if (item.action_type === 'click') acc[item.course_name].clicks++;
          return acc;
        }, {});

        result = Object.entries(courses)
          .map(([course, stats]: [string, any]) => ({
            course,
            views: stats.views,
            clicks: stats.clicks
          }))
          .sort((a, b) => b.views - a.views)
          .slice(0, limit);
        break;

      case 'page_views_timeline':
        const { data: timelineData } = await supabase
          .from('page_views')
          .select('created_at')
          .gte('created_at', start)
          .lte('created_at', end)
          .order('created_at')
          .limit(50000);

        // Group by day
        const dailyCounts = (timelineData || []).reduce((acc: any, item) => {
          const date = new Date(item.created_at).toISOString().split('T')[0];
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        // Generate complete date range with zeros for missing days
        const startDay = new Date(start);
        startDay.setUTCHours(0, 0, 0, 0);
        const endDay = new Date(end);
        endDay.setUTCHours(0, 0, 0, 0);
        const allDates: { date: string; count: number }[] = [];
        
        for (let d = new Date(startDay); d <= endDay; d.setUTCDate(d.getUTCDate() + 1)) {
          const dateStr = d.toISOString().split('T')[0];
          allDates.push({
            date: dateStr,
            count: dailyCounts[dateStr] || 0
          });
        }

        result = allDates;
        break;

      case 'top_interactions':
        const { data: interactionData } = await supabase
          .from('interaction_events')
          .select('event_type, event_label')
          .gte('created_at', start)
          .lte('created_at', end)
          .limit(50000);

        const interactions = (interactionData || []).reduce((acc: any, item) => {
          const key = `${item.event_type}:${item.event_label || 'unlabeled'}`;
          acc[key] = (acc[key] || 0) + 1;
          return acc;
        }, {});

        result = Object.entries(interactions)
          .map(([interaction, count]) => ({ interaction, count }))
          .sort((a: any, b: any) => b.count - a.count)
          .slice(0, limit);
        break;

      // Video Analytics Queries
      case 'video_analytics_overview':
        const { data: videoOverviewData } = await supabase
          .from('video_analytics')
          .select('*')
          .gte('created_at', start)
          .lte('created_at', end)
          .limit(50000);

        const videoList = videoOverviewData || [];
        const totalWatchTime = videoList.reduce((acc, v) => acc + (v.watch_time_seconds || 0), 0);
        const totalCompletions = videoList.filter(v => v.completed).length;
        const totalPlays = videoList.reduce((acc, v) => acc + (v.play_count || 0), 0);
        const avgWatchTime = videoList.length > 0 ? totalWatchTime / videoList.length : 0;
        const avgCompletion = videoList.length > 0
          ? videoList.reduce((acc, v) => acc + (Number(v.percentage_watched) || 0), 0) / videoList.length
          : 0;

        result = {
          totalWatchTime,
          totalCompletions,
          totalPlays,
          uniqueVideosWatched: new Set(videoList.map(v => v.video_id)).size,
          avgWatchTimePerSession: Math.round(avgWatchTime),
          avgCompletionRate: parseFloat(avgCompletion.toFixed(1))
        };
        break;

      case 'most_watched_videos':
        const { data: watchedVideosData } = await supabase
          .from('video_analytics')
          .select('*')
          .gte('created_at', start)
          .lte('created_at', end)
          .limit(50000);

        // Aggregate by video_id
        const videoStats = (watchedVideosData || []).reduce((acc: any, item) => {
          if (!acc[item.video_id]) {
            acc[item.video_id] = {
              video_id: item.video_id,
              lesson_title: item.lesson_title,
              course_name: item.course_name,
              variant_name: item.variant_name,
              instructor: item.instructor,
              total_watch_time: 0,
              total_plays: 0,
              completions: 0,
              avg_percentage: 0,
              percentages: []
            };
          }
          acc[item.video_id].total_watch_time += item.watch_time_seconds || 0;
          acc[item.video_id].total_plays += item.play_count || 0;
          if (item.completed) acc[item.video_id].completions++;
          acc[item.video_id].percentages.push(Number(item.percentage_watched) || 0);
          return acc;
        }, {});

        // Calculate averages and format
        result = Object.values(videoStats)
          .map((v: any) => ({
            video_id: v.video_id,
            lesson_title: v.lesson_title || 'Unknown',
            course_name: v.course_name || 'Unknown',
            variant_name: v.variant_name,
            instructor: v.instructor,
            total_watch_time: v.total_watch_time,
            total_plays: v.total_plays,
            completions: v.completions,
            avg_percentage: v.percentages.length > 0
              ? Math.round(v.percentages.reduce((a: number, b: number) => a + b, 0) / v.percentages.length)
              : 0
          }))
          .sort((a: any, b: any) => b.total_watch_time - a.total_watch_time)
          .slice(0, limit);
        break;

      case 'video_completions_by_course':
        const { data: courseCompletionsData } = await supabase
          .from('video_analytics')
          .select('course_name, completed, percentage_watched')
          .gte('created_at', start)
          .lte('created_at', end)
          .limit(50000);

        const courseCompletions = (courseCompletionsData || []).reduce((acc: any, item) => {
          const courseName = item.course_name || 'Unknown';
          if (!acc[courseName]) {
            acc[courseName] = { total: 0, completed: 0, percentages: [] };
          }
          acc[courseName].total++;
          if (item.completed) acc[courseName].completed++;
          acc[courseName].percentages.push(Number(item.percentage_watched) || 0);
          return acc;
        }, {});

        result = Object.entries(courseCompletions)
          .map(([course, stats]: [string, any]) => ({
            course,
            total_views: stats.total,
            completions: stats.completed,
            completion_rate: stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0,
            avg_percentage: stats.percentages.length > 0
              ? Math.round(stats.percentages.reduce((a: number, b: number) => a + b, 0) / stats.percentages.length)
              : 0
          }))
          .sort((a, b) => b.total_views - a.total_views)
          .slice(0, limit);
        break;

      case 'video_watch_timeline':
        const { data: videoTimelineData } = await supabase
          .from('video_analytics')
          .select('created_at, watch_time_seconds')
          .gte('created_at', start)
          .lte('created_at', end)
          .order('created_at')
          .limit(50000);

        // Group by day
        const dailyVideoStats = (videoTimelineData || []).reduce((acc: any, item) => {
          const date = new Date(item.created_at).toISOString().split('T')[0];
          if (!acc[date]) {
            acc[date] = { plays: 0, watch_time: 0 };
          }
          acc[date].plays++;
          acc[date].watch_time += item.watch_time_seconds || 0;
          return acc;
        }, {});

        // Generate complete date range with zeros for missing days
        const videoStartDay = new Date(start);
        videoStartDay.setUTCHours(0, 0, 0, 0);
        const videoEndDay = new Date(end);
        videoEndDay.setUTCHours(0, 0, 0, 0);
        const allVideoDates: { date: string; plays: number; watch_time: number }[] = [];
        
        for (let d = new Date(videoStartDay); d <= videoEndDay; d.setUTCDate(d.getUTCDate() + 1)) {
          const dateStr = d.toISOString().split('T')[0];
          const stats = dailyVideoStats[dateStr] || { plays: 0, watch_time: 0 };
          allVideoDates.push({
            date: dateStr,
            plays: stats.plays,
            watch_time: stats.watch_time
          });
        }

        result = allVideoDates;
        break;

      default:
        return new Response(
          JSON.stringify({ error: 'Invalid query type' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    return new Response(
      JSON.stringify({ success: true, data: result }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Analytics query error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
