import { ReactNode, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ProgressiveImage } from "@/components/ProgressiveImage";
import { FeatureListItem } from "@/components/FeatureListItem";
import { cn } from "@/lib/utils";

interface TechCardBaseProps {
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Additional className */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Whether to show hover scale effect */
  hoverScale?: boolean;
  /** Children to render inside the card */
  children?: ReactNode;
}

interface TechCardImageProps extends TechCardBaseProps {
  variant: "image";
  /** Image source */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
}

interface TechCardIconProps extends TechCardBaseProps {
  variant: "icon";
  /** Icon component */
  icon: LucideIcon;
  /** Icon size class */
  iconSize?: "sm" | "md" | "lg";
}

interface TechCardFeatureProps extends TechCardBaseProps {
  variant: "feature";
  /** Optional icon for watermark effect */
  icon?: LucideIcon;
}

interface TechCardTechListProps extends Omit<TechCardBaseProps, "description"> {
  variant: "techlist";
  /** List of technologies/items */
  items: string[];
  /** Number of columns */
  columns?: 2 | 3;
  /** Optional icon for watermark effect */
  icon?: LucideIcon;
}

interface TechCardVideoProps extends TechCardBaseProps {
  variant: "video";
  /** Video component to render */
  videoComponent: ReactNode;
  /** Instructor name */
  instructor?: string;
}

export type TechCardProps =
  | TechCardImageProps
  | TechCardIconProps
  | TechCardFeatureProps
  | TechCardTechListProps
  | TechCardVideoProps;

const iconSizes = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
};

// Hook for 3D tilt effect
const useTiltEffect = () => {
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

  return { cardRef, transform, isHovered, handleMouseMove, handleMouseLeave, handleMouseEnter };
};

