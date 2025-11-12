import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import stormwindLogo from "@/assets/stormwind-logo.png";

export const Navigation = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <img 
            src={stormwindLogo} 
            alt="StormWind Studios" 
            className="h-12 object-contain cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0" 
            onClick={() => navigate('/')}
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-shrink-0 ml-auto">
            <Link to="/courses">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Courses
              </Button>
            </Link>
            <Link to="/ranges">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Ranges
              </Button>
            </Link>
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
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 bg-card border-t border-border pt-4 animate-fade-in">
            <Link to="/courses" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
              >
                Courses
              </Button>
            </Link>
            <Link to="/ranges" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
              >
                Ranges
              </Button>
            </Link>
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
