/**
 * Isometric SVG scene helpers (ported from the approved Cloud page mockup).
 * All functions return raw SVG markup strings.
 */

export const S = 25;
export const OX = 335;
export const OY = 140;

export type Pt = [number, number];

export const P = (x: number, y: number, z: number): Pt => [
  OX + (x - y) * 0.866 * S,
  OY + (x + y) * 0.5 * S - z * S,
];

export const poly = (pts: Pt[], fill: string, extra = ""): string =>
  `<path d="M${pts
    .map((p) => p.map((n) => Math.round(n * 100) / 100).join(" "))
    .join("L")}Z" fill="${fill}" stroke="${fill}" stroke-width="0.7" stroke-linejoin="round" shape-rendering="geometricPrecision" ${extra}/>`;

/** Cuboid at grid (x,y,z) with size w (x), d (y), h (z). */
export function cuboid(
  x: number,
  y: number,
  z: number,
  w: number,
  d: number,
  h: number,
  top: string,
  left: string,
  right: string,
  extra = "",
): string {
  const A = P(x, y, z + h);
  const B = P(x + w, y, z + h);
  const C = P(x + w, y + d, z + h);
  const D = P(x, y + d, z + h);
  const E = P(x, y + d, z);
  const F = P(x + w, y + d, z);
  const G = P(x + w, y, z);
  return `<g ${extra}>${poly([D, C, F, E], left)}${poly([C, B, G, F], right)}${poly(
    [A, B, C, D],
    top,
  )}</g>`;
}

export function cylinder(
  x: number,
  y: number,
  z: number,
  r: number,
  h: number,
  top: string,
  side: string,
): string {
  const c1 = P(x, y, z + h);
  const c2 = P(x, y, z);
  const rx = r * 0.866 * S;
  const ry = r * 0.5 * S;
  return `<g><path d="M${c1[0] - rx} ${c1[1]} L${c2[0] - rx} ${c2[1]} A${rx} ${ry} 0 0 0 ${
    c2[0] + rx
  } ${c2[1]} L${c1[0] + rx} ${c1[1]} Z" fill="${side}"/>
    <ellipse cx="${c1[0]}" cy="${c1[1]}" rx="${rx}" ry="${ry}" fill="${top}"/>
    <ellipse cx="${c1[0]}" cy="${c1[1]}" rx="${rx * 0.55}" ry="${
      ry * 0.55
    }" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.2"/></g>`;
}

export function platform(x: number, y: number, w: number, d: number, rim: string): string {
  const sh = P(x + w / 2, y + d / 2, -0.35);
  return (
    `<ellipse cx="${sh[0]}" cy="${sh[1] + 8}" rx="${w * 0.866 * S * 0.62}" ry="${
      w * 0.5 * S * 0.42
    }" fill="#0F1720" opacity=".10" filter="url(#blur)"/>` +
    cuboid(x, y, -0.45, w, d, 0.45, "url(#pt)", "#D6E1EA", "#C4D2DE") +
    `<path d="M${P(x, y, 0).join(" ")}L${P(x + w, y, 0).join(" ")}L${P(x + w, y + d, 0).join(
      " ",
    )}L${P(x, y + d, 0).join(" ")}Z" fill="none" stroke="${rim}" stroke-width="2" opacity=".7"/>`
  );
}

export interface FaceColors {
  t: string;
  l: string;
  r: string;
}

