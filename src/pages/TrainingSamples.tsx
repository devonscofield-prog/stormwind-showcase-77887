import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePageView } from "@/hooks/usePageView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/CourseCard";
import { CoursePlayer } from "@/components/CoursePlayer";
import { sampleCourses, categories } from "@/lib/trainingSampleData";
import { GraduationCap, BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const TrainingSamples = () => {
  usePageView("Training Samples");
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Courses");
  
  const selectedCourse = courseId 
    ? sampleCourses.find(course => course.id === courseId) || null
    : null;
    
  const filteredCourses = activeCategory === "All Courses" 
    ? sampleCourses 
    : sampleCourses.filter(course => course.category === activeCategory);

  // Course player view
  if (selectedCourse) {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          <CoursePlayer 
            course={selectedCourse} 
            onBack={() => navigate("/training-samples")} 
          />
        </div>
      </div>
    );
  }

  // Course catalog view
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4 animate-fade-in relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-20 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
            <GraduationCap className="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Training Samples
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience our training platform firsthand with these sample course segments. 
            Explore different modules and get a feel for our comprehensive learning experience.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4 text-primary" />
              <span><strong className="text-foreground">{sampleCourses.length}</strong> Courses</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span><strong className="text-foreground">{categories.length - 1}</strong> Categories</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="relative mb-8">
            <TabsList className={cn(
              "w-full justify-start overflow-x-auto flex-nowrap h-auto gap-2 p-2",
              "bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl",
              "scrollbar-hide"
            )}>
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className={cn(
                    "relative px-5 py-2.5 rounded-lg font-medium whitespace-nowrap",
                    "transition-all duration-300",
                    "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                    "data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25",
                    "data-[state=inactive]:hover:bg-muted/50 data-[state=inactive]:text-muted-foreground",
                    "hover:scale-105"
                  )}
                >
                  {category}
                  {category !== "All Courses" && (
                    <span className={cn(
                      "ml-2 px-1.5 py-0.5 text-xs rounded-full",
                      "bg-current/10"
                    )}>
                      {sampleCourses.filter(c => c.category === category).length}
                    </span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              {filteredCourses.length === 0 ? (
                <div className="text-center py-20 px-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No courses available yet
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We're working on adding courses to this category. 
                    Check back soon or explore other categories.
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <div
                      key={course.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TrainingSamples;
