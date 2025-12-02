// Animated SVG Icons for EnterpriseIT - Optimized to only animate on hover

export const LearningPathIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `learning-gradient-${color.replace('#', '')}`;
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#fff;${color}`} dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};${color}88;${color}`} dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="12" cy="36" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" begin={begin} />
      </circle>
      <circle cx="24" cy="24" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin={begin} />
      </circle>
      <circle cx="36" cy="12" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" begin={begin} />
      </circle>
      <path d="M14 34 L22 26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4">
        <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite" begin={begin} />
      </path>
      <path d="M26 22 L34 14" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4">
        <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite" begin={begin} />
      </path>
      <circle cx="24" cy="24" r="8" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" begin={begin} />
      </circle>
    </svg>
  );
};

export const MicrolearningIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `micro-gradient-${color.replace('#', '')}`;
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={gradientId}>
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#fff;${color}`} dur="1.5s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor={`${color}66`}>
            <animate attributeName="stop-color" values={`${color}66;${color}ff;${color}66`} dur="1.5s" repeatCount="indefinite" begin={begin} />
          </stop>
        </radialGradient>
      </defs>
      <rect x="20" y="20" width="8" height="8" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8" />
      <rect x="10" y="10" width="3" height="3" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="x" values="22;10" dur="2s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="y" values="22;10" dur="2s" repeatCount="indefinite" begin={begin} />
      </rect>
      <rect x="35" y="10" width="3" height="3" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="x" values="22;35" dur="2s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="y" values="22;10" dur="2s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
      </rect>
      <rect x="10" y="35" width="3" height="3" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin={isHovered ? "0.6s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="x" values="22;10" dur="2s" begin={isHovered ? "0.6s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="y" values="22;35" dur="2s" begin={isHovered ? "0.6s" : "indefinite"} repeatCount="indefinite" />
      </rect>
      <rect x="35" y="35" width="3" height="3" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin={isHovered ? "0.9s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="x" values="22;35" dur="2s" begin={isHovered ? "0.9s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="y" values="22;35" dur="2s" begin={isHovered ? "0.9s" : "indefinite"} repeatCount="indefinite" />
      </rect>
    </svg>
  );
};

export const AILearningIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `ai-gradient-${color.replace('#', '')}`;
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#a855f7;${color}`} dur="2.5s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="50%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#ec4899;${color}`} dur="2.5s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#3b82f6;${color}`} dur="2.5s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="24" cy="10" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8" />
      <circle cx="12" cy="24" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" begin={begin} />
      </circle>
      <circle cx="36" cy="24" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
      </circle>
      <circle cx="24" cy="38" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8" />
      <line x1="24" y1="13" x2="14" y2="21" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" begin={begin} />
      </line>
      <line x1="24" y1="13" x2="34" y2="21" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
      </line>
      <line x1="14" y1="27" x2="22" y2="35" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" begin={isHovered ? "0.6s" : "indefinite"} repeatCount="indefinite" />
      </line>
      <line x1="34" y1="27" x2="26" y2="35" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" begin={isHovered ? "0.9s" : "indefinite"} repeatCount="indefinite" />
      </line>
      <circle cx="24" cy="24" r="20" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1" fill="none" opacity="0.2">
        <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" begin={begin} />
      </circle>
    </svg>
  );
};

export const RangesIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `ranges-gradient-${color.replace('#', '')}`;
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#10b981;${color}`} dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#3b82f6;${color}`} dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="12" height="28" rx="1" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
      <rect x="28" y="12" width="12" height="28" rx="1" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
      <circle cx="14" cy="18" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" begin={begin} />
      </circle>
      <circle cx="14" cy="24" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin={begin} />
      </circle>
      <circle cx="14" cy="30" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
      </circle>
      <circle cx="34" cy="18" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin={isHovered ? "0.5s" : "indefinite"} repeatCount="indefinite" />
      </circle>
      <circle cx="34" cy="24" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin={isHovered ? "0.2s" : "indefinite"} repeatCount="indefinite" />
      </circle>
      <circle cx="34" cy="30" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin={begin} />
      </circle>
      <line x1="20" y1="26" x2="28" y2="26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeDasharray="4,4">
        <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite" begin={begin} />
      </line>
    </svg>
  );
};

