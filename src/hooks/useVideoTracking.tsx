import { useRef, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface VideoTrackingMetadata {
  courseId?: string;
  courseName?: string;
  variantId?: string;
  variantName?: string;
  lessonId?: string;
  lessonTitle?: string;
  instructor?: string;
}

interface WistiaPlayer {
  bind: (event: string, callback: (...args: any[]) => void) => void;
  unbind: (event: string, callback: (...args: any[]) => void) => void;
  duration: () => number;
  percentWatched: () => number;
  time: () => number;
}

declare global {
  interface Window {
    _wq: any[];
    Wistia?: {
      api: (id: string) => WistiaPlayer | undefined;
    };
  }
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
  const maxPercentageWatched = useRef<number>(0);
  const videoDuration = useRef<number>(0);
  const isNewPlay = useRef<boolean>(true);
  const hasReported = useRef<boolean>(false);
  const playerRef = useRef<WistiaPlayer | null>(null);

  // Send tracking data to backend
  const sendTrackingData = useCallback(async (completed: boolean = false) => {
    // Calculate watch time since last play
    let watchTimeThisSession = 0;
    if (playStartTime.current !== null) {
      watchTimeThisSession = Math.floor((Date.now() - playStartTime.current) / 1000);
      accumulatedWatchTime.current += watchTimeThisSession;
      playStartTime.current = null;
    }

    // Only send if we have meaningful data
    if (accumulatedWatchTime.current === 0 && !completed) return;

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
      watch_time_seconds: accumulatedWatchTime.current,
      video_duration_seconds: videoDuration.current || undefined,
      percentage_watched: maxPercentageWatched.current,
      completed,
      is_new_play: isNewPlay.current
    };

    try {
      // Use sendBeacon for reliability on page unload
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analytics-ingest`;
      const payload = JSON.stringify({
        events: [{ type: 'video_watch', data: trackingData }]
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, payload);
      } else {
        // Fallback to fetch
        await supabase.functions.invoke('analytics-ingest', {
          body: { events: [{ type: 'video_watch', data: trackingData }] }
        });
      }

      // Reset for next tracking period
      isNewPlay.current = false;
      hasReported.current = true;
    } catch (error) {
      console.error('Error sending video tracking data:', error);
    }
  }, [videoId, metadata]);

  // Load Wistia E-v1.js for event binding
  useEffect(() => {
    if (!isPlaying || videoId.startsWith('pending_video_')) return;

    // Load Wistia E-v1.js if not already loaded
    if (!document.getElementById('wistia-e-v1')) {
      const script = document.createElement('script');
      script.id = 'wistia-e-v1';
      script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize _wq if not present
    window._wq = window._wq || [];

    // Bind to Wistia player events
    const bindToPlayer = () => {
      window._wq.push({
        id: videoId,
        onReady: (video: WistiaPlayer) => {
          playerRef.current = video;
          videoDuration.current = video.duration();

          // Track play event
          video.bind('play', () => {
            playStartTime.current = Date.now();
          });

          // Track pause event
          video.bind('pause', () => {
            if (playStartTime.current !== null) {
              const watchTime = Math.floor((Date.now() - playStartTime.current) / 1000);
              accumulatedWatchTime.current += watchTime;
              playStartTime.current = null;
            }
            maxPercentageWatched.current = Math.max(
              maxPercentageWatched.current,
              Math.round(video.percentWatched() * 100)
            );
            sendTrackingData(false);
          });

          // Track video end
          video.bind('end', () => {
            if (playStartTime.current !== null) {
              const watchTime = Math.floor((Date.now() - playStartTime.current) / 1000);
              accumulatedWatchTime.current += watchTime;
              playStartTime.current = null;
            }
            maxPercentageWatched.current = 100;
            sendTrackingData(true);
          });

          // Track percentage watched periodically
          video.bind('secondchange', () => {
            const currentPercent = Math.round(video.percentWatched() * 100);
            maxPercentageWatched.current = Math.max(maxPercentageWatched.current, currentPercent);
          });
        }
      });
    };

    // Small delay to ensure iframe is loaded
    const timeout = setTimeout(bindToPlayer, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [videoId, isPlaying, sendTrackingData]);

  // Reset tracking state when video changes
  useEffect(() => {
    // Send any pending data before reset
    if (accumulatedWatchTime.current > 0 && !hasReported.current) {
      sendTrackingData(false);
    }

    // Reset for new video
    playStartTime.current = null;
    accumulatedWatchTime.current = 0;
    maxPercentageWatched.current = 0;
    videoDuration.current = 0;
    isNewPlay.current = true;
    hasReported.current = false;
    playerRef.current = null;
  }, [videoId]);

  // Send data on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (accumulatedWatchTime.current > 0 || playStartTime.current !== null) {
        // Calculate final watch time
        if (playStartTime.current !== null) {
          const watchTime = Math.floor((Date.now() - playStartTime.current) / 1000);
          accumulatedWatchTime.current += watchTime;
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
          watch_time_seconds: accumulatedWatchTime.current,
          video_duration_seconds: videoDuration.current || undefined,
          percentage_watched: maxPercentageWatched.current,
          completed: maxPercentageWatched.current >= 95,
          is_new_play: false
        };

        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analytics-ingest`;
        const payload = JSON.stringify({
          events: [{ type: 'video_watch', data: trackingData }]
        });

        navigator.sendBeacon?.(url, payload);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [videoId, metadata]);

  return {
    accumulatedWatchTime: accumulatedWatchTime.current,
    maxPercentageWatched: maxPercentageWatched.current
  };
};
