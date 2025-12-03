// Course category themes for auto-generated thumbnails
// This provides consistent, category-based styling across the app

import { 
  Shield, 
  Cloud, 
  Server, 
  Brain, 
  Lock, 
  Briefcase,
  Code,
  Network,
  Monitor,
  FolderKanban,
  Headphones,
  LucideIcon
} from "lucide-react";

export interface CategoryTheme {
  gradient: string;
  gradientHover: string;
  iconBg: string;
  accentColor: string;
  icon: LucideIcon;
}

export const categoryThemes: Record<string, CategoryTheme> = {
  "Cybersecurity": {
    gradient: "from-violet-600/80 via-purple-500/60 to-fuchsia-500/40",
    gradientHover: "from-violet-500 via-purple-400 to-fuchsia-400",
    iconBg: "bg-violet-500/20",
    accentColor: "text-violet-400",
    icon: Shield,
  },
  "Cloud": {
    gradient: "from-cyan-600/80 via-sky-500/60 to-blue-500/40",
    gradientHover: "from-cyan-500 via-sky-400 to-blue-400",
    iconBg: "bg-cyan-500/20",
    accentColor: "text-cyan-400",
    icon: Cloud,
  },
  "Microsoft": {
    gradient: "from-blue-600/80 via-indigo-500/60 to-orange-500/40",
    gradientHover: "from-blue-500 via-indigo-400 to-orange-400",
    iconBg: "bg-blue-500/20",
    accentColor: "text-blue-400",
    icon: Server,
  },
  "AI & Machine Learning": {
    gradient: "from-emerald-600/80 via-teal-500/60 to-cyan-500/40",
    gradientHover: "from-emerald-500 via-teal-400 to-cyan-400",
    iconBg: "bg-emerald-500/20",
    accentColor: "text-emerald-400",
    icon: Brain,
  },
  "Security Awareness": {
    gradient: "from-amber-600/80 via-orange-500/60 to-red-500/40",
    gradientHover: "from-amber-500 via-orange-400 to-red-400",
    iconBg: "bg-amber-500/20",
    accentColor: "text-amber-400",
    icon: Lock,
  },
  "Business Skills": {
    gradient: "from-rose-600/80 via-pink-500/60 to-purple-500/40",
    gradientHover: "from-rose-500 via-pink-400 to-purple-400",
    iconBg: "bg-rose-500/20",
    accentColor: "text-rose-400",
    icon: Briefcase,
  },
  "DevOps": {
    gradient: "from-orange-600/80 via-amber-500/60 to-yellow-500/40",
    gradientHover: "from-orange-500 via-amber-400 to-yellow-400",
    iconBg: "bg-orange-500/20",
    accentColor: "text-orange-400",
    icon: Code,
  },
  "Networking": {
    gradient: "from-teal-600/80 via-emerald-500/60 to-green-500/40",
    gradientHover: "from-teal-500 via-emerald-400 to-green-400",
    iconBg: "bg-teal-500/20",
    accentColor: "text-teal-400",
    icon: Network,
  },
  "Desktop Applications": {
    gradient: "from-slate-600/80 via-gray-500/60 to-zinc-500/40",
    gradientHover: "from-slate-500 via-gray-400 to-zinc-400",
    iconBg: "bg-slate-500/20",
    accentColor: "text-slate-400",
    icon: Monitor,
  },
  "Project Management": {
    gradient: "from-indigo-600/80 via-violet-500/60 to-purple-500/40",
    gradientHover: "from-indigo-500 via-violet-400 to-purple-400",
    iconBg: "bg-indigo-500/20",
    accentColor: "text-indigo-400",
    icon: FolderKanban,
  },
  "Help Desk": {
    gradient: "from-sky-600/80 via-blue-500/60 to-indigo-500/40",
    gradientHover: "from-sky-500 via-blue-400 to-indigo-400",
    iconBg: "bg-sky-500/20",
    accentColor: "text-sky-400",
    icon: Headphones,
  },
};

// Default theme for categories not explicitly defined
export const defaultTheme: CategoryTheme = {
  gradient: "from-primary/80 via-primary/60 to-accent/40",
  gradientHover: "from-primary via-primary/80 to-accent",
  iconBg: "bg-primary/20",
  accentColor: "text-primary",
  icon: Code,
};

export const getCategoryTheme = (category: string): CategoryTheme => {
  return categoryThemes[category] || defaultTheme;
};

// Calculate total lessons for a course
export const getTotalLessons = (course: { variants: { modules: { lessons: unknown[] }[] }[] }): number => {
  // Use the first variant's lessons as the primary count
  const primaryVariant = course.variants[0];
  if (!primaryVariant) return 0;
  return primaryVariant.modules.reduce((total, module) => total + module.lessons.length, 0);
};

// Get variant count
export const getVariantCount = (course: { variants: unknown[] }): number => {
  return course.variants.length;
};