export const LiveInstructorIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `live-gradient-${color.replace('#', '')}`;
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#ef4444;${color}`} dur="3s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#f59e0b;${color}`} dur="3s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="32" height="20" rx="2" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
      <circle cx="24" cy="20" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8" />
      <path d="M18 26 Q24 29 30 26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="12" r="3" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" fill="none" opacity="0.6">
        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" begin={begin} />
      </circle>
      <circle cx="8" cy="12" r="3" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" fill="none" opacity="0.4">
        <animate attributeName="r" values="3;6;3" dur="2s" begin={isHovered ? "0.5s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" begin={isHovered ? "0.5s" : "indefinite"} repeatCount="indefinite" />
      </circle>
      <line x1="24" y1="32" x2="24" y2="38" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" />
      <line x1="18" y1="38" x2="30" y2="38" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" />
    </svg>
  );
};

export const MentoringIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `mentor-gradient-${color.replace('#', '')}`;
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#8b5cf6;${color}`} dur="3s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#06b6d4;${color}`} dur="3s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="5" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
      <circle cx="32" cy="16" r="5" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
      <circle cx="24" cy="24" r="2" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="cx" values="18;30;18" dur="3s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" begin={begin} />
      </circle>
      <circle cx="24" cy="27" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="cx" values="18;30;18" dur="3s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.3;1" dur="3s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
      </circle>
      <circle cx="24" cy="30" r="1" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="cx" values="18;30;18" dur="3s" begin={isHovered ? "0.6s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.3;1" dur="3s" begin={isHovered ? "0.6s" : "indefinite"} repeatCount="indefinite" />
      </circle>
      <path d="M16 21 Q24 28 32 21" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  );
};

export const AssessmentIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `assess-gradient-${color.replace('#', '')}`;
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#22c55e;${color}`} dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#eab308;${color}`} dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <rect x="8" y="32" width="6" height="8" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9" />
      <rect x="17" y="26" width="6" height="14" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
        <animate attributeName="height" values="0;14" dur="2s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="y" values="40;26" dur="2s" repeatCount="indefinite" begin={begin} />
      </rect>
      <rect x="26" y="20" width="6" height="20" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.5">
        <animate attributeName="height" values="0;20" dur="2s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="y" values="40;20" dur="2s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
      </rect>
      <rect x="35" y="14" width="6" height="26" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.3">
        <animate attributeName="height" values="0;26" dur="2s" begin={isHovered ? "0.6s" : "indefinite"} repeatCount="indefinite" />
        <animate attributeName="y" values="40;14" dur="2s" begin={isHovered ? "0.6s" : "indefinite"} repeatCount="indefinite" />
      </rect>
      <path d="M9 10 L11 12 L15 8" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" begin={begin} />
      </path>
    </svg>
  );
};

export const ReportingIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `report-gradient-${color.replace('#', '')}`;
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#3b82f6;${color}`} dur="2.5s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#8b5cf6;${color}`} dur="2.5s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <rect x="12" y="8" width="24" height="32" rx="2" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
      <line x1="16" y1="16" x2="32" y2="16" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" opacity="0.8">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin={begin} />
      </line>
      <line x1="16" y1="22" x2="28" y2="22" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin={isHovered ? "0.3s" : "indefinite"} repeatCount="indefinite" />
      </line>
      <line x1="16" y1="28" x2="30" y2="28" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin={isHovered ? "0.6s" : "indefinite"} repeatCount="indefinite" />
      </line>
      <path d="M16 32 L20 36 L24 33 L28 36 L32 32" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="d" values="M16 32 L20 36 L24 33 L28 36 L32 32;M16 34 L20 32 L24 35 L28 32 L32 34;M16 32 L20 36 L24 33 L28 36 L32 32" dur="3s" repeatCount="indefinite" begin={begin} />
      </path>
    </svg>
  );
};

