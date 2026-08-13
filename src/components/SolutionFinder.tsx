import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import {
  questions,
  programs,
  defaultProgramKey,
  tieOrder,
  type ProgramKey,
} from "@/data/solutionFinder";

interface SolutionFinderProps {
  onTabChange: (tabValue: string) => void;
}

type QuestionKey = "who" | "goal" | "effort";

export const SolutionFinder = ({ onTabChange }: SolutionFinderProps) => {
  const [picks, setPicks] = useState<Record<QuestionKey, ProgramKey[]>>({
    who: [],
    goal: [],
    effort: [],
  });

  const answeredCount = (Object.values(picks) as ProgramKey[][]).filter(
    (list) => list.length > 0
  ).length;
  const stepLabel = Math.min(answeredCount + 1, 3);

  const hasSelections = picks.who.length > 0 || picks.goal.length > 0;

  const recommendedKeys = useMemo<ProgramKey[]>(() => {
    // "How much can your team manage?" (effort) does not influence recommendations.
    const who = picks.who;
    const goal = picks.goal;

    // Nothing selected => no recommendations yet.
    if (who.length === 0 && goal.length === 0) return [];

    // StormAI Phishing is the ONLY recommendation when the only selections are
    // "End Users or Whole Company" + "Reducing security risks".
    if (
      who.length === 1 &&
      who[0] === "endUser" &&
      goal.length === 1 &&
      goal[0] === "phishing"
    ) {
      return ["phishing"];
    }

    const selected = new Set<ProgramKey>([...who, ...goal]);

    // Project Management only appears when "Project Leaders" is the ONLY
    // persona selected (matching outcomes are okay, but no other personas).
    const isProjectLeadersOnly =
      who.length === 1 &&
      who[0] === "projectMgmt" &&
      goal.every((key) => key === "projectMgmt");

    if (!isProjectLeadersOnly) {
      selected.delete("projectMgmt");
    }

    // IT Professionals always triggers Enterprise IT.
    if (who.includes("it")) {
      selected.add("it");
    }

    // Project Leaders only => Enterprise IT secondary.
    if (isProjectLeadersOnly) {
      selected.add("it");
    }

    let result = tieOrder.filter((key) => selected.has(key));

    // Project Leaders only: put Project Management first, Enterprise IT second.
    if (isProjectLeadersOnly) {
      result = [
        "projectMgmt",
        "it",
        ...result.filter((key) => key !== "projectMgmt" && key !== "it"),
      ];
    }

    return result.length > 0 ? result : [];
  }, [picks]);

  const [openKey, setOpenKey] = useState<ProgramKey | null>(null);
  const activeKey =
    openKey && recommendedKeys.includes(openKey)
      ? openKey
      : recommendedKeys[0] ?? null;

  const handlePick = (questionKey: QuestionKey, value: ProgramKey) => {
    setPicks((prev) => {
      const current = prev[questionKey];
      return {
        ...prev,
        [questionKey]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  return (
    <section
      id="solution-finder"
      className="finder-scope bg-finder-console text-foreground relative z-10 scroll-mt-20 animate-fade-in"
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_480px] xl:grid-cols-[minmax(0,1fr)_520px]">
        {/* Left column — questions */}
        <div className="p-8 lg:p-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[1.3px] text-primary">
              Step {stepLabel} of 3
            </span>
            <h2 className="text-3xl font-bold tracking-tight">Find the right program</h2>
            <p className="text-sm text-muted-foreground max-w-xl">
              Answer three questions and we will point you at the offering built for it. Nothing
              here is a form — no email, no follow-up.
            </p>
          </div>

          {/* Progress bars */}
          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={cn(
                  "flex-1 h-1 rounded-full transition-colors duration-200",
                  index < answeredCount ? "bg-primary" : "bg-border"
                )}
              />
            ))}
          </div>

          {/* Questions */}
          <div className="flex flex-col gap-5">
            {questions.map((question) => {
              const selected = picks[question.key];
              return (
                <div key={question.key} className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-lg font-semibold">{question.title}</h3>
                    <span className="text-xs text-muted-foreground">
                      Pick any that apply
                    </span>
                  </div>
                  <div
                    className={cn(
                      "grid gap-2.5",
                      question.options.length > 3 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"
                    )}
                  >
                    {question.options.map((option) => {
                      const isSelected = selected.includes(option.value);
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handlePick(question.key, option.value)}
                          aria-pressed={isSelected}
                          className={cn(
                            "w-full p-4 rounded-lg text-left flex flex-col gap-1",
                            "transition-[background,box-shadow] duration-200",
                            isSelected
                              ? "bg-primary/10 ring-1 ring-inset ring-primary"
                              : "bg-card ring-1 ring-inset ring-border hover:ring-primary/50"
                          )}
                        >
                          <span className="text-sm font-semibold">{option.label}</span>
                          <span className="text-xs text-muted-foreground leading-snug">{option.subLabel}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right rail — recommendation (focus stack) */}
        <div className="p-8 lg:p-10 bg-[hsl(166_28%_94%)] dark:bg-[hsl(158_10%_11%)] lg:border-l border-border lg:sticky lg:top-28 self-start">
          <div className="flex flex-col gap-5" aria-live="polite">
            {!hasSelections ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary/70" />
                </span>
                <p className="text-sm text-muted-foreground max-w-[220px]">
                  Select an option to see recommended programs.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between gap-3 px-0.5">
                  <span className="text-xs font-bold uppercase tracking-[1.3px] text-muted-foreground">
                    {recommendedKeys.length > 1 ? "Recommended programs" : "Recommended"}
                  </span>
                  {recommendedKeys.length > 1 && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary ring-1 ring-inset ring-primary/30">
                      {recommendedKeys.length} matches
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  {recommendedKeys.map((key) => {
                    const program = programs[key];
                    const ProgramIcon = program.icon;
                    const isActive = key === activeKey;

                    if (!isActive) {
                      return (
                        <button
                          key={program.key}
                          type="button"
                          onClick={() => setOpenKey(key)}
                          className="group w-full rounded-xl bg-card/40 ring-1 ring-inset ring-border p-4 flex items-center justify-between gap-3 text-left transition-colors duration-200 hover:bg-card/70"
                        >
                          <span className="flex items-center gap-3 min-w-0">
                            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 transition-colors duration-200 group-hover:bg-primary" />
                            <span className="text-sm font-medium truncate">{program.title}</span>
                          </span>
                          <span className="flex items-center gap-2 shrink-0">
                            <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-tight text-muted-foreground">
                              {program.tags.slice(0, 2).join(" • ")}
                            </span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </span>
                        </button>
                      );
                    }

                    return (
                      <div key={program.key} className="relative">
                        <div className="absolute -left-1 top-4 bottom-4 w-1 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
                        <div className="rounded-xl bg-card ring-1 ring-inset ring-border p-5 flex flex-col gap-4 shadow-xl animate-fade-in">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                                <ProgramIcon className="h-4 w-4 text-primary" />
                              </div>
                              <h3 className="text-lg font-bold tracking-tight leading-tight">
                                {program.title}
                              </h3>
                            </div>
                            <div className="hidden sm:flex flex-wrap justify-end gap-1.5">
                              {program.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="font-mono text-[9px] uppercase tracking-tight px-2 py-0.5 rounded bg-muted text-muted-foreground ring-1 ring-inset ring-border"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <p className="text-sm leading-relaxed text-muted-foreground">{program.body}</p>

                          <ul className="flex flex-col gap-2">
                            {program.points.map((point) => (
                              <li key={point} className="flex items-start gap-2 text-xs">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                <span className="text-foreground/85 leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>

                          <Button
                            onClick={() => onTabChange(program.tabValue)}
                            className="w-full rounded-full text-sm font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90"
                          >
                            See the program
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 px-0.5">
                    Also worth a look
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Array.from(
                      new Map(
                        recommendedKeys
                          .flatMap((key) => programs[key].also)
                          .map((item) => [item.label, item])
                      ).values()
                    )
                      .filter(
                        (item) =>
                          !recommendedKeys.some((key) => programs[key].title === item.label)
                      )
                      .map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          title={item.reason}
                          className="px-3 py-2 rounded-lg bg-card/40 ring-1 ring-inset ring-border text-[11px] text-muted-foreground transition-colors duration-200 hover:text-foreground hover:bg-card/70 flex items-center gap-2"
                        >
                          <span className="h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionFinder;
