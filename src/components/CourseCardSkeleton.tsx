import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const CourseCardSkeleton = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(
      "overflow-hidden h-full",
      "bg-card/80",
      "border-0 shadow-lg",
      className
    )}>
      <div className="relative bg-card rounded-xl overflow-hidden h-full flex flex-col">
        {/* Thumbnail skeleton */}
        <div className="relative aspect-video overflow-hidden">
          <Skeleton className="w-full h-full" />
          {/* Fake icon in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Skeleton className="w-16 h-16 rounded-full" />
          </div>
        </div>

        {/* Content */}
        <CardContent className="flex-1 flex flex-col p-4 pt-3">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-3">
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
          
          {/* Title */}
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          
          {/* Description */}
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-5/6 mb-3" />

          {/* Variant pills */}
          <div className="flex gap-1.5 mb-3">
            <Skeleton className="h-5 w-20 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-2 mb-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-28" />
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-4 pt-3 border-t border-border/50">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
