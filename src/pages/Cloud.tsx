import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Shield, Database, Container, Layers, BookOpen, FlaskConical } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { InstructorCourseCard } from "@/components/InstructorCourseCard";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import benBurich from "@/assets/ben-burich.png";
import abdelSalem from "@/assets/abdel-salem.png";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import willPanek from "@/assets/will-panek.png";
import spikeXavier from "@/assets/spike-xavier.png";

const CloudTraining = () => {
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
    },
    {
      title: "AZ-104",
      instructorName: "Spike Xavier",
      instructorImage: spikeXavier,
      level: "Intermediate" as const,
      description: "Master Azure administration including managing subscriptions, storage, virtual networks, and monitoring.",
    },
    {
      title: "AZ-305",
      instructorName: "Ben Burich",
      instructorImage: benBurich,
      level: "Advanced" as const,
      description: "Design Microsoft Azure infrastructure solutions with advanced architecture patterns and best practices.",
    },
    {
      title: "AZ-140",
      instructorName: "Abdel Salem",
      instructorImage: abdelSalem,
      level: "Intermediate" as const,
      description: "Configure and operate Microsoft Azure Virtual Desktop environments with expert guidance.",
    },
    {
      title: "AWS Cloud Practitioner",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Beginner" as const,
      description: "Start your AWS journey with comprehensive cloud fundamentals covering core services, security, and architecture.",
    },
    {
      title: "AWS Architect Associate",
      instructorName: "Raymond Lacoste",
      instructorImage: raymondLacoste,
      level: "Intermediate" as const,
      description: "Design and deploy scalable, fault-tolerant systems on AWS with advanced architecture patterns.",
    },
  ];

  return (
    <PageLayout
      title="Cloud Training"
      description="Master cloud technologies with comprehensive training in Azure, AWS, and Google Cloud Platform. Build expertise in cloud architecture, administration, security, and deployment."
      breadcrumbs={[{ label: "Cloud Training" }]}
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
      {/* Cloud Technologies Section */}
      <div className="mb-32 animate-fade-in">
        <BentoGrid columns={3} className="max-w-7xl mx-auto mb-12">
          <BentoCard
            icon={Cloud}
            title="Microsoft Azure"
            description="Cloud computing, infrastructure, DevOps, security, and virtual desktop solutions."
          />

          <BentoCard
            icon={Server}
            title="Amazon Web Services"
            description="AWS fundamentals, solutions architecture, and cloud practitioner training."
          />

          <BentoCard
            icon={Layers}
            title="Google Cloud Platform"
            description="GCP fundamentals, cloud architecture, and certification preparation."
          />

          <BentoCard
            icon={Container}
            title="Containerization & IaC"
            description="Docker, Kubernetes, Terraform, and CI/CD automation."
          />

          <BentoCard
            icon={Shield}
            title="Cloud Security"
            description="Security architecture, identity management, and compliance."
          />

          <BentoCard
            icon={Database}
            title="Cloud Databases"
            description="Azure SQL, AWS RDS, Cloud SQL, and database migration."
          />
        </BentoGrid>
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
