import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, Bot, MessageSquare, Lightbulb, Clock, Brain, Zap, Video, ArrowRight } from "lucide-react";
import logoImage from "@/assets/stormwind-logo.png";
const AILearning = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "AI-Powered Learning";
  }, []);
  const features = [{
    icon: MessageSquare,
    title: "Real-Time Q&A",
    description: "Get instant answers to your questions while taking a course, right when you need them."
  }, {
    icon: Lightbulb,
    title: "Module Summaries",
    description: "Quickly understand key concepts with AI-generated summaries of course modules."
  }, {
    icon: Brain,
    title: "Troubleshooting Help",
    description: "Stuck on a problem? Get personalized guidance to overcome learning obstacles."
  }, {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access your AI tutor anytime, anywhere, on any device for on-demand learning support."
  }];
  const exampleCourses = [{
    name: "Cisco CCNA",
    certification: "200-301",
    url: "https://app.stormwindstudios.com/cisco/networking/cisco-ccna-200-301-implementing-and-administering-cisco-solutions"
  }, {
    name: "Microsoft 365 Certified",
    certification: "MS-102",
    url: "https://app.stormwindstudios.com/microsoft-it/microsoft-365office-365-admin/ms-102-microsoft-365-administrator"
  }, {
    name: "Microsoft Azure Fundamentals",
    certification: "AZ-900",
    url: "https://app.stormwindstudios.com/microsoft-it/cloud-azure/az-900-microsoft-azure-fundamentals"
  }, {
    name: "CompTIA Security+",
    certification: "SY0-701",
    url: "https://app.stormwindstudios.com/comptia/cybersecurity/comptia-security-sy0-701"
  }, {
    name: "CompTIA Network+",
    certification: "N10-009",
    url: "https://app.stormwindstudios.com/comptia/networking/comptia-network-n10-009"
  }, {
    name: "Project Management Professional",
    certification: "PMP",
    url: "https://app.stormwindstudios.com/project-management-institute/project-management-certifications/pmp-official-exam-prep"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={logoImage} alt="StormWind Studios" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/')} />
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => navigate('/')} className="gap-2">
                <Home className="w-4 h-4" />
                Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-primary/10 backdrop-blur-sm">
              <Bot className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              StormAI Tutor
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Personalized learning powered by StormWind's world-class content. Get instant, expert-level guidance 
            anytime, anywhere — built from the best training on the market.
          </p>
        </div>

        {/* Why Students Love Storm AI */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Powered by StormWind Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  StormAI is powered exclusively by StormWind's own world-class content. This ensures every 
                  answer is accurate, consistent, and aligned with the skills you need to succeed. Learn from 
                  the same instructors and materials as our live classes, designed for faster mastery and 
                  higher exam scores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Referencing Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Direct Video References</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you ask StormAI about a specific topic, it doesn't just provide an answer—it can reference the exact videos that cover that concept in detail. Get direct links to relevant course sections, allowing you to dive deeper into the material and reinforce your understanding with expert instruction.
                </p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-semibold">Example:</span>
                  <span className="italic">"StormAI, can you explain VLAN trunking?" → Receives explanation plus direct links to specific videos covering the topic</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Courses */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Experience StormAI in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Try StormAI in these popular certification courses and see how personalized learning 
              accelerates your success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {exampleCourses.map((course, index) => <div key={index} className="group flex items-center justify-between p-6 rounded-xl border-2 border-border hover:border-primary/50 bg-background hover:bg-primary/5 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{course.name}</h3>
                      <span className="text-sm font-medium text-primary/70">({course.certification})</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild className="ml-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <a href={course.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Try StormAI
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>)}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          
        </section>
      </main>
    </div>;
};
export default AILearning;