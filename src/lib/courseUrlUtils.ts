import { courseUrlOverrides } from './courseUrlOverrides';
import { getVerifiedCourseUrl as getVerifiedUrl } from './verifiedCourseUrls';

/**
 * Converts a course name to a StormWind Studios URL
 * 
 * URL Pattern: https://stormwindstudios.com/courses/[slug]/
 * 
 * Slug generation rules (based on analysis of stormwindstudios.com URLs):
 * - All lowercase
 * - Spaces become hyphens
 * - & becomes "and"
 * - + is removed
 * - Parentheses and their content are included but parentheses are removed
 * - Colons, semicolons, commas, periods, apostrophes are removed
 * - Multiple hyphens collapse to single hyphen
 * - Leading/trailing hyphens are removed
 * 
 * @param courseName - The display name of the course
 * @returns The full URL to the course on stormwindstudios.com
 * @deprecated Use getVerifiedCourseUrl instead for verified URLs only
 */
export const getCourseUrl = (courseName: string): string => {
  // Check for manual override first
  if (courseUrlOverrides[courseName]) {
    return courseUrlOverrides[courseName];
  }

  // Generate slug from course name
  const slug = courseName
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\+/g, '')
    .replace(/[()]/g, '')
    .replace(/[:;,.'®™©]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return `https://stormwindstudios.com/courses/${slug}/`;
};

/**
 * Gets a verified course URL from the official PDF documentation
 * Returns null if the course URL cannot be verified
 * 
 * @param courseName - The display name of the course
 * @returns The verified URL or null if unverified
 */
export const getVerifiedCourseUrl = (courseName: string): string | null => {
  // First check the verified URLs from PDF
  const verifiedUrl = getVerifiedUrl(courseName);
  if (verifiedUrl) {
    return verifiedUrl;
  }
  
  // Fall back to manual overrides (these are also considered verified)
  if (courseUrlOverrides[courseName]) {
    return courseUrlOverrides[courseName];
  }
  
  // No verified URL - return null to disable link
  return null;
};

/**
 * Gets the course name from a Course object or string
 */
export const getCourseName = (course: string | { name: string; isBytes?: boolean; isComingSoon?: boolean; isWebinar?: boolean }): string => {
  return typeof course === 'string' ? course : course.name;
};
