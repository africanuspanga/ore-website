"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionReveal } from "../components/section-reveal";
import { ContactForm } from "../components/contact-form";
import { Handshake, Building2, Heart } from "lucide-react";
import { PartnerLogosGrid } from "../components/partner-logos";

const partnershipTypes = [
  {
    icon: Handshake,
    title: "Strategic Partners",
    description:
      "Long-term collaborations that shape our organizational direction, co-design programs, and invest in our shared vision for rural transformation.",
  },
  {
    icon: Building2,
    title: "Implementing Partners",
    description:
      "On-ground execution partners who bring technical expertise, local knowledge, and operational capacity to deliver programs at scale.",
  },
  {
    icon: Heart,
    title: "Funding Partners",
    description:
      "Philanthropic and institutional supporters who provide the financial backbone for our programs, research, and organizational growth.",
  },
];

const currentPartners = [
  "Global Green Grants",
  "Tanzania Rural Development",
  "East African Community Fund",
  "Climate Action Network",
  "Women's World Banking",
  "Agricultural Research Institute",
  "Local Government Authority",
  "International Development Partners",
];

export default function PartnersPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/istockphoto-2240625549-612x612.jpg"
            alt="Partnership and collaboration"
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
            Stronger Together
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
          >
            Our mission is achieved through collaboration. We engage policymakers,
            academia, government, funders, civil society, and the private sector.
          </motion.p>
        </div>
      </section>

      {/* Partnership Framework */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">How We Collaborate</p>
            <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
              Partnership Framework
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-subtle hover:shadow-elevated transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-green/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary-green" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-deep-forest mb-4">
                    {type.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    {type.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Partners Grid */}
      <section className="py-20 md:py-32 lg:py-40 bg-sage-light">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <p className="label-text text-earth-clay mb-4">Our Network</p>
            <h2 className="headline-section text-4xl md:text-5xl text-deep-forest mb-6">
              Current Partners
            </h2>
          </SectionReveal>

          <PartnerLogosGrid />
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="label-text text-earth-clay mb-4">Get Involved</p>
              <h2 className="headline-section text-3xl md:text-4xl text-deep-forest mb-6">
                Join Our Ecosystem
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                Whether you represent an organization, a funding body, or a research
                institution—we would love to explore how we can create impact
                together. Fill out the form and our partnerships team will be in
                touch.
              </p>
              <ContactForm />
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]"
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

      <Footer />
    </>
  );
}
