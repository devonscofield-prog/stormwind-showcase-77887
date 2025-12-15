import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TechBackground } from "@/components/TechBackground";
import { VideoEmbed } from "@/components/VideoEmbed";
import { PageLayout } from "@/components/PageLayout";
import { TechCard } from "@/components/TechCard";
import azureRangeImage from "@/assets/azure-range.jpg";
import microsoftRangeImage from "@/assets/microsoft-range.jpg";
import networkRangeImage from "@/assets/network-range.jpg";
import cyberRangeImage from "@/assets/cyber-range.jpg";
import { Cloud, Server, Network, Shield, Database, GitBranch, Box, Boxes } from "lucide-react";

const azureTechnologies = [
  "Azure Portal & Azure CLI", "Azure Resource Manager (ARM) & Bicep", "Azure Virtual Machines (VMs)",
  "Azure Storage (Blob, File, Table, Queue)", "Azure Virtual Networks (VNet)", "Azure Load Balancer",
  "Azure Monitor & Log Analytics", "Azure Backup & Site Recovery", "Azure App Services",
  "Azure Networking (NSGs, Private Link, Peering)", "Azure Kubernetes Service (AKS)", "Azure Automation & Runbooks",
  "Azure Security Center (Defender for Cloud)", "Azure Key Vault", "Azure Policies",
  "Azure Virtual Desktop (AVD)", "Azure Infrastructure as Code (IaC)"
];

const microsoftTechnologies = [
  "Windows Server 2025", "Windows 11 Enterprise", "Active Directory Domain Services",
  "Group Policy Management", "DNS & DHCP Services", "IIS Web Services",
  "Hyper-V Virtualization", "PowerShell Automation", "Windows Admin Center",
  "Microsoft Defender", "Certificate Services", "File & Storage Services",
  "Remote Desktop Services", "Windows Deployment Services", "Failover Clustering", "Storage Spaces Direct"
];

const networkTechnologies = [
  "Cisco IOS Configuration", "VLAN & Trunking", "Spanning Tree Protocol",
  "OSPF Routing", "BGP Routing", "EIGRP Routing",
  "ACL Configuration", "NAT/PAT", "VPN Technologies",
  "Network Monitoring", "Wireshark Analysis", "IPv4 & IPv6",
  "QoS Implementation", "Network Automation", "SDN Concepts", "Wireless Technologies"
];

const cyberTechnologies = [
  "Splunk SIEM", "Wireshark", "Nmap",
  "Metasploit", "Burp Suite", "OpenVAS",
  "Kali Linux", "OWASP Tools", "Snort IDS",
  "Forensic Tools", "Malware Analysis", "Threat Intelligence",
  "Security Automation", "Cloud Security", "Container Security", "Zero Trust Architecture"
];

