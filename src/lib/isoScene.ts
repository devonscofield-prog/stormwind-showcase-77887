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

export type GlyphKind = "stack" | "cube" | "grid" | "shield" | "db";

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
  }
  const c0 = P(1.5, 1.5, 0);
  return `<g transform="translate(${60 - c0[0]} ${72 - c0[1]})">${body}</g>`;
}