export function rack(
  x: number,
  y: number,
  w: number,
  d: number,
  h: number,
  c: FaceColors,
): string {
  const g = cuboid(x, y, 0, w, d, h, c.t, c.l, c.r);
  let lines = "";
  for (let i = 1; i < h * 3; i++) {
    const a = P(x + w, y, i / 3);
    const b = P(x + w, y + d, i / 3);
    lines += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="rgba(255,255,255,.28)" stroke-width="1"/>`;
    const led = P(x + w, y + d * 0.2, i / 3 + 0.12);
    lines += `<circle cx="${led[0]}" cy="${led[1]}" r="1.6" fill="#B9FBE1"/>`;
  }
  return g + lines;
}

export const AZ: FaceColors = { t: "#6DBBF4", l: "#2F8FE0", r: "#1F6FBF" };
export const AW: FaceColors = { t: "#F9C56B", l: "#E8931C", r: "#B86F0F" };
export const GC: FaceColors = { t: "#F39A90", l: "#E0483C", r: "#B4362C" };
export const HUB: FaceColors = { t: "#7FDFF8", l: "#0C86C0", r: "#075E8A" };

/** The hero scene — returns the inner markup of a `viewBox="0 0 660 470"` svg. */
export function heroIso(): string {
  let g = `<defs>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="pt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E4EDF5"/></linearGradient>
    <linearGradient id="cloud" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#DDEEFA"/></linearGradient>
    <radialGradient id="floor" cx="50%" cy="60%" r="60%"><stop offset="0" stop-color="#0C86C0" stop-opacity=".16"/><stop offset="1" stop-color="#0C86C0" stop-opacity="0"/></radialGradient>
    <radialGradient id="gmg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff"/><stop offset=".7" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <mask id="gm"><ellipse cx="${OX + 20}" cy="${OY + 250}" rx="330" ry="150" fill="url(#gmg)"/></mask>
  </defs>`;
  g += `<ellipse cx="${OX + 20}" cy="${OY + 250}" rx="300" ry="118" fill="url(#floor)"/>`;
  g += '<g mask="url(#gm)">';
  for (let i = -4; i <= 16; i += 2) {
    const a = P(i, -4, -0.45);
    const b = P(i, 16, -0.45);
    g += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#0C86C0" stroke-opacity=".07"/>`;
    const c = P(-4, i, -0.45);
    const d = P(16, i, -0.45);
    g += `<line x1="${c[0]}" y1="${c[1]}" x2="${d[0]}" y2="${d[1]}" stroke="#0C86C0" stroke-opacity=".09"/>`;
  }
  g += "</g>";

  // platforms (back to front): GCP back, Azure left, AWS right-front
  g += platform(3.5, 0, 5.6, 5.2, "#E0483C");
  g += platform(-1.2, 6.6, 5.6, 5.2, "#2F8FE0");
  g += platform(8.8, 5.6, 5.6, 5.2, "#E8931C");

  // GCP pod cluster
  const pods: Pt[] = [
    [4.4, 0.9],
    [6.1, 0.9],
    [7.8, 0.9],
    [4.4, 2.8],
    [6.1, 2.8],
    [7.8, 2.8],
  ];
  pods.forEach(([x, y], i) => {
    g += cuboid(x, y, 0, 1.2, 1.2, i === 1 ? 1.8 : i === 4 ? 1.3 : 0.9, GC.t, GC.l, GC.r);
  });

  // Azure racks + hub
  g += rack(-0.6, 7.1, 1.1, 1.1, 2.3, AZ);
  g += rack(1.2, 7.1, 1.1, 1.1, 1.8, AZ);
  g += rack(3.0, 7.1, 1.1, 1.1, 2.6, AZ);
  g += cuboid(0.2, 10.0, 0, 1.3, 1.3, 0.55, HUB.t, HUB.l, HUB.r);
  g += cuboid(2.3, 9.6, 0, 2.0, 1.0, 0.35, "#CFE7F8", "#9CC9EA", "#7FB6DF");

  // AWS cylinders + cubes
  g += cylinder(10.4, 7.0, 0, 0.85, 1.7, AW.t, AW.l);
  g += cylinder(12.2, 7.4, 0, 0.85, 1.2, AW.t, AW.l);
  g += cuboid(9.9, 9.2, 0, 1.4, 1.4, 1.4, AW.t, AW.l, AW.r);
  g += cuboid(12.0, 9.4, 0, 1.9, 1.1, 0.45, "#FBE0B0", "#F2C07A", "#D9A35C");

  // cloud
  const cx = OX + 40;
  const cy = OY - 62;
  g += `<g transform="translate(${cx - 100} ${cy - 52})"><path d="M40 92c-25 0-42-18-42-38 0-22 18-40 42-38 8-28 36-44 66-38 24 5 42 24 46 46 24-2 46 16 46 38 0 20-16 36-40 36H40z" fill="#0C86C0" opacity=".10" transform="translate(0 10)" filter="url(#blur)"/>
    <path d="M40 92c-25 0-42-18-42-38 0-22 18-40 42-38 8-28 36-44 66-38 24 5 42 24 46 46 24-2 46 16 46 38 0 20-16 36-40 36H40z" fill="url(#cloud)" stroke="#8FC8EA" stroke-width="2"/>
    <circle cx="100" cy="52" r="9" fill="#0C86C0"/><circle cx="100" cy="52" r="16" fill="none" stroke="#0C86C0" stroke-opacity=".35"/></g>`;

  // links + animated packets
  const hub: Pt = [cx, cy];
  const targets: Pt[] = [P(6.3, 2.6, 1.1), P(1.6, 8.6, 1.3), P(11.6, 8.4, 1.1)];
  const cols = ["#E0483C", "#2F8FE0", "#E8931C"];
  targets.forEach((t, i) => {
    const mx = (hub[0] + t[0]) / 2;
    const my = Math.min(hub[1], t[1]) - 40;
    const d = `M${hub[0]} ${hub[1]} Q ${mx} ${my} ${t[0]} ${t[1]}`;
    g += `<path d="${d}" fill="none" stroke="${cols[i]}" stroke-width="2" stroke-dasharray="4 8" opacity=".55"/>
        <circle cx="${t[0]}" cy="${t[1]}" r="5" fill="#fff" stroke="${cols[i]}" stroke-width="2.5"/>
        <circle r="4.5" fill="${cols[i]}" filter="url(#glow)"><animateMotion dur="${
          3.2 + i * 0.7
        }s" repeatCount="indefinite" path="${d}"/></circle>`;
  });
  return g;
}

