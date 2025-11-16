import { ArrowLeft, Home, Target, Users, BarChart3, Zap, ExternalLink, CheckCircle2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const SkillsAssessments = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Skills Assessments";
  }, []);
  const assessmentCategories = [{
    title: "Cloud & Infrastructure",
    assessments: ["AWS Fundamentals", "Azure Active Directory Administration", "Azure Networking Solutions Design", "Azure Infrastructure as a Service (IaaS)", "Cloud Administration Principles", "Cloud Security Operation", "Core Solutioning with AWS Technologies", "Architecting AWS Solutions", "Deploying Solutions with AWS"]
  }, {
    title: "Microsoft Technologies",
    assessments: ["Microsoft Teams Support", "Microsoft 365 Foundational Knowledge", "Windows Server Administration", "Active Directory Management", "Windows 10/11 Deployment and Management", "Administering Microsoft Server 2022/2019", "Administering Microsoft OneDrive", "Administering Microsoft SharePoint", "Windows Active Directory Federation Services (ADFS)", "Windows Server Hyper-V Virtualization", "Advanced Skills of Microsoft Excel", "Fundamentals of Microsoft Outlook", "Fundamentals of Microsoft PowerPoint", "Fundamentals of Microsoft Word"]
  }, {
    title: "Networking",
    assessments: ["Troubleshooting IP Connectivity", "Cisco IOS Router Operation", "IP Subnetting Fundamentals", "Advanced IP Subnetting", "Building IP Connectivity with Static Routes", "Cisco Network Design", "Deploying VPN Solutions on Cisco Devices", "Administering Cisco Contact Center Express", "Administering Cisco Unity", "Administering Enterprise Wireless LANs", "Deploying Cisco WLANs", "Administering Cisco UCM", "Configuring Access Control Lists on Cisco IOS", "Deploying Access Layer VLANs in Cisco", "Fortigate Firewall Administration", "Juniper Administration Practices"]
  }, {
    title: "Security",
    assessments: ["Ethical Hacking Practitioner", "Incident Detection and Response Practitioner", "IT Security Support", "Infrastructure Security Operation", "Cisco Security Principles", "Cloud Security Principals", "Defensive Security Practices for Networking", "Ethical Hacking Tools", "Information Security Principles in Healthcare", "Comprehensive Skills Assessment for Information Security"]
  }, {
    title: "Development & DevOps",
    assessments: ["Fundamentals of Development with Java", "Fundamentals of Docker", "Fundamentals of Kubernetes", "Fundamentals of Coding with Python", "Authoring with HTML", "Fundamentals of CSS", "Coding with Javascript", "Coding with Node.js", "Fundamentals of Automation with Ansible", "Building Scripts with PowerShell", "Fundamentals of Data Science with R", "Data Science with Microsoft Power BI", "Developing SQL Databases"]
  }, {
    title: "IT Support & Systems",
    assessments: ["Computer Hardware Support", "Windows Operating System Support", "Linux Operating System Support", "IT Service Management Foundations", "Administration of Red Hat Linux", "Advanced VMware vSphere Virtualization"]
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Skills Assessments</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight pb-2">Skills Assessments</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Identify and address your team's training needs with comprehensive Skills Assessments that evaluate proficiency and develop personalized learning plans
            </p>
          </div>

          {/* Main Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Streamline Your Training Process</h2>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    StormWind's Skills Assessments can determine the areas where your team needs improvement and create 
                    individualized learning plans to increase overall proficiency. This process makes identifying a training 
                    path more convenient than ever, ensuring students spend time in classes appropriate for their skill level.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Streamline Training</h3>
                        <p className="text-sm text-muted-foreground">
                          Ensure students spend time in classes appropriate for their skill level
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Individual Insights</h3>
                        <p className="text-sm text-muted-foreground">
                          Understand where each team member's skill level is at
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Team-Wide Analysis</h3>
                        <p className="text-sm text-muted-foreground">
                          Gain insights into your team's collective skill levels
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/30 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3">How It Works</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Take the Assessment</h4>
                          <p className="text-sm text-muted-foreground">
                            Select from over 100 specialized skills assessments covering cloud, networking, security, development, and enterprise technologies
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Get Personalized Results</h4>
                          <p className="text-sm text-muted-foreground">
                            Receive detailed analysis of strengths and areas for improvement with specific knowledge gaps and skill level benchmarks
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Follow Custom Learning Path</h4>
                          <p className="text-sm text-muted-foreground">
                            Based on assessment results, you'll be directed to the most appropriate training resources for your skill level
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-lg mb-4">Assessment Categories</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {assessmentCategories.map(category => <div key={category.title} className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all">
                          <h4 className="font-semibold mb-3">{category.title}</h4>
                          <div className="space-y-1.5">
                            {category.assessments.slice(0, 4).map(assessment => <div key={assessment} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-xs text-muted-foreground">{assessment}</span>
                              </div>)}
                            {category.assessments.length > 4 && <p className="text-xs text-muted-foreground/60 italic pt-1">
                                +{category.assessments.length - 4} more
                              </p>}
                          </div>
                        </div>)}
                    </div>
                  </div>

                  <div className="bg-accent/50 rounded-lg p-6 mt-6">
                    <h3 className="font-semibold text-lg mb-2">Ready to Assess Your Team's Skills?</h3>
                    <p className="text-muted-foreground mb-4">
                      Start identifying training needs and developing personalized learning paths today with over 100 specialized assessments
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          
        </div>
      </footer>
    </div>;
};
export default SkillsAssessments;