// Technology Icons
export const MicrosoftIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="microsoftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(217, 89%, 61%)">
            <animate attributeName="stop-color" values="hsl(217, 89%, 61%); hsl(186, 100%, 69%); hsl(217, 89%, 61%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(186, 100%, 69%)">
            <animate attributeName="stop-color" values="hsl(186, 100%, 69%); hsl(217, 89%, 61%); hsl(186, 100%, 69%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <rect x="15" y="15" width="25" height="25" fill="url(#microsoftGrad)" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" begin={begin} />
      </rect>
      <rect x="45" y="15" width="25" height="25" fill="url(#microsoftGrad)" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.3s" : "indefinite"} />
      </rect>
      <rect x="15" y="45" width="25" height="25" fill="url(#microsoftGrad)" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.6s" : "indefinite"} />
      </rect>
      <rect x="45" y="45" width="25" height="25" fill="url(#microsoftGrad)" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.9s" : "indefinite"} />
      </rect>
    </svg>
  );
};

export const CloudIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(217, 89%, 61%)">
            <animate attributeName="stop-color" values="hsl(217, 89%, 61%); hsl(200, 100%, 50%); hsl(217, 89%, 61%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(200, 100%, 50%)">
            <animate attributeName="stop-color" values="hsl(200, 100%, 50%); hsl(217, 89%, 61%); hsl(200, 100%, 50%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <path d="M20,50 Q20,30 40,25 T60,30 Q65,30 65,40 Q65,50 55,50 Z" fill="url(#cloudGrad)" opacity="0.9">
        <animate attributeName="d" values="M20,50 Q20,30 40,25 T60,30 Q65,30 65,40 Q65,50 55,50 Z; M20,50 Q20,35 40,30 T60,35 Q65,35 65,42 Q65,50 55,50 Z; M20,50 Q20,30 40,25 T60,30 Q65,30 65,40 Q65,50 55,50 Z" dur="4s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" begin={begin} />
      </path>
      <circle cx="40" cy="45" r="4" fill="url(#cloudGrad)" opacity="0.6">
        <animate attributeName="cy" values="45;42;45" dur="3s" repeatCount="indefinite" begin={begin} />
      </circle>
    </svg>
  );
};

export const CybersecurityIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="securityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(0, 84%, 60%)">
            <animate attributeName="stop-color" values="hsl(0, 84%, 60%); hsl(338, 100%, 50%); hsl(0, 84%, 60%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(338, 100%, 50%)">
            <animate attributeName="stop-color" values="hsl(338, 100%, 50%); hsl(0, 84%, 60%); hsl(338, 100%, 50%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <path d="M40,15 L55,22 L55,38 Q55,55 40,65 Q25,55 25,38 L25,22 Z" fill="url(#securityGrad)" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" begin={begin} />
      </path>
      <path d="M35,40 L38,43 L45,33" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0,20; 20,0; 0,20" dur="3s" repeatCount="indefinite" begin={begin} />
      </path>
    </svg>
  );
};

export const AIIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <radialGradient id="aiGrad">
          <stop offset="0%" stopColor="hsl(280, 100%, 70%)">
            <animate attributeName="stop-color" values="hsl(280, 100%, 70%); hsl(200, 100%, 60%); hsl(280, 100%, 70%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(200, 100%, 60%)">
            <animate attributeName="stop-color" values="hsl(200, 100%, 60%); hsl(280, 100%, 70%); hsl(200, 100%, 60%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </radialGradient>
      </defs>
      <circle cx="25" cy="30" r="6" fill="url(#aiGrad)">
        <animate attributeName="cy" values="30;35;30" dur="3s" repeatCount="indefinite" begin={begin} />
      </circle>
      <circle cx="55" cy="30" r="6" fill="url(#aiGrad)">
        <animate attributeName="cy" values="30;35;30" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.3s" : "indefinite"} />
      </circle>
      <circle cx="40" cy="50" r="6" fill="url(#aiGrad)">
        <animate attributeName="cy" values="50;55;50" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.6s" : "indefinite"} />
      </circle>
      <line x1="25" y1="30" x2="40" y2="50" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin={begin} />
      </line>
      <line x1="55" y1="30" x2="40" y2="50" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.5s" : "indefinite"} />
      </line>
    </svg>
  );
};

