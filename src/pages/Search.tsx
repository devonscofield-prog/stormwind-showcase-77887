import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchItems, SearchItem } from "@/lib/searchData";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "all";
  
  const [query, setQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [results, setResults] = useState<SearchItem[]>([]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      let searchResults = searchItems(query);
      
      // Filter by category if not "all"
      if (selectedCategory !== "all") {
        searchResults = searchResults.filter(item => item.category === selectedCategory);
      }
      
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, selectedCategory]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    const params = new URLSearchParams();
    if (newQuery) params.set("q", newQuery);
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    setSearchParams(params);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "all") params.set("category", category);
    setSearchParams(params);
  };

  const getCategoryColor = (category: SearchItem['category']) => {
    switch (category) {
      case 'Technology':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Course':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'Feature':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'Page':
        return 'bg-orange-500/10 text-orange-600 dark:text-orange-400';
      default:
        return 'bg-gray-500/10 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Search Results</h1>
          
          {/* Search Input */}
          <div className="mb-6 flex gap-4 flex-col md:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses, pages, features..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-9 pr-9 w-full"
              />
              {query && (
                <button
                  onClick={() => handleSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Course">Courses</SelectItem>
                <SelectItem value="Technology">Technologies</SelectItem>
                <SelectItem value="Feature">Features</SelectItem>
                <SelectItem value="Page">Pages</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          {query.length >= 2 && (
            <p className="text-muted-foreground mb-6">
              Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </p>
          )}

          {/* No Query Message */}
          {query.length < 2 && (
            <div className="text-center py-12">
              <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">Start Searching</h2>
              <p className="text-muted-foreground">
                Enter at least 2 characters to search for courses, pages, and features
              </p>
            </div>
          )}

          {/* No Results */}
          {query.length >= 2 && results.length === 0 && (
            <div className="text-center py-12">
              <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter settings
              </p>
              {selectedCategory !== "all" && (
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="text-primary hover:underline"
                >
                  Search in all categories
                </button>
              )}
            </div>
          )}

          {/* Results Grid */}
          {results.length > 0 && (
            <div className="grid gap-4">
              {results.map((item, index) => (
                <Link key={`${item.path}-${index}`} to={item.path}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <Badge 
                          variant="secondary"
                          className={cn(
                            "flex-shrink-0",
                            getCategoryColor(item.category)
                          )}
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-base mt-2">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    {item.keywords && item.keywords.length > 0 && (
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {item.keywords.slice(0, 5).map((keyword, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
