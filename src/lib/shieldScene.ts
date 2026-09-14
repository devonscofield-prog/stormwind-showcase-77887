/** Wordless shield-over-devices illustration for the Security Awareness hero (inner SVG markup). */
export const shieldSvg = (): string => `<defs>
<radialGradient id="sg" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#009970" stop-opacity=".16"/><stop offset="1" stop-color="#009970" stop-opacity="0"/></radialGradient>
<linearGradient id="sh1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#16B389"/><stop offset="1" stop-color="#007A5A"/></linearGradient>
<linearGradient id="sh2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".55"/><stop offset="1" stop-color="#FFFFFF" stop-opacity=".05"/></linearGradient>
<linearGradient id="dev" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--sa-devA)"/><stop offset="1" stop-color="var(--sa-devB)"/></linearGradient>
<filter id="drop" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#0B3B2E" flood-opacity=".28"/></filter>
<filter id="soft" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#0F1720" flood-opacity=".18"/></filter>
</defs>
<ellipse cx="280" cy="240" rx="250" ry="200" fill="url(#sg)"/>
<g filter="url(#soft)">
<rect x="150" y="150" width="200" height="130" rx="10" fill="url(#dev)" stroke="var(--sa-devS)" stroke-width="1.5"/>
<rect x="164" y="164" width="172" height="102" rx="5" fill="var(--sa-scr)"/>
<path d="M125 292h250l-14 16H139z" fill="var(--sa-devB)"/>
<rect x="372" y="176" width="58" height="112" rx="9" fill="url(#dev)" stroke="var(--sa-devS)" stroke-width="1.5"/><rect x="380" y="188" width="42" height="86" rx="4" fill="var(--sa-scr)"/>
<rect x="116" y="196" width="46" height="88" rx="7" fill="url(#dev)" stroke="var(--sa-devS)" stroke-width="1.5"/><rect x="123" y="206" width="32" height="66" rx="3" fill="var(--sa-scr)"/>
<rect x="176" y="178" width="70" height="7" rx="3.5" fill="var(--sa-bar)"/><rect x="176" y="192" width="120" height="5" rx="2.5" fill="var(--sa-bar2)"/><rect x="176" y="204" width="100" height="5" rx="2.5" fill="var(--sa-bar2)"/>
<rect x="176" y="222" width="148" height="30" rx="5" fill="var(--sa-bar2)" opacity=".6"/>
<rect x="388" y="198" width="26" height="5" rx="2.5" fill="var(--sa-bar)"/><rect x="388" y="209" width="20" height="4" rx="2" fill="var(--sa-bar2)"/><rect x="388" y="219" width="24" height="4" rx="2" fill="var(--sa-bar2)"/>
<rect x="129" y="216" width="20" height="5" rx="2.5" fill="var(--sa-bar)"/><rect x="129" y="227" width="16" height="4" rx="2" fill="var(--sa-bar2)"/>
</g>
<g filter="url(#drop)" class="sa-shieldbody">
<path d="M280 96l96 34v78c0 62-40 112-96 132-56-20-96-70-96-132v-78z" fill="url(#sh1)"/>
<path d="M280 96l96 34v78c0 62-40 112-96 132V96z" fill="#000" opacity=".12"/>
<path d="M280 112l80 28v68c0 52-33 94-80 112-47-18-80-60-80-112v-68z" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2"/>
<path d="M280 96l96 34v40c-40 10-72 28-96 52-24-24-56-42-96-52v-40z" fill="url(#sh2)"/>
<path d="M244 226l26 26 50-56" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<circle cx="280" cy="230" r="150" fill="none" stroke="#009970" stroke-width="2" class="sa-ring"/>
<circle cx="280" cy="230" r="150" fill="none" stroke="#009970" stroke-width="2" class="sa-ring" style="animation-delay:-1.5s"/>
<g transform="translate(70 110)"><g class="sa-threat" style="animation-delay:-0s;--dx:67.2px;--dy:38.4px">
<circle r="22" fill="#FBE9E7" stroke="#F3C4BF" stroke-width="1.5"/><rect x="-14" y="-10" width="28" height="20" rx="4" fill="#fff" stroke="#C8322B" stroke-width="2"/><path d="M-12 -8l12 9 12-9" fill="none" stroke="#C8322B" stroke-width="2"/></g></g><g transform="translate(470 90)"><g class="sa-threat" style="animation-delay:-1.1s;--dx:-60.8px;--dy:44.8px">
<circle r="22" fill="#FBE9E7" stroke="#F3C4BF" stroke-width="1.5"/><path d="M-10 4a7 7 0 0 1 0-10l4-4M10 -4a7 7 0 0 1 0 10l-4 4M-6 6l12-12" fill="none" stroke="#C8322B" stroke-width="3" stroke-linecap="round"/></g></g><g transform="translate(60 330)"><g class="sa-threat" style="animation-delay:-2.2s;--dx:70.4px;--dy:-32.0px">
<circle r="22" fill="#FBE9E7" stroke="#F3C4BF" stroke-width="1.5"/><path d="M0 -13l14 24h-28z" fill="#fff" stroke="#C8322B" stroke-width="2.2" stroke-linejoin="round"/><path d="M0 -3v7M0 8v.5" stroke="#C8322B" stroke-width="2.6" stroke-linecap="round"/></g></g><g transform="translate(490 320)"><g class="sa-threat" style="animation-delay:-0.6s;--dx:-67.2px;--dy:-28.8px">
<circle r="22" fill="#FBE9E7" stroke="#F3C4BF" stroke-width="1.5"/><rect x="-7" y="-14" width="14" height="24" rx="3" fill="#fff" stroke="#C8322B" stroke-width="2"/><rect x="-4" y="-10" width="8" height="6" fill="#C8322B"/></g></g><g transform="translate(300 40)"><g class="sa-threat" style="animation-delay:-1.7s;--dx:-6.4px;--dy:60.8px">
<circle r="22" fill="#FBE9E7" stroke="#F3C4BF" stroke-width="1.5"/><circle r="12" fill="#fff" stroke="#C8322B" stroke-width="2.2"/><path d="M-5 -5l10 10M5 -5l-10 10" stroke="#C8322B" stroke-width="2.6" stroke-linecap="round"/></g></g>
<ellipse cx="280" cy="420" rx="170" ry="16" fill="#0F1720" opacity=".10"/>`;

