import { useState, useEffect, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  placeholderSrc?: string;
  alt: string;
  webpSrc?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  blurAmount?: number;
  transitionDuration?: number;
}

/**
 * ProgressiveImage component with blur-up placeholder (LQIP)
 * 
 * Features:
 * - Shows blurred low-quality placeholder instantly
 * - Loads full image in background
 * - Smooth transition when full image loads
 * - Supports WebP format with fallback
 * - Responsive with srcSet support
 * 
 * Usage:
 * <ProgressiveImage 
 *   src={fullImage}
 *   placeholderSrc={tinyImage}
 *   alt="Description"
 *   className="w-full h-48 object-cover"
 *   blurAmount={20}
 * />
 */
export const ProgressiveImage = ({ 
  src, 
  placeholderSrc,
  webpSrc,
  alt, 
  srcSet,
  sizes = "100vw",
  loading = "lazy",
  className,
  blurAmount = 20,
  transitionDuration = 500,
  ...props 
}: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    // Preload the full-resolution image
    const img = new Image();
    
    img.onload = () => {
      setCurrentSrc(src);
      // Small delay to ensure the image is rendered before removing blur
      setTimeout(() => setIsLoaded(true), 50);
    };

    img.onerror = () => {
      // If full image fails to load, still show placeholder without blur
      setIsLoaded(true);
    };

    // Start loading the full image
    img.src = src;
    if (srcSet) {
      img.srcset = srcSet;
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, srcSet]);

  // If WebP version is provided, use picture element
  if (webpSrc) {
    return (
      <picture className={cn("block overflow-hidden", className)}>
        {srcSet && (
          <source 
            type="image/webp" 
            srcSet={srcSet}
            sizes={sizes}
          />
        )}
        {webpSrc && !srcSet && (
          <source 
            type="image/webp" 
            srcSet={webpSrc}
          />
        )}
        <img 
          src={currentSrc} 
          alt={alt} 
          loading={loading}
          className={cn(
            "w-full h-full transition-all duration-[var(--transition-duration)] ease-out",
            !isLoaded && "blur-[var(--blur-amount)]",
            isLoaded && "blur-0"
          )}
          style={{
            '--blur-amount': `${blurAmount}px`,
            '--transition-duration': `${transitionDuration}ms`,
          } as React.CSSProperties}
          {...props}
        />
      </picture>
    );
  }

  // Simple progressive image
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img 
        src={currentSrc} 
        alt={alt}
        srcSet={isLoaded ? srcSet : undefined}
        sizes={isLoaded ? sizes : undefined}
        loading={loading}
        className={cn(
          "w-full h-full object-cover transition-all ease-out",
          !isLoaded && "blur-[var(--blur-amount)] scale-105",
          isLoaded && "blur-0 scale-100"
        )}
        style={{
          '--blur-amount': `${blurAmount}px`,
          transitionDuration: `${transitionDuration}ms`,
        } as React.CSSProperties}
        {...props}
      />
      
      {/* Optional: Loading indicator overlay */}
      {!isLoaded && placeholderSrc && (
        <div className="absolute inset-0 bg-muted/10 animate-pulse pointer-events-none" />
      )}
    </div>
  );
};
