import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePageView } from "@/hooks/usePageView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/CourseCard";
import { CoursePlayer } from "@/components/CoursePlayer";
import { sampleCourses, categories, Course } from "@/lib/trainingSampleData";
import { GraduationCap } from "lucide-react";
const TrainingSamples = () => {
  usePageView("Training Samples");
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Courses");
  
  const selectedCourse = courseId 
    ? sampleCourses.find(course => course.id === courseId) || null
    : null;
    
  const filteredCourses = activeCategory === "All Courses" ? sampleCourses : sampleCourses.filter(course => course.category === activeCategory);
  if (selectedCourse) {
    return <div className="min-h-screen pt-20 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          <CoursePlayer course={selectedCourse} onBack={() => navigate("/training-samples")} />
        </div>
      </div>;
  }
  return <div className="min-h-screen pt-20 pb-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4 animate-fade-in relative">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4 pulse-glow relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent-green opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <GraduationCap className="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold shine-text">
            Training Samples
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience our training platform firsthand with these sample course segments. Explore different modules and get a feel for our comprehensive learning experience.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="w-full justify-start mb-8 overflow-x-auto flex-wrap h-auto gap-3 bg-muted/30 p-2 rounded-xl backdrop-blur-sm">
            {categories.map(category => <TabsTrigger 
                key={category} 
                value={category} 
                className="relative px-6 py-3 rounded-lg font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent-green data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 data-[state=inactive]:hover:bg-muted/50 data-[state=inactive]:text-muted-foreground hover:scale-105"
              >
                {category}
              </TabsTrigger>)}
          </TabsList>

          {categories.map(category => <TabsContent key={category} value={category} className="mt-0">
              {filteredCourses.length === 0 ? <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    No courses available in this category yet.
                  </p>
                </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => <CourseCard 
                      key={course.id} 
                      course={course}
                      className="stagger-item"
                    />)}
                </div>}
            </TabsContent>)}
        </Tabs>
      </div>
    </div>;
};
export default TrainingSamples;