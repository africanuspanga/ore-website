"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionReveal } from "../components/section-reveal";
import { StatCounter } from "../components/stat-counter";
import { TheoryOfChange } from "../components/theory-of-change";
import { TestimonialCard } from "../components/testimonial-card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allStats = [
  { value: 245000, suffix: "+", label: "People Reached" },
  { value: 550000, suffix: "+", label: "Trees Planted" },
  { value: 411, suffix: "", label: "Businesses Started" },
  { value: 314, suffix: "", label: "BSGs Established" },
];

const secondaryStats = [
  { value: 67, suffix: "%", label: "Farm Productivity Increase" },
  { value: 113, suffix: "%", label: "Income Increase" },
  { value: 52000, prefix: "$", suffix: "+", label: "BSG Collections" },
];

const testimonials = [
  {
    quote:
      "Before joining the SHG, I struggled to feed my family. Now I run a small business, my children go to school, and I mentor other women in my village.",
    name: "Mariam J.",
    role: "SHG Member, Morogoro Region",
    image: "/istockphoto-1081976928-612x612.jpg",
  },
  {
    quote:
      "The climate-smart training changed everything. My yields doubled, and I learned to farm in harmony with the land instead of fighting it.",
    name: "John M.",
    role: "Farmer, Iringa Region",
    image: "/istockphoto-1094246926-612x612.jpg",
  },
  {
    quote:
      "As a young person, I felt I had no future in the village. ORE helped me see that the future is built right here, by us.",
    name: "Grace T.",
    role: "Youth Leader, Dodoma Region",
    image: "/istockphoto-2241357558-612x612.jpg",
  },
  {
    quote:
      "We planted trees as a community, and now our rivers flow again. Our children will inherit a greener, healthier home.",
    name: "Abdul K.",
    role: "Conservation Champion, Tanga Region",
    image: "/istockphoto-2246613625-612x612.jpg",
  },
];

export default function ImpactPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-advance
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(interval);
    };
  }, [emblaApi]);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Africa reforestation green.jpg"
            alt="Reforestation landscape"
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
            Impact That Speaks
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
          >
            Numbers tell one story. Lives transformed tell another.
          </motion.p>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="py-20 md:py-32 lg:py-40 bg-sage-light">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">Our Model</p>
            <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
              Theory of Change
            </h2>
            <p className="text-lg text-charcoal/80 max-w-[700px] mx-auto">
              Click each stage to explore how transformation happens.
            </p>
          </SectionReveal>

          <TheoryOfChange interactive />
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="py-20 md:py-32 lg:py-40 bg-deep-forest">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-sunset-gold mb-4">By The Numbers</p>
            <h2 className="headline-section text-4xl md:text-5xl text-white mb-6">
              Measurable Impact
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-16">
            {allStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                size="large"
                abbreviate
              />
            ))}
          </div>

          {/* Progress bars for secondary stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            {secondaryStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="font-display text-4xl md:text-5xl text-sunset-gold font-bold mb-2">
                  {stat.prefix}
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <p className="text-white/70 text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">Voices of Change</p>
            <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
              Success Stories
            </h2>
          </SectionReveal>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  >
                    <TestimonialCard
                      quote={t.quote}
                      name={t.name}
                      role={t.role}
                      image={t.image}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="w-12 h-12 rounded-full border-2 border-primary-green text-primary-green flex items-center justify-center hover:bg-primary-green hover:text-white transition-all disabled:opacity-30"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="w-12 h-12 rounded-full border-2 border-primary-green text-primary-green flex items-center justify-center hover:bg-primary-green hover:text-white transition-all disabled:opacity-30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
