import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  Cloud,
  Database,
  FlaskConical,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { DataIsoScene } from "@/components/DataIsoScene";
import { CertPathWindow } from "@/components/CertPathWindow";

const topics: {
  title: string;
  icon: LucideIcon;
  color: string;
  metaColor: string;
  count: string;
  desc: string;
  detail: string;
}[] = [
  {
    title: "Power BI",
    icon: BarChart3,
    color: "#E3B505",
    metaColor: "#B58F03",
    count: "60 courses",
    desc: "Data visualization & analytics",
    detail:
      "Transform data into visual insights. Master data modeling, DAX, advanced visualizations, AI integration, and compelling data storytelling.",
  },
  {
    title: "Cloud Data",
    icon: Cloud,
    color: "#2F8FE0",
    metaColor: "#2F8FE0",
    count: "44 courses",
    desc: "Azure, Fabric & Snowflake",
    detail:
      "Build scalable cloud data solutions with Azure, Microsoft Fabric, and Snowflake. Master data engineering, warehousing, and analytics.",
  },
  {
    title: "Data Skills",
    icon: Database,
    color: "#CC2927",
    metaColor: "#CC2927",
    count: "104 courses",
    desc: "SQL Server, T-SQL & Excel",
    detail:
      "Excel in data analysis with SQL Server, T-SQL, Excel, and productivity tools. Essential skills for data-driven business decisions.",
  },
  {
    title: "Power Platform",
    icon: LayoutGrid,
    color: "#742774",
    metaColor: "#742774",
    count: "50 courses",
    desc: "Apps, Automate & Copilot",
    detail:
      "Master Power Apps, Power Automate, Power Pages, and Copilot Studio. Build apps, automate workflows, and create intelligent solutions.",
  },
];

type Level = "Beginner" | "Intermediate" | "Advanced";

const levelStyles: Record<Level, { background: string; color: string }> = {
  Beginner: { background: "#E3F4EE", color: "#0B7A5A" },
  Intermediate: { background: "#E4F1FB", color: "#0C6FA3" },
  Advanced: { background: "#FBEBD9", color: "#A8560B" },
};

const certifications: {
  title: string;
  level: Level;
  providerColor: string;
  description: string;
  features: { title: string; desc: string }[];
}[] = [
  {
    title: "PL-300: Power BI Data Analyst",
    level: "Intermediate",
    providerColor: "#E3B505",
    description:
      "Design and build scalable data models, clean and transform data, and enable advanced analytic capabilities through reports and dashboards.",
    features: [
      { title: "Hands-On Labs", desc: "Practice with real scenarios" },
      { title: "DAX Mastery", desc: "Advanced calculations & measures" },
      { title: "Practice Exams", desc: "Test your knowledge" },
    ],
  },
  {
    title: "DP-900: Azure Data Fundamentals",
    level: "Beginner",
    providerColor: "#2F8FE0",
    description:
      "Master the fundamentals of core data concepts and Azure data services including relational, non-relational, and analytics workloads.",
    features: [
      { title: "Comprehensive Training", desc: "Master Azure data fundamentals" },
      { title: "Foundational Level", desc: "Perfect for beginners" },
      { title: "Instructor Mentoring", desc: "Get personalized guidance" },
    ],
  },
];

const heroStats = [
  { n: "258", l: "courses across four tracks" },
  { n: "104", l: "SQL Server, T-SQL & Excel courses" },
  { n: "60", l: "Power BI courses" },
];

const benefits = [
  "Build interactive dashboards and reports with Power BI",
  "Design enterprise-scale cloud data solutions",
  "Master SQL Server administration and T-SQL",
  "Create low-code apps and automation workflows",
  "Earn industry-recognized Microsoft certifications",
  "Hands-on labs and real-world projects",
  "Learn Microsoft Fabric and modern data platforms",
  "Advance your data science career",
];

