import { useEffect, useState } from "react";

/** Avoids flashing a full loading screen for page chunks that arrive quickly. */
export const RouteLoading = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 180);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {visible && (
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-label="Loading page" />
      )}
    </div>
  );
};

export default RouteLoading;