import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Shield, Briefcase, Lock, Scale, BookOpen } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const HRCompliancePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  useEffect(() => {
    document.title = "HR Compliance";
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
                <BreadcrumbPage>HR Compliance</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              HR Compliance Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transform your workplace with comprehensive compliance training. Ensure your organization not only meets regulatory standards, but thrives with a culture of integrity and resilience.
            </p>
          </div>

          {/* Overview Section */}
          <div id="compliance-overview" className="mb-32 animate-fade-in scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Build a Culture of Compliance and Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    StormWind's HR Compliance Training provides your organization with the knowledge and tools to maintain a safe, ethical, and legally compliant workplace. From preventing harassment and workplace violence to protecting sensitive data and ensuring ethical leadership, our comprehensive training helps your team understand their responsibilities and empowers them to make the right decisions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Harassment Prevention</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Create a respectful workplace</p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Preventing Workplace Harassment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Preventing Bullying in the Workplace</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Workplace Safety</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Protect your team and facilities</p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Active Shooter Response</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Hazard Communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Workplace Violence Prevention</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Lock className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Data Protection</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Safeguard sensitive information</p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Global Data Privacy Awareness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">HIPAA Compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">PCI DSS Standards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Protecting Intellectual Property</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Scale className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Ethics & Compliance</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Foster ethical decision-making</p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Anti-Bribery & Anti-Corruption (FCPA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Ethical Leadership</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">FMLA & Leave Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Lawful Hiring Practices</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Training Benefits
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Reduced legal risks and liability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Enhanced workplace safety and security</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Improved employee morale and retention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Stronger organizational culture</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Better data protection and privacy compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Demonstrated commitment to ethical practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Regulatory compliance confidence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Reduced workplace incidents and claims</span>
                      </li>
                    </ul>
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

export default HRCompliancePage;
