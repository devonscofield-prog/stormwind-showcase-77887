import { FileSpreadsheet, Sparkles, Shield, BookOpen, Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EnterpriseEndUserProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const EnterpriseEndUser = ({ selectedFeatures, toggleFeature }: EnterpriseEndUserProps) => {
  const isMainSelected = selectedFeatures.includes("Enterprise End User");

  const features = [
    {
      icon: FileSpreadsheet,
      title: "Desktop App Training",
      description: "Comprehensive courses on Excel, PowerPoint, Power BI, Word, and more."
    },
    {
      icon: Sparkles,
      title: "AI Training",
      description: "Master ChatGPT, Copilot in Microsoft 365 apps, prompt engineering best practices, and AI-powered productivity tools."
    },
    {
      icon: Shield,
      title: "Security Awareness Training",
      description: "Modular courses on Email Security, Ransomware Defense, Executive Security Awareness, and general IT Security Awareness."
    },
    {
      icon: BookOpen,
      title: "2,000+ Business Skills Courses",
      description: "Topics spanning leadership, marketing, communication, ethics, wellness, and customer service."
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight pb-2">Enterprise End User</h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
          Training for everyday productivity — from Microsoft Apps to Copilot readiness and Business Skills — built for the modern workforce.
        </p>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2"
        >
          <Link to="/enterprise-end-user">Learn More</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => {
          const featureLinks: Record<string, string> = {
            "Desktop App Training": "/desktop-apps",
            "AI Training": "/ai-pro",
            "Security Awareness Training": "/security-awareness",
            "2,000+ Business Skills Courses": "/business-skills"
          };
          
          return (
            <Link 
              key={index}
              to={featureLinks[feature.title]}
              className="group relative overflow-hidden rounded-lg border-2 p-6 transition-all duration-300 cursor-pointer border-border bg-card hover:border-primary hover:shadow-card-hover block"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex p-4 rounded-xl border-2 border-primary/50 bg-primary/5">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Title */}
              <h4 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h4>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EnterpriseEndUser;
