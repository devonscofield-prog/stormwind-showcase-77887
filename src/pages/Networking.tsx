import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Cpu, Router, Award, BookOpen, Video, ExternalLink, Users, Target, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import danYoung from "@/assets/dan-young.png";
const Networking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};
  useEffect(() => {
    document.title = "Networking";
  }, []);
  const categories = [{
    id: "network-training-overview",
    icon: BookOpen,
    title: "Network Training Overview",
    description: "Comprehensive networking training from foundation to advanced",
    color: "text-blue-500"
  }, {
    id: "network-range",
    icon: Router,
    title: "Network Range",
    description: "Hands-on labs in real-world network environments",
    color: "text-primary"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              Networking Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive networking training covering Cisco certifications, network security, infrastructure design, and hands-on practical experience
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate('/courses?category=Networking')} className="gap-2">
                Explore Courses
              </Button>
              <Button size="lg" onClick={() => navigate('/ranges')} className="gap-2">
                Explore Ranges
              </Button>
            </div>
        </div>

          {/* Networking Technologies Section */}
          <div className="mb-32 animate-fade-in">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
              {/* Routing & Switching */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Router className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Routing & Switching</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Advanced routing protocols including BGP, OSPF, EIGRP, and layer 2/3 switching technologies for enterprise networks.
                </p>
              </div>

              {/* Network Security */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Network Security</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Firewalls, VPNs, network access control, intrusion detection systems, and security best practices for network infrastructure.
                </p>
              </div>

              {/* IPv6 & Modern Networking */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">IPv6 & Modern Networking</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  IPv6 deployment, addressing, routing, and transition mechanisms for next-generation network infrastructure.
                </p>
              </div>

              {/* Network Analysis */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Network Analysis</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wireshark packet analysis, network monitoring tools, performance optimization, and troubleshooting methodologies.
                </p>
              </div>
            </div>

          </div>

        {/* Featured Courses Section */}
          <div className="mb-32 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Launch your networking career with our most popular courses, featuring comprehensive study plans, hands-on labs, and expert instruction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Network+ Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={raymondLacoste} alt="Raymond Lacoste" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">CompTIA Network+</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Raymond Lacoste</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A vendor-neutral networking certification that validates the essential knowledge and skills needed to confidently design, configure, manage, and troubleshoot wired and wireless networks. Covers network infrastructure, operations, security, and troubleshooting.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plan</p>
                      <p className="text-xs text-muted-foreground">Streamlined path to certification success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Router className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Exam Crash Course</p>
                      <p className="text-xs text-muted-foreground">Intensive preparation included in study plan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions Available</p>
                      <p className="text-xs text-muted-foreground">Interactive learning with expert guidance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CCNA Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={raymondLacoste} alt="Raymond Lacoste" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Cisco CCNA</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Raymond Lacoste</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive Cisco networking certification covering network fundamentals, IP connectivity and services, security fundamentals, automation, and programmability. Master the skills to install, configure, operate, and troubleshoot enterprise networks.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plan</p>
                      <p className="text-xs text-muted-foreground">Structured approach to CCNA mastery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Router className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Exam Crash Course</p>
                      <p className="text-xs text-muted-foreground">Final preparation included in study plan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions Available</p>
                      <p className="text-xs text-muted-foreground">Engage directly with expert instructors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CCNP Enterprise: ENARSI Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={raymondLacoste} alt="Raymond Lacoste" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Cisco CCNP Enterprise: ENARSI</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Raymond Lacoste</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Advanced
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Advanced routing and services implementation course covering Layer 3 technologies, VPN services, infrastructure security, and infrastructure services. Master enterprise-level network troubleshooting and optimization.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Router className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs</p>
                      <p className="text-xs text-muted-foreground">Practice in real network environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">Get instant help and guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">1:1 Instructor Mentoring</p>
                      <p className="text-xs text-muted-foreground">Direct access to expert instructors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modern Networking with IPv6 Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={danYoung} alt="Dan Young" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Modern Networking with IPv6</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Dan Young</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  An intense, practical-focused course on IPv6. Covers key skills to deploy an IPv6 infrastructure. CCNA or Network+ level knowledge will be helpful to get the most out of this course. Extensive hands-on available in the Net Range.
                </p>


                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Router className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs</p>
                      <p className="text-xs text-muted-foreground">Practice in the Net Range environment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">1:1 Mentoring</p>
                      <p className="text-xs text-muted-foreground">Expert guidance when you need it</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Bytes</p>
                      <p className="text-xs text-muted-foreground">Bite-sized, focused lessons</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BGP Routing Fundamentals Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={danYoung} alt="Dan Young" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Router className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">BGP Routing Fundamentals for IPv4</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Dan Young</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Advanced
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  BGP is a particularly challenging protocol to support in a production network. It behaves differently, has strict design rules and behaviors that must be fully understood. This course focuses on real-world considerations to build a foundation for BGP success.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Bytes</p>
                      <p className="text-xs text-muted-foreground">Focused, digestible content</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Router className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
              </div>

              {/* Wireshark for IT Professionals Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={danYoung} alt="Dan Young" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Wireshark for IT Professionals</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Dan Young</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master network protocol analysis and troubleshooting with Wireshark. Learn to capture, analyze, and interpret network traffic to diagnose and resolve complex networking issues efficiently.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Router className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs</p>
                      <p className="text-xs text-muted-foreground">Practice packet analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Pretest and Posttest</p>
                      <p className="text-xs text-muted-foreground">Measure your progress</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Bytes</p>
                      <p className="text-xs text-muted-foreground">Efficient, targeted instruction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>;
};
export default Networking;