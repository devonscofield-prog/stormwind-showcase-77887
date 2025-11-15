import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  videoId: string;
  title: string;
  posterImage?: string;
}

export const LazyVideo = ({ videoId, title, posterImage }: LazyVideoProps) => {
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={videoRef}
      className="aspect-video bg-muted rounded-lg overflow-hidden relative group cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      {isInView && isPlaying ? (
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=true&autoPlay=true`}
          title={title}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full"
        />
      ) : isInView ? (
        <>
          {posterImage && (
            <img 
              src={posterImage} 
              alt={title}
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
            />
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg">
              <svg 
                className="w-8 h-8 text-primary-foreground ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      )}
    </div>
  );
};
