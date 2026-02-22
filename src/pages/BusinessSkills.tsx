import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, HeadphonesIcon, Briefcase, TrendingUp, Heart, GraduationCap, ShieldCheck, Target, Globe, BookOpen, FlaskConical } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/courses">
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
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Develop Essential Business Skills</h3>
            <p className="text-muted-foreground leading-relaxed">
              StormWind's Business Skills Training delivers comprehensive instruction across core professional competencies. 
              From leadership and management to customer service and personal development, our microlearning courses help 
              individuals and teams build the skills needed to excel in today's dynamic business environment.
            </p>
          </div>

          <BentoGrid columns={3} className="mb-8">
            <BentoCard
              icon={Users}
              title="Management & Leadership"
              description="378 courses - Coach, motivate, and inspire teams with management fundamentals."
            />

            <BentoCard
              icon={HeadphonesIcon}
              title="Customer Service"
              description="69 courses - Master customer interactions and build lasting relationships."
            />

            <BentoCard
              icon={Briefcase}
              title="Business Skills"
              description="606 courses - Communication, project management, and critical thinking."
            />

            <BentoCard
              icon={TrendingUp}
              title="Sales Skills"
              description="103 courses - Effective selling strategies and relationship building."
            />

            <BentoCard
              icon={Heart}
              title="Personal Development"
              description="136 courses - Resilience, emotional intelligence, and personal effectiveness."
            />

            <BentoCard
              icon={GraduationCap}
              title="Career Development"
              description="129 courses - Navigate your career path with strategic skills."
            />

            <BentoCard
              icon={ShieldCheck}
              title="Ethics & Quality"
              description="150 courses - Professional conduct, ethics, and process excellence."
            />

            <BentoCard
              icon={Target}
              title="Marketing & Finance"
              description="138 courses - Digital marketing, brand strategy, and financial management."
            />

            <BentoCard
              icon={Globe}
              title="Remote Work & Wellness"
              description="171 courses - Hybrid work practices and comprehensive wellness training."
            />
          </BentoGrid>

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
    </PageLayout>
  );
};

export default BusinessSkills;
