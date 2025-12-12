import { useEffect, useState } from "react";
import { Users, BarChart3, Calendar, TrendingUp, ClipboardCheck, UserPlus, Maximize2, X } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import enterpriseDashboard from "@/assets/enterprise-reporting-dashboard.png";
import enterpriseDueDates from "@/assets/enterprise-due-dates.png";
import enterpriseAddUsers from "@/assets/enterprise-add-users.png";
import enterpriseLearningPath from "@/assets/enterprise-learning-path.png";
import enterpriseEngagement from "@/assets/enterprise-engagement.png";
const slides = [{
  src: enterpriseDashboard,
  alt: "Enterprise Reporting Dashboard"
}, {
  src: enterpriseDueDates,
  alt: "Assign Due Dates"
}, {
  src: enterpriseAddUsers,
  alt: "Add Users"
}, {
  src: enterpriseLearningPath,
  alt: "Creating a New Learning Path"
}, {
  src: enterpriseEngagement,
  alt: "Course Engagement Analytics"
}];
const EnterpriseReporting = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [fullscreenApi, setFullscreenApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    document.title = "Enterprise Reporting";
  }, []);
  useEffect(() => {
    if (!carouselApi) return;
    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap());
    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);
  useEffect(() => {
    if (isFullscreen && fullscreenApi && carouselApi) {
      fullscreenApi.scrollTo(carouselApi.selectedScrollSnap(), true);
    }
  }, [isFullscreen, fullscreenApi, carouselApi]);

  useEffect(() => {
    if (!fullscreenApi) return;
    
    fullscreenApi.on("select", () => {
      setCurrent(fullscreenApi.selectedScrollSnap());
    });
  }, [fullscreenApi]);
  const features = [{
    icon: Users,
    title: "Manage Licenses",
    description: "Full control over user management and license allocation. Easily assign, track, and manage licenses across your entire organization with real-time visibility into remaining seats and end dates."
  }, {
    icon: BarChart3,
    title: "Track Learning",
    description: "Monitor individual and team progress with detailed analytics. View course completion rates, time spent learning, and engagement metrics to understand your team's development."
  }, {
    icon: UserPlus,
    title: "Assign Courses",
    description: "Tailor the learning experience to your team's unique needs. Search and assign specific courses to individuals or groups, creating personalized learning paths that align with your organizational goals."
  }, {
    icon: Calendar,
    title: "Assign Due Dates",
    description: "Drive measurable outcomes by setting course deadlines and milestones. Track progress against timelines and ensure your team stays on track with their learning objectives."
  }, {
    icon: TrendingUp,
    title: "View Progress",
    description: "Comprehensive reporting dashboards show completion percentages, time remaining, and detailed progress metrics. Identify top performers and those who may need additional support."
  }, {
    icon: ClipboardCheck,
    title: "Export Activity",
    description: "Generate detailed reports and export learning data for stakeholder presentations, compliance documentation, or integration with your existing HR systems."
  }];
  return <PageLayout title="Enterprise Reporting and Administration" description="Empower your team with our comprehensive SaaS platform, offering full control over user management and license allocation. Tailor the learning experience to your team's unique needs and drive measurable outcomes. As a manager, you'll have the tools to monitor progress, align training with organizational goals, and maximize your team's potential." breadcrumbs={[{
    label: "Enterprise Reporting"
  }]}>
      {/* Product Overview Slideshow */}
      <div className="mb-16 animate-fade-in">
        <div className="mb-6 items-end justify-between flex flex-col">
          
          <button onClick={() => setIsFullscreen(true)} className="gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex-row flex items-start justify-end">
            <Maximize2 className="w-4 h-4" />
            <span className="text-sm font-medium">Fullscreen</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel setApi={setCarouselApi} className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => <CarouselItem key={index}>
                  <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
                    <img src={slide.src} alt={slide.alt} className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({
            length: count
          }).map((_, index) => <button key={index} onClick={() => carouselApi?.scrollTo(index)} className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-primary w-4" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Go to slide ${index + 1}`} />)}
          </div>

          <p className="text-center text-muted-foreground mt-4 text-sm">
            {slides[current]?.alt}
          </p>
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-border">
          <button onClick={() => setIsFullscreen(false)} className="absolute right-4 top-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors">
            <X className="w-6 h-6" />
          </button>

          <div className="p-8">
            <Carousel setApi={setFullscreenApi} className="w-full">
              <CarouselContent>
                {slides.map((slide, index) => <CarouselItem key={index}>
                    <div className="flex items-center justify-center">
                      <img src={slide.src} alt={slide.alt} className="max-h-[80vh] w-auto object-contain rounded-lg" />
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-4 h-12 w-12" />
              <CarouselNext className="right-4 h-12 w-12" />
            </Carousel>

            {/* Fullscreen slide indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => <button key={index} onClick={() => fullscreenApi?.scrollTo(index)} className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Go to slide ${index + 1}`} />)}
            </div>

            <p className="text-center text-muted-foreground mt-4">
              {slides[current]?.alt}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Features Grid */}
      <div className="mb-32 animate-fade-in">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="group p-8 rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </PageLayout>;
};
export default EnterpriseReporting;