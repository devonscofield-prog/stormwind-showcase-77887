import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Zap, Search, EyeOff, Eye } from "lucide-react";
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

  useEffect(() => {
    document.title = "Course Catalog - StormWind Studios";
  }, []);

  const courseData = {
    "Bytes": {
      "ChatGPT & AI": [
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
      "Project Management & Agile": [
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
    "AI & ML": {
      "OpenAI & ChatGPT": [
        { name: "Accelerating Back-End Development with ChatGPT" },
        { name: "Accelerating Front-End Development with ChatGPT" },
        { name: "Accelerating Web Development with ChatGPT" },
        { name: "Categorization with the OpenAI API", isComingSoon: true },
        { name: "ChatGPT for IT Professionals" },
        { name: "ChatGPT for IT Professionals [Applied Skills]", isBytes: true },
        { name: "ChatGPT Prompt Library", isComingSoon: true },
        { name: "Creating and Using Azure OpenAI Service" },
        { name: "Developing a GPT Chatbot with the OpenAI API", isComingSoon: true },
        { name: "Embedding with OpenAI API", isComingSoon: true },
        { name: "Finetuning with OpenAI API", isComingSoon: true },
        { name: "Getting AutoGPT Up and Running", isComingSoon: true },
        { name: "Internal Knowledge Base Agents with OpenAI & LangChain" },
        { name: "LangChain with OpenAI API", isComingSoon: true },
        { name: "Using the OpenAI Playground", isComingSoon: true },
        { name: "Working with the OpenAI API", isComingSoon: true },
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
    },
    "AI for the End User": {
      "ChatGPT General Use": [
        { name: "Understanding the ChatGPT Revolution", isComingSoon: true },
        { name: "Ethics Considerations for ChatGPT" },
        { name: "Using ChatGPT Securely", isComingSoon: true },
        { name: "ChatGPT Quickstart" },
        { name: "ChatGPT Features and Tools" },
        { name: "Under the Hood of ChatGPT" },
        { name: "Quick Look: GenAI Video with Sora 2" },
        { name: "Introduction to ChatGPT" },
        { name: "Getting Started with ChatGPT Plus" },
      ],
      "Management Readiness for ChatGPT": [
        { name: "Going Beyond ChatGPT from OpenAI", isComingSoon: true },
        { name: "ChatGPT and Transformational Tools from OpenAI", isComingSoon: true },
        { name: "Driving the ChatGPT Transformation of Your Org", isComingSoon: true },
        { name: "Directing ChatGPT and OpenAI Use-Cases", isComingSoon: true },
        { name: "Kickstarting Manager-Level Thought on ChatGPT and OpenAI", isComingSoon: true },
        { name: "Safe Data Practices and Data Controls for ChatGPT" },
      ],
      "Prompt Engineering": [
        { name: "Intro to ChatGPT Prompting" },
        { name: "Advanced ChatGPT Prompt Engineering", isComingSoon: true },
        { name: "Response Sculpting with ChatGPT", isComingSoon: true },
        { name: "AI Communication Mastery: Crafting Effective Prompts" },
        { name: "AI Prompt Writing" },
      ],
      "ChatGPT Productivity": [
        { name: "Sparking Your Creativity with ChatGPT", isComingSoon: true },
        { name: "Using ChatGPT in Your Sales Communications", isComingSoon: true },
        { name: "Using ChatGPT to Optimize Your Social Media", isComingSoon: true },
        { name: "Using ChatGPT to Improve Your Writing", isComingSoon: true },
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
        { name: "General Artificial Intelligence Awareness", isComingSoon: true },
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
        { name: "Webinar: Copilot and Microsoft Defender XDR in Microsoft 365", isWebinar: true },
        { name: "Webinar: ChatGPT Canvas: A Slick New Feature", isWebinar: true },
        { name: "Webinar: ChatGPT: The Secret Weapon for Project Managers", isWebinar: true },
        { name: "Webinar: Getting Started with Copilot Administration in Microsoft 365", isWebinar: true },
        { name: "Webinar: Getting Started with AI in Your Project Management Workflow", isWebinar: true },
        { name: "Webinar: Unlocking Productivity with Microsoft 365 Copilot", isWebinar: true },
        { name: "Webinar: Unlock the Power of ChatGPT for Effective Project Management", isWebinar: true },
        { name: "Webinar: ChatGPT's GPT Store: First Look", isWebinar: true },
        { name: "Webinar: Empower Your SharePoint Experience with Copilot Agents", isWebinar: true },
        { name: "Webinar: What Every Manager Should Know About ChatGPT", isWebinar: true },
        { name: "Webinar: ChatGPT Plus for IT Professionals", isWebinar: true },
        { name: "Webinar: Test Driving DALL-E 3 Image Generation in ChatGPT", isWebinar: true },
        { name: "Webinar: Protecting Against ChatGPT Automated Login Scripts and Other Threats", isWebinar: true },
        { name: "Webinar: Solving Network Requirements for ChatGPT", isWebinar: true },
        { name: "Webinar: Revolutionizing Project Management with ChatGPT and Microsoft Planner", isWebinar: true },
        { name: "Webinar: AWS Features to Protect Your S3 Buckets from Ransomware", isWebinar: true },
        { name: "Webinar: Kickstart Your Azure Journey with Hands-On Learning", isWebinar: true },
        { name: "Webinar: Creating a Hybrid Network Between Your On-Site Network and Azure", isWebinar: true },
        { name: "Webinar: Azure Fundamentals Crash Course", isWebinar: true },
      ],
    },
    "Business Pro": {
      "Power Apps": [
        { name: "Advancing Your Canvas Power Apps Skills – Chapter 1", isComingSoon: true },
        { name: "Advancing Your Canvas Power Apps Skills – Chapter 2", isComingSoon: true },
        { name: "App In A Day", isComingSoon: true },
        { name: "App In A Snap: Culture Shoutout App", isComingSoon: true },
        { name: "App In A Snap: Park Inspection", isComingSoon: true },
        { name: "App In A Snap: Project Proposal and Purchase Approval App", isComingSoon: true },
        { name: "Building Microsoft Power Platform Solutions", isComingSoon: true },
        { name: "Building Solutions in Dataverse", isComingSoon: true },
        { name: "Creating Components for Canvas Applications", isComingSoon: true },
        { name: "Designing Canvas Apps for Project Management", isComingSoon: true },
        { name: "Introduction to Canvas Apps with Power Apps", isComingSoon: true },
        { name: "Building Your First Canvas Power App", isComingSoon: true },
        { name: "End to End Solution to Learn Power Apps and Dataverse", isComingSoon: true },
        { name: "Model Driven Apps in Dataverse", isComingSoon: true },
        { name: "Power Apps Beginner to Pro", isComingSoon: true },
        { name: "Power Apps Live Hackathon", isComingSoon: true },
        { name: "Power Platform Copilot and AI Builder", isComingSoon: true },
        { name: "Power Platform for Teams", isComingSoon: true },
        { name: "PL-900: Microsoft Power Platform Fundamentals Review", isComingSoon: true },
        { name: "Power Apps – Problem, Design, Solution", isComingSoon: true },
        { name: "Power Platform Administration", isComingSoon: true },
        { name: "Power Platform For Educators", isComingSoon: true },
        { name: "Power Platform For Teams", isComingSoon: true },
        { name: "Pragmatic Guides – Power FX", isComingSoon: true },
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
      "Power BI": [
        { name: "Configuring Power BI Data Gateways", isComingSoon: true },
        { name: "Dashboard in a Day", isComingSoon: true },
        { name: "Data Connectors in Power BI", isComingSoon: true },
        { name: "DAX Query View in Power BI", isComingSoon: true },
        { name: "Power BI DAX Functions Tutorial with Copilot Integration", isComingSoon: true },
        { name: "Pragmatic Guides – DAX Date and Time Functions", isComingSoon: true },
        { name: "Pragmatic Guides – DAX Text Functions", isComingSoon: true },
        { name: "TMDL View in Power BI", isComingSoon: true },
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
        { name: "Portfolio Builder – Presidential Elections Data", isComingSoon: true },
        { name: "Portfolio Builder – Video Game Data", isComingSoon: true },
        { name: "Power BI Calculation Groups", isComingSoon: true },
        { name: "Power BI Custom Visuals", isComingSoon: true },
        { name: "Power BI for Finance: Mastering Power BI for Financial Insights", isComingSoon: true },
        { name: "Power BI for the Consumer", isComingSoon: true },
        { name: "Power BI Report Server Administration", isComingSoon: true },
        { name: "Power BI Security", isComingSoon: true },
        { name: "Power BI Service Administration", isComingSoon: true },
        { name: "Power BI Subscriptions", isComingSoon: true },
        { name: "Power BI with Azure DevOps Integration", isComingSoon: true },
        { name: "Power Query for Business", isComingSoon: true },
        { name: "Pragmatic Guides – DAX Aggregations", isComingSoon: true },
        { name: "Pragmatic Guides – DAX Logical Functions", isComingSoon: true },
        { name: "Universal Design in Power BI", isComingSoon: true },
        { name: "Visual Calculations for DAX in Power BI", isComingSoon: true },
      ],
      "Azure Data": [
        { name: "Introduction to Azure Databricks", isComingSoon: true },
        { name: "Utilizing Azure Databricks", isComingSoon: true },
        { name: "Advanced Azure Data Factory", isComingSoon: true },
        { name: "Advanced Data Flows in Azure Synapse Analytics", isComingSoon: true },
        { name: "Azure DevOps for Project Managers", isComingSoon: true },
        { name: "Azure DevOps for Users", isComingSoon: true },
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
      "Excel": [
        { name: "Art and Science of Excel Modeling", isComingSoon: true },
        { name: "Building BI with Pivot Tables", isComingSoon: true },
        { name: "Interactive Dashboards with Excel", isComingSoon: true },
        { name: "Data Analytics With Excel", isComingSoon: true },
        { name: "Microsoft Excel Beginner to Pro", isComingSoon: true },
        { name: "Microsoft Excel Fundamentals", isComingSoon: true },
        { name: "MO-200: Microsoft Office Specialist Excel Review", isComingSoon: true },
        { name: "Modern Excel Analyst in a Day", isComingSoon: true },
        { name: "Power BI with Excel", isComingSoon: true },
        { name: "Top Functions in Excel", isComingSoon: true },
      ],
      "Project": [
        { name: "Advanced Microsoft Project for the PMO", isComingSoon: true },
        { name: "Microsoft Project Beginner to Pro", isComingSoon: true },
        { name: "Introduction to Microsoft Project for the Web", isComingSoon: true },
        { name: "Microsoft Project Desktop: Beginner to Pro", isComingSoon: true },
      ],
    },
    "Desktop Applications": {
      "Core Office Applications and Usage": [
        { name: "Microsoft 365 Core Applications – Beginner", isComingSoon: true },
        { name: "Office 2019 New Features Beginner" },
        { name: "Microsoft 365 New Features Beginner", isComingSoon: true },
        { name: "Microsoft 365 Overview Beginner" },
        { name: "Microsoft 365 OneDrive Beginner" },
        { name: "Microsoft 365 OneNote Online Beginner" },
        { name: "OneNote for Windows 10" },
      ],
      "Microsoft Applications": [
        { name: "Microsoft 365 PowerApps" },
        { name: "Microsoft 365 Sway Beginner" },
        { name: "Microsoft 365 Flow" },
        { name: "Microsoft 365 Forms" },
        { name: "Visio 2019 Beginner" },
        { name: "Visio 365 Beginner", isComingSoon: true },
        { name: "Microsoft 365 Video Beginner" },
        { name: "Copilot in Excel 365 – Beginner", isComingSoon: true },
        { name: "Copilot in Microsoft Teams – Beginner", isComingSoon: true },
        { name: "Copilot in Windows 11 – Beginner", isComingSoon: true },
        { name: "Copilot in Microsoft Whiteboard – Beginner", isComingSoon: true },
        { name: "Copilot in Microsoft OneNote – Beginner", isComingSoon: true },
        { name: "Copilot in Microsoft Loop – Beginner", isComingSoon: true },
        { name: "Copilot in Microsoft Forms – Beginner", isComingSoon: true },
        { name: "Copilot in Microsoft 365 Stream – Beginner", isComingSoon: true },
        { name: "Microsoft 365 Teams Beginner", isComingSoon: true },
        { name: "Microsoft 365 Visio Desktop Beginner" },
        { name: "Microsoft 365 Visio Online Beginner" },
        { name: "Microsoft 365 Power Automate Beginner" },
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
        { name: "Access 2019 Beginner" },
        { name: "Access 2019 Intermediate" },
        { name: "Access 2019 Advanced" },
        { name: "Access 365 Beginner" },
        { name: "Access 365 Intermediate" },
        { name: "Access 365 Advanced" },
      ],
      "Project Management Applications": [
        { name: "Microsoft 365 Planner Beginner" },
        { name: "Project 365 Beginner" },
        { name: "Project 365 Advanced" },
      ],
      "SharePoint Applications": [
        { name: "Microsoft 365 SharePoint Sites Beginner" },
        { name: "SharePoint 365 Site Owner" },
        { name: "SharePoint 365 Site User" },
      ],
      "Collaboration Applications": [
        { name: "Microsoft 365 Teams Beginner" },
        { name: "Microsoft 365 Collaborating in Microsoft 365 Beginner" },
        { name: "Microsoft 365 Delve Beginner" },
        { name: "Microsoft 365 Yammer Beginner", isComingSoon: true },
        { name: "Skype for Business", isComingSoon: true },
        { name: "Slack – A Complete Guide" },
        { name: "Working with Teams Beginner" },
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
        { name: "Excel 365 – Expert" },
        { name: "Excel 2019 Advanced" },
        { name: "Excel 365 Beginner" },
        { name: "Excel 365 Intermediate" },
        { name: "Excel 365 Advanced" },
        { name: "Excel 365 VBA" },
      ],
      "Outlook Applications": [
        { name: "Outlook 2019 Beginner" },
        { name: "Outlook 2019 Advanced" },
        { name: "Outlook 365 Beginner" },
        { name: "Outlook 365 Advanced" },
        { name: "Outlook 365 Web App Beginner" },
        { name: "Outlook 2016 Beginner" },
      ],
      "Word Applications": [
        { name: "Word 2019 Beginner" },
        { name: "Word 2019 Intermediate" },
        { name: "Word 2019 Advanced" },
        { name: "Word 365 Beginner" },
        { name: "Word 365 Intermediate" },
        { name: "Word 365 Advanced" },
      ],
      "Windows 10": [
        { name: "Windows 10 End User Essentials Beginner" },
        { name: "Windows 10 Troubleshooting Advanced" },
        { name: "Getting to Know Windows 10" },
      ],
      "Windows 11": [
        { name: "Windows 11 New Features Beginner" },
      ],
    },
    "Networking/Firewalls": {
      "Cisco - Routing & Switching": [
        { name: "Cisco CCNA 200-301: Implementing and Administering Cisco Solutions*" },
        { name: "Cisco CCNA 200-301 Exam Crash", isBytes: true },
        { name: "Cisco CCNP Enterprise: ENARSI" },
        { name: "Cisco CCNP Enterprise: ENCOR v1.1" },
      ],
      "Cisco - Security": [
        { name: "Cisco CCNP Security: SCOR" },
        { name: "Cisco CCNP Security: SISE" },
        { name: "Cisco CCNP Security: SVPN" },
        { name: "Cisco CyberOps Associate*" },
      ],
      "Cisco - Collaboration": [
        { name: "Cisco CCNP Collaboration: CLCOR v1.1" },
        { name: "Cisco CCNP Collaboration: CLICA v1.1" },
        { name: "Cisco Unified Contact Center Express (UCCX)" },
        { name: "Cisco Unified Contact Center Enterprise (UCCE)" },
      ],
      "Cisco - Wireless": [
        { name: "Cisco Wireless Fundamentals (WLFNDU)" },
        { name: "Cisco Wireless LAN Essentials" },
        { name: "Cisco CCNP Enterprise: ENWLSI" },
        { name: "Getting to Know SDN with Cisco ACI" },
      ],
      "Cisco - Virtualization": [
        { name: "Introduction to Cisco Unified Computing System (UCS)" },
      ],
      "Cisco - Firewall": [
        { name: "Introduction to Cisco Firepower Services" },
      ],
      "Cisco - Service Provider": [
        { name: "Cisco CCNP Service Provider: SPCOR" },
      ],
      "Cisco - DevNet": [
        { name: "Cisco Certified DevNet Associate" },
      ],
      "Cisco - ENSLD": [
        { name: "Cisco CCNP Enterprise: ENSLD" },
      ],
      "CompTIA Network+": [
        { name: "CompTIA Network+ (N10-008)*" },
        { name: "CompTIA Network+ (N10-009)*" },
        { name: "CompTIA Network+ (N10-009) Exam Crash", isBytes: true },
      ],
      "Palo Alto": [
        { name: "Palo Alto PCNSA: Fundamentals" },
        { name: "Palo Alto PCNSA: Advanced Concepts" },
        { name: "Palo Alto PCNSE" },
      ],
      "Juniper": [
        { name: "Juniper JNCIA-Junos" },
        { name: "Juniper JNCIS-ENT" },
        { name: "Juniper JNCIS-SEC" },
      ],
      "Fortinet": [
        { name: "Fortinet NSE 4 FortiGate Security" },
        { name: "Fortinet NSE 4 FortiGate Infrastructure" },
        { name: "Fortinet NSE 5 FortiAnalyzer" },
        { name: "Fortinet NSE 7 Enterprise Firewall" },
      ],
      "General Networking": [
        { name: "Low Math IP Subnetting" },
        { name: "Introduction to Software-Defined Networking" },
        { name: "Networking Fundamentals" },
        { name: "Modern Networking: IPv6", isBytes: true },
        { name: "Wireshark for IT Professionals", isBytes: true },
      ],
      "Wireless Networking": [
        { name: "Wi-Fi 6 and Wi-Fi 6E Fundamentals" },
        { name: "Cisco Certified Specialist - Enterprise Wireless Implementation (ENWLSI)" },
      ],
      "Network Automation": [
        { name: "Introduction to Network Automation with Ansible" },
        { name: "Introduction to Network Automation with Python" },
      ],
      "SD-WAN and Cloud Networking": [
        { name: "Cisco SD-WAN Fundamentals" },
        { name: "Viptela SD-WAN Solution Overview" },
      ],
      "Networking Webinars": [
        { name: "Webinar: Low Math IP Subnetting", isWebinar: true },
        { name: "Webinar: TCP Deep Dive", isWebinar: true },
        { name: "Webinar: Mastering Static Routes in Your Network", isWebinar: true },
        { name: "Webinar: Building Connectivity with IPv6", isWebinar: true },
        { name: "Webinar: Network+ 009 Prep: Performance-Based Questions", isWebinar: true },
        { name: "Webinar: Wireshark Zero to Neo", isWebinar: true },
        { name: "Webinar: Digging into CompTIA's Updated Network+ Exam", isWebinar: true },
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
      "Waterfall/Predictive Project Management": [
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
      "AI & Automation": [
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
    "Microsoft": {
      "Azure": [
        { name: "AZ-900: Microsoft Azure Fundamentals" },
        { name: "AZ-900: Microsoft Azure Fundamentals Exam Crash", isBytes: true },
        { name: "AZ-104: Microsoft Azure Administrator" },
        { name: "AZ-305: Designing Microsoft Azure Infrastructure Solutions" },
        { name: "AZ-400: Designing and Implementing Microsoft DevOps Solutions" },
        { name: "AZ-500: Microsoft Azure Security Technologies" },
        { name: "AZ-700: Designing and Implementing Microsoft Azure Networking Solutions" },
        { name: "AZ-800: Administering Windows Server Hybrid Core Infrastructure" },
        { name: "AZ-801: Configuring Windows Server Hybrid Advanced Services" },
        { name: "AZ-140: Configuring and Operating Microsoft Azure Virtual Desktop" },
        { name: "AZ-204: Developing Solutions for Microsoft Azure" },
        { name: "Implementing and Managing Azure Cloud with PowerShell" },
        { name: "Azure Range Trailhead" },
        { name: "Microsoft Azure for .NET Developers" },
      ],
      "Security": [
        { name: "SC-900: Microsoft Security, Compliance, and Identity Fundamentals" },
        { name: "SC-100: Microsoft Cybersecurity Architect" },
        { name: "SC-200: Microsoft Security Operations Analyst" },
        { name: "SC-300: Microsoft Identity and Access Administrator" },
        { name: "Using Microsoft Security Copilot", isBytes: true },
      ],
      "Microsoft 365": [
        { name: "MS-900: Microsoft 365 Fundamentals" },
        { name: "MS-102: Microsoft 365 Administrator" },
        { name: "Intune for Microsoft Enterprises", isBytes: true },
        { name: "MD-102: Endpoint Administrator" },
        { name: "Microsoft Endpoint Manager" },
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
      ],
      "PowerShell": [
        { name: "PowerShell Foundations [Applied Skills]", isBytes: true },
        { name: "PowerShell Automation for Administrators [Applied Skills]", isBytes: true },
        { name: "Getting Started with Microsoft Graph PowerShell", isBytes: true },
        { name: "Microsoft Graph PowerShell for EntraID Administrators", isBytes: true },
        { name: "Microsoft Graph PowerShell for SharePoint Administrators", isBytes: true },
        { name: "Microsoft Graph PowerShell for Teams Administrators", isBytes: true },
        { name: "Microsoft Graph PowerShell for Exchange Online", isBytes: true },
        { name: "PowerShell Scripting and Toolmaking" },
        { name: "PowerShell 7 Quick Start for Developers" },
        { name: "PowerShell Advanced Functions and Modules" },
      ],
      "Windows Server": [
        { name: "Windows Server 2025 Administration" },
        { name: "Windows Server 2022 Administration" },
        { name: "Windows Server 2022: Core Infrastructure" },
        { name: "Windows Server 2019 Administration" },
        { name: "Deploying and Managing Active Directory" },
        { name: "Implementing Windows Server Hybrid Cloud Services" },
      ],
      "Microsoft Webinars": [
        { name: "Webinar: Intro Tour: Microsoft 365 Copilot in Word", isWebinar: true },
        { name: "Webinar: Copilot and Microsoft Defender XDR in Microsoft 365", isWebinar: true },
        { name: "Webinar: Getting Started with Copilot Administration in Microsoft 365", isWebinar: true },
        { name: "Webinar: Empower Your SharePoint Experience with Copilot Agents", isWebinar: true },
        { name: "Webinar: Kickstart Your Azure Journey with Hands-On Learning", isWebinar: true },
        { name: "Webinar: Creating a Hybrid Network Between Your On-Site Network and Azure", isWebinar: true },
        { name: "Webinar: Azure Fundamentals Crash Course", isWebinar: true },
      ],
    },
    "Fullstack": {
      "Web Development": [
        { name: "CSS Foundations", isComingSoon: true },
        { name: "HTML Foundations", link: "https://app.stormwindstudios.com/developer/html/html-foundations" },
        { name: "JavaScript Foundations", link: "https://app.stormwindstudios.com/developer/javascript/javascript-foundations" },
        { name: "Node.js Foundations", link: "https://app.stormwindstudios.com/developer/javascript/nodejs-foundations" },
        { name: "React Foundations", isComingSoon: true },
      ],
      "Programming Languages": [
        { name: "Java Foundations", link: "https://app.stormwindstudios.com/developer/java/java-foundations" },
        { name: "Python Foundations", link: "https://app.stormwindstudios.com/stormwind-developer/python/python-foundations" },
        { name: "Python Intermediate", link: "https://app.stormwindstudios.com/stormwind-developer/python/python-intermediate" },
        { name: "Python Application Security", link: "https://app.stormwindstudios.com/developer/python/python-application-security" },
        { name: "Python Flask Foundations", link: "https://app.stormwindstudios.com/developer/python/python-flask" },
        { name: "Ruby Foundations", link: "https://app.stormwindstudios.com/developer/ruby/ruby-foundations" },
      ],
      "React": [
        { name: "Learn React", link: "https://app.stormwindstudios.com/stormwind-developer/react/learn-react" },
        { name: "React Foundations", isComingSoon: true },
        { name: "Advanced React", link: "https://app.stormwindstudios.com/stormwind-developer/react/advanced-react" },
        { name: "Learn React Router 6", link: "https://app.stormwindstudios.com/stormwind-developer/react/learn-react-router-6" },
        { name: "React Router in Depth", link: "https://app.stormwindstudios.com/stormwind-developer/react/react-router-depth" },
        { name: "Learn Class Components in React", link: "https://app.stormwindstudios.com/stormwind-developer/react/learn-class-components-react" },
        { name: "Build Reusable React", link: "https://app.stormwindstudios.com/stormwind-developer/react/build-reusable-react" },
        { name: "Build a Movie Search App in React", link: "https://app.stormwindstudios.com/stormwind-developer/react/build-movie-search-app-react" },
        { name: "Build Tic Tac Toe with React Hooks", link: "https://app.stormwindstudios.com/stormwind-developer/react/build-tic-tac-toe-react-hooks" },
        { name: "Create React Skeleton Screens", link: "https://app.stormwindstudios.com/stormwind-developer/react/create-react-skeleton-screens" },
        { name: "Animate React with Framer Motion", link: "https://app.stormwindstudios.com/stormwind-developer/react/animate-react-framer-motion" },
        { name: "Make a Wordle Clone with React", link: "https://app.stormwindstudios.com/stormwind-developer/react/make-wordle-clone-react" },
        { name: "React Challenges", link: "https://app.stormwindstudios.com/stormwind-developer/react/react-challenges" },
        { name: "React Interview Questions", link: "https://app.stormwindstudios.com/stormwind-developer/react/react-interview-questions" },
        { name: "What's new in React 19", isComingSoon: true },
        { name: "React Native for Beginners", link: "https://app.stormwindstudios.com/stormwind-developer/react-native/react-native-beginners" },
        { name: "React Native with Firestore", link: "https://app.stormwindstudios.com/stormwind-developer/react-native/react-native-firestore" },
        { name: "Chakra UI Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/chakra-ui-crash-course" },
        { name: "Material UI Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/material-ui-crash-course" },
        { name: "Shadcn UI Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/nextjs/shadcn-ui-crash-course" },
      ],
      "Next.js": [
        { name: "Learn Next.js", link: "https://app.stormwindstudios.com/stormwind-developer/nextjs/learn-nextjs" },
        { name: "Next 13 Masterclass", link: "https://app.stormwindstudios.com/stormwind-developer/nextjs/next-13-masterclass" },
        { name: "Next.js with Netlify Identity", link: "https://app.stormwindstudios.com/stormwind-developer/nextjs/nextjs-netlify-identity" },
        { name: "Make a Site with Next.js and Contentful", link: "https://app.stormwindstudios.com/stormwind-developer/nextjs/make-site-nextjs-and-contentful" },
      ],
      "Vue": [
        { name: "Learn Svelte", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/learn-svelte" },
        { name: "Svelte for Beginners", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/svelte-beginners" },
        { name: "SvelteKit Tutorial", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/sveltekit-tutorial" },
        { name: "Sapper Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/sapper/sapper-crash-course" },
        { name: "Build a Gallery with Vue and Firebase Storage", link: "https://app.stormwindstudios.com/stormwind-developer/vuejs/build-gallery-vue-and-firebase-storage" },
        { name: "Build Websites with Vue 3 and Firebase", link: "https://app.stormwindstudios.com/stormwind-developer/firebase/build-websites-vue-3-and-firebase" },
        { name: "Vue 3 with TypeScript Jump Start", link: "https://app.stormwindstudios.com/stormwind-developer/vuejs/vue-3-typescript-jump-start" },
        { name: "Vue 3 Animations", link: "https://app.stormwindstudios.com/stormwind-developer/vuejs/vue-3-animations" },
        { name: "Vuetify Basics", link: "https://app.stormwindstudios.com/stormwind-developer/vuejs/vuetify-basics" },
        { name: "Vuex with Firebase Auth", link: "https://app.stormwindstudios.com/stormwind-developer/vuejs/vuex-firebase-auth" },
        { name: "Pinia Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/vuejs/pinia-crash-course" },
        { name: "Pinia with Firestore", link: "https://app.stormwindstudios.com/stormwind-developer/vuejs/pinia-firestore" },
        { name: "Pinia with Firebase Auth", link: "https://app.stormwindstudios.com/stormwind-developer/vuejs/pinia-firebase-auth" },
        { name: "Nuxt 3 Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/nuxtjs/nuxt-3-crash-course" },
        { name: "Nuxt 3 with Pinia", link: "https://app.stormwindstudios.com/stormwind-developer/nuxtjs/nuxt-3-pinia" },
        { name: "Using Nuxt Router Middleware", link: "https://app.stormwindstudios.com/stormwind-developer/nuxtjs/using-nuxt-router-middleware" },
      ],
      "Flutter & Mobile": [
        { name: "Flutter 1 for Beginner", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/flutter-1-beginner" },
        { name: "Flutter Masterclass", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/flutter-masterclass" },
        { name: "Flutter Animations", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/flutter-animations" },
        { name: "Flutter Forms", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/flutter-forms" },
        { name: "Flutter with Firebase Auth", isComingSoon: true },
        { name: "Riverpod State Management for Flutter", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/riverpod-state-management-flutter" },
        { name: "Dart Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/dart/dart-crash-course" },
        { name: "Deep Dive iOS 16 Swift - SwiftUI Programming", isComingSoon: true },
        { name: "Build a Mobile App with Firebase", link: "https://app.stormwindstudios.com/stormwind-developer/firebase/build-mobile-app-firebase" },
      ],
      "Node.js & Backend": [
        { name: "Learn Node.js", link: "https://app.stormwindstudios.com/stormwind-developer/nodejs/learn-nodejs" },
        { name: "Node.js Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/nodejs/nodejs-crash-course" },
        { name: "Node.js Authentication", link: "https://app.stormwindstudios.com/stormwind-developer/nodejs/nodejs-authentication" },
        { name: "Learn Express.js", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/learn-expressjs" },
        { name: "Intro to NestJS", link: "https://app.stormwindstudios.com/stormwind-developer/nestjs/intro-nestjs" },
        { name: "MERN Stack Tutorial", link: "https://app.stormwindstudios.com/stormwind-developer/mern/mern-stack-tutorial" },
        { name: "MERN Auth Tutorial", link: "https://app.stormwindstudios.com/stormwind-developer/mern/mern-auth-tutorial" },
        { name: "Deno Jump Start", link: "https://app.stormwindstudios.com/stormwind-developer/deno/deno-jump-start" },
        { name: "Make a Chatroom with Deno and Websockets", link: "https://app.stormwindstudios.com/stormwind-developer/deno/make-chatroom-deno-and-websockets" },
        { name: "GraphQL Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/apis/graphql-crash-course" },
        { name: "Learn RabbitMQ: Asynchronous Messaging with Java and Spring", link: "https://app.stormwindstudios.com/stormwind-developer/java/learn-rabbitmq-asynchronous-messaging-java-and-spring" },
        { name: "Redis for Beginners", link: "https://app.stormwindstudios.com/stormwind-developer/databases/redis-beginners" },
        { name: "Redis Stack Tutorial", link: "https://app.stormwindstudios.com/stormwind-developer/databases/redis-stack-tutorial" },
        { name: "Complete MongoDB Tutorial", link: "https://app.stormwindstudios.com/stormwind-developer/databases/complete-mongodb-tutorial" },
      ],
      ".NET & C#": [
        { name: "Microsoft Azure for .NET Developers", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/microsoft-azure-net-developers" },
        { name: "Learn C# by Building Applications", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/learn-c-building-applications" },
        { name: "Learn C# with Windows Forms and a Variety of Projects", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/learn-c-windows-forms-and-variety-projects" },
        { name: "Master C# and SQL by Building Applications", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/master-c-and-sql-building-applications" },
        { name: "C# Console and Windows Forms Development with Entity Framework", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/c-console-and-windows-forms-development-entity" },
        { name: "ASP.NET Core - SOLID and Clean Architecture", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/aspnet-core-solid-and-clean-architecture" },
        { name: "ASP.NET Core API and Blazor Development", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/aspnet-core-api-and-blazor-development" },
        { name: "ASP.NET Core MVC - Cross-Platform Development", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/aspnet-core-mvc-cross-platform-development" },
        { name: "Entity Framework Core - A Full Tour", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/entity-framework-core-full-tour" },
        { name: "Microsoft Azure for ASP.NET Core", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/microsoft-azure-aspnet-core" },
        { name: "Mobile Development with .NET MAUI", link: "https://app.stormwindstudios.com/stormwind-developer/microsoft-net-development/mobile-development-net-maui" },
      ],
      "PHP & Laravel": [
        { name: "PHP and MySQL for Beginners", link: "https://app.stormwindstudios.com/stormwind-developer/databases/php-and-mysql-beginners" },
        { name: "Object Oriented PHP", link: "https://app.stormwindstudios.com/stormwind-developer/php/object-oriented-php" },
        { name: "Make a Website with Laravel 6", link: "https://app.stormwindstudios.com/stormwind-developer/php/make-website-laravel-6" },
        { name: "Laravel 11 Beginners", link: "https://app.stormwindstudios.com/stormwind-developer/laravel/laravel-11-beginners" },
        { name: "Laravel Authentication", link: "https://app.stormwindstudios.com/stormwind-developer/laravel/laravel-authentication" },
        { name: "Laravel HTMX", link: "https://app.stormwindstudios.com/stormwind-developer/htmx/laravel-htmx" },
        { name: "Alpine HTMX Laravel", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/alpine-htmx-laravel" },
      ],
      "Python": [
        { name: "Learn Python", link: "https://app.stormwindstudios.com/stormwind-developer/python/learn-python" },
        { name: "Python Masterclass", link: "https://app.stormwindstudios.com/stormwind-developer/python/python-masterclass" },
      ],
      "JavaScript Fundamentals": [
        { name: "Learn Javascript", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/learn-javascript" },
        { name: "Modern JavaScript - From Novice to Ninja", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/modern-javascript-novice-ninja" },
        { name: "JavaScript Deep Dive", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/javascript-deep-dive" },
        { name: "Object Oriented JavaScript", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/object-oriented-javascript" },
        { name: "Introduction to ES6+", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/introduction-es6" },
        { name: "JavaScript Interview Challenges", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/javascript-interview-challenges" },
        { name: "25+ Projects with AJAX, JavaScript, and JSON", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/25-projects-ajax-javascript-and-json" },
        { name: "Create Dynamic and Interactive Web Content Using AJAX and JSON in JavaScript", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/create-dynamic-and-interactive-web-content-using-ajax-and-json" },
        { name: "AlpineJS Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/alpinejs-crash-course" },
        { name: "Build a Color Tool in Vanilla JavaScript", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/build-color-tool-vanilla-javascript" },
        { name: "Learn Binary Search in JavaScript", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/learn-binary-search-javascript" },
        { name: "Learn Merge Sort in JavaScript", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/learn-merge-sort-javascript" },
      ],
      "TypeScript": [
        { name: "Learn TypeScript", link: "https://app.stormwindstudios.com/stormwind-developer/typescript/learn-typescript" },
        { name: "TypeScript Masterclass", link: "https://app.stormwindstudios.com/stormwind-developer/typescript/typescript-masterclass" },
        { name: "Webpack and TypeScript Setup", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/webpack-typescript-setup" },
      ],
      "HTML & CSS": [
        { name: "Learn HTML and CSS", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/learn-html-and-css" },
        { name: "HTML and CSS Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/html-and-css-crash-course" },
        { name: "Learn Responsive Web Design", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/learn-responsive-web-design" },
        { name: "Learn CSS Animations", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/learn-css-animations" },
        { name: "Learn CSS Grid", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/learn-css-grid" },
        { name: "Learn Flexbox", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/learn-flexbox" },
        { name: "Learn CSS Variables", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/learn-css-variables" },
        { name: "CSS Cascade Layers Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/css-cascade-layers-crash-course" },
        { name: "CSS Challenges", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/css-challenges" },
        { name: "Mobile-First Responsive Website Build (with CSS Grid)", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/mobile-first-responsive-website-build-css-grid" },
      ],
      "CSS Frameworks": [
        { name: "Learn Bootstrap", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/learn-bootstrap" },
        { name: "Bootstrap 5 Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/html/bootstrap-5-crash-course" },
        { name: "Customizing Bootstrap 5", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/customizing-bootstrap-5" },
        { name: "Learn Bulma CSS", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/learn-bulma-css" },
        { name: "Bulma CSS Tutorial", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/bulma-css-tutorial" },
        { name: "Learn Tailwind CSS", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/learn-tailwind-css" },
        { name: "Tailwind CSS Tutorial", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/tailwind-css-tutorial" },
        { name: "Tailwind Just in Time", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/tailwind-just-time" },
        { name: "Learn SASS and Build Your Own CSS Library", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/learn-sass-and-build-your-own-css-library" },
        { name: "Learn Styled Components in React", link: "https://app.stormwindstudios.com/stormwind-developer/react/learn-styled-components-react" },
      ],
      "Other Frameworks": [
        { name: "Learn Gatsby", link: "https://app.stormwindstudios.com/stormwind-developer/react/learn-gatsby" },
        { name: "Learn Alpine JS", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/learn-alpine-js" },
        { name: "Learn Imba", link: "https://app.stormwindstudios.com/stormwind-developer/frontend-development/learn-imba" },
        { name: "Solid.js Tutorial", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/solidjs-tutorial" },
        { name: "Qwik Crash Course (First Look)", link: "https://app.stormwindstudios.com/stormwind-developer/frontend-development/qwik-crash-course-first-look" },
        { name: "HTMX for Beginners", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/htmx-beginners" },
        { name: "Build an SPA with HTMX", isComingSoon: true },
        { name: "Intro to Vite", link: "https://app.stormwindstudios.com/stormwind-developer/javascript/intro-vite" },
      ],
      "Firebase": [
        { name: "Learn Firebase", isComingSoon: true },
        { name: "Getting Started with Firebase 9", link: "https://app.stormwindstudios.com/stormwind-developer/firebase/getting-started-firebase-9" },
        { name: "Build Websites with React and Firebase", isComingSoon: true },
        { name: "Firestore Basics", link: "https://app.stormwindstudios.com/stormwind-developer/databases/firestore-basics" },
        { name: "Firebase Hosting Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/firebase/firebase-hosting-crash-course" },
      ],
      "AI Integration": [
        { name: "Build AI Apps with ChatGPT, DALL-E and GPT-4", link: "https://app.stormwindstudios.com/stormwind-developer/ai-coding/build-ai-apps-chatgpt-dall-e-and-gpt-4" },
        { name: "Intro to AI Engineering", isComingSoon: true },
        { name: "Intro to Dall-E and GPT Vision", isComingSoon: true },
        { name: "Learn AI Agents", isComingSoon: true },
        { name: "Learn Embeddings and Vector Databases", isComingSoon: true },
        { name: "Learn Mistral AI", link: "https://app.stormwindstudios.com/stormwind-developer/ai-coding/learn-mistral-ai" },
        { name: "Learn OpenAI's Assistants API", isComingSoon: true },
        { name: "The Official LangChain.js Course", isComingSoon: true },
        { name: "OpenAI Tutorial (the Basics)", link: "https://app.stormwindstudios.com/stormwind-developer/ai-coding/openai-tutorial-basics" },
        { name: "Prompt Engineering for Web Developers", link: "https://app.stormwindstudios.com/stormwind-developer/ai-coding/prompt-engineering-web-developers" },
        { name: "Learn to Code with AI", link: "https://app.stormwindstudios.com/stormwind-developer/ai-coding/learn-code-ai" },
        { name: "Claude Code Tutorial", link: "https://app.stormwindstudios.com/stormwind-developer/ai-coding/claude-code-tutorial" },
        { name: "Coding with AI Copilot", link: "https://app.stormwindstudios.com/stormwind-developer/ai-and-chatgpt/coding-ai-copilot" },
      ],
      "Design & UI": [
        { name: "Learn UI Design", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/learn-ui-design" },
        { name: "Learn UI Design Fundamentals", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/learn-ui-design-fundamentals" },
        { name: "From Figma to Code", link: "https://app.stormwindstudios.com/stormwind-developer/uiux/figma-code" },
        { name: "Build a Space Travel Website", link: "https://app.stormwindstudios.com/stormwind-developer/html-and-css/build-space-travel-website" },
        { name: "Build and Deploy Your Portfolio", link: "https://app.stormwindstudios.com/stormwind-developer/interviewing/build-and-deploy-your-portfolio" },
        { name: "Practical Math for Frontend Developers", link: "https://app.stormwindstudios.com/stormwind-developer/development-principles/practical-math-frontend-developers" },
      ],
      "Other Languages": [
        { name: "Learn Go (Golang)", link: "https://app.stormwindstudios.com/stormwind-developer/golang/learn-go-golang" },
      ],
      "Testing & Tools": [
        { name: "Introduction to Unit Testing", link: "https://app.stormwindstudios.com/stormwind-developer/development-principles/introduction-unit-testing" },
        { name: "Introduction to Clean Code", link: "https://app.stormwindstudios.com/stormwind-developer/development-principles/introduction-clean-code" },
        { name: "Complete Git Guide: Understand and Master Git and Github", link: "https://app.stormwindstudios.com/stormwind-developer/devops/complete-git-guide-understand-and-master-git-and-github" },
        { name: "Git & GitHub Masterclass", link: "https://app.stormwindstudios.com/stormwind-developer/cicd/git-github-masterclass" },
        { name: "Learn Markdown", isComingSoon: true },
        { name: "Learn Regular Expressions", link: "https://app.stormwindstudios.com/stormwind-developer/development-principles/learn-regular-expressions" },
        { name: "Learn Accessibility", isComingSoon: true },
        { name: "Frontend Interview Tips", link: "https://app.stormwindstudios.com/stormwind-developer/interviewing/frontend-interview-tips" },
      ],
      "Projects & Challenges": [
        { name: "Coding Challenges", link: "https://app.stormwindstudios.com/stormwind-developer/interviewing/coding-challenges" },
        { name: "The Frontend Developer Career Path", link: "https://app.stormwindstudios.com/stormwind-developer/frontend-development/frontend-developer-career-path" },
        { name: "Build and Deploy Your Portfolio", link: "https://app.stormwindstudios.com/stormwind-developer/interviewing/build-and-deploy-your-portfolio" },
        { name: "Deploying with Netlify", link: "https://app.stormwindstudios.com/stormwind-developer/netlify/deploying-netlify" },
        { name: "Docker Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/development-principles/docker-crash-course" },
        { name: "Supabase Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/databases/supabase-crash-course" },
        { name: "Strapi Crash Course", link: "https://app.stormwindstudios.com/stormwind-developer/strapi/strapi-crash-course" },
        { name: "Intro to SQL", link: "https://app.stormwindstudios.com/stormwind-developer/databases/intro-sql" },
        { name: "Foundations of Algorithms Masterclass", link: "https://app.stormwindstudios.com/stormwind-developer/development-principles/foundations-algorithms-masterclass" },
      ],
    },
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("All Courses");
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
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <img
              src={stormwindLogo}
              alt="StormWind Studios"
              className="h-8 sm:h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            />
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
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
                        const courseLink = false;
                        
                        const content = (
                          <>
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                            </div>
                            <div className="flex-1 flex items-start justify-between gap-2">
                              <p className={`text-xs sm:text-sm leading-snug ${courseLink ? 'text-primary hover:underline' : 'text-foreground'}`}>
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
                          </>
                        );

                        return courseLink ? (
                          <a
                            key={index}
                            href={courseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-2 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-primary/20 cursor-pointer"
                          >
                            {content}
                          </a>
                        ) : (
                          <div
                            key={index}
                            className="group flex items-start gap-2 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-primary/20"
                          >
                            {content}
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
