"use client";

import { useEffect, useState, useRef } from "react";
import { useIntersection } from "@/app/hooks/use-intersection";
import { cn } from "@/app/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  supportingText?: string;
  duration?: number;
  size?: "large" | "small";
  className?: string;
  abbreviate?: boolean;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  supportingText,
  duration = 2500,
  size = "large",
  className,
  abbreviate = false,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useIntersection<HTMLDivElement>({ threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formatNumber = (num: number) => {
    if (abbreviate && num >= 1000) {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(0) + "M";
      }
      return (num / 1000).toFixed(0) + "K";
    }
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn(
          "font-display text-sunset-gold tabular-nums leading-none",
          size === "large" ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl" : "text-3xl md:text-4xl"
        )}
      >
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div
        className={cn(
          "mt-2 font-semibold uppercase tracking-widest text-white/70",
          size === "large" ? "text-sm" : "text-xs"
        )}
      >
        {label}
      </div>
      {supportingText && (
        <div className="mt-1 text-white/80 text-base">{supportingText}</div>
      )}
    </div>
  );
}
