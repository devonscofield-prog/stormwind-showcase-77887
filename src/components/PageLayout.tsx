import { ReactNode, ComponentType } from "react";
import { Link } from "react-router-dom";
import { Home, LucideIcon } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbItemConfig {
  label: string;
  href?: string;
}

export interface PageLayoutProps {
  /** Page title displayed in hero section */
  title?: string;
  /** Page description displayed below title */
  description?: string;
  /** Breadcrumb items - last item is always the current page */
  breadcrumbs: BreadcrumbItemConfig[];
  /** Optional icon displayed alongside title */
  titleIcon?: LucideIcon;
  /** Optional content rendered in hero section (e.g., buttons) */
  heroActions?: ReactNode;
  /** Main page content */
  children: ReactNode;
  /** Background style variant */
  backgroundVariant?: "default" | "gradient" | "dark";
  /** Custom background className */
  backgroundClassName?: string;
  /** Container max-width variant */
  containerSize?: "default" | "narrow" | "wide" | "full";
  /** Hero section alignment */
  heroAlign?: "center" | "left";
  /** Additional className for the hero section */
  heroClassName?: string;
  /** Hide the hero section entirely */
  hideHero?: boolean;
  /** Custom content wrapper className */
  contentClassName?: string;
  /** Custom background component (e.g., TechBackground) */
  BackgroundComponent?: ComponentType;
  /** Custom breadcrumb text color class for dark themes */
  breadcrumbClassName?: string;
}

const containerSizes = {
  narrow: "max-w-2xl",
  default: "max-w-7xl",
  wide: "max-w-[90rem]",
  full: "max-w-full",
};

const backgroundVariants = {
  default: "bg-background",
  gradient: "bg-gradient-to-b from-background via-primary/5 to-background",
  dark: "bg-[#0f1419]",
};

export const PageLayout = ({
  title,
  description,
  breadcrumbs,
  titleIcon: TitleIcon,
  heroActions,
  children,
  backgroundVariant = "default",
  backgroundClassName,
  containerSize = "default",
  heroAlign = "center",
  heroClassName,
  hideHero = false,
  contentClassName,
  BackgroundComponent,
  breadcrumbClassName,
}: PageLayoutProps) => {
  const bgClass = backgroundClassName || backgroundVariants[backgroundVariant];

  const content = (
    <>
      <Navigation />

      <div className={`container mx-auto px-4 pt-32 pb-16 ${containerSizes[containerSize]}`}>
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className={`flex items-center gap-2 ${breadcrumbClassName || ""}`}>
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((item, index) => (
              <span key={item.label} className="contents">
                <BreadcrumbSeparator className={breadcrumbClassName} />
                <BreadcrumbItem>
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage className={breadcrumbClassName}>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={item.href || "#"} className={breadcrumbClassName}>{item.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </span>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Section */}
        {!hideHero && title && (
          <div
            className={`mb-20 animate-fade-in ${
              heroAlign === "center" ? "text-center" : "text-left"
            } ${heroClassName || ""}`}
          >
            {TitleIcon ? (
              <div className={`inline-flex items-center gap-3 mb-6 ${heroAlign === "center" ? "justify-center" : ""}`}>
                <div className="p-3 rounded-2xl bg-primary/10 backdrop-blur-sm">
                  <TitleIcon className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight pb-2">
                  {title}
                </h1>
              </div>
            ) : (
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground leading-tight pb-2">
                {title}
              </h1>
            )}
            {description && (
              <p className={`text-xl text-muted-foreground leading-relaxed mb-8 ${
                heroAlign === "center" ? "max-w-4xl mx-auto" : "max-w-4xl"
              }`}>
                {description}
              </p>
            )}
            {heroActions}
          </div>
        )}

        {/* Main Content */}
        <div className={contentClassName}>{children}</div>
      </div>
    </>
  );

  // If a background component is provided, render with special wrapper structure
  if (BackgroundComponent) {
    return (
      <div className={`min-h-screen ${bgClass} relative`}>
        <BackgroundComponent />
        <div className="relative z-10">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {content}
    </div>
  );
};

export default PageLayout;
