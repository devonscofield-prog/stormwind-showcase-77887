import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import stormwindLogo from "@/assets/stormwind-logo.png";

export const Navigation = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 dark:bg-[#2d2d2d]/95 backdrop-blur-sm border-b border-teal-500/20 dark:border-[#20B2AA]/30 shadow-[0_4px_20px_-4px_rgba(20,184,166,0.15)]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <img 
            src={stormwindLogo} 
            alt="StormWind Studios" 
            className="h-12 object-contain cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0" 
            onClick={() => navigate('/')}
            loading="lazy"
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-shrink-0 ml-auto">
            {/* Technologies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-100 hover:text-teal-400 transition-colors">
                  Technologies
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border-border">
                <DropdownMenuLabel>Technologies We Train On</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/microsoft" className="cursor-pointer">Microsoft</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cloud" className="cursor-pointer">Cloud</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cybersecurity" className="cursor-pointer">Cybersecurity</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/networking" className="cursor-pointer">Networking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/devops" className="cursor-pointer">DevOps</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/fullstack-developer" className="cursor-pointer">Full Stack Developer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/help-desk" className="cursor-pointer">Help Desk</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/desktop-apps" className="cursor-pointer">Desktop Apps</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ai-pro" className="cursor-pointer">AI</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/security-awareness" className="cursor-pointer">Security Awareness</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/business-skills" className="cursor-pointer">Business Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/project-management" className="cursor-pointer">Project Management</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/phishing" className="cursor-pointer">StormAI Phishing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/enterprise-end-user" className="cursor-pointer">Enterprise End User</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/hr-compliance" className="cursor-pointer">HR Compliance</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Platform Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-100 hover:text-teal-400 transition-colors">
                  Platform Features
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border-border">
                <DropdownMenuLabel>Platform Features</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/mentoring" className="cursor-pointer">Mentoring</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ai-learning" className="cursor-pointer">StormAI Tutor</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/bytes" className="cursor-pointer">Microlearning (Bytes)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/learning-paths" className="cursor-pointer">Learning Paths</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/skills-assessments" className="cursor-pointer">Skills Assessments</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/live-instructor-led" className="cursor-pointer">Live Instructor Led</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/enterprise-reporting" className="cursor-pointer">Enterprise Reporting</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/courses">
              <Button variant="ghost" className="text-gray-100 hover:text-teal-400 transition-colors">
                Courses
              </Button>
            </Link>
            <Link to="/webinars">
              <Button variant="ghost" className="text-gray-100 hover:text-teal-400 transition-colors">
                Webinars
              </Button>
            </Link>
            <Link to="/ranges">
              <Button variant="ghost" className="text-gray-100 hover:text-teal-400 transition-colors">
                Ranges
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-100 hover:text-teal-400 transition-colors"
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
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 bg-gray-900/80 dark:bg-[#2d2d2d]/95 border-t border-gray-800 dark:border-gray-700 pt-4 animate-fade-in">
            {/* Technologies Collapsible */}
            <Collapsible open={techOpen} onOpenChange={setTechOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-gray-100 hover:text-teal-400 hover:bg-gray-800/50 transition-colors"
                >
                  Technologies
                  <ChevronDown className={`h-4 w-4 transition-transform ${techOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 mt-2 space-y-2">
                <Link to="/microsoft" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Microsoft
                  </Button>
                </Link>
                <Link to="/cloud" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Cloud
                  </Button>
                </Link>
                <Link to="/cybersecurity" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Cybersecurity
                  </Button>
                </Link>
                <Link to="/networking" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Networking
                  </Button>
                </Link>
                <Link to="/devops" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    DevOps
                  </Button>
                </Link>
                <Link to="/fullstack-developer" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Full Stack Developer
                  </Button>
                </Link>
                <Link to="/help-desk" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Help Desk
                  </Button>
                </Link>
                <Link to="/desktop-apps" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Desktop Apps
                  </Button>
                </Link>
                <Link to="/ai-pro" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    AI
                  </Button>
                </Link>
                <Link to="/security-awareness" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Security Awareness
                  </Button>
                </Link>
                <Link to="/business-skills" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Business Skills
                  </Button>
                </Link>
                <Link to="/project-management" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Project Management
                  </Button>
                </Link>
                <Link to="/phishing" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    StormAI Phishing
                  </Button>
                </Link>
                <Link to="/enterprise-end-user" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Enterprise End User
                  </Button>
                </Link>
                <Link to="/hr-compliance" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    HR Compliance
                  </Button>
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Platform Features Collapsible */}
            <Collapsible open={platformOpen} onOpenChange={setPlatformOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-gray-100 hover:text-teal-400 hover:bg-gray-800/50 transition-colors"
                >
                  Platform Features
                  <ChevronDown className={`h-4 w-4 transition-transform ${platformOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 mt-2 space-y-2">
                <Link to="/mentoring" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Mentoring
                  </Button>
                </Link>
                <Link to="/ai-learning" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    StormAI Tutor
                  </Button>
                </Link>
                <Link to="/bytes" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Microlearning (Bytes)
                  </Button>
                </Link>
                <Link to="/learning-paths" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Learning Paths
                  </Button>
                </Link>
                <Link to="/skills-assessments" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Skills Assessments
                  </Button>
                </Link>
                <Link to="/live-instructor-led" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Live Instructor Led
                  </Button>
                </Link>
                <Link to="/enterprise-reporting" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50">
                    Enterprise Reporting
                  </Button>
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <Link to="/courses" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50 transition-colors"
              >
                Courses
              </Button>
            </Link>
            <Link to="/webinars" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50 transition-colors"
              >
                Webinars
              </Button>
            </Link>
            <Link to="/ranges" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50 transition-colors"
              >
                Ranges
              </Button>
            </Link>
            <Button
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full justify-start text-gray-100 hover:text-teal-400 hover:bg-gray-800/50 transition-colors"
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
