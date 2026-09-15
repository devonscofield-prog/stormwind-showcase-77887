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
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SphereScene } from "@/components/SphereScene";
import { cn } from "@/lib/utils";

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
    code: "COPILOT-OFFICE",
    title: "Copilot for Office Applications",
    audience: "End-User",
    description:
      "Practical Copilot use across Word, PowerPoint, Excel, Teams, Outlook, and more — built around real daily workflows.",
  },
  {
    code: "GEMINI-GWS",
    title: "Gemini in Google Workspace",
    audience: "End-User",
    description:
      "Use Gemini inside Slides, Docs, Gmail, Chat, Meet, and Sheets to draft, summarize, and accelerate team work.",
  },
  {
    code: "CLAUDE-COWORK",
    title: "Learn Claude: Cowork with 20 Everyday Examples",
    audience: "End-User",
    description:
      "Twenty hands-on scenarios that show how Claude fits into everyday tasks from email to analysis to brainstorming.",
  },
  {
    code: "CLAUDE-SKILLS",
    title: "Using Claude Skills",
    audience: "End-User",
    description:
      "Build and reuse Claude Skills so teams get consistent, high-quality output on repeated tasks and projects.",
  },
  {
    code: "CHATGPT-QS",
    title: "ChatGPT Quickstart",
    audience: "End-User",
    description:
      "A fast, practical introduction to ChatGPT: prompting basics, common pitfalls, and immediate workplace use cases.",
  },
  {
    code: "AI-ETHICS",
    title: "AI Ethical Use and Responsibility",
    audience: "End-User",
    description:
      "Guide safe, responsible AI adoption with clear principles on data handling, accuracy, bias, and organizational policy.",
  },
  {
    code: "AI-GOV",
    title: "AI Governance",
    audience: "Technical",
    description:
      "Frameworks, risk management, and policy controls for deploying AI responsibly at scale.",
  },
  {
    code: "SECAI+",
    title: "CompTIA SecAI+",
    audience: "Technical",
    description:
      "Security fundamentals for AI systems, covering threats, vulnerabilities, and safe AI operations.",
  },
  {
    code: "AB-900",
    title: "AB-900: Copilot and Agent Administration",
    audience: "Technical",
    description:
      "Deploy, configure, and manage Microsoft Copilot agents and administrative controls.",
  },
  {
    code: "CLAUDE-CODE",
    title: "Claude Code: Essentials & Power User",
    audience: "Technical",
    description:
      "From first commands to advanced workflows — harness Claude Code for scaffolding, review, and automation.",
  },
  {
    code: "GIT-GITHUB",
    title: "Git & Github Masterclass",
    audience: "Technical",
    description:
      "Version control, branching strategies, pull requests, and team collaboration on GitHub.",
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
  "End-User": "bg-[hsl(var(--ai-mint)/0.18)] text-[hsl(var(--ai-mint))]",
  Technical: "bg-[hsl(var(--ai-cyan)/0.18)] text-[hsl(var(--ai-cyan))]",
};

