import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Zap, BookOpen, Video, Users, ExternalLink, Clock, Target } from "lucide-react";
import logoImage from "@/assets/stormwind-logo.png";
import mikePfeiffer from "@/assets/mike-pfeiffer.png";
import danYoung from "@/assets/dan-young.png";
import samBurr from "@/assets/sam-burr.png";
import ashleyHunt from "@/assets/ashley-hunt.png";
import chrisPaul from "@/assets/chris-paul.png";

const Microlearning = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  useEffect(() => {
    document.title = "Microlearning";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src={logoImage} 
            alt="StormWind Studios Logo" 
            className="h-12 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => navigate('/')}
          />
          <div className="flex gap-2">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              size="sm"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              Bytes: Microlearning
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Learn faster with bite-sized, focused lessons designed for busy professionals. Our Bytes approach delivers targeted knowledge in short, digestible segments that fit seamlessly into your schedule. Each module is optimized for maximum retention and immediate application.
            </p>
            <Button
              onClick={() => navigate("/courses")}
              variant="default"
              size="lg"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Courses
            </Button>
          </div>

          {/* What is Bytes Section */}
          <div className="mb-32 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">What is Bytes?</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Bytes is a modern educational approach that breaks down complex topics into small, focused learning units. Each lesson typically takes 3-10 minutes to complete, making it perfect for:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Learning on the go during breaks or commutes</li>
                    <li>Just-in-time training when you need specific skills</li>
                    <li>Better knowledge retention through focused content</li>
                    <li>Flexible learning that adapts to your schedule</li>
                    <li>Quick skill refreshers and knowledge updates</li>
                  </ul>
                  <p className="mt-6">
                    Our Bytes courses feature immediate feedback, real-world scenarios, and hands-on labs to ensure you gain practical, applicable skills efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Courses Section */}
          <div className="mb-32 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Bytes Courses</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Quick, focused training designed for maximum impact in minimum time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* PowerShell Foundations */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={mikePfeiffer} alt="Mike Pfeiffer" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">PowerShell Foundations</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Mike Pfeiffer</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master PowerShell fundamentals with bite-sized lessons covering cmdlets, scripting, automation, and system administration. Perfect for IT professionals looking to automate tasks and improve efficiency.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Quick Lessons</p>
                      <p className="text-xs text-muted-foreground">5-10 minute focused modules</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Practice</p>
                      <p className="text-xs text-muted-foreground">Practical exercises included</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Expert Instruction</p>
                      <p className="text-xs text-muted-foreground">Learn from industry veterans</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-auto" size="lg" asChild>
                  <a href="https://app.stormwindstudios.com/microsoft-it/server-administration-server-2025/powershell-foundations" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>

              {/* ChatGPT for IT Professionals */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={danYoung} alt="Dan Young" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">ChatGPT for IT Professionals</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Dan Young</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Discover how to leverage ChatGPT and AI tools to enhance your IT workflows. Learn prompt engineering, automation techniques, and practical applications for troubleshooting and documentation.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Bite-Sized Modules</p>
                      <p className="text-xs text-muted-foreground">Learn at your own pace</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Real-World Examples</p>
                      <p className="text-xs text-muted-foreground">Practical IT scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Best Practices</p>
                      <p className="text-xs text-muted-foreground">Industry-standard techniques</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-auto" size="lg" asChild>
                  <a href="https://app.stormwindstudios.com/chatgpt-and-openai/ai-and-chatgpt/chatgpt-it-professionals" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>

              {/* Intune for Microsoft Enterprises */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={samBurr} alt="Sam Burr" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Intune for Microsoft Enterprises</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Sam Burr</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master Microsoft Intune for modern device management. Learn to deploy, secure, and manage devices and applications across your enterprise with cloud-based mobile device management.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Bytes Format</p>
                      <p className="text-xs text-muted-foreground">Short, focused lessons</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs</p>
                      <p className="text-xs text-muted-foreground">Practice in real environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Enterprise Focus</p>
                      <p className="text-xs text-muted-foreground">Real-world scenarios</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-auto" size="lg" asChild>
                  <a href="https://app.stormwindstudios.com/microsoft-it/desktop-support/intune-microsoft-enterprises" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>

              {/* AI for Project Managers */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={ashleyHunt} alt="Ashley Hunt" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">AI for Project Managers</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Ashley Hunt</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Transform your project management with AI tools. Learn how to leverage artificial intelligence for planning, risk assessment, resource allocation, and stakeholder communication.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Quick Learning</p>
                      <p className="text-xs text-muted-foreground">Get started fast</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practical Tools</p>
                      <p className="text-xs text-muted-foreground">AI applications for PMs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Real Scenarios</p>
                      <p className="text-xs text-muted-foreground">Project management use cases</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-auto" size="lg" asChild>
                  <a href="https://app.stormwindstudios.com/stormwind-microlearning-bytes/project-management-fundamentals/ai-project-managers" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>

              {/* NIST Cybersecurity Framework 2.0 Overview */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={chrisPaul} alt="Chris Paul" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">NIST Cybersecurity Framework 2.0 Overview</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Chris Paul</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Understand the latest NIST Cybersecurity Framework with focused lessons on the six core functions: Identify, Protect, Detect, Respond, Recover, and Govern. Essential for security professionals.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Efficient Learning</p>
                      <p className="text-xs text-muted-foreground">Framework in digestible chunks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Compliance Focus</p>
                      <p className="text-xs text-muted-foreground">Meet security standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Current Standards</p>
                      <p className="text-xs text-muted-foreground">Latest 2.0 framework</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-auto" size="lg" asChild>
                  <a href="https://app.stormwindstudios.com/stormwind-microlearning-bytes/cybersecurity/nist-cybersecurity-framework-20-overview" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>

              {/* BGP Routing Fundamentals for IPv4 */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={danYoung} alt="Dan Young" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">BGP Routing Fundamentals for IPv4</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Dan Young</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  BGP is a particularly challenging protocol to support in a production network. This course focuses on real-world considerations to build a foundation for BGP success with bite-sized lessons on design rules and behaviors.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Bytes</p>
                      <p className="text-xs text-muted-foreground">Focused, digestible content</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs</p>
                      <p className="text-xs text-muted-foreground">Real-world BGP configurations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">1:1 Instructor Mentoring</p>
                      <p className="text-xs text-muted-foreground">Expert support for complex topics</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-auto" size="lg" asChild>
                  <a href="https://app.stormwindstudios.com/cisco/networking/bgp-routing-fundamentals-ipv4" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microlearning;
