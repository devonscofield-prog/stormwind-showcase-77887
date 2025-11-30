import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Table, Presentation, Mail, Database, Users, FolderKanban, BarChart3 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const DesktopApps = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Desktop Apps";
  }, []);

  return (
    <PageLayout
      title="Desktop Apps Training"
      description="Comprehensive training on desktop applications, from core Office tools to advanced collaboration and data science platforms"
      breadcrumbs={[{ label: "Desktop Apps Training" }]}
      heroActions={
        <Button size="lg" onClick={() => navigate('/courses')} className="gap-2">
          Explore Courses
        </Button>
      }
    >
      {/* Overview Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Master Desktop Applications</h3>
              <p className="text-muted-foreground leading-relaxed">
                StormWind's Desktop Apps Training provides comprehensive instruction across the Microsoft application ecosystem. 
                From core Office tools to advanced collaboration and data science platforms, our courses help individuals and 
                teams maximize productivity and master the tools that power modern workplaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Core Office</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">7 courses - Essential productivity foundations</p>
                <p className="text-sm text-muted-foreground">
                  Master Microsoft 365 fundamentals including OneDrive, OneNote, and core productivity tools essential for everyday workplace applications.
                </p>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Word</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">6 courses - Document creation mastery</p>
                <p className="text-sm text-muted-foreground">
                  Complete Word training from beginner to advanced. Learn document creation, formatting, collaboration, and professional writing.
                </p>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Table className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Excel</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">6 courses - Data analysis expertise</p>
                <p className="text-sm text-muted-foreground">
                  Comprehensive Excel training including formulas, data analysis, VBA programming, and advanced features for powerful spreadsheet management.
                </p>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Presentation className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">PowerPoint</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">4 courses - Presentation excellence</p>
                <p className="text-sm text-muted-foreground">
                  Create impactful presentations. Learn design principles, animations, transitions, and advanced features for compelling visual storytelling.
                </p>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Outlook</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">4 courses - Communication efficiency</p>
                <p className="text-sm text-muted-foreground">
                  Master email management, calendaring, task tracking, and communication workflows for effective professional correspondence.
                </p>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Access & Apps</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">10 courses - Database & productivity tools</p>
                <p className="text-sm text-muted-foreground">
                  Database management with Access, visual diagramming with Visio, plus PowerApps, Flow, Forms, and Sway for extended productivity.
                </p>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Collaboration</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">10 courses - Teamwork & communication</p>
                <p className="text-sm text-muted-foreground">
                  Master Teams, SharePoint, Yammer, and modern collaboration tools. Work effectively in distributed teams with Microsoft 365 platforms.
                </p>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <FolderKanban className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Project Management</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">7 courses - Planning & tracking</p>
                <p className="text-sm text-muted-foreground">
                  Plan and track projects with Microsoft Project, Planner, and Visio. Master project scheduling, resource management, and visual planning.
                </p>
              </div>

              <div className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <h4 className="text-xl font-bold">Data Science</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">5 courses - Analytics & visualization</p>
                <p className="text-sm text-muted-foreground">
                  Transform data into insights with Power BI and PowerApps. Learn data modeling, visualization, and dashboard creation for business intelligence.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ExternalLink className="w-6 h-6 text-primary" />
                Training Benefits
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Increased workplace productivity and efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Enhanced collaboration and communication skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional document and presentation creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Advanced data analysis and reporting capabilities</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Improved project management and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Better email and calendar organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Mastery of industry-standard tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Career advancement opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DesktopApps;
