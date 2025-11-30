import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Users, Zap } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const LearningPaths = () => {
  useEffect(() => {
    document.title = "Learning Paths";
  }, []);

  const preMadePaths = [
    { name: "Azure Career Specialization", url: "https://app.stormwindstudios.com/learning-path/123507/azure-career-specialization-path" },
    { name: "Cybersecurity Manager", url: "https://app.stormwindstudios.com/learning-path/123497/cybersecurity-manager" },
    { name: "Help Desk Professional", url: "https://app.stormwindstudios.com/learning-path/123498/help-desk-professional" },
    { name: "Project Manager Professional", url: "https://app.stormwindstudios.com/learning-path/123505/project-manager-professional" },
    { name: "Cisco Network Professional", url: "https://app.stormwindstudios.com/learning-path/123502/cisco-network-professional" },
    { name: "Maximizing Productivity with ChatGPT", url: "https://app.stormwindstudios.com/learning-path/150365/maximizing-productivity-chatgpt" }
  ];

  const certifications = [
    { name: "CompTIA Security+ (SY0-701)", url: "https://app.stormwindstudios.com/learning-path/134251/security-701-certification-study-plan" },
    { name: "CompTIA Network+ (N10-009)", url: "https://app.stormwindstudios.com/learning-path/133297/network-009-certification-study-plan" },
    { name: "Cisco CCNA (200-301)", url: "https://app.stormwindstudios.com/learning-path/147731/cisco-ccna-200-301-certification-study-plan" },
    { name: "Microsoft AZ-900", url: "https://app.stormwindstudios.com/learning-path/160987/az-900-certification-study-plan" },
    { name: "ITIL v4 Foundations", url: "https://app.stormwindstudios.com/learning-path/140850/itil-v4-foundations-certification-study-plan" },
    { name: "CISSP", url: "https://app.stormwindstudios.com/learning-path/167217/cissp-certification-study-plan" }
  ];

  return (
    <PageLayout
      title="Learning Paths & Certification Study Plans"
      description="Structured training programs designed to accelerate your team's growth and certification success"
      breadcrumbs={[{ label: "Learning Paths" }]}
      containerSize="wide"
      heroClassName="mb-16"
    >
      {/* Learning Paths Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Learning Paths</h2>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Plan your training initiatives around StormWind's comprehensive Learning Paths solution. 
                Eliminate the guesswork of training programs with structured, industry-recognized paths 
                that are assignable to teams and individuals.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Industry-Recognized</h3>
                    <p className="text-sm text-muted-foreground">
                      Follow proven paths for quick and easy learning
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Team Assignable</h3>
                    <p className="text-sm text-muted-foreground">
                      Assign paths to individuals or entire teams
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Fully Customizable</h3>
                    <p className="text-sm text-muted-foreground">
                      Build and customize paths tailored to your needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-lg mb-4">Popular Learning Paths</h3>
                <ul className="space-y-2">
                  {preMadePaths.map(path => (
                    <li key={path.name} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{path.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/50 rounded-lg p-6 mt-6">
                <h3 className="font-semibold text-lg mb-2">Create Your Own Learning Path</h3>
                <p className="text-muted-foreground mb-4">
                  Don't see the perfect path? Our Learning Path Builder lets you create custom training 
                  programs tailored specifically to your team's needs and goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Certification Study Plans Section */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Certification Study Plans</h2>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Take control of your learning with StormWind's flexible Certification Study Plans. 
                Starting with an initial assessment, we craft a personalized learning experience—you'll 
                either dive into an immersive program that combines practical applications with fundamental 
                concepts, or follow a streamlined route focused on exam preparation. Get the targeted 
                training you need to achieve your certification goals.
              </p>

              <div className="bg-accent/30 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Placement Assessment</h4>
                      <p className="text-sm text-muted-foreground">
                        Take a skills assessment to measure your current knowledge. Based on your results, you'll be recommended either the Comprehensive Training Course or the Exam Crash Course.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pl-12 space-y-4 border-l-2 border-primary/30 ml-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center font-bold text-sm">
                        2a
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Comprehensive Training Course</h4>
                        <p className="text-sm text-muted-foreground">
                          For those new to the topic: Complete the full certification training course with hands-on labs, demonstrations, and practical applications
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center text-sm font-semibold text-muted-foreground py-2">
                      OR
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center font-bold text-sm">
                        2b
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Exam Crash Course</h4>
                        <p className="text-sm text-muted-foreground">
                          For experienced professionals: Intensive review of all exam objectives with focused bite-sized lessons and exam-specific strategies
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Practice Exams & Certification</h4>
                      <p className="text-sm text-muted-foreground">
                        Test your knowledge with realistic practice exams and prepare for certification success
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Exam Crash Courses - Fast-Track Your Certification
                </h3>
                <p className="text-muted-foreground mb-4">
                  Already have experience? Skip ahead! Exam Crash Courses are intensive, focused review sessions designed 
                  for learners who need a quick refresher before taking their certification exam.
                </p>
                <div>
                  <p className="font-semibold text-sm mb-2">Perfect for:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Individuals with 2+ years of on-the-job experience in the technology</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Students who have previously taken the full training course</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Professionals looking to quickly review material before exam day</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Individuals with expired certifications who need to recertify</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-lg mb-4">Most Popular Certification Study Plans</h3>
                <ul className="space-y-2">
                  {certifications.map(cert => (
                    <li key={cert.name} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{cert.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageLayout>
  );
};

export default LearningPaths;
