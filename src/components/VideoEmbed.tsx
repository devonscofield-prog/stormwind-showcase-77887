import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Play, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVideoTracking } from "@/hooks/useVideoTracking";

interface VideoTrackingMetadata {
  courseId?: string;
  courseName?: string;
  variantId?: string;
  variantName?: string;
  lessonId?: string;
  lessonTitle?: string;
  instructor?: string;
}

interface VideoEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string; // Custom thumbnail override
  trackingMetadata?: VideoTrackingMetadata;
}

export const VideoEmbed = ({ videoId, title, thumbnail, trackingMetadata }: VideoEmbedProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [showVideo, setShowVideo] = useState(false); // Always start with video hidden, require click to play
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [wistiaThumbnail, setWistiaThumbnail] = useState<string | null>(null);
  const [thumbnailLoading, setThumbnailLoading] = useState(true);
  const isPlaceholder = videoId.startsWith('pending_video_');

  // Video tracking
  useVideoTracking(videoId, showVideo, trackingMetadata || {});

  // Fetch Wistia thumbnail when videoId changes using JSONP
  useEffect(() => {
    if (isPlaceholder || thumbnail) {
      setThumbnailLoading(false);
      return;
    }

    setThumbnailLoading(true);
    setWistiaThumbnail(null);

    // Use JSONP to fetch Wistia media data (bypasses CORS)
    const callbackName = `wistiaCallback_${videoId.replace(/[^a-zA-Z0-9]/g, '')}`;
    
    (window as any)[callbackName] = (data: any) => {
      if (data?.thumbnail_url) {
        // Get higher resolution by removing size constraints
        const highResThumbnail = data.thumbnail_url.replace(/\?.*$/, '');
        setWistiaThumbnail(highResThumbnail);
      }
      setThumbnailLoading(false);
      delete (window as any)[callbackName];
      // Remove the script tag
      const script = document.getElementById(`wistia-script-${videoId}`);
      if (script) script.remove();
    };

    const script = document.createElement('script');
    script.id = `wistia-script-${videoId}`;
    script.src = `https://fast.wistia.com/oembed?url=https://fast.wistia.com/medias/${videoId}&format=jsonp&callback=${callbackName}`;
    script.onerror = () => {
      setThumbnailLoading(false);
      delete (window as any)[callbackName];
    };
    document.body.appendChild(script);

    return () => {
      delete (window as any)[callbackName];
      const existingScript = document.getElementById(`wistia-script-${videoId}`);
      if (existingScript) existingScript.remove();
    };
  }, [videoId, isPlaceholder, thumbnail]);

  // Reset state when videoId changes - always require click to play
  useEffect(() => {
    setVideoLoaded(false);
    setHasError(false);
    setShowVideo(false);
    setShouldAutoplay(false);
  }, [videoId, retryKey]);

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
    setShouldAutoplay(true);
    setShowVideo(true);
  };

  // Get the thumbnail to display (custom > wistia > none)
  const displayThumbnail = thumbnail || wistiaThumbnail;

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

  // Show play button overlay before video is started
  if (!showVideo) {
    return (
      <div className="relative bg-[#1a1f2e] rounded-lg overflow-hidden">
        <div style={{
          padding: "56.25% 0 0 0",
          position: "relative"
        }}>
          {thumbnailLoading ? (
            <Skeleton className="absolute inset-0 rounded-none" />
          ) : displayThumbnail ? (
            <img 
              src={displayThumbnail} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e] to-[#0f1219]" />
          )}
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
          src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=true&controlsVisibleOnLoad=false${shouldAutoplay ? '&autoPlay=true' : ''}`}
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