import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Animated SVG Icons - Creative Designs
const LearningPathIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Connecting nodes representing a learning journey */}
    <circle cx="12" cy="36" r="4" fill={color} opacity="0.8" />
    <circle cx="24" cy="24" r="4" fill={color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="36" cy="12" r="4" fill={color} opacity="0.8" />
    
    {/* Animated path connecting nodes */}
    <path d="M14 34 L22 26" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4">
      <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite" />
    </path>
    <path d="M26 22 L34 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4">
      <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite" />
    </path>
    
    {/* Progress indicator */}
    <circle cx="24" cy="24" r="8" stroke={color} strokeWidth="1" fill="none" opacity="0.3">
      <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const MicrolearningIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Byte/data particles bursting */}
    <rect x="20" y="20" width="8" height="8" fill={color} opacity="0.8" />
    
    {/* Particles flying outward */}
    <rect x="10" y="10" width="3" height="3" fill={color}>
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      <animate attributeName="x" values="22;10" dur="2s" repeatCount="indefinite" />
      <animate attributeName="y" values="22;10" dur="2s" repeatCount="indefinite" />
    </rect>
    <rect x="35" y="10" width="3" height="3" fill={color}>
      <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="x" values="22;35" dur="2s" begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="y" values="22;10" dur="2s" begin="0.3s" repeatCount="indefinite" />
    </rect>
    <rect x="10" y="35" width="3" height="3" fill={color}>
      <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="x" values="22;10" dur="2s" begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" values="22;35" dur="2s" begin="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="35" y="35" width="3" height="3" fill={color}>
      <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.9s" repeatCount="indefinite" />
      <animate attributeName="x" values="22;35" dur="2s" begin="0.9s" repeatCount="indefinite" />
      <animate attributeName="y" values="22;35" dur="2s" begin="0.9s" repeatCount="indefinite" />
    </rect>
  </svg>
);

const AILearningIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Neural network visualization */}
    <circle cx="24" cy="10" r="3" fill={color} opacity="0.8" />
    <circle cx="12" cy="24" r="3" fill={color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="36" cy="24" r="3" fill={color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="24" cy="38" r="3" fill={color} opacity="0.8" />
    
    {/* Network connections */}
    <line x1="24" y1="13" x2="14" y2="21" stroke={color} strokeWidth="1.5" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
    </line>
    <line x1="24" y1="13" x2="34" y2="21" stroke={color} strokeWidth="1.5" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
    </line>
    <line x1="14" y1="27" x2="22" y2="35" stroke={color} strokeWidth="1.5" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
    </line>
    <line x1="34" y1="27" x2="26" y2="35" stroke={color} strokeWidth="1.5" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
    </line>
    
    {/* Data pulse */}
    <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="1" fill="none" opacity="0.2">
      <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const RangesIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Server racks with blinking indicators */}
    <rect x="8" y="12" width="12" height="28" rx="1" stroke={color} strokeWidth="2" fill="none" />
    <rect x="28" y="12" width="12" height="28" rx="1" stroke={color} strokeWidth="2" fill="none" />
    
    {/* Blinking server lights */}
    <circle cx="14" cy="18" r="1.5" fill={color}>
      <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
    </circle>
    <circle cx="14" cy="24" r="1.5" fill={color}>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
    </circle>
    <circle cx="14" cy="30" r="1.5" fill={color}>
      <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="34" cy="18" r="1.5" fill={color}>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="34" cy="24" r="1.5" fill={color}>
      <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.2s" repeatCount="indefinite" />
    </circle>
    <circle cx="34" cy="30" r="1.5" fill={color}>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
    </circle>
    
    {/* Data transfer line */}
    <line x1="20" y1="26" x2="28" y2="26" stroke={color} strokeWidth="2" strokeDasharray="4,4">
      <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite" />
    </line>
  </svg>
);

const LiveInstructorIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Broadcast screen */}
    <rect x="8" y="12" width="32" height="20" rx="2" stroke={color} strokeWidth="2" fill="none" />
    
    {/* Instructor figure */}
    <circle cx="24" cy="20" r="3" fill={color} opacity="0.8" />
    <path d="M18 26 Q24 29 30 26" stroke={color} strokeWidth="2" strokeLinecap="round" />
    
    {/* Live broadcast waves */}
    <circle cx="8" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6">
      <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="8" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4">
      <animate attributeName="r" values="3;6;3" dur="2s" begin="0.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
    </circle>
    
    {/* Stand */}
    <line x1="24" y1="32" x2="24" y2="38" stroke={color} strokeWidth="2" />
    <line x1="18" y1="38" x2="30" y2="38" stroke={color} strokeWidth="2" />
  </svg>
);

const MentoringIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Two people connecting */}
    <circle cx="16" cy="16" r="5" stroke={color} strokeWidth="2" fill="none" />
    <circle cx="32" cy="16" r="5" stroke={color} strokeWidth="2" fill="none" />
    
    {/* Knowledge transfer visualization */}
    <circle cx="24" cy="24" r="2" fill={color}>
      <animate attributeName="cx" values="18;30;18" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="24" cy="27" r="1.5" fill={color}>
      <animate attributeName="cx" values="18;30;18" dur="3s" begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.3;1" dur="3s" begin="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="24" cy="30" r="1" fill={color}>
      <animate attributeName="cx" values="18;30;18" dur="3s" begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.3;1" dur="3s" begin="0.6s" repeatCount="indefinite" />
    </circle>
    
    {/* Connecting arc */}
    <path d="M16 21 Q24 28 32 21" stroke={color} strokeWidth="2" fill="none" opacity="0.3" />
  </svg>
);

const AssessmentIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Skill level bars rising */}
    <rect x="8" y="32" width="6" height="8" fill={color} opacity="0.9" />
    <rect x="17" y="26" width="6" height="14" fill={color} opacity="0.7">
      <animate attributeName="height" values="0;14" dur="2s" repeatCount="indefinite" />
      <animate attributeName="y" values="40;26" dur="2s" repeatCount="indefinite" />
    </rect>
    <rect x="26" y="20" width="6" height="20" fill={color} opacity="0.5">
      <animate attributeName="height" values="0;20" dur="2s" begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="y" values="40;20" dur="2s" begin="0.3s" repeatCount="indefinite" />
    </rect>
    <rect x="35" y="14" width="6" height="26" fill={color} opacity="0.3">
      <animate attributeName="height" values="0;26" dur="2s" begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" values="40;14" dur="2s" begin="0.6s" repeatCount="indefinite" />
    </rect>
    
    {/* Checkmarks appearing */}
    <path d="M9 10 L11 12 L15 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);

const ReportingIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Document with data flowing */}
    <rect x="12" y="8" width="24" height="32" rx="2" stroke={color} strokeWidth="2" fill="none" />
    
    {/* Data lines */}
    <line x1="16" y1="16" x2="32" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.8">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
    </line>
    <line x1="16" y1="22" x2="28" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
    </line>
    <line x1="16" y1="28" x2="30" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
    </line>
    
    {/* Analytics icon */}
    <path d="M16 32 L20 36 L24 33 L28 36 L32 32" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="d" values="M16 32 L20 36 L24 33 L28 36 L32 32;M16 34 L20 32 L24 35 L28 32 L32 34;M16 32 L20 36 L24 33 L28 36 L32 32" dur="3s" repeatCount="indefinite" />
    </path>
  </svg>
);
interface EnterpriseITProps {
  selectedTechnologies: string[];
  selectedFeatures: string[];
  toggleTechnology: (category: string) => void;
  toggleFeature: (title: string) => void;
}
const EnterpriseIT = ({
  selectedTechnologies,
  selectedFeatures,
  toggleTechnology,
  toggleFeature
}: EnterpriseITProps) => {
  const consolidatedFeatures = [{
    icon: LearningPathIcon,
    emoji: "✅",
    title: "Learning Paths",
    description: "Structured paths with guided assessment, targeted training, and readiness validation—personalized and effective.",
    details: "Flexible pathways for every skill level. Begin with an assessment, follow a guided roadmap, and validate your readiness with confidence.",
    additionalInfo: "Access live instructor-led Epic Live sessions and on-demand courses with instant replay for flexible learning anytime, anywhere."
  }, {
    icon: MicrolearningIcon,
    emoji: "⏰",
    title: "Bytes: Microlearning",
    description: "Short sessions (3-5 min), adaptive personalization, sequential skill stacking, and real-world application.",
    details: "Learn in brief, focused sessions designed for retention. Get personalized paths from initial assessments and stack skills progressively for rapid mastery."
  }, {
    icon: AILearningIcon,
    emoji: "🧠",
    title: "AI-Powered Learning",
    description: "StormWind's AI Tutors leverage proprietary knowledge bases—no public internet, no hallucinations or inaccuracies.",
    details: "They support your certification studies, answer on-the-fly questions, provide step-by-step troubleshooting guidance, and integrate perfectly with our hands-on training content.",
    additionalInfo: "Combine AI assistance with 1:1 instructor mentoring for personal guidance from industry-recognized experts."
  }, {
    icon: RangesIcon,
    emoji: "🛠️",
    title: "StormWind Ranges",
    description: "Hands-on cyber, Azure, Microsoft, and networking ranges – real, production-like practice environments.",
    bullets: [{
      emoji: "🔒",
      text: "Cyber Range: Practice with Splunk, OpenVAS, Nmap, Wireshark, and more."
    }, {
      emoji: "☁️",
      text: "Azure Range: Build VNets, VMs, storage and more, including an empty sandbox for testing ARM/Bicep or Terraform templates."
    }, {
      emoji: "💻",
      text: "Microsoft Range: Server 2025, Windows 11, AD, DNS, PowerShell, and more."
    }, {
      emoji: "🌐",
      text: "Networking Range: VLANs, OSPF, BGP, IPv4/6, and security configurations."
    }]
  }, {
    icon: LiveInstructorIcon,
    emoji: "🎓",
    title: "Live Instructor Led Courses",
    description: "The most effective learning possible happens in a live environment with a world class instructor. Many of StormWind's classes run live, allowing you to fully interact in the most engaging online learning experience available anywhere.",
    details: "The short, 2-hour sessions allow you to easily digest the information."
  }, {
    icon: MentoringIcon,
    emoji: "🤝",
    title: "1:1 Mentoring with Industry Experts",
    description: "Like learning anything new, you are inevitably going to get stuck on something. Unlike traditional eLearning, you aren't on your own. You have access to the instructor from every class to ask questions. This feature is one of the most raved about offerings by our clients."
  }, {
    icon: AssessmentIcon,
    emoji: "🎯",
    title: "Skills Assessments",
    description: "Test your team's skills on a number of different topics and get real time data on where the gaps are. Get course suggestions based on proficiency and streamline the training process by ensuring everyone is taking courses that fit their skill level."
  }, {
    icon: ReportingIcon,
    emoji: "📊",
    title: "Enterprise Reporting and Administration",
    description: "Generate easy to read reports on usage and course completion. Whether you need it for compliance/insurance purposes, or to present to management, we make it simple to get the data you need.",
    details: "You can assign individual courses, create and assign learning paths, add due dates, and track assessment scores all from an intuitive Dashboard that is only visible to designated admins."
  }];
  const handleSelectAll = () => {
    const allFeatureTitles = consolidatedFeatures.map(f => f.title);
    const allSelected = allFeatureTitles.every(title => selectedFeatures.includes(title));
    if (allSelected) {
      // Deselect all
      allFeatureTitles.forEach(title => {
        if (selectedFeatures.includes(title)) {
          toggleFeature(title);
        }
      });
    } else {
      // Select all
      allFeatureTitles.forEach(title => {
        if (!selectedFeatures.includes(title)) {
          toggleFeature(title);
        }
      });
    }
  };
  const allFeaturesSelected = consolidatedFeatures.every(f => selectedFeatures.includes(f.title));
  const technologies = [{
    category: "Microsoft",
    items: "Server 2025, M365 Administration, PowerShell, Windows 11, Intune, Endpoint Administration, and more"
  }, {
    category: "Cloud",
    items: "Azure, AWS, Google Cloud, Virtual Desktops, Cloud Security, and more"
  }, {
    category: "Cybersecurity",
    items: "CISSP, Security+, Penetration Testing, SecurityX, and more"
  }, {
    category: "AI",
    items: "ChatGPT, Copilot, AI Awareness, Gemini, AI Ethics, and more"
  }, {
    category: "Networking",
    items: "Cisco CCNA, CCNP, Network+, Wireshark, IPv6, BGP, and more"
  }, {
    category: "Full Stack Developer",
    items: "Python, Javascript, React, .NET, HTML/CSS, AI in Coding, and more"
  }, {
    category: "DevOps",
    items: "Kubernetes, Docker, IAC, CI/CD, CKA, Hashicorp, and more"
  }, {
    category: "Business Pro",
    items: "Power Apps, Power Automate, Power BI, Azure Data, MS Fabric, and more"
  }, {
    category: "Project Management",
    items: "Authorized Training Partner for PMI, PMP, ACP, Project +, CAPM, Lean Six Sigma, and more"
  }, {
    category: "Help Desk",
    items: "CompTIA (Tech+, A+, Net+, Sec+), ITIL v4 Foundations, and more"
  }];
  return <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight pb-2">Enterprise IT</h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
          StormWind's one-stop training ecosystem for IT, DevOps, AI, Project Management, and Data Analytics.
          Stay up to date on evolving technology while learning directly from world-class instructors.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Technologies We Train On</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => {
          const techLinks: Record<string, string> = {
            "Microsoft": "/microsoft",
            "Cloud": "/cloud",
            "Cybersecurity": "/cybersecurity",
            "AI": "/ai-pro",
            "Networking": "/networking",
            "Full Stack Developer": "/fullstack-developer",
            "DevOps": "/devops",
            "Business Pro": "/business-pro",
            "Project Management": "/project-management",
            "Help Desk": "/help-desk"
          };
          
          const techColors = [
            '#60A5FA', '#FB923C', '#A78BFA', '#4ADE80', '#38BDF8',
            '#FBBF24', '#F472B6', '#6366F1', '#EC4899', '#14B8A6'
          ];
          const color = techColors[index % techColors.length];
          
          return <Link key={index} to={techLinks[tech.category]} className="glass-feature-card group relative overflow-hidden rounded-lg p-4 transition-all duration-300 cursor-pointer block hover:scale-105 hover:-translate-y-1 border border-white/10">
                {/* Floating Particles */}
                <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {[...Array(5)].map((_, i) => (
                    <circle 
                      key={i}
                      cx={30 + (i * 40)} 
                      cy={30 + (i * 35)} 
                      r="1.5" 
                      fill={color}
                      opacity="0.4"
                    >
                      <animate 
                        attributeName="cy" 
                        values={`${30 + (i * 35)};${15 + (i * 35)};${30 + (i * 35)}`} 
                        dur={`${2 + (i * 0.3)}s`} 
                        repeatCount="indefinite" 
                      />
                    </circle>
                  ))}
                </svg>
                
                <h4 
                  className="text-base font-bold relative z-10 mb-2 transition-colors duration-300" 
                  style={{ color: color }}
                >
                  {tech.category}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed relative z-10">{tech.items}</p>
              </Link>;
        })}
        </div>
      </div>

      {/* Course Catalog Button */}
      <div className="flex justify-center mb-16">
        <Button asChild size="lg" className="gap-2">
          
        </Button>
      </div>

      {/* Consolidated Features Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-foreground">Platform Features</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consolidatedFeatures.map((feature, index) => {
          const featureLinks: Record<string, string> = {
            "Learning Paths": "/learning-paths",
            "Bytes: Microlearning": "/bytes",
            "AI-Powered Learning": "/ai-learning",
            "StormWind Ranges": "/ranges",
            "Live Instructor Led Courses": "/live-instructor-led",
            "1:1 Mentoring with Industry Experts": "/mentoring",
            "Skills Assessments": "/skills-assessments",
            "Enterprise Reporting and Administration": "/enterprise-reporting"
          };
          const featureColors = [
            '#60A5FA', // blue
            '#FB923C', // orange
            '#A78BFA', // purple
            '#4ADE80', // green
            '#38BDF8', // cyan
            '#FBBF24', // yellow
            '#F472B6', // pink
            '#6366F1', // indigo
          ];
          const color = featureColors[index % featureColors.length];
          
          return <Link key={index} to={featureLinks[feature.title]} className="glass-feature-card group relative overflow-hidden rounded-lg p-6 transition-all duration-300 cursor-pointer block hover:scale-105 hover:-translate-y-1 border border-white/10">
                {/* Floating Particles Background */}
                <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  {/* Animated floating dots */}
                  {[...Array(8)].map((_, i) => (
                    <circle 
                      key={i}
                      cx={50 + (i * 50)} 
                      cy={50 + (i * 40)} 
                      r="2" 
                      fill={color}
                      opacity="0.3"
                    >
                      <animate 
                        attributeName="cy" 
                        values={`${50 + (i * 40)};${30 + (i * 40)};${50 + (i * 40)}`} 
                        dur={`${3 + (i * 0.5)}s`} 
                        repeatCount="indefinite" 
                      />
                      <animate 
                        attributeName="opacity" 
                        values="0.2;0.5;0.2" 
                        dur={`${3 + (i * 0.5)}s`} 
                        repeatCount="indefinite" 
                      />
                    </circle>
                  ))}
                </svg>
                
                {/* Animated Icon with Glow */}
                <div className="mb-6 inline-flex relative z-10">
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" 
                    style={{ backgroundColor: color }}
                  />
                  {/* Animated SVG Icon */}
                  <div className="relative transition-transform duration-300 group-hover:scale-110">
                    <feature.icon color={color} />
                  </div>
                </div>
                
                {/* Title with Color */}
                <h4 
                  className="text-xl font-bold mb-3 relative z-10 transition-colors duration-300" 
                  style={{ color: color }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-3 relative z-10">
                  {feature.description}
                </p>
                
                {/* Details */}
                {feature.details && <p className="text-sm text-gray-400 leading-relaxed mb-3 relative z-10">
                    {feature.details}
                  </p>}
                
                {/* Bullets */}
                {feature.bullets && <ul className="space-y-2 mb-3 relative z-10">
                    {feature.bullets.map((bullet, idx) => <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="flex-shrink-0">{bullet.emoji}</span>
                        <span className="leading-relaxed">{bullet.text}</span>
                      </li>)}
                  </ul>}
                
                {/* Additional Info */}
                {feature.additionalInfo && <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                    {feature.additionalInfo}
                  </p>}
              </Link>;
        })}
        </div>
      </div>

      {/* SSO Banner */}
      <div className="mt-12 animate-fade-in">
        <div className="relative overflow-hidden rounded-lg border border-border bg-muted/30 p-6 text-center">
          <h3 className="text-xl font-semibold text-muted-foreground relative z-10">
            Single Sign On Available
          </h3>
        </div>
      </div>
    </div>;
};
export default EnterpriseIT;