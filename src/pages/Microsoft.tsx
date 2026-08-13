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
  Check,
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
    title: "M365 + SharePoint",
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
    title: "Copilot",
    description: "AI productivity with Microsoft 365 Copilot and Copilot Studio.",
  },
  {
    icon: Lightbulb,
    title: "Power Platform",
    description: "Power BI analytics, data visualization, and Power Platform.",
  },
];

type Audience = "Technical" | "End User";

const placeholderInstructor = "/placeholder.svg";

const courses: {
  code: string;
  title: string;
  instructorName: string;
  instructorImage: string;
  initials: string;
  audience: Audience;
  topic: string;
  description: string;
}[] = [
  // Technical
  {
    code: "AZ-104",
    title: "AZ-104 Azure Administrator",
    instructorName: "Spike Xavier",
    instructorImage: spikeXavier,
    initials: "SX",
    audience: "Technical",
    topic: "Microsoft Azure",
    description:
      "Manage Azure subscriptions, storage, virtual networks and monitoring — the day-to-day administration work, prepped against the AZ-104 exam.",
  },
  {
    code: "MS-102",
    title: "MS-102 Microsoft 365 Administrator",
    instructorName: "Spike Xavier",
    instructorImage: spikeXavier,
    initials: "SX",
    audience: "Technical",
    topic: "M365 + SharePoint",
    description:
      "Identity and access management, security, compliance and enterprise deployment across the full Microsoft 365 stack.",
  },
  {
    code: "MD-102",
    title: "MD-102 Endpoint Administrator",
    instructorName: "Will Panek",
    instructorImage: willPanek,
    initials: "WP",
    audience: "Technical",
    topic: "M365 + SharePoint",
    description:
      "Deploy, configure, secure and monitor devices at enterprise scale — Windows 11, Intune, Configuration Manager and endpoint security.",
  },
  {
    code: "WS-2025",
    title: "Windows Server 2025 Administration",
    instructorName: "Mike Pfeiffer",
    instructorImage: mikePfeiffer,
    initials: "MP",
    audience: "Technical",
    topic: "Windows Server",
    description:
      "Server deployment, configuration, management and security on the newest release, taught as enterprise-grade infrastructure work.",
  },
  // End User — Copilot
  {
    code: "COPILOT-USE",
    title: "Using Microsoft Copilot",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Copilot",
    description:
      "Get productive with Microsoft Copilot across everyday tasks, from drafting content to summarizing information and automating workflows.",
  },
  {
    code: "COPILOT-OD",
    title: "Microsoft 365 Copilot: OneDrive",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Copilot",
    description:
      "Use Copilot inside OneDrive to find files faster, summarize documents, and surface the content that matters.",
  },
  {
    code: "COPILOT-WORD",
    title: "Microsoft 365 Copilot: Word",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Copilot",
    description:
      "Draft, rewrite, and refine documents with Copilot in Word — turning rough notes into polished content in seconds.",
  },
  {
    code: "COPILOT-EXCEL",
    title: "Microsoft 365 Copilot: Excel",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Copilot",
    description:
      "Analyze data, generate formulas, and build insights with Copilot in Excel — no advanced spreadsheet skills required.",
  },
  {
    code: "COPILOT-STUDIO",
    title: "Copilot Studio: Beginner to Pro",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Copilot",
    description:
      "Build custom AI copilots and agents tailored to your organization, from first conversation to production deployment.",
  },
  // End User — M365 + SharePoint
  {
    code: "M365-EXCEL-BEG",
    title: "Excel 365 Beginner",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Build a solid foundation in Excel 365 — worksheets, formulas, formatting, and essential data management.",
  },
  {
    code: "M365-EXCEL-INT",
    title: "Excel 365 Intermediate",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Go deeper with pivot tables, advanced formulas, data validation, and worksheet automation in Excel 365.",
  },
  {
    code: "M365-EXCEL-ADV",
    title: "Excel 365 Advanced",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Master complex functions, macros, Power Query, and advanced reporting techniques in Excel 365.",
  },
  {
    code: "M365-PPT-BEG",
    title: "PowerPoint 365 Beginner",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Create clear, professional presentations with slides, layouts, themes, and basic animations in PowerPoint 365.",
  },
  {
    code: "M365-PPT-ADV",
    title: "PowerPoint 365 Advanced",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Design compelling slide decks with advanced animations, transitions, media, and presentation delivery techniques.",
  },
  {
    code: "M365-WORD-BEG",
    title: "Word 365 Beginner",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Learn the essentials of Word 365 — document creation, formatting, styles, and collaboration tools.",
  },
  {
    code: "M365-WORD-INT",
    title: "Word 365 Intermediate",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Expand your Word 365 skills with templates, section breaks, mail merge, tables, and long-document formatting.",
  },
  {
    code: "M365-WORD-ADV",
    title: "Word 365 Advanced",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Master advanced Word 365 features including macros, forms, cross-references, styles, and document automation.",
  },
  {
    code: "M365-PS",
    title: "Adobe Photoshop",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Edit images, work with layers, retouch photos, and create graphics for web and print in Adobe Photoshop.",
  },
  {
    code: "M365-ACROBAT",
    title: "Adobe Acrobat",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Create, edit, sign, and manage PDF documents with Adobe Acrobat workflows for business and collaboration.",
  },
  {
    code: "M365-ILL",
    title: "Adobe Illustrator",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Design vector graphics, logos, icons, and illustrations using Adobe Illustrator tools and techniques.",
  },
  {
    code: "M365-INDD",
    title: "Adobe InDesign",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Lay out professional documents, brochures, and publications with Adobe InDesign typography and page design tools.",
  },
  {
    code: "M365-SP-USER",
    title: "SharePoint 365 Site User",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Navigate, contribute, and collaborate in SharePoint sites — lists, libraries, pages, and permissions from the user view.",
  },
  {
    code: "M365-SP-OWNER",
    title: "SharePoint 365 Site Owner",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "M365 + SharePoint",
    description:
      "Design, build, and manage SharePoint sites — site architecture, permissions, workflows, and governance basics.",
  },
  // End User — Power Platform
  {
    code: "PP-BI-BEG",
    title: "Power BI Beginner",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Power Platform",
    description:
      "Build your first Power BI reports — connect to data, create visuals, and publish shareable dashboards.",
  },
  {
    code: "PP-BI-INT",
    title: "Power BI Intermediate",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Power Platform",
    description:
      "Go deeper with Power BI — data transformation, relationships, DAX calculations, and richer report design.",
  },
  {
    code: "PP-BI-ADV",
    title: "Power BI Advanced",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Power Platform",
    description:
      "Master advanced Power BI — complex data models, optimization, row-level security, and enterprise deployment.",
  },
  {
    code: "PP-APPS-BEG",
    title: "Power Apps Beginner",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Power Platform",
    description:
      "Get started with Power Apps — create simple canvas apps, connect to data, and share them with your team.",
  },
  {
    code: "PP-APPS-INT",
    title: "Power Apps Intermediate",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Power Platform",
    description:
      "Expand your Power Apps skills with data validation, conditional logic, galleries, and model-driven app basics.",
  },
  {
    code: "PP-APPS-ADV2",
    title: "Power Apps Advanced",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Power Platform",
    description:
      "Develop sophisticated Power Apps solutions with custom connectors, components, performance tuning, and deployment.",
  },
  {
    code: "PP-AUTO-BEG",
    title: "Power Automate Beginner",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Power Platform",
    description:
      "Automate routine tasks by building your first Power Automate flows across common apps and services.",
  },
  {
    code: "PP-AUTO-INT",
    title: "Power Automate Intermediate",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Power Platform",
    description:
      "Create more complex flows with approvals, conditions, loops, and integrations in Power Automate.",
  },
  {
    code: "PP-AUTO-ADV",
    title: "Power Automate Advanced",
    instructorName: "StormWind Instructor",
    instructorImage: placeholderInstructor,
    initials: "SW",
    audience: "End User",
    topic: "Power Platform",
    description:
      "Build enterprise-grade automation with custom connectors, error handling, governance, and advanced flow patterns.",
  },
];

