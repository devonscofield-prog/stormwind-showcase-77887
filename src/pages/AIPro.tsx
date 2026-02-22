import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, GraduationCap, Code, BookOpen, FlaskConical } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";

const AIPro = () => {
  useEffect(() => {
    document.title = "AI";
  }, []);

  return (
    <PageLayout
      title="AI Training"
      description="Understanding the capabilities and potential of AI, like ChatGPT and Copilot, is crucial for staying ahead in the rapidly evolving field. Master AI tools from beginner to advanced levels with comprehensive training covering ChatGPT, prompt engineering, and Microsoft 365 Copilot."
      breadcrumbs={[{ label: "AI Training" }]}
      heroActions={
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/courses">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/training-samples">
              <FlaskConical className="mr-2 h-5 w-5" />
              Try Training Samples
            </Link>
          </Button>
        </div>
      }
    >
      {/* AI Training Overview Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Master AI Tools & Technologies</h3>
            <p className="text-muted-foreground leading-relaxed">
              StormWind's AI Training offers comprehensive instruction on leveraging AI tools to enhance productivity and innovation. From ChatGPT fundamentals to Microsoft 365 Copilot integration, our expert-led courses provide hands-on experience with the latest AI technologies.
            </p>
          </div>

          <BentoGrid columns={4} className="mb-8">
            <BentoCard icon={Brain} title="ChatGPT & Prompt Engineering" description="Master conversational AI, prompt optimization, and productivity workflows." />
            <BentoCard icon={Sparkles} title="Microsoft 365 Copilot" description="Integrate AI across Word, Excel, Teams, Outlook, and PowerPoint." />
            <BentoCard icon={GraduationCap} title="AI Fundamentals" description="Azure AI-900, AWS AI Practitioner, ML basics, and NLP. (Enterprise IT only)" />
            <BentoCard icon={Code} title="AI Coding" description="Claude Code, Codex, Copilot, and AI-assisted debugging. (Enterprise IT only)" />
          </BentoGrid>

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
    </PageLayout>
  );
};

export default AIPro;
