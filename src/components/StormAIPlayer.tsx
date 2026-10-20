import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Award, Book, Bookmark, Brain, Briefcase, Check, ChevronDown, ChevronRight, Columns, Download, FastForward, FileText, Layers, LayoutGrid, List, Lock, Map, Minus, Pencil, Play, PlayCircle, Plus, RotateCcw, Search, Settings, Shield, ShieldCheck, Sparkles, Timer, Trophy, Wand2, Zap } from "lucide-react";
import { mountStormAIPlayer, type Mode } from "@/lib/stormaiPlayer";

// lucide icons used inside the hero; their SVG markup is handed to the vanilla controller
const ICONS = { award: Award, book: Book, bookmark: Bookmark, brain: Brain, briefcase: Briefcase, check: Check, "chevron-down": ChevronDown, "chevron-right": ChevronRight, "circle-play": PlayCircle, "columns-2": Columns, download: Download, "fast-forward": FastForward, "file-text": FileText, layers: Layers, "layout-grid": LayoutGrid, list: List, lock: Lock, map: Map, minus: Minus, pencil: Pencil, play: Play, plus: Plus, "rotate-ccw": RotateCcw, search: Search, settings: Settings, shield: Shield, "shield-check": ShieldCheck, sparkles: Sparkles, timer: Timer, trophy: Trophy, "wand-sparkles": Wand2, zap: Zap };

export type StormAIPlayerHandle = { tool(i: number): void };

export const StormAIPlayer = forwardRef<StormAIPlayerHandle, { mode: Mode; onModeChange?: (m: Mode) => void }>(function StormAIPlayer({ mode, onModeChange }, ref) {
  const host = useRef<HTMLDivElement>(null), lib = useRef<HTMLDivElement>(null), api = useRef<ReturnType<typeof mountStormAIPlayer> | null>(null), cb = useRef(onModeChange);
  cb.current = onModeChange;
  useEffect(() => {
    const icons: Record<string, string> = {};
    lib.current!.querySelectorAll("svg[data-ic]").forEach((s) => (icons[s.getAttribute("data-ic")!] = s.innerHTML));
    const a = mountStormAIPlayer(host.current!, { onMode: (m: Mode) => cb.current?.(m), icons });
    api.current = a;
    return () => { a.destroy(); api.current = null; };
  }, []);
  useEffect(() => { api.current?.setMode(mode); }, [mode]);
  useImperativeHandle(ref, () => ({ tool: (i) => api.current?.tool(i) }), []);
  return (
    <>
      <div ref={host} />
      <div ref={lib} hidden aria-hidden="true">{Object.entries(ICONS).map(([n, I]) => <I key={n} data-ic={n} />)}</div>
    </>
  );
});

export default StormAIPlayer;
