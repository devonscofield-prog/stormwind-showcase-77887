import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, BookOpen, Check, FlaskConical, Quote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { VideoEmbed } from "@/components/VideoEmbed";
import { GanttScene } from "@/components/GanttScene";
import ashleyHuntImage from "@/assets/ashley-hunt.png";

type Level = "Advanced" | "Intermediate";

const levelStyles: Record<Level, { background: string; color: string }> = {
  Intermediate: { background: "#E4F1FB", color: "#0C6FA3" },
  Advanced: { background: "#FBEBD9", color: "#A8560B" },
};

const testimonials: { quote: string; name: string; org?: string }[] = [
  {
    quote:
      "Ashley is engaging with clear explanations and easy to understand examples. I feel a million times more prepared to take the PMP Exam than I did before class.",
    name: "Al Whitehouse",
    org: "Wake County Government",
  },
  {
    quote:
      "Ashley is amazing. She is definitely in the right job. She was engaging and helped the learning feel 'light' through all the sessions.",
    name: "Leslie Sedlac",
    org: "SAIC",
  },
  {
    quote:
      "Ashley is AMAZING! Her knowledge is invaluable, she is very engaging and encouraging. She kept the class at a very good pace and made sure everyone understood the content. I've never done a class that has been so engaging and easy to absorb and understand the content. Ashley is brilliant at teaching. I want to do more classes with Ashley!",
    name: "Danny Parsons",
  },
  {
    quote:
      "Ashley is incredibly knowledgeable, kept the class both focused and energized, and showed genuine kindness throughout the session. Their approachability and expertise made learning not just effective, but enjoyable.",
    name: "Student from State of Nebraska Government",
  },
];

const certifications: {
  title: string;
  level: Level;
  description: string;
  features: { title: string; description: string }[];
}[] = [
  {
    title: "PMP® Certification",
    level: "Advanced",
    description:
      "Comprehensive preparation for the globally recognized Project Management Professional certification. Master the PMBOK Guide and earn 35 contact hours required for PMP® exam eligibility.",
    features: [
      { title: "Live Sessions Available", description: "Interactive live instructor-led sessions with Instant Replay" },
      { title: "AI Tutor", description: "24/7 AI-powered assistance" },
      { title: "Practice Exams", description: "Comprehensive exam preparation" },
    ],
  },
  {
    title: "PMI-ACP® Certification",
    level: "Intermediate",
    description:
      "Master agile methodologies and practices for modern project management. Earn 21 contact hours and prepare for the PMI Agile Certified Practitioner certification exam.",
    features: [
      { title: "Instructor Mentoring", description: "1:1 expert guidance" },
      { title: "AI Tutor", description: "24/7 AI-powered assistance" },
      { title: "Practice Exams", description: "Comprehensive exam preparation" },
    ],
  },
];

const pillars: { icon: typeof Award; title: string; subtitle: string; items: string[] }[] = [
  {
    icon: Award,
    title: "Certification Prep",
    subtitle: "Industry-recognized certifications",
    items: ["PMP® (35 Contact Hours)", "PMI-ACP (21 Contact Hours)", "CompTIA Project+ (16 PDU)", "CAPM (Entry Level)"],
  },
  {
    icon: BookOpen,
    title: "Technical Skills",
    subtitle: "Practical project management",
    items: ["Microsoft Project Training", "Risk Management", "Project Fundamentals", "Time, Cost & Scope"],
  },
  {
    icon: Users,
    title: "Leadership",
    subtitle: "Essential soft skills",
    items: ["Team Leadership", "Stakeholder Management", "Communication Skills", "Conflict Resolution"],
  },
];

const pduCategories: { color: string; title: string; description: string }[] = [
  { color: "#4F46E5", title: "Technical Project Management", description: "Skills directly related to project management" },
  { color: "#009970", title: "Leadership", description: "Interpersonal skills to lead teams effectively" },
  { color: "#E8931C", title: "Strategic & Business", description: "Business acumen and organizational strategy" },
];

