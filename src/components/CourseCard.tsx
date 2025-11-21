import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  onClick: () => void;
  className?: string;
}

export const CourseCard = ({ title, category, description, thumbnail, onClick, className }: CourseCardProps) => {
  return (
    <Card 
      className={cn(
        "group cursor-pointer relative overflow-hidden",
        "transition-all duration-500 ease-out",
        "hover:scale-[1.03] hover:-translate-y-2",
        "glass-card shimmer-effect",
        "border-2 border-transparent hover:border-primary/20",
        "hover:shadow-[0_20px_50px_rgba(31,161,129,0.2)]",
        className
      )}
      onClick={onClick}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-green to-primary bg-[length:200%_100%] animate-[gradient-border_3s_ease_infinite] blur-sm" />
      </div>
      
      {/* Card content wrapper */}
      <div className="relative bg-card rounded-lg overflow-hidden">
        {/* Thumbnail with parallax effect */}
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent-green/10 overflow-hidden">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative">
                <Play className="w-16 h-16 text-primary/40 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(31,161,129,0.6)]" />
                <Sparkles className="w-6 h-6 text-accent-green/60 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" />
              </div>
            </div>
          )}
          
          {/* Gradient overlay with enhanced hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
        </div>

        <CardHeader className="relative z-10">
          {/* Category badge with gradient */}
          <div className="inline-flex items-center gap-1.5 mb-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/10 to-accent-green/10 text-primary border border-primary/20 group-hover:border-primary/40 transition-colors">
              {category}
            </span>
          </div>
          
          {/* Title with enhanced hover effect */}
          <CardTitle className="text-lg line-clamp-2 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_rgba(31,161,129,0.3)]">
            {title}
          </CardTitle>
          
          {/* Description */}
          <CardDescription className="line-clamp-2 transition-colors duration-300 group-hover:text-muted-foreground/90">
            {description}
          </CardDescription>
        </CardHeader>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-green to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Card>
  );
};