const audienceFilters = ["All", "Technical", "End User"] as const;

const audienceStyles: Record<Audience, string> = {
  Technical: "border-sky-500/40 bg-sky-500/10 text-sky-500",
  "End User": "border-primary/40 bg-primary/10 text-primary",
};

const Microsoft = () => {
  const [filter, setFilter] = useState<(typeof audienceFilters)[number]>("All");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Microsoft Training | StormWind Studios";
  }, []);

  const visible = courses.filter(
    (c) =>
      (filter === "All" || c.audience === filter) &&
      (!activeTopic || c.topic === activeTopic)
  );

  const handleTopicClick = (title: string) => {
    setActiveTopic((prev) => (prev === title ? null : title));
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };


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
              <div className="grid grid-cols-2 gap-y-6">
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
                  Live instructor-led classes, not just recordings
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Hands-on labs, Azure, and Microsoft ranges 24/7
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Fast Track to what you actually need
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Industry Leading Microsoft expert instructors
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section id="topics" className="relative z-10 mb-28 scroll-mt-28">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">01 — Topics</span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            Pick the stack you actually run.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Select a focus area to see the courses that go with it — no wading through a catalog to
            find the three that matter to your team.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => {
              const isActive = activeTopic === topic.title;
              return (
                <button
                  key={topic.title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleTopicClick(topic.title)}
                  className={cn(
                    "group rounded-2xl border p-6 text-left backdrop-blur-xl transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
                    isActive
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                      : "border-border/60 bg-card/70"
                  )}
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                    <topic.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold tracking-tight">{topic.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                </button>
              );
            })}
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
              Audience
            </span>
            {audienceFilters.map((aud) => (
              <button
                key={aud}
                type="button"
                onClick={() => setFilter(aud)}
                className={cn(
                  "rounded-lg border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  filter === aud
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {aud}
              </button>
            ))}
            {activeTopic && (
              <button
                type="button"
                onClick={() => setActiveTopic(null)}
                className="ml-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary/20"
              >
                {activeTopic} ✕
              </button>
            )}
          </div>


          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((course) => (
              <article
                key={course.code}
                className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4 border-b border-border/60 p-6">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primary/25 bg-primary/10">
                    {course.instructorImage === placeholderInstructor ? (
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                        {course.initials}
                      </span>
                    ) : (
                      <img
                        src={course.instructorImage}
                        alt={`${course.instructorName}, StormWind instructor`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    )}
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
                      audienceStyles[course.audience]
                    )}
                  >
                    {course.audience}
                  </span>
                </div>
              </article>
            ))}
            {visible.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No featured courses for this selection yet — clear the filter or explore the full
                catalog.
              </p>
            )}
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
