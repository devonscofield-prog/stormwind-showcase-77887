import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { VideoEmbed } from "@/components/VideoEmbed";

interface Video {
  videoId: string;
  title: string;
  description: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

export const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleApiChange = (api: CarouselApi) => {
    if (!api) return;
    
    setApi(api);
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  };

  return (
    <div className="relative">
      <Carousel 
        setApi={handleApiChange}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {videos.map((video, index) => (
            <CarouselItem key={index}>
              <VideoEmbed videoId={video.videoId} title={video.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      
      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-8 bg-[#4FD1C5]"
                : "w-2 bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Video Title and Description */}
      <div className="mt-6 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-3">
          {videos[current]?.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {videos[current]?.description}
        </p>
      </div>
    </div>
  );
};
