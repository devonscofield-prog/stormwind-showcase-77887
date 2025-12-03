import { useRef, useEffect, useCallback } from 'react';

interface VideoTrackingMetadata {
  courseId?: string;
  courseName?: string;
  variantId?: string;
  variantName?: string;
  lessonId?: string;
  lessonTitle?: string;
  instructor?: string;
}

// Get or create session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

export const useVideoTracking = (
  videoId: string,
  isPlaying: boolean,
  metadata: VideoTrackingMetadata
) => {
  const playStartTime = useRef<number | null>(null);
  const accumulatedWatchTime = useRef<number>(0);
  const lastReportedTime = useRef<number>(0);
  const isNewPlay = useRef<boolean>(true);
  const hasTrackedPlay = useRef<boolean>(false);

  // Send tracking data to backend
  const sendTrackingData = useCallback((completed: boolean = false, forceReport: boolean = false) => {
    // Calculate watch time since play started
    let currentWatchTime = accumulatedWatchTime.current;
    if (playStartTime.current !== null) {
      currentWatchTime += Math.floor((Date.now() - playStartTime.current) / 1000);
    }

    // Only send if we have new watch time to report
    const newWatchTime = currentWatchTime - lastReportedTime.current;
    if (newWatchTime <= 0 && !completed && !forceReport) {
      console.log('[VideoTracking] No new watch time to report');
      return;
    }

    const trackingData = {
      session_id: getSessionId(),
      video_id: videoId,
      course_id: metadata.courseId,
      course_name: metadata.courseName,
      variant_id: metadata.variantId,
      variant_name: metadata.variantName,
      lesson_id: metadata.lessonId,
      lesson_title: metadata.lessonTitle,
      instructor: metadata.instructor,
      watch_time_seconds: newWatchTime > 0 ? newWatchTime : currentWatchTime,
      percentage_watched: 0, // We don't have this without Wistia API
      completed,
      is_new_play: isNewPlay.current
    };

    console.log('[VideoTracking] Sending tracking data:', trackingData);

    try {
      const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analytics-ingest?apikey=${apiKey}`;
      const payload = JSON.stringify({
        events: [{ type: 'video_watch', data: trackingData }]
      });

      // Use Blob with correct content-type for sendBeacon
      const blob = new Blob([payload], { type: 'application/json' });
      
      if (navigator.sendBeacon) {
        const success = navigator.sendBeacon(url, blob);
        console.log('[VideoTracking] sendBeacon result:', success);
      } else {
        // Fallback to fetch for older browsers
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true
        }).catch(err => console.error('[VideoTracking] Fetch error:', err));
      }

      // Update tracking state
      lastReportedTime.current = currentWatchTime;
      isNewPlay.current = false;
      
    } catch (error) {
      console.error('[VideoTracking] Error sending tracking data:', error);
    }
  }, [videoId, metadata]);

  // Track when video starts playing
  useEffect(() => {
    if (isPlaying && !videoId.startsWith('pending_video_')) {
      // Video started playing
      if (playStartTime.current === null) {
        playStartTime.current = Date.now();
        console.log('[VideoTracking] Play started for video:', videoId);
        
        // Track initial play if this is a new video
        if (!hasTrackedPlay.current) {
          hasTrackedPlay.current = true;
          // Send initial play event after a short delay
          setTimeout(() => sendTrackingData(false, true), 2000);
        }
      }
    } else {
      // Video stopped playing
      if (playStartTime.current !== null) {
        const watchTime = Math.floor((Date.now() - playStartTime.current) / 1000);
        accumulatedWatchTime.current += watchTime;
        playStartTime.current = null;
        console.log('[VideoTracking] Play stopped, accumulated time:', accumulatedWatchTime.current);
        
        // Send tracking data when video stops
        sendTrackingData(false);
      }
    }
  }, [isPlaying, videoId, sendTrackingData]);

  // Periodic tracking while video is playing (every 30 seconds)
  useEffect(() => {
    if (!isPlaying || videoId.startsWith('pending_video_')) return;

    const interval = setInterval(() => {
      console.log('[VideoTracking] Periodic check - sending accumulated time');
      sendTrackingData(false);
    }, 30000);

    return () => clearInterval(interval);
  }, [isPlaying, videoId, sendTrackingData]);

  // Reset tracking state when video changes
  useEffect(() => {
    // Send any pending data before reset
    if (accumulatedWatchTime.current > 0 || playStartTime.current !== null) {
      console.log('[VideoTracking] Video changed, sending final data for previous video');
      sendTrackingData(false);
    }

    // Reset for new video
    playStartTime.current = null;
    accumulatedWatchTime.current = 0;
    lastReportedTime.current = 0;
    isNewPlay.current = true;
    hasTrackedPlay.current = false;
    
    console.log('[VideoTracking] Reset state for new video:', videoId);
  }, [videoId]);

  // Handle visibility change (user switches tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && playStartTime.current !== null) {
        console.log('[VideoTracking] Page hidden, sending tracking data');
        const watchTime = Math.floor((Date.now() - playStartTime.current) / 1000);
        accumulatedWatchTime.current += watchTime;
        playStartTime.current = null;
        sendTrackingData(false);
      } else if (!document.hidden && isPlaying) {
        // Resume tracking when page becomes visible
        playStartTime.current = Date.now();
        console.log('[VideoTracking] Page visible, resuming tracking');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isPlaying, sendTrackingData]);

  // Send data on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (accumulatedWatchTime.current > 0 || playStartTime.current !== null) {
        // Calculate final watch time
        let finalWatchTime = accumulatedWatchTime.current;
        if (playStartTime.current !== null) {
          finalWatchTime += Math.floor((Date.now() - playStartTime.current) / 1000);
        }

        const newWatchTime = finalWatchTime - lastReportedTime.current;
        if (newWatchTime <= 0) return;

        const trackingData = {
          session_id: getSessionId(),
          video_id: videoId,
          course_id: metadata.courseId,
          course_name: metadata.courseName,
          variant_id: metadata.variantId,
          variant_name: metadata.variantName,
          lesson_id: metadata.lessonId,
          lesson_title: metadata.lessonTitle,
          instructor: metadata.instructor,
          watch_time_seconds: newWatchTime,
          percentage_watched: 0,
          completed: false,
          is_new_play: false
        };

        console.log('[VideoTracking] Page unload, sending final data:', trackingData);

        const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analytics-ingest?apikey=${apiKey}`;
        const payload = JSON.stringify({
          events: [{ type: 'video_watch', data: trackingData }]
        });

        // Use Blob with correct content-type
        const blob = new Blob([payload], { type: 'application/json' });
        navigator.sendBeacon?.(url, blob);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [videoId, metadata]);

  return {
    accumulatedWatchTime: accumulatedWatchTime.current,
    lastReportedTime: lastReportedTime.current
  };
};
