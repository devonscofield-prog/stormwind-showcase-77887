import { useMemo } from "react";
import { ganttSvg } from "@/lib/ganttScene";

/** Decorative Gantt-chart illustration for the Project Management hero. */
export const GanttScene = () => {
  const markup = useMemo(() => ganttSvg(), []);

  return (
    <div className="grid justify-items-center">
      <svg
        viewBox="0 -10 730 400"
        aria-hidden="true"
        focusable="false"
        className="block h-auto w-full max-w-[600px] overflow-visible"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </div>
  );
};

export default GanttScene;