export type GlyphKind = "stack" | "cube" | "grid" | "shield" | "db" | "pipe" | "bars";

/** Topic glyph — returns the inner markup of a `viewBox="0 0 120 110"` svg. */
export function glyphSvg(kind: GlyphKind, c: string): string {
  let body = "";
  if (kind === "stack") {
    body =
      cuboid(0, 0, 0, 3, 3, 0.5, "#fff", c + "66", c + "99") +
      cuboid(0.4, 0.4, 0.5, 2.2, 2.2, 0.5, c + "55", c + "AA", c) +
      cuboid(0.8, 0.8, 1.0, 1.4, 1.4, 0.6, c + "88", c, c);
  } else if (kind === "cube") {
    body = cuboid(0.6, 0.6, 0, 2, 2, 2, c + "88", c, c + "CC");
  } else if (kind === "grid") {
    body =
      cuboid(0, 1.4, 0, 1.2, 1.2, 1, c + "88", c, c + "CC") +
      cuboid(1.4, 1.4, 0, 1.2, 1.2, 1.6, c + "88", c, c + "CC") +
      cuboid(0, 0, 0, 1.2, 1.2, 1.3, c + "88", c, c + "CC") +
      cuboid(1.4, 0, 0, 1.2, 1.2, 0.8, c + "88", c, c + "CC");
  } else if (kind === "shield") {
    body =
      cuboid(0, 0, 0, 3, 3, 0.4, "#fff", c + "55", c + "88") +
      `<g transform="translate(${P(1.5, 1.5, 0.4)[0] - 22} ${
        P(1.5, 1.5, 0.4)[1] - 58
      })"><path d="M22 2l20 8v14c0 12-8 22-20 26C10 46 2 36 2 24V10z" fill="${c}"/><path d="M13 25l6 6 12-13" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  } else if (kind === "db") {
    body =
      cylinder(1.5, 1.5, 0, 1.1, 1.0, c + "99", c) +
      cylinder(1.5, 1.5, 1.05, 1.1, 0.9, c + "BB", c + "DD");
  } else if (kind === "pipe" || kind === "bars") {
    body = extraGlyph(kind, c);
  }
  const c0 = P(1.5, 1.5, 0);
  return `<g transform="translate(${60 - c0[0]} ${72 - c0[1]})">${body}</g>`;
}


function isoDefs(accent: string): string {
  return `<defs>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="pt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E4EDF5"/></linearGradient>
    <linearGradient id="cloud" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#EEF1FB"/></linearGradient>
    <radialGradient id="floor" cx="50%" cy="60%" r="60%"><stop offset="0" stop-color="${accent}" stop-opacity=".16"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
    <radialGradient id="gmg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff"/><stop offset=".7" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <mask id="gm"><ellipse cx="${OX + 20}" cy="${OY + 250}" rx="330" ry="150" fill="url(#gmg)"/></mask>
  </defs>`;
}

function isoFloor(accent: string): string {
  let g = `<ellipse cx="${OX + 20}" cy="${OY + 250}" rx="300" ry="118" fill="url(#floor)"/>`;
  g += '<g mask="url(#gm)">';
  for (let i = -4; i <= 16; i += 2) {
    const a = P(i, -4, -0.45);
    const b = P(i, 16, -0.45);
    g += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${accent}" stroke-opacity=".07"/>`;
    const c = P(-4, i, -0.45);
    const d = P(16, i, -0.45);
    g += `<line x1="${c[0]}" y1="${c[1]}" x2="${d[0]}" y2="${d[1]}" stroke="${accent}" stroke-opacity=".09"/>`;
  }
  g += "</g>";
  return g;
}

