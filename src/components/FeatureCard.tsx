import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  href?: string;
  animationDelay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, onClick, href, animationDelay = 0 }: FeatureCardProps) => {
  const content = (
    <CardContent className="p-6">
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 w-full">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </CardContent>
  );

  const cardClassName = `h-full cursor-pointer hover:shadow-card-hover hover:shadow-glow transition-all duration-300 hover:border-primary/50 opacity-0 animate-stagger-fade-in`;

  if (href) {
    return (
      <Link to={href} className="block h-full">
        <Card 
          className={cardClassName}
          style={{ animationDelay: `${animationDelay}ms` }}
        >
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Card 
      className={onClick ? cardClassName : 'h-full opacity-0 animate-stagger-fade-in'} 
      onClick={onClick}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {content}
    </Card>
  );
};

export default FeatureCard;
