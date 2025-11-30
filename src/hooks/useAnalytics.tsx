import { useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

// Generate or retrieve session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

// Get device info
const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  let deviceType = 'desktop';
  let browser = 'unknown';
  let os = 'unknown';

  // Device type
  if (/mobile/i.test(ua)) deviceType = 'mobile';
  else if (/tablet/i.test(ua)) deviceType = 'tablet';

  // Browser
  if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Safari')) browser = 'Safari';
  else if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Edge')) browser = 'Edge';

  // OS
  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iOS')) os = 'iOS';

  return { deviceType, browser, os };
};

export const useAnalytics = () => {
  const { isAdmin } = useAuth();
  const sessionId = useRef(getSessionId());
  const sessionStartTime = useRef(Date.now());
  const currentPageStartTime = useRef(Date.now());
  const eventBuffer = useRef<any[]>([]);
  const flushTimeoutRef = useRef<NodeJS.Timeout>();

  // Flush buffered events to database
  const flushEvents = useCallback(async () => {
    // Don't track admin users
    if (isAdmin) return;
    
    if (eventBuffer.current.length === 0) return;

    const events = [...eventBuffer.current];
    eventBuffer.current = [];

    try {
      await supabase.functions.invoke('analytics-ingest', {
        body: { events }
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }, [isAdmin]);

  // Buffer event and schedule flush
  const bufferEvent = useCallback((event: any) => {
    // Don't track admin users
    if (isAdmin) return;
    
    eventBuffer.current.push(event);

    // Clear existing timeout
    if (flushTimeoutRef.current) {
      clearTimeout(flushTimeoutRef.current);
    }

    // Flush after 2 seconds or when buffer is large
    if (eventBuffer.current.length >= 10) {
      flushEvents();
    } else {
      flushTimeoutRef.current = setTimeout(flushEvents, 2000);
    }
  }, [flushEvents, isAdmin]);

  // Track page view
  const trackPageView = useCallback((url: string, title: string) => {
    const { deviceType, browser, os } = getDeviceInfo();
    
    bufferEvent({
      type: 'page_view',
      data: {
        session_id: sessionId.current,
        url,
        page_title: title,
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        device_type: deviceType,
        browser,
        os,
        screen_width: window.screen.width,
        screen_height: window.screen.height
      }
    });

    currentPageStartTime.current = Date.now();
  }, [bufferEvent]);

  // Track interaction event
  const trackEvent = useCallback((
    eventType: string,
    eventCategory?: string,
    eventLabel?: string,
    eventValue?: string,
    metadata?: any
  ) => {
    bufferEvent({
      type: 'interaction',
      data: {
        session_id: sessionId.current,
        event_type: eventType,
        event_category: eventCategory,
        event_label: eventLabel,
        event_value: eventValue,
        page_url: window.location.pathname,
        ...metadata
      }
    });
  }, [bufferEvent]);

  // Track course analytics
  const trackCourse = useCallback((courseName: string, category: string, action: string) => {
    bufferEvent({
      type: 'course',
      data: {
        session_id: sessionId.current,
        course_name: courseName,
        course_category: category,
        action_type: action,
        page_url: window.location.pathname
      }
    });
  }, [bufferEvent]);

  // Track form submission
  const trackFormSubmission = useCallback((formType: string, success: boolean = true) => {
    bufferEvent({
      type: 'form',
      data: {
        session_id: sessionId.current,
        form_type: formType,
        page_url: window.location.pathname,
        success
      }
    });
  }, [bufferEvent]);

  // Track chatbot interaction
  const trackChatbot = useCallback((eventType: string, messageCount: number = 0) => {
    bufferEvent({
      type: 'chatbot',
      data: {
        session_id: sessionId.current,
        event_type: eventType,
        message_count: messageCount,
        session_duration: Math.floor((Date.now() - sessionStartTime.current) / 1000)
      }
    });
  }, [bufferEvent]);

  // Update session on page unload
  useEffect(() => {
    const handleUnload = () => {
      // Don't track admin users
      if (isAdmin) return;
      
      const sessionDuration = Math.floor((Date.now() - sessionStartTime.current) / 1000);
      
      // Use sendBeacon for reliable sending on page unload
      // sendBeacon requires a Blob with proper content-type for JSON
      const data = {
        events: [{
          type: 'session_update',
          data: {
            session_id: sessionId.current,
            exit_page: window.location.pathname,
            total_duration: sessionDuration
          }
        }]
      };

      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      navigator.sendBeacon(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analytics-ingest`,
        blob
      );
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [isAdmin]);

  // Flush on unmount
  useEffect(() => {
    return () => {
      flushEvents();
    };
  }, [flushEvents]);

  return {
    trackPageView,
    trackEvent,
    trackCourse,
    trackFormSubmission,
    trackChatbot
  };
};
