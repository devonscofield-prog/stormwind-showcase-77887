import { useState, useRef, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  label: string;
  to: string;
  icon: LucideIcon;
  description?: string;
}

interface MenuGroupProps {
  title: string;
  items: MenuItemProps[];
}

interface MegaMenuProps {
  trigger: string;
  groups: MenuGroupProps[];
  className?: string;
}

const MenuItem = ({ label, to, icon: Icon, description }: MenuItemProps) => (
  <Link
    to={to}
    className="group flex items-start gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-white/5 dark:hover:bg-white/5"
  >
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
      <Icon className="h-4 w-4" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {label}
      </span>
      {description && (
        <span className="text-xs text-muted-foreground line-clamp-1">
          {description}
        </span>
      )}
    </div>
  </Link>
);

const MenuGroup = ({ title, items }: MenuGroupProps) => (
  <div className="flex flex-col">
    <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {title}
    </h4>
    <div className="flex flex-col gap-0.5">
      {items.map((item) => (
        <MenuItem key={item.to} {...item} />
      ))}
    </div>
  </div>
);

export const MegaMenu = ({ trigger, groups, className }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Calculate grid columns based on number of groups
  const gridCols = groups.length === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        variant="ghost"
        className={cn(
          "text-gray-100 hover:text-primary transition-colors gap-1",
          isOpen && "text-primary",
          className
        )}
      >
        {trigger}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Button>

      {/* Mega Menu Dropdown */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50",
          "opacity-0 invisible translate-y-2",
          "transition-all duration-200 ease-out",
          isOpen && "opacity-100 visible translate-y-0"
        )}
      >
        <div
          className={cn(
            "rounded-xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/20",
            "p-6",
            "min-w-[600px]"
          )}
        >
          <div className={cn("grid gap-8", gridCols)}>
            {groups.map((group) => (
              <MenuGroup key={group.title} {...group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
