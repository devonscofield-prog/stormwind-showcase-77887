import { AnimatedIconProps } from '../../AnimatedFeatureCard';

export const DesktopAppsIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `desktop-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#10b981;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#3b82f6;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="32" height="20" rx="2" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </rect>
      <rect x="18" y="32" width="12" height="2" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8" />
      <rect x="14" y="34" width="20" height="2" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7" />
      <circle cx="24" cy="22" r="4" fill="white" opacity="0.3">
        <animate attributeName="r" values="4;5;4" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export const AITrainingIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `ai-train-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={gradientId}>
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#a855f7;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={`${color}66`}>
            <animate attributeName="stop-color" values={`${color}66;${color}ff;${color}66`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </radialGradient>
      </defs>
      <circle cx="24" cy="12" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9" />
      <circle cx="14" cy="24" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </circle>
      <circle cx="34" cy="24" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="24" cy="36" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9" />
      <line x1="24" y1="16" x2="16" y2="20" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" opacity="0.5" />
      <line x1="24" y1="16" x2="32" y2="20" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" opacity="0.5" />
      <line x1="16" y1="28" x2="22" y2="32" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" opacity="0.5" />
      <line x1="32" y1="28" x2="26" y2="32" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" opacity="0.5" />
    </svg>
  );
};

export const SecurityAwarenessIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `security-awareness-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#ef4444;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#f59e0b;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <path d="M24,10 L36,16 L36,28 Q36,42 24,50 Q12,42 12,28 L12,16 Z" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </path>
      <path d="M20,28 L23,31 L28,24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,15; 15,0; 0,15" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </path>
    </svg>
  );
};

export const BusinessSkillsIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `business-skills-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#8b5cf6;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#06b6d4;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <rect x="12" y="12" width="24" height="6" rx="1" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </rect>
      <rect x="12" y="21" width="18" height="6" rx="1" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.3s" />
      </rect>
      <rect x="12" y="30" width="20" height="6" rx="1" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.6s" />
      </rect>
    </svg>
  );
};
