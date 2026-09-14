import type { CSSProperties } from "react";
import wordIcon from "@/assets/apps/word.webp.asset.json";
import excelIcon from "@/assets/apps/excel.webp.asset.json";
import powerpointIcon from "@/assets/apps/powerpoint.webp.asset.json";
import teamsIcon from "@/assets/apps/teams.webp.asset.json";
import sharepointIcon from "@/assets/apps/sharepoint.webp.asset.json";
import accessIcon from "@/assets/apps/access.webp.asset.json";
import powerbiIcon from "@/assets/apps/powerbi.webp.asset.json";
import copilotIcon from "@/assets/apps/copilot.webp.asset.json";
import chatgptIcon from "@/assets/apps/chatgpt.webp.asset.json";
import claudeIcon from "@/assets/apps/claude.webp.asset.json";
import acrobatIcon from "@/assets/apps/acrobat.webp.asset.json";
import photoshopIcon from "@/assets/apps/photoshop.webp.asset.json";

const APPS: { slug: string; name: string; src?: string }[] = [
  { slug: "word", name: "Word", src: wordIcon.url },
  { slug: "excel", name: "Excel", src: excelIcon.url },
  { slug: "powerpoint", name: "PowerPoint", src: powerpointIcon.url },
  { slug: "teams", name: "Teams", src: teamsIcon.url },
  { slug: "sharepoint", name: "SharePoint", src: sharepointIcon.url },
  { slug: "access", name: "Access", src: accessIcon.url },
  { slug: "powerbi", name: "Power BI", src: powerbiIcon.url },
  { slug: "copilot", name: "Copilot", src: copilotIcon.url },
  { slug: "chatgpt", name: "ChatGPT", src: chatgptIcon.url },
  { slug: "claude", name: "Claude", src: claudeIcon.url },
  { slug: "acrobat", name: "Acrobat", src: acrobatIcon.url },
  { slug: "photoshop", name: "Photoshop", src: photoshopIcon.url },
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