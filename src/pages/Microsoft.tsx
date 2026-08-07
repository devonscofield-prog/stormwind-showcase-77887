import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Server,
  Shield,
  Users,
  BookOpen,
  Monitor,
  Brain,
  Lightbulb,
  FlaskConical,
  Database,
  Terminal,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { cn } from "@/lib/utils";
import willPanek from "@/assets/will-panek.png";
import spikeXavier from "@/assets/spike-xavier.png";
import mikePfeiffer from "@/assets/mike-pfeiffer.png";

const sections = [
  { id: "topics", label: "01 Topics" },
  { id: "courses", label: "02 Courses" },
];

const topics = [
  {
    icon: Server,
    title: "Microsoft Azure",
    description: "Cloud computing with Azure fundamentals, administration, architecture, and DevOps.",
  },
  {
    icon: Users,
    title: "Microsoft 365",
    description: "M365 administration, Intune, Exchange, Teams, and SharePoint management.",
  },
  {
    icon: Monitor,
    title: "Windows Server",
    description: "Windows Server 2016–2025 administration and system management.",
  },
  {
    icon: Terminal,
    title: "PowerShell",
    description: "Scripting, automation, and Microsoft Graph PowerShell.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Security fundamentals, identity management, and Security Copilot.",
  },
  {
    icon: Database,
    title: "SQL Server & Databases",
    description: "Transact-SQL, database development, and SSRS reporting.",
  },
  {
    icon: Brain,
    title: "Microsoft 365 Copilot",
    description: "AI productivity with Copilot for Word, Excel, Teams, and more.",
  },
  {
    icon: Lightbulb,
    title: "Power Platform",
    description: "Power BI analytics, data visualization, and Power Platform.",
  },
];

type Level = "Beginner" | "Intermediate" | "Advanced";

const courses: {
  code: string;
  title: string;
  instructorName: string;
  instructorImage: string;
  initials: string;
  level: Level;
  description: string;
}[] = [
  {
    code: "AZ-900",
    title: "AZ-900 Azure Fundamentals",
    instructorName: "Will Panek",
    instructorImage: willPanek,
    initials: "WP",
    level: "Beginner",
    description:
      "Build foundational knowledge of cloud concepts and Azure services. Built for anyone new to cloud, or heading toward the deeper Azure certifications.",
  },
  {
    code: "AZ-104",
    title: "AZ-104 Azure Administrator",
    instructorName: "Spike Xavier",
    instructorImage: spikeXavier,
    initials: "SX",
    level: "Intermediate",
    description:
      "Manage Azure subscriptions, storage, virtual networks and monitoring — the day-to-day administration work, prepped against the AZ-104 exam.",
  },
  {
    code: "MS-102",
    title: "MS-102 Microsoft 365 Administrator",
    instructorName: "Spike Xavier",
    instructorImage: spikeXavier,
    initials: "SX",
    level: "Advanced",
    description:
      "Identity and access management, security, compliance and enterprise deployment across the full Microsoft 365 stack.",
  },
  {
    code: "MD-102",
    title: "MD-102 Endpoint Administrator",
    instructorName: "Will Panek",
    instructorImage: willPanek,
    initials: "WP",
    level: "Intermediate",
    description:
      "Deploy, configure, secure and monitor devices at enterprise scale — Windows 11, Intune, Configuration Manager and endpoint security.",
  },
  {
    code: "WS-2025",
    title: "Windows Server 2025 Administration",
    instructorName: "Mike Pfeiffer",
    instructorImage: mikePfeiffer,
    initials: "MP",
    level: "Advanced",
    description:
      "Server deployment, configuration, management and security on the newest release, taught as enterprise-grade infrastructure work.",
  },
  {
    code: "SC-900",
    title: "SC-900 Security Fundamentals",
    instructorName: "Will Panek",
    instructorImage: willPanek,
    initials: "WP",
    level: "Beginner",
    description:
      "Microsoft security, compliance and identity fundamentals — the concepts and solutions that underpin every other security path.",
  },
];

