import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

export const VideoEmbed = ({ videoId, title }: VideoEmbedProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