const AIPro = () => {
  const [filter, setFilter] = useState<(typeof audienceFilters)[number]>("All");

  useEffect(() => {
    document.title = "AI & ML Training | StormWind Studios";
  }, []);

  const visible = courses.filter((c) => filter === "All" || c.audience === filter);

  return (
    <div className="ai-scope">
      <PageLayout title="AI Training" description="" breadcrumbs={[{ label: "AI & ML Training" }]} hideHero backgroundClassName="bg-ai-nebula">
        {/* HERO */}
        <section className="grid items-center gap-10 pt-6 pb-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,560px)]">
          <div>
            <span className="ai-pill inline-flex items-center gap-2 rounded-full px-3.5 py-[7px] text-[12.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
              AI &amp; ML Training
            </span>
            <h1 className="mt-[26px] text-[clamp(46px,5.8vw,74px)] font-extrabold leading-[1.02] tracking-[-0.05em]">
              <span className="block text-foreground">Put AI to work.</span>
              <span className="block text-gradient-brand pb-2">Not on a slide.</span>
            </h1>
            <p className="mt-[22px] max-w-[34rem] text-[17.5px] leading-[1.65] text-muted-foreground">
              ChatGPT, Microsoft 365 Copilot, prompt engineering and applied machine learning —
              taught live by working practitioners, practiced on real work, and tracked all the way
              to the certification.
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3">
              <Button asChild size="lg" className="ai-gradient rounded-full border-0 text-white shadow-[0_12px_30px_-10px_hsl(var(--ai-vio)/0.7)] hover:brightness-110">
                <Link to="/courses"><BookOpen className="mr-2 h-5 w-5" />Explore courses</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="ai-pill rounded-full text-foreground">
                <Link to="/training-samples"><FlaskConical className="mr-2 h-5 w-5" />Try training samples</Link>
              </Button>
            </div>
          </div>
          <SphereScene />
        </section>

        {/* TOPICS */}
        <section className="pt-16">
          <div className="mx-auto mb-8 max-w-[46rem] text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Topics</span>
            <h2 className="mt-3.5 text-[clamp(28px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-[-0.035em] text-foreground">Start where your team actually is.</h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">Eight focus areas, one job: turn AI curiosity into daily, dependable practice. Pick the lane your team needs and skip the rest.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <article key={topic.title} className="ai-glass p-6">
                <span className="ai-gradient mb-[18px] grid h-11 w-11 place-items-center rounded-[14px] text-white shadow-[0_10px_24px_-10px_hsl(var(--ai-vio))]"><topic.icon className="h-[22px] w-[22px]" /></span>
                <h3 className="mb-2 text-[17.5px] font-bold leading-[1.25] tracking-[-0.02em] text-foreground">{topic.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-muted-foreground">{topic.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* COURSES */}
        <section className="pt-16">
          <div className="mx-auto mb-8 max-w-[46rem] text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Courses</span>
            <h2 className="mt-3.5 text-[clamp(28px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-[-0.035em] text-foreground">Featured AI courses.</h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">Every course is live and instructor-led, with 1:1 mentoring and hands-on practice built in — not a narrated slide deck.</p>
          </div>
          <div className="ai-pill mx-auto mb-[26px] flex w-max max-w-full flex-wrap justify-center gap-1.5 rounded-full p-1.5">
            {audienceFilters.map((audience) => (
              <button key={audience} type="button" onClick={() => setFilter(audience)} className={cn("rounded-full px-[18px] py-[9px] text-[13.5px] font-semibold transition-all duration-200", filter === audience ? "ai-gradient text-white" : "text-muted-foreground hover:text-foreground")}>{audience}</button>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((course) => (
              <article key={course.code} className="ai-glass flex min-h-[210px] flex-col p-6">
                <span className={cn("mb-3.5 self-start rounded-full px-[11px] py-1.5 text-[11px] font-bold uppercase tracking-[0.06em]", audienceStyles[course.audience])}>{course.audience}</span>
                <h3 className="mb-2 text-[18.5px] font-bold leading-[1.25] tracking-[-0.02em] text-foreground">{course.title}</h3>
                <p className="flex-1 text-[14.5px] leading-[1.6] text-muted-foreground">{course.description}</p>
                <code className="mt-4 font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">{course.code}</code>
              </article>
            ))}
          </div>
        </section>

        {/* Related Topics */}
        <section className="mt-24 border-t border-[var(--ai-border)] pt-12">
          <h3 className="mb-6 text-lg font-semibold text-muted-foreground">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm" className="ai-pill rounded-full"><Link to="/data-science-pro">Data Science Pro</Link></Button>
            <Button asChild variant="outline" size="sm" className="ai-pill rounded-full"><Link to="/devops">DevOps</Link></Button>
            <Button asChild variant="outline" size="sm" className="ai-pill rounded-full"><Link to="/fullstack-developer">Full Stack Developer</Link></Button>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default AIPro;
