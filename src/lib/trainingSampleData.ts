// Import instructor photos as ES6 modules for production
import abdelSalemPhoto from "@/assets/abdel-salem.png";
import ashleyHuntPhoto from "@/assets/ashley-hunt.png";
import benBurichPhoto from "@/assets/ben-burich.png";
import chrisPaulPhoto from "@/assets/chris-paul.png";
import danYoungPhoto from "@/assets/dan-young.png";
import guilHernandezPhoto from "@/assets/guil-hernandez.png";
import jasonYatesPhoto from "@/assets/jason-yates.png";
import mikePfeifferPhoto from "@/assets/mike-pfeiffer.png";
import raymondLacostePhoto from "@/assets/raymond-lacoste.png";
import samBurrPhoto from "@/assets/sam-burr.png";
import shaneSextonPhoto from "@/assets/shane-sexton.png";
import shaunPellingPhoto from "@/assets/shaun-pelling.png";
import spikeXavierPhoto from "@/assets/spike-xavier.png";
import willPanekPhoto from "@/assets/will-panek.png";

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
  "Abdel Salem": abdelSalemPhoto,
  "Ashley Hunt": ashleyHuntPhoto,
  "Ben Burich": benBurichPhoto,
  "Chris Paul": chrisPaulPhoto,
  "Dan Young": danYoungPhoto,
  "Guil Hernandez": guilHernandezPhoto,
  "Jason Yates": jasonYatesPhoto,
  "Mike Pfeiffer": mikePfeifferPhoto,
  "Raymond Lacoste": raymondLacostePhoto,
  "Sam Burr": samBurrPhoto,
  "Shane Sexton": shaneSextonPhoto,
  "Shaun Pelling": shaunPellingPhoto,
  "Spike Xavier": spikeXavierPhoto,
  "Will Panek": willPanekPhoto,
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
                duration: "12:34",
                videoId: "c43a2u67d8",
                instructor: "Raymond Lacoste"
              },
              {
                id: "lesson-2",
                title: "Various Threat Vectors and Attack Surfaces",
                duration: "18:22",
                videoId: "fyljxhtehs",
                instructor: "Raymond Lacoste"
              },
              {
                id: "lesson-3",
                title: "Incident Response Process",
                duration: "15:47",
                videoId: "10recvrzo3",
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
                duration: "8:15",
                videoId: "tmq97i7ymn",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-2",
                title: "Preventive Controls",
                duration: "7:42",
                videoId: "1bjiojo11b",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-3",
                title: "Two-Person Integrity Security Controls",
                duration: "6:28",
                videoId: "wm8k9e51bg",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-4",
                title: "Managerial Control",
                duration: "5:53",
                videoId: "faz0bxn6m7",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-5",
                title: "Honeypot",
                duration: "4:36",
                videoId: "3jv74vyghs",
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
                duration: "9:14",
                videoId: "5yvda4btom",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-7",
                title: "Non-Repudiation",
                duration: "6:51",
                videoId: "kg5b7iu2gy",
                instructor: "Raymond Lacoste"
              }
            ]
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "comptia-network-plus-n10-009",
    title: "CompTIA Network+ (N10-009)",
    category: "Networking",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "The CompTIA® Network+ course builds on your existing user-level knowledge and experience with personal computer operating systems and networks by presenting the fundamental skills and concepts you will use on the job in any type of networking career. If your job duties include network troubleshooting, operation or maintenance, or if you are preparing for any type of network-related career, this course provides the background knowledge and skills you will need to be successful.",
          examNumber: "N10-009",
          objectives: [
            "Understand network architecture and design concepts",
            "Configure and manage IP subnets and routing",
            "Implement network security best practices",
            "Troubleshoot common network connectivity issues",
            "Deploy and manage cloud and virtualization technologies"
          ],
          difficulty: "Intermediate",
          totalDuration: "TBD"
        },
        modules: [
          {
            id: "module-1",
            title: "Module 1: Networking Fundamentals",
            lessons: [
              {
                id: "lesson-1",
                title: "Intro to Course and Exam Objectives",
                duration: "TBD",
                videoId: "n0y3swdrwm",
                instructor: "Raymond Lacoste"
              },
              {
                id: "lesson-2",
                title: "Introduction to IP Subnets",
                duration: "TBD",
                videoId: "2m87zwyxw5",
                instructor: "Raymond Lacoste"
              },
              {
                id: "lesson-3",
                title: "Intro to Routing",
                duration: "TBD",
                videoId: "fxfwhe868o",
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
          description: "This focused exam prep course targets the key concepts and high-value topics for the CompTIA Network+ certification. Perfect for those with networking experience who want to quickly review essential material before sitting for the exam.",
          examNumber: "N10-009",
          objectives: [
            "Master OSI model layers and their functions",
            "Understand cloud computing deployment models",
            "Review network device roles and configurations",
            "Prepare for exam success with targeted content"
          ],
          difficulty: "Advanced",
          totalDuration: "TBD"
        },
        modules: [
          {
            id: "crash-module-1",
            title: "Module 1: OSI Model and Network Devices",
            lessons: [
              {
                id: "crash-lesson-1",
                title: "OSI Model Application Layer",
                duration: "TBD",
                videoId: "q6srxsj3eh",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-2",
                title: "Linking Devices to the OSI Model",
                duration: "TBD",
                videoId: "aajm0cfkb4",
                instructor: "Raymond Lacoste"
              }
            ]
          },
          {
            id: "crash-module-2",
            title: "Module 2: Cloud Computing",
            lessons: [
              {
                id: "crash-lesson-3",
                title: "Deploying Cloud Computing",
                duration: "TBD",
                videoId: "uq6lz33vbe",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-4",
                title: "Dedicated Data Center to Cloud Connections",
                duration: "TBD",
                videoId: "um0xkx7stb",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-5",
                title: "Cloud Concepts",
                duration: "TBD",
                videoId: "z4c1ea57dy",
                instructor: "Raymond Lacoste"
              },
              {
                id: "crash-lesson-6",
                title: "Integrating On-Prem and Cloud",
                duration: "TBD",
                videoId: "cng5zt1xo4",
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
  "Networking",
  "AI & Machine Learning",
  "Security Awareness",
  "Business Skills"
];
