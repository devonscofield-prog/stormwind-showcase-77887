import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, ExternalLink, Zap, BarChart3, Cloud, Database } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BusinessPro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { technologies = [], features = [] } = location.state || {};

  useEffect(() => {
    document.title = "Business Pro";
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
                <BreadcrumbPage>Business Pro</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground leading-tight pb-2">
              Business Pro
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Professional business technology training covering Power Platform, Power BI, Cloud Data, and essential data skills
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/courses')}
                className="gap-2"
              >
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Overview Section */}
          <div id="business-pro-overview" className="mb-32 animate-fade-in scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Master Business Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    StormWind's Business Pro Training delivers comprehensive instruction across modern business technology platforms. 
                    From Power Platform automation to advanced data analytics with Power BI, cloud data solutions, and essential data 
                    skills, our courses prepare professionals to drive digital transformation and data-driven decision making.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Power Platform</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">40 courses - Low-code app development</p>
                    <p className="text-sm text-muted-foreground">
                      Master Power Apps, Power Automate, Power Pages, and Copilot Studio. Build apps, automate workflows, and create intelligent chatbots with low-code tools.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Power BI</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">61 courses - Data visualization & analytics</p>
                    <p className="text-sm text-muted-foreground">
                      Transform data into visual insights. Master data modeling, DAX, advanced visualizations, AI integration, and compelling data storytelling.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <Cloud className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Cloud Data</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">49 courses - Enterprise data solutions</p>
                    <p className="text-sm text-muted-foreground">
                      Build scalable cloud data solutions with Azure and SQL Server. Master data engineering, warehousing, analytics, and AI services.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Data Skills</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">20 courses - Data management fundamentals</p>
                    <p className="text-sm text-muted-foreground">
                      Excel in data analysis with Excel, Python, SQL, and database management. Essential skills for data-driven business decisions.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ExternalLink className="w-6 h-6 text-primary" />
                    Training Benefits
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Build low-code apps and automation workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Create compelling data visualizations and reports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Design enterprise-scale cloud data solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Master data analysis and management tools</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Earn industry-recognized Microsoft certifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Hands-on labs and real-world projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Drive digital transformation initiatives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Advance your business technology career</span>
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
                Industry-recognized Power Platform certifications to advance your business technology career
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* PL-900 Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <ExternalLink className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">PL-900: Power Platform Fundamentals</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Beginner
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master the fundamentals of Microsoft Power Platform including Power Apps, Power Automate, Power BI, and Power Pages. Learn to create business solutions and automate workflows with low-code tools.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Comprehensive Training</p>
                      <p className="text-xs text-muted-foreground">Master Power Platform fundamentals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Foundational Level</p>
                      <p className="text-xs text-muted-foreground">Perfect for beginners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cloud className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Instructor Mentoring</p>
                      <p className="text-xs text-muted-foreground">Get personalized guidance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PL-300 Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">PL-300: Power BI Data Analyst</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Design and build scalable data models, clean and transform data, and enable advanced analytic capabilities through reports and dashboards using Microsoft Power BI.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Hands-On Labs</p>
                      <p className="text-xs text-muted-foreground">Practice with real scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">Get instant assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPro;
