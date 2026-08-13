import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedFeatureCard from "./AnimatedFeatureCard";
import { 
  AIPersonalizedIcon, 
  TurnKeyIcon, 
  PhishingReportingIcon, 
  EmailIcon, 
  SecurityTrainingIcon, 
  AttackVectorsIcon 
} from "./icons/animated";

interface StormAIPhishingProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const StormAIPhishing = ({ }: StormAIPhishingProps) => {
  const features = [
    {
      icon: AIPersonalizedIcon,
      title: "AI-Personalized Simulations",
      description: "Each employee receives unique simulations generated from Entra ID profiles."
    },
    {
      icon: TurnKeyIcon,
      title: "Turn-Key Setup",
      description: "Configure once (15–20 minutes) and let the system automate delivery, difficulty, and timing."
    },
    {
      icon: PhishingReportingIcon,
      title: "Comprehensive Reporting",
      description: "Ready-to-use dashboards for compliance and insurance reporting."
    },
    {
      icon: EmailIcon,
      title: "Outlook Plugin with Instant Feedback",
      description: "Immediate training for failed attempts and positive reinforcement for correct actions."
    },
    {
      icon: SecurityTrainingIcon,
      title: "Security Awareness Courses",
      description: "Modular courses on Email Security, Ransomware Defense, Executive Security Awareness, and general IT Security Awareness."
    },
    {
      icon: AttackVectorsIcon,
      title: "Multiple Attack Vectors",
      description: "Email Domain Spoofs, Teams Messages, C-Suite Impersonations, and more"
    }
  ];


  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gradient-brand leading-tight pb-2">
          StormAI Phishing
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
          AI-driven phishing simulations that mirror real-world hacker techniques, with zero manual management required.
        </p>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="gap-2 transition-all shadow-lg hover:shadow-xl border-2"
        >
          <Link to="/phishing">Learn More</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
            <AnimatedFeatureCard
              key={index}
              to="/phishing"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
        ))}
      </div>
    </div>
  );
};

export default StormAIPhishing;
