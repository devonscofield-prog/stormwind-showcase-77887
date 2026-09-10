import { useMemo } from "react";
import { heroIso } from "@/lib/isoScene";

/**
 * Isometric cloud-platform scene for the Cloud Training hero.
 * Renders a decorative SVG plus floating HTML labels.
 */
export const CloudIsoScene = () => {
  const markup = useMemo(() => heroIso(), []);

  return (
    <div className="iso relative">
      <svg
        viewBox="0 0 660 470"
        aria-hidden="true"
        focusable="false"
        className="block h-auto w-full overflow-hidden"
        dangerouslySetInnerHTML={{ __html: markup }}
      />

      <span className="lab bob" style={{ left: "3%", top: "47%" }}>
        <i style={{ background: "#2F8FE0" }} />
        Microsoft Azure
      </span>
      <span className="lab bob2" style={{ right: "2%", top: "58%" }}>
        <i style={{ background: "#E8931C" }} />
        Amazon Web Services
      </span>
      <span className="lab bob2" style={{ left: "63%", top: "24%" }}>
        <i style={{ background: "#E0483C" }} />
        Google Cloud
      </span>
      <span className="lab live bob" style={{ left: "16%", bottom: "8%" }}>
        <i style={{ background: "#1A9671" }} />
        Azure Range <small>· live · 3 labs running</small>
      </span>
    </div>
  );
};

export default CloudIsoScene;
