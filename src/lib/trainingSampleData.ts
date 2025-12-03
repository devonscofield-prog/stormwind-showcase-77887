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
  isByte?: boolean; // Marks course as a Bytes/microlearning course
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
                instructor: "Raymond Lacoste"
              },
              {
                id: "ccna-lesson-2",
                title: "Configuring and Verifying VLANs",
                duration: "TBD",
                videoId: "ldx3jpw526",
                instructor: "Raymond Lacoste"
              },
              {
                id: "ccna-lesson-3",
                title: "OSPFv2 Packets and States",
                duration: "TBD",
                videoId: "wpmbw9io1r",
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
                instructor: "Raymond Lacoste"
              },
              {
                id: "ccna-crash-lesson-2",
                title: "PoE Power Classification Override",
                duration: "TBD",
                videoId: "mvf20m5fok",
                instructor: "Raymond Lacoste"
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
                instructor: "Raymond Lacoste"
              },
              {
                id: "ccna-crash-lesson-4",
                title: "Router on a Trunk Configuration",
                duration: "TBD",
                videoId: "euz0ik3zy1",
                instructor: "Raymond Lacoste"
              },
              {
                id: "ccna-crash-lesson-5",
                title: "Reading the Routing Table",
                duration: "TBD",
                videoId: "umc7q3wnsm",
                instructor: "Raymond Lacoste"
              },
              {
                id: "ccna-crash-lesson-6",
                title: "Configuring IPv6 Static Default Route",
                duration: "TBD",
                videoId: "f7vk0ffk72",
                instructor: "Raymond Lacoste"
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
                instructor: "Raymond Lacoste"
              },
              {
                id: "ccna-crash-lesson-8",
                title: "Security Best Practices",
                duration: "TBD",
                videoId: "igq60cf5im",
                instructor: "Raymond Lacoste"
              },
              {
                id: "ccna-crash-lesson-9",
                title: "IPSec Overview",
                duration: "TBD",
                videoId: "d1qqopp2y7",
                instructor: "Raymond Lacoste"
              },
              {
                id: "ccna-crash-lesson-10",
                title: "OSPF Network Types",
                duration: "TBD",
                videoId: "utha2wf4z0",
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
    id: "az-900-microsoft-azure-fundamentals",
    title: "AZ-900: Microsoft Azure Fundamentals",
    category: "Cloud",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "In this online training course, students will learn foundational level knowledge on cloud concepts; core Azure services; security, privacy, compliance, and trust; and Azure pricing and support.",
          difficulty: "Beginner",
          examNumber: "AZ-900"
        },
        modules: [
          {
            id: "module-1",
            title: "Module 1: Azure Fundamentals",
            lessons: [
              {
                id: "az900-lesson-1",
                title: "Course Introduction, On Site Networking",
                duration: "TBD",
                videoId: "9ub2edeojj",
                instructor: "Will Panek"
              },
              {
                id: "az900-lesson-2",
                title: "Core Azure Architectural Components, Core Products Available in Azure",
                duration: "TBD",
                videoId: "8mgexvkkcv",
                instructor: "Will Panek"
              }
            ]
          }
        ]
      },
      {
        id: "exam-crash",
        name: "Exam Crash",
        overview: {
          description: "Rapid exam preparation covering all key AZ-900 exam objectives with focused, efficient content delivery.",
          difficulty: "Beginner",
          examNumber: "AZ-900"
        },
        modules: [
          {
            id: "crash-module-1",
            title: "Cloud Concepts",
            lessons: [
              {
                id: "az900-crash-lesson-1",
                title: "Cloud Service Models",
                duration: "TBD",
                videoId: "szhioulxir",
                instructor: "Mike Pfeiffer"
              },
              {
                id: "az900-crash-lesson-2",
                title: "Cloud Computing Benefits and Virtualization",
                duration: "TBD",
                videoId: "7fh4cmoqev",
                instructor: "Mike Pfeiffer"
              },
              {
                id: "az900-crash-lesson-3",
                title: "Cloud Computing Requirements and Cost Efficiency",
                duration: "TBD",
                videoId: "shpsswxxfi",
                instructor: "Mike Pfeiffer"
              },
              {
                id: "az900-crash-lesson-4",
                title: "The Shared Responsibility Model",
                duration: "TBD",
                videoId: "wglirpur6d",
                instructor: "Mike Pfeiffer"
              }
            ]
          },
          {
            id: "crash-module-2",
            title: "Cloud Hosting & Cost",
            lessons: [
              {
                id: "az900-crash-lesson-5",
                title: "Cloud Hosting Models",
                duration: "TBD",
                videoId: "4f7gl8dyk0",
                instructor: "Mike Pfeiffer"
              },
              {
                id: "az900-crash-lesson-6",
                title: "CapEx and OpEx Cost Considerations",
                duration: "TBD",
                videoId: "wx8qnjgisp",
                instructor: "Mike Pfeiffer"
              },
              {
                id: "az900-crash-lesson-7",
                title: "Cloud Hosting Model Advantages",
                duration: "TBD",
                videoId: "f66flu1piq",
                instructor: "Mike Pfeiffer"
              }
            ]
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "itil-v4-foundations",
    title: "ITIL v4 Foundations",
    category: "ITIL",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "This exciting and dynamic online training course provides IT leaders, practitioners, support staff and staff interfacing with the organization's digital and information systems functions with a practical understanding of the key concepts, common language, principles and practices that enables successful management of modern IT-enabled services.",
          difficulty: "Beginner"
        },
        modules: [
          {
            id: "module-1",
            title: "Module 1: ITIL Fundamentals",
            lessons: [
              {
                id: "itil-lesson-1",
                title: "Introduction to ITILv4 Course Exam Objectives",
                duration: "TBD",
                videoId: "gopoykr5s9",
                instructor: "Raymond Lacoste"
              },
              {
                id: "itil-lesson-2",
                title: "The 4 Dimensions of Service Management",
                duration: "TBD",
                videoId: "mcnypfbqd6",
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
          description: "Rapid exam preparation covering all key ITIL v4 Foundations exam objectives with focused, efficient content delivery.",
          difficulty: "Beginner"
        },
        modules: [
          {
            id: "crash-module-1",
            title: "Service Concepts",
            lessons: [
              {
                id: "itil-crash-lesson-1",
                title: "What is a Service",
                duration: "TBD",
                videoId: "cxvk76vj4k",
                instructor: "Raymond Lacoste"
              },
              {
                id: "itil-crash-lesson-2",
                title: "What is Value",
                duration: "TBD",
                videoId: "taue9kg3fp",
                instructor: "Raymond Lacoste"
              },
              {
                id: "itil-crash-lesson-3",
                title: "Outcomes and Outputs",
                duration: "TBD",
                videoId: "ls6un55g7b",
                instructor: "Raymond Lacoste"
              }
            ]
          },
          {
            id: "crash-module-2",
            title: "Service Components",
            lessons: [
              {
                id: "itil-crash-lesson-4",
                title: "Utility and Warranty",
                duration: "TBD",
                videoId: "qcewvx9xq0",
                instructor: "Raymond Lacoste"
              },
              {
                id: "itil-crash-lesson-5",
                title: "The Service Consumer",
                duration: "TBD",
                videoId: "ebgv1ae49r",
                instructor: "Raymond Lacoste"
              },
              {
                id: "itil-crash-lesson-6",
                title: "Organization",
                duration: "TBD",
                videoId: "xtgf20bhm5",
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
    id: "cissp",
    title: "Certified Information Systems Security Professional (CISSP)",
    category: "Cybersecurity",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "In this engaging and comprehensive online training course, you receive in-depth instruction covering the 8 CISSP domains. Expertise in these domains is critical in today's information technology world. The CISSP domains include Security and Risk Management, Asset Security, Security Engineering, Communications and Network Security, Identity and Access Management, Security Assessment and Testing, Security Operations, and Software Development Security.",
          difficulty: "Advanced"
        },
        modules: [
          {
            id: "module-1",
            title: "Module 1: CISSP Foundations",
            lessons: [
              {
                id: "cissp-lesson-1",
                title: "Intro to CISSP Course and Exam",
                duration: "TBD",
                videoId: "r12t4jofgp",
                instructor: "Raymond Lacoste"
              },
              {
                id: "cissp-lesson-2",
                title: "Understand and Apply Threat Modeling Concepts and Methodologies",
                duration: "TBD",
                videoId: "8b5qfbzlw9",
                instructor: "Raymond Lacoste"
              },
              {
                id: "cissp-lesson-3",
                title: "Conduct Incident Management",
                duration: "TBD",
                videoId: "x5oni070dk",
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
          description: "Rapid exam preparation covering key CISSP exam objectives with focused practice questions and concept reviews.",
          difficulty: "Advanced"
        },
        modules: [
          {
            id: "crash-module-1",
            title: "Ethics & Code of Conduct",
            lessons: [
              {
                id: "cissp-crash-lesson-1",
                title: "Question: Being Ethical as a CISSP",
                duration: "TBD",
                videoId: "38r02y1j1r",
                instructor: "Raymond Lacoste"
              },
              {
                id: "cissp-crash-lesson-2",
                title: "ISC2 Code of Ethics",
                duration: "TBD",
                videoId: "99ovbyd6nk",
                instructor: "Raymond Lacoste"
              },
              {
                id: "cissp-crash-lesson-3",
                title: "Question: Applying ISC2 Code of Ethics",
                duration: "TBD",
                videoId: "vi7pye1uuk",
                instructor: "Raymond Lacoste"
              },
              {
                id: "cissp-crash-lesson-4",
                title: "Question: What is the Ethical Thing To Do?",
                duration: "TBD",
                videoId: "xlhxcqiw66",
                instructor: "Raymond Lacoste"
              }
            ]
          },
          {
            id: "crash-module-2",
            title: "Security Concepts & Governance",
            lessons: [
              {
                id: "cissp-crash-lesson-5",
                title: "Question: Security Concept Violations",
                duration: "TBD",
                videoId: "bxwzzxfxw7",
                instructor: "Raymond Lacoste"
              },
              {
                id: "cissp-crash-lesson-6",
                title: "Question: Applying Security Concepts",
                duration: "TBD",
                videoId: "i9xl387dpy",
                instructor: "Raymond Lacoste"
              },
              {
                id: "cissp-crash-lesson-7",
                title: "Understanding Security Concepts",
                duration: "TBD",
                videoId: "bmygtxprph",
                instructor: "Raymond Lacoste"
              },
              {
                id: "cissp-crash-lesson-8",
                title: "Question: Aligning your Information Security Program",
                duration: "TBD",
                videoId: "6adpxlfx04",
                instructor: "Raymond Lacoste"
              },
              {
                id: "cissp-crash-lesson-9",
                title: "Question: Applying Security Governance Principles",
                duration: "TBD",
                videoId: "huct1d46u7",
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
    id: "ms-102",
    title: "MS-102: Microsoft 365 Administrator",
    category: "Microsoft",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "This instructor led online training course aligns to the MS-102 exam and the Microsoft 365 Certified Administrator Expert certification. This training course includes a deep dive into deploying and implementing Microsoft 365 services, managing user identity and roles, managing access and authentication, and planning Office 365 workloads and applications.",
          difficulty: "Advanced"
        },
        modules: [
          {
            id: "module-1",
            title: "Module 1: Identity and Access Management",
            lessons: [
              {
                id: "ms102-lesson-1",
                title: "Entra ID Connect",
                duration: "TBD",
                videoId: "5n6n0hzil7",
                instructor: "Spike Xavier"
              },
              {
                id: "ms102-lesson-2",
                title: "Implement and Manage Secure Access",
                duration: "TBD",
                videoId: "i34i8alcid",
                instructor: "Spike Xavier"
              }
            ]
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "md-102",
    title: "MD-102: Endpoint Administrator",
    category: "Microsoft",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "This instructor led online training course prepares students for MD-102 exam, which aligns to the MDAA (Modern Desktop Administrator Associate) certification. This course includes a deep dive into deploying windows, managing identity and compliance, managing applications, implementation and managing endpoints via Microsoft Intune, Windows Autopilot, and Microsoft Defender, and more."
        },
        modules: [
          {
            id: "md102-module-1",
            title: "MD-102 Full Course",
            lessons: [
              {
                id: "md102-lesson-1",
                title: "Microsoft Deployment Toolkit",
                duration: "TBD",
                videoId: "y9jez71xaz",
                instructor: "Will Panek"
              },
              {
                id: "md102-lesson-2",
                title: "Create and Manage Group Policy Objects",
                duration: "TBD",
                videoId: "pvo5nlpo9b",
                instructor: "Will Panek"
              }
            ]
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "pmp-exam-prep",
    title: "PMP Official Exam Prep",
    category: "Project Management",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "The Project Management Professional (PMP)® Certification Prep live online training course provides Project Managers with the knowledge and skills needed to master the Project Management Institute's (PMI)® best practices and attain the Project Management Professional (PMP)® certification. The PMP® credential is the most widely accepted professional certifications in the world and its framework has set the standard for the project management profession for the past 30 years. As Authorized Training Providers (ATP) our Project Management Professional (PMP)® Certification Prep course contains the official content designed to prepare you for the exam based on the most up-to-date exam content outline."
        },
        modules: [
          {
            id: "pmp-module-1",
            title: "PMP Full Course",
            lessons: [
              {
                id: "pmp-lesson-1",
                title: "PMP Introduction",
                duration: "TBD",
                videoId: "p6jjzhthsh",
                instructor: "Ashley Hunt"
              },
              {
                id: "pmp-lesson-2",
                title: "Risk",
                duration: "TBD",
                videoId: "lxr7pmtmxl",
                instructor: "Ashley Hunt"
              },
              {
                id: "pmp-lesson-3",
                title: "Leadership Skills",
                duration: "TBD",
                videoId: "3x1jqbueph",
                instructor: "Ashley Hunt"
              }
            ]
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "ai-for-project-managers",
    title: "AI for Project Managers",
    category: "Project Management",
    isByte: true,
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "This StormWind Bytes course explores how AI revolutionizes project management, focusing on practical applications across knowledge areas. You'll learn how AI technologies enhance risk management, scheduling, resource allocation, and stakeholder engagement while automating routine tasks. The course covers essential concepts including predictive analytics, machine learning for cost control, and AI-driven decision-making frameworks. This course is ideal for project managers, PMO leaders, and professionals seeking to leverage AI capabilities to improve project outcomes while developing the skills needed for the future of project management."
        },
        modules: [
          {
            id: "ai-pm-module-1",
            title: "AI for Project Managers",
            lessons: [
              {
                id: "ai-pm-lesson-1",
                title: "What is AI in Project Management",
                duration: "TBD",
                videoId: "x40snbays8",
                instructor: "Ashley Hunt"
              },
              {
                id: "ai-pm-lesson-2",
                title: "How AI is Changing Project Management Practices",
                duration: "TBD",
                videoId: "iacz4pf8qx",
                instructor: "Ashley Hunt"
              },
              {
                id: "ai-pm-lesson-3",
                title: "The Role of AI in Risk Management",
                duration: "TBD",
                videoId: "7f8evgv7kw",
                instructor: "Ashley Hunt"
              },
              {
                id: "ai-pm-lesson-4",
                title: "AI-Powered Scheduling and Forecasting",
                duration: "TBD",
                videoId: "6s5u3409ij",
                instructor: "Ashley Hunt"
              },
              {
                id: "ai-pm-lesson-5",
                title: "Automating Routine Project Management Tasks",
                duration: "TBD",
                videoId: "c7383nrbsg",
                instructor: "Ashley Hunt"
              }
            ]
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "comptia-a-plus-core1",
    title: "CompTIA A+ Core 1 (220-1201) v15",
    category: "Help Desk",
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "The CompTIA A+ Core 1 (220-1201) V15 course focuses on the equipment side of modern support work. Covering key areas such as Mobile Devices, Networking, Hardware, Virtualization & Cloud Computing, and Hardware/Network Troubleshooting, the course equips learners with a broad set of skills. Participants gain insights into devices like laptops, mobile phones, and IoT equipment, understand how to network and configure components, explore virtual and cloud environments, and apply troubleshooting methodologies to maintain effective operations. Mastery of these domains prepares you for the 90-question Core 1 exam, where a passing score (675/900) fulfills one of two requirements for achieving full CompTIA A+ certification."
        },
        modules: [
          {
            id: "aplus-core1-module-1",
            title: "CompTIA A+ Core 1 Full Course",
            lessons: [
              {
                id: "aplus-core1-lesson-1",
                title: "Course Introduction",
                duration: "TBD",
                videoId: "a4te1iac74",
                instructor: "Spike Xavier"
              },
              {
                id: "aplus-core1-lesson-2",
                title: "Explain Common Network Configuration Concepts",
                duration: "TBD",
                videoId: "oy6chvhbyk",
                instructor: "Spike Xavier"
              },
              {
                id: "aplus-core1-lesson-3",
                title: "Compare and Contrast Storage Devices",
                duration: "TBD",
                videoId: "i4718ujuar",
                instructor: "Spike Xavier"
              }
            ]
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "microsoft-365-copilot",
    title: "Using Microsoft 365 Copilot",
    category: "Microsoft",
    isByte: true,
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "Microsoft Copilot Chat delivers the power of generative AI across Microsoft 365 through a single conversational canvas. From one prompt field, learners can ask questions, create content, and retrieve insights that draw on both web data and—when licensed—secure organizational files and messages. The course centers on the two primary Copilot Chat surfaces: the standalone Microsoft 365 Chat experience (available in the browser, desktop, and mobile apps) and the in‑app Copilot Chat pane that appears in Teams, Outlook, and other Office applications. Each surface offers unique context, controls, and best‑fit tasks that can transform everyday workflows."
        },
        modules: [
          {
            id: "copilot-module-1",
            title: "Using Microsoft 365 Copilot",
            lessons: [
              {
                id: "copilot-lesson-1",
                title: "Launching Microsoft 365 Copilot",
                duration: "TBD",
                videoId: "6wyw8s4zba",
                instructor: "Dan Young"
              },
              {
                id: "copilot-lesson-2",
                title: "Understanding Generative AI (GenAI) in Copilot",
                duration: "TBD",
                videoId: "g4qda6i3bo",
                instructor: "Dan Young"
              },
              {
                id: "copilot-lesson-3",
                title: "Learning Copilot through Everyday Interactions",
                duration: "TBD",
                videoId: "50de3xe376",
                instructor: "Dan Young"
              },
              {
                id: "copilot-lesson-4",
                title: "Benefits of Using Generative AI for Personal Interests",
                duration: "TBD",
                videoId: "acld9nu5in",
                instructor: "Dan Young"
              },
              {
                id: "copilot-lesson-5",
                title: "Copilot as an Expert",
                duration: "TBD",
                videoId: "blycxfk9zq",
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
    id: "general-ai-awareness",
    title: "General Artificial Intelligence Awareness",
    category: "AI & Machine Learning",
    isByte: true,
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "This course provides a comprehensive introduction to Generative AI, covering text generation and image creation in ChatGPT, understanding the GPT model architecture, and the risks associated with generative AI technologies. Perfect for professionals seeking foundational knowledge in AI awareness."
        },
        modules: [
          {
            id: "gen-ai-module-1",
            title: "General AI Awareness",
            lessons: [
              {
                id: "gen-ai-lesson-1",
                title: "A Look at GenAI Text in ChatGPT",
                duration: "TBD",
                videoId: "9wmxh6jy6k",
                instructor: "Dan Young"
              },
              {
                id: "gen-ai-lesson-2",
                title: "A Look at GenAI Image Creation in ChatGPT",
                duration: "TBD",
                videoId: "50rlb9jdvv",
                instructor: "Dan Young"
              },
              {
                id: "gen-ai-lesson-3",
                title: "The GPT Model",
                duration: "TBD",
                videoId: "lffhv46w6l",
                instructor: "Dan Young"
              },
              {
                id: "gen-ai-lesson-4",
                title: "Risks of Generative AI",
                duration: "TBD",
                videoId: "w4yclzo84c",
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
    id: "security-awareness-onboarding",
    title: "Security Awareness: Onboarding",
    category: "Security Awareness",
    isByte: true,
    variants: [
      {
        id: "full-course",
        name: "Full Course",
        overview: {
          description: "This essential security awareness course is designed for new employees and covers the fundamentals of cybersecurity in the workplace. Learn why security matters, how to report incidents quickly, recognize social engineering attacks, and protect your physical and digital workspace."
        },
        modules: [
          {
            id: "sec-onboard-module-1",
            title: "Security Awareness Onboarding",
            lessons: [
              {
                id: "sec-onboard-lesson-1",
                title: "Why Security Matters and Your Role",
                duration: "TBD",
                videoId: "nwaydbofyy",
                instructor: "Raymond Lacoste"
              },
              {
                id: "sec-onboard-lesson-2",
                title: "Report it Fast",
                duration: "TBD",
                videoId: "o3143tgjfe",
                instructor: "Raymond Lacoste"
              },
              {
                id: "sec-onboard-lesson-3",
                title: "Social Engineering",
                duration: "TBD",
                videoId: "j0incvh0yw",
                instructor: "Raymond Lacoste"
              },
              {
                id: "sec-onboard-lesson-4",
                title: "Protect Your Workspace",
                duration: "TBD",
                videoId: "i9s8r85fq0",
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
  "ITIL"
];

// Flattened course variant for individual cards
export interface FlattenedCourseVariant {
  id: string; // Combined: courseId-variantId
  courseId: string;
  variantId: string;
  title: string;
  variantName: string; // "Full Course" or "Exam Crash"
  category: string;
  description: string;
  thumbnail?: string;
  firstVideoId?: string;
  instructor?: string;
  lessonCount: number;
  showLiveSchedule?: boolean;
  isByte?: boolean;
}

// Helper to flatten courses into individual variant cards
export const flattenCourses = (courses: Course[]): FlattenedCourseVariant[] => {
  const flattened: FlattenedCourseVariant[] = [];
  
  for (const course of courses) {
    for (const variant of course.variants) {
      const firstLesson = variant.modules[0]?.lessons[0];
      const lessonCount = variant.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
      
      flattened.push({
        id: `${course.id}-${variant.id}`,
        courseId: course.id,
        variantId: variant.id,
        title: course.title,
        variantName: variant.name,
        category: course.category,
        description: variant.overview.description,
        thumbnail: course.thumbnail,
        firstVideoId: firstLesson?.videoId,
        instructor: firstLesson?.instructor,
        lessonCount,
        showLiveSchedule: course.showLiveSchedule,
        isByte: course.isByte
      });
    }
  }
  
  return flattened;
};
