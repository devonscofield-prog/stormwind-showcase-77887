import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  videoId: string;
  title: string;
  posterImage?: string;
}

export const LazyVideo = ({ videoId, title, posterImage }: LazyVideoProps) => {
  const [isInView, setIsInView] = useState(false);
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
      className="aspect-video bg-muted rounded-lg overflow-hidden"
    >
      {isInView ? (
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=true${posterImage ? `&stillUrl=${encodeURIComponent(posterImage)}` : ''}`}
          title={title}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      )}
    </div>
  );
};
