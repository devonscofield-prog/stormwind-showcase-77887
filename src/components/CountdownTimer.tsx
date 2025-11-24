import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const promoEndDate = new Date("2025-12-31T23:59:59").getTime();
  
  const calculateTimeLeft = (): TimeLeft | null => {
    const now = new Date().getTime();
    const difference = promoEndDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Check if less than 48 hours left
      if (newTimeLeft && newTimeLeft.days === 0 && newTimeLeft.hours < 48) {
        setIsUrgent(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <Card className="p-6 glass-card border-destructive/50">
        <p className="text-lg font-semibold text-destructive text-center">
          This promotion has ended
        </p>
      </Card>
    );
  }

  return (
    <Card className={cn(
      "p-6 glass-card transition-all duration-300",
      isUrgent && "animate-pulse-glow border-primary/50"
    )}>
      <p className="text-sm font-semibold text-muted-foreground text-center mb-4">
        Promo Ends In
      </p>
      <div className="grid grid-cols-4 gap-3">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Mins" },
          { value: timeLeft.seconds, label: "Secs" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-gradient-primary mb-1">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-xs text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};
