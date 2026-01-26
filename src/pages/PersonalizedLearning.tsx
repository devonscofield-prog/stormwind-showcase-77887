import { Sparkles } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { VideoEmbed } from "@/components/VideoEmbed";
import { usePageView } from "@/hooks/usePageView";

const PersonalizedLearning = () => {
  usePageView("Personalized Learning Experience");

  return (
    <PageLayout
      title="Personalized Learning Experience"
      description="Discover how our AI-powered platform adapts to your unique learning style, pace, and goals to deliver a truly personalized training experience."
      breadcrumbs={[{ label: "Personalized Learning Experience" }]}
      titleIcon={Sparkles}
      backgroundVariant="gradient"
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
          <VideoEmbed
            videoId="axic12xcaf"
            title="Personalized Learning Experience"
            trackingMetadata={{
              courseName: "Personalized Learning Experience",
              variantName: "Overview",
              lessonTitle: "Introduction to Personalized Learning",
            }}
          />
        </div>
        <p className="text-center text-muted-foreground mt-6 text-lg">
          See how StormWind Studios creates a customized learning journey tailored specifically for you.
        </p>
      </div>
    </PageLayout>
  );
};

export default PersonalizedLearning;
