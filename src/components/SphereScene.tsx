import { useMemo } from "react";
import { sphereSvg } from "@/lib/sphereScene";

/** Decorative neural-sphere illustration for the AI & ML Training hero (Nebula theme). */
export const SphereScene = () => {
  const markup = useMemo(() => sphereSvg(), []);

  return (
    <div className="grid justify-items-center">
      <svg
        viewBox="-300 -240 600 480"
        aria-hidden="true"
        focusable="false"
        className="block h-auto w-full max-w-[540px] overflow-visible"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </div>
  );
};

export default SphereScene;