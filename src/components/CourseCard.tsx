import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  onClick: () => void;
}

export const CourseCard = ({ title, category, description, thumbnail, onClick }: CourseCardProps) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-glow glass-card overflow-hidden"
      onClick={onClick}
    >
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Play className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <div className="text-xs font-medium text-primary mb-2">{category}</div>
        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
