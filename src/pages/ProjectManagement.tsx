import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, ExternalLink, Award, Video, Users, Bot, ClipboardCheck, BookOpen, Target } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import projectManagementImage from "@/assets/project-management-logo.png";
import ashleyHuntImage from "@/assets/ashley-hunt.png";

const ProjectManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { technologies = [], features = [] } = location.state || {};

  useEffect(() => {
    document.title = "Project Management";
  }, []);

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
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent tracking-tight pb-2">
              Project Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              PMP® certification and continuing certification requirement (CCR) support with powerful EPIC LIVE classes and 24-7 Instant Replay recordings
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/courses?category=Project Management')}
                className="gap-2"
              >
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Featured Instructor Section */}
          <div className="mb-32 rounded-lg bg-card border border-border p-8 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img 
                  src={ashleyHuntImage} 
                  alt="Ashley Hunt" 
                  className="w-48 h-48 rounded-lg object-cover"
                  loading="lazy"
                />
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

          {/* Featured Certifications Section */}
          <div className="mb-32 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Certifications</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Industry-recognized project management certifications to advance your career
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* PMP Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img
                      src={ashleyHuntImage}
                      alt="Ashley Hunt"
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">PMP® Certification</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: J. Ashley Hunt</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Advanced
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive preparation for the globally recognized Project Management Professional certification. Master the PMBOK Guide and earn 35 contact hours required for PMP® exam eligibility.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Live Sessions Available</p>
                      <p className="text-xs text-muted-foreground">Interactive EPIC LIVE training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">24/7 AI-powered assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClipboardCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Comprehensive exam preparation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACP Featured Card */}
              <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img
                      src={ashleyHuntImage}
                      alt="Ashley Hunt"
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">PMI-ACP® Certification</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Instructor: J. Ashley Hunt</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Intermediate
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master agile methodologies and practices for modern project management. Earn 21 contact hours and prepare for the PMI Agile Certified Practitioner certification exam.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Instructor Mentoring</p>
                      <p className="text-xs text-muted-foreground">1:1 expert guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">AI Tutor</p>
                      <p className="text-xs text-muted-foreground">24/7 AI-powered assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClipboardCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Practice Exams</p>
                      <p className="text-xs text-muted-foreground">Comprehensive exam preparation</p>
                    </div>
                  </div>
                </div>
              </div>
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
                      <h4 className="text-xl font-bold">Leadership & Agile</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Modern methodologies</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Cross-Cultural Teams</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Agile & Scrum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Lean Six Sigma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Kanban Boards</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    What's Included in Your Training
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">EPIC LIVE Classes with Calendar Access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">24/7 Instant Replay HD Recordings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">PMP® Certification Practice Exam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">1:1 Mentoring with Expert Instructor</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Downloadable Student Guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Exam Prep 'Eleventh Hour' Sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Exam Day Guidance and Tips</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Downloadable Project Templates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Categories Detail */}
          <div className="space-y-24">

            {/* Technical Courses */}
            <section className="animate-fade-in scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">Technical Project Management</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Practical skills and tools for executing successful projects
                </p>
              </div>

              <div className="rounded-lg bg-card border border-border p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Project Fundamentals for the Accidental Project Manager", pdu: "8 Technical PDU" },
                    { title: "Practical Project Management with Microsoft Project", pdu: "8.5 PDU" },
                    { title: "Initiating a Project", pdu: "4 Technical PDU" },
                    { title: "Planning for Risk Management", pdu: "4 Technical PDU" },
                    { title: "Balancing Time, Cost, and Scope", pdu: "4 Technical PDU" },
                    { title: "Managing a Project Team", pdu: "4 Technical PDU" },
                    { title: "Microsoft Project 2019", pdu: "8.5 Technical PDU" }
                  ].map((course, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">{course.title}</p>
                        <p className="text-sm text-primary">{course.pdu}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Leadership Courses */}
            <section className="animate-fade-in scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">Leadership Development</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Essential leadership skills for project managers leading diverse teams
                </p>
              </div>

              <div className="rounded-lg bg-card border border-border p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Leading a Cross-Cultural Virtual Team", pdu: "2 Leadership PDU" },
                    { title: "Building a Communications Management Plan that Works", pdu: "2 Leadership PDU" },
                    { title: "Motivating a Team of Individuals", pdu: "2 Leadership PDU" },
                    { title: "Negotiating for More", pdu: "2 Leadership PDU" }
                  ].map((course, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">{course.title}</p>
                        <p className="text-sm text-primary">{course.pdu}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Agile & Methodologies */}
            <section className="animate-fade-in scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">Agile & Modern Methodologies</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Master agile frameworks and lean principles for adaptive project delivery
                </p>
              </div>

              <div className="rounded-lg bg-card border border-border p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Transitioning to Agile Project Management", pdu: "4 PDU" },
                    { title: "Building Successful Scrum Team", pdu: "8 PDU" },
                    { title: "Working with Kanban Boards", pdu: "4 PDU" },
                    { title: "Lean Six Sigma Yellow Belt", pdu: "16 PDU" },
                    { title: "Lean Six Sigma Green Belt", pdu: "16 PDU" }
                  ].map((course, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">{course.title}</p>
                        <p className="text-sm text-primary">{course.pdu}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PMI Talent Triangle */}
            <section className="animate-fade-in scroll-mt-24">
              <div className="rounded-lg bg-card border border-border p-8">
                <h2 className="text-3xl font-bold mb-4">PMI Talent Triangle™</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Leadership and business intelligence skills are imperative to support long-range strategic objectives that contribute to success. The ideal skill set is a combination of technical, leadership, and strategic and business management competency—known as the PMI Talent Triangle™.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In order to fulfill the CCR, PMP's must attain a minimum of <span className="font-semibold text-primary">8 PDU in each of the skill areas</span>, and a total of <span className="font-semibold text-primary">30 PDU</span>, during the 3-year certification term.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
