import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import ChatBot from "./components/ChatBot";
import Index from "./pages/Index";
import Ranges from "./pages/Ranges";
import Phishing from "./pages/Phishing";
import Mentoring from "./pages/Mentoring";
import BusinessPro from "./pages/BusinessPro";
import BusinessSkills from "./pages/BusinessSkills";
import ProjectManagement from "./pages/ProjectManagement";
import AIPro from "./pages/AIPro";
import AILearning from "./pages/AILearning";
import Cybersecurity from "./pages/Cybersecurity";
import Networking from "./pages/Networking";
import HelpDesk from "./pages/HelpDesk";
import DevOps from "./pages/DevOps";
import Microsoft from "./pages/Microsoft";
import Cloud from "./pages/Cloud";
import FullStackDeveloper from "./pages/FullStackDeveloper";
import EnterpriseEndUserPage from "./pages/EnterpriseEndUserPage";
import DesktopApps from "./pages/DesktopApps";
import SecurityAwareness from "./pages/SecurityAwareness";
import Microlearning from "./pages/Microlearning";
import LearningPaths from "./pages/LearningPaths";
import SkillsAssessments from "./pages/SkillsAssessments";
import LiveInstructorLed from "./pages/LiveInstructorLed";
import EnterpriseReporting from "./pages/EnterpriseReporting";
import HRCompliancePage from "./pages/HRCompliancePage";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <BackToTop />
        <ChatBot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ranges" element={<Ranges />} />
          <Route path="/phishing" element={<Phishing />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/business-pro" element={<BusinessPro />} />
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
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/skills-assessments" element={<SkillsAssessments />} />
          <Route path="/live-instructor-led" element={<LiveInstructorLed />} />
          <Route path="/enterprise-reporting" element={<EnterpriseReporting />} />
          <Route path="/hr-compliance" element={<HRCompliancePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
