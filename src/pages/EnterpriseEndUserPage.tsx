import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Sparkles, Shield, TrendingUp, BookOpen, FlaskConical, FileCheck, Clock, Users } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

type Card = {
  icon: typeof FileText;
  title: string;
  subtitle: string;
  bullets: string[];
  href?: string;
};

const TAB_TRIGGER_CLASS =
  "bg-card/50 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-3 sm:py-4 sm:px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary hover:border-primary/60 transition-colors duration-200 cursor-pointer rounded-lg";

const desktopApps: Card[] = [
  {
    icon: FileText,
    title: "Microsoft Apps",
    subtitle: "Master Microsoft 365 productivity tools",
    bullets: ["Word, Excel, PowerPoint", "Outlook & Teams", "OneDrive & SharePoint", "OneNote & Planner"],
    href: "/desktop-apps",
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    subtitle: "Leverage AI to boost productivity",
    bullets: ["Microsoft Copilot", "ChatGPT Essentials", "Prompt Engineering", "AI Best Practices"],
  },
  {
    icon: Shield,
    title: "Security",
    subtitle: "Protect against cyber threats",
    bullets: ["Phishing Awareness", "Password Security", "Data Protection", "Safe Browsing Practices"],
    href: "/security-awareness",
  },
];

const businessSkills: Card[] = [
  {
    icon: TrendingUp,
    title: "Communication",
    subtitle: "Connect clearly across the organization",
    bullets: ["Communication Skills", "Presentation Skills", "Business Writing"],
    href: "/business-skills",
  },
  {
    icon: Clock,
    title: "Productivity",
    subtitle: "Get more done with less friction",
    bullets: ["Time Management", "Problem Solving", "Workplace Efficiency"],
    href: "/business-skills",
  },
  {
    icon: Users,
    title: "Leadership",
    subtitle: "Build stronger teams and managers",
    bullets: ["Leadership & Teamwork", "Coaching & Feedback", "Collaboration"],
    href: "/business-skills",
  },
];

const hrCompliance: Card[] = [
  {
    icon: FileCheck,
    title: "Harassment Prevention",
    subtitle: "State-specific, legally reviewed training",
    bullets: ["Harassment Prevention", "Respectful Workplace", "Manager Responsibilities"],
    href: "/hr-compliance",
  },
  {
    icon: Shield,
    title: "Workplace Safety & Data Protection",
    subtitle: "Keep people and information safe",
    bullets: ["Workplace Safety", "Data Protection", "Privacy Requirements"],
    href: "/hr-compliance",
  },
  {
    icon: FileCheck,
    title: "Ethics & Compliance",
    subtitle: "Meet regulatory training requirements",
    bullets: ["Ethics & Compliance", "Code of Conduct", "Reporting & Escalation"],
    href: "/hr-compliance",
  },
];

const benefits: Record<string, { heading: string; items: string[] }> = {
  desktop: {
    heading: "Desktop Applications Benefits",
    items: [
      "Increased workplace productivity and efficiency",
      "Comprehensive Microsoft 365 mastery across Word, Excel, and PowerPoint",
      "Professional document, report, and presentation creation",
      "Advanced data analysis and reporting capabilities",
      "AI-powered productivity with Copilot and ChatGPT",
      "Enhanced cybersecurity awareness across the workforce",
      "Reduced security incidents and breaches from phishing",
      "Better email, calendar, and file organization",
    ],
  },
  business: {
    heading: "Business Skills Benefits",
    items: [
      "Stronger professional communication skills",
      "Enhanced leadership and management capabilities",
      "Improved collaboration and teamwork across departments",
      "Better time management and workplace efficiency",
      "Improved customer service and satisfaction",
      "Increased employee confidence and engagement",
      "Bite-sized microlearning that fits busy schedules",
      "Career advancement opportunities for your people",
    ],
  },
  compliance: {
    heading: "HR Compliance Benefits",
    items: [
      "Reduced legal risks and liability",
      "Regulatory compliance confidence",
      "State-specific harassment prevention coverage",
      "Enhanced workplace safety and security",
      "Better data protection and privacy compliance",
      "Reduced workplace incidents and claims",
      "Improved employee morale and retention",
      "Demonstrated commitment to ethical practices",
    ],
  },
};

const EnterpriseEndUserPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("desktop");

  const renderCards = (cards: Card[]) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-8 h-8 text-primary flex-shrink-0" />
              <h4 className="text-xl font-bold">{card.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{card.subtitle}</p>
            <ul className="space-y-2 text-sm mb-4 flex-1">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
            {card.href && (
              <Button size="sm" variant="outline" className="w-full gap-2" onClick={() => navigate(card.href!)}>
                Learn More
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <PageLayout
      title="Enterprise End User Package"
      description="Empower your workforce with comprehensive training in Microsoft applications, AI tools, security awareness, and essential business skills. Build a more productive, secure, and capable team."
      breadcrumbs={[{ label: "Enterprise End User" }]}
      heroActions={
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/courses">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/training-samples">
              <FlaskConical className="mr-2 h-5 w-5" />
              Try Training Samples
            </Link>
          </Button>
        </div>
      }
    >
      <div id="enterprise-overview" className="mb-32 animate-fade-in scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Transform Your Workforce</h3>
              <p className="text-muted-foreground leading-relaxed">
                StormWind's Enterprise End User Package delivers essential training to help your team work smarter, safer, and more efficiently. From mastering Microsoft 365 applications to understanding AI tools like Copilot and ChatGPT, staying secure against cyber threats, and developing critical business skills—this comprehensive package ensures your employees have the knowledge they need to excel in the modern workplace.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 bg-transparent h-auto p-0 mb-8">
                <TabsTrigger value="desktop" className={TAB_TRIGGER_CLASS}>
                  Desktop Applications
                </TabsTrigger>
                <TabsTrigger value="business" className={TAB_TRIGGER_CLASS}>
                  Business Skills
                </TabsTrigger>
                <TabsTrigger value="compliance" className={TAB_TRIGGER_CLASS}>
                  HR Compliance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="desktop" className="mt-0">
                {renderCards(desktopApps)}
              </TabsContent>
              <TabsContent value="business" className="mt-0">
                {renderCards(businessSkills)}
              </TabsContent>
              <TabsContent value="compliance" className="mt-0">
                {renderCards(hrCompliance)}
              </TabsContent>
            </Tabs>

            <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                {benefits[activeTab].heading}
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[benefits[activeTab].items.slice(0, 4), benefits[activeTab].items.slice(4)].map((column, ci) => (
                  <ul key={ci} className="space-y-2 text-sm">
                    {column.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EnterpriseEndUserPage;
