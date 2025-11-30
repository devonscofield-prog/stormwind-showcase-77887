import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedFeatureCard, { AnimatedIconProps } from "./AnimatedFeatureCard";

// Animated SVG Icons
const HarassmentPreventionIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `harassment-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#ef4444;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#f59e0b;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <path d="M24,10 L36,16 L36,28 Q36,42 24,50 Q12,42 12,28 L12,16 Z" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </path>
      <circle cx="24" cy="22" r="4" fill="white" opacity="0.8" />
      <path d="M18 30 Q24 34 30 30" stroke="white" strokeWidth="2" fill="none" opacity="0.8" />
    </svg>
  );
};

const WorkplaceSafetyIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `safety-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#10b981;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#3b82f6;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="24" cy="16" r="6" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </circle>
      <path d="M14 26 L14 36 Q14 38 16 38 L32 38 Q34 38 34 36 L34 26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
      <line x1="24" y1="22" x2="24" y2="26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" />
      <path d="M20 30 L24 34 L28 30" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </path>
    </svg>
  );
};

const DataProtectionIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `data-protection-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={gradientId}>
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#a855f7;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={`${color}66`}>
            <animate attributeName="stop-color" values={`${color}66;${color}ff;${color}66`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </radialGradient>
      </defs>
      <rect x="14" y="18" width="20" height="16" rx="1" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </rect>
      <rect x="22" y="24" width="4" height="6" rx="1" fill="white" opacity="0.8" />
      <circle cx="24" cy="20" r="2" fill="white" opacity="0.8" />
      <path d="M20 12 L20 18" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" />
      <path d="M28 12 L28 18" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

const EthicsComplianceIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `ethics-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#8b5cf6;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#06b6d4;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="16" cy="24" r="10" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </circle>
      <circle cx="32" cy="24" r="10" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.3s" />
      </circle>
      <line x1="20" y1="20" x2="28" y2="28" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2">
        <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </line>
    </svg>
  );
};

interface HRComplianceProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const HRCompliance = ({ }: HRComplianceProps) => {
  const features = [
    {
      icon: HarassmentPreventionIcon,
      title: "Harassment Prevention",
      description: "Preventing Workplace Harassment, Preventing Bullying in the Workplace"
    },
    {
      icon: WorkplaceSafetyIcon,
      title: "Workplace Safety",
      description: "Active Shooter Response Training Course, Hazard Communication, Workplace Violence Prevention"
    },
    {
      icon: DataProtectionIcon,
      title: "Data Protection",
      description: "Global Data Privacy Awareness, HIPAA and TMPA for Covered Entities and Business Associates, Pay Card Information Data Security Standards (PCI DSS), Protecting Intellectual Property"
    },
    {
      icon: EthicsComplianceIcon,
      title: "Ethics and Compliance",
      description: "Anti-Bribery and Anti-Corruption (FCPA), Disability, Pregnancy & Religious Accommodations, Ethical Leadership, Export Controls, Family, Medical, and Other Protected Leave (FMLA), Interviewing and Hiring Lawfully, Managing Difficult Employees"
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
          const IconComponent = feature.icon;
          
          return (
            <AnimatedFeatureCard
              key={index}
              to="/hr-compliance"
              color={color}
              icon={<IconComponent color={color} isHovered={false} />}
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
