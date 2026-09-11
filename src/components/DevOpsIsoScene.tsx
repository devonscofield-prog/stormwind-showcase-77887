import { useMemo } from "react";
import { devopsIso } from "@/lib/isoScene";

/**
 * Isometric DevOps scene for the DevOps Training hero.
 * Renders a decorative SVG plus floating HTML labels.
 */
export const DevOpsIsoScene = () => {
  const markup = useMemo(() => devopsIso(), []);

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
        <i style={{ background: "#326CE5" }} />
        Containerization
      </span>
      <span className="lab bob2" style={{ right: "2%", top: "58%" }}>
        <i style={{ background: "#7B42BC" }} />
        Infrastructure as Code
      </span>
      <span className="lab bob2" style={{ left: "63%", top: "24%" }}>
        <i style={{ background: "#EF7B4D" }} />
        CI/CD &amp; GitOps
      </span>
      <span className="lab live bob" style={{ left: "16%", bottom: "8%" }}>
        <i style={{ background: "#4F46E5" }} />
        DevOps Playgrounds <small>· 4 environments</small>
      </span>
    </div>
  );
};

export default DevOpsIsoScene;
