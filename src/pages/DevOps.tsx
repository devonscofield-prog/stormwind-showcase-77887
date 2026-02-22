import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container, Cloud, GitBranch, Award, BookOpen, Video, Target, Code, FlaskConical } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import { TechCard } from "@/components/TechCard";

const DevOps = () => {
  useEffect(() => {
    document.title = "DevOps";
  }, []);

  return (
    <PageLayout
      title="DevOps Training"
      description="Master modern DevOps practices with comprehensive training in containerization, orchestration, infrastructure as code, CI/CD, and cloud-native technologies"
      breadcrumbs={[{ label: "DevOps Training" }]}
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
      {/* DevOps Training Overview Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Transform Your DevOps Career</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our DevOps training programs prepare you for modern cloud-native development and operations roles. Master containerization with Docker and Kubernetes, automate infrastructure with Terraform and Ansible, implement CI/CD pipelines, and learn monitoring and observability practices.
            </p>
          </div>

          <BentoGrid columns={3} className="mb-8">
            <BentoCard
              icon={Container}
              title="Containerization"
              description="Docker, Kubernetes (CKA, CKAD, CKS), Helm, and Service Mesh."
            >
              <ul className="space-y-2 text-sm mt-4">
                {["Docker & Docker Swarm", "Kubernetes Certifications", "Helm & Kustomize", "Service Mesh (Istio)"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground dark:text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>

            <BentoCard
              icon={Cloud}
              title="Infrastructure as Code"
              description="Automate infrastructure provisioning across cloud platforms."
            >
              <ul className="space-y-2 text-sm mt-4">
                {["Terraform & Terraform Cloud", "Ansible Automation", "HashiCorp Vault & Consul", "AWS, Azure, GCP"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground dark:text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>

            <BentoCard
              icon={GitBranch}
              title="CI/CD & GitOps"
              description="Continuous delivery pipelines and modern workflows."
            >
              <ul className="space-y-2 text-sm mt-4">
                {["GitOps with ArgoCD & FluxCD", "GitHub Actions", "Jenkins Pipelines", "Version Control with Git"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground dark:text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </BentoGrid>
        </div>
      </div>

      {/* DevOps Playgrounds Section */}
      <div className="mb-32 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">DevOps Playgrounds</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on practice environments for real-world DevOps scenarios
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <BentoGrid columns={4} className="mb-8">
            <BentoCard
              icon={Cloud}
              title="Cloud Platforms"
              description="AWS, Azure, and GCP environments with real cloud access."
            />
            <BentoCard
              icon={Container}
              title="Container Orchestration"
              description="Kubernetes clusters, Docker, and service mesh platforms."
            />
            <BentoCard
              icon={GitBranch}
              title="CI/CD Tools"
              description="Jenkins pipelines, GitHub Actions, and GitOps workflows."
            />
            <BentoCard
              icon={Code}
              title="Infrastructure as Code"
              description="Terraform, Ansible, and HashiCorp tool environments."
            />
          </BentoGrid>

          <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Playground Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                {["Instant environment provisioning", "Pre-configured scenarios"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 text-sm">
                {["Safe sandbox environments", "No cleanup required"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Certifications Section */}
      <div className="mb-32 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications to advance your DevOps career
          </p>
        </div>

        <BentoGrid columns={3} className="max-w-7xl mx-auto">
          <BentoCard
            icon={Award}
            title="CKA"
            description="Certified Kubernetes Administrator - Master cluster administration and management."
          />
          <BentoCard
            icon={Award}
            title="CKAD"
            description="Certified Kubernetes Application Developer - Build and deploy apps on Kubernetes."
          />
          <BentoCard
            icon={Award}
            title="CKS"
            description="Certified Kubernetes Security Specialist - Secure containerized applications."
          />
        </BentoGrid>
      </div>
    </PageLayout>
  );
};

export default DevOps;
