import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, Check, FlaskConical, Lock, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { ShieldScene, PhishMini } from "@/components/ShieldScene";

const series: { icon: typeof Users; color: string; title: string; description: string }[] = [
  {
    icon: Users,
    color: "#2B5FA6",
    title: "Core Series",
    description: "12 essential courses: Security Quickstart, Social Engineering Defense, and more.",
  },
  {
    icon: Lock,
    color: "#C8322B",
    title: "Ransomware",
    description: "Deep coverage of ransomware threats, analysis, and best practices.",
  },
  {
    icon: Mail,
    color: "#E8931C",
    title: "Email Security",
    description: "Recognize spoofed addresses, dangerous attachments, and phishing.",
  },
  {
    icon: Briefcase,
    color: "#009970",
    title: "Executive",
    description: "Security briefings and strategies for decision makers.",
  },
];

const phishingFeatures = [
  "AI-Personalized Simulations",
  "Turn-Key Setup",
  "Comprehensive Reporting",
  "Outlook Plugin with Instant Feedback",
  "Security Awareness Courses",
  "Multiple Attack Vectors",
];

const benefits = [
  "Reduced security incidents and breaches",
  "Enhanced threat recognition skills",
  "Improved compliance with security policies",
  "Better protection against phishing attacks",
  "Increased employee security awareness",
  "Stronger organizational security culture",
  "Lower risk of data breaches",
  "Measurable improvement in security posture",
];

const SecurityAwareness = () => {
  useEffect(() => {
    document.title = "Security Awareness";
  }, []);

  return (
    <div className="sa-scope">
      <PageLayout
        title="Security Awareness Training"
        description=""
        breadcrumbs={[{ label: "Security Awareness Training" }]}
        hideHero
        backgroundClassName="bg-sa-console"
      >
        {/* HERO */}
        <section className="grid items-center gap-11 pt-7 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Security Awareness Training
            </span>

            <h1 className="mt-[22px] text-[clamp(42px,5.2vw,64px)] font-bold leading-[1.04] tracking-[-0.045em] text-foreground">
              Security Awareness <span className="text-gradient-brand">Training</span>
            </h1>

            <p className="mt-5 max-w-[36rem] text-[17.5px] leading-[1.65] text-muted-foreground">
              A great security awareness training program can make all the difference in your cybersecurity posture. Vigilance and appropriate behavior towards threats begins with a thorough understanding of attacks launched by cybercriminals and hackers.
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

          <ShieldScene />
        </section>

        {/* OVERVIEW */}
        <section className="py-8">
          <div className="grid items-center gap-8 rounded-[18px] border border-border bg-card px-9 py-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Overview</span>
              <h2 className="mt-3.5 text-[clamp(27px,3vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
                Protect Your Organization
              </h2>
            </div>
            <p className="border-l-[3px] border-primary pl-[22px] text-[16.5px] leading-[1.7] text-muted-foreground">
              StormWind's Security Awareness Training delivers essential knowledge to help your team recognize and defend against cyber threats. From understanding phishing attacks and ransomware to executive-level security briefings, our comprehensive programs ensure every member of your organization has the skills they need to maintain a strong security posture.
            </p>
          </div>
        </section>

        {/* SERIES */}
        <section className="py-8">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Series</span>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {series.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="relative overflow-hidden rounded-[14px] border border-border bg-card px-[22px] pb-6 pt-[22px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_-36px_rgba(15,23,32,0.45)]"
                >
                  <span className="absolute inset-x-0 top-0 h-1" style={{ background: s.color }} />
                  <span
                    className="mb-4 grid h-11 w-11 place-items-center rounded-[12px] text-white"
                    style={{ background: s.color }}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                  <h3 className="mb-1.5 text-[17.5px] font-bold leading-[1.25] tracking-[-0.02em] text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-muted-foreground">{s.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* STORMAI PHISHING */}
        <section className="py-8">
          <div className="sa-phish grid items-center gap-8 rounded-[18px] border px-9 py-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--sa-purple)]">
                Also from StormWind
              </span>
              <h2 className="mb-2.5 mt-3 text-[30px] font-bold leading-[1.1] tracking-[-0.03em] text-foreground">
                StormAI Phishing
              </h2>
              <p className="max-w-[40rem] text-[16px] leading-[1.65] text-muted-foreground">
                AI-driven phishing simulations that mirror real-world hacker techniques, with zero manual management required.
              </p>
              <ul className="mt-[18px] flex flex-wrap gap-2">
                {phishingFeatures.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-border bg-card px-3 py-2 text-[12.5px] font-semibold leading-none text-muted-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-[22px] rounded-[10px] bg-[#7C5CF0] text-white hover:bg-[#6A4BE0]"
              >
                <Link to="/phishing">
                  View StormAI Phishing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <PhishMini />
          </div>
        </section>

        {/* BENEFITS */}
        <section className="pb-16 pt-8">
          <div className="grid items-center gap-8 rounded-[18px] border border-border bg-card px-9 py-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)]">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Training Benefits</span>
            <ul className="grid gap-3 md:grid-cols-2 md:gap-x-6">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-muted-foreground">
                  <Check className="mt-0.5 h-[18px] w-[18px] flex-none text-primary" />
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

export default SecurityAwareness;