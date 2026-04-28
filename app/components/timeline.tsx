"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface TimelineNode {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  nodes: TimelineNode[];
  className?: string;
}

export function Timeline({ nodes, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Central line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-green via-sunset-gold to-earth-clay md:-translate-x-px" />

      <div className="space-y-12 md:space-y-0">
        {nodes.map((node, index) => (
          <motion.div
            key={node.year}
            className={cn(
              "relative md:flex md:items-center md:justify-between",
              index !== nodes.length - 1 && "md:mb-16"
            )}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-green rounded-full border-4 border-warm-sand md:-translate-x-1/2 z-10 top-1" />

            {/* Content */}
            <div
              className={cn(
                "pl-12 md:pl-0 md:w-[calc(50%-40px)]",
                index % 2 === 0
                  ? "md:mr-auto md:pr-8 md:text-right"
                  : "md:ml-auto md:pl-8 md:text-left"
              )}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-subtle">
                <span className="inline-block text-sunset-gold font-display text-2xl font-bold mb-2">
                  {node.year}
                </span>
                <h3 className="font-display text-xl font-bold text-deep-forest mb-2">
                  {node.title}
                </h3>
                <p className="text-charcoal/80 text-base leading-relaxed">
                  {node.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
