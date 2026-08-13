import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  const recommendedKeys = useMemo<ProgramKey[]>(() => {
    const counts: Record<ProgramKey, number> = { it: 0, phishing: 0, endUser: 0, projectMgmt: 0 };
    let total = 0;
    (Object.values(picks) as ProgramKey[][]).forEach((list) =>
      list.forEach((value) => {
        counts[value] += 1;
        total += 1;
      })
    );
    if (total === 0) return [defaultProgramKey];
    const maxCount = Math.max(...Object.values(counts));
    const winners = tieOrder.filter((key) => counts[key] === maxCount);
    return winners.length ? winners : [defaultProgramKey];
  }, [picks]);

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
      className="relative z-10 scroll-mt-20 border-t border-primary/30 animate-fade-in"
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_480px] xl:grid-cols-[minmax(0,1fr)_520px] bg-card/40">
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
                  <div className="grid sm:grid-cols-3 gap-2.5">
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
                              ? "bg-primary/15 ring-1 ring-inset ring-primary"
                              : "bg-card/50 ring-1 ring-inset ring-border hover:ring-primary/60"
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

        {/* Right rail — recommendation */}
        <div className="p-8 lg:p-10 bg-background/60 lg:border-l border-border lg:sticky lg:top-28 self-start">
          <div className="flex flex-col gap-5" aria-live="polite">
            <span className="text-xs font-bold uppercase tracking-[1.3px] text-muted-foreground">
              {recommendedKeys.length > 1 ? "Recommended programs" : "Recommended"}
            </span>

            {recommendedKeys.map((key) => {
              const program = programs[key];
              const ProgramIcon = program.icon;
              return (
                <div
                  key={program.key}
                  className="rounded-xl bg-card ring-1 ring-inset ring-primary/40 p-5 flex flex-col gap-4 animate-scale-in"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                      <ProgramIcon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight">{program.title}</h3>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground">{program.body}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {program.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 flex flex-col gap-3">
                    {program.points.map((point) => (
                      <div key={point} className="flex gap-2.5">
                        <CheckCircle2 className="w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/85 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => onTabChange(program.tabValue)}
                    className="w-full rounded-lg text-sm"
                    size="default"
                  >
                    See the program
                  </Button>
                </div>
              );
            })}

            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">Also worth a look</span>
              {Array.from(
                new Map(
                  recommendedKeys
                    .flatMap((key) => programs[key].also)
                    .map((item) => [item.label, item])
                ).values()
              ).map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="rounded-lg flex items-center justify-between p-3 bg-card ring-1 ring-inset ring-border transition-all duration-200 hover:ring-primary/60 hover:bg-card/80"
                >
                  <span className="text-xs font-semibold">{item.label}</span>
                  <span className="text-[10px] text-muted-foreground">{item.reason}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionFinder;
