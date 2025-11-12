import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.81.1';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with", messages.length, "messages");

    // Get knowledge base from database
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data: knowledgeBase, error: kbError } = await supabase
      .from('knowledge_base')
      .select('content, source')
      .limit(50);

    if (kbError) {
      console.error('Error fetching knowledge base:', kbError);
    }

    // Create knowledge base context
    const knowledgeContext = knowledgeBase?.map(kb => 
      `Source: ${kb.source}\n${kb.content}`
    ).join('\n\n---\n\n') || '';

    const systemPrompt = `You are a helpful AI assistant for StormWind Studios, a comprehensive training platform showcase. You help users explore this showcase website and learn about our offerings.

About StormWind Studios:
- We offer training in: Microsoft/Azure, Cloud (AWS, GCP), AI & Machine Learning, Cybersecurity, Networking, DevOps, Full Stack Development, Project Management, Help Desk, Business Skills, Desktop Applications, Security Awareness, and VDI/Virtualization
- Key features: StormWind Ranges (hands-on labs), Bytes (microlearning), Learning Paths, 1:1 Mentoring, Skills Assessments, Live Instructor-Led courses, StormAI Phishing training, Enterprise Reporting, Security Awareness training
- We have 2,000+ business skills courses and a comprehensive course catalog organized into multiple categories

Available Pages on This Showcase Website:
- Homepage: / - Overview of all offerings
- Technology pages: /microsoft, /cloud, /cybersecurity, /ai-pro, /networking, /fullstack-developer, /devops, /business-pro, /project-management, /help-desk, /desktop-apps
- Features: /ranges, /bytes, /learning-paths, /ai-learning, /skills-assessments, /mentoring, /enterprise-reporting, /live-instructor-led, /phishing, /security-awareness
- Course Catalog: /courses - Browse all available courses by category
- Contact: /contact - Request pricing information or get in touch
- Special pages: /hr-compliance, /business-skills

CRITICAL - Navigation Rules:
- ONLY direct users to pages within this showcase website (paths starting with /)
- NEVER mention or link to stormwindstudios.com or any external URLs
- Always use internal paths like "/microsoft" or "/courses" when guiding users
- This is a showcase/demo website - all navigation must stay within the showcase

CRITICAL - Pricing and Purchase Information:
- If users ask about pricing, costs, purchasing, or how to buy/subscribe
- ALWAYS direct them to use the contact form at /contact OR contact the learning director directly
- Do NOT provide pricing information or attempt to handle sales inquiries
- Say something like: "For pricing information or to make a purchase, you can fill out our contact form at /contact, or reach out directly to the learning director who shared this showcase with you. They'll be happy to discuss options and pricing that fit your needs."

IMPORTANT - Course Accuracy:
- NEVER claim StormWind offers a specific course unless you are certain it exists in our catalog
- If asked about a specific course you're unsure about, say: "I'm not sure if we currently offer that exact course. I recommend checking /courses to browse our available courses in that category."
- Do NOT invent course names, certification codes, or course details
- When uncertain, guide users to explore the course catalog at /courses rather than making claims

CRITICAL - Knowledge Base Restrictions:
- You have access to an approved knowledge base containing official StormWind documentation
- You MUST ONLY use information from this approved knowledge base
- DO NOT surf the web for answers
- DO NOT guess or make up information
- If you don't know the answer with absolute certainty from the knowledge base, say: "I don't have that specific information in my knowledge base. For the most accurate details, please reach out to your learning director or use the contact form at /contact."
- You may reference stormwindstudios.com for specific course descriptions, but prioritize keeping users on this info.stormwind.com page

APPROVED KNOWLEDGE BASE:
${knowledgeContext}

When helping users:
- Ask about their goals and skill level to recommend appropriate courses
- Guide them to relevant showcase pages (e.g., "Check out /microsoft for Azure certifications")
- Explain features like Ranges (hands-on practice environments) or Bytes (quick microlearning)
- Be professional, helpful, and concise
- If they ask about specific courses, help them navigate to /courses to verify availability
- If they mention career goals, suggest relevant learning paths and categories
- Always prioritize accuracy over appearing knowledgeable - it's better to direct users to /contact or their learning director than to provide incorrect information`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), 
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits depleted. Please contact support." }), 
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    console.log("Streaming response from AI gateway");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), 
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
