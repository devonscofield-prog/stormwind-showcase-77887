import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  FileQuestion,
  Presentation,
  BookOpen,
  Book,
  Layers,
  UserCheck,
  Bot,
  ChevronRight,
  Target,
  Zap,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import FeatureListItem from "@/components/FeatureListItem";

const CertificationPrep = () => {
  useEffect(() => {
    document.title = "Certification Prep | StormWind Studios";
  }, []);

  const certifications = [
    { name: "CompTIA Security+ (SY0-701)", url: "https://app.stormwindstudios.com/certifications/comptia-security-sy0-701" },
    { name: "CompTIA Network+ (N10-009)", url: "https://app.stormwindstudios.com/certifications/comptia-network-n10-009" },
    { name: "CompTIA A+ Core 1 (220-1101)", url: "https://app.stormwindstudios.com/certifications/comptia-a-core-1-220-1101" },
    { name: "CompTIA A+ Core 2 (220-1102)", url: "https://app.stormwindstudios.com/certifications/comptia-a-core-2-220-1102" },
    { name: "Microsoft Azure Fundamentals (AZ-900)", url: "https://app.stormwindstudios.com/certifications/microsoft-azure-fundamentals-az-900" },
    { name: "Microsoft 365 Fundamentals (MS-900)", url: "https://app.stormwindstudios.com/certifications/microsoft-365-fundamentals-ms-900" },
    { name: "Cisco CCNA (200-301)", url: "https://app.stormwindstudios.com/certifications/cisco-ccna-200-301" },
    { name: "ITIL 4 Foundation", url: "https://app.stormwindstudios.com/certifications/itil-4-foundation" },
  ];

  const prepResources = [
    {
      icon: FileQuestion,
      title: "Practice Exams",
      description: "Unlimited attempts with detailed explanations for every question. Simulate real exam conditions and track your progress over time.",
    },
    {
      icon: Presentation,
      title: "Downloadable Class Slides",
      description: "Visual learning materials available for offline study. Reference key concepts anytime, anywhere.",
    },
    {
      icon: BookOpen,
      title: "Study Guides",
      description: "Comprehensive written guides covering all exam objectives. Structured content to ensure complete topic coverage.",
    },
    {
      icon: Book,
      title: "Textbooks",
      description: "In-depth reference materials authored by industry experts. Deep-dive into complex topics at your own pace.",
    },
    {
      icon: Layers,
      title: "Flash Cards",
      description: "Quick review cards for key concepts and terminology. Perfect for reinforcing knowledge during short study sessions.",
    },
    {
      icon: UserCheck,
      title: "1:1 Mentoring",
      description: "Direct access to industry experts who guide your certification journey. Get personalized advice and insider tips.",
    },
    {
      icon: Bot,
      title: "AI Tutors",
      description: "24/7 AI-powered study assistance. Get instant answers to your questions and explanations tailored to your learning style.",
    },
  ];

  return (
    <PageLayout
      title="Certification Prep"
      description="Comprehensive resources and study plans to help you pass your IT certification exams with confidence"
      breadcrumbs={[{ label: "Certification Prep" }]}
      containerSize="wide"
    >
      <div className="space-y-16 animate-fade-in">
        {/* Certification Study Plans Section */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Certification Study Plans</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Certification Study Plan is a custom-made plan that guides you through your certification prep, 
              from assessing your current knowledge to ensuring exam readiness.
            </p>
          </div>

          {/* How It Works */}
          <Card className="bg-card/80 dark:bg-black/40 backdrop-blur-xl border-border/50 mb-10">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-8 text-center">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">1. Placement Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Take a comprehensive assessment to identify your current knowledge level and skill gaps.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">2. Personalized Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on your results, choose between comprehensive training or our focused Exam Crash courses.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <FileQuestion className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">3. Practice & Certify</h4>
                  <p className="text-sm text-muted-foreground">
                    Validate your knowledge with unlimited practice exams until you're ready to pass.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exam Crash Highlight */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border-primary/20 mb-10">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Exam Crash Courses</h3>
                  <p className="text-muted-foreground mb-4">
                    Already have experience in the field? Our Exam Crash courses are condensed, fast-paced 
                    training designed for professionals who just need to brush up on exam-specific content 
                    before taking their certification test.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Condensed Content</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Exam-Focused</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Quick Review</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Popular Certification Study Plans</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-lg bg-card/80 dark:bg-black/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-200"
                >
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">{cert.name}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Prep Resources Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Certification Prep Resources</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to succeed on exam day, from practice tests to personalized mentoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prepResources.map((resource) => (
              <Card 
                key={resource.title}
                className="bg-card/80 dark:bg-black/40 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-200 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 px-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border border-primary/20">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Get Certified?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start your certification journey today with our comprehensive study plans and resources.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="https://app.stormwindstudios.com/certifications" target="_blank" rel="noopener noreferrer">
                Browse All Certifications
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Contact Your Learning Director
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default CertificationPrep;
