import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Video, Clock, Users, Monitor, Router, Target, MessageCircle, TrendingUp, Brain } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { InstructorCourseCard, CourseFeature } from "@/components/InstructorCourseCard";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import spikeXavier from "@/assets/spike-xavier.png";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import jasonYates from "@/assets/jason-yates.png";

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

  const featuredCourses = [
    {
      title: "CompTIA A+",
      instructorName: "Spike Xavier",
      instructorImage: spikeXavier,
      level: "Beginner" as const,
      description: "The industry-standard certification for IT support professionals. Master hardware, software, networking, mobile devices, operating systems, security, and troubleshooting fundamentals.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Interactive learning with expert guidance" },
        { icon: BookOpen, title: "Hands-On Labs Included", description: "Practice with real-world scenarios" },
        { icon: Clock, title: "Certification Study Plan", description: "Coming soon" },
      ] as CourseFeature[],
    },
    {
      title: "ITIL v4 Foundations",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Intermediate" as const,
      description: "Learn the globally recognized ITIL framework for IT service management. Master best practices for service delivery, incident management, problem resolution, and continuous improvement in modern IT environments.",
      features: [
        { icon: BookOpen, title: "Certification Study Plan", description: "Structured path to ITIL certification" },
        { icon: Video, title: "Live Sessions Available", description: "Engage directly with expert instructors" },
      ] as CourseFeature[],
    },
    {
      title: "CompTIA Network+",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Intermediate" as const,
      description: "A vendor-neutral networking certification that validates the essential knowledge and skills needed to confidently design, configure, manage, and troubleshoot wired and wireless networks. Covers network infrastructure, operations, security, and troubleshooting.",
      features: [
        { icon: BookOpen, title: "Certification Study Plan", description: "Streamlined path to certification success" },
        { icon: Router, title: "Exam Crash Course", description: "Intensive preparation included in study plan" },
        { icon: Video, title: "Live Sessions Available", description: "Interactive learning with expert guidance" },
      ] as CourseFeature[],
    },
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
      title: "CompTIA Tech+",
      instructorName: "Jason Yates",
      instructorImage: jasonYates,
      level: "Beginner" as const,
      description: "The perfect entry point into IT careers. Build foundational knowledge in technology fundamentals, infrastructure, applications and software, software development, databases, and security. Ideal for those starting their IT journey.",
      features: [
        { icon: Brain, title: "AI Tutor", description: "Get instant help from AI assistant" },
        { icon: Clock, title: "On-Demand Available", description: "Learn at your own pace" },
      ] as CourseFeature[],
    },
    {
      title: "Linux Fundamentals",
      instructorName: "Spike Xavier",
      instructorImage: spikeXavier,
      level: "Beginner" as const,
      description: "Master Linux fundamentals and command-line operations. Learn essential system administration, file management, user permissions, shell scripting basics, and networking. Perfect preparation for help desk roles supporting Linux environments.",
      features: [
        { icon: Monitor, title: "Labs Included", description: "Hands-on Linux practice environment" },
        { icon: Users, title: "1:1 Mentoring Available", description: "Personalized guidance from experts" },
        { icon: Video, title: "Live Sessions", description: "Interactive learning sessions" },
      ] as CourseFeature[],
    },
  ];

  return (
    <PageLayout
      title="Help Desk Training"
      description="Build essential IT support skills with comprehensive training in hardware, software, networking, and customer service excellence"
      breadcrumbs={[{ label: "Help Desk Training" }]}
      heroActions={
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
      }
    >
      {/* Help Desk Technologies Section */}
      <div className="mb-32 animate-fade-in">
        <BentoGrid columns={4} className="max-w-7xl mx-auto mb-12">
          <BentoCard
            icon={Monitor}
            title="Hardware & Software Support"
            description="PC troubleshooting, mobile devices, printers, and system maintenance."
          />

          <BentoCard
            icon={Target}
            title="Operating Systems"
            description="Windows and Linux administration, configuration, and troubleshooting."
          />

          <BentoCard
            icon={MessageCircle}
            title="Customer Service"
            description="Communication skills, problem-solving, and conflict resolution."
          />

          <BentoCard
            icon={TrendingUp}
            title="ITSM & Ticketing"
            description="ITIL frameworks, ticketing systems, and incident management."
          />
        </BentoGrid>
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
          {featuredCourses.map((course, index) => (
            <InstructorCourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default HelpDesk;