export const NetworkingIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(200, 100%, 50%)">
            <animate attributeName="stop-color" values="hsl(200, 100%, 50%); hsl(240, 100%, 60%); hsl(200, 100%, 50%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(240, 100%, 60%)">
            <animate attributeName="stop-color" values="hsl(240, 100%, 60%); hsl(200, 100%, 50%); hsl(240, 100%, 60%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="40" cy="25" r="5" fill="url(#networkGrad)">
        <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" begin={begin} />
      </circle>
      <circle cx="25" cy="50" r="5" fill="url(#networkGrad)">
        <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.3s" : "indefinite"} />
      </circle>
      <circle cx="55" cy="50" r="5" fill="url(#networkGrad)">
        <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.6s" : "indefinite"} />
      </circle>
      <line x1="40" y1="25" x2="25" y2="50" stroke="url(#networkGrad)" strokeWidth="2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin={begin} />
      </line>
      <line x1="40" y1="25" x2="55" y2="50" stroke="url(#networkGrad)" strokeWidth="2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.4s" : "indefinite"} />
      </line>
      <line x1="25" y1="50" x2="55" y2="50" stroke="url(#networkGrad)" strokeWidth="2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.8s" : "indefinite"} />
      </line>
    </svg>
  );
};

export const FullStackIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="fullstackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(45, 100%, 51%)">
            <animate attributeName="stop-color" values="hsl(45, 100%, 51%); hsl(25, 95%, 53%); hsl(45, 100%, 51%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(25, 95%, 53%)">
            <animate attributeName="stop-color" values="hsl(25, 95%, 53%); hsl(45, 100%, 51%); hsl(25, 95%, 53%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <rect x="20" y="15" width="40" height="8" rx="1" fill="url(#fullstackGrad)" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" begin={begin} />
      </rect>
      <rect x="20" y="28" width="40" height="8" rx="1" fill="url(#fullstackGrad)" opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.3s" : "indefinite"} />
      </rect>
      <rect x="20" y="41" width="40" height="8" rx="1" fill="url(#fullstackGrad)" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.6s" : "indefinite"} />
      </rect>
      <rect x="20" y="54" width="40" height="8" rx="1" fill="url(#fullstackGrad)" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.9s" : "indefinite"} />
      </rect>
    </svg>
  );
};

export const DevOpsIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="devopsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(142, 76%, 36%)">
            <animate attributeName="stop-color" values="hsl(142, 76%, 36%); hsl(173, 80%, 40%); hsl(142, 76%, 36%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(173, 80%, 40%)">
            <animate attributeName="stop-color" values="hsl(173, 80%, 40%); hsl(142, 76%, 36%); hsl(173, 80%, 40%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <path d="M40,20 L50,30 L40,40 L30,30 Z" fill="url(#devopsGrad)">
        <animateTransform attributeName="transform" type="rotate" values="0 40 30; 360 40 30" dur="4s" repeatCount="indefinite" begin={begin} />
      </path>
      <path d="M40,40 L50,50 L40,60 L30,50 Z" fill="url(#devopsGrad)" opacity="0.8">
        <animateTransform attributeName="transform" type="rotate" values="0 40 50; -360 40 50" dur="4s" repeatCount="indefinite" begin={begin} />
      </path>
    </svg>
  );
};

