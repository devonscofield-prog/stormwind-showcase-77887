import { Link } from "react-router-dom";

const topicLinks = [
  { label: "Microsoft", to: "/microsoft" },
  { label: "Cloud", to: "/cloud" },
  { label: "Cybersecurity", to: "/cybersecurity" },
  { label: "Networking", to: "/networking" },
  { label: "DevOps", to: "/devops" },
  { label: "AI & ML", to: "/ai-pro" },
];

const platformLinks = [
  { label: "Learning Paths", to: "/learning-paths" },
  { label: "Mentoring", to: "/mentoring" },
  { label: "Certification Prep", to: "/certification-prep" },
  { label: "Skills Assessments", to: "/skills-assessments" },
  { label: "Live Instructor-Led", to: "/live-instructor-led" },
  { label: "Cyber Ranges", to: "/ranges" },
];

const resourceLinks = [
  { label: "Courses", to: "/courses" },
  { label: "Training Samples", to: "/training-samples" },
  { label: "Contact Us", to: "/contact" },
];

const linkClass = "text-muted-foreground hover:text-foreground transition-colors text-sm";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">StormWind Studios</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enterprise IT training that transforms careers and organizations.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Topics</h3>
            <ul className="space-y-2">
              {topicLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-muted-foreground text-sm text-center">
            &copy; 2026 StormWind Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
