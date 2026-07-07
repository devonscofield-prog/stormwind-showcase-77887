import { useEffect } from "react";

const EXTERNAL_COURSES_URL = "https://stormwindstudios.com/courses";

const Courses = () => {
  useEffect(() => {
    document.title = "Course Catalog - StormWind Studios";
    try {
      // Break out of any iframe (e.g. Lovable preview) — the destination
      // site refuses to be framed.
      if (window.top && window.top !== window.self) {
        window.top.location.href = EXTERNAL_COURSES_URL;
        return;
      }
    } catch {
      // Cross-origin access to window.top can throw; fall through to same-frame nav.
    }
    window.location.replace(EXTERNAL_COURSES_URL);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-muted-foreground animate-pulse">
        Redirecting to StormWind Studios courses...
      </p>
    </div>
  );
};

export default Courses;
