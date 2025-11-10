import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Users, BarChart3, Calendar, TrendingUp, ClipboardCheck, UserPlus } from "lucide-react";
import logoImage from "@/assets/stormwind-logo.png";

const EnterpriseReporting = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Enterprise Reporting";
  }, []);

  const features = [
    {
      icon: Users,
      title: "Manage Licenses",
      description: "Full control over user management and license allocation. Easily assign, track, and manage licenses across your entire organization with real-time visibility into remaining seats and end dates."
    },
    {
      icon: BarChart3,
      title: "Track Learning",
      description: "Monitor individual and team progress with detailed analytics. View course completion rates, time spent learning, and engagement metrics to understand your team's development."
    },
    {
      icon: UserPlus,
      title: "Assign Courses",
      description: "Tailor the learning experience to your team's unique needs. Search and assign specific courses to individuals or groups, creating personalized learning paths that align with your organizational goals."
    },
    {
      icon: Calendar,
      title: "Assign Due Dates",
      description: "Drive measurable outcomes by setting course deadlines and milestones. Track progress against timelines and ensure your team stays on track with their learning objectives."
    },
    {
      icon: TrendingUp,
      title: "View Progress",
      description: "Comprehensive reporting dashboards show completion percentages, time remaining, and detailed progress metrics. Identify top performers and those who may need additional support."
    },
    {
      icon: ClipboardCheck,
      title: "Export Activity",
      description: "Generate detailed reports and export learning data for stakeholder presentations, compliance documentation, or integration with your existing HR systems."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <img
            src={logoImage}
            alt="StormWind Studios"
            className="h-8 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/")}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
            Enterprise Reporting and Administration
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Empower your team with our comprehensive SaaS platform, offering full control over user management and license allocation. Tailor the learning experience to your team's unique needs and drive measurable outcomes. As a manager, you'll have the tools to monitor progress, align training with organizational goals, and maximize your team's potential.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => window.open("https://app.stormwindstudios.com/team/79609/reporting/92377", "_blank")}
          >
            Open Dashboard
          </Button>
        </div>

        {/* Features Grid */}
        <div className="mb-32 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Management Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage, track, and optimize your team's learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseReporting;
