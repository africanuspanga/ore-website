"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  parallax?: boolean;
}

export function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  parallax = false,
}: ImageRevealProps) {
  return (
    <motion.div
      className={cn("overflow-hidden relative", className)}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        initial={parallax ? { y: 30 } : {}}
        whileInView={parallax ? { y: 0 } : {}}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", imageClassName)}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </motion.div>
    </motion.div>
  );
}
