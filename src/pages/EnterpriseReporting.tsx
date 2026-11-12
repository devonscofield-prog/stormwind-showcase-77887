import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Users, BarChart3, Calendar, TrendingUp, ClipboardCheck, UserPlus, Maximize2, X, Leaf, BookOpen, FlaskConical, ChevronLeft, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { DeviceScene } from "@/components/DeviceScene";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import enterpriseDashboard from "@/assets/enterprise-reporting-dashboard.png";
import enterpriseDueDates from "@/assets/enterprise-due-dates.png";
import enterpriseAddUsers from "@/assets/enterprise-add-users.png";
import enterpriseLearningPath from "@/assets/enterprise-learning-path.png";
import enterpriseEngagement from "@/assets/enterprise-engagement.png";

const slides = [
  { src: enterpriseDashboard, alt: "Enterprise Reporting Dashboard" },
  { src: enterpriseDueDates, alt: "Assign Due Dates" },
  { src: enterpriseAddUsers, alt: "Add Users" },
  { src: enterpriseLearningPath, alt: "Creating a New Learning Path" },
  { src: enterpriseEngagement, alt: "Course Engagement Analytics" },
];

const features = [
  { icon: BarChart3, title: "Admin Dashboard", description: "Land on a single view of license usage and organization-wide activity. See seats used and remaining, subscription end dates, and recent learner activity at a glance — no report building required." },
  { icon: Users, title: "Roster & User Management", description: "Search and filter your full roster by name, email, group, or status. Add, edit, deactivate, and reactivate users, reassign licenses as staff change, and manage access without waiting on support." },
  { icon: ClipboardCheck, title: "License & Activity Reports", description: "Run license reports to see who holds a seat and when it expires, and activity reports covering courses started, completed, and time spent. Export any report for stakeholders, audits, or your HR system." },
  { icon: TrendingUp, title: "Skills Assessment Data", description: "Review assessment results across individuals and teams to see measured competency, not just completions. Use the data to target follow-up training where the gaps actually are." },
  { icon: Calendar, title: "Due Dates & Accountability", description: "Assign due dates to courses and learning paths, then track progress against those deadlines. Learners see what's expected and by when, and managers see who's on pace." },
  { icon: UserPlus, title: "Custom Learning Paths", description: "Build learning paths from any combination of courses, then assign them to individuals or groups. Tailor curricula to roles, certifications, or onboarding programs and reuse them as your team grows." },
];

const EnterpriseReporting = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [fullscreenApi, setFullscreenApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.title = "Enterprise Reporting";
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
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
      const i = fullscreenApi.selectedScrollSnap();
      setCurrent(i);
      carouselApi?.scrollTo(i, true);
    });
  }, [fullscreenApi, carouselApi]);

  return (
    <div className="er-scope">
      <PageLayout
        title="Enterprise Reporting and Administration"
        description=""
        breadcrumbs={[{ label: "Enterprise Reporting" }]}
        hideHero
        backgroundClassName="bg-er-studio"
      >
        <div className="p4">
          {/* HERO */}
          <section className="p4-hero">
            <div className="p4-copy">
              <span className="p4-kick">
                <Leaf className="ico" />
                Platform Features
              </span>
              <h1>Enterprise Reporting and Administration</h1>
              <p className="p4-lede">
                Empower your team with our comprehensive SaaS platform, offering full control over user management and license allocation. Tailor the learning experience to your team's unique needs and drive measurable outcomes. As a manager, you'll have the tools to monitor progress, align training with organizational goals, and maximize your team's potential.
              </p>
              <div className="p4-acts">
                <Link to="/courses" className="x-btn">
                  <BookOpen className="ico" />
                  Explore Courses
                </Link>
                <Link to="/training-samples" className="x-btn ghost">
                  <FlaskConical className="ico" />
                  Try Training Samples
                </Link>
              </div>
            </div>
            <DeviceScene />
          </section>

          {/* SEE IT IN THE PLATFORM: slideshow of the real screenshots */}
          <section className="p4-sec p4-see">
            <div className="p4-h2">
              <h2>See it in the platform</h2>
              <i />
            </div>
            <div className="ss">
              <div className="ss-top">
                <span className="ss-count">
                  {current + 1} / {slides.length}
                </span>
                <button type="button" className="ss-full" onClick={() => setIsFullscreen(true)}>
                  <Maximize2 className="ico" />
                  Fullscreen
                </button>
              </div>
              <div className="ss-frame">
                <div className="ss-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="ss-view">
                  <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="w-full">
                    <CarouselContent className="ml-0">
                      {slides.map((slide, index) => (
                        <CarouselItem key={index} className="pl-0">
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="cursor-zoom-in"
                            onClick={() => setIsFullscreen(true)}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                <button type="button" className="ss-nav prev" aria-label="Previous slide" onClick={() => carouselApi?.scrollPrev()}>
                  <ChevronLeft className="ico" />
                </button>
                <button type="button" className="ss-nav next" aria-label="Next slide" onClick={() => carouselApi?.scrollNext()}>
                  <ChevronRight className="ico" />
                </button>
              </div>
              <div className="ss-dots">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    type="button"
                    className={index === current ? "on" : ""}
                    onClick={() => carouselApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}: ${slide.alt}`}
                  />
                ))}
              </div>
              <p className="ss-cap">{slides[current]?.alt}</p>
            </div>
          </section>

          {/* PLATFORM FEATURES */}
          <section className="p4-sec">
            <div className="p4-h2">
              <h2>Platform Features</h2>
              <i />
            </div>
            <div className="p4-grid">
              {features.map((feature) => (
                <article key={feature.title} className="p4-card">
                  <span className="ci">
                    <feature.icon className="ico" />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Fullscreen Dialog (unchanged behaviour) */}
        <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-border">
            <button onClick={() => setIsFullscreen(false)} className="absolute right-4 top-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="p-8">
              <Carousel setApi={setFullscreenApi} opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="flex items-center justify-center">
                        <img src={slide.src} alt={slide.alt} className="max-h-[80vh] w-auto object-contain rounded-lg" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 h-12 w-12" />
                <CarouselNext className="right-4 h-12 w-12" />
              </Carousel>
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button key={index} onClick={() => fullscreenApi?.scrollTo(index)} className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Go to slide ${index + 1}`} />
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-4">{slides[current]?.alt}</p>
            </div>
          </DialogContent>
        </Dialog>
      </PageLayout>
    </div>
  );
};

export default EnterpriseReporting;
