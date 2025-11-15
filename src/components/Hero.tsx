import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { TechBackground } from "./TechBackground";
interface HeroProps {
  onTabChange: (tab: string) => void;
}
const Hero = ({
  onTabChange
}: HeroProps) => {
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

        // Random delay between 60-150ms for natural typing feel
        const delay = Math.random() * 90 + 60;
        timeoutId = setTimeout(typeNextCharacter, delay);
      }
    };

    // Start typing after a brief delay
    timeoutId = setTimeout(typeNextCharacter, 500);
    return () => clearTimeout(timeoutId);
  }, []);
  return <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0f1419]">
      {/* Tech Background Animation - Same as Ranges page */}
      <TechBackground />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Heading with Typing Animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight pb-2 relative min-h-[1.2em]">
            <span className="relative inline-block">
              {/* Outer glow layers */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#4FD1C5] via-[#4FD1C5]/80 to-[#4FD1C5] bg-[length:200%_100%] animate-gradient text-transparent bg-clip-text blur-2xl opacity-60 scale-110">
                {typedText}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#4FD1C5] via-[#4FD1C5]/80 to-[#4FD1C5] bg-[length:200%_100%] animate-gradient text-transparent bg-clip-text blur-xl opacity-70">
                {typedText}
              </span>
              {/* Main text */}
              <span className="relative text-white drop-shadow-2xl">
                {typedText}
                {typedText.length < fullText.length && <span className="inline-block w-1 h-[0.9em] bg-[#4FD1C5] ml-1 animate-pulse align-middle shadow-[0_0_20px_rgba(79,209,197,0.8)]"></span>}
              </span>
            </span>
          </h1>
          
          {/* Subtitle with Stagger Animation */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto drop-shadow-2xl transition-all duration-1000 delay-300" style={{
          opacity: isVisible && typedText.length > 20 ? 1 : 0,
          transform: isVisible && typedText.length > 20 ? 'translateY(0)' : 'translateY(20px)'
        }}>​Short form content, unprecendented access to hands on learning, and the best instructors in the world. Training can be time consuming and difficult to plan, we make it easy.</p>
        </div>
      </div>
      
      {/* Animated Gradient Border at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-pulse" />
    </section>;
};
export default Hero;