function isoLinks(hub: Pt, targets: Pt[], cols: string[]): string {
  let g = "";
  targets.forEach((t, i) => {
    const mx = (hub[0] + t[0]) / 2;
    const my = Math.min(hub[1], t[1]) - 40;
    const d = `M${hub[0]} ${hub[1]} Q ${mx} ${my} ${t[0]} ${t[1]}`;
    g += `<path d="${d}" fill="none" stroke="${cols[i]}" stroke-width="2" stroke-dasharray="4 8" opacity=".55"/>
        <circle cx="${t[0]}" cy="${t[1]}" r="5" fill="#fff" stroke="${cols[i]}" stroke-width="2.5"/>
        <circle r="4.5" fill="${cols[i]}" filter="url(#glow)"><animateMotion dur="${3.2 + i * 0.7}s" repeatCount="indefinite" path="${d}"/></circle>`;
  });
  return g;
}

export const K8S: FaceColors = { t: "#7FA9F2", l: "#326CE5", r: "#2452B8" };
export const ARGO: FaceColors = { t: "#F7B39A", l: "#EF7B4D", r: "#C55A2E" };
export const TF: FaceColors = { t: "#B48AE0", l: "#7B42BC", r: "#5B2E90" };
export const PBI: FaceColors = { t: "#F7DB6A", l: "#E3B505", r: "#B58F03" };
export const SQL: FaceColors = { t: "#EC7F7B", l: "#CC2927", r: "#9E1E1C" };
export const FAB: FaceColors = { t: "#6FC7B1", l: "#117865", r: "#0B5648" };
export const SNOW: FaceColors = { t: "#8FDCF4", l: "#29B5E8", r: "#1B8DB8" };

