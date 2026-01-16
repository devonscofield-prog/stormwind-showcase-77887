import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, FileQuestion, Presentation, BookOpen, Book, Layers, Bot, ChevronRight, Target, Zap, CheckCircle2, Route, ArrowRight } from "lucide-react";

const CertificationPrep = () => {
  useEffect(() => {
    document.title = "Certification Prep | StormWind Studios";
  }, []);

  const certifications = [
    "CompTIA Security+ (SY0-701)",
    "CompTIA Network+ (N10-009)",
    "Microsoft Azure Fundamentals (AZ-900)",
    "AZ-104: Microsoft Azure Administrator",
    "Cisco CCNA (200-301)",
    "ITIL 4 Foundation",
    "Certified Information Systems Security Professional (CISSP)",
    "Ethical Hacking v13"
  ];

  const prepResources = [{
    icon: FileQuestion,
    title: "Practice Exams",
    description: "Unlimited attempts with detailed explanations for every question. Simulate real exam conditions and track your progress over time."
  }, {
    icon: Presentation,
    title: "Downloadable Class Slides",
    description: "Visual learning materials available for offline study. Reference key concepts anytime, anywhere."
  }, {
    icon: BookOpen,
    title: "Study Guides",
    description: "Comprehensive written guides covering all exam objectives. Structured content to ensure complete topic coverage."
  }, {
    icon: Book,
    title: "Textbooks",
    description: "In-depth reference materials authored by industry experts. Deep-dive into complex topics at your own pace."
  }, {
    icon: Layers,
    title: "Flash Cards",
    description: "Quick review cards for key concepts and terminology. Perfect for reinforcing knowledge during short study sessions."
  }, {
    icon: Bot,
    title: "AI Tutors",
    description: "24/7 AI-powered study assistance. Get instant answers to your questions and explanations tailored to your learning style."
  }];

  const howItWorksSteps = [
    {
      icon: Target,
      title: "1. Placement Assessment",
      description: "Take a comprehensive assessment to identify your current knowledge level and skill gaps."
    },
    {
      icon: BookOpen,
      title: "2. Personalized Learning",
      description: "Based on your results, choose between comprehensive training or our focused Exam Crash courses."
    },
    {
      icon: FileQuestion,
      title: "3. Practice & Certify",
      description: "Validate your knowledge with unlimited practice exams until you're ready to pass."
    }
  ];

  // Resource card with 3D tilt effect and watermark
  const ResourceCard = ({ resource, index }: { resource: typeof prepResources[0], index: number }) => {
    const [tiltStyle, setTiltStyle] = useState({});
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      setTiltStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setTiltStyle({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      });
    };

    const IconComponent = resource.icon;

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative p-6 rounded-xl bg-card/80 dark:bg-black/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden cursor-default animate-fade-in"
        style={{ 
          ...tiltStyle, 
          animationDelay: `${index * 50}ms`,
          animationFillMode: 'backwards'
        }}
      >
        {/* Watermark icon */}
        <div className="absolute -bottom-4 -right-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-300 pointer-events-none">
          <IconComponent className="w-32 h-32 text-primary" />
        </div>
        
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl`} />

        <div className="flex items-start gap-4 relative z-10">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative">
            {/* Icon glow */}
            <div className={`absolute inset-0 rounded-lg bg-primary/30 blur-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            <IconComponent className="w-6 h-6 text-primary relative z-10" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 tracking-tight">{resource.title}</h3>
            <p className="text-sm text-muted-foreground">{resource.description}</p>
          </div>
        </div>
      </div>
    );
  };

  // How It Works step card with hover effects
  const StepCard = ({ step, index }: { step: typeof howItWorksSteps[0], index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = step.icon;

    return (
      <div 
        className="text-center group animate-fade-in"
        style={{ 
          animationDelay: `${index * 100}ms`,
          animationFillMode: 'backwards'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
          {/* Icon glow on hover */}
          <div className={`absolute inset-0 rounded-full bg-primary/40 blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          <IconComponent className="w-7 h-7 text-primary relative z-10" />
        </div>
        <h4 className="font-semibold mb-2 tracking-tight transition-colors group-hover:text-primary">{step.title}</h4>
        <p className="text-sm text-muted-foreground">
          {step.description}
        </p>
      </div>
    );
  };

  return (
    <PageLayout 
      title="Certification Prep" 
      description="Comprehensive resources and study plans to help you pass your IT certification exams with confidence" 
      breadcrumbs={[{ label: "Certification Prep" }]} 
      containerSize="wide"
    >
      <div className="space-y-16 animate-fade-in">
        {/* Certification Study Plans Section */}
        <section>
          <div className="text-center mb-12">
            {/* Section header with glowing icon */}
            <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
              <Award className="w-8 h-8 text-primary relative z-10" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Certification Study Plans</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Certification Study Plan is a custom-made plan that guides you through your certification prep, 
              from assessing your current knowledge to ensuring exam readiness.
            </p>
          </div>

          {/* How It Works - Enhanced */}
          <Card className="bg-card/80 dark:bg-black/40 backdrop-blur-xl border-border/50 mb-10 overflow-hidden">
            <CardContent className="p-8 relative">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
              
              <h3 className="text-xl font-semibold mb-8 text-center tracking-tight relative z-10">How It Works</h3>
              
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {howItWorksSteps.map((step, index) => (
                  <StepCard key={step.title} step={step} index={index} />
                ))}
              </div>
              
              {/* Connecting lines for desktop */}
              <div className="hidden md:block absolute top-[7.5rem] left-1/2 -translate-x-1/2 w-[60%] pointer-events-none">
                <div className="flex justify-between">
                  <div className="w-[45%] h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30" />
                  <div className="w-[45%] h-px bg-gradient-to-r from-primary/30 via-primary/30 to-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exam Crash Highlight */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border-primary/20 mb-10 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full" />
                  <Zap className="w-8 h-8 text-primary relative z-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 tracking-tight">Exam Crash Courses</h3>
                  <p className="text-muted-foreground mb-4">
                    Already have experience in the field? Our Exam Crash courses are condensed, fast-paced 
                    training designed for professionals who just need to brush up on exam-specific content 
                    before taking their certification test.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">Condensed Content</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">Exam-Focused</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">Quick Review</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Certifications - Enhanced */}
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-tight">Popular Certification Study Plans</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={cert} 
                  className="group p-4 rounded-lg bg-card/80 dark:bg-black/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 flex items-center gap-3 cursor-default animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 30}ms`,
                    animationFillMode: 'backwards'
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Prep Resources Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Certification Prep Resources</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to succeed on exam day, from practice tests to personalized mentoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prepResources.map((resource, index) => (
              <ResourceCard key={resource.title} resource={resource} index={index} />
            ))}
          </div>
        </section>

        {/* Cross-Navigation CTA Section */}
        <section className="text-center py-12 px-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border border-primary/20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Route className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-3">Looking to Build Your Skills?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Explore our structured learning paths designed to take you from beginner to job-ready professional.
            </p>
            <Button asChild variant="default" className="group">
              <Link to="/learning-paths">
                View Learning Paths
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default CertificationPrep;
