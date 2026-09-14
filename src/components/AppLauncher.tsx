import type { CSSProperties } from "react";
import wordIcon from "@/assets/apps/word.webp.asset.json";
import excelIcon from "@/assets/apps/excel.webp.asset.json";
import powerpointIcon from "@/assets/apps/powerpoint.webp.asset.json";
import teamsIcon from "@/assets/apps/teams.webp.asset.json";

const APPS: { slug: string; name: string; src?: string }[] = [
  { slug: "word", name: "Word", src: wordIcon.url },
  { slug: "excel", name: "Excel", src: excelIcon.url },
  { slug: "powerpoint", name: "PowerPoint", src: powerpointIcon.url },
  { slug: "teams", name: "Teams", src: teamsIcon.url },
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
 * Uploaded icons are served from the Lovable Assets CDN. Remaining tiles
 * fall back to /public/apps/<slug>.png, and then to a striped placeholder
 * showing the app name if the file is missing.
 */
export const AppLauncher = () => (
  <div className="app-stage" aria-hidden="true">
    <div className="app-launch">
      {APPS.map((app, i) => (
        <div key={app.slug} className="app-tile" style={{ "--i": i } as CSSProperties}>
          <img
            src={app.src ?? `/apps/${app.slug}.png`}
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