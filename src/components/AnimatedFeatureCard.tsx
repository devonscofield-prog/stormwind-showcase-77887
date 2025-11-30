import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
}

interface AnimatedFeatureCardProps {
  to: string;
  color: string;
  icon: ReactNode;
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

  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.05 }))
          .filter((p) => p.opacity > 0)
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

    setParticles((prev) => [...prev.slice(-20), newParticle]);
  };

  return (
    <Link
      ref={cardRef}
      to={to}
      className={`glass-feature-card group relative overflow-hidden rounded-lg p-6 transition-all duration-300 cursor-pointer block hover:scale-105 hover:-translate-y-1 border border-white/10 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setParticles([]);
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Particle Trail */}
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
            boxShadow: `0 0 ${particle.size * 2}px ${color}`,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.05s linear",
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
          {icon}
        </div>
      </div>

      <h4
        className="text-xl font-bold mb-3 relative z-10 transition-colors duration-300"
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

export interface AnimatedIconProps {
  color: string;
  isHovered: boolean;
}

export { AnimatedFeatureCard };
export default AnimatedFeatureCard;
