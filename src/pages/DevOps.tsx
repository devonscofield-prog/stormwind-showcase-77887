import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container, Cloud, GitBranch, Award, BookOpen, Video, Target, Code } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import learningPathsImage from "@/assets/devops-learning-paths.jpg";

const DevOps = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "DevOps";
  }, []);

  return (
    <PageLayout
      title="DevOps Training"
      description="Master modern DevOps practices with comprehensive training in containerization, orchestration, infrastructure as code, CI/CD, and cloud-native technologies"
      breadcrumbs={[{ label: "DevOps Training" }]}
      heroActions={
        <Button size="lg" onClick={() => navigate('/courses?category=DevOps')} className="gap-2">
          Explore Courses
        </Button>
      }
    >
      {/* DevOps Training Overview Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Transform Your DevOps Career</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our DevOps training programs prepare you for modern cloud-native development and operations roles. Master containerization with Docker and Kubernetes, automate infrastructure with Terraform and Ansible, implement CI/CD pipelines, and learn monitoring and observability practices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Container className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Containerization</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Container orchestration mastery</p>
                <ul className="space-y-2 text-sm">
                  {["Docker & Docker Swarm", "Kubernetes (CKA, CKAD, CKS)", "Helm & Kustomize", "Service Mesh (Istio)"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Infrastructure as Code</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Automate infrastructure provisioning</p>
                <ul className="space-y-2 text-sm">
                  {["Terraform & Terraform Cloud", "Ansible Automation", "HashiCorp Vault & Consul", "Cloud Platforms (AWS, Azure, GCP)"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <GitBranch className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">CI/CD & GitOps</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Continuous delivery pipelines</p>
                <ul className="space-y-2 text-sm">
                  {["GitOps with ArgoCD & FluxCD", "GitHub Actions", "Jenkins & CI/CD Pipelines", "Version Control with Git"].map((item, i) => (
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
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <h3 className="text-2xl font-bold mb-6">Practice DevOps in Real Environments</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our DevOps Playgrounds provide instant access to real cloud and DevOps environments where you can experiment, practice, and build your skills without worrying about setup or cleanup.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Cloud, title: "Cloud Platforms", items: ["AWS, Azure, and Google Cloud", "Real cloud environments", "Extendable practice sessions"] },
                { icon: Container, title: "Container Orchestration", items: ["Kubernetes clusters", "Docker environments", "Service mesh platforms"] },
                { icon: GitBranch, title: "CI/CD Tools", items: ["Jenkins pipelines", "GitHub Actions", "GitOps workflows"] },
                { icon: Code, title: "Infrastructure as Code", items: ["Terraform environments", "Ansible playgrounds", "HashiCorp tools"] },
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-8 h-8 text-primary" />
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {item.items.map((text, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

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
      </div>

      {/* Featured Certifications Section */}
      <div className="mb-32 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications to advance your DevOps career
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: "CKA", subtitle: "Certified Kubernetes Administrator", level: "Intermediate", desc: "Master Kubernetes cluster administration and management" },
            { title: "CKAD", subtitle: "Certified Kubernetes Application Developer", level: "Intermediate", desc: "Build and deploy applications on Kubernetes" },
            { title: "CKS", subtitle: "Certified Kubernetes Security Specialist", level: "Advanced", desc: "Secure containerized applications and Kubernetes platforms" },
          ].map((cert, i) => (
            <div key={i} className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
                </div>
              </div>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{cert.level}</span>
              <p className="text-muted-foreground mt-4 leading-relaxed">{cert.desc}</p>
              <div className="mt-4 space-y-2">
                {["Live Sessions Available", "Hands-On Labs", "Practice Exams"].map((feature, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default DevOps;
