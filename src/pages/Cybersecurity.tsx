import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Target, Award, BookOpen, FlaskConical } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { InstructorCourseCard } from "@/components/InstructorCourseCard";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import chrisPaul from "@/assets/chris-paul.png";
import shaneSexton from "@/assets/shane-sexton.png";

const Cybersecurity = () => {
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
    },
    {
      title: "CISSP",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Advanced" as const,
      description: "Comprehensive training covering all 8 CISSP domains critical for architecting, designing, and managing secure IT solutions. Enhance your organization's security posture with expertise in Security and Risk Management, Asset Security, Security Engineering, and more.",
    },
    {
      title: "CompTIA CySA+",
      instructorName: "Chris Paul",
      instructorImage: chrisPaul,
      level: "Intermediate" as const,
      description: "Master cybersecurity analytics and threat detection with comprehensive training in security operations, vulnerability management, incident response, and security monitoring. Prepare for the CompTIA CySA+ CS0-003 certification exam.",
    },
    {
      title: "CompTIA SecurityX",
      instructorName: "Shane Sexton",
      instructorImage: shaneSexton,
      level: "Advanced" as const,
      description: "Advanced security certification for experienced professionals. Master security architecture, governance, risk management, and enterprise security operations. Prepare for the CompTIA SecurityX CAS-005 certification exam.",
    },
    {
      title: "CompTIA PenTest+",
      instructorName: "Shane Sexton",
      instructorImage: shaneSexton,
      level: "Advanced" as const,
      titleIcon: Shield,
      description: "Master penetration testing and vulnerability assessment with comprehensive training in planning, scoping, information gathering, vulnerability identification, exploitation, and reporting. Prepare for the CompTIA PenTest+ PT0-003 certification.",
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      instructorName: "Shane Sexton",
      instructorImage: shaneSexton,
      level: "Intermediate" as const,
      titleIcon: Shield,
      description: "Master ethical hacking techniques with comprehensive training in reconnaissance, scanning, enumeration, vulnerability analysis, and exploitation. Prepare for the EC-Council CEH v12 certification.",
    },
  ];

  return (
    <PageLayout
      title="Cybersecurity Training"
      description="Comprehensive cybersecurity training covering governance, vendor-specific certifications, and industry frameworks"
      breadcrumbs={[{ label: "Cybersecurity Training" }]}
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
      {/* Technologies We Cover Section */}
      <div className="mb-32 animate-fade-in">
        <BentoGrid columns={4} className="max-w-7xl mx-auto mb-8">
          <BentoCard
            icon={Shield}
            title="Penetration Testing"
            description="Ethical hacking, vulnerability assessments, and exploitation techniques."
          />

          <BentoCard
            icon={Target}
            title="Security Operations"
            description="Threat detection, incident response, and SIEM implementation."
          />

          <BentoCard
            icon={BookOpen}
            title="Security Management"
            description="Governance, policy development, and risk assessment."
          />

          <BentoCard
            icon={Award}
            title="Information Security"
            description="Data protection, encryption, and access controls."
          />
        </BentoGrid>
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

      {/* Related Topics */}
      <div className="mt-24 pt-12 border-t border-border">
        <h3 className="text-lg font-semibold text-muted-foreground mb-6">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to="/security-awareness">Security Awareness</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/networking">Networking</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/phishing">Phishing</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cybersecurity;
