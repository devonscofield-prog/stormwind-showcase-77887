/** Static browser-window mockup of the DevOps Playgrounds library, shown on the DevOps page. */

type Playground = { name: string; icon: JSX.Element };

/** Kubernetes ship-wheel mark inside a hexagon. */
const K8sIcon = ({ bg = "#326CE5", fg = "#fff" }: { bg?: string; fg?: string }) => (
  <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
    <polygon
      points="24,3 42,13.5 42,34.5 24,45 6,34.5 6,13.5"
      fill={bg}
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="1"
    />
    <g stroke={fg} strokeWidth="2.2" fill="none" strokeLinecap="round">
      <circle cx="24" cy="24" r="4" fill={fg} stroke="none" />
      <circle cx="24" cy="24" r="9.5" />
      {Array.from({ length: 7 }).map((_, i) => {
        const a = (i * 360) / 7 - 90;
        const rad = (a * Math.PI) / 180;
        const x1 = 24 + Math.cos(rad) * 9.5;
        const y1 = 24 + Math.sin(rad) * 9.5;
        const x2 = 24 + Math.cos(rad) * 14.5;
        const y2 = 24 + Math.sin(rad) * 14.5;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  </svg>
);

const groups: { heading: string; items: Playground[] }[] = [
  {
    heading: "Kubernetes Playgrounds",
    items: [
      { name: "Kubernetes Multi-Cluster", icon: <K8sIcon /> },
      { name: "Kubernetes multi-node (latest)", icon: <K8sIcon /> },
      { name: "Kubernetes single-node (latest)", icon: <K8sIcon /> },
    ],
  },
  {
    heading: "Kubernetes Extended Playgrounds",
    items: [
      { name: "gVisor", icon: <K8sIcon bg="#7C5CFF" /> },
      { name: "HA ETCD Cluster", icon: <K8sIcon bg="#419EDA" /> },
      { name: "Helm", icon: <K8sIcon bg="#0F1689" /> },
      { name: "Istio", icon: <K8sIcon bg="#466BB0" /> },
      { name: "Jsonnet Tanka", icon: <K8sIcon bg="#F59E0B" /> },
      { name: "K8s with CRI-O", icon: <K8sIcon bg="#60A5FA" /> },
      { name: "K8s with EFK", icon: <K8sIcon bg="#22C55E" /> },
      { name: "Kubernetes Flannel CNI", icon: <K8sIcon bg="#5FA8E8" /> },
    ],
  },
];

export const PlaygroundLibraryWindow = () => (
  <div className="overflow-hidden rounded-[12px] border border-white/10 bg-[#0F1720] shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
    {/* browser chrome */}
    <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 pt-2.5">
      <div className="flex items-center gap-2 rounded-t-[7px] bg-[#1B2530] px-3 py-[7px] text-[10.5px] text-[#C8D3DE]">
        <span className="h-2 w-2 rounded-full bg-[#818CF8]" />
        StormWind DevOps Playgrounds
      </div>
    </div>
    <div className="flex items-center gap-2 bg-[#1B2530] px-3 py-2">
      <span className="flex gap-1.5">
        <i className="block h-[7px] w-[7px] rounded-full bg-[#2B3543]" />
        <i className="block h-[7px] w-[7px] rounded-full bg-[#2B3543]" />
        <i className="block h-[7px] w-[7px] rounded-full bg-[#2B3543]" />
      </span>
      <span className="ml-1 flex-1 truncate rounded-full bg-[#0F1720] px-3 py-[5px] font-mono text-[10.5px] text-[#8FA0B0]">
        playgrounds.stormwind.com/library
      </span>
    </div>

    {/* app */}
    <div className="bg-[#0A0A0B] px-5 py-6 sm:px-7">
      {groups.map((g, gi) => (
        <section key={g.heading} className={gi > 0 ? "mt-7 border-t border-white/10 pt-7" : ""}>
          <div className="grid gap-5 sm:grid-cols-[130px_1fr]">
            <h3 className="text-[15px] font-semibold leading-snug text-white">{g.heading}</h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {g.items.map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col items-center gap-3 rounded-[14px] border border-white/10 bg-[#17171A] px-2 pb-4 pt-5 text-center"
                >
                  {p.icon}
                  <span className="text-[10.5px] leading-tight text-[#D7DBE0]">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  </div>
);

export default PlaygroundLibraryWindow;
