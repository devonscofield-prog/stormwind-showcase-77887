import { useEffect, useState } from "react";
import { TechBackground } from "./TechBackground";

interface HeroProps {
  onTabChange: (tab: string) => void;
}

const Hero = ({ onTabChange }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Empowering the Future of Learning.";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeNextCharacter, 80);
      }
    };

    timeoutId = setTimeout(typeNextCharacter, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0f1419]">
      <TechBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Simplified heading with reduced glow layers */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight pb-2 relative min-h-[1.2em]">
            <span className="relative inline-block">
              {/* Single glow layer instead of multiple */}
              <span 
                className="absolute inset-0 text-transparent bg-clip-text blur-xl opacity-50"
                style={{ color: '#4FD1C5' }}
              >
                {typedText}
              </span>
              {/* Main text */}
              <span 
                className="relative text-white"
                style={{ textShadow: '0 0 30px rgba(79,209,197,0.4)' }}
              >
                {typedText}
                {typedText.length < fullText.length && (
                  <span className="inline-block w-1 h-[0.9em] bg-[#4FD1C5] ml-1 animate-pulse align-middle">|</span>
                )}
              </span>
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto transition-all duration-500"
            style={{
              opacity: isVisible && typedText.length > 20 ? 1 : 0,
              transform: isVisible && typedText.length > 20 ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Bite-sized learning, unlimited hands-on practice, and world-class instructors. We transform complex training into simple, accessible experiences.
          </p>
        </div>
      </div>
      
      {/* Simplified bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
};

export default Hero;