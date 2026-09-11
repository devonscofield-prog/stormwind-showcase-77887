import { useMemo } from "react";
import { ledStrip } from "@/lib/rackScene";

export const LedStrip = ({ seed }: { seed: number }) => {
  const markup = useMemo(() => ledStrip(seed), [seed]);

  return (
    <svg
      viewBox="0 0 120 12"
      aria-hidden="true"
      focusable="false"
      className="h-3 flex-1"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
};

export default LedStrip;
