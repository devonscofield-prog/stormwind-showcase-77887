import { useState, useEffect } from "react";
import { X, Search, BookOpen, Layers, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WelcomeOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the overlay before
    const hasSeenOverlay = localStorage.getItem("hasSeenWelcomeOverlay");
    if (!hasSeenOverlay) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenWelcomeOverlay", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
      <Card className="max-w-2xl w-full bg-background shadow-2xl animate-scale-in">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={handleClose}
            aria-label="Close welcome overlay"
          >
            <X className="h-5 w-5" />
          </Button>
          <CardTitle className="text-3xl font-bold text-center mb-2">
            Welcome to StormWind Studios!
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Here's how to navigate and find exactly what you need
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="flex gap-4 items-start p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Quick Search</h3>
                <p className="text-sm text-muted-foreground">
                  Use the search bar at the top to instantly find courses, technologies, or features
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Browse by Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Explore Microsoft, Cloud, AI, Cybersecurity, and more from the homepage cards or navigation
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Course Catalog & Ranges</h3>
                <p className="text-sm text-muted-foreground">
                  Visit <span className="font-medium text-foreground">Courses</span> to browse all training or{" "}
                  <span className="font-medium text-foreground">Ranges</span> for hands-on practice environments
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Need Pricing or Help?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact your learning director directly or use the{" "}
                  <span className="font-medium text-foreground">Contact</span> page for inquiries
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button onClick={handleClose} className="w-full" size="lg">
              Get Started
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeOverlay;
