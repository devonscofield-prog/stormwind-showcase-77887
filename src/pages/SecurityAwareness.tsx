import { useEffect } from "react";
import { Shield, Mail, Users, Briefcase, BookOpen } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";

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
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Protect Your Organization</h3>
            <p className="text-muted-foreground leading-relaxed">
              StormWind's Security Awareness Training delivers essential knowledge to help your team recognize 
              and defend against cyber threats. From understanding phishing attacks and ransomware to executive-level 
              security briefings, our comprehensive programs ensure every member of your organization has the skills 
              they need to maintain a strong security posture.
            </p>
          </div>

          <BentoGrid columns={4} className="mb-8">
            <BentoCard icon={Users} title="Core Series" description="12 essential courses: Security Quickstart, Social Engineering Defense, and more." />
            <BentoCard icon={Shield} title="Ransomware" description="Deep coverage of ransomware threats, analysis, and best practices." />
            <BentoCard icon={Mail} title="Email Security" description="Recognize spoofed addresses, dangerous attachments, and phishing." />
            <BentoCard icon={Briefcase} title="Executive" description="Security briefings and strategies for decision makers." />
          </BentoGrid>

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
    </PageLayout>
  );
};

export default SecurityAwareness;
