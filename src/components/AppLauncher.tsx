import type { CSSProperties } from "react";

const APPS: { slug: string; name: string }[] = [
  { slug: "word", name: "Word" },
  { slug: "excel", name: "Excel" },
  { slug: "powerpoint", name: "PowerPoint" },
  { slug: "teams", name: "Teams" },
  { slug: "sharepoint", name: "SharePoint" },
  { slug: "access", name: "Access" },
  { slug: "powerbi", name: "Power BI" },
  { slug: "copilot", name: "Copilot" },
  { slug: "chatgpt", name: "ChatGPT" },
  { slug: "claude", name: "Claude" },
  { slug: "acrobat", name: "Acrobat" },
  { slug: "photoshop", name: "Photoshop" },
];

/**
 * Tilted 3D grid of application tiles for the Enterprise End User hero.
 * Icons are served from /public/apps/<slug>.png. If a file is missing the tile
 * falls back to a striped placeholder showing the app name.
 */
export const AppLauncher = () => (
  <div className="app-stage" aria-hidden="true">
    <div className="app-launch">
      {APPS.map((app, i) => (
        <div key={app.slug} className="app-tile" style={{ "--i": i } as CSSProperties}>
          <img
            src={`/apps/${app.slug}.png`}
            alt=""
            loading="lazy"
            onError={(e) => e.currentTarget.parentElement?.classList.add("missing")}
          />
          <span className="app-ph">{app.name}</span>
        </div>
      ))}
    </div>
    <div className="app-floor" />
  </div>
);