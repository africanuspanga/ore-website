"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionReveal } from "../components/section-reveal";
import { ProgramCard } from "../components/program-card";

const programs = [
  {
    title: "Self-Help Groups (SHGs)",
    subtitle: "The Foundation",
    description:
      "Community-identified model to fight poverty and grow shared prosperity. SHGs bring neighbors together to save, lend, support, and dream collectively.",
    image: "/cooperative group farming.jpg",
    badge: "SHGs",
  },
  {
    title: "Climate-Smart Agriculture",
    subtitle: "Growing Resilience",
    description:
      "Sustainable farming practices that increase yields while protecting the planet. From conservation agriculture to agroforestry, we help farmers thrive with nature.",
    image: "/Tanzania woman farmer.jpg",
    badge: "Agriculture",
  },
  {
    title: "Entrepreneurship & Business Development",
    subtitle: "From Savings to Enterprises",
    description:
      "Transforming small savings into thriving businesses through BSGs and VSLAs. We provide training, mentorship, and market linkages for rural entrepreneurs.",
    image: "/Tanzania rural market.jpg",
    badge: "Business",
  },
  {
    title: "Environmental Conservation",
    subtitle: "Restoring the Earth",
    description:
      "Tree planting, natural resource management, and ecosystem restoration. Over 550,000 trees planted and counting—healing the land for future generations.",
    image: "/tree planting hands soil seedling.jpg",
    badge: "Conservation",
  },
  {
    title: "Youth Empowerment",
    subtitle: "The Next Generation",
    description:
      "Skills, leadership, and opportunities for young game-changers. We invest in rural youth as the architects of tomorrow's thriving communities.",
    image: "/cheerful-african-guy-uniform-pruning-green-bushes.jpg",
    badge: "Youth",
  },
  {
    title: "Women's Economic Empowerment",
    subtitle: "Leading the Change",
    description:
      "Trailblazing programs that put women at the center of rural transformation. When women thrive, families flourish and communities transform.",
    image: "/tanznaia woman farmr.jpg",
    badge: "Women",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-tanzania-landscape.jpg"
            alt="Tanzanian rural landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-deep-forest/70 z-[1]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-32 text-white text-center">
          <motion.h1
            className="headline-display text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Programs Built With Communities
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
          >
            Every initiative starts with listening. Every solution is co-created.
          </motion.p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">What We Do</p>
            <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
              Our Programs
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <ProgramCard
                  title={program.title}
                  subtitle={program.subtitle}
                  description={program.description}
                  image={program.image}
                  badge={program.badge}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
