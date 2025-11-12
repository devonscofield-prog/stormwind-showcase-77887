import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Zap, Search, EyeOff, Eye } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import stormwindLogo from "@/assets/stormwind-logo.png";

type Course = string | { name: string; isBytes?: boolean; isComingSoon?: boolean; isWebinar?: boolean };

const Courses = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.title = "Course Catalog - StormWind Studios";
  }, []);

  const courseData = {
    "Microsoft": {
      "Azure Fundamentals": [
        { name: "AZ-900: Microsoft Azure Fundamentals" },
        { name: "AZ-900: Microsoft Azure Fundamentals Exam Crash", isBytes: true },
        { name: "AI-900: Microsoft Azure AI Fundamentals" },
        { name: "AZ-104: Microsoft Azure Administrator" },
        { name: "AZ-305: Designing Microsoft Azure Infrastructure Solutions" },
        { name: "AZ-700: Designing and Implementing Microsoft Azure Networking Solutions" },
        { name: "AZ-140: Configuring and Operating Microsoft Azure Virtual Desktop" },
        { name: "AZ-204: Developing Solutions for Microsoft Azure" },
        { name: "Implementing and Managing Azure Cloud with PowerShell" },
        { name: "Azure Range Trailhead" },
        { name: "Microsoft Azure for .NET Developers" },
      ],
      "Azure Security": [
        { name: "AZ-500: Microsoft Azure Security Technologies" },
        { name: "SC-900: Microsoft Security, Compliance, and Identity Fundamentals" },
        { name: "SC-100: Microsoft Cybersecurity Architect" },
        { name: "SC-200: Microsoft Security Operations Analyst" },
        { name: "SC-300: Microsoft Identity and Access Administrator" },
        { name: "Using Microsoft Security Copilot", isBytes: true },
      ],
      "Azure Hybrid & Server": [
        { name: "AZ-800: Administering Windows Server Hybrid Core Infrastructure" },
        { name: "AZ-801: Configuring Windows Server Hybrid Advanced Services" },
        { name: "70-740: Windows Server 2016 - Installation, Storage, and Compute" },
        { name: "70-741: Networking with Windows Server 2016" },
        { name: "70-742: Identity with Windows Server 2016" },
        { name: "70-743: Upgrading Your Skills to Windows Server 2016" },
        { name: "70-744: Securing Windows Server 2016" },
        { name: "70-745: Implementing a Software-Defined Datacenter" },
        { name: "Windows Server 2019 Administration" },
        { name: "Windows Server 2022" },
        { name: "Windows Server 2025 Administration" },
        { name: "Microsoft Range Trailhead" },
      ],
      "Microsoft 365 Administration": [
        { name: "MS-900: Microsoft 365 Fundamentals" },
        { name: "MS-102: Microsoft 365 Administrator" },
        { name: "MS-203: Microsoft 365 Exchange Messaging" },
        { name: "MS-500: Microsoft 365 Security Administration" },
        { name: "MS-700: Managing Microsoft Teams" },
        { name: "MS-721: Collaboration Communications Systems Engineer" },
        { name: "MS-740: Troubleshooting Microsoft Teams" },
        { name: "SharePoint 365 Administration" },
        { name: "Configuring and Managing Microsoft Teams" },
        { name: "Microsoft 365 Certified Messaging Admin Associate (Exchange 2019)" },
      ],
      "Microsoft 365 Copilot": [
        { name: "Using Microsoft 365 Copilot", isBytes: true },
        { name: "Microsoft 365 Copilot: Word", isBytes: true },
        { name: "Microsoft 365 Copilot: PowerPoint", isBytes: true },
        { name: "Microsoft 365 Copilot: Outlook", isBytes: true },
        { name: "Microsoft 365 Copilot: Excel", isComingSoon: true, isBytes: true },
        { name: "Microsoft 365 Copilot: Teams", isComingSoon: true, isBytes: true },
        { name: "Building Agents in Copilot Studio", isComingSoon: true, isBytes: true },
        { name: "Microsoft 365 Copilot" },
        { name: "Microsoft 365 Copilot Chat" },
        { name: "Copilot in Word" },
        { name: "Copilot in Excel" },
        { name: "Copilot in PowerPoint" },
        { name: "Copilot in Outlook" },
        { name: "Copilot in Teams" },
        { name: "Copilot in OneNote" },
        { name: "Copilot in Forms" },
        { name: "Copilot in Loop" },
        { name: "Copilot in Whiteboard" },
        { name: "Copilot in Stream" },
        { name: "Copilot in Windows 11" },
      ],
      "Endpoint Management": [
        { name: "Intune for Microsoft Enterprises", isBytes: true },
        { name: "MD-102: Endpoint Administrator" },
        { name: "Microsoft Endpoint Manager" },
      ],
      "Data & Analytics": [
        { name: "DP-900: Microsoft Azure Data Fundamentals" },
        { name: "DP-300: Administering Relational Databases on Microsoft Azure" },
        { name: "70-761: Querying Data with Transact-SQL" },
        { name: "70-762: Developing SQL Databases" },
        { name: "70-764: Administering a SQL Database Infrastructure" },
        { name: "70-765: Provisioning SQL Databases" },
      ],
      "PowerShell": [
        { name: "PowerShell Foundations [Applied Skills]", isBytes: true },
        { name: "PowerShell Automation for Administrators [Applied Skills]", isBytes: true },
        { name: "Getting Started with Microsoft Graph PowerShell", isBytes: true },
        { name: "Microsoft Graph PowerShell for EntraID Administrators", isBytes: true },
        { name: "Microsoft Graph PowerShell for SharePoint Administrators", isBytes: true },
        { name: "Microsoft Graph PowerShell for Teams Administrators", isBytes: true },
        { name: "Microsoft Graph PowerShell for Exchange Online", isBytes: true },
        { name: "Windows PowerShell Fundamentals" },
        { name: "PowerShell 7 Quick Start Guide" },
        { name: "PowerShell: Getting Started" },
      ],
      "Active Directory": [
        { name: "70-742: Identity with Windows Server 2016" },
        { name: "Introduction to Active Directory" },
        { name: "Active Directory Administration" },
      ],
    },
    "AI": {
      "OpenAI & ChatGPT": [
        { name: "Accelerating Back-End Development with ChatGPT" },
        { name: "Accelerating Front-End Development with ChatGPT" },
        { name: "Accelerating Web Development with ChatGPT" },
        { name: "ChatGPT for IT Professionals" },
        { name: "ChatGPT for IT Professionals [Applied Skills]", isBytes: true },
        { name: "Creating and Using Azure OpenAI Service" },
        { name: "Internal Knowledge Base Agents with OpenAI & LangChain" },
        { name: "ChatGPT Enterprise Adoption [Executive Briefing]", isBytes: true },
        { name: "ChatGPT for Efficiency [Executive Briefing]", isBytes: true },
        { name: "ChatGPT Quickstart [Applied Skills]", isBytes: true },
        { name: "ChatGPT Tools and Features [Applied Skills]", isBytes: true },
        { name: "Intro to ChatGPT Prompting [Applied Skills]", isBytes: true },
        { name: "Under the Hood of ChatGPT [Applied Skills]", isBytes: true },
        { name: "OpenAI Codex Tutorial" },
        { name: "Accelerating Python Development with OpenAI and Bard" },
      ],
      "AI Coding & Development": [
        { name: "Deploy AI Apps on Cloudflare" },
        { name: "Learn Mistral AI" },
        { name: "Claude Code Tutorial" },
        { name: "Intro to Model Context Protocol (MCP)" },
        { name: "AWS Certified AI Practitioner" },
        { name: "Learn Code AI" },
        { name: "OpenAI Tutorial Basics" },
        { name: "Prompt Engineering for Web Developers" },
        { name: "Build AI Apps with ChatGPT, DALL-E and GPT-4" },
      ],
      "AI Fundamentals": [
        { name: "Introduction to AI" },
        { name: "Introduction to Deep Learning Algorithms" },
        { name: "AI-900: Microsoft Azure AI Fundamentals" },
      ],
      "ChatGPT General Use": [
        { name: "Ethics Considerations for ChatGPT" },
        { name: "ChatGPT Quickstart" },
        { name: "ChatGPT Features and Tools" },
        { name: "Under the Hood of ChatGPT" },
        { name: "Quick Look: GenAI Video with Sora 2" },
        { name: "Introduction to ChatGPT" },
        { name: "Getting Started with ChatGPT Plus" },
      ],
      "Management Readiness for ChatGPT": [
        { name: "Safe Data Practices and Data Controls for ChatGPT" },
      ],
      "Prompt Engineering": [
        { name: "Intro to ChatGPT Prompting" },
        { name: "AI Communication Mastery: Crafting Effective Prompts" },
        { name: "AI Prompt Writing" },
      ],
      "ChatGPT Productivity": [
        { name: "ChatGPT for IT Professionals" },
        { name: "Meta's Llama2 and Open Source LLMs" },
        { name: "ChatGPT for Efficiency" },
        { name: "ChatGPT Enterprise Adoption" },
        { name: "AI Assisted Content Creation: Ideation to Execution" },
        { name: "AI for Project Managers", isBytes: true },
      ],
      "Microsoft Copilot": [
        { name: "Using Microsoft Security Copilot" },
        { name: "Using Microsoft 365 Copilot", isBytes: true },
        { name: "Manager Readiness for Microsoft 365 Copilot", isComingSoon: true },
        { name: "Microsoft 365 Copilot: Prompting Practices", isComingSoon: true },
        { name: "Microsoft 365 Copilot: Word", isBytes: true },
        { name: "Microsoft 365 Copilot: Outlook", isBytes: true },
        { name: "Microsoft 365 Copilot: PowerPoint", isBytes: true },
        { name: "Microsoft 365 Copilot: Excel", isComingSoon: true, isBytes: true },
        { name: "Microsoft 365 Copilot: Teams", isComingSoon: true, isBytes: true },
        { name: "Microsoft 365 Copilot: OneDrive", isComingSoon: true },
        { name: "Microsoft 365 Copilot: SharePoint", isComingSoon: true },
        { name: "Building Agents in Copilot Studio", isComingSoon: true, isBytes: true },
        { name: "Microsoft 365 Copilot" },
        { name: "Microsoft 365 Copilot Chat" },
        { name: "Copilot in Word" },
        { name: "Copilot in Excel" },
        { name: "Copilot in PowerPoint" },
        { name: "Copilot in Outlook" },
        { name: "Copilot in Teams" },
        { name: "Copilot in OneNote" },
        { name: "Copilot in Forms" },
        { name: "Copilot in Loop" },
        { name: "Copilot in Whiteboard" },
        { name: "Copilot in Stream" },
        { name: "Copilot in Windows 11" },
        { name: "Webinar: Intro Tour: Microsoft 365 Copilot in Word", isWebinar: true },
      ],
      "General AI Awareness": [
        { name: "AI Foundations for Users: Classification to Creation" },
        { name: "AI Ethical Use and Responsibility" },
      ],
      "Gemini in Google Workspace": [
        { name: "Google Gemini in Docs" },
        { name: "Google Gemini in Gmail" },
        { name: "Google Gemini in Chat and Meet" },
        { name: "Google Gemini in Slides" },
        { name: "Google Gemini in Sheets" },
        { name: "Google Gemini in Drive" },
      ],
      "AI Webinars & Events": [
        { name: "Webinar: Preparing for an AI-Driven Future in Project Management", isWebinar: true },
        { name: "Webinar: ChatGPT Canvas: A Slick New Feature", isWebinar: true },
        { name: "Webinar: ChatGPT: The Secret Weapon for Project Managers", isWebinar: true },
        { name: "Webinar: Getting Started with AI in Your Project Management Workflow", isWebinar: true },
        { name: "Webinar: Unlock the Power of ChatGPT for Effective Project Management", isWebinar: true },
        { name: "Webinar: ChatGPT's GPT Store: First Look", isWebinar: true },
        { name: "Webinar: What Every Manager Should Know About ChatGPT", isWebinar: true },
        { name: "Webinar: ChatGPT Plus for IT Professionals", isWebinar: true },
        { name: "Webinar: Test Driving DALL-E 3 Image Generation in ChatGPT", isWebinar: true },
        { name: "Webinar: Revolutionizing Project Management with ChatGPT and Microsoft Planner", isWebinar: true },
        { name: "Webinar: Rethinking Password Security in the Age of AI", isWebinar: true },
        { name: "Webinar: Prompt Engineering Quick Look", isWebinar: true },
        { name: "Webinar: Quick Look - Azure OpenAI Studio", isWebinar: true },
        { name: "Webinar: Quick Look - Chat Completions Playground in OpenAI", isWebinar: true },
        { name: "Webinar: Quick Look - Assistants Playground in OpenAI", isWebinar: true },
        { name: "Webinar: Quick Look - Intro to OpenAI Platform Tools", isWebinar: true },
        { name: "Webinar: Quick Look - Creating Your Own Custom GPTs", isWebinar: true },
        { name: "Webinar: Quick Look - LangChain Expression Language Primer", isWebinar: true },
        { name: "Webinar: Quick Look - GitHub Copilot in VS Code", isWebinar: true },
        { name: "Webinar: Quick Look - The ChatGPT Mobile App for iOS and Android", isWebinar: true },
        { name: "Webinar: Quick Look: Image Generation with DALL-E in ChatGPT", isWebinar: true },
      ],
    },
    "DevOps": {
      "CI/CD & Version Control": [
        { name: "Complete Git Guide: Understand and Master Git and Github" },
        { name: "Git & GitHub Masterclass" },
        { name: "Introduction to Git" },
        { name: "Git: Getting Started" },
        { name: "Git for Beginners" },
        { name: "GitHub Actions for CI/CD" },
        { name: "GitHub Actions Fundamentals" },
        { name: "GitHub Actions" },
        { name: "GitHub Actions Certification" },
        { name: "GitLab CI/CD: Architecting, Deploying, and Optimizing Pipelines" },
        { name: "AWS CodePipeline (CI/CD Pipeline)" },
      ],
      "Azure DevOps": [
        { name: "AZ-400: Designing and Implementing Microsoft DevOps Solutions" },
        { name: "DevOps with Azure" },
      ],
      "Docker & Containerization": [
        { name: "Docker Crash Course" },
        { name: "Docker and Kubernetes: The Complete Guide" },
        { name: "Learn Docker" },
        { name: "Docker for the Absolute Beginner" },
        { name: "Docker – SWARM, SERVICES, STACKS" },
        { name: "Docker Certified Associate Exam Course (DCA)" },
      ],
      "Kubernetes": [
        { name: "Learn Kubernetes" },
        { name: "Kubernetes for DevOps" },
        { name: "Kubernetes for Beginners" },
        { name: "Kubernetes and Cloud-Native Associate (KCNA)" },
        { name: "Certified Kubernetes Administrator (CKA)" },
        { name: "Certified Kubernetes Application Developer (CKAD)" },
        { name: "Certified Kubernetes Security Specialist (CKS)" },
        { name: "Azure Kubernetes Service" },
        { name: "Google Kubernetes Engine (GKE)" },
        { name: "Helm for Beginners" },
        { name: "Kustomize" },
        { name: "Istio Service Mesh" },
      ],
      "Infrastructure as Code & Terraform": [
        { name: "Introduction to Terraform" },
        { name: "Terraform Fundamentals" },
        { name: "Terraform Associate Certification: HashiCorp Certified" },
        { name: "HashiCorp : Terraform Cloud" },
        { name: "HashiCorp Certified: Consul Associate Certification" },
        { name: "HashiCorp Certified: Vault Associate Certification" },
        { name: "HashiCorp Certified: Vault Operations Professional 2022" },
      ],
      "Configuration Management & Automation": [
        { name: "Configuration Automation with Puppet" },
        { name: "Automation with Ansible" },
        { name: "Ansible for Beginners" },
        { name: "Ansible Advanced Course" },
      ],
      "GitOps": [
        { name: "GitOps with ArgoCD" },
        { name: "GitOps with FluxCD" },
      ],
      "Monitoring & Observability": [
        { name: "Prometheus Certified Associate (PCA)" },
        { name: "Grafana Loki" },
      ],
      "Programming & Scripting": [
        { name: "Advanced Bash Scripting" },
        { name: "Advanced Golang" },
        { name: "Certified Python Entry-Level Programmer" },
      ],
      "AWS DevOps": [
        { name: "AWS Certified DevOps Engineer" },
      ],
      "GCP DevOps": [
        { name: "GCP DevOps Project" },
        { name: "GCP Digital Cloud Leader" },
      ],
      "Linux": [
        { name: "Linux Professional Institute LPIC-1 Exam 101" },
      ],
      "DevOps Fundamentals": [
        { name: "Modern DevOps in Practice" },
      ],
    },
    "Cloud": {
      "AWS": [
        { name: "AWS Cloud Practitioner (CLF-C02)" },
        { name: "AWS Architect Associate" },
        { name: "AWS Developer Associate" },
        { name: "AWS System Operations" },
        { name: "AWS Certified DevOps Engineer" },
        { name: "AWS Certified Advanced Networking - Specialty" },
        { name: "AWS Certified Security Specialty (SCS-C02)" },
        { name: "AWS Certified Data Analytics Specialty" },
        { name: "AWS Certified Database Specialty" },
      ],
      "Microsoft Azure": [
        { name: "AZ-900: Microsoft Azure Fundamentals" },
        { name: "AZ-900: Microsoft Azure Fundamentals Exam Crash", isBytes: true },
        { name: "AZ-104: Microsoft Azure Administrator" },
        { name: "AZ-305: Designing Microsoft Azure Infrastructure Solutions" },
        { name: "AZ-400: Designing and Implementing Microsoft DevOps Solutions" },
        { name: "AZ-500: Microsoft Azure Security Technologies" },
        { name: "AZ-700: Designing and Implementing Microsoft Azure Networking Solutions" },
        { name: "AZ-140: Configuring and Operating Microsoft Azure Virtual Desktop" },
        { name: "AZ-204: Developing Solutions for Microsoft Azure" },
        { name: "Implementing and Managing Azure Cloud with PowerShell" },
        { name: "Azure Range Trailhead" },
        { name: "Microsoft Azure for .NET Developers" },
      ],
      "Google Cloud": [
        { name: "Google Cloud Certified Associate Cloud Engineer" },
        { name: "Google Workspace Administration" },
      ],
      "Multi-Cloud": [
        { name: "CompTIA Cloud+ (CV0-004)*" },
      ],
    },
    "Project Management": {
      "PMI Certifications": [
        { name: "PMP Official Exam Prep" },
        { name: "PMI-ACP: Agile Certified Practitioner" },
        { name: "CAPM: Certified Associate in Project Management" },
        { name: "CompTIA Project+ (PK0-005)" },
      ],
      "Agile & Scrum": [
        { name: "PM Fundamentals: Agile Project Management" },
        { name: "Transitioning to Agile Project Management" },
        { name: "Building Successful Scrum Teams" },
        { name: "Working with Kanban Boards" },
        { name: "Application of Agile Principles", isBytes: true },
        { name: "Agile Roles and Responsibilities", isBytes: true },
        { name: "Overview of Agile Frameworks", isBytes: true },
        { name: "Agile Ceremonies", isBytes: true },
        { name: "Estimating Techniques for Agile Projects", isBytes: true },
        { name: "Agile Metric Strategies", isBytes: true },
      ],
      "Waterfall/Predictive": [
        { name: "PM Fundamentals: Waterfall/Predictive" },
        { name: "PMBOK Guide (6th Ed) - Focus on Initiating" },
        { name: "PMBOK Guide (6th Ed) - Focus on Planning" },
        { name: "PMBOK Guide (6th Ed) - Focus on Executing, Monitoring, and Closing" },
        { name: "Risk Management in Predictive Projects", isBytes: true },
        { name: "Schedule Management in Waterfall Projects", isBytes: true },
        { name: "Communication Management in Predictive Projects", isBytes: true },
        { name: "Scope Management in Waterfall Projects", isBytes: true },
      ],
      "Leadership & Soft Skills": [
        { name: "PM Leadership Skills" },
        { name: "PM Leadership Skills: Motivating Your Team" },
        { name: "PM Leadership Skills: Leading Change" },
        { name: "PM Leadership Skills: Building High-Performing Teams" },
        { name: "Emotional Intelligence and Psychological Safety", isBytes: true },
      ],
      "Microsoft Project": [
        { name: "Practical Project Management with Microsoft Project" },
        { name: "Microsoft Project 2019" },
      ],
      "Enterprise Architecture": [
        { name: "TOGAF Part 1 Foundations" },
        { name: "TOGAF Part 2 Certified" },
      ],
      "Lean Six Sigma": [
        { name: "Lean Six Sigma Green Belt" },
        { name: "Lean Six Sigma Yellow Belt" },
      ],
      "AI for Project Management": [
        { name: "AI for Project Managers", isBytes: true },
      ],
      "Project Management Webinars": [
        { name: "Webinar: Agile Made Practical: Real Techniques for Real Teams", isWebinar: true },
        { name: "Webinar: Three Agile Methodologies to Transform How You Manage", isWebinar: true },
        { name: "Webinar: Project Management Essentials for IT Pros", isWebinar: true },
        { name: "Webinar: Four Question Types to Expect on the Updated PMP Exam", isWebinar: true },
        { name: "Webinar: Kanban in Software Development: Enhancing Workflow", isWebinar: true },
        { name: "Webinar: Four Ways to Catapult Your Career by Getting Your PMP", isWebinar: true },
        { name: "Webinar: Scrum Essentials: Revolutionizing Software Projects", isWebinar: true },
        { name: "Webinar: Cracking the New PMI-ACP Exam Format", isWebinar: true },
        { name: "Webinar: Project Management in a Cybersecurity-Centric Organization", isWebinar: true },
        { name: "Webinar: Five Ways PMPs See the World Differently", isWebinar: true },
        { name: "Webinar: Top Five Programs to Help You Efficiently Manage", isWebinar: true },
        { name: "Webinar: Six Step Plan to Earn Your PMP", isWebinar: true },
        { name: "Webinar: Lead Smarter: Boost Your Project Success with Emotional Intelligence", isWebinar: true },
        { name: "Webinar: Getting Started with AI in Your Project Management Workflow", isWebinar: true },
        { name: "Webinar: Update: PMI Finally Retires 6th Edition PMBOK", isWebinar: true },
        { name: "Webinar: Preparing for an AI-Driven Future in Project Management", isWebinar: true },
        { name: "Webinar: ChatGPT: The Secret Weapon for Project Managers", isWebinar: true },
        { name: "Webinar: Unlock the Power of ChatGPT for Effective Project Management", isWebinar: true },
        { name: "Webinar: Revolutionizing Project Management with ChatGPT and Microsoft Planner", isWebinar: true },
      ],
    },
    "Help Desk": {
      "CompTIA Fundamentals": [
        { name: "CompTIA A+ Core 1 (220-1201) V15*" },
        { name: "CompTIA A+ Core 2 (220-1202) V15*" },
        { name: "CompTIA Tech+ (FC0-U71)" },
      ],
      "ITIL & Service Management": [
        { name: "ITIL v4 Foundations" },
        { name: "ITIL v4 Foundations Exam Crash", isBytes: true },
      ],
      "Windows Support": [
        { name: "Windows 10 End User Essentials Beginner" },
        { name: "Windows 10 Troubleshooting Advanced" },
        { name: "Getting to Know Windows 10" },
        { name: "Windows 11 New Features Beginner" },
      ],
      "Microsoft 365 Support": [
        { name: "MD-102: Endpoint Administrator" },
        { name: "Microsoft Endpoint Manager" },
        { name: "Intune for Microsoft Enterprises", isBytes: true },
      ],
    },
    "Desktop Applications": {
      "Core Office Applications and Usage": [
        { name: "Microsoft 365 Core Applications Beginner" },
        { name: "Office 2019 New Features Beginner" },
        { name: "Microsoft 365 New Features Beginner" },
        { name: "Microsoft 365 Overview Beginner" },
        { name: "Microsoft 365 OneDrive Beginner" },
        { name: "Microsoft 365 OneNote Online Beginner" },
        { name: "OneNote for Windows 10" },
      ],
      "Data Science Applications": [
        { name: "Microsoft 365 Power BI Beginner" },
        { name: "Microsoft 365 Power BI Intermediate" },
        { name: "Tableau Desktop Beginner" },
        { name: "Tableau Desktop Intermediate" },
        { name: "Tableau Desktop Advanced" },
        { name: "Microsoft 365 Power BI Report Builder – Intermediate" },
        { name: "Microsoft 365 Power BI Report Builder – Beginner" },
        { name: "Microsoft 365 PowerApps Beginner" },
      ],
      "Access Applications": [
        { name: "Microsoft 365 PowerApps" },
        { name: "Access 2019 Beginner" },
        { name: "Access 2019 Intermediate" },
        { name: "Access 2019 Advanced" },
        { name: "Access 365 Beginner" },
      ],
      "Project Management Applications": [
        { name: "Microsoft 365 Planner Beginner" },
        { name: "Project 365 Beginner" },
        { name: "Project 365 Advanced" },
      ],
      "SharePoint Applications": [
        { name: "Microsoft 365 SharePoint Sites Beginner" },
        { name: "SharePoint 2016 Site Owner Beginner" },
        { name: "SharePoint 2016 Site User Beginner" },
        { name: "SharePoint 365 Site Owner" },
        { name: "SharePoint 365 Site User" },
      ],
      "Collaboration Applications": [
        { name: "Microsoft 365 Teams Beginner" },
        { name: "Microsoft 365 Collaborating in Microsoft 365 Beginner" },
        { name: "Microsoft 365 Yammer Beginner" },
        { name: "Slack – A Complete Guide" },
        { name: "Office 2019" },
        { name: "Microsoft 365 Delve Beginner" },
        { name: "Working with Teams Beginner" },
      ],
      "Word Applications": [
        { name: "Word 2019 Beginner" },
        { name: "Word 2019 Intermediate" },
        { name: "Word 2019 Advanced" },
        { name: "Word 365 Beginner" },
        { name: "Word 365 Intermediate" },
        { name: "Word 365 Advanced" },
      ],
      "PowerPoint Applications": [
        { name: "PowerPoint 2019 Beginner" },
        { name: "PowerPoint 2019 Advanced" },
        { name: "PowerPoint 365 Beginner" },
        { name: "PowerPoint 365 Advanced" },
      ],
      "Excel Applications": [
        { name: "Excel 2019 Beginner" },
        { name: "Excel 2019 Intermediate" },
        { name: "Excel 365 Beginner" },
        { name: "Excel 365 Intermediate" },
        { name: "Excel 365 Advanced" },
        { name: "Excel 365 VBA" },
      ],
      "Adobe License": [
        { name: "Adobe Acrobat Pro DC – Beginner" },
        { name: "Adobe Acrobat Pro DC – Advanced" },
        { name: "Adobe Illustrator CC – Beginner" },
        { name: "Adobe Illustrator CC – Advanced" },
        { name: "Adobe InCopy CC – Beginner" },
        { name: "Adobe InDesign CC – Beginner" },
        { name: "Adobe InDesign CC – Advanced" },
        { name: "Adobe Lightroom (Classic) – Beginner" },
        { name: "Adobe Photoshop CC – Beginner" },
        { name: "Adobe Photoshop CC – Intermediate" },
        { name: "Adobe Photoshop CC for Photographers – Advanced" },
      ],
      "Outlook Applications": [
        { name: "Outlook 2019 Beginner" },
        { name: "Outlook 2019 Advanced" },
        { name: "Outlook 365 Beginner" },
        { name: "Outlook 365 Advanced" },
        { name: "Outlook 365 Web App Beginner" },
      ],
      "Copilot End-User Training": [
        { name: "Using Microsoft 365 Copilot" },
        { name: "Manager Readiness for Microsoft 365 Copilot" },
        { name: "Microsoft 365 Copilot: Prompting Practices" },
        { name: "Microsoft 365 Copilot: Word" },
        { name: "Microsoft 365 Copilot: PowerPoint" },
        { name: "Microsoft 365 Copilot: Outlook" },
        { name: "Microsoft 365 Copilot: Excel" },
        { name: "Microsoft 365 Copilot: Teams" },
        { name: "Microsoft 365 Copilot: OneDrive" },
        { name: "Microsoft 365 Copilot: SharePoint" },
        { name: "Building Agents in Copilot Studio" },
        { name: "General Artificial Intelligence Awareness" },
      ],
    },
    "Business Pro": {
      "Power BI": [
        { name: "PL-300: Microsoft Power BI Data Analyst" },
        { name: "Configuring Power BI Data Gateways", isComingSoon: true },
        { name: "Dashboard in a Day", isComingSoon: true },
        { name: "Data Connectors in Power BI", isComingSoon: true },
        { name: "DAX Query View in Power BI", isComingSoon: true },
        { name: "Power BI DAX Functions Tutorial with Copilot Integration", isComingSoon: true },
        { name: "Advanced Data Modeling with Power BI", isComingSoon: true },
        { name: "Advanced Data Shaping with Power BI", isComingSoon: true },
        { name: "Advanced Data Visualizations with Power BI", isComingSoon: true },
        { name: "Advanced DAX", isComingSoon: true },
        { name: "Advanced Power BI", isComingSoon: true },
        { name: "AI (Artificial Intelligence) with Power BI", isComingSoon: true },
        { name: "Beginner Power BI", isComingSoon: true },
        { name: "Building Data Literacy: Skills for the Information Age", isComingSoon: true },
        { name: "Copilot in Power BI", isComingSoon: true },
        { name: "Data Storytelling with Power BI", isComingSoon: true },
        { name: "DAX for Paginated Reports", isComingSoon: true },
        { name: "Incremental Refresh in Power BI", isComingSoon: true },
        { name: "Data Driven Decision Making with Power BI", isComingSoon: true },
        { name: "Enhancing Data Analysis with DAX", isComingSoon: true },
        { name: "Intermediate Power BI", isComingSoon: true },
        { name: "Introduction to DAX", isComingSoon: true },
        { name: "Introduction to DAX Studio", isComingSoon: true },
        { name: "Introduction to Paginated Reports", isComingSoon: true },
        { name: "Introduction to Tabular Editor", isComingSoon: true },
        { name: "Beginner Power BI DAX Functions Tutorial", isComingSoon: true },
        { name: "Conquering PL-300: Power BI Data Analyst Certification", isComingSoon: true },
        { name: "Data Modeling for Power BI", isComingSoon: true },
        { name: "DAX Made Easy: Visual Calculations in Power BI", isComingSoon: true },
        { name: "Excel to Power BI", isComingSoon: true },
        { name: "Master Paginated Reports", isComingSoon: true },
        { name: "Power BI Administration", isComingSoon: true },
        { name: "Power BI Beginner to Pro (Education Edition)", isComingSoon: true },
        { name: "Power BI Beginner to Pro", isComingSoon: true },
        { name: "Power BI Dataflows", isComingSoon: true },
        { name: "Understanding DAX Concepts with Power BI", isComingSoon: true },
        { name: "Mobile Mastery with Power BI", isComingSoon: true },
        { name: "Paginated Reports in a Day", isComingSoon: true },
        { name: "PL-300: Microsoft Power BI Data Analyst Review", isComingSoon: true },
        { name: "Planning a Power BI Project", isComingSoon: true },
        { name: "Power BI Calculation Groups", isComingSoon: true },
        { name: "Power BI Custom Visuals", isComingSoon: true },
        { name: "Power BI for Finance: Mastering Power BI for Financial Insights", isComingSoon: true },
        { name: "Power BI for the Consumer", isComingSoon: true },
        { name: "Power BI Report Server Administration", isComingSoon: true },
        { name: "Power BI Security", isComingSoon: true },
        { name: "Power BI Service Administration", isComingSoon: true },
        { name: "Power BI Subscriptions", isComingSoon: true },
        { name: "Power Query for Business", isComingSoon: true },
        { name: "Universal Design in Power BI", isComingSoon: true },
        { name: "Visual Calculations for DAX in Power BI", isComingSoon: true },
        { name: "Microsoft 365 Power BI Beginner" },
        { name: "Microsoft 365 Power BI Intermediate" },
        { name: "Microsoft 365 Power BI Report Builder – Intermediate" },
        { name: "Microsoft 365 Power BI Report Builder – Beginner" },
      ],
      "Power Apps": [
        { name: "PL-900: Microsoft Power Platform Fundamentals Review", isComingSoon: true },
        { name: "Advancing Your Canvas Power Apps Skills – Chapter 1", isComingSoon: true },
        { name: "Advancing Your Canvas Power Apps Skills – Chapter 2", isComingSoon: true },
        { name: "App In A Day", isComingSoon: true },
        { name: "Building Microsoft Power Platform Solutions", isComingSoon: true },
        { name: "Building Solutions in Dataverse", isComingSoon: true },
        { name: "Creating Components for Canvas Applications", isComingSoon: true },
        { name: "Designing Canvas Apps for Project Management", isComingSoon: true },
        { name: "Introduction to Canvas Apps with Power Apps", isComingSoon: true },
        { name: "Building Your First Canvas Power App", isComingSoon: true },
        { name: "End to End Solution to Learn Power Apps and Dataverse", isComingSoon: true },
        { name: "Model Driven Apps in Dataverse", isComingSoon: true },
        { name: "Power Apps Beginner to Pro", isComingSoon: true },
        { name: "Power Platform Copilot and AI Builder", isComingSoon: true },
        { name: "Power Platform for Teams", isComingSoon: true },
        { name: "Power Apps – Problem, Design, Solution", isComingSoon: true },
        { name: "Power Platform Administration", isComingSoon: true },
        { name: "Power Platform For Educators", isComingSoon: true },
        { name: "Power Platform For Teams", isComingSoon: true },
        { name: "Microsoft 365 PowerApps" },
        { name: "Microsoft 365 PowerApps Beginner" },
      ],
      "Power Automate": [
        { name: "Advanced Power Automate", isComingSoon: true },
        { name: "Automation in a Day", isComingSoon: true },
        { name: "Building Power Automate Approvals", isComingSoon: true },
        { name: "Introduction to RPA with Power Automate Desktop", isComingSoon: true },
        { name: "Power Automate Beginner to Pro", isComingSoon: true },
        { name: "Power Automate Approvals", isComingSoon: true },
        { name: "Power Automate Beginner", isComingSoon: true },
        { name: "RPA with Power Automate Desktop", isComingSoon: true },
        { name: "Microsoft 365 Power Automate Beginner" },
      ],
      "Power Pages": [
        { name: "Introduction to Power Pages", isComingSoon: true },
        { name: "Power Pages in a Day", isComingSoon: true },
        { name: "Power Pages: Beginner to Pro", isComingSoon: true },
      ],
      "Copilot Studio": [
        { name: "Creating Autonomous Agents with Copilot Studio", isComingSoon: true },
        { name: "Introduction to Copilot Studio", isComingSoon: true },
        { name: "Copilot Studio in a Day", isComingSoon: true },
        { name: "Copilot Studio: Beginner to Pro", isComingSoon: true },
        { name: "Innovative Agent Design with Copilot Studio", isComingSoon: true },
      ],
      "Azure Data": [
        { name: "Introduction to Azure Databricks", isComingSoon: true },
        { name: "Utilizing Azure Databricks", isComingSoon: true },
        { name: "Advanced Azure Data Factory", isComingSoon: true },
        { name: "Advanced Data Flows in Azure Synapse Analytics", isComingSoon: true },
        { name: "Azure Synapse Analytics (Setup)", isComingSoon: true },
        { name: "Databricks Sources", isComingSoon: true },
        { name: "Delta Lake in Databricks", isComingSoon: true },
        { name: "DP-900: Azure Data Fundamentals Review", isComingSoon: true },
        { name: "Introduction to Azure Analysis Services", isComingSoon: true },
        { name: "Introduction to Azure Data Factory", isComingSoon: true },
        { name: "Introduction to Azure Data Lake Store", isComingSoon: true },
        { name: "Introduction to Azure Key Vault", isComingSoon: true },
        { name: "Introduction to Azure Logic Apps", isComingSoon: true },
        { name: "Introduction to Azure Machine Learning Services", isComingSoon: true },
        { name: "Introduction to Azure SQL Database", isComingSoon: true },
        { name: "Introduction to Azure SQL Database Managed Instance", isComingSoon: true },
        { name: "Introduction to Azure Synapse Analytics", isComingSoon: true },
        { name: "Introduction to the Data Lakehouse with Azure Synapse", isComingSoon: true },
        { name: "Azure Data Factory", isComingSoon: true },
        { name: "Azure Synapse", isComingSoon: true },
        { name: "Introduction to Azure Data Services", isComingSoon: true },
        { name: "Modern Data Warehousing with Azure Databricks", isComingSoon: true },
        { name: "Pipelines and Data Flows in Azure Synapse Analytics", isComingSoon: true },
        { name: "Serverless SQL in Azure Synapse Analytics", isComingSoon: true },
        { name: "SSIS in the Cloud", isComingSoon: true },
        { name: "Unity Catalog for Databricks", isComingSoon: true },
      ],
      "Microsoft Fabric": [
        { name: "Implementation of PySpark Merge in Fabric", isComingSoon: true },
        { name: "Introduction to Microsoft Fabric", isComingSoon: true },
        { name: "Real-Time Intelligence in a Day", isComingSoon: true },
        { name: "Creating a Microsoft Fabric End to End Solution", isComingSoon: true },
        { name: "Real-Time Intelligence in a Day – Setup", isComingSoon: true },
        { name: "Data Engineering in Microsoft Fabric", isComingSoon: true },
        { name: "Delta Lake in Microsoft Fabric", isComingSoon: true },
        { name: "Power BI Developer of the Future with Fabric", isComingSoon: true },
        { name: "Fabric Analyst in a Day", isComingSoon: true },
        { name: "Power BI Meets Fabric: A Seamless Introduction", isComingSoon: true },
        { name: "Building Scalable Solutions with Microsoft Fabric", isComingSoon: true },
        { name: "Microsoft Fabric – OneLake and Lakehouse", isComingSoon: true },
        { name: "Introduction to Fabric Data Warehouses", isComingSoon: true },
        { name: "Working with PySpark in Microsoft Fabric Notebooks", isComingSoon: true },
      ],
      "Snowflake": [
        { name: "Snowflake: Administration Essentials", isComingSoon: true },
        { name: "Snowflake: Loading and Querying Data", isComingSoon: true },
        { name: "Getting Started with Snowflake", isComingSoon: true },
      ],
      "SQL Server": [
        { name: "Administering Business Intelligence", isComingSoon: true },
        { name: "Advanced SSAS", isComingSoon: true },
        { name: "Advanced SSIS", isComingSoon: true },
        { name: "Advanced SSRS", isComingSoon: true },
        { name: "DBA Fundamentals", isComingSoon: true },
        { name: "Installing SQL Server", isComingSoon: true },
        { name: "Introduction to Data Modeling", isComingSoon: true },
        { name: "Introduction to MDX", isComingSoon: true },
        { name: "Introduction to SSAS Multidimensional", isComingSoon: true },
        { name: "Introduction to SSAS Tabular", isComingSoon: true },
        { name: "Introduction to SSIS", isComingSoon: true },
        { name: "Introduction to SSRS", isComingSoon: true },
        { name: "Managing and Configuring SQL Server with PowerShell", isComingSoon: true },
        { name: "Mobile Reports and Dashboards with SSRS", isComingSoon: true },
        { name: "SQL Server High Availability", isComingSoon: true },
        { name: "SQL Server Performance Tuning", isComingSoon: true },
        { name: "Working with SQL Server Views", isComingSoon: true },
      ],
      "T-SQL": [
        { name: "Advanced T-SQL", isComingSoon: true },
        { name: "Beginner to T-SQL", isComingSoon: true },
        { name: "Introduction to SQL Server Window Functions", isComingSoon: true },
        { name: "SQL Server Stored Procedures", isComingSoon: true },
        { name: "Introduction to T-SQL", isComingSoon: true },
        { name: "Transforming Data with SQL Pivots", isComingSoon: true },
      ],
      "Tableau": [
        { name: "Tableau Desktop Beginner" },
        { name: "Tableau Desktop Intermediate" },
        { name: "Tableau Desktop Advanced" },
      ],
    },
    "Full Stack Developer": {
      "JavaScript & TypeScript": [
        { name: "Learn JavaScript" },
        { name: "Learn Javascript" },
        { name: "JavaScript - The Complete Guide" },
        { name: "JavaScript for Beginners" },
        { name: "Modern JavaScript (ES6+)" },
        { name: "Modern JavaScript - From Novice to Ninja" },
        { name: "JavaScript Deep Dive" },
        { name: "Object Oriented JavaScript" },
        { name: "25+ Projects with AJAX, JavaScript, and JSON" },
        { name: "Create Dynamic and Interactive Web Content Using AJAX and JSON in JavaScript" },
        { name: "Introduction to ES6+" },
        { name: "JavaScript Interview Challenges" },
        { name: "Learn TypeScript" },
        { name: "TypeScript Fundamentals" },
        { name: "TypeScript Masterclass" },
        { name: "Webpack and TypeScript Setup" },
      ],
      "React": [
        { name: "Learn React" },
        { name: "React Hooks" },
        { name: "React with TypeScript" },
        { name: "Advanced React" },
        { name: "Learn Styled Components in React" },
        { name: "Learn Class Components in React" },
        { name: "Build Reusable React" },
        { name: "Build Tic Tac Toe with React Hooks" },
        { name: "Build a Movie Search App in React" },
        { name: "Make a Wordle Clone with React" },
        { name: "Create React Skeleton Screens" },
        { name: "React Challenges" },
        { name: "React Interview Questions" },
        { name: "React Router in Depth" },
        { name: "Learn React Router 6" },
        { name: "What's new in React 19" },
        { name: "React Native for Beginners" },
        { name: "Learn Gatsby" },
        { name: "Next.js Tutorial" },
        { name: "Next 13 Masterclass" },
        { name: "Next.js with Netlify Identity" },
        { name: "Make a Site with Next.js and Contentful" },
        { name: "Remix.js Crash Course" },
      ],
      "Vue": [
        { name: "Learn Vue.js" },
        { name: "Vue 3 Crash Course" },
        { name: "Build Websites with Vue 3 and Firebase" },
        { name: "Build a Gallery with Vue and Firebase Storage" },
        { name: "Vue 3 with TypeScript Jump Start" },
        { name: "Vue 3 Animations" },
        { name: "Vuetify Basics" },
        { name: "Vuex with Firebase Auth" },
        { name: "Pinia Crash Course" },
        { name: "Nuxt.js for Beginners" },
        { name: "Nuxt 3 Crash Course" },
        { name: "Nuxt 3 with Pinia" },
        { name: "Using Nuxt Router Middleware" },
      ],
      "Angular": [
        { name: "Learn Angular" },
        { name: "Angular - The Complete Guide" },
      ],
      "Svelte": [
        { name: "Learn Svelte" },
        { name: "Svelte for Beginners" },
        { name: "SvelteKit Tutorial" },
        { name: "Sapper Crash Course" },
      ],
      "Node.js & Backend": [
        { name: "Learn Node.js" },
        { name: "Node.js Masterclass" },
        { name: "Node.js Crash Course" },
        { name: "Node.js Authentication" },
        { name: "Express.js Tutorial" },
        { name: "Building RESTful APIs with Node.js" },
        { name: "GraphQL with Node.js" },
        { name: "GraphQL Crash Course" },
        { name: "MongoDB Essentials" },
        { name: "Complete MongoDB Tutorial" },
        { name: "PostgreSQL Tutorial" },
        { name: "Redis for Beginners" },
        { name: "Redis Stack Tutorial" },
        { name: "Learn RabbitMQ: Asynchronous Messaging with Java and Spring" },
        { name: "MERN Auth Tutorial" },
        { name: "MERN Stack Tutorial" },
        { name: "Deno Jump Start" },
        { name: "Make a Chatroom with Deno and Websockets" },
      ],
      "Python": [
        { name: "Learn Python" },
        { name: "Python for Beginners" },
        { name: "Python for Everybody" },
        { name: "Python Masterclass" },
        { name: "Data Science with Python" },
        { name: "Django for Beginners" },
        { name: "Flask Web Development" },
        { name: "Accelerating Python Development with OpenAI and Bard" },
        { name: "Big Data and Machine Learning with R" },
      ],
      "C# & .NET": [
        { name: "Learn C# by Building Applications" },
        { name: "Learn C# with Windows Forms and a Variety of Projects" },
        { name: "C# Console and Windows Forms Development with Entity Framework" },
        { name: "Master C# and SQL by Building Applications" },
        { name: "ASP.NET Core - SOLID and Clean Architecture" },
        { name: "ASP.NET Core API and Blazor Development" },
        { name: "ASP.NET Core MVC - Cross-Platform Development" },
        { name: "Entity Framework Core - A Full Tour" },
        { name: "Microsoft Azure for .NET Developers" },
        { name: "Microsoft Azure for ASP.NET Core" },
        { name: "Mobile Development with .NET MAUI" },
      ],
      "PHP & Laravel": [
        { name: "Object Oriented PHP" },
        { name: "PHP and MySQL for Beginners" },
        { name: "Make a Website with Laravel 6" },
      ],
      "Go": [
        { name: "Learn Go (Golang)" },
      ],
      "Dart": [
        { name: "Dart Crash Course" },
      ],
      "HTML & CSS": [
        { name: "Learn HTML and CSS" },
        { name: "HTML and CSS Crash Course" },
        { name: "Learn Responsive Web Design" },
        { name: "Learn CSS Animations" },
        { name: "Learn CSS Grid" },
        { name: "Learn Flexbox" },
        { name: "Learn CSS Variables" },
        { name: "CSS Cascade Layers Crash Course" },
        { name: "CSS Challenges" },
        { name: "Mobile-First Responsive Website Build (with CSS Grid)" },
      ],
      "CSS Frameworks & UI Libraries": [
        { name: "Learn Bootstrap" },
        { name: "Bootstrap 5 Crash Course" },
        { name: "Customizing Bootstrap 5" },
        { name: "Learn Bulma CSS" },
        { name: "Bulma CSS Tutorial" },
        { name: "Learn Tailwind CSS" },
        { name: "Tailwind CSS Tutorial" },
        { name: "Tailwind Just in Time" },
        { name: "Learn SASS and Build Your Own CSS Library" },
        { name: "Chakra UI Crash Course" },
        { name: "Material UI Crash Course" },
        { name: "Shadcn UI Crash Course" },
      ],
      "Other Frameworks": [
        { name: "Learn Alpine JS" },
        { name: "Learn Imba" },
        { name: "Solid.js Tutorial" },
        { name: "Qwik Crash Course (First Look)" },
        { name: "HTMX for Beginners" },
        { name: "Build an SPA with HTMX" },
        { name: "Intro to Vite" },
      ],
      "Firebase & Backend Services": [
        { name: "Learn Firebase" },
        { name: "Getting Started with Firebase 9" },
        { name: "Build Websites with React and Firebase" },
        { name: "Build a Gallery with Vue and Firebase Storage" },
        { name: "Build a Mobile App with Firebase" },
        { name: "Firestore Basics" },
        { name: "Firebase Hosting Crash Course" },
        { name: "Supabase Crash Course" },
        { name: "Strapi Crash Course" },
      ],
      "Flutter & Mobile Development": [
        { name: "Flutter 1 for Beginner" },
        { name: "Flutter Masterclass" },
        { name: "Flutter Animations" },
        { name: "Flutter Forms" },
        { name: "Flutter with Firebase Auth" },
        { name: "Riverpod State Management for Flutter" },
        { name: "Deep Dive iOS 16 Swift - SwiftUI Programming" },
        { name: "React Native for Beginners" },
        { name: "Mobile Development with .NET MAUI" },
      ],
      "Design & UI": [
        { name: "Learn UI Design" },
        { name: "Learn UI Design Fundamentals" },
        { name: "From Figma to Code" },
        { name: "Build a Space Travel Website" },
        { name: "Build and Deploy Your Portfolio" },
        { name: "Practical Math for Frontend Developers" },
      ],
      "AI & Machine Learning": [
        { name: "Build AI Apps with ChatGPT, DALL-E and GPT-4" },
        { name: "Intro to AI Engineering" },
        { name: "Learn AI Agents" },
        { name: "Intro to Dall-E and GPT Vision" },
        { name: "OpenAI Tutorial (the Basics)" },
        { name: "The Official LangChain.js Course" },
        { name: "Learn Embeddings and Vector Databases" },
        { name: "Learn Mistral AI" },
        { name: "Learn OpenAI's Assistants API" },
        { name: "Prompt Engineering for Web Developers" },
        { name: "Learn to Code with AI" },
        { name: "Deploy AI apps with Cloudflare" },
      ],
      "Testing & Tools": [
        { name: "Introduction to Unit Testing" },
        { name: "Introduction to Clean Code" },
        { name: "Complete Git Guide: Understand and Master Git and Github" },
        { name: "Intro to Git" },
        { name: "Learn Markdown" },
        { name: "Learn Regular Expressions" },
        { name: "Learn Accessibility" },
        { name: "Frontend Interview Tips" },
        { name: "Learn Binary Search in JavaScript" },
        { name: "Learn Merge Sort in JavaScript" },
      ],
      "DevOps & Deployment": [
        { name: "Docker Crash Course" },
        { name: "Deploying with Netlify" },
        { name: "Modern DevOps in Practice" },
      ],
      "Projects & Challenges": [
        { name: "Coding Challenges" },
        { name: "The Frontend Developer Career Path" },
        { name: "Build and Deploy Your Portfolio" },
        { name: "Build a Color Tool in Vanilla JavaScript" },
        { name: "Build a Gallery with Vue and Firebase Storage" },
        { name: "Build a Mobile App with Firebase" },
        { name: "Build a Movie Search App in React" },
        { name: "Build a Space Travel Website" },
        { name: "Build Reusable React" },
        { name: "Build Tic Tac Toe with React Hooks" },
        { name: "Build Websites with React and Firebase" },
        { name: "Build Websites with Vue 3 and Firebase" },
        { name: "Make a Chatroom with Deno and Websockets" },
        { name: "Make a Site with Next.js and Contentful" },
        { name: "Make a Website with Laravel 6" },
        { name: "Make a Wordle Clone with React" },
        { name: "25+ Projects with AJAX, JavaScript, and JSON" },
      ],
    },
    "Networking": {
      "Cisco CCNA": [
        { name: "Cisco CCNA 200-301: Implementing and Administering Cisco Solutions*" },
        { name: "Cisco CCNA 200-301 Exam Crash", isBytes: true },
      ],
      "Cisco CCNP Enterprise": [
        { name: "Cisco CCNP Enterprise: ENARSI" },
        { name: "Cisco CCNP Enterprise: ENCOR v1.1" },
        { name: "Cisco CCNP Enterprise: ENWLSI" },
        { name: "Cisco CCNP Enterprise: ENSLD" },
      ],
      "Cisco Collaboration": [
        { name: "Cisco CCNP Collaboration: CLCOR v1.1" },
        { name: "Cisco CCNP Collaboration: CLICA v1.1" },
        { name: "Cisco Unified Contact Center Express (UCCX)" },
        { name: "Cisco Unified Contact Center Enterprise (UCCE)" },
      ],
      "Cisco Wireless": [
        { name: "Cisco Wireless Fundamentals (WLFNDU)" },
        { name: "Cisco Wireless LAN Essentials" },
        { name: "Getting to Know SDN with Cisco ACI" },
      ],
      "Cisco DevNet": [
        { name: "Cisco Certified DevNet Associate" },
      ],
      "Cisco Meraki": [
        { name: "Implementing Cisco Meraki Firewalls" },
        { name: "Implementing Cisco Meraki Switches" },
        { name: "Implementing Cisco Meraki Access Points" },
      ],
      "Fortinet": [
        { name: "Fortinet NSE 5 - FortiAnalyzer (NSE5_FAZ-7.X)" },
        { name: "Fortinet NSE 5 - FortiManager (NSE5_FMG-7.X)" },
        { name: "Fortinet NSE7 - Enterprise Firewall (NSE7_EFW-7.x)" },
      ],
      "Aruba & CWNP": [
        { name: "Aruba Campus Access Fundamentals (ACA)" },
        { name: "Certified Wireless Network Administrator (CWNA-108)" },
      ],
      "Juniper": [
        { name: "Juniper JNCIA-Junos (JN0-104)" },
        { name: "Juniper JNCIP Enterprise Routing" },
        { name: "Juniper JNCIS-Route (JN0-351)" },
        { name: "Juniper JNCIS-Switch (JN0-351)" },
      ],
      "CompTIA Network+": [
        { name: "CompTIA Network+ (N10-009)*" },
        { name: "CompTIA Network+ (N10-009) Exam Crash", isBytes: true },
      ],
      "Networking Fundamentals": [
        { name: "Modern Networking: IPv6", isBytes: true },
        { name: "Wireshark for IT Professionals", isBytes: true },
        { name: "BGP Routing Fundamentals for IPv4" },
        { name: "Network Analysis with Wireshark" },
        { name: "Network Modeling with GNS3" },
      ],
      "Azure Networking": [
        { name: "AZ-700: Designing and Implementing Microsoft Azure Networking Solutions" },
      ],
      "Service Provider": [
        { name: "Cisco CCNP Service Provider: SPCOR" },
      ],
      "Palo Alto Networks": [
        { name: "Palo Alto Networks Certified Network Security Engineer (PCNSE)" },
      ],
      "SonicWall": [
        { name: "SonicWall Network Security Administrator for SonicOS 7" },
      ],
      "Network Monitoring": [
        { name: "Splunk Core Certified User" },
      ],
    },
    "VDI/Virtualization": {
      "VMware Horizon": [
        { name: "Horizon ICM v7.12 for the Real World" },
        { name: "Horizon ICM v8 for the Real World" },
      ],
      "VMware vSphere": [
        { name: "vSphere ICM v7.0 for the Real World" },
        { name: "VMware vSphere VCP 2024 - Data Center Virtualization (VCP-DCV)" },
      ],
      "Citrix": [
        { name: "Citrix VDI Administration (CCA-V)" },
        { name: "Citrix ADC-Netscaler" },
      ],
    },
    "Cybersecurity": {
      "CompTIA Security": [
        { name: "CompTIA Security+ (SY0-701)*" },
        { name: "Security+ Exam Crash", isBytes: true },
        { name: "CompTIA CySA+ (CS0-003)*" },
        { name: "CompTIA PenTest+ V3 (PT0-003)*" },
        { name: "CompTIA SecurityX (CAS-005)*" },
      ],
      "ISC2 Certifications": [
        { name: "Certified Cloud Security Professional (CCSP)*" },
        { name: "Certified Information Systems Security Professional (CISSP)*" },
        { name: "Certified Information Systems Security Professional (CISSP) Exam Crash", isBytes: true },
      ],
      "EC-Council": [
        { name: "Ethical Hacking v13*" },
        { name: "CHFI (Professional Cybersecurity Forensic Investigator)" },
        { name: "Network Defender Professional" },
        { name: "Penetration Testing Professional" },
        { name: "Chief Information Security Officer Certification (CCISO)*" },
      ],
      "ISACA": [
        { name: "CRISC" },
        { name: "Certified Information Systems Auditor (CISA)*" },
        { name: "CISM*" },
      ],
      "Microsoft Security": [
        { name: "SC-900: Microsoft Security, Compliance, and Identity Fundamentals" },
        { name: "SC-100: Microsoft Cybersecurity Architect" },
        { name: "SC-200: Microsoft Security Operations Analyst" },
        { name: "SC-300: Microsoft Identity and Access Administrator" },
        { name: "AZ-500: Microsoft Azure Security Technologies" },
        { name: "MS-500: Microsoft 365 Security Administration" },
        { name: "Using Microsoft Security Copilot" },
      ],
      "Cisco Security": [
        { name: "Cisco CyberOps Associate*" },
        { name: "Cisco CCNP Security: SCOR" },
        { name: "Cisco CCNP Security: SISE" },
        { name: "Cisco CCNP Security: SVPN" },
      ],
      "Firewall & Security Appliances": [
        { name: "Check Point Certified Security Administrator (CCSA)" },
        { name: "Palo Alto Networks Certified Network Security Engineer (PCNSE)" },
        { name: "SonicWall Network Security Administrator for SonicOS 7" },
        { name: "SonicWall SonicOS 7 Real World" },
        { name: "Introduction to Cisco Firepower Services" },
        { name: "F5 101 – Application Delivery Fundamentals" },
      ],
      "Cloud Security": [
        { name: "AWS Certified Security Specialty (SCS-C02)" },
        { name: "Certified Cloud Security Professional (CCSP)*" },
      ],
      "Identity & Access": [
        { name: "Okta Certified Professional" },
        { name: "SC-300: Microsoft Identity and Access Administrator" },
      ],
      "SIEM & Monitoring": [
        { name: "Splunk Core Certified User" },
      ],
      "NIST Framework": [
        { name: "Exploring the NIST 2.0 Cybersecurity Framework" },
        { name: "NIST Cybersecurity Framework 2.0 Overview", isBytes: true },
        { name: "NIST 2.0 Functions: Identify and Protect", isBytes: true },
        { name: "NIST 2.0 Functions: Detect, Respond, Recover, Govern", isBytes: true },
        { name: "NIST 2.0 Frameworks, Governance, and Continuous Improvement", isBytes: true },
      ],
      "Hands-On Labs": [
        { name: "Cyber Range Trailhead" },
        { name: "Microsoft Range Trailhead" },
        { name: "Net Range Trailhead" },
      ],
      "General Security Topics": [
        { name: "Wireless and Mobile Security" },
      ],
      "Security Webinars": [
        { name: "Webinar: Three Things to Know About the NIST Cybersecurity Framework", isWebinar: true },
        { name: "Webinar: Seven Phases of the Cyber Kill Chain", isWebinar: true },
        { name: "Webinar: Three Essentials to Building a Culture of Cybersecurity", isWebinar: true },
        { name: "Webinar: Introduction to IPsec Tunnels", isWebinar: true },
        { name: "Webinar: Crash Course in Metasploit Fundamentals", isWebinar: true },
        { name: "Webinar: Mastering CompTIA Security+ Certification", isWebinar: true },
        { name: "Webinar: Rethinking Password Security in the Age of AI", isWebinar: true },
        { name: "Webinar: Mastering Network Reconnaissance with Nmap", isWebinar: true },
        { name: "Webinar: Mastering Security Automation and Elevating Your Cybersecurity", isWebinar: true },
        { name: "Webinar: Unleash the Power of Nmap for IT Pros", isWebinar: true },
        { name: "Webinar: Fundamentals of SQL Injection Threats", isWebinar: true },
        { name: "Webinar: Project Management in a Cybersecurity-Centric Organization", isWebinar: true },
        { name: "Webinar: Five Key Utilities for the Security Practitioner", isWebinar: true },
        { name: "Webinar: DNS Exfiltration Attacks and How to Spot Them", isWebinar: true },
        { name: "Webinar: Insider Threats - Understanding and Mitigating the Risk", isWebinar: true },
        { name: "Webinar: Three Recent Ransomware Attacks That Could Have Been Prevented", isWebinar: true },
        { name: "Webinar: Navigating the Future - Zero Trust Framework in Cybersecurity", isWebinar: true },
        { name: "Webinar: Exploring Four Essential Security Tools in StormWind's Cyber Range", isWebinar: true },
        { name: "Webinar: The Three Most Likely Ways You'll Get Hit by Ransomware", isWebinar: true },
        { name: "Webinar: Microsoft Features to Protect Your Organization from Ransomware", isWebinar: true },
      ],
    },
    "Security Awareness": {
      "Security Awareness Fundamentals": [
        { name: "Security Awareness" },
        { name: "Cybersecurity Essentials" },
        { name: "Guarding Your Passwords" },
        { name: "Safe Systems Use" },
        { name: "Staying Safe While Remote and Traveling" },
      ],
      "Email Protection": [
        { name: "Email Protection" },
        { name: "Email-Based Social Engineering Attacks" },
        { name: "Exposing Spoofed Email Addresses" },
        { name: "Guarding Against Email Attachments" },
        { name: "Phishing Emails Exposed" },
        { name: "Protected Email Use in Microsoft Office" },
        { name: "Safe Email Usage 101" },
      ],
      "Executive Briefings": [
        { name: "Emerging Security Concerns" },
        { name: "Guiding Strategies for IT Security" },
        { name: "Organizational System Threats" },
        { name: "Persistent Security Concerns" },
      ],
      "Ransomware Defense": [
        { name: "Ransomware Defense" },
        { name: "Best Practices to Thwart Ransomware" },
        { name: "Lessons Learned From Actual Ransomware Breaches" },
        { name: "Ransomware Examined" },
        { name: "Ransomware in the Modern World" },
        { name: "Safe Systems Practices to Combat Ransomware" },
        { name: "Understanding the Threat of Ransomware" },
        { name: "Vehicles for Ransomware" },
      ],
      "Technical Security Awareness": [
        { name: "Cybersecurity Risks" },
        { name: "Ransomware Protection Measures" },
        { name: "Secured Infrastructure" },
        { name: "Secured Mobile Devices" },
        { name: "Secured Workstations" },
        { name: "Security Technologies" },
      ],
    },
    "Bytes": {
      "AI": [
        { name: "ChatGPT for IT Professionals [Applied Skills]", isBytes: true },
        { name: "ChatGPT Enterprise Adoption [Executive Briefing]", isBytes: true },
        { name: "ChatGPT for Efficiency [Executive Briefing]", isBytes: true },
        { name: "ChatGPT Quickstart [Applied Skills]", isBytes: true },
        { name: "ChatGPT Tools and Features [Applied Skills]", isBytes: true },
        { name: "Intro to ChatGPT Prompting [Applied Skills]", isBytes: true },
        { name: "Under the Hood of ChatGPT [Applied Skills]", isBytes: true },
      ],
      "Networking": [
        { name: "Cisco CCNA 200-301 Exam Crash", isBytes: true },
        { name: "Modern Networking: IPv6", isBytes: true },
        { name: "Wireshark for IT Professionals", isBytes: true },
        { name: "CompTIA Network+ (N10-009) Exam Crash", isBytes: true },
      ],
      "Cybersecurity": [
        { name: "Security+ Exam Crash", isBytes: true },
        { name: "ITIL v4 Foundations Exam Crash", isBytes: true },
        { name: "Certified Information Systems Security Professional (CISSP) Exam Crash", isBytes: true },
        { name: "NIST Cybersecurity Framework 2.0 Overview", isBytes: true },
        { name: "NIST 2.0 Functions: Identify and Protect", isBytes: true },
        { name: "NIST 2.0 Functions: Detect, Respond, Recover, Govern", isBytes: true },
        { name: "NIST 2.0 Frameworks, Governance, and Continuous Improvement", isBytes: true },
      ],
      "Project Management": [
        { name: "AI for Project Managers", isBytes: true },
        { name: "Application of Agile Principles", isBytes: true },
        { name: "Agile Roles and Responsibilities", isBytes: true },
        { name: "Overview of Agile Frameworks", isBytes: true },
        { name: "Agile Ceremonies", isBytes: true },
        { name: "Estimating Techniques for Agile Projects", isBytes: true },
      ],
      "Microsoft": [
        { name: "Using Microsoft 365 Copilot", isBytes: true },
        { name: "Microsoft 365 Copilot: Word", isBytes: true },
        { name: "Microsoft 365 Copilot: Outlook", isBytes: true },
        { name: "Microsoft 365 Copilot: PowerPoint", isBytes: true },
        { name: "Microsoft 365 Copilot: Excel", isComingSoon: true, isBytes: true },
        { name: "Microsoft 365 Copilot: Teams", isComingSoon: true, isBytes: true },
        { name: "Building Agents in Copilot Studio", isComingSoon: true, isBytes: true },
        { name: "PowerShell Foundations [Applied Skills]", isBytes: true },
        { name: "PowerShell Automation for Administrators [Applied Skills]", isBytes: true },
        { name: "Getting Started with Microsoft Graph PowerShell", isBytes: true },
        { name: "Microsoft Graph PowerShell for EntraID Administrators", isBytes: true },
        { name: "Microsoft Graph PowerShell for SharePoint Administrators", isBytes: true },
        { name: "Microsoft Graph PowerShell for Teams Administrators", isBytes: true },
        { name: "Microsoft Graph PowerShell for Exchange Online", isBytes: true },
        { name: "AZ-900: Microsoft Azure Fundamentals Exam Crash", isBytes: true },
        { name: "Using Microsoft Security Copilot", isBytes: true },
        { name: "Intune for Microsoft Enterprises", isBytes: true },
      ],
    },
    "Coming Soon": {
      "Q4 2025 - Microsoft Copilot": [
        { name: "Manager Readiness for Microsoft 365 Copilot", isComingSoon: true },
        { name: "Microsoft 365 Copilot: Prompting Practices", isComingSoon: true },
        { name: "Microsoft 365 Copilot: Excel", isComingSoon: true },
        { name: "Microsoft 365 Copilot: Teams", isComingSoon: true },
        { name: "Microsoft 365 Copilot: OneDrive", isComingSoon: true },
        { name: "Microsoft 365 Copilot: SharePoint", isComingSoon: true },
        { name: "Microsoft 365 Copilot: Power Automate", isComingSoon: true },
        { name: "Building Agents in Copilot Studio", isComingSoon: true },
        { name: "Administering Microsoft Copilot AI", isComingSoon: true },
      ],
      "Q4 2025 - Other": [
        { name: "CompTIA Linux+ (XK0-006)", isComingSoon: true },
        { name: "AWS Certified CloudOps Engineer (SOA-C03)", isComingSoon: true },
        { name: "CMMC Program Foundations", isComingSoon: true },
      ],
      "Q1 2026 - Microsoft": [
        { name: "AZ-500: Microsoft Azure Security Technologies", isComingSoon: true },
        { name: "AZ-104: Microsoft Azure Administrator Exam Crash", isComingSoon: true },
        { name: "SC-300: Microsoft Identity and Access Administrator", isComingSoon: true },
      ],
      "Q1 2026 - Security & Networking": [
        { name: "CISA", isComingSoon: true },
        { name: "Ethical Hacking v13 Exam Crash", isComingSoon: true },
        { name: "Cisco CCNP Enterprise: ENCOR v1.2", isComingSoon: true },
        { name: "Cisco CCNA Cybersecurity", isComingSoon: true },
      ],
      "Q1 2026 - CompTIA": [
        { name: "CompTIA A+ 1201 Exam Crash", isComingSoon: true },
        { name: "CompTIA A+ 1202 Exam Crash", isComingSoon: true },
        { name: "CompTIA Linux+ Exam Crash", isComingSoon: true },
      ],
      "Q2 2026 - Microsoft & AI": [
        { name: "AB-100: Agentic AI Business Solutions Architect", isComingSoon: true },
        { name: "AI-900: Microsoft Azure AI Fundamentals", isComingSoon: true },
      ],
      "Q2 2026 - Networking & Cloud": [
        { name: "Proxmox VE 9 ICM", isComingSoon: true },
        { name: "Cisco CCNA Automation", isComingSoon: true },
        { name: "Cisco CCNP Enterprise: ENCOR Exam Crash", isComingSoon: true },
        { name: "AWS Cloud Practitioner (CLF-C02) Exam Crash", isComingSoon: true },
      ],
    },
  };

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    const categoryParam = searchParams.get("category");
    return categoryParam && Object.keys(courseData).includes(categoryParam) 
      ? categoryParam 
      : "All Courses";
  });
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("All Subcategories");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hideComingSoon, setHideComingSoon] = useState<boolean>(false);

  const categories = ["All Courses", ...Object.keys(courseData)];

  const getSubcategories = () => {
    if (selectedCategory === "All Courses") return [];
    const categoryData = courseData[selectedCategory as keyof typeof courseData];
    if (!categoryData) return [];
    return Object.keys(categoryData);
  };

  const subcategories = getSubcategories();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("All Subcategories");
  };

  const getFilteredCourses = () => {
    const filterComingSoon = (courses: Course[]) => {
      if (!hideComingSoon) return courses;
      return courses.filter((course) => {
        const isComingSoon = typeof course === 'object' && course.isComingSoon;
        return !isComingSoon;
      });
    };

    // If there's a search query, search across ALL categories
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      const searchFiltered: any = {};

      Object.entries(courseData).forEach(([category, subcategories]) => {
        const filteredSubcategories: any = {};

        Object.entries(subcategories as Record<string, Course[]>).forEach(([subcategory, courses]) => {
          const matchingCourses = courses.filter((course) => {
            const courseName = typeof course === 'string' ? course : course.name;
            return courseName.toLowerCase().includes(searchLower);
          });

          const filteredCourses = filterComingSoon(matchingCourses);

          if (filteredCourses.length > 0) {
            filteredSubcategories[subcategory] = filteredCourses;
          }
        });

        if (Object.keys(filteredSubcategories).length > 0) {
          searchFiltered[category] = filteredSubcategories;
        }
      });

      return searchFiltered;
    }

    // If "All Courses" is selected, show all courses from all categories
    if (selectedCategory === "All Courses") {
      const allFiltered: any = {};
      Object.entries(courseData).forEach(([category, subcategories]) => {
        const filteredSubcategories: any = {};
        Object.entries(subcategories as Record<string, Course[]>).forEach(([subcategory, courses]) => {
          const filteredCourses = filterComingSoon(courses);
          if (filteredCourses.length > 0) {
            filteredSubcategories[subcategory] = filteredCourses;
          }
        });
        if (Object.keys(filteredSubcategories).length > 0) {
          allFiltered[category] = filteredSubcategories;
        }
      });
      return allFiltered;
    }

    // If no search query, apply category/subcategory filters
    const categoryData = courseData[selectedCategory as keyof typeof courseData];
    if (!categoryData) return {};
    
    if (selectedSubcategory === "All Subcategories") {
      const filtered: any = {};
      Object.entries(categoryData).forEach(([subcategory, courses]) => {
        const filteredCourses = filterComingSoon(courses as Course[]);
        if (filteredCourses.length > 0) {
          filtered[subcategory] = filteredCourses;
        }
      });
      return { [selectedCategory]: filtered };
    } else {
      const courses = (categoryData as any)[selectedSubcategory];
      const filteredCourses = filterComingSoon(courses);
      if (filteredCourses.length === 0) return {};
      return { 
        [selectedCategory]: { 
          [selectedSubcategory]: filteredCourses
        } 
      };
    }
  };

  const filteredCourses = getFilteredCourses();
  
  const getTotalCourses = () => {
    let total = 0;
    Object.entries(filteredCourses).forEach(([_, subcategories]) => {
      Object.entries(subcategories as Record<string, Course[]>).forEach(([_, courses]) => {
        total += courses.length;
      });
    });
    return total;
  };
  
  const totalCourses = getTotalCourses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Course Catalog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent pb-2 leading-tight">
              Course Catalog
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of IT and project management courses. Filter by category to find exactly what you need.
            </p>

            {/* Search Bar and Toggle */}
            <div className="flex flex-col items-center justify-center gap-4 mb-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full bg-background"
                  />
                </div>
                <Button
                  onClick={() => setHideComingSoon(!hideComingSoon)}
                  variant={hideComingSoon ? "default" : "outline"}
                  size="default"
                  className="gap-2 whitespace-nowrap w-full sm:w-auto"
                >
                  {hideComingSoon ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  <span>{hideComingSoon ? "Show" : "Hide"} Coming Soon</span>
                </Button>
              </div>
            </div>

            {/* Category and Subcategory Filters */}
            <div className="flex flex-col items-center justify-center gap-4 mb-6">
              <div className="flex flex-col items-center gap-4 w-full">
                <label className="text-sm font-medium">
                  Filter by Category:
                </label>
                <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className="transition-all duration-200"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {subcategories.length > 0 && (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                  <label htmlFor="subcategory-select" className="text-sm font-medium whitespace-nowrap">
                    Filter by Subcategory:
                  </label>
                  <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                    <SelectTrigger className="w-full sm:w-[300px] bg-background" id="subcategory-select">
                      <SelectValue placeholder="Select a subcategory" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="All Subcategories">
                        All Subcategories
                      </SelectItem>
                      {subcategories.map((subcategory) => (
                        <SelectItem key={subcategory} value={subcategory}>
                          {subcategory}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-primary">{totalCourses}</span> course{totalCourses !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Courses List */}
          <div className="space-y-6">
            {Object.entries(filteredCourses).map(([category, subcategories]) => (
              <div key={category} className="space-y-6">
                {Object.entries(subcategories as Record<string, Course[]>).map(([subcategory, courses]) => (
                  <div
                    key={subcategory}
                    className="animate-fade-in bg-card rounded-xl border border-border p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-0.5 w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                      <h2 className="text-lg sm:text-xl font-bold text-foreground">
                        {subcategory}
                      </h2>
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                    </div>

                    <div className="grid gap-2">
                      {courses.map((course, index) => {
                        const courseName = typeof course === 'string' ? course : course.name;
                        const isBytes = typeof course === 'object' && course.isBytes;
                        const isComingSoon = typeof course === 'object' && course.isComingSoon;
                        const isWebinar = typeof course === 'object' && course.isWebinar;
                        
                        return (
                          <div
                            key={index}
                            className="group flex items-start gap-2 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-primary/20"
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                            </div>
                            <div className="flex-1 flex items-start justify-between gap-2">
                              <p className="text-xs sm:text-sm leading-snug text-foreground">
                                {courseName}
                              </p>
                              <div className="flex items-center gap-1.5 shrink-0">
                                {isBytes && (
                                  <Badge variant="secondary" className="flex items-center gap-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 py-0 h-5">
                                    <Zap className="h-2.5 w-2.5" />
                                    <span className="text-[10px] font-semibold">Bytes</span>
                                  </Badge>
                                )}
                                {isWebinar && (
                                  <Badge variant="secondary" className="flex items-center gap-0.5 bg-accent/10 text-accent-foreground border-accent/20 hover:bg-accent/20 py-0 h-5">
                                    <span className="text-[10px] font-semibold">Webinar</span>
                                  </Badge>
                                )}
                                {isComingSoon && (
                                  <Badge variant="outline" className="flex items-center gap-0.5 bg-muted/50 text-muted-foreground border-muted-foreground/20 py-0 h-5">
                                    <span className="text-[10px] font-semibold">Coming Soon</span>
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground text-center">
                        {courses.length} course{courses.length !== 1 ? 's' : ''} in this subcategory
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              * DoD 8140 Aligned Certification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
