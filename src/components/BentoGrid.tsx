import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  /** Children to render inside the grid */
  children: ReactNode;
  /** Additional className */
  className?: string;
  /** Number of columns on large screens */
  columns?: 3 | 4;
}

export const BentoGrid = ({
  children,
  className,
  columns = 4,
}: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        "grid-cols-1 md:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
        "auto-rows-fr",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoGrid;
