import { ReactNode, ComponentType } from "react";
import { Link } from "react-router-dom";

export interface AnimatedIconProps {
  color: string;
  isHovered: boolean;
}

interface AnimatedFeatureCardProps {
  to: string;
  icon: ReactNode | ComponentType<AnimatedIconProps>;
  title: string;
  description: string;
  className?: string;
}

const CARD_SURFACE =
  "relative overflow-hidden rounded-2xl p-6 ring-1 ring-inset ring-border " +
  "bg-[linear-gradient(155deg,hsl(160_16%_13%)_0%,hsl(155_8%_10%)_62%,hsl(150_6%_10%)_100%)] " +
  "transition-[background,box-shadow] duration-150 hover:ring-primary/70";

const AnimatedFeatureCard = ({
  to,
  icon,
  title,
  description,
  className = "",
}: AnimatedFeatureCardProps) => {
  const renderIcon = () => {
    if (typeof icon === "function") {
      const IconComponent = icon as ComponentType<AnimatedIconProps>;
      return <IconComponent color="currentColor" isHovered={false} />;
    }
    return icon;
  };

  return (
    <Link to={to} className={`${CARD_SURFACE} block ${className}`}>
      {/* Watermark glyph */}
      <div className="absolute -right-3.5 -bottom-4 opacity-[0.11] pointer-events-none text-primary">
        <div className="w-[124px] h-[124px] [&>svg]:w-full [&>svg]:h-full">
          {renderIcon()}
        </div>
      </div>

      <div className="relative flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">{renderIcon()}</div>
          </div>
          <h4 className="text-lg font-semibold tracking-tight text-foreground">{title}</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

export { AnimatedFeatureCard, CARD_SURFACE };
export default AnimatedFeatureCard;
