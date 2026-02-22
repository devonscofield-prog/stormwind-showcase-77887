import { memo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Layers, Play, User } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Course, instructorPhotos } from "@/lib/trainingSampleData";
import { CourseThumbnail } from "./CourseThumbnail";
import { getCategoryTheme, getTotalLessons, getVariantCount } from "@/lib/courseThemes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard = memo(({ course, className }: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const title = course.title;
  const category = course.category;
  const description = course.variants[0]?.overview.description || "";
  const thumbnail = course.thumbnail;
  const theme = getCategoryTheme(category);
  
  const totalLessons = getTotalLessons(course);
  const variantCount = getVariantCount(course);
  
  // Get first instructor and video from first lesson
  const firstLesson = course.variants[0]?.modules[0]?.lessons[0];
  const firstInstructor = firstLesson?.instructor;
  const firstVideoId = firstLesson?.videoId;
  const instructorPhoto = firstInstructor ? instructorPhotos[firstInstructor] : null;
  
  // Get variant names
  const variantNames = course.variants.map(v => v.name);
  
  return (
    <Link to={`/training-samples/${course.id}`}>
      <Card 
        className={cn(
          "group cursor-pointer relative overflow-hidden h-full",
          "transition-all duration-500 ease-out",
          "hover:scale-[1.02] hover:-translate-y-2",
          "bg-card/80",
          "border-0 shadow-lg hover:shadow-2xl hover:shadow-primary/20",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect on hover */}
        <div className={cn(
          "absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-r from-primary/20 via-transparent to-accent-teal/20 blur-sm"
        )} />
        
        <div className="relative bg-card rounded-xl overflow-hidden h-full flex flex-col">
          {/* Thumbnail with zoom effect */}
          <div className="relative overflow-hidden">
            <div className={cn(
              "transition-transform duration-500 ease-out",
              isHovered && "scale-105"
            )}>
              <CourseThumbnail 
                category={category}
                title={title}
                thumbnail={thumbnail}
                videoId={firstVideoId}
                isHovered={isHovered}
                showPlayIcon={false}
              />
            </div>
            
            {/* Gradient overlay for smooth transition to content */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
            
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
          </div>

          {/* Glassmorphism Content Overlay */}
          <CardContent className={cn(
            "relative flex-1 flex flex-col p-4 pt-5 -mt-4",
            "backdrop-blur-xl bg-card/70",
            "border-t border-white/10",
            "before:absolute before:inset-x-0 before:top-0 before:h-px",
            "before:bg-gradient-to-r before:from-transparent before:via-primary/30 before:to-transparent"
          )}>
            {/* Instructor Avatar - overlapping the divider */}
            {instructorPhoto && (
              <div className="absolute -top-5 right-4">
                <Avatar className={cn(
                  "h-10 w-10 ring-2 ring-card shadow-lg",
                  "transition-all duration-300",
                  isHovered && "ring-primary/50 shadow-primary/20"
                )}>
                  <AvatarImage src={instructorPhoto} alt={firstInstructor} />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className={cn(
                "px-2 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wider",
                "bg-gradient-to-r border-0 transition-all duration-300",
                theme.iconBg,
                theme.accentColor
              )}>
                {category}
              </span>
            </div>
            
            {/* Title - larger and bolder */}
            <h3 className={cn(
              "text-xl font-bold mb-2 line-clamp-2 leading-tight",
              "transition-colors duration-300",
              "text-foreground group-hover:text-primary"
            )}>
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground/80 line-clamp-2 mb-3 flex-1">
              {description}
            </p>

            {/* Variant pills */}
            {variantCount > 1 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {variantNames.map((name) => (
                  <span
                    key={name}
                    className={cn(
                      "px-2 py-0.5 text-[10px] rounded-md uppercase tracking-wider",
                      "bg-white/5 text-muted-foreground/70",
                      "border border-white/10"
                    )}
                  >
                    {name}
                  </span>
                ))}
              </div>
            )}

            {/* Instructor Name */}
            {firstInstructor && (
              <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground/70">
                <span className="truncate">{firstInstructor}</span>
              </div>
            )}

            {/* Stats Row */}
            <div className="flex items-center gap-4 pt-3 border-t border-white/5">
              {/* Lessons count */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{totalLessons} lessons</span>
              </div>
              
              {/* Variants count */}
              {variantCount > 1 && (
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{variantCount} variants</span>
                </div>
              )}
            </div>
          </CardContent>

          {/* Bottom accent line */}
          <div className={cn(
            "absolute bottom-0 left-0 right-0 h-0.5",
            "bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            theme.gradient
          )} />
        </div>
      </Card>
    </Link>
  );
});
