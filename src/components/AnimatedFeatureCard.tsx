import { useState, useRef, ReactNode, ComponentType, useCallback } from "react";
import { Link } from "react-router-dom";

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
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Handle mouse move for tilt effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt effect
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  // Render icon - supports both ReactNode and Component with isHovered prop
  const renderIcon = () => {
    if (typeof icon === 'function') {
      const IconComponent = icon as ComponentType<AnimatedIconProps>;
      return <IconComponent color={color} isHovered={isHovered} />;
    }
    return icon;
  };

  // Render watermark icon (larger, faded in corner)
  const renderWatermarkIcon = () => {
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
      className={`group relative overflow-hidden rounded-xl p-6 cursor-pointer block
        bg-card/80 dark:bg-black/40 backdrop-blur-xl
        border border-border dark:border-white/10 hover:border-teal-500/50
        transition-all duration-300 ease-out
        ${className}`}
      style={tiltStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Watermark Icon - large, faded in bottom-right */}
      <div
        className="absolute -bottom-4 -right-4 opacity-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.15]"
        style={{ color }}
      >
        <div className="w-32 h-32 [&>svg]:w-full [&>svg]:h-full">
          {renderWatermarkIcon()}
        </div>
      </div>

      {/* Small Icon with Glow - top left */}
      <div className="mb-4 inline-flex relative z-10">
        <div
          className="absolute inset-0 blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-200"
          style={{ backgroundColor: color }}
        />
        <div
          className="relative transition-transform duration-200 group-hover:scale-110"
          style={{ color }}
        >
          {renderIcon()}
        </div>
      </div>

      {/* Title */}
      <h4
        className="text-lg font-semibold mb-2 relative z-10 tracking-tight"
        style={{ color }}
      >
        {title}
      </h4>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
        {description}
      </p>

      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}10 0%, transparent 70%)`,
        }}
      />
    </Link>
  );
};

export { AnimatedFeatureCard };
export default AnimatedFeatureCard;
