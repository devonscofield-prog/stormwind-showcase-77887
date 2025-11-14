import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  href?: string;
}

const FeatureCard = ({ icon: Icon, title, description, onClick, href }: FeatureCardProps) => {
  // Randomly assign gradient variants for visual variety
  const gradients = ['icon-gradient-primary', 'icon-gradient-secondary', 'icon-gradient-tertiary'];
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  const content = (
    <CardContent className="p-6">
      <div className="flex flex-col items-start space-y-4">
        <div className={`p-3 rounded-lg icon-container ${randomGradient}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 w-full">
          <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </CardContent>
  );

  if (href) {
    return (
      <Link to={href} className="block h-full">
        <Card className="h-full cursor-pointer glass-feature-card transition-all duration-300 border-0">
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Card className={`h-full glass-feature-card transition-all duration-300 border-0 ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      {content}
    </Card>
  );
};

export default FeatureCard;
