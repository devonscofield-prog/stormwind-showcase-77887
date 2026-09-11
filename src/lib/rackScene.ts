/**
 * Front-on network rack illustration (ported from the approved Networking mockup, Option G "Rack").
 * Returns the inner markup of a `viewBox="0 0 340 620"` svg. Purely decorative — contains no text.
 */

// small deterministic PRNG so the LED pattern is stable between renders
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const CAB = ["#2F6FE0", "#E8931C", "#009970", "#F2C230", "#E0483C", "#7C5CF0"];

export function leds(rand: () => number, x: number, y: number, n: number, pitch: number, onProb = 0.7): string {
  let out = "";
  for (let i = 0; i < n; i++) {
    const on = rand() < onProb;
    const col = rand() < 0.8 ? "#34D399" : "#F5A623";
    const d = (rand() * 3).toFixed(2);
    out += `<rect x="${x + i * pitch}" y="${y}" width="3.2" height="2.2" rx=".6" fill="${on ? col : "#1A2026"}" class="${on ? "rack-led" : ""}" style="animation-delay:-${d}s"/>`;
  }
  return out;
}

function ports(x: number, y: number, n: number, pitch: number, w = 6.4, h = 5.4): string {
  let out = "";
  for (let i = 0; i < n; i++) {
    out += `<rect x="${x + i * pitch}" y="${y}" width="${w}" height="${h}" rx=".8" fill="#0B0F13" stroke="#3A444D" stroke-width=".6"/>`;
  }
  return out;
}

type Kind = "patch" | "switch" | "router" | "fw" | "blank" | "mgmt" | "ups";

function unit(rand: () => number, y: number, h: number, kind: Kind): string {
  let g = `<rect x="40" y="${y}" width="260" height="${h}" rx="2" fill="url(#rack-face)" stroke="#3A434C" stroke-width=".8"/>`;
  g += `<rect x="40" y="${y}" width="8" height="${h}" fill="#31393F"/><rect x="292" y="${y}" width="8" height="${h}" fill="#31393F"/>`;
  for (const sy of [y + 4, y + h - 6]) {
    g += `<circle cx="44" cy="${sy}" r="1.4" fill="#0E1216"/><circle cx="296" cy="${sy}" r="1.4" fill="#0E1216"/>`;
  }
  if (kind === "patch") {
    for (let r = 0; r < 2; r++) g += ports(66, y + 12 + r * 13, 24, 9.2, 7.2, 8);
  } else if (kind === "switch") {
    g += leds(rand, 66, y + 11, 24, 9.2);
    g += ports(66, y + 15, 24, 9.2);
    g += leds(rand, 66, y + 22.5, 24, 9.2);
    g += `<rect x="262" y="${y + 13}" width="10" height="9" rx="1" fill="#0B0F13" stroke="#5B6672" stroke-width=".7"/><rect x="275" y="${y + 13}" width="10" height="9" rx="1" fill="#0B0F13" stroke="#5B6672" stroke-width=".7"/>`;
    g += `<rect x="262" y="${y + 10}" width="3" height="2" fill="#34D399" class="rack-led"/><rect x="275" y="${y + 10}" width="3" height="2" fill="#34D399" class="rack-led" style="animation-delay:-1.3s"/>`;
  } else if (kind === "router") {
    g += ports(66, y + 13, 8, 12, 9, 8);
    g += leds(rand, 66, y + 24, 8, 12, 0.9);
    g += `<rect x="200" y="${y + 12}" width="86" height="12" rx="2" fill="#0B0F13"/><rect x="206" y="${y + 16}" width="40" height="3" rx="1.5" fill="#7BE0BE"/><rect x="250" y="${y + 16}" width="14" height="3" rx="1.5" fill="#7BE0BE" opacity=".5"/><rect x="268" y="${y + 16}" width="12" height="3" rx="1.5" fill="#7BE0BE" opacity=".5"/>`;
    g += `<circle cx="180" cy="${y + 18}" r="2.4" fill="#F5A623" class="rack-led"/>`;
  } else if (kind === "fw") {
    g += `<rect x="48" y="${y}" width="244" height="3" fill="#E0483C"/>`;
    g += ports(66, y + 13, 6, 12, 9, 8);
    g += leds(rand, 66, y + 24, 6, 12, 0.9);
    g += `<rect x="150" y="${y + 12}" width="136" height="12" rx="2" fill="#0B0F13"/><rect x="156" y="${y + 16}" width="60" height="3" rx="1.5" fill="#7BE0BE"/><rect x="220" y="${y + 16}" width="22" height="3" rx="1.5" fill="#7BE0BE" opacity=".5"/><rect x="246" y="${y + 16}" width="34" height="3" rx="1.5" fill="#7BE0BE" opacity=".5"/>`;
  } else if (kind === "blank") {
    for (let i = 0; i < 12; i++) g += `<rect x="${62 + i * 19}" y="${y + 5}" width="12" height="${h - 10}" rx="1.5" fill="#1F262C"/>`;
  } else if (kind === "mgmt") {
    for (let i = 0; i < 6; i++) g += `<path d="M${70 + i * 38} ${y + 3} v${h - 6} h18 v-${h - 6}" fill="none" stroke="#3A434C" stroke-width="2.2"/>`;
  } else if (kind === "ups") {
    g += `<rect x="60" y="${y + 10}" width="120" height="${h - 20}" rx="2" fill="#0B0F13"/>`;
    g += `<rect x="70" y="${y + 20}" width="72" height="5" rx="2" fill="#7BE0BE"/><rect x="70" y="${y + 31}" width="100" height="4" rx="2" fill="#1F262C"/><rect x="70" y="${y + 31}" width="42" height="4" rx="2" fill="#7BE0BE" opacity=".7"/><rect x="70" y="${y + 40}" width="52" height="3" rx="1.5" fill="#7BE0BE" opacity=".45"/>`;
    for (let i = 0; i < 4; i++) g += `<rect x="${200 + i * 20}" y="${y + 12}" width="14" height="${h - 24}" rx="2" fill="#1F262C" stroke="#3A434C" stroke-width=".7"/>`;
    g += `<circle cx="286" cy="${y + h / 2}" r="3" fill="#34D399" class="rack-led"/>`;
  }
  return g;
}

