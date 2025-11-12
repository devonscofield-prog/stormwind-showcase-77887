export interface SearchItem {
  title: string;
  description: string;
  category: 'Page' | 'Course' | 'Feature' | 'Technology';
  path: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  // Main Pages
  {
    title: "Home",
    description: "StormWind Studios training platform overview",
    category: "Page",
    path: "/",
    keywords: ["home", "main", "overview", "training", "platform"]
  },
  {
    title: "Course Catalog",
    description: "Browse all available courses",
    category: "Page",
    path: "/courses",
    keywords: ["courses", "catalog", "training", "browse", "all courses"]
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team",
    category: "Page",
    path: "/contact",
    keywords: ["contact", "email", "support", "help", "inquiry"]
  },
  
  // Technology Pages
  {
    title: "Microsoft Training",
    description: "Windows Server, Microsoft 365, Azure, PowerShell training",
    category: "Technology",
    path: "/microsoft",
    keywords: ["microsoft", "windows", "server", "windows server 2025", "365", "azure", "powershell", "active directory", "exchange", "sharepoint", "intune"]
  },
  {
    title: "Cloud Training",
    description: "Azure, AWS, and Google Cloud Platform training",
    category: "Technology",
    path: "/cloud",
    keywords: ["cloud", "azure", "aws", "gcp", "google cloud", "cloud computing", "infrastructure"]
  },
  {
    title: "Cybersecurity Training",
    description: "Security certifications, penetration testing, governance",
    category: "Technology",
    path: "/cybersecurity",
    keywords: ["security", "cybersecurity", "cissp", "comptia", "penetration testing", "ethical hacking", "security+"]
  },
  {
    title: "AI Training",
    description: "ChatGPT, Microsoft Copilot, prompt engineering",
    category: "Technology",
    path: "/ai-pro",
    keywords: ["ai", "artificial intelligence", "chatgpt", "copilot", "prompt engineering", "machine learning", "openai"]
  },
  {
    title: "Networking Training",
    description: "Cisco certifications, network security, infrastructure",
    category: "Technology",
    path: "/networking",
    keywords: ["networking", "cisco", "ccna", "ccnp", "router", "switch", "network security"]
  },
  {
    title: "Full Stack Developer",
    description: "Modern web development, React, Node.js, databases",
    category: "Technology",
    path: "/fullstack-developer",
    keywords: ["fullstack", "full stack", "developer", "react", "nodejs", "javascript", "web development", "programming"]
  },
  {
    title: "DevOps Training",
    description: "Docker, Kubernetes, CI/CD, infrastructure as code",
    category: "Technology",
    path: "/devops",
    keywords: ["devops", "docker", "kubernetes", "cicd", "terraform", "ansible", "jenkins", "git"]
  },
  {
    title: "Project Management",
    description: "PMP certification, Agile, project management training",
    category: "Technology",
    path: "/project-management",
    keywords: ["project management", "pmp", "agile", "scrum", "pmbok", "certification"]
  },
  {
    title: "Help Desk",
    description: "IT support, troubleshooting, customer service skills",
    category: "Technology",
    path: "/help-desk",
    keywords: ["help desk", "it support", "troubleshooting", "customer service", "technical support"]
  },
  {
    title: "Business Pro",
    description: "Business skills, management, leadership training",
    category: "Technology",
    path: "/business-pro",
    keywords: ["business", "management", "leadership", "professional development", "business skills"]
  },
  
  // Features
  {
    title: "StormWind Ranges",
    description: "Hands-on labs in Azure, Microsoft, Network, and Cyber environments",
    category: "Feature",
    path: "/ranges",
    keywords: ["ranges", "labs", "hands-on", "practice", "sandbox", "virtual lab"]
  },
  {
    title: "StormAI Tutor",
    description: "AI-powered learning assistant for personalized help",
    category: "Feature",
    path: "/ai-learning",
    keywords: ["ai tutor", "stormai", "chatbot", "learning assistant", "help", "support"]
  },
  {
    title: "Bytes: Microlearning",
    description: "Short, focused learning modules for busy professionals",
    category: "Feature",
    path: "/bytes",
    keywords: ["bytes", "microlearning", "short courses", "quick learning", "bite-sized"]
  },
  {
    title: "Learning Paths",
    description: "Structured career development tracks",
    category: "Feature",
    path: "/learning-paths",
    keywords: ["learning paths", "career development", "structured learning", "tracks"]
  },
  {
    title: "Skills Assessments",
    description: "Evaluate skills and get personalized training recommendations",
    category: "Feature",
    path: "/skills-assessments",
    keywords: ["skills", "assessment", "evaluation", "test", "quiz", "benchmark"]
  },
  {
    title: "1:1 Mentoring",
    description: "Personal guidance from industry experts",
    category: "Feature",
    path: "/mentoring",
    keywords: ["mentoring", "1:1", "one-on-one", "coaching", "expert", "guidance"]
  },
  {
    title: "Enterprise Reporting",
    description: "Track team progress and manage licenses",
    category: "Feature",
    path: "/enterprise-reporting",
    keywords: ["reporting", "enterprise", "analytics", "dashboard", "team management", "admin"]
  },
  {
    title: "Live Instructor-Led",
    description: "Interactive training with expert instructors",
    category: "Feature",
    path: "/live-instructor-led",
    keywords: ["live", "instructor", "classroom", "interactive", "real-time", "training"]
  },
  {
    title: "Desktop Apps Training",
    description: "Microsoft Office, Adobe, business applications",
    category: "Feature",
    path: "/desktop-apps",
    keywords: ["desktop apps", "microsoft office", "excel", "word", "powerpoint", "adobe"]
  },
  {
    title: "Security Awareness",
    description: "Employee security training and awareness programs",
    category: "Feature",
    path: "/security-awareness",
    keywords: ["security awareness", "phishing", "employee training", "compliance"]
  },
  {
    title: "Business Skills",
    description: "2,000+ courses in management, leadership, and professional development",
    category: "Feature",
    path: "/business-skills",
    keywords: ["business skills", "soft skills", "management", "leadership", "professional"]
  },
  {
    title: "StormAI Phishing",
    description: "AI-powered phishing simulation and training",
    category: "Feature",
    path: "/phishing",
    keywords: ["phishing", "security", "simulation", "awareness", "email security"]
  },
  {
    title: "HR Compliance",
    description: "Compliance training for human resources",
    category: "Feature",
    path: "/hr-compliance",
    keywords: ["hr", "compliance", "human resources", "regulations", "legal"]
  },
  
  // Popular Courses
  {
    title: "AZ-900: Azure Fundamentals",
    description: "Microsoft Azure fundamentals certification",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["az-900", "azure", "fundamentals", "cloud", "microsoft certification"]
  },
  {
    title: "MS-102: Microsoft 365 Administrator",
    description: "Microsoft 365 administration certification",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["ms-102", "microsoft 365", "m365", "admin", "certification"]
  },
  {
    title: "CCNA: Cisco Certified Network Associate",
    description: "Cisco networking fundamentals certification",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["ccna", "cisco", "networking", "certification", "routing", "switching"]
  },
  {
    title: "CompTIA Security+",
    description: "Entry-level cybersecurity certification",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["security+", "comptia", "security", "cybersecurity", "certification"]
  },
  {
    title: "AWS Cloud Practitioner",
    description: "Amazon Web Services fundamentals",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "cloud practitioner", "amazon", "cloud", "certification"]
  },
  {
    title: "PMP Certification",
    description: "Project Management Professional certification",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["pmp", "project management", "pmbok", "certification"]
  },
  {
    title: "Docker & Kubernetes",
    description: "Container orchestration and deployment",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["docker", "kubernetes", "containers", "orchestration", "devops"]
  },
  {
    title: "ChatGPT & AI Fundamentals",
    description: "Learn to use AI tools effectively",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "ai", "artificial intelligence", "openai", "prompt engineering"]
  },
];

export const searchItems = (query: string): SearchItem[] => {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const lowerQuery = query.toLowerCase().trim();
  
  // Score each item based on relevance
  const scoredItems = searchData.map(item => {
    let score = 0;
    
    // Exact title match gets highest score
    if (item.title.toLowerCase() === lowerQuery) {
      score += 100;
    }
    
    // Title starts with query
    if (item.title.toLowerCase().startsWith(lowerQuery)) {
      score += 50;
    }
    
    // Title contains query
    if (item.title.toLowerCase().includes(lowerQuery)) {
      score += 30;
    }
    
    // Description contains query
    if (item.description.toLowerCase().includes(lowerQuery)) {
      score += 20;
    }
    
    // Keywords contain query
    item.keywords.forEach(keyword => {
      if (keyword.toLowerCase() === lowerQuery) {
        score += 40;
      } else if (keyword.toLowerCase().includes(lowerQuery)) {
        score += 15;
      }
    });
    
    return { item, score };
  });
  
  // Filter items with score > 0 and sort by score
  return scoredItems
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8) // Return top 8 results
    .map(({ item }) => item);
};