const levelFilters = ["All", "Beginner", "Intermediate", "Advanced"] as const;

const levelStyles: Record<Level, string> = {
  Beginner: "border-primary/40 bg-primary/10 text-primary",
  Intermediate: "border-sky-500/40 bg-sky-500/10 text-sky-500",
  Advanced: "border-rose-500/40 bg-rose-500/10 text-rose-500",
};

const Microsoft = () => {
  const [filter, setFilter] = useState<(typeof levelFilters)[number]>("All");

  useEffect(() => {
    document.title = "Microsoft Training | StormWind Studios";
  }, []);

  const visible = courses.filter((c) => filter === "All" || c.level === filter);

  return (
    <div className="ms-scope">
      <PageLayout
        title="Microsoft Training"
        description=""
        breadcrumbs={[{ label: "Microsoft Training" }]}
        hideHero
        backgroundClassName="bg-ms-console"
      >
        {/* Hero */}
        <section className="relative z-10 mb-24 animate-fade-in">
          <div className="grid gap-12 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Microsoft Training
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                <span className="block text-foreground">Run Microsoft</span>
                <span className="block text-gradient-brand pb-2">like you built it.</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Azure, Microsoft 365, Windows Server, PowerShell and Copilot — taught live by
                working engineers, practiced in real labs, and tracked all the way to the exam.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-lg">
                  <Link to="/courses">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore courses
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-lg bg-background/60 backdrop-blur">
                  <Link to="/training-samples">
                    <FlaskConical className="mr-2 h-5 w-5" />
                    Try training samples
                  </Link>
                </Button>
              </div>
            </div>

            {/* License card */}
            <div className="rounded-2xl border border-border/60 bg-card/70 p-8 backdrop-blur-xl shadow-[0_20px_60px_-30px_hsl(var(--foreground)/0.45)]">
              <div className="mt-5 grid grid-cols-2 gap-y-6 border-t border-border/60 pt-6">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-foreground">30+</div>
                  <div className="mt-1 text-sm text-muted-foreground">years training IT teams</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight text-foreground">1:1</div>
                  <div className="mt-1 text-sm text-muted-foreground">mentoring included</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3 border-t border-border/60 pt-6">
                <li className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Live instructor-led classes, not recordings
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Hands-on labs and cyber ranges, 24/7
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  StormAI Tutor inside every course
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Unlimited practice exams
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section id="topics" className="relative z-10 mb-28 scroll-mt-28">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">01 — Topics</span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            Start where your team actually is.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Nobody needs all of it. Skills Assessments place each learner, and the rest is a straight
            line to the credential.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="group rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-xl transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                  <topic.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold tracking-tight">{topic.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="relative z-10 mb-28 scroll-mt-28">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">02 — Courses</span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            Featured courses, and who teaches them.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Every course is live and instructor-led. The instructor is named because it matters —
            these are working practitioners, not narrators.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Level
            </span>
            {levelFilters.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setFilter(level)}
                className={cn(
                  "rounded-lg border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  filter === level
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((course) => (
              <article
                key={course.code}
                className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4 border-b border-border/60 p-6">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-primary/25 bg-primary/10">
                    <img
                      src={course.instructorImage}
                      alt={`${course.instructorName}, StormWind instructor`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-snug tracking-tight">{course.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{course.instructorName}</p>
                  </div>
                </div>

                <p className="flex-1 p-6 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>

                <div className="px-6 pb-6">
                  <span
                    className={cn(
                      "rounded-md border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em]",
                      levelStyles[course.level]
                    )}
                  >
                    {course.level}
                  </span>
                </div>
              </article>
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
              <Link to="/cloud">Cloud</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/networking">Networking</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/enterprise-end-user">Enterprise End User</Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Microsoft;
