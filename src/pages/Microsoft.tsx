import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Server, Shield, Users, BookOpen, Video, Clock, Monitor, Brain, Lightbulb, Target } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { InstructorCourseCard, CourseFeature } from "@/components/InstructorCourseCard";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import willPanek from "@/assets/will-panek.png";
import spikeXavier from "@/assets/spike-xavier.png";
import mikePfeiffer from "@/assets/mike-pfeiffer.png";

const Microsoft = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  useEffect(() => {
    document.title = "Microsoft";
  }, []);

  const featuredCourses = [
    {
      title: "MS-102: Microsoft 365 Administrator",
      instructorName: "Spike Xavier",
      instructorImage: spikeXavier,
      level: "Advanced" as const,
      description: "Master Microsoft 365 administration with comprehensive training in identity and access management, security, compliance, Microsoft 365 services, and enterprise deployment. Prepare for the MS-102 certification exam.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Interactive learning with expert guidance" },
        { icon: Clock, title: "24 Hours of Training", description: "Advanced level certification" },
      ] as CourseFeature[],
    },
    {
      title: "MD-102: Endpoint Administrator",
      instructorName: "Will Panek",
      instructorImage: willPanek,
      level: "Intermediate" as const,
      description: "Learn to deploy, configure, secure, manage, and monitor devices and client applications in an enterprise environment. Master Windows 11, Intune, Microsoft Endpoint Configuration Manager, and endpoint security.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Expert-led training sessions" },
        { icon: Clock, title: "18 Hours of Training", description: "Comprehensive endpoint management" },
      ] as CourseFeature[],
    },
    {
      title: "Windows Server 2025 Administration",
      instructorName: "Mike Pfeiffer",
      instructorImage: mikePfeiffer,
      level: "Advanced" as const,
      titleIcon: Server,
      description: "Master the latest Windows Server 2025 administration with comprehensive training in server deployment, configuration, management, and security. Learn enterprise-grade infrastructure management.",
      features: [
        { icon: Brain, title: "AI Tutor", description: "Get instant help from AI assistant" },
        { icon: Video, title: "Live Sessions", description: "Interactive expert-led training" },
      ] as CourseFeature[],
    },
    {
      title: "AZ-900: Azure Fundamentals",
      instructorName: "Will Panek",
      instructorImage: willPanek,
      level: "Beginner" as const,
      description: "Build foundational knowledge of cloud concepts and Azure services. Perfect for those new to cloud computing or preparing for more advanced Azure certifications.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Interactive learning with expert guidance" },
        { icon: BookOpen, title: "Certification Study Plan", description: "Structured path to Azure certification" },
        { icon: Server, title: "Hands-On Labs", description: "Practice with real Azure scenarios" },
      ] as CourseFeature[],
    },
    {
      title: "AZ-104: Azure Administrator",
      instructorName: "Spike Xavier",
      instructorImage: spikeXavier,
      level: "Intermediate" as const,
      description: "Master Azure administration with comprehensive training in managing Azure subscriptions, storage, virtual networks, and monitoring. Prepare for the AZ-104 certification exam.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Expert-led training sessions" },
        { icon: Server, title: "Hands-On Labs", description: "Practice with real Azure scenarios" },
        { icon: Target, title: "Practice Exams", description: "Test your knowledge" },
      ] as CourseFeature[],
    },
    {
      title: "SC-900: Security Fundamentals",
      instructorName: "Will Panek",
      instructorImage: willPanek,
      level: "Beginner" as const,
      titleIcon: Shield,
      description: "Learn Microsoft security, compliance, and identity fundamentals. Understand security concepts, Microsoft security solutions, and identity and access management across Microsoft services.",
      features: [
        { icon: BookOpen, title: "Certification Study Plan", description: "Structured learning path" },
        { icon: Brain, title: "AI Tutor", description: "Get instant help from AI assistant" },
        { icon: Clock, title: "On-Demand Available", description: "Learn at your own pace" },
      ] as CourseFeature[],
    },
  ];

  return (
    <PageLayout
      title="Microsoft Training"
      description="Master Microsoft technologies with comprehensive training in Windows Server, Microsoft 365, endpoint management, PowerShell, Exchange, SharePoint, and enterprise administration"
      breadcrumbs={[{ label: "Microsoft Training" }]}
      heroActions={
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={() => navigate('/courses?category=Microsoft')} className="gap-2">
            Explore Courses
          </Button>
          <Button size="lg" onClick={() => navigate('/ranges')} className="gap-2">
            Explore Ranges
          </Button>
        </div>
      }
    >
      {/* Microsoft Technologies Section */}
      <div className="mb-32 animate-fade-in">
        <BentoGrid columns={4} className="max-w-7xl mx-auto mb-12">
          <BentoCard
            icon={Server}
            title="Microsoft Azure"
            description="Master cloud computing with Azure fundamentals, administration, architecture, DevOps, security, networking, and virtual desktop solutions."
            colSpan={2}
          />

          <BentoCard
            icon={Users}
            title="Microsoft 365"
            description="Learn Microsoft 365 administration, Intune endpoint management, Exchange messaging, Teams administration, and SharePoint management."
          />

          <BentoCard
            icon={Monitor}
            title="Windows Server"
            description="Enterprise Windows 11 administration and Windows Server versions 2016, 2019, 2022, and 2025 with networking and system management."
          />

          <BentoCard
            icon={BookOpen}
            title="PowerShell"
            description="PowerShell scripting, automation, tool building, Microsoft 365 integration, and Microsoft Graph PowerShell for administrators."
          />

          <BentoCard
            icon={Shield}
            title="Security & Compliance"
            description="Microsoft security fundamentals, cybersecurity architecture, security operations, identity and access management, and Security Copilot."
            rowSpan={2}
          />

          <BentoCard
            icon={Server}
            title="SQL Server & Databases"
            description="Querying with Transact-SQL, database development, SQL Server Reporting Services (SSRS), and introduction to SQL fundamentals."
          />

          <BentoCard
            icon={Brain}
            title="Microsoft 365 Copilot"
            description="AI-powered productivity with Microsoft 365 Copilot for Word, PowerPoint, Outlook, Excel, Teams, and Copilot Studio agents."
            colSpan={2}
          />

          <BentoCard
            icon={Lightbulb}
            title="Power Platform"
            description="Microsoft Power BI data analytics, business intelligence, data visualization, and Power Platform fundamentals certification."
          />
        </BentoGrid>
      </div>

      {/* Featured Courses Section */}
      <div className="mb-32 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Popular Microsoft training courses to advance your enterprise IT career
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

export default Microsoft;