const DataSciencePro = () => {
  useEffect(() => {
    document.title = "Data Science Pro";
  }, []);

  return (
    <div className="datascience-scope">
      <PageLayout
        title="Data Science Pro"
        description=""
        breadcrumbs={[{ label: "Data Science Pro" }]}
        hideHero
        backgroundClassName="bg-datascience-console"
      >
        {/* HERO */}
        <section className="grid items-center gap-8 pt-7 pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)]">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-muted/60 py-2 pl-2.5 pr-3.5 text-[12.5px] font-semibold leading-none text-muted-foreground">
              <b className="rounded-full bg-[#D97706] px-2 py-1 text-[10.5px] font-bold leading-none tracking-[0.06em] text-white">
                4 TRACKS
              </b>
              Power BI · Cloud Data · Data Skills · Power Platform
            </span>

            <h1 className="mt-[22px] text-[clamp(44px,5.6vw,70px)] font-bold leading-[1.03] tracking-[-0.042em] text-foreground">
              Data Science <span className="text-gradient-brand">Pro</span>
            </h1>

            <p className="mt-[22px] max-w-[36rem] text-[18px] leading-[1.65] text-muted-foreground">
              Professional data science and analytics training covering Power BI, Cloud Data, SQL
              Server, Microsoft Fabric, and Power Platform
            </p>

            <div className="mt-[30px] flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-lg bg-[hsl(166_100%_30%)] text-white hover:bg-[hsl(166_100%_26%)]">
                <Link to="/courses">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Courses
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-lg">
                <Link to="/training-samples">
                  <FlaskConical className="mr-2 h-5 w-5" />
                  Try Training Samples
                </Link>
              </Button>
            </div>

            <div className="mt-[34px] flex flex-wrap gap-x-[22px] gap-y-4 border-t border-border pt-6">
              {heroStats.map((s) => (
                <div key={s.l}>
                  <div className="text-[24px] font-bold leading-none tracking-[-0.03em] text-foreground">
                    {s.n}
                  </div>
                  <div className="mt-[5px] text-[12.5px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <DataIsoScene />
        </section>

        {/* TOPICS */}
        <section className="-mx-4 rounded-3xl bg-[#F6F8FA] px-6 py-16 dark:bg-white/[0.03] sm:px-10">
          <div className="max-w-[46rem]">
            <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#D97706] dark:text-[#FBBF24]">
              Topics
            </span>
            <h2 className="mt-4 text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              Master Data Science &amp; Analytics
            </h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">
              StormWind's Data Science Pro Training delivers comprehensive instruction across modern
              data platforms and analytics tools. From Power BI visualizations to Azure cloud data
              solutions, SQL Server administration, and Power Platform automation, our courses
              prepare professionals to drive data-driven decision making and digital transformation.
            </p>
          </div>

          <div className="mt-11 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => (
              <article
                key={t.title}
                className="grid overflow-hidden rounded-[18px] border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(18,38,52,0.3)]"
                style={{ gridTemplateRows: "150px 1fr" }}
              >
                <div
                  className="grid place-items-center border-b border-border"
                  style={{
                    background: `linear-gradient(180deg, ${t.color}1A, ${t.color}08)`,
                  }}
                >
                  <div
                    className="grid h-[76px] w-[76px] place-items-center rounded-[18px] border"
                    style={{
                      borderColor: `${t.color}33`,
                      background: `${t.color}14`,
                      color: t.color,
                    }}
                  >
                    <t.icon className="h-9 w-9" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="px-6 pb-6 pt-5">
                  <h3 className="mb-2 text-[18px] font-bold leading-[1.25] tracking-[-0.022em] text-foreground">
                    {t.title}
                  </h3>
                  <div
                    className="mb-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: t.metaColor }}
                  >
                    {t.count} · {t.desc}
                  </div>
                  <p className="text-[14.5px] leading-[1.6] text-muted-foreground">{t.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-16">
          <div className="max-w-[46rem]">
            <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#D97706] dark:text-[#FBBF24]">
              Certifications
            </span>
            <h2 className="mt-4 text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              Featured Certifications
            </h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">
              Industry-recognized data and analytics certifications to advance your career
            </p>
          </div>

          <div className="mt-11 overflow-hidden rounded-[20px] border border-border bg-card">
            {certifications.map((c, i) => (
              <Link
                key={c.title}
                to="/courses"
                className="group grid grid-cols-[56px_1fr_auto] items-center gap-4 border-b border-border px-6 py-6 transition-colors last:border-b-0 hover:bg-[#F6F8FA] dark:hover:bg-white/[0.04] lg:grid-cols-[72px_1.1fr_1.6fr_auto_auto] lg:gap-[26px] lg:px-[30px] lg:py-[26px]"
              >
                <div
                  className="text-[34px] font-bold leading-none tracking-[-0.04em]"
                  style={{ color: `color-mix(in srgb, ${c.providerColor} 55%, hsl(var(--border)))` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-[19px] font-bold leading-[1.2] tracking-[-0.024em] text-foreground">
                    {c.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.features.map((f) => (
                      <span
                        key={f.title}
                        className="rounded-md border border-border bg-muted/60 px-2 py-1 text-[11.5px] text-muted-foreground"
                      >
                        <b className="font-semibold text-foreground">{f.title}</b> · {f.desc}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="col-span-full text-[14.5px] leading-[1.6] text-muted-foreground lg:col-span-1">
                  {c.description}
                </p>

                <span
                  className="whitespace-nowrap rounded-full px-3 py-[7px] text-[11.5px] font-semibold leading-none"
                  style={levelStyles[c.level]}
                >
                  {c.level}
                </span>

                <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-[#D97706] group-hover:bg-[#D97706] group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* BENEFITS BAND */}
        <section className="pb-16">
          <div className="relative grid items-center gap-12 overflow-hidden rounded-[24px] bg-[#0F1720] p-9 text-[#E6EDF3] lg:grid-cols-2 lg:p-14">
            <div
              className="pointer-events-none absolute -right-[200px] -top-[200px] h-[400px] w-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(217,119,6,.35), transparent 65%)",
              }}
            />
            <div className="relative">
              <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#FBBF24]">
                Why Data Science Pro
              </span>
              <h2 className="mt-4 text-[36px] font-bold leading-[1.12] tracking-[-0.034em] text-white">
                Training Benefits
              </h2>
              <p className="mt-3.5 leading-[1.65] text-[rgba(230,237,243,0.72)]">
                Everything in the Data Science Pro library is built around the skills data teams
                actually use day to day.
              </p>
              <ul className="mt-[22px] grid gap-2.5 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[14.5px] text-[rgba(230,237,243,0.85)]">
                    <Check className="mt-[3px] h-4 w-4 flex-none text-[#FBBF24]" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-[26px] rounded-lg bg-[#FBBF24] text-[#2B1A02] hover:bg-[#FCD34D]"
              >
                <Link to="/courses">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Courses
                </Link>
              </Button>
            </div>

            <div className="relative">
              <CertPathWindow />
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <div className="mt-8 border-t border-border pt-12">
          <h3 className="mb-6 text-lg font-semibold text-muted-foreground">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/ai-pro">AI &amp; ML</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/microsoft">Microsoft</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/cloud">Cloud</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default DataSciencePro;
