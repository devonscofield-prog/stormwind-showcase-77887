import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, BookOpen, Clock, Target, Users } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { InstructorCourseCard, CourseFeature } from "@/components/InstructorCourseCard";
import mikePfeiffer from "@/assets/mike-pfeiffer.png";
import danYoung from "@/assets/dan-young.png";
import samBurr from "@/assets/sam-burr.png";
import ashleyHunt from "@/assets/ashley-hunt.png";
import chrisPaul from "@/assets/chris-paul.png";

const Microlearning = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  useEffect(() => {
    document.title = "Microlearning";
  }, []);

  const featuredCourses = [
    {
      title: "PowerShell Foundations",
      instructorName: "Mike Pfeiffer",
      instructorImage: mikePfeiffer,
      level: "Beginner" as const,
      titleIcon: Zap,
      description: "Master PowerShell fundamentals with bite-sized lessons covering cmdlets, scripting, automation, and system administration. Perfect for IT professionals looking to automate tasks and improve efficiency.",
      features: [
        { icon: Clock, title: "Quick Lessons", description: "5-10 minute focused modules" },
        { icon: Target, title: "Hands-On Practice", description: "Practical exercises included" },
        { icon: Users, title: "Expert Instruction", description: "Learn from industry veterans" },
      ] as CourseFeature[],
    },
    {
      title: "ChatGPT for IT Professionals",
      instructorName: "Dan Young",
      instructorImage: danYoung,
      level: "Beginner" as const,
      titleIcon: Zap,
      description: "Discover how to leverage ChatGPT and AI tools to enhance your IT workflows. Learn prompt engineering, automation techniques, and practical applications for troubleshooting and documentation.",
      features: [
        { icon: Clock, title: "Bite-Sized Modules", description: "Learn at your own pace" },
        { icon: Target, title: "Real-World Examples", description: "Practical IT scenarios" },
        { icon: BookOpen, title: "AI Best Practices", description: "Industry-standard techniques" },
      ] as CourseFeature[],
    },
    {
      title: "Intune for Microsoft Enterprises",
      instructorName: "Sam Burr",
      instructorImage: samBurr,
      level: "Intermediate" as const,
      titleIcon: Zap,
      description: "Master Microsoft Intune for modern device management. Learn to deploy, secure, and manage devices and applications across your enterprise with cloud-based mobile device management.",
      features: [
        { icon: Clock, title: "Bytes Format", description: "Short, focused lessons" },
        { icon: Target, title: "Hands-On Labs", description: "Practice in real environments" },
        { icon: Users, title: "Enterprise Focus", description: "Real-world scenarios" },
      ] as CourseFeature[],
    },
    {
      title: "AI for Project Managers",
      instructorName: "Ashley Hunt",
      instructorImage: ashleyHunt,
      level: "Beginner" as const,
      titleIcon: Zap,
      description: "Transform your project management with AI tools. Learn how to leverage artificial intelligence for planning, risk assessment, resource allocation, and stakeholder communication.",
      features: [
        { icon: Clock, title: "Quick Learning", description: "Get started fast" },
        { icon: Target, title: "Practical Tools", description: "AI applications for PMs" },
        { icon: BookOpen, title: "Real Scenarios", description: "Project management use cases" },
      ] as CourseFeature[],
    },
    {
      title: "NIST Cybersecurity Framework 2.0 Overview",
      instructorName: "Chris Paul",
      instructorImage: chrisPaul,
      level: "Intermediate" as const,
      titleIcon: Zap,
      description: "Understand the latest NIST Cybersecurity Framework with focused lessons on the six core functions: Identify, Protect, Detect, Respond, Recover, and Govern. Essential for security professionals.",
      features: [
        { icon: Clock, title: "Efficient Learning", description: "Framework in digestible chunks" },
        { icon: Target, title: "Compliance Focus", description: "Meet security standards" },
        { icon: BookOpen, title: "Current Standards", description: "Latest 2.0 framework" },
      ] as CourseFeature[],
    },
    {
      title: "BGP Routing Fundamentals for IPv4",
      instructorName: "Dan Young",
      instructorImage: danYoung,
      level: "Intermediate" as const,
      titleIcon: Zap,
      description: "Master Border Gateway Protocol (BGP) routing fundamentals with concise lessons on path selection, peering relationships, route filtering, and best practices for enterprise networks.",
      features: [
        { icon: Clock, title: "Focused Content", description: "Core BGP concepts" },
        { icon: Target, title: "Network Labs", description: "Hands-on routing exercises" },
        { icon: Users, title: "Expert Guidance", description: "Learn from network professionals" },
      ] as CourseFeature[],
    },
  ];

  return (
    <PageLayout
      title="Bytes: Microlearning"
      description="Learn faster with bite-sized, focused lessons designed for busy professionals. Our Bytes approach delivers targeted knowledge in short, digestible segments that fit seamlessly into your schedule. Each module is optimized for maximum retention and immediate application."
      breadcrumbs={[{ label: "Bytes: Microlearning" }]}
      heroActions={
        <Button onClick={() => navigate("/courses")} variant="default" size="lg">
          <BookOpen className="w-5 h-5 mr-2" />
          Explore Courses
        </Button>
      }
    >
      {/* What is Bytes Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">What is Bytes?</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bytes is a modern educational approach that breaks down complex topics into small, focused learning units. Each lesson typically takes 3-10 minutes to complete, making it perfect for:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Learning on the go during breaks or commutes</li>
                <li>Just-in-time training when you need specific skills</li>
                <li>Better knowledge retention through focused content</li>
                <li>Flexible learning that adapts to your schedule</li>
                <li>Quick skill refreshers and knowledge updates</li>
              </ul>
              <p className="mt-6">
                Our Bytes courses feature immediate feedback, real-world scenarios, and hands-on labs to ensure you gain practical, applicable skills efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="mb-32 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Bytes Courses</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Quick, focused training designed for maximum impact in minimum time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredCourses.map((course, index) => (
            <InstructorCourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Microlearning;
