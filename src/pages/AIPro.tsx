import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, ExternalLink, Brain, Sparkles, GraduationCap, Code, BookOpen } from "lucide-react";
import logoImage from "@/assets/stormwind-logo.png";
import danYoung from "@/assets/dan-young.png";
import guilHernandez from "@/assets/guil-hernandez.png";

const AIPro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { technologies = [], features = [] } = location.state || {};

  useEffect(() => {
    document.title = "AI";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src={logoImage} 
            alt="StormWind Studios Logo" 
            className="h-12 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => navigate('/')}
          />
          <div className="flex gap-2">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              size="sm"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              AI Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Understanding the capabilities and potential of AI, like ChatGPT and Copilot, is crucial for staying ahead in the rapidly evolving field. Master AI tools from beginner to advanced levels with comprehensive training covering ChatGPT, prompt engineering, and Microsoft 365 Copilot.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/courses')}
                className="gap-2"
              >
                Explore Courses
              </Button>
          </div>
        </div>

          {/* AI Training Overview Section */}
          <div id="ai-overview" className="mb-32 animate-fade-in scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Master AI Tools & Technologies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    StormWind's AI Training offers comprehensive instruction on leveraging AI tools to enhance productivity and innovation. From ChatGPT fundamentals to Microsoft 365 Copilot integration, our expert-led courses provide hands-on experience with the latest AI technologies. Learn prompt engineering, AI-assisted coding, and prepare for industry certifications with interactive learning paths designed for all skill levels.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Brain className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">ChatGPT & Prompt Engineering</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Master conversational AI and prompt optimization</p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">ChatGPT Fundamentals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Advanced Prompt Engineering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Productivity Workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Content Creation with AI</span>
                      </li>
                    </ul>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full gap-2"
                      asChild
                    >
                      <a href="https://app.stormwindstudios.com/learning-path/150365/maximizing-productivity-chatgpt" target="_blank" rel="noopener noreferrer">
                        See Learning Path
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Microsoft 365 Copilot</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Integrate AI across Microsoft applications</p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Copilot in Word & Excel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Teams & Outlook Integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">PowerPoint Automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Business Productivity Tips</span>
                      </li>
                    </ul>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full gap-2"
                      asChild
                    >
                      <a href="https://app.stormwindstudios.com/learning-path/163815/work-smarter-microsoft-365-copilot" target="_blank" rel="noopener noreferrer">
                        See Learning Path
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">AI Fundamentals & Certifications</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Prepare for industry certifications</p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Azure AI-900 Certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">AWS AI Practitioner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Machine Learning Basics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Computer Vision & NLP</span>
                      </li>
                    </ul>
                    <p className="text-xs text-muted-foreground/80 italic border-t border-border pt-3">
                      Only Included in Enterprise IT License
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">AI Coding</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Leverage AI to accelerate development</p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Learn to Code with AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Claude Code, Codex & Copilot</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">AI-Assisted Debugging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Prompt Engineering for Devs</span>
                      </li>
                    </ul>
                    <p className="text-xs text-muted-foreground/80 italic border-t border-border pt-3">
                      Only Included in Enterprise IT License
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Interactive Learning Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Expert-led training from industry professionals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">1:1 mentoring sessions available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Bytes format for flexible pacing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Hands-on practical exercises</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Real-world use case scenarios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Certification preparation materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">On-demand access to all content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Progress tracking and assessments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIPro;
