import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { courseCatalogData, type Course } from "@/lib/courseCatalogData";
import CourseSearchBar from "@/components/courses/CourseSearchBar";
import CoursePagination from "@/components/courses/CoursePagination";
import CourseListItem from "@/components/courses/CourseListItem";

const COURSES_PER_PAGE = 50;

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    document.title = "Course Catalog - StormWind Studios";

    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    const categoryParam = searchParams.get("category");
    return categoryParam && Object.keys(courseCatalogData).includes(categoryParam)
      ? categoryParam
      : "All Courses";
  });
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("All Subcategories");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All Courses", ...Object.keys(courseCatalogData)];

  const getSubcategories = () => {
    if (selectedCategory === "All Courses") return [];
    const categoryData = courseCatalogData[selectedCategory as keyof typeof courseCatalogData];
    if (!categoryData) return [];
    return Object.keys(categoryData);
  };

  const subcategories = getSubcategories();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("All Subcategories");
  };

  const getFilteredCourses = () => {
    // Always show all courses including "Coming Soon"
    const filterComingSoon = (courses: Course[]) => courses;

    // If there's a search query, search across ALL categories
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      const searchFiltered: any = {};

      Object.entries(courseCatalogData).forEach(([category, subcategories]) => {
        const filteredSubcategories: any = {};

        Object.entries(subcategories as Record<string, Course[]>).forEach(([subcategory, courses]) => {
          const matchingCourses = courses.filter((course) => {
            const courseName = typeof course === 'string' ? course : course.name;
            return courseName.toLowerCase().includes(searchLower);
          });

          const filteredCourses = filterComingSoon(matchingCourses);

          if (filteredCourses.length > 0) {
            filteredSubcategories[subcategory] = filteredCourses;
          }
        });

        if (Object.keys(filteredSubcategories).length > 0) {
          searchFiltered[category] = filteredSubcategories;
        }
      });

      return searchFiltered;
    }

    // If "All Courses" is selected, show all courses from all categories
    if (selectedCategory === "All Courses") {
      const allFiltered: any = {};
      Object.entries(courseCatalogData).forEach(([category, subcategories]) => {
        const filteredSubcategories: any = {};
        Object.entries(subcategories as Record<string, Course[]>).forEach(([subcategory, courses]) => {
          const filteredCourses = filterComingSoon(courses);
          if (filteredCourses.length > 0) {
            filteredSubcategories[subcategory] = filteredCourses;
          }
        });
        if (Object.keys(filteredSubcategories).length > 0) {
          allFiltered[category] = filteredSubcategories;
        }
      });
      return allFiltered;
    }

    // If no search query, apply category/subcategory filters
    const categoryData = courseCatalogData[selectedCategory as keyof typeof courseCatalogData];
    if (!categoryData) return {};

    if (selectedSubcategory === "All Subcategories") {
      const filtered: any = {};
      Object.entries(categoryData).forEach(([subcategory, courses]) => {
        const filteredCourses = filterComingSoon(courses as Course[]);
        if (filteredCourses.length > 0) {
          filtered[subcategory] = filteredCourses;
        }
      });
      return { [selectedCategory]: filtered };
    } else {
      const courses = (categoryData as any)[selectedSubcategory];
      const filteredCourses = filterComingSoon(courses);
      if (filteredCourses.length === 0) return {};
      return {
        [selectedCategory]: {
          [selectedSubcategory]: filteredCourses
        }
      };
    }
  };

  const filteredCourses = getFilteredCourses();

  // Flatten courses for pagination
  const flattenedCourses = () => {
    const flattened: Array<{
      category: string;
      subcategory: string;
      course: Course;
      index: number;
    }> = [];

    Object.entries(filteredCourses).forEach(([category, subcategories]) => {
      Object.entries(subcategories as Record<string, Course[]>).forEach(([subcategory, courses]) => {
        courses.forEach((course, index) => {
          flattened.push({ category, subcategory, course, index });
        });
      });
    });

    return flattened;
  };

  const allCourses = flattenedCourses();
  const totalCourses = allCourses.length;
  const totalPages = Math.ceil(totalCourses / COURSES_PER_PAGE);

  // Get courses for current page
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const endIndex = startIndex + COURSES_PER_PAGE;
  const paginatedCourses = allCourses.slice(startIndex, endIndex);

  // Group paginated courses back into categories and subcategories
  const groupedPaginatedCourses = () => {
    const grouped: any = {};

    paginatedCourses.forEach(({ category, subcategory, course }) => {
      if (!grouped[category]) {
        grouped[category] = {};
      }
      if (!grouped[category][subcategory]) {
        grouped[category][subcategory] = [];
      }
      grouped[category][subcategory].push(course);
    });

    return grouped;
  };

  const displayCourses = groupedPaginatedCourses();

  // Reset to page 1 when filters change
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");
    setSearchParams(newParams);
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative z-10">
        <Navigation />

        {/* Main Content */}
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumb Navigation */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Course Catalog</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Hero Section */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground pb-2 leading-tight">
                Course Catalog
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore our comprehensive collection of IT and project management courses. Filter by category to find exactly what you need.
              </p>

              <CourseSearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                categories={categories}
                selectedSubcategory={selectedSubcategory}
                onSubcategoryChange={setSelectedSubcategory}
                subcategories={subcategories}
              />
            </div>

          {/* Courses List */}
          {isLoading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, catIndex) => (
                <div key={catIndex} className="bg-card rounded-xl border border-border p-4 sm:p-5 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="h-0.5 w-8" />
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-0.5 flex-1" />
                  </div>
                  <div className="grid gap-2">
                    {[...Array(8)].map((_, courseIndex) => (
                      <div key={courseIndex} className="flex items-start gap-2 p-2.5 rounded-lg bg-muted/30">
                        <Skeleton className="w-1.5 h-1.5 rounded-full mt-0.5" />
                        <Skeleton className="h-4 flex-1" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Skeleton className="h-3 w-32 mx-auto" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div key={currentPage} className="space-y-6 animate-fade-in">
                {Object.entries(displayCourses).map(([category, subcategories]) => (
                <div key={category} className="space-y-6">
                  {Object.entries(subcategories as Record<string, Course[]>).map(([subcategory, courses]) => (
                    <div
                      key={subcategory}
                      className="animate-fade-in bg-card rounded-xl border border-border p-4 sm:p-5 shadow-lg hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-0.5 w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                          <h2 className="text-lg sm:text-xl font-bold text-foreground">
                            {subcategory}
                          </h2>
                          <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                        </div>

                      <div className="grid gap-2">
                        {courses.map((course, index) => (
                          <CourseListItem key={index} course={course} index={index} />
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground text-center">
                          {courses.length} course{courses.length !== 1 ? 's' : ''} in this subcategory
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <CoursePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            </>
          )}

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              * DoD 8140 Aligned Certification
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Courses;