/** DevOps hero scene — inner markup of a viewBox="0 0 660 470" svg. */
export function devopsIso(): string {
  const accent = "#4F46E5";
  let g = isoDefs(accent) + isoFloor(accent);

  // platforms (back to front): CI/CD back, Containers left, IaC right-front
  g += platform(3.5, 0, 5.6, 5.2, "#EF7B4D");
  g += platform(-1.2, 6.6, 5.6, 5.2, "#326CE5");
  g += platform(8.8, 5.6, 5.6, 5.2, "#7B42BC");

  // CI/CD pipeline: source cube -> track with three stages
  g += cuboid(4.1, 0.6, 0, 1.2, 1.2, 1.1, ARGO.t, ARGO.l, ARGO.r);
  g += cuboid(4.0, 2.4, 0, 4.8, 1.1, 0.3, "#FBE3D8", "#F2B9A0", "#E09B7E");
  [4.3, 6.0, 7.7].forEach((x, i) => {
    g += cuboid(x, 2.45, 0.3, 1.0, 1.0, i === 1 ? 1.1 : 0.8, ARGO.t, ARGO.l, ARGO.r);
  });
  const t0 = P(4.1, 3.35, 0.34);
  const t1 = P(8.75, 3.35, 0.34);
  g += `<circle r="3.5" fill="#fff" stroke="#EF7B4D" stroke-width="2"><animateMotion dur="2.6s" repeatCount="indefinite" path="M${t0[0]} ${t0[1]} L${t1[0]} ${t1[1]}"/></circle>`;

  // Kubernetes: 3x3 pod grid + control-plane cylinder
  const podH = [0.7, 1.0, 0.6, 0.9, 1.3, 0.8, 0.6, 0.9, 0.7];
  let k = 0;
  [7.0, 8.2, 9.4].forEach((y) => {
    [-0.7, 0.5, 1.7].forEach((x) => {
      g += cuboid(x, y, 0, 0.9, 0.9, podH[k++], K8S.t, K8S.l, K8S.r);
    });
  });
  g += cylinder(3.4, 8.7, 0, 0.7, 1.9, K8S.t, K8S.l);
  g += cuboid(2.9, 10.5, 0, 1.6, 0.9, 0.35, "#D8E4FA", "#A9C0F0", "#8AA8E4");

  // Infrastructure as Code: terraced slabs + vault cube
  g += cuboid(9.3, 6.3, 0, 3.6, 3.0, 0.35, "#E5D6F5", "#C7ABE8", "#A98BD6");
  g += cuboid(9.8, 6.8, 0.35, 2.6, 2.0, 0.35, TF.t, "#9A66D0", "#7B48B0");
  g += cuboid(10.3, 7.3, 0.7, 1.6, 1.0, 0.55, TF.t, TF.l, TF.r);
  g += cuboid(12.6, 9.7, 0, 1.0, 1.0, 1.25, "#7C8CA0", "#3B4A5F", "#2A3646");

  // hub: floating git node
  const cx = OX + 40;
  const cy = OY - 62;
  g += `<g transform="translate(${cx - 78} ${cy - 30})">
    <rect x="0" y="12" width="156" height="60" rx="18" fill="${accent}" opacity=".10" filter="url(#blur)"/>
    <rect x="0" y="0" width="156" height="60" rx="18" fill="url(#cloud)" stroke="#A5A2F3" stroke-width="2"/>
    <g transform="translate(56 8)" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round">
      <line x1="12" y1="6" x2="12" y2="30"/><path d="M36 18a18 18 0 0 1-18 18"/>
      <circle cx="36" cy="12" r="6" fill="#fff"/><circle cx="12" cy="36" r="6" fill="#fff"/>
    </g>
  </g>`;

  const hub: Pt = [cx, cy + 30];
  g += isoLinks(hub, [P(6.3, 2.9, 1.45), P(0.95, 8.65, 1.35), P(11.1, 7.8, 1.3)], ["#EF7B4D", "#326CE5", "#7B42BC"]);
  return g;
}

