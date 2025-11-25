import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Animated SVG Icons - Creative Designs
const LearningPathIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `learning-gradient-${color.replace('#', '')}`;
  return (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#fff;${color}`} dur="2s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
        <stop offset="100%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};${color}88;${color}`} dur="2s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
      </linearGradient>
    </defs>
    {/* Connecting nodes representing a learning journey */}
    <circle cx="12" cy="36" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
    </circle>
    <circle cx="24" cy="24" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </circle>
    <circle cx="36" cy="12" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
    </circle>
    
    {/* Animated path connecting nodes */}
    <path d="M14 34 L22 26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4">
      <animate attributeName="stroke-dashoffset" values="0;8" dur={isHovered ? "3s" : "1s"} repeatCount="indefinite" />
    </path>
    <path d="M26 22 L34 14" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4">
      <animate attributeName="stroke-dashoffset" values="0;8" dur={isHovered ? "3s" : "1s"} repeatCount="indefinite" />
    </path>
    
    {/* Progress indicator */}
    <circle cx="24" cy="24" r="8" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1" fill="none" opacity="0.3">
      <animate attributeName="r" values="8;12;8" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0;0.3" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </circle>
  </svg>
  );
};

const MicrolearningIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `micro-gradient-${color.replace('#', '')}`;
  return (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id={gradientId}>
        <stop offset="0%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#fff;${color}`} dur="1.5s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
        <stop offset="100%" stopColor={`${color}66`}>
          <animate attributeName="stop-color" values={`${color}66;${color}ff;${color}66`} dur="1.5s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
      </radialGradient>
    </defs>
    {/* Byte/data particles bursting */}
    <rect x="20" y="20" width="8" height="8" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8" />
    
    {/* Particles flying outward */}
    <rect x="10" y="10" width="3" height="3" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="0;1;0" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      <animate attributeName="x" values="22;10" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      <animate attributeName="y" values="22;10" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </rect>
    <rect x="35" y="10" width="3" height="3" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="0;1;0" dur={isHovered ? "6s" : "2s"} begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="x" values="22;35" dur={isHovered ? "6s" : "2s"} begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="y" values="22;10" dur={isHovered ? "6s" : "2s"} begin="0.3s" repeatCount="indefinite" />
    </rect>
    <rect x="10" y="35" width="3" height="3" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="0;1;0" dur={isHovered ? "6s" : "2s"} begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="x" values="22;10" dur={isHovered ? "6s" : "2s"} begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" values="22;35" dur={isHovered ? "6s" : "2s"} begin="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="35" y="35" width="3" height="3" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="0;1;0" dur={isHovered ? "6s" : "2s"} begin="0.9s" repeatCount="indefinite" />
      <animate attributeName="x" values="22;35" dur={isHovered ? "6s" : "2s"} begin="0.9s" repeatCount="indefinite" />
      <animate attributeName="y" values="22;35" dur={isHovered ? "6s" : "2s"} begin="0.9s" repeatCount="indefinite" />
    </rect>
  </svg>
  );
};

const AILearningIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `ai-gradient-${color.replace('#', '')}`;
  return (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#a855f7;${color}`} dur="2.5s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
        <stop offset="50%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#ec4899;${color}`} dur="2.5s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
        <stop offset="100%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#3b82f6;${color}`} dur="2.5s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
      </linearGradient>
    </defs>
    {/* Neural network visualization */}
    <circle cx="24" cy="10" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8" />
    <circle cx="12" cy="24" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur={isHovered ? "4.5s" : "1.5s"} repeatCount="indefinite" />
    </circle>
    <circle cx="36" cy="24" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur={isHovered ? "4.5s" : "1.5s"} begin="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="24" cy="38" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8" />
    
    {/* Network connections */}
    <line x1="24" y1="13" x2="14" y2="21" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur={isHovered ? "4.5s" : "1.5s"} repeatCount="indefinite" />
    </line>
    <line x1="24" y1="13" x2="34" y2="21" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur={isHovered ? "4.5s" : "1.5s"} begin="0.3s" repeatCount="indefinite" />
    </line>
    <line x1="14" y1="27" x2="22" y2="35" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur={isHovered ? "4.5s" : "1.5s"} begin="0.6s" repeatCount="indefinite" />
    </line>
    <line x1="34" y1="27" x2="26" y2="35" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur={isHovered ? "4.5s" : "1.5s"} begin="0.9s" repeatCount="indefinite" />
    </line>
    
    {/* Data pulse */}
    <circle cx="24" cy="24" r="20" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1" fill="none" opacity="0.2">
      <animate attributeName="r" values="15;25;15" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0;0.4" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </circle>
  </svg>
  );
};

const RangesIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `ranges-gradient-${color.replace('#', '')}`;
  return (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#10b981;${color}`} dur="2s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
        <stop offset="100%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#3b82f6;${color}`} dur="2s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
      </linearGradient>
    </defs>
    {/* Server racks with blinking indicators */}
    <rect x="8" y="12" width="12" height="28" rx="1" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
    <rect x="28" y="12" width="12" height="28" rx="1" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
    
    {/* Blinking server lights */}
    <circle cx="14" cy="18" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="1;0.3;1" dur={isHovered ? "3s" : "1s"} repeatCount="indefinite" />
    </circle>
    <circle cx="14" cy="24" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="0.3;1;0.3" dur={isHovered ? "3s" : "1s"} repeatCount="indefinite" />
    </circle>
    <circle cx="14" cy="30" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="1;0.3;1" dur={isHovered ? "3s" : "1s"} begin="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="34" cy="18" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="0.3;1;0.3" dur={isHovered ? "3s" : "1s"} begin="0.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="34" cy="24" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="1;0.3;1" dur={isHovered ? "3s" : "1s"} begin="0.2s" repeatCount="indefinite" />
    </circle>
    <circle cx="34" cy="30" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="opacity" values="0.3;1;0.3" dur={isHovered ? "3s" : "1s"} repeatCount="indefinite" />
    </circle>
    
    {/* Data transfer line */}
    <line x1="20" y1="26" x2="28" y2="26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeDasharray="4,4">
      <animate attributeName="stroke-dashoffset" values="8;0" dur={isHovered ? "3s" : "1s"} repeatCount="indefinite" />
    </line>
  </svg>
  );
};

const LiveInstructorIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `live-gradient-${color.replace('#', '')}`;
  return (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#ef4444;${color}`} dur="3s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
        <stop offset="100%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#f59e0b;${color}`} dur="3s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
      </linearGradient>
    </defs>
    {/* Broadcast screen */}
    <rect x="8" y="12" width="32" height="20" rx="2" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
    
    {/* Instructor figure */}
    <circle cx="24" cy="20" r="3" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.8" />
    <path d="M18 26 Q24 29 30 26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" />
    
    {/* Live broadcast waves */}
    <circle cx="8" cy="12" r="3" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" fill="none" opacity="0.6">
      <animate attributeName="r" values="3;6;3" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0;0.6" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </circle>
    <circle cx="8" cy="12" r="3" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="1.5" fill="none" opacity="0.4">
      <animate attributeName="r" values="3;6;3" dur={isHovered ? "6s" : "2s"} begin="0.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0;0.4" dur={isHovered ? "6s" : "2s"} begin="0.5s" repeatCount="indefinite" />
    </circle>
    
    {/* Stand */}
    <line x1="24" y1="32" x2="24" y2="38" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" />
    <line x1="18" y1="38" x2="30" y2="38" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" />
  </svg>
  );
};

const MentoringIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `mentor-gradient-${color.replace('#', '')}`;
  return (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#8b5cf6;${color}`} dur="3s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
        <stop offset="100%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#06b6d4;${color}`} dur="3s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
      </linearGradient>
    </defs>
    {/* Two people connecting */}
    <circle cx="16" cy="16" r="5" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
    <circle cx="32" cy="16" r="5" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
    
    {/* Knowledge transfer visualization */}
    <circle cx="24" cy="24" r="2" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="cx" values="18;30;18" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.3;1" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </circle>
    <circle cx="24" cy="27" r="1.5" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="cx" values="18;30;18" dur={isHovered ? "9s" : "3s"} begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.3;1" dur={isHovered ? "9s" : "3s"} begin="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="24" cy="30" r="1" fill={isHovered ? `url(#${gradientId})` : color}>
      <animate attributeName="cx" values="18;30;18" dur={isHovered ? "9s" : "3s"} begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.3;1" dur={isHovered ? "9s" : "3s"} begin="0.6s" repeatCount="indefinite" />
    </circle>
    
    {/* Connecting arc */}
    <path d="M16 21 Q24 28 32 21" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" opacity="0.3" />
  </svg>
  );
};

const AssessmentIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `assess-gradient-${color.replace('#', '')}`;
  return (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#22c55e;${color}`} dur="2s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
        <stop offset="100%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#eab308;${color}`} dur="2s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
      </linearGradient>
    </defs>
    {/* Skill level bars rising */}
    <rect x="8" y="32" width="6" height="8" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9" />
    <rect x="17" y="26" width="6" height="14" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
      <animate attributeName="height" values="0;14" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      <animate attributeName="y" values="40;26" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </rect>
    <rect x="26" y="20" width="6" height="20" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.5">
      <animate attributeName="height" values="0;20" dur={isHovered ? "6s" : "2s"} begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="y" values="40;20" dur={isHovered ? "6s" : "2s"} begin="0.3s" repeatCount="indefinite" />
    </rect>
    <rect x="35" y="14" width="6" height="26" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.3">
      <animate attributeName="height" values="0;26" dur={isHovered ? "6s" : "2s"} begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" values="40;14" dur={isHovered ? "6s" : "2s"} begin="0.6s" repeatCount="indefinite" />
    </rect>
    
    {/* Checkmarks appearing */}
    <path d="M9 10 L11 12 L15 8" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="opacity" values="0;1;1" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </path>
  </svg>
  );
};

const ReportingIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `report-gradient-${color.replace('#', '')}`;
  return (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#3b82f6;${color}`} dur="2.5s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
        <stop offset="100%" stopColor={color}>
          <animate attributeName="stop-color" values={`${color};#8b5cf6;${color}`} dur="2.5s" repeatCount="indefinite" begin={isHovered ? "0s" : "indefinite"} />
        </stop>
      </linearGradient>
    </defs>
    {/* Document with data flowing */}
    <rect x="12" y="8" width="24" height="32" rx="2" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" />
    
    {/* Data lines */}
    <line x1="16" y1="16" x2="32" y2="16" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" opacity="0.8">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </line>
    <line x1="16" y1="22" x2="28" y2="22" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" opacity="0.6">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur={isHovered ? "6s" : "2s"} begin="0.3s" repeatCount="indefinite" />
    </line>
    <line x1="16" y1="28" x2="30" y2="28" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" strokeLinecap="round" opacity="0.4">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur={isHovered ? "6s" : "2s"} begin="0.6s" repeatCount="indefinite" />
    </line>
    
    {/* Analytics icon */}
    <path d="M16 32 L20 36 L24 33 L28 36 L32 32" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="d" values="M16 32 L20 36 L24 33 L28 36 L32 32;M16 34 L20 32 L24 35 L28 32 L32 34;M16 32 L20 36 L24 33 L28 36 L32 32" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </path>
  </svg>
  );
};

// Technology Icons with Animations
const MicrosoftIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <linearGradient id="microsoftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(217, 89%, 61%)">
          <animate attributeName="stop-color" values="hsl(217, 89%, 61%); hsl(186, 100%, 69%); hsl(217, 89%, 61%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(186, 100%, 69%)">
          <animate attributeName="stop-color" values="hsl(186, 100%, 69%); hsl(217, 89%, 61%); hsl(186, 100%, 69%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <rect x="15" y="15" width="25" height="25" fill="url(#microsoftGrad)" opacity="0.9">
      <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </rect>
    <rect x="45" y="15" width="25" height="25" fill="url(#microsoftGrad)" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.3s" />
    </rect>
    <rect x="15" y="45" width="25" height="25" fill="url(#microsoftGrad)" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.6s" />
    </rect>
    <rect x="45" y="45" width="25" height="25" fill="url(#microsoftGrad)" opacity="0.9">
      <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.9s" />
    </rect>
  </svg>
);

const CloudIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(217, 89%, 61%)">
          <animate attributeName="stop-color" values="hsl(217, 89%, 61%); hsl(200, 100%, 50%); hsl(217, 89%, 61%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(200, 100%, 50%)">
          <animate attributeName="stop-color" values="hsl(200, 100%, 50%); hsl(217, 89%, 61%); hsl(200, 100%, 50%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <path d="M20,50 Q20,30 40,25 T60,30 Q65,30 65,40 Q65,50 55,50 Z" fill="url(#cloudGrad)" opacity="0.9">
      <animate attributeName="d" values="M20,50 Q20,30 40,25 T60,30 Q65,30 65,40 Q65,50 55,50 Z; M20,50 Q20,35 40,30 T60,35 Q65,35 65,42 Q65,50 55,50 Z; M20,50 Q20,30 40,25 T60,30 Q65,30 65,40 Q65,50 55,50 Z" dur={isHovered ? "12s" : "4s"} repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </path>
    <circle cx="40" cy="45" r="4" fill="url(#cloudGrad)" opacity="0.6">
      <animate attributeName="cy" values="45;42;45" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </circle>
  </svg>
);

const CybersecurityIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <linearGradient id="securityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(0, 84%, 60%)">
          <animate attributeName="stop-color" values="hsl(0, 84%, 60%); hsl(338, 100%, 50%); hsl(0, 84%, 60%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(338, 100%, 50%)">
          <animate attributeName="stop-color" values="hsl(338, 100%, 50%); hsl(0, 84%, 60%); hsl(338, 100%, 50%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <path d="M40,15 L55,22 L55,38 Q55,55 40,65 Q25,55 25,38 L25,22 Z" fill="url(#securityGrad)" opacity="0.9">
      <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </path>
    <path d="M35,40 L38,43 L45,33" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="stroke-dasharray" values="0,20; 20,0; 0,20" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </path>
  </svg>
);

const AIIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <radialGradient id="aiGrad">
        <stop offset="0%" stopColor="hsl(280, 100%, 70%)">
          <animate attributeName="stop-color" values="hsl(280, 100%, 70%); hsl(200, 100%, 60%); hsl(280, 100%, 70%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(200, 100%, 60%)">
          <animate attributeName="stop-color" values="hsl(200, 100%, 60%); hsl(280, 100%, 70%); hsl(200, 100%, 60%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </radialGradient>
    </defs>
    <circle cx="25" cy="30" r="6" fill="url(#aiGrad)">
      <animate attributeName="cy" values="30;35;30" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </circle>
    <circle cx="55" cy="30" r="6" fill="url(#aiGrad)">
      <animate attributeName="cy" values="30;35;30" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.3s" />
    </circle>
    <circle cx="40" cy="50" r="6" fill="url(#aiGrad)">
      <animate attributeName="cy" values="50;55;50" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.6s" />
    </circle>
    <line x1="25" y1="30" x2="40" y2="50" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </line>
    <line x1="55" y1="30" x2="40" y2="50" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.5s" />
    </line>
  </svg>
);

const NetworkingIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(200, 100%, 50%)">
          <animate attributeName="stop-color" values="hsl(200, 100%, 50%); hsl(240, 100%, 60%); hsl(200, 100%, 50%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(240, 100%, 60%)">
          <animate attributeName="stop-color" values="hsl(240, 100%, 60%); hsl(200, 100%, 50%); hsl(240, 100%, 60%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <circle cx="40" cy="25" r="5" fill="url(#networkGrad)">
      <animate attributeName="r" values="5;6;5" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </circle>
    <circle cx="25" cy="50" r="5" fill="url(#networkGrad)">
      <animate attributeName="r" values="5;6;5" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.3s" />
    </circle>
    <circle cx="55" cy="50" r="5" fill="url(#networkGrad)">
      <animate attributeName="r" values="5;6;5" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.6s" />
    </circle>
    <line x1="40" y1="25" x2="25" y2="50" stroke="url(#networkGrad)" strokeWidth="2">
      <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </line>
    <line x1="40" y1="25" x2="55" y2="50" stroke="url(#networkGrad)" strokeWidth="2">
      <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.4s" />
    </line>
    <line x1="25" y1="50" x2="55" y2="50" stroke="url(#networkGrad)" strokeWidth="2">
      <animate attributeName="opacity" values="0.5;1;0.5" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.8s" />
    </line>
  </svg>
);

const FullStackIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <linearGradient id="fullstackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(45, 100%, 51%)">
          <animate attributeName="stop-color" values="hsl(45, 100%, 51%); hsl(25, 95%, 53%); hsl(45, 100%, 51%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(25, 95%, 53%)">
          <animate attributeName="stop-color" values="hsl(25, 95%, 53%); hsl(45, 100%, 51%); hsl(25, 95%, 53%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <rect x="20" y="15" width="40" height="8" rx="1" fill="url(#fullstackGrad)" opacity="0.9">
      <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </rect>
    <rect x="20" y="28" width="40" height="8" rx="1" fill="url(#fullstackGrad)" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.3s" />
    </rect>
    <rect x="20" y="41" width="40" height="8" rx="1" fill="url(#fullstackGrad)" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.6s" />
    </rect>
    <rect x="20" y="54" width="40" height="8" rx="1" fill="url(#fullstackGrad)" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.9s" />
    </rect>
  </svg>
);

const DevOpsIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <linearGradient id="devopsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(142, 76%, 36%)">
          <animate attributeName="stop-color" values="hsl(142, 76%, 36%); hsl(173, 80%, 40%); hsl(142, 76%, 36%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(173, 80%, 40%)">
          <animate attributeName="stop-color" values="hsl(173, 80%, 40%); hsl(142, 76%, 36%); hsl(173, 80%, 40%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <path d="M40,20 L50,30 L40,40 L30,30 Z" fill="url(#devopsGrad)">
      <animateTransform attributeName="transform" type="rotate" values="0 40 30; 360 40 30" dur={isHovered ? "12s" : "4s"} repeatCount="indefinite" />
    </path>
    <path d="M40,40 L50,50 L40,60 L30,50 Z" fill="url(#devopsGrad)" opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" values="0 40 50; -360 40 50" dur={isHovered ? "12s" : "4s"} repeatCount="indefinite" />
    </path>
  </svg>
);

const BusinessProIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <linearGradient id="businessGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="hsl(332, 83%, 59%)">
          <animate attributeName="stop-color" values="hsl(332, 83%, 59%); hsl(280, 100%, 70%); hsl(332, 83%, 59%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(280, 100%, 70%)">
          <animate attributeName="stop-color" values="hsl(280, 100%, 70%); hsl(332, 83%, 59%); hsl(280, 100%, 70%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <rect x="20" y="50" width="8" height="18" fill="url(#businessGrad)" opacity="0.9">
      <animate attributeName="height" values="18;25;18" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      <animate attributeName="y" values="50;43;50" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </rect>
    <rect x="36" y="40" width="8" height="28" fill="url(#businessGrad)" opacity="0.7">
      <animate attributeName="height" values="28;35;28" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.3s" />
      <animate attributeName="y" values="40;33;40" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.3s" />
    </rect>
    <rect x="52" y="30" width="8" height="38" fill="url(#businessGrad)" opacity="0.8">
      <animate attributeName="height" values="38;45;38" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.6s" />
      <animate attributeName="y" values="30;23;30" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.6s" />
    </rect>
  </svg>
);

const ProjectManagementIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <linearGradient id="pmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(262, 83%, 58%)">
          <animate attributeName="stop-color" values="hsl(262, 83%, 58%); hsl(217, 91%, 60%); hsl(262, 83%, 58%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(217, 91%, 60%)">
          <animate attributeName="stop-color" values="hsl(217, 91%, 60%); hsl(262, 83%, 58%); hsl(217, 91%, 60%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <rect x="15" y="25" width="15" height="6" rx="1" fill="url(#pmGrad)" opacity="0.9">
      <animate attributeName="width" values="15;20;15" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </rect>
    <rect x="15" y="36" width="25" height="6" rx="1" fill="url(#pmGrad)" opacity="0.7">
      <animate attributeName="width" values="25;30;25" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.3s" />
    </rect>
    <rect x="15" y="47" width="35" height="6" rx="1" fill="url(#pmGrad)" opacity="0.8">
      <animate attributeName="width" values="35;40;35" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.6s" />
    </rect>
    <circle cx="60" cy="40" r="8" stroke="url(#pmGrad)" strokeWidth="2" fill="none">
      <animate attributeName="r" values="8;10;8" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </circle>
  </svg>
);

const HelpDeskIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <linearGradient id="helpdeskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(168, 76%, 42%)">
          <animate attributeName="stop-color" values="hsl(168, 76%, 42%); hsl(142, 71%, 45%); hsl(168, 76%, 42%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="hsl(142, 71%, 45%)">
          <animate attributeName="stop-color" values="hsl(142, 71%, 45%); hsl(168, 76%, 42%); hsl(142, 71%, 45%)" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <path d="M25,30 Q25,20 35,20 L45,20 Q55,20 55,30 L55,40 Q55,50 45,50 L40,50" stroke="url(#helpdeskGrad)" strokeWidth="3" fill="none">
      <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
    </path>
    <circle cx="40" cy="58" r="3" fill="url(#helpdeskGrad)">
      <animate attributeName="r" values="3;4;3" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
    </circle>
    <path d="M30,50 Q30,55 35,55 L45,55 Q50,55 50,50" stroke="url(#helpdeskGrad)" strokeWidth="2" fill="none">
      <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" begin="0.3s" />
    </path>
  </svg>
);

