import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, Moon, Sun, ChevronDown, Type, Calendar,
  // Topic Icons
  Monitor, Cloud, Shield, Network, GitBranch, Code2, Headphones, 
  AppWindow, Brain, Lock, Briefcase, ClipboardList, Fish, Users, FileCheck,
  // Platform Feature Icons
  UserCheck, Bot, Zap, Map, Target, Video, BarChart3, GraduationCap
} from "lucide-react";
import { useTheme } from "next-themes";
import { useTextSize } from "@/contexts/TextSizeContext";
import { MegaMenu } from "@/components/MegaMenu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import stormwindLogo from "@/assets/stormwind-logo.png";

// Topics menu items - flat array sorted logically (core tech → specialized → business)
const topicsMenuItems = [
  { label: "Microsoft", to: "/microsoft", icon: Monitor, description: "Microsoft certifications" },
  { label: "Cloud", to: "/cloud", icon: Cloud, description: "AWS, Azure & GCP" },
  { label: "Networking", to: "/networking", icon: Network, description: "Network fundamentals" },
  { label: "DevOps", to: "/devops", icon: GitBranch, description: "CI/CD & automation" },
  { label: "Full Stack Dev", to: "/fullstack-developer", icon: Code2, description: "Frontend & backend" },
  { label: "Cybersecurity", to: "/cybersecurity", icon: Shield, description: "Security certifications" },
  { label: "AI & ML", to: "/ai-pro", icon: Brain, description: "Artificial intelligence" },
  { label: "Security Awareness", to: "/security-awareness", icon: Lock, description: "End-user security" },
  { label: "Help Desk", to: "/help-desk", icon: Headphones, description: "IT support training" },
  { label: "Desktop Apps", to: "/desktop-apps", icon: AppWindow, description: "Productivity software" },
  { label: "Business Skills", to: "/business-skills", icon: Briefcase, description: "Soft skills training" },
  { label: "Project Management", to: "/project-management", icon: ClipboardList, description: "PMP & Agile" },
  { label: "StormAI Phishing", to: "/phishing", icon: Fish, description: "Phishing simulations" },
  { label: "Enterprise End User", to: "/enterprise-end-user", icon: Users, description: "Employee training" },
  { label: "HR Compliance", to: "/hr-compliance", icon: FileCheck, description: "Compliance training" },
];

// Platform features menu items - flat array sorted logically
const platformMenuItems = [
  { label: "Mentoring", to: "/mentoring", icon: UserCheck, description: "1:1 expert guidance" },
  { label: "StormAI Tutor", to: "/ai-learning", icon: Bot, description: "AI-powered learning" },
  { label: "Microlearning (Bytes)", to: "/bytes", icon: Zap, description: "Quick skill bursts" },
  { label: "Learning Paths", to: "/learning-paths", icon: Map, description: "Structured curricula" },
  { label: "Skills Assessments", to: "/skills-assessments", icon: Target, description: "Measure competency" },
  { label: "Live Instructor Led", to: "/live-instructor-led", icon: Video, description: "Virtual classrooms" },
  { label: "Training Samples", to: "/training-samples", icon: GraduationCap, description: "Preview courses" },
  { label: "Enterprise Reporting", to: "/enterprise-reporting", icon: BarChart3, description: "Analytics dashboard" },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { textSize, toggleTextSize } = useTextSize();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-background/90 dark:via-background/90 dark:to-background/90 backdrop-blur-md border-b border-border/50 dark:border-white/10 shadow-md shadow-black/10 dark:shadow-black/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <img 
            src={stormwindLogo} 
            alt="StormWind Studios" 
            className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0" 
            onClick={() => navigate('/')}
            width={150}
            height={48}
            fetchPriority="high"
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 flex-shrink-0 ml-auto">
            {/* Topics Mega Menu */}
            <MegaMenu trigger="Topics" items={topicsMenuItems} columns={3} />

            {/* Platform Features Mega Menu */}
            <MegaMenu trigger="Platform Features" items={platformMenuItems} columns={2} />

            <Link to="/courses">
              <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
                Courses
              </Button>
            </Link>
            <Link to="/training-samples">
              <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
                Training Samples
              </Button>
            </Link>
            <a href="https://stormwindstudios.com/calendar" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
                <Calendar className="w-4 h-4 mr-2" />
                Live Calendar
              </Button>
            </a>
            <Link to="/ranges">
              <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
                Ranges
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTextSize}
              className="text-foreground hover:text-primary transition-colors"
              title="Toggle text size"
            >
              <Type className={`h-5 w-5 transition-all ${textSize === "large" ? "scale-125" : "scale-100"}`} />
              <span className="sr-only">Toggle text size</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground hover:text-primary transition-colors"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link to="/contact">
              <Button variant="default">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 bg-card/95 dark:bg-[#2d2d2d]/95 border-t border-border pt-4 animate-fade-in">
            {/* Technologies Collapsible */}
            <Collapsible open={techOpen} onOpenChange={setTechOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-foreground hover:text-primary hover:bg-muted transition-colors"
                >
                  Topics
                  <ChevronDown className={`h-4 w-4 transition-transform ${techOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 mt-2 space-y-1">
                {topicsMenuItems.map((item) => (
                  <Link key={item.to} to={item.to} onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-muted">
                      <item.icon className="w-4 h-4 mr-2 text-primary" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Platform Features Collapsible */}
            <Collapsible open={platformOpen} onOpenChange={setPlatformOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-foreground hover:text-primary hover:bg-muted transition-colors"
                >
                  Platform Features
                  <ChevronDown className={`h-4 w-4 transition-transform ${platformOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 mt-2 space-y-1">
                {platformMenuItems.map((item) => (
                  <Link key={item.to} to={item.to} onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-muted">
                      <item.icon className="w-4 h-4 mr-2 text-primary" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Link to="/courses" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Courses
              </Button>
            </Link>
            <Link to="/training-samples" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Training Samples
              </Button>
            </Link>
            <a href="https://stormwindstudios.com/calendar" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Live Calendar
              </Button>
            </a>
            <Link to="/ranges" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Ranges
              </Button>
            </Link>
            <Button
              variant="ghost"
              onClick={toggleTextSize}
              className="w-full justify-start text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              <Type className={`h-5 w-5 mr-2 transition-all ${textSize === "large" ? "scale-125" : "scale-100"}`} />
              Toggle Text Size
            </Button>
            <Button
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full justify-start text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              <Sun className="h-5 w-5 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 ml-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              Toggle Theme
            </Button>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="default" 
                className="w-full justify-start"
              >
                Contact Us
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
