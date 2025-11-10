import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const FeatureCard = ({ icon: Icon, title, description, link }: FeatureCardProps) => {
  const getFullUrl = (url: string) => {
    return url.startsWith('/') ? window.location.origin + url : url;
  };

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-start space-y-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 w-full">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-lg">{title}</h3>
              {link && (
                <a
                  href={getFullUrl(link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label={`Go to ${title}`}
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                </a>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
