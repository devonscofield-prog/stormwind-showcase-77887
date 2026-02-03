import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import { TextSizeProvider } from "./contexts/TextSizeContext";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Create QueryClient outside component to prevent recreation on each render
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (formerly cacheTime)
    },
  },
});

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const Ranges = lazy(() => import("./pages/Ranges"));
const Phishing = lazy(() => import("./pages/Phishing"));
const Mentoring = lazy(() => import("./pages/Mentoring"));
const DataSciencePro = lazy(() => import("./pages/DataSciencePro"));
const BusinessSkills = lazy(() => import("./pages/BusinessSkills"));
const ProjectManagement = lazy(() => import("./pages/ProjectManagement"));
const AIPro = lazy(() => import("./pages/AIPro"));
const AILearning = lazy(() => import("./pages/AILearning"));
const Cybersecurity = lazy(() => import("./pages/Cybersecurity"));
const Networking = lazy(() => import("./pages/Networking"));
const HelpDesk = lazy(() => import("./pages/HelpDesk"));
const DevOps = lazy(() => import("./pages/DevOps"));
const Microsoft = lazy(() => import("./pages/Microsoft"));
const Cloud = lazy(() => import("./pages/Cloud"));
const FullStackDeveloper = lazy(() => import("./pages/FullStackDeveloper"));
const EnterpriseEndUserPage = lazy(() => import("./pages/EnterpriseEndUserPage"));
const DesktopApps = lazy(() => import("./pages/DesktopApps"));
const SecurityAwareness = lazy(() => import("./pages/SecurityAwareness"));
const Microlearning = lazy(() => import("./pages/Microlearning"));
const LearningPaths = lazy(() => import("./pages/LearningPaths"));
const CertificationPrep = lazy(() => import("./pages/CertificationPrep"));
const SkillsAssessments = lazy(() => import("./pages/SkillsAssessments"));
const LiveInstructorLed = lazy(() => import("./pages/LiveInstructorLed"));
const EnterpriseReporting = lazy(() => import("./pages/EnterpriseReporting"));
const HRCompliancePage = lazy(() => import("./pages/HRCompliancePage"));
const Courses = lazy(() => import("./pages/Courses"));
const TrainingSamples = lazy(() => import("./pages/TrainingSamples"));
const Contact = lazy(() => import("./pages/Contact"));
const StormAILearning = lazy(() => import("./pages/PersonalizedLearning"));

const AnalyticsDashboard = lazy(() => import("./pages/AnalyticsDashboard"));
const AdminAuth = lazy(() => import("./pages/AdminAuth"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TextSizeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AuthProvider>
              <AnalyticsProvider>
          <ScrollToTop />
          <BackToTop />
          <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="animate-pulse text-muted-foreground">Loading...</div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ranges" element={<Ranges />} />
            <Route path="/phishing" element={<Phishing />} />
            <Route path="/mentoring" element={<Mentoring />} />
            <Route path="/data-science-pro" element={<DataSciencePro />} />
            <Route path="/business-pro" element={<Navigate to="/data-science-pro" replace />} />
            <Route path="/business-skills" element={<BusinessSkills />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/ai-pro" element={<AIPro />} />
            <Route path="/ai-learning" element={<AILearning />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/help-desk" element={<HelpDesk />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="/microsoft" element={<Microsoft />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/fullstack-developer" element={<FullStackDeveloper />} />
            <Route path="/enterprise-end-user" element={<EnterpriseEndUserPage />} />
            <Route path="/desktop-apps" element={<DesktopApps />} />
            <Route path="/security-awareness" element={<SecurityAwareness />} />
            <Route path="/bytes" element={<Microlearning />} />
            <Route path="/microlearning" element={<Navigate to="/bytes" replace />} />
            <Route path="/learning-paths" element={<LearningPaths />} />
            <Route path="/certification-prep" element={<CertificationPrep />} />
            <Route path="/skills-assessments" element={<SkillsAssessments />} />
            <Route path="/live-instructor-led" element={<LiveInstructorLed />} />
            <Route path="/enterprise-reporting" element={<EnterpriseReporting />} />
            <Route path="/hr-compliance" element={<HRCompliancePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/training-samples" element={<TrainingSamples />} />
            <Route path="/training-samples/:courseId" element={<TrainingSamples />} />
            <Route path="/training-samples/:courseId/:variantId" element={<TrainingSamples />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stormai-learning" element={<StormAILearning />} />
            <Route path="/personalized-learning" element={<Navigate to="/stormai-learning" replace />} />
            
            <Route path="/admin-auth" element={<AdminAuth />} />
            <Route path="/analytics-dashboard" element={
              <ProtectedRoute requireAdmin>
                <AnalyticsDashboard />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </AnalyticsProvider>
        </AuthProvider>
          </BrowserRouter>
      </TooltipProvider>
      </TextSizeProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