const Ranges = () => {
  const [activeTab, setActiveTab] = useState("azure");

  useEffect(() => {
    document.title = "Ranges";
  }, []);

  const scrollToTabs = (tab: string) => {
    setActiveTab(tab);
    document.getElementById("range-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        <TechCard
          variant="image"
          imageSrc={azureRangeImage}
          imageAlt="Azure Range"
          title="Azure Range"
          description="Master Azure cloud services with hands-on labs for compute, storage, networking, and security"
          onClick={() => scrollToTabs("azure")}
        />
        <TechCard
          variant="image"
          imageSrc={microsoftRangeImage}
          imageAlt="Microsoft Range"
          title="Microsoft Range"
          description="Practice with Windows Server, Active Directory, and enterprise Microsoft technologies"
          onClick={() => scrollToTabs("microsoft")}
        />
        <TechCard
          variant="image"
          imageSrc={networkRangeImage}
          imageAlt="Network Range"
          title="Network Range"
          description="Build and troubleshoot networks with routers, switches, and real-world scenarios"
          onClick={() => scrollToTabs("network")}
        />
        <TechCard
          variant="image"
          imageSrc={cyberRangeImage}
          imageAlt="Cyber Range"
          title="Cyber Range"
          description="Develop security skills in a real world environment using applications like Splunk, Wireshark, OpenVAS, and Nmap"
          onClick={() => scrollToTabs("cyber")}
        />
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
                <TechCard variant="icon" icon={Database} title="Azure Storage Sandbox" description="Work with blobs, shared access signatures, and tools for uploading, securing, and managing data." />
                <TechCard variant="icon" icon={GitBranch} title="Azure Networking Sandbox" description="Manage virtual networks, peering, public IPs, and troubleshooting connectivity." />
                <TechCard variant="icon" icon={Server} title="Azure Compute Sandbox" description="Manage and configure virtual machines, extensions, and automation tools like cloud-init and scripts." />
                <TechCard variant="icon" icon={Shield} title="Azure Firewall Sandbox" description="This sandbox provides a complete hub-and-spoke lab for testing Azure Firewall, transitive routing, and secure remote access end to end." />
                <TechCard variant="icon" icon={Box} title="Azure Base Sandbox" description="Empty Resource Group for testing new ideas or building from the ground up." />
              </div>

              <TechCard variant="techlist" title="Azure Services & Technologies" items={azureTechnologies} />
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
                <TechCard variant="feature" title="Enterprise Operating Systems" description="Work with the latest Windows Server 2025 and Windows 11 in a production-like environment" />
                <TechCard variant="feature" title="Active Directory" description="Master domain services, user management, and organizational structure in a full AD environment" />
                <TechCard variant="feature" title="Virtualization" description="Deploy and manage virtual machines with Hyper-V, including nested virtualization scenarios" />
                <TechCard variant="feature" title="Microsoft Security" description="Implement and test security policies, encryption, and compliance measures across Windows infrastructure" />
              </div>

              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Learning Tiers</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="tier1" className="border-gray-700">
                    <AccordionTrigger className="hover:text-[#4FD1C5]">
                      <span className="text-white">
                        <span className="text-[#4FD1C5]">Tier 1</span> – Fundamentals (Beginner)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-3 font-semibold">Objective: Learn basic server roles and core admin skills</p>
                      <ul className="space-y-3 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">Active Directory & Identity Management</span>
                            <p className="text-sm mt-1">Create users/groups in ADUC, organize into OUs, apply GPO for password policy</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">DNS and DHCP</span>
                            <p className="text-sm mt-1">Create forward/reverse lookup zones, add A/PTR/CNAME records, configure DHCP scope</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">File Storage and Sharing</span>
                            <p className="text-sm mt-1">Create shared folders, apply NTFS permissions</p>
                          </div>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tier2" className="border-gray-700">
                    <AccordionTrigger className="hover:text-[#4FD1C5]">
                      <span className="text-white">
                        <span className="text-[#4FD1C5]">Tier 2</span> – Role Configuration (Intermediate)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-3 font-semibold">Objective: Expand into service deployment and integration</p>
                      <ul className="space-y-3 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">IIS Web Hosting</span>
                            <p className="text-sm mt-1">Install IIS, host HTML page, enable directory browsing, secure with HTTPS</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">Network Policy</span>
                            <p className="text-sm mt-1">Install/configure Network Policy Server, create access policies, restrict by AD group</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">Virtual Machine Management</span>
                            <p className="text-sm mt-1">Create VMs in Hyper-V, join to domain, configure virtual switch</p>
                          </div>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tier3" className="border-gray-700">
                    <AccordionTrigger className="hover:text-[#4FD1C5]">
                      <span className="text-white">
                        <span className="text-[#4FD1C5]">Tier 3</span> – Administration & Security (Intermediate-Advanced)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-3 font-semibold">Objective: Perform monitoring, automation, and service hardening</p>
                      <ul className="space-y-3 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">Security and System Monitoring</span>
                            <p className="text-sm mt-1">Configure Event Viewer for failed logons, use Performance Monitor for CPU/memory</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">Automation and PowerShell</span>
                            <p className="text-sm mt-1">Bulk-create AD users from CSV, create scheduled backup scripts</p>
                          </div>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tier4" className="border-gray-700">
                    <AccordionTrigger className="hover:text-[#4FD1C5]">
                      <span className="text-white">
                        <span className="text-[#4FD1C5]">Tier 4</span> – Integrated Scenarios (Advanced)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-3 font-semibold">Objective: Combine multiple skills in realistic situations</p>
                      <ul className="space-y-3 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">New Department Onboarding</span>
                            <p className="text-sm mt-1">Create OUs/users/groups, deploy shared folder, configure DHCP reservations</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">Service Migration</span>
                            <p className="text-sm mt-1">Deploy new IIS web server on Server 2025, update DNS records</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4FD1C5] mt-1">•</span>
                          <div>
                            <span className="font-medium text-white">Security Incident Response</span>
                            <p className="text-sm mt-1">Generate/view suspicious login activity, disable account, reset password</p>
                          </div>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tier5" className="border-gray-700">
                    <AccordionTrigger className="hover:text-[#4FD1C5]">
                      <span className="text-white">
                        <span className="text-[#4FD1C5]">Tier 5</span> – Capstone Challenge
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-3 font-semibold">Objective: End-to-end project simulating a real-world request from management</p>
                      <div className="pl-4">
                        <p className="font-medium text-white mb-2">Final Capstone – Build and Secure a Department Infrastructure</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><span className="text-[#4FD1C5] mt-1">•</span><span>Provision new Windows Server VM in Hyper-V</span></li>
                          <li className="flex items-start gap-2"><span className="text-[#4FD1C5] mt-1">•</span><span>Configure as file server with SMB shares and quotas</span></li>
                          <li className="flex items-start gap-2"><span className="text-[#4FD1C5] mt-1">•</span><span>Set up DNS entries and DHCP reservations</span></li>
                          <li className="flex items-start gap-2"><span className="text-[#4FD1C5] mt-1">•</span><span>Apply GPOs, configure firewall rules, monitor activity</span></li>
                          <li className="flex items-start gap-2"><span className="text-[#4FD1C5] mt-1">•</span><span>Document all steps and deliver working environment</span></li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <TechCard variant="techlist" title="Microsoft Technologies" items={microsoftTechnologies} />
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
                  <VideoEmbed videoId="6i6y01qjp0" title="Network Range Demo" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <TechCard variant="feature" title="Cisco Infrastructure" description="Configure routers, switches, and network devices using IOS commands in real-world scenarios" />
                <TechCard variant="feature" title="Network Protocols" description="Master TCP/IP, routing protocols (OSPF, BGP, EIGRP), and switching technologies" />
                <TechCard variant="feature" title="Network Security" description="Implement ACLs, VPNs, firewalls, and security best practices for network protection" />
                <TechCard variant="feature" title="Troubleshooting" description="Diagnose and resolve network issues using industry-standard tools and methodologies" />
              </div>

              <TechCard variant="techlist" title="Network Technologies" items={networkTechnologies} />
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
                  <VideoEmbed videoId="gg8rfkzk3y" title="Cyber Range Demo" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <TechCard variant="feature" title="Penetration Testing" description="Practice ethical hacking techniques using tools like Metasploit, Nmap, and Burp Suite" />
                <TechCard variant="feature" title="SIEM & Log Analysis" description="Monitor and analyze security events using Splunk and other SIEM platforms" />
                <TechCard variant="feature" title="Incident Response" description="Develop skills to detect, contain, and remediate security incidents effectively" />
                <TechCard variant="feature" title="Vulnerability Assessment" description="Identify and assess security weaknesses using OpenVAS and vulnerability scanners" />
              </div>

              <TechCard variant="techlist" title="Security Tools & Technologies" items={cyberTechnologies} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Ranges;
