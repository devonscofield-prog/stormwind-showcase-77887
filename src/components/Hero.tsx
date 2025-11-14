import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

interface HeroProps {
  onTabChange: (tab: string) => void;
}

const Hero = ({ onTabChange }: HeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-hero mb-6 leading-tight pb-2">
            Empowering the Future of Learning.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Training solutions that elevate your teams across IT, cybersecurity, and enterprise productivity.
          </p>
        </div>
      </div>
      
      {/* Gradient Border at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
    </section>
  );
};

export default Hero;
