import { FileSpreadsheet, Sparkles, Shield, BookOpen, Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Animated SVG Icons
const DesktopAppsIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
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

const AITrainingIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
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

const SecurityAwarenessIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
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

const BusinessSkillsIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
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

interface EnterpriseEndUserProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const EnterpriseEndUser = ({ selectedFeatures, toggleFeature }: EnterpriseEndUserProps) => {
  const isMainSelected = selectedFeatures.includes("Enterprise End User");

  const features = [
    {
      icon: DesktopAppsIcon,
      title: "Desktop App Training",
      description: "Comprehensive courses on Excel, PowerPoint, Power BI, Word, and more.",
      link: "/desktop-apps"
    },
    {
      icon: AITrainingIcon,
      title: "AI Training",
      description: "Master ChatGPT, Copilot in Microsoft 365 apps, prompt engineering best practices, and AI-powered productivity tools.",
      link: "/ai-pro"
    },
    {
      icon: SecurityAwarenessIcon,
      title: "Security Awareness Training",
      description: "Modular courses on Email Security, Ransomware Defense, Executive Security Awareness, and general IT Security Awareness.",
      link: "/security-awareness"
    },
    {
      icon: BusinessSkillsIcon,
      title: "2,000+ Business Skills Courses",
      description: "Topics spanning leadership, marketing, communication, ethics, wellness, and customer service.",
      link: "/business-skills"
    },
  ];

  const featureColors = ['#60A5FA', '#FB923C', '#A78BFA', '#4ADE80'];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight pb-2">Enterprise End User</h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
          Training for everyday productivity — from Microsoft Apps to Copilot readiness and Business Skills — built for the modern workforce.
        </p>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2"
        >
          <Link to="/enterprise-end-user">Learn More</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => {
          const FeatureCard = () => {
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
            const color = featureColors[index];
            
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
                to={feature.link}
                className="glass-feature-card group relative overflow-hidden rounded-lg p-6 transition-all duration-300 cursor-pointer block hover:scale-105 hover:-translate-y-1 border border-white/10"
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
                    className="absolute rounded-full pointer-events-none z-20"
                    style={{
                      left: particle.x,
                      top: particle.y,
                      width: particle.size,
                      height: particle.size,
                      opacity: particle.opacity,
                      background: color,
                      boxShadow: `0 0 ${particle.size * 2}px ${color}`,
                      transform: 'translate(-50%, -50%)',
                      transition: 'opacity 0.05s linear',
                    }}
                  />
                ))}

                {/* Animated Icon with Glow */}
                <div className="mb-6 inline-flex relative z-10">
                  <div 
                    className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" 
                    style={{ backgroundColor: color }}
                  />
                  <div className="relative transition-transform duration-300 group-hover:scale-110">
                    <feature.icon color={color} isHovered={isHovered} />
                  </div>
                </div>
                
                <h4 
                  className="text-xl font-bold mb-3 relative z-10 transition-colors duration-300" 
                  style={{ color: color }}
                >
                  {feature.title}
                </h4>
                
                <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </Link>
            );
          };
          
          return <FeatureCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default EnterpriseEndUser;