import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Database, Sparkles, BookOpen, FlaskConical, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const topics = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Build beautiful, responsive user interfaces.",
    items: [
      "React, Vue.js, Angular",
      "HTML5, CSS3, JavaScript/TypeScript",
      "Tailwind CSS, Bootstrap, Material UI",
      "Responsive & Mobile Design",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Build secure, scalable server systems.",
    items: [
      "Node.js, Python, Java, C#",
      "RESTful APIs & GraphQL",
      "MongoDB, MySQL, PostgreSQL",
      "Authentication & Authorization",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Coding",
    description: "Leverage AI to accelerate development.",
    items: [
      "AI-Assisted Code Generation",
      "Prompt Engineering for Developers",
      "AI Debugging & Code Review",
      "Claude Code, Codex, and Copilot",
    ],
  },
];

const interactiveFeatures = [
  "1:1 mentorship",
  "130+ comprehensive coding classes",
  "900+ Secure Coding laboratory exercises",
  "Built-in Integrated Development Environment (IDE)",
  "Project-based learning approach",
  "Real-time code feedback",
];

const FullStackDeveloper = () => {
  useEffect(() => {
    document.title = "Full Stack Developer";
  }, []);

  return (
    <div className="fs-scope">
      <PageLayout
        title="Full Stack Developer Training"
        description=""
        breadcrumbs={[{ label: "Full Stack Developer" }]}
        hideHero
        backgroundClassName="bg-fs-console"
      >
        {/* Hero */}
        <section className="relative z-10 mb-24 animate-fade-in">
          <div className="grid gap-12 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Full Stack Developer
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                <span className="block text-foreground">Full Stack Developer</span>
                <span className="block text-gradient-brand pb-2">Training</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The perfect solution for your team's developers to learn how to build secure and
                effective applications. With over 1500 hours of training from industry experts,
                extensive coverage of coding languages and frameworks, and interactive development
                experiences.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-lg">
                  <Link to="/courses">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Courses
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-lg bg-background/60 backdrop-blur"
                >
                  <Link to="/training-samples">
                    <FlaskConical className="mr-2 h-5 w-5" />
                    Try Training Samples
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stat card */}
            <div className="rounded-2xl border border-border/60 bg-card/70 p-8 shadow-[0_20px_60px_-30px_hsl(var(--foreground)/0.45)]">
              <div className="grid grid-cols-2 gap-y-6">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-foreground">1:1</div>
                  <div className="mt-1 text-sm text-muted-foreground">mentorship</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight text-foreground">900+</div>
                  <div className="mt-1 text-sm text-muted-foreground">Secure Coding labs</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3 border-t border-border/60 pt-6">
                {[
                  "130+ comprehensive coding classes",
                  "Built-in Integrated Development Environment (IDE)",
                  "Project-based learning approach",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section id="topics" className="relative z-10 mb-28 scroll-mt-28">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            01 — Topics
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            Master Full Stack Development
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            StormWind's Full Stack Developer Training offers security-centric software development
            training with over 1500 hours of content from industry experts. Learn to build complete
            web applications from frontend to backend with modern frameworks, secure coding
            practices, and interactive development environments.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="group rounded-2xl border border-border/60 bg-card/70 p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                  <topic.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold tracking-tight">{topic.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                <ul className="mt-5 space-y-2 border-t border-border/60 pt-5 text-sm">
                  {topic.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Learning Features */}
        <section id="features" className="relative z-10 mb-28 scroll-mt-28">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            02 — Interactive Learning Features
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            Interactive Learning Features
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interactiveFeatures.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/70 p-5 text-sm transition-all duration-200 hover:border-primary/50"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground/85">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related Topics */}
        <section className="relative z-10 mt-24 border-t border-border/60 pt-12">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/devops">DevOps</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/cybersecurity">Cybersecurity</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/cloud">Cloud</Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default FullStackDeveloper;
