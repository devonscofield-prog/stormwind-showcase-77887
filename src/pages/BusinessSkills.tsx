import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Users, HeadphonesIcon, Briefcase, TrendingUp, Heart, GraduationCap, ShieldCheck, Target, Globe, BookOpen } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BusinessSkills = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { technologies = [], features = [] } = location.state || {};

  useEffect(() => {
    document.title = "Business Skills";
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
                <BreadcrumbPage>Business Skills</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground leading-tight pb-2">
              Business Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Over 2000 high-impact bite-sized courses across 80+ topic areas for all industries and job roles
            </p>
          </div>

          {/* Overview Section */}
          <div id="business-overview" className="mb-32 animate-fade-in scroll-mt-24">
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
                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Management & Leadership</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">378 courses - Lead teams to success</p>
                    <p className="text-sm text-muted-foreground">
                      Develop essential skills to coach, motivate, and inspire teams. Master management fundamentals and leadership strategies.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <HeadphonesIcon className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Customer Service</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">69 courses - Deliver exceptional service</p>
                    <p className="text-sm text-muted-foreground">
                      Master customer interactions, problem-solving, and service excellence to build lasting client relationships.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Business Skills</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">606 courses - Essential competencies</p>
                    <p className="text-sm text-muted-foreground">
                      Build core business capabilities from communication and project management to critical thinking and negotiation.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Sales Skills</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">103 courses - Master selling techniques</p>
                    <p className="text-sm text-muted-foreground">
                      Learn effective selling strategies, relationship building, and techniques for consistent sales success.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Personal Development</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">136 courses - Invest in yourself</p>
                    <p className="text-sm text-muted-foreground">
                      Build resilience, emotional intelligence, and personal effectiveness for professional growth and wellness.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Career Development</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">129 courses - Advance your career</p>
                    <p className="text-sm text-muted-foreground">
                      Navigate your career path with strategic skills, from resume writing to leadership pipeline development.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Ethics & Quality</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">150 courses - Excellence & integrity</p>
                    <p className="text-sm text-muted-foreground">
                      Master professional conduct, ethical decision-making, and process excellence for organizational quality.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Marketing & Finance</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">138 courses - Strategy & operations</p>
                    <p className="text-sm text-muted-foreground">
                      Learn digital marketing, brand strategy, financial management, and accounting principles for business growth.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Remote Work & Wellness</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">171 courses - Modern workplace skills</p>
                    <p className="text-sm text-muted-foreground">
                      Thrive in hybrid environments with remote work best practices and comprehensive health and wellness training.
                    </p>
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
                        <span className="text-muted-foreground">Enhanced leadership and management capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Improved customer service and satisfaction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Stronger professional communication skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Increased sales performance and revenue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Available in 32 languages for global teams</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Better work-life balance and personal wellness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Career advancement opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Bite-sized microlearning for busy schedules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Industry-agnostic training for all sectors</span>
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

export default BusinessSkills;