/** Data Science Pro hero scene — inner markup of a viewBox="0 0 660 470" svg. */
export function dataIso(): string {
  const accent = "#D97706";
  let g = isoDefs(accent) + isoFloor(accent);

  // platforms (back to front): Cloud Data back, Data Skills left, Power BI right-front
  g += platform(3.5, 0, 5.6, 5.2, "#2F8FE0");
  g += platform(-1.2, 6.6, 5.6, 5.2, "#CC2927");
  g += platform(8.8, 5.6, 5.6, 5.2, "#E3B505");

  // Cloud Data: Azure cylinders, Fabric slab, Snowflake cube
  g += cylinder(4.7, 1.3, 0, 0.85, 1.5, "#6DBBF4", "#2F8FE0");
  g += cylinder(6.5, 1.0, 0, 0.85, 1.1, "#6DBBF4", "#2F8FE0");
  g += cuboid(4.2, 3.1, 0, 4.2, 1.3, 0.4, FAB.t, FAB.l, FAB.r);
  g += cuboid(7.7, 1.4, 0, 1.2, 1.2, 1.4, SNOW.t, SNOW.l, SNOW.r);

  // Data Skills: stacked SQL Server discs + spreadsheet slab
  g += cylinder(0.6, 8.3, 0, 0.95, 0.7, SQL.t, SQL.l);
  g += cylinder(0.6, 8.3, 0.78, 0.95, 0.7, SQL.t, SQL.l);
  g += cylinder(0.6, 8.3, 1.56, 0.95, 0.7, SQL.t, SQL.l);
  g += cuboid(2.3, 9.6, 0, 1.9, 1.5, 0.25, "#E6F5EC", "#9ED9B7", "#7CC49B");
  ([[2.45, 9.75], [3.3, 9.75], [2.45, 10.45], [3.3, 10.45]] as [number, number][]).forEach(([x, y]) => {
    g += cuboid(x, y, 0.25, 0.7, 0.55, 0.12, "#21A366", "#178A55", "#136F45");
  });

  // Power BI: bar chart + report slab
  g += cuboid(9.5, 6.4, 0, 3.8, 1.2, 0.3, "#FFFFFF", "#F1E7C2", "#E0D19E");
  [0.6, 1.2, 0.9, 1.7, 2.2].forEach((h, i) => {
    g += cuboid(9.5 + i * 0.8, 8.6, 0, 0.6, 0.6, h, PBI.t, PBI.l, PBI.r);
  });

  // hub: floating report card
  const cx = OX + 40;
  const cy = OY - 66;
  g += `<g transform="translate(${cx - 88} ${cy - 34})">
    <rect x="0" y="12" width="176" height="72" rx="16" fill="${accent}" opacity=".10" filter="url(#blur)"/>
    <rect x="0" y="0" width="176" height="72" rx="16" fill="url(#cloud)" stroke="#F3C27A" stroke-width="2"/>
    <g transform="translate(18 16)">
      <rect x="0" y="26" width="12" height="14" rx="2" fill="#E3B505"/>
      <rect x="18" y="14" width="12" height="26" rx="2" fill="#E3B505"/>
      <rect x="36" y="20" width="12" height="20" rx="2" fill="#E3B505"/>
      <rect x="54" y="4" width="12" height="36" rx="2" fill="#E3B505"/>
      <path d="M84 30 L104 18 L120 24 L142 6" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="142" cy="6" r="4" fill="${accent}"/>
    </g>
  </g>`;

  const hub: Pt = [cx, cy + 36];
  g += isoLinks(hub, [P(5.55, 1.15, 1.55), P(0.6, 8.3, 2.3), P(12.0, 8.9, 2.25)], ["#2F8FE0", "#CC2927", "#E3B505"]);
  return g;
}

/** Extra glyph kinds used by the DevOps and Data Science topic cards. */
function extraGlyph(kind: GlyphKind, c: string): string {
  if (kind === "pipe") {
    return (
      cuboid(0, 1.1, 0, 3, 0.9, 0.3, "#fff", c + "55", c + "88") +
      cuboid(0.15, 1.2, 0.3, 0.7, 0.7, 0.6, c + "88", c, c + "CC") +
      cuboid(1.15, 1.2, 0.3, 0.7, 0.7, 0.95, c + "88", c, c + "CC") +
      cuboid(2.15, 1.2, 0.3, 0.7, 0.7, 0.6, c + "88", c, c + "CC")
    );
  }
  if (kind === "bars") {
    return (
      cuboid(0, 0, 0, 3, 3, 0.25, "#fff", c + "55", c + "88") +
      cuboid(0.15, 1.2, 0.25, 0.6, 0.6, 0.7, c + "88", c, c + "CC") +
      cuboid(0.9, 1.2, 0.25, 0.6, 0.6, 1.3, c + "88", c, c + "CC") +
      cuboid(1.65, 1.2, 0.25, 0.6, 0.6, 1.0, c + "88", c, c + "CC") +
      cuboid(2.4, 1.2, 0.25, 0.6, 0.6, 1.9, c + "88", c, c + "CC")
    );
  }
  return "";
}
