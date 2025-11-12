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
  
  // More Full Stack Languages & Frameworks
  {
    title: "TypeScript",
    description: "TypeScript programming language",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["typescript", "javascript", "programming", "types", "ts"]
  },
  {
    title: "GraphQL",
    description: "GraphQL API development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["graphql", "api", "query", "backend", "rest"]
  },
  {
    title: "Svelte",
    description: "Svelte framework for web development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["svelte", "javascript", "framework", "frontend", "sveltekit"]
  },
  {
    title: "Django",
    description: "Django Python web framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["django", "python", "web framework", "backend"]
  },
  {
    title: "Flask",
    description: "Flask Python web framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["flask", "python", "web framework", "backend", "microframework"]
  },
  {
    title: "Laravel",
    description: "Laravel PHP web framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["laravel", "php", "web framework", "backend"]
  },
  {
    title: "Go (Golang)",
    description: "Go programming language",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["go", "golang", "programming", "backend", "google"]
  },
  {
    title: "Dart & Flutter",
    description: "Dart programming and Flutter mobile development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["dart", "flutter", "mobile", "android", "ios", "app development"]
  },
  {
    title: "ASP.NET Core",
    description: "ASP.NET Core web development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["asp.net", "aspnet", "core", "c#", "csharp", "microsoft", ".net"]
  },
  {
    title: "C# Programming",
    description: "C# programming language",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["c#", "csharp", "c sharp", "programming", "microsoft", ".net"]
  },
  {
    title: "Entity Framework",
    description: "Entity Framework ORM for .NET",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["entity framework", "ef", "orm", ".net", "database"]
  },
  {
    title: "Blazor",
    description: "Blazor web framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["blazor", "c#", "web", "spa", ".net"]
  },
  {
    title: "PostgreSQL",
    description: "PostgreSQL database",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["postgresql", "postgres", "database", "sql", "relational"]
  },
  {
    title: "Redis",
    description: "Redis in-memory database",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["redis", "cache", "database", "nosql", "memory"]
  },
  {
    title: "Supabase",
    description: "Supabase backend services",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["supabase", "backend", "database", "postgres", "firebase alternative"]
  },
  {
    title: "Strapi",
    description: "Strapi headless CMS",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["strapi", "cms", "headless", "backend"]
  },
  {
    title: "SASS",
    description: "SASS CSS preprocessor",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["sass", "scss", "css", "preprocessor", "styling"]
  },
  {
    title: "Material UI",
    description: "Material UI React component library",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["material ui", "mui", "react", "components", "ui library"]
  },
  {
    title: "Shadcn UI",
    description: "Shadcn UI component library",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["shadcn", "ui", "components", "react", "tailwind"]
  },
  {
    title: "Chakra UI",
    description: "Chakra UI React component library",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["chakra ui", "react", "components", "ui library"]
  },
  {
    title: "Nuxt.js",
    description: "Nuxt.js Vue framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["nuxt", "nuxtjs", "vue", "ssr", "framework"]
  },
  {
    title: "Alpine.js",
    description: "Alpine.js lightweight framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["alpine", "alpinejs", "javascript", "lightweight", "framework"]
  },
  {
    title: "HTMX",
    description: "HTMX for dynamic HTML",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["htmx", "html", "ajax", "dynamic", "hypermedia"]
  },
  {
    title: "Vite",
    description: "Vite build tool",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["vite", "build tool", "bundler", "development"]
  },
  {
    title: "Deno",
    description: "Deno JavaScript runtime",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["deno", "javascript", "typescript", "runtime", "nodejs alternative"]
  },
  {
    title: "Remix.js",
    description: "Remix full stack framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["remix", "remixjs", "react", "full stack", "framework"]
  },
  {
    title: "SvelteKit",
    description: "SvelteKit application framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["sveltekit", "svelte", "framework", "ssr"]
  },
  {
    title: "Solid.js",
    description: "Solid.js reactive framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["solid", "solidjs", "reactive", "javascript", "framework"]
  },
  {
    title: "Qwik",
    description: "Qwik framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["qwik", "framework", "performance", "resumability"]
  },
  {
    title: "Express.js",
    description: "Express.js Node.js framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["express", "expressjs", "nodejs", "backend", "api"]
  },
  {
    title: "RabbitMQ",
    description: "RabbitMQ message broker",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["rabbitmq", "message broker", "queue", "messaging"]
  },
  {
    title: "MERN Stack",
    description: "MongoDB, Express, React, Node.js stack",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["mern", "mongodb", "express", "react", "nodejs", "stack"]
  },
  {
    title: "Bulma CSS",
    description: "Bulma CSS framework",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["bulma", "css", "framework", "styling"]
  },
  {
    title: "Vuetify",
    description: "Vuetify Vue component library",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["vuetify", "vue", "components", "material design", "ui library"]
  },
  {
    title: "Pinia",
    description: "Pinia Vue state management",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["pinia", "vue", "state management", "vuex"]
  },
  {
    title: "Riverpod",
    description: "Riverpod Flutter state management",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["riverpod", "flutter", "state management", "dart"]
  },
  {
    title: ".NET MAUI",
    description: ".NET MAUI mobile development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["maui", ".net maui", "mobile", "xamarin", "cross-platform"]
  },
  {
    title: "React Native",
    description: "React Native mobile development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["react native", "mobile", "ios", "android", "react"]
  },
  {
    title: "Swift",
    description: "Swift iOS development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["swift", "ios", "apple", "mobile", "swiftui"]
  },
  {
    title: "Contentful",
    description: "Contentful headless CMS",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["contentful", "cms", "headless", "content management"]
  },
  {
    title: "Netlify",
    description: "Netlify deployment and hosting",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["netlify", "deployment", "hosting", "jamstack"]
  },
  {
    title: "Figma",
    description: "Figma to code design",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["figma", "design", "ui", "ux", "prototyping"]
  },
  {
    title: "OpenAI API",
    description: "OpenAI API development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["openai", "api", "gpt", "ai", "chatgpt"]
  },
  {
    title: "LangChain",
    description: "LangChain AI development",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["langchain", "ai", "llm", "chains", "agents"]
  },
  {
    title: "Embeddings",
    description: "Vector databases and embeddings",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["embeddings", "vector database", "ai", "similarity search"]
  },
  {
    title: "Mistral AI",
    description: "Mistral AI models",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["mistral", "ai", "llm", "models"]
  },
  {
    title: "Cloudflare",
    description: "Cloudflare deployment",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["cloudflare", "deployment", "cdn", "workers"]
  },
  {
    title: "Clean Code",
    description: "Clean code principles",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["clean code", "best practices", "programming", "code quality"]
  },
  {
    title: "Unit Testing",
    description: "Unit testing fundamentals",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["unit testing", "testing", "tdd", "test driven development"]
  },
  {
    title: "Regular Expressions",
    description: "Regular expressions tutorial",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["regex", "regular expressions", "pattern matching"]
  },
  {
    title: "Accessibility",
    description: "Web accessibility",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["accessibility", "a11y", "wcag", "inclusive design"]
  },
  {
    title: "Markdown",
    description: "Markdown syntax",
    category: "Course",
    path: "/courses?category=Full Stack Developer",
    keywords: ["markdown", "documentation", "formatting"]
  },
  
  // More Networking Courses
  {
    title: "BGP Routing",
    description: "BGP routing fundamentals",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["bgp", "routing", "border gateway protocol", "networking"]
  },
  {
    title: "Fortinet NSE",
    description: "Fortinet security and networking",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["fortinet", "firewall", "security", "fortigate", "nse", "fortianalyzer", "fortimanager"]
  },
  {
    title: "Juniper JNCIA",
    description: "Juniper networking certifications",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["juniper", "networking", "jncia", "jncis", "jncip", "routing", "switching", "junos"]
  },
  {
    title: "Aruba ACA",
    description: "Aruba networking",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["aruba", "wireless", "networking", "aca", "campus access"]
  },
  {
    title: "Cisco Meraki",
    description: "Cisco Meraki cloud networking",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "meraki", "cloud", "networking", "wireless", "firewall", "switches"]
  },
  {
    title: "SonicWall",
    description: "SonicWall firewall training",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["sonicwall", "firewall", "security", "networking", "sonicos"]
  },
  {
    title: "CWNA",
    description: "Certified Wireless Network Administrator",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cwna", "wireless", "networking", "wifi", "certification"]
  },
  {
    title: "Cisco DevNet",
    description: "Cisco DevNet Associate",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["devnet", "cisco", "automation", "programming", "api"]
  },
  {
    title: "Cisco UCCX",
    description: "Cisco Unified Contact Center Express",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["uccx", "cisco", "contact center", "collaboration", "call center"]
  },
  {
    title: "Cisco ACI",
    description: "Cisco Application Centric Infrastructure",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["aci", "cisco", "sdn", "software defined networking", "datacenter"]
  },
  {
    title: "GNS3",
    description: "Network modeling with GNS3",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["gns3", "network", "simulation", "lab", "modeling"]
  },
  
  // More Cybersecurity Courses
  {
    title: "CEH - Certified Ethical Hacker",
    description: "Certified Ethical Hacker",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["ceh", "ethical hacking", "penetration testing", "ec-council", "hacking"]
  },
  {
    title: "CISA",
    description: "Certified Information Systems Auditor",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["cisa", "audit", "isaca", "security", "certification"]
  },
  {
    title: "CISM",
    description: "Certified Information Security Manager",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["cism", "management", "isaca", "security", "certification"]
  },
  {
    title: "CRISC",
    description: "Certified in Risk and Information Systems Control",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["crisc", "risk", "isaca", "security", "certification"]
  },
  {
    title: "CCISO",
    description: "Chief Information Security Officer",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["cciso", "ciso", "executive", "security", "leadership"]
  },
  {
    title: "CHFI",
    description: "Computer Hacking Forensic Investigator",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["chfi", "forensics", "investigation", "ec-council"]
  },
  {
    title: "SecurityX",
    description: "CompTIA SecurityX",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["securityx", "comptia", "cas", "advanced security"]
  },
  {
    title: "Check Point CCSA",
    description: "Check Point firewall certification",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["check point", "checkpoint", "ccsa", "firewall", "security"]
  },
  {
    title: "Splunk Core",
    description: "Splunk SIEM and monitoring",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["splunk", "siem", "monitoring", "security", "logs", "analytics"]
  },
  {
    title: "Okta Certified Professional",
    description: "Okta identity and access management",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["okta", "identity", "iam", "access management", "sso", "authentication"]
  },
  {
    title: "F5 Application Delivery",
    description: "F5 application delivery",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["f5", "load balancer", "application delivery", "networking", "big-ip"]
  },
  {
    title: "Cisco Firepower",
    description: "Cisco Firepower Services",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["firepower", "cisco", "firewall", "security", "ngfw"]
  },
  {
    title: "CyberOps Associate",
    description: "Cisco CyberOps Associate",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["cyberops", "cisco", "security operations", "soc"]
  },
  {
    title: "Metasploit",
    description: "Metasploit penetration testing",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["metasploit", "penetration testing", "exploit", "hacking"]
  },
  {
    title: "Nmap",
    description: "Nmap network scanning",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["nmap", "network scanning", "reconnaissance", "port scan"]
  },
  
  // Business Pro Power Platform
  {
    title: "PL-300 Power BI Data Analyst",
    description: "Microsoft Power BI Data Analyst certification",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["pl-300", "power bi", "data analyst", "microsoft", "certification"]
  },
  {
    title: "PL-900 Power Platform Fundamentals",
    description: "Microsoft Power Platform Fundamentals",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["pl-900", "power platform", "fundamentals", "microsoft"]
  },
  {
    title: "Tableau Desktop",
    description: "Tableau data visualization",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["tableau", "data visualization", "analytics", "dashboard", "bi"]
  },
  {
    title: "Microsoft Fabric",
    description: "Microsoft Fabric data platform",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["fabric", "microsoft fabric", "data", "analytics", "unified", "lakehouse"]
  },
  {
    title: "Azure Databricks",
    description: "Azure Databricks data engineering",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["databricks", "azure", "data engineering", "spark", "analytics", "delta lake"]
  },
  {
    title: "Copilot Studio",
    description: "Microsoft Copilot Studio",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["copilot studio", "microsoft", "ai", "agents", "chatbot", "power virtual agents"]
  },
  {
    title: "Power Pages",
    description: "Microsoft Power Pages",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["power pages", "microsoft", "low code", "websites", "portals"]
  },
  {
    title: "Azure Data Factory",
    description: "Azure Data Factory ETL",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["data factory", "azure", "etl", "pipelines", "integration"]
  },
  {
    title: "Azure Synapse",
    description: "Azure Synapse Analytics",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["synapse", "azure", "data warehouse", "analytics", "big data"]
  },
  {
    title: "Azure SQL",
    description: "Azure SQL Database",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["azure sql", "database", "sql server", "managed instance"]
  },
  {
    title: "DAX",
    description: "Data Analysis Expressions for Power BI",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["dax", "power bi", "formulas", "calculations", "data analysis"]
  },
  {
    title: "Power Query",
    description: "Power Query data transformation",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["power query", "etl", "data transformation", "power bi"]
  },
  {
    title: "Dataverse",
    description: "Microsoft Dataverse",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["dataverse", "common data service", "cds", "database", "power platform"]
  },
  
  // More Desktop Apps
  {
    title: "Microsoft Teams",
    description: "Microsoft Teams collaboration",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["teams", "microsoft teams", "collaboration", "meetings", "chat", "video"]
  },
  {
    title: "OneDrive",
    description: "Microsoft OneDrive cloud storage",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["onedrive", "microsoft", "cloud storage", "files", "sync", "sharepoint"]
  },
  {
    title: "OneNote",
    description: "Microsoft OneNote note-taking",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["onenote", "microsoft", "notes", "notebook", "organization"]
  },
  {
    title: "Planner",
    description: "Microsoft Planner task management",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["planner", "microsoft", "tasks", "project", "kanban", "to-do"]
  },
  {
    title: "Slack",
    description: "Slack collaboration platform",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["slack", "collaboration", "chat", "messaging", "workspace", "communication"]
  },
  {
    title: "Adobe InDesign",
    description: "Adobe InDesign desktop publishing",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["indesign", "adobe", "desktop publishing", "layout", "design", "print"]
  },
  {
    title: "Adobe Lightroom",
    description: "Adobe Lightroom photo editing",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["lightroom", "adobe", "photo editing", "photography", "images"]
  },
  {
    title: "Adobe Acrobat",
    description: "Adobe Acrobat PDF management",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["acrobat", "adobe", "pdf", "documents", "forms"]
  },
  {
    title: "Adobe InCopy",
    description: "Adobe InCopy collaborative writing",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["incopy", "adobe", "writing", "editing", "collaboration"]
  },
  {
    title: "Yammer",
    description: "Microsoft Yammer social networking",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["yammer", "microsoft", "social", "networking", "communication"]
  },
  {
    title: "Delve",
    description: "Microsoft Delve",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["delve", "microsoft", "search", "discovery", "content"]
  },
  {
    title: "Microsoft Project",
    description: "Microsoft Project management",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["project", "microsoft project", "project management", "planning", "scheduling"]
  },
  {
    title: "Access",
    description: "Microsoft Access database",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["access", "microsoft access", "database", "tables", "queries"]
  },
  {
    title: "Visio",
    description: "Microsoft Visio diagramming",
    category: "Course",
    path: "/courses?category=Desktop Applications",
    keywords: ["visio", "microsoft visio", "diagrams", "flowcharts", "visualization"]
  },
  
  // DevOps Tools
  {
    title: "Certified Kubernetes Administrator",
    description: "CKA certification",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["cka", "kubernetes", "k8s", "certification", "administrator", "linux foundation"]
  },
  {
    title: "Certified Kubernetes Application Developer",
    description: "CKAD certification",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["ckad", "kubernetes", "k8s", "certification", "developer", "application"]
  },
  {
    title: "Certified Kubernetes Security Specialist",
    description: "CKS certification",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["cks", "kubernetes", "k8s", "certification", "security"]
  },
  {
    title: "HashiCorp Vault",
    description: "HashiCorp Vault secrets management",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["vault", "hashicorp", "secrets", "security", "devops", "credentials"]
  },
  {
    title: "HashiCorp Consul",
    description: "HashiCorp Consul service mesh",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["consul", "hashicorp", "service mesh", "networking", "devops", "discovery"]
  },
  {
    title: "ArgoCD",
    description: "ArgoCD GitOps tool",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["argocd", "gitops", "kubernetes", "continuous deployment", "cd"]
  },
  {
    title: "FluxCD",
    description: "FluxCD GitOps tool",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["fluxcd", "flux", "gitops", "kubernetes", "continuous deployment"]
  },
  {
    title: "Prometheus",
    description: "Prometheus monitoring",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["prometheus", "monitoring", "metrics", "observability", "devops", "alerts"]
  },
  {
    title: "Grafana",
    description: "Grafana visualization",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["grafana", "visualization", "monitoring", "dashboard", "observability", "loki"]
  },
  {
    title: "GitLab CI/CD",
    description: "GitLab continuous integration and deployment",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["gitlab", "ci/cd", "continuous integration", "deployment", "pipeline", "devops"]
  },
  {
    title: "GitHub Actions",
    description: "GitHub Actions automation",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["github actions", "github", "ci/cd", "automation", "workflow", "actions"]
  },
  {
    title: "AWS CodePipeline",
    description: "AWS continuous delivery",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["codepipeline", "aws", "ci/cd", "continuous delivery", "pipeline"]
  },
  {
    title: "Helm",
    description: "Helm Kubernetes package manager",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["helm", "kubernetes", "package manager", "charts", "k8s", "deployment"]
  },
  {
    title: "Istio",
    description: "Istio service mesh",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["istio", "service mesh", "kubernetes", "microservices", "networking"]
  },
  {
    title: "Kustomize",
    description: "Kustomize Kubernetes configuration",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["kustomize", "kubernetes", "configuration", "yaml", "k8s"]
  },
  {
    title: "Puppet",
    description: "Puppet configuration management",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["puppet", "configuration management", "automation", "infrastructure"]
  },
  {
    title: "Bash Scripting",
    description: "Advanced Bash scripting",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["bash", "shell", "scripting", "linux", "automation"]
  },
  {
    title: "LPIC-1",
    description: "Linux Professional Institute certification",
    category: "Course",
    path: "/courses?category=DevOps",
    keywords: ["lpic", "linux", "certification", "sysadmin"]
  },
  
  // More Microsoft Certifications
  {
    title: "MS-900 Microsoft 365 Fundamentals",
    description: "Microsoft 365 fundamentals certification",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["ms-900", "microsoft 365", "m365", "fundamentals", "certification"]
  },
  {
    title: "MS-203 Exchange Messaging",
    description: "Microsoft 365 Exchange messaging",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["ms-203", "exchange", "messaging", "email", "microsoft 365"]
  },
  {
    title: "MS-700 Managing Microsoft Teams",
    description: "Managing Microsoft Teams",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["ms-700", "teams", "microsoft teams", "collaboration", "certification"]
  },
  {
    title: "MS-721 Collaboration Communications",
    description: "Collaboration Communications Systems Engineer",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["ms-721", "teams", "collaboration", "communications", "voice"]
  },
  {
    title: "MS-740 Troubleshooting Microsoft Teams",
    description: "Troubleshooting Microsoft Teams",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["ms-740", "teams", "troubleshooting", "support"]
  },
  {
    title: "MD-102 Endpoint Administrator",
    description: "Microsoft Endpoint Administrator",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["md-102", "endpoint", "intune", "microsoft", "administration", "device management"]
  },
  {
    title: "DP-900 Azure Data Fundamentals",
    description: "Azure Data Fundamentals",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["dp-900", "azure", "data", "fundamentals", "certification", "database"]
  },
  {
    title: "DP-300 Administering Relational Databases",
    description: "Administering Azure SQL databases",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["dp-300", "azure", "sql", "database", "administration", "dba"]
  },
  {
    title: "AI-900 Azure AI Fundamentals",
    description: "Azure AI Fundamentals",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["ai-900", "azure", "ai", "artificial intelligence", "fundamentals", "machine learning"]
  },
  {
    title: "AZ-140 Azure Virtual Desktop",
    description: "Configuring and Operating Azure Virtual Desktop",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["az-140", "azure", "virtual desktop", "avd", "vdi", "wvd"]
  },
  {
    title: "AZ-204 Developing Solutions for Azure",
    description: "Azure Developer certification",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["az-204", "azure", "developer", "development", "cloud"]
  },
  {
    title: "AZ-305 Designing Azure Infrastructure",
    description: "Designing Microsoft Azure Infrastructure Solutions",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["az-305", "azure", "architect", "infrastructure", "design", "solutions"]
  },
  {
    title: "AZ-400 DevOps Solutions",
    description: "Designing and Implementing Microsoft DevOps Solutions",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["az-400", "azure", "devops", "ci/cd", "certification"]
  },
  {
    title: "SC-200 Security Operations Analyst",
    description: "Microsoft Security Operations Analyst",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["sc-200", "security", "operations", "soc", "sentinel", "defender"]
  },
  {
    title: "SC-100 Cybersecurity Architect",
    description: "Microsoft Cybersecurity Architect",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["sc-100", "security", "architect", "cybersecurity", "design"]
  },
  {
    title: "70-761 Querying Data with Transact-SQL",
    description: "SQL Server Transact-SQL querying",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["70-761", "sql", "tsql", "transact-sql", "querying", "database"]
  },
  {
    title: "70-762 Developing SQL Databases",
    description: "SQL Server database development",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["70-762", "sql", "database", "development", "sql server"]
  },
  {
    title: "70-764 Administering SQL Database Infrastructure",
    description: "SQL Server database administration",
    category: "Course",
    path: "/courses?category=Microsoft",
    keywords: ["70-764", "sql", "database", "administration", "dba", "sql server"]
  },
  
  // More Cloud Courses
  {
    title: "AWS Solutions Architect Professional",
    description: "AWS Solutions Architect Professional certification",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "solutions architect", "professional", "cloud", "certification"]
  },
  {
    title: "AWS SysOps Administrator",
    description: "AWS System Operations certification",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "sysops", "system operations", "cloud", "administration"]
  },
  {
    title: "AWS DevOps Engineer",
    description: "AWS DevOps Engineer certification",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "devops", "engineer", "cloud", "ci/cd"]
  },
  {
    title: "AWS Security Specialty",
    description: "AWS Certified Security Specialty",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "security", "specialty", "cloud", "certification"]
  },
  {
    title: "AWS Data Analytics Specialty",
    description: "AWS Data Analytics Specialty",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "data", "analytics", "specialty", "big data"]
  },
  {
    title: "AWS Database Specialty",
    description: "AWS Database Specialty",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "database", "specialty", "rds", "dynamodb"]
  },
  {
    title: "AWS Advanced Networking",
    description: "AWS Advanced Networking Specialty",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["aws", "networking", "advanced", "specialty", "vpc"]
  },
  {
    title: "GCP Professional Cloud Architect",
    description: "Google Cloud Professional Cloud Architect",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["gcp", "google cloud", "architect", "professional", "certification"]
  },
  {
    title: "GCP Cloud Digital Leader",
    description: "Google Cloud Digital Leader",
    category: "Course",
    path: "/courses?category=Cloud",
    keywords: ["gcp", "google cloud", "digital leader", "fundamentals"]
  },
  
  // TOGAF & Architecture
  {
    title: "TOGAF",
    description: "TOGAF Enterprise Architecture",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["togaf", "enterprise architecture", "framework", "certification"]
  },
  
  // Lean Six Sigma
  {
    title: "Lean Six Sigma",
    description: "Lean Six Sigma certification",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["lean six sigma", "six sigma", "green belt", "yellow belt", "process improvement"]
  },
  
  // Windows Support
  {
    title: "Windows 10",
    description: "Windows 10 support and troubleshooting",
    category: "Course",
    path: "/courses?category=Help Desk",
    keywords: ["windows 10", "windows", "microsoft", "support", "troubleshooting", "desktop"]
  },
  {
    title: "Windows 11",
    description: "Windows 11 new features",
    category: "Course",
    path: "/courses?category=Help Desk",
    keywords: ["windows 11", "windows", "microsoft", "support", "desktop"]
  },
  {
    title: "CompTIA Tech+",
    description: "CompTIA Tech+ certification",
    category: "Course",
    path: "/courses?category=Help Desk",
    keywords: ["tech+", "comptia", "it fundamentals", "entry level"]
  },
  
  // Security Awareness Training
  {
    title: "Email Protection",
    description: "Email security and phishing awareness",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["email", "protection", "phishing", "security", "awareness"]
  },
  {
    title: "Guarding Your Passwords",
    description: "Password security best practices",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["password", "security", "authentication", "credentials", "awareness"]
  },
  {
    title: "Safe Systems Use",
    description: "Safe system usage practices",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["safe systems", "usage", "security", "awareness", "best practices"]
  },
  {
    title: "Staying Safe While Remote",
    description: "Remote work and travel security",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["remote", "travel", "working", "security", "awareness", "vpn"]
  },
  {
    title: "Safe Email Usage",
    description: "Email safety and best practices",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["email", "safe usage", "security", "awareness", "phishing"]
  },
  {
    title: "Emerging Security Concerns",
    description: "Executive briefing on security trends",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["emerging", "security", "concerns", "executive", "trends"]
  },
  {
    title: "Guiding Strategies for IT Security",
    description: "IT security strategy guidance",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["strategy", "it security", "guidance", "executive"]
  },
  {
    title: "Organizational System Threats",
    description: "Understanding organizational threats",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["threats", "organizational", "security", "awareness"]
  },
  {
    title: "Ransomware Defense",
    description: "Protecting against ransomware",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["ransomware", "defense", "protection", "malware", "security"]
  },
  {
    title: "Best Practices to Thwart Ransomware",
    description: "Ransomware prevention best practices",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["ransomware", "best practices", "prevention", "security"]
  },
  {
    title: "Cybersecurity Risks",
    description: "Understanding cybersecurity risks",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["cybersecurity", "risks", "threats", "security", "awareness"]
  },
  {
    title: "Secured Infrastructure",
    description: "Infrastructure security practices",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["infrastructure", "security", "secured", "awareness"]
  },
  {
    title: "Secured Mobile Devices",
    description: "Mobile device security",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["mobile", "devices", "security", "smartphone", "tablet"]
  },
  {
    title: "Secured Workstations",
    description: "Workstation security practices",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["workstation", "security", "desktop", "computer", "endpoint"]
  },
  {
    title: "Security Technologies",
    description: "Overview of security technologies",
    category: "Course",
    path: "/courses?category=Security Awareness",
    keywords: ["security", "technologies", "tools", "awareness"]
  },
  
  // More AI & OpenAI Courses
  {
    title: "Accelerating Back-End Development with ChatGPT",
    description: "Using ChatGPT for backend development",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "backend", "development", "ai", "coding"]
  },
  {
    title: "Accelerating Front-End Development with ChatGPT",
    description: "Using ChatGPT for frontend development",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "frontend", "development", "ai", "coding"]
  },
  {
    title: "Accelerating Web Development with ChatGPT",
    description: "Using ChatGPT for web development",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "web development", "ai", "coding", "fullstack"]
  },
  {
    title: "OpenAI Codex Tutorial",
    description: "OpenAI Codex for code generation",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["openai", "codex", "code generation", "ai", "programming"]
  },
  {
    title: "Deploy AI Apps on Cloudflare",
    description: "Deploying AI applications on Cloudflare",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["cloudflare", "ai apps", "deployment", "workers"]
  },
  {
    title: "Claude Code Tutorial",
    description: "Using Claude for coding",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["claude", "coding", "ai", "anthropic", "development"]
  },
  {
    title: "Model Context Protocol",
    description: "Introduction to Model Context Protocol",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["mcp", "model context protocol", "ai", "integration"]
  },
  {
    title: "AWS Certified AI Practitioner",
    description: "AWS AI certification",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["aws", "ai", "practitioner", "certification", "machine learning"]
  },
  {
    title: "OpenAI Tutorial Basics",
    description: "OpenAI API basics",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["openai", "tutorial", "basics", "api", "ai"]
  },
  {
    title: "Build AI Apps with ChatGPT and DALL-E",
    description: "Building AI applications with OpenAI tools",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "dall-e", "gpt-4", "ai apps", "development"]
  },
  {
    title: "Introduction to AI",
    description: "AI fundamentals and introduction",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["ai", "introduction", "fundamentals", "artificial intelligence"]
  },
  {
    title: "Introduction to Deep Learning",
    description: "Deep learning algorithms introduction",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["deep learning", "algorithms", "neural networks", "ai", "machine learning"]
  },
  {
    title: "Ethics Considerations for ChatGPT",
    description: "Ethical use of ChatGPT",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["ethics", "chatgpt", "ai ethics", "responsible ai"]
  },
  {
    title: "ChatGPT Features and Tools",
    description: "ChatGPT tools and features overview",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt", "features", "tools", "plugins", "ai"]
  },
  {
    title: "Getting Started with ChatGPT Plus",
    description: "ChatGPT Plus introduction",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["chatgpt plus", "premium", "subscription", "gpt-4"]
  },
  {
    title: "Safe Data Practices for ChatGPT",
    description: "Data security with ChatGPT",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["data", "security", "chatgpt", "privacy", "safe practices"]
  },
  {
    title: "AI Communication Mastery",
    description: "Crafting effective AI prompts",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["ai communication", "prompts", "prompt engineering", "effectiveness"]
  },
  {
    title: "AI Prompt Writing",
    description: "AI prompt writing techniques",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["prompt writing", "ai", "prompts", "techniques"]
  },
  {
    title: "Meta Llama2",
    description: "Meta's Llama2 and open source LLMs",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["llama2", "meta", "open source", "llm", "ai"]
  },
  {
    title: "AI Assisted Content Creation",
    description: "Content creation with AI from ideation to execution",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["ai", "content creation", "ideation", "writing", "productivity"]
  },
  {
    title: "AI Foundations for Users",
    description: "AI fundamentals from classification to creation",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["ai foundations", "classification", "creation", "fundamentals"]
  },
  {
    title: "AI Ethical Use and Responsibility",
    description: "Ethical and responsible AI use",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["ai ethics", "responsibility", "ethical use", "governance"]
  },
  {
    title: "Google Gemini in Docs",
    description: "Using Gemini in Google Docs",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["gemini", "google docs", "ai", "google workspace"]
  },
  {
    title: "Google Gemini in Gmail",
    description: "Using Gemini in Gmail",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["gemini", "gmail", "ai", "email", "google workspace"]
  },
  {
    title: "Google Gemini in Sheets",
    description: "Using Gemini in Google Sheets",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["gemini", "google sheets", "ai", "spreadsheets", "google workspace"]
  },
  {
    title: "Google Gemini in Slides",
    description: "Using Gemini in Google Slides",
    category: "Course",
    path: "/courses?category=AI",
    keywords: ["gemini", "google slides", "ai", "presentations", "google workspace"]
  },
  
  // More Project Management
  {
    title: "PM Leadership Skills: Motivating Your Team",
    description: "Motivating project teams",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["leadership", "motivation", "team management", "project management"]
  },
  {
    title: "PM Leadership Skills: Leading Change",
    description: "Leading organizational change",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["leadership", "change management", "transformation", "project management"]
  },
  {
    title: "PM Leadership Skills: Building High-Performing Teams",
    description: "Building effective project teams",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["leadership", "team building", "high performance", "project management"]
  },
  {
    title: "Emotional Intelligence and Psychological Safety",
    description: "EQ and psychological safety in project management",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["emotional intelligence", "eq", "psychological safety", "leadership"]
  },
  {
    title: "Practical Project Management with Microsoft Project",
    description: "Using Microsoft Project for project management",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["microsoft project", "project management", "planning", "scheduling"]
  },
  {
    title: "Microsoft Project 2019",
    description: "Microsoft Project 2019 training",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["microsoft project", "2019", "project management", "planning"]
  },
  {
    title: "TOGAF Part 1 Foundations",
    description: "TOGAF enterprise architecture foundations",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["togaf", "enterprise architecture", "foundations", "certification"]
  },
  {
    title: "TOGAF Part 2 Certified",
    description: "TOGAF enterprise architecture certified",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["togaf", "enterprise architecture", "certified", "advanced"]
  },
  {
    title: "Lean Six Sigma Green Belt",
    description: "Lean Six Sigma Green Belt certification",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["lean six sigma", "green belt", "process improvement", "quality"]
  },
  {
    title: "Lean Six Sigma Yellow Belt",
    description: "Lean Six Sigma Yellow Belt certification",
    category: "Course",
    path: "/courses?category=Project Management",
    keywords: ["lean six sigma", "yellow belt", "process improvement", "quality"]
  },
  
  // More Cisco & Networking
  {
    title: "Cisco CCNP Service Provider",
    description: "Cisco CCNP Service Provider certification",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "ccnp", "service provider", "spcor", "networking"]
  },
  {
    title: "Cisco Wireless Fundamentals",
    description: "Cisco wireless networking fundamentals",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "wireless", "wifi", "fundamentals", "wlfndu"]
  },
  {
    title: "Cisco Wireless LAN Essentials",
    description: "Cisco wireless LAN essentials",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "wireless lan", "wifi", "essentials"]
  },
  {
    title: "Cisco Collaboration CLCOR",
    description: "Cisco CCNP Collaboration CLCOR",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "collaboration", "clcor", "ccnp", "voice"]
  },
  {
    title: "Cisco Collaboration CLICA",
    description: "Cisco CCNP Collaboration CLICA",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "collaboration", "clica", "ccnp", "voice"]
  },
  {
    title: "Cisco Security SCOR",
    description: "Cisco CCNP Security SCOR",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "security", "scor", "ccnp", "firewall"]
  },
  {
    title: "Cisco Security SISE",
    description: "Cisco CCNP Security SISE",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "security", "sise", "ccnp", "ise"]
  },
  {
    title: "Cisco Security SVPN",
    description: "Cisco CCNP Security SVPN",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "security", "svpn", "ccnp", "vpn"]
  },
  {
    title: "Cisco ENWLSI",
    description: "Cisco CCNP Enterprise Wireless",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "enwlsi", "enterprise", "wireless", "ccnp"]
  },
  {
    title: "Cisco ENSLD",
    description: "Cisco CCNP Enterprise Design",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "ensld", "enterprise", "design", "ccnp"]
  },
  {
    title: "Cisco ENARSI",
    description: "Cisco CCNP Enterprise Advanced Routing",
    category: "Course",
    path: "/courses?category=Networking",
    keywords: ["cisco", "enarsi", "routing", "ccnp", "advanced"]
  },
  {
    title: "Wireless and Mobile Security",
    description: "Wireless and mobile device security",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["wireless", "mobile", "security", "wifi", "bluetooth"]
  },
  {
    title: "Network Defender Professional",
    description: "EC-Council Network Defender",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["network defender", "ec-council", "security", "defense"]
  },
  {
    title: "Penetration Testing Professional",
    description: "EC-Council Penetration Testing",
    category: "Course",
    path: "/courses?category=Cybersecurity",
    keywords: ["penetration testing", "ec-council", "pentest", "ethical hacking"]
  },
  
  // Coming Soon Courses
  {
    title: "CompTIA Linux+",
    description: "CompTIA Linux+ certification",
    category: "Course",
    path: "/courses?category=Coming Soon",
    keywords: ["linux+", "comptia", "linux", "certification", "coming soon"]
  },
  {
    title: "CMMC Program Foundations",
    description: "Cybersecurity Maturity Model Certification",
    category: "Course",
    path: "/courses?category=Coming Soon",
    keywords: ["cmmc", "cybersecurity", "dod", "compliance", "coming soon"]
  },
  {
    title: "Cisco CCNA Cybersecurity",
    description: "Cisco CCNA Cybersecurity certification",
    category: "Course",
    path: "/courses?category=Coming Soon",
    keywords: ["cisco", "ccna", "cybersecurity", "security", "coming soon"]
  },
  {
    title: "Cisco CCNA Automation",
    description: "Cisco CCNA Automation certification",
    category: "Course",
    path: "/courses?category=Coming Soon",
    keywords: ["cisco", "ccna", "automation", "devnet", "coming soon"]
  },
  {
    title: "Proxmox VE",
    description: "Proxmox Virtual Environment training",
    category: "Course",
    path: "/courses?category=Coming Soon",
    keywords: ["proxmox", "virtualization", "virtual environment", "hypervisor", "coming soon"]
  },
  {
    title: "AB-100 Agentic AI",
    description: "Agentic AI Business Solutions Architect",
    category: "Course",
    path: "/courses?category=Coming Soon",
    keywords: ["ab-100", "agentic ai", "ai agents", "microsoft", "coming soon"]
  },
  
  // More Business Skills
  {
    title: "Leadership Skills",
    description: "Leadership and management skills",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["leadership", "management", "skills", "business", "soft skills"]
  },
  {
    title: "Communication Skills",
    description: "Effective business communication",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["communication", "skills", "business", "presentation", "writing"]
  },
  {
    title: "Time Management",
    description: "Time management and productivity",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["time management", "productivity", "efficiency", "business skills"]
  },
  {
    title: "Career Development",
    description: "Professional career development",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["career", "development", "professional", "growth", "advancement"]
  },
  {
    title: "Sales Skills",
    description: "Sales and business development skills",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["sales", "selling", "business development", "negotiation"]
  },
  {
    title: "Customer Service",
    description: "Customer service excellence",
    category: "Course",
    path: "/courses?category=Business Pro",
    keywords: ["customer service", "support", "client relations", "satisfaction"]
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