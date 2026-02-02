import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * Reads `ref`, `client`, and `company` query params from the current URL
 * and stores them in sessionStorage so that all subsequent analytics events
 * in this session can include share-link attribution.
 *
 * Call this once near the top of the component tree (e.g. in
 * AnalyticsProvider or App).
 */
export const useShareTracking = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get("ref");
    const client = searchParams.get("client");
    const company = searchParams.get("company");

    if (ref) {
      sessionStorage.setItem("share_ref", ref);
    }
    if (client) {
      sessionStorage.setItem("share_client", client);
    }
    if (company) {
      sessionStorage.setItem("share_company", company);
    }
  }, [searchParams]);
};

/** Retrieve any stored share attribution for use in analytics events */
export const getShareAttribution = (): {
  shareRef: string | null;
  shareClient: string | null;
  shareCompany: string | null;
} => ({
  shareRef: sessionStorage.getItem("share_ref"),
  shareClient: sessionStorage.getItem("share_client"),
  shareCompany: sessionStorage.getItem("share_company"),
});
