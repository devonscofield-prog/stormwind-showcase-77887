import FeatureCard from "./FeatureCard";
import { Award, BookOpen, Users, Target, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Animated SVG Icons
const PMPIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `pmp-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#FFD700;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#FFA500;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
      </circle>
      <path d="M24 12 L27 20 L35 20 L29 25 L31 33 L24 28 L17 33 L19 25 L13 20 L21 20 Z" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="opacity" values="0.8;1;0.8" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </path>
    </svg>
  );
};

const AgileIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `agile-gradient-${color.replace('#', '')}`;
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
      <path d="M12,24 L24,12 L36,24 L24,36 Z" fill="none" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2">
        <animateTransform attributeName="transform" type="rotate" values="0 24 24; 360 24 24" dur={isHovered ? "12s" : "4s"} repeatCount="indefinite" />
      </path>
      <circle cx="24" cy="24" r="4" fill={isHovered ? `url(#${gradientId})` : color}>
        <animate attributeName="r" values="4;6;4" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

const LeadershipIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `leadership-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={gradientId}>
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#8b5cf6;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={`${color}66`}>
            <animate attributeName="stop-color" values={`${color}66;${color}ff;${color}66`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </radialGradient>
      </defs>
      <circle cx="24" cy="16" r="6" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.9" />
      <circle cx="12" cy="30" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </circle>
      <circle cx="36" cy="30" r="4" fill={isHovered ? `url(#${gradientId})` : color} opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" begin="0.5s" />
      </circle>
      <line x1="24" y1="22" x2="14" y2="26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" opacity="0.5" />
      <line x1="24" y1="22" x2="34" y2="26" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" opacity="0.5" />
    </svg>
  );
};

const CCRIcon = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
  const gradientId = `ccr-gradient-${color.replace('#', '')}`;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#22c55e;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#eab308;${color}`} dur={isHovered ? "6s" : "2s"} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="16" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" strokeDasharray="80, 20">
        <animateTransform attributeName="transform" type="rotate" values="0 24 24; 360 24 24" dur={isHovered ? "15s" : "5s"} repeatCount="indefinite" />
      </circle>
      <path d="M20,24 L23,27 L28,20" stroke={isHovered ? `url(#${gradientId})` : color} strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,15; 15,0; 0,15" dur={isHovered ? "9s" : "3s"} repeatCount="indefinite" />
      </path>
    </svg>
  );
};

interface ProjectManagementProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const ProjectManagement = ({ selectedFeatures, toggleFeature }: ProjectManagementProps) => {
  const isSelected = selectedFeatures.includes("Project Management");
  
  const features = [
    {
      icon: PMPIcon,
      title: "PMP® Certification",
      description: "Comprehensive preparation for the globally recognized Project Management Professional certification with 35 contact hours"
    },
    {
      icon: AgileIcon,
      title: "Agile & Methodologies",
      description: "PMI-ACP, Scrum, Kanban, and Lean Six Sigma training for modern project delivery"
    },
    {
      icon: LeadershipIcon,
      title: "Leadership Skills",
      description: "Cross-cultural team management, communication planning, motivation, and negotiation skills"
    },
    {
      icon: CCRIcon,
      title: "CCR Support",
      description: "Earn PDUs through technical, leadership, and strategic courses to maintain your certification"
    }
  ];

  const featureColors = ['#60A5FA', '#FB923C', '#A78BFA', '#4ADE80'];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight pb-2">
          Project Management
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
          Prepare for PMP® certification and meet continuing certification requirements (CCR) with StormWind's Project Management All Access Bundle. Featuring EPIC LIVE classes with expert instructor Ashley Hunt, 24-7 Instant Replay recordings, practice exams, 1:1 mentoring, and downloadable project templates. Earn Professional Development Units (PDUs) across technical, leadership, and strategic competencies to maintain your certification.
        </p>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2"
        >
          <Link to="/project-management">Learn More</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                to="/project-management"
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

export default ProjectManagement;
