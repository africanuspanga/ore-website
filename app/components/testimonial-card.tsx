"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white rounded-2xl p-8 border-l-4 border-sunset-gold shadow-subtle",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <blockquote className="font-display italic text-xl md:text-2xl text-deep-forest leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-deep-forest">{name}</p>
          <p className="text-sm text-charcoal/70">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
