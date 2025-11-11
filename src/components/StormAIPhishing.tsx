import FeatureCard from "./FeatureCard";
import { Brain, Settings, FileText, Mail, GraduationCap, Target, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface StormAIPhishingProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const StormAIPhishing = ({ selectedFeatures, toggleFeature }: StormAIPhishingProps) => {
  const navigate = useNavigate();
  const isSelected = selectedFeatures.includes("StormAI Phishing");
  const features = [
    {
      icon: Brain,
      title: "AI-Personalized Simulations",
      description: "Each employee receives unique simulations generated from Entra ID profiles."
    },
    {
      icon: Settings,
      title: "Turn-Key Setup",
      description: "Configure once (15–20 minutes) and let the system automate delivery, difficulty, and timing."
    },
    {
      icon: FileText,
      title: "Comprehensive Reporting",
      description: "Ready-to-use dashboards for compliance and insurance reporting."
    },
    {
      icon: Mail,
      title: "Outlook Plugin with Instant Feedback",
      description: "Immediate training for failed attempts and positive reinforcement for correct actions."
    },
    {
      icon: GraduationCap,
      title: "Security Awareness Courses",
      description: "Modular courses on Email Security, Ransomware Defense, Executive Security Awareness, and general IT Security Awareness."
    },
    {
      icon: Target,
      title: "Multiple Attack Vectors",
      description: "Email Domain Spoofs, Teams Messages, C-Suite Impersonations, and more"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6">
          StormAI Phishing
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
          AI-driven phishing simulations that mirror real-world hacker techniques, with zero manual management required.
        </p>
        <Button
          size="lg"
          variant="outline"
          onClick={() => navigate('/phishing')}
          className="gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2"
        >
          Learn More
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} onClick={() => navigate('/phishing')} />
        ))}
      </div>
    </div>
  );
};

export default StormAIPhishing;
