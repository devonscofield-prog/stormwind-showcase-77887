import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseSearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  selectedSubcategory: string;
  onSubcategoryChange: (subcategory: string) => void;
  subcategories: string[];
}

const CourseSearchBar = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  selectedSubcategory,
  onSubcategoryChange,
  subcategories,
}: CourseSearchBarProps) => {
  return (
    <>
      {/* Search Bar */}
      <div className="flex flex-col items-center justify-center gap-4 mb-6 max-w-2xl mx-auto">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by certification, skill, or topic..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
      </div>

      {/* Category and Subcategory Filters */}
      <div className="flex flex-col items-center justify-center gap-4 mb-6">
        <div className="flex flex-col items-center gap-4 w-full">
          <label className="text-sm font-medium text-muted-foreground">
            Filter by Category:
          </label>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => onCategoryChange(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {subcategories.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <label htmlFor="subcategory-select" className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Filter by Subcategory:
            </label>
            <Select value={selectedSubcategory} onValueChange={onSubcategoryChange}>
              <SelectTrigger className="w-full sm:w-[300px]" id="subcategory-select">
                <SelectValue placeholder="Select a subcategory" />
              </SelectTrigger>
              <SelectContent className="z-50">
                <SelectItem value="All Subcategories">
                  All Subcategories
                </SelectItem>
                {subcategories.map((subcategory) => (
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseSearchBar;
