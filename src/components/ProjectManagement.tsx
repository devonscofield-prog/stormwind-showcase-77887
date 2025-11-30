import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedFeatureCard from "./AnimatedFeatureCard";
import { PMPIcon, AgileIcon, LeadershipIcon, CCRIcon } from "./icons/animated";

interface ProjectManagementProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const ProjectManagement = ({ }: ProjectManagementProps) => {
  const features = [
    {
      icon: PMPIcon,
      title: "PMP® Certification",
      description: "Comprehensive preparation for the globally recognized Project Management Professional certification with 35 contact hours"
    },
    {
      icon: AgileIcon,
      title: "Agile & Methodologies",
      description: "PMI-ACP, Scrum, Kanban, and Lean Six Sigma training for modern project delivery"
    },
    {
      icon: LeadershipIcon,
      title: "Leadership Skills",
      description: "Cross-cultural team management, communication planning, motivation, and negotiation skills"
    },
    {
      icon: CCRIcon,
      title: "CCR Support",
      description: "Earn PDUs through technical, leadership, and strategic courses to maintain your certification"
    }
  ];

  const featureColors = ['#60A5FA', '#FB923C', '#A78BFA', '#4ADE80'];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight pb-2">
          Project Management
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
          Prepare for PMP® certification and meet continuing certification requirements (CCR) with StormWind's Project Management All Access Bundle. Featuring EPIC LIVE classes with expert instructor Ashley Hunt, 24-7 Instant Replay recordings, practice exams, 1:1 mentoring, and downloadable project templates. Earn Professional Development Units (PDUs) across technical, leadership, and strategic competencies to maintain your certification.
        </p>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2"
        >
          <Link to="/project-management">Learn More</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => {
          const color = featureColors[index];
          
          return (
            <AnimatedFeatureCard
              key={index}
              to="/project-management"
              color={color}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectManagement;
