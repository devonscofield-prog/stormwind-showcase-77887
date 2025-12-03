import { useState, useEffect } from "react";

interface WistiaThumbnailResult {
  thumbnail: string | null;
  isLoading: boolean;
}

export const useWistiaThumbnail = (videoId: string | undefined): WistiaThumbnailResult => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(!!videoId);

  useEffect(() => {
    // Skip if no videoId or pending video
    if (!videoId || videoId.startsWith('pending_video_')) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Create unique callback name
    const callbackName = `wistiaThumbnail_${videoId}_${Date.now()}`;
    
    // Define callback
    (window as any)[callbackName] = (data: any) => {
      if (data && data.thumbnail_url) {
        // Strip query params to get highest resolution
        const highResThumbnail = data.thumbnail_url.split('?')[0];
        setThumbnail(highResThumbnail);
      }
      setIsLoading(false);
      // Cleanup callback
      delete (window as any)[callbackName];
    };

    // Create JSONP script
    const script = document.createElement('script');
    script.src = `https://fast.wistia.com/oembed.json?url=https://home.wistia.com/medias/${videoId}&callback=${callbackName}`;
    script.async = true;
    script.onerror = () => {
      setIsLoading(false);
      delete (window as any)[callbackName];
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete (window as any)[callbackName];
    };
  }, [videoId]);

  return { thumbnail, isLoading };
};
