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

        {/* Video Player */}
        <div className="mb-8">
          {currentLesson ? (
            <VideoEmbed videoId={currentLesson.videoId} title={currentLesson.title} />
          ) : (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Select a lesson to begin</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p className="text-foreground text-base leading-relaxed">{selectedVariant.overview.description}</p>
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

          {/* Right Column - Course Samples */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold mb-4">Course Samples</h3>
              <div className="space-y-2">
                {selectedVariant.modules.flatMap(module => module.lessons).map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(lesson)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      currentLesson?.id === lesson.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent border border-border'
                    }`}
                  >
                    <div className="space-y-2">
                      <p className="text-sm font-medium">{lesson.title}</p>
                      <div className="flex items-center gap-3 text-xs opacity-90">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {lesson.duration}
                        </span>
                      </div>
                      {lesson.instructor && (
                        <div className="flex items-center gap-2 mt-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage 
                              src={instructorPhotos[lesson.instructor]} 
                              alt={lesson.instructor}
                            />
                            <AvatarFallback className="text-xs">
                              {lesson.instructor.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs">
                            {lesson.instructor}
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
