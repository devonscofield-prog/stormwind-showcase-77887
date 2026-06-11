import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedFeatureCard from "./AnimatedFeatureCard";
import { 
  HarassmentPreventionIcon, 
  WorkplaceSafetyIcon, 
  DataProtectionIcon, 
  EthicsComplianceIcon 
} from "./icons/animated";

interface HRComplianceProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const HRCompliance = ({ }: HRComplianceProps) => {
  const features = [
    {
      icon: HarassmentPreventionIcon,
      title: "Harassment Prevention",
      description: "Definitions of harassment, sexual harassment, and bullying; responding to incidents; intervention strategies"
    },
    {
      icon: WorkplaceSafetyIcon,
      title: "Workplace Safety",
      description: "Preventing substance abuse, risk management, and active shooter protocols"
    },
    {
      icon: DataProtectionIcon,
      title: "Data Protection",
      description: "Information security, safe internet usage, and data protection"
    },
    {
      icon: EthicsComplianceIcon,
      title: "Ethics and Compliance",
      description: "Workplace discrimination, safety, wage and hour, and employee benefit laws; representation of different demographics"
    }
  ];

  const featureColors = ['#60A5FA', '#FB923C', '#A78BFA', '#4ADE80'];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight pb-2">
          HR Compliance
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
          Transform your workplace with our comprehensive compliance training. Covering essential topics like harassment prevention, workplace safety, data protection, and ethical leadership, our comprehensive training ensures your organization not only meets regulatory standards, but thrives with a culture of integrity and resilience.
        </p>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2"
        >
          <Link to="/hr-compliance">Learn More</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => {
          const color = featureColors[index];
          
          return (
            <AnimatedFeatureCard
              key={index}
              to="/hr-compliance"
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

export default HRCompliance;
