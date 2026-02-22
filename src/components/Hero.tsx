import { useEffect, useState, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { TechBackground } from "./TechBackground";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
interface HeroProps {
  onTabChange: (tab: string) => void;
}

// Magnetic button component
const MagneticButton = ({
  children,
  className = "",
  onClick
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    setPosition({
      x: deltaX,
      y: deltaY
    });
  };
  const handleMouseLeave = () => {
    setPosition({
      x: 0,
      y: 0
    });
  };
  return <button ref={buttonRef} className={className} onClick={onClick} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 && position.y === 0 ? 'transform 0.3s ease-out' : 'none'
  }}>
      {children}
    </button>;
};
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
        timeoutId = setTimeout(typeNextCharacter, 80);
      }
    };
    timeoutId = setTimeout(typeNextCharacter, 500);
    return () => clearTimeout(timeoutId);
  }, []);
  const scrollToContent = () => {
    window.scrollBy({
      top: window.innerHeight * 0.7,
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0f14]">
      {/* Aurora Borealis Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f14] via-[#0d1318] to-[#0a0f14]" />
        
        {/* Aurora layers */}
        <div className="absolute inset-0 opacity-40" style={{
        background: `
              radial-gradient(ellipse 120% 60% at 20% 40%, hsl(177 70% 41% / 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 100% 50% at 80% 60%, hsl(166 100% 30% / 0.25) 0%, transparent 50%),
              radial-gradient(ellipse 80% 40% at 50% 30%, hsl(160 64% 52% / 0.2) 0%, transparent 50%)
            `,
        animation: 'aurora 15s ease-in-out infinite'
      }} />
        <div className="absolute inset-0 opacity-30" style={{
        background: `
              radial-gradient(ellipse 90% 50% at 70% 50%, hsl(177 70% 41% / 0.25) 0%, transparent 45%),
              radial-gradient(ellipse 110% 60% at 30% 70%, hsl(166 100% 30% / 0.2) 0%, transparent 50%)
            `,
        animation: 'aurora 20s ease-in-out infinite reverse'
      }} />
        <div className="absolute inset-0 opacity-20" style={{
        background: `
              radial-gradient(ellipse 70% 35% at 60% 45%, hsl(160 64% 52% / 0.3) 0%, transparent 40%)
            `,
        animation: 'aurora 12s ease-in-out infinite 2s'
      }} />
      </div>

      <TechBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32 text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Enhanced heading with tighter tracking */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight pb-2 relative min-h-[1.2em]">
            <span className="relative inline-block">
              {/* Glow layer */}
              <span className="absolute inset-0 text-transparent bg-clip-text blur-2xl opacity-60" style={{
              color: '#4FD1C5'
            }}>
                {typedText}
              </span>
              {/* Main text with high contrast */}
              <span className="relative text-white font-extrabold" style={{
              textShadow: '0 0 40px rgba(79,209,197,0.5), 0 2px 4px rgba(0,0,0,0.8)',
              letterSpacing: '-0.02em'
            }}>
                {typedText}
                {typedText.length < fullText.length && <span className="inline-block w-1 h-[0.9em] bg-[#4FD1C5] ml-1 animate-pulse align-middle">|</span>}
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 transition-all duration-500 tracking-wide" style={{
          opacity: isVisible && typedText.length > 20 ? 1 : 0,
          transform: isVisible && typedText.length > 20 ? 'translateY(0)' : 'translateY(20px)',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)'
        }}>
            Bite-sized learning, unlimited hands-on practice, and world-class instructors. We transform complex training into simple, accessible experiences.
          </p>

          {/* CTA Buttons with Magnetic Effect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-500" style={{
          opacity: isVisible && typedText.length > 30 ? 1 : 0,
          transform: isVisible && typedText.length > 30 ? 'translateY(0)' : 'translateY(20px)'
        }}>
            <Button asChild variant="hero" size="lg" className="text-base px-8 py-3 h-auto">
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-3 h-auto border-accent-teal text-white hover:bg-accent-teal/10 hover:text-white">
              <Link to="/training-samples">Try Training Samples</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-base px-8 py-3 h-auto text-white/80 hover:text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button onClick={scrollToContent} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer group" aria-label="Scroll to content">
        <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
        <div className="relative">
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <ChevronDown className="w-6 h-6 absolute top-0 left-0 opacity-30 animate-bounce" style={{
          animationDelay: '0.1s'
        }} />
        </div>
      </button>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Aurora animation keyframes */}
      <style>{`
        @keyframes aurora {
          0%, 100% {
            transform: translateX(0) translateY(0) scale(1);
          }
          25% {
            transform: translateX(3%) translateY(-2%) scale(1.02);
          }
          50% {
            transform: translateX(-2%) translateY(3%) scale(0.98);
          }
          75% {
            transform: translateX(-3%) translateY(-1%) scale(1.01);
          }
        }
      `}</style>
    </section>;
};
export default Hero;