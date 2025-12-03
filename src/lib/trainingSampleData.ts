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

// Import custom video thumbnails
import networkPlusIntroThumbnail from "@/assets/network-plus-intro-thumbnail.png";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoId: string;
  instructor?: string; // Instructor name for the lesson
  thumbnail?: string; // Custom thumbnail override for video
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
                duration: "14:22",
                videoId: "n0y3swdrwm",
                instructor: "Raymond Lacoste",
                thumbnail: networkPlusIntroThumbnail
              },
              {
                id: "lesson-2",
                title: "Introduction to IP Subnets",
                duration: "21:35",
                videoId: "2m87zwyxw5",
                instructor: "Raymond Lacoste"
              },
              {
                id: "lesson-3",
                title: "Intro to Routing",
                duration: "17:48",
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
                duration: "9:17",
                videoId: "q6srxsj3eh",
                instructor: "Dan Young"
              },
              {
                id: "crash-lesson-2",
                title: "Linking Devices to the OSI Model",
                duration: "7:42",
                videoId: "aajm0cfkb4",
                instructor: "Dan Young"
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
                duration: "11:24",
                videoId: "uq6lz33vbe",
                instructor: "Dan Young"
              },
              {
                id: "crash-lesson-4",
                title: "Dedicated Data Center to Cloud Connections",
                duration: "8:56",
                videoId: "um0xkx7stb",
                instructor: "Dan Young"
              },
              {
                id: "crash-lesson-5",
                title: "Cloud Concepts",
                duration: "10:33",
                videoId: "z4c1ea57dy",
                instructor: "Dan Young"
              },
              {
                id: "crash-lesson-6",
                title: "Integrating On-Prem and Cloud",
                duration: "12:08",
                videoId: "cng5zt1xo4",
                instructor: "Dan Young"
              }
            ]
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "cisco-ccna-200-301",
    title: "Cisco CCNA (200-301)",
    category: "Networking",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "The Implementing and Administering Cisco Solutions (CCNA) course is the first step into Cisco networking. The goal of this online training course is to provide students with skills like network fundamentals and access, IP connectivity and services, security fundamentals, and more! Students who have attended the CCNA online training course will gain competency with Cisco IOS-based devices. Crucial elements of this course include the coverage of IPv4 subnetting, IPv6, ACLs, VLANs, as well as static and dynamic routing which are all needed for success at all levels of Cisco certification.",
          examNumber: "200-301",
          objectives: [
            "Understand network fundamentals and access concepts",
            "Configure and verify IP connectivity and services",
            "Implement security fundamentals for network infrastructure",
            "Master IPv4 subnetting and IPv6 addressing",
            "Configure VLANs, ACLs, and routing protocols"
          ],
          difficulty: "Intermediate",
          totalDuration: "TBD"
        },
        modules: [
          {
            id: "module-1",
            title: "Module 1: CCNA Fundamentals",
            lessons: [
              {
                id: "ccna-lesson-1",
                title: "Introduction to CCNA Course and Exam Objectives",
                duration: "TBD",
                videoId: "6dtxlj3bl4",
                instructor: "Spike Xavier"
              },
              {
                id: "ccna-lesson-2",
                title: "Configuring and Verifying VLANs",
                duration: "TBD",
                videoId: "ldx3jpw526",
                instructor: "Spike Xavier"
              },
              {
                id: "ccna-lesson-3",
                title: "OSPFv2 Packets and States",
                duration: "TBD",
                videoId: "wpmbw9io1r",
                instructor: "Spike Xavier"
              }
            ]
          }
        ]
      },
      {
        id: "exam-crash",
        name: "Exam Crash",
        overview: {
          description: "This focused exam prep course targets the key concepts and high-value topics for the Cisco CCNA certification. Perfect for those with networking experience who want to quickly review essential material before sitting for the exam.",
          examNumber: "200-301",
          objectives: [
            "Master PoE configurations and modes",
            "Configure VLANs and trunking",
            "Understand routing tables and static routes",
            "Implement security best practices",
            "Review OSPF network types and configurations"
          ],
          difficulty: "Advanced",
          totalDuration: "TBD"
        },
        modules: [
          {
            id: "crash-module-1",
            title: "Module 1: Power over Ethernet",
            lessons: [
              {
                id: "ccna-crash-lesson-1",
                title: "Power over Ethernet Modes",
                duration: "TBD",
                videoId: "be2q7uadwe",
                instructor: "Spike Xavier"
              },
              {
                id: "ccna-crash-lesson-2",
                title: "PoE Power Classification Override",
                duration: "TBD",
                videoId: "mvf20m5fok",
                instructor: "Spike Xavier"
              }
            ]
          },
          {
            id: "crash-module-2",
            title: "Module 2: VLANs and Routing",
            lessons: [
              {
                id: "ccna-crash-lesson-3",
                title: "Creating VLANs",
                duration: "TBD",
                videoId: "y52zp3y09k",
                instructor: "Spike Xavier"
              },
              {
                id: "ccna-crash-lesson-4",
                title: "Router on a Trunk Configuration",
                duration: "TBD",
                videoId: "euz0ik3zy1",
                instructor: "Spike Xavier"
              },
              {
                id: "ccna-crash-lesson-5",
                title: "Reading the Routing Table",
                duration: "TBD",
                videoId: "umc7q3wnsm",
                instructor: "Spike Xavier"
              },
              {
                id: "ccna-crash-lesson-6",
                title: "Configuring IPv6 Static Default Route",
                duration: "TBD",
                videoId: "f7vk0ffk72",
                instructor: "Spike Xavier"
              }
            ]
          },
          {
            id: "crash-module-3",
            title: "Module 3: Security and OSPF",
            lessons: [
              {
                id: "ccna-crash-lesson-7",
                title: "Mitigating Threats",
                duration: "TBD",
                videoId: "o3a5zgspuk",
                instructor: "Spike Xavier"
              },
              {
                id: "ccna-crash-lesson-8",
                title: "Security Best Practices",
                duration: "TBD",
                videoId: "igq60cf5im",
                instructor: "Spike Xavier"
              },
              {
                id: "ccna-crash-lesson-9",
                title: "IPSec Overview",
                duration: "TBD",
                videoId: "d1qqopp2y7",
                instructor: "Spike Xavier"
              },
              {
                id: "ccna-crash-lesson-10",
                title: "OSPF Network Types",
                duration: "TBD",
                videoId: "utha2wf4z0",
                instructor: "Spike Xavier"
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
