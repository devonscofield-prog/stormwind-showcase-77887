import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, ExternalLink, ChevronDown, ExternalLinkIcon, Copy, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@/assets/stormwind-logo.png";
import { trainingLinks } from "@/lib/trainingLinks";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { technologies = [], features = [] } = location.state || {};

  useEffect(() => {
    document.title = "Results";
  }, []);

  const handleStartOver = () => {
    navigate("/", {
      state: {
        technologies: [],
        features: [],
      },
    });
  };

  const handleCopyToClipboard = async () => {
    let text = "YOUR SELECTED TRAINING SOLUTIONS\n";
    text += "=" .repeat(50) + "\n\n";
    
    // Enterprise IT - Technologies
    if (technologies.length > 0) {
      text += "ENTERPRISE IT\n";
      text += "-".repeat(50) + "\n";
      technologies.forEach((tech: string) => {
        text += `• ${tech}\n`;
        if (tech === "Business Pro") {
          text += `  https://showcase.stormwind.com/business-pro\n`;
        } else if (tech === "Project Management") {
          text += `  ${window.location.origin}/project-management\n`;
        } else if (tech === "AI") {
          text += `  ${window.location.origin}/ai-pro\n`;
        } else if (tech === "Cybersecurity") {
          text += `  ${window.location.origin}/cybersecurity\n`;
        } else if (tech === "Networking") {
          text += `  ${window.location.origin}/networking\n`;
        } else if (tech === "Help Desk") {
          text += `  ${window.location.origin}/help-desk\n`;
        } else if (tech === "DevOps") {
          text += `  ${window.location.origin}/devops\n`;
        } else if (tech === "Microsoft") {
          text += `  ${window.location.origin}/microsoft\n`;
        } else if (tech === "Cloud") {
          text += `  ${window.location.origin}/cloud\n`;
        } else if (tech === "Full Stack Developer") {
          text += `  ${window.location.origin}/fullstack-developer\n`;
        } else if (trainingLinks[tech]) {
          text += `  ${window.location.origin}${trainingLinks[tech]}\n`;
        }
        text += "\n";
      });
    }
    
    // Platform Features
    const platformFeatures = features.filter((f: string) => 
      ["StormWind Ranges", "Bytes: Microlearning", "Learning Paths", "AI-Powered Learning", 
       "Enterprise Reporting and Administration", "Skills Assessments", 
       "1:1 Mentoring with Industry Experts", "Live Instructor Led Courses"].includes(f)
    );
    
    if (platformFeatures.length > 0) {
      text += "\nPLATFORM FEATURES\n";
      text += "-".repeat(50) + "\n";
      platformFeatures.forEach((feature: string) => {
        text += `• ${feature}\n`;
        if (feature === "StormWind Ranges") {
          text += `  ${window.location.origin}/ranges\n`;
        } else if (feature === "1:1 Mentoring with Industry Experts") {
          text += `  https://showcase.stormwind.com/mentoring\n`;
        } else if (feature === "Learning Paths") {
          text += `  ${window.location.origin}/learning-paths\n`;
        } else if (trainingLinks[feature]) {
          text += `  ${window.location.origin}${trainingLinks[feature]}\n`;
        }
        text += "\n";
      });
    }
    
    // Enterprise End User
    const enterpriseEndUserFeatures = features.filter((f: string) => 
      ["Enterprise End User", "Desktop App Training", "AI Training", 
       "Security Awareness Training", "2,000+ Business Skills Courses"].includes(f)
    );
    
    if (enterpriseEndUserFeatures.length > 0) {
      text += "\nENTERPRISE END USER\n";
      text += "-".repeat(50) + "\n";
      enterpriseEndUserFeatures.forEach((feature: string) => {
        text += `• ${feature}\n`;
        if (feature === "Enterprise End User") {
          text += `  ${window.location.origin}/enterprise-end-user\n`;
        } else if (feature === "Security Awareness Training") {
          text += `  ${window.location.origin}/security-awareness\n`;
        } else if (feature === "Desktop App Training") {
          text += `  ${window.location.origin}/desktop-apps\n`;
        } else if (feature === "AI Training") {
          text += `  ${window.location.origin}/ai-pro\n`;
        } else if (feature === "2,000+ Business Skills Courses") {
          text += `  https://showcase.stormwind.com/business-skills\n`;
        }
        text += "\n";
      });
    }
    
    // StormAI Phishing
    if (features.includes("StormAI Phishing")) {
      text += "\nSTORMAI PHISHING\n";
      text += "-".repeat(50) + "\n";
      text += `• StormAI Phishing\n`;
      text += `  https://showcase.stormwind.com/phishing\n\n`;
    }
    
    // HR Compliance
    if (features.includes("HR Compliance")) {
      text += "\nHR COMPLIANCE\n";
      text += "-".repeat(50) + "\n";
      text += `• HR Compliance\n`;
      text += `  ${window.location.origin}${trainingLinks["HR Compliance"]}\n\n`;
    }
    
    // Project Management (if in features, not technologies)
    if (features.includes("Project Management") && !technologies.includes("Project Management")) {
      text += "\nPROJECT MANAGEMENT\n";
      text += "-".repeat(50) + "\n";
      text += `• Project Management\n`;
      text += `  ${window.location.origin}/project-management\n\n`;
    }
    
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard!",
        description: "Your selections and links have been copied.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleOpenAllLinks = () => {
    const links: string[] = [];
    
    // Platform features to exclude from "Open All Links"
    const platformFeatures = [
      "StormWind Ranges",
      "Bytes: Microlearning",
      "Learning Paths",
      "AI-Powered Learning",
      "Enterprise Reporting and Administration",
      "Skills Assessments",
      "1:1 Mentoring with Industry Experts",
      "Live Instructor Led Courses"
    ];
    
    // Collect technology links
    technologies.forEach((tech: string) => {
      if (tech === "Business Pro") {
        links.push("https://showcase.stormwind.com/business-pro");
      } else if (tech === "Project Management") {
        links.push("/project-management");
      } else if (tech === "AI") {
        links.push("/ai-pro");
      } else if (tech === "Cybersecurity") {
        links.push("/cybersecurity");
      } else if (tech === "Networking") {
        links.push("/networking");
      } else if (tech === "Help Desk") {
        links.push("/help-desk");
      } else if (tech === "DevOps") {
        links.push("/devops");
      } else if (tech === "Microsoft") {
        links.push("/microsoft");
      } else if (tech === "Cloud") {
        links.push("/cloud");
      } else if (tech === "Full Stack Developer") {
        links.push("/fullstack-developer");
      } else if (trainingLinks[tech]) {
        links.push(trainingLinks[tech]);
      }
    });
    
    // Collect feature links (excluding platform features)
    features.forEach((feature: string) => {
      // Skip platform features
      if (platformFeatures.includes(feature)) {
        return;
      }
      
      if (feature === "Enterprise End User") {
        links.push("/enterprise-end-user");
      } else if (feature === "Security Awareness Training") {
        links.push("/security-awareness");
      } else if (feature === "Desktop App Training") {
        links.push("/desktop-apps");
      } else if (feature === "AI Training") {
        links.push("/ai-pro");
      } else if (feature === "2,000+ Business Skills Courses") {
        links.push("https://showcase.stormwind.com/business-skills");
      } else if (feature === "StormAI Phishing") {
        links.push("https://showcase.stormwind.com/phishing");
      } else if (feature === "HR Compliance") {
        links.push(trainingLinks["HR Compliance"]);
      } else if (feature === "Project Management") {
        links.push("/project-management");
      } else if (trainingLinks[feature]) {
        links.push(trainingLinks[feature]);
      }
    });
    
    // Always add Platform Features page as the last link
    links.push("/features");
    
    // Open all links with a small delay between each
    links.forEach((link, index) => {
      setTimeout(() => {
        window.open(link, '_blank');
      }, index * 100); // 100ms delay between each tab
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src={logoImage} 
            alt="StormWind Studios Logo" 
            className="h-12 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => navigate('/')}
          />
          <Button onClick={handleStartOver} variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Start Over
          </Button>
        </div>
      </header>

      {/* Floating Buttons */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 flex flex-col gap-4">
        {(technologies.length > 0 || features.length > 0) && (
          <>
            <Button 
              onClick={handleCopyToClipboard}
              size="lg"
              className="px-8 shadow-xl gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy to Clipboard
            </Button>
            <Button 
              onClick={handleOpenAllLinks}
              size="lg"
              className="px-8 shadow-xl gap-2"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Open All Links
            </Button>
            <p className="text-xs text-muted-foreground text-center max-w-[200px]">
              If this function isn't working, make sure you allow popups for this website
            </p>
          </>
        )}
        <Button 
          onClick={() => navigate("/", {
            state: {
              technologies,
              features,
            },
          })}
          size="lg"
          className="px-8 shadow-xl"
        >
          Make Additional Selections
        </Button>
        <Button 
          onClick={handleStartOver}
          variant="outline"
          size="lg"
          className="px-8 shadow-xl"
        >
          Start Over
        </Button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              Your Selected Training Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Here's a customized overview based on your selections
            </p>
          </div>

          {/* Results */}
          {(technologies.length > 0 || features.length > 0) && (
            <div className="space-y-16 mb-12">
              {/* Enterprise IT - Technologies */}
              {technologies.length > 0 && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Enterprise IT</h2>
                    <p className="text-muted-foreground">Technologies We Train On</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech: string, index: number) => {
                      const isBusinessPro = tech === "Business Pro";
                      const isProjectManagement = tech === "Project Management";
                      const isAIPro = tech === "AI";
                      const isCybersecurity = tech === "Cybersecurity";
                      const isNetworking = tech === "Networking";
                      const isHelpDesk = tech === "Help Desk";
                      const isDevOps = tech === "DevOps";
                      const isMicrosoft = tech === "Microsoft";
                      const isCloud = tech === "Cloud";
                      
                      if (isBusinessPro) {
                        return (
                          <div
                            key={`tech-${index}`}
                            onClick={() => navigate('/business-pro')}
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        );
                      }

                      if (isProjectManagement) {
                        return (
                          <a
                            key={`tech-${index}`}
                            href="/project-management"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }

                      if (isAIPro) {
                        return (
                          <a
                            key={`tech-${index}`}
                            href="/ai-pro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }

                      if (isCybersecurity) {
                        return (
                          <a
                            key={`tech-${index}`}
                            href="/cybersecurity"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }

                      if (isNetworking) {
                        return (
                          <a
                            key={`tech-${index}`}
                            href="/networking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }

                      if (isHelpDesk) {
                        return (
                          <a
                            key={`tech-${index}`}
                            href="/help-desk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }

                      if (isDevOps) {
                        return (
                          <a
                            key={`tech-${index}`}
                            href="/devops"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }

                      if (isMicrosoft) {
                        return (
                          <a
                            key={`tech-${index}`}
                            href="/microsoft"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }

                      if (isCloud) {
                        return (
                          <a
                            key={`tech-${index}`}
                            href="/cloud"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }

                      const isFullStackDeveloper = tech === "Full Stack Developer";
                      if (isFullStackDeveloper) {
                        return (
                          <a
                            key={`tech-${index}`}
                            href="/fullstack-developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }
                      
                      const url = trainingLinks[tech];
                      return (
                        <a
                          key={`tech-${index}`}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{tech}</h3>
                            <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Enterprise IT - Platform Features */}
              {features.filter((f: string) => ["StormWind Ranges", "Bytes: Microlearning", "Learning Paths", "AI-Powered Learning", "Enterprise Reporting and Administration", "Skills Assessments", "1:1 Mentoring with Industry Experts", "Live Instructor Led Courses"].includes(f)).length > 0 && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Platform Features</h2>
                    <p className="text-muted-foreground">Advanced Learning Tools</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.filter((f: string) => ["StormWind Ranges", "Bytes: Microlearning", "Learning Paths", "AI-Powered Learning", "Enterprise Reporting and Administration", "Skills Assessments", "1:1 Mentoring with Industry Experts", "Live Instructor Led Courses"].includes(f)).map((feature: string, index: number) => {
                      const isStormWindRanges = feature === "StormWind Ranges";
                      const isLearningPaths = feature === "Learning Paths";
                      const isMentoring = feature === "1:1 Mentoring with Industry Experts";
                      
                      if (isLearningPaths) {
                        return (
                          <a
                            key={`feature-${index}`}
                            href="/learning-paths"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }
                      
                      if (isStormWindRanges) {
                        return (
                          <a
                            key={`feature-${index}`}
                            href="/ranges"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }

                      if (isMentoring) {
                        return (
                          <div
                            key={`feature-${index}`}
                            onClick={() => navigate('/mentoring')}
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        );
                      }
                      
                      const url = trainingLinks[feature];
                      
                      return (
                        <a
                          key={`feature-${index}`}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                            <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Enterprise End User */}
              {features.filter((f: string) => ["Enterprise End User", "Desktop App Training", "AI Training", "Security Awareness Training", "2,000+ Business Skills Courses"].includes(f)).length > 0 && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Enterprise End User</h2>
                    <p className="text-muted-foreground">Workforce Training</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.filter((f: string) => ["Enterprise End User", "Desktop App Training", "AI Training", "Security Awareness Training", "2,000+ Business Skills Courses"].includes(f)).map((feature: string, index: number) => {
                      const isEnterpriseEndUser = feature === "Enterprise End User";
                      const isBusinessSkills = feature === "2,000+ Business Skills Courses";
                      const isDesktopApps = feature === "Desktop App Training";
                      const isSecurityAwareness = feature === "Security Awareness Training";
                      const isAITraining = feature === "AI Training";
                      
                      if (isEnterpriseEndUser) {
                        return (
                          <a
                            key={`feature-${index}`}
                            href="/enterprise-end-user"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }
                      
                      if (isSecurityAwareness) {
                        return (
                          <a
                            key={`feature-${index}`}
                            href="/security-awareness"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }
                      
                      if (isDesktopApps) {
                        return (
                          <a
                            key={`feature-${index}`}
                            href="/desktop-apps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }
                      
                      if (isAITraining) {
                        return (
                          <a
                            key={`feature-${index}`}
                            href="/ai-pro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                              <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </a>
                        );
                      }
                      
                      if (isBusinessSkills) {
                        return (
                          <div
                            key={`feature-${index}`}
                            onClick={() => navigate('/business-skills')}
                            className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        );
                      }
                      
                      const url = trainingLinks[feature];
                      
                      return (
                        <a
                          key={`feature-${index}`}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                            <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* StormAI Phishing */}
              {features.includes("StormAI Phishing") && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">StormAI Phishing</h2>
                    <p className="text-muted-foreground">AI-Driven Security Training</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                      onClick={() => navigate('/phishing')}
                      className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">StormAI Phishing</h3>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* HR Compliance */}
              {features.includes("HR Compliance") && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">HR Compliance</h2>
                    <p className="text-muted-foreground">Workplace Compliance Training</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a
                      href={trainingLinks["HR Compliance"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">HR Compliance</h3>
                        <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      </div>
                    </a>
                  </div>
                </div>
              )}

              {/* Project Management */}
              {features.includes("Project Management") && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Project Management</h2>
                    <p className="text-muted-foreground">PMP® Certification & Professional Development</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a
                      href="/project-management"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Project Management</h3>
                        <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* No selections */}
          {technologies.length === 0 && features.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-6">No items selected. Please go back and make your selections.</p>
              <Button onClick={handleStartOver}>
                Go Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
