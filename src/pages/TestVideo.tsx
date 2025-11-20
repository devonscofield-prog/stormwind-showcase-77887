import { VideoEmbed } from "@/components/VideoEmbed";
import { Navigation } from "@/components/Navigation";

const TestVideo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Test Video Page</h1>
        <div className="max-w-4xl mx-auto">
          <VideoEmbed 
            videoId="0b68lxn6v0" 
            title="Test Video" 
          />
        </div>
      </div>
    </div>
  );
};

export default TestVideo;
