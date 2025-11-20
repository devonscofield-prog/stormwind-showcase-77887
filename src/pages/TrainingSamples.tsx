import { useState } from "react";
import { usePageView } from "@/hooks/usePageView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/CourseCard";
import { CoursePlayer } from "@/components/CoursePlayer";
import { sampleCourses, categories, Course } from "@/lib/trainingSampleData";
import { GraduationCap } from "lucide-react";
const TrainingSamples = () => {
  usePageView("Training Samples");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const filteredCourses = activeCategory === "All Courses" ? sampleCourses : sampleCourses.filter(course => course.category === activeCategory);
  if (selectedCourse) {
    return <div className="min-h-screen pt-20 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          <CoursePlayer course={selectedCourse} onBack={() => setSelectedCourse(null)} />
        </div>
      </div>;
  }
  return <div className="min-h-screen pt-20 pb-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Training Samples
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Experience our training platform firsthand with these sample course segments. Explore different modules and get a feel for our comprehensive learning experience.</p>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="w-full justify-start mb-8 overflow-x-auto flex-wrap h-auto gap-2 bg-transparent">
            {categories.map(category => <TabsTrigger key={category} value={category} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {category}
              </TabsTrigger>)}
          </TabsList>

          {categories.map(category => <TabsContent key={category} value={category} className="mt-0">
              {filteredCourses.length === 0 ? <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    No courses available in this category yet.
                  </p>
                </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {filteredCourses.map(course => <CourseCard key={course.id} title={course.title} category={course.category} description={course.overview.description} thumbnail={course.thumbnail} onClick={() => setSelectedCourse(course)} />)}
                </div>}
            </TabsContent>)}
        </Tabs>
      </div>
    </div>;
};
export default TrainingSamples;