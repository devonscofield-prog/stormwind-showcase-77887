import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Shield, Brain, Settings, FileText, Mail, GraduationCap, Target, CheckCircle, Zap, Users, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { trainingLinks } from "@/lib/trainingLinks";

const Phishing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "StormAI Phishing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              StormAI Phishing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-driven phishing simulations that mirror real-world hacker techniques, with zero manual management required.
            </p>
          </div>

          {/* Key Features Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Key Features</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">AI-Personalized Simulations</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Each employee receives unique simulations generated from Entra ID profiles, creating personalized and realistic phishing scenarios.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Turn-Key Setup</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Configure once (15–20 minutes) and let the system automate delivery, difficulty progression, and timing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Comprehensive Reporting</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Ready-to-use dashboards for compliance audits, insurance reporting, and stakeholder updates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Outlook Plugin with Instant Feedback</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Immediate training for failed attempts and positive reinforcement for correct reporting actions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Security Awareness Courses</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Modular courses on Email Security, Ransomware Defense, Executive Security Awareness, and IT Security fundamentals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Multiple Attack Vectors</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Email Domain Spoofs, Teams Messages, C-Suite Impersonations, and other sophisticated attack patterns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Types of Simulations Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Types of Simulations</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Our comprehensive phishing simulation platform covers all the real-world attack techniques that your employees will encounter. Each simulation type is designed to test different aspects of security awareness and build critical thinking skills.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Email-Based Attacks
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Domain spoofing and look-alike domains</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Executive impersonation and C-suite spoofing</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Credential harvesting pages</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Malicious attachments and suspicious links</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Advanced Threat Scenarios
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Microsoft Teams message phishing</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>QR code phishing (quishing)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Business email compromise (BEC)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Social engineering with urgency tactics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-accent/30 rounded-lg p-6 mt-6">
                    <h3 className="font-semibold text-lg mb-3">Tailored to Your Organization</h3>
                    <p className="text-muted-foreground">
                      Simulations are automatically customized based on your organization's profile, industry, and individual employee roles. The AI generates realistic scenarios that your team would actually encounter, making the training more relevant and effective.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How It Works Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Settings className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="bg-accent/30 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Quick Setup & Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Connect your Entra ID in 15–20 minutes. The system automatically pulls employee profiles and organizational structure to personalize simulations.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">AI-Generated Simulations</h4>
                        <p className="text-sm text-muted-foreground">
                          The AI creates unique, realistic phishing emails for each employee based on their role, department, and typical communications. Simulations automatically adjust difficulty over time.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Immediate Feedback & Learning</h4>
                        <p className="text-sm text-muted-foreground">
                          When an employee clicks a phishing link or reports a suspicious email, they receive instant, contextual feedback explaining what clues they should look for. This transforms mistakes into learning moments.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Continuous Monitoring & Reporting</h4>
                        <p className="text-sm text-muted-foreground">
                          Track progress with comprehensive dashboards showing click rates, reporting rates, and improvement trends across your organization. Export reports for compliance and insurance requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Immediate Feedback Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Immediate Feedback System</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Real-time learning moments that transform mistakes into knowledge. The Outlook plugin provides instant, actionable feedback whether employees click on a phishing link or correctly report a suspicious email.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        When They Miss a Phishing Email
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        If an employee clicks on a simulated phishing link, they immediately see:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Specific red flags they missed in the email</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>What legitimate emails should look like</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Actionable tips to spot similar attacks</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Optional micro-training modules to reinforce learning</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        When They Correctly Report Phishing
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        When employees use the Outlook plugin to report a suspicious email, they receive:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Positive reinforcement acknowledging their vigilance</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Confirmation of what clues they correctly identified</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Recognition in reporting dashboards</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Continued engagement with new challenge levels</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Button size="lg" asChild>
              <a href="/security-awareness" target="_blank" rel="noopener noreferrer" className="gap-2">
                <GraduationCap className="w-5 h-5" />
                Explore Security Awareness Training
              </a>
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Phishing;
