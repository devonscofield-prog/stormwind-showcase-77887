// @ts-nocheck
// StormAI Learning hero controller (generated). Mounted by src/components/StormAIPlayer.tsx
export type Mode = "personalized" | "studio" | "atlas";
let Ne = {};
const ae = [["file-text", "Study Notes"], ["timer", "Realtime Exam"], ["layout-grid", "Topic Guide"], ["fast-forward", "Fast Track"], ["brain", "StormAI Examiner"],
["layers", "Flashcards"], ["search", "Highlights"]], Rt = [["personalized", "Personalized Learning"], ["studio", "StormAI Studio"], ["atlas", "Skill Atlas"]], ze = [14,
18, 16, 20, 15, 17], dt = ["#00A37A", "#20B2AA", "#5B8DEF", "#E39B2E", "#8C6CE6", "#2F9E6E"], Y = [["How to Manage AI Projects Responsibly", [0]], ["CompTIA Linux+ v8 Exam Crash",
[1]], ["ITIL Foundation (Version 5)", [2, 3, 4]], ["CompTIA SecAI+ v1", [5]], ["AB-731: AI Transformation Leader", [6]]], j = [["Why AI Projects Need Governance",
5], ["Emphasizes treating AI as supplemental", 4], ["Digital Governance Activities and AI", 7], ["AI Governance Structures and Policies", 2], ["AI Governance and the 6C Model",
6], ["Importance of AI governance for compliance", 2], ["Agentic AI and Practical Examples", 4]], Gt = ["#2DB38B", "#5B8DEF", "#8B7CF6", "#E3A21A", "#E2556B"], Oe = "AI Governance Foundations and Practice",
$t = ["g", "p", "r", "y"], oe = { blue: "#3B82F6", green: "#22C55E", purple: "#A855F7", red: "#EF4444", cyan: "#06B6D4", lime: "#84CC16", pink: "#EC4899", orange: "#F59E0B",
indigo: "#6366F1", teal: "#14B8A6" }, J = [[["Operate Ethernet Infrastructure", "blue", 1], ["Analyze Network Communication Models", "green", 0], ["Device Access and Password Security",
"purple", 1]], [["Connect Azure Networks", "cyan", 0], ["IP Routing Fundamentals", "red", 0], ["Network Topologies and Cabling", "green", 0], ["Identify Network Host Services",
"purple", 0], ["Access Control List Configuration", "indigo", 1]], [["VLAN Configuration", "blue", 1], ["First Hop Redundancy Protocols", "red", 0], ["Network Automation Fundamentals",
"lime", 0], ["Configure and Implement Firewalls", "indigo", 1], ["Layer 2 Security", "indigo", 1], ["Explain Wireless Networking Technologies", "pink", 0]], [["Configure VLAN Segmentation",
"blue", 1], ["Static Routing", "red", 0], ["Configure AAA", "teal", 1], ["Apply TCP/IP Protocols", "green", 0], ["Establish Secure Baselines", "lime", 1]], [["Configure Azure Virtual Networks",
"cyan", 0], ["Configure First-Hop Redundancy", "red", 0], ["Analyze Transport Ports", "green", 0], ["DHCP and DNS", "purple", 0], ["Secure Network Components", "indigo",
1], ["Secure WLAN Access", "indigo", 1]], [["Configure VLAN Trunks", "blue", 1], ["Network Address Translation", "red", 0], ["OSPF Configuration", "red", 0], ["Subnetting",
"green", 0], ["Configure Access Control Lists", "indigo", 1]]], jt = ["Awareness", "Foundational", "Conceptual", "Guided", "Developing", "Intermediate"], Ht = [["Systems Administrator",
80, "#818CF8"], ["Network Administrator", 54, "#22C55E"], ["Network Engineer", 43, "#3B82F6"], ["Project Manager", 41, "#06B6D4"], ["Desktop Support Technician",
28, "#22D3EE"], ["Information Security Analyst", 24, "#06B6D4"]], qt = ["0-0", "0-1", "1-1", "1-2", "2-1", "2-2"], Vt = ["2-3", "3-1", "3-2"];
let Wt = 0;
const c = (o, i = "ico") => `<svg C="${i}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Ne[o] || ""}</svg>`, N = (o) => o.replace(/<(\/?)([DSB])\b/g, (i, l, n) => "<" + l + { D: "div", S: "span", B: "button" }[n]).replace(/ C="/g, ' class="'), m = (o, i, l) => o.classList.toggle(i, l), v = (o, i) => o.classList.remove(i), F = (o, i) => o.classList.add(i), H = (o, i) => o.setAttribute("aria-pressed", i), K = (o, i) => Array.from({ length: o }, (l, n) => i(n)).join(""), y = (o, i) => o.map(i).join(""), k = (o, i = "") => `<b style="width:${o}%${i}"></b>`, Ct = () => `<S C="ck">${c("check")}</S>`, Ut = () => `<S C="pl2">${c("plus")}</S><S C="mi">${c("minus")}</S>`, ft = (o) => `background:linear-gradient(140deg,${dt[o]},${dt[(o + 1) % 6]})`, ne = (o, i, l) => "#" + [1, 3, 5].map((n) => {
  const f = parseInt(o.substr(n, 2), 16), S = parseInt(i.substr(n, 2), 16);
  return Math.round(f + (S - f) * l).toString(16).padStart(2, "0");
}).join(""), Dt = (o) => `<D C="cv ${o}"><S C="ck2">${c("check")}</S><S C="mk">Storm<S>AI</S></S><h5>${Oe}</h5><S C="mt cvm">7 topics \xB7 30 min</S></D>`;
function Yt() {
  const o = K(6, (h) => `<B data-seg="${h}" aria-label="Topic ${h + 1}" style="${ft(h)}"><b></b><i></i></B>`), i = `<D C="Q9">${c("timer", "qt")}<D C="qb" style="width:78%"></D><D C="qb" style="width:52%;background:var(--sl-h)"></D>${y([62, 48, 70, 40], (h, g) => `<D C="op${g == 2 ? " ok" : ""}"><i></i>${k(h)}</D>`)}</D>`, l = `<D C="Q22"><D C="Qx">${k(52)}${k(80, ";background:var(--sl-h)")}${k(64, ";background:var(--sl-h)")}<D C="ch">${y([45, 70, 52, 88, 64], (h) => `<i style="height:${h}%"></i>`)}</D></D><D C="Q1o"><i></i><b></b></D><D C="Q1a"><i></i><b></b></D>${i}<D C="Qb">${o}</D></D>`, n = 0.485 * 380, f = `<svg C="Qr" viewBox="0 0 380 40"><path C="ln" d="M6 38 C 36 2, ${n - 30} 2, ${n - 4} 34"/><path C="ah" d="M${n - 4} 38 l-6 -9 l10 1 z"/></svg>`, S = [[0, 2], [1, 4], [2, 0], [2, 3]].map((h) => h.join()), u = y([[14, 9, 18, 11, 16, 8, 13], [10, 16, 12, 8, 19, 14], [17, 11, 9, 15, 12, 10]], (h, g) => `<D>${y(h, (w, T) => `<S C="${S.includes(g + "," + T) ? "h" : ""}" style="width:${w}%"></S>`)}</D>`), Q = `<D C="Q2b">${f}<D C="Q2a">${y(ze, (h, g) => `<S C="Q10${g < 3 ? " k" : ""}" style="flex:${h}"><u></u></S>`)}</D><D C="Q1w">${y([8, 27, 41, 63, 86], (h, g) => `<i style="left:${h}%;animation-delay:${0.25 * g}s"></i>`)}</D><S C="Q19"></S><S C="Q1q" style="left:10%"></S></D><D C="Q1b">${u}</D>`;
  return `<D C="Q16 on" data-m="personalized">${l}${Q}<D C="pl-ghost">${k(80)}<b></b>${k(60)}${k(90)}${k(70)}</D></D>`;
}
function Jt() {
  const o = (l) => `animation-delay:${l.toFixed(2)}s`, i = [y([82, 64, 90, 56, 74, 60], (l, n) => `<D C="Q1${n == 2 ? " key" : ""}" style="${o(n * 0.45)}">${Ct()}<b style="--sl-al:${l}%;${o(n * 0.45)}"></b></D>`), `<D C="Qp"><svg viewBox="0 0 86 86"><circle C="bg" cx="43" cy="43" r="36"/><circle C="fg" cx="43" cy="43" r="36"/></svg></D><D C="Q12">${y([70, 84, 58, 66], (l, n) => `<D C="Q1${n == 1 ? " cur" : ""}" style="position:relative"><i></i>${k(l)}</D>`)}</D>`, `<D C="Q15">${y([70, 56, 80, 62, 74, 50], (l, n) => `<D C="Q1" data-seg="${n}"><s style="${ft(n)}"></s>${k(l)}</D>`)}</D>`, `<D C="Q8"><D C="ffb">${c("fast-forward")}<b></b></D>${y([70, 56, 80, 62, 74, 50], (l, n) => `<D C="Q1 ${n < 3 ? "kn" : "nw"}" style="${o(0.15 * n)}">${n < 3 ? Ct() : `<S class=ck>${c("play")}</S>`}${k(l)}</D>`)}</D>`, '<D C="Q21"></D>', `<D C="Q2d"><D C="Q4 f1"></D><D C="Q4 f2"></D><D C="Q4 top"><D C="fs front"><S C="q">${c("layers")}</S>${k(90)}${k(66)}${k(78, ";background:var(--sl-h)")}</D><D C="fs back"><S C="q">${c("check")}</S>${k(84)}${k(58)}</D></D></D><D C="Q1g"><S>${c("rotate-ccw")}</S><S C="p">${c("download")}</S></D>`, `<D C="Q1d"><D C="Q17">${c("search")}<b></b><i></i></D>${y([[80, 30, 22], [66, 52, 26], [88, 12, 20], [58, 40, 30], [74, 60, 22]], ([l, n, f], S) => `<D C="Q1" style="${o(0.4 + 0.2 * S)}"><s></s><b style="width:${l}%"><em style="left:${n}%;width:${f}%"></em></b></D>`)}</D>`];
  return `<D C="Qv on" data-m="personalized"><D C="Qt"><S C="t" data-r="pi">${c(ae[0][0])}</S><h4 data-r="pt">${ae[0][1]}</h4><S C="dots"><i></i><i></i><i></i></S></D>${y(i, (l, n) => `<D C="Qk" data-t="${n}">${l}</D>`)}</D>`;
}
function Kt() {
  const o = y(["1. Explore", "2. Edit", "3. Preview"], (S, u) => `${u ? '<S C="Q1p"></S>' : ""}<B C="Qc" data-s="${u}"><i>${c("check")}</i><S>${S}</S></B>`), i = (S, u, Q, h, g, w) => `<D C="Q2${S}"${g}>${u == "COURSE" ? `<B C="chv" aria-label="Expand">${c("chevron-right")}</B>` : ""}<small>${u}</small><S C="nm">${Q}</S>${h}<B C="ad" aria-label="${w}">${Ut()}</B></D>`, l = y(Y, ([S, u], Q) => `<D C="Q1t${Q == 0 ? " open" : ""}" data-c="${Q}">${i("", "COURSE", S, `<S C="mc">${u.length}/${u.length}</S>`, "", "Add course topics")}<D C="Q1y">${y(u, (h) => i(" Q1i", "TOPIC", j[h][0], `<S C="mn">${j[h][1]} min</S>`, ` data-t="${h}"`, "Add topic"))}</D></D>`), n = `<S C="gr">${K(6, () => "<i></i>")}</S>`, f = (S, u, Q) => `<D C="Q6${S}">${n}<small>${u}</small><S C="nm${S ? "" : " b"}">${Q}</S><S C="ct edN">7</S><S C="mn edM">30 min</S></D>`;
  return `<D C="Q16" data-m="studio"><D C="Q2g"><S C="Q1v">StormAI <S>Studio</S></S><D C="Q2c">${o}</D></D>
<D C="Q11 on" data-s="0"><D C="Q2m"><D C="Q27"><b>Topics</b><S>Courses</S></D><D C="Q18"><S>AI Governance</S><i>${c("search")}</i></D></D><D C="Q1e"><S>Focused</S><S C="tr"></S><S>Comprehensive</S></D><D C="Q2i"><S>TOPIC NAVIGATOR</S><S C="ct">7</S><D C="Q1n"><S C="on">Matches only</S><S>Show full courses</S></D></D><D C="Q2h">${l}</D></D>
<D C="Q11" data-s="1"><D C="Q1u"><S>${Oe}</S>${c("pencil")}</D><D C="Q2f">${f("", "SESSION", "Session 1")}${f(" ls", "LESSON", "AI Governance Principles, Structures, Compliance, and Applications")}<D C="Qs"></D></D></D>
<D C="Q11" data-s="2"><D C="Q1u"><S>Pick a cover for your course</S></D><D C="cvs">${y($t, (S, u) => `<B C="cvb${u ? "" : " on"}">${Dt(S)}</B>`)}</D></D></D>`;
}
function Xt() {
  const o = (i, l, n, f = "", S = "") => `<B C="dr${f}" ${i ? `data-d="${i}"` : 'data-r="eda"'}>${c(l)}<S>${n}</S>${S}</B>`;
  return `<D C="Qv" data-m="studio"><D C="sp on"><D C="Q28"><S>YOUR EXPERIENCE</S><S C="ct" data-r="sxn">0</S><S C="mn" data-r="sxm">0 min</S></D><D C="Q26"><S>TOPICS</S><S C="ct" data-r="sxf">0/7</S></D><D C="Q24"><i data-r="sxb"></i></D><D C="Q1x"></D></D>
<D C="sp"><D C="Q1f"><D><b C="edN">7</b><small>TOPICS</small></D><D><b C="edM">30 min</b><small>DURATION</small></D></D><S C="lab">UPPER TIER LABEL</S><D C="sel"><S>Session</S>${c("chevron-down")}</D><S C="lab dir">${c("zap")}<S>STORMAI DIRECTOR</S></S>${o("full", "sparkles", "Full Reorganize", "", "<em>Recommended</em>")}${o("keep", "list", "Preserve Order")}${o("struct", "columns-2", "Structure Only", " last")}<S C="lab as">${c("shield-check")}<S>ASSESSMENT</S></S>${o("", "file-text", "Add Pre / Post Test", " solo", c("check", "ok"))}</D>
<D C="sp"><D C="Q1s">${Dt("g")}</D><D C="Q2n">${Oe}</D><D C="Q2l cvm">7 topics \xB7 30 min</D><D C="Q14">${c("check")}<S>Save course</S></D></D></D>`;
}
const q = 20, Zt = 246, pt = 24, St = 62, ht = 56, mt = (o) => K(6, (i) => {
  const l = (i * 60 - 90) * Math.PI / 180;
  return `${(o * Math.cos(l)).toFixed(2)},${(o * Math.sin(l)).toFixed(2)} `;
}).trim();
function _t(o, i, l) {
  let n = 2 * i - (l - 1);
  return ((n - o) % 2 + 2) % 2 && (n += o % 4 < 2 ? 1 : -1), [Zt + n * pt, St + o * ht];
}
function ea(o) {
  const i = ($, s, b) => `<linearGradient id="${o}${$}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s}"${b ? ' stop-opacity=".55"' : ""}/><stop offset="${b ? ".55" : "1"}" stop-color="${b || s}"${b ? ' stop-opacity="0"' : ""}/></linearGradient>`, l = ($, s) => `<filter id="${o}${$}" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="${s}"/></filter>`;
  let n = l("b", 4) + l("b2", 3) + i("sh", "#fff", "#fff") + `<linearGradient id="${o}lkL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E9EEF5"/></linearGradient><linearGradient id="${o}lkD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#16203A"/><stop offset="1" stop-color="#0E1528"/></linearGradient>`;
  const f = `[data-slm="${o}"]`;
  let S = `${f} .Q1h,${f} .Q0 .gl{filter:url(#${o}b)}${f} .Q0 .ds{filter:url(#${o}b2)}${f} .Q0 .face{fill:url(#${o}lkL)}.dark ${f} .Q0 .face{fill:url(#${o}lkD)}`;
  for (const [$, s] of Object.entries(oe)) n += `<radialGradient id="${o}d${$}" cx="50%" cy="22%" r="85%"><stop offset="0" stop-color="${ne(s, "#ffffff", 0.45)}"/><stop offset=".55" stop-color="${s}"/><stop offset="1" stop-color="${ne(s, "#000000", 0.35)}"/></radialGradient><radialGradient id="${o}l${$}" cx="50%" cy="20%" r="90%"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="${ne(s, "#ffffff", 0.72)}"/><stop offset="1" stop-color="${ne(s, "#ffffff", 0.45)}"/></radialGradient><radialGradient id="${o}c${$}"><stop offset="0" stop-color="${s}" stop-opacity=".7"/><stop offset="1" stop-color="${s}" stop-opacity="0"/></radialGradient>`, S += `${f} .c-${$}.lit .face{fill:url(#${o}l${$})}.dark ${f} .c-${$}.lit .face{fill:url(#${o}d${$})}${f} .c-${$} .cl{fill:url(#${o}c${$})}`;
  const u = mt(q), Q = mt(q * 0.6), h = (q * Math.cos(-150 * Math.PI / 180)).toFixed(2), g = (q * Math.sin(-150 * Math.PI / 180)).toFixed(2), w = `${h},${g} 0,${-q} ${-h},${g} ${(q * 0.62).toFixed(2)},-2 ${(-q * 0.62).toFixed(2)},-2`, T = J.map(($, s) => $.map((b, P) => _t(s, P, $.length)));
  let D = "", p = "", z = 0;
  return J.forEach(($, s) => $.forEach(([, b], P) => {
    if (s + 1 >= J.length) return;
    const [I, A] = T[s][P];
    T[s + 1].map(([B], M) => [Math.abs(B - I), M]).sort((B, M) => B[0] - M[0] || B[1] - M[1]).slice(0, 2).forEach(([B, M]) => {
      if (B > pt * 3.2) return;
      const [se, ie] = T[s + 1][M], V = `data-a="${s}-${P}" data-b="${s + 1}-${M}" x1="${I}" y1="${A}" x2="${se}" y2="${ie}" style="--sl-w:${oe[b]};--sl-x:${(s * 0.09).toFixed(2)}s;--sl-ai:${(z * 0.37 % 2.6).toFixed(2)}s"`;
      D += `<line C="Q1h" ${V}/><line C="Q1l" ${V}/><line C="Q1k" pathLength="100" ${V}/>`, z++;
    });
  })), J.forEach(($, s) => $.forEach(([, b, P], I) => {
    const [A, B] = T[s][I], M = P ? '<g C="fl" transform="translate(14.4 -16)"><circle r="6.5"/><g transform="translate(-4 -4) scale(.333)" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/></g></g>' : "";
    p += `<g C="Q0 c-${b}" data-id="${s}-${I}" transform="translate(${A} ${B})" style="--sl-m:${oe[b]};--sl-ak:${ne(oe[b], "#ffffff", 0.35)};--sl-x:${(s * 0.09 + I * 0.03).toFixed(2)}s;--sl-aj:${((I * 0.4 + s * 0.3) % 2.8).toFixed(2)}s" role="button" tabindex="0" aria-label="Skill"><g C="hv"><ellipse C="ds" cx="0" cy="19" rx="16" ry="5"/><ellipse C="cl" cx="0" cy="23" rx="23" ry="7"/><polygon C="gl" points="${u}"/><polygon C="face" points="${u}"/><polygon C="tn" points="${u}"/><polygon C="sh" points="${w}" fill="url(#${o}sh)"/><polygon C="in" points="${Q}"/><polygon C="rim" points="${u}"/>${M}</g></g>`;
  })), `<style>${S}</style><D C="Q16" data-m="atlas"><D C="Q1c"><svg C="Qq" viewBox="0 0 628 372" width="628" height="372"><defs>${n}</defs><g>${D}</g><g>${p}</g></svg><D C="Q2e">${y(jt, ($, s) => `<D C="Q13" style="top:${St + s * ht}px"><S>${s + 1}/12</S><b>${$}</b></D>`)}</D><D C="Qz"><S>Network Administrator</S><S C="ct">54 skills</S><S C="to">Awareness ↓ Expert</S></D><D C="Qn"><S C="md">${c("award")}</S><S>Pathfinder</S></D></D></D>`;
}
function ta() {
  return `<D C="Qv" data-m="atlas"><D C="ap">${((o, i, l) => `<D C="${o}"><B C="on" data-at="ex">${i}</B><B data-at="pl">${l}<S C="ct apN">0</S></B></D>`)("Qi", "<S>Explore</S>", "<S>Skill Playlist</S>")}<D C="Qh on" data-at="ex"><D C="Q1z">${c("search")}<S>Search skills, courses, roles…</S></D><D C="Q1j"><S C="on">${c("briefcase")}<S>Job Title</S></S><S>${c("shield")}<S>NIST Role</S></S><S>${c("book")}<S>Course</S></S></D><D C="Q25"><S>JOB TITLES</S><S>30</S></D>${y(Ht.slice(0, 5), ([o, i, l]) => `<D C="Qm${i == 54 ? " on" : ""}"><i style="background:${l}"></i><S>${o}</S><em>${i}</em></D>`)}</D><D C="Qh" data-at="pl"></D><D C="Qg"><small>YOUR PROGRESS</small><D C="bar"><i C="apBar"></i></D><S C="tx2 apTx"></S><D C="Q2k"><D C="Qd">${c("trophy")}<D><b data-r="aps">0</b><small>SKILLS</small></D></D><D C="Qd bd">${c("award")}<D><b data-r="apb">0</b><small>BADGES</small></D></D></D></D></D></D>`;
}
function aa(o) {
  const i = y([["personalized", "circle-play"], ["studio", "wand-sparkles"], ["atlas", "map"]], ([n, f]) => `<S data-m="${n}">${c(f)}</S>`) + `<S>${c("bookmark")}</S><em></em><S style="margin-bottom:12px">${c("settings")}</S>`, l = ta();
  return `<D C="pl auto"><D C="x-modes" role="group" aria-label="StormAI Learning experiences">${y(Rt, ([n, f]) => `<B data-mode="${n}">${f}</B>`)}</D>
<D C="Q20"><D C="Qa" data-tool="0"><D C="Qf"><D C="Qw"><i></i><i></i><i></i><D C="Q1r">${c("lock")}<b></b></D><S C="Q2j"></S></D><D C="Qo">${i}</D><D C="Q29">${Yt()}${Kt()}${ea(o)}</D></D><D C="Qj">${Jt()}${Xt()}${l}</D></D></D>
<D C="Qy"><D C="Q3 tools on" data-m="personalized">${y(ae, ([n, f], S) => `<B C="Q7" data-t="${S}"><S C="ti">${c(n)}</S>${f}<S C="pg"><i></i></S></B>`)}</D><D C="Q3 studio" data-m="studio"><B C="Q5 br" data-r="cancel">Cancel</B><B C="Q5 br" data-r="back">Back</B><S></S><B C="Q5 pri" data-r="next"><S data-r="nextl">Next</S>${c("chevron-right")}</B></D><D C="Q3 atlas" data-m="atlas"></D></D></D>`;
}
function oa(o, i = {}) {
  Ne = i.icons || Ne;
  const l = "sl" + ++Wt + "-";
  let n = !1;
  const f = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), Q = (e, t) => {
    const a = setTimeout(() => {
      f.delete(a), n || e();
    }, t);
    return f.add(a), a;
  }, h = (e) => {
    clearTimeout(e), clearInterval(e), f.delete(e);
  }, g = (e) => {
    const t = requestAnimationFrame((a) => {
      S.delete(t), n || e(a);
    });
    return S.add(t), t;
  }, w = matchMedia("(prefers-reduced-motion: reduce)").matches, T = (e) => new Promise((t) => Q(t, w ? 0 : e));
  o.setAttribute("data-slm", l), o.innerHTML = N(aa(l));
  const D = (e, t = o) => t.querySelector(e), p = (e, t = o) => [...t.querySelectorAll(e)], z = (e) => [e, ...e.querySelectorAll("*")].forEach((t) => {
    !t.classList.contains("ct") && t.tagName != "STYLE" && [...t.childNodes].some((a) => a.nodeType == 3 && a.data.trim()) && F(t, "tx");
  });
  z(D(".Qa"));
  const $ = (e) => D(`[data-r="${e}"]`), s = (e, t, a) => e.addEventListener(t, a), b = D(".pl"), P = D(".Q20"), I = D(".Qa");
  let A = 1, B = "personalized";
  const M = () => {
    A = Math.min(1, P.clientWidth / 680) || 1, I.style.transform = `scale(${A})`, P.style.height = 430 * A + "px", m(b, "compact", A < 0.9), m(b, "tiny", A < 0.72);
    const e = D(".ap"), t = A < 0.9 ? D(".Q3.atlas") : D('.Qv[data-m="atlas"]');
    e.parentNode != t && t.appendChild(e);
  };
  M();
  const se = new ResizeObserver(M);
  se.observe(P);
  const ie = 3 / 380 * 100, V = 100 - ie * 5, De = [];
  {
    let e = 0;
    ze.forEach((t) => {
      De.push(e), e += t / 100 * V + ie;
    });
  }
  const ut = p(".Q10"), pe = D(".Q1q");
  let O = 0.1, Re = 0, Se = !1;
  const re = () => {
    const e = O * 100;
    pe.style.left = e + "%", ut.forEach((t, a) => {
      const C = Math.max(0, Math.min(1, (e - De[a]) / (ze[a] / 100 * V)));
      t.firstChild.style.width = C * 100 + "%";
    });
  }, Ge = (e) => {
    h(Re), Se = !0, F(pe, "jump"), O = e, re(), Re = Q(() => {
      v(pe, "jump"), Se = !1;
    }, 760);
  };
  let je = performance.now();
  const He = (e) => {
    const t = Math.min(0.1, (e - je) / 1e3);
    je = e, !Se && !w && B == "personalized" && (O += t * 0.012, O > 0.97 && (O = 0.04), re()), g(He);
  };
  re(), g(He);
  const he = p(".Q7"), Qt = p(".Qk"), yt = $("pt"), gt = $("pi"), me = p(".Q15 .Q1"), ue = p(".Qb button");
  let le = -1, Qe = [], X = !w, ye = 0;
  const ge = () => {
    Qe.forEach(h), Qe = [];
  }, Ee = (e, t) => Qe.push(Q(e, t)), be = (e) => {
    ue.forEach((t, a) => m(t, "on", a == e)), me.forEach((t, a) => m(t, "on", a == e)), Ge((De[e] + 1) / 100);
  };
  function Z(e) {
    ge(), le = e, I.dataset.tool = "", I.offsetWidth, I.dataset.tool = e, he.forEach((t, a) => {
      m(t, "on", a == e), H(t, a == e);
    }), Qt.forEach((t, a) => m(t, "on", a == e)), yt.textContent = ae[e][1], gt.innerHTML = N(c(ae[e][0])), X && he.forEach((t) => {
      const a = D(".pg i", t);
      a.style.animation = "none", a.offsetWidth, a.style.animation = "";
    }), e == 2 && (ue.forEach((t) => v(t, "on")), me.forEach((t) => v(t, "on")), Ee(() => be(3), 1500)), e == 3 && (O > 0.47 && (O = 0.04), re(), Ee(() => Ge(0.49), 1e3)), e == 4 && Et();
  }
  function Et() {
    const e = D(".Q21"), t = [];
    e.innerHTML = "", [78, 64, 86, 70].forEach((a, C) => Ee(() => {
      const r = document.createElement("div");
      r.className = "Ql new", r.innerHTML = N(c("sparkles", "tag") + `<D C="qb" style="width:${a}%"></D><D C="qb" style="width:${a - 28}%;background:var(--sl-h)"></D><D C="ops"><i></i><i></i><i></i><i></i></D>`), r.style.top = "-30px", r.style.opacity = "0", e.prepend(r), t.unshift(r), t.forEach((d, E) => E && v(d, "new")), g(() => g(() => t.forEach((d, E) => {
        d.style.top = E * 98 + "px", d.style.transform = E > 2 ? "scale(.96)" : "none", d.style.opacity = E > 2 ? "0" : String(1 - E * 0.25), d.style.zIndex = 10 - E;
      })));
    }, C * 1050));
  }
  const _ = () => {
    X && (X = !1, v(b, "auto"), h(ye));
  };
  he.forEach((e, t) => s(e, "click", () => {
    _(), Z(t);
  })), ue.forEach((e, t) => s(e, "click", (a) => {
    a.stopPropagation(), _(), ge(), be(t);
  })), me.forEach((e, t) => s(e, "click", () => {
    _(), ge(), be(t);
  })), X || v(b, "auto"), Z(0), X && (ye = setInterval(() => {
    !n && B == "personalized" && Z((le + 1) % 7);
  }, 4500), f.add(ye));
  function bt(e, t, a) {
    if (w || !e || !t) return Promise.resolve();
    const C = e.getBoundingClientRect(), r = t.getBoundingClientRect();
    if (!C.width || !r.width) return Promise.resolve();
    const d = document.createElement("div");
    return d.className = "Q23", d.textContent = a, Object.assign(d.style, { left: C.left + "px", top: C.top + "px", width: r.width / A + "px", transform: `scale(${A})` }), b.appendChild(d), u.add(d), g(() => g(() => d.style.transform = `translate(${r.left - C.left}px,${r.top - C.top}px) scale(${A})`)), new Promise((E) => Q(() => {
      d.remove(), u.delete(d), E();
    }, 570));
  }
  const x = /* @__PURE__ */ new Set();
  let R = 0, L = null, xe = !1, qe = !1, Ve = !1, ke = !1;
  const W = D(".Q1x"), ce = p(".Q1t"), We = (e) => Y.findIndex((t) => t[1].includes(e)), xt = () => [...x].reduce((e, t) => e + j[t][1], 0), ve = (e, t) => p(e).forEach((a) => a.textContent = t);
  function we() {
    const e = x.size, t = xt();
    $("sxn").textContent = e, $("sxm").textContent = t + " min", $("sxf").textContent = e + "/7", $("sxb").style.width = e / 7 * 100 + "%", ve(".edN", e), ve(".edM", t + " min"), ve(".cvm", `${e} topics \xB7 ${t} min`), p(".Q1i").forEach((a) => m(a, "in", x.has(+a.dataset.t))), ce.forEach((a) => m(a.firstElementChild, "in", Y[+a.dataset.c][1].every((C) => x.has(C)))), p(".Q1m", W).forEach((a) => a.remove()), W.insertAdjacentHTML("beforeend", N(K(Math.max(0, 7 - e), () => '<D C="Q1m"></D>')));
  }
  async function Ue(e, t) {
    if (x.has(e)) return;
    x.add(e);
    const a = document.createElement("div");
    a.className = "Qe wait", a.dataset.t = e, a.innerHTML = N(`<S C="nm"></S><S C="mn">${j[e][1]} min</S><B aria-label="Remove topic">${c("minus")}</B>`), D(".nm", a).textContent = j[e][0], z(a), s(D("button", a), "click", () => de(e)), W.insertBefore(a, p(".Qe", W).find((C) => +C.dataset.t > e) || D(".Q1m", W)), we(), await bt(t, a, j[e][0]), v(a, "wait");
  }
  function de(e) {
    if (!x.has(e)) return;
    x.delete(e);
    const t = D(`.Qe[data-t="${e}"]`, W);
    t && t.remove(), we();
  }
  async function Ae(e, t) {
    for (const a of Y[e][1]) x.has(a) || (Ue(a, t), await T(140));
  }
  ce.forEach((e) => {
    const t = +e.dataset.c, a = e.firstElementChild;
    s(D(".chv", a), "click", () => m(e, "open")), s(D(".ad", a), "click", () => Y[t][1].every((C) => x.has(C)) ? Y[t][1].forEach(de) : Ae(t, a)), p(".Q1i", e).forEach((C) => s(D(".ad", C), "click", () => {
      const r = +C.dataset.t;
      x.has(r) ? de(r) : Ue(r, C);
    }));
  });
  async function kt() {
    if (!ke) {
      ke = !0, await T(450);
      for (let e = 0; e < 5 && R == 0 && !n; e++) await Ae(e, ce[e].firstElementChild), await T(260);
      ke = !1;
    }
  }
  const Be = D(".Qs"), Ye = j.map(([e, t], a) => {
    const C = document.createElement("div");
    return C.className = "Q6", C.style.setProperty("--sl-ah", Gt[We(a)]), C.innerHTML = N(`<S C="gr">${K(6, () => "<i></i>")}</S><small>TOPIC</small><S C="nm"></S><S C="mn">${t} min</S>`), D(".nm", C).textContent = e, z(C), Be.appendChild(C), C;
  }), vt = [0, 3, 4, 2, 5, 1, 6], Je = p(".dr[data-d]");
  function Ie(e) {
    const t = L == "full" ? vt.filter((d) => x.has(d)) : [...x].sort((d, E) => d - E);
    let a = 0, C = -1;
    const r = L == "struct" ? 7 : 0;
    Ye.forEach((d) => d.style.display = "none"), t.forEach((d, E) => {
      const te = Ye[d], lt = We(d);
      E && lt != C && (a += r), C = lt;
      const ct = te.style.top;
      te.style.display = "flex", te.style.top = a + "px", e && ct && ct != a + "px" && (F(te, "mv"), Q(() => v(te, "mv"), 700)), a += 24;
    }), Be.style.height = a + "px", m(Be, "struct", L == "struct"), Je.forEach((d) => {
      m(d, "on", d.dataset.d == L), H(d, d.dataset.d == L);
    });
  }
  Je.forEach((e) => s(e, "click", () => {
    L = e.dataset.d, Ie(!0);
  }));
  const ee = $("eda");
  s(ee, "click", () => {
    const e = !ee.classList.contains("on");
    m(ee, "on", e), H(ee, e);
  });
  const Ke = p(".cvb"), wt = D(".Q1s"), Xe = D(".Q14"), Ze = (e) => {
    Ke.forEach((t, a) => {
      m(t, "on", a == e), H(t, a == e);
    }), wt.firstElementChild.className = "cv " + $t[e];
  };
  Ke.forEach((e, t) => s(e, "click", () => Ze(t)));
  const At = p(".Q11"), Bt = p(".sp"), _e = p(".Qc"), It = p(".Q1p"), et = $("back"), Me = $("next"), Mt = $("nextl");
  function U(e) {
    R = e, At.forEach((t, a) => m(t, "on", a == e)), Bt.forEach((t, a) => m(t, "on", a == e)), _e.forEach((t, a) => {
      m(t, "cur", a == e), m(t, "done", a < e);
    }), It.forEach((t, a) => m(t, "on", a < e)), et.disabled = e == 0, Mt.textContent = e == 2 ? "Save course" : "Next", m(Me, "saved", e == 2 && xe), e == 1 && (Ie(!1), Ve || (Ve = !0, Q(() => {
      R == 1 && !L && (L = "full", Ie(!0));
    }, w ? 0 : 700)));
  }
  async function tt() {
    if (!x.size) {
      for (let e = 0; e < 5; e++) await Ae(e, ce[e].firstElementChild);
      await T(500);
    }
  }
  s(Me, "click", async () => {
    R == 0 ? (await tt(), !n && U(1)) : R == 1 ? U(2) : (xe = !0, F(Xe, "ok"), F(Me, "saved"));
  }), s(et, "click", () => R > 0 && U(R - 1)), _e.forEach((e, t) => s(e, "click", async () => {
    t > 0 && !x.size && await tt(), !n && U(t);
  })), s($("cancel"), "click", () => {
    [...x].forEach(de), L = null, xe = !1, v(Xe, "ok"), Ze(0), v(ee, "on"), U(0);
  }), we(), U(0);
  const $e = D(".Qq"), Ce = {}, Tt = p("line", $e), Te = D('.Qh[data-at="pl"]'), at = D(".Qn");
  p(".Q0", $e).forEach((e) => Ce[e.dataset.id] = e);
  const G = [...qt];
  let ot = 0, nt = !1, st = !1, Pe = null;
  const Pt = (e) => {
    const [t, a] = e.split("-");
    return [J[t][a][0], oe[J[t][a][1]]];
  }, Ft = (e, t, a, C = "") => {
    const r = document.createElement("div");
    return r.className = e, r.style.setProperty("--sl-m", t), r.innerHTML = N(`<i></i><S></S>${C}`), D("span", r).textContent = a, z(r), r;
  };
  function Fe() {
    const e = new Set(G), t = /* @__PURE__ */ new Set();
    Tt.forEach((r) => {
      const d = r.dataset.a, E = r.dataset.b;
      m(r, "lit", e.has(d) && e.has(E)), e.has(d) && !e.has(E) && t.add(E);
    }), Object.entries(Ce).forEach(([r, d]) => {
      m(d, "lit", e.has(r)), m(d, "fro", t.has(r)), H(d, e.has(r));
    });
    const a = G.length;
    p(".apN").forEach((r) => {
      r.textContent = a, v(r, "bump"), r.offsetWidth, F(r, "bump"), Q(() => v(r, "bump"), 260);
    }), p(".apBar").forEach((r) => r.style.width = Math.min(1, a / 10) * 100 + "%");
    const C = a >= 10 ? "<b>10 / 10</b> \xB7 <em>Pathfinder</em>" : `<b>${a} / 10</b> \xB7 <em>Pathfinder</em> in ${10 - a}`;
    p(".apTx").forEach((r) => r.innerHTML = C), $("aps").textContent = a, a >= 10 && !ot && (ot = 1, $("apb").textContent = 1, F(D(".Qd.bd"), "won"), F(at, "show"), Q(() => v(at, "show"), 2400)), Te.innerHTML = "", G.slice().reverse().forEach((r) => {
      const [d, E] = Pt(r);
      Te.appendChild(Ft("Qu" + (r == Pe ? " new" : ""), E, d));
    }), Te.insertAdjacentHTML("beforeend", N(K(Math.max(0, 5 - a), () => '<D C="ap-e"></D>')));
  }
  function Le(e) {
    const t = Ce[e], a = G.indexOf(e);
    a >= 0 ? (G.splice(a, 1), Pe = null) : (G.push(e), Pe = e), v(t, "pop"), t.getBoundingClientRect(), F(t, "pop"), Fe();
  }
  Object.entries(Ce).forEach(([e, t]) => {
    s(t, "click", () => Le(e)), s(t, "keydown", (a) => {
      (a.key == "Enter" || a.key == " ") && (a.preventDefault(), Le(e));
    });
  });
  const it = p(".Qi button"), Lt = (e) => {
    it.forEach((t) => {
      m(t, "on", t.dataset.at == e), H(t, t.dataset.at == e);
    }), p(".Qh").forEach((t) => m(t, "on", t.dataset.at == e)), Fe();
  };
  it.forEach((e) => s(e, "click", () => Lt(e.dataset.at)));
  function Nt() {
    st || (st = !0, Vt.forEach((e, t) => Q(() => G.includes(e) || Le(e), w ? 0 : 1100 + t * 450))), !(nt || w) && (nt = !0, F($e, "rev"), Q(() => v($e, "rev"), 2e3));
  }
  Fe();
  const zt = p(".Q16,.Qv,.Q3"), Ot = p(".Qo span[data-m]"), rt = p(".x-modes button");
  rt.forEach((e) => s(e, "click", () => i.onMode ? i.onMode(e.dataset.mode) : fe.setMode(e.dataset.mode)));
  const fe = { setMode(e) {
    if (n) return;
    B = e;
    const t = o.closest(".sail-scope");
    t && (t.dataset.mode = e), rt.forEach((a) => {
      m(a, "on", a.dataset.mode == e), H(a, a.dataset.mode == e);
    }), zt.forEach((a) => m(a, "on", a.dataset.m == e)), Ot.forEach((a) => m(a, "on", a.dataset.m == e)), e != "personalized" && _(), e == "personalized" && le >= 0 && Z(le), e == "studio" && !qe && (qe = !0, x.size || kt()), e == "atlas" && Nt();
  }, tool(e) {
    n || (B != "personalized" && (i.onMode ? i.onMode("personalized") : fe.setMode("personalized")), _(), Z(e));
  }, destroy() {
    n = !0, f.forEach((e) => {
      clearTimeout(e), clearInterval(e);
    }), f.clear(), S.forEach((e) => cancelAnimationFrame(e)), S.clear(), se.disconnect(), u.forEach((e) => e.remove()), u.clear(), o.innerHTML = "", o.removeAttribute("data-slm");
  } };
  return fe.setMode("personalized"), fe;
}
export {
  oa as mountStormAIPlayer
};
