import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getSharedLinkByCode,
  recordSharedLinkView,
  isLinkExpired,
} from "@/lib/sharedLinks";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link2Off, ArrowRight } from "lucide-react";

/**
 * Landing page for shared links.
 *
 * Route: /s/:shortCode
 *
 * Looks up the shared link, records a view, and redirects the visitor
 * to the actual course page with attribution query params so that
 * analytics can tie the visit back to the share.
 */
const SharedLinkRedirect = () => {
  const { shortCode } = useParams<{ shortCode: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<"not_found" | "expired" | null>(null);

  useEffect(() => {
    if (!shortCode) {
      setError("not_found");
      return;
    }

    const link = getSharedLinkByCode(shortCode);

    if (!link) {
      setError("not_found");
      return;
    }

    if (isLinkExpired(link)) {
      setError("expired");
      return;
    }

    // Record the view
    const sessionId =
      sessionStorage.getItem("analytics_session_id") ||
      `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    recordSharedLinkView(shortCode, sessionId, document.referrer);

    // Build destination URL with attribution params
    const basePath = link.variantId
      ? `/training-samples/${link.courseId}/${link.variantId}`
      : `/training-samples/${link.courseId}`;

    const params = new URLSearchParams();
    params.set("ref", shortCode);
    if (link.clientName) params.set("client", link.clientName);
    if (link.clientCompany) params.set("company", link.clientCompany);

    navigate(`${basePath}?${params.toString()}`, { replace: true });
  }, [shortCode, navigate]);

  // While redirecting, show nothing (happens in a single frame)
  if (!error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">
          Redirecting...
        </div>
      </div>
    );
  }

  // Error states
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center space-y-6 max-w-md px-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <Link2Off className="h-8 w-8 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            {error === "expired" ? "Link Expired" : "Link Not Found"}
          </h1>
          <p className="text-muted-foreground">
            {error === "expired"
              ? "This share link has expired. Please ask the sender for a new link."
              : "This share link doesn't exist or has been removed."}
          </p>
          <Button onClick={() => navigate("/training-samples")} className="gap-2">
            Browse Training Samples
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SharedLinkRedirect;