export const BusinessProIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="businessGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="hsl(332, 83%, 59%)">
            <animate attributeName="stop-color" values="hsl(332, 83%, 59%); hsl(280, 100%, 70%); hsl(332, 83%, 59%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(280, 100%, 70%)">
            <animate attributeName="stop-color" values="hsl(280, 100%, 70%); hsl(332, 83%, 59%); hsl(280, 100%, 70%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <rect x="20" y="50" width="8" height="18" fill="url(#businessGrad)" opacity="0.9">
        <animate attributeName="height" values="18;25;18" dur="3s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="y" values="50;43;50" dur="3s" repeatCount="indefinite" begin={begin} />
      </rect>
      <rect x="36" y="40" width="8" height="28" fill="url(#businessGrad)" opacity="0.7">
        <animate attributeName="height" values="28;35;28" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.3s" : "indefinite"} />
        <animate attributeName="y" values="40;33;40" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.3s" : "indefinite"} />
      </rect>
      <rect x="52" y="30" width="8" height="38" fill="url(#businessGrad)" opacity="0.8">
        <animate attributeName="height" values="38;45;38" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.6s" : "indefinite"} />
        <animate attributeName="y" values="30;23;30" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.6s" : "indefinite"} />
      </rect>
    </svg>
  );
};

export const ProjectManagementIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="pmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(262, 83%, 58%)">
            <animate attributeName="stop-color" values="hsl(262, 83%, 58%); hsl(217, 91%, 60%); hsl(262, 83%, 58%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(217, 91%, 60%)">
            <animate attributeName="stop-color" values="hsl(217, 91%, 60%); hsl(262, 83%, 58%); hsl(217, 91%, 60%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <rect x="15" y="25" width="15" height="6" rx="1" fill="url(#pmGrad)" opacity="0.9">
        <animate attributeName="width" values="15;20;15" dur="3s" repeatCount="indefinite" begin={begin} />
      </rect>
      <rect x="15" y="36" width="25" height="6" rx="1" fill="url(#pmGrad)" opacity="0.7">
        <animate attributeName="width" values="25;30;25" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.3s" : "indefinite"} />
      </rect>
      <rect x="15" y="47" width="35" height="6" rx="1" fill="url(#pmGrad)" opacity="0.8">
        <animate attributeName="width" values="35;40;35" dur="3s" repeatCount="indefinite" begin={isHovered ? "0.6s" : "indefinite"} />
      </rect>
      <circle cx="60" cy="40" r="8" stroke="url(#pmGrad)" strokeWidth="2" fill="none">
        <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" begin={begin} />
      </circle>
    </svg>
  );
};

export const HelpDeskIcon = ({ isHovered }: { isHovered: boolean }) => {
  const begin = isHovered ? "0s" : "indefinite";
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="helpdeskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(168, 76%, 42%)">
            <animate attributeName="stop-color" values="hsl(168, 76%, 42%); hsl(142, 71%, 45%); hsl(168, 76%, 42%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
          <stop offset="100%" stopColor="hsl(142, 71%, 45%)">
            <animate attributeName="stop-color" values="hsl(142, 71%, 45%); hsl(168, 76%, 42%); hsl(142, 71%, 45%)" dur="2s" repeatCount="indefinite" begin={begin} />
          </stop>
        </linearGradient>
      </defs>
      <path d="M25,30 Q25,20 35,20 L45,20 Q55,20 55,30 L55,40 Q55,50 45,50 L40,50" stroke="url(#helpdeskGrad)" strokeWidth="3" fill="none">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" begin={begin} />
      </path>
      <circle cx="40" cy="58" r="3" fill="url(#helpdeskGrad)">
        <animate attributeName="r" values="3;4;3" dur="3s" repeatCount="indefinite" begin={begin} />
      </circle>
      <path d="M30,50 Q30,55 35,55 L45,55 Q50,55 50,50" stroke="url(#helpdeskGrad)" strokeWidth="2" fill="none">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin={isHovered ? "0.3s" : "indefinite"} />
      </path>
    </svg>
  );
};
