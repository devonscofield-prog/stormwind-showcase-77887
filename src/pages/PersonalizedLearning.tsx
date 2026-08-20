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
  LucideIcon,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { VideoEmbed } from "@/components/VideoEmbed";
import { usePageView } from "@/hooks/usePageView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Tool {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: string;
  featured?: boolean;
}

const personalizedTools: Tool[] = [
  { icon: FileText, title: "Study Notes", description: "Instant notes capturing key points, so learners stay focused on learning instead of note-taking.", span: "md:col-span-8", featured: true },
  { icon: Timer, title: "Realtime Exam", description: "See practice questions as instructors mention them, reinforcing learning in the moment.", span: "md:col-span-4" },
  { icon: LayoutGrid, title: "Topic Guide", description: "A complete map of every video lets learners jump directly to specific topics they need.", span: "md:col-span-4" },
  { icon: FastForward, title: "Fast Track", description: "Save hours by skipping over material you already know and focus on what matters.", span: "md:col-span-4" },
  { icon: Brain, title: "StormAI Examiner", description: "Generate unlimited practice tests on the fly for any topic you're studying.", span: "md:col-span-4" },
  { icon: Layers, title: "Flashcards", description: "Built-in flashcards for quick review, all downloadable for offline study sessions.", span: "md:col-span-4" },
  { icon: Search, title: "Highlights", description: "Search any keyword to see exactly where topics appear across the entire course.", span: "md:col-span-8", featured: true },
];

const studioFeatures: Tool[] = [
  { icon: Wand2, title: "Build From Any Topic", description: "Assemble a custom course from topics pulled out of existing StormWind courses.", span: "md:col-span-7", featured: true },
  { icon: BookPlus, title: "Tailored Curriculum", description: "Mix and match modules to match a role, team, or project need.", span: "md:col-span-5" },
  { icon: Layers, title: "Reuse Trusted Content", description: "Every custom course is built on the same expert-led material as our full catalog.", span: "md:col-span-5" },
  { icon: Sparkles, title: "AI-Assisted Assembly", description: "StormAI suggests the right topics and ordering for your objective.", span: "md:col-span-7", featured: true },
];

const atlasFeatures: Tool[] = [
  { icon: Map, title: "Visual Skill Tree", description: "Explore skills like a game map and see how they connect to certifications and roles.", span: "md:col-span-7", featured: true },
  { icon: GitBranch, title: "Branching Paths", description: "Pick the branch that matches your goal — cert prep, role readiness, or specialization.", span: "md:col-span-5" },
  { icon: Trophy, title: "Unlock as You Learn", description: "Progress through nodes as you complete the courses tied to each skill.", span: "md:col-span-5" },
  { icon: Target, title: "Role & Cert Aligned", description: "Every skill maps to real job roles and industry certifications.", span: "md:col-span-7", featured: true },
];

const tabTriggerClass =
  "rounded-xl px-4 py-3 sm:px-6 text-sm font-semibold text-muted-foreground transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_0_24px_hsl(var(--primary)/0.45)] hover:text-foreground";

const ToolBento = ({ items }: { items: Tool[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
    {items.map((item) => (
      <div
        key={item.title}
        className={cn(
          "group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-200",
          "bg-card/70 border",
          item.featured
            ? "border-primary/30 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary"
            : "border-border/60 hover:border-primary/50",
          item.span
        )}
      >
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 border border-primary/20 transition-shadow duration-200 group-hover:shadow-[0_0_18px_hsl(var(--primary)/0.6)]">
          <item.icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className={cn("mb-2 font-bold text-foreground", item.featured ? "text-2xl" : "text-xl")}>
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{item.description}</p>
      </div>
    ))}
  </div>
);

const VideoPanel = ({
  videoId,
  title,
  variantName,
  lessonTitle,
}: {
  videoId: string;
  title: string;
  variantName: string;
  lessonTitle: string;
}) => (
  <div className="relative mb-20 animate-fade-in">
    <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-primary/40 via-accent-teal/30 to-primary/40 opacity-30 blur-xl pointer-events-none" />
    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-black/40 shadow-2xl">
      <VideoEmbed
        videoId={videoId}
        title={title}
        trackingMetadata={{
          courseName: "StormAI Learning",
          variantName,
          lessonTitle,
        }}
      />
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
      backgroundClassName="bg-stormai-aurora"
    >
      {/* Ambient glow — static gradient layer (no per-frame blur repaint) */}
      <div className="ambient-aurora-static pointer-events-none absolute inset-0 -z-10 overflow-hidden" />


      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-14">
          <TabsList className="inline-flex flex-col md:flex-row h-auto gap-1 rounded-2xl border border-border/60 bg-card/70 p-1 w-full md:w-auto">
            <TabsTrigger value="personalized" className={tabTriggerClass}>
              Personalized Learning
            </TabsTrigger>
            <TabsTrigger value="studio" className={tabTriggerClass}>
              StormAI Studio
            </TabsTrigger>
            <TabsTrigger value="atlas" className={tabTriggerClass}>
              Skill Atlas
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Personalized Learning */}
        <TabsContent value="personalized" className="mt-0">
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground">
            Seven powerful tools that adapt to each learner and maximize ROI on every training hour — skill up faster and save up to 80% of your time.
          </p>

          <VideoPanel
            videoId="9dxeidkijt"
            title="StormAI Learning"
            variantName="Overview"
            lessonTitle="Introduction to StormAI Learning"
          />

          <section className="mb-20">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Seven Tools. One Personalized Experience.</h2>
            </div>
            <ToolBento items={personalizedTools} />
          </section>

          <section className="relative overflow-hidden rounded-[2.5rem] bg-primary p-10 md:p-12 text-center">
            <div className="pointer-events-none absolute -top-1/2 right-0 h-64 w-64 translate-x-1/2 rounded-full bg-primary-foreground/10 blur-[60px]" />
            <h3 className="relative z-10 mb-4 text-3xl md:text-4xl font-extrabold text-primary-foreground">
              Save Up to 80% of Your Time
            </h3>
            <p className="relative z-10 mx-auto max-w-2xl text-primary-foreground/85 leading-relaxed">
              Fast Track and Topic Guide work together so learners with foundational knowledge focus only on new concepts —
              no rewatching material you've already mastered.
            </p>
          </section>
        </TabsContent>

        {/* StormAI Studio */}
        <TabsContent value="studio" className="mt-0">
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground">
            Create custom courses built from topics inside our existing courses — tailor training to a role, team, or project without starting from scratch.
          </p>

          <VideoPanel
            videoId="q454y9mtg0"
            title="StormAI Studio"
            variantName="StormAI Studio"
            lessonTitle="StormAI Studio Overview"
          />

          <section>
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Wand2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Custom Courses, Built From Trusted Content</h2>
            </div>
            <ToolBento items={studioFeatures} />
          </section>
        </TabsContent>

        {/* Skill Atlas */}
        <TabsContent value="atlas" className="mt-0">
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground">
            A video-game-style skill tree for professional development — pick a certification or job role and unlock the courses that build the skills to get there.
          </p>

          <VideoPanel
            videoId="f96gcr3bls"
            title="Skill Atlas"
            variantName="Skill Atlas"
            lessonTitle="Skill Atlas Overview"
          />

          <section>
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Map className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Map Your Path. Unlock Your Skills.</h2>
            </div>
            <ToolBento items={atlasFeatures} />
          </section>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default PersonalizedLearning;
