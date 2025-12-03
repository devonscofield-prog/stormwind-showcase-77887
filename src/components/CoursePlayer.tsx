import { useState, useMemo } from "react";
import { Course, Lesson, CourseVariant, instructorPhotos } from "@/lib/trainingSampleData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, CheckCircle2, ChevronDown, BookOpen, Layers } from "lucide-react";
import { VideoEmbed } from "./VideoEmbed";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CoursePlayerProps {
  course: Course;
  onBack: () => void;
}

export const CoursePlayer = ({ course, onBack }: CoursePlayerProps) => {
  const [selectedVariant, setSelectedVariant] = useState<CourseVariant>(course.variants[0]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(
    course.variants[0]?.modules[0]?.lessons[0] || null
  );
  const [viewedLessons, setViewedLessons] = useState<Set<string>>(new Set());

  // Calculate total lessons and current position
  const { totalLessons, currentLessonIndex, allLessons } = useMemo(() => {
    const lessons = selectedVariant.modules.flatMap(m => m.lessons);
    const index = currentLesson ? lessons.findIndex(l => l.id === currentLesson.id) : 0;
    return { totalLessons: lessons.length, currentLessonIndex: index + 1, allLessons: lessons };
  }, [selectedVariant, currentLesson]);

  // Get default open modules (all modules open by default)
  const defaultOpenModules = useMemo(() => {
    return selectedVariant.modules.map(m => m.id);
  }, [selectedVariant]);

  // Handle variant change
  const handleVariantChange = (variantId: string) => {
    const newVariant = course.variants.find(v => v.id === variantId);
    if (newVariant) {
      setSelectedVariant(newVariant);
      setCurrentLesson(newVariant.modules[0]?.lessons[0] || null);
      setViewedLessons(new Set());
    }
  };

  // Handle lesson selection
  const handleLessonSelect = (lesson: Lesson) => {
    if (currentLesson) {
      setViewedLessons(prev => new Set(prev).add(currentLesson.id));
    }
    setCurrentLesson(lesson);
  };

  // Get lesson status
  const getLessonStatus = (lesson: Lesson): 'current' | 'viewed' | 'pending' => {
    if (currentLesson?.id === lesson.id) return 'current';
    if (viewedLessons.has(lesson.id)) return 'viewed';
    return 'pending';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="hover:bg-accent gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Button>
          
          {/* Variant Toggle */}
          {course.variants.length > 1 && (
            <div className="flex gap-2 bg-muted/50 p-1 rounded-lg">
              {course.variants.map((variant) => (
                <Button
                  key={variant.id}
                  variant={selectedVariant.id === variant.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleVariantChange(variant.id)}
                  className={cn(
                    "transition-all duration-200",
                    selectedVariant.id === variant.id 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "hover:bg-accent"
                  )}
                >
                  {variant.name}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Course Title with Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>{course.category}</span>
            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
            <span>{selectedVariant.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {course.title}
          </h1>
        </div>

        {/* Main Content Grid - Video + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Video Player - 3/4 width */}
          <div className="lg:col-span-3 space-y-4">
            {/* Video Container with Glow Effect */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                {currentLesson ? (
                  <VideoEmbed 
                    videoId={currentLesson.videoId} 
                    title={currentLesson.title} 
                    thumbnail={currentLesson.thumbnail}
                  />
                ) : (
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                    <p className="text-muted-foreground">Select a lesson to begin</p>
                  </div>
                )}
              </div>
            </div>

            {/* Current Lesson Info */}
            {currentLesson && (
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <BookOpen className="h-3 w-3" />
                        <span>Lesson {currentLessonIndex} of {totalLessons}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">{currentLesson.title}</h2>
                    </div>
                    
                    {/* Instructor Info */}
                    {currentLesson.instructor && (
                      <Link 
                        to="/mentoring" 
                        className="flex items-center gap-3 hover:bg-accent/50 rounded-lg p-2 -m-2 transition-colors group"
                      >
                        <Avatar className="h-10 w-10 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                          <AvatarImage 
                            src={instructorPhotos[currentLesson.instructor]} 
                            alt={currentLesson.instructor}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {currentLesson.instructor.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Instructor</p>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {currentLesson.instructor}
                          </p>
                        </div>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Course Overview */}
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  Course Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedVariant.overview.description}
                </p>
                
                {selectedVariant.overview.difficulty && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      selectedVariant.overview.difficulty === "Beginner" && "bg-green-500/10 text-green-500",
                      selectedVariant.overview.difficulty === "Intermediate" && "bg-yellow-500/10 text-yellow-500",
                      selectedVariant.overview.difficulty === "Advanced" && "bg-red-500/10 text-red-500"
                    )}>
                      {selectedVariant.overview.difficulty}
                    </span>
                    {selectedVariant.overview.examNumber && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Exam: {selectedVariant.overview.examNumber}
                      </span>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="bg-card/80 backdrop-blur border-border/50 sticky top-4">
              <CardContent className="pt-4 pb-2">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
                  <h3 className="font-semibold text-foreground">Course Content</h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {totalLessons} lessons
                  </span>
                </div>

                {/* Collapsible Modules */}
                <div className="max-h-[calc(100vh-300px)] overflow-y-auto pr-1 -mr-1">
                  <Accordion 
                    type="multiple" 
                    defaultValue={defaultOpenModules}
                    className="space-y-2"
                  >
                    {selectedVariant.modules.map((module, moduleIndex) => (
                      <AccordionItem 
                        key={module.id} 
                        value={module.id}
                        className="border border-border/50 rounded-lg overflow-hidden bg-muted/30"
                      >
                        <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-accent/50 transition-colors text-left">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 text-primary text-xs font-bold">
                              {moduleIndex + 1}
                            </span>
                            <span className="font-medium line-clamp-2 text-foreground">
                              {module.title.replace(/^Module \d+:\s*/i, '').replace(/^Day \d+:\s*/i, '')}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-1">
                          <div className="space-y-0.5 px-1">
                            {module.lessons.map((lesson) => {
                              const status = getLessonStatus(lesson);
                              return (
                                <button
                                  key={lesson.id}
                                  onClick={() => handleLessonSelect(lesson)}
                                  className={cn(
                                    "w-full text-left p-2.5 rounded-md transition-all duration-200 group",
                                    "flex items-start gap-2",
                                    status === 'current' 
                                      ? "bg-primary text-primary-foreground shadow-md" 
                                      : "hover:bg-accent/70"
                                  )}
                                >
                                  {/* Status Icon */}
                                  <div className={cn(
                                    "flex-shrink-0 mt-0.5",
                                    status === 'current' && "text-primary-foreground",
                                    status === 'viewed' && "text-green-500",
                                    status === 'pending' && "text-muted-foreground"
                                  )}>
                                    {status === 'current' && (
                                      <Play className="h-4 w-4 fill-current" />
                                    )}
                                    {status === 'viewed' && (
                                      <CheckCircle2 className="h-4 w-4" />
                                    )}
                                    {status === 'pending' && (
                                      <div className="w-4 h-4 rounded-full border-2 border-current opacity-50" />
                                    )}
                                  </div>

                                  {/* Lesson Info */}
                                  <div className="flex-1 min-w-0">
                                    <p className={cn(
                                      "text-sm font-medium line-clamp-2",
                                      status === 'current' 
                                        ? "text-primary-foreground" 
                                        : "text-foreground group-hover:text-foreground"
                                    )}>
                                      {lesson.title}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
