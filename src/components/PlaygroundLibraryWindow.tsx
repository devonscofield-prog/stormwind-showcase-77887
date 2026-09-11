import {
  Boxes,
  Container,
  GitBranch,
  Network,
  Orbit,
  Settings,
  ShieldCheck,
  ShipWheel,
  Waypoints,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Playground = {
  title: string;
  icon: LucideIcon;
};

const playgrounds: Playground[] = [
  { title: "Kubernetes Multi-Cluster", icon: Network },
  { title: "Kubernetes multi-node (latest)", icon: Boxes },
  { title: "Kubernetes single-node (latest)", icon: ShipWheel },
];

const extendedPlaygrounds: Playground[] = [
  { title: "Cluster Visibility", icon: Orbit },
  { title: "HA ETCD Cluster", icon: Settings },
  { title: "Helm", icon: ShipWheel },
  { title: "Service Mesh", icon: Waypoints },
  { title: "Container Runtime", icon: Container },
  { title: "K8s with CRI-O", icon: Workflow },
  { title: "K8s with GitOps", icon: GitBranch },
  { title: "Kubernetes CNI", icon: ShieldCheck },
];

const PlaygroundTile = ({ title, icon: Icon }: Playground) => (
  <article className="group flex aspect-square min-h-[102px] flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card/80 p-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card">
    <span className="grid h-12 w-12 place-items-center text-primary transition-transform duration-200 group-hover:scale-105">
      <Icon className="h-10 w-10" strokeWidth={1.55} aria-hidden="true" />
    </span>
    <span className="max-w-[8rem] text-[10px] font-medium leading-[1.35] text-foreground">
      {title}
    </span>
  </article>
);

/** Static catalog concept for the partner-powered DevOps playground library. */
export const PlaygroundLibraryWindow = () => (
  <div className="overflow-hidden rounded-xl border border-border bg-background/95 shadow-2xl">
    <div className="grid gap-7 p-5 sm:p-6">
      <section className="grid gap-5 sm:grid-cols-[128px_1fr] sm:items-start">
        <div>
          <p className="text-[17px] font-semibold leading-[1.25] text-foreground">
            Kubernetes
            <br />
            Playgrounds
          </p>
          <span className="mt-2 block h-0.5 w-8 bg-primary" />
        </div>

        <div className="grid grid-cols-2 gap-2.5 min-[520px]:grid-cols-3">
          {playgrounds.map((playground) => (
            <PlaygroundTile key={playground.title} {...playground} />
          ))}
        </div>
      </section>

      <div className="h-px bg-border" />

      <section className="grid gap-5 sm:grid-cols-[128px_1fr] sm:items-start">
        <div>
          <p className="text-[17px] font-semibold leading-[1.25] text-foreground">
            Kubernetes Extended
            <br />
            Playgrounds
          </p>
          <span className="mt-2 block h-0.5 w-8 bg-primary" />
        </div>

        <div className="grid grid-cols-2 gap-2.5 min-[520px]:grid-cols-4">
          {extendedPlaygrounds.map((playground) => (
            <PlaygroundTile key={playground.title} {...playground} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default PlaygroundLibraryWindow;