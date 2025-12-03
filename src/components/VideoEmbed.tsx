import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Play, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string; // Custom thumbnail override
}

export const VideoEmbed = ({ videoId, title, thumbnail }: VideoEmbedProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [showVideo, setShowVideo] = useState(!thumbnail); // Start with video hidden if custom thumbnail exists
  const isPlaceholder = videoId.startsWith('pending_video_');

  // Reset state when videoId changes
  useEffect(() => {
    setVideoLoaded(false);
    setHasError(false);
    setShowVideo(!thumbnail);
  }, [videoId, retryKey, thumbnail]);

  // Timeout fallback - if video doesn't load within 15 seconds, show error
  useEffect(() => {
    if (isPlaceholder || videoLoaded || hasError || !showVideo) return;

    const timeout = setTimeout(() => {
      if (!videoLoaded) {
        setHasError(true);
      }
    }, 15000);

    return () => clearTimeout(timeout);
  }, [videoId, videoLoaded, hasError, isPlaceholder, retryKey, showVideo]);

  const handleRetry = () => {
    setRetryKey(prev => prev + 1);
  };

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  if (isPlaceholder) {
    return (
      <div className="relative bg-muted rounded-lg overflow-hidden">
        <div style={{
          padding: "56.25% 0 0 0",
          position: "relative"
        }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground mb-2">Video Coming Soon</p>
              <p className="text-sm text-muted-foreground">
                This lesson video will be available shortly
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="relative bg-[#1a1f2e] rounded-lg overflow-hidden border border-gray-700">
        <div style={{
          padding: "56.25% 0 0 0",
          position: "relative"
        }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-white mb-2">Video Unavailable</p>
              <p className="text-sm text-gray-400 mb-4">
                This video couldn't be loaded. Please try again or contact support if the issue persists.
              </p>
              <Button 
                variant="outline" 
                onClick={handleRetry}
                className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show custom thumbnail with play button if thumbnail is provided and video not yet triggered
  if (thumbnail && !showVideo) {
    return (
      <div className="relative bg-[#1a1f2e] rounded-lg overflow-hidden">
        <div style={{
          padding: "56.25% 0 0 0",
          position: "relative"
        }}>
          <img 
            src={thumbnail} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer group"
            aria-label={`Play ${title}`}
          >
            <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
              <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#1a1f2e] rounded-lg overflow-hidden">
      <div style={{
        padding: "56.25% 0 0 0",
        position: "relative"
      }}>
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1a1f2e]">
            <Skeleton className="absolute inset-0 rounded-none" />
          </div>
        )}
        <iframe 
          key={retryKey}
          src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=true&controlsVisibleOnLoad=false`}
          title={title}
          allow="autoplay; fullscreen" 
          allowFullScreen 
          onLoad={() => setVideoLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out"
          }} 
        />
      </div>
    </div>
  );
};
