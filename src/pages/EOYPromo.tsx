import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CountdownTimer } from "@/components/CountdownTimer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Video,
  FlaskConical,
  Trophy,
  LineChart,
  Users,
  Building,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const EOYPromo = () => {
  const isMobile = useIsMobile();
  const [isPromoEnded, setIsPromoEnded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const promoEndDate = new Date("2025-12-31T23:59:59").getTime();
    const checkPromo = () => {
      const now = new Date().getTime();
      setIsPromoEnded(now > promoEndDate);
    };
    checkPromo();
    const interval = setInterval(checkPromo, 60000);
    return () => clearInterval(interval);
  }, []);

  const primaryCTA = isPromoEnded ? "Contact Sales" : "Claim This $590 Deal";
  const catalogURL = "https://stormwind.com/info";

  const valuePoints = [
    {
      icon: BookOpen,
      title: "On-Demand IT Training",
      description: "Access thousands of expert-led courses anytime, anywhere",
    },
    {
      icon: Video,
      title: "Live Instructor-Led Sessions",
      description: "Learn from industry experts in real-time interactive classes",
    },
    {
      icon: FlaskConical,
      title: "Hands-On Labs",
      description: "Practice in real-world environments with cloud-based labs",
    },
    {
      icon: Trophy,
      title: "Certification-Focused Paths",
      description: "Structured learning paths designed to help you earn top certifications",
    },
    {
      icon: LineChart,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and reports",
    },
  ];

  const personas = [
    {
      icon: Users,
      title: "IT Pros Leveling Up",
      description: "Perfect for professionals expanding into cloud, security, or networking",
    },
    {
      icon: Building,
      title: "Team Leads Testing",
      description: "Ideal for managers wanting to pilot StormWind with a single seat",
    },
    {
      icon: GraduationCap,
      title: "Certification Seekers",
      description: "Great for learners on a budget pursuing industry certifications",
    },
  ];

  const faqs = [
    {
      question: "Who is this offer for?",
      answer: "This offer is perfect for individual IT professionals, team leads wanting to test our platform, or anyone looking to advance their IT career through certification-focused training.",
    },
    {
      question: "Can I upgrade to more seats later?",
      answer: "Absolutely! You can add additional seats at any time. Contact our sales team for multi-seat pricing options.",
    },
    {
      question: "What happens after the year is over?",
      answer: "After your year of access, you'll have the option to renew your subscription to continue learning. We'll reach out before your access expires.",
    },
    {
      question: "Is this billed once or recurring?",
      answer: "This is a one-time payment of $590 for a full year of access. No recurring charges, no hidden fees.",
    },
    {
      question: "Do I get access to all courses?",
      answer: "Yes! Your $590 investment gives you unlimited access to our entire course catalog for one full year, including new courses added during your subscription.",
    },
    {
      question: "Can I share my account?",
      answer: "Each seat is for individual use only. If you need training for multiple team members, contact us for team pricing options.",
    },
    {
      question: "What support do I get?",
      answer: "You'll have access to our customer success team, technical support, and a community of learners throughout your entire year.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Cloud Engineer",
      company: "Tech Corp",
      quote: "StormWind's training helped me earn my AWS certification in just 3 months. The hands-on labs made all the difference.",
    },
    {
      name: "Michael Chen",
      role: "Security Analyst",
      company: "SecureNet",
      quote: "The best IT training investment I've made. The content is current, practical, and taught by experts who know the industry.",
    },
    {
      name: "Jessica Martinez",
      role: "IT Manager",
      company: "DataFlow Inc",
      quote: "We started with one seat to test the platform. Now our entire team uses StormWind for ongoing skill development.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Sticky Countdown Timer */}
      <div
        className={cn(
          "fixed z-50 transition-all duration-300",
          isMobile
            ? "bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)]"
            : "top-24 right-8 w-80",
          scrollY > 100 ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <CountdownTimer />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="container max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero">
            Our Best Deal of the Year
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            1 Year of IT Training for <span className="text-primary">$590</span>
          </p>
          <p className="text-xl text-muted-foreground mb-8">
            Save $400 off the regular price • Offer ends December 31st
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Perfect for IT pros looking to level up fast with real-world, on-demand training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="hero"
              className="text-lg px-8 py-6 hover-scale"
              disabled={isPromoEnded}
            >
              {primaryCTA}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => window.open(catalogURL, "_blank")}
            >
              View Full Course Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 bg-section-secondary">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary">
            What You Get for $590
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePoints.map((point, index) => (
              <Card
                key={index}
                className="glass-feature-card hover-scale cursor-pointer transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="p-3 rounded-lg icon-container icon-gradient-primary w-fit mb-4">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {point.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Comparison Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why This Deal is a No-Brainer
          </h2>
          <Card className="glass-card p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Regular Price</p>
                <p className="text-4xl font-bold line-through text-muted-foreground">
                  $990
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Today's Price</p>
                <p className="text-5xl font-bold text-gradient-primary">$590</p>
                <p className="text-xl text-primary font-semibold mt-2">
                  Save $400
                </p>
              </div>
            </div>
          </Card>
          <div className="text-center space-y-4">
            <p className="text-xl font-semibold">
              This is our best deal of the year
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lock in a full year of StormWind training for less than the cost of a single traditional course.
            </p>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 px-4 bg-section-secondary">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary">
            Perfect For...
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <Card
                key={index}
                className="glass-feature-card text-center hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto p-4 rounded-lg icon-container icon-gradient-secondary w-fit mb-4">
                    <persona.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{persona.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{persona.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Trusted by IT Professionals
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-6xl text-primary/20">"</div>
              <div className="relative z-10">
                <p className="text-xl italic mb-6 text-center">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="text-center">
                  <p className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentTestimonial
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30"
                    )}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-section-secondary">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                step: "1",
                title: "Claim the $590 Deal",
                description: "Click the button and secure your spot before December 31st",
              },
              {
                step: "2",
                title: "Get Instant Access",
                description: "Immediately access your training platform and entire course catalog",
              },
              {
                step: "3",
                title: "Start Learning",
                description: "Begin your journey towards your next certification",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="glass-feature-card text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 text-3xl font-bold text-white shadow-lg">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-0 px-6"
              >
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-section-secondary">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Miss Out on $400 in Savings
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            This $590 deal disappears after December 31st
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Don't wait for next year's budget cycle—lock in training now
          </p>
          <div className="inline-block mb-8">
            <CountdownTimer />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="hero"
              className="text-lg px-8 py-6 hover-scale"
              disabled={isPromoEnded}
            >
              {primaryCTA}
              <CheckCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => window.open(catalogURL, "_blank")}
            >
              View Full Course Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EOYPromo;
