"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  slug: string;
  className?: string;
}

export function ProgramCard({
  title,
  subtitle,
  description,
  image,
  badge,
  slug,
  className,
}: ProgramCardProps) {
  return (
    <motion.div
      className={cn(
        "group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-shadow duration-300",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/programs/${slug}/`} className="block">
        <div className="relative h-64 md:h-72 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-green text-white text-xs font-semibold uppercase tracking-wider">
              {badge}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-sm text-earth-clay font-semibold mb-1">{subtitle}</p>
          <h3 className="font-display text-2xl md:text-[28px] font-bold text-deep-forest mb-3">
            {title}
          </h3>
          <p className="text-charcoal/80 text-base leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 text-primary-green font-semibold group-hover:gap-3 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
