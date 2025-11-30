import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProgressiveImage } from "@/components/ProgressiveImage";
import { TechBackground } from "@/components/TechBackground";
import { VideoEmbed } from "@/components/VideoEmbed";
import { PageLayout } from "@/components/PageLayout";
import azureRangeImage from "@/assets/azure-range.jpg";
import microsoftRangeImage from "@/assets/microsoft-range.jpg";
import networkRangeImage from "@/assets/network-range.jpg";
import cyberRangeImage from "@/assets/cyber-range.jpg";
import { CheckCircle2, Cloud, Server, Network, Shield, Database, GitBranch, Box, Boxes } from "lucide-react";

const Ranges = () => {
  const [activeTab, setActiveTab] = useState("azure");

  useEffect(() => {
    document.title = "Ranges";
  }, []);

  return (
    <PageLayout
      breadcrumbs={[{ label: "Ranges" }]}
      hideHero
      BackgroundComponent={TechBackground}
      backgroundClassName="bg-[#0f1419]"
      breadcrumbClassName="text-gray-300 hover:text-[#4FD1C5]"
    >
      {/* Range Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {/* Azure Range */}
        <Card 
          className="bg-[#1a1f2e] border-gray-700 overflow-hidden hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setActiveTab("azure");
            document.getElementById("range-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <ProgressiveImage src={azureRangeImage} alt="Azure Range" className="w-full h-48 object-cover" blurAmount={25} transitionDuration={600} />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">Azure Range</h3>
            <p className="text-gray-400 text-sm mb-4">
              Master Azure cloud services with hands-on labs for compute, storage, networking, and security
            </p>
          </div>
        </Card>

        {/* Microsoft Range */}
        <Card 
          className="bg-[#1a1f2e] border-gray-700 overflow-hidden hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setActiveTab("microsoft");
            document.getElementById("range-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <ProgressiveImage src={microsoftRangeImage} alt="Microsoft Range" className="w-full h-48 object-cover" blurAmount={25} transitionDuration={600} />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">Microsoft Range</h3>
            <p className="text-gray-400 text-sm mb-4">
              Practice with Windows Server, Active Directory, and enterprise Microsoft technologies
            </p>
          </div>
        </Card>

        {/* Network Range */}
        <Card 
          className="bg-[#1a1f2e] border-gray-700 overflow-hidden hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setActiveTab("network");
            document.getElementById("range-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <ProgressiveImage src={networkRangeImage} alt="Network Range" className="w-full h-48 object-cover" blurAmount={25} transitionDuration={600} />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">Network Range</h3>
            <p className="text-gray-400 text-sm mb-4">
              Build and troubleshoot networks with routers, switches, and real-world scenarios
            </p>
          </div>
        </Card>

        {/* Cyber Range */}
        <Card 
          className="bg-[#1a1f2e] border-gray-700 overflow-hidden hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setActiveTab("cyber");
            document.getElementById("range-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <ProgressiveImage src={cyberRangeImage} alt="Cyber Range" className="w-full h-48 object-cover" blurAmount={25} transitionDuration={600} />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">Cyber Range</h3>
            <p className="text-gray-400 text-sm mb-4">
              Develop security skills in a real world environment using applications like Splunk, Wireshark, OpenVAS, and Nmap
            </p>
          </div>
        </Card>
      </div>

      {/* Tabbed Range Details */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" id="range-tabs">
        <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 mb-12 bg-[#1a1f2e] p-1 h-auto gap-1">
          <TabsTrigger value="azure" className="data-[state=active]:bg-[#4FD1C5] data-[state=active]:text-white data-[state=inactive]:text-gray-400 hover:bg-[#2B3440] hover:text-white transition-all duration-200 flex items-center gap-2 py-3">
            <Cloud className="w-4 h-4" />
            Azure Range
          </TabsTrigger>
          <TabsTrigger value="microsoft" className="data-[state=active]:bg-[#4FD1C5] data-[state=active]:text-white data-[state=inactive]:text-gray-400 hover:bg-[#2B3440] hover:text-white transition-all duration-200 flex items-center gap-2 py-3">
            <Server className="w-4 h-4" />
            Microsoft Range
          </TabsTrigger>
          <TabsTrigger value="network" className="data-[state=active]:bg-[#4FD1C5] data-[state=active]:text-white data-[state=inactive]:text-gray-400 hover:bg-[#2B3440] hover:text-white transition-all duration-200 flex items-center gap-2 py-3">
            <Network className="w-4 h-4" />
            Network Range
          </TabsTrigger>
          <TabsTrigger value="cyber" className="data-[state=active]:bg-[#4FD1C5] data-[state=active]:text-white data-[state=inactive]:text-gray-400 hover:bg-[#2B3440] hover:text-white transition-all duration-200 flex items-center gap-2 py-3">
            <Shield className="w-4 h-4" />
            Cyber Range
          </TabsTrigger>
        </TabsList>

        {/* Azure Range Content */}
        <TabsContent value="azure" className="mt-0 animate-fade-in">
          <div className="mb-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Cloud className="w-12 h-12 text-[#4FD1C5]" />
                  Azure Range
                </h2>
                <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
                  Direct access to Azure cloud services. Practice and skill up on cloud technologies directly in Azure with a sandboxed environment.
                </p>
                
                <div className="mb-8 max-w-4xl mx-auto">
                  <VideoEmbed videoId="4h1c0m2kaf" title="Azure Range Demo" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <Database className="w-12 h-12 text-[#4FD1C5] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Azure Storage Sandbox</h3>
                  <p className="text-gray-400 text-sm">Work with blobs, shared access signatures, and tools for uploading, securing, and managing data.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <GitBranch className="w-12 h-12 text-[#4FD1C5] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Azure Networking Sandbox</h3>
                  <p className="text-gray-400 text-sm">Manage virtual networks, peering, public IPs, and troubleshooting connectivity.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <Server className="w-12 h-12 text-[#4FD1C5] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Azure Compute Sandbox</h3>
                  <p className="text-gray-400 text-sm">Manage and configure virtual machines, extensions, and automation tools like cloud-init and scripts.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <Shield className="w-12 h-12 text-[#4FD1C5] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Azure Firewall Sandbox</h3>
                  <p className="text-gray-400 text-sm">This sandbox provides a complete hub-and-spoke lab for testing Azure Firewall, transitive routing, and secure remote access end to end.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <Box className="w-12 h-12 text-[#4FD1C5] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Azure Base Sandbox</h3>
                  <p className="text-gray-400 text-sm">Empty Resource Group for testing new ideas or building from the ground up.</p>
                </div>
              </div>

              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Azure Services & Technologies</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Azure Portal & Azure CLI", "Azure Resource Manager (ARM) & Bicep", "Azure Virtual Machines (VMs)", "Azure Storage (Blob, File, Table, Queue)", "Azure Virtual Networks (VNet)", "Azure Load Balancer", "Azure Monitor & Log Analytics", "Azure Backup & Site Recovery", "Azure App Services", "Azure Networking (NSGs, Private Link, Peering)", "Azure Kubernetes Service (AKS)", "Azure Automation & Runbooks", "Azure Security Center (Defender for Cloud)", "Azure Key Vault", "Azure Policies", "Azure Virtual Desktop (AVD)", "Azure Infrastructure as Code (IaC)"].map(tech => (
                    <div key={tech} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Microsoft Range Content */}
        <TabsContent value="microsoft" className="mt-0 animate-fade-in">
          <div className="mb-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Boxes className="w-12 h-12 text-[#4FD1C5]" />
                  Microsoft Range
                </h2>
                <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
                  Master Microsoft technologies and Windows infrastructure with hands-on experience in enterprise environments.
                </p>
                
                <div className="mb-8 max-w-4xl mx-auto">
                  <VideoEmbed videoId="v6zins19bi" title="Microsoft Range Demo" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Enterprise Operating Systems</h3>
                  <p className="text-gray-400">Work with the latest Windows Server 2025 and Windows 11 in a production-like environment</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Active Directory</h3>
                  <p className="text-gray-400">Master domain services, user management, and organizational structure in a full AD environment</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Virtualization</h3>
                  <p className="text-gray-400">Deploy and manage virtual machines with Hyper-V, including nested virtualization scenarios</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Microsoft Security</h3>
                  <p className="text-gray-400">Implement and test security policies, encryption, and compliance measures across Windows infrastructure</p>
                </div>
              </div>

              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Learning Tiers</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="tier1" className="border-gray-700">
                    <AccordionTrigger className="hover:text-[#4FD1C5]">
                      <span className="text-white">
                        <span className="text-[#4FD1C5]">Tier 1</span> - Fundamentals (Beginner)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-3 font-semibold">Basic server roles and core admin skills</p>
                      <ul className="space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>Active Directory & Identity Management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>DNS and DHCP configuration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>File Storage and Sharing with NTFS permissions</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tier2" className="border-gray-700">
                    <AccordionTrigger className="hover:text-[#4FD1C5]">
                      <span className="text-white">
                        <span className="text-[#4FD1C5]">Tier 2</span> - Role Configuration (Intermediate)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-3 font-semibold">Service deployment and integration</p>
                      <ul className="space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>IIS Web Hosting with HTTPS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>Network Policy Server configuration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>Virtual Machine Management with Hyper-V</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tier3" className="border-gray-700">
                    <AccordionTrigger className="hover:text-[#4FD1C5]">
                      <span className="text-white">
                        <span className="text-[#4FD1C5]">Tier 3</span> - Administration & Security (Intermediate-Advanced)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-3 font-semibold">Security & enterprise policies</p>
                      <ul className="space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>Group Policy design and deployment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>Windows Defender and advanced security</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>Backup and disaster recovery strategies</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tier4" className="border-gray-700">
                    <AccordionTrigger className="hover:text-[#4FD1C5]">
                      <span className="text-white">
                        <span className="text-[#4FD1C5]">Tier 4</span> - DevOps & Automation (Advanced)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-3 font-semibold">Scripting & infrastructure automation</p>
                      <ul className="space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>PowerShell scripting and automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>Desired State Configuration (DSC)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <span>CI/CD integration with Windows environments</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Microsoft Technologies</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Windows Server 2025", "Windows 11 Enterprise", "Active Directory Domain Services", "Group Policy Management", "DNS & DHCP Services", "IIS Web Services", "Hyper-V Virtualization", "PowerShell Automation", "Windows Admin Center", "Microsoft Defender", "Certificate Services", "File & Storage Services", "Remote Desktop Services", "Windows Deployment Services", "Failover Clustering", "Storage Spaces Direct"].map(tech => (
                    <div key={tech} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Network Range Content */}
        <TabsContent value="network" className="mt-0 animate-fade-in">
          <div className="mb-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Network className="w-12 h-12 text-[#4FD1C5]" />
                  Network Range
                </h2>
                <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
                  Build, configure, and troubleshoot enterprise networks with real networking equipment and scenarios.
                </p>
                
                <div className="mb-8 max-w-4xl mx-auto">
                  <VideoEmbed videoId="mj6i88dyhv" title="Network Range Demo" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Cisco Infrastructure</h3>
                  <p className="text-gray-400">Configure routers, switches, and network devices using IOS commands in real-world scenarios</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Network Protocols</h3>
                  <p className="text-gray-400">Master TCP/IP, routing protocols (OSPF, BGP, EIGRP), and switching technologies</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Network Security</h3>
                  <p className="text-gray-400">Implement ACLs, VPNs, firewalls, and security best practices for network protection</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Troubleshooting</h3>
                  <p className="text-gray-400">Diagnose and resolve network issues using industry-standard tools and methodologies</p>
                </div>
              </div>

              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Network Technologies</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Cisco IOS Configuration", "VLAN & Trunking", "Spanning Tree Protocol", "OSPF Routing", "BGP Routing", "EIGRP Routing", "ACL Configuration", "NAT/PAT", "VPN Technologies", "Network Monitoring", "Wireshark Analysis", "IPv4 & IPv6", "QoS Implementation", "Network Automation", "SDN Concepts", "Wireless Technologies"].map(tech => (
                    <div key={tech} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Cyber Range Content */}
        <TabsContent value="cyber" className="mt-0 animate-fade-in">
          <div className="mb-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Shield className="w-12 h-12 text-[#4FD1C5]" />
                  Cyber Range
                </h2>
                <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
                  Develop offensive and defensive security skills in a safe, isolated environment with real-world attack scenarios.
                </p>
                
                <div className="mb-8 max-w-4xl mx-auto">
                  <VideoEmbed videoId="2f53dv64e9" title="Cyber Range Demo" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Penetration Testing</h3>
                  <p className="text-gray-400">Practice ethical hacking techniques using tools like Metasploit, Nmap, and Burp Suite</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">SIEM & Log Analysis</h3>
                  <p className="text-gray-400">Monitor and analyze security events using Splunk and other SIEM platforms</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Incident Response</h3>
                  <p className="text-gray-400">Develop skills to detect, contain, and remediate security incidents effectively</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Vulnerability Assessment</h3>
                  <p className="text-gray-400">Identify and assess security weaknesses using OpenVAS and vulnerability scanners</p>
                </div>
              </div>

              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Security Tools & Technologies</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Splunk SIEM", "Wireshark", "Nmap", "Metasploit", "Burp Suite", "OpenVAS", "Kali Linux", "OWASP Tools", "Snort IDS", "Forensic Tools", "Malware Analysis", "Threat Intelligence", "Security Automation", "Cloud Security", "Container Security", "Zero Trust Architecture"].map(tech => (
                    <div key={tech} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Ranges;
