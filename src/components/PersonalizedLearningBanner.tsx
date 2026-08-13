import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PersonalizedLearningBanner = () => {
  return (
    <section className="relative z-10" aria-label="StormAI Learning Feature">
      <div className="container mx-auto px-6">
        <Link to="/stormai-learning" className="block group">
          <div
            className="relative overflow-hidden rounded-2xl
              bg-[linear-gradient(155deg,hsl(160_16%_13%)_0%,hsl(155_8%_10%)_62%,hsl(150_6%_10%)_100%)]
              transition-[box-shadow] duration-200 hover:shadow-[0_0_30px_rgba(0,154,119,0.12)]"
          >
            {/* Animated gradient sheen */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, hsl(166 100% 30% / 0.08) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
                animation: "sheen 6s ease-in-out infinite",
              }}
            />

            {/* Content Layout */}
            <div className="relative flex flex-row items-center gap-4 md:gap-8 px-5 py-4 md:px-8 md:py-5">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center bg-primary/15">
                  <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-primary text-primary-foreground uppercase tracking-wider text-[10px] font-bold px-2 py-0.5">
                    New
                  </Badge>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-foreground">
                  StormAI Learning
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground max-w-xl">
                  Seven AI-powered tools. One customized journey.
                  <span className="font-semibold text-primary"> Save up to 80%</span> of your training time.
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-primary font-semibold text-sm flex-shrink-0">
                <span className="whitespace-nowrap hidden sm:inline">Explore Now</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Watermark icon */}
            <Sparkles
              className="absolute -bottom-3 -right-3 w-24 h-24 md:w-28 md:h-28 text-primary pointer-events-none opacity-[0.05]"
              style={{ animation: "float 8s ease-in-out infinite" }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PersonalizedLearningBanner;
