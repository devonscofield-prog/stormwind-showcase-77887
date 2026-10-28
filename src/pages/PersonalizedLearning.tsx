import { useRef, useState, type KeyboardEvent } from "react";
import { BookPlus, Brain, FastForward, FileText, GitBranch, Layers, LayoutGrid, Map, PlayCircle, Search, Sparkles, Target, Timer, Trophy, Wand2, type LucideIcon } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { VideoEmbed } from "@/components/VideoEmbed";
import { usePageView } from "@/hooks/usePageView";
import { StormAIPlayer, type StormAIPlayerHandle } from "@/components/StormAIPlayer";
import type { Mode } from "@/lib/stormaiPlayer";
import "@/styles/stormai-learning.css";

const DESC = "Three connected experiences — Personalized Learning, StormAI Studio, and Skill Atlas — that adapt training to every learner, team, and goal.";
type Card = [LucideIcon, string, string, number, boolean?];
type Panel = { tab: string; lede: string; video: [string, string, string, string]; icon: LucideIcon; h2: string; cards: Card[] };

const PANELS: Record<Mode, Panel> = {
  personalized: {
    tab: "Personalized Learning",
    lede: "Seven powerful tools that adapt to each learner and maximize ROI on every training hour — skill up faster and save up to 80% of your time.",
    video: ["9dxeidkijt", "StormAI Learning", "Overview", "Introduction to StormAI Learning"],
    icon: Sparkles, h2: "Seven Tools. One Personalized Experience.",
    cards: [
      [FileText, "Study Notes", "Instant notes capturing key points, so learners stay focused on learning instead of note-taking.", 8, true],
      [Timer, "Realtime Exam", "See practice questions as instructors mention them, reinforcing learning in the moment.", 4],
      [LayoutGrid, "Topic Guide", "A complete map of every video lets learners jump directly to specific topics they need.", 4],
      [FastForward, "Fast Track", "Save hours by skipping over material you already know and focus on what matters.", 4],
      [Brain, "StormAI Examiner", "Generate unlimited practice tests on the fly for any topic you're studying.", 4],
      [Layers, "Flashcards", "Built-in flashcards for quick review, all downloadable for offline study sessions.", 4],
      [Search, "Highlights", "Search any keyword to see exactly where topics appear across the entire course.", 8, true],
    ],
  },
  studio: {
    tab: "StormAI Studio",
    lede: "Create custom courses built from topics inside our existing courses — tailor training to a role, team, or project without starting from scratch.",
    video: ["q454y9mtg0", "StormAI Studio", "StormAI Studio", "StormAI Studio Overview"],
    icon: Wand2, h2: "Custom Courses, Built From Trusted Content",
    cards: [
      [Wand2, "Build From Any Topic", "Assemble a custom course from topics pulled out of existing StormWind courses.", 7, true],
      [BookPlus, "Tailored Curriculum", "Mix and match modules to match a role, team, or project need.", 5],
      [Layers, "Reuse Trusted Content", "Every custom course is built on the same expert-led material as our full catalog.", 5],
      [Sparkles, "AI-Assisted Assembly", "StormAI suggests the right topics and ordering for your objective.", 7, true],
    ],
  },
  atlas: {
    tab: "Skill Atlas",
    lede: "A video-game-style skill tree for professional development — pick a certification or job role and unlock the courses that build the skills to get there.",
    video: ["f96gcr3bls", "Skill Atlas", "Skill Atlas", "Skill Atlas Overview"],
    icon: Map, h2: "Map Your Path. Unlock Your Skills.",
    cards: [
      [Map, "Visual Skill Tree", "Explore skills like a game map and see how they connect to certifications and roles.", 7, true],
      [GitBranch, "Branching Paths", "Pick the branch that matches your goal — cert prep, role readiness, or specialization.", 5],
      [Trophy, "Unlock as You Learn", "Progress through nodes as you complete the courses tied to each skill.", 5],
      [Target, "Role & Cert Aligned", "Every skill maps to real job roles and industry certifications.", 7, true],
    ],
  },
};

const PersonalizedLearning = () => {
  usePageView("StormAI Learning");
  const [mode, setMode] = useState<Mode>("personalized");
  const player = useRef<StormAIPlayerHandle>(null);
  const art = useRef<HTMLDivElement>(null);
  const p = PANELS[mode], H2 = p.icon, tools = mode === "personalized";
  const play = (i: number) => {
    player.current?.tool(i);
    const r = art.current?.getBoundingClientRect();
    if (r && (r.bottom < 80 || r.top > window.innerHeight - 120)) art.current!.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const key = (i: number) => (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(i); } };

  return (
    <div className="sail-scope" data-mode={mode}>
      <PageLayout title="StormAI Learning" description={DESC} breadcrumbs={[{ label: "StormAI Learning" }]} hideHero backgroundClassName="sl-bg">
        <main className="x-page">
          <section className="x-hero">
            <div className="x-copy">
              <span className="x-kick">Platform Features</span>
              <h1>StormAI <em>Learning</em></h1>
              <p className="x-lede">{DESC}</p>
              <div className="x-acts">
                <Link to="/courses" className="x-btn"><BookOpen className="ico" />Explore Courses</Link>
                <Link to="/training-samples" className="x-btn ghost"><FlaskConical className="ico" />Try Training Samples</Link>
              </div>
            </div>
            <div className={mode === "atlas" ? "x-art dark" : "x-art"} ref={art}><StormAIPlayer ref={player} mode={mode} onModeChange={setMode} /></div>
          </section>
          <section className="x-sec">
            <div className="x-tabbar"><div className="x-tabs" role="tablist">
              {(Object.keys(PANELS) as Mode[]).map((k) => (
                <button key={k} type="button" role="tab" aria-selected={mode === k} className={mode === k ? "on" : ""} onClick={() => setMode(k)}>{PANELS[k].tab}</button>
              ))}
            </div></div>
            <div className="x-panel" role="tabpanel">
              <p className="x-plede">{p.lede}</p>
              <div className="x-video-real">
                <VideoEmbed videoId={p.video[0]} title={p.video[1]} trackingMetadata={{ courseName: "StormAI Learning", variantName: p.video[2], lessonTitle: p.video[3] }} />
              </div>
              <section>
                <div className="x-h2"><span className="x-hi"><H2 className="ico" /></span><h2>{p.h2}</h2></div>
                <div className="x-grid">
                  {p.cards.map(([I, t, d, span, feat], i) => (
                    <article key={t} className={`x-card s${span}${feat ? " feat" : ""}`} {...(tools && { "data-tool": i, role: "button", tabIndex: 0, onClick: () => play(i), onKeyDown: key(i) })}>
                      <span className="x-ci"><I className="ico" /></span><h3>{t}</h3><p>{d}</p>
                    </article>
                  ))}
                </div>
              </section>
              {tools && (
                <section className="x-banner"><div className="x-bdeco" />
                  <h3>Save Up to 80% of Your Time</h3>
                  <p>Fast Track and Topic Guide work together so learners with foundational knowledge focus only on new concepts — no rewatching material you've already mastered.</p>
                </section>
              )}
            </div>
          </section>
        </main>
      </PageLayout>
    </div>
  );
};

export default PersonalizedLearning;
