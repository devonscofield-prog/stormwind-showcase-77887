import { useState } from "react";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, ExternalLink, ArrowLeft } from "lucide-react";
import { Course, Lesson } from "@/lib/trainingSampleData";

interface CoursePlayerProps {
  course: Course;
  onBack: () => void;
}

export const CoursePlayer = ({ course, onBack }: CoursePlayerProps) => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(
    course.modules[0]?.lessons[0] || null
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Back Button */}
      <Button variant="ghost" onClick={onBack} className="gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Courses
      </Button>

      {/* Video Player */}
      <div className="glass-card p-4 rounded-xl">
        {currentLesson ? (
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{course.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">{currentLesson.title}</p>
            </div>
            <VideoEmbed videoId={currentLesson.videoId} title={currentLesson.title} />
          </div>
        ) : (
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Select a lesson to begin</p>
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Overview */}
        <div className="lg:col-span-1">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Course Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.overview.description}
                  </p>
                  
                  {course.overview.examNumber && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Exam Number</h4>
                      <p className="text-sm text-primary font-mono">
                        {course.overview.examNumber}
                      </p>
                    </div>
                  )}

                  {course.overview.objectives && course.overview.objectives.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Learning Objectives</h4>
                      <ul className="space-y-2">
                        {course.overview.objectives.map((objective, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {course.overview.links && course.overview.links.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Supplemental Links</h4>
                      <div className="space-y-2">
                        {course.overview.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline flex items-center gap-2"
                          >
                            {link.label}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.showLiveSchedule && (
                    <Button className="w-full" variant="default">
                      VIEW LIVE SCHEDULE
                    </Button>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right: Modules */}
        <div className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Course Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue={course.modules[0]?.id} className="w-full">
                {course.modules.map((module) => (
                  <AccordionItem key={module.id} value={module.id}>
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-1">
                        {module.lessons.map((lesson) => {
                          const isActive = currentLesson?.id === lesson.id;
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => setCurrentLesson(lesson)}
                              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                                isActive
                                  ? "bg-primary/10 text-primary"
                                  : "hover:bg-muted/50 text-foreground"
                              }`}
                            >
                              <Play className={`w-4 h-4 flex-shrink-0 ${isActive ? "fill-current" : ""}`} />
                              <span className="flex-1 text-left text-sm font-medium">
                                {lesson.title}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {lesson.duration}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
