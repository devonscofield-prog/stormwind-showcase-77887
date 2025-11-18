import { usePageView } from '@/hooks/usePageView';

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  usePageView();
  return <>{children}</>;
};
