import { useState } from "react";
import { Course, Lesson, CourseVariant, instructorPhotos } from "@/lib/trainingSampleData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";
import { VideoEmbed } from "./VideoEmbed";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
          className="mb-6 hover:bg-accent hover:scale-105 transition-all duration-300 group animate-fade-in"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </Button>

        {/* Course Title */}
        <h1 className="text-4xl font-bold mb-6 text-gradient-primary underline-animate animate-fade-in">
          {course.title}
        </h1>

        {/* Variant Toggle */}
        {course.variants.length > 1 && (
          <div className="mb-6 flex gap-2 relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {course.variants.map((variant) => (
              <Button
                key={variant.id}
                variant={selectedVariant.id === variant.id ? "default" : "outline"}
                onClick={() => handleVariantChange(variant.id)}
                className={`
                  relative overflow-hidden transition-all duration-300
                  ${selectedVariant.id === variant.id 
                    ? 'bg-gradient-to-r from-primary to-primary-glow shadow-lg shadow-primary/20 scale-105' 
                    : 'glass-card hover:scale-105 hover:shadow-md'
                  }
                `}
              >
                {variant.name}
              </Button>
            ))}
          </div>
        )}

        {/* Video and Course Samples */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Video Player */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative animated-gradient-border">
                {currentLesson ? (
                  <VideoEmbed videoId={currentLesson.videoId} title={currentLesson.title} />
                ) : (
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Select a lesson to begin</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Course Samples */}
          <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="glass-card max-h-[500px] flex flex-col animated-gradient-border float-gentle">
              <CardContent className="pt-6 pb-4 flex flex-col flex-1 min-h-0">
                <h3 className="text-lg font-semibold mb-4 flex-shrink-0 text-gradient-primary">Course Samples</h3>
                <div className="flex-1 overflow-y-auto pr-2 space-y-1.5 min-h-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/50 [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-primary [&::-webkit-scrollbar-thumb]:to-primary-glow [&::-webkit-scrollbar-thumb]:rounded-full">
                  {selectedVariant.modules.flatMap(module => module.lessons).map((lesson, index) => (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(lesson)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 group relative overflow-hidden stagger-item ${
                        currentLesson?.id === lesson.id
                          ? 'bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg lesson-active scale-105'
                          : 'hover:bg-accent/50 border border-border hover:border-primary/30 hover:scale-[1.02] hover:shadow-md hover:shadow-primary/10'
                      }`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shimmer-effect opacity-0 group-hover:opacity-100"></div>
                      <p className="text-sm font-medium line-clamp-2 relative z-10 group-hover:text-gradient-primary transition-all">
                        {lesson.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs opacity-80 mt-1 relative z-10">
                        <Clock className={`h-3 w-3 ${currentLesson?.id === lesson.id ? 'bounce-icon' : 'group-hover:bounce-icon'}`} />
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
        <Card className="glass-card animated-gradient-border float-gentle animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardContent className="pt-6">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p className="text-foreground text-base leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
                {selectedVariant.overview.description}
              </p>
              
              {/* Instructor Information */}
              {currentLesson?.instructor && (
                <Link 
                  to="/mentoring" 
                  className="mt-6 flex items-center gap-4 not-prose glass-card hover:bg-accent/50 rounded-lg p-4 -m-3 transition-all duration-300 cursor-pointer group hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer-effect opacity-0 group-hover:opacity-100"></div>
                  <Avatar className="h-14 w-14 ring-2 ring-primary/20 avatar-glow group-hover:ring-primary/50 transition-all duration-300 relative z-10">
                    <AvatarImage 
                      src={instructorPhotos[currentLesson.instructor]} 
                      alt={currentLesson.instructor}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                      {currentLesson.instructor.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-1">Instructor</p>
                    <p className="text-base font-medium text-foreground group-hover:text-gradient-primary transition-all">
                      {currentLesson.instructor}
                    </p>
                  </div>
                  <ArrowLeft className="ml-auto h-5 w-5 rotate-180 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 relative z-10" />
                </Link>
              )}
              
              {selectedVariant.overview.examNumber && (
                <div className="mt-6 p-5 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-lg border border-primary/20 animate-fade-in relative overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300" style={{ animationDelay: '0.7s' }}>
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center float-gentle">
                      <span className="text-lg">🎓</span>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Certification Exam</p>
                      <p className="text-base font-semibold text-gradient-primary">
                        {selectedVariant.overview.examNumber}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
