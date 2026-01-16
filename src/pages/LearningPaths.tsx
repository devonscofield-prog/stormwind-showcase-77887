import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Route,
  Target,
  ChevronRight,
  Award,
  CheckCircle2,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Medal,
  BarChart3,
  FlaskConical,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import FeatureListItem from "@/components/FeatureListItem";

// Step Card Component
const StepCard = ({ 
  step, 
  title, 
  description, 
  icon: Icon, 
  delay 
}: { 
  step: number; 
  title: string; 
  description: string; 
  icon: React.ElementType;
  delay: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative p-6 rounded-xl bg-card/80 dark:bg-black/40 backdrop-blur-xl 
        border border-border/50 hover:border-primary/50 
        transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10
        animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className={`
            w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center
            transition-all duration-300
            ${isHovered ? 'shadow-[0_0_20px_hsl(var(--primary)/0.4)]' : ''}
          `}>
            <Icon className={`w-6 h-6 text-primary transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
          </div>
          <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
            {step}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1 tracking-tight">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Benefit Card Component with 3D Tilt
const BenefitCard = ({
  title,
  description,
  icon: Icon,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  }, []);

  return (
    <div
      className="relative p-6 rounded-xl bg-card/80 dark:bg-black/40 backdrop-blur-xl 
        border border-border/50 hover:border-primary/50 
        transition-all duration-300 hover:shadow-lg hover:shadow-primary/10
        overflow-hidden cursor-default animate-fade-in"
      style={{ 
        animationDelay: `${delay}ms`,
        ...tiltStyle,
        transition: 'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Watermark Icon */}
      <Icon 
        className={`absolute bottom-2 right-2 w-24 h-24 text-primary/5 transition-all duration-500
          ${isHovered ? 'text-primary/10 scale-110' : ''}`}
      />
      
      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent 
        transition-opacity duration-300 pointer-events-none
        ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
      />

      <div className="relative z-10">
        <div className={`
          w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4
          transition-all duration-300
          ${isHovered ? 'shadow-[0_0_15px_hsl(var(--primary)/0.4)]' : ''}
        `}>
          <Icon className={`w-5 h-5 text-primary transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
        </div>
        <h4 className="font-semibold mb-2 tracking-tight">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const LearningPaths = () => {
  useEffect(() => {
    document.title = "Learning Paths | StormWind Studios";
  }, []);

  const learningPaths = [
    "Azure Career Specialization",
    "Help Desk Professional",
    "Cisco Network Professional",
    "Cybersecurity Manager",
    "Project Manager Professional",
    "Maximizing Productivity with ChatGPT",
  ];

  const steps = [
    {
      step: 1,
      title: "Skills Assessment",
      description: "Evaluate your current knowledge level and identify skill gaps",
      icon: Target,
    },
    {
      step: 2,
      title: "Personalized Path",
      description: "Receive a customized learning journey based on your goals",
      icon: Route,
    },
    {
      step: 3,
      title: "Track Progress",
      description: "Monitor your advancement with visual dashboards and milestones",
      icon: TrendingUp,
    },
  ];

  const benefits = [
    {
      title: "Progress Tracking",
      description: "Track your journey with visual dashboards and completion metrics",
      icon: BarChart3,
    },
    {
      title: "Skill Assessments",
      description: "Validate your knowledge at key milestones throughout your path",
      icon: Target,
    },
    {
      title: "Hands-On Labs",
      description: "Practice in real-world environments with guided exercises",
      icon: FlaskConical,
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
      icon: GraduationCap,
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to all content",
      icon: Clock,
    },
    {
      title: "Completion Certificates",
      description: "Earn recognition for your achievements and showcase your skills",
      icon: Medal,
    },
  ];

  return (
    <PageLayout
      title="Learning Paths"
      description="Structured training programs designed to take you from beginner to expert in your chosen field"
      breadcrumbs={[{ label: "Learning Paths" }]}
      containerSize="wide"
    >
      <div className="space-y-16 animate-fade-in">
        {/* Learning Paths Section */}
        <section>
          <div className="text-center mb-12">
            {/* Glowing Section Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
              <Route className="w-8 h-8 text-primary relative z-10" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Learning Paths</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Learning Path is a curated series of courses designed to take you from your current skill level 
              to mastery in a specific role or technology area.
            </p>
          </div>

          {/* How It Works Section */}
          <Card className="bg-card/80 dark:bg-black/40 backdrop-blur-xl border-border/50 mb-10 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 tracking-tight text-center">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-6 relative">
                {/* Connecting Lines */}
                <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 -translate-y-1/2" />
                <div className="hidden md:block absolute top-1/2 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/20 to-primary/50 -translate-y-1/2" />
                
                {steps.map((step, index) => (
                  <StepCard
                    key={step.title}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    delay={index * 100}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Director Support Highlight */}
          <Card className="group bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 
            backdrop-blur-xl border-primary/20 hover:border-primary/40 
            transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 mb-10 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center
                    group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all duration-300">
                    <Users className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Enterprise Feature</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 tracking-tight">Learning Director Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Work directly with a dedicated Learning Director who will help create custom learning paths 
                    tailored to your organization's unique requirements, technology stack, and business objectives.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["1-on-1 Guidance", "Custom Plans", "Ongoing Support", "Progress Reviews"].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            {/* Pre-Made Learning Paths Card */}
            <Card className="group bg-card/80 dark:bg-black/40 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Pre-Made Learning Paths</h3>
                <p className="text-muted-foreground mb-6">
                  Our expertly designed learning paths cover the most in-demand IT roles and skills. 
                  Each path includes a logical progression of courses to build your expertise step by step.
                </p>
                <div className="space-y-3">
                  <FeatureListItem text="Structured curriculum from beginner to advanced" size="sm" />
                  <FeatureListItem text="Hands-on labs and real-world projects" size="sm" />
                  <FeatureListItem text="Progress tracking and milestones" size="sm" />
                  <FeatureListItem text="Industry-recognized skills alignment" size="sm" />
                </div>
              </CardContent>
            </Card>

            {/* Custom Learning Paths Card */}
            <Card className="group bg-card/80 dark:bg-black/40 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Custom Learning Paths</h3>
                <p className="text-muted-foreground mb-6">
                  Need something specific? Work with your Learning Director to create custom learning paths 
                  tailored to your organization's unique requirements and goals.
                </p>
                <div className="space-y-3">
                  <FeatureListItem text="Tailored to your organization's tech stack" size="sm" />
                  <FeatureListItem text="Aligned with your business objectives" size="sm" />
                  <FeatureListItem text="Flexible pacing and scheduling" size="sm" />
                  <FeatureListItem text="Integration with your existing training programs" size="sm" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Popular Learning Paths */}
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-tight">Popular Learning Paths</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningPaths.map((path, index) => (
                <div
                  key={path}
                  className="group p-4 rounded-lg bg-card/80 dark:bg-black/40 backdrop-blur-xl 
                    border border-border/50 hover:border-primary/50 
                    transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10
                    flex items-center gap-3 cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                  <span className="text-sm font-medium">{path}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Benefits Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Learning Path Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed on your learning journey
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                delay={index * 50}
              />
            ))}
          </div>
        </section>

        {/* Link to Certification Prep */}
        <section className="relative text-center py-12 px-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border border-primary/20 overflow-hidden">
          {/* Background Blur Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            {/* Glowing CTA Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg animate-pulse" />
              <Award className="w-6 h-6 text-primary relative z-10" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Looking for Certification Prep?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore our comprehensive certification study plans, practice exams, and exam prep resources.
            </p>
            <Button asChild size="lg">
              <Link to="/certification-prep">
                View Certification Prep
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default LearningPaths;
