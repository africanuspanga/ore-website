"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

export const partnerLogos = [
  { src: "/logos/Can-logo-rgb-wikipedia.png", name: "CAN" },
  { src: "/logos/Coat_of_arms_of_Tanzania.svg.png", name: "Tanzania Government" },
  { src: "/logos/Flag_of_Europe.svg.png", name: "European Union" },
  { src: "/logos/LOGO-COLOR-ENGLISH.png", name: "Development Partner" },
  { src: "/logos/Women's_World_Banking_Logo.png", name: "Women's World Banking" },
  { src: "/logos/bab070fe-8d8e-4aa6-aae7-fe97c9c1c1e5.webp", name: "Partner Organization" },
  { src: "/logos/owGPX4Azvnafusv8yCpfdFwLnchbwVSP.png", name: "Global Partner" },
  { src: "/logos/rs=w_388,h_194,cg_true.webp", name: "Supporting Partner" },
];

interface PartnerLogosGridProps {
  className?: string;
}

export function PartnerLogosGrid({ className }: PartnerLogosGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6",
        className
      )}
    >
      {partnerLogos.map((partner, index) => (
        <motion.div
          key={partner.name}
          className="bg-white rounded-xl p-6 flex items-center justify-center h-28 shadow-subtle hover:shadow-elevated transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src={partner.src}
              alt={partner.name}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
