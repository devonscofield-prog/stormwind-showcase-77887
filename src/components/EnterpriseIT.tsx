import { Brain, Clock, Wrench, CheckCircle2, FileBarChart, Target, UserCheck, Video, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    icon: CheckCircle2,
    emoji: "✅",
    title: "Learning Paths",
    description: "Guided assessment, targeted training, and readiness validation with Epic Live sessions and on-demand courses."
  }, {
    icon: Clock,
    emoji: "⏰",
    title: "Bytes: Microlearning",
    description: "3-5 minute focused sessions with adaptive personalization and sequential skill stacking for rapid mastery."
  }, {
    icon: Brain,
    emoji: "🧠",
    title: "AI-Powered Learning",
    description: "Proprietary AI Tutors for certification support, troubleshooting guidance, and 1:1 instructor mentoring."
  }, {
    icon: Wrench,
    emoji: "🛠️",
    title: "StormWind Ranges",
    description: "Hands-on cyber, Azure, Microsoft, and networking labs with production-like practice environments."
  }, {
    icon: Video,
    emoji: "🎓",
    title: "Live Instructor Led",
    description: "Interactive 2-hour live sessions with world-class instructors for the most effective learning experience."
  }, {
    icon: UserCheck,
    emoji: "🤝",
    title: "1:1 Mentoring",
    description: "Direct access to instructors from every class. Get personalized help when you need it most."
  }, {
    icon: Target,
    emoji: "🎯",
    title: "Skills Assessments",
    description: "Real-time skill gap analysis with personalized course recommendations based on proficiency levels."
  }, {
    icon: FileBarChart,
    emoji: "📊",
    title: "Enterprise Reporting",
    description: "Intuitive dashboard for tracking completion, assigning courses, setting deadlines, and monitoring progress."
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
  const technologies = [{
    category: "Microsoft",
    items: "Server 2025, M365 Administration, PowerShell, Windows 11, Intune, Endpoint Administration, and more"
  }, {
    category: "Cloud",
    items: "Azure, AWS, Google Cloud, Virtual Desktops, Cloud Security, and more"
  }, {
    category: "Cybersecurity",
    items: "CISSP, Security+, Penetration Testing, SecurityX, and more"
  }, {
    category: "AI",
    items: "ChatGPT, Copilot, AI Awareness, Gemini, AI Ethics, and more"
  }, {
    category: "Networking",
    items: "Cisco CCNA, CCNP, Network+, Wireshark, IPv6, BGP, and more"
  }, {
    category: "Full Stack Developer",
    items: "Python, Javascript, React, .NET, HTML/CSS, AI in Coding, and more"
  }, {
    category: "DevOps",
    items: "Kubernetes, Docker, IAC, CI/CD, CKA, Hashicorp, and more"
  }, {
    category: "Business Pro",
    items: "Power Apps, Power Automate, Power BI, Azure Data, MS Fabric, and more"
  }, {
    category: "Project Management",
    items: "Authorized Training Partner for PMI, PMP, ACP, Project +, CAPM, Lean Six Sigma, and more"
  }, {
    category: "Help Desk",
    items: "CompTIA (Tech+, A+, Net+, Sec+), ITIL v4 Foundations, and more"
  }];
  return <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gradient-primary leading-tight pb-2">Enterprise IT</h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
          StormWind's one-stop training ecosystem for IT, DevOps, AI, Project Management, and Data Analytics.
          Stay up to date on evolving technology while learning directly from world-class instructors.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Technologies We Train On</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => {
          const techLinks: Record<string, string> = {
            "Microsoft": "/microsoft",
            "Cloud": "/cloud",
            "Cybersecurity": "/cybersecurity",
            "AI": "/ai-pro",
            "Networking": "/networking",
            "Full Stack Developer": "/fullstack-developer",
            "DevOps": "/devops",
            "Business Pro": "/business-pro",
            "Project Management": "/project-management",
            "Help Desk": "/help-desk"
          };
          return <Link key={index} to={techLinks[tech.category]} className="glass-feature-card group relative overflow-hidden rounded-lg p-4 transition-all duration-300 cursor-pointer block">
                <h4 className="text-base font-bold text-foreground relative z-10 mb-2">{tech.category}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed relative z-10">{tech.items}</p>
              </Link>;
        })}
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
          <h3 className="text-2xl font-bold">Platform Features</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {consolidatedFeatures.map((feature, index) => {
          const featureLinks: Record<string, string> = {
            "Learning Paths": "/learning-paths",
            "Bytes: Microlearning": "/bytes",
            "AI-Powered Learning": "/ai-learning",
            "StormWind Ranges": "/ranges",
            "Live Instructor Led": "/live-instructor-led",
            "1:1 Mentoring": "/mentoring",
            "Skills Assessments": "/skills-assessments",
            "Enterprise Reporting": "/enterprise-reporting"
          };
          return <Link key={index} to={featureLinks[feature.title]} className="glass-feature-card group relative overflow-hidden rounded-lg p-5 transition-all duration-300 cursor-pointer block">
                {/* Icon */}
                <div className="mb-3 inline-flex p-3 rounded-lg border-2 border-primary/50 bg-primary/5">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Title with Emoji */}
                <h4 className="text-base font-bold text-foreground flex items-center gap-2 mb-2">
                  <span>{feature.emoji}</span>
                  <span>{feature.title}</span>
                </h4>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Link>;
        })}
        </div>
      </div>

      {/* SSO Banner */}
      <div className="mt-12 animate-fade-in">
        <div className="relative overflow-hidden rounded-lg border border-border bg-muted/30 p-6 text-center">
          <h3 className="text-xl font-semibold text-muted-foreground relative z-10">
            Single Sign On Available
          </h3>
        </div>
      </div>
    </div>;
};
export default EnterpriseIT;