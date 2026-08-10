import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Target,
  BookOpen,
  Search,
  Lock,
  Siren,
  ScrollText,
  Network,
  FlaskConical,
  Check,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { cn } from "@/lib/utils";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import chrisPaul from "@/assets/chris-paul.png";
import shaneSexton from "@/assets/shane-sexton.png";

const topics = [
  {
    icon: Shield,
    title: "Security Fundamentals",
    description: "Core security concepts, threats, cryptography, and hardening practices.",
  },
  {
    icon: Target,
    title: "Penetration Testing",
    description: "Scoping, recon, exploitation, and reporting on real vulnerable targets.",
  },
  {
    icon: Siren,
    title: "Security Operations",
    description: "Threat detection, SIEM, monitoring, and incident response workflows.",
  },
  {
    icon: Search,
    title: "Threat & Vulnerability Mgmt",
    description: "Vulnerability scanning, triage, remediation, and threat intelligence.",
  },
  {
    icon: ScrollText,
    title: "Governance, Risk & Compliance",
    description: "Policy, frameworks, audits, and risk management for regulated teams.",
  },
  {
    icon: Lock,
    title: "Identity & Access",
    description: "Authentication, authorization, zero trust, and privileged access control.",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Segmentation, firewalls, secure architecture, and traffic analysis.",
  },
  {
    icon: BookOpen,
    title: "Security Leadership",
    description: "Building programs, security awareness, and reporting to the business.",
  },
];

type Level = "Beginner" | "Intermediate" | "Advanced";

const courses: {
  code: string;
  title: string;
  instructorName: string;
  instructorImage: string;
  level: Level;
  description: string;
}[] = [
  {
    code: "SEC+",
    title: "CompTIA Security+",
    instructorName: "Raymond Lacoste",
    instructorImage: raymondLacoste,
    level: "Intermediate",
    description:
      "Vendor-neutral proof you can assess security posture, implement solutions, and monitor hybrid environments — cloud, mobile and IoT included.",
  },
  {
    code: "CISSP",
    title: "CISSP",
    instructorName: "Raymond Lacoste",
    instructorImage: raymondLacoste,
    level: "Advanced",
    description:
      "All eight CISSP domains, taught for architects and managers who own secure design, risk management, and enterprise security operations.",
  },
  {
    code: "CYSA+",
    title: "CompTIA CySA+",
    instructorName: "Chris Paul",
    instructorImage: chrisPaul,
    level: "Intermediate",
    description:
      "Security analytics and threat detection: security operations, vulnerability management, incident response, and monitoring against CS0-003.",
  },
  {
    code: "SECX",
    title: "CompTIA SecurityX",
    instructorName: "Shane Sexton",
    instructorImage: shaneSexton,
    level: "Advanced",
    description:
      "Advanced security architecture, governance and enterprise operations for experienced practitioners, prepped against CAS-005.",
  },
  {
    code: "PENTEST+",
    title: "CompTIA PenTest+",
    instructorName: "Shane Sexton",
    instructorImage: shaneSexton,
    level: "Advanced",
    description:
      "Planning, scoping, recon, vulnerability identification, exploitation and reporting — full penetration testing workflow against PT0-003.",
  },
];

const levelFilters = ["All", "Beginner", "Intermediate", "Advanced"] as const;

const levelStyles: Record<Level, string> = {
  Beginner: "border-primary/40 bg-primary/10 text-primary",
  Intermediate: "border-amber-500/40 bg-amber-500/10 text-amber-500",
  Advanced: "border-rose-500/40 bg-rose-500/10 text-rose-500",
};

const Cybersecurity = () => {
  const [filter, setFilter] = useState<(typeof levelFilters)[number]>("All");

  useEffect(() => {
    document.title = "Cybersecurity Training | StormWind Studios";
  }, []);

  const visible = courses.filter((c) => filter === "All" || c.level === filter);

  return (
    <div className="cyber-scope">
      <PageLayout
        title="Cybersecurity Training"
        description=""
        breadcrumbs={[{ label: "Cybersecurity Training" }]}
        hideHero
        backgroundClassName="bg-cyber-console"
      >
        {/* Hero */}
        <section className="relative z-10 mb-24 animate-fade-in">
          <div className="grid gap-12 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Cybersecurity Training
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                <span className="block text-foreground">Train for the day</span>
                <span className="block text-gradient-brand pb-2">it actually happens.</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                CISSP, Security+, CySA+ and PenTest+ — with the governance and SOC work underneath
                them, practiced in live cyber ranges before it matters.
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
                  <div className="text-3xl font-bold tracking-tight text-foreground">24/7</div>
                  <div className="mt-1 text-sm text-muted-foreground">cyber range access</div>
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
                  Hands-on labs and cyber ranges 24/7
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Fast Track to what you actually need
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Industry leading security expert instructors
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
              <Link to="/security-awareness">Security Awareness</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/networking">Networking</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/phishing">Phishing</Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Cybersecurity;
