import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import stormwindLogo from "@/assets/stormwind-logo.png";

export const Navigation = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-teal-500/20 shadow-[0_4px_20px_-4px_rgba(20,184,166,0.15)]">
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
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 bg-gray-900/80 border-t border-gray-800 pt-4 animate-fade-in">
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
