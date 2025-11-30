import { AnimatedIconProps } from '../../AnimatedFeatureCard';

export const AIPersonalizedIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `ai-personalized-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#a855f7;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#ec4899;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="24" cy="16" r="6" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9" />
      <circle cx="12" cy="32" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </circle>
      <circle cx="36" cy="32" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.5s" />
      </circle>
      <line x1="24" y1="22" x2="14" y2="28" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </line>
      <line x1="24" y1="22" x2="34" y2="28" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.3s" />
      </line>
    </svg>
  );
};

export const TurnKeyIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `turnkey-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#10b981;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#3b82f6;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="10" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
      <path d="M24 14 L24 24 L30 20" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 24 24; 360 24 24" dur={isHovered ? "12s" : "4s"} repeatCount="indefinite" />
      </path>
      <circle cx="24" cy="24" r="16" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="16;20;16" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export const ReportingIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `reporting-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#22c55e;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#eab308;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <rect x="12" y="28" width="6" height="12" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9">
        <animate attributeName="height" values="12;16;12" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
        <animate attributeName="y" values="28;24;28" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </rect>
      <rect x="21" y="20" width="6" height="20" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
        <animate attributeName="height" values="20;24;20" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.3s" />
        <animate attributeName="y" values="20;16;20" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.3s" />
      </rect>
      <rect x="30" y="14" width="6" height="26" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8">
        <animate attributeName="height" values="26;30;26" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.6s" />
        <animate attributeName="y" values="14;10;14" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.6s" />
      </rect>
    </svg>
  );
};

export const EmailIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `email-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#ef4444;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#f59e0b;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <rect x="8" y="14" width="32" height="20" rx="2" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </rect>
      <path d="M8 14 L24 26 L40 14" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,50; 50,0; 0,50" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </path>
    </svg>
  );
};

export const SecurityTrainingIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `security-training-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#8b5cf6;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#06b6d4;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <path d="M24,10 L34,15 L34,28 Q34,40 24,46 Q14,40 14,28 L14,15 Z" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </path>
      <rect x="20" y="24" width="8" height="10" rx="1" fill="white" opacity="0.8" />
      <circle cx="24" cy="20" r="2" fill="white" opacity="0.8" />
    </svg>
  );
};

export const AttackVectorsIcon = ({ color, isHovered }: AnimatedIconProps) => {
  const gradientId = `attack-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={gradientId}>
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#f59e0b;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={`${color}66`}>
            <animate attributeName="stop-color" values={`${color}66;${color}ff;${color}66`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="3" fill={isHovered ? `url(#${gradientId})` : color} />
      <line x1="24" y1="24" x2="24" y2="12" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </line>
      <line x1="24" y1="24" x2="36" y2="18" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.2s" />
      </line>
      <line x1="24" y1="24" x2="36" y2="30" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.4s" />
      </line>
      <line x1="24" y1="24" x2="24" y2="36" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.6s" />
      </line>
      <line x1="24" y1="24" x2="12" y2="30" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.8s" />
      </line>
      <line x1="24" y1="24" x2="12" y2="18" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="1s" />
      </line>
    </svg>
  );
};
