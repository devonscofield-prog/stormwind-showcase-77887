import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Award, BookOpen, Hammer } from "lucide-react";
import logoImage from "@/assets/stormwind-logo.png";
import willPanek from "@/assets/will-panek.png";
import ashleyHunt from "@/assets/ashley-hunt.png";
import raymondLacoste from "@/assets/raymond-lacoste.png";
const Mentoring = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    technologies = [],
    features = []
  } = location.state || {};
  useEffect(() => {
    document.title = "Mentoring";
  }, []);
  const instructors = [{
    name: "Will Panek",
    title: "Microsoft MVP & Author",
    icon: Award,
    image: willPanek,
    description: "A worldwide recognized Microsoft instructor and author. Will Panek is a 5-time Microsoft MVP and has published over 40 titles on Microsoft technologies.",
    expertise: "Will is a passionate and authoritative instructor, and makes sure that his students can implement Microsoft technologies and get themselves certified along the way.",
    personal: "Outside the class and authorship, you'd be likely to find Will at the forge smithing his latest creation.",
    specialization: "Microsoft Technologies",
    bgColor: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    url: "https://app.stormwindstudios.com/instructor/will-panek"
  }, {
    name: "Ashley Hunt",
    title: "PMP Expert & Author",
    icon: BookOpen,
    image: ashleyHunt,
    description: "A world-recognized project management instructor, with authorship of books on PMP, ACP and Project+.",
    expertise: "Ashley has helped over 10,000 individuals get their PMP certification.",
    specialization: "Project Management",
    bgColor: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    url: "https://app.stormwindstudios.com/instructor/ashley-hunt"
  }, {
    name: "Raymond Lacoste",
    title: "Cisco Sirius Instructor Award Winner",
    icon: Award,
    image: raymondLacoste,
    description: "A highly recognized instructor, and holds the Cisco Sirius Instructor Award. Raymond has authored the Cisco Press publications on the Cisco ENARSI and Cisco TSHOOT exams.",
    expertise: "Raymond's engaging instruction style makes even the most obscenely complicated or obtuse concepts relatable and understandable.",
    personal: "Outside of class, Raymond enjoys dominating both on the golf course and the basketball court.",
    specialization: "Cisco Networking",
    bgColor: "from-teal-50 to-teal-100",
    borderColor: "border-teal-200",
    url: "https://app.stormwindstudios.com/instructor/raymond-lacoste"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logoImage} alt="StormWind Studios Logo" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/')} />
          <div className="flex gap-2">
            <Button onClick={() => navigate("/")} variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary tracking-tight">
              1:1 Mentoring with Industry Experts
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Learn directly from world-class instructors with decades of experience and industry recognition
            </p>
          </div>

          {/* Instructors Section */}
          <div className="space-y-12">
            {instructors.map((instructor, index) => <div key={index} className={`animate-fade-in rounded-2xl bg-gradient-to-br ${instructor.bgColor} border-2 ${instructor.borderColor} overflow-hidden shadow-lg`}>
                <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                  {/* Instructor Image/Icon */}
                  <div className="flex flex-col items-center justify-center">
                    {instructor.image ? <img src={instructor.image} alt={instructor.name} className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl" /> : <div className="w-48 h-48 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center">
                        <instructor.icon className="w-24 h-24 text-primary" />
                      </div>}
                    <div className="mt-6 text-center">
                      <div className="inline-block px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                        <span className="text-sm font-semibold text-slate-700">{instructor.specialization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Instructor Details */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h2 className="text-4xl font-bold text-slate-900 mb-2">{instructor.name}</h2>
                      <p className="text-lg text-slate-600 font-medium">{instructor.title}</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-slate-700 leading-relaxed">
                        {instructor.description}
                      </p>
                      
                      <p className="text-slate-700 leading-relaxed font-medium">
                        {instructor.expertise}
                      </p>

                      {instructor.personal && <p className="text-slate-600 leading-relaxed italic">
                          {instructor.personal}
                        </p>}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            
          </div>
        </div>
      </div>
    </div>;
};
export default Mentoring;