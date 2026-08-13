import { Settings, ShieldCheck, Sparkles, ClipboardList, LucideIcon } from "lucide-react";

export type ProgramKey = "it" | "phishing" | "endUser" | "projectMgmt";

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
      { label: "Project leaders", subLabel: "PMs, delivery, program owners", value: "projectMgmt" },
    ],
  },
  {
    key: "goal",
    title: "What is the outcome you need?",
    options: [
      { label: "Certifications earned", subLabel: "Validated, exam-ready skills", value: "it" },
      { label: "Reduced breach risk", subLabel: "Behavior change you can report on", value: "phishing" },
      { label: "Tool adoption", subLabel: "Copilot and Microsoft 365 in daily use", value: "endUser" },
      { label: "Projects delivered on time", subLabel: "PMP-ready delivery discipline", value: "projectMgmt" },
    ],
  },
  {
    key: "effort",
    title: "How much can your team manage?",
    options: [
      { label: "We will run it", subLabel: "Own the paths and the cadence", value: "it" },
      { label: "Automate it", subLabel: "Set up once, let it run", value: "phishing" },
      { label: "Light touch", subLabel: "Self-serve with admin reporting", value: "endUser" },
      { label: "Scheduled cohorts", subLabel: "Live classes on a set calendar", value: "projectMgmt" },
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
  projectMgmt: {
    key: "projectMgmt",
    tabValue: "project-management",
    title: "Project Management",
    icon: ClipboardList,
    body: "PMP-focused All Access Bundle with EPIC LIVE classes, practice exams, mentoring and downloadable project templates.",
    tags: ["PMP prep", "35 contact hours", "PDUs"],
    points: [
      "EPIC LIVE classes with 24/7 Instant Replay",
      "Practice exams and 1:1 mentoring",
      "PDUs across technical, leadership and strategic competencies",
    ],
    also: [
      { label: "Enterprise Reporting", reason: "Track team progress", href: "/enterprise-reporting" },
      { label: "Business Skills", reason: "Leadership and communication", href: "/enterprise-end-user" },
    ],
  },
};

export const defaultProgramKey: ProgramKey = "it";
export const tieOrder: ProgramKey[] = ["it", "phishing", "endUser", "projectMgmt"];
