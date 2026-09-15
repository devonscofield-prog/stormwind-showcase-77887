import { useEffect } from "react";

const routeImports: Record<string, () => Promise<unknown>> = {
  "/": () => import("@/pages/Index"),
  "/ranges": () => import("@/pages/Ranges"),
  "/phishing": () => import("@/pages/Phishing"),
  "/mentoring": () => import("@/pages/Mentoring"),
  "/data-science-pro": () => import("@/pages/DataSciencePro"),
  "/business-skills": () => import("@/pages/BusinessSkills"),
  "/project-management": () => import("@/pages/ProjectManagement"),
  "/ai-pro": () => import("@/pages/AIPro"),
  "/cybersecurity": () => import("@/pages/Cybersecurity"),
  "/networking": () => import("@/pages/Networking"),
  "/help-desk": () => import("@/pages/HelpDesk"),
  "/devops": () => import("@/pages/DevOps"),
  "/microsoft": () => import("@/pages/Microsoft"),
  "/cloud": () => import("@/pages/Cloud"),
  "/fullstack-developer": () => import("@/pages/FullStackDeveloper"),
  "/enterprise-end-user": () => import("@/pages/EnterpriseEndUserPage"),
  "/desktop-apps": () => import("@/pages/DesktopApps"),
  "/security-awareness": () => import("@/pages/SecurityAwareness"),
  "/bytes": () => import("@/pages/Microlearning"),
  "/learning-paths": () => import("@/pages/LearningPaths"),
  "/certification-prep": () => import("@/pages/CertificationPrep"),
  "/skills-assessments": () => import("@/pages/SkillsAssessments"),
  "/live-instructor-led": () => import("@/pages/LiveInstructorLed"),
  "/enterprise-reporting": () => import("@/pages/EnterpriseReporting"),
  "/hr-compliance": () => import("@/pages/HRCompliancePage"),
  "/courses": () => import("@/pages/Courses"),
  "/training-samples": () => import("@/pages/TrainingSamples"),
  "/roi-case-studies": () => import("@/pages/ROICaseStudies"),
  "/stormai-learning": () => import("@/pages/PersonalizedLearning"),
  "/stormai-tutor": () => import("@/pages/AILearning"),
};

const loadedRoutes = new Set<string>();

const preloadAnchorRoute = (target: EventTarget | null) => {
  if (!(target instanceof Element)) return;

  const anchor = target.closest<HTMLAnchorElement>("a[href]");
  if (!anchor) return;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return;

  const importer = routeImports[url.pathname];
  if (!importer || loadedRoutes.has(url.pathname)) return;

  loadedRoutes.add(url.pathname);
  void importer().catch(() => loadedRoutes.delete(url.pathname));
};

/** Downloads an internal page when its link is hovered, focused, or touched. */
export const RoutePreloader = () => {
  useEffect(() => {
    document.addEventListener("pointerover", preloadAnchorRoute, { passive: true });
    document.addEventListener("focusin", preloadAnchorRoute);
    document.addEventListener("touchstart", preloadAnchorRoute, { passive: true });

    return () => {
      document.removeEventListener("pointerover", preloadAnchorRoute);
      document.removeEventListener("focusin", preloadAnchorRoute);
      document.removeEventListener("touchstart", preloadAnchorRoute);
    };
  }, []);

  return null;
};

export default RoutePreloader;