import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, Video, Award, Calendar, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import raymondLacoste from "@/assets/raymond-lacoste.png";
import ashleyHunt from "@/assets/ashley-hunt.png";
import spikeXavier from "@/assets/spike-xavier.png";
import willPanek from "@/assets/will-panek.png";

const LiveInstructorLed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Live Instructor Led";
  }, []);

  const popularCourses = [
    { title: "Certified Information Systems Security Professional (CISSP)", description: "Master advanced cybersecurity concepts and prepare for the globally recognized CISSP certification covering security and risk management, asset security, and more.", level: "Advanced", certification: "CISSP", instructor: "Raymond Lacoste", instructorImage: raymondLacoste },
    { title: "Project Management Professional (PMP)", description: "Prepare for the globally recognized PMP certification with comprehensive coverage of project management principles, processes, and best practices.", level: "Advanced", certification: "PMP", instructor: "J. Ashley Hunt", instructorImage: ashleyHunt },
    { title: "Cisco CCNA", description: "Comprehensive Cisco networking certification covering network fundamentals, IP connectivity and services, security fundamentals, automation, and programmability.", level: "Intermediate", certification: "200-301", instructor: "Raymond Lacoste", instructorImage: raymondLacoste },
    { title: "Microsoft Azure Administrator (AZ-104)", description: "Master Azure administration including managing subscriptions, storage, virtual networks, and monitoring.", level: "Intermediate", certification: "AZ-104", instructor: "Spike Xavier", instructorImage: spikeXavier },
    { title: "PMI Agile Certified Practitioner (PMI-ACP)", description: "Master agile methodologies and practices for modern project management. Earn 21 contact hours and prepare for the PMI Agile Certified Practitioner certification exam.", level: "Intermediate", certification: "PMI-ACP", instructor: "J. Ashley Hunt", instructorImage: ashleyHunt },
    { title: "CompTIA Security+", description: "Master cybersecurity fundamentals and prepare for the industry-leading Security+ certification with comprehensive coverage of threats, vulnerabilities, and security controls.", level: "Intermediate", certification: "SY0-701", instructor: "Raymond Lacoste", instructorImage: raymondLacoste },
    { title: "CompTIA Network+", description: "Build a strong foundation in networking technologies and prepare for the Network+ certification covering network infrastructure, operations, and security.", level: "Intermediate", certification: "N10-009", instructor: "Raymond Lacoste", instructorImage: raymondLacoste },
    { title: "Microsoft Azure Fundamentals (AZ-900)", description: "Learn cloud computing basics and Azure services in this foundational course perfect for anyone starting their cloud journey.", level: "Beginner", certification: "AZ-900", instructor: "Will Panek", instructorImage: willPanek },
    { title: "Microsoft 365 Certified Administrator (MS-102)", description: "Master Microsoft 365 administration including identity management, security, compliance, and collaboration tools for enterprise environments.", level: "Advanced", certification: "MS-102", instructor: "Spike Xavier", instructorImage: spikeXavier },
    { title: "ITIL v4 Foundations", description: "Learn IT service management best practices with ITIL v4 framework covering service value system, practices, and continuous improvement.", level: "Beginner", certification: "ITIL v4", instructor: "Raymond Lacoste", instructorImage: raymondLacoste },
    { title: "Endpoint Administrator (MD-102)", description: "Learn to deploy, configure, secure, and manage Windows devices in enterprise environments using Microsoft Endpoint Manager and Intune.", level: "Intermediate", certification: "MD-102", instructor: "Will Panek", instructorImage: willPanek },
    { title: "CompTIA A+", description: "Launch your IT career with comprehensive training covering hardware, software, troubleshooting, and customer service for the A+ certification.", level: "Beginner", certification: "Core 1 & Core 2", instructor: "Spike Xavier", instructorImage: spikeXavier },
  ];

  return (
    <PageLayout
      title="Live Instructor-Led Courses"
      description="Experience the power of real-time learning with expert instructors. Our live courses combine interactive instruction, hands-on labs, and collaborative learning to accelerate your career growth. Ask questions, get immediate feedback, and learn alongside peers in a dynamic virtual classroom."
      breadcrumbs={[{ label: "Live Instructor-Led Training" }]}
      heroActions={
        <Button size="lg" onClick={() => navigate('/courses')}>
          <Calendar className="w-5 h-5 mr-2" />
          Browse Course Catalog
        </Button>
      }
    >
      {/* Why Live Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Why Live Instructor-Led Training?</h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Real-time learning with certified experts who bring the latest industry insights to every session.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Expert Instructors", desc: "Industry-certified professionals with real-world experience" },
                  { title: "Interactive Learning", desc: "Ask questions and get immediate answers in real-time" },
                  { title: "Flexible Sessions", desc: "Short 2-4 hour sessions fit easily into your schedule" },
                  { title: "Certification-Aligned", desc: "Structured curriculum designed for exam success" },
                  { title: "Always Current", desc: "Content updated with latest technologies and best practices" },
                  { title: "Collaborative Environment", desc: "Learn alongside peers and build your professional network" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Most Popular Live Courses Section */}
      <div className="mb-32 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Most Popular Live Courses</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-leading certifications taught by expert instructors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {popularCourses.map((course, index) => (
            <div key={index} className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <img src={course.instructorImage} alt={course.instructor} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 flex-shrink-0" loading="lazy" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">{course.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm mb-4">
                <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{course.level}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Certification Prep</p>
                    <p className="text-xs text-muted-foreground">{course.certification} Exam</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Live Interaction</p>
                    <p className="text-xs text-muted-foreground">Real-time Q&A with experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">AI Tutor</p>
                    <p className="text-xs text-muted-foreground">24/7 AI learning support</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default LiveInstructorLed;
