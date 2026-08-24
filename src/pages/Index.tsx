import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import { SolutionFinder } from "@/components/SolutionFinder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import PersonalizedLearningBanner from "@/components/PersonalizedLearningBanner";
import { CARD_SURFACE } from "@/components/AnimatedFeatureCard";

// Lazy load heavy tab components
const EnterpriseIT = lazy(() => import("@/components/EnterpriseIT"));
const StormAIPhishing = lazy(() => import("@/components/StormAIPhishing"));
const EnterpriseEndUser = lazy(() => import("@/components/EnterpriseEndUser"));

const ProjectManagement = lazy(() => import("@/components/ProjectManagement"));

// Simple loading placeholder
const TabLoading = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("enterprise-it");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const isFirstRender = useRef(true);
  
  const toggleTechnology = (category: string) => {
    setSelectedTechnologies(prev => prev.includes(category) ? prev.filter(t => t !== category) : [...prev, category]);
  };
  const toggleFeature = (title: string) => {
    setSelectedFeatures(prev => prev.includes(title) ? prev.filter(f => f !== title) : [...prev, title]);
  };

  // Set document title
  useEffect(() => {
    document.title = "Home";
  }, []);

// Scroll to content when tab changes (but not on initial render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    scrollToContent();
  }, [activeTab]);

  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // "See the program" should scroll down to the section even when the
  // target tab is already the active one (no state change to trigger the
  // activeTab effect above).
  const handleSeeProgram = (tabValue: string) => {
    setActiveTab(tabValue);
    if (tabValue === activeTab) {
      scrollToContent();
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Simplified Floating Blobs - reduced blur for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true" style={{ willChange: 'transform' }}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-15 blur-[30px] bg-gradient-to-br from-primary to-transparent"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-10 blur-[25px] bg-gradient-to-br from-accent-teal to-transparent"></div>
        <div className="absolute bottom-20 -right-16 w-64 h-64 rounded-full opacity-15 blur-[20px] bg-gradient-to-br from-accent-green to-transparent"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full opacity-10 blur-[35px] bg-gradient-to-br from-primary/60 to-transparent animate-pulse"></div>
      </div>
      
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 relative z-10">
        <Hero onTabChange={setActiveTab} />
      </div>

      <SolutionFinder onTabChange={handleSeeProgram} />

      {/* Blended lower section: banner, trust signals, and tabbed content share a continuous surface */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-primary/[0.02] to-primary/[0.05]">
        {/* Personalized Learning Banner - Featured Callout */}
        <div className="pt-6 pb-4">
          <PersonalizedLearningBanner />
        </div>

        {/* Tabbed Content Section */}
        <section id="content-section" className="py-20 lg:py-28 scroll-mt-20">
          <div className="container mx-auto px-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent h-auto p-0 mb-12">
                {[
                  { value: "enterprise-it", label: "Enterprise IT" },
                  { value: "project-management", label: "Project Management" },
                  { value: "stormai-phishing", label: "StormAI Phishing" },
                  { value: "enterprise-end-user", label: "Enterprise End User" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={`${CARD_SURFACE} p-4 rounded-lg text-[15px] font-semibold cursor-pointer text-muted-foreground data-[state=active]:bg-primary data-[state=active]:bg-none data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary/80 dark:data-[state=active]:text-foreground`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Only render active tab content for performance */}
              <Suspense fallback={<TabLoading />}>
                {activeTab === "enterprise-it" && (
                  <TabsContent value="enterprise-it" className="mt-0 -mx-6 px-6 py-8 rounded-xl">
                    <EnterpriseIT selectedTechnologies={selectedTechnologies} selectedFeatures={selectedFeatures} toggleTechnology={toggleTechnology} toggleFeature={toggleFeature} />
                  </TabsContent>
                )}

                {activeTab === "project-management" && (
                  <TabsContent value="project-management" className="mt-0 -mx-6 px-6 py-8 rounded-xl">
                    <ProjectManagement selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
                  </TabsContent>
                )}

                {activeTab === "stormai-phishing" && (
                  <TabsContent value="stormai-phishing" className="mt-0 -mx-6 px-6 py-8 rounded-xl">
                    <StormAIPhishing selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
                  </TabsContent>
                )}

                {activeTab === "enterprise-end-user" && (
                  <TabsContent value="enterprise-end-user" className="mt-0 -mx-6 px-6 py-8 rounded-xl">
                    <EnterpriseEndUser selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
                  </TabsContent>
                )}
              </Suspense>
            </Tabs>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;