import { useMemo } from "react";
import { shieldSvg, phishMiniSvg } from "@/lib/shieldScene";

/** Decorative shield-over-devices illustration for the Security Awareness hero. */
export const ShieldScene = () => {
  const markup = useMemo(() => shieldSvg(), []);

  return (
    <div className="grid justify-items-center">
      <svg
        viewBox="0 0 560 460"
        aria-hidden="true"
        focusable="false"
        className="block h-auto w-full max-w-[560px] overflow-visible"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </div>
  );
};

/** Small email → AI → shield pipeline for the StormAI Phishing cross-link panel. */
export const PhishMini = () => {
  const markup = useMemo(() => phishMiniSvg(), []);

  return (
    <svg
      viewBox="0 0 300 160"
      aria-hidden="true"
      focusable="false"
      className="block h-auto w-full max-w-[340px] justify-self-center overflow-visible"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
};

export default ShieldScene;