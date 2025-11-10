import { useEffect } from "react";
import { Brain, Clock, Wrench, CheckCircle2, FileBarChart, Target, UserCheck, Video, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trainingLinks } from "@/lib/trainingLinks";
import stormwindLogo from "@/assets/stormwind-logo.png";

const Features = () => {
  useEffect(() => {
    document.title = "Platform Features | StormWind Studios";
  }, []);

  const getFullUrl = (link: string) => {
    return link.startsWith('/') ? window.location.origin + link : link;
  };

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src={stormwindLogo} 
                alt="StormWind Studios" 
                className="h-10 w-auto"
              />
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
            Platform Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of learning tools and features that make StormWind Studios 
            the premier choice for enterprise IT training.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {consolidatedFeatures.map((feature, index) => {
            const hasLink = trainingLinks[feature.title];
            const CardWrapper = hasLink ? 'a' : 'div';
            const wrapperProps = hasLink ? {
              href: getFullUrl(trainingLinks[feature.title]),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group relative overflow-hidden rounded-lg border-2 border-border bg-card hover:border-primary hover:shadow-card-hover p-6 transition-all duration-300 cursor-pointer block"
            } : {
              className: "group relative overflow-hidden rounded-lg border-2 border-border bg-card p-6 transition-all duration-300"
            };

            return (
              <CardWrapper 
                key={index}
                {...wrapperProps}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-4 rounded-xl border-2 border-primary/50 bg-primary/5">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Title with Emoji */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span>{feature.emoji}</span>
                    <span>{feature.title}</span>
                  </h2>
                  {hasLink && (
                    <div className="flex-shrink-0 p-1">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </div>
                
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
              </CardWrapper>
            );
          })}
        </div>

        {/* SSO Banner */}
        <div className="mt-16 animate-fade-in">
          <div className="relative overflow-hidden rounded-lg border border-border bg-muted/30 p-6 text-center">
            <h3 className="text-xl font-semibold text-muted-foreground relative z-10">
              Single Sign On Available
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Features;
