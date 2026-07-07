import { useEffect } from "react";

const EXTERNAL_COURSES_URL = "https://stormwindstudios.com/courses";

const Courses = () => {
  useEffect(() => {
    document.title = "Course Catalog - StormWind Studios";
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
