import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Route, Target, ChevronRight, Award } from "lucide-react";
import FeatureListItem from "@/components/FeatureListItem";
const LearningPaths = () => {
  useEffect(() => {
    document.title = "Learning Paths | StormWind Studios";
  }, []);
  const learningPaths = ["Azure Career Specialization", "Help Desk Professional", "Cisco Network Professional", "Cybersecurity Manager", "Project Manager Professional", "Maximizing Productivity with ChatGPT"];
  return <PageLayout title="Learning Paths" description="Structured training programs designed to take you from beginner to expert in your chosen field" breadcrumbs={[{
    label: "Learning Paths"
  }]} containerSize="wide">
      <div className="space-y-16 animate-fade-in">
        {/* Learning Paths Section */}
        <section>
          <div className="text-center mb-12">
            
            <h2 className="text-3xl font-bold tracking-tight mb-4">Learning Paths</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Learning Path is a curated series of courses designed to take you from your current skill level 
              to mastery in a specific role or technology area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <Card className="bg-card/80 dark:bg-black/40 backdrop-blur-xl border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Pre-Made Learning Paths</h3>
                <p className="text-muted-foreground mb-6">
                  Our expertly designed learning paths cover the most in-demand IT roles and skills. 
                  Each path includes a logical progression of courses to build your expertise step by step.
                </p>
                <div className="space-y-3">
                  <FeatureListItem text="Structured curriculum from beginner to advanced" size="sm" />
                  <FeatureListItem text="Hands-on labs and real-world projects" size="sm" />
                  <FeatureListItem text="Progress tracking and milestones" size="sm" />
                  <FeatureListItem text="Industry-recognized skills alignment" size="sm" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 dark:bg-black/40 backdrop-blur-xl border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Custom Learning Paths</h3>
                <p className="text-muted-foreground mb-6">
                  Need something specific? Work with your Learning Director to create custom learning paths 
                  tailored to your organization's unique requirements and goals.
                </p>
                <div className="space-y-3">
                  <FeatureListItem text="Tailored to your organization's tech stack" size="sm" />
                  <FeatureListItem text="Aligned with your business objectives" size="sm" />
                  <FeatureListItem text="Flexible pacing and scheduling" size="sm" />
                  <FeatureListItem text="Integration with your existing training programs" size="sm" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Popular Learning Paths */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Popular Learning Paths</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningPaths.map(path => <div key={path} className="p-4 rounded-lg bg-card/80 dark:bg-black/40 backdrop-blur-xl border border-border/50">
                  <span className="text-sm font-medium">{path}</span>
                </div>)}
            </div>
          </div>
        </section>

        {/* Link to Certification Prep */}
        <section className="text-center py-12 px-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border border-primary/20">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Looking for Certification Prep?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our comprehensive certification study plans, practice exams, and exam prep resources.
          </p>
          <Button asChild size="lg">
            <Link to="/certification-prep">
              View Certification Prep
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </section>

      </div>
    </PageLayout>;
};
export default LearningPaths;