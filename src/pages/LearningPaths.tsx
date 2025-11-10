import { ArrowLeft, Home, BookOpen, Target, Users, Zap, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import stormwindLogo from "@/assets/stormwind-logo.png";
const LearningPaths = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Learning Paths";
  }, []);
  const preMadePaths = [{
    name: "Azure Career Specialization",
    url: "https://app.stormwindstudios.com/learning-path/123507/azure-career-specialization-path"
  }, {
    name: "Cybersecurity Manager",
    url: "https://app.stormwindstudios.com/learning-path/123497/cybersecurity-manager"
  }, {
    name: "Help Desk Professional",
    url: "https://app.stormwindstudios.com/learning-path/123498/help-desk-professional"
  }, {
    name: "Project Manager Professional",
    url: "https://app.stormwindstudios.com/learning-path/123505/project-manager-professional"
  }, {
    name: "Cisco Network Professional",
    url: "https://app.stormwindstudios.com/learning-path/123502/cisco-network-professional"
  }, {
    name: "Maximizing Productivity with ChatGPT",
    url: "https://app.stormwindstudios.com/learning-path/150365/maximizing-productivity-chatgpt"
  }];
  const certifications = [{
    name: "CompTIA Security+ (SY0-701)",
    url: "https://app.stormwindstudios.com/learning-path/134251/security-701-certification-study-plan"
  }, {
    name: "CompTIA Network+ (N10-009)",
    url: "https://app.stormwindstudios.com/learning-path/133297/network-009-certification-study-plan"
  }, {
    name: "Cisco CCNA (200-301)",
    url: "https://app.stormwindstudios.com/learning-path/147731/cisco-ccna-200-301-certification-study-plan"
  }, {
    name: "Microsoft AZ-900",
    url: "https://app.stormwindstudios.com/learning-path/160987/az-900-certification-study-plan"
  }, {
    name: "ITIL v4 Foundations",
    url: "https://app.stormwindstudios.com/learning-path/140850/itil-v4-foundations-certification-study-plan"
  }, {
    name: "CISSP",
    url: "https://app.stormwindstudios.com/learning-path/167217/cissp-certification-study-plan"
  }];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <img 
            src={stormwindLogo} 
            alt="StormWind Studios" 
            className="h-12 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => navigate('/')}
          />
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate("/")}>
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">Learning Paths & Certification Study Plans</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Structured training programs designed to accelerate your team's growth and certification success
            </p>
            <Button size="lg" onClick={() => window.open('https://app.stormwindstudios.com/learningpaths', '_blank')}>
              Browse All Learning Paths
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

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
                    <div className="grid sm:grid-cols-2 gap-3">
                      {preMadePaths.map(path => <a key={path.name} href={path.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all group">
                          <span className="font-medium">{path.name}</span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>)}
                    </div>
                  </div>

                  <div className="bg-accent/50 rounded-lg p-6 mt-6">
                    <h3 className="font-semibold text-lg mb-2">Create Your Own Learning Path</h3>
                    <p className="text-muted-foreground mb-4">
                      Don't see the perfect path? Our Learning Path Builder lets you create custom training 
                      programs tailored specifically to your team's needs and goals.
                    </p>
                    <Button size="lg" onClick={() => window.open('https://app.stormwindstudios.com/team/learning-path/create', '_blank')}>
                      Create Your Own
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
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
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {certifications.map(cert => <a key={cert.name} href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all group">
                          <span className="font-medium">{cert.name}</span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                        </a>)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      
    </div>;
};
export default LearningPaths;