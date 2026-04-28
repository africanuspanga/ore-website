"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Shield,
  Leaf,
  Flame,
  Crown,
  MapPin,
  Handshake,
  Sparkles,
  Link2,
  Users,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { SectionReveal } from "./components/section-reveal";
import { StatCounter } from "./components/stat-counter";
import { TheoryOfChange } from "./components/theory-of-change";
import { Button } from "./components/button";
import { LogoMarquee } from "./components/logo-marquee";
import { ProgramCard } from "./components/program-card";
import { getFeaturedPrograms } from "./lib/programs-data";
import { cn } from "./lib/utils";

const empowermentCards = [
  {
    title: "Poverty Breakers",
    subtitle: "Resilient households rising above hardship",
    icon: Shield,
  },
  {
    title: "Farmer Innovators",
    subtitle: "Visionary smallholders driving food security",
    icon: Leaf,
  },
  {
    title: "Young Game-Changers",
    subtitle: "Ambitious youth igniting change",
    icon: Flame,
  },
  {
    title: "Women Leaders",
    subtitle: "Trailblazers transforming families and communities",
    icon: Crown,
  },
  {
    title: "Grassroot Pioneers",
    subtitle: "Community-driven leaders spearheading local development",
    icon: MapPin,
  },
  {
    title: "Impact-Drivers",
    subtitle: "Forward-thinking partners co-creating sustainable solutions",
    icon: Handshake,
  },
];

const icePillars = [
  {
    icon: Sparkles,
    title: "Ignite",
    body: "We do not impose solutions; we spark, catalyze and amplify them from within communities. We create environments for self-discovery where community members reimagine, sharpen their tools, and unleash their power to catalyze resilience.",
  },
  {
    icon: Link2,
    title: "Connect",
    body: "Real change happens when rural people work together. We champion co-reliance groupings—Self-Help Groups, VSLAs, Farmer Associations, Cooperatives—so communities harness collective strengths and overcome obstacles as one.",
  },
  {
    icon: Users,
    title: "Engage",
    body: "We cannot unlock rural potential alone. We strategically collaborate with policymakers, academia, government, funders, civil society, and the private sector—treating rural communities as part of solutions, not problems.",
  },
];

const stats = [
  { value: 245000, suffix: "+", label: "Lives Touched", supporting: "Across rural Tanzania" },
  { value: 550000, suffix: "+", label: "Trees for Tomorrow", supporting: "Restoring ecosystems" },
  { value: 411, suffix: "", label: "Ventures Flourishing", supporting: "From savings to enterprises" },
  { value: 113, suffix: "%", label: "Average Rise", supporting: "In household earnings" },
];

