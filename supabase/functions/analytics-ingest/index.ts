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

    const { events } = await req.json();

    if (!events || !Array.isArray(events)) {
      return new Response(
        JSON.stringify({ error: 'Invalid events format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Processing ${events.length} analytics events`);

    // Process each event
    for (const event of events) {
      const { type, data } = event;

      try {
        switch (type) {
          case 'page_view':
            // Insert page view
            await supabase.from('page_views').insert(data);

            // Update or create session
            const { data: existingSession } = await supabase
              .from('user_sessions')
              .select('*')
              .eq('session_id', data.session_id)
              .single();

            if (existingSession) {
              await supabase
                .from('user_sessions')
                .update({
                  pages_visited: existingSession.pages_visited + 1,
                  exit_page: data.url,
                  ended_at: new Date().toISOString()
                })
                .eq('session_id', data.session_id);
            } else {
              await supabase.from('user_sessions').insert({
                session_id: data.session_id,
                entry_page: data.url,
                exit_page: data.url,
                device_type: data.device_type,
                referrer: data.referrer
              });
            }
            break;

          case 'interaction':
            await supabase.from('interaction_events').insert(data);
            break;

          case 'course':
            await supabase.from('course_analytics').insert(data);
            break;

          case 'form':
            await supabase.from('form_submissions').insert(data);
            break;

          case 'chatbot':
            await supabase.from('chatbot_analytics').insert(data);
            break;

          case 'session_update':
            await supabase
              .from('user_sessions')
              .update({
                exit_page: data.exit_page,
                total_duration: data.total_duration,
                ended_at: new Date().toISOString()
              })
              .eq('session_id', data.session_id);
            break;

          case 'video_watch':
            // Handle video watch analytics - aggregate by session + video
            console.log(`Processing video_watch event for video: ${data.video_id}`);
            
            const { data: existingVideo } = await supabase
              .from('video_analytics')
              .select('*')
              .eq('session_id', data.session_id)
              .eq('video_id', data.video_id)
              .maybeSingle();

            if (existingVideo) {
              // Update existing record - aggregate watch time
              const { error: updateError } = await supabase
                .from('video_analytics')
                .update({
                  watch_time_seconds: existingVideo.watch_time_seconds + (data.watch_time_seconds || 0),
                  percentage_watched: Math.max(
                    Number(existingVideo.percentage_watched) || 0, 
                    data.percentage_watched || 0
                  ),
                  completed: existingVideo.completed || data.completed,
                  play_count: existingVideo.play_count + (data.is_new_play ? 1 : 0),
                  updated_at: new Date().toISOString()
                })
                .eq('id', existingVideo.id);
              
              if (updateError) {
                console.error('Error updating video analytics:', updateError);
              } else {
                console.log(`Updated video analytics for ${data.video_id}`);
              }
            } else {
              // Insert new record
              const { error: insertError } = await supabase
                .from('video_analytics')
                .insert({
                  session_id: data.session_id,
                  video_id: data.video_id,
                  course_id: data.course_id,
                  course_name: data.course_name,
                  variant_id: data.variant_id,
                  variant_name: data.variant_name,
                  lesson_id: data.lesson_id,
                  lesson_title: data.lesson_title,
                  instructor: data.instructor,
                  watch_time_seconds: data.watch_time_seconds || 0,
                  video_duration_seconds: data.video_duration_seconds,
                  percentage_watched: data.percentage_watched || 0,
                  completed: data.completed || false,
                  play_count: 1
                });
              
              if (insertError) {
                console.error('Error inserting video analytics:', insertError);
              } else {
                console.log(`Inserted video analytics for ${data.video_id}`);
              }
            }
            break;

          default:
            console.log(`Unknown event type: ${type}`);
        }
      } catch (error) {
        console.error(`Error processing ${type} event:`, error);
      }
    }

    return new Response(
      JSON.stringify({ success: true, processed: events.length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Analytics ingest error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
