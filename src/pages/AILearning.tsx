import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Bot,
  MessageSquare,
  Lightbulb,
  Clock,
  Brain,
  Zap,
  Video,
  BookOpen,
  FlaskConical,
  Send,
  Plus,
  LucideIcon,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { cn } from "@/lib/utils";
import tutorLogoLightAsset from "@/assets/stormai-tutor-logo-light.png.asset.json";
import tutorLogoDarkAsset from "@/assets/stormai-tutor-logo-dark.png.asset.json";

const tutorLogoLight = tutorLogoLightAsset.url;
const tutorLogoDark = tutorLogoDarkAsset.url;


interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: string;
  featured?: boolean;
}

const capabilities: Capability[] = [
  {
    icon: MessageSquare,
    title: "Real-Time Q&A",
    description:
      "Ask anything mid-course and get an instant, expert-level answer without breaking your flow.",
    span: "md:col-span-7",
    featured: true,
  },
  {
    icon: Lightbulb,
    title: "Module Summaries",
    description: "Key concepts distilled the moment you finish a module.",
    span: "md:col-span-5",
  },
  {
    icon: Brain,
    title: "Troubleshooting Help",
    description: "Personalized guidance that unblocks you when a concept won't click.",
    span: "md:col-span-5",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your tutor is awake whenever you are — any device, any time zone.",
    span: "md:col-span-7",
    featured: true,
  },
];

const ChatMockup = () => (
  <div className="relative mx-auto w-full max-w-xl">
    <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-primary/18 blur-[70px]" />
    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/60 backdrop-blur-xl shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border/50 px-5 py-3">
        <img
          src={tutorLogoLight}
          alt="Storm AI Tutor logo"
          className="h-6 w-auto dark:hidden"
        />
        <img
          src={tutorLogoDark}
          alt="Storm AI Tutor logo"
          className="hidden h-6 w-auto dark:block"
        />
      </div>


      <div className="space-y-4 px-5 py-6">
        <div className="flex justify-start">
          <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-primary/85 px-4 py-2.5 text-sm text-primary-foreground">
            Hello! I'm Storm AI Tutor, your learning assistant. Ask me anything about this course, and I'll guide you.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-border/50 px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground">
          <Plus className="h-4 w-4" />
        </span>
        <div className="flex-1 rounded-full border border-border/60 bg-background/50 px-4 py-2 text-sm text-muted-foreground">
          Ask StormAI Tutor anything…
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Send className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </div>
);

const AILearning = () => {
  return (
    <PageLayout
      title="StormAI Tutor"
      description="Personalized learning powered by StormWind's world-class content. Get instant, expert-level guidance anytime, anywhere — built from the best training on the market."
      breadcrumbs={[{ label: "StormAI Tutor" }]}
      titleIcon={Bot}
      backgroundClassName="bg-tutor-nebula tutor-scope"
      heroActions={
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="shadow-[0_0_24px_hsl(var(--primary)/0.35)]">
            <Link to="/courses">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/30">
            <Link to="/training-samples">
              <FlaskConical className="mr-2 h-5 w-5" />
              Try Training Samples
            </Link>
          </Button>
        </div>
      }
    >
      {/* Chat mockup */}
      <section className="mb-24 animate-fade-in">
        <ChatMockup />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Instant answers and direct video references while you learn
        </p>
      </section>

      {/* Capabilities bento */}
      <section className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Why Learners Rely on StormAI Tutor</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border p-8 backdrop-blur-xl transition-all duration-200",
                item.featured
                  ? "border-primary/25 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/55"
                  : "border-border/60 bg-card/40 hover:border-primary/40",
                item.span
              )}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-shadow duration-200 group-hover:shadow-[0_0_16px_hsl(var(--primary)/0.4)]">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3
                className={cn(
                  "mb-2 font-bold text-foreground",
                  item.featured ? "text-2xl" : "text-xl"
                )}
              >
                {item.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Two-up detail panels */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 backdrop-blur-xl">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-3 text-xl font-semibold">Powered by StormWind Excellence</h3>
          <p className="leading-relaxed text-muted-foreground">
            StormAI is powered exclusively by StormWind's own world-class content. Every answer is
            accurate, consistent, and aligned with the skills you need — drawn from the same
            instructors and materials as our live classes.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border/60 bg-card/40 p-8 backdrop-blur-xl">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
            <Video className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-3 text-xl font-semibold">Direct Video References</h3>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Ask about a topic and StormAI doesn't just answer — it points to the exact videos that
            cover the concept, so you can dive deeper with expert instruction.
          </p>
          <p className="text-sm italic text-muted-foreground">
            <span className="not-italic font-semibold text-primary">Example: </span>
            "Explain VLAN trunking" → explanation plus direct links to the videos covering it.
          </p>
        </div>
      </section>

      {/* Closing band */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-primary p-10 md:p-12 text-center">
        <div className="pointer-events-none absolute -top-1/2 right-0 h-64 w-64 translate-x-1/2 rounded-full bg-primary-foreground/10 blur-[60px]" />
        <h3 className="relative z-10 mb-4 text-3xl md:text-4xl font-extrabold text-primary-foreground">
          An Expert Tutor in Every Course
        </h3>
        <p className="relative z-10 mx-auto max-w-2xl leading-relaxed text-primary-foreground/85">
          StormAI Tutor sits alongside every lesson — answering questions, summarizing modules, and
          pointing to the exact video you need next.
        </p>
      </section>
    </PageLayout>
  );
};

export default AILearning;
