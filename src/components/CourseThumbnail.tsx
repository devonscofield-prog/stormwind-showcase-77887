import { memo } from "react";
import { cn } from "@/lib/utils";
import { getCategoryTheme } from "@/lib/courseThemes";
import { Play } from "lucide-react";
import { useWistiaThumbnail } from "@/hooks/useWistiaThumbnail";
import { Skeleton } from "@/components/ui/skeleton";

interface CourseThumbnailProps {
  category: string;
  title: string;
  thumbnail?: string;
  videoId?: string;
  className?: string;
  showPlayIcon?: boolean;
  isHovered?: boolean;
}

export const CourseThumbnail = memo(({
  category,
  title,
  thumbnail,
  videoId,
  className,
  showPlayIcon = true,
  isHovered = false
}: CourseThumbnailProps) => {
  const theme = getCategoryTheme(category);
  const CategoryIcon = theme.icon;
  
  // Fetch Wistia thumbnail if videoId provided and no custom thumbnail
  const { thumbnail: wistiaThumbnail, isLoading } = useWistiaThumbnail(
    !thumbnail ? videoId : undefined
  );
  
  // Use custom thumbnail, then Wistia thumbnail, then fall back to generated
  const effectiveThumbnail = thumbnail || wistiaThumbnail;

  // Show loading skeleton while fetching Wistia thumbnail
  if (isLoading && videoId) {
    return (
      <div className={cn("relative aspect-video overflow-hidden", className)}>
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Skeleton className="w-16 h-16 rounded-full" />
        </div>
      </div>
    );
  }

  // If we have a thumbnail (custom or from Wistia), use it
  if (effectiveThumbnail) {
    return (
      <div className={cn("relative aspect-video overflow-hidden", className)}>
        <img 
          src={effectiveThumbnail} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered && "scale-110"
          )}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70" />
        
        {/* Play button on hover */}
        {showPlayIcon && (
          <div className={cn(
            "absolute inset-0 flex items-center justify-center",
            "transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center",
              "bg-white/20 backdrop-blur-sm border border-white/30",
              "transition-all duration-300",
              isHovered && "scale-100"
            )}>
              <Play className="w-8 h-8 text-white fill-white/80 ml-1" />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Auto-generated gradient thumbnail
  return (
    <div className={cn("relative aspect-video overflow-hidden", className)}>
      {/* Base gradient background */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br transition-all duration-500",
        isHovered ? theme.gradientHover : theme.gradient
      )} />
      
      {/* Animated mesh pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${category.replace(/\s+/g, '-')}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${category.replace(/\s+/g, '-')})`} />
        </svg>
      </div>

      {/* Floating shapes for depth */}
      <div className={cn(
        "absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl transition-all duration-700",
        "bg-white/10",
        isHovered && "scale-150 bg-white/20"
      )} />
      <div className={cn(
        "absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-2xl transition-all duration-700 delay-100",
        "bg-black/10",
        isHovered && "scale-125"
      )} />

      {/* Category icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={cn(
          "relative flex items-center justify-center",
          "transition-all duration-500",
          isHovered && "scale-90 opacity-50"
        )}>
          <div className={cn(
            "absolute inset-0 rounded-full blur-xl transition-all duration-500",
            theme.iconBg,
            isHovered && "scale-150"
          )} />
          <CategoryIcon className={cn(
            "w-16 h-16 relative z-10 transition-all duration-300",
            "text-white/60",
            isHovered && "text-white/40"
          )} />
        </div>
      </div>

      {/* Play button on hover */}
      {showPlayIcon && (
        <div className={cn(
          "absolute inset-0 flex items-center justify-center",
          "transition-all duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center",
            "bg-white/20 backdrop-blur-sm border border-white/30",
            "transition-all duration-300",
            isHovered && "scale-100"
          )}>
            <Play className="w-8 h-8 text-white fill-white/80 ml-1" />
          </div>
        </div>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Corner accent glow */}
      <div className={cn(
        "absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-all duration-500",
        "bg-white/5",
        isHovered && "bg-white/15 scale-150"
      )} />
    </div>
  );
});
