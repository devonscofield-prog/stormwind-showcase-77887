import { useMemo } from "react";
import { dataIso } from "@/lib/isoScene";

/**
 * Isometric data-platform scene for the Data Science Pro hero.
 * Renders a decorative SVG plus floating HTML labels.
 */
export const DataIsoScene = () => {
  const markup = useMemo(() => dataIso(), []);

  return (
    <div className="iso relative">
      <svg
        viewBox="0 0 660 470"
        aria-hidden="true"
        focusable="false"
        className="block h-auto w-full overflow-hidden"
        dangerouslySetInnerHTML={{ __html: markup }}
      />

      <span className="lab bob" style={{ left: "2%", top: "53%" }}>
        <i style={{ background: "#CC2927" }} />
        SQL Server, T-SQL &amp; Excel
      </span>
      <span className="lab bob2" style={{ right: "2%", top: "58%" }}>
        <i style={{ background: "#E3B505" }} />
        Power BI
      </span>
      <span className="lab bob2" style={{ left: "63%", top: "24%" }}>
        <i style={{ background: "#2F8FE0" }} />
        Azure, Fabric &amp; Snowflake
      </span>
      <span className="lab live bob" style={{ left: "16%", bottom: "8%" }}>
        <i style={{ background: "#742774" }} />
        Power Platform <small>· Apps, Automate &amp; Copilot</small>
      </span>
    </div>
  );
};

export default DataIsoScene;
