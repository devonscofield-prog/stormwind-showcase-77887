import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Cloud, Shield, Network, Briefcase } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BackToTop from "@/components/BackToTop";
import { LazyVideo } from "@/components/LazyVideo";
import { Skeleton } from "@/components/ui/skeleton";

const Webinars = () => {
  const [activeTab, setActiveTab] = useState("microsoft");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const webinarCategories = {
    microsoft: {
      title: "Microsoft & Azure",
      icon: Cloud,
      color: "#4FD1C5",
      webinars: [
        {
          title: "Copilot and Microsoft Defender XDR for Microsoft 365 Administrators",
          instructor: "Spike Xavier",
          videoId: "vl7ct49et0",
          description: "Learn how to leverage Copilot and Microsoft Defender XDR to enhance your Microsoft 365 administration capabilities."
        },
        {
          title: "Getting Started with Microsoft Graph PowerShell",
          instructor: "Spike Xavier",
          videoId: "k92egxqxjl",
          description: "Master the fundamentals of Microsoft Graph PowerShell for efficient Microsoft 365 management."
        },
        {
          title: "Kickstart Your Azure Journey with Hands-On Learning",
          instructor: "Mike Pfeiffer",
          videoId: "mlatx2hqwl",
          description: "Begin your Azure learning journey with practical, hands-on exercises and real-world scenarios."
        },
        {
          title: "Delivering Production-Ready Apps on Azure: Best Practices in Action",
          instructor: "Mike Pfeiffer",
          videoId: "oa46cxfoq5",
          description: "Learn best practices for deploying and managing production-ready applications on Azure."
        }
      ]
    },
    networking: {
      title: "Networking",
      icon: Network,
      color: "#4FD1C5",
      webinars: [
        {
          title: "Building IPv6 Connectivity",
          instructor: "Dan Young",
          videoId: "z15f1okpgv",
          description: "Understand the fundamentals of IPv6 and learn how to implement IPv6 connectivity in your network."
        },
        {
          title: "Wireshark: From Zero to Neo",
          instructor: "Dan Young",
          videoId: "t9upm4epoj",
          description: "Master network analysis with Wireshark, from basic packet capture to advanced troubleshooting techniques."
        },
        {
          title: "Solving Network Requirements with ChatGPT",
          instructor: "Dan Young",
          videoId: "d01l174wlu",
          description: "Discover how to leverage ChatGPT to solve complex networking requirements and streamline network design."
        },
        {
          title: "Cisco Diagnostics: Unlocking the Top 5 Techniques",
          instructor: "Raymond Lacoste",
          videoId: "iywbnjbv1y",
          description: "Master the top 5 diagnostic techniques for troubleshooting Cisco network devices and configurations."
        }
      ]
    },
    cybersecurity: {
      title: "Cybersecurity",
      icon: Shield,
      color: "#4FD1C5",
      webinars: [
        {
          title: "Mastering the CompTIA Security+ Certification",
          instructor: "Raymond Lacoste",
          videoId: "u4lstu7i7m",
          description: "Prepare for the CompTIA Security+ certification with expert guidance and exam preparation strategies."
        },
        {
          title: "Rethinking Password Security in the Age of AI",
          instructor: "Will Panek",
          videoId: "inrznua734",
          description: "Explore modern password security challenges and best practices in an AI-driven landscape."
        },
        {
          title: "Fundamentals of SQL Injection Threats",
          instructor: "Chris Paul",
          videoId: "1v94ags53o",
          description: "Learn to identify, prevent, and mitigate SQL injection vulnerabilities in your applications."
        },
        {
          title: "Navigating the Future: Zero Trust Framework in Cybersecurity",
          instructor: "Raymond Lacoste",
          videoId: "8u14saekwr",
          description: "Explore the Zero Trust security framework and learn how to implement it in your organization."
        }
      ]
    },
    projectmanagement: {
      title: "Project Management & AI",
      icon: Briefcase,
      color: "#4FD1C5",
      webinars: [
        {
          title: "ChatGPT Canvas: Slick New Feature",
          instructor: "Dan Young",
          videoId: "rq8sn5np57",
          description: "Explore the new ChatGPT Canvas feature and learn how to leverage it for enhanced project collaboration and productivity."
        },
        {
          title: "Getting Started with AI in Your Project Management Workflow",
          instructor: "Ashley Hunt",
          videoId: "7mm5dapj01",
          description: "Integrate AI tools into your project management workflow to enhance efficiency and decision-making."
        },
        {
          title: "ChatGPT's GPT Store",
          instructor: "Dan Young",
          videoId: "h0sznrklhg",
          description: "Explore the ChatGPT GPT Store and learn how to leverage custom GPTs for your projects."
        },
        {
          title: "ChatGPT: The Secret Weapon for Project Managers",
          instructor: "Ashley Hunt",
          videoId: "vggf99ngqf",
          description: "Discover how to use ChatGPT as a powerful tool to enhance project management efficiency and productivity."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#1a1f2e] to-gray-900">
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
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
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
                      <LazyVideo 
                        videoId={webinar.videoId}
                        title={webinar.title}
                      />
                      
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
  );
};

export default Webinars;
