import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Shield, Brain, Settings, FileText, Mail, GraduationCap, Target, CheckCircle, Zap, Users, ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { trainingLinks } from "@/lib/trainingLinks";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

// Import slide images
import slide1 from "@/assets/phishing-page-1.jpg";
import slide2 from "@/assets/phishing-page-2.jpg";
import slide3 from "@/assets/phishing-page-3.jpg";
import slide4 from "@/assets/phishing-page-4.jpg";

const slides = [
  { src: slide1, alt: "Tailored Simulations" },
  { src: slide2, alt: "Types of Simulations" },
  { src: slide3, alt: "Immediate Feedback" },
  { src: slide4, alt: "Training Topics" },
];

const Phishing = () => {
  const navigate = useNavigate();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [fullscreenApi, setFullscreenApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.title = "StormAI Phishing";
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  useEffect(() => {
    if (!fullscreenApi) return;

    fullscreenApi.on("select", () => {
      setCurrent(fullscreenApi.selectedScrollSnap() + 1);
    });
  }, [fullscreenApi]);

  useEffect(() => {
    if (isFullscreen && fullscreenApi) {
      fullscreenApi.scrollTo(current - 1);
    }
  }, [isFullscreen, fullscreenApi]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>StormAI Phishing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground leading-tight pb-2">
              StormAI Phishing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-driven phishing simulations that mirror real-world hacker techniques, with zero manual management required.
            </p>
          </div>

          {/* Product Overview Slideshow */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Product Overview</h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFullscreen(true)}
                className="gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                Fullscreen
              </Button>
            </div>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Carousel setApi={setCarouselApi} className="w-full">
                  <CarouselContent>
                    {slides.map((slide, index) => (
                      <CarouselItem key={index}>
                        <div className="relative">
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
                
                {/* Slide indicators */}
                <div className="flex justify-center gap-2 py-4 bg-muted/50">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => carouselApi?.scrollTo(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        current === index + 1 ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Key Features Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Key Features</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">AI-Personalized Simulations</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Each employee receives unique simulations generated from Entra ID profiles, creating personalized and realistic phishing scenarios.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Turn-Key Setup</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Configure once (15–20 minutes) and let the system automate delivery, difficulty progression, and timing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Comprehensive Reporting</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Ready-to-use dashboards for compliance audits, insurance reporting, and stakeholder updates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Outlook Plugin with Instant Feedback</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Immediate training for failed attempts and positive reinforcement for correct reporting actions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Security Awareness Courses</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Modular courses on Email Security, Ransomware Defense, Executive Security Awareness, and IT Security fundamentals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Multiple Attack Vectors</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Email Domain Spoofs, Teams Messages, C-Suite Impersonations, and other sophisticated attack patterns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Types of Simulations Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Types of Simulations</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Our comprehensive phishing simulation platform covers all the real-world attack techniques that your employees will encounter. Each simulation type is designed to test different aspects of security awareness and build critical thinking skills.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Email-Based Attacks
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Domain spoofing and look-alike domains</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Executive impersonation and C-suite spoofing</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Credential harvesting pages</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Malicious attachments and suspicious links</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Advanced Threat Scenarios
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Microsoft Teams message phishing</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>QR code phishing (quishing)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Business email compromise (BEC)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Social engineering with urgency tactics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-accent/30 rounded-lg p-6 mt-6">
                    <h3 className="font-semibold text-lg mb-3">Tailored to Your Organization</h3>
                    <p className="text-muted-foreground">
                      Simulations are automatically customized based on your organization's profile, industry, and individual employee roles. The AI generates realistic scenarios that your team would actually encounter, making the training more relevant and effective.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How It Works Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Settings className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="bg-accent/30 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Quick Setup & Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Connect your Entra ID in 15–20 minutes. The system automatically pulls employee profiles and organizational structure to personalize simulations.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">AI-Generated Simulations</h4>
                        <p className="text-sm text-muted-foreground">
                          The AI creates unique, realistic phishing emails for each employee based on their role, department, and typical communications. Simulations automatically adjust difficulty over time.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Immediate Feedback & Learning</h4>
                        <p className="text-sm text-muted-foreground">
                          When an employee clicks a phishing link or reports a suspicious email, they receive instant, contextual feedback explaining what clues they should look for. This transforms mistakes into learning moments.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Continuous Monitoring & Reporting</h4>
                        <p className="text-sm text-muted-foreground">
                          Track progress with comprehensive dashboards showing click rates, reporting rates, and improvement trends across your organization. Export reports for compliance and insurance requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Immediate Feedback Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Immediate Feedback System</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Real-time learning moments that transform mistakes into knowledge. The Outlook plugin provides instant, actionable feedback whether employees click on a phishing link or correctly report a suspicious email.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        When They Miss a Phishing Email
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        If an employee clicks on a simulated phishing link, they immediately see:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Specific red flags they missed in the email</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>What legitimate emails should look like</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Actionable tips to spot similar attacks</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Optional micro-training modules to reinforce learning</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        When They Correctly Report Phishing
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        When employees use the Outlook plugin to report a suspicious email, they receive:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Positive reinforcement acknowledging their vigilance</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Confirmation of what clues they correctly identified</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Recognition in reporting dashboards</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Continued engagement with new challenge levels</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Button size="lg" asChild>
              <a href="/security-awareness" target="_blank" rel="noopener noreferrer" className="gap-2">
                <GraduationCap className="w-5 h-5" />
                Explore Security Awareness Training
              </a>
            </Button>
          </section>
        </div>
      </main>

      {/* Fullscreen Slideshow Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 border-none bg-black/95">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <Carousel setApi={setFullscreenApi} className="w-full max-w-6xl">
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center p-4">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 text-white border-none" />
              <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 text-white border-none" />
            </Carousel>
            
            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => fullscreenApi?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    current === index + 1 ? "bg-primary" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <p className="text-white/70 mt-4 text-sm">
              {current} / {slides.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Phishing;
