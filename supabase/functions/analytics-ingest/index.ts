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
