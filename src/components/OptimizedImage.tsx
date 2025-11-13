import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  webpSrc?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

/**
 * OptimizedImage component that supports WebP format with fallback and responsive loading
 * 
 * Usage:
 * <OptimizedImage 
 *   src={image} 
 *   webpSrc={imageWebp} 
 *   alt="Description"
 *   srcSet="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
 *   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 *   loading="lazy"
 * />
 */
export const OptimizedImage = ({ 
  src, 
  webpSrc, 
  alt, 
  srcSet,
  sizes = "100vw",
  loading = "lazy",
  className,
  ...props 
}: OptimizedImageProps) => {
  // If WebP version is provided, use picture element for format fallback
  if (webpSrc) {
    return (
      <picture>
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
          src={src} 
          alt={alt} 
          loading={loading}
          className={className}
          {...props}
        />
      </picture>
    );
  }

  // Simple responsive image with srcset
  return (
    <img 
      src={src} 
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      loading={loading}
      className={className}
      {...props}
    />
  );
};
