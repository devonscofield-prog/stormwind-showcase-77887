import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PersonalizedLearningBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Staggered entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // 3D tilt effect on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const tiltStyle = isHovered
    ? {
        transform: `perspective(1000px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg) scale(1.02)`,
        transition: "transform 0.15s ease-out",
      }
    : {
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: "transform 0.3s ease-out",
      };

  return (
    <section
      className={cn(
        "relative py-12 md:py-16 px-6 z-10 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      aria-label="Personalized Learning Experience Feature"
    >
      <div className="container mx-auto max-w-4xl">
        <Link to="/personalized-learning" className="block group">
          <div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
            className="relative overflow-hidden rounded-2xl"
          >
            {/* Animated shimmer border */}
            <div
              className={cn(
                "absolute inset-0 rounded-2xl p-[2px] transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-70"
              )}
              style={{
                background: "linear-gradient(90deg, hsl(166 100% 30%), hsl(177 70% 41%), hsl(160 64% 52%), hsl(177 70% 41%), hsl(166 100% 30%))",
                backgroundSize: "300% 100%",
                animation: "shimmer-border 3s ease infinite",
              }}
            >
              {/* Inner content container */}
              <div
                className={cn(
                  "h-full w-full rounded-[14px] bg-gradient-to-br from-card/95 via-background to-card/90 backdrop-blur-xl",
                  "p-6 md:p-8 lg:p-10"
                )}
              >
                {/* Glow effect overlay */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-[14px] transition-all duration-500 pointer-events-none",
                    isHovered ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    boxShadow: "0 0 60px hsl(166 100% 30% / 0.3), inset 0 0 30px hsl(166 100% 30% / 0.05)",
                  }}
                />

                {/* Content Layout */}
                <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  {/* Icon with pulsing glow */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={cn(
                        "absolute inset-0 rounded-full blur-xl transition-opacity duration-500",
                        isHovered ? "opacity-60" : "opacity-30"
                      )}
                      style={{ background: "hsl(166 100% 30% / 0.5)" }}
                    />
                    <div
                      className={cn(
                        "relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center",
                        "bg-primary/10 border border-primary/20"
                      )}
                      style={{
                        animation: "glow-pulse 2s ease-in-out infinite",
                      }}
                    >
                      <Sparkles
                        className={cn(
                          "w-8 h-8 md:w-10 md:h-10 text-primary transition-transform duration-300",
                          isHovered && "scale-110"
                        )}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                      <Badge className="bg-primary text-primary-foreground uppercase tracking-wider text-[10px] font-bold px-2.5 py-0.5 animate-pulse">
                        New
                      </Badge>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-2">
                      Personalized Learning Experience
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground max-w-lg">
                      Seven AI-powered tools. One customized journey. 
                      <span className="font-semibold text-primary"> Save up to 80%</span> of your training time.
                    </p>
                  </div>

                  {/* CTA */}
                  <div
                    className={cn(
                      "flex items-center gap-2 text-primary font-semibold text-sm md:text-base",
                      "transition-all duration-300 flex-shrink-0",
                      "sm:self-center"
                    )}
                  >
                    <span className="whitespace-nowrap">Explore Now</span>
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 md:w-5 md:h-5 transition-transform duration-300",
                        isHovered && "translate-x-1"
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Watermark icon */}
            <Sparkles
              className={cn(
                "absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 text-primary pointer-events-none transition-opacity duration-500",
                isHovered ? "opacity-[0.08]" : "opacity-[0.04]"
              )}
            />
          </div>
        </Link>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes shimmer-border {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px hsl(166 100% 30% / 0.2);
          }
          50% {
            box-shadow: 0 0 40px hsl(166 100% 30% / 0.4);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          @keyframes shimmer-border {
            0%, 100% {
              background-position: 0% 50%;
            }
          }
          @keyframes glow-pulse {
            0%, 100% {
              box-shadow: 0 0 20px hsl(166 100% 30% / 0.3);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default PersonalizedLearningBanner;
