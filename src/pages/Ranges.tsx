import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import azureRangeImage from "@/assets/azure-range.jpg";
import microsoftRangeImage from "@/assets/microsoft-range.jpg";
import networkRangeImage from "@/assets/network-range.jpg";
import cyberRangeImage from "@/assets/cyber-range.jpg";
import logoImage from "@/assets/stormwind-logo.png";
import { ArrowRight, CheckCircle2, Cloud, Server, Network, Shield, Database, GitBranch, Box, Boxes, Home } from "lucide-react";
const Ranges = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("azure");
  useEffect(() => {
    document.title = "Ranges";
  }, []);
  return <div className="min-h-screen bg-[#2B3440]">
      <Navigation />

      <div className="container mx-auto px-4 py-16 pt-32">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-[#4FD1C5]">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-500" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#4FD1C5]">Ranges</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-[#4FD1C5]">
            StormWind Ranges
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Hands-on IT training environments where professionals master cloud, networking, Microsoft technologies, and cybersecurity
          </p>
        </div>

        {/* Range Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {/* Azure Range */}
          <Card className="bg-[#1a1f2e] border-gray-700 overflow-hidden hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
            <img src={azureRangeImage} alt="Azure Range" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Azure Range</h3>
              <p className="text-gray-400 text-sm mb-4">
                Master Azure cloud services with hands-on labs for compute, storage, networking, and security
              </p>
              
            </div>
          </Card>

          {/* Microsoft Range */}
          <Card className="bg-[#1a1f2e] border-gray-700 overflow-hidden hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
            <img src={microsoftRangeImage} alt="Microsoft Range" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Microsoft Range</h3>
              <p className="text-gray-400 text-sm mb-4">
                Practice with Windows Server, Active Directory, and enterprise Microsoft technologies
              </p>
              
            </div>
          </Card>

          {/* Network Range */}
          <Card className="bg-[#1a1f2e] border-gray-700 overflow-hidden hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
            <img src={networkRangeImage} alt="Network Range" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Network Range</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build and troubleshoot networks with routers, switches, and real-world scenarios
              </p>
              
            </div>
          </Card>

          {/* Cyber Range */}
          <Card className="bg-[#1a1f2e] border-gray-700 overflow-hidden hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
            <img src={cyberRangeImage} alt="Cyber Range" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Cyber Range</h3>
              <p className="text-gray-400 text-sm mb-4">
                Develop security skills in a real world environment using applications like Splunk, Wireshark, OpenVAS, and Nmap
              </p>
              
            </div>
          </Card>
        </div>

        {/* Tabbed Range Details */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
              
              {/* Embedded Wistia Video */}
              <div className="mb-8 max-w-4xl mx-auto">
                <div className="relative bg-[#1a1f2e] rounded-lg border border-gray-700 overflow-hidden hover:border-[#4FD1C5] transition-all">
                  <div style={{
                      padding: "56.25% 0 0 0",
                      position: "relative"
                    }}>
                    <iframe src="https://fast.wistia.net/embed/iframe/4h1c0m2kaf?seo=true&videoFoam=true" title="Azure Range Demo" allow="autoplay; fullscreen" allowFullScreen style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                      }} />
                  </div>
                </div>
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
                {["Azure Portal & Azure CLI", "Azure Resource Manager (ARM) & Bicep", "Azure Virtual Machines (VMs)", "Azure Storage (Blob, File, Table, Queue)", "Azure Virtual Networks (VNet)", "Azure Load Balancer", "Azure Monitor & Log Analytics", "Azure Backup & Site Recovery", "Azure App Services", "Azure Networking (NSGs, Private Link, Peering)", "Azure Kubernetes Service (AKS)", "Azure Automation & Runbooks", "Azure Security Center (Defender for Cloud)", "Azure Key Vault", "Azure Policies", "Azure Virtual Desktop (AVD)", "Azure Infrastructure as Code (IaC)"].map(tech => <div key={tech} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{tech}</span>
                  </div>)}
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
              
              {/* Embedded Wistia Video */}
              <div className="mb-8 max-w-4xl mx-auto">
                <div className="relative bg-[#1a1f2e] rounded-lg border border-gray-700 overflow-hidden hover:border-[#4FD1C5] transition-all">
                  <div style={{
                      padding: "56.25% 0 0 0",
                      position: "relative"
                    }}>
                    <iframe src="https://fast.wistia.net/embed/iframe/v6zins19bi?seo=true&videoFoam=true" title="Microsoft Range Demo" allow="autoplay; fullscreen" allowFullScreen style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                      }} />
                  </div>
                </div>
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Platforms & Operating Systems</h3>
                <div className="space-y-3">
                  {["Windows Server 2025", "Windows 11", "Hyper-V", "Microsoft SQL"].map(platform => <div key={platform} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{platform}</span>
                    </div>)}
                </div>
              </div>
              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Microsoft Technologies</h3>
                <div className="space-y-3">
                  {["Windows Active Directory", "DNS Services", "Hyper-V Virtualization", "Group Policy Management", "File and Storage Server", "DHCP Services", "Remote Desktop Services", "Windows Security", "PowerShell Administration", "Windows Deployment Services", "Certificate Services", "Network Policy Server"].map(tech => <div key={tech} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{tech}</span>
                    </div>)}
                </div>
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
                A dynamic networking sandbox with routers, multi-layer switches, and connected hosts. From simple setups to advanced architectures.
              </p>
              
              {/* Embedded Wistia Video */}
              <div className="mb-8 max-w-4xl mx-auto">
                <div className="relative bg-[#1a1f2e] rounded-lg border border-gray-700 overflow-hidden hover:border-[#4FD1C5] transition-all">
                  <div style={{
                      padding: "56.25% 0 0 0",
                      position: "relative"
                    }}>
                    <iframe src="https://fast.wistia.net/embed/iframe/6i6y01qjp0?seo=true&videoFoam=true" title="Network Range Demo" allow="autoplay; fullscreen" allowFullScreen style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                      }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 mb-8 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Over 70 Lab Activities Available</h3>
              <p className="text-gray-400">
                Work with full networking devices where you can follow structured labs or break out and experiment with your own configurations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Switching</h3>
                <div className="space-y-2">
                  {["VLANs", "Private VLANs", "Trunking", "QoS"].map(item => <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>)}
                </div>
              </div>
              <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Routing</h3>
                <div className="space-y-2">
                  {["OSPF", "EIGRP", "BGP", "Static Routing", "Summarization", "Redistribution", "Route Filtering", "Policy-Based Routing"].map(item => <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>)}
                </div>
              </div>
              <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Infrastructure</h3>
                <div className="space-y-2">
                  {["DNS", "DHCP", "SSH", "GRE", "NTP"].map(item => <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>)}
                </div>
              </div>
              <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">IPv6</h3>
                <div className="space-y-2">
                  {["OSPFv3", "BGP for IPv6", "6in4 Tunnels", "6to4 Tunnels", "6over4 Tunnels", "DHCPv6 PD", "IPv6 ACLs"].map(item => <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Platforms</h3>
                <div className="space-y-3">
                  {["Cisco IOS", "Cisco Catalyst 9300", "Cisco Nexus 9500", "Nmap", "PowerDNS", "Windows Server 2019"].map(platform => <div key={platform} className="flex items-start gap-2">
                      <span className="text-[#4FD1C5]">•</span>
                      <span className="text-gray-300">{platform}</span>
                    </div>)}
                </div>
              </div>
              <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Class Alignment</h3>
                <div className="space-y-3">
                  {["Cisco CCNA", "CompTIA Network+ N10-009", "Cisco CCNP ENCOR", "Cisco CCNP ENARSI", "Modern Networking with IPv6"].map(cert => <div key={cert} className="flex items-start gap-2">
                      <span className="text-[#4FD1C5]">•</span>
                      <span className="text-gray-300">{cert}</span>
                    </div>)}
                </div>
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
                Enhance your cybersecurity skills with a cutting-edge practical training environment designed to keep you ahead of emerging threats.
              </p>
              
              {/* Embedded Wistia Video */}
              <div className="mb-8 max-w-4xl mx-auto">
                <div className="relative bg-[#1a1f2e] rounded-lg border border-gray-700 overflow-hidden hover:border-[#4FD1C5] transition-all">
                  <div style={{
                      padding: "56.25% 0 0 0",
                      position: "relative"
                    }}>
                    <iframe src="https://fast.wistia.net/embed/iframe/gg8rfkzk3y?seo=true&videoFoam=true" title="Cyber Range Demo" allow="autoplay; fullscreen" allowFullScreen style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                      }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">Realistic Challenges</h3>
                <p className="text-gray-400">Dynamic 'capture the flag' challenges that simulate real-world scenarios, exposing vulnerabilities, breaches and cyber threats.</p>
              </div>
              <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">Expert Guidance</h3>
                <p className="text-gray-400">Invaluable guidance from seasoned security professionals, equipping you with the latest insights and solutions.</p>
              </div>
              <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">Defense Tools</h3>
                <p className="text-gray-400">Master top-tier defense tools and techniques through experiential learning with measurable achievements.</p>
              </div>
              <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">Real World Application</h3>
                <p className="text-gray-400">Sharpen your abilities by facing and overcoming real-world challenges in an unparalleled training platform.</p>
              </div>
            </div>

            <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 mb-8 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Core Security Skills</h3>
              <p className="text-gray-400 mb-6">
                Start your cyber range journey by mastering essential tools. These activities will prepare you for more advanced challenges ahead.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {["Security Incident and Event Management", "Vulnerability Assessments", "Network and Packet Analysis", "Incident Detection"].map(skill => <div key={skill} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{skill}</span>
                  </div>)}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">TOOLS & TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-3">
                  {["OpenVAS", "NMAP", "Wireshark", "Splunk"].map(tool => <span key={tool} className="px-4 py-2 bg-[#2B3440] text-[#4FD1C5] rounded-lg border border-[#4FD1C5]">
                      {tool}
                    </span>)}
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 mb-8 hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Coming Soon</h3>
              <p className="text-gray-400 mb-6">
                Our next events in the cyber range tackle key topics in cybersecurity. Learn to detect attacks against web applications, identify malicious activity, and secure authentication systems.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {["Web Application Security", "Detecting Malicious PowerShell", "Advanced Threat Hunting"].map(topic => <div key={topic} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{topic}</span>
                  </div>)}
              </div>
            </div>

            <div className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-700 text-center hover:border-[#4FD1C5] hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Built for beginners and seasoned professionals</h3>
              <p className="text-gray-400">
                Transform your expertise into an unassailable asset against evolving cyber risks through hands-on CTF challenges.
              </p>
            </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default Ranges;