import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Code, Database, Layers, Sparkles, BookOpen, PlayCircle, ExternalLink } from "lucide-react";
import logoImage from "@/assets/stormwind-logo.png";

const FullStackDeveloper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  useEffect(() => {
    document.title = "Full Stack Developer";
  }, []);

  const categories = [{
    id: "fullstack-overview",
    icon: Layers,
    title: "Full Stack Developer Overview",
    description: "Comprehensive training from frontend to backend development",
    color: "text-blue-500"
  }, {
    id: "key-technologies",
    icon: Code,
    title: "Key Technologies",
    description: "Master modern frameworks and programming languages",
    color: "text-primary"
  }, {
    id: "dev-environments",
    icon: PlayCircle,
    title: "Development Environments",
    description: "Interactive and secure coding experiences",
    color: "text-green-500"
  }, {
    id: "ai-coding",
    icon: Sparkles,
    title: "AI Coding",
    description: "Leverage AI to accelerate your development workflow",
    color: "text-purple-500"
  }];

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
              Full Stack Developer Package
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              The perfect solution for your team's developers to learn how to build secure and effective applications. With over 1500 hours of training from industry experts, extensive coverage of coding languages and frameworks, and interactive development experiences.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/courses')}
                className="gap-2"
              >
                Explore Courses
              </Button>
            </div>
          </div>


          {/* Full Stack Developer Overview Section */}
          <div id="fullstack-overview" className="mb-32 animate-fade-in scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Master Full Stack Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    StormWind's Developer Package offers security-centric software development training with over 1500 hours of content from industry experts. Learn to build complete web applications from frontend to backend with modern frameworks, secure coding practices, and interactive development environments. Master essential technologies like React, Node.js, Python, Java, C#, and databases while gaining hands-on experience through 950+ laboratory exercises.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Frontend Development</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Build beautiful, responsive user interfaces</p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">React, Vue.js, Angular</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">HTML5, CSS3, JavaScript/TypeScript</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Tailwind CSS, Bootstrap, Material UI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Responsive & Mobile Design</span>
                      </li>
                    </ul>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => window.open('https://app.stormwindstudios.com/scrimba/85411/adding-button', '_blank')}
                    >
                      Fully Interactive IDE
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Backend Development</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Build secure, scalable server systems</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Node.js, Python, Java, C#</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">RESTful APIs & GraphQL</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">MongoDB, MySQL, PostgreSQL</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Authentication & Authorization</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">AI Coding</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Leverage AI to accelerate development</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">AI-Assisted Code Generation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Prompt Engineering for Developers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">AI Debugging & Code Review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Learning to Code with Claude Code, Codex, and Copilot</span>
                      </li>
                    </ul>
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
                        <span className="text-muted-foreground">Over 1500 hours of expert training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">130+ comprehensive coding classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">950+ hands-on laboratory exercises</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Capture the Flag security challenges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Project-based learning approach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Real-time code feedback</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Portfolio-ready projects</span>
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

export default FullStackDeveloper;