import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Check,
  FlaskConical,
  GitBranch,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { DevOpsIsoScene } from "@/components/DevOpsIsoScene";
import { PlaygroundLibraryWindow } from "@/components/PlaygroundLibraryWindow";

const topics: {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bullets: string[];
}[] = [
  {
    title: "Containerization",
    description: "Docker, Kubernetes (CKA, CKAD, CKS), Helm, and Service Mesh.",
    icon: Boxes,
    color: "#326CE5",
    bullets: [
      "Docker & Docker Swarm",
      "Kubernetes Certifications",
      "Helm & Kustomize",
      "Service Mesh (Istio)",
    ],
  },
  {
    title: "Infrastructure as Code",
    description: "Automate infrastructure provisioning across cloud platforms.",
    icon: Layers,
    color: "#7B42BC",
    bullets: [
      "Terraform & Terraform Cloud",
      "Ansible Automation",
      "HashiCorp Vault & Consul",
      "AWS, Azure, GCP",
    ],
  },
  {
    title: "CI/CD & GitOps",
    description: "Continuous delivery pipelines and modern workflows.",
    icon: GitBranch,
    color: "#EF7B4D",
    bullets: [
      "GitOps with ArgoCD & FluxCD",
      "GitHub Actions",
      "Jenkins Pipelines",
      "Version Control with Git",
    ],
  },
];

const certifications: {
  title: string;
  fullName: string;
  description: string;
  providerColor: string;
}[] = [
  {
    title: "CKA",
    fullName: "Certified Kubernetes Administrator",
    description: "Master cluster administration and management.",
    providerColor: "#326CE5",
  },
  {
    title: "CKAD",
    fullName: "Certified Kubernetes Application Developer",
    description: "Build and deploy apps on Kubernetes.",
    providerColor: "#326CE5",
  },
  {
    title: "CKS",
    fullName: "Certified Kubernetes Security Specialist",
    description: "Secure containerized applications.",
    providerColor: "#326CE5",
  },
];

const heroStats = [
  { n: "3", l: "Kubernetes certifications" },
  { n: "4", l: "DevOps playgrounds" },
  { n: "3", l: "cloud platforms — AWS, Azure, GCP" },
  { n: "0", l: "cleanup required" },
];

const playgroundFeatures = [
  "Instant environment provisioning",
  "Pre-configured scenarios",
  "Safe sandbox environments",
  "No cleanup required",
];

const DevOps = () => {
  useEffect(() => {
    document.title = "DevOps";
  }, []);

  return (
    <div className="devops-scope">
      <PageLayout
        title="DevOps Training"
        description=""
        breadcrumbs={[{ label: "DevOps Training" }]}
        hideHero
        backgroundClassName="bg-devops-console"
      >
        {/* HERO */}
        <section className="grid items-center gap-8 pt-7 pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)]">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-muted/60 py-2 pl-2.5 pr-3.5 text-[12.5px] font-semibold leading-none text-muted-foreground">
              <b className="rounded-full bg-[#4F46E5] px-2 py-1 text-[10.5px] font-bold leading-none tracking-[0.06em] text-white">
                LABS
              </b>
              DevOps Playgrounds — hands-on practice environments
            </span>

            <h1 className="mt-[22px] text-[clamp(44px,5.6vw,70px)] font-bold leading-[1.03] tracking-[-0.042em] text-foreground">
              DevOps <span className="text-gradient-brand">Training</span>
            </h1>

            <p className="mt-[22px] max-w-[36rem] text-[18px] leading-[1.65] text-muted-foreground">
              Master modern DevOps practices with comprehensive training in containerization,
              orchestration, infrastructure as code, CI/CD, and cloud-native technologies
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

          <DevOpsIsoScene />
        </section>

        {/* TOPICS */}
        <section className="-mx-4 rounded-3xl bg-[#F6F8FA] px-6 py-16 dark:bg-white/[0.03] sm:px-10">
          <div className="max-w-[46rem]">
            <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#4F46E5] dark:text-[#818CF8]">
              Topics
            </span>
            <h2 className="mt-4 text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              Transform Your DevOps Career
            </h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">
              Our DevOps training programs prepare you for modern cloud-native development and
              operations roles. Master containerization with Docker and Kubernetes, automate
              infrastructure with Terraform and Ansible, implement CI/CD pipelines, and learn
              monitoring and observability practices.
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
                  <p className="text-[14.5px] leading-[1.6] text-muted-foreground">
                    {t.description}
                  </p>
                  <ul className="mt-4 grid gap-2 text-[13.5px] text-muted-foreground">
                    {t.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full"
                          style={{ background: t.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-16">
          <div className="max-w-[46rem]">
            <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#4F46E5] dark:text-[#818CF8]">
              Certifications
            </span>
            <h2 className="mt-4 text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              Featured Certifications
            </h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">
              Industry-recognized certifications to advance your DevOps career
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
                  <div className="mt-2 text-[13.5px] text-muted-foreground">{c.fullName}</div>
                </div>

                <p className="col-span-full text-[14.5px] leading-[1.6] text-muted-foreground lg:col-span-1">
                  {c.description}
                </p>

                <span
                  className="whitespace-nowrap rounded-full px-3 py-[7px] text-[11.5px] font-semibold leading-none"
                  style={{ background: "#E4EAFB", color: "#3730A3" }}
                >
                  Kubernetes
                </span>

                <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* PLAYGROUNDS BAND */}
        <section className="pb-16">
          <div className="relative grid items-center gap-12 overflow-hidden rounded-[24px] bg-[#0F1720] p-9 text-[#E6EDF3] lg:grid-cols-2 lg:p-14">
            <div
              className="pointer-events-none absolute -right-[200px] -top-[200px] h-[400px] w-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(79,70,229,.35), transparent 65%)",
              }}
            />
            <div className="relative">
              <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#818CF8]">
                Hands-on
              </span>
              <h2 className="mt-4 text-[36px] font-bold leading-[1.12] tracking-[-0.034em] text-white">
                DevOps Playgrounds
              </h2>
              <p className="mt-3.5 leading-[1.65] text-[rgba(230,237,243,0.72)]">
                Hands-on practice environments for real-world DevOps scenarios
              </p>
              <ul className="mt-[22px] grid gap-2.5">
                {playgroundFeatures.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[14.5px] text-[rgba(230,237,243,0.85)]">
                    <Check className="mt-[3px] h-4 w-4 flex-none text-[#818CF8]" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-[26px] rounded-lg bg-[#818CF8] text-[#0B0A2A] hover:bg-[#A5B4FC]"
              >
                <Link to="/training-samples">
                  <FlaskConical className="mr-2 h-5 w-5" />
                  Try Training Samples
                </Link>
              </Button>
            </div>

            <div className="relative">
              <PlaygroundLibraryWindow />
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <div className="mt-8 border-t border-border pt-12">
          <h3 className="mb-6 text-lg font-semibold text-muted-foreground">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/cloud">Cloud</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/fullstack-developer">Full Stack Developer</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/ai-pro">AI &amp; ML</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default DevOps;
