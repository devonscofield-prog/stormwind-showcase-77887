import { usePageView } from '@/hooks/usePageView';
import { useShareTracking } from '@/hooks/useShareTracking';

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  usePageView();
  useShareTracking();
  return <>{children}</>;
};
