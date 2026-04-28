"use client";

import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { partnerLogos } from "./partner-logos";

interface LogoMarqueeProps {
  className?: string;
  speed?: number;
  direction?: "left" | "right";
}

export function LogoMarquee({
  className,
  speed = 30,
  direction = "left",
}: LogoMarqueeProps) {
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex gap-12 items-center w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {logos.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 w-32 h-16 relative"
          >
            <Image
              src={partner.src}
              alt={partner.name}
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
