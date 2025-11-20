export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoId: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  thumbnail?: string;
  overview: {
    description: string;
    examNumber?: string;
    objectives?: string[];
    links?: { label: string; url: string }[];
  };
  modules: Module[];
  showLiveSchedule?: boolean;
}

// Sample courses - replace with your actual data
export const sampleCourses: Course[] = [
  {
    id: "sample-microsoft-course",
    title: "Microsoft Azure Fundamentals",
    category: "Microsoft",
    overview: {
      description: "This course provides foundational knowledge of cloud services and how those services are provided with Microsoft Azure. It covers core Azure concepts, Azure architecture, and Azure management and governance.",
      examNumber: "AZ-900",
      objectives: [
        "Describe cloud computing concepts",
        "Describe Azure architecture and services",
        "Describe Azure management and governance",
        "Understand Azure pricing and support"
      ],
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
            videoId: "placeholder_video_1"
          },
          {
            id: "lesson-2",
            title: "Understanding Azure Services",
            duration: "30 min",
            videoId: "placeholder_video_2"
          },
          {
            id: "lesson-3",
            title: "Azure Architecture Components",
            duration: "20 min",
            videoId: "placeholder_video_3"
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
            videoId: "placeholder_video_4"
          },
          {
            id: "lesson-5",
            title: "Azure Governance Features",
            duration: "22 min",
            videoId: "placeholder_video_5"
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "sample-cyber-course",
    title: "CompTIA Security+ Certification",
    category: "Cybersecurity",
    overview: {
      description: "CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.",
      examNumber: "SY0-701",
      objectives: [
        "Assess the security posture of an enterprise environment",
        "Recommend and implement appropriate security solutions",
        "Monitor and secure hybrid environments",
        "Operate with an awareness of applicable laws and policies"
      ]
    },
    modules: [
      {
        id: "module-1",
        title: "Module 1: Security Fundamentals",
        lessons: [
          {
            id: "sec-lesson-1",
            title: "Introduction to Security+",
            duration: "18 min",
            videoId: "placeholder_video_6"
          },
          {
            id: "sec-lesson-2",
            title: "Security Controls and Frameworks",
            duration: "35 min",
            videoId: "placeholder_video_7"
          }
        ]
      }
    ],
    showLiveSchedule: true
  },
  {
    id: "sample-cloud-course",
    title: "AWS Cloud Practitioner Essentials",
    category: "Cloud",
    overview: {
      description: "Learn the fundamentals of cloud computing and AWS services. This course is designed for individuals seeking an overall understanding of the AWS Cloud.",
      examNumber: "CLF-C02",
      objectives: [
        "Define what the AWS Cloud is",
        "Explain the AWS pricing model",
        "Describe the global infrastructure",
        "Identify AWS security and compliance concepts"
      ]
    },
    modules: [
      {
        id: "aws-module-1",
        title: "Module 1: Introduction to AWS",
        lessons: [
          {
            id: "aws-lesson-1",
            title: "What is Cloud Computing?",
            duration: "15 min",
            videoId: "placeholder_video_8"
          },
          {
            id: "aws-lesson-2",
            title: "AWS Global Infrastructure",
            duration: "22 min",
            videoId: "placeholder_video_9"
          }
        ]
      }
    ],
    showLiveSchedule: false
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
