import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Server, Shield, Users, Award, BookOpen, Video, Clock, Monitor, ExternalLink, Brain, Lightbulb, Target } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import willPanek from "@/assets/will-panek.png";
import spikeXavier from "@/assets/spike-xavier.png";
import mikePfeiffer from "@/assets/mike-pfeiffer.png";
import microsoftRangeImage from "@/assets/microsoft-range.jpg";
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
  const categories = [{
    id: "microsoft-overview",
    icon: Server,
    title: "Microsoft Training Overview",
    description: "Comprehensive Microsoft training from fundamentals to enterprise solutions",
    color: "text-blue-500"
  }, {
    id: "key-technologies",
    icon: Monitor,
    title: "Key Technologies",
    description: "Master essential Microsoft technologies and platforms",
    color: "text-primary"
  }, {
    id: "microsoft-range",
    icon: Shield,
    title: "Microsoft Range",
    description: "Hands-on practice in a production-like Microsoft environment",
    color: "text-green-500"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Microsoft Training</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight pb-2">
              Microsoft Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Master Microsoft technologies with comprehensive training in Windows Server, Microsoft 365, endpoint management, PowerShell, Exchange, SharePoint, and enterprise administration
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate('/courses?category=Microsoft')} className="gap-2">
                Explore Courses
              </Button>
              <Button size="lg" onClick={() => navigate('/ranges')} className="gap-2">
                Explore Ranges
              </Button>
            </div>
          </div>


          {/* Microsoft Technologies Section */}
          <div className="mb-32 animate-fade-in">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
              {/* Azure */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Microsoft Azure</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Master cloud computing with Azure fundamentals, administration, architecture, DevOps, security, networking, and virtual desktop solutions.
                </p>
              </div>

              {/* Microsoft 365 */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Microsoft 365</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Learn Microsoft 365 administration, Intune endpoint management, Exchange messaging, Teams administration, and SharePoint management.
                </p>
              </div>

              {/* Windows Server */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Windows Server</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enterprise Windows 11 administration and Windows Server versions 2016, 2019, 2022, and 2025 with networking and system management.
                </p>
              </div>

              {/* PowerShell */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">PowerShell</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  PowerShell scripting, automation, tool building, Microsoft 365 integration, and Microsoft Graph PowerShell for administrators.
                </p>
              </div>

              {/* Security */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Security & Compliance</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Microsoft security fundamentals, cybersecurity architecture, security operations, identity and access management, and Security Copilot.
                </p>
              </div>

              {/* SQL Server */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">SQL Server & Databases</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Querying with Transact-SQL, database development, SQL Server Reporting Services (SSRS), and introduction to SQL fundamentals.
                </p>
              </div>

              {/* Microsoft 365 Copilot */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Microsoft 365 Copilot</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AI-powered productivity with Microsoft 365 Copilot for Word, PowerPoint, Outlook, Excel, Teams, and Copilot Studio agents.
                </p>
              </div>

              {/* Power Platform */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Power Platform</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Microsoft Power BI data analytics, business intelligence, data visualization, and Power Platform fundamentals certification.
                </p>
              </div>
            </div>

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
              {/* MS-102 Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={spikeXavier} alt="Spike Xavier" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" loading="lazy" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">MS-102: Microsoft 365 Administrator</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Spike Xavier</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Advanced</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master Microsoft 365 administration with comprehensive training in identity and access management, security, compliance, Microsoft 365 services, and enterprise deployment. Prepare for the MS-102 certification exam.
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
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">24 Hours of Training</p>
                      <p className="text-xs text-muted-foreground">Advanced level certification</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MD-102 Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={willPanek} alt="Will Panek" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" loading="lazy" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">MD-102: Endpoint Administrator</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Will Panek</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Intermediate</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Learn to deploy, configure, secure, manage, and monitor devices and client applications in an enterprise environment. Master Windows 11, Intune, Microsoft Endpoint Configuration Manager, and endpoint security.
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
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">18 Hours of Training</p>
                      <p className="text-xs text-muted-foreground">Comprehensive endpoint management</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Windows Server 2025 Administration Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={mikePfeiffer} alt="Mike Pfeiffer" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" loading="lazy" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Windows Server 2025 Administration</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Mike Pfeiffer</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Advanced</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master the latest Windows Server 2025 administration with comprehensive training in server deployment, configuration, management, and security. Learn enterprise-grade infrastructure management.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">Get instant help from AI assistant</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions</p>
                      <p className="text-xs text-muted-foreground">Interactive expert-led training</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AZ-900 Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={willPanek} alt="Will Panek" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" loading="lazy" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">AZ-900: Azure Fundamentals</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Will Panek</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Beginner</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Begin your cloud journey with Azure fundamentals. Learn cloud concepts, core Azure services, security, privacy, compliance, and Azure pricing. Perfect for anyone starting with Microsoft Azure.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">24/7 AI learning support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions</p>
                      <p className="text-xs text-muted-foreground">Expert-led interactive sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plans</p>
                      <p className="text-xs text-muted-foreground">Structured learning path</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AZ-104 Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={spikeXavier} alt="Spike Xavier" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" loading="lazy" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">AZ-104: Azure Administrator</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Spike Xavier</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Intermediate</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master Azure administration with comprehensive training in managing identities, governance, storage, compute, and virtual networks. Prepare for the AZ-104 certification exam.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">Smart learning assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs</p>
                      <p className="text-xs text-muted-foreground">Hands-on Azure practice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plan</p>
                      <p className="text-xs text-muted-foreground">Coming soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PowerShell Administration Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={mikePfeiffer} alt="Mike Pfeiffer" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" loading="lazy" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">PowerShell Administration</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Mike Pfeiffer</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Beginner</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  PowerShell is a powerful tool for any Windows Administrator. This series of courses will teach you how to use PowerShell from the basics all the way to automating common administrative functions.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Bytes</p>
                      <p className="text-xs text-muted-foreground">Bite-sized learning modules</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Pre and Post Test</p>
                      <p className="text-xs text-muted-foreground">Measure your progress</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Learning Path</p>
                      <p className="text-xs text-muted-foreground">Structured learning journey</p>
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
export default Microsoft;