interface EnterpriseITProps {
  selectedTechnologies: string[];
  selectedFeatures: string[];
  toggleTechnology: (category: string) => void;
  toggleFeature: (title: string) => void;
}
const EnterpriseIT = ({
  selectedTechnologies,
  selectedFeatures,
  toggleTechnology,
  toggleFeature
}: EnterpriseITProps) => {
  const consolidatedFeatures = [{
    icon: LearningPathIcon,
    emoji: "✅",
    title: "Learning Paths",
    description: "Structured paths with guided assessment, targeted training, and readiness validation—personalized and effective.",
    details: "Flexible pathways for every skill level. Begin with an assessment, follow a guided roadmap, and validate your readiness with confidence.",
    additionalInfo: "Access live instructor-led Epic Live sessions and on-demand courses with instant replay for flexible learning anytime, anywhere."
  }, {
    icon: MicrolearningIcon,
    emoji: "⏰",
    title: "Bytes: Microlearning",
    description: "Short sessions (3-5 min), adaptive personalization, sequential skill stacking, and real-world application.",
    details: "Learn in brief, focused sessions designed for retention. Get personalized paths from initial assessments and stack skills progressively for rapid mastery."
  }, {
    icon: AILearningIcon,
    emoji: "🧠",
    title: "AI-Powered Learning",
    description: "StormWind's AI Tutors leverage proprietary knowledge bases—no public internet, no hallucinations or inaccuracies.",
    details: "They support your certification studies, answer on-the-fly questions, provide step-by-step troubleshooting guidance, and integrate perfectly with our hands-on training content.",
    additionalInfo: "Combine AI assistance with 1:1 instructor mentoring for personal guidance from industry-recognized experts."
  }, {
    icon: RangesIcon,
    emoji: "🛠️",
    title: "StormWind Ranges",
    description: "Hands-on cyber, Azure, Microsoft, and networking ranges – real, production-like practice environments.",
    bullets: [{
      emoji: "🔒",
      text: "Cyber Range: Practice with Splunk, OpenVAS, Nmap, Wireshark, and more."
    }, {
      emoji: "☁️",
      text: "Azure Range: Build VNets, VMs, storage and more, including an empty sandbox for testing ARM/Bicep or Terraform templates."
    }, {
      emoji: "💻",
      text: "Microsoft Range: Server 2025, Windows 11, AD, DNS, PowerShell, and more."
    }, {
      emoji: "🌐",
      text: "Networking Range: VLANs, OSPF, BGP, IPv4/6, and security configurations."
    }]
  }, {
    icon: LiveInstructorIcon,
    emoji: "🎓",
    title: "Live Instructor Led Courses",
    description: "The most effective learning possible happens in a live environment with a world class instructor. Many of StormWind's classes run live, allowing you to fully interact in the most engaging online learning experience available anywhere.",
    details: "The short, 2-hour sessions allow you to easily digest the information."
  }, {
    icon: MentoringIcon,
    emoji: "🤝",
    title: "1:1 Mentoring with Industry Experts",
    description: "Like learning anything new, you are inevitably going to get stuck on something. Unlike traditional eLearning, you aren't on your own. You have access to the instructor from every class to ask questions. This feature is one of the most raved about offerings by our clients."
  }, {
    icon: AssessmentIcon,
    emoji: "🎯",
    title: "Skills Assessments",
    description: "Test your team's skills on a number of different topics and get real time data on where the gaps are. Get course suggestions based on proficiency and streamline the training process by ensuring everyone is taking courses that fit their skill level."
  }, {
    icon: ReportingIcon,
    emoji: "📊",
    title: "Enterprise Reporting and Administration",
    description: "Generate easy to read reports on usage and course completion. Whether you need it for compliance/insurance purposes, or to present to management, we make it simple to get the data you need.",
    details: "You can assign individual courses, create and assign learning paths, add due dates, and track assessment scores all from an intuitive Dashboard that is only visible to designated admins."
  }];
  const handleSelectAll = () => {
    const allFeatureTitles = consolidatedFeatures.map(f => f.title);
    const allSelected = allFeatureTitles.every(title => selectedFeatures.includes(title));
    if (allSelected) {
      // Deselect all
      allFeatureTitles.forEach(title => {
        if (selectedFeatures.includes(title)) {
          toggleFeature(title);
        }
      });
    } else {
      // Select all
      allFeatureTitles.forEach(title => {
        if (!selectedFeatures.includes(title)) {
          toggleFeature(title);
        }
      });
    }
  };
  const allFeaturesSelected = consolidatedFeatures.every(f => selectedFeatures.includes(f.title));
  
  const technologies = [
    { name: "Microsoft", Icon: MicrosoftIcon, items: "Server 2025, M365 Administration, PowerShell, Windows 11, Intune, Endpoint Administration, and more", link: "/microsoft" },
    { name: "Cloud", Icon: CloudIcon, items: "Azure, AWS, Google Cloud, Virtual Desktops, Cloud Security, and more", link: "/cloud" },
    { name: "Cybersecurity", Icon: CybersecurityIcon, items: "CISSP, Security+, Penetration Testing, SecurityX, and more", link: "/cybersecurity" },
    { name: "AI", Icon: AIIcon, items: "ChatGPT, Copilot, AI Awareness, Gemini, AI Ethics, and more", link: "/ai-pro" },
    { name: "Networking", Icon: NetworkingIcon, items: "Cisco CCNA, CCNP, Network+, Wireshark, IPv6, BGP, and more", link: "/networking" },
    { name: "Full Stack Developer", Icon: FullStackIcon, items: "Python, Javascript, React, .NET, HTML/CSS, AI in Coding, and more", link: "/fullstack-developer" },
    { name: "DevOps", Icon: DevOpsIcon, items: "Kubernetes, Docker, IAC, CI/CD, CKA, Hashicorp, and more", link: "/devops" },
    { name: "Business Pro", Icon: BusinessProIcon, items: "Power Apps, Power Automate, Power BI, Azure Data, MS Fabric, and more", link: "/business-pro" },
    { name: "Project Management", Icon: ProjectManagementIcon, items: "Authorized Training Partner for PMI, PMP, ACP, Project +, CAPM, Lean Six Sigma, and more", link: "/project-management" },
    { name: "Help Desk", Icon: HelpDeskIcon, items: "CompTIA (Tech+, A+, Net+, Sec+), ITIL v4 Foundations, and more", link: "/help-desk" },
  ];
  return <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight pb-2">Enterprise IT</h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
          StormWind's one-stop training ecosystem for IT, DevOps, AI, Project Management, and Data Analytics.
          Stay up to date on evolving technology while learning directly from world-class instructors.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Technologies We Train On</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => {
            const TechCard = () => {
              const [isHovered, setIsHovered] = useState(false);
              const [particles, setParticles] = useState<Array<{
                id: number;
                x: number;
                y: number;
                opacity: number;
                size: number;
              }>>([]);
              const cardRef = useRef<HTMLAnchorElement>(null);
              const particleIdRef = useRef(0);
              
              useEffect(() => {
                if (particles.length === 0) return;
                
                const interval = setInterval(() => {
                  setParticles(prev => 
                    prev
                      .map(p => ({ ...p, opacity: p.opacity - 0.05 }))
                      .filter(p => p.opacity > 0)
                  );
                }, 50);
                
                return () => clearInterval(interval);
              }, [particles.length]);
              
              const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!cardRef.current || !isHovered) return;
                
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const newParticle = {
                  id: particleIdRef.current++,
                  x,
                  y,
                  opacity: 1,
                  size: Math.random() * 4 + 2,
                };
                
                setParticles(prev => [...prev.slice(-20), newParticle]);
              };
              
              return (
                <Link 
                  ref={cardRef}
                  to={tech.link} 
                  className="glass-feature-card group relative overflow-hidden rounded-lg p-4 transition-all duration-300 cursor-pointer block hover:scale-105 hover:-translate-y-1 border border-white/10"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setParticles([]);
                  }}
                  onMouseMove={handleMouseMove}
                >
                  {/* Particle Trail */}
                  {particles.map(particle => (
                    <div
                      key={particle.id}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                        background: `hsl(${(index * 36) % 360}, 80%, 60%)`,
                        boxShadow: `0 0 ${particle.size * 2}px hsl(${(index * 36) % 360}, 80%, 60%)`,
                        transform: 'translate(-50%, -50%)',
                        transition: 'opacity 0.05s linear',
                      }}
                    />
                  ))}
                  
                  {/* Animated Icon Background */}
                  <div className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <tech.Icon isHovered={isHovered} />
                  </div>
                  
                  <h4 className="text-base font-bold relative z-10 mb-2 transition-colors duration-300 text-foreground">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed relative z-10">{tech.items}</p>
                </Link>
              );
            };
            
            return <TechCard key={index} />;
          })}
        </div>
      </div>

      {/* Course Catalog Button */}
      <div className="flex justify-center mb-16">
        <Button asChild size="lg" className="gap-2">
          
        </Button>
      </div>

      {/* Consolidated Features Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-foreground">Platform Features</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consolidatedFeatures.map((feature, index) => {
          const featureLinks: Record<string, string> = {
            "Learning Paths": "/learning-paths",
            "Bytes: Microlearning": "/bytes",
            "AI-Powered Learning": "/ai-learning",
            "StormWind Ranges": "/ranges",
            "Live Instructor Led Courses": "/live-instructor-led",
            "1:1 Mentoring with Industry Experts": "/mentoring",
            "Skills Assessments": "/skills-assessments",
            "Enterprise Reporting and Administration": "/enterprise-reporting"
          };
          const featureColors = [
            '#60A5FA', // blue
            '#FB923C', // orange
            '#A78BFA', // purple
            '#4ADE80', // green
            '#38BDF8', // cyan
            '#FBBF24', // yellow
            '#F472B6', // pink
            '#6366F1', // indigo
          ];
          const color = featureColors[index % featureColors.length];
          const [isHovered, setIsHovered] = useState(false);
          
          return <Link 
            key={index} 
            to={featureLinks[feature.title]} 
            className="glass-feature-card group relative overflow-hidden rounded-lg p-6 transition-all duration-300 cursor-pointer block hover:scale-105 hover:-translate-y-1 border border-white/10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
                {/* Floating Particles Background */}
                <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  {/* Animated floating dots */}
                  {[...Array(8)].map((_, i) => (
                    <circle 
                      key={i}
                      cx={50 + (i * 50)} 
                      cy={50 + (i * 40)} 
                      r="2" 
                      fill={color}
                      opacity="0.3"
                    >
                      <animate 
                        attributeName="cy" 
                        values={`${50 + (i * 40)};${30 + (i * 40)};${50 + (i * 40)}`} 
                        dur={`${3 + (i * 0.5)}s`} 
                        repeatCount="indefinite" 
                      />
                      <animate 
                        attributeName="opacity" 
                        values="0.2;0.5;0.2" 
                        dur={`${3 + (i * 0.5)}s`} 
                        repeatCount="indefinite" 
                      />
                    </circle>
                  ))}
                </svg>
                
                {/* Animated Icon with Glow */}
                <div className="mb-6 inline-flex relative z-10">
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" 
                    style={{ backgroundColor: color }}
                  />
                  {/* Animated SVG Icon */}
                  <div className="relative transition-transform duration-300 group-hover:scale-110">
                    <feature.icon color={color} isHovered={isHovered} />
                  </div>
                </div>
                
                {/* Title with Color */}
                <h4 
                  className="text-xl font-bold mb-3 relative z-10 transition-colors duration-300" 
                  style={{ color: color }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-3 relative z-10">
                  {feature.description}
                </p>
                
                {/* Details */}
                {feature.details && <p className="text-sm text-gray-400 leading-relaxed mb-3 relative z-10">
                    {feature.details}
                  </p>}
                
                {/* Bullets */}
                {feature.bullets && <ul className="space-y-2 mb-3 relative z-10">
                    {feature.bullets.map((bullet, idx) => <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="flex-shrink-0">{bullet.emoji}</span>
                        <span className="leading-relaxed">{bullet.text}</span>
                      </li>)}
                  </ul>}
                
                {/* Additional Info */}
                {feature.additionalInfo && <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                    {feature.additionalInfo}
                  </p>}
              </Link>;
        })}
        </div>
      </div>

      {/* SSO Banner */}
      <div className="mt-12 animate-fade-in">
        <div className="relative overflow-hidden rounded-lg border border-border bg-muted/30 p-6 text-center">
          <h3 className="text-xl font-semibold text-muted-foreground relative z-10">
            Single Sign On Available
          </h3>
        </div>
      </div>
    </div>;
};
export default EnterpriseIT;