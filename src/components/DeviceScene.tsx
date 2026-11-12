import { useEffect, useRef } from "react";
import { deviceSceneHtml } from "@/lib/deviceScene";

/** Decorative laptop / tablet / phone product shot for the Enterprise Reporting hero. Static. */
export const DeviceScene = () => {
  const fitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = fitRef.current;
    if (!fit) return;
    const stage = fit.firstElementChild as HTMLElement | null;
    if (!stage) return;
    const resize = () => {
      const W = fit.clientWidth;
      let s: number;
      let x: number;
      if (W >= 420) {
        s = Math.min(1.06, W / 1120);
        x = (W - 1120 * s) / 2;
      } else {
        s = W / 870;
        x = -135 * s;
      }
      stage.style.transform = `translate(${x}px,0) scale(${s})`;
      fit.style.height = `${580 * s}px`;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(fit);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="ds" aria-hidden="true">
      <div ref={fitRef} className="ds-fit" dangerouslySetInnerHTML={{ __html: deviceSceneHtml }} />
    </div>
  );
};

export default DeviceScene;
