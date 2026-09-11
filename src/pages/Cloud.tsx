import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Check,
  FlaskConical,
  Monitor,
  Layers,
  Box,
  LayoutGrid,
  Boxes,
  ShieldCheck,
  Database,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { CloudIsoScene } from "@/components/CloudIsoScene";
import { VideoEmbed } from "@/components/VideoEmbed";
import benBurich from "@/assets/ben-burich.png";
import abdelSalem from "@/assets/abdel-salem.png";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import willPanek from "@/assets/will-panek.png";
import spikeXavier from "@/assets/spike-xavier.png";

const topics: { title: string; description: string; icon: LucideIcon; color: string }[] = [
  {
    title: "Microsoft Azure",
    description:
      "Cloud computing, infrastructure, DevOps, security, and virtual desktop solutions.",
    icon: Layers,
    color: "#2F8FE0",
  },
  {
    title: "Amazon Web Services",
    description: "AWS fundamentals, solutions architecture, and cloud practitioner training.",
    icon: Box,
    color: "#E8931C",
  },
  {
    title: "Google Cloud Platform",
    description: "GCP fundamentals, cloud architecture, and certification preparation.",
    icon: LayoutGrid,
    color: "#E0483C",
  },
  {
    title: "Containerization & IaC",
    description: "Docker, Kubernetes, Terraform, and CI/CD automation.",
    icon: Boxes,
    color: "#0C86C0",
  },
  {
    title: "Cloud Security",
    description: "Security architecture, identity management, and compliance.",
    icon: ShieldCheck,
    color: "#1A9671",
  },
  {
    title: "Cloud Databases",
    description: "Azure SQL, AWS RDS, Cloud SQL, and database migration.",
    icon: Database,
    color: "#7C5CF0",
  },
];

type Level = "Beginner" | "Intermediate" | "Advanced";

const levelStyles: Record<Level, { background: string; color: string }> = {
  Beginner: { background: "#E3F4EE", color: "#0B7A5A" },
  Intermediate: { background: "#E4F1FB", color: "#0C6FA3" },
  Advanced: { background: "#FBEBD9", color: "#A8560B" },
};

const featuredCourses: {
  title: string;
  instructorName: string;
  instructorImage: string;
  level: Level;
  description: string;
  providerColor: string;
}[] = [
  {
    title: "AZ-900",
    instructorName: "Will Panek",
    instructorImage: willPanek,
    level: "Beginner",
    description:
      "Build foundational knowledge of cloud concepts and Azure services with Azure Fundamentals certification.",
    providerColor: "#2F8FE0",
  },
  {
    title: "AZ-104",
    instructorName: "Spike Xavier",
    instructorImage: spikeXavier,
    level: "Intermediate",
    description:
      "Master Azure administration including managing subscriptions, storage, virtual networks, and monitoring.",
    providerColor: "#2F8FE0",
  },
  {
    title: "AZ-305",
    instructorName: "Ben Burich",
    instructorImage: benBurich,
    level: "Advanced",
    description:
      "Design Microsoft Azure infrastructure solutions with advanced architecture patterns and best practices.",
    providerColor: "#2F8FE0",
  },
  {
    title: "AZ-140",
    instructorName: "Abdel Salem",
    instructorImage: abdelSalem,
    level: "Intermediate",
    description:
      "Configure and operate Microsoft Azure Virtual Desktop environments with expert guidance.",
    providerColor: "#2F8FE0",
  },
  {
    title: "AWS Cloud Practitioner",
    instructorName: "Raymond Lacoste",
    instructorImage: raymondLacoste,
    level: "Beginner",
    description:
      "Start your AWS journey with comprehensive cloud fundamentals covering core services, security, and architecture.",
    providerColor: "#E8931C",
  },
  {
    title: "AWS Architect Associate",
    instructorName: "Raymond Lacoste",
    instructorImage: raymondLacoste,
    level: "Intermediate",
    description:
      "Design and deploy scalable, fault-tolerant systems on AWS with advanced architecture patterns.",
    providerColor: "#E8931C",
  },
];

const heroStats = [
  { n: "3", l: "cloud platforms" },
  { n: "30+", l: "years training IT teams" },
  { n: "24/7", l: "Azure Range access" },
  { n: "1:1", l: "mentoring included" },
];

const rangeBullets = [
  "Real Azure subscriptions, not simulations",
  "Pre-built scenarios for AZ-104 and AZ-305",
  "Reset any time — no production risk",
  "Included with every cloud license",
];

