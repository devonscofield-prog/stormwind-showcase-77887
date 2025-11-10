import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import EnterpriseIT from "@/components/EnterpriseIT";
import StormAIPhishing from "@/components/StormAIPhishing";
import EnterpriseEndUser from "@/components/EnterpriseEndUser";
import HRCompliance from "@/components/HRCompliance";
import ProjectManagement from "@/components/ProjectManagement";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import stormwindLogo from "@/assets/stormwind-logo.png";
const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("enterprise-it");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(location.state?.technologies || []);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(location.state?.features || []);
  const toggleTechnology = (category: string) => {
    setSelectedTechnologies(prev => prev.includes(category) ? prev.filter(t => t !== category) : [...prev, category]);
  };
  const toggleFeature = (title: string) => {
    setSelectedFeatures(prev => prev.includes(title) ? prev.filter(f => f !== title) : [...prev, title]);
  };
  const handleSubmit = () => {
    navigate("/results", {
      state: {
        technologies: selectedTechnologies,
        features: selectedFeatures
      }
    });
  };
  const handleClearSelections = () => {
    setSelectedTechnologies([]);
    setSelectedFeatures([]);
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
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <img 
            src={stormwindLogo} 
            alt="StormWind Studios" 
            className="h-12 object-contain cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => navigate('/')}
          />
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-20">
        <Hero onTabChange={setActiveTab} />
      </div>

      {/* Tabbed Content Section */}
      <section id="content-section" className="py-16 scroll-mt-20">
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

            <TabsContent value="enterprise-it" className="mt-0">
              <EnterpriseIT selectedTechnologies={selectedTechnologies} selectedFeatures={selectedFeatures} toggleTechnology={toggleTechnology} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="project-management" className="mt-0">
              <ProjectManagement selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="stormai-phishing" className="mt-0">
              <StormAIPhishing selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="enterprise-end-user" className="mt-0">
              <EnterpriseEndUser selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>

            <TabsContent value="hr-compliance" className="mt-0">
              <HRCompliance selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />
            </TabsContent>
          </Tabs>

          {/* Floating Buttons */}
          {(selectedTechnologies.length > 0 || selectedFeatures.length > 0) && <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 flex flex-col gap-4">
              <Button onClick={handleSubmit} size="lg" className="px-8 shadow-xl">
                Submit Selection ({selectedTechnologies.length + selectedFeatures.length} items)
              </Button>
              <Button onClick={handleClearSelections} variant="outline" size="lg" className="px-8 shadow-xl">
                Clear Selections
              </Button>
            </div>}
        </div>
      </section>

      {/* Footer */}
      
    </div>;
};
export default Index;