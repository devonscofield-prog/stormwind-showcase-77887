import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedFeatureCard from "./AnimatedFeatureCard";
import { 
  DesktopAppsIcon, 
  AITrainingIcon, 
  SecurityAwarenessIcon, 
  BusinessSkillsIcon 
} from "./icons/animated";

interface EnterpriseEndUserProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const EnterpriseEndUser = ({ }: EnterpriseEndUserProps) => {
  const features = [
    {
      icon: DesktopAppsIcon,
      title: "Desktop App Training",
      description: "Comprehensive courses on Excel, PowerPoint, Power BI, Word, and more.",
      link: "/desktop-apps"
    },
    {
      icon: AITrainingIcon,
      title: "AI Training",
      description: "Master ChatGPT, Copilot in Microsoft 365 apps, prompt engineering best practices, and AI-powered productivity tools.",
      link: "/ai-pro"
    },
    {
      icon: SecurityAwarenessIcon,
      title: "Security Awareness Training",
      description: "Modular courses on Email Security, Ransomware Defense, Executive Security Awareness, and general IT Security Awareness.",
      link: "/security-awareness"
    },
    {
      icon: BusinessSkillsIcon,
      title: "2,000+ Business Skills Courses",
      description: "Topics spanning leadership, marketing, communication, ethics, wellness, and customer service.",
      link: "/business-skills"
    },
  ];

  const featureColors = ['#60A5FA', '#FB923C', '#A78BFA', '#4ADE80'];

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
          const color = featureColors[index];
          
          return (
            <AnimatedFeatureCard
              key={index}
              to={feature.link}
              color={color}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EnterpriseEndUser;
