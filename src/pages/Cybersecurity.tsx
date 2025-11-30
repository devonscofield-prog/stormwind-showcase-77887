import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Shield, Target, Users, Award, BookOpen, Video, Brain, Monitor, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { InstructorCourseCard, CourseFeature } from "@/components/InstructorCourseCard";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import chrisPaul from "@/assets/chris-paul.png";
import shaneSexton from "@/assets/shane-sexton.png";

const Cybersecurity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  useEffect(() => {
    document.title = "Cybersecurity";
  }, []);

  const featuredCourses = [
    {
      title: "CompTIA Security+",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Intermediate" as const,
      description: "An international, vendor-neutral certification proving your knowledge and skills to assess security posture, implement solutions, and monitor hybrid environments including cloud, mobile, and IoT. Covers governance, risk, compliance, and incident response.",
      features: [
        { icon: Monitor, title: "Labs", description: "Practice security concepts in real environments" },
        { icon: BookOpen, title: "Practice Exams", description: "Test your knowledge before certification" },
        { icon: Target, title: "Certification Study Plans", description: "Structured learning path" },
      ] as CourseFeature[],
    },
    {
      title: "CISSP",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Advanced" as const,
      description: "Comprehensive training covering all 8 CISSP domains critical for architecting, designing, and managing secure IT solutions. Enhance your organization's security posture with expertise in Security and Risk Management, Asset Security, Security Engineering, and more.",
      features: [
        { icon: BookOpen, title: "Practice Exams", description: "Test your knowledge before certification" },
        { icon: Target, title: "Certification Study Plans", description: "Structured learning path" },
        { icon: Brain, title: "AI Tutor", description: "Get personalized assistance and guidance" },
      ] as CourseFeature[],
    },
    {
      title: "CompTIA CySA+",
      instructorName: "Chris Paul",
      instructorImage: chrisPaul,
      level: "Intermediate" as const,
      description: "Master cybersecurity analytics and threat detection with comprehensive training in security operations, vulnerability management, incident response, and security monitoring. Prepare for the CompTIA CySA+ CS0-003 certification exam.",
      features: [
        { icon: Monitor, title: "Labs", description: "Hands-on security analytics practice" },
        { icon: Brain, title: "AI Tutor", description: "24/7 AI learning support" },
        { icon: Users, title: "1:1 Mentoring", description: "Expert guidance and support" },
      ] as CourseFeature[],
    },
    {
      title: "CompTIA SecurityX",
      instructorName: "Shane Sexton",
      instructorImage: shaneSexton,
      level: "Advanced" as const,
      description: "Advanced security certification for experienced professionals. Master security architecture, governance, risk management, and enterprise security operations. Prepare for the CompTIA SecurityX CAS-005 certification exam.",
      features: [
        { icon: BookOpen, title: "Practice Exams", description: "Comprehensive exam preparation" },
        { icon: Clock, title: "On-Demand Sessions", description: "Learn at your own pace" },
      ] as CourseFeature[],
    },
    {
      title: "CompTIA PenTest+",
      instructorName: "Shane Sexton",
      instructorImage: shaneSexton,
      level: "Advanced" as const,
      titleIcon: Shield,
      description: "Master penetration testing and vulnerability assessment with comprehensive training in planning, scoping, information gathering, vulnerability identification, exploitation, and reporting. Prepare for the CompTIA PenTest+ PT0-003 certification.",
      features: [
        { icon: Target, title: "Cyber Range Access", description: "Practice in realistic environments" },
        { icon: BookOpen, title: "Practice Exams", description: "Test your penetration testing knowledge" },
        { icon: Video, title: "Live Sessions Available", description: "Expert-led training sessions" },
      ] as CourseFeature[],
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      instructorName: "Shane Sexton",
      instructorImage: shaneSexton,
      level: "Intermediate" as const,
      titleIcon: Shield,
      description: "Master ethical hacking techniques with comprehensive training in reconnaissance, scanning, enumeration, vulnerability analysis, and exploitation. Prepare for the EC-Council CEH v12 certification.",
      features: [
        { icon: Target, title: "Cyber Range Access", description: "Hands-on hacking lab environment" },
        { icon: Brain, title: "AI Tutor", description: "AI-powered learning assistance" },
        { icon: Clock, title: "On-Demand Available", description: "Learn at your own pace" },
      ] as CourseFeature[],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
                <BreadcrumbPage>Cybersecurity Training</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground leading-tight pb-2">
              Cybersecurity Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive cybersecurity training covering governance, vendor-specific certifications, and industry frameworks
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate('/courses?category=Cybersecurity')} className="gap-2">
                Explore Courses
              </Button>
              <Button size="lg" onClick={() => navigate('/ranges')} className="gap-2">
                Explore Ranges
              </Button>
            </div>
          </div>

          {/* Technologies We Cover Section */}
          <div className="mb-32 animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Penetration Testing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Identify and mitigate security risks to computer systems, ethical hacking methodologies, vulnerability assessments, and exploitation techniques
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security Operations</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Threat detection, incident response, security monitoring, and SIEM implementation</p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security Management</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Security governance, policy development, risk assessment, program management, and security leadership
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Information Security</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Data protection, encryption, access controls, security architecture, and safeguarding information assets
                </p>
              </div>
            </div>
          </div>

          {/* Featured Courses Section */}
          <div className="mb-32 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Popular cybersecurity training courses to advance your security career
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredCourses.map((course, index) => (
                <InstructorCourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
