import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Lightbulb, Clock, Brain, Zap, Video, BookOpen, FlaskConical } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import aiLearningDashboard from "@/assets/ai-learning-dashboard.png";

const AILearning = () => {
  useEffect(() => {
    document.title = "AI-Powered Learning";
  }, []);

  return (
    <PageLayout
      title="StormAI Tutor"
      description="Personalized learning powered by StormWind's world-class content. Get instant, expert-level guidance anytime, anywhere — built from the best training on the market."
      breadcrumbs={[{ label: "StormAI Tutor" }]}
      titleIcon={Bot}
      backgroundVariant="gradient"
      heroActions={
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/courses">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/training-samples">
              <FlaskConical className="mr-2 h-5 w-5" />
              Try Training Samples
            </Link>
          </Button>
        </div>
      }
    >
      {/* Dashboard Screenshot */}
      <div className="mb-16 animate-fade-in max-w-4xl mx-auto">
        <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
          <img 
            src={aiLearningDashboard} 
            alt="StormAI Tutor interface showing real-time Q&A and course content navigation" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
        </div>
        <p className="text-center text-muted-foreground mt-4 text-sm">
          Get instant answers and video references while learning with StormAI Tutor
        </p>
      </div>

      {/* Why Students Love Storm AI */}
      <section className="mb-16">
        <BentoGrid columns={4} className="mb-8">
          <BentoCard
            icon={MessageSquare}
            title="Real-Time Q&A"
            description="Get instant answers to your questions while taking a course."
          />
          <BentoCard
            icon={Lightbulb}
            title="Module Summaries"
            description="Quickly understand key concepts with AI-generated summaries."
          />
          <BentoCard
            icon={Brain}
            title="Troubleshooting Help"
            description="Get personalized guidance to overcome learning obstacles."
          />
          <BentoCard
            icon={Clock}
            title="24/7 Availability"
            description="Access your AI tutor anytime, anywhere, on any device."
          />
        </BentoGrid>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Powered by StormWind Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                StormAI is powered exclusively by StormWind's own world-class content. This ensures every 
                answer is accurate, consistent, and aligned with the skills you need to succeed. Learn from 
                the same instructors and materials as our live classes, designed for faster mastery and 
                higher exam scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Referencing Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
              <Video className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Direct Video References</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you ask StormAI about a specific topic, it doesn't just provide an answer—it can reference the exact videos that cover that concept in detail. Get direct links to relevant course sections, allowing you to dive deeper into the material and reinforce your understanding with expert instruction.
              </p>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Example:</span>
                <span className="italic">"StormAI, can you explain VLAN trunking?" → Receives explanation plus direct links to specific videos covering the topic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        
      </section>
    </PageLayout>
  );
};

export default AILearning;
