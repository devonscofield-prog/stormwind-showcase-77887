import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, BarChart3, Cloud, Database } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const BusinessPro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Business Pro";
  }, []);

  return (
    <PageLayout
      title="Business Pro"
      description="Professional business technology training covering Power Platform, Power BI, Cloud Data, and essential data skills"
      breadcrumbs={[{ label: "Business Pro" }]}
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
              <h3 className="text-3xl font-bold mb-4">Master Business Technology</h3>
              <p className="text-muted-foreground leading-relaxed">
                StormWind's Business Pro Training delivers comprehensive instruction across modern business technology platforms. 
                From Power Platform automation to advanced data analytics with Power BI, cloud data solutions, and essential data 
                skills, our courses prepare professionals to drive digital transformation and data-driven decision making.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Zap, title: "Power Platform", count: "40 courses", desc: "Low-code app development", detail: "Master Power Apps, Power Automate, Power Pages, and Copilot Studio. Build apps, automate workflows, and create intelligent chatbots with low-code tools." },
                { icon: BarChart3, title: "Power BI", count: "61 courses", desc: "Data visualization & analytics", detail: "Transform data into visual insights. Master data modeling, DAX, advanced visualizations, AI integration, and compelling data storytelling." },
                { icon: Cloud, title: "Cloud Data", count: "49 courses", desc: "Enterprise data solutions", detail: "Build scalable cloud data solutions with Azure and SQL Server. Master data engineering, warehousing, analytics, and AI services." },
                { icon: Database, title: "Data Skills", count: "20 courses", desc: "Data management fundamentals", detail: "Excel in data analysis with Excel, Python, SQL, and database management. Essential skills for data-driven business decisions." },
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
                  {["Build low-code apps and automation workflows", "Create compelling data visualizations and reports", "Design enterprise-scale cloud data solutions", "Master data analysis and management tools"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm">
                  {["Earn industry-recognized Microsoft certifications", "Hands-on labs and real-world projects", "Drive digital transformation initiatives", "Advance your business technology career"].map((item, i) => (
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
            Industry-recognized Power Platform certifications to advance your business technology career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            { icon: ExternalLink, title: "PL-900: Power Platform Fundamentals", level: "Beginner", desc: "Master the fundamentals of Microsoft Power Platform including Power Apps, Power Automate, Power BI, and Power Pages.", features: [{ icon: Database, title: "Comprehensive Training", desc: "Master Power Platform fundamentals" }, { icon: Zap, title: "Foundational Level", desc: "Perfect for beginners" }, { icon: Cloud, title: "Instructor Mentoring", desc: "Get personalized guidance" }] },
            { icon: BarChart3, title: "PL-300: Power BI Data Analyst", level: "Intermediate", desc: "Design and build scalable data models, clean and transform data, and enable advanced analytic capabilities through reports and dashboards.", features: [{ icon: Database, title: "Hands-On Labs", desc: "Practice with real scenarios" }, { icon: Zap, title: "AI Tutor", desc: "Get instant assistance" }, { icon: BarChart3, title: "Practice Exams", desc: "Test your knowledge" }] },
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

export default BusinessPro;
