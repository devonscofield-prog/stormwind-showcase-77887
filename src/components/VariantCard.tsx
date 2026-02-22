import { memo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Play, User, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FlattenedCourseVariant, instructorPhotos } from "@/lib/trainingSampleData";
import { CourseThumbnail } from "./CourseThumbnail";
import { getCategoryTheme } from "@/lib/courseThemes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface VariantCardProps {
  variant: FlattenedCourseVariant;
  className?: string;
}

export const VariantCard = memo(({ variant, className }: VariantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const theme = getCategoryTheme(variant.category);
  const instructorPhoto = variant.instructor ? instructorPhotos[variant.instructor] : null;
  const isExamCrash = variant.variantName === "Exam Crash";
  
  return (
    <Link to={`/training-samples/${variant.courseId}/${variant.variantId}`}>
      <Card 
        className={cn(
          "group cursor-pointer relative overflow-hidden h-full",
          "transition-all duration-500 ease-out",
          "hover:scale-[1.02] hover:-translate-y-2",
          "bg-card/50 backdrop-blur-sm",
          "border border-border/50 hover:border-primary/40",
          "hover:shadow-2xl hover:shadow-primary/15",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect on hover */}
        <div className={cn(
          "absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-r from-primary/30 via-transparent to-primary/30 blur-sm"
        )} />
        
        <div className="relative bg-card rounded-xl overflow-hidden h-full flex flex-col">
          {/* Thumbnail */}
          <div className="relative">
            <CourseThumbnail 
              category={variant.category}
              title={variant.title}
              thumbnail={variant.thumbnail}
              videoId={variant.firstVideoId}
              isHovered={isHovered}
              showPlayIcon={false}
            />
            
            {/* Variant Badge - top left */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <div className={cn(
                "px-3 py-1.5 rounded-full text-xs font-bold",
                "backdrop-blur-md shadow-lg",
                isExamCrash 
                  ? "bg-amber-500/90 text-amber-950" 
                  : "bg-primary/90 text-primary-foreground"
              )}>
                <div className="flex items-center gap-1.5">
                  {isExamCrash && <Zap className="w-3 h-3" />}
                  {variant.variantName}
                </div>
              </div>
              
              {/* Bytes Badge */}
              {variant.isByte && (
                <div className={cn(
                  "px-2.5 py-1.5 rounded-full text-xs font-bold",
                  "backdrop-blur-md shadow-lg",
                  "bg-violet-500/90 text-white"
                )}>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Bytes
                  </div>
                </div>
              )}
            </div>
            
            {/* Preview Course Button - appears on hover */}
            <div className={cn(
              "absolute inset-0 flex items-center justify-center",
              "transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}>
              <div className={cn(
                "px-4 py-2 rounded-full flex items-center gap-2",
                "bg-primary text-primary-foreground font-medium text-sm",
                "shadow-lg shadow-primary/30",
                "transform transition-all duration-300",
                isHovered ? "scale-100 translate-y-0" : "scale-90 translate-y-4"
              )}>
                <Play className="w-4 h-4 fill-current" />
                Preview Course
              </div>
            </div>

            {/* Instructor avatar preview */}
            {instructorPhoto && (
              <div className={cn(
                "absolute bottom-3 right-3 transition-all duration-300",
                isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
              )}>
                <Avatar className="h-10 w-10 ring-2 ring-background shadow-lg">
                  <AvatarImage src={instructorPhoto} alt={variant.instructor} />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent className="flex-1 flex flex-col p-4 pt-3">
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className={cn(
                "px-2.5 py-1 text-xs font-semibold rounded-full",
                "bg-gradient-to-r border transition-all duration-300",
                theme.iconBg,
                "border-current/20",
                theme.accentColor
              )}>
                {variant.category}
              </span>
            </div>
            
            {/* Title */}
            <h3 className={cn(
              "text-lg font-bold mb-2 line-clamp-2",
              "transition-colors duration-300",
              "text-foreground group-hover:text-primary"
            )}>
              {variant.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-1">
              {variant.description}
            </p>

            {/* Instructor Info */}
            {variant.instructor && (
              <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={instructorPhoto || undefined} alt={variant.instructor} />
                  <AvatarFallback className="bg-primary/10 text-primary text-[10px]">
                    {variant.instructor.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate">{variant.instructor}</span>
              </div>
            )}

            {/* Stats Row */}
            <div className="flex items-center gap-4 pt-3 border-t border-border/50">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{variant.lessonCount} lessons</span>
              </div>
            </div>
          </CardContent>

          {/* Bottom accent line */}
          <div className={cn(
            "absolute bottom-0 left-0 right-0 h-1",
            "bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            isExamCrash ? "from-amber-500 to-orange-500" : theme.gradient
          )} />
        </div>
      </Card>
    </Link>
  );
});
