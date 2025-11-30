import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Hammer } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Skeleton } from "@/components/ui/skeleton";
import willPanek from "@/assets/will-panek.png";
import ashleyHunt from "@/assets/ashley-hunt.png";
import raymondLacoste from "@/assets/raymond-lacoste.png";

const Mentoring = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Mentoring";
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const instructors = [
    {
      name: "Will Panek",
      title: "Microsoft MVP & Author",
      icon: Award,
      image: willPanek,
      description: "A worldwide recognized Microsoft instructor and author. Will Panek is a 5-time Microsoft MVP and has published over 40 titles on Microsoft technologies.",
      expertise: "Will is a passionate and authoritative instructor, and makes sure that his students can implement Microsoft technologies and get themselves certified along the way.",
      personal: "Outside the class and authorship, you'd be likely to find Will at the forge smithing his latest creation.",
      specialization: "Microsoft Technologies",
    },
    {
      name: "Ashley Hunt",
      title: "PMP Expert & Author",
      icon: BookOpen,
      image: ashleyHunt,
      description: "A world-recognized project management instructor, with authorship of books on PMP, ACP and Project+.",
      expertise: "Ashley has helped over 10,000 individuals get their PMP certification.",
      specialization: "Project Management",
    },
    {
      name: "Raymond Lacoste",
      title: "Cisco Sirius Instructor Award Winner",
      icon: Award,
      image: raymondLacoste,
      description: "A highly recognized instructor, and holds the Cisco Sirius Instructor Award. Raymond has authored the Cisco Press publications on the Cisco ENARSI and Cisco TSHOOT exams.",
      expertise: "Raymond's engaging instruction style makes even the most obscenely complicated or obtuse concepts relatable and understandable.",
      personal: "Outside of class, Raymond enjoys dominating both on the golf course and the basketball court.",
      specialization: "Cisco Networking",
    },
  ];

  return (
    <PageLayout
      title="1:1 Mentoring with Industry Experts"
      description="Learn directly from world-class instructors with decades of experience and industry recognition"
      breadcrumbs={[{ label: "1:1 Mentoring" }]}
      heroClassName="mb-16"
    >
      {/* Instructors Section */}
      {isLoading ? (
        <div className="space-y-12">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="rounded-2xl bg-card border overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <Skeleton className="w-48 h-48 rounded-full" />
                  <Skeleton className="h-8 w-32 rounded-full" />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <Skeleton className="h-10 w-48" />
                  <Skeleton className="h-6 w-64" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-12">
          {instructors.map((instructor, index) => (
            <div key={index} className="animate-fade-in rounded-2xl bg-card border overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                <div className="flex flex-col items-center justify-center">
                  {instructor.image ? (
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-background shadow-xl"
                    />
                  ) : (
                    <div className="w-48 h-48 rounded-full bg-background border-4 border-background shadow-xl flex items-center justify-center">
                      <instructor.icon className="w-24 h-24 text-primary" />
                    </div>
                  )}
                  <div className="mt-6 text-center">
                    <div className="inline-block px-4 py-2 bg-muted rounded-full border shadow-sm">
                      <span className="text-sm font-semibold text-foreground">{instructor.specialization}</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-2">{instructor.name}</h2>
                    <p className="text-lg text-muted-foreground font-medium">{instructor.title}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-foreground leading-relaxed">{instructor.description}</p>
                    <p className="text-foreground leading-relaxed font-medium">{instructor.expertise}</p>
                    {instructor.personal && (
                      <p className="text-muted-foreground leading-relaxed italic">{instructor.personal}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center animate-fade-in">
        <div className="bg-card rounded-2xl border p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Get Personal Guidance from Industry Leaders
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unlike traditional eLearning, you're never on your own. Get direct access to instructors for personalized help whenever you need it.
          </p>
          <Button size="lg" className="px-8 py-6 text-lg" asChild>
            <a href="https://stormwindstudios.com/instructors" target="_blank" rel="noopener noreferrer">
              Meet All Our Instructors
            </a>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Mentoring;
