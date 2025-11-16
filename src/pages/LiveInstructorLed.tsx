import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Users, Video, Clock, Award, Calendar, CheckCircle, RefreshCw } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import ashleyHunt from "@/assets/ashley-hunt.png";
import spikeXavier from "@/assets/spike-xavier.png";
import willPanek from "@/assets/will-panek.png";
const LiveInstructorLed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  useEffect(() => {
    document.title = "Live Instructor Led";
  }, []);
  const popularCourses = [{
    title: "Certified Information Systems Security Professional (CISSP)",
    description: "Master advanced cybersecurity concepts and prepare for the globally recognized CISSP certification covering security and risk management, asset security, and more.",
    level: "Advanced",
    certification: "CISSP",
    url: "https://app.stormwindstudios.com/isc2/cybersecurity/certified-information-systems-security-professional-cissp",
    instructor: "Raymond Lacoste",
    instructorImage: raymondLacoste
  }, {
    title: "Project Management Professional (PMP)",
    description: "Prepare for the globally recognized PMP certification with comprehensive coverage of project management principles, processes, and best practices.",
    level: "Advanced",
    certification: "PMP",
    url: "https://app.stormwindstudios.com/project-management-institute/project-management-certifications/pmp-official-exam-prep",
    instructor: "J. Ashley Hunt",
    instructorImage: ashleyHunt
  }, {
    title: "Cisco CCNA",
    description: "Comprehensive Cisco networking certification covering network fundamentals, IP connectivity and services, security fundamentals, automation, and programmability. Master the skills to install, configure, operate, and troubleshoot enterprise networks.",
    level: "Intermediate",
    certification: "200-301",
    url: "https://app.stormwindstudios.com/learning-path/147731/cisco-ccna-200-301-certification-study-plan",
    instructor: "Raymond Lacoste",
    instructorImage: raymondLacoste
  }, {
    title: "Microsoft Azure Administrator (AZ-104)",
    description: "Master Azure administration including managing subscriptions, storage, virtual networks, and monitoring.",
    level: "Intermediate",
    certification: "AZ-104",
    url: "https://app.stormwindstudios.com/microsoft-it/cloud-azure/az-104-microsoft-azure-administrator#no-back",
    instructor: "Spike Xavier",
    instructorImage: spikeXavier
  }, {
    title: "PMI Agile Certified Practitioner (PMI-ACP)",
    description: "Master agile methodologies and practices for modern project management. Earn 21 contact hours and prepare for the PMI Agile Certified Practitioner certification exam.",
    level: "Intermediate",
    certification: "PMI-ACP",
    url: "https://app.stormwindstudios.com/project-management-institute/project-management-certifications/pmi-agile-certified-practitioner-pmi",
    instructor: "J. Ashley Hunt",
    instructorImage: ashleyHunt
  }, {
    title: "CompTIA Security+",
    description: "Master cybersecurity fundamentals and prepare for the industry-leading Security+ certification with comprehensive coverage of threats, vulnerabilities, and security controls.",
    level: "Intermediate",
    certification: "SY0-701",
    url: "https://app.stormwindstudios.com/learning-path/134251/security-701-certification-study-plan",
    instructor: "Raymond Lacoste",
    instructorImage: raymondLacoste
  }, {
    title: "CompTIA Network+",
    description: "Build a strong foundation in networking technologies and prepare for the Network+ certification covering network infrastructure, operations, and security.",
    level: "Intermediate",
    certification: "N10-009",
    url: "https://app.stormwindstudios.com/learning-path/133297/network-009-certification-study-plan",
    instructor: "Raymond Lacoste",
    instructorImage: raymondLacoste
  }, {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    description: "Learn cloud computing basics and Azure services in this foundational course perfect for anyone starting their cloud journey.",
    level: "Beginner",
    certification: "AZ-900",
    url: "https://app.stormwindstudios.com/learning-path/160987/az-900-certification-study-plan",
    instructor: "Will Panek",
    instructorImage: willPanek
  }, {
    title: "Microsoft 365 Certified Administrator (MS-102)",
    description: "Master Microsoft 365 administration including identity management, security, compliance, and collaboration tools for enterprise environments.",
    level: "Advanced",
    certification: "MS-102",
    url: "https://app.stormwindstudios.com/microsoft-it/microsoft-365office-365-admin/ms-102-microsoft-365-administrator",
    instructor: "Spike Xavier",
    instructorImage: spikeXavier
  }, {
    title: "ITIL v4 Foundations",
    description: "Learn IT service management best practices with ITIL v4 framework covering service value system, practices, and continuous improvement.",
    level: "Beginner",
    certification: "ITIL v4",
    url: "https://app.stormwindstudios.com/learning-path/140850/itil-v4-foundations-certification-study-plan",
    instructor: "Raymond Lacoste",
    instructorImage: raymondLacoste
  }, {
    title: "Endpoint Administrator (MD-102)",
    description: "Learn to deploy, configure, secure, and manage Windows devices in enterprise environments using Microsoft Endpoint Manager and Intune.",
    level: "Intermediate",
    certification: "MD-102",
    url: "https://app.stormwindstudios.com/microsoft-it/desktop-support/md-102-endpoint-administrator#no-back",
    instructor: "Will Panek",
    instructorImage: willPanek
  }, {
    title: "CompTIA A+",
    description: "Launch your IT career with comprehensive training covering hardware, software, troubleshooting, and customer service for the A+ certification.",
    level: "Beginner",
    certification: "Core 1 & Core 2",
    url: "https://app.stormwindstudios.com/comptia/desktop-support/comptia-core-1-220-1201-v15",
    instructor: "Spike Xavier",
    instructorImage: spikeXavier
  }];
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
                <BreadcrumbPage>Live Instructor-Led Training</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight pb-2">
              Live Instructor-Led Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Experience the power of real-time learning with expert instructors. Our live courses combine interactive instruction, hands-on labs, and collaborative learning to accelerate your career growth. Ask questions, get immediate feedback, and learn alongside peers in a dynamic virtual classroom.
            </p>
            <div className="flex justify-center">
              <Button size="lg" onClick={() => navigate('/courses')}>
                <Calendar className="w-5 h-5 mr-2" />
                Browse Course Catalog
              </Button>
            </div>
          </div>

          {/* Why Live Section */}
          <div className="mb-32 animate-fade-in">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">Why Live Instructor-Led Training?</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Real-time learning with certified experts who bring the latest industry insights to every session.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Expert Instructors</p>
                        <p className="text-sm">Industry-certified professionals with real-world experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Interactive Learning</p>
                        <p className="text-sm">Ask questions and get immediate answers in real-time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Flexible Sessions</p>
                        <p className="text-sm">Short 2-4 hour sessions fit easily into your schedule</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Certification-Aligned</p>
                        <p className="text-sm">Structured curriculum designed for exam success</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Always Current</p>
                        <p className="text-sm">Content updated with latest technologies and best practices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Collaborative Environment</p>
                        <p className="text-sm">Learn alongside peers and build your professional network</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Most Popular Live Courses Section */}
          <div className="mb-32 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Most Popular Live Courses</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Industry-leading certifications taught by expert instructors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {popularCourses.map((course, index) => <div key={index} className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <img src={course.instructorImage} alt={course.instructor} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" loading="lazy" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-bold">{course.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm mb-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {course.level}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Certification Prep</p>
                        <p className="text-xs text-muted-foreground">{course.certification} Exam</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Live Interaction</p>
                        <p className="text-xs text-muted-foreground">Real-time Q&A with experts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">AI Tutor</p>
                        <p className="text-xs text-muted-foreground">24/7 AI learning support</p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            
          </div>
        </div>
      </div>
    </div>;
};
export default LiveInstructorLed;