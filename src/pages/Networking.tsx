import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Check, FlaskConical, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { RackScene } from "@/components/RackScene";
import { LedStrip } from "@/components/LedStrip";
import { VideoEmbed } from "@/components/VideoEmbed";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import danYoung from "@/assets/dan-young.png";

const topics: { title: string; description: string }[] = [
  {
    title: "Routing & Switching",
    description: "BGP, OSPF, EIGRP, and layer 2/3 switching for enterprise networks.",
  },
  {
    title: "Network Security",
    description: "Firewalls, VPNs, NAC, IDS, and security best practices.",
  },
  {
    title: "IPv6 & Modern Networking",
    description: "IPv6 deployment, addressing, and transition mechanisms.",
  },
  {
    title: "Network Analysis",
    description: "Wireshark packet analysis, monitoring, and troubleshooting.",
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
}[] = [
  {
    title: "CompTIA Network+",
    instructorName: "Raymond Lacoste",
    instructorImage: raymondLacoste,
    level: "Intermediate",
    description:
      "A vendor-neutral networking certification that validates the essential knowledge and skills needed to confidently design, configure, manage, and troubleshoot wired and wireless networks. Covers network infrastructure, operations, security, and troubleshooting.",
  },
  {
    title: "Cisco CCNA",
    instructorName: "Raymond Lacoste",
    instructorImage: raymondLacoste,
    level: "Intermediate",
    description:
      "Comprehensive Cisco networking certification covering network fundamentals, IP connectivity and services, security fundamentals, automation, and programmability. Master the skills to install, configure, operate, and troubleshoot enterprise networks.",
  },
  {
    title: "Cisco CCNP Enterprise: ENCOR",
    instructorName: "Raymond Lacoste",
    instructorImage: raymondLacoste,
    level: "Advanced",
    description:
      "Master enterprise networking including dual-stack architecture, virtualization, infrastructure, network assurance, security, and automation. This core exam is required for CCNP Enterprise certification and covers the foundational enterprise technologies.",
  },
  {
    title: "Cisco CCNP Enterprise: ENARSI",
    instructorName: "Raymond Lacoste",
    instructorImage: raymondLacoste,
    level: "Advanced",
    description:
      "Advanced routing and services implementation course covering Layer 3 technologies, VPN services, infrastructure security, and infrastructure services. Master enterprise-level network troubleshooting and optimization.",
  },
  {
    title: "Modern Networking with IPv6",
    instructorName: "Dan Young",
    instructorImage: danYoung,
    level: "Intermediate",
    description:
      "An intense, practical-focused course on IPv6. Covers key skills to deploy an IPv6 infrastructure. CCNA or Network+ level knowledge will be helpful to get the most out of this course. Extensive hands-on available in the Net Range.",
  },
  {
    title: "Wireshark Packet Analysis",
    instructorName: "Dan Young",
    instructorImage: danYoung,
    level: "Intermediate",
    description:
      "Master network protocol analysis with Wireshark. Learn to capture, filter, and analyze network traffic for troubleshooting, security analysis, and performance optimization. Essential skills for any network professional.",
  },
];

const rangeBullets = [
  "Cisco routers and multi-layer switches",
  "Over 70 hands-on lab activities",
  "Routing, switching, security, and IPv6 scenarios",
  "Isolated environments built for safe practice",
];

const Networking = () => {
  useEffect(() => {
    document.title = "Networking";
  }, []);

  return (
    <div className="networking-scope">
      <PageLayout
        title="Networking Training"
        description=""
        breadcrumbs={[{ label: "Networking Training" }]}
        hideHero
        backgroundClassName="bg-networking-console"
      >
        {/* HERO */}
        <section className="grid items-center gap-12 pt-7 pb-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,420px)]">
          <div>
            <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <i className="rack-led h-2 w-2 rounded-[2px] bg-[#34D399] shadow-[0_0_0_3px_rgba(52,211,153,0.2)]" />
              Networking Training
            </span>

            <h1 className="mt-[22px] text-[clamp(44px,5.6vw,70px)] font-bold leading-[1.03] tracking-[-0.042em] text-foreground">
              Networking <span className="text-gradient-brand">Training</span>
            </h1>

            <p className="mt-[22px] max-w-[34rem] text-[18px] leading-[1.65] text-muted-foreground">
              Comprehensive networking training covering Cisco certifications, network security,
              infrastructure design, and hands-on practical experience
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

          <RackScene />
        </section>

        {/* TOPICS */}
        <section className="py-14">
          <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-muted-foreground">
            Topics
          </span>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t, i) => (
              <article
                key={t.title}
                className="overflow-hidden rounded-[14px] border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_-36px_rgba(15,23,32,0.45)]"
              >
                <div className="flex items-center gap-3 border-b-2 border-[#3A434C] bg-[linear-gradient(#2F373F,#242B32)] px-4 py-3">
                  <span className="font-mono text-[11px] font-bold tracking-[0.1em] text-[#C8D3DE]">
                    U0{i + 1}
                  </span>
                  <LedStrip seed={i + 3} />
                  <span className="h-2 w-2 rounded-full bg-[#34D399] shadow-[0_0_6px_#34D399]" />
                </div>
                <div className="px-[18px] pb-5 pt-[18px]">
                  <h3 className="mb-2 text-[17.5px] font-bold leading-[1.25] tracking-[-0.02em] text-foreground">
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
        <section className="py-14">
          <div className="max-w-[46rem]">
            <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-muted-foreground">
              Courses
            </span>
            <h2 className="mt-4 text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.14] tracking-[-0.032em] text-foreground">
              Featured Courses
            </h2>
            <p className="mt-3 text-[17px] leading-[1.62] text-muted-foreground">
              Launch your networking career with our most popular courses, featuring comprehensive
              study plans, hands-on labs, and expert instruction
            </p>
          </div>

          <div className="mt-11 overflow-hidden rounded-[20px] border border-border bg-card">
            {featuredCourses.map((c, i) => (
              <Link
                key={c.title}
                to="/courses"
                className="group grid grid-cols-[64px_1fr_auto] items-center gap-4 border-b border-border px-6 py-6 transition-colors last:border-b-0 hover:bg-[#F6F8FA] dark:hover:bg-white/[0.04] lg:grid-cols-[64px_1.1fr_1.6fr_auto_auto] lg:gap-[26px] lg:px-[30px] lg:py-[26px]"
              >
                <span className="inline-flex w-16 items-center justify-center gap-2 rounded-[6px] bg-[#1B2128] px-2.5 py-2 font-mono text-[12px] font-bold text-[#C8D3DE]">
                  <i className="h-1.5 w-1.5 rounded-[1px] bg-[#34D399] shadow-[0_0_5px_#34D399]" />
                  {String(i + 1).padStart(2, "0")}
                </span>

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

                <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-[#2F6FE0] group-hover:bg-[#2F6FE0] group-hover:text-white dark:group-hover:border-[#7FA9F2] dark:group-hover:bg-[#7FA9F2] dark:group-hover:text-[#0B1220]">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* NETWORKING RANGE BAND */}
        <section className="pb-16">
          <div className="relative grid items-center gap-12 overflow-hidden rounded-[24px] bg-[#0F1720] p-9 text-[#E6EDF3] lg:grid-cols-2 lg:p-14">
            <div
              className="pointer-events-none absolute -right-[200px] -top-[200px] h-[400px] w-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(52,211,153,.25), transparent 65%)",
              }}
            />
            <div className="relative">
              <span className="font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.25em] text-[#34D399]">
                Hands-on
              </span>
              <h2 className="mt-4 text-[36px] font-bold leading-[1.12] tracking-[-0.034em] text-white">
                The Networking Range
              </h2>
              <p className="mt-3.5 leading-[1.65] text-[rgba(230,237,243,0.72)]">
                A dynamic networking sandbox built for both simple setups and advanced architectures,
                featuring multiple routers, multi-layer switches, and a variety of connected hosts
                and servers. Over 70 lab activities are available.
              </p>
              <ul className="mt-[22px] grid gap-2.5">
                {rangeBullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-[14.5px] text-[rgba(230,237,243,0.85)]"
                  >
                    <Check className="mt-[3px] h-4 w-4 flex-none text-[#34D399]" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-[26px] rounded-lg bg-[#34D399] text-[#062019] hover:bg-[#5EE2AD]"
              >
                <Link to="/ranges">
                  <Monitor className="mr-2 h-5 w-5" />
                  See the Range
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[16px] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
                <VideoEmbed
                  videoId="6i6y01qjp0"
                  title="Network Range Demo"
                  trackingMetadata={{
                    courseName: "StormWind Ranges",
                    variantName: "Network Range",
                    lessonTitle: "Network Range Demo Video",
                  }}
                />
              </div>
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
              <Link to="/cloud">Cloud</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/cybersecurity">Cybersecurity</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Networking;