const CloudTraining = () => {
  return (
    <div className="cloud-scope">
      <PageLayout
        title="Cloud Training"
        description=""
        breadcrumbs={[{ label: "Cloud Training" }]}
        hideHero
        backgroundClassName="bg-cloud-console"
      >
        {/* HERO */}
        <section className="grid items-center gap-8 pt-7 pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)]">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-muted/60 py-2 pl-2.5 pr-3.5 text-[12.5px] font-semibold leading-none text-muted-foreground">
              <b className="rounded-full bg-[#0C86C0] px-2 py-1 text-[10.5px] font-bold leading-none tracking-[0.06em] text-white">
                NEW
              </b>
              Azure Range now included with every cloud license
            </span>

            <h1 className="mt-[22px] text-[clamp(44px,5.6vw,70px)] font-bold leading-[1.03] tracking-[-0.042em] text-foreground">
              Cloud <span className="text-primary">Training</span>
            </h1>

            <p className="mt-[22px] max-w-[36rem] text-[18px] leading-[1.65] text-muted-foreground">
              Master cloud technologies with comprehensive training in Azure, AWS, and Google Cloud
              Platform. Build expertise in cloud architecture, administration, security, and
              deployment.
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

          <CloudIsoScene />
        </section>

        {/* TOPICS */}
        <section className="-mx-4 rounded-3xl bg-[#F6F8FA] px-6 py-16 dark:bg-white/[0.03] sm:px-10">
          <div className="max-w-[46rem]">
            <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#0C86C0] dark:text-[#45CFF7]">
              Topics
            </span>
            <h2 className="mt-4 text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              Six areas of cloud, drawn to scale.
            </h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">
              From the platforms themselves to the containers, security and data that run across all
              of them.
            </p>
          </div>

          <div className="mt-11 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
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
                  <IsoGlyph kind={t.glyph} color={t.color} />
                </div>
                <div className="px-6 pb-6 pt-5">
                  <h3 className="mb-2 text-[18px] font-bold leading-[1.25] tracking-[-0.022em] text-foreground">
                    {t.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-muted-foreground">
                    {t.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* COURSES */}
        <section className="py-16">
          <div className="max-w-[46rem]">
            <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#0C86C0] dark:text-[#45CFF7]">
              Courses
            </span>
            <h2 className="mt-4 text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              Featured Courses
            </h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">
              Master cloud technologies with our comprehensive training courses
            </p>
          </div>

          <div className="mt-11 overflow-hidden rounded-[20px] border border-border bg-card">
            {featuredCourses.map((c, i) => (
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
                  <div className="mt-2 flex items-center gap-2.5 text-[13.5px] text-muted-foreground">
                    <img
                      src={c.instructorImage}
                      alt={c.instructorName}
                      loading="lazy"
                      className="h-7 w-7 rounded-full object-cover"
                    />
                    Instructor: {c.instructorName}
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

                <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-[#0C86C0] group-hover:bg-[#0C86C0] group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* AZURE RANGE BAND */}
        <section className="pb-16">
          <div className="relative grid items-center gap-12 overflow-hidden rounded-[24px] bg-[#0F1720] p-9 text-[#E6EDF3] lg:grid-cols-2 lg:p-14">
            <div
              className="pointer-events-none absolute -right-[200px] -top-[200px] h-[400px] w-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(12,134,192,.35), transparent 65%)",
              }}
            />
            <div className="relative">
              <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#45CFF7]">
                Hands-on
              </span>
              <h2 className="mt-4 text-[36px] font-bold leading-[1.12] tracking-[-0.034em] text-white">
                The Azure Range
              </h2>
              <p className="mt-3.5 leading-[1.65] text-[rgba(230,237,243,0.72)]">
                A live, isolated Azure environment your team can actually break. Provision real
                resources, run real scenarios, and reset without a ticket to anyone. Available
                around the clock, included in every cloud license.
              </p>
              <ul className="mt-[22px] grid gap-2.5">
                {rangeBullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[14.5px] text-[rgba(230,237,243,0.85)]">
                    <Check className="mt-[3px] h-4 w-4 flex-none text-[#45CFF7]" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-[26px] rounded-lg bg-[#45CFF7] text-[#06202B] hover:bg-[#6FDBF9]"
              >
                <Link to="/ranges">
                  <Monitor className="mr-2 h-5 w-5" />
                  See the Range
                </Link>
              </Button>
            </div>

            <div className="relative">
              <RangeLibraryWindow />
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <div className="mt-8 border-t border-border pt-12">
          <h3 className="mb-6 text-lg font-semibold text-muted-foreground">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/microsoft">Microsoft</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/devops">DevOps</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/networking">Networking</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default CloudTraining;
