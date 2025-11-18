import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Terminal, Cloud, Sparkles, Briefcase, Network, Shield } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BackToTop from "@/components/BackToTop";
import { Skeleton } from "@/components/ui/skeleton";
import { VideoEmbed } from "@/components/VideoEmbed";
import { TechBackground } from "@/components/TechBackground";

const Webinars = () => {
  const [activeTab, setActiveTab] = useState("powershell");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const webinarCategories = {
    powershell: {
      title: "PowerShell",
      icon: Terminal,
      color: "#4FD1C5",
      webinars: [
        { title: "Essentials of PowerShell for Active Directory", instructor: "Mike Pfeiffer", videoId: "fqi9m90y1e", description: "Master the essential PowerShell commands and techniques for managing Active Directory environments." },
        { title: "PowerShell for Beginners: Your First Steps into Automation", instructor: "Spike Xavier", videoId: "08wovz8c17", description: "Start your PowerShell journey with fundamental concepts and practical automation examples." },
        { title: "Managing Entra ID with Microsoft Graph PowerShell", instructor: "Spike Xavier", videoId: "xfl8ihl837", description: "Learn how to manage Entra ID (formerly Azure AD) using Microsoft Graph PowerShell commands." },
        { title: "Managing SharePoint Online with Microsoft Graph PowerShell", instructor: "Spike Xavier", videoId: "rq4l28mjol", description: "Discover how to automate SharePoint Online management tasks using Microsoft Graph PowerShell." },
        { title: "Managing Microsoft Teams with Graph PowerShell", instructor: "Spike Xavier", videoId: "g8a6hhxdot", description: "Automate Microsoft Teams administration and management with Microsoft Graph PowerShell." },
        { title: "Getting Started with Microsoft Graph PowerShell", instructor: "Spike Xavier", videoId: "k92egxqxjl", description: "Master the fundamentals of Microsoft Graph PowerShell for efficient Microsoft 365 management." }
      ]
    },
    azure: {
      title: "Azure",
      icon: Cloud,
      color: "#4FD1C5",
      webinars: [
        { title: "Azure Fundamentals Crash Course", instructor: "Will Panek", videoId: "4xbfcq9ehc", description: "Get up to speed quickly with Azure fundamentals in this comprehensive crash course." },
        { title: "Kickstart Your Azure Journey with Hands-On Learning", instructor: "Mike Pfeiffer", videoId: "mlatx2hqwl", description: "Begin your Azure learning journey with practical, hands-on exercises and real-world scenarios." },
        { title: "Delivering Production-Ready Apps on Azure: Best Practices in Action", instructor: "Mike Pfeiffer", videoId: "oa46cxfoq5", description: "Learn best practices for deploying and managing production-ready applications on Azure." },
        { title: "Creating a Hybrid Network Between an On-Site Network and Azure", instructor: "Will Panek", videoId: "vx34fhiczi", description: "Learn how to create and configure a hybrid network connection between your on-premises infrastructure and Azure cloud services." }
      ]
    },
    copilot: {
      title: "Microsoft Copilot",
      icon: Sparkles,
      color: "#4FD1C5",
      webinars: [
        { title: "An Intro Tour of Microsoft 365 Copilot in Word", instructor: "Dan Young", videoId: "bq8dbomn9v", description: "Explore the powerful features of Microsoft 365 Copilot in Word and boost your productivity." },
        { title: "Empower Your SharePoint Experience with Copilot Agents", instructor: "Spike Xavier", videoId: "rgipjwi6ql", description: "Learn how to leverage Copilot Agents to enhance your SharePoint collaboration and productivity." },
        { title: "Getting Started with Copilot Administration in Microsoft 365", instructor: "Spike Xavier", videoId: "9ghbj38ctj", description: "Master the administrative aspects of deploying and managing Copilot in Microsoft 365." },
        { title: "Copilot and Microsoft Defender XDR for Microsoft 365 Administrators", instructor: "Spike Xavier", videoId: "vl7ct49et0", description: "Learn how to leverage Copilot and Microsoft Defender XDR to enhance your Microsoft 365 administration capabilities." }
      ]
    },
    projectManagement: {
      title: "Project Management",
      icon: Briefcase,
      color: "#4FD1C5",
      webinars: [
        { title: "Agile Made Practical: Real Techniques for Real Teams", instructor: "Ashley Hunt", videoId: "51n02f5lo8", description: "Learn practical Agile techniques that you can implement immediately with your team." },
        { title: "Lead Smarter and Boost Project Success with Emotional Intelligence", instructor: "Ashley Hunt", videoId: "j5vz0snb5n", description: "Discover how emotional intelligence can transform your project leadership and team success." },
        { title: "Six Step Plan to Earn Your PMP", instructor: "Ashley Hunt", videoId: "1qrwm692ii", description: "Follow this proven six-step plan to successfully prepare for and pass the PMP certification exam." },
        { title: "Cracking the PMI-ACP Exam", instructor: "Ashley Hunt", videoId: "14hfcmkskc", description: "Master the PMI Agile Certified Practitioner exam with expert strategies and preparation tips." },
        { title: "Earn Your PMP in 45 Days", instructor: "Ashley Hunt", videoId: "jh91qfhqrd", description: "Fast-track your PMP certification with a proven 45-day study plan and exam strategies." },
        { title: "Project Leadership for Today's Workforce", instructor: "Ashley Hunt", videoId: "tz2y38n7hl", description: "Develop essential leadership skills to manage modern, diverse project teams effectively." },
        { title: "How to Get Your Dream Project Management Job", instructor: "Ashley Hunt", videoId: "0vj3v3qaz9", description: "Learn practical strategies for landing your ideal project management position." }
      ]
    },
    networking: {
      title: "Networking",
      icon: Network,
      color: "#4FD1C5",
      webinars: [
        { title: "Solving Network Requirements with ChatGPT", instructor: "Dan Young", videoId: "d01l174wlu", description: "Discover how to leverage ChatGPT to solve complex networking requirements and streamline network design." },
        { title: "Introduction to IPSec Tunnels", instructor: "Dan Young", videoId: "soq6fkq37k", description: "Learn the fundamentals of IPSec tunnels and how to implement secure network connections." },
        { title: "TCP Deep Dive", instructor: "Dan Young", videoId: "7365a0l9hb", description: "Explore the TCP protocol in depth, understanding its mechanisms and troubleshooting techniques." },
        { title: "Low Math IP Subnetting", instructor: "Dan Young", videoId: "4t4nkkkc3z", description: "Master IP subnetting with simplified techniques that minimize complex calculations." },
        { title: "Mastering Static Routes for Network+", instructor: "Dan Young", videoId: "e6dm7m055a", description: "Learn how to configure and troubleshoot static routes for the CompTIA Network+ certification." },
        { title: "Building IPv6 Connectivity", instructor: "Dan Young", videoId: "z15f1okpgv", description: "Understand the fundamentals of IPv6 and learn how to implement IPv6 connectivity in your network." },
        { title: "Wireshark: From Zero to Neo", instructor: "Dan Young", videoId: "t9upm4epoj", description: "Master network analysis with Wireshark, from basic packet capture to advanced troubleshooting techniques." },
        { title: "Cisco Diagnostics: Unlocking the Top 5 Techniques", instructor: "Raymond Lacoste", videoId: "iywbnjbv1y", description: "Master the top 5 diagnostic techniques for troubleshooting Cisco network devices and configurations." }
      ]
    },
    cybersecurity: {
      title: "Cybersecurity",
      icon: Shield,
      color: "#4FD1C5",
      webinars: [
        { title: "Exploring Four Essential Security Tools in StormWind's Cyber Range", instructor: "Dan Young", videoId: "29v8s2dplf", description: "Discover four essential security tools available in StormWind's Cyber Range environment." },
        { title: "Protecting Against ChatGPT, Automated Login Scripts, and other Cyber Attacks", instructor: "Chris Paul", videoId: "pv58af449v", description: "Learn how to protect your organization against modern cyber threats including AI-powered attacks." },
        { title: "Mastering the CompTIA Security+ Certification", instructor: "Raymond Lacoste", videoId: "u4lstu7i7m", description: "Prepare for the CompTIA Security+ certification with expert guidance and exam preparation strategies." },
        { title: "Rethinking Password Security in the Age of AI", instructor: "Will Panek", videoId: "inrznua734", description: "Explore modern password security challenges and best practices in an AI-driven landscape." },
        { title: "AI-Powered Security Awareness Training", instructor: "Chris Paul", videoId: "3ry73stvbc", description: "Discover how AI is transforming security awareness training and protecting organizations from human error." }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1419] relative">
      <TechBackground />
      <div className="relative z-10">
        <Navigation />
        <BackToTop />
        
        <div className="container mx-auto px-4 pt-24 pb-16">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4">
              Expert-Led Webinars
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Learn from industry experts through our comprehensive collection of webinars covering Microsoft, Cloud, Networking, Cybersecurity, and Project Management.
            </p>
          </div>

        {/* Tabbed Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto p-0 mb-8">
            {Object.entries(webinarCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={`
                    px-6 py-4 rounded-lg transition-all duration-300
                    ${activeTab === key 
                      ? 'bg-[#4FD1C5] text-white shadow-lg scale-105' 
                      : 'bg-[#1a1f2e] text-gray-400 hover:bg-[#252b3d] hover:text-white'
                    }
                  `}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(webinarCategories).map(([key, category]) => (
            <TabsContent 
              key={key} 
              value={key}
              className="animate-fade-in"
            >
              {isLoading ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="bg-[#1a1f2e] rounded-lg border border-gray-700 overflow-hidden">
                      <Skeleton className="w-full h-64 bg-gray-800" />
                      <div className="p-6 space-y-3">
                        <Skeleton className="h-6 w-3/4 bg-gray-800" />
                        <Skeleton className="h-4 w-1/2 bg-gray-800" />
                        <Skeleton className="h-4 w-full bg-gray-800" />
                        <Skeleton className="h-4 w-full bg-gray-800" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.webinars.map((webinar, index) => (
                    <div
                      key={index}
                      className="bg-[#1a1f2e] rounded-lg border border-gray-700 overflow-hidden hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300 group"
                    >
                      {/* Video Embed */}
                      <VideoEmbed videoId={webinar.videoId} title={webinar.title} />
                      
                      {/* Webinar Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">
                          {webinar.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                          Instructor: <span className="text-[#4FD1C5] font-semibold">{webinar.instructor}</span>
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {webinar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
    </div>
  );
};

export default Webinars;
