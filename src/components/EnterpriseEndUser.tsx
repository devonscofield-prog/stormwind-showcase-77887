import { FileSpreadsheet, Sparkles, Shield, BookOpen, Check, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trainingLinks } from "@/lib/trainingLinks";

interface EnterpriseEndUserProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const EnterpriseEndUser = ({ selectedFeatures, toggleFeature }: EnterpriseEndUserProps) => {
  const isMainSelected = selectedFeatures.includes("Enterprise End User");

  const getFullUrl = (link: string) => {
    return link.startsWith('/') ? window.location.origin + link : link;
  };

  const features = [
    {
      icon: FileSpreadsheet,
      title: "Desktop App Training",
      description: "Comprehensive courses on Excel, PowerPoint, Power BI, Word, and more.",
      link: trainingLinks["Desktop App Training"]
    },
    {
      icon: Sparkles,
      title: "AI Training",
      description: "Master ChatGPT, Copilot in Microsoft 365 apps, prompt engineering best practices, and AI-powered productivity tools.",
      link: trainingLinks["AI Training"]
    },
    {
      icon: Shield,
      title: "Security Awareness Training",
      description: "Modular courses on Email Security, Ransomware Defense, Executive Security Awareness, and general IT Security Awareness.",
      link: trainingLinks["Security Awareness Training"]
    },
    {
      icon: BookOpen,
      title: "2,000+ Business Skills Courses",
      description: "Topics spanning leadership, marketing, communication, ethics, wellness, and customer service.",
      link: trainingLinks["2,000+ Business Skills Courses"]
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6">Enterprise End User</h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
          Training for everyday productivity — from Microsoft Apps to Copilot readiness and Business Skills — built for the modern workforce.
        </p>
        <div className="flex gap-3">
          <Button
            size="lg"
            variant={isMainSelected ? "default" : "outline"}
            onClick={() => toggleFeature("Enterprise End User")}
            className={`gap-2 transition-all ${
              !isMainSelected ? 'shadow-lg hover:shadow-xl hover:scale-105 border-2' : ''
            }`}
          >
            {isMainSelected ? (
              <>
                <Check className="w-5 h-5" />
                Selected
              </>
            ) : (
              "Select This Product"
            )}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="gap-2"
          >
            <a href="/enterprise-end-user" target="_blank" rel="noopener noreferrer">
              Learn More
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <div 
            key={index}
            onClick={() => toggleFeature(feature.title)}
            className={`group relative overflow-hidden rounded-lg border-2 p-6 transition-all duration-300 cursor-pointer ${
              selectedFeatures.includes(feature.title)
                ? "border-primary bg-primary/10 shadow-card-hover"
                : "border-border bg-card hover:border-primary hover:shadow-card-hover"
            }`}
          >
            {selectedFeatures.includes(feature.title) && (
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
              </div>
            )}
            {/* Icon */}
            <div className="mb-4 inline-flex p-4 rounded-xl border-2 border-primary/50 bg-primary/5">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            
            {/* Title with Arrow */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <h4 className="text-xl font-bold text-foreground">
                {feature.title}
              </h4>
              {feature.link && (
                <a
                  href={getFullUrl(feature.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label={`Go to ${feature.title}`}
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                </a>
              )}
            </div>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseEndUser;
