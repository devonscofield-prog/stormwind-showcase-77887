import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground leading-tight pb-2">
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
              {[
                {
                  title: "Microsoft Azure",
                  description: "Master cloud computing with Azure fundamentals, administration, architecture, DevOps, security, networking, and virtual desktop solutions.",
                  icon: (isHovered: boolean) => (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="azure-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={isHovered ? "#60a5fa" : "#3b82f6"} />
                          <stop offset="100%" stopColor={isHovered ? "#3b82f6" : "#1d4ed8"} />
                        </linearGradient>
                      </defs>
                      <path d="M20,70 L50,20 L80,70 Z" fill="url(#azure-grad)" opacity="0.9">
                        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </path>
                      <circle cx="50" cy="80" r="8" fill="url(#azure-grad)">
                        <animate attributeName="r" values="8;10;8" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </circle>
                    </svg>
                  ),
                },
                {
                  title: "Microsoft 365",
                  description: "Learn Microsoft 365 administration, Intune endpoint management, Exchange messaging, Teams administration, and SharePoint management.",
                  icon: (isHovered: boolean) => (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="m365-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={isHovered ? "#f472b6" : "#ec4899"} />
                          <stop offset="100%" stopColor={isHovered ? "#ec4899" : "#be185d"} />
                        </linearGradient>
                      </defs>
                      <rect x="20" y="20" width="25" height="25" fill="url(#m365-grad)" rx="3">
                        <animateTransform attributeName="transform" type="rotate" from="0 32.5 32.5" to="360 32.5 32.5" dur={isHovered ? "6s" : "4s"} repeatCount="indefinite" />
                      </rect>
                      <rect x="55" y="20" width="25" height="25" fill="url(#m365-grad)" rx="3">
                        <animateTransform attributeName="transform" type="rotate" from="0 67.5 32.5" to="-360 67.5 32.5" dur={isHovered ? "6s" : "4s"} repeatCount="indefinite" />
                      </rect>
                      <rect x="20" y="55" width="25" height="25" fill="url(#m365-grad)" rx="3">
                        <animateTransform attributeName="transform" type="rotate" from="0 32.5 67.5" to="-360 32.5 67.5" dur={isHovered ? "6s" : "4s"} repeatCount="indefinite" />
                      </rect>
                      <rect x="55" y="55" width="25" height="25" fill="url(#m365-grad)" rx="3">
                        <animateTransform attributeName="transform" type="rotate" from="0 67.5 67.5" to="360 67.5 67.5" dur={isHovered ? "6s" : "4s"} repeatCount="indefinite" />
                      </rect>
                    </svg>
                  ),
                },
                {
                  title: "Windows Server",
                  description: "Enterprise Windows 11 administration and Windows Server versions 2016, 2019, 2022, and 2025 with networking and system management.",
                  icon: (isHovered: boolean) => (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="server-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={isHovered ? "#a78bfa" : "#8b5cf6"} />
                          <stop offset="100%" stopColor={isHovered ? "#8b5cf6" : "#6d28d9"} />
                        </linearGradient>
                      </defs>
                      <rect x="20" y="25" width="60" height="15" fill="url(#server-grad)" rx="2">
                        <animate attributeName="opacity" values="1;0.6;1" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </rect>
                      <rect x="20" y="45" width="60" height="15" fill="url(#server-grad)" rx="2">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </rect>
                      <rect x="20" y="65" width="60" height="15" fill="url(#server-grad)" rx="2">
                        <animate attributeName="opacity" values="1;0.6;1" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </rect>
                    </svg>
                  ),
                },
                {
                  title: "PowerShell",
                  description: "PowerShell scripting, automation, tool building, Microsoft 365 integration, and Microsoft Graph PowerShell for administrators.",
                  icon: (isHovered: boolean) => (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="powershell-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={isHovered ? "#34d399" : "#10b981"} />
                          <stop offset="100%" stopColor={isHovered ? "#10b981" : "#059669"} />
                        </linearGradient>
                      </defs>
                      <path d="M30,70 L50,30 L70,50" stroke="url(#powershell-grad)" strokeWidth="8" fill="none" strokeLinecap="round">
                        <animate attributeName="stroke-dasharray" values="0,150;150,0" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </path>
                      <line x1="55" y1="70" x2="75" y2="70" stroke="url(#powershell-grad)" strokeWidth="6" strokeLinecap="round">
                        <animate attributeName="opacity" values="0;1;0" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </line>
                    </svg>
                  ),
                },
                {
                  title: "Security & Compliance",
                  description: "Microsoft security fundamentals, cybersecurity architecture, security operations, identity and access management, and Security Copilot.",
                  icon: (isHovered: boolean) => (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="security-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={isHovered ? "#fbbf24" : "#f59e0b"} />
                          <stop offset="100%" stopColor={isHovered ? "#f59e0b" : "#d97706"} />
                        </linearGradient>
                      </defs>
                      <path d="M50,20 L70,30 L70,55 Q70,75 50,85 Q30,75 30,55 L30,30 Z" fill="url(#security-grad)">
                        <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" additive="sum" />
                      </path>
                      <circle cx="50" cy="55" r="8" fill="white">
                        <animate attributeName="r" values="8;10;8" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </circle>
                    </svg>
                  ),
                },
                {
                  title: "SQL Server & Databases",
                  description: "Querying with Transact-SQL, database development, SQL Server Reporting Services (SSRS), and introduction to SQL fundamentals.",
                  icon: (isHovered: boolean) => (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="sql-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={isHovered ? "#fb923c" : "#f97316"} />
                          <stop offset="100%" stopColor={isHovered ? "#f97316" : "#ea580c"} />
                        </linearGradient>
                      </defs>
                      <ellipse cx="50" cy="30" rx="30" ry="10" fill="url(#sql-grad)">
                        <animate attributeName="ry" values="10;12;10" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </ellipse>
                      <ellipse cx="50" cy="50" rx="30" ry="10" fill="url(#sql-grad)">
                        <animate attributeName="ry" values="10;12;10" dur={isHovered ? "3s" : "2s"} begin="0.5s" repeatCount="indefinite" />
                      </ellipse>
                      <ellipse cx="50" cy="70" rx="30" ry="10" fill="url(#sql-grad)">
                        <animate attributeName="ry" values="10;12;10" dur={isHovered ? "3s" : "2s"} begin="1s" repeatCount="indefinite" />
                      </ellipse>
                    </svg>
                  ),
                },
                {
                  title: "Microsoft 365 Copilot",
                  description: "AI-powered productivity with Microsoft 365 Copilot for Word, PowerPoint, Outlook, Excel, Teams, and Copilot Studio agents.",
                  icon: (isHovered: boolean) => (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="copilot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={isHovered ? "#c084fc" : "#a855f7"} />
                          <stop offset="100%" stopColor={isHovered ? "#a855f7" : "#9333ea"} />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="25" fill="url(#copilot-grad)">
                        <animate attributeName="r" values="25;28;25" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </circle>
                      <path d="M40,45 L48,55 L62,35" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <animate attributeName="stroke-dasharray" values="0,50;50,0" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </path>
                    </svg>
                  ),
                },
                {
                  title: "Power Platform",
                  description: "Microsoft Power BI data analytics, business intelligence, data visualization, and Power Platform fundamentals certification.",
                  icon: (isHovered: boolean) => (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="power-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={isHovered ? "#fde047" : "#facc15"} />
                          <stop offset="100%" stopColor={isHovered ? "#facc15" : "#eab308"} />
                        </linearGradient>
                      </defs>
                      <polygon points="50,20 65,45 80,50 65,55 50,80 35,55 20,50 35,45" fill="url(#power-grad)">
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur={isHovered ? "6s" : "4s"} repeatCount="indefinite" />
                      </polygon>
                      <circle cx="50" cy="50" r="12" fill="white">
                        <animate attributeName="r" values="12;15;12" dur={isHovered ? "3s" : "2s"} repeatCount="indefinite" />
                      </circle>
                    </svg>
                  ),
                },
              ].map((tech, index) => {
                const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);
                const [isHovered, setIsHovered] = useState(false);
                const cardRef = useRef<HTMLDivElement>(null);
                const particleIdRef = useRef(0);

                useEffect(() => {
                  if (!isHovered) {
                    setParticles([]);
                    return;
                  }

                  const interval = setInterval(() => {
                    setParticles((prev) => prev.filter((p) => p.opacity > 0).map((p) => ({ ...p, opacity: p.opacity - 0.02 })));
                  }, 50);

                  return () => clearInterval(interval);
                }, [isHovered]);

                const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                  if (!cardRef.current) return;
                  const rect = cardRef.current.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  setParticles((prev) => [
                    ...prev.slice(-20),
                    { id: particleIdRef.current++, x, y, opacity: 1 },
                  ]);
                };

                const colors = ["#3b82f6", "#ec4899", "#8b5cf6", "#10b981", "#f59e0b", "#f97316", "#a855f7", "#facc15"];

                return (
                  <div
                    key={index}
                    ref={cardRef}
                    className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onMouseMove={handleMouseMove}
                  >
                    {particles.map((particle) => (
                      <div
                        key={particle.id}
                        className="absolute w-2 h-2 rounded-full pointer-events-none"
                        style={{
                          left: particle.x,
                          top: particle.y,
                          backgroundColor: colors[index % colors.length],
                          opacity: particle.opacity,
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    ))}
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="p-3 rounded-lg bg-primary/10 w-16 h-16 flex items-center justify-center">
                        {tech.icon(isHovered)}
                      </div>
                      <h3 className="text-xl font-bold">{tech.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                      {tech.description}
                    </p>
                  </div>
                );
              })}
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