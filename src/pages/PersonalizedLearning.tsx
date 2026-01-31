import { 
  Sparkles, 
  FileText, 
  Timer, 
  LayoutGrid, 
  FastForward, 
  Brain, 
  Layers, 
  Search,
  Zap,
  Target,
  GraduationCap,
  Highlighter
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { VideoEmbed } from "@/components/VideoEmbed";
import { usePageView } from "@/hooks/usePageView";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";

const tools = [
  {
    icon: FileText,
    title: "Study Notes",
    description: "Instant notes capturing key points, so learners stay focused on learning instead of note-taking."
  },
  {
    icon: Timer,
    title: "Realtime Exam",
    description: "See practice questions as instructors mention them, reinforcing learning in the moment."
  },
  {
    icon: LayoutGrid,
    title: "Topic Guide",
    description: "A complete map of every video lets learners jump directly to specific topics they need."
  },
  {
    icon: FastForward,
    title: "Fast Track",
    description: "Save hours by skipping over material you already know and focus on what matters."
  },
  {
    icon: Brain,
    title: "StormAI Examiner",
    description: "Generate unlimited practice tests on the fly for any topic you're studying."
  },
  {
    icon: Layers,
    title: "Flashcards",
    description: "Built-in flashcards for quick review, all downloadable for offline study sessions."
  },
  {
    icon: Search,
    title: "Highlights",
    description: "Search any keyword to see exactly where topics appear across the entire course."
  }
];

const personalizationSteps = [
  {
    number: 1,
    title: "Choose Your Experience",
    description: "Tell us if you're watching for the first time or already familiar with the material. We'll adapt accordingly."
  },
  {
    number: 2,
    title: "Set Your Goals",
    description: "Preparing for certification? Real-world application? Specific topics? Your goals shape your journey."
  },
  {
    number: 3,
    title: "Create Custom Highlights",
    description: "Enter any topics and StormAI will mark exactly where they appear on your video timeline."
  }
];

const toolCategories = [
  {
    icon: GraduationCap,
    title: "Enhanced Study",
    description: "Study Notes + Realtime Exam work together to keep you engaged and reinforce concepts as you learn.",
    tools: ["Study Notes", "Realtime Exam"]
  },
  {
    icon: Target,
    title: "Targeted Learning",
    description: "Topic Guide + Fast Track let you navigate efficiently and skip what you already know.",
    tools: ["Topic Guide", "Fast Track"]
  },
  {
    icon: Zap,
    title: "Practice & Review",
    description: "StormAI Examiner, Flashcards, and Highlights give you unlimited ways to test and reinforce your knowledge.",
    tools: ["StormAI Examiner", "Flashcards", "Highlights"]
  }
];

const PersonalizedLearning = () => {
  usePageView("Personalized Learning Experience");

  return (
    <PageLayout
      title="Personalized Learning Experience"
      description="StormWind's Personalized Learning Experience adapts to each learner, delivering seven powerful tools that maximize ROI on every training hour. Skill up faster while saving up to 80% of your time!"
      breadcrumbs={[{ label: "Personalized Learning Experience" }]}
      titleIcon={Sparkles}
      backgroundVariant="gradient"
    >
      {/* Video Embed Section */}
      <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
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
          Watch the full product walkthrough to see how StormWind creates a customized learning journey for you.
        </p>
      </div>

      {/* Seven Tools Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-full bg-primary/10 animate-pulse">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Seven Tools. One Personalized Experience.</h2>
        </div>
        
        <BentoGrid columns={4}>
          {tools.map((tool) => (
            <BentoCard
              key={tool.title}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </BentoGrid>
      </section>

      {/* ROI Highlight Card */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Save Up to 80% of Your Time</h3>
              <p className="text-muted-foreground leading-relaxed">
                By combining Fast Track's intelligent skip functionality with Topic Guide's targeted navigation, 
                learners who already have foundational knowledge can focus exclusively on new concepts. 
                No more rewatching content you've already mastered—get straight to what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Steps Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-full bg-primary/10 animate-pulse">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Personalize Your Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalizationSteps.map((step, index) => (
            <div 
              key={step.number}
              className="relative bg-card/80 dark:bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-border dark:border-white/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line for desktop */}
              {index < personalizationSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
              )}
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tool Categories Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-full bg-primary/10 animate-pulse">
            <Highlighter className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Tool Categories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-2xl p-6 border border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/20">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default PersonalizedLearning;
