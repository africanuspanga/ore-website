"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionReveal } from "../components/section-reveal";
import { Timeline } from "../components/timeline";
import { Button } from "../components/button";

const timelineNodes = [
  {
    year: "2015",
    title: "The Seed",
    description:
      "Locally rooted beginnings. We started as neighbours living the rural reality, launching our first Self-Help Group program with grassroots volunteers and community trust.",
  },
  {
    year: "2016–2019",
    title: "Growing with Purpose",
    description:
      "The SHG program gained remarkable traction. We expanded into agriculture, entrepreneurship, and climate resilience—always listening first, then co-creating solutions with communities.",
  },
  {
    year: "2019",
    title: "Becoming an NGO",
    description:
      "Organic growth demanded dedicated structure. We gained legal standing as an NGO, opening wider frontiers while staying true to our community-anchored roots.",
  },
  {
    year: "2025",
    title: "A Decade of Impact",
    description:
      "Recognized for co-creating solutions across Rural Tanzania. We launched our 2030 Strategy, setting bold goals for the next chapter of transformation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Tanzania sunset.jpg"
            alt="Tanzanian landscape at sunset"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-deep-forest/70 z-[1]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-32 text-white text-center">
          <motion.nav
            className="text-sm text-white/70 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Our Story</span>
          </motion.nav>
          <motion.h1
            className="headline-display text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            A decade of listening, learning, and growing with rural Tanzania.
          </motion.p>
        </div>
      </section>

      {/* Genesis */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/beautiful-shot-field-with-clear-blue-sky.jpg"
                alt="Rural Tanzanian landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="label-text text-earth-clay mb-4">The Genesis</p>
              <h2 className="headline-section text-3xl md:text-4xl text-deep-forest mb-6">
                Locally Rooted
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                ORE was born from lived experience. Our founders were not outsiders
                with pre-packaged solutions—they were neighbours who understood the
                daily realities of rural life in Tanzania. They saw potential where
                others saw poverty. They saw resilience where others saw hardship.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                In 2015, we launched our first Self-Help Group program with a simple
                belief: rural communities already hold the answers to their own
                challenges. Our role is to listen, amplify, and co-create.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                What began as a grassroots initiative with philanthropic support from
                the USA has grown into a recognized NGO, yet our approach remains the
                same—community first, always.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 lg:py-40 bg-sage-light">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">The Trajectory</p>
            <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
              2015 — 2025
            </h2>
            <p className="text-lg text-charcoal/80 max-w-[600px] mx-auto">
              Ten years of growth, learning, and impact.
            </p>
          </SectionReveal>

          <Timeline nodes={timelineNodes} />
        </div>
      </section>

      {/* Now and Beyond */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="label-text text-earth-clay mb-4">Looking Ahead</p>
              <h2 className="headline-section text-3xl md:text-4xl text-deep-forest mb-6">
                Now and Beyond
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                As we celebrate a decade of impact, we are setting our sights on
                2030. Our strategy is bold: scale our proven models, deepen our
                community reach, and forge even stronger partnerships to unlock
                rural potential across Tanzania and beyond.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                We believe the next decade will be even more transformative. With
                your support, we can turn rural potential into rural prosperity—one
                community at a time.
              </p>
              <Button variant="primary" href="/contact/">
                Read Our 2030 Strategy
              </Button>
            </motion.div>

            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-display text-[150px] md:text-[200px] font-bold text-deep-forest/10 leading-none select-none">
                2030
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
