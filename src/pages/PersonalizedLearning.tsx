import { useState } from "react";
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
  Wand2,
  BookPlus,
  Map,
  GitBranch,
  Trophy,
  Target,
  Video,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { VideoEmbed } from "@/components/VideoEmbed";
import { usePageView } from "@/hooks/usePageView";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const personalizedTools = [
  { icon: FileText, title: "Study Notes", description: "Instant notes capturing key points, so learners stay focused on learning instead of note-taking." },
  { icon: Timer, title: "Realtime Exam", description: "See practice questions as instructors mention them, reinforcing learning in the moment." },
  { icon: LayoutGrid, title: "Topic Guide", description: "A complete map of every video lets learners jump directly to specific topics they need." },
  { icon: FastForward, title: "Fast Track", description: "Save hours by skipping over material you already know and focus on what matters." },
  { icon: Brain, title: "StormAI Examiner", description: "Generate unlimited practice tests on the fly for any topic you're studying." },
  { icon: Layers, title: "Flashcards", description: "Built-in flashcards for quick review, all downloadable for offline study sessions." },
  { icon: Search, title: "Highlights", description: "Search any keyword to see exactly where topics appear across the entire course." },
];

const studioFeatures = [
  { icon: Wand2, title: "Build From Any Topic", description: "TODO: copy — assemble a custom course from topics pulled out of existing StormWind courses." },
  { icon: BookPlus, title: "Tailored Curriculum", description: "TODO: copy — mix and match modules to match a role, team, or project need." },
  { icon: Layers, title: "Reuse Trusted Content", description: "TODO: copy — every custom course is built on the same expert-led material as our full catalog." },
  { icon: Sparkles, title: "AI-Assisted Assembly", description: "TODO: copy — StormAI suggests the right topics and ordering for your objective." },
];

const atlasFeatures = [
  { icon: Map, title: "Visual Skill Tree", description: "TODO: copy — explore skills like a game map and see how they connect to certifications and roles." },
  { icon: GitBranch, title: "Branching Paths", description: "TODO: copy — pick the branch that matches your goal — cert prep, role readiness, or specialization." },
  { icon: Trophy, title: "Unlock as You Learn", description: "TODO: copy — progress through nodes as you complete the courses tied to each skill." },
  { icon: Target, title: "Role & Cert Aligned", description: "TODO: copy — every skill maps to real job roles and industry certifications." },
];

const VideoPlaceholder = ({ label }: { label: string }) => (
  <div className="max-w-4xl mx-auto mb-12">
    <div className="aspect-video rounded-2xl border border-dashed border-border/60 bg-card/40 flex flex-col items-center justify-center gap-3 text-muted-foreground">
      <Video className="w-10 h-10 opacity-60" />
      <p className="text-sm">{label}</p>
    </div>
  </div>
);

const PersonalizedLearning = () => {
  usePageView("StormAI Learning");
  const [activeTab, setActiveTab] = useState("personalized");

  return (
    <PageLayout
      title="StormAI Learning"
      description="Three connected experiences — Personalized Learning, StormAI Studio, and Skill Atlas — that adapt training to every learner, team, and goal."
      breadcrumbs={[{ label: "StormAI Learning" }]}
      titleIcon={Sparkles}
      backgroundVariant="gradient"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 bg-transparent h-auto p-0 mb-12">
          <TabsTrigger
            value="personalized"
            className="bg-card/50 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-3 sm:py-4 sm:px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-colors duration-200 cursor-pointer rounded-lg"
          >
            Personalized Learning
          </TabsTrigger>
          <TabsTrigger
            value="studio"
            className="bg-card/50 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-3 sm:py-4 sm:px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-colors duration-200 cursor-pointer rounded-lg"
          >
            StormAI Studio
          </TabsTrigger>
          <TabsTrigger
            value="atlas"
            className="bg-card/50 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-3 sm:py-4 sm:px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-colors duration-200 cursor-pointer rounded-lg"
          >
            Skill Atlas
          </TabsTrigger>
        </TabsList>

        {/* Personalized Learning */}
        <TabsContent value="personalized" className="mt-0">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-10">
            Seven powerful tools that adapt to each learner and maximize ROI on every training hour — skill up faster and save up to 80% of your time.
          </p>

          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
              <VideoEmbed
                videoId="axic12xcaf"
                title="StormAI Learning"
                trackingMetadata={{
                  courseName: "StormAI Learning",
                  variantName: "Overview",
                  lessonTitle: "Introduction to StormAI Learning",
                }}
              />
            </div>
          </div>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Seven Tools. One Personalized Experience.</h2>
            </div>
            <BentoGrid columns={4}>
              {personalizedTools.map((tool) => (
                <BentoCard key={tool.title} icon={tool.icon} title={tool.title} description={tool.description} />
              ))}
            </BentoGrid>
          </section>

          <section>
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save Up to 80% of Your Time</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fast Track and Topic Guide work together so learners with foundational knowledge focus only on new concepts —
                    no rewatching material you've already mastered.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* StormAI Studio */}
        <TabsContent value="studio" className="mt-0">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-10">
            Create custom courses built from topics inside our existing courses — tailor training to a role, team, or project without starting from scratch.
          </p>

          <VideoPlaceholder label="StormAI Studio video coming soon" />

          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <Wand2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Custom Courses, Built From Trusted Content</h2>
            </div>
            <BentoGrid columns={4}>
              {studioFeatures.map((f) => (
                <BentoCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
              ))}
            </BentoGrid>
          </section>
        </TabsContent>

        {/* Skill Atlas */}
        <TabsContent value="atlas" className="mt-0">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-10">
            A video-game-style skill tree for professional development — pick a certification or job role and unlock the courses that build the skills to get there.
          </p>

          <VideoPlaceholder label="Skill Atlas video coming soon" />

          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <Map className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Map Your Path. Unlock Your Skills.</h2>
            </div>
            <BentoGrid columns={4}>
              {atlasFeatures.map((f) => (
                <BentoCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
              ))}
            </BentoGrid>
          </section>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default PersonalizedLearning;
