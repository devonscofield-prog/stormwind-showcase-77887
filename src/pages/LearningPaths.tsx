import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Route, 
  Target, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Settings, 
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  ClipboardCheck,
  FlaskConical,
  GraduationCap,
  Clock,
  BadgeCheck,
  Cloud,
  Shield,
  Network,
  Bot,
  Briefcase
} from "lucide-react";
import FeatureListItem from "@/components/FeatureListItem";

// 3D Tilt Hook — only applies on devices with hover capability (not touch)
const supportsHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

const useTiltEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!supportsHover) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    if (!supportsHover) return;
    setTransform("");
  };

  return { ref, transform, handleMouseMove, handleMouseLeave };
};

// Step Card Component
const StepCard = ({ 
  step, 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  step: number; 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'backwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card/80 dark:bg-black/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <div className="relative mb-4">
          <div className={`absolute inset-0 rounded-full bg-primary/30 blur-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          <div className="relative w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
            {step}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2 tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

// Feature Card with 3D Tilt
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  const { ref, transform, handleMouseMove, handleMouseLeave } = useTiltEffect();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="relative group cursor-default animate-fade-in"
      style={{ 
        transform, 
        transition: 'transform 0.2s ease-out',
        animationDelay: `${delay}ms`,
        animationFillMode: 'backwards'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div className="h-full p-6 rounded-xl bg-card/80 dark:bg-black/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
        {/* Watermark Icon */}
        <Icon className="absolute bottom-4 right-4 w-20 h-20 text-primary/10 pointer-events-none" />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
        
        <div className="relative z-10">
          <div className="relative inline-flex mb-4">
            <div className={`absolute inset-0 rounded-full bg-primary/30 blur-md transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            <div className="relative w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          </div>
          <h3 className="text-base font-semibold mb-2 tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Path Card with Icon
const PathCard = ({ 
  path, 
  icon: Icon, 
  delay 
}: { 
  path: string; 
  icon: React.ElementType; 
  delay: number;
}) => (
  <div 
    className="group p-4 rounded-lg bg-card/80 dark:bg-black/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 flex items-center gap-3 cursor-default animate-fade-in"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'backwards' }}
  >
    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <span className="text-sm font-medium">{path}</span>
  </div>
);

// Main Card with 3D Tilt and Watermark
const MainCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  features: string[];
  delay: number;
}) => {
  const { ref, transform, handleMouseMove, handleMouseLeave } = useTiltEffect();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="animate-fade-in"
      style={{ 
        transform, 
        transition: 'transform 0.2s ease-out',
        animationDelay: `${delay}ms`,
        animationFillMode: 'backwards'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
    >
      <Card className="relative h-full bg-card/80 dark:bg-black/40 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
        {/* Watermark Icon */}
        <Icon className="absolute bottom-6 right-6 w-32 h-32 text-primary/10 pointer-events-none" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <CardContent className="relative z-10 p-8">
          <div className="relative inline-flex mb-4">
            <div className={`absolute inset-0 rounded-full bg-primary/30 blur-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            <div className="relative w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 tracking-tight">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <FeatureListItem key={index} text={feature} size="sm" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const LearningPaths = () => {
  useEffect(() => {
    document.title = "Learning Paths | StormWind Studios";
  }, []);

  const learningPaths = [
    { name: "Azure Career Specialization", icon: Cloud },
    { name: "Help Desk Professional", icon: Users },
    { name: "Cisco Network Professional", icon: Network },
    { name: "Cybersecurity Manager", icon: Shield },
    { name: "Project Manager Professional", icon: Briefcase },
    { name: "Maximizing Productivity with ChatGPT", icon: Bot },
  ];

  const howItWorks = [
    { icon: ClipboardCheck, title: "Skills Assessment", description: "Take a placement assessment to identify your current skill level and knowledge gaps" },
    { icon: Target, title: "Personalized Path", description: "Get a customized learning path tailored to your career goals and timeline" },
    { icon: TrendingUp, title: "Track Progress", description: "Monitor your advancement with milestones, achievements, and completion certificates" },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Progress Tracking", description: "Visual dashboards to monitor your learning journey" },
    { icon: ClipboardCheck, title: "Skill Assessments", description: "Regular check-ins to validate your knowledge" },
    { icon: FlaskConical, title: "Hands-On Labs", description: "Practice in real-world environments" },
    { icon: GraduationCap, title: "Expert Instructors", description: "Learn from industry professionals" },
    { icon: Clock, title: "Flexible Learning", description: "Study at your own pace, on your schedule" },
    { icon: BadgeCheck, title: "Completion Certificates", description: "Earn credentials for your achievements" },
  ];

  return (
    <PageLayout 
      title="Learning Paths" 
      description="Structured training programs designed to take you from beginner to expert in your chosen field" 
      breadcrumbs={[{ label: "Learning Paths" }]} 
      containerSize="wide"
    >
      <div className="space-y-20 animate-fade-in">
        
        {/* Section Header with Glowing Icon */}
        <section className="text-center">
          <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <Route className="w-8 h-8 text-primary relative z-10" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Learning Paths</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Learning Path is a curated series of courses designed to take you from your current skill level 
            to mastery in a specific role or technology area.
          </p>
        </section>

        {/* How It Works Section */}
        <section>
          <h3 className="text-xl font-semibold mb-8 text-center tracking-tight">How It Works</h3>
          <div className="relative grid md:grid-cols-3 gap-6">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-[4.5rem] left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            {howItWorks.map((step, index) => (
              <StepCard
                key={step.title}
                step={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* Pre-Made & Custom Learning Paths */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <MainCard
              icon={BookOpen}
              title="Pre-Made Learning Paths"
              description="Our expertly designed learning paths cover the most in-demand IT roles and skills. Each path includes a logical progression of courses to build your expertise step by step."
              features={[
                "Structured curriculum from beginner to advanced",
                "Hands-on labs and real-world projects",
                "Progress tracking and milestones",
                "Industry-recognized skills alignment"
              ]}
              delay={0}
            />
            <MainCard
              icon={Settings}
              title="Custom Learning Paths"
              description="Need something specific? Work with your Learning Director to create custom learning paths tailored to your organization's unique requirements and goals."
              features={[
                "Tailored to your organization's tech stack",
                "Aligned with your business objectives",
                "Flexible pacing and scheduling",
                "Integration with your existing training programs"
              ]}
              delay={100}
            />
          </div>
        </section>

        {/* Popular Learning Paths */}
        <section>
          <h3 className="text-xl font-semibold mb-6 tracking-tight">Popular Learning Paths</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPaths.map((path, index) => (
              <PathCard
                key={path.name}
                path={path.name}
                icon={path.icon}
                delay={index * 30}
              />
            ))}
          </div>
        </section>

        {/* Featured: Learning Director Support */}
        <section className="relative py-12 px-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border border-primary/20 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
              <div className="relative w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold tracking-tight mb-3">Learning Director Support</h3>
              <p className="text-muted-foreground mb-4 max-w-2xl">
                Every enterprise customer gets a dedicated Learning Director who works with you to design custom learning paths, 
                track team progress, and ensure your training investment delivers measurable results.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Personalized Guidance</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Progress Reports</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">ROI Tracking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path Benefits */}
        <section>
          <h3 className="text-xl font-semibold mb-8 text-center tracking-tight">Learning Path Benefits</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 50}
              />
            ))}
          </div>
        </section>

        {/* CTA: Link to Certification Prep */}
        <section className="relative text-center py-12 px-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border border-primary/20 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="relative z-10">
            <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg" />
              <Award className="w-6 h-6 text-primary relative z-10" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Looking for Certification Prep?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore our comprehensive certification study plans, practice exams, and exam prep resources.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/certification-prep">
                View Certification Prep
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default LearningPaths;
