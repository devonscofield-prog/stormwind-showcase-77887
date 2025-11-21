import { useState } from "react";
import { Course, Lesson, CourseVariant, instructorPhotos } from "@/lib/trainingSampleData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          <div className="mb-6">
            <Tabs value={selectedVariant.id} onValueChange={handleVariantChange}>
              <TabsList className="grid w-full max-w-md grid-cols-2">
                {course.variants.map((variant) => (
                  <TabsTrigger key={variant.id} value={variant.id}>
                    {variant.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
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
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="objectives">Objectives</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4 mt-6">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <p className="text-muted-foreground">{selectedVariant.overview.description}</p>
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
              </TabsContent>
              
              <TabsContent value="objectives" className="mt-6">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    {selectedVariant.overview.objectives && selectedVariant.overview.objectives.length > 0 ? (
                      <ul className="space-y-2">
                        {selectedVariant.overview.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">No objectives listed for this variant.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <Card className="glass-card">
                  <CardContent className="pt-6 space-y-4">
                    {selectedVariant.overview.difficulty && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Difficulty:</span>
                        <span className="text-sm text-muted-foreground">{selectedVariant.overview.difficulty}</span>
                      </div>
                    )}
                    {selectedVariant.overview.totalDuration && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">Total Duration:</span>
                        <span className="text-sm text-muted-foreground">{selectedVariant.overview.totalDuration}</span>
                      </div>
                    )}
                    {selectedVariant.overview.prerequisites && selectedVariant.overview.prerequisites.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Prerequisites:</h4>
                        <ul className="space-y-1">
                          {selectedVariant.overview.prerequisites.map((prereq, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{prereq}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-6">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    {selectedVariant.overview.links && selectedVariant.overview.links.length > 0 ? (
                      <div className="space-y-2">
                        {selectedVariant.overview.links.map((link, index) => (
                          <a 
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                          >
                            <span className="text-sm font-medium text-foreground">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No additional resources available.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {course.showLiveSchedule && (
              <Button className="w-full" size="lg">
                View Live Schedule
              </Button>
            )}
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
