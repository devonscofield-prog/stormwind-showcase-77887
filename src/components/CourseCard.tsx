import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Course } from "@/lib/trainingSampleData";
import { CourseThumbnail } from "./CourseThumbnail";
import { getCategoryTheme, getTotalLessons, getVariantCount } from "@/lib/courseThemes";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard = ({ course, className }: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const title = course.title;
  const category = course.category;
  const description = course.variants[0]?.overview.description || "";
  const thumbnail = course.thumbnail;
  const theme = getCategoryTheme(category);
  
  const totalLessons = getTotalLessons(course);
  const variantCount = getVariantCount(course);
  const difficulty = course.variants[0]?.overview.difficulty;
  
  return (
    <Link to={`/training-samples/${course.id}`}>
      <Card 
        className={cn(
          "group cursor-pointer relative overflow-hidden h-full",
          "transition-all duration-500 ease-out",
          "hover:scale-[1.02] hover:-translate-y-1",
          "bg-card/50 backdrop-blur-sm",
          "border border-border/50 hover:border-primary/30",
          "hover:shadow-xl hover:shadow-primary/10",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect on hover */}
        <div className={cn(
          "absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-sm"
        )} />
        
        <div className="relative bg-card rounded-xl overflow-hidden h-full flex flex-col">
          {/* Thumbnail */}
          <CourseThumbnail 
            category={category}
            title={title}
            thumbnail={thumbnail}
            isHovered={isHovered}
          />

          {/* Content */}
          <CardContent className="flex-1 flex flex-col p-4 pt-3">
            {/* Category & Stats Row */}
            <div className="flex items-center justify-between gap-2 mb-3">
              {/* Category Badge */}
              <span className={cn(
                "px-2.5 py-1 text-xs font-semibold rounded-full",
                "bg-gradient-to-r border transition-all duration-300",
                theme.iconBg,
                "border-current/20",
                theme.accentColor
              )}>
                {category}
              </span>
              
              {/* Difficulty Badge */}
              {difficulty && (
                <span className={cn(
                  "px-2 py-0.5 text-xs font-medium rounded-full",
                  difficulty === "Beginner" && "bg-green-500/10 text-green-400",
                  difficulty === "Intermediate" && "bg-yellow-500/10 text-yellow-400",
                  difficulty === "Advanced" && "bg-red-500/10 text-red-400"
                )}>
                  {difficulty}
                </span>
              )}
            </div>
            
            {/* Title */}
            <h3 className={cn(
              "text-lg font-bold mb-2 line-clamp-2",
              "transition-colors duration-300",
              "text-foreground group-hover:text-primary"
            )}>
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
              {description}
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-4 pt-3 border-t border-border/50">
              {/* Lessons count */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{totalLessons} lessons</span>
              </div>
              
              {/* Variants count */}
              {variantCount > 1 && (
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{variantCount} variants</span>
                </div>
              )}
              
              {/* Duration if available */}
              {course.variants[0]?.overview.totalDuration && course.variants[0].overview.totalDuration !== "TBD" && (
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{course.variants[0].overview.totalDuration}</span>
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
};
