"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  RefreshCw,
  Shield,
  Globe,
  Handshake,
  Lightbulb,
  Heart,
} from "lucide-react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionReveal } from "../components/section-reveal";
import { cn } from "../lib/utils";

const coreValues = [
  {
    icon: Users,
    title: "Community-Led",
    description:
      "Communities are not beneficiaries—they are partners, leaders, and decision-makers in every program we run.",
  },
  {
    icon: RefreshCw,
    title: "Transformation",
    description:
      "We pursue deep, lasting change that reshapes systems, mindsets, and opportunities for generations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency, accountability, and ethical practice guide every decision and every shilling we steward.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "Environmental, social, and economic sustainability are woven into every intervention we design.",
  },
  {
    icon: Handshake,
    title: "Localization",
    description:
      "Local context, local talent, local solutions. We invest in homegrown leadership and locally appropriate approaches.",
  },
  {
    icon: Heart,
    title: "Diversity & Inclusion",
    description:
      "We actively dismantle barriers and ensure women, youth, and marginalized groups have equal voice and opportunity.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new ideas, test boldly, and iterate based on what communities tell us actually works.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-man-harvesting-vegetables.jpg"
            alt="Farmer harvesting vegetables"
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
            The ICE Methodology
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
          >
            Ignite. Connect. Engage. Three pillars that turn grassroots energy into
            generational impact.
          </motion.p>
        </div>
      </section>

      {/* Ignite */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="label-text text-earth-clay mb-4">Pillar 01</p>
              <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
                Ignite
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                We do not impose solutions; we spark, catalyze and amplify them from
                within communities. Our ignition approach creates environments for
                self-discovery where community members reimagine their future,
                sharpen their tools, and unleash their power to catalyze resilience.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                Through participatory workshops, reflective exercises, and
                community dialogues, we help rural people recognize their own
                strengths and capacities. The spark of self-belief is the most
                powerful catalyst for change.
              </p>
              <blockquote className="border-l-4 border-primary-green pl-6 py-2">
                <p className="font-display italic text-xl md:text-2xl text-primary-green">
                  &ldquo;We do not impose solutions; we spark, catalyze and amplify
                  them from within communities.&rdquo;
                </p>
              </blockquote>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <Image
                src="/istockphoto-2211377472-612x612.jpg"
                alt="Community training session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-20 md:py-32 lg:py-40 bg-sage-light">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/istockphoto-2240625549-612x612.jpg"
                alt="Community network gathering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="label-text text-earth-clay mb-4">Pillar 02</p>
              <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
                Connect
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                Real change happens when rural people work together. We champion
                co-reliance groupings—Self-Help Groups (SHGs), Village Savings and
                Loan Associations (VSLAs), Farmer Associations, and Cooperatives—so
                communities harness collective strengths and overcome obstacles as one.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                Connection is not just about grouping people. It is about building
                trust, shared purpose, and mutual accountability. When rural women,
                men, and youth come together, they create safety nets, share
                knowledge, and unlock economies of scale that no individual could
                achieve alone.
              </p>
              <div className="flex flex-wrap gap-3">
                {["SHGs", "VSLAs", "Cooperatives", "Farmer Associations"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-primary-green shadow-subtle"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engage */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="label-text text-earth-clay mb-4">Pillar 03</p>
              <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
                Engage
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                We cannot unlock rural potential alone. We strategically collaborate
                with policymakers, academia, government, funders, civil society, and
                the private sector—treating rural communities as part of solutions,
                not problems.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                Engagement means advocating for policies that support rural
                development, partnering with research institutions to generate
                evidence, and working with the private sector to create market
                linkages. It means building bridges between rural communities and
                the systems that shape their lives.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Government",
                  "Academia",
                  "Funders",
                  "Civil Society",
                  "Private Sector",
                  "Communities",
                ].map((partner) => (
                  <div
                    key={partner}
                    className="px-4 py-3 bg-white rounded-lg text-center text-sm font-medium text-deep-forest shadow-subtle"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <Image
                src="/istockphoto-2231793413-612x612.jpg"
                alt="Partnership meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 lg:py-40 bg-sage-light">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">
              The Heartbeat of Our Organization
            </p>
            <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
              Our Core Values
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className={cn(
                    "bg-white rounded-2xl p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 group",
                    index === 6 && "sm:col-span-2 lg:col-span-1"
                  )}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center mb-5"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6 text-primary-green" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-deep-forest mb-3">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

