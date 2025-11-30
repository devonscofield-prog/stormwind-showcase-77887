import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Award, FlaskConical, Brain, Users, Clock, Video, BookOpen, Server, Cloud, Shield, Database, Container, Layers } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { InstructorCourseCard, CourseFeature } from "@/components/InstructorCourseCard";
import benBurich from "@/assets/ben-burich.png";
import abdelSalem from "@/assets/abdel-salem.png";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import willPanek from "@/assets/will-panek.png";
import spikeXavier from "@/assets/spike-xavier.png";

const CloudTraining = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  useEffect(() => {
    document.title = "Cloud";
  }, []);

  const featuredCourses = [
    {
      title: "AZ-900",
      instructorName: "Will Panek",
      instructorImage: willPanek,
      level: "Beginner" as const,
      description: "Build foundational knowledge of cloud concepts and Azure services with Azure Fundamentals certification.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Interactive learning with expert guidance" },
        { icon: BookOpen, title: "Certification Study Plan", description: "Structured path to Azure certification" },
        { icon: Server, title: "Hands-On Labs", description: "Practice with real Azure scenarios" },
      ] as CourseFeature[],
    },
    {
      title: "AZ-104",
      instructorName: "Spike Xavier",
      instructorImage: spikeXavier,
      level: "Intermediate" as const,
      description: "Master Azure administration including managing subscriptions, storage, virtual networks, and monitoring.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Expert-led training sessions" },
        { icon: BookOpen, title: "Certification Study Plan (coming soon)", description: "Structured path to Azure certification" },
        { icon: Server, title: "Hands-On Labs", description: "Practice with real Azure scenarios" },
      ] as CourseFeature[],
    },
    {
      title: "AZ-305",
      instructorName: "Ben Burich",
      instructorImage: benBurich,
      level: "Advanced" as const,
      description: "Design Microsoft Azure infrastructure solutions with advanced architecture patterns and best practices.",
      features: [
        { icon: FlaskConical, title: "Labs Available", description: "Hands-on practice environment" },
        { icon: Award, title: "Practice Exams", description: "Test your knowledge" },
        { icon: Clock, title: "On-Demand Available", description: "Learn at your own pace" },
      ] as CourseFeature[],
    },
    {
      title: "AZ-140",
      instructorName: "Abdel Salem",
      instructorImage: abdelSalem,
      level: "Intermediate" as const,
      description: "Configure and operate Microsoft Azure Virtual Desktop environments with expert guidance.",
      features: [
        { icon: Award, title: "Practice Exams", description: "Test your knowledge" },
        { icon: Users, title: "1:1 Mentoring", description: "Personalized guidance from experts" },
        { icon: Clock, title: "On-Demand Available", description: "Learn at your own pace" },
      ] as CourseFeature[],
    },
    {
      title: "AWS Cloud Practitioner",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Beginner" as const,
      description: "Start your AWS journey with comprehensive cloud fundamentals covering core services, security, and architecture.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Real-time interaction with instructors" },
        { icon: Award, title: "Practice Exams", description: "Test your knowledge" },
        { icon: Brain, title: "AI Tutor", description: "Get instant help from AI assistant" },
      ] as CourseFeature[],
    },
    {
      title: "AWS Architect Associate",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Intermediate" as const,
      description: "Design and deploy scalable, fault-tolerant systems on AWS with advanced architecture patterns.",
      features: [
        { icon: FlaskConical, title: "Labs Available", description: "Hands-on practice environment" },
        { icon: Award, title: "Practice Exams", description: "Test your knowledge" },
        { icon: Brain, title: "AI Tutor", description: "Get instant help from AI assistant" },
      ] as CourseFeature[],
    },
  ];

  return (
    <PageLayout
      title="Cloud Training"
      description="Master cloud technologies with comprehensive training in Azure, AWS, and Google Cloud Platform. Build expertise in cloud architecture, administration, security, and deployment."
      breadcrumbs={[{ label: "Cloud Training" }]}
      heroActions={
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={() => navigate('/courses?category=Cloud')} className="gap-2">
            Explore Courses
          </Button>
          <Button size="lg" onClick={() => navigate('/ranges')} className="gap-2">
            Explore Ranges
          </Button>
        </div>
      }
    >
      {/* Cloud Technologies Section */}
      <div className="mb-32 animate-fade-in">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {/* Microsoft Azure */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Microsoft Azure</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cloud computing, infrastructure, DevOps, security, and virtual desktop solutions on Microsoft's cloud platform.
            </p>
          </div>

          {/* AWS */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Amazon Web Services</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AWS fundamentals, solutions architecture, SysOps administration, and cloud practitioner certification training.
            </p>
          </div>

          {/* Google Cloud */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Google Cloud Platform</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              GCP fundamentals, cloud architecture, infrastructure deployment, and Google Cloud certification preparation.
            </p>
          </div>

          {/* Containerization & IaC */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Container className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Containerization & IaC</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Docker containers, Kubernetes orchestration, Terraform, CI/CD pipelines, and infrastructure automation best practices.
            </p>
          </div>

          {/* Cloud Security */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Cloud Security</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cloud security architecture, identity management, compliance, threat protection, and security operations.
            </p>
          </div>

          {/* Cloud Databases */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Cloud Databases</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Azure SQL, AWS RDS, Cloud SQL, database migration, management, and optimization across cloud platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="mb-16 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master cloud technologies with our comprehensive training courses
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

export default CloudTraining;
