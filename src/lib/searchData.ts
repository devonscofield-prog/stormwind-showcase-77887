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
  
  // Microsoft Courses
  {
    title: "AZ-900: Azure Fundamentals",
    description: "Microsoft Azure fundamentals certification",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["az-900", "azure", "fundamentals", "cloud", "microsoft", "certification"]
  },
  {
    title: "AZ-104: Azure Administrator",
    description: "Microsoft Azure administrator certification",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["az-104", "azure", "administrator", "cloud", "microsoft", "certification"]
  },
  {
    title: "AZ-500: Azure Security Technologies",
    description: "Microsoft Azure security specialist certification",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["az-500", "azure", "security", "cloud", "microsoft", "certification"]
  },
  {
    title: "MS-102: Microsoft 365 Administrator",
    description: "Microsoft 365 administration certification",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["ms-102", "microsoft 365", "m365", "admin", "certification"]
  },
  {
    title: "Windows Server 2019 Administration",
    description: "Windows Server 2019 administration training",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["windows", "server", "2019", "administration", "microsoft", "windows server"]
  },
  {
    title: "Windows Server 2022",
    description: "Windows Server 2022 training",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["windows", "server", "2022", "microsoft", "windows server"]
  },
  {
    title: "Windows Server 2025 Administration",
    description: "Windows Server 2025 administration training",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["windows", "server", "2025", "administration", "microsoft", "windows server"]
  },
  {
    title: "AZ-800: Windows Server Hybrid Core Infrastructure",
    description: "Administering Windows Server hybrid core infrastructure",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["az-800", "windows", "server", "hybrid", "infrastructure", "microsoft"]
  },
  {
    title: "AZ-801: Windows Server Hybrid Advanced Services",
    description: "Configuring Windows Server hybrid advanced services",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["az-801", "windows", "server", "hybrid", "services", "microsoft"]
  },
  {
    title: "Active Directory Administration",
    description: "Active Directory administration and management",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["active directory", "ad", "directory services", "ldap", "microsoft", "administration"]
  },
  {
    title: "PowerShell Fundamentals",
    description: "Windows PowerShell fundamentals training",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["powershell", "scripting", "automation", "windows", "microsoft"]
  },
  {
    title: "SharePoint 365 Administration",
    description: "SharePoint 365 administration training",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["sharepoint", "365", "administration", "collaboration", "microsoft"]
  },
  {
    title: "Exchange Server Administration",
    description: "Microsoft Exchange Server administration",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["exchange", "server", "email", "messaging", "microsoft", "administration"]
  },
  
  // Cloud Courses
  {
    title: "AWS Cloud Practitioner",
    description: "Amazon Web Services cloud practitioner certification",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "cloud practitioner", "amazon", "cloud", "certification"]
  },
  {
    title: "AWS Solutions Architect Associate",
    description: "AWS solutions architect associate certification",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "solutions architect", "amazon", "cloud", "certification"]
  },
  {
    title: "Google Cloud Certified Associate",
    description: "Google Cloud Platform associate certification",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["gcp", "google cloud", "cloud", "certification"]
  },
  
  // Cybersecurity Courses
  {
    title: "CompTIA Security+",
    description: "Entry-level cybersecurity certification",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["security+", "comptia", "security", "cybersecurity", "certification"]
  },
  {
    title: "CISSP Certification",
    description: "Certified Information Systems Security Professional",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["cissp", "security", "cybersecurity", "certification", "isc2"]
  },
  {
    title: "Ethical Hacking",
    description: "Ethical hacking and penetration testing",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["ethical hacking", "penetration testing", "hacking", "security", "ceh"]
  },
  {
    title: "CompTIA CySA+",
    description: "Cybersecurity analyst certification",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["cysa", "comptia", "security", "analyst", "cybersecurity", "certification"]
  },
  
  // Networking Courses
  {
    title: "CCNA: Cisco Certified Network Associate",
    description: "Cisco networking fundamentals certification",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["ccna", "cisco", "networking", "certification", "routing", "switching"]
  },
  {
    title: "CompTIA Network+",
    description: "CompTIA networking certification",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["network+", "comptia", "networking", "certification"]
  },
  {
    title: "CCNP Enterprise",
    description: "Cisco certified network professional enterprise",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["ccnp", "cisco", "networking", "enterprise", "certification", "advanced"]
  },
  {
    title: "Wireshark",
    description: "Network protocol analyzer and packet capture",
    category: "Course",
    path: "/courses?category=Bytes",
    keywords: ["wireshark", "network", "packet", "capture", "protocol", "analyzer", "troubleshooting", "bytes"]
  },
  {
    title: "IPv6",
    description: "Internet Protocol version 6 fundamentals",
    category: "Course",
    path: "/courses?category=Bytes",
    keywords: ["ipv6", "networking", "internet protocol", "ip", "bytes"]
  },
  {
    title: "ITIL Foundations",
    description: "IT service management framework",
    category: "Course",
    path: "/courses?category=Bytes",
    keywords: ["itil", "service management", "framework", "it", "bytes"]
  },
  {
    title: "NIST Cybersecurity Framework",
    description: "National Institute of Standards and Technology security framework",
    category: "Course",
    path: "/courses?category=Bytes",
    keywords: ["nist", "framework", "security", "cybersecurity", "standards", "bytes"]
  },
  
  // AI Courses
  {
    title: "ChatGPT & AI Fundamentals",
    description: "Learn to use AI tools effectively",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "ai", "artificial intelligence", "openai", "prompt engineering"]
  },
  {
    title: "ChatGPT for IT Professionals",
    description: "Using ChatGPT for IT tasks and automation",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "ai", "it", "automation", "professionals", "bytes"]
  },
  {
    title: "Microsoft 365 Copilot",
    description: "Microsoft 365 Copilot training",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["copilot", "microsoft 365", "ai", "productivity", "automation"]
  },
  {
    title: "Prompt Engineering",
    description: "Crafting effective AI prompts",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["prompt engineering", "ai", "chatgpt", "prompts", "llm"]
  },
  {
    title: "ChatGPT Enterprise Adoption",
    description: "Executive briefing on ChatGPT enterprise adoption",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "enterprise", "adoption", "executive", "ai", "bytes"]
  },
  {
    title: "ChatGPT for Efficiency",
    description: "Executive briefing on ChatGPT efficiency",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "efficiency", "productivity", "executive", "ai", "bytes"]
  },
  {
    title: "ChatGPT Quickstart",
    description: "Quick start guide to ChatGPT",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "quickstart", "getting started", "ai", "bytes"]
  },
  {
    title: "ChatGPT Tools and Features",
    description: "ChatGPT tools and features overview",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "tools", "features", "ai", "bytes"]
  },
  {
    title: "Intro to ChatGPT Prompting",
    description: "Introduction to ChatGPT prompting",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "prompting", "prompt", "ai", "bytes"]
  },
  {
    title: "Under the Hood of ChatGPT",
    description: "Understanding how ChatGPT works",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "under the hood", "how it works", "ai", "bytes"]
  },
  {
    title: "Copilot in Word",
    description: "Microsoft Copilot for Word",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["copilot", "word", "microsoft", "ai", "productivity"]
  },
  {
    title: "Copilot in Excel",
    description: "Microsoft Copilot for Excel",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["copilot", "excel", "microsoft", "ai", "productivity"]
  },
  {
    title: "Copilot in PowerPoint",
    description: "Microsoft Copilot for PowerPoint",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["copilot", "powerpoint", "microsoft", "ai", "productivity"]
  },
  {
    title: "Copilot in Outlook",
    description: "Microsoft Copilot for Outlook",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["copilot", "outlook", "microsoft", "ai", "productivity", "email"]
  },
  {
    title: "Copilot in Teams",
    description: "Microsoft Copilot for Teams",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["copilot", "teams", "microsoft", "ai", "collaboration"]
  },
  {
    title: "Google Gemini",
    description: "Google Gemini AI assistant",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["gemini", "google", "ai", "assistant", "workspace"]
  },
  
  // DevOps Courses
  {
    title: "Docker & Kubernetes",
    description: "Container orchestration and deployment",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["docker", "kubernetes", "containers", "orchestration", "devops"]
  },
  {
    title: "Git & GitHub",
    description: "Version control with Git and GitHub",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["git", "github", "version control", "source control", "devops"]
  },
  {
    title: "Terraform Infrastructure as Code",
    description: "Infrastructure as code with Terraform",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["terraform", "infrastructure as code", "iac", "devops", "automation"]
  },
  {
    title: "CI/CD with GitHub Actions",
    description: "Continuous integration and deployment",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["cicd", "github actions", "continuous integration", "deployment", "devops"]
  },
  {
    title: "Ansible Automation",
    description: "Automation with Ansible",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["ansible", "automation", "configuration management", "devops"]
  },
  
  // Project Management Courses
  {
    title: "PMP Certification",
    description: "Project Management Professional certification",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["pmp", "project management", "pmbok", "certification", "pmi"]
  },
  {
    title: "Agile & Scrum",
    description: "Agile project management and Scrum framework",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["agile", "scrum", "project management", "methodology"]
  },
  {
    title: "PMI-ACP: Agile Certified Practitioner",
    description: "PMI Agile certified practitioner",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["pmi-acp", "agile", "certification", "project management"]
  },
  {
    title: "CAPM Certification",
    description: "Certified Associate in Project Management",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["capm", "project management", "certification", "entry level"]
  },
  {
    title: "AI for Project Managers",
    description: "Using AI in project management",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["ai", "project management", "artificial intelligence", "automation", "bytes"]
  },
  {
    title: "Agile Principles",
    description: "Core principles of agile methodology",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["agile", "principles", "methodology", "project management", "bytes"]
  },
  {
    title: "Agile Roles",
    description: "Roles in agile teams",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["agile", "roles", "scrum master", "product owner", "project management", "bytes"]
  },
  {
    title: "Agile Frameworks",
    description: "Overview of agile frameworks",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["agile", "frameworks", "scrum", "kanban", "project management", "bytes"]
  },
  {
    title: "Agile Ceremonies",
    description: "Agile ceremonies and meetings",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["agile", "ceremonies", "sprint", "standup", "retrospective", "bytes"]
  },
  {
    title: "Agile Estimating",
    description: "Estimation techniques in agile",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["agile", "estimating", "story points", "planning poker", "bytes"]
  },
  
  // Full Stack Developer Courses
  {
    title: "React Development",
    description: "Modern React development training",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["react", "javascript", "frontend", "web development", "jsx"]
  },
  {
    title: "Node.js & Express",
    description: "Backend development with Node.js",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["nodejs", "node", "express", "backend", "javascript"]
  },
  {
    title: "Python Programming",
    description: "Python programming fundamentals",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["python", "programming", "development", "coding"]
  },
  {
    title: "MongoDB & Databases",
    description: "Database design and management",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["mongodb", "database", "nosql", "data"]
  },
  {
    title: "Vue.js Development",
    description: "Vue.js framework for web development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["vue", "vuejs", "javascript", "frontend", "web development"]
  },
  {
    title: "Angular Development",
    description: "Angular framework for web applications",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["angular", "typescript", "javascript", "frontend", "web development"]
  },
  {
    title: "Next.js Development",
    description: "React framework for production",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["nextjs", "next", "react", "ssr", "web development"]
  },
  {
    title: "TypeScript",
    description: "TypeScript programming language",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["typescript", "javascript", "programming", "types"]
  },
  {
    title: "GraphQL",
    description: "GraphQL API development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["graphql", "api", "query", "backend"]
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["tailwind", "css", "styling", "frontend"]
  },
  {
    title: "Bootstrap",
    description: "Bootstrap CSS framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["bootstrap", "css", "framework", "responsive"]
  },
  {
    title: "Firebase",
    description: "Firebase backend services",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["firebase", "backend", "database", "google"]
  },
  
  // Help Desk & Desktop Courses
  {
    title: "CompTIA A+",
    description: "CompTIA A+ certification training",
    category: "Course",
    path: "/courses?category=Help Desk",
    keywords: ["a+", "comptia", "help desk", "it support", "certification"]
  },
  {
    title: "ITIL v4 Foundations",
    description: "ITIL service management fundamentals",
    category: "Course",
    path: "/courses?category=Help Desk",
    keywords: ["itil", "service management", "it service", "certification"]
  },
  {
    title: "Windows 10 Troubleshooting",
    description: "Windows 10 support and troubleshooting",
    category: "Course",
    path: "/courses?category=Help Desk",
    keywords: ["windows 10", "troubleshooting", "support", "help desk"]
  },
  
  // Desktop Applications
  {
    title: "Microsoft Word",
    description: "Microsoft Word training and skills",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["word", "microsoft", "office", "documents", "desktop"]
  },
  {
    title: "Microsoft Excel",
    description: "Microsoft Excel training and skills",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["excel", "microsoft", "office", "spreadsheets", "desktop"]
  },
  {
    title: "Microsoft PowerPoint",
    description: "Microsoft PowerPoint training and skills",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["powerpoint", "microsoft", "office", "presentations", "desktop"]
  },
  {
    title: "Microsoft Outlook",
    description: "Microsoft Outlook training and skills",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["outlook", "microsoft", "office", "email", "desktop"]
  },
  {
    title: "Adobe Photoshop",
    description: "Adobe Photoshop training",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["photoshop", "adobe", "image editing", "design", "desktop"]
  },
  {
    title: "Adobe Illustrator",
    description: "Adobe Illustrator training",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["illustrator", "adobe", "vector", "design", "desktop"]
  },
  
  // Security Awareness
  {
    title: "Phishing Awareness",
    description: "Recognize and avoid phishing attacks",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["phishing", "security", "awareness", "email", "cybersecurity"]
  },
  {
    title: "Password Security",
    description: "Password security best practices",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["password", "security", "authentication", "awareness"]
  },
  {
    title: "Social Engineering",
    description: "Understanding social engineering attacks",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["social engineering", "security", "awareness", "manipulation"]
  },
  {
    title: "Data Protection",
    description: "Data protection and privacy fundamentals",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["data protection", "privacy", "security", "gdpr", "compliance"]
  },
  {
    title: "Ransomware Defense",
    description: "Protecting against ransomware attacks",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["ransomware", "security", "malware", "awareness", "protection"]
  },
  
  // Virtualization
  {
    title: "VMware vSphere",
    description: "VMware vSphere virtualization training",
    category: "Course",
    path: "/courses?category=VDI/Virtualization",
    keywords: ["vmware", "vsphere", "virtualization", "vdi", "datacenter"]
  },
  {
    title: "Citrix VDI",
    description: "Citrix virtual desktop infrastructure",
    category: "Course",
    path: "/courses?category=VDI/Virtualization",
    keywords: ["citrix", "vdi", "virtualization", "virtual desktop"]
  },
  {
    title: "VMware Horizon",
    description: "VMware Horizon virtual desktop",
    category: "Course",
    path: "/courses?category=VDI/Virtualization",
    keywords: ["vmware", "horizon", "vdi", "virtual desktop", "virtualization"]
  },
  
  // Power Platform
  {
    title: "Power BI",
    description: "Microsoft Power BI data visualization",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["power bi", "powerbi", "data", "visualization", "analytics", "microsoft"]
  },
  {
    title: "Power Apps",
    description: "Microsoft Power Apps development",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["power apps", "powerapps", "low code", "microsoft", "development"]
  },
  {
    title: "Power Automate",
    description: "Microsoft Power Automate workflow automation",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["power automate", "flow", "automation", "microsoft", "workflow"]
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