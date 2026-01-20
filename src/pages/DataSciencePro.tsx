import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Cloud, Database, LineChart } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const DataSciencePro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Data Science Pro";
  }, []);

  return (
    <PageLayout
      title="Data Science Pro"
      description="Professional data science and analytics training covering Power BI, Cloud Data, SQL Server, Microsoft Fabric, and Power Platform"
      breadcrumbs={[{ label: "Data Science Pro" }]}
      heroActions={
        <Button size="lg" onClick={() => navigate('/courses?category=Data%20Science%20Pro')} className="gap-2">
          Explore Courses
        </Button>
      }
    >
      {/* Overview Section */}
      <div className="mb-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Master Data Science & Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                StormWind's Data Science Pro Training delivers comprehensive instruction across modern data platforms and analytics tools. 
                From Power BI visualizations to Azure cloud data solutions, SQL Server administration, and Power Platform automation, 
                our courses prepare professionals to drive data-driven decision making and digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: BarChart3, title: "Power BI", count: "60 courses", desc: "Data visualization & analytics", detail: "Transform data into visual insights. Master data modeling, DAX, advanced visualizations, AI integration, and compelling data storytelling." },
                { icon: Cloud, title: "Cloud Data", count: "44 courses", desc: "Azure, Fabric & Snowflake", detail: "Build scalable cloud data solutions with Azure, Microsoft Fabric, and Snowflake. Master data engineering, warehousing, and analytics." },
                { icon: Database, title: "Data Skills", count: "104 courses", desc: "SQL Server, T-SQL & Excel", detail: "Excel in data analysis with SQL Server, T-SQL, Excel, and productivity tools. Essential skills for data-driven business decisions." },
                { icon: LineChart, title: "Power Platform", count: "50 courses", desc: "Apps, Automate & Copilot", detail: "Master Power Apps, Power Automate, Power Pages, and Copilot Studio. Build apps, automate workflows, and create intelligent solutions." },
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-card/50 border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-8 h-8 text-primary" />
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.count} - {item.desc}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ExternalLink className="w-6 h-6 text-primary" />
                Training Benefits
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  {["Build interactive dashboards and reports with Power BI", "Design enterprise-scale cloud data solutions", "Master SQL Server administration and T-SQL", "Create low-code apps and automation workflows"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm">
                  {["Earn industry-recognized Microsoft certifications", "Hands-on labs and real-world projects", "Learn Microsoft Fabric and modern data platforms", "Advance your data science career"].map((item, i) => (
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
      </div>

      {/* Featured Certifications Section */}
      <div className="mb-32 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized data and analytics certifications to advance your career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            { icon: BarChart3, title: "PL-300: Power BI Data Analyst", level: "Intermediate", desc: "Design and build scalable data models, clean and transform data, and enable advanced analytic capabilities through reports and dashboards.", features: [{ icon: Database, title: "Hands-On Labs", desc: "Practice with real scenarios" }, { icon: BarChart3, title: "DAX Mastery", desc: "Advanced calculations & measures" }, { icon: Cloud, title: "Practice Exams", desc: "Test your knowledge" }] },
            { icon: Cloud, title: "DP-900: Azure Data Fundamentals", level: "Beginner", desc: "Master the fundamentals of core data concepts and Azure data services including relational, non-relational, and analytics workloads.", features: [{ icon: Database, title: "Comprehensive Training", desc: "Master Azure data fundamentals" }, { icon: LineChart, title: "Foundational Level", desc: "Perfect for beginners" }, { icon: Cloud, title: "Instructor Mentoring", desc: "Get personalized guidance" }] },
          ].map((cert, i) => (
            <div key={i} className="flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <cert.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">{cert.title}</h3>
                </div>
              </div>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold w-fit mb-4">{cert.level}</span>
              <p className="text-muted-foreground mb-6 leading-relaxed">{cert.desc}</p>
              <div className="space-y-3 mb-6">
                {cert.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <f.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{f.title}</p>
                      <p className="text-xs text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default DataSciencePro;
