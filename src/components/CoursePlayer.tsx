import { useState } from "react";
import { Course, Lesson, CourseVariant, instructorPhotos } from "@/lib/trainingSampleData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";
import { VideoEmbed } from "./VideoEmbed";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface CoursePlayerProps {
  course: Course;
  onBack: () => void;
}

export const CoursePlayer = ({ course, onBack }: CoursePlayerProps) => {
  const [selectedVariant, setSelectedVariant] = useState<CourseVariant>(course.variants[0]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(
    course.variants[0]?.modules[0]?.lessons[0] || null
  );

  // Reset current lesson when variant changes
  const handleVariantChange = (variantId: string) => {
    const newVariant = course.variants.find(v => v.id === variantId);
    if (newVariant) {
      setSelectedVariant(newVariant);
      setCurrentLesson(newVariant.modules[0]?.lessons[0] || null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 hover:bg-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Button>

        {/* Course Title */}
        <h1 className="text-4xl font-bold mb-6">{course.title}</h1>

        {/* Variant Toggle */}
        {course.variants.length > 1 && (
          <div className="mb-6 flex gap-2">
            {course.variants.map((variant) => (
              <Button
                key={variant.id}
                variant={selectedVariant.id === variant.id ? "default" : "outline"}
                onClick={() => handleVariantChange(variant.id)}
              >
                {variant.name}
              </Button>
            ))}
          </div>
        )}

        {/* Video and Course Samples */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            {currentLesson ? (
              <VideoEmbed videoId={currentLesson.videoId} title={currentLesson.title} />
            ) : (
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Select a lesson to begin</p>
              </div>
            )}
          </div>

          {/* Course Samples */}
          <div className="lg:col-span-1">
            <Card className="glass-card h-full">
              <CardContent className="pt-6 pb-4 h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Course Samples</h3>
                <div className="flex-1 overflow-y-auto pr-2 space-y-1.5">
                  {selectedVariant.modules.flatMap(module => module.lessons).map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(lesson)}
                      className={`w-full text-left p-2 rounded-lg transition-all ${
                        currentLesson?.id === lesson.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent border border-border'
                      }`}
                    >
                      <p className="text-sm font-medium line-clamp-2">{lesson.title}</p>
                      <div className="flex items-center gap-2 text-xs opacity-80 mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{lesson.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Overview */}
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p className="text-foreground text-base leading-relaxed">{selectedVariant.overview.description}</p>
              
              {/* Instructor Information */}
              {currentLesson?.instructor && (
                <div className="mt-6 flex items-center gap-3 not-prose">
                  <Avatar className="h-12 w-12">
                    <AvatarImage 
                      src={instructorPhotos[currentLesson.instructor]} 
                      alt={currentLesson.instructor}
                    />
                    <AvatarFallback>
                      {currentLesson.instructor.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-muted-foreground">Instructor</p>
                    <p className="text-base font-medium text-foreground">{currentLesson.instructor}</p>
                  </div>
                </div>
              )}
              
              {selectedVariant.overview.examNumber && (
                <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm font-medium text-primary">
                    Exam: {selectedVariant.overview.examNumber}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
