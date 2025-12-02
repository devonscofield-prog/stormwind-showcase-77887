import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  LearningPathIcon,
  MicrolearningIcon,
  AILearningIcon,
  RangesIcon,
  LiveInstructorIcon,
  MentoringIcon,
  AssessmentIcon,
  ReportingIcon,
  MicrosoftIcon,
  CloudIcon,
  CybersecurityIcon,
  AIIcon,
  NetworkingIcon,
  FullStackIcon,
  DevOpsIcon,
  BusinessProIcon,
  ProjectManagementIcon,
  HelpDeskIcon
} from "@/components/icons/animated/EnterpriseITIcons";

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
  
  const technologies = [
    { name: "Microsoft", Icon: MicrosoftIcon, items: "Server 2025, M365 Administration, PowerShell, Windows 11, Intune, Endpoint Administration, and more", link: "/microsoft" },
    { name: "Cloud", Icon: CloudIcon, items: "Azure, AWS, Google Cloud, Virtual Desktops, Cloud Security, and more", link: "/cloud" },
    { name: "Cybersecurity", Icon: CybersecurityIcon, items: "CISSP, Security+, Penetration Testing, SecurityX, and more", link: "/cybersecurity" },
    { name: "AI", Icon: AIIcon, items: "ChatGPT, Copilot, AI Awareness, Gemini, AI Ethics, and more", link: "/ai-pro" },
    { name: "Networking", Icon: NetworkingIcon, items: "Cisco CCNA, CCNP, Network+, Wireshark, IPv6, BGP, and more", link: "/networking" },
    { name: "Full Stack Developer", Icon: FullStackIcon, items: "Python, Javascript, React, .NET, HTML/CSS, AI in Coding, and more", link: "/fullstack-developer" },
    { name: "DevOps", Icon: DevOpsIcon, items: "Kubernetes, Docker, IAC, CI/CD, CKA, Hashicorp, and more", link: "/devops" },
    { name: "Business Pro", Icon: BusinessProIcon, items: "Power Apps, Power Automate, Power BI, Azure Data, MS Fabric, and more", link: "/business-pro" },
    { name: "Project Management", Icon: ProjectManagementIcon, items: "Authorized Training Partner for PMI, PMP, ACP, Project +, CAPM, Lean Six Sigma, and more", link: "/project-management" },
    { name: "Help Desk", Icon: HelpDeskIcon, items: "CompTIA (Tech+, A+, Net+, Sec+), ITIL v4 Foundations, and more", link: "/help-desk" },
  ];
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
            const TechCard = () => {
              const [isHovered, setIsHovered] = useState(false);
              const [particles, setParticles] = useState<Array<{
                id: number;
                x: number;
                y: number;
                opacity: number;
                size: number;
              }>>([]);
              const cardRef = useRef<HTMLAnchorElement>(null);
              const particleIdRef = useRef(0);
              
              useEffect(() => {
                if (particles.length === 0) return;
                
                const interval = setInterval(() => {
                  setParticles(prev => 
                    prev
                      .map(p => ({ ...p, opacity: p.opacity - 0.05 }))
                      .filter(p => p.opacity > 0)
                  );
                }, 50);
                
                return () => clearInterval(interval);
              }, [particles.length]);
              
              const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!cardRef.current || !isHovered) return;
                
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const newParticle = {
                  id: particleIdRef.current++,
                  x,
                  y,
                  opacity: 1,
                  size: Math.random() * 4 + 2,
                };
                
                setParticles(prev => [...prev.slice(-20), newParticle]);
              };
              
              return (
                <Link 
                  ref={cardRef}
                  to={tech.link} 
                  className="glass-feature-card group relative overflow-hidden rounded-lg p-4 transition-all duration-300 cursor-pointer block hover:scale-105 hover:-translate-y-1 border border-white/10"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setParticles([]);
                  }}
                  onMouseMove={handleMouseMove}
                >
                  {/* Particle Trail */}
                  {particles.map(particle => (
                    <div
                      key={particle.id}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                        background: `hsl(${(index * 36) % 360}, 80%, 60%)`,
                        boxShadow: `0 0 ${particle.size * 2}px hsl(${(index * 36) % 360}, 80%, 60%)`,
                        transform: 'translate(-50%, -50%)',
                        transition: 'opacity 0.05s linear',
                      }}
                    />
                  ))}
                  
                  {/* Animated Icon Background */}
                  <div className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <tech.Icon isHovered={isHovered} />
                  </div>
                  
                  <h4 className="text-base font-bold relative z-10 mb-2 transition-colors duration-300 text-foreground">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed relative z-10">{tech.items}</p>
                </Link>
              );
            };
            
            return <TechCard key={index} />;
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
          
          const FeatureCard = () => {
            const [isHovered, setIsHovered] = useState(false);
            const [particles, setParticles] = useState<Array<{
              id: number;
              x: number;
              y: number;
              opacity: number;
              size: number;
            }>>([]);
            const cardRef = useRef<HTMLAnchorElement>(null);
            const particleIdRef = useRef(0);
            
            useEffect(() => {
              if (particles.length === 0) return;
              
              const interval = setInterval(() => {
                setParticles(prev => 
                  prev
                    .map(p => ({ ...p, opacity: p.opacity - 0.05 }))
                    .filter(p => p.opacity > 0)
                );
              }, 50);
              
              return () => clearInterval(interval);
            }, [particles.length]);
            
            const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!cardRef.current || !isHovered) return;
              
              const rect = cardRef.current.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              const newParticle = {
                id: particleIdRef.current++,
                x,
                y,
                opacity: 1,
                size: Math.random() * 4 + 2,
              };
              
              setParticles(prev => [...prev.slice(-20), newParticle]);
            };
            
            return (
              <Link 
                ref={cardRef}
                to={featureLinks[feature.title]} 
                className="glass-feature-card group relative overflow-hidden rounded-lg p-6 transition-all duration-300 cursor-pointer block hover:scale-105 hover:-translate-y-1 border border-white/10"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setParticles([]);
                }}
                onMouseMove={handleMouseMove}
              >
                {/* Particle Trail */}
                {particles.map(particle => (
                  <div
                    key={particle.id}
                    className="absolute rounded-full pointer-events-none z-20"
                    style={{
                      left: particle.x,
                      top: particle.y,
                      width: particle.size,
                      height: particle.size,
                      opacity: particle.opacity,
                      background: color,
                      boxShadow: `0 0 ${particle.size * 2}px ${color}`,
                      transform: 'translate(-50%, -50%)',
                      transition: 'opacity 0.05s linear',
                    }}
                  />
                ))}
                
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
                    <feature.icon color={color} isHovered={isHovered} />
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
              </Link>
            );
          };
          
          return <FeatureCard key={index} />;
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