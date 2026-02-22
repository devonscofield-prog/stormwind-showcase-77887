import { Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/courseCatalogData";

interface CourseListItemProps {
  course: Course;
  index: number;
}

const CourseListItem = ({ course, index }: CourseListItemProps) => {
  const courseName = typeof course === 'string' ? course : course.name;
  const isBytes = typeof course === 'object' && course.isBytes;
  const isComingSoon = typeof course === 'object' && course.isComingSoon;
  const isWebinar = typeof course === 'object' && course.isWebinar;

  return (
    <div
      key={index}
      className="flex items-start gap-2 p-2.5 rounded-lg bg-muted/30 border border-transparent"
    >
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
      </div>
      <div className="flex-1 flex items-start justify-between gap-2">
        <span className="text-xs sm:text-sm leading-snug text-foreground">
          {courseName}
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          {isBytes && (
            <Badge variant="secondary" className="flex items-center gap-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 py-0 h-5">
              <Zap className="h-2.5 w-2.5" />
              <span className="text-[10px] font-semibold">Bytes</span>
            </Badge>
          )}
          {isWebinar && (
            <Badge variant="secondary" className="flex items-center gap-0.5 py-0 h-5">
              <span className="text-[10px] font-semibold">Webinar</span>
            </Badge>
          )}
          {isComingSoon && (
            <Badge variant="outline" className="flex items-center gap-0.5 py-0 h-5">
              <span className="text-[10px] font-semibold">Coming Soon</span>
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseListItem;
