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
    id: "comptia-security-plus-sy0-701",
    title: "CompTIA Security+ (SY0-701)",
    category: "Cybersecurity",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "Prepare for the CompTIA Security+ certification exam through this comprehensive instructor-led online training course. Master the skills needed to assess enterprise security postures and implement effective security solutions. Monitor and secure modern hybrid environments spanning cloud, mobile, and IoT infrastructure. Learn to operate within the framework of applicable laws and policies while applying principles of governance, risk, and compliance. Develop proficiency in identifying, analyzing, and responding to security events and incidents in real-world scenarios.",
          examNumber: "SY0-701",
          objectives: [
            "Summarize elements of effective security governance",
            "Identify and analyze various threat vectors and attack surfaces",
            "Explain the principles and implementation of security controls",
            "Describe the incident response process and best practices",
            "Understand hardware, software, and data asset management",
            "Apply strategies for monitoring, detecting, and responding to security breaches"
          ],
          difficulty: "Intermediate",
          totalDuration: "TBD"
        },
        modules: [
          {
            id: "module-1",
            title: "Module 1: Course Introduction and Fundamentals",
            lessons: [
              {
                id: "lesson-1",
                title: "Introduction to Course and Exam Objectives",
                duration: "TBD",
                videoId: "pending_video_1",
                instructor: "Raymond Lacoste"
              },
              {
                id: "lesson-2",
                title: "Various Threat Vectors and Attack Surfaces",
                duration: "TBD",
                videoId: "pending_video_2",
                instructor: "Raymond Lacoste"
              },
              {
                id: "lesson-3",
                title: "Incident Response Process",
                duration: "TBD",
                videoId: "pending_video_3",
                instructor: "Raymond Lacoste"
              }
            ]
          }
        ]
      },
      {
        id: "exam-crash",
        name: "Exam Crash",
        overview: {
          description: "This microlearning course specifically targets high value targets for the preparation of the CompTIA Security+ certification. Use this to close any gaps in readiness for the exam. If you do not have significant experience with cybersecurity concepts already, we encourage you to take the larger full-scale class. That said, if you are ready and willing, dive in and get ready for this hard-hitting course that will prime you for success on the exam.",
          examNumber: "SY0-701",
          objectives: [
            "Master key Security+ exam topics",
            "Review essential security controls and architecture",
            "Understand access management and encryption concepts",
            "Prepare for exam success with focused content"
          ],
          difficulty: "Advanced",
          totalDuration: "TBD"
        },
        modules: [
          {
            id: "crash-module-1",
            title: "Module 1: Security Controls",
            lessons: [
              {
                id: "crash-lesson-1",
                title: "Detective Controls",
                duration: "TBD",
                videoId: "pending_video_crash_1",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-2",
                title: "Preventive Controls",
                duration: "TBD",
                videoId: "pending_video_crash_2",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-3",
                title: "Two-Person Integrity Security Controls",
                duration: "TBD",
                videoId: "pending_video_crash_3",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-4",
                title: "Managerial Control",
                duration: "TBD",
                videoId: "pending_video_crash_4",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-5",
                title: "Honeypot",
                duration: "TBD",
                videoId: "pending_video_crash_5",
                instructor: "Raymond Lacoste"
              }
            ]
          },
          {
            id: "crash-module-2",
            title: "Module 2: Zero Trust and Access Control",
            lessons: [
              {
                id: "crash-lesson-6",
                title: "Zero Trust Control and Data Plane",
                duration: "TBD",
                videoId: "pending_video_crash_6",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-7",
                title: "Non-Repudiation",
                duration: "TBD",
                videoId: "pending_video_crash_7",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-8",
                title: "Controlling Access to a Secure Facility",
                duration: "TBD",
                videoId: "pending_video_crash_8",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-9",
                title: "Zero Trust Architecture",
                duration: "TBD",
                videoId: "pending_video_crash_9",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-10",
                title: "Application Allow List",
                duration: "TBD",
                videoId: "pending_video_crash_10",
                instructor: "Raymond Lacoste"
              }
            ]
          },
          {
            id: "crash-module-3",
            title: "Module 3: System Security and Encryption",
            lessons: [
              {
                id: "crash-lesson-11",
                title: "Change Management",
                duration: "TBD",
                videoId: "pending_video_crash_11",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-12",
                title: "Backout Plans",
                duration: "TBD",
                videoId: "pending_video_crash_12",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-13",
                title: "Legacy System Security Concerns",
                duration: "TBD",
                videoId: "pending_video_crash_13",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-14",
                title: "Salting",
                duration: "TBD",
                videoId: "pending_video_crash_14",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-15",
                title: "Full Disk Encryption",
                duration: "TBD",
                videoId: "pending_video_crash_15",
                instructor: "Raymond Lacoste"
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
