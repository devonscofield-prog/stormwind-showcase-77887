import { useState, useMemo, useEffect, useCallback } from "react";
import { Course, Lesson, CourseVariant, instructorPhotos } from "@/lib/trainingSampleData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, ChevronDown, BookOpen, Layers, ChevronLeft, ChevronRight } from "lucide-react";
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
  initialVariantId?: string;
  onBack: () => void;
}

interface CourseProgress {
  currentLessonId: string | null;
  viewedLessonIds: string[];
}

const getStorageKey = (courseId: string, variantId: string) => 
  `course-progress-${courseId}-${variantId}`;

const loadProgress = (courseId: string, variantId: string): CourseProgress | null => {
  try {
    const stored = localStorage.getItem(getStorageKey(courseId, variantId));
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const saveProgress = (courseId: string, variantId: string, progress: CourseProgress) => {
  try {
    localStorage.setItem(getStorageKey(courseId, variantId), JSON.stringify(progress));
  } catch {
    // localStorage might be full or disabled
  }
};

export const CoursePlayer = ({ course, initialVariantId, onBack }: CoursePlayerProps) => {
  const [selectedVariant, setSelectedVariant] = useState<CourseVariant>(() => {
    if (initialVariantId) {
      const variant = course.variants.find(v => v.id === initialVariantId);
      if (variant) return variant;
    }
    return course.variants[0];
  });
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [viewedLessons, setViewedLessons] = useState<Set<string>>(new Set());
  const [isInitialized, setIsInitialized] = useState(false);

  // Find lesson by ID across all modules
  const findLessonById = useCallback((variant: CourseVariant, lessonId: string): Lesson | null => {
    for (const module of variant.modules) {
      const lesson = module.lessons.find(l => l.id === lessonId);
      if (lesson) return lesson;
    }
    return null;
  }, []);

  // Initialize progress from localStorage
  useEffect(() => {
    const savedProgress = loadProgress(course.id, selectedVariant.id);
    
    if (savedProgress) {
      // Restore current lesson
      if (savedProgress.currentLessonId) {
        const lesson = findLessonById(selectedVariant, savedProgress.currentLessonId);
        setCurrentLesson(lesson || selectedVariant.modules[0]?.lessons[0] || null);
      } else {
        setCurrentLesson(selectedVariant.modules[0]?.lessons[0] || null);
      }
      
      // Restore viewed lessons
      setViewedLessons(new Set(savedProgress.viewedLessonIds));
    } else {
      // No saved progress, start fresh
      setCurrentLesson(selectedVariant.modules[0]?.lessons[0] || null);
      setViewedLessons(new Set());
    }
    
    setIsInitialized(true);
  }, [course.id, selectedVariant, findLessonById]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return;
    
    saveProgress(course.id, selectedVariant.id, {
      currentLessonId: currentLesson?.id || null,
      viewedLessonIds: Array.from(viewedLessons)
    });
  }, [course.id, selectedVariant.id, currentLesson, viewedLessons, isInitialized]);

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

  // Handle variant change - progress will be loaded from localStorage via useEffect
  const handleVariantChange = (variantId: string) => {
    const newVariant = course.variants.find(v => v.id === variantId);
    if (newVariant) {
      setIsInitialized(false);
      setSelectedVariant(newVariant);
    }
  };

  // Handle lesson selection
  const handleLessonSelect = (lesson: Lesson) => {
    if (currentLesson) {
      setViewedLessons(prev => new Set(prev).add(currentLesson.id));
    }
    setCurrentLesson(lesson);
  };

  // Navigation handlers
  const goToPreviousLesson = () => {
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson?.id);
    if (currentIndex > 0) {
      handleLessonSelect(allLessons[currentIndex - 1]);
    }
  };

  const goToNextLesson = () => {
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson?.id);
    if (currentIndex < allLessons.length - 1) {
      handleLessonSelect(allLessons[currentIndex + 1]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && e.altKey) {
        goToPreviousLesson();
      } else if (e.key === 'ArrowRight' && e.altKey) {
        goToNextLesson();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLesson, allLessons]);


  const canGoPrevious = currentLessonIndex > 1;
  const canGoNext = currentLessonIndex < totalLessons;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
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
                    trackingMetadata={{
                      courseId: course.id,
                      courseName: course.title,
                      variantId: selectedVariant.id,
                      variantName: selectedVariant.name,
                      lessonId: currentLesson.id,
                      lessonTitle: currentLesson.title,
                      instructor: currentLesson.instructor
                    }}
                  />
                ) : (
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                    <p className="text-muted-foreground">Select a lesson to begin</p>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={goToPreviousLesson}
                disabled={!canGoPrevious}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              <span className="text-sm text-muted-foreground">
                Lesson {currentLessonIndex} of {totalLessons}
              </span>
              
              <Button
                variant="outline"
                onClick={goToNextLesson}
                disabled={!canGoNext}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
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
                        <span className="text-primary/60">•</span>
                        <span className="text-primary text-[10px]">Alt + ← / →</span>
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
            <div className="sticky top-4">
              {/* Sidebar Container with Enhanced Glow and Entrance Animation */}
              <div className="relative group/sidebar animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'backwards' }}>
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-xl blur-sm opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-500" />
                <Card className="relative bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-xl border-border/50 shadow-xl">
                  <CardContent className="pt-5 pb-3">
                    {/* Header with Gradient Accent */}
                    <div className="relative mb-5 pb-4 animate-fade-in" style={{ animationDelay: '250ms', animationFillMode: 'backwards' }}>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-foreground tracking-tight text-lg">Course Content</h3>
                        <span className="text-xs font-medium bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 animate-scale-in" style={{ animationDelay: '350ms', animationFillMode: 'backwards' }}>
                          {totalLessons} lessons
                        </span>
                      </div>
                      {/* Gradient underline */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    </div>

                    {/* Collapsible Modules with Custom Scrollbar */}
                    <div className="max-h-[calc(100vh-350px)] overflow-y-auto pr-2 -mr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40">
                      <Accordion 
                        type="multiple" 
                        defaultValue={defaultOpenModules}
                        className="space-y-2.5"
                      >
                        {selectedVariant.modules.map((module, moduleIndex) => {
                          const hasCurrentLesson = module.lessons.some(l => l.id === currentLesson?.id);
                          return (
                            <AccordionItem 
                              key={module.id} 
                              value={module.id}
                              className={cn(
                                "border rounded-xl overflow-hidden transition-all duration-300 animate-fade-in",
                                hasCurrentLesson 
                                  ? "border-primary/30 bg-gradient-to-r from-primary/5 to-transparent shadow-sm" 
                                  : "border-border/40 bg-muted/20 hover:border-border/60 hover:bg-muted/30"
                              )}
                              style={{ animationDelay: `${400 + moduleIndex * 75}ms`, animationFillMode: 'backwards' }}
                            >
                              <AccordionTrigger className="px-3 py-3 hover:no-underline transition-all text-left group/trigger">
                                <div className="flex items-start gap-3 text-sm w-full">
                                  <span className={cn(
                                    "flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold transition-all duration-200 shrink-0",
                                    hasCurrentLesson 
                                      ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md" 
                                      : "bg-gradient-to-br from-muted to-muted/80 text-muted-foreground group-hover/trigger:from-primary/20 group-hover/trigger:to-primary/10 group-hover/trigger:text-primary"
                                  )}>
                                    {moduleIndex + 1}
                                  </span>
                                  <span className="font-semibold text-foreground flex-1 group-hover/trigger:text-primary transition-colors leading-snug">
                                    {module.title.replace(/^Module \d+:\s*/i, '').replace(/^Day \d+:\s*/i, '')}
                                  </span>
                                  <span className="text-[10px] text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                                    {module.lessons.length}
                                  </span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pb-2">
                                <div className="space-y-1 px-2 pt-1">
                                  {module.lessons.map((lesson, lessonIndex) => {
                                    const isCurrent = currentLesson?.id === lesson.id;
                                    return (
                                      <button
                                        key={lesson.id}
                                        onClick={() => handleLessonSelect(lesson)}
                                        className={cn(
                                          "w-full text-left p-3 rounded-lg transition-all duration-200 group/lesson",
                                          "flex items-start gap-3 relative overflow-hidden",
                                          isCurrent 
                                            ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/25" 
                                            : "hover:bg-accent/60 hover:shadow-sm"
                                        )}
                                      >
                                        {/* Left accent bar for current lesson */}
                                        {isCurrent && (
                                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-foreground/30 rounded-full" />
                                        )}
                                        
                                        {/* Lesson Number/Play Icon */}
                                        <div className={cn(
                                          "flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium transition-all",
                                          isCurrent 
                                            ? "bg-primary-foreground/20 text-primary-foreground" 
                                            : "bg-muted text-muted-foreground group-hover/lesson:bg-primary/10 group-hover/lesson:text-primary"
                                        )}>
                                          {isCurrent ? (
                                            <Play className="h-3.5 w-3.5 fill-current" />
                                          ) : (
                                            <span>{lessonIndex + 1}</span>
                                          )}
                                        </div>

                                        {/* Lesson Info */}
                                        <div className="flex-1 min-w-0">
                                          <p className={cn(
                                            "text-sm font-medium line-clamp-2 transition-colors",
                                            isCurrent 
                                              ? "text-primary-foreground" 
                                              : "text-foreground/80 group-hover/lesson:text-foreground"
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
                          );
                        })}
                      </Accordion>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
