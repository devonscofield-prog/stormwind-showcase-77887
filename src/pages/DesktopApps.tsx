import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Table, Presentation, Mail, Database, Users, FolderKanban, BarChart3 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";

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
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Master Desktop Applications</h3>
            <p className="text-muted-foreground leading-relaxed">
              StormWind's Desktop Apps Training provides comprehensive instruction across the Microsoft application ecosystem. 
              From core Office tools to advanced collaboration and data science platforms, our courses help individuals and 
              teams maximize productivity and master the tools that power modern workplaces.
            </p>
          </div>

          <BentoGrid columns={3} className="mb-8">
            <BentoCard
              icon={FileText}
              title="Core Office"
              description="7 courses - Microsoft 365 fundamentals including OneDrive, OneNote, and productivity tools."
            />

            <BentoCard
              icon={FileText}
              title="Word"
              description="6 courses - Document creation, formatting, collaboration, and professional writing."
            />

            <BentoCard
              icon={Table}
              title="Excel"
              description="6 courses - Formulas, data analysis, VBA programming, and advanced features."
            />

            <BentoCard
              icon={Presentation}
              title="PowerPoint"
              description="4 courses - Design principles, animations, transitions, and visual storytelling."
            />

            <BentoCard
              icon={Mail}
              title="Outlook"
              description="4 courses - Email management, calendaring, task tracking, and workflows."
            />

            <BentoCard
              icon={Database}
              title="Access & Apps"
              description="10 courses - Database management, Visio, PowerApps, Flow, Forms, and Sway."
            />

            <BentoCard
              icon={Users}
              title="Collaboration"
              description="10 courses - Teams, SharePoint, Yammer, and modern collaboration tools."
            />

            <BentoCard
              icon={FolderKanban}
              title="Project Management"
              description="7 courses - Microsoft Project, Planner, scheduling, and resource management."
            />

            <BentoCard
              icon={BarChart3}
              title="Data Science"
              description="5 courses - Power BI, PowerApps, data modeling, and dashboard creation."
            />
          </BentoGrid>

          <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ExternalLink className="w-6 h-6 text-primary" />
              Training Benefits
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                {["Increased workplace productivity and efficiency", "Enhanced collaboration and communication skills", "Professional document and presentation creation", "Advanced data analysis and reporting capabilities"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 text-sm">
                {["Improved project management and tracking", "Better email and calendar organization", "Mastery of industry-standard tools", "Career advancement opportunities"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DesktopApps;
