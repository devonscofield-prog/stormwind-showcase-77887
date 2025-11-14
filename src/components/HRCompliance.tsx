import FeatureCard from "./FeatureCard";
import { Shield, Briefcase, Lock, Scale, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HRComplianceProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const HRCompliance = ({ selectedFeatures, toggleFeature }: HRComplianceProps) => {
  const isSelected = selectedFeatures.includes("HR Compliance");
  
  const features = [
    {
      icon: Shield,
      title: "Harassment Prevention",
      description: "Preventing Workplace Harassment, Preventing Bullying in the Workplace"
    },
    {
      icon: Briefcase,
      title: "Workplace Safety",
      description: "Active Shooter Response Training Course, Hazard Communication, Workplace Violence Prevention"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Global Data Privacy Awareness, HIPAA and TMPA for Covered Entities and Business Associates, Pay Card Information Data Security Standards (PCI DSS), Protecting Intellectual Property"
    },
    {
      icon: Scale,
      title: "Ethics and Compliance",
      description: "Anti-Bribery and Anti-Corruption (FCPA), Disability, Pregnancy & Religious Accommodations, Ethical Leadership, Export Controls, Family, Medical, and Other Protected Leave (FMLA), Interviewing and Hiring Lawfully, Managing Difficult Employees"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gradient-primary leading-tight pb-2">
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
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} href="/hr-compliance" />
        ))}
      </div>
    </div>
  );
};

export default HRCompliance;
