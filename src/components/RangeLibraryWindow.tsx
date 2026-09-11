/** Static browser-window mockup of the Azure Range library, shown on the Cloud page. */

const activities = [
  {
    title: "Azure Storage Sandbox",
    description:
      "Work with blobs, shared access signatures, and tools for uploading, securing, and managing data.",
    launch: "2 min",
    run: "120 min",
  },
  {
    title: "Azure Networking Sandbox",
    description: "Manage virtual networks, peering, public IPs, and troubleshooting connectivity.",
    launch: "2 min",
    run: "120 min",
  },
  {
    title: "Azure Compute Sandbox",
    description:
      "Manage and configure virtual machines, extensions, and monitor cloud-init and diagnostics.",
    launch: "3 min",
    run: "120 min",
  },
  {
    title: "Azure Identity Sandbox",
    description: "Configure users, groups, roles, and access control across an Entra ID tenant.",
    launch: "2 min",
    run: "120 min",
  },
];

const Thumb = () => (
  <div className="relative h-[74px] overflow-hidden rounded-[6px] bg-[#0B120E] p-2">
    <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(52,211,153,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.09)_1px,transparent_1px)] [background-size:14px_14px]" />
    <div className="relative flex h-full items-center justify-center gap-2">
      <div className="h-[42px] w-[52px] rounded-[3px] border border-[#34D399]/60 bg-[#34D399]/10" />
      <div className="h-[2px] w-4 bg-[#34D399]/60" />
      <div className="flex flex-col gap-1.5">
        <div className="h-[17px] w-[46px] rounded-[3px] border border-[#34D399]/60 bg-[#34D399]/10" />
        <div className="h-[17px] w-[46px] rounded-[3px] border border-[#34D399]/40 bg-[#34D399]/5" />
      </div>
    </div>
  </div>
);

export const RangeLibraryWindow = () => (
  <div className="overflow-hidden rounded-[12px] border border-white/10 bg-[#0F1720] shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
    {/* browser chrome */}
    <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 pt-2.5">
      <div className="flex items-center gap-2 rounded-t-[7px] bg-[#1B2530] px-3 py-[7px] text-[10.5px] text-[#C8D3DE]">
        <span className="h-2 w-2 rounded-full bg-[#34D399]" />
        StormWind Azure Range
      </div>
    </div>
    <div className="flex items-center gap-2 bg-[#1B2530] px-3 py-2">
      <span className="flex gap-1.5">
        <i className="block h-[7px] w-[7px] rounded-full bg-[#2B3543]" />
        <i className="block h-[7px] w-[7px] rounded-full bg-[#2B3543]" />
        <i className="block h-[7px] w-[7px] rounded-full bg-[#2B3543]" />
      </span>
      <span className="ml-1 flex-1 truncate rounded-full bg-[#0F1720] px-3 py-[5px] font-mono text-[10.5px] text-[#8FA0B0]">
        azurerange.stormwind.com/?PageNumber=1
      </span>
    </div>

    {/* app */}
    <div className="bg-white">
      <div className="flex items-center gap-2 border-b border-[#E7ECF1] px-4 py-2.5">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-[#009A77] text-[10px] font-bold text-white">
          ☁
        </span>
        <span className="text-[12.5px] font-bold text-[#12222E]">Azure Range</span>
        <span className="text-[11.5px] text-[#5B6672]">Library</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
        <span className="flex w-[150px] items-center justify-between rounded-[5px] border border-[#D7DEE5] px-2.5 py-[5px] text-[10.5px] text-[#3C4A57]">
          All Activities <b className="font-normal text-[#8894A0]">▾</b>
        </span>
        <span className="flex items-center gap-2.5 text-[10px] text-[#5B6672]">
          Skill Level:
          {["All", "Beginner", "Intermediate", "Advanced"].map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              <i
                className={`block h-[9px] w-[9px] rounded-full border ${
                  i === 0
                    ? "border-[#009A77] bg-[#009A77] ring-1 ring-inset ring-white"
                    : "border-[#B9C3CD]"
                }`}
              />
              {l}
            </span>
          ))}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 px-4 pb-3 sm:grid-cols-4">
        {activities.map((a) => (
          <article key={a.title} className="rounded-[6px] border border-[#E2E8ED] p-2">
            <Thumb />
            <div className="mt-2 flex items-center gap-1 text-[8.5px] text-[#5B6672]">
              <span className="h-[7px] w-[7px] rounded-full border border-[#8894A0]" />
              Sandbox
            </div>
            <h4 className="mt-1 text-[10.5px] font-semibold leading-tight text-[#0B5FBF] underline decoration-[#0B5FBF]/40 underline-offset-2">
              {a.title}
            </h4>
            <p className="mt-1 text-[8.5px] leading-[1.45] text-[#5B6672]">{a.description}</p>
            <div className="mt-2 space-y-[3px] text-[8px] text-[#5B6672]">
              <div>▦ Launch Time: {a.launch}</div>
              <div>◷ Run Time: {a.run}</div>
            </div>
            <div className="mt-2 flex justify-end">
              <span className="rounded-[4px] bg-[#009A77] px-2 py-[4px] text-[8.5px] font-semibold text-white">
                Access Now
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 pb-3 text-[9.5px] text-[#5B6672]">
        <span>Previous</span>
        <span>Page 1 of 2</span>
        <span className="rounded-[4px] border border-[#D7DEE5] bg-[#F2F5F8] px-2 py-[3px]">
          Next
        </span>
      </div>

      <div className="border-t border-[#E7ECF1] px-4 py-2 text-[8.5px] text-[#8894A0]">
        © 2025 - Azure Range
      </div>
    </div>
  </div>
);

export default RangeLibraryWindow;
