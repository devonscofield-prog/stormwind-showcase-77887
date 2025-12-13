import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cpu, Router, BookOpen, Video, Users, Target, Zap } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { InstructorCourseCard, CourseFeature } from "@/components/InstructorCourseCard";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
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

  const featuredCourses = [
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
      title: "Cisco CCNA",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Intermediate" as const,
      description: "Comprehensive Cisco networking certification covering network fundamentals, IP connectivity and services, security fundamentals, automation, and programmability. Master the skills to install, configure, operate, and troubleshoot enterprise networks.",
      features: [
        { icon: BookOpen, title: "Certification Study Plan", description: "Structured approach to CCNA mastery" },
        { icon: Router, title: "Exam Crash Course", description: "Final preparation included in study plan" },
        { icon: Video, title: "Live Sessions Available", description: "Engage directly with expert instructors" },
      ] as CourseFeature[],
    },
    {
      title: "Cisco CCNP Enterprise: ENARSI",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Advanced" as const,
      description: "Advanced routing and services implementation course covering Layer 3 technologies, VPN services, infrastructure security, and infrastructure services. Master enterprise-level network troubleshooting and optimization.",
      features: [
        { icon: Router, title: "Hands-On Labs", description: "Practice in real network environments" },
        { icon: Cpu, title: "AI Tutor", description: "Get instant help and guidance" },
        { icon: Users, title: "1:1 Instructor Mentoring", description: "Direct access to expert instructors" },
      ] as CourseFeature[],
    },
    {
      title: "Modern Networking with IPv6",
      instructorName: "Dan Young",
      instructorImage: danYoung,
      level: "Intermediate" as const,
      titleIcon: Target,
      description: "An intense, practical-focused course on IPv6. Covers key skills to deploy an IPv6 infrastructure. CCNA or Network+ level knowledge will be helpful to get the most out of this course. Extensive hands-on available in the Net Range.",
      features: [
        { icon: Router, title: "Hands-On Labs", description: "Practice in the Net Range environment" },
        { icon: Users, title: "1:1 Mentoring", description: "Expert guidance when you need it" },
        { icon: Zap, title: "Bytes", description: "Quick learning modules for key concepts" },
      ] as CourseFeature[],
    },
    {
      title: "Wireshark Packet Analysis",
      instructorName: "Dan Young",
      instructorImage: danYoung,
      level: "Intermediate" as const,
      titleIcon: Target,
      description: "Master network protocol analysis with Wireshark. Learn to capture, filter, and analyze network traffic for troubleshooting, security analysis, and performance optimization. Essential skills for any network professional.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Interactive packet analysis training" },
        { icon: Router, title: "Hands-On Labs", description: "Real traffic analysis exercises" },
        { icon: Users, title: "1:1 Mentoring Available", description: "Expert guidance on complex analysis" },
      ] as CourseFeature[],
    },
  ];

  return (
    <PageLayout
      title="Networking Training"
      description="Comprehensive networking training covering Cisco certifications, network security, infrastructure design, and hands-on practical experience"
      breadcrumbs={[{ label: "Networking Training" }]}
      heroActions={
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={() => navigate('/courses?category=Networking')} className="gap-2">
            Explore Courses
          </Button>
          <Button size="lg" onClick={() => navigate('/ranges')} className="gap-2">
            Explore Ranges
          </Button>
        </div>
      }
    >
      {/* Networking Technologies Section */}
      <div className="mb-32 animate-fade-in">
        <BentoGrid columns={4} className="max-w-7xl mx-auto mb-12">
          <BentoCard
            icon={Router}
            title="Routing & Switching"
            description="BGP, OSPF, EIGRP, and layer 2/3 switching for enterprise networks."
          />

          <BentoCard
            icon={Target}
            title="Network Security"
            description="Firewalls, VPNs, NAC, IDS, and security best practices."
          />

          <BentoCard
            icon={Zap}
            title="IPv6 & Modern Networking"
            description="IPv6 deployment, addressing, and transition mechanisms."
          />

          <BentoCard
            icon={Target}
            title="Network Analysis"
            description="Wireshark packet analysis, monitoring, and troubleshooting."
          />
        </BentoGrid>
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
          {featuredCourses.map((course, index) => (
            <InstructorCourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Networking;
