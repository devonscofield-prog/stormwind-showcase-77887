import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Router, Target, Zap, BookOpen, FlaskConical } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { InstructorCourseCard } from "@/components/InstructorCourseCard";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import danYoung from "@/assets/dan-young.png";

const Networking = () => {
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
    },
    {
      title: "Cisco CCNA",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Intermediate" as const,
      description: "Comprehensive Cisco networking certification covering network fundamentals, IP connectivity and services, security fundamentals, automation, and programmability. Master the skills to install, configure, operate, and troubleshoot enterprise networks.",
    },
    {
      title: "Cisco CCNP Enterprise: ENCOR",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Advanced" as const,
      description: "Master enterprise networking including dual-stack architecture, virtualization, infrastructure, network assurance, security, and automation. This core exam is required for CCNP Enterprise certification and covers the foundational enterprise technologies.",
    },
    {
      title: "Cisco CCNP Enterprise: ENARSI",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Advanced" as const,
      description: "Advanced routing and services implementation course covering Layer 3 technologies, VPN services, infrastructure security, and infrastructure services. Master enterprise-level network troubleshooting and optimization.",
    },
    {
      title: "Modern Networking with IPv6",
      instructorName: "Dan Young",
      instructorImage: danYoung,
      level: "Intermediate" as const,
      titleIcon: Target,
      description: "An intense, practical-focused course on IPv6. Covers key skills to deploy an IPv6 infrastructure. CCNA or Network+ level knowledge will be helpful to get the most out of this course. Extensive hands-on available in the Net Range.",
    },
    {
      title: "Wireshark Packet Analysis",
      instructorName: "Dan Young",
      instructorImage: danYoung,
      level: "Intermediate" as const,
      titleIcon: Target,
      description: "Master network protocol analysis with Wireshark. Learn to capture, filter, and analyze network traffic for troubleshooting, security analysis, and performance optimization. Essential skills for any network professional.",
    },
  ];

  return (
    <PageLayout
      title="Networking Training"
      description="Comprehensive networking training covering Cisco certifications, network security, infrastructure design, and hands-on practical experience"
      breadcrumbs={[{ label: "Networking Training" }]}
      heroActions={
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/courses">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/training-samples">
              <FlaskConical className="mr-2 h-5 w-5" />
              Try Training Samples
            </Link>
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
