

## Add Data Science Pro to Topics and Improve Descriptions

### Changes to `src/components/Navigation.tsx`

**1. Add Data Science Pro** to the `topicsMenuItems` array with the `Database` icon from lucide-react (or similar data-oriented icon like `BarChart2`).

**2. Update all topic descriptions** to be more specific and informative:

| Topic | Current Description | New Description |
|-------|-------------------|-----------------|
| Microsoft | Microsoft certifications | Azure, M365, Windows Server |
| Cloud | AWS, Azure & GCP | AWS, Azure, GCP certifications |
| Networking | Network fundamentals | Network+, CCNA, CCNP |
| DevOps | CI/CD & automation | Docker, Kubernetes, Terraform |
| Full Stack Dev | Frontend & backend | React, Node.js, Python, APIs |
| Cybersecurity | Security certifications | Sec+, CISM, CISSP |
| AI & ML | Artificial intelligence | ChatGPT, Copilot, ML fundamentals |
| Security Awareness | End-user security | Phishing, social engineering |
| Help Desk | IT support training | A+, ITIL, troubleshooting |
| Desktop Apps | Productivity software | Excel, Word, Outlook, Teams |
| Business Skills | Soft skills training | Leadership, communication |
| Project Management | PMP & Agile | PMP, CAPM, Scrum, Agile |
| StormAI Phishing | Phishing simulations | AI-driven phishing tests |
| Enterprise End User | Employee training | Onboarding, productivity |
| HR Compliance | Compliance training | Workplace safety, ethics |
| **Data Science Pro** (new) | -- | SQL Server, Power BI, Azure Data |

### Technical Details

- Import a data-oriented icon (e.g., `Database` from lucide-react) for the new Data Science Pro entry
- Insert Data Science Pro after "AI & ML" in the array to maintain logical grouping (core tech together)
- Route: `/data-science-pro` (existing page)
- Only one file modified: `src/components/Navigation.tsx`

