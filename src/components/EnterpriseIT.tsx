import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { CARD_SURFACE } from "@/components/AnimatedFeatureCard";
import {
  LearningPathIcon,
  MicrolearningIcon,
  AILearningIcon,
  RangesIcon,
  LiveInstructorIcon,
  MentoringIcon,
  AssessmentIcon,
  ReportingIcon,
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
  selectedTechnologies,
  selectedFeatures,
  toggleTechnology,
  toggleFeature
}: EnterpriseITProps) => {
  const consolidatedFeatures = [{
    icon: LearningPathIcon,
    title: "Learning Paths",
    description: "Structured paths with guided assessment, targeted training, and readiness validation—personalized and effective.",
    details: "Flexible pathways for every skill level. Begin with an assessment, follow a guided roadmap, and validate your readiness with confidence.",
    additionalInfo: "Access live instructor-led Epic Live sessions and on-demand courses with instant replay for flexible learning anytime, anywhere."
  }, {
    icon: MicrolearningIcon,
    title: "Bytes: Microlearning",
    description: "Short sessions (3-5 min), adaptive personalization, sequential skill stacking, and real-world application.",
    details: "Learn in brief, focused sessions designed for retention. Get personalized paths from initial assessments and stack skills progressively for rapid mastery."
  }, {
    icon: AILearningIcon,
    title: "AI-Powered Learning",
    description: "StormWind's AI Tutors leverage proprietary knowledge bases—no public internet, no hallucinations or inaccuracies.",
    details: "They support your certification studies, answer on-the-fly questions, provide step-by-step troubleshooting guidance, and integrate perfectly with our hands-on training content.",
    additionalInfo: "Combine AI assistance with 1:1 instructor mentoring for personal guidance from industry-recognized experts."
  }, {
    icon: RangesIcon,
    title: "StormWind Ranges",
    description: "Hands-on cyber, Azure, Microsoft, and networking ranges – real, production-like practice environments.",
    bullets: [{
      text: "Cyber Range: Practice with Splunk, OpenVAS, Nmap, Wireshark, and more."
    }, {
      text: "Azure Range: Build VNets, VMs, storage and more, including an empty sandbox for testing ARM/Bicep or Terraform templates."
    }, {
      text: "Microsoft Range: Server 2025, Windows 11, AD, DNS, PowerShell, and more."
    }, {
      text: "Networking Range: VLANs, OSPF, BGP, IPv4/6, and security configurations."
    }]
  }, {
    icon: LiveInstructorIcon,
    title: "Live Instructor Led Courses",
    description: "The most effective learning possible happens in a live environment with a world class instructor. Many of StormWind's classes run live, allowing you to fully interact in the most engaging online learning experience available anywhere.",
    details: "The short, 2-hour sessions allow you to easily digest the information."
  }, {
    icon: MentoringIcon,
    title: "1:1 Mentoring with Industry Experts",
    description: "Like learning anything new, you are inevitably going to get stuck on something. Unlike traditional eLearning, you aren't on your own. You have access to the instructor from every class to ask questions. This feature is one of the most raved about offerings by our clients."
  }, {
    icon: AssessmentIcon,
    title: "Skills Assessments",
    description: "Test your team's skills on a number of different topics and get real time data on where the gaps are. Get course suggestions based on proficiency and streamline the training process by ensuring everyone is taking courses that fit their skill level."
  }, {
    icon: ReportingIcon,
    title: "Enterprise Reporting and Administration",
    description: "Generate easy to read reports on usage and course completion. Whether you need it for compliance/insurance purposes, or to present to management, we make it simple to get the data you need.",
    details: "You can assign individual courses, create and assign learning paths, add due dates, and track assessment scores all from an intuitive Dashboard that is only visible to designated admins."
  }];
  const handleSelectAll = () => {
    const allFeatureTitles = consolidatedFeatures.map(f => f.title);
    const allSelected = allFeatureTitles.every(title => selectedFeatures.includes(title));
    if (allSelected) {
      // Deselect all
      allFeatureTitles.forEach(title => {
        if (selectedFeatures.includes(title)) {
          toggleFeature(title);
        }
      });
    } else {
      // Select all
      allFeatureTitles.forEach(title => {
        if (!selectedFeatures.includes(title)) {
          toggleFeature(title);
        }
      });
    }
  };
  const allFeaturesSelected = consolidatedFeatures.every(f => selectedFeatures.includes(f.title));
  
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
                <div className="w-[124px] h-[124px] [&>svg]:w-full [&>svg]:h-full [&_*]:!fill-current [&_*]:!stroke-current">
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

      {/* Course Catalog Button */}
      <div className="flex justify-center mb-16">
        <Button asChild size="lg" className="gap-2">
          
        </Button>
      </div>

      {/* Consolidated Features Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-foreground">Platform Features</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {consolidatedFeatures.map((feature, index) => {
            const featureLinks: Record<string, string> = {
              "Learning Paths": "/learning-paths",
              "Bytes: Microlearning": "/bytes",
              "AI-Powered Learning": "/ai-learning",
              "StormWind Ranges": "/ranges",
              "Live Instructor Led Courses": "/live-instructor-led",
              "1:1 Mentoring with Industry Experts": "/mentoring",
              "Skills Assessments": "/skills-assessments",
              "Enterprise Reporting and Administration": "/enterprise-reporting"
            };

            return (
              <Link key={index} to={featureLinks[feature.title]} className={`${CARD_SURFACE} block`}>
                <div className="relative flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">
                        <feature.icon color="currentColor" isHovered={false} />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight text-foreground">
                      {feature.title}
                    </h4>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {feature.details && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.details}</p>
                  )}

                  {feature.bullets && (
                    <ul className="space-y-2">
                      {feature.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 mt-2 shrink-0 rounded-full bg-primary" />
                          <span className="leading-relaxed">{bullet.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {feature.additionalInfo && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.additionalInfo}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
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