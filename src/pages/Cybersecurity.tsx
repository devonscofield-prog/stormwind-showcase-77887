import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Shield, Target, Users, Award, BookOpen, Video, ExternalLink, Brain, Monitor, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import chrisPaul from "@/assets/chris-paul.png";
import shaneSexton from "@/assets/shane-sexton.png";
import willPanek from "@/assets/will-panek.png";
const Cybersecurity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};
  useEffect(() => {
    document.title = "Cybersecurity";
  }, []);
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              Cybersecurity Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive cybersecurity training covering governance, vendor-specific certifications, and industry frameworks
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate('/courses?category=Cybersecurity')} className="gap-2">
                Explore Courses
              </Button>
              <Button size="lg" onClick={() => navigate('/ranges')} className="gap-2">
                Explore Ranges
              </Button>
            </div>
          </div>

          {/* Technologies We Cover Section */}
          <div className="mb-32 animate-fade-in">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Penetration Testing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Identify and mitigate security risks to computer systems, ethical hacking methodologies, vulnerability assessments, and exploitation techniques
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security Operations</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Threat detection, incident response, security monitoring, and SIEM implementation</p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security Management</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Security governance, policy development, risk assessment, program management, and security leadership
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Information Security</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Data protection, encryption, access controls, security architecture, and safeguarding information assets
                </p>
              </div>
            </div>

          </div>

          {/* Featured Courses Section */}
          <div className="mb-32 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Popular cybersecurity training courses to advance your security career
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Security+ Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={raymondLacoste} alt="Raymond Lacoste" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">CompTIA Security+</h3>
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
                  An international, vendor-neutral certification proving your knowledge and skills to assess security posture, implement solutions, and monitor hybrid environments including cloud, mobile, and IoT. Covers governance, risk, compliance, and incident response.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs</p>
                      <p className="text-xs text-muted-foreground">Practice security concepts in real environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge before certification</p>
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

              {/* CISSP Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={raymondLacoste} alt="Raymond Lacoste" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">CISSP</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Raymond Lacoste</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Advanced
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive training covering all 8 CISSP domains critical for architecting, designing, and managing secure IT solutions. Enhance your organization's security posture with expertise in Security and Risk Management, Asset Security, Security Engineering, and more.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your knowledge before certification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Certification Study Plans</p>
                      <p className="text-xs text-muted-foreground">Structured learning path</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">Get personalized assistance and guidance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CompTIA CySA+ Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={chrisPaul} alt="Chris Paul" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">CompTIA CySA+</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Chris Paul</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master cybersecurity analytics and threat detection with comprehensive training in security operations, vulnerability management, incident response, and security monitoring. Prepare for the CompTIA CySA+ CS0-003 certification exam.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs</p>
                      <p className="text-xs text-muted-foreground">Hands-on security analytics practice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">24/7 AI learning support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">1:1 Mentoring</p>
                      <p className="text-xs text-muted-foreground">Expert guidance and support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CompTIA SecurityX Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={shaneSexton} alt="Shane Sexton" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">CompTIA SecurityX</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Shane Sexton</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Advanced
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Advanced security certification for experienced professionals. Master security architecture, governance, risk management, and enterprise security operations. Prepare for the CompTIA SecurityX CAS-005 certification exam.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Comprehensive exam preparation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">On-Demand Sessions</p>
                      <p className="text-xs text-muted-foreground">Learn at your own pace</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CompTIA PenTest+ Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={shaneSexton} alt="Shane Sexton" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">CompTIA PenTest+</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Shane Sexton</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Advanced
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master penetration testing and vulnerability assessment with comprehensive training in planning, scoping, information gathering, vulnerability identification, exploitation, and reporting. Prepare for the CompTIA PenTest+ PT0-003 certification.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Test your penetration testing skills</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">On-Demand Sessions</p>
                      <p className="text-xs text-muted-foreground">Flexible learning schedule</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ethical Hacking v13 Featured Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img src={willPanek} alt="Will Panek" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Ethical Hacking v13</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: Will Panek</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Advanced
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive ethical hacking training covering the latest tools, techniques, and methodologies used by security professionals. Learn to identify vulnerabilities, exploit systems ethically, and secure networks against real-world threats.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions</p>
                      <p className="text-xs text-muted-foreground">Interactive expert-led training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">Get instant help from AI assistant</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Labs</p>
                      <p className="text-xs text-muted-foreground">Hands-on hacking practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        
      </footer>
    </div>;
};
export default Cybersecurity;