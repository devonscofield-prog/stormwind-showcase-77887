import { BookOpen, Calendar, Check, Clock, Cloud, Network, Server, Shield, Target, UserCheck, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import willPanek from "@/assets/will-panek.png";
import ashleyHunt from "@/assets/ashley-hunt.png";
import raymondLacoste from "@/assets/raymond-lacoste.png";

const cardClass = "block rounded-lg border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02]";

const Checklist = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-sm text-muted-foreground">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2">
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const RangeCard = ({ icon: Icon, title, description, bullets, tab }: {
  icon: typeof Server;
  title: string;
  description: string;
  bullets: string[];
  tab: string;
}) => (
  <Link to={`/ranges?tab=${tab}`} className={cardClass}>
    <div className="mb-4 flex items-center gap-3">
      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
      <h4 className="text-xl font-bold text-foreground">{title}</h4>
    </div>
    <p className="mb-3 leading-relaxed text-muted-foreground">{description}</p>
    <Checklist items={bullets} />
  </Link>
);

const OnDemandCard = ({ icon: Icon, title, description, bullets, to }: {
  icon: typeof BookOpen;
  title: string;
  description: string;
  bullets: string[];
  to: string;
}) => (
  <Link to={to} className={cardClass}>
    <div className="mb-4 flex items-center gap-3">
      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
      <h4 className="text-xl font-bold text-foreground">{title}</h4>
    </div>
    <p className="mb-3 leading-relaxed text-muted-foreground">{description}</p>
    <Checklist items={bullets} />
  </Link>
);

const instructors = [
  {
    image: raymondLacoste,
    name: "Raymond Lacoste",
    role: "Cisco Sirius Instructor Award Winner",
    bio: "Highly recognized instructor and author of Cisco Press publications on ENARSI and TSHOOT exams.",
  },
  {
    image: ashleyHunt,
    name: "Ashley Hunt",
    role: "PMP Expert & Author",
    bio: "World-recognized project management instructor who has helped over 10,000 individuals get their PMP certification.",
  },
  {
    image: willPanek,
    name: "Will Panek",
    role: "Microsoft MVP & Author",
    bio: "5-time Microsoft MVP with over 40 published titles on Microsoft technologies.",
  },
];

export const LearningStyles = () => (
  <div className="mb-16">
    <h3 className="mb-8 text-center text-2xl font-bold text-foreground">Learning Styles</h3>
    <Tabs defaultValue="hands-on" className="w-full">
      <TabsList className="mb-8 grid h-auto w-full grid-cols-3">
        <TabsTrigger value="hands-on">Hands-On</TabsTrigger>
        <TabsTrigger value="live-instructor-led">Live Instructor-Led</TabsTrigger>
        <TabsTrigger value="on-demand">On-Demand</TabsTrigger>
      </TabsList>

      <TabsContent value="hands-on" className="mt-0 animate-fade-in">
        <div className="grid gap-6 md:grid-cols-2">
          <RangeCard icon={Server} title="Microsoft Range" tab="microsoft" description="Practice with Windows Server 2025, Windows 11, Active Directory, DNS, DHCP, and PowerShell in production-like environments." bullets={["Real Microsoft infrastructure without setup costs", "Build enterprise-ready Windows administration skills"]} />
          <RangeCard icon={Shield} title="Cyber Range" tab="cyber" description="Master cybersecurity with hands-on access to Splunk, OpenVAS, Nmap, Wireshark, and other industry-standard security tools." bullets={["Practice penetration testing and threat analysis", "Develop real-world security defense strategies"]} />
          <RangeCard icon={Cloud} title="Azure Range" tab="azure" description="Build cloud infrastructure with VNets, VMs, storage accounts, and more. Includes an empty sandbox for testing ARM, Bicep, or Terraform templates." bullets={["Real Azure environment without billing surprises", "Experiment freely with cloud architecture patterns"]} />
          <RangeCard icon={Network} title="Network Range" tab="network" description="Configure VLANs, routing protocols (OSPF, BGP), IPv4/IPv6, and security configurations on real network equipment." bullets={["Practice with Cisco and enterprise networking gear", "Master network troubleshooting and design skills"]} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild><Link to="/ranges">Explore the Ranges</Link></Button>
        </div>
      </TabsContent>

      <TabsContent value="live-instructor-led" className="mt-0 animate-fade-in">
        <div className="rounded-lg border-2 border-border bg-card p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="mb-6 text-2xl font-bold text-foreground">Meet Some of Our Full Time Instructors</h4>
              {instructors.map((instructor) => (
                <Link key={instructor.name} to="/live-instructor-led" className="flex gap-4 rounded-lg border-2 border-transparent bg-background/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg">
                  <img src={instructor.image} alt={instructor.name} className="h-20 w-20 shrink-0 rounded-full border-2 border-primary/20 object-cover shadow-md" />
                  <div>
                    <h5 className="text-lg font-bold text-foreground">{instructor.name}</h5>
                    <p className="mb-1 text-sm font-medium text-primary">{instructor.role}</p>
                    <p className="text-sm text-muted-foreground">{instructor.bio}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="mb-4 flex items-center gap-4">
                <Video className="h-10 w-10 text-primary" aria-hidden="true" />
                <h4 className="text-2xl font-bold text-foreground">Live Instructor-Led Training</h4>
              </div>
              <p className="mb-6 leading-relaxed text-muted-foreground">Experience the power of real-time learning with expert instructors. Our live courses combine interactive instruction, hands-on labs, and collaborative learning to accelerate your career growth. Ask questions, get immediate feedback, and learn alongside peers in a dynamic virtual classroom.</p>
              <p className="mb-6 leading-relaxed text-muted-foreground">The short, 2-4 hour sessions allow you to easily digest the information and fit learning into your busy schedule. All sessions are taught by industry-certified professionals with real-world experience.</p>
              <div className="mb-6">
                <h5 className="mb-3 font-bold text-foreground">Key Benefits:</h5>
                <Checklist items={["Ask questions and get immediate answers from expert instructors", "Hands-on labs during class for practical experience", "Learn alongside peers and build your professional network", "Short 2-4 hour sessions that fit your schedule"]} />
              </div>
              <div className="mt-auto">
                <Button size="lg" asChild className="w-full md:w-auto"><Link to="/live-instructor-led"><Calendar className="mr-2 h-5 w-5" />View Live Training</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="on-demand" className="mt-0 animate-fade-in">
        <div className="grid gap-6 md:grid-cols-2">
          <OnDemandCard icon={BookOpen} title="On-Demand Library" to="/courses" description="Access thousands of courses anytime, anywhere. Our library is continuously updated with content from live sessions, ensuring you always have access to the latest material." bullets={["Regularly updated with new live session recordings", "Learn at your own pace with instant replay", "Professional video production and hands-on labs", "Pre-made career-based learning paths or create your own custom paths"]} />
          <OnDemandCard icon={Clock} title="Microlearning: Bytes" to="/bytes" description="Master complex skills through bite-sized lessons designed for maximum retention. Each Byte takes just 3-5 minutes, making it easy to learn during breaks or commutes." bullets={["Adaptive personalization from initial assessments", "Sequential skill stacking for rapid mastery", "Real-world application in every session"]} />
          <OnDemandCard icon={Target} title="Certification Study Plans" to="/learning-paths" description="A personalized three-step approach to certification success. Perfect for experienced techs looking to certify fast or newbies needing comprehensive training—we assess your knowledge, recommend the right path, and validate readiness." bullets={["Assessment: Identify your strengths and knowledge gaps", "Course Recommendation: Get matched to an exam crash course or full certification course", "Practice Tests: Validate readiness with realistic exam simulations"]} />
          <OnDemandCard icon={UserCheck} title="1:1 Mentoring with Industry Experts" to="/mentoring" description="Get personalized guidance from world-class instructors—no live session attendance required. Our on-staff experts are available to answer questions, troubleshoot challenges, and accelerate your learning." bullets={["Direct access to course instructors", "Personalized support for your learning journey", "Get unstuck faster with expert guidance"]} />
        </div>
      </TabsContent>
    </Tabs>
  </div>
);

export default LearningStyles;