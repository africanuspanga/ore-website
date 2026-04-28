"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";
import {
  Lightbulb,
  Sprout,
  TrendingUp,
  Shield,
  Heart,
} from "lucide-react";

interface Stage {
  id: string;
  title: string;
  shortText: string;
  fullText: string;
  stats?: string[];
}

const defaultStages: Stage[] = [
  {
    id: "inputs",
    title: "Inputs",
    shortText: "Capacity Building, Resources, Partnerships",
    fullText:
      "We invest in capacity building, provide access to resources, and forge partnerships & networks that enable rural communities to thrive.",
    stats: ["50+ training programs", "20+ partner organizations"],
  },
  {
    id: "activities",
    title: "Activities",
    shortText: "Climate-Smart Agriculture, Post-Harvest Investment",
    fullText:
      "Through climate-smart agriculture, post-harvest handling, asset investment, natural resource management, and inclusive structures.",
    stats: ["6 core programs", "314 BSGs established"],
  },
  {
    id: "outputs",
    title: "Outputs",
    shortText: "Increased Yields, Income Growth, Conserved Resources",
    fullText:
      "Communities achieve increased yields, food sovereignty, income growth, conserved resources, reduced climate vulnerability, and empowered communities.",
    stats: ["67% productivity increase", "113% income increase"],
  },
  {
    id: "outcomes",
    title: "Outcomes",
    shortText: "Improved Livelihood, Climate Resilience",
    fullText:
      "The result is improved livelihood, enhanced climate resilience, and stronger, more connected communities.",
    stats: ["245,000+ lives touched", "550,000+ trees planted"],
  },
  {
    id: "impact",
    title: "Impact",
    shortText: "Thriving & Sustainable Rural Communities",
    fullText:
      "Eventually, we see thriving and sustainable rural communities that are self-reliant, climate-resilient, and economically empowered.",
    stats: ["411 businesses launched", "$52,000+ BSG collections"],
  },
];

const icons = [Lightbulb, Sprout, TrendingUp, Shield, Heart];

interface TheoryOfChangeProps {
  stages?: Stage[];
  interactive?: boolean;
  className?: string;
}

export function TheoryOfChange({
  stages = defaultStages,
  interactive = false,
  className,
}: TheoryOfChangeProps) {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div className={cn("", className)}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-2 relative">
        {stages.map((stage, index) => {
          const Icon = icons[index];
          const isActive = activeStage === stage.id;
          const isLast = index === stages.length - 1;

          return (
            <div key={stage.id} className="flex items-center flex-1 w-full">
              <motion.button
                className={cn(
                  "relative flex flex-col items-center text-center group cursor-pointer",
                  interactive && "focus:outline-none"
                )}
                onClick={() =>
                  interactive && setActiveStage(isActive ? null : stage.id)
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={cn(
                    "w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    isActive
                      ? "bg-primary-green border-primary-green text-white shadow-elevated"
                      : "bg-white border-primary-green/30 text-primary-green group-hover:border-primary-green group-hover:shadow-subtle"
                  )}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="mt-4 max-w-[180px]">
                  <h4 className="font-display font-bold text-lg text-deep-forest">
                    {stage.title}
                  </h4>
                  <p className="text-sm text-charcoal/70 mt-1 leading-snug">
                    {stage.shortText}
                  </p>
                </div>
              </motion.button>

              {/* Connector */}
              {!isLast && (
                <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-sunset-gold/60 to-earth-clay/60 mx-2 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sunset-gold to-earth-clay"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.2 + 0.3,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              )}

              {/* Mobile arrow */}
              {!isLast && (
                <div className="md:hidden flex items-center justify-center w-full py-2">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-sunset-gold to-earth-clay" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Interactive detail panel */}
      <AnimatePresence>
        {interactive && activeStage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-elevated">
              {stages
                .filter((s) => s.id === activeStage)
                .map((stage) => (
                  <div key={stage.id}>
                    <h3 className="font-display text-2xl font-bold text-deep-forest mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-charcoal/80 text-lg leading-relaxed mb-4">
                      {stage.fullText}
                    </p>
                    {stage.stats && (
                      <div className="flex flex-wrap gap-4">
                        {stage.stats.map((stat) => (
                          <span
                            key={stat}
                            className="inline-block px-4 py-2 bg-sage-light rounded-lg text-primary-green font-semibold text-sm"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
