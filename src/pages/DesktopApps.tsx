import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, ExternalLink, FileText, Table, Presentation, Mail, Database, Users, FolderKanban, BarChart3 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";

const DesktopApps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { technologies = [], features = [] } = location.state || {};

  useEffect(() => {
    document.title = "Desktop Apps";
  }, []);

  const categories = [
    {
      title: "Core Office Applications and Usage",
      courses: [
        "Microsoft 365 Core Applications Beginner",
        "Office 2019 New Features Beginner",
        "Microsoft 365 New Features Beginner",
        "Microsoft 365 Overview Beginner",
        "Microsoft 365 OneDrive Beginner",
        "Microsoft 365 OneNote Online Beginner",
        "OneNote for Windows 10",
      ],
    },
    {
      title: "Word Applications",
      courses: [
        "Word 2019 Beginner",
        "Word 2019 Intermediate",
        "Word 2019 Advanced",
        "Word 365 Beginner",
        "Word 365 Intermediate",
        "Word 365 Advanced",
      ],
    },
    {
      title: "Excel Applications",
      courses: [
        "Excel 2019 Beginner",
        "Excel 2019 Intermediate",
        "Excel 365 Beginner",
        "Excel 365 Intermediate",
        "Excel 365 Advanced",
        "Excel 365 VBA",
      ],
    },
    {
      title: "PowerPoint Applications",
      courses: [
        "PowerPoint 2019 Beginner",
        "PowerPoint 2019 Advanced",
        "PowerPoint 365 Beginner",
        "PowerPoint 365 Advanced",
      ],
    },
    {
      title: "Outlook Applications",
      courses: [
        "Outlook 2019 Beginner",
        "Outlook 2019 Advanced",
        "Outlook 365 Beginner",
        "Outlook 365 Advanced",
      ],
    },
    {
      title: "Access Applications",
      courses: [
        "Microsoft 365 PowerApps",
        "Microsoft 365 Sway Beginner",
        "Microsoft 365 Flow Beginner",
        "Microsoft 365 Forms",
        "Access 2019 Beginner",
        "Access 2019 Intermediate",
        "Access 2019 Advanced",
        "Access 365 Beginner",
        "Visio 2019 Beginner",
        "Visio 365 Beginner",
      ],
    },
    {
      title: "Collaboration Applications",
      courses: [
        "Microsoft 365 Teams Beginner",
        "Microsoft 365 Collaborating in Microsoft 365 Beginner",
        "Microsoft 365 Delve Beginner",
        "Microsoft 365 Yammer Beginner",
        "Skype for Business Beginner",
        "Slack - A Complete Guide",
        "Working with Teams Beginner",
        "Microsoft 365 SharePoint Sites Beginner",
        "SharePoint 365 Site Owner",
        "SharePoint 365 Site User",
      ],
    },
    {
      title: "Project Management Applications",
      courses: [
        "Microsoft 365 Video Beginner",
        "Microsoft 365 Planner Beginner",
        "Microsoft 365 Teams Beginner",
        "Microsoft 365 Visio Desktop Beginner",
        "Microsoft 365 Visio Online Beginner",
        "Project 365 Beginner",
        "Project 365 Advanced",
      ],
    },
    {
      title: "Data Science Applications",
      courses: [
        "Microsoft 365 Power BI Beginner",
        "Microsoft 365 Power BI Intermediate",
        "Microsoft 365 Power BI Report Builder – Beginner",
        "Microsoft 365 Power BI Report Builder – Intermediate",
        "Microsoft 365 PowerApps Beginner",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
              Desktop Apps Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive training on desktop applications, from core Office tools to advanced collaboration and data science platforms
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/courses')}
                className="gap-2"
              >
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Overview Section */}
          <div id="desktop-overview" className="mb-32 animate-fade-in scroll-mt-24">
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
                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Core Office</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">7 courses - Essential productivity foundations</p>
                    <p className="text-sm text-muted-foreground">
                      Master Microsoft 365 fundamentals including OneDrive, OneNote, and core productivity tools essential for everyday workplace applications.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Word</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">6 courses - Document creation mastery</p>
                    <p className="text-sm text-muted-foreground">
                      Complete Word training from beginner to advanced. Learn document creation, formatting, collaboration, and professional writing.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Table className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Excel</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">6 courses - Data analysis expertise</p>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive Excel training including formulas, data analysis, VBA programming, and advanced features for powerful spreadsheet management.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Presentation className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">PowerPoint</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">4 courses - Presentation excellence</p>
                    <p className="text-sm text-muted-foreground">
                      Create impactful presentations. Learn design principles, animations, transitions, and advanced features for compelling visual storytelling.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Outlook</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">4 courses - Communication efficiency</p>
                    <p className="text-sm text-muted-foreground">
                      Master email management, calendaring, task tracking, and communication workflows for effective professional correspondence.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Access & Apps</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">10 courses - Database & productivity tools</p>
                    <p className="text-sm text-muted-foreground">
                      Database management with Access, visual diagramming with Visio, plus PowerApps, Flow, Forms, and Sway for extended productivity.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Collaboration</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">10 courses - Teamwork & communication</p>
                    <p className="text-sm text-muted-foreground">
                      Master Teams, SharePoint, Yammer, and modern collaboration tools. Work effectively in distributed teams with Microsoft 365 platforms.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FolderKanban className="w-8 h-8 text-primary" />
                      <h4 className="text-xl font-bold">Project Management</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">7 courses - Planning & tracking</p>
                    <p className="text-sm text-muted-foreground">
                      Plan and track projects with Microsoft Project, Planner, and Visio. Master project scheduling, resource management, and visual planning.
                    </p>
                  </div>

                  <div className="rounded-lg bg-card/50 border border-border p-6">
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
        </div>
      </div>
    </div>
  );
};

export default DesktopApps;
