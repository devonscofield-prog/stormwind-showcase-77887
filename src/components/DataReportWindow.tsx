/** Static browser-window mockup of a Power BI-style report, shown on the Data Science Pro page. */

const kpis = [
  { label: "Revenue", value: "$4.82M", delta: "+12.4%", up: true },
  { label: "Orders", value: "18,240", delta: "+6.1%", up: true },
  { label: "Avg. Basket", value: "$264", delta: "-1.8%", up: false },
];

const regions = [
  { label: "West", width: "92%", color: "#D97706" },
  { label: "Central", width: "78%", color: "#E3B505" },
  { label: "East", width: "64%", color: "#D97706" },
  { label: "South", width: "51%", color: "#E3B505" },
  { label: "EMEA", width: "37%", color: "#D97706" },
  { label: "APAC", width: "24%", color: "#E3B505" },
];

const trend = [42, 55, 38, 61, 47, 72, 58, 80, 66, 88, 74, 95];

export const DataReportWindow = () => (
  <div className="overflow-hidden rounded-[12px] border border-white/10 bg-[#0F1720] shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
    {/* browser chrome */}
    <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 pt-2.5">
      <div className="flex items-center gap-2 rounded-t-[7px] bg-[#1B2530] px-3 py-[7px] text-[10.5px] text-[#C8D3DE]">
        <span className="h-2 w-2 rounded-full bg-[#FBBF24]" />
        StormWind Data Science Pro
      </div>
    </div>
    <div className="flex items-center gap-2 bg-[#1B2530] px-3 py-2">
      <span className="flex gap-1.5">
        <i className="block h-[7px] w-[7px] rounded-full bg-[#2B3543]" />
        <i className="block h-[7px] w-[7px] rounded-full bg-[#2B3543]" />
        <i className="block h-[7px] w-[7px] rounded-full bg-[#2B3543]" />
      </span>
      <span className="ml-1 flex-1 truncate rounded-full bg-[#0F1720] px-3 py-[5px] font-mono text-[10.5px] text-[#8FA0B0]">
        datasciencepro.stormwind.com/report
      </span>
    </div>

    {/* app */}
    <div className="flex bg-white">
      {/* left rail */}
      <div className="flex w-9 flex-none flex-col items-center gap-2 border-r border-[#E7ECF1] py-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-[14px] w-[14px] rounded-[3px] ${
              i === 1 ? "bg-[#D97706]" : "border border-[#D7DEE5] bg-[#F2F5F8]"
            }`}
          />
        ))}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between border-b border-[#E7ECF1] px-4 py-2.5">
          <span className="text-[12.5px] font-bold text-[#12222E]">
            Sales Performance — FY26
          </span>
          <span className="rounded-full border border-[#D7DEE5] bg-[#F2F5F8] px-2.5 py-[3px] text-[9px] font-semibold text-[#5B6672]">
            Refresh
          </span>
        </div>

        {/* KPI tiles */}
        <div className="grid grid-cols-3 gap-2 px-4 pt-3">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-[6px] border border-[#E2E8ED] px-2.5 py-2">
              <div className="text-[8.5px] uppercase tracking-[0.1em] text-[#8894A0]">
                {k.label}
              </div>
              <div className="mt-[3px] text-[15px] font-bold leading-none text-[#12222E]">
                {k.value}
              </div>
              <div
                className="mt-[4px] text-[8.5px] font-semibold"
                style={{ color: k.up ? "#0B7A5A" : "#C0392B" }}
              >
                {k.delta}
              </div>
            </div>
          ))}
        </div>

        {/* charts */}
        <div className="grid grid-cols-2 gap-2 p-4 pt-2.5">
          <div className="rounded-[6px] border border-[#E2E8ED] p-2.5">
            <div className="text-[9.5px] font-semibold text-[#3C4A57]">Revenue by Region</div>
            <div className="mt-2 space-y-[5px]">
              {regions.map((r) => (
                <div key={r.label} className="flex items-center gap-1.5">
                  <span className="w-[38px] flex-none text-[8px] text-[#5B6672]">{r.label}</span>
                  <span className="h-[7px] flex-1 overflow-hidden rounded-[2px] bg-[#F2F5F8]">
                    <span
                      className="block h-full rounded-[2px]"
                      style={{ width: r.width, background: r.color }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[6px] border border-[#E2E8ED] p-2.5">
            <div className="text-[9.5px] font-semibold text-[#3C4A57]">Monthly Trend</div>
            <div className="relative mt-2 h-[74px]">
              <span className="absolute inset-x-0 top-[26%] border-t border-dashed border-[#B9C3CD]" />
              <div className="flex h-full items-end gap-[3px]">
                {trend.map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t-[2px] bg-[#D97706]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E7ECF1] px-4 py-2 text-[8.5px] text-[#8894A0]">
          © 2025 - Data Science Pro
        </div>
      </div>
    </div>
  </div>
);

export default DataReportWindow;
