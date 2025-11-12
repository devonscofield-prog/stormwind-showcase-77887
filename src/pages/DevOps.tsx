import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Container, Cloud, GitBranch, Award, BookOpen, Video, Target, Code, Settings, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import learningPathsImage from "@/assets/devops-learning-paths.jpg";
const DevOps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};
  useEffect(() => {
    document.title = "DevOps";
  }, []);
  const categories = [{
    id: "devops-overview",
    icon: Settings,
    title: "DevOps Training Overview",
    description: "Comprehensive DevOps training from fundamentals to advanced practices",
    color: "text-blue-500"
  }, {
    id: "learning-paths",
    icon: Target,
    title: "Learning Paths",
    description: "Structured career paths for DevOps professionals",
    color: "text-primary"
  }, {
    id: "devops-playgrounds",
    icon: Code,
    title: "DevOps Playgrounds",
    description: "Hands-on practice environments for real-world scenarios",
    color: "text-green-500"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              DevOps Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Master modern DevOps practices with comprehensive training in containerization, orchestration, infrastructure as code, CI/CD, and cloud-native technologies
            </p>
            <div className="flex justify-center">
              <Button size="lg" onClick={() => navigate('/courses?category=DevOps')} className="gap-2">
                Explore Courses
              </Button>
            </div>
          </div>

          {/* DevOps Training Overview Section */}
          <div id="devops-overview" className="mb-32 animate-fade-in scroll-mt-24">
            

            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Transform Your DevOps Career</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our DevOps training programs prepare you for modern cloud-native development and operations roles. Master containerization with Docker and Kubernetes, automate infrastructure with Terraform and Ansible, implement CI/CD pipelines, and learn monitoring and observability practices. Gain expertise in the tools and methodologies used by leading technology companies worldwide.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Container className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Containerization</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Container orchestration mastery</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Docker & Docker Swarm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Kubernetes (CKA, CKAD, CKS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Helm & Kustomize</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Service Mesh (Istio)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Cloud className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Infrastructure as Code</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Automate infrastructure provisioning</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Terraform & Terraform Cloud</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Ansible Automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">HashiCorp Vault & Consul</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Cloud Platforms (AWS, Azure, GCP)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <GitBranch className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">CI/CD & GitOps</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Continuous delivery pipelines</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">GitOps with ArgoCD & FluxCD</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">GitHub Actions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Jenkins & CI/CD Pipelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Version Control with Git</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps Playgrounds Section */}
          <div id="devops-playgrounds" className="mb-32 animate-fade-in scroll-mt-24">
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
                  Our DevOps Playgrounds provide instant access to real cloud and DevOps environments where you can experiment, practice, and build your skills without worrying about setup or cleanup. From cloud platforms to container orchestration, infrastructure as code to CI/CD tools - all available at your fingertips in safe, sandboxed environments.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Cloud className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Cloud Platforms</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">AWS, Azure, and Google Cloud</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Real cloud environments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Extendable practice sessions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Container className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Container Orchestration</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Kubernetes clusters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Docker environments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Service mesh platforms</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <GitBranch className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">CI/CD Tools</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Jenkins pipelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">GitHub Actions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">GitOps workflows</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Infrastructure as Code</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Terraform environments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Ansible playgrounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">HashiCorp tools</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Playground Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Instant environment provisioning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Pre-configured scenarios</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Safe sandbox environments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">No cleanup required</span>
                      </li>
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
              {/* CKA Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Container className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Certified Kubernetes Administrator (CKA)</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Industry-Standard Certification</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master Kubernetes administration with hands-on labs and real-world scenarios. Learn cluster architecture, deployment, networking, storage, security, and troubleshooting to become a certified Kubernetes administrator.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs Included</p>
                      <p className="text-xs text-muted-foreground">Practice in real Kubernetes environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge before certification</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terraform Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Cloud className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Terraform Associate Certification</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">HashiCorp Certified</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Become proficient in infrastructure as code with HashiCorp Terraform. Learn to provision, manage, and version infrastructure across multiple cloud providers with declarative configuration files.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs Included</p>
                      <p className="text-xs text-muted-foreground">Practice infrastructure as code scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge before certification</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DCA Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Container className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Docker Certified Associate (DCA)</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Docker Official Certification</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Validate your Docker skills with the official Docker certification. Master containerization, image management, networking, security, and orchestration to become a certified Docker professional.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs Included</p>
                      <p className="text-xs text-muted-foreground">Practice in real Docker environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge before certification</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CKAD Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Certified Kubernetes Application Developer (CKAD)</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">CNCF Certified</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Develop cloud-native applications on Kubernetes. Learn to design, build, configure, and deploy applications on Kubernetes clusters with best practices for application development.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs Included</p>
                      <p className="text-xs text-muted-foreground">Hands-on application development practice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge before certification</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CKS Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Settings className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Certified Kubernetes Security Specialist (CKS)</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">CNCF Certified</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Advanced
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master Kubernetes security with advanced training in cluster hardening, system security, vulnerability management, and runtime security. Become an expert in securing Kubernetes environments.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs Included</p>
                      <p className="text-xs text-muted-foreground">Hands-on security practice scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge before certification</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PCA Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Prometheus Certified Associate (PCA)</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">CNCF Certified</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master monitoring and observability with Prometheus. Learn metrics collection, querying with PromQL, alerting, visualization, and best practices for monitoring modern cloud-native applications.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs Included</p>
                      <p className="text-xs text-muted-foreground">Hands-on monitoring practice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge before certification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default DevOps;