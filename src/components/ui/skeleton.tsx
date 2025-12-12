import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-md bg-primary/10 relative overflow-hidden",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent",
        "before:animate-[shimmer_2s_infinite]",
        "before:-translate-x-full",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
