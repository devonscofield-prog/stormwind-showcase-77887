import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import PersonalizedLearningBanner from "@/components/PersonalizedLearningBanner";
import { BookOpen, Users, Play, Shield } from "lucide-react";

// Lazy load heavy tab components
const EnterpriseIT = lazy(() => import("@/components/EnterpriseIT"));
const StormAIPhishing = lazy(() => import("@/components/StormAIPhishing"));
const EnterpriseEndUser = lazy(() => import("@/components/EnterpriseEndUser"));
const HRCompliance = lazy(() => import("@/components/HRCompliance"));
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
    
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen relative">
      {/* Simplified Floating Blobs - reduced blur for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true" style={{ willChange: 'transform' }}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-15 blur-[30px] bg-gradient-to-br from-primary to-transparent"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-10 blur-[25px] bg-gradient-to-br from-accent-teal to-transparent"></div>
        <div className="absolute bottom-20 -right-16 w-64 h-64 rounded-full opacity-15 blur-[20px] bg-gradient-to-br from-accent-green to-transparent"></div>
      </div>
      
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 relative z-10">
        <Hero onTabChange={setActiveTab} />
      </div>

      {/* Personalized Learning Banner - Featured Callout */}
      <PersonalizedLearningBanner />

      {/* Trust Signals / Social Proof */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, label: "500+ Courses", subtitle: "Comprehensive IT curriculum" },
              { icon: Users, label: "Expert Instructors", subtitle: "Industry-certified trainers" },
              { icon: Play, label: "Live & On-Demand", subtitle: "Learn on your schedule" },
              { icon: Shield, label: "Enterprise-Ready", subtitle: "Scalable team training" },
            ].map(({ icon: Icon, label, subtitle }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content Section - removed backdrop-blur for performance */}
      <section id="content-section" className="py-24 lg:py-32 scroll-mt-20 relative z-10 bg-gradient-to-br from-background via-background to-primary/5 rounded-t-3xl shadow-xl -mt-8">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-transparent h-auto p-0 mb-12">
              <TabsTrigger value="enterprise-it" className="bg-card/50 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-3 sm:py-4 sm:px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-colors duration-200 cursor-pointer rounded-lg">
                Enterprise IT
              </TabsTrigger>
              <TabsTrigger value="project-management" className="bg-card/50 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-3 sm:py-4 sm:px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-colors duration-200 cursor-pointer rounded-lg">
                Project Management
              </TabsTrigger>
              <TabsTrigger value="stormai-phishing" className="bg-card/50 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-3 sm:py-4 sm:px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-colors duration-200 cursor-pointer rounded-lg">
                StormAI Phishing
              </TabsTrigger>
              <TabsTrigger value="enterprise-end-user" className="bg-card/50 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-3 sm:py-4 sm:px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-colors duration-200 cursor-pointer rounded-lg">
                Enterprise End User
              </TabsTrigger>
              <TabsTrigger value="hr-compliance" className="bg-card/50 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-3 sm:py-4 sm:px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-colors duration-200 cursor-pointer rounded-lg">
                HR Compliance
              </TabsTrigger>
            </TabsList>

            {/* Only render active tab content for performance */}
            <Suspense fallback={<TabLoading />}>
              {activeTab === "enterprise-it" && (
                <TabsContent value="enterprise-it" className="mt-0 -mx-6 px-6 py-8 rounded-xl bg-card/30">
                  <EnterpriseIT selectedTechnologies={selectedTechnologies} selectedFeatures={selectedFeatures} toggleTechnology={toggleTechnology} toggleFeature={toggleFeature} />
                </TabsContent>
              )}

              {activeTab === "project-management" && (
                <TabsContent value="project-management" className="mt-0 -mx-6 px-6 py-8 rounded-xl bg-card/30">
                  <ProjectManagement selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
                </TabsContent>
              )}

              {activeTab === "stormai-phishing" && (
                <TabsContent value="stormai-phishing" className="mt-0 -mx-6 px-6 py-8 rounded-xl bg-card/30">
                  <StormAIPhishing selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
                </TabsContent>
              )}

              {activeTab === "enterprise-end-user" && (
                <TabsContent value="enterprise-end-user" className="mt-0 -mx-6 px-6 py-8 rounded-xl bg-card/30">
                  <EnterpriseEndUser selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
                </TabsContent>
              )}

              {activeTab === "hr-compliance" && (
                <TabsContent value="hr-compliance" className="mt-0 -mx-6 px-6 py-8 rounded-xl bg-card/30">
                  <HRCompliance selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
                </TabsContent>
              )}
            </Suspense>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Index;