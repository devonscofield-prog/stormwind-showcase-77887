import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePageView } from "@/hooks/usePageView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCardSkeleton } from "@/components/CourseCardSkeleton";
import { CoursePlayer } from "@/components/CoursePlayer";
import { TechBackground } from "@/components/TechBackground";
import { Navigation } from "@/components/Navigation";
import { VariantCard } from "@/components/VariantCard";
import { sampleCourses, categories, flattenCourses } from "@/lib/trainingSampleData";
import { GraduationCap, BookOpen, Sparkles, Clock, Shield, Cloud, Server, Brain, Network, FolderKanban, Layers, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

// Category icons mapping
const categoryIcons: Record<string, React.ElementType> = {
  "All Courses": Layers,
  "Bytes": Sparkles,
  "Cybersecurity": Shield,
  "Cloud": Cloud,
  "Microsoft": Server,
  "AI": Brain,
  "Networking": Network,
  "ITIL": FolderKanban,
  "Security Awareness": Lock,
  "Project Management": FolderKanban
};
const TrainingSamples = () => {
  usePageView("Training Samples");
  const {
    courseId,
    variantId
  } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [isLoading, setIsLoading] = useState(true);

  // Flatten courses for display
  const flattenedCourses = useMemo(() => flattenCourses(sampleCourses), []);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const selectedCourse = courseId ? sampleCourses.find(course => course.id === courseId) || null : null;
  const filteredVariants = activeCategory === "All Courses" ? flattenedCourses : activeCategory === "Bytes" ? flattenedCourses.filter(v => v.isByte) : flattenedCourses.filter(v => v.categories.includes(activeCategory));

  // Calculate total lessons from all variants
  const totalLessons = flattenedCourses.reduce((acc, v) => acc + v.lessonCount, 0);

  // Transition state for smooth view changes
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPlayer, setShowPlayer] = useState(!!selectedCourse);

  // Handle view transitions
  useEffect(() => {
    if (selectedCourse && !showPlayer) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setShowPlayer(true);
        setIsTransitioning(false);
      }, 150);
      return () => clearTimeout(timer);
    } else if (!selectedCourse && showPlayer) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setShowPlayer(false);
        setIsTransitioning(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [selectedCourse, showPlayer]);

  // Course player view
  if (showPlayer && selectedCourse) {
    return <div className={cn("min-h-screen pt-20 pb-16 transition-all duration-300 relative bg-[#0f1419]", isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0")}>
        <Navigation />
        <TechBackground />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <CoursePlayer course={selectedCourse} initialVariantId={variantId} onBack={() => navigate("/training-samples")} />
        </div>
      </div>;
  }

  // Course catalog view
  return <div className={cn("min-h-screen pt-20 pb-16 overflow-hidden transition-all duration-300 relative bg-[#0f1419]", isTransitioning ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0")}>
      <Navigation />
      <TechBackground />
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          {/* Animated icon */}
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4 group">
            <GraduationCap className="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          {/* Title with shimmer effect */}
          <h1 className="text-5xl md:text-6xl font-bold relative">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
              Training Samples
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience our training platform firsthand with these sample course segments. 
            Explore different modules and get a feel for our comprehensive learning experience.
          </p>

          {/* Enhanced stats row */}
          
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="relative mb-10">
            <TabsList className={cn("w-full justify-start overflow-x-auto flex-nowrap h-auto gap-2 p-2", "bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl", "scrollbar-hide shadow-lg shadow-background/50")}>
              {categories.map(category => {
              const IconComponent = categoryIcons[category] || Layers;
              const count = category === "All Courses" ? flattenedCourses.length : category === "Bytes" ? flattenedCourses.filter(v => v.isByte).length : flattenedCourses.filter(v => v.categories.includes(category)).length;
              return <TabsTrigger key={category} value={category} className={cn("relative px-4 md:px-5 py-2.5 rounded-xl font-medium whitespace-nowrap", "transition-all duration-300 flex items-center gap-2", "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground", "data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25", "data-[state=inactive]:hover:bg-muted/50 data-[state=inactive]:text-muted-foreground", "hover:scale-105 active:scale-95")}>
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{category}</span>
                    <span className={cn("ml-1 px-2 py-0.5 text-xs rounded-full font-bold", "bg-background/20")}>
                      {count}
                    </span>
                  </TabsTrigger>;
            })}
            </TabsList>
            
            {/* Scroll fade indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none rounded-l-2xl" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none rounded-r-2xl" />
          </div>

          {categories.map(category => <TabsContent key={category} value={category} className="mt-0 animate-fade-in">
              {isLoading ? <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({
              length: 6
            }).map((_, index) => <div key={index} className="animate-scale-in" style={{
              animationDelay: `${index * 75}ms`,
              animationFillMode: 'both'
            }}>
                      <CourseCardSkeleton />
                    </div>)}
                </div> : filteredVariants.length === 0 ? <div className="text-center py-20 px-4">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center border border-border/50">
                    <BookOpen className="w-10 h-10 text-muted-foreground/50" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    No courses available yet
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We're working on adding courses to this category. 
                    Check back soon or explore other categories.
                  </p>
                </div> : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVariants.map((variant, index) => <div key={variant.id} className="animate-scale-in" style={{
              animationDelay: `${index * 75}ms`,
              animationFillMode: 'both'
            }}>
                      <VariantCard variant={variant} />
                    </div>)}
                </div>}
            </TabsContent>)}
        </Tabs>
      </div>
    </div>;
};
export default TrainingSamples;