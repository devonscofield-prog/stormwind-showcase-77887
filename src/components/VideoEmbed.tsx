import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

export const VideoEmbed = ({ videoId, title }: VideoEmbedProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isPlaceholder = videoId.startsWith('pending_video_');

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
          src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=true&controlsVisibleOnLoad=false`}
          title={title}
          allow="autoplay; fullscreen" 
          allowFullScreen 
          onLoad={() => setVideoLoaded(true)}
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
