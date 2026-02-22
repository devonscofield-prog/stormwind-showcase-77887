import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { BookOpen, FlaskConical, Mail, Home } from "lucide-react";

const helpfulLinks = [
  { to: "/courses", label: "Courses", icon: BookOpen },
  { to: "/training-samples", label: "Training Samples", icon: FlaskConical },
  { to: "/contact", label: "Contact", icon: Mail },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | StormWind Studios";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout breadcrumbs={[{ label: "Page Not Found" }]} hideHero>
      <div className="flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Button asChild size="lg" className="mb-12">
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </Link>
        </Button>

        <div className="border-t border-border pt-8 w-full max-w-sm">
          <p className="text-sm text-muted-foreground mb-4">
            Here are some helpful links:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {helpfulLinks.map(({ to, label, icon: Icon }) => (
              <Button key={to} asChild variant="outline" size="sm">
                <Link to={to}>
                  <Icon className="w-4 h-4 mr-1.5" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
