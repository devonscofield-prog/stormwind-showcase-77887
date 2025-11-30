import { useEffect } from "react";
import { Shield, Mail, Users, Briefcase, BookOpen } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const SecurityAwareness = () => {
  useEffect(() => {
    document.title = "Security Awareness";
  }, []);

  return (
    <PageLayout
      title="Security Awareness Training"
      description="A great security awareness training program can make all the difference in your cybersecurity posture. Vigilance and appropriate behavior towards threats begins with a thorough understanding of attacks launched by cybercriminals and hackers."
      breadcrumbs={[{ label: "Security Awareness Training" }]}
    >
      {/* Overview Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Protect Your Organization</h3>
              <p className="text-muted-foreground leading-relaxed">
                StormWind's Security Awareness Training delivers essential knowledge to help your team recognize 
                and defend against cyber threats. From understanding phishing attacks and ransomware to executive-level 
                security briefings, our comprehensive programs ensure every member of your organization has the skills 
                they need to maintain a strong security posture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="rounded-lg bg-card/50 border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Core Series</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Essential security training for all employees</p>
                <ul className="space-y-2 text-sm mb-4">
                  {["Security Awareness Quickstart", "Defensive Systems Usage", "Social Engineering Defense", "12 Core Security Courses"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Ransomware</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Deep coverage of ransomware threats</p>
                <ul className="space-y-2 text-sm mb-4">
                  {["Ransomware Understanding", "Threat Analysis", "Breach Lessons", "Best Practices"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Email Security</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Recognize malicious emails and attachments</p>
                <ul className="space-y-2 text-sm mb-4">
                  {["Safe Email Usage", "Spoofed Addresses", "Dangerous Attachments", "Social Engineering"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Executive</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Security briefings for decision makers</p>
                <ul className="space-y-2 text-sm mb-4">
                  {["System Threats", "Persistent Concerns", "Security Strategies", "Emerging Concerns"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
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
                  {["Reduced security incidents and breaches", "Enhanced threat recognition skills", "Improved compliance with security policies", "Better protection against phishing attacks"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm">
                  {["Increased employee security awareness", "Stronger organizational security culture", "Lower risk of data breaches", "Measurable improvement in security posture"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SecurityAwareness;
