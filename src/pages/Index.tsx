import { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import EnterpriseIT from "@/components/EnterpriseIT";
import StormAIPhishing from "@/components/StormAIPhishing";
import EnterpriseEndUser from "@/components/EnterpriseEndUser";
import HRCompliance from "@/components/HRCompliance";
import ProjectManagement from "@/components/ProjectManagement";
import { TechBackground } from "@/components/TechBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
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
  return <div className="min-h-screen relative">
      {/* Floating Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large blob - top-right */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-[60px] bg-gradient-to-br from-primary to-transparent animate-float-slow"></div>
        
        {/* Medium blob - left side */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-15 blur-[50px] bg-gradient-to-br from-accent-teal to-transparent animate-float-medium" style={{animationDelay: '2s'}}></div>
        
        {/* Small blob - bottom-right */}
        <div className="absolute bottom-20 -right-16 w-64 h-64 rounded-full opacity-20 blur-[40px] bg-gradient-to-br from-accent-green to-transparent animate-float-fast" style={{animationDelay: '4s'}}></div>
        
        {/* Medium blob - center-bottom */}
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-15 blur-[55px] bg-gradient-to-br from-primary to-transparent animate-float-slow" style={{animationDelay: '1s'}}></div>
        
        {/* Small accent - top-left */}
        <div className="absolute top-1/3 -left-12 w-48 h-48 rounded-full opacity-10 blur-[35px] bg-gradient-to-br from-accent-teal to-transparent animate-float-medium" style={{animationDelay: '3s'}}></div>
      </div>
      
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 relative z-10">
        <Hero onTabChange={setActiveTab} />
      </div>

      {/* Tabbed Content Section */}
      <section id="content-section" className="py-16 scroll-mt-20 relative z-10 bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm rounded-t-3xl shadow-xl -mt-8">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-transparent h-auto p-0 mb-12 animate-scroll-reveal-scale">
              <TabsTrigger value="enterprise-it" className="bg-transparent backdrop-blur-sm text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-all duration-300 cursor-pointer rounded-lg">
                Enterprise IT
              </TabsTrigger>
              <TabsTrigger value="project-management" className="bg-transparent backdrop-blur-sm text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-all duration-300 cursor-pointer rounded-lg">
                Project Management
              </TabsTrigger>
              <TabsTrigger value="stormai-phishing" className="bg-transparent backdrop-blur-sm text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-all duration-300 cursor-pointer rounded-lg">
                StormAI Phishing
              </TabsTrigger>
              <TabsTrigger value="enterprise-end-user" className="bg-transparent backdrop-blur-sm text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-all duration-300 cursor-pointer rounded-lg">
                Enterprise End User
              </TabsTrigger>
              <TabsTrigger value="hr-compliance" className="bg-transparent backdrop-blur-sm text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-all duration-300 cursor-pointer rounded-lg">
                HR Compliance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="enterprise-it" className="mt-0 glass-tab-primary -mx-6 px-6 py-8 rounded-xl animate-scroll-reveal">
              <EnterpriseIT selectedTechnologies={selectedTechnologies} selectedFeatures={selectedFeatures} toggleTechnology={toggleTechnology} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="project-management" className="mt-0 glass-tab-secondary -mx-6 px-6 py-8 rounded-xl animate-scroll-reveal">
              <ProjectManagement selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="stormai-phishing" className="mt-0 glass-tab-tertiary -mx-6 px-6 py-8 rounded-xl animate-scroll-reveal">
              <StormAIPhishing selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="enterprise-end-user" className="mt-0 glass-tab-warm -mx-6 px-6 py-8 rounded-xl animate-scroll-reveal">
              <EnterpriseEndUser selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="hr-compliance" className="mt-0 glass-tab-cool -mx-6 px-6 py-8 rounded-xl animate-scroll-reveal">
              <HRCompliance selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      
    </div>;
};
export default Index;