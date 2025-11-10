import FeatureCard from "./FeatureCard";
import { Award, BookOpen, Users, Target, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProjectManagementProps {
  selectedFeatures: string[];
  toggleFeature: (title: string) => void;
}

const ProjectManagement = ({ selectedFeatures, toggleFeature }: ProjectManagementProps) => {
  const navigate = useNavigate();
  const isSelected = selectedFeatures.includes("Project Management");
  
  const features = [
    {
      icon: Award,
      title: "PMP® Certification",
      description: "Comprehensive preparation for the globally recognized Project Management Professional certification with 35 contact hours"
    },
    {
      icon: BookOpen,
      title: "Agile & Methodologies",
      description: "PMI-ACP, Scrum, Kanban, and Lean Six Sigma training for modern project delivery"
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description: "Cross-cultural team management, communication planning, motivation, and negotiation skills"
    },
    {
      icon: Target,
      title: "CCR Support",
      description: "Earn PDUs through technical, leadership, and strategic courses to maintain your certification"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6">
          Project Management
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
          Prepare for PMP® certification and meet continuing certification requirements (CCR) with StormWind's Project Management All Access Bundle. Featuring EPIC LIVE classes with expert instructor Ashley Hunt, 24-7 Instant Replay recordings, practice exams, 1:1 mentoring, and downloadable project templates. Earn Professional Development Units (PDUs) across technical, leadership, and strategic competencies to maintain your certification.
        </p>
        <Button
          size="lg"
          variant={isSelected ? "default" : "outline"}
          onClick={() => toggleFeature("Project Management")}
          className={`gap-2 transition-all ${
            !isSelected ? 'shadow-lg hover:shadow-xl hover:scale-105 border-2' : ''
          }`}
        >
          {isSelected ? (
            <>
              <Check className="w-5 h-5" />
              Selected
            </>
          ) : (
            "Select This Product"
          )}
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} onClick={() => navigate('/project-management')} />
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
