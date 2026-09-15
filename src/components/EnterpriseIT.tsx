import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { CARD_SURFACE } from "@/components/AnimatedFeatureCard";
import { LearningStyles } from "@/components/LearningStyles";
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

      <LearningStyles />

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