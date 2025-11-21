export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoId: string;
  instructor?: string; // Instructor name for the lesson
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CourseVariant {
  id: string;
  name: string; // "Full Course" or "Exam Crash"
  overview: {
    description: string;
    examNumber?: string;
    objectives?: string[];
    prerequisites?: string[];
    difficulty?: "Beginner" | "Intermediate" | "Advanced";
    totalDuration?: string; // e.g., "8 hours"
    links?: { label: string; url: string }[];
  };
  modules: Module[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  thumbnail?: string;
  variants: CourseVariant[]; // Array of variants (Full Course, Exam Crash, etc.)
  showLiveSchedule?: boolean;
}

// Instructor photo mapping - maps instructor names to their photo assets
export const instructorPhotos: Record<string, string> = {
  "Abdel Salem": "/src/assets/abdel-salem.png",
  "Ashley Hunt": "/src/assets/ashley-hunt.png",
  "Ben Burich": "/src/assets/ben-burich.png",
  "Chris Paul": "/src/assets/chris-paul.png",
  "Dan Young": "/src/assets/dan-young.png",
  "Guil Hernandez": "/src/assets/guil-hernandez.png",
  "Jason Yates": "/src/assets/jason-yates.png",
  "Mike Pfeiffer": "/src/assets/mike-pfeiffer.png",
  "Raymond Lacoste": "/src/assets/raymond-lacoste.png",
  "Sam Burr": "/src/assets/sam-burr.png",
  "Shane Sexton": "/src/assets/shane-sexton.png",
  "Shaun Pelling": "/src/assets/shaun-pelling.png",
  "Spike Xavier": "/src/assets/spike-xavier.png",
  "Will Panek": "/src/assets/will-panek.png",
};

// Sample courses - replace with your actual data
// Use this template to add new courses:
/*
{
  id: "course-slug",  // Lowercase with hyphens (auto-generated from title)
  title: "YOUR COURSE TITLE HERE",
  category: "Microsoft", // One of: Microsoft, Cloud, Cybersecurity, AI & Machine Learning, Security Awareness, Business Skills
  thumbnail: "/src/assets/course-image.jpg", // Optional
  variants: [
    {
      id: "full-course",
      name: "Full Course",
      overview: {
        description: "YOUR FULL COURSE DESCRIPTION HERE",
        examNumber: "AZ-900", // Optional - e.g., "AZ-900", "SY0-701"
        objectives: [
          "First learning objective",
          "Second learning objective",
          "Third learning objective"
        ],
        prerequisites: ["Basic understanding of...", "Familiarity with..."], // Optional
        difficulty: "Intermediate", // Optional: "Beginner", "Intermediate", "Advanced"
        totalDuration: "8 hours", // Optional: Total course duration
        links: [ // Optional
          { label: "Exam Information", url: "https://example.com" },
          { label: "Study Guide", url: "https://example.com" }
        ]
      },
      modules: [
        {
          id: "module-1",
          title: "Module 1 Title or Day 1: Title",
          lessons: [
            {
              id: "lesson-1",
              title: "Lesson Title Here",
              duration: "TBD", // Use "TBD" or estimate like "25 min"
              videoId: "pending_video_1", // Use pending_video_X format for easy replacement
              instructor: "Instructor Full Name" // Must match name in instructorPhotos mapping
            }
          ]
        }
      ]
    },
    {
      id: "exam-crash",
      name: "Exam Crash",
      overview: {
        description: "YOUR EXAM CRASH DESCRIPTION HERE - Focused exam prep version",
        examNumber: "AZ-900",
        objectives: [
          "Focus area 1",
          "Focus area 2"
        ],
        difficulty: "Intermediate",
        totalDuration: "4 hours"
      },
      modules: [
        {
          id: "crash-module-1",
          title: "Crash Module 1 Title",
          lessons: [
            {
              id: "crash-lesson-1",
              title: "Crash Lesson Title",
              duration: "TBD",
              videoId: "pending_video_crash_1",
              instructor: "Instructor Full Name"
            }
          ]
        }
      ]
    }
  ],
  showLiveSchedule: true // Set to false if no live schedule button needed
}
*/

export const sampleCourses: Course[] = [
  {
    id: "sample-microsoft-course",
    title: "Microsoft Azure Fundamentals",
    category: "Microsoft",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "This course provides foundational knowledge of cloud services and how those services are provided with Microsoft Azure. It covers core Azure concepts, Azure architecture, and Azure management and governance.",
          examNumber: "AZ-900",
          objectives: [
            "Describe cloud computing concepts",
            "Describe Azure architecture and services",
            "Describe Azure management and governance",
            "Understand Azure pricing and support"
          ],
          prerequisites: ["Basic understanding of IT concepts", "Familiarity with cloud computing"],
          difficulty: "Beginner",
          totalDuration: "8 hours",
          links: [
            { label: "Exam Information", url: "#" },
            { label: "Study Guide", url: "#" }
          ]
        },
        modules: [
          {
            id: "day-1",
            title: "Day 1: Cloud Concepts and Azure Fundamentals",
            lessons: [
              {
                id: "lesson-1",
                title: "Introduction to Cloud Computing",
                duration: "25 min",
                videoId: "pending_video_1",
                instructor: "Sample Instructor"
              },
              {
                id: "lesson-2",
                title: "Understanding Azure Services",
                duration: "30 min",
                videoId: "pending_video_2",
                instructor: "Sample Instructor"
              },
              {
                id: "lesson-3",
                title: "Azure Architecture Components",
                duration: "20 min",
                videoId: "pending_video_3",
                instructor: "Sample Instructor"
              }
            ]
          },
          {
            id: "day-2",
            title: "Day 2: Azure Management and Governance",
            lessons: [
              {
                id: "lesson-4",
                title: "Azure Resource Manager",
                duration: "28 min",
                videoId: "pending_video_4",
                instructor: "Sample Instructor"
              },
              {
                id: "lesson-5",
                title: "Azure Governance Features",
                duration: "22 min",
                videoId: "pending_video_5",
                instructor: "Sample Instructor"
              }
            ]
          }
        ]
      },
      {
        id: "exam-crash",
        name: "Exam Crash",
        overview: {
          description: "Fast-track your AZ-900 exam preparation with this focused crash course covering all essential topics and exam objectives.",
          examNumber: "AZ-900",
          objectives: [
            "Master key exam objectives quickly",
            "Review critical Azure concepts",
            "Practice with exam-style scenarios"
          ],
          difficulty: "Intermediate",
          totalDuration: "4 hours"
        },
        modules: [
          {
            id: "crash-module-1",
            title: "Crash Module 1: Core Concepts Review",
            lessons: [
              {
                id: "crash-lesson-1",
                title: "Cloud Computing Essentials",
                duration: "15 min",
                videoId: "pending_video_crash_1",
                instructor: "Sample Instructor"
              },
              {
                id: "crash-lesson-2",
                title: "Azure Services Overview",
                duration: "18 min",
                videoId: "pending_video_crash_2",
                instructor: "Sample Instructor"
              }
            ]
          }
        ]
      }
    ],
    showLiveSchedule: true
  }
];

export const categories = [
  "All Courses",
  "Microsoft",
  "Cloud",
  "Cybersecurity",
  "AI & Machine Learning",
  "Security Awareness",
  "Business Skills"
];
