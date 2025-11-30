import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, GraduationCap, Code, BookOpen } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const AIPro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "AI";
  }, []);

  return (
    <PageLayout
      title="AI Training"
      description="Understanding the capabilities and potential of AI, like ChatGPT and Copilot, is crucial for staying ahead in the rapidly evolving field. Master AI tools from beginner to advanced levels with comprehensive training covering ChatGPT, prompt engineering, and Microsoft 365 Copilot."
      breadcrumbs={[{ label: "AI Training" }]}
      heroActions={
        <Button size="lg" onClick={() => navigate('/courses?category=AI')} className="gap-2">
          Explore Courses
        </Button>
      }
    >
      {/* AI Training Overview Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Master AI Tools & Technologies</h3>
              <p className="text-muted-foreground leading-relaxed">
                StormWind's AI Training offers comprehensive instruction on leveraging AI tools to enhance productivity and innovation. From ChatGPT fundamentals to Microsoft 365 Copilot integration, our expert-led courses provide hands-on experience with the latest AI technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Brain, title: "ChatGPT & Prompt Engineering", desc: "Master conversational AI and prompt optimization", items: ["ChatGPT Fundamentals", "Advanced Prompt Engineering", "Productivity Workflows", "Content Creation with AI"] },
                { icon: Sparkles, title: "Microsoft 365 Copilot", desc: "Integrate AI across Microsoft applications", items: ["Copilot in Word & Excel", "Teams & Outlook Integration", "PowerPoint Automation", "Business Productivity Tips"] },
                { icon: GraduationCap, title: "AI Fundamentals & Certifications", desc: "Prepare for industry certifications", items: ["Azure AI-900 Certification", "AWS AI Practitioner", "Machine Learning Basics", "Computer Vision & NLP"], note: "Only Included in Enterprise IT License" },
                { icon: Code, title: "AI Coding", desc: "Leverage AI to accelerate development", items: ["Learn to Code with AI", "Claude Code, Codex & Copilot", "AI-Assisted Debugging", "Prompt Engineering for Devs"], note: "Only Included in Enterprise IT License" },
              ].map((card, i) => (
                <div key={i} className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <card.icon className="w-8 h-8 text-primary" />
                    <h4 className="text-xl font-bold">{card.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                  <ul className="space-y-2 text-sm mb-4">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {card.note && (
                    <p className="text-xs text-muted-foreground/80 italic border-t border-border pt-3">{card.note}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Interactive Learning Features
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  {["Expert-led training from industry professionals", "1:1 mentoring sessions available", "Bytes format for flexible pacing", "Hands-on practical exercises"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm">
                  {["Real-world use case scenarios", "Certification preparation materials", "On-demand access to all content", "Progress tracking and assessments"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AIPro;
