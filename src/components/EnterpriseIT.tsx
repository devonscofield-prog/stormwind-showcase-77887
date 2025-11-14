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
  const consolidatedFeatures = [
    {
      icon: CheckCircle2,
      emoji: "✅",
      title: "Learning Paths",
      description: "Structured paths with guided assessment, targeted training, and readiness validation—personalized and effective.",
      details: "Flexible pathways for every skill level. Begin with an assessment, follow a guided roadmap, and validate your readiness with confidence.",
      additionalInfo: "Access live instructor-led Epic Live sessions and on-demand courses with instant replay for flexible learning anytime, anywhere."
    },
    {
      icon: Clock,
      emoji: "⏰",
      title: "Bytes: Microlearning",
      description: "Short sessions (3-5 min), adaptive personalization, sequential skill stacking, and real-world application.",
      details: "Learn in brief, focused sessions designed for retention. Get personalized paths from initial assessments and stack skills progressively for rapid mastery.",
    },
    {
      icon: Brain,
      emoji: "🧠",
      title: "AI-Powered Learning",
      description: "StormWind's AI Tutors leverage proprietary knowledge bases—no public internet, no hallucinations or inaccuracies.",
      details: "They support your certification studies, answer on-the-fly questions, provide step-by-step troubleshooting guidance, and integrate perfectly with our hands-on training content.",
      additionalInfo: "Combine AI assistance with 1:1 instructor mentoring for personal guidance from industry-recognized experts."
    },
    {
      icon: Wrench,
      emoji: "🛠️",
      title: "StormWind Ranges",
      description: "Hands-on cyber, Azure, Microsoft, and networking ranges – real, production-like practice environments.",
      bullets: [
        { emoji: "🔒", text: "Cyber Range: Practice with Splunk, OpenVAS, Nmap, Wireshark, and more." },
        { emoji: "☁️", text: "Azure Range: Build VNets, VMs, storage and more, including an empty sandbox for testing ARM/Bicep or Terraform templates." },
        { emoji: "💻", text: "Microsoft Range: Server 2025, Windows 11, AD, DNS, PowerShell, and more." },
        { emoji: "🌐", text: "Networking Range: VLANs, OSPF, BGP, IPv4/6, and security configurations." }
      ]
    },
    {
      icon: Video,
      emoji: "🎓",
      title: "Live Instructor Led Courses",
      description: "The most effective learning possible happens in a live environment with a world class instructor. Many of StormWind's classes run live, allowing you to fully interact in the most engaging online learning experience available anywhere.",
      details: "The short, 2-hour sessions allow you to easily digest the information."
    },
    {
      icon: UserCheck,
      emoji: "🤝",
      title: "1:1 Mentoring with Industry Experts",
      description: "Like learning anything new, you are inevitably going to get stuck on something. Unlike traditional eLearning, you aren't on your own. You have access to the instructor from every class to ask questions. This feature is one of the most raved about offerings by our clients."
    },
    {
      icon: Target,
      emoji: "🎯",
      title: "Skills Assessments",
      description: "Test your team's skills on a number of different topics and get real time data on where the gaps are. Get course suggestions based on proficiency and streamline the training process by ensuring everyone is taking courses that fit their skill level."
    },
    {
      icon: FileBarChart,
      emoji: "📊",
      title: "Enterprise Reporting and Administration",
      description: "Generate easy to read reports on usage and course completion. Whether you need it for compliance/insurance purposes, or to present to management, we make it simple to get the data you need.",
      details: "You can assign individual courses, create and assign learning paths, add due dates, and track assessment scores all from an intuitive Dashboard that is only visible to designated admins."
    }
  ];

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
    {
      category: "Microsoft",
      items: "Server 2025, M365 Administration, PowerShell, Windows 11, Intune, Endpoint Administration, and more",
    },
    {
      category: "Cloud",
      items: "Azure, AWS, Google Cloud, Virtual Desktops, Cloud Security, and more",
    },
    {
      category: "Cybersecurity",
      items: "CISSP, Security+, Penetration Testing, SecurityX, and more",
    },
    {
      category: "AI",
      items: "ChatGPT, Copilot, AI Awareness, Gemini, AI Ethics, and more",
    },
    {
      category: "Networking",
      items: "Cisco CCNA, CCNP, Network+, Wireshark, IPv6, BGP, and more",
    },
    {
      category: "Full Stack Developer",
      items: "Python, Javascript, React, .NET, HTML/CSS, AI in Coding, and more",
    },
    {
      category: "DevOps",
      items: "Kubernetes, Docker, IAC, CI/CD, CKA, Hashicorp, and more",
    },
    {
      category: "Business Pro",
      items: "Power Apps, Power Automate, Power BI, Azure Data, MS Fabric, and more",
    },
    {
      category: "Project Management",
      items: "Authorized Training Partner for PMI, PMP, ACP, Project +, CAPM, Lean Six Sigma, and more",
    },
    {
      category: "Help Desk",
      items: "CompTIA (Tech+, A+, Net+, Sec+), ITIL v4 Foundations, and more",
    },
  ];

  return (
    <div className="animate-fade-in">
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
            
            return (
              <Link 
                key={index}
                to={techLinks[tech.category]}
                className="group relative overflow-hidden rounded-lg border-2 p-4 transition-all duration-300 cursor-pointer border-border bg-card hover:border-primary hover:shadow-card-hover block"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-full -mr-10 -mt-10 transition-transform duration-300 group-hover:scale-150" />
                <h4 className="text-base font-bold text-foreground relative z-10 mb-2">{tech.category}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed relative z-10">{tech.items}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Course Catalog Button */}
      <div className="flex justify-center mb-16">
        <Button
          asChild
          size="lg"
          className="gap-2"
        >
          <Link to="/courses">
            <BookOpen className="w-5 h-5" />
            View Complete Course Catalog
          </Link>
        </Button>
      </div>

      {/* Consolidated Features Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <h3 className="text-2xl font-bold">Platform Features</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Link 
                key={index}
                to={featureLinks[feature.title]}
                className="group relative overflow-hidden rounded-lg border-2 p-6 transition-all duration-300 cursor-pointer border-border bg-card hover:border-primary hover:shadow-card-hover block"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-4 rounded-xl border-2 border-primary/50 bg-primary/5">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Title with Emoji */}
                <h4 className="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                  <span>{feature.emoji}</span>
                  <span>{feature.title}</span>
                </h4>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {feature.description}
                </p>
                
                {/* Details */}
                {feature.details && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {feature.details}
                  </p>
                )}
                
                {/* Bullets */}
                {feature.bullets && (
                  <ul className="space-y-2 mb-3">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="flex-shrink-0">{bullet.emoji}</span>
                        <span className="leading-relaxed">{bullet.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Additional Info */}
                {feature.additionalInfo && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.additionalInfo}
                  </p>
                )}
              </Link>
            );
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
    </div>
  );
};

export default EnterpriseIT;
