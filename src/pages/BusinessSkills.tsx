import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, HeadphonesIcon, Briefcase, TrendingUp, Heart, GraduationCap, ShieldCheck, Target, Globe, BookOpen } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const BusinessSkills = () => {
  useEffect(() => {
    document.title = "Business Skills";
  }, []);

  return (
    <PageLayout
      title="Business Skills"
      description="Over 2000 high-impact bite-sized courses across 80+ topic areas for all industries and job roles"
      breadcrumbs={[{ label: "Business Skills" }]}
      heroActions={
        <Button asChild size="lg" className="font-semibold">
          <Link to="/courses?category=Business%20Skills">Explore Courses</Link>
        </Button>
      }
    >
      {/* Overview Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Develop Essential Business Skills</h3>
              <p className="text-muted-foreground leading-relaxed">
                StormWind's Business Skills Training delivers comprehensive instruction across core professional competencies. 
                From leadership and management to customer service and personal development, our microlearning courses help 
                individuals and teams build the skills needed to excel in today's dynamic business environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Users, title: "Management & Leadership", count: "378 courses", desc: "Lead teams to success", detail: "Develop essential skills to coach, motivate, and inspire teams. Master management fundamentals and leadership strategies." },
                { icon: HeadphonesIcon, title: "Customer Service", count: "69 courses", desc: "Deliver exceptional service", detail: "Master customer interactions, problem-solving, and service excellence to build lasting client relationships." },
                { icon: Briefcase, title: "Business Skills", count: "606 courses", desc: "Essential competencies", detail: "Build core business capabilities from communication and project management to critical thinking and negotiation." },
                { icon: TrendingUp, title: "Sales Skills", count: "103 courses", desc: "Master selling techniques", detail: "Learn effective selling strategies, relationship building, and techniques for consistent sales success." },
                { icon: Heart, title: "Personal Development", count: "136 courses", desc: "Invest in yourself", detail: "Build resilience, emotional intelligence, and personal effectiveness for professional growth and wellness." },
                { icon: GraduationCap, title: "Career Development", count: "129 courses", desc: "Advance your career", detail: "Navigate your career path with strategic skills, from resume writing to leadership pipeline development." },
                { icon: ShieldCheck, title: "Ethics & Quality", count: "150 courses", desc: "Excellence & integrity", detail: "Master professional conduct, ethical decision-making, and process excellence for organizational quality." },
                { icon: Target, title: "Marketing & Finance", count: "138 courses", desc: "Strategy & operations", detail: "Learn digital marketing, brand strategy, financial management, and accounting principles for business growth." },
                { icon: Globe, title: "Remote Work & Wellness", count: "171 courses", desc: "Modern workplace skills", detail: "Thrive in hybrid environments with remote work best practices and comprehensive health and wellness training." },
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-8 h-8 text-primary" />
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.count} - {item.desc}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Training Benefits
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  {["Enhanced leadership and management capabilities", "Improved customer service and satisfaction", "Stronger professional communication skills", "Increased sales performance and revenue", "Available in 32 languages for global teams"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm">
                  {["Better work-life balance and personal wellness", "Career advancement opportunities", "Bite-sized microlearning for busy schedules", "Industry-agnostic training for all sectors"].map((item, i) => (
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

export default BusinessSkills;
