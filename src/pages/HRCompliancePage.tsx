import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Briefcase, Lock, Scale, BookOpen, FlaskConical } from "lucide-react";
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
      heroActions={
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/courses?category=HR%20Compliance">
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
          {/* Overview Section */}
          <div id="compliance-overview" className="mb-32 animate-fade-in scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Build a Culture of Compliance and Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Compliance failures cost organizations millions in fines, litigation, and reputational damage every year. StormWind's compliance training library gives your workforce the knowledge to prevent violations before they happen through interactive, on-demand microlearning courses.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From preventing harassment and workplace violence to protecting sensitive data and ensuring ethical leadership, our comprehensive training helps your team understand their responsibilities and empowers them to make the right decisions.
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
                        <span className="text-muted-foreground">Definitions of harassment, sexual harassment, and bullying</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Responding to harassment incidents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Intervention strategies</span>
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
                        <span className="text-muted-foreground">Preventing substance abuse</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Risk management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Active shooter protocols</span>
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
                        <span className="text-muted-foreground">Information security</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Safe internet usage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Data protection</span>
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
                        <span className="text-muted-foreground">Workplace discrimination laws</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Workplace safety laws</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Wage and hour laws</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Employee benefit laws</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Representation of different demographics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 border border-primary/20 p-6 mb-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    Why StormWind for Compliance
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Legally Reviewed Content</p>
                      <p className="text-muted-foreground">Harassment Prevention courses undergo bi-annual legal review by Ogletree Deakins, one of the largest labor and employment law firms in the U.S. Canadian content is reviewed by Ogletree Deakins attorneys specializing in Canadian employment law.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">State-Specific Compliance</p>
                      <p className="text-muted-foreground">Dedicated course versions for CA, CT, DE, IL, ME, NY, TX, WA, Ontario, and Canada, with regulatory updates incorporated into video content as laws change.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Comprehensive Coverage</p>
                      <p className="text-muted-foreground">Four key compliance domains covering HIPAA, GDPR, CPRA, PIPEDA, FCPA, FERPA, ADA, Title IX, and more.</p>
                    </div>
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
