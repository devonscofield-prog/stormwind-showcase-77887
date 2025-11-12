import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Award, BookOpen, Video, Clock, Users, ExternalLink, Monitor, Router, Target, Shield, MessageCircle, TrendingUp } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import spikeXavier from "@/assets/spike-xavier.png";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import jasonYates from "@/assets/jason-yates.png";
import willPanek from "@/assets/will-panek.png";
const HelpDesk = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};
  useEffect(() => {
    document.title = "Help Desk";
  }, []);
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Help Desk Training</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              Help Desk Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Build essential IT support skills with comprehensive training in hardware, software, networking, and customer service excellence
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate('/courses?category=Help Desk')} className="gap-2">
                Explore Courses
              </Button>
              <Button size="lg" asChild className="gap-2">
                <a href="/ranges" target="_blank" rel="noopener noreferrer">
                  Explore Ranges
                </a>
              </Button>
            </div>
          </div>

          {/* Help Desk Technologies Section */}
          <div className="mb-32 animate-fade-in">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
              {/* Hardware & Software Support */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Hardware & Software Support</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  PC hardware troubleshooting, mobile devices, printers, peripherals, software installation, and system maintenance.
                </p>
              </div>

              {/* Operating Systems */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Operating Systems</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Windows and Linux administration, configuration, updates, and troubleshooting for desktop support environments.
                </p>
              </div>

              {/* Customer Service */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Customer Service</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Communication skills, problem-solving techniques, conflict resolution, and professional customer interaction best practices.
                </p>
              </div>

              {/* ITSM & Ticketing */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">ITSM & Ticketing</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  ITIL frameworks, ticketing systems, incident management, service desk operations, and IT service delivery processes.
                </p>
              </div>
            </div>

          </div>

          {/* Featured Courses Section */}
          <div className="mb-32 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Launch your IT support career with industry-recognized certifications and expert instruction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* CompTIA A+ Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={spikeXavier} alt="Spike Xavier" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">CompTIA A+</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Spike Xavier</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Beginner</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The industry-standard certification for IT support professionals. Master hardware, software, networking, mobile devices, operating systems, security, and troubleshooting fundamentals.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions Available</p>
                      <p className="text-xs text-muted-foreground">Interactive learning with expert guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs Included</p>
                      <p className="text-xs text-muted-foreground">Practice with real-world scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plan</p>
                      <p className="text-xs text-muted-foreground">Coming soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ITIL v4 Foundations Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={raymondLacoste} alt="Raymond Lacoste" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">ITIL v4 Foundations</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Raymond Lacoste</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Intermediate</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Learn the globally recognized ITIL framework for IT service management. Master best practices for service delivery, incident management, problem resolution, and continuous improvement in modern IT environments.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plan</p>
                      <p className="text-xs text-muted-foreground">Structured path to ITIL certification</p>
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

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Intermediate</span>
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

              {/* Security+ Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={raymondLacoste} alt="Raymond Lacoste" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">CompTIA Security+</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Raymond Lacoste</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Intermediate</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  An international, vendor-neutral certification proving your knowledge and skills to assess security posture, implement solutions, and monitor hybrid environments including cloud, mobile, and IoT. Covers governance, risk, compliance, and incident response.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs</p>
                      <p className="text-xs text-muted-foreground">Practice security concepts in real environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge before certification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plans</p>
                      <p className="text-xs text-muted-foreground">Structured learning path</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CompTIA Tech+ Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={jasonYates} alt="Jason Yates" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">CompTIA Tech+</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Jason Yates</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Beginner</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Entry-level IT certification perfect for those starting their technology career. Build foundational knowledge in hardware, software, networking basics, database fundamentals, and security concepts. Ideal for aspiring IT support professionals.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Prepare confidently for certification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">On-Demand Availability</p>
                      <p className="text-xs text-muted-foreground">Learn at your own pace</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Beginner Friendly</p>
                      <p className="text-xs text-muted-foreground">No prior IT experience required</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MD-102: Endpoint Administrator Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={willPanek} alt="Will Panek" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">MD-102: Endpoint Administrator</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Will Panek</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Intermediate</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Learn to deploy, configure, secure, manage, and monitor devices and client applications in an enterprise environment. Master Windows 11, Intune, Microsoft Endpoint Configuration Manager, and endpoint security.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions Available</p>
                      <p className="text-xs text-muted-foreground">Expert-led training sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">18 Hours of Training</p>
                      <p className="text-xs text-muted-foreground">Comprehensive endpoint management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Skills Combination Section */}
            <div className="mt-20 max-w-5xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Help Desk Skills</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Combine your technical training with our Business Skills courses to excel in customer service and interpersonal communication
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="rounded-lg bg-card/50 border border-primary/20 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageCircle className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold">Customer Service Excellence</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Professional communication techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Conflict resolution strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Active listening skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Empathy and patience development</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-primary/20 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold">Professional Development</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Effective email and written communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Time management and organization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Team collaboration best practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Problem-solving and critical thinking</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" onClick={() => navigate("/business-skills", {
                  state: {
                    technologies,
                    features
                  }
                })} className="gap-2">
                    Explore Business Skills Training
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center mt-12">
              
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HelpDesk;