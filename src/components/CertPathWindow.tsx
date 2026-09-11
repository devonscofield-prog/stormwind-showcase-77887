import { ArrowLeft, Lock, Rocket, RotateCw } from "lucide-react";

/** Static mockup of a certification-prep path navigator concept,
 *  shown on the Data Science Pro page. */
export const CertPathWindow = () => (
  <div className="w-full overflow-hidden rounded-[12px] border border-white/10 bg-[#0F1720] shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
    {/* app */}
    <div
      className="relative h-[310px] min-w-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 70% 0%, #0E2A5C 0%, #071535 45%, #040B22 100%)",
      }}
    >
      {/* starfield */}
      <div
        className="absolute inset-0 opacity-75"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.6) .6px, transparent .9px), radial-gradient(rgba(255,255,255,.35) .5px, transparent .8px), radial-gradient(rgba(255,255,255,.25) .5px, transparent .8px)",
          backgroundSize: "53px 47px, 31px 37px, 19px 23px",
          backgroundPosition: "0 0, 13px 9px, 7px 3px",
        }}
      />

      {/* left panel */}
      <div className="absolute left-4 top-[22px] w-[190px] text-white">
        <div className="text-[22px] font-extrabold leading-none tracking-[-0.03em]">
          Cert<span className="text-[#3B9BE8]">Path</span>
        </div>
        <div className="mt-[5px] text-[8.5px] text-[#C8D3DE]">
          Your Certification Prep Navigator
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[9.5px] font-bold text-[#6FB4EE]">
          <ArrowLeft className="h-[9px] w-[9px]" strokeWidth={2.2} />
          Back to Journey Selector
        </div>
        <div className="mt-3 text-[7.5px] tracking-[0.08em] text-[#C8D3DE]">
          VIEWING THE PATH OF
        </div>
        <div className="mt-[3px] text-[12px] font-bold leading-[1.25]">
          Microsoft Power BI
          <br />
          Data Analyst
        </div>
        <div className="mt-2.5 rounded-[6px] border border-white/[0.06] bg-[#020818] px-2.5 py-[9px]">
          <div className="text-[7px] tracking-[0.08em] text-[#C8D3DE]">UP NEXT:</div>
          <div className="mt-[5px] inline-block rounded-full bg-[#1D6FB8] px-2 py-[3px] text-[8px] font-bold text-white">
            1 - 1
          </div>
          <div className="mt-1.5 text-[9px] font-bold text-white">
            Get or connect to data
          </div>
        </div>
      </div>

      {/* zig-zag path of locked nodes */}
      <div className="absolute left-[318px] top-3 grid h-[30px] w-[30px] place-items-center rounded-[9px] border-2 border-[#5F6B7C] bg-[#141C2A]">
        <Lock className="h-3 w-3 text-[#DDE5EE]" strokeWidth={2} />
      </div>
      <span className="absolute left-[352px] top-[50px] h-[5px] w-[5px] rounded-full bg-[#C8D3DE]" />
      <div className="absolute left-[380px] top-[66px] grid h-[30px] w-[30px] place-items-center rounded-[9px] border-2 border-[#5F6B7C] bg-[#141C2A]">
        <Lock className="h-3 w-3 text-[#DDE5EE]" strokeWidth={2} />
      </div>
      <span className="absolute left-[352px] top-[106px] h-[5px] w-[5px] rounded-full bg-[#C8D3DE]" />
      <div className="absolute left-[318px] top-[122px] grid h-[30px] w-[30px] place-items-center rounded-[9px] border-2 border-[#5F6B7C] bg-[#141C2A]">
        <Lock className="h-3 w-3 text-[#DDE5EE]" strokeWidth={2} />
      </div>
      <span className="absolute left-[290px] top-[162px] h-[5px] w-[5px] rounded-full bg-[#C8D3DE]" />
      <div className="absolute left-[256px] top-[178px] grid h-[30px] w-[30px] place-items-center rounded-[9px] border-2 border-[#5F6B7C] bg-[#141C2A]">
        <Lock className="h-3 w-3 text-[#DDE5EE]" strokeWidth={2} />
      </div>
      <span className="absolute left-[352px] top-[218px] h-[5px] w-[5px] rounded-full bg-[#C8D3DE]" />

      <span className="absolute left-[389px] top-[248px] h-[58px] w-[2px] rounded-[2px] bg-[#8FA0B0]" />

      {/* current-level callout */}
      <div className="absolute left-[250px] top-[244px] w-[132px] rounded-[3px] bg-[#1D6FB8] px-[9px] pb-[9px] pt-2 text-white">
        <div className="text-[6.5px] tracking-[0.08em]">LEVEL 1 - 1</div>
        <div className="mt-[2px] text-[9.5px] font-bold">Get or connect to data</div>
        <div className="mt-1.5 flex items-center justify-center gap-[5px] rounded-[2px] border-[1.5px] border-dashed border-white bg-[#040B22] px-2 py-[5px] text-[9px] font-bold">
          <RotateCw className="h-[9px] w-[9px]" strokeWidth={2.2} />
          Continue
        </div>
      </div>

      {/* active node */}
      <div className="absolute left-[396px] top-[254px] grid h-8 w-8 place-items-center rounded-[10px] border-[2.5px] border-[#3B9BE8] bg-[#0B2A55] shadow-[0_0_0_4px_rgba(59,155,232,0.18)]">
        <Rocket className="h-3.5 w-3.5 text-[#8FD0FF]" strokeWidth={2} />
      </div>
    </div>
  </div>
);

export default CertPathWindow;
