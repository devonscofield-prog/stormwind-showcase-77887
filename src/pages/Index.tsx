import { useState, useEffect } from "react";
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

  // Scroll to content when tab changes
  useEffect(() => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [activeTab]);
  return <div className="min-h-screen relative">
      {/* Animated Tech Background */}
      <TechBackground />
      
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 relative z-10">
        <Hero onTabChange={setActiveTab} />
      </div>

      {/* Tabbed Content Section */}
      <section id="content-section" className="py-16 scroll-mt-20 relative z-10 bg-card/50 backdrop-blur-sm rounded-t-3xl shadow-xl -mt-8">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-transparent h-auto p-0 mb-12">
              <TabsTrigger value="enterprise-it" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 text-base font-semibold border-2 border-border data-[state=active]:border-primary transition-all duration-300">
                Enterprise IT
              </TabsTrigger>
              <TabsTrigger value="project-management" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 text-base font-semibold border-2 border-border data-[state=active]:border-primary transition-all duration-300">
                Project Management
              </TabsTrigger>
              <TabsTrigger value="stormai-phishing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 text-base font-semibold border-2 border-border data-[state=active]:border-primary transition-all duration-300">
                StormAI Phishing
              </TabsTrigger>
              <TabsTrigger value="enterprise-end-user" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 text-base font-semibold border-2 border-border data-[state=active]:border-primary transition-all duration-300">
                Enterprise End User
              </TabsTrigger>
              <TabsTrigger value="hr-compliance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4 text-base font-semibold border-2 border-border data-[state=active]:border-primary transition-all duration-300">
                HR Compliance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="enterprise-it" className="mt-0 bg-[hsl(var(--section-cream))] -mx-6 px-6 py-8 rounded-xl">
              <EnterpriseIT selectedTechnologies={selectedTechnologies} selectedFeatures={selectedFeatures} toggleTechnology={toggleTechnology} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="project-management" className="mt-0 bg-[hsl(var(--section-green))] -mx-6 px-6 py-8 rounded-xl">
              <ProjectManagement selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="stormai-phishing" className="mt-0 bg-[hsl(var(--section-cream))] -mx-6 px-6 py-8 rounded-xl">
              <StormAIPhishing selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="enterprise-end-user" className="mt-0 bg-[hsl(var(--section-green))] -mx-6 px-6 py-8 rounded-xl">
              <EnterpriseEndUser selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="hr-compliance" className="mt-0 bg-[hsl(var(--section-cream))] -mx-6 px-6 py-8 rounded-xl">
              <HRCompliance selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      
    </div>;
};
export default Index;