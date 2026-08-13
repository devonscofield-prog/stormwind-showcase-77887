import { Settings, ShieldCheck, Sparkles, LucideIcon } from "lucide-react";

export type ProgramKey = "it" | "phishing" | "endUser";

export interface Program {
  key: ProgramKey;
  tabValue: string;
  title: string;
  icon: LucideIcon;
  body: string;
  tags: string[];
  points: string[];
  also: {
    label: string;
    reason: string;
    href: string;
  }[];
}

export interface Question {
  key: "who" | "goal" | "effort";
  title: string;
  options: {
    label: string;
    subLabel: string;
    value: ProgramKey;
  }[];
}

export const questions: Question[] = [
  {
    key: "who",
    title: "Who are you training?",
    options: [
      { label: "IT and engineering", subLabel: "Admins, network, cloud, DevOps", value: "it" },
      { label: "The whole company", subLabel: "Every employee with a mailbox", value: "phishing" },
      { label: "Business teams", subLabel: "Finance, ops, marketing, HR", value: "endUser" },
    ],
  },
  {
    key: "goal",
    title: "What is the outcome you need?",
    options: [
      { label: "Certifications earned", subLabel: "Validated, exam-ready skills", value: "it" },
      { label: "Reduced breach risk", subLabel: "Behavior change you can report on", value: "phishing" },
      { label: "Tool adoption", subLabel: "Copilot and Microsoft 365 in daily use", value: "endUser" },
    ],
  },
  {
    key: "effort",
    title: "How much can your team manage?",
    options: [
      { label: "We will run it", subLabel: "Own the paths and the cadence", value: "it" },
      { label: "Automate it", subLabel: "Set up once, let it run", value: "phishing" },
      { label: "Light touch", subLabel: "Self-serve with admin reporting", value: "endUser" },
    ],
  },
];

export const programs: Record<ProgramKey, Program> = {
  it: {
    key: "it",
    tabValue: "enterprise-it",
    title: "Enterprise IT",
    icon: Settings,
    body: "Live and on-demand training across IT, DevOps, cloud, AI and data, with hands-on ranges and certification study plans behind it.",
    tags: ["Epic Live", "StormWind Ranges", "Cert study plans"],
    points: [
      "Live instructor-led sessions with Instant Replay",
      "Hands-on labs in Cyber, Azure, Microsoft and Networking",
      "1:1 mentoring from the instructor who taught the course",
    ],
    also: [
      { label: "StormAI Phishing", reason: "Pairs with security tracks", href: "/phishing" },
      { label: "Enterprise Reporting", reason: "Track team progress", href: "/enterprise-reporting" },
    ],
  },
  phishing: {
    key: "phishing",
    tabValue: "stormai-phishing",
    title: "StormAI Phishing",
    icon: ShieldCheck,
    body: "AI-personalized phishing simulations generated from your Entra ID profiles, delivered and escalated without anyone managing it.",
    tags: ["Turn-key", "Entra ID", "Compliance reporting"],
    points: [
      "Configure once in 15 to 20 minutes",
      "Outlook plugin trains on the failed click, immediately",
      "Reporting formatted for compliance and insurance",
    ],
    also: [
      { label: "Security Awareness", reason: "Courses in the same LMS", href: "/security-awareness" },
      { label: "Enterprise Reporting", reason: "Compliance exports", href: "/enterprise-reporting" },
    ],
  },
  endUser: {
    key: "endUser",
    tabValue: "enterprise-end-user",
    title: "Enterprise End User",
    icon: Sparkles,
    body: "Microsoft app and Copilot readiness training for everyone outside IT, plus 2,000+ business skills courses in the same platform.",
    tags: ["Copilot readiness", "Microsoft apps", "2,000+ courses"],
    points: [
      "Copilot paths including manager readiness and prompting",
      "AI readiness and responsible-use training",
      "Admin dashboards for engagement and ROI",
    ],
    also: [
      { label: "HR & Compliance", reason: "Same admin console", href: "/hr-compliance" },
      { label: "Bytes", reason: "3-minute reinforcement", href: "/bytes" },
    ],
  },
};

export const defaultProgramKey: ProgramKey = "it";
export const tieOrder: ProgramKey[] = ["it", "phishing", "endUser"];