/** Small email → AI → shield pipeline used in the StormAI Phishing cross-link panel. */
export const phishMiniSvg = (): string => `<defs><filter id="pms" x="-10%" y="-10%" width="120%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#0B1220" flood-opacity=".16"/></filter></defs>
<g filter="url(#pms)"><rect x="20" y="46" width="72" height="52" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))"/><path d="M26 54l30 22 30-22" fill="none" stroke="#C8322B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="88" cy="50" r="7" fill="#C8322B"/></g>
<path d="M96 72 H128" stroke="var(--sa-bar)" stroke-width="2" stroke-dasharray="4 4"/><circle r="3" fill="#7C5CF0"><animateMotion dur="2.2s" repeatCount="indefinite" path="M96 72 H128"/></circle>
<g filter="url(#pms)"><rect x="128" y="44" width="56" height="56" rx="12" fill="#7C5CF0"/><rect x="142" y="58" width="28" height="28" rx="6" fill="none" stroke="#fff" stroke-width="2"/><circle cx="156" cy="72" r="4" fill="#fff"/>
<path d="M136 56h-6M136 72h-6M136 88h-6M182 56h6M182 72h6M182 88h6M144 42v-6M156 42v-6M168 42v-6M144 106v-6M156 106v-6M168 106v-6" stroke="#7C5CF0" stroke-width="2"/></g>
<path d="M184 72 H216" stroke="var(--sa-bar)" stroke-width="2" stroke-dasharray="4 4"/><circle r="3" fill="#009970" opacity="0"><set attributeName="opacity" to="1" begin="1.1s"/><animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite" path="M184 72 H216"/></circle>
<g filter="url(#pms)"><path d="M248 40l30 11v24c0 19-13 33-30 39-17-6-30-20-30-39V51z" fill="#009970"/><path d="M236 74l8 8 16-18" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`;