import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Award, FlaskConical, Brain, Users, Clock, Video, BookOpen, Server, ExternalLink, Cloud, Shield, Database, Container, Network, Settings, Box, Layers } from "lucide-react";
import logoImage from "@/assets/stormwind-logo.png";
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
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logoImage} alt="StormWind Studios Logo" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/')} />
          <div className="flex gap-2">
            <Button onClick={() => navigate("/")} variant="outline" size="sm">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              Cloud Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Master cloud technologies with comprehensive training in Azure, AWS, and Google Cloud Platform. Build expertise in cloud architecture, administration, security, and deployment.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate('/courses?category=Cloud')} className="gap-2">
                Explore Courses
              </Button>
              <Button size="lg" onClick={() => navigate('/ranges')} className="gap-2">
                Explore Ranges
              </Button>
            </div>
          </div>

          {/* Cloud Technologies Section */}
          <div className="mb-32 animate-fade-in">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
              {/* Microsoft Azure */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
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
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
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
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
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
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
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
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
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
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
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
              {/* AZ-900 */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={willPanek} alt="Will Panek" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">AZ-900</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Will Panek</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Beginner
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Build foundational knowledge of cloud concepts and Azure services with Azure Fundamentals certification.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions Available</p>
                      <p className="text-xs text-muted-foreground">Interactive learning with expert guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plan</p>
                      <p className="text-xs text-muted-foreground">Structured path to Azure certification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Server className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs</p>
                      <p className="text-xs text-muted-foreground">Practice with real Azure scenarios</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AZ-104 */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={spikeXavier} alt="Spike Xavier" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">AZ-104</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Spike Xavier</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master Azure administration including managing subscriptions, storage, virtual networks, and monitoring.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions Available</p>
                      <p className="text-xs text-muted-foreground">Expert-led training sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plan (coming soon)</p>
                      <p className="text-xs text-muted-foreground">Structured path to Azure certification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Server className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs</p>
                      <p className="text-xs text-muted-foreground">Practice with real Azure scenarios</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AZ-305 */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={benBurich} alt="Ben Burich" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">AZ-305</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Ben Burich</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Advanced
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Design Microsoft Azure infrastructure solutions with advanced architecture patterns and best practices.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <FlaskConical className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs Available</p>
                      <p className="text-xs text-muted-foreground">Hands-on practice environment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">On-Demand Available</p>
                      <p className="text-xs text-muted-foreground">Learn at your own pace</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AZ-140 */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={abdelSalem} alt="Abdel Salem" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">AZ-140</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Abdel Salem</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Configure and operate Microsoft Azure Virtual Desktop environments with expert guidance.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">1:1 Instructor Mentoring</p>
                      <p className="text-xs text-muted-foreground">Personalized support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">On-Demand Available</p>
                      <p className="text-xs text-muted-foreground">Learn at your own pace</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AWS Cloud Practitioner */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={raymondLacoste} alt="Raymond Lacoste" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">AWS Cloud Practitioner</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Raymond Lacoste</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Beginner
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Build foundational AWS knowledge and prepare for the Cloud Practitioner certification.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <FlaskConical className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs Available</p>
                      <p className="text-xs text-muted-foreground">Hands-on practice environment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">24/7 intelligent assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">1:1 Mentoring</p>
                      <p className="text-xs text-muted-foreground">Personalized guidance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AWS Architect Associate */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={raymondLacoste} alt="Raymond Lacoste" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">AWS Architect Associate</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Raymond Lacoste</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master AWS architecture and design resilient, scalable cloud solutions.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <FlaskConical className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs Available</p>
                      <p className="text-xs text-muted-foreground">Hands-on practice environment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">24/7 intelligent assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">1:1 Mentoring</p>
                      <p className="text-xs text-muted-foreground">Personalized guidance</p>
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
export default CloudTraining;