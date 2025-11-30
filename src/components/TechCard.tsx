import { ReactNode } from "react";
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
}

interface TechCardTechListProps extends Omit<TechCardBaseProps, "description"> {
  variant: "techlist";
  /** List of technologies/items */
  items: string[];
  /** Number of columns */
  columns?: 2 | 3;
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

export const TechCard = (props: TechCardProps) => {
  const {
    title,
    className,
    onClick,
    hoverScale = true,
    children,
  } = props;

  const baseClasses = cn(
    "bg-[#1a1f2e] border-gray-700 overflow-hidden transition-all duration-300",
    "hover:border-[#4FD1C5]",
    hoverScale && "hover:scale-105",
    onClick && "cursor-pointer",
    className
  );

  // Image variant
  if (props.variant === "image") {
    return (
      <Card className={baseClasses} onClick={onClick}>
        <ProgressiveImage
          src={props.imageSrc}
          alt={props.imageAlt}
          className="w-full h-48 object-cover"
          blurAmount={25}
          transitionDuration={600}
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          {props.description && (
            <p className="text-gray-400 text-sm mb-4">{props.description}</p>
          )}
          {children}
        </div>
      </Card>
    );
  }

  // Icon variant
  if (props.variant === "icon") {
    const IconComponent = props.icon;
    const sizeClass = iconSizes[props.iconSize || "lg"];

    return (
      <div
        className={cn(
          "bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 transition-all duration-300",
          "hover:border-[#4FD1C5]",
          hoverScale && "hover:scale-105",
          onClick && "cursor-pointer",
          className
        )}
        onClick={onClick}
      >
        <IconComponent className={cn(sizeClass, "text-[#4FD1C5] mb-4")} />
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        {props.description && (
          <p className="text-gray-400 text-sm">{props.description}</p>
        )}
        {children}
      </div>
    );
  }

  // Feature variant (simple title + description)
  if (props.variant === "feature") {
    return (
      <div
        className={cn(
          "bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 transition-all duration-300",
          "hover:border-[#4FD1C5]",
          hoverScale && "hover:scale-105",
          onClick && "cursor-pointer",
          className
        )}
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        {props.description && (
          <p className="text-gray-400">{props.description}</p>
        )}
        {children}
      </div>
    );
  }

  // Tech list variant
  if (props.variant === "techlist") {
    const cols = props.columns || 3;

    return (
      <div
        className={cn(
          "bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 transition-all duration-300",
          "hover:border-[#4FD1C5]",
          hoverScale && "hover:scale-105",
          onClick && "cursor-pointer",
          className
        )}
        onClick={onClick}
      >
        <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
        <div className={cn("grid gap-4", columnClasses[cols])}>
          {props.items.map((item) => (
            <FeatureListItem key={item} text={item} colorVariant="teal" size="sm" />
          ))}
        </div>
        {children}
      </div>
    );
  }

  // Video variant
  if (props.variant === "video") {
    return (
      <div
        className={cn(
          "bg-[#1a1f2e] rounded-lg border border-gray-700 overflow-hidden transition-all duration-300 group",
          "hover:border-[#4FD1C5]",
          hoverScale && "hover:scale-105",
          onClick && "cursor-pointer",
          className
        )}
        onClick={onClick}
      >
        {props.videoComponent}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">
            {title}
          </h3>
          {props.instructor && (
            <p className="text-gray-400 text-sm mb-3">
              Instructor: <span className="text-[#4FD1C5] font-semibold">{props.instructor}</span>
            </p>
          )}
          {props.description && (
            <p className="text-gray-500 text-sm leading-relaxed">{props.description}</p>
          )}
          {children}
        </div>
      </div>
    );
  }

  return null;
};

export default TechCard;
