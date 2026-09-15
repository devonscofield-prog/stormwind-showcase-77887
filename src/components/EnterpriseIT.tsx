import { Link } from "react-router-dom";
import { Check, Cloud, Lock, Network, Server, Shield } from "lucide-react";
import { CARD_SURFACE } from "@/components/AnimatedFeatureCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MicrosoftIcon,
  CloudIcon,
  CybersecurityIcon,
  AIIcon,
  NetworkingIcon,
  FullStackIcon,
  DevOpsIcon,
  BusinessProIcon,
  ProjectManagementIcon,
  HelpDeskIcon
} from "@/components/icons/animated/EnterpriseITIcons";

interface EnterpriseITProps {
  selectedTechnologies: string[];
  selectedFeatures: string[];
  toggleTechnology: (category: string) => void;
  toggleFeature: (title: string) => void;
}
const EnterpriseIT = ({
  selectedTechnologies: _selectedTechnologies,
  selectedFeatures: _selectedFeatures,
  toggleTechnology: _toggleTechnology,
  toggleFeature: _toggleFeature
}: EnterpriseITProps) => {
  const learningStyles = {
    handsOn: [
      {
        icon: Server,
        title: "Microsoft Range",
        description: "Practice with Windows Server 2025, Windows 11, Active Directory, DNS, DHCP, and PowerShell in production-like environments.",
        bullets: ["Real Microsoft infrastructure without setup costs", "Build enterprise-ready Windows administration skills"],
        to: "/ranges",
      },
      {
        icon: Shield,
        title: "Cyber Range",
        description: "Master cybersecurity with hands-on access to Splunk, OpenVAS, Nmap, Wireshark, and other industry-standard security tools.",
        bullets: ["Practice threat analysis in realistic scenarios", "Develop real-world security defense strategies"],
        to: "/ranges",
      },
      {
        icon: Cloud,
        title: "Azure Range",
        description: "Build cloud infrastructure with VNets, VMs, storage accounts, and more. Includes an empty sandbox for testing ARM, Bicep, or Terraform templates.",
        bullets: ["Real Azure environment without billing surprises", "Experiment freely with cloud architecture patterns"],
        to: "/ranges",
      },
      {
        icon: Network,
        title: "Network Range",
        description: "Configure VLANs, routing protocols (OSPF, BGP), IPv4/IPv6, and security configurations on real network equipment.",
        bullets: ["Practice with Cisco and enterprise networking gear", "Master network troubleshooting and design skills"],
        to: "/ranges",
      },
    ],
    live: [
      {
        title: "Live Instructor Led Courses",
        description: "Learn in live, interactive sessions with world-class instructors, then revisit each lesson with Instant Replay.",
        bullets: ["Focused 2-hour sessions", "Ask questions and interact in real time"],
        to: "/live-instructor-led",
      },
      {
        title: "1:1 Mentoring with Industry Experts",
        description: "Get unstuck with personal guidance from the instructor behind your course.",
        bullets: ["Direct access to industry-recognized experts", "Guidance tailored to your questions"],
        to: "/mentoring",
      },
    ],
    onDemand: [
      {
        title: "Learning Paths",
        description: "Follow structured paths with guided assessment, targeted training, and readiness validation.",
        bullets: ["Flexible pathways for every skill level", "Personalized course recommendations"],
        to: "/learning-paths",
      },
      {
        title: "Bytes: Microlearning",
        description: "Build practical skills through short, focused sessions designed for retention.",
        bullets: ["Focused 3–5 minute sessions", "Sequential skill stacking"],
        to: "/bytes",
      },
      {
        title: "AI-Powered Learning",
        description: "Get course-aware answers, certification support, and step-by-step troubleshooting guidance.",
        bullets: ["Proprietary training knowledge bases", "Support available while you learn"],
        to: "/ai-learning",
      },
      {
        title: "Skills Assessments",
        description: "Identify skill gaps, measure proficiency, and receive course suggestions matched to each learner.",
        bullets: ["Real-time skills data", "Training matched to proficiency"],
        to: "/skills-assessments",
      },
    ],
  };

  const LearningStyleCards = ({ items }: { items: Array<{ icon?: typeof Server; title: string; description: string; bullets: string[]; to: string }> }) => (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(({ icon: Icon, title, description, bullets, to }) => (
        <Link
          key={title}
          to={to}
          className="group min-h-[190px] rounded-lg border border-border bg-card/75 p-6 shadow-sm transition-colors hover:border-primary/60 hover:bg-card"
        >
          <div className="mb-4 flex items-center gap-3">
            {Icon && <Icon className="h-7 w-7 text-primary" aria-hidden="true" />}
            <h4 className="text-lg font-bold text-foreground group-hover:text-primary">{title}</h4>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-foreground/85">{description}</p>
          <ul className="space-y-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );

  const technologies = [
    { name: "Microsoft", Icon: MicrosoftIcon, items: "Server 2025, M365 Administration, PowerShell, Windows 11, Intune, Endpoint Administration, and more", link: "/microsoft" },
    { name: "Cloud", Icon: CloudIcon, items: "Azure, AWS, Google Cloud, Virtual Desktops, Cloud Security, and more", link: "/cloud" },
    { name: "Cybersecurity", Icon: CybersecurityIcon, items: "CISSP, Security+, Penetration Testing, SecurityX, and more", link: "/cybersecurity" },
    { name: "AI", Icon: AIIcon, items: "ChatGPT, Copilot, AI Awareness, Gemini, AI Ethics, and more", link: "/ai-pro" },
    { name: "Networking", Icon: NetworkingIcon, items: "Cisco CCNA, CCNP, Network+, Wireshark, IPv6, BGP, and more", link: "/networking" },
    { name: "Full Stack Developer", Icon: FullStackIcon, items: "Python, Javascript, React, .NET, HTML/CSS, AI in Coding, and more", link: "/fullstack-developer" },
    { name: "DevOps", Icon: DevOpsIcon, items: "Kubernetes, Docker, IAC, CI/CD, CKA, Hashicorp, and more", link: "/devops" },
    { name: "Data Science Pro", Icon: BusinessProIcon, items: "Power BI, Azure Data, SQL Server, MS Fabric, Power Platform, and more", link: "/data-science-pro" },
    { name: "Project Management", Icon: ProjectManagementIcon, items: "Authorized Training Partner for PMI, PMP, ACP, Project +, CAPM, Lean Six Sigma, and more", link: "/project-management" },
    { name: "Help Desk", Icon: HelpDeskIcon, items: "CompTIA (Tech+, A+, Net+, Sec+), and more", link: "/help-desk" },
  ];
  return <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight pb-2">Enterprise IT</h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
          StormWind's one-stop training ecosystem for IT, DevOps, AI, Project Management, and Data Analytics.
          Stay up to date on evolving technology while learning directly from world-class instructors.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Technologies We Train On</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <Link key={index} to={tech.link} className={`${CARD_SURFACE} block min-h-[152px]`}>
              <div className="absolute -right-3.5 -bottom-4 opacity-[0.11] pointer-events-none text-primary">
                <div className="w-[124px] h-[124px] [&>svg]:w-full [&>svg]:h-full [&_*:not([fill='none'])]:!fill-current [&_*]:!stroke-current">
                  <tech.Icon isHovered={false} />
                </div>
              </div>
              <div className="relative flex flex-col gap-2">
                <h4 className="text-[15px] font-bold tracking-tight text-foreground">{tech.name}</h4>
                <p className="text-xs leading-[17px] text-muted-foreground">{tech.items}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Learning Styles Section */}
      <div className="mb-16">
        <h3 className="mb-8 text-center text-2xl font-bold text-foreground">Learning Styles</h3>
        <Tabs defaultValue="hands-on" className="w-full">
          <TabsList className="mb-7 grid h-auto w-full grid-cols-3 rounded-lg border border-border bg-muted/65 p-1">
            <TabsTrigger value="hands-on" className="py-3 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm">Hands-On</TabsTrigger>
            <TabsTrigger value="live" className="py-3 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm">Live Instructor-Led</TabsTrigger>
            <TabsTrigger value="on-demand" className="py-3 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm">On-Demand</TabsTrigger>
          </TabsList>
          <TabsContent value="hands-on" className="mt-0"><LearningStyleCards items={learningStyles.handsOn} /></TabsContent>
          <TabsContent value="live" className="mt-0"><LearningStyleCards items={learningStyles.live} /></TabsContent>
          <TabsContent value="on-demand" className="mt-0"><LearningStyleCards items={learningStyles.onDemand} /></TabsContent>
        </Tabs>
      </div>

      {/* SSO Banner */}
      <div className="mt-12 animate-fade-in">
        <div className={`${CARD_SURFACE} flex items-center justify-center gap-2.5`}>
          <Lock className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <span className="text-[15px] font-semibold text-muted-foreground">
            Single sign-on available
          </span>
        </div>
      </div>
    </div>;
};
export default EnterpriseIT;