const ProjectManagement = () => {
  useEffect(() => {
    document.title = "Project Management";
  }, []);

  return (
    <div className="pm-scope">
      <PageLayout
        title="Project Management"
        description=""
        breadcrumbs={[{ label: "Project Management" }]}
        hideHero
        backgroundClassName="bg-pm-console"
      >
        {/* HERO */}
        <section className="grid items-center gap-11 pt-7 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Project Management
            </span>

            <h1 className="mt-[22px] text-[clamp(42px,5.2vw,64px)] font-bold leading-[1.04] tracking-[-0.045em] text-foreground">
              Project <span className="text-gradient-brand">Management</span>
            </h1>

            <p className="mt-5 max-w-[36rem] text-[17.5px] leading-[1.65] text-muted-foreground">
              PMP® certification and continuing certification requirement (CCR) support with live instructor-led sessions with Instant Replay
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

          <GanttScene />
        </section>

        {/* INSTRUCTOR SPOTLIGHT */}
        <section className="py-8">
          <div className="grid gap-5 rounded-[18px] border border-border bg-card px-9 py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-x-11">
            <div className="flex items-center gap-[22px]">
              <img
                src={ashleyHuntImage}
                alt="Ashley Hunt"
                loading="lazy"
                className="h-[132px] w-[132px] flex-none rounded-full object-cover shadow-lg"
              />
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Senior Instructor</span>
                <h2 className="mb-1.5 mt-2 text-[30px] font-bold leading-[1.1] tracking-[-0.03em] text-foreground">
                  J. Ashley Hunt
                </h2>
                <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">PMP • MCAS • PROJECT+</p>
              </div>
            </div>

            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="overflow-hidden rounded-[14px] border border-border">
                <VideoEmbed videoId="21dgg0qzzp" title="Project Management Training with Ashley Hunt" />
              </div>
              <p className="mt-3 text-[14px] font-semibold text-muted-foreground">Project Management Training with Ashley Hunt</p>
            </div>

            <p className="text-[15.5px] leading-[1.7] text-muted-foreground lg:col-start-1">
              There's simply no substitute for a great instructor. Over the last 15 years, Ashley has helped thousands of students in hundreds of companies around the globe prepare for the PMP® exam. She has developed an admirable reputation as a consultative trainer, subject-matter-expert, and engaging speaker in several disciplines, consistently receiving exemplary evaluations and high praise from her students. Her lively personality and use of stories and experiences always produce a highly informative and entertaining learning engagement. Ashley has written numerous study guides, including one for the CompTIA Project+, PMI-ACP, and PMP 6th Edition.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-8">
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Testimonials</span>
            <h2 className="mt-3.5 text-[clamp(27px,3vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              What Students Say About Ashley
            </h2>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="relative flex flex-col rounded-[14px] border border-border bg-card py-[22px] pl-16 pr-[22px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_-36px_rgba(15,23,32,0.45)]"
              >
                <Quote className="absolute left-[22px] top-[22px] h-6 w-6 text-primary opacity-60" />
                <p className="text-[15.5px] leading-[1.65] text-foreground">{t.quote}</p>
                <footer className="mt-auto flex flex-wrap items-baseline gap-x-2.5 gap-y-1 pt-3.5">
                  <span className="text-[13.5px] font-bold text-foreground">{t.name}</span>
                  {t.org && <span className="text-[13px] text-muted-foreground">{t.org}</span>}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* FEATURED CERTIFICATIONS */}
        <section className="py-8">
          <div className="max-w-[46rem]">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Certifications</span>
            <h2 className="mt-3.5 text-[clamp(27px,3vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              Featured Certifications
            </h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">
              Industry-recognized project management certifications to advance your career
            </p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {certifications.map((c) => (
              <article
                key={c.title}
                className="rounded-[14px] border border-border bg-card px-[22px] pb-6 pt-[22px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_-36px_rgba(15,23,32,0.45)]"
              >
                <div className="mb-2.5 flex items-center justify-between gap-3">
                  <h3 className="text-[21px] font-bold leading-[1.25] tracking-[-0.02em] text-foreground">{c.title}</h3>
                  <span
                    className="whitespace-nowrap rounded-full px-3 py-[7px] text-[11.5px] font-semibold leading-none"
                    style={levelStyles[c.level]}
                  >
                    {c.level}
                  </span>
                </div>
                <p className="text-[15px] leading-[1.6] text-muted-foreground">{c.description}</p>
                <ul className="mt-[18px] grid gap-3 border-t border-border pt-[18px]">
                  {c.features.map((f) => (
                    <li key={f.title} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-[18px] w-[18px] flex-none text-primary" />
                      <div>
                        <span className="block text-[14.5px] font-semibold leading-[1.3] text-foreground">{f.title}</span>
                        <span className="text-[13.5px] text-muted-foreground">{f.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="scroll-mt-24 py-8">
          <div className="max-w-[46rem]">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Overview</span>
            <h2 className="mt-3.5 text-[clamp(27px,3vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              Project Management Training Overview
            </h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">
              Comprehensive training covering certifications, technical skills, and leadership development
            </p>
          </div>

          <div className="mt-8 grid items-center gap-6 rounded-[18px] border border-border bg-card px-9 py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:gap-x-10">
            <div>
              <h3 className="text-[clamp(27px,3vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
                Master Project Management
              </h3>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-muted-foreground">
                Our project management training programs prepare you for PMP® certification and continuing certification requirements (CCR). Featuring live instructor-led sessions with Instant Replay with expert instructor Ashley Hunt, practice exams, 1:1 mentoring, and downloadable project templates. Earn Professional Development Units (PDUs) across technical, leadership, and strategic competencies to maintain your certification.
              </p>
            </div>
            <div className="grid gap-3.5 sm:grid-cols-3">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <article key={p.title} className="rounded-[14px] border border-border bg-background px-[22px] pb-6 pt-[22px]">
                    <span className="mb-3.5 grid h-11 w-11 place-items-center rounded-[12px] bg-primary text-primary-foreground">
                      <Icon className="h-[22px] w-[22px]" />
                    </span>
                    <h4 className="mb-1.5 text-[17.5px] font-bold leading-[1.25] tracking-[-0.02em] text-foreground">{p.title}</h4>
                    <p className="mb-3 text-[13.5px] text-muted-foreground">{p.subtitle}</p>
                    <ul className="grid gap-2">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PDU CATEGORIES */}
        <section className="pb-16 pt-8">
          <div className="grid items-center gap-8 rounded-[18px] border border-border bg-card px-9 py-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,2fr)]">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Continuing Certification</span>
              <h2 className="mt-3.5 text-[clamp(27px,3vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
                PDU Categories for CCR
              </h2>
            </div>
            <div className="grid gap-3.5 md:grid-cols-3">
              {pduCategories.map((c, i) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 rounded-[14px] border border-border bg-background px-[22px] py-5"
                  style={{ borderLeft: `4px solid ${c.color}` }}
                >
                  <span className="mt-0.5 text-[22px] font-extrabold leading-none tracking-[-0.04em]" style={{ color: c.color }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="mb-1.5 text-[16px] font-bold leading-[1.3] text-foreground">{c.title}</h4>
                    <p className="text-[14px] leading-[1.5] text-muted-foreground">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default ProjectManagement;
