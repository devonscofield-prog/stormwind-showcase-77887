import { useState, useRef, ReactNode, ComponentType, useCallback } from "react";
import { Link } from "react-router-dom";

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export interface AnimatedIconProps {
  color: string;
  isHovered: boolean;
}

interface AnimatedFeatureCardProps {
  to: string;
  color: string;
  icon: ReactNode | ComponentType<AnimatedIconProps>;
  title: string;
  description: string;
  className?: string;
}

const AnimatedFeatureCard = ({
  to,
  color,
  icon,
  title,
  description,
  className = "",
}: AnimatedFeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const particleIdRef = useRef(0);
  const lastParticleTime = useRef(0);

  // Throttled mouse move handler - only create particles every 100ms
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current || !isHovered) return;
    
    const now = Date.now();
    if (now - lastParticleTime.current < 100) return;
    lastParticleTime.current = now;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticle = {
      id: particleIdRef.current++,
      x,
      y,
      opacity: 0.8,
      size: Math.random() * 3 + 2,
    };

    setParticles((prev) => {
      // Keep only last 8 particles and fade them
      const updated = prev
        .map((p) => ({ ...p, opacity: p.opacity - 0.15 }))
        .filter((p) => p.opacity > 0)
        .slice(-8);
      return [...updated, newParticle];
    });
  }, [isHovered]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setParticles([]);
  }, []);

  // Render icon - supports both ReactNode and Component with isHovered prop
  const renderIcon = () => {
    if (typeof icon === 'function') {
      const IconComponent = icon as ComponentType<AnimatedIconProps>;
      return <IconComponent color={color} isHovered={isHovered} />;
    }
    return icon;
  };

  return (
    <Link
      ref={cardRef}
      to={to}
      className={`glass-feature-card group relative overflow-hidden rounded-lg p-6 transition-transform duration-200 cursor-pointer block hover:scale-105 hover:-translate-y-1 border border-white/10 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Particle Trail - simplified */}
      {particles.map((particle) => (
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
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Animated Icon with Glow */}
      <div className="mb-6 inline-flex relative z-10">
        <div
          className="absolute inset-0 blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-200"
          style={{ backgroundColor: color }}
        />
        <div className="relative transition-transform duration-200 group-hover:scale-110">
          {renderIcon()}
        </div>
      </div>

      <h4
        className="text-xl font-bold mb-3 relative z-10"
        style={{ color: color }}
      >
        {title}
      </h4>

      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
        {description}
      </p>
    </Link>
  );
};

export { AnimatedFeatureCard };
export default AnimatedFeatureCard;
