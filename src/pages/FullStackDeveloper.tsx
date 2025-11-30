import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Database, Sparkles, BookOpen } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const FullStackDeveloper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Full Stack Developer";
  }, []);

  return (
    <PageLayout
      title="Full Stack Developer Package"
      description="The perfect solution for your team's developers to learn how to build secure and effective applications. With over 1500 hours of training from industry experts, extensive coverage of coding languages and frameworks, and interactive development experiences."
      breadcrumbs={[{ label: "Full Stack Developer" }]}
      heroActions={
        <Button size="lg" onClick={() => navigate('/courses?category=Full Stack Developer')} className="gap-2">
          Explore Courses
        </Button>
      }
    >
      {/* Full Stack Developer Overview Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Master Full Stack Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                StormWind's Developer Package offers security-centric software development training with over 1500 hours of content from industry experts. Learn to build complete web applications from frontend to backend with modern frameworks, secure coding practices, and interactive development environments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Frontend Development</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Build beautiful, responsive user interfaces</p>
                <ul className="space-y-2 text-sm mb-4">
                  {["React, Vue.js, Angular", "HTML5, CSS3, JavaScript/TypeScript", "Tailwind CSS, Bootstrap, Material UI", "Responsive & Mobile Design"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Backend Development</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Build secure, scalable server systems</p>
                <ul className="space-y-2 text-sm">
                  {["Node.js, Python, Java, C#", "RESTful APIs & GraphQL", "MongoDB, MySQL, PostgreSQL", "Authentication & Authorization"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">AI Coding</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Leverage AI to accelerate development</p>
                <ul className="space-y-2 text-sm">
                  {["AI-Assisted Code Generation", "Prompt Engineering for Developers", "AI Debugging & Code Review", "Learning to Code with Claude Code, Codex, and Copilot"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
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
                  {["Over 1500 hours of expert training", "130+ comprehensive coding classes", "950+ hands-on laboratory exercises"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm">
                  {["Capture the Flag security challenges", "Project-based learning approach", "Real-time code feedback", "Portfolio-ready projects"].map((item, i) => (
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

export default FullStackDeveloper;
