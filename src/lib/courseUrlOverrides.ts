/**
 * Manual URL overrides for courses where the auto-generated slug doesn't match
 * the actual URL on stormwindstudios.com
 * 
 * This file contains explicit mappings for courses that have:
 * - Version numbers in URL (e.g., -v15/)
 * - Non-standard slug formats
 * - Special characters that don't follow normal rules
 * - Abbreviated or different URL slugs
 * 
 * Format: "Exact Course Name": "https://stormwindstudios.com/courses/slug/"
 */
export const courseUrlOverrides: Record<string, string> = {
  // CompTIA A+ courses with version numbers
  "CompTIA A+ Core 1 (220-1201)": "https://stormwindstudios.com/courses/comptia-a-core-1-220-1201-v15/",
  "CompTIA A+ Core 2 (220-1202)": "https://stormwindstudios.com/courses/comptia-a-core-2-220-1202-v15/",
  
  // CompTIA Security+ courses
  "CompTIA Security+ (SY0-701)": "https://stormwindstudios.com/courses/comptia-security-sy0-701/",
  
  // CompTIA Network+ courses
  "CompTIA Network+ (N10-009)": "https://stormwindstudios.com/courses/comptia-network-n10-009/",
  
  // CompTIA CySA+ courses
  "CompTIA CySA+ (CS0-003)": "https://stormwindstudios.com/courses/comptia-cysa-cs0-003/",
  
  // CompTIA CASP+ courses
  "CompTIA CASP+ (CAS-004)": "https://stormwindstudios.com/courses/comptia-casp-cas-004/",
  
  // CompTIA PenTest+ courses
  "CompTIA PenTest+ (PT0-002)": "https://stormwindstudios.com/courses/comptia-pentest-pt0-002/",
  "CompTIA PenTest+ (PT0-003)": "https://stormwindstudios.com/courses/comptia-pentest-pt0-003/",
  
  // CompTIA Linux+ courses
  "CompTIA Linux+ (XK0-005)": "https://stormwindstudios.com/courses/comptia-linux-xk0-005/",
  
  // CompTIA Server+ courses
  "CompTIA Server+ (SK0-005)": "https://stormwindstudios.com/courses/comptia-server-sk0-005/",
  
  // CompTIA Cloud+ courses
  "CompTIA Cloud+ (CV0-004)": "https://stormwindstudios.com/courses/comptia-cloud-cv0-004/",
  
  // CompTIA Data+ courses
  "CompTIA Data+ (DA0-001)": "https://stormwindstudios.com/courses/comptia-data-da0-001/",
  
  // CompTIA DataSys+ courses
  "CompTIA DataSys+ (DS0-001)": "https://stormwindstudios.com/courses/comptia-datasys-ds0-001/",
  
  // CompTIA Project+ courses
  "CompTIA Project+ (PK0-005)": "https://stormwindstudios.com/courses/comptia-project-pk0-005/",
  
  // CompTIA ITF+ courses
  "CompTIA ITF+ (FC0-U61)": "https://stormwindstudios.com/courses/comptia-itf-fc0-u61/",
  
  // CompTIA Tech+ courses
  "CompTIA Tech+ (FC0-U71)": "https://stormwindstudios.com/courses/comptia-tech-fc0-u71/",
  
  // ITIL courses
  "ITIL® 4 Foundation": "https://stormwindstudios.com/courses/itil-4-foundation/",
  "ITIL® 4 Specialist: Create, Deliver, and Support": "https://stormwindstudios.com/courses/itil-4-specialist-create-deliver-and-support/",
  "ITIL® 4 Specialist: Drive Stakeholder Value": "https://stormwindstudios.com/courses/itil-4-specialist-drive-stakeholder-value/",
  "ITIL® 4 Specialist: High Velocity IT": "https://stormwindstudios.com/courses/itil-4-specialist-high-velocity-it/",
  "ITIL® 4 Strategist: Direct, Plan, and Improve": "https://stormwindstudios.com/courses/itil-4-strategist-direct-plan-and-improve/",
  "ITIL® 4 Leader: Digital & IT Strategy": "https://stormwindstudios.com/courses/itil-4-leader-digital-and-it-strategy/",
  
  // CISSP courses
  "CISSP® (Certified Information Systems Security Professional)": "https://stormwindstudios.com/courses/cissp-certified-information-systems-security-professional/",
  
  // PMP courses
  "PMP® Exam Prep": "https://stormwindstudios.com/courses/pmp-exam-prep/",
  "PMP® Exam Prep Boot Camp (5-Day Live)": "https://stormwindstudios.com/courses/pmp-exam-prep-boot-camp-5-day-live/",
  
  // CAPM courses
  "CAPM® Exam Prep": "https://stormwindstudios.com/courses/capm-exam-prep/",
  
  // PMI-ACP courses
  "PMI-ACP® Exam Prep": "https://stormwindstudios.com/courses/pmi-acp-exam-prep/",
  
  // PMI-RMP courses
  "PMI-RMP® Exam Prep": "https://stormwindstudios.com/courses/pmi-rmp-exam-prep/",
  
  // Cisco courses
  "Cisco CCNA": "https://stormwindstudios.com/courses/cisco-ccna/",
  "Cisco CCNP ENCOR (350-401)": "https://stormwindstudios.com/courses/cisco-ccnp-encor-350-401/",
  "Cisco CCNP ENARSI (300-410)": "https://stormwindstudios.com/courses/cisco-ccnp-enarsi-300-410/",
  
  // Microsoft 365 courses with special formatting
  "Microsoft 365 Copilot: Excel": "https://stormwindstudios.com/courses/microsoft-365-copilot-excel/",
  "Microsoft 365 Copilot: Word": "https://stormwindstudios.com/courses/microsoft-365-copilot-word/",
  "Microsoft 365 Copilot: Outlook": "https://stormwindstudios.com/courses/microsoft-365-copilot-outlook/",
  "Microsoft 365 Copilot: PowerPoint": "https://stormwindstudios.com/courses/microsoft-365-copilot-powerpoint/",
  "Microsoft 365 Copilot: Teams": "https://stormwindstudios.com/courses/microsoft-365-copilot-teams/",
  "Microsoft 365 Copilot: OneNote": "https://stormwindstudios.com/courses/microsoft-365-copilot-onenote/",
  
  // Azure courses
  "AZ-104: Microsoft Azure Administrator": "https://stormwindstudios.com/courses/az-104-microsoft-azure-administrator/",
  "AZ-204: Developing Solutions for Microsoft Azure": "https://stormwindstudios.com/courses/az-204-developing-solutions-for-microsoft-azure/",
  "AZ-305: Designing Microsoft Azure Infrastructure Solutions": "https://stormwindstudios.com/courses/az-305-designing-microsoft-azure-infrastructure-solutions/",
  "AZ-400: Designing and Implementing Microsoft DevOps Solutions": "https://stormwindstudios.com/courses/az-400-designing-and-implementing-microsoft-devops-solutions/",
  "AZ-500: Microsoft Azure Security Technologies": "https://stormwindstudios.com/courses/az-500-microsoft-azure-security-technologies/",
  "AZ-700: Designing and Implementing Microsoft Azure Networking Solutions": "https://stormwindstudios.com/courses/az-700-designing-and-implementing-microsoft-azure-networking-solutions/",
  "AZ-800: Administering Windows Server Hybrid Core Infrastructure": "https://stormwindstudios.com/courses/az-800-administering-windows-server-hybrid-core-infrastructure/",
  "AZ-801: Configuring Windows Server Hybrid Advanced Services": "https://stormwindstudios.com/courses/az-801-configuring-windows-server-hybrid-advanced-services/",
  "AZ-900: Microsoft Azure Fundamentals": "https://stormwindstudios.com/courses/az-900-microsoft-azure-fundamentals/",
  
  // AI courses
  "AI-102: Designing and Implementing a Microsoft Azure AI Solution": "https://stormwindstudios.com/courses/ai-102-designing-and-implementing-a-microsoft-azure-ai-solution/",
  "AI-900: Microsoft Azure AI Fundamentals": "https://stormwindstudios.com/courses/ai-900-microsoft-azure-ai-fundamentals/",
  
  // DP (Data Platform) courses
  "DP-100: Designing and Implementing a Data Science Solution on Azure": "https://stormwindstudios.com/courses/dp-100-designing-and-implementing-a-data-science-solution-on-azure/",
  "DP-203: Data Engineering on Microsoft Azure": "https://stormwindstudios.com/courses/dp-203-data-engineering-on-microsoft-azure/",
  "DP-300: Administering Microsoft Azure SQL Solutions": "https://stormwindstudios.com/courses/dp-300-administering-microsoft-azure-sql-solutions/",
  "DP-420: Designing and Implementing Cloud-Native Applications Using Microsoft Azure Cosmos DB": "https://stormwindstudios.com/courses/dp-420-designing-and-implementing-cloud-native-applications-using-microsoft-azure-cosmos-db/",
  "DP-600: Implementing Analytics Solutions Using Microsoft Fabric": "https://stormwindstudios.com/courses/dp-600-implementing-analytics-solutions-using-microsoft-fabric/",
  "DP-900: Microsoft Azure Data Fundamentals": "https://stormwindstudios.com/courses/dp-900-microsoft-azure-data-fundamentals/",
  
  // SC (Security, Compliance) courses
  "SC-100: Microsoft Cybersecurity Architect": "https://stormwindstudios.com/courses/sc-100-microsoft-cybersecurity-architect/",
  "SC-200: Microsoft Security Operations Analyst": "https://stormwindstudios.com/courses/sc-200-microsoft-security-operations-analyst/",
  "SC-300: Microsoft Identity and Access Administrator": "https://stormwindstudios.com/courses/sc-300-microsoft-identity-and-access-administrator/",
  "SC-400: Administering Information Protection and Compliance in Microsoft 365": "https://stormwindstudios.com/courses/sc-400-administering-information-protection-and-compliance-in-microsoft-365/",
  "SC-900: Microsoft Security, Compliance, and Identity Fundamentals": "https://stormwindstudios.com/courses/sc-900-microsoft-security-compliance-and-identity-fundamentals/",
  
  // MS (Microsoft 365) courses
  "MS-102: Microsoft 365 Administrator": "https://stormwindstudios.com/courses/ms-102-microsoft-365-administrator/",
  "MS-700: Managing Microsoft Teams": "https://stormwindstudios.com/courses/ms-700-managing-microsoft-teams/",
  "MS-721: Collaboration Communications Systems Engineer": "https://stormwindstudios.com/courses/ms-721-collaboration-communications-systems-engineer/",
  "MS-900: Microsoft 365 Fundamentals": "https://stormwindstudios.com/courses/ms-900-microsoft-365-fundamentals/",
  
  // MD (Modern Desktop) courses
  "MD-102: Endpoint Administrator": "https://stormwindstudios.com/courses/md-102-endpoint-administrator/",
  
  // PL (Power Platform) courses
  "PL-100: Microsoft Power Platform App Maker": "https://stormwindstudios.com/courses/pl-100-microsoft-power-platform-app-maker/",
  "PL-200: Microsoft Power Platform Functional Consultant": "https://stormwindstudios.com/courses/pl-200-microsoft-power-platform-functional-consultant/",
  "PL-300: Microsoft Power BI Data Analyst": "https://stormwindstudios.com/courses/pl-300-microsoft-power-bi-data-analyst/",
  "PL-400: Microsoft Power Platform Developer": "https://stormwindstudios.com/courses/pl-400-microsoft-power-platform-developer/",
  "PL-500: Microsoft Power Automate RPA Developer": "https://stormwindstudios.com/courses/pl-500-microsoft-power-automate-rpa-developer/",
  "PL-600: Microsoft Power Platform Solution Architect": "https://stormwindstudios.com/courses/pl-600-microsoft-power-platform-solution-architect/",
  "PL-900: Microsoft Power Platform Fundamentals": "https://stormwindstudios.com/courses/pl-900-microsoft-power-platform-fundamentals/",
  
  // MB (Dynamics 365) courses
  "MB-210: Microsoft Dynamics 365 Sales Functional Consultant": "https://stormwindstudios.com/courses/mb-210-microsoft-dynamics-365-sales-functional-consultant/",
  "MB-220: Microsoft Dynamics 365 Customer Insights (Journeys)": "https://stormwindstudios.com/courses/mb-220-microsoft-dynamics-365-customer-insights-journeys/",
  "MB-230: Microsoft Dynamics 365 Customer Service Functional Consultant": "https://stormwindstudios.com/courses/mb-230-microsoft-dynamics-365-customer-service-functional-consultant/",
  "MB-240: Microsoft Dynamics 365 Field Service Functional Consultant": "https://stormwindstudios.com/courses/mb-240-microsoft-dynamics-365-field-service-functional-consultant/",
  "MB-260: Microsoft Customer Data Platform Specialist": "https://stormwindstudios.com/courses/mb-260-microsoft-customer-data-platform-specialist/",
  "MB-300: Microsoft Dynamics 365 Core Finance and Operations": "https://stormwindstudios.com/courses/mb-300-microsoft-dynamics-365-core-finance-and-operations/",
  "MB-310: Microsoft Dynamics 365 Finance Functional Consultant": "https://stormwindstudios.com/courses/mb-310-microsoft-dynamics-365-finance-functional-consultant/",
  "MB-330: Microsoft Dynamics 365 Supply Chain Management Functional Consultant": "https://stormwindstudios.com/courses/mb-330-microsoft-dynamics-365-supply-chain-management-functional-consultant/",
  "MB-335: Microsoft Dynamics 365 Supply Chain Management Functional Consultant Expert": "https://stormwindstudios.com/courses/mb-335-microsoft-dynamics-365-supply-chain-management-functional-consultant-expert/",
  "MB-500: Microsoft Dynamics 365: Finance and Operations Apps Developer": "https://stormwindstudios.com/courses/mb-500-microsoft-dynamics-365-finance-and-operations-apps-developer/",
  "MB-700: Microsoft Dynamics 365: Finance and Operations Apps Solution Architect": "https://stormwindstudios.com/courses/mb-700-microsoft-dynamics-365-finance-and-operations-apps-solution-architect/",
  "MB-800: Microsoft Dynamics 365 Business Central Functional Consultant": "https://stormwindstudios.com/courses/mb-800-microsoft-dynamics-365-business-central-functional-consultant/",
  "MB-910: Microsoft Dynamics 365 Fundamentals (CRM)": "https://stormwindstudios.com/courses/mb-910-microsoft-dynamics-365-fundamentals-crm/",
  "MB-920: Microsoft Dynamics 365 Fundamentals (ERP)": "https://stormwindstudios.com/courses/mb-920-microsoft-dynamics-365-fundamentals-erp/",
  
  // AWS courses
  "AWS Certified Cloud Practitioner": "https://stormwindstudios.com/courses/aws-certified-cloud-practitioner/",
  "AWS Certified Solutions Architect – Associate": "https://stormwindstudios.com/courses/aws-certified-solutions-architect-associate/",
  "AWS Certified Solutions Architect – Professional": "https://stormwindstudios.com/courses/aws-certified-solutions-architect-professional/",
  "AWS Certified Developer – Associate": "https://stormwindstudios.com/courses/aws-certified-developer-associate/",
  "AWS Certified SysOps Administrator – Associate": "https://stormwindstudios.com/courses/aws-certified-sysops-administrator-associate/",
  "AWS Certified DevOps Engineer – Professional": "https://stormwindstudios.com/courses/aws-certified-devops-engineer-professional/",
  "AWS Certified Security – Specialty": "https://stormwindstudios.com/courses/aws-certified-security-specialty/",
  "AWS Certified Database – Specialty": "https://stormwindstudios.com/courses/aws-certified-database-specialty/",
  "AWS Certified Data Analytics – Specialty": "https://stormwindstudios.com/courses/aws-certified-data-analytics-specialty/",
  "AWS Certified Machine Learning – Specialty": "https://stormwindstudios.com/courses/aws-certified-machine-learning-specialty/",
  "AWS Certified Advanced Networking – Specialty": "https://stormwindstudios.com/courses/aws-certified-advanced-networking-specialty/",
  
  // Google Cloud courses
  "Google Cloud Certified Cloud Digital Leader": "https://stormwindstudios.com/courses/google-cloud-certified-cloud-digital-leader/",
  "Google Cloud Certified Associate Cloud Engineer": "https://stormwindstudios.com/courses/google-cloud-certified-associate-cloud-engineer/",
  "Google Cloud Certified Professional Cloud Architect": "https://stormwindstudios.com/courses/google-cloud-certified-professional-cloud-architect/",
  "Google Cloud Certified Professional Data Engineer": "https://stormwindstudios.com/courses/google-cloud-certified-professional-data-engineer/",
  
  // Kubernetes
  "Certified Kubernetes Administrator (CKA)": "https://stormwindstudios.com/courses/certified-kubernetes-administrator-cka/",
  "Certified Kubernetes Application Developer (CKAD)": "https://stormwindstudios.com/courses/certified-kubernetes-application-developer-ckad/",
  
  // Docker
  "Docker Certified Associate": "https://stormwindstudios.com/courses/docker-certified-associate/",
  
  // HashiCorp
  "HashiCorp Certified: Terraform Associate": "https://stormwindstudios.com/courses/hashicorp-certified-terraform-associate/",
  
  // ServiceNow
  "ServiceNow Certified System Administrator": "https://stormwindstudios.com/courses/servicenow-certified-system-administrator/",
  
  // Salesforce
  "Salesforce Certified Administrator": "https://stormwindstudios.com/courses/salesforce-certified-administrator/",
  "Salesforce Certified Platform App Builder": "https://stormwindstudios.com/courses/salesforce-certified-platform-app-builder/",
  
  // EC-Council
  "Certified Ethical Hacker (CEH v12)": "https://stormwindstudios.com/courses/certified-ethical-hacker-ceh-v12/",
  "Certified Ethical Hacker (CEH v13)": "https://stormwindstudios.com/courses/certified-ethical-hacker-ceh-v13/",
  
  // ISC2
  "(ISC)² CCSP (Certified Cloud Security Professional)": "https://stormwindstudios.com/courses/isc2-ccsp-certified-cloud-security-professional/",
  "(ISC)² SSCP (Systems Security Certified Practitioner)": "https://stormwindstudios.com/courses/isc2-sscp-systems-security-certified-practitioner/",
  
  // Excel courses with special formatting
  "Excel 365: Basic": "https://stormwindstudios.com/courses/excel-365-basic/",
  "Excel 365: Intermediate": "https://stormwindstudios.com/courses/excel-365-intermediate/",
  "Excel 365: Advanced": "https://stormwindstudios.com/courses/excel-365-advanced/",
  "Excel 2021: Basic": "https://stormwindstudios.com/courses/excel-2021-basic/",
  "Excel 2021: Intermediate": "https://stormwindstudios.com/courses/excel-2021-intermediate/",
  "Excel 2021: Advanced": "https://stormwindstudios.com/courses/excel-2021-advanced/",
  "Excel 2019: Basic": "https://stormwindstudios.com/courses/excel-2019-basic/",
  "Excel 2019: Intermediate": "https://stormwindstudios.com/courses/excel-2019-intermediate/",
  "Excel 2019: Advanced": "https://stormwindstudios.com/courses/excel-2019-advanced/",
  
  // Word courses
  "Word 365: Basic": "https://stormwindstudios.com/courses/word-365-basic/",
  "Word 365: Intermediate": "https://stormwindstudios.com/courses/word-365-intermediate/",
  "Word 365: Advanced": "https://stormwindstudios.com/courses/word-365-advanced/",
  "Word 2021: Basic": "https://stormwindstudios.com/courses/word-2021-basic/",
  "Word 2021: Intermediate": "https://stormwindstudios.com/courses/word-2021-intermediate/",
  "Word 2021: Advanced": "https://stormwindstudios.com/courses/word-2021-advanced/",
  
  // PowerPoint courses
  "PowerPoint 365: Basic": "https://stormwindstudios.com/courses/powerpoint-365-basic/",
  "PowerPoint 365: Intermediate": "https://stormwindstudios.com/courses/powerpoint-365-intermediate/",
  "PowerPoint 365: Advanced": "https://stormwindstudios.com/courses/powerpoint-365-advanced/",
  
  // Outlook courses
  "Outlook 365: Basic": "https://stormwindstudios.com/courses/outlook-365-basic/",
  "Outlook 365: Intermediate": "https://stormwindstudios.com/courses/outlook-365-intermediate/",
  "Outlook 365: Advanced": "https://stormwindstudios.com/courses/outlook-365-advanced/",
  
  // Access courses
  "Access 365: Basic": "https://stormwindstudios.com/courses/access-365-basic/",
  "Access 365: Intermediate": "https://stormwindstudios.com/courses/access-365-intermediate/",
  "Access 365: Advanced": "https://stormwindstudios.com/courses/access-365-advanced/",
  
  // Teams courses
  "Microsoft Teams for End Users": "https://stormwindstudios.com/courses/microsoft-teams-for-end-users/",
  
  // SharePoint courses
  "SharePoint Online for End Users": "https://stormwindstudios.com/courses/sharepoint-online-for-end-users/",
  
  // OneDrive courses
  "OneDrive for Business": "https://stormwindstudios.com/courses/onedrive-for-business/",
  
  // Power Platform courses for end users
  "Power BI for End Users": "https://stormwindstudios.com/courses/power-bi-for-end-users/",
  "Power Apps for End Users": "https://stormwindstudios.com/courses/power-apps-for-end-users/",
  "Power Automate for End Users": "https://stormwindstudios.com/courses/power-automate-for-end-users/",
  
  // ChatGPT courses
  "ChatGPT for IT Professionals": "https://stormwindstudios.com/courses/chatgpt-for-it-professionals/",
  "ChatGPT Enterprise Adoption Strategies": "https://stormwindstudios.com/courses/chatgpt-enterprise-adoption-strategies/",
  "ChatGPT: Maximizing Efficiency": "https://stormwindstudios.com/courses/chatgpt-maximizing-efficiency/",
  "ChatGPT: Quickstart": "https://stormwindstudios.com/courses/chatgpt-quickstart/",
  "ChatGPT: Tools & Features": "https://stormwindstudios.com/courses/chatgpt-tools-and-features/",
  "ChatGPT: Prompting Basics": "https://stormwindstudios.com/courses/chatgpt-prompting-basics/",
  "ChatGPT: Under the Hood": "https://stormwindstudios.com/courses/chatgpt-under-the-hood/",
  
  // Security Awareness courses
  "Security Awareness: Phishing": "https://stormwindstudios.com/courses/security-awareness-phishing/",
  "Security Awareness: Social Engineering": "https://stormwindstudios.com/courses/security-awareness-social-engineering/",
  "Security Awareness: Password Security": "https://stormwindstudios.com/courses/security-awareness-password-security/",
  "Security Awareness: Physical Security": "https://stormwindstudios.com/courses/security-awareness-physical-security/",
  "Security Awareness: Mobile Device Security": "https://stormwindstudios.com/courses/security-awareness-mobile-device-security/",
  "Security Awareness: Insider Threats": "https://stormwindstudios.com/courses/security-awareness-insider-threats/",
  "Security Awareness: Data Protection": "https://stormwindstudios.com/courses/security-awareness-data-protection/",
  
  // Windows Server courses
  "Windows Server 2022 Administration": "https://stormwindstudios.com/courses/windows-server-2022-administration/",
  "Windows Server 2019 Administration": "https://stormwindstudios.com/courses/windows-server-2019-administration/",
  
  // Active Directory courses
  "Active Directory Administration": "https://stormwindstudios.com/courses/active-directory-administration/",
  
  // PowerShell courses
  "PowerShell Fundamentals": "https://stormwindstudios.com/courses/powershell-fundamentals/",
  "PowerShell Advanced Scripting": "https://stormwindstudios.com/courses/powershell-advanced-scripting/",
  
  // Python courses
  "Python Fundamentals": "https://stormwindstudios.com/courses/python-fundamentals/",
  "Python for Data Science": "https://stormwindstudios.com/courses/python-for-data-science/",
  
  // Agile courses
  "Agile Fundamentals": "https://stormwindstudios.com/courses/agile-fundamentals/",
  "Scrum Master Certification Prep": "https://stormwindstudios.com/courses/scrum-master-certification-prep/",
  
  // Six Sigma courses
  "Lean Six Sigma Green Belt": "https://stormwindstudios.com/courses/lean-six-sigma-green-belt/",
  "Lean Six Sigma Yellow Belt": "https://stormwindstudios.com/courses/lean-six-sigma-yellow-belt/",
  "Lean Six Sigma Black Belt": "https://stormwindstudios.com/courses/lean-six-sigma-black-belt/",
};
