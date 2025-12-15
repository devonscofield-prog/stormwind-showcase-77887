import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureListItemSize = "xs" | "sm" | "md";

interface FeatureListItemBaseProps {
  /** Additional className for the container */
  className?: string;
  /** Icon color variant */
  colorVariant?: "primary" | "teal";
  /** Size variant */
  size?: FeatureListItemSize;
}

interface FeatureListItemSimple extends FeatureListItemBaseProps {
  /** Simple text content */
  text: string;
  title?: never;
  description?: never;
}

interface FeatureListItemWithDescription extends FeatureListItemBaseProps {
  /** Title text */
  title: string;
  /** Description text */
  description: string;
  text?: never;
}

export type FeatureListItemProps = FeatureListItemSimple | FeatureListItemWithDescription;

const sizeConfig = {
  xs: {
    icon: "w-3.5 h-3.5 mt-1",
    text: "text-xs",
    title: "text-sm font-semibold",
    description: "text-xs",
    gap: "gap-2",
  },
  sm: {
    icon: "w-5 h-5 mt-0.5",
    text: "text-sm",
    title: "text-sm font-semibold",
    description: "text-xs",
    gap: "gap-3",
  },
  md: {
    icon: "w-5 h-5 mt-1",
    text: "text-base",
    title: "font-semibold",
    description: "text-sm",
    gap: "gap-3",
  },
};

const colorConfig = {
  primary: "text-primary",
  teal: "text-[#4FD1C5]",
};

export const FeatureListItem = ({
  className,
  colorVariant = "primary",
  size = "md",
  ...props
}: FeatureListItemProps) => {
  const sizes = sizeConfig[size];
  const iconColor = colorConfig[colorVariant];

  // Simple text variant
  if ("text" in props && props.text) {
    return (
      <div className={cn("flex items-start", sizes.gap, className)}>
        <CheckCircle2 className={cn(sizes.icon, iconColor, "flex-shrink-0")} />
        <span className={cn(sizes.text, colorVariant === "teal" ? "text-foreground dark:text-gray-300" : "text-muted-foreground")}>
          {props.text}
        </span>
      </div>
    );
  }

  // Title + description variant
  if ("title" in props && props.title) {
    return (
      <div className={cn("flex items-start", sizes.gap, className)}>
        <CheckCircle2 className={cn(sizes.icon, iconColor, "flex-shrink-0")} />
        <div>
          <p className={sizes.title}>{props.title}</p>
          <p className={cn(sizes.description, "text-muted-foreground")}>{props.description}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default FeatureListItem;
