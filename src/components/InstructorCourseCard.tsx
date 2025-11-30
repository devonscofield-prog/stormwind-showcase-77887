import { LucideIcon, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CourseFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface InstructorCourseCardProps {
  title: string;
  instructorName: string;
  instructorImage: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  features: CourseFeature[];
  titleIcon?: LucideIcon;
  className?: string;
}

export const InstructorCourseCard = ({
  title,
  instructorName,
  instructorImage,
  level,
  description,
  features,
  titleIcon: TitleIcon = Award,
  className,
}: InstructorCourseCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      {/* Header with Avatar and Title */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          <img
            src={instructorImage}
            alt={instructorName}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
            loading="lazy"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <TitleIcon className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Instructor: {instructorName}
          </p>
        </div>
      </div>

      {/* Level Badge */}
      <div className="flex items-center gap-4 text-sm mb-4">
        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          {level}
        </span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

      {/* Features List */}
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <FeatureIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">{feature.title}</p>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstructorCourseCard;
