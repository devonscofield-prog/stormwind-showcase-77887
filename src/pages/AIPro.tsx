import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Sparkles,
  GraduationCap,
  Code,
  BookOpen,
  FlaskConical,
  MessagesSquare,
  FileSearch,
  Workflow,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { cn } from "@/lib/utils";

const stats = [
  { value: "4", label: "focus areas" },
  { value: "30+", label: "years training IT teams" },
  { value: "100%", label: "live, instructor-led" },
  { value: "1:1", label: "mentoring included" },
];

const topics = [
  {
    icon: Brain,
    title: "ChatGPT & Prompt Engineering",
    description: "Conversational AI, prompt optimization, and day-to-day productivity workflows.",
  },
  {
    icon: Sparkles,
    title: "Microsoft 365 Copilot",
    description: "AI woven through Word, Excel, Teams, Outlook, and PowerPoint.",
  },
  {
    icon: GraduationCap,
    title: "AI Fundamentals",
    description: "Azure AI-900, AWS AI Practitioner, machine learning basics, and NLP.",
  },
  {
    icon: Code,
    title: "AI Coding",
    description: "Claude Code, Codex, Copilot, and AI-assisted debugging and review.",
  },
  {
    icon: MessagesSquare,
    title: "Prompt Patterns at Work",
    description: "Repeatable prompt structures for analysis, drafting, and summarizing.",
  },
  {
    icon: FileSearch,
    title: "Data & Document Analysis",
    description: "Turning spreadsheets, reports, and transcripts into usable answers.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Chaining AI into the tools and processes your team already runs.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI Use",
    description: "Data handling, accuracy checks, and policy-safe adoption across teams.",
  },
];

type Audience = "End-User" | "Technical";

const courses: {
  code: string;
  title: string;
  audience: Audience;
  description: string;
}[] = [
  {
    code: "CHATGPT",
    title: "ChatGPT Fundamentals",
    audience: "End-User",
    description:
      "Start from zero: how the models actually work, where they fail, and how to get consistently useful output in everyday work.",
  },
  {
    code: "PROMPT-ENG",
    title: "Prompt Engineering",
    audience: "Technical",
    description:
      "Structure, context, and iteration — the patterns that turn a vague request into a reliable, repeatable result.",
  },
  {
    code: "M365-COPILOT",
    title: "Microsoft 365 Copilot",
    audience: "End-User",
    description:
      "Copilot across Word, Excel, Teams, Outlook, and PowerPoint, taught against the work your teams already do.",
  },
  {
    code: "AI-900",
    title: "Azure AI Fundamentals",
    audience: "Technical",
    description:
      "Core AI and machine learning concepts on Azure, prepped straight against the AI-900 exam objectives.",
  },
  {
    code: "AWS-AIF",
    title: "AWS AI Practitioner",
    audience: "Technical",
    description:
      "Foundational AI and generative AI services on AWS, framed for practitioners supporting cloud workloads.",
  },
  {
    code: "AI-CODE",
    title: "AI-Assisted Development",
    audience: "Technical",
    description:
      "Claude Code, Codex, and Copilot inside a real development loop — scaffolding, refactoring, and debugging.",
  },
];

const audienceFilters = ["All", "End-User", "Technical"] as const;

const audienceStyles: Record<Audience, string> = {
  "End-User": "bg-primary/10 text-primary",
  Technical: "bg-accent-teal/10 text-accent-teal",
};

const AIPro = () => {
  const [filter, setFilter] = useState<(typeof audienceFilters)[number]>("All");

  useEffect(() => {
    document.title = "AI & ML Training | StormWind Studios";
  }, []);

  const visible = courses.filter((c) => filter === "All" || c.audience === filter);

  return (
    <PageLayout
      title="AI Training"
      description=""
      breadcrumbs={[{ label: "AI & ML Training" }]}
      hideHero
      backgroundVariant="gradient"
    >
      {/* Hero */}
      <section className="relative mb-28 animate-fade-in">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -top-24 z-0 h-[calc(100%+12rem)] w-screen -translate-x-1/2 bg-hero-mist"
          style={{
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%)",
          }}
        />

        <div className="relative z-10 grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AI &amp; ML Training
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            <span className="block text-foreground">Use AI</span>
            <span className="block text-gradient-brand pb-2">like you built it.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            ChatGPT, Microsoft 365 Copilot, prompt engineering and applied machine learning —
            taught live by working practitioners, practiced on real work, and tracked all the way
            to the certification.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/courses">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore courses
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-background/80 backdrop-blur">
              <Link to="/training-samples">
                <FlaskConical className="mr-2 h-5 w-5" />
                Try training samples
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:w-[460px]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/40 bg-background px-6 py-6 shadow-[0_10px_30px_-18px_hsl(var(--foreground)/0.35)] transition-colors duration-200 hover:border-primary/40"
            >
              <div className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        </div>
      </section>


      {/* Topics */}
      <section className="mb-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Topics
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
            Start where your team actually is.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nobody needs all of it. Skills Assessments place each learner, and the rest is a
            straight line from first prompt to production use.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="group rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-xl transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                <topic.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight">{topic.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="mb-28">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Courses
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
            Featured AI courses.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every course is live and instructor-led, with 1:1 mentoring and hands-on practice built
            in — not a narrated slide deck.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {levelFilters.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setFilter(level)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200",
                filter === level
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/60 bg-card/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <article
              key={course.code}
              className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex-1 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {course.code}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{course.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-border/60 px-6 py-4">
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    levelStyles[course.level]
                  )}
                >
                  {course.level}
                </span>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary"
                >
                  Course detail
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Related Topics */}
      <section className="mt-24 border-t border-border pt-12">
        <h3 className="mb-6 text-lg font-semibold text-muted-foreground">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to="/data-science-pro">Data Science Pro</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/devops">DevOps</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/fullstack-developer">Full Stack Developer</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIPro;
