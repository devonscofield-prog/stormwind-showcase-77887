import { useLocation } from "react-router-dom";
import { Shield, Briefcase, Lock, Scale, BookOpen } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const HRCompliancePage = () => {
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  return (
    <PageLayout
      title="HR Compliance Training"
      description="Transform your workplace with comprehensive compliance training. Ensure your organization not only meets regulatory standards, but thrives with a culture of integrity and resilience."
      breadcrumbs={[{ label: "HR Compliance" }]}
    >
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

              {/* Disclaimer */}
              <div className="mt-12 rounded-lg bg-primary/10 border-2 border-primary/30 p-8 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      Learn More About Our HR Compliance Offerings
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To learn more about specific courses and packages available in our HR Compliance offering, please contact your Learning Director. They can provide detailed information about customized training solutions tailored to your organization's needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </PageLayout>
  );
};

export default HRCompliancePage;
