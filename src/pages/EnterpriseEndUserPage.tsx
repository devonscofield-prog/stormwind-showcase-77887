import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Check, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageLayout } from "@/components/PageLayout";
import { AppLauncher } from "@/components/AppLauncher";

type Card = {
  title: string;
  subtitle: string;
  bullets: string[];
  href?: string;
};

type TrackKey = "desktop" | "business" | "compliance";

const TRACK_COLOR: Record<TrackKey, string> = {
  desktop: "#2B5FA6",
  business: "#009970",
  compliance: "#E8931C",
};

const desktopApps: Card[] = [
  {
    title: "Microsoft Apps",
    subtitle: "Master Microsoft 365 productivity tools",
    bullets: ["Word, Excel, PowerPoint", "Outlook & Teams", "OneDrive & SharePoint", "OneNote & Planner"],
    href: "/desktop-apps",
  },
  {
    title: "AI Tools",
    subtitle: "Leverage AI to boost productivity",
    bullets: ["Microsoft Copilot", "ChatGPT Essentials", "Prompt Engineering", "AI Best Practices"],
  },
  {
    title: "Security",
    subtitle: "Protect against cyber threats",
    bullets: ["Phishing Awareness", "Password Security", "Data Protection", "Safe Browsing Practices"],
    href: "/security-awareness",
  },
];

const businessSkills: Card[] = [
  {
    title: "Communication",
    subtitle: "Connect clearly across the organization",
    bullets: ["Communication Skills", "Presentation Skills", "Business Writing"],
    href: "/business-skills",
  },
  {
    title: "Productivity",
    subtitle: "Get more done with less friction",
    bullets: ["Time Management", "Problem Solving", "Workplace Efficiency"],
    href: "/business-skills",
  },
  {
    title: "Leadership",
    subtitle: "Build stronger teams and managers",
    bullets: ["Leadership & Teamwork", "Coaching & Feedback", "Collaboration"],
    href: "/business-skills",
  },
];

const hrCompliance: Card[] = [
  {
    title: "Harassment Prevention",
    subtitle: "State-specific, legally reviewed training",
    bullets: ["Harassment Prevention", "Respectful Workplace", "Manager Responsibilities"],
    href: "/hr-compliance",
  },
  {
    title: "Workplace Safety & Data Protection",
    subtitle: "Keep people and information safe",
    bullets: ["Workplace Safety", "Data Protection", "Privacy Requirements"],
    href: "/hr-compliance",
  },
  {
    title: "Ethics & Compliance",
    subtitle: "Meet regulatory training requirements",
    bullets: ["Ethics & Compliance", "Code of Conduct", "Reporting & Escalation"],
    href: "/hr-compliance",
  },
];

const tracks: { key: TrackKey; label: string; cards: Card[] }[] = [
  { key: "desktop", label: "Desktop Applications", cards: desktopApps },
  { key: "business", label: "Business Skills", cards: businessSkills },
  { key: "compliance", label: "HR Compliance", cards: hrCompliance },
];

const benefits: Record<TrackKey, { heading: string; items: string[] }> = {
  desktop: {
    heading: "Desktop Applications Benefits",
    items: [
      "Increased workplace productivity and efficiency",
      "Comprehensive Microsoft 365 mastery across Word, Excel, and PowerPoint",
      "Professional document, report, and presentation creation",
      "Advanced data analysis and reporting capabilities",
      "AI-powered productivity with Copilot and ChatGPT",
      "Enhanced cybersecurity awareness across the workforce",
      "Reduced security incidents and breaches from phishing",
      "Better email, calendar, and file organization",
    ],
  },
  business: {
    heading: "Business Skills Benefits",
    items: [
      "Stronger professional communication skills",
      "Enhanced leadership and management capabilities",
      "Improved collaboration and teamwork across departments",
      "Better time management and workplace efficiency",
      "Improved customer service and satisfaction",
      "Increased employee confidence and engagement",
      "Bite-sized microlearning that fits busy schedules",
      "Career advancement opportunities for your people",
    ],
  },
  compliance: {
    heading: "HR Compliance Benefits",
    items: [
      "Reduced legal risks and liability",
      "Regulatory compliance confidence",
      "State-specific harassment prevention coverage",
      "Enhanced workplace safety and security",
      "Better data protection and privacy compliance",
      "Reduced workplace incidents and claims",
      "Improved employee morale and retention",
      "Demonstrated commitment to ethical practices",
    ],
  },
};

