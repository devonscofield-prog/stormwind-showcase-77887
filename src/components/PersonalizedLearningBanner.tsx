import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PersonalizedLearningBanner = () => {
  return (
    <section className="relative py-12 md:py-16 px-6 z-10" aria-label="StormAI Learning Feature">
      <div className="container mx-auto max-w-4xl">
        <Link to="/stormai-learning" className="block group">
          <div
            className="relative overflow-hidden rounded-2xl p-6 md:p-8 lg:p-10 ring-1 ring-inset ring-border
              bg-[linear-gradient(155deg,hsl(160_16%_13%)_0%,hsl(155_8%_10%)_62%,hsl(150_6%_10%)_100%)]
              transition-[background,box-shadow] duration-150 hover:ring-primary/70"
          >
            {/* Content Layout */}
            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center bg-primary/15">
                  <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <Badge className="bg-primary text-primary-foreground uppercase tracking-wider text-[10px] font-bold px-2.5 py-0.5">
                    New
                  </Badge>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-2">
                  StormAI Learning
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-lg">
                  Seven AI-powered tools. One customized journey.
                  <span className="font-semibold text-primary"> Save up to 80%</span> of your training time.
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base flex-shrink-0 sm:self-center">
                <span className="whitespace-nowrap">Explore Now</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>

            {/* Watermark icon */}
            <Sparkles className="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 text-primary pointer-events-none opacity-[0.06]" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PersonalizedLearningBanner;
