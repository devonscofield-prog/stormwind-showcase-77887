import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from './useAnalytics';

export const usePageView = (pageTitle?: string) => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    const title = pageTitle || document.title;
    trackPageView(location.pathname, title);
  }, [location.pathname, pageTitle, trackPageView]);
};