// Dark glass card wrapper with tilt effect
const GlassCard = ({
  children,
  className,
  onClick,
  icon: Icon,
  isHovered,
  ...tiltProps
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  isHovered: boolean;
  cardRef: React.RefObject<HTMLDivElement>;
  transform: string;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: () => void;
  handleMouseEnter: () => void;
}) => {
  const { cardRef, transform, handleMouseMove, handleMouseLeave, handleMouseEnter } = tiltProps;

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-2xl p-6",
        "bg-card/80 dark:bg-black/40 backdrop-blur-xl",
        "border border-transparent",
        isHovered ? "border-primary/50 shadow-lg shadow-primary/10" : "border-border dark:border-white/10",
        "transition-all duration-300 ease-out",
        onClick && "cursor-pointer",
        className
      )}
      style={{ transform: transform || undefined }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Watermark icon */}
      {Icon && (
        <div className="absolute -bottom-8 -right-8 pointer-events-none">
          <Icon 
            className={cn(
              "w-40 h-40 transition-all duration-500",
              isHovered ? "text-primary/15 scale-110" : "text-primary/5 dark:text-white/5"
            )} 
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
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

export const TechCard = (props: TechCardProps) => {
  const {
    title,
    className,
    onClick,
    children,
  } = props;

  const tiltEffect = useTiltEffect();

  // Image variant
  if (props.variant === "image") {
    return (
      <GlassCard 
        className={cn("p-0", className)} 
        onClick={onClick}
        isHovered={tiltEffect.isHovered}
        {...tiltEffect}
      >
        <ProgressiveImage
          src={props.imageSrc}
          alt={props.imageAlt}
          className="w-full h-48 object-cover"
          blurAmount={25}
          transitionDuration={600}
        />
        <div className="p-6">
          <h3 className={cn(
            "text-xl font-bold mb-3 tracking-tight transition-colors duration-300",
            tiltEffect.isHovered ? "text-foreground" : "text-foreground/90 dark:text-white/90"
          )}>{title}</h3>
          {props.description && (
            <p className={cn(
              "text-sm leading-relaxed transition-colors duration-300",
              tiltEffect.isHovered ? "text-muted-foreground" : "text-muted-foreground/80 dark:text-white/60"
            )}>{props.description}</p>
          )}
          {children}
        </div>
      </GlassCard>
    );
  }

  // Icon variant
  if (props.variant === "icon") {
    const IconComponent = props.icon;
    const sizeClass = iconSizes[props.iconSize || "lg"];

    return (
      <GlassCard 
        className={className} 
        onClick={onClick}
        icon={IconComponent}
        isHovered={tiltEffect.isHovered}
        {...tiltEffect}
      >
        {/* Small icon top-left */}
        <div className={cn(
          "inline-flex p-3 rounded-xl mb-4 transition-all duration-300",
          tiltEffect.isHovered ? "bg-primary/20" : "bg-muted dark:bg-white/5"
        )}>
          <IconComponent className={cn(
            "w-6 h-6 transition-colors duration-300",
            tiltEffect.isHovered ? "text-primary" : "text-primary/70"
          )} />
        </div>

        <h3 className={cn(
          "text-xl font-bold mb-3 tracking-tight transition-colors duration-300",
          tiltEffect.isHovered ? "text-foreground" : "text-foreground/90 dark:text-white/90"
        )}>{title}</h3>
        {props.description && (
          <p className={cn(
            "text-sm leading-relaxed transition-colors duration-300",
            tiltEffect.isHovered ? "text-muted-foreground" : "text-muted-foreground/80 dark:text-white/60"
          )}>{props.description}</p>
        )}
        {children}
      </GlassCard>
    );
  }

  // Feature variant
  if (props.variant === "feature") {
    const IconComponent = props.icon;

    return (
      <GlassCard 
        className={className} 
        onClick={onClick}
        icon={IconComponent}
        isHovered={tiltEffect.isHovered}
        {...tiltEffect}
      >
        {IconComponent && (
          <div className={cn(
            "inline-flex p-3 rounded-xl mb-4 transition-all duration-300",
            tiltEffect.isHovered ? "bg-primary/20" : "bg-muted dark:bg-white/5"
          )}>
            <IconComponent className={cn(
              "w-6 h-6 transition-colors duration-300",
              tiltEffect.isHovered ? "text-primary" : "text-primary/70"
            )} />
          </div>
        )}

        <h3 className={cn(
          "text-xl font-bold mb-3 tracking-tight transition-colors duration-300",
          tiltEffect.isHovered ? "text-foreground" : "text-foreground/90 dark:text-white/90"
        )}>{title}</h3>
        {props.description && (
          <p className={cn(
            "text-sm leading-relaxed transition-colors duration-300",
            tiltEffect.isHovered ? "text-muted-foreground" : "text-muted-foreground/80 dark:text-white/60"
          )}>{props.description}</p>
        )}
        {children}
      </GlassCard>
    );
  }

  // Tech list variant
  if (props.variant === "techlist") {
    const cols = props.columns || 3;
    const IconComponent = props.icon;

    return (
      <GlassCard 
        className={cn("p-8", className)} 
        onClick={onClick}
        icon={IconComponent}
        isHovered={tiltEffect.isHovered}
        {...tiltEffect}
      >
        {IconComponent && (
          <div className={cn(
            "inline-flex p-3 rounded-xl mb-4 transition-all duration-300",
            tiltEffect.isHovered ? "bg-primary/20" : "bg-muted dark:bg-white/5"
          )}>
            <IconComponent className={cn(
              "w-6 h-6 transition-colors duration-300",
              tiltEffect.isHovered ? "text-primary" : "text-primary/70"
            )} />
          </div>
        )}

        <h3 className={cn(
          "text-2xl font-bold mb-6 tracking-tight transition-colors duration-300",
          tiltEffect.isHovered ? "text-foreground" : "text-foreground/90 dark:text-white/90"
        )}>{title}</h3>
        <div className={cn("grid gap-4", columnClasses[cols])}>
          {props.items.map((item) => (
            <FeatureListItem key={item} text={item} colorVariant="teal" size="sm" />
          ))}
        </div>
        {children}
      </GlassCard>
    );
  }

  // Video variant
  if (props.variant === "video") {
    return (
      <GlassCard 
        className={cn("p-0 group", className)} 
        onClick={onClick}
        isHovered={tiltEffect.isHovered}
        {...tiltEffect}
      >
        {props.videoComponent}
        <div className="p-6">
          <h3 className={cn(
            "text-xl font-bold mb-2 tracking-tight transition-colors duration-300",
            tiltEffect.isHovered ? "text-primary" : "text-foreground/90 dark:text-white/90"
          )}>
            {title}
          </h3>
          {props.instructor && (
            <p className="text-muted-foreground dark:text-white/60 text-sm mb-3">
              Instructor: <span className="text-primary font-semibold">{props.instructor}</span>
            </p>
          )}
          {props.description && (
            <p className={cn(
              "text-sm leading-relaxed transition-colors duration-300",
              tiltEffect.isHovered ? "text-muted-foreground" : "text-muted-foreground/80 dark:text-white/60"
            )}>{props.description}</p>
          )}
          {children}
        </div>
      </GlassCard>
    );
  }

  return null;
};

export default TechCard;