const EnterpriseEndUserPage = () => {
  const [activeTab, setActiveTab] = useState<TrackKey>("desktop");

  useEffect(() => {
    document.title = "Enterprise End User Package";
  }, []);

  const color = TRACK_COLOR[activeTab];

  const renderCards = (cards: Card[], c: string) => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.title}
          className="relative flex flex-col overflow-hidden rounded-[14px] border border-border bg-card px-[22px] pb-6 pt-[22px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_-36px_rgba(15,23,32,0.45)]"
        >
          <span className="absolute inset-x-0 top-0 h-1" style={{ background: c }} />
          <h3 className="mb-1.5 text-[17.5px] font-bold leading-[1.25] tracking-[-0.02em] text-foreground">
            {card.title}
          </h3>
          <p className="mb-3 text-[13.5px] text-muted-foreground">{card.subtitle}</p>
          <ul className="flex-1 space-y-2">
            {card.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: c }} />
                {bullet}
              </li>
            ))}
          </ul>
          {card.href && (
            <Button asChild variant="outline" size="sm" className="mt-[18px] w-full gap-2 rounded-[9px]">
              <Link to={card.href}>
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </article>
      ))}
    </div>
  );

  return (
    <div className="enduser-scope">
      <PageLayout
        title="Enterprise End User Package"
        description=""
        breadcrumbs={[{ label: "Enterprise End User" }]}
        hideHero
        backgroundClassName="bg-enduser-console"
      >
        {/* HERO */}
        <section className="grid items-center gap-12 pt-7 pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,560px)]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Enterprise End User Package
            </span>

            <h1 className="mt-[22px] text-[clamp(42px,5.2vw,64px)] font-bold leading-[1.04] tracking-[-0.045em] text-foreground">
              Enterprise End User <span className="text-gradient-brand">Package</span>
            </h1>

            <p className="mt-5 max-w-[36rem] text-[17.5px] leading-[1.65] text-muted-foreground">
              Empower your workforce with comprehensive training in Microsoft applications, AI tools, security awareness, and essential business skills. Build a more productive, secure, and capable team.
            </p>

            <div className="mt-[30px] flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-[10px] bg-[hsl(166_100%_30%)] text-white hover:bg-[hsl(166_100%_26%)]"
              >
                <Link to="/courses">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Courses
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-[10px]">
                <Link to="/training-samples">
                  <FlaskConical className="mr-2 h-5 w-5" />
                  Try Training Samples
                </Link>
              </Button>
            </div>
          </div>

          <AppLauncher />
        </section>

        {/* OVERVIEW */}
        <section id="enterprise-overview" className="scroll-mt-24 py-8">
          <div className="grid items-center gap-8 rounded-[18px] border border-border bg-card px-9 py-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Overview</span>
              <h2 className="mt-3.5 text-[clamp(27px,3vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
                Transform Your Workforce
              </h2>
            </div>
            <p className="border-l-[3px] border-primary pl-[22px] text-[16.5px] leading-[1.7] text-muted-foreground">
              StormWind's Enterprise End User Package delivers essential training to help your team work smarter, safer, and more efficiently. From mastering Microsoft 365 applications to understanding AI tools like Copilot and ChatGPT, staying secure against cyber threats, and developing critical business skills—this comprehensive package ensures your employees have the knowledge they need to excel in the modern workplace.
            </p>
          </div>
        </section>

        {/* TRACKS */}
        <section className="pb-16 pt-6">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TrackKey)} className="w-full">
            <TabsList className="mb-[22px] grid h-auto w-full grid-cols-1 gap-3 bg-transparent p-0 md:grid-cols-3">
              {tracks.map((t) => (
                <TabsTrigger
                  key={t.key}
                  value={t.key}
                  className="eu-tab"
                  style={{ "--c": TRACK_COLOR[t.key] } as CSSProperties}
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tracks.map((t) => (
              <TabsContent key={t.key} value={t.key} className="mt-0">
                {renderCards(t.cards, TRACK_COLOR[t.key])}
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-[18px] grid items-center gap-8 rounded-[18px] border border-border bg-card px-9 py-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)]">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em]" style={{ color }}>
              {benefits[activeTab].heading}
            </span>
            <ul className="grid gap-3 md:grid-cols-2 md:gap-x-6">
              {benefits[activeTab].items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-muted-foreground">
                  <Check className="mt-0.5 h-[18px] w-[18px] flex-none" style={{ color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default EnterpriseEndUserPage;