const secondaryStats = [
  { value: 314, label: "Business & Savings Groups Established" },
  { value: 67, suffix: "%", label: "Increase in Farm Productivity" },
  { value: 52000, prefix: "$", suffix: "+", label: "Collected by Community Groups" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <Image
            src="/hero-tanzania-landscape.jpg"
            alt="Tanzanian rural landscape at golden hour"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/85 via-deep-forest/60 to-primary-green/40 z-[1]" />

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-32 text-white">
          <motion.p
            className="label-text text-white/90 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Since 2015 — Rural Tanzania
          </motion.p>

          <motion.h1
            className="headline-display text-5xl sm:text-6xl md:text-7xl lg:text-[96px] text-white max-w-[900px] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Unlocking Rural Potential
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-[600px] mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            We are a catalyst for change, unlocking potential in rural communities
            to overcome poverty, climate challenges, and environmental degradation.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Button variant="primary" href="/impact/" showArrow>
              Discover Our Impact
            </Button>
            <Button variant="outline" href="/partners/">
              Partner With Us
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="animate-bounce-scroll">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </motion.div>
      </section>

      {/* Six Faces of Empowerment */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">Who We Empower</p>
            <h2 className="headline-section text-4xl md:text-5xl lg:text-[56px] text-deep-forest mb-6">
              Champions of Rural Transformation
            </h2>
            <p className="text-lg text-charcoal/80 max-w-[700px] mx-auto">
              From farmers to youth, women to grassroots leaders—meet the people
              driving change.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {empowermentCards.map((card, index) => {
              const Icon = card.icon;
              const isWide = index === 3; // Women Leaders spans 2 cols on desktop

              return (
                <motion.div
                  key={card.title}
                  className={cn(
                    "bg-white rounded-2xl p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 group cursor-default",
                    isWide && "lg:col-span-2"
                  )}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ y: -4 }}
                >
                  <Icon className="w-12 h-12 text-primary-green mb-5 transition-colors duration-300 group-hover:text-earth-clay" />
                  <h3 className="font-semibold text-xl text-deep-forest mb-2">
                    {card.title}
                  </h3>
                  <p className="text-charcoal/80">{card.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">Our Programs</p>
            <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
              Creating Impact From the Ground Up
            </h2>
            <p className="text-lg text-charcoal/80 max-w-[700px] mx-auto">
              Each program is designed to empower rural communities, restore the
              environment, and build lasting economic resilience.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFeaturedPrograms(3).map((program, index) => (
              <motion.div
                key={program.slug}
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
                  slug={program.slug}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline-dark" href="/programs/">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* ICE Approach */}
      <section className="py-20 md:py-32 lg:py-40 bg-sage-light relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="#1E3D2F" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">Our Approach</p>
            <h2 className="headline-section text-4xl md:text-5xl lg:text-[56px] text-deep-forest mb-6">
              ICE: The Method Behind the Movement
            </h2>
            <p className="text-lg text-charcoal/80 max-w-[700px] mx-auto">
              Ignite. Connect. Engage. Three words that define how we transform
              rural communities from within.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {icePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-subtle relative overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Top gradient border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sunset-gold to-earth-clay" />

                  <Icon className="w-16 h-16 text-sunset-gold mb-6" />
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-forest mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">{pillar.body}</p>

                  {/* Animated accent line */}
                  <motion.div
                    className="mt-6 h-0.5 bg-gradient-to-r from-earth-clay to-sunset-gold rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-20 md:py-32 lg:py-40 bg-deep-forest">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-sunset-gold mb-4">A Decade of Impact</p>
            <h2 className="headline-section text-4xl md:text-5xl text-white mb-6">
              Real Numbers. Real Lives. Real Change.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-16">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                supportingText={stat.supporting}
                size="large"
                abbreviate
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-12 border-t border-white/10">
            {secondaryStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                size="small"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/cooperative group farming.jpg"
                  alt="Community members in a meeting circle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-primary-green text-white px-6 py-3 rounded-xl font-display font-bold text-lg shadow-elevated"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Est. 2015
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="label-text text-earth-clay mb-4">Our Story</p>
              <h2 className="headline-section text-3xl md:text-4xl lg:text-[42px] text-deep-forest mb-6">
                From Neighbors to a National Force
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                We began as neighbours living the rural reality—woven into villages,
                listening deeply, amplifying local voices, and co-creating solutions.
                What started with one program and philanthropic support from the USA
                has grown into a community-anchored NGO recognized for transforming
                lives across Rural Tanzania.
              </p>
              <Button variant="text-link" href="/about/" showArrow>
                Read Our Full Journey
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Theory of Change Preview */}
      <section className="py-20 md:py-32 lg:py-40 bg-sage-light">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">Theory of Change</p>
            <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
              How Transformation Happens
            </h2>
          </SectionReveal>

          <TheoryOfChange />
        </div>
      </section>

      {/* Partner Logos Marquee */}
      <section className="py-16 md:py-20 bg-white border-y border-charcoal/10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 mb-10">
          <SectionReveal className="text-center">
            <p className="label-text text-earth-clay mb-2">Trusted By</p>
            <h2 className="headline-section text-2xl md:text-3xl text-deep-forest">
              Partners & Collaborators
            </h2>
          </SectionReveal>
        </div>
        <LogoMarquee speed={40} />
      </section>

      {/* CTA - Join the Movement */}
      <section className="py-20 md:py-32 lg:py-40 bg-primary-green relative overflow-hidden">
        {/* Subtle organic pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="leaves" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M30 10 Q40 20 30 30 Q20 20 30 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leaves)" />
          </svg>
        </div>

        {/* Floating photos */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 rounded-full border-2 border-white/30 overflow-hidden"
              style={{
                top: `${20 + (i % 2) * 50}%`,
                left: `${10 + i * 22}%`,
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(/istockphoto-${[
                    "1081976928",
                    "1094246926",
                    "157439341",
                    "1610968602",
                  ][i]}-612x612.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
          <SectionReveal>
            <h2 className="headline-section text-4xl md:text-5xl lg:text-[52px] text-white mb-6">
              Be Part of the Change
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-[700px] mx-auto mb-10">
              Whether you&apos;re a funder, partner, researcher, or advocate—there&apos;s a
              place for you in this movement. Together, we can unlock rural
              potential at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" href="/partners/">
                Partner With Us
              </Button>
              <Button variant="outline" href="/contact/">
                Contact Our Team
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