export function rackSvg(): string {
  const rand = rng(7);
  const s: string[] = [];
  s.push(
    `<defs><linearGradient id="rack-face" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F373F"/><stop offset="1" stop-color="#242B32"/></linearGradient>` +
      `<linearGradient id="rack-frame" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1B2128"/><stop offset=".5" stop-color="#232A31"/><stop offset="1" stop-color="#1B2128"/></linearGradient>` +
      `<filter id="rack-sh" x="-20%" y="-10%" width="140%" height="130%"><feDropShadow dx="0" dy="24" stdDeviation="18" flood-color="#0F1720" flood-opacity=".35"/></filter></defs>`,
  );
  s.push(`<rect x="26" y="14" width="288" height="592" rx="10" fill="url(#rack-frame)" filter="url(#rack-sh)"/>`);
  s.push(`<rect x="34" y="22" width="272" height="576" rx="6" fill="#0E1216"/>`);
  for (let i = 0; i < 24; i++) {
    const y = 30 + i * 24;
    s.push(`<rect x="36" y="${y + 2}" width="3" height="3" fill="#3A434C"/><rect x="301" y="${y + 2}" width="3" height="3" fill="#3A434C"/>`);
  }
  const units: [number, number, Kind][] = [
    [30, 46, "patch"], [78, 22, "blank"], [102, 46, "switch"], [150, 46, "switch"], [198, 22, "mgmt"], [222, 46, "router"], [270, 46, "fw"],
    [318, 22, "blank"], [342, 46, "switch"], [390, 22, "blank"], [414, 22, "blank"], [438, 22, "mgmt"], [462, 46, "blank"], [510, 70, "ups"],
  ];
  for (const [y, h, kind] of units) s.push(unit(rand, y, h, kind));
  // patch cables from the patch panel down to switch ports
  const cabs: [number, number, number, number, number][] = [
    [70, 44, 90, 119, 0], [98, 44, 160, 119, 1], [135, 44, 210, 167, 2], [163, 57, 120, 167, 3], [200, 57, 240, 119, 4], [237, 57, 76, 167, 5],
  ];
  for (const [x1, y1, x2, y2, c] of cabs) {
    const col = CAB[c];
    s.push(
      `<path d="M${x1 + 3.6} ${y1} C ${x1 + 3.6} ${y1 + 40}, ${x2 + 3.2} ${y2 - 40}, ${x2 + 3.2} ${y2}" fill="none" stroke="${col}" stroke-width="3.2" stroke-linecap="round" opacity=".95"/>` +
        `<rect x="${x1}" y="${y1 - 8}" width="7.2" height="8" rx=".8" fill="${col}"/><rect x="${x2}" y="${y2}" width="6.4" height="5.4" rx=".8" fill="${col}"/>`,
    );
  }
  return s.join("");
}

/** LED strip used in the topic faceplates — inner markup of a `viewBox="0 0 120 12"` svg. */
export function ledStrip(seed: number): string {
  return leds(rng(seed), 0, 4, 12, 9.6, 0.75);
}
