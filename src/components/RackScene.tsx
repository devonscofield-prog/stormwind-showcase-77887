import { useMemo } from "react";
import { rackSvg } from "@/lib/rackScene";

/** Decorative front-on network rack illustration for the Networking hero. */
export const RackScene = () => {
  const markup = useMemo(() => rackSvg(), []);

  return (
    <div className="grid justify-items-center">
      <svg
        viewBox="0 0 340 620"
        aria-hidden="true"
        focusable="false"
        className="block h-auto w-full max-w-[380px] overflow-visible"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </div>
  );
};

export default RackScene;
