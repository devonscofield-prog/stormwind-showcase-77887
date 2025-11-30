import { useEffect } from "react";
import { Users, BarChart3, Calendar, TrendingUp, ClipboardCheck, UserPlus } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const EnterpriseReporting = () => {
  useEffect(() => {
    document.title = "Enterprise Reporting";
  }, []);

  const features = [
    {
      icon: Users,
      title: "Manage Licenses",
      description: "Full control over user management and license allocation. Easily assign, track, and manage licenses across your entire organization with real-time visibility into remaining seats and end dates."
    },
    {
      icon: BarChart3,
      title: "Track Learning",
      description: "Monitor individual and team progress with detailed analytics. View course completion rates, time spent learning, and engagement metrics to understand your team's development."
    },
    {
      icon: UserPlus,
      title: "Assign Courses",
      description: "Tailor the learning experience to your team's unique needs. Search and assign specific courses to individuals or groups, creating personalized learning paths that align with your organizational goals."
    },
    {
      icon: Calendar,
      title: "Assign Due Dates",
      description: "Drive measurable outcomes by setting course deadlines and milestones. Track progress against timelines and ensure your team stays on track with their learning objectives."
    },
    {
      icon: TrendingUp,
      title: "View Progress",
      description: "Comprehensive reporting dashboards show completion percentages, time remaining, and detailed progress metrics. Identify top performers and those who may need additional support."
    },
    {
      icon: ClipboardCheck,
      title: "Export Activity",
      description: "Generate detailed reports and export learning data for stakeholder presentations, compliance documentation, or integration with your existing HR systems."
    }
  ];

  return (
    <PageLayout
      title="Enterprise Reporting and Administration"
      description="Empower your team with our comprehensive SaaS platform, offering full control over user management and license allocation. Tailor the learning experience to your team's unique needs and drive measurable outcomes. As a manager, you'll have the tools to monitor progress, align training with organizational goals, and maximize your team's potential."
      breadcrumbs={[{ label: "Enterprise Reporting" }]}
    >
      {/* Features Grid */}
      <div className="mb-32 animate-fade-in">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default EnterpriseReporting;
