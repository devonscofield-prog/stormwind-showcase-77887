import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";
import { Sparkles, Zap, Star } from "lucide-react";

interface HeroProps {
  onTabChange: (tab: string) => void;
}

const Hero = ({ onTabChange }: HeroProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Empowering the Future of Learning.";

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
        
        // Random delay between 60-150ms for natural typing feel
        const delay = Math.random() * 90 + 60;
        timeoutId = setTimeout(typeNextCharacter, delay);
      }
    };

    // Start typing after a brief delay
    timeoutId = setTimeout(typeNextCharacter, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Image with Zoom and Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(${scrollY * 0.5}px) scale(${isVisible ? 1.05 : 1.15})`,
          willChange: 'transform',
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/60" />
        
        {/* Animated Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles className="w-4 h-4 text-primary/40" />
            ) : i % 3 === 1 ? (
              <Zap className="w-3 h-3 text-primary/30" />
            ) : (
              <Star className="w-3 h-3 text-primary/35" />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Heading with Typing Animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight pb-2 relative min-h-[1.2em]">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:200%_100%] animate-gradient text-transparent bg-clip-text blur-lg opacity-50">
                {typedText}
              </span>
              <span className="relative bg-gradient-to-r from-primary via-primary/90 to-primary bg-[length:200%_100%] animate-gradient text-transparent bg-clip-text drop-shadow-2xl">
                {typedText}
                {typedText.length < fullText.length && (
                  <span className="inline-block w-1 h-[0.9em] bg-primary ml-1 animate-pulse align-middle"></span>
                )}
              </span>
            </span>
          </h1>
          
          {/* Subtitle with Stagger Animation */}
          <p 
            className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto drop-shadow-lg transition-all duration-1000 delay-300"
            style={{
              opacity: isVisible && typedText.length > 20 ? 1 : 0,
              transform: isVisible && typedText.length > 20 ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Training solutions that elevate your teams across IT, cybersecurity, and enterprise productivity.
          </p>
        </div>
      </div>
      
      {/* Animated Gradient Border at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-pulse" />
    </section>
  );
};

export default Hero;
