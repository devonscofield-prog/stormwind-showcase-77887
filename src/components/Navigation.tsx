import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import stormwindLogo from "@/assets/stormwind-logo.png";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img 
            src={stormwindLogo} 
            alt="StormWind Studios" 
            className="h-12 object-contain cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => navigate('/')}
          />
          <nav className="flex items-center gap-6">
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
        </div>
      </div>
    </header>
  );
};
