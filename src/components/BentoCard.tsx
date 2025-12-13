import { ReactNode, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Icon component */
  icon?: LucideIcon;
  /** Additional className */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Children to render inside the card */
  children?: ReactNode;
  /** Grid span for columns (1 or 2) */
  colSpan?: 1 | 2;
  /** Grid span for rows (1 or 2) */
  rowSpan?: 1 | 2;
}

export const BentoCard = ({
  title,
  description,
  icon: Icon,
  className,
  onClick,
  children,
  colSpan = 1,
  rowSpan = 1,
}: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const spanClasses = cn(
    colSpan === 2 && "md:col-span-2",
    rowSpan === 2 && "md:row-span-2"
  );

  return (
    <div
      ref={cardRef}
      className={cn(
        // Base styles
        "relative overflow-hidden rounded-2xl p-6",
        // Dark glass aesthetic
        "bg-black/40 backdrop-blur-xl",
        // Border with hover glow
        "border border-transparent",
        isHovered ? "border-primary/50 shadow-lg shadow-primary/10" : "border-white/10",
        // Smooth transitions
        "transition-all duration-300 ease-out",
        // Cursor
        onClick && "cursor-pointer",
        // Grid spans
        spanClasses,
        // Row span height adjustment
        rowSpan === 2 && "min-h-[320px]",
        className
      )}
      style={{ transform: transform || undefined }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Watermark icon (large, faded, bottom-right) */}
      {Icon && (
        <div className="absolute -bottom-8 -right-8 pointer-events-none">
          <Icon 
            className={cn(
              "w-40 h-40 transition-all duration-500",
              isHovered ? "text-primary/15 scale-110" : "text-white/5"
            )} 
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Small icon (top-left) */}
        {Icon && (
          <div className={cn(
            "inline-flex p-3 rounded-xl mb-4 transition-all duration-300",
            isHovered ? "bg-primary/20" : "bg-white/5"
          )}>
            <Icon className={cn(
              "w-6 h-6 transition-colors duration-300",
              isHovered ? "text-primary" : "text-primary/70"
            )} />
          </div>
        )}

        {/* Title */}
        <h3 className={cn(
          "text-xl font-bold mb-3 tracking-tight transition-colors duration-300",
          isHovered ? "text-white" : "text-white/90"
        )}>
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className={cn(
            "text-sm leading-relaxed transition-colors duration-300",
            isHovered ? "text-white/80" : "text-white/60"
          )}>
            {description}
          </p>
        )}

        {/* Children */}
        {children}
      </div>

      {/* Gradient overlay on hover */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-300 pointer-events-none",
          isHovered ? "opacity-100" : "opacity-0"
        )} 
      />
    </div>
  );
};

export default BentoCard;
