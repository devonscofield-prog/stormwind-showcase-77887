import { useEffect } from "react";
import { Target, Users, BarChart3, ExternalLink, CheckCircle2, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Navigation } from "@/components/Navigation";
import { VideoEmbed } from "@/components/VideoEmbed";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  LabelList,
} from "recharts";

const SkillsAssessments = () => {
  useEffect(() => {
    document.title = "Skills Assessments";
  }, []);

  const assessmentCategories = [
    {
      title: "Cloud & Infrastructure",
      assessments: ["AWS Fundamentals", "Azure Active Directory Administration", "Azure Networking Solutions Design", "Azure Infrastructure as a Service (IaaS)", "Cloud Administration Principles", "Cloud Security Operation", "Core Solutioning with AWS Technologies", "Architecting AWS Solutions", "Deploying Solutions with AWS"]
    },
    {
      title: "Microsoft Technologies",
      assessments: ["Microsoft Teams Support", "Microsoft 365 Foundational Knowledge", "Windows Server Administration", "Active Directory Management", "Windows 10/11 Deployment and Management", "Administering Microsoft Server 2022/2019", "Administering Microsoft OneDrive", "Administering Microsoft SharePoint", "Windows Active Directory Federation Services (ADFS)", "Windows Server Hyper-V Virtualization", "Advanced Skills of Microsoft Excel", "Fundamentals of Microsoft Outlook", "Fundamentals of Microsoft PowerPoint", "Fundamentals of Microsoft Word"]
    },
    {
      title: "Networking",
      assessments: ["Troubleshooting IP Connectivity", "Cisco IOS Router Operation", "IP Subnetting Fundamentals", "Advanced IP Subnetting", "Building IP Connectivity with Static Routes", "Cisco Network Design", "Deploying VPN Solutions on Cisco Devices", "Administering Cisco Contact Center Express", "Administering Cisco Unity", "Administering Enterprise Wireless LANs", "Deploying Cisco WLANs", "Administering Cisco UCM", "Configuring Access Control Lists on Cisco IOS", "Deploying Access Layer VLANs in Cisco", "Fortigate Firewall Administration", "Juniper Administration Practices"]
    },
    {
      title: "Security",
      assessments: ["Ethical Hacking Practitioner", "Incident Detection and Response Practitioner", "IT Security Support", "Infrastructure Security Operation", "Cisco Security Principles", "Cloud Security Principals", "Defensive Security Practices for Networking", "Ethical Hacking Tools", "Information Security Principles in Healthcare", "Comprehensive Skills Assessment for Information Security"]
    },
    {
      title: "Development & DevOps",
      assessments: ["Fundamentals of Development with Java", "Fundamentals of Docker", "Fundamentals of Kubernetes", "Fundamentals of Coding with Python", "Authoring with HTML", "Fundamentals of CSS", "Coding with Javascript", "Coding with Node.js", "Fundamentals of Automation with Ansible", "Building Scripts with PowerShell", "Fundamentals of Data Science with R", "Data Science with Microsoft Power BI", "Developing SQL Databases"]
    },
    {
      title: "IT Support & Systems",
      assessments: ["Computer Hardware Support", "Windows Operating System Support", "Linux Operating System Support", "IT Service Management Foundations", "Administration of Red Hat Linux", "Advanced VMware vSphere Virtualization"]
    }
  ];

  const teamSkillData = [
    { name: "Help Desk", score: 66.5 },
    { name: "Security", score: 50 },
    { name: "Cloud", score: 41.25 },
    { name: "Networking", score: 58 },
    { name: "M365 Admin", score: 72 },
  ];

  const individualData = [
    {
      name: "Amanda",
      skills: [
        { category: "Help Desk", score: 42 },
        { category: "Security", score: 91 },
        { category: "Cloud", score: 21 },
        { category: "Networking", score: 55 },
        { category: "M365 Admin", score: 78 },
      ]
    },
    {
      name: "John",
      skills: [
        { category: "Help Desk", score: 79 },
        { category: "Security", score: 50 },
        { category: "Cloud", score: 11 },
        { category: "Networking", score: 68 },
        { category: "M365 Admin", score: 82 },
      ]
    },
    {
      name: "Steven",
      skills: [
        { category: "Help Desk", score: 48 },
        { category: "Security", score: 30 },
        { category: "Cloud", score: 89 },
        { category: "Networking", score: 45 },
        { category: "M365 Admin", score: 62 },
      ]
    },
    {
      name: "Ellen",
      skills: [
        { category: "Help Desk", score: 95 },
        { category: "Security", score: 29 },
        { category: "Cloud", score: 43 },
        { category: "Networking", score: 64 },
        { category: "M365 Admin", score: 66 },
      ]
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "hsl(142, 76%, 36%)"; // Green
    if (score >= 60) return "hsl(48, 96%, 53%)"; // Yellow
    return "hsl(0, 84%, 60%)"; // Red
  };

  const getProficiencyLevel = (score: number) => {
    if (score >= 90) return "Highly Proficient";
    if (score >= 60) return "Proficient";
    return "Needs Upgrading";
  };

  const getBadgeClasses = (score: number) => {
    if (score >= 90) return "bg-green-500/20 text-green-600";
    if (score >= 60) return "bg-yellow-500/20 text-yellow-600";
    return "bg-red-500/20 text-red-600";
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-muted-foreground">Score: {payload[0].value.toFixed(1)}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
              Skills Assessments
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Identify and address your team's training needs with comprehensive Skills Assessments that evaluate proficiency and develop personalized learning plans
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo Video
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Skills Assessments Demo</DialogTitle>
                </DialogHeader>
                <div className="aspect-video">
                  <VideoEmbed 
                    videoId="n9ptgxgz8x" 
                    title="Skills Assessments Demo"
                    trackingMetadata={{
                      courseName: "Skills Assessments",
                      lessonTitle: "Skills Assessments Demo Video"
                    }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="team-skills">Team Skills</TabsTrigger>
              <TabsTrigger value="individual-reports">Individual Reports</TabsTrigger>
            </TabsList>

            {/* Tab 1: Overview */}
            <TabsContent value="overview">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Streamline Your Training Process</h2>
              </div>

              <Card>
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
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                          <div>
                            <h4 className="font-semibold mb-1">Take the Assessment</h4>
                            <p className="text-sm text-muted-foreground">
                              Select from over 100 specialized skills assessments covering cloud, networking, security, development, and enterprise technologies
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                          <div>
                            <h4 className="font-semibold mb-1">Get Personalized Results</h4>
                            <p className="text-sm text-muted-foreground">
                              Receive detailed analysis of strengths and areas for improvement with specific knowledge gaps and skill level benchmarks
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
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
                        {assessmentCategories.map(category => (
                          <div key={category.title} className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all">
                            <h4 className="font-semibold mb-3">{category.title}</h4>
                            <div className="space-y-1.5">
                              {category.assessments.slice(0, 4).map(assessment => (
                                <div key={assessment} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-muted-foreground">{assessment}</span>
                                </div>
                              ))}
                              {category.assessments.length > 4 && (
                                <p className="text-xs text-muted-foreground/60 italic pt-1">
                                  +{category.assessments.length - 4} more
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-accent/50 rounded-lg p-6 mt-6">
                      <h3 className="font-semibold text-lg mb-2">Ready to Assess Your Team's Skills?</h3>
                      <p className="text-muted-foreground mb-4">
                        Start identifying training needs and developing personalized learning paths today with over 100 specialized assessments
                      </p>
                      <Button asChild>
                        <a href="https://app.stormwindstudios.com/skillsassessment" target="_blank" rel="noopener noreferrer" className="gap-2">
                          Explore Skill Assessments
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Team Skills */}
            <TabsContent value="team-skills">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Team Skill Levels</h2>
              </div>

              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6">
                    Overall team performance across all skill categories
                  </p>

                  <ResponsiveContainer width="100%" height="100%" className="h-[300px] sm:h-[450px]">
                    <BarChart data={teamSkillData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: "hsl(var(--foreground))" }}
                        axisLine={{ stroke: "hsl(var(--border))" }}
                      />
                      <YAxis 
                        domain={[0, 100]} 
                        tick={{ fill: "hsl(var(--foreground))" }}
                        axisLine={{ stroke: "hsl(var(--border))" }}
                        label={{ value: "Score (%)", angle: -90, position: "insideLeft", fill: "hsl(var(--foreground))" }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <ReferenceLine y={60} stroke="hsl(48, 96%, 53%)" strokeDasharray="5 5" label={{ value: "Proficient (60%)", position: "right", fill: "hsl(48, 96%, 53%)" }} />
                      <ReferenceLine y={90} stroke="hsl(142, 76%, 36%)" strokeDasharray="5 5" label={{ value: "Highly Proficient (90%)", position: "right", fill: "hsl(142, 76%, 36%)" }} />
                      <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                        {teamSkillData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={getScoreColor(entry.score)} />
                        ))}
                        <LabelList dataKey="score" position="top" formatter={(value: number) => `${value.toFixed(1)}%`} fill="hsl(var(--foreground))" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/30">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(0, 84%, 60%)" }} />
                      <div>
                        <p className="font-semibold text-sm">Needs Upgrading</p>
                        <p className="text-xs text-muted-foreground">Below 60%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/30">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(48, 96%, 53%)" }} />
                      <div>
                        <p className="font-semibold text-sm">Proficient</p>
                        <p className="text-xs text-muted-foreground">60% - 89%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/30">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(142, 76%, 36%)" }} />
                      <div>
                        <p className="font-semibold text-sm">Highly Proficient</p>
                        <p className="text-xs text-muted-foreground">90% and above</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Individual Reports */}
            <TabsContent value="individual-reports">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Individual Skill Reports</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {individualData.map((person) => (
                  <Card key={person.name}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">{person.name}</h3>
                      <div className="space-y-3">
                        {person.skills.map((skill) => (
                          <div key={skill.category} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-2.5 h-2.5 rounded-full" 
                                style={{ backgroundColor: getScoreColor(skill.score) }} 
                              />
                              <span className="text-sm">{skill.category}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{skill.score}%</span>
                              <span className={`text-xs px-2 py-0.5 rounded ${getBadgeClasses(skill.score)}`}>
                                {getProficiencyLevel(skill.score)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SkillsAssessments;
