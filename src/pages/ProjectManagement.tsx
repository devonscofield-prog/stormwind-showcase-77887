import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Award, Video, Users, Bot, ClipboardCheck, BookOpen, Target } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { VideoEmbed } from "@/components/VideoEmbed";
import { InstructorCourseCard, CourseFeature } from "@/components/InstructorCourseCard";
import ashleyHuntImage from "@/assets/ashley-hunt.png";

const ProjectManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};

  useEffect(() => {
    document.title = "Project Management";
  }, []);

  const featuredCourses = [
    {
      title: "PMP® Certification",
      instructorName: "J. Ashley Hunt",
      instructorImage: ashleyHuntImage,
      level: "Advanced" as const,
      description: "Comprehensive preparation for the globally recognized Project Management Professional certification. Master the PMBOK Guide and earn 35 contact hours required for PMP® exam eligibility.",
      features: [
        { icon: Video, title: "Live Sessions Available", description: "Interactive EPIC LIVE training" },
        { icon: Bot, title: "AI Tutor", description: "24/7 AI-powered assistance" },
        { icon: ClipboardCheck, title: "Practice Exams", description: "Comprehensive exam preparation" },
      ] as CourseFeature[],
    },
    {
      title: "PMI-ACP® Certification",
      instructorName: "J. Ashley Hunt",
      instructorImage: ashleyHuntImage,
      level: "Intermediate" as const,
      description: "Master agile methodologies and practices for modern project management. Earn 21 contact hours and prepare for the PMI Agile Certified Practitioner certification exam.",
      features: [
        { icon: Users, title: "Instructor Mentoring", description: "1:1 expert guidance" },
        { icon: Bot, title: "AI Tutor", description: "24/7 AI-powered assistance" },
        { icon: ClipboardCheck, title: "Practice Exams", description: "Comprehensive exam preparation" },
      ] as CourseFeature[],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
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
                <BreadcrumbPage>Project Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground tracking-tight pb-2">
              Project Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              PMP® certification and continuing certification requirement (CCR) support with powerful EPIC LIVE classes and 24-7 Instant Replay recordings
            </p>
            <div className="flex justify-center">
              <Button size="lg" onClick={() => navigate('/courses?category=Project Management')} className="gap-2">
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Featured Instructor Section with Video and Testimonials */}
          <div className="mb-32 rounded-lg bg-card border border-border overflow-hidden animate-fade-in">
            {/* Instructor Bio */}
            <div className="p-8 pb-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <img src={ashleyHuntImage} alt="Ashley Hunt" className="w-48 h-48 rounded-lg object-cover shadow-lg" loading="lazy" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">Senior Instructor: J. Ashley Hunt</h2>
                  <p className="text-primary font-semibold mb-4">PMP • MCAS • PROJECT+</p>
                  <p className="text-muted-foreground leading-relaxed">
                    There's simply no substitute for a great instructor. Over the last 15 years, Ashley has helped thousands of students in hundreds of companies around the globe prepare for the PMP® exam. She has developed an admirable reputation as a consultative trainer, subject-matter-expert, and engaging speaker in several disciplines, consistently receiving exemplary evaluations and high praise from her students. Her lively personality and use of stories and experiences always produce a highly informative and entertaining learning engagement. Ashley has written numerous study guides, including one for the CompTIA Project+, PMI-ACP, and PMP 6th Edition.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Instructor Training Video */}
            <div className="px-8 pb-8">
              <div className="max-w-3xl mx-auto">
                <VideoEmbed videoId="21dgg0qzzp" title="Project Management Training with Ashley Hunt" />
              </div>
            </div>

            {/* Student Testimonials */}
            <div className="bg-gradient-to-b from-muted/30 to-muted/10 px-8 py-10 border-t border-border">
              <h3 className="text-2xl font-bold mb-6 text-center">What Students Say About Ashley</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "Ashley is engaging with clear explanations and easy to understand examples. I feel a million times more prepared to take the PMP Exam than I did before class."
                  </p>
                  <p className="font-semibold text-foreground text-sm">Al Whitehouse</p>
                  <p className="text-xs text-muted-foreground">Wake County Government</p>
                </div>
                
                <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "Ashley is amazing. She is definitely in the right job. She was engaging and helped the learning feel 'light' through all the sessions."
                  </p>
                  <p className="font-semibold text-foreground text-sm">Leslie Sedlac</p>
                  <p className="text-xs text-muted-foreground">SAIC</p>
                </div>
                
                <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "Ashley is AMAZING! Her knowledge is invaluable, she is very engaging and encouraging. She kept the class at a very good pace and made sure everyone understood the content. I've never done a class that has been so engaging and easy to absorb and understand the content. Ashley is brilliant at teaching. I want to do more classes with Ashley!"
                  </p>
                  <p className="font-semibold text-foreground text-sm">Danny Parsons</p>
                </div>
                
                <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "Ashley is incredibly knowledgeable, kept the class both focused and energized, and showed genuine kindness throughout the session. Their approachability and expertise made learning not just effective, but enjoyable."
                  </p>
                  <p className="font-semibold text-foreground text-sm">Student from State of Nebraska Government</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Certifications Section */}
          <div className="mb-32 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Certifications</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Industry-recognized project management certifications to advance your career
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredCourses.map((course, index) => (
                <InstructorCourseCard key={index} {...course} />
              ))}
            </div>
          </div>

          {/* Project Management Training Overview */}
          <div className="mb-32 animate-fade-in scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Project Management Training Overview</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive training covering certifications, technical skills, and leadership development
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Master Project Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our project management training programs prepare you for PMP® certification and continuing certification requirements (CCR). Featuring EPIC LIVE classes with expert instructor Ashley Hunt, 24-7 Instant Replay recordings, practice exams, 1:1 mentoring, and downloadable project templates. Earn Professional Development Units (PDUs) across technical, leadership, and strategic competencies to maintain your certification.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Certification Prep</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Industry-recognized certifications</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">PMP® (35 Contact Hours)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">PMI-ACP (21 Contact Hours)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">CompTIA Project+ (16 PDU)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">CAPM (Entry Level)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Technical Skills</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Practical project management</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Microsoft Project Training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Risk Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Project Fundamentals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Time, Cost & Scope</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Leadership</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Essential soft skills</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Team Leadership</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Stakeholder Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Communication Skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Conflict Resolution</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    PDU Categories for CCR
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold text-sm mb-2">Technical Project Management</p>
                      <p className="text-xs text-muted-foreground">Skills directly related to project management</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">Leadership</p>
                      <p className="text-xs text-muted-foreground">Interpersonal skills to lead teams effectively</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">Strategic & Business</p>
                      <p className="text-xs text-muted-foreground">Business acumen and organizational strategy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
