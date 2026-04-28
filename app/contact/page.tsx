"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone, Globe, MessageCircle, Users, Camera } from "lucide-react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionReveal } from "../components/section-reveal";
import { ContactForm } from "../components/contact-form";

const socialLinks = [
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Users, href: "#", label: "Facebook" },
  { icon: Camera, href: "#", label: "Instagram" },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/beautiful-shot-field-with-clear-blue-sky.jpg"
            alt="Tanzanian field with clear blue sky"
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
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
          >
            Whether you want to partner, fund, research, or simply learn more—we&apos;re
            here.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 md:py-32 lg:py-40 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="headline-section text-3xl md:text-4xl text-deep-forest mb-2">
                Send a Message
              </h2>
              <p className="text-charcoal/70 mb-8">
                We typically respond within 2 business days.
              </p>
              <ContactForm />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h2 className="headline-section text-3xl md:text-4xl text-deep-forest mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-deep-forest">Location</p>
                    <p className="text-charcoal/70">Rural Tanzania</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-deep-forest">Email</p>
                    <p className="text-charcoal/70">info@ore-tz.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-deep-forest">Phone</p>
                    <p className="text-charcoal/70">+255 123 456 789</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mb-10">
                <p className="font-semibold text-deep-forest mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full border-2 border-primary-green/30 text-primary-green flex items-center justify-center hover:bg-primary-green hover:text-white hover:border-primary-green transition-all hover:scale-110"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden aspect-video bg-sage-light relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8127032.570808566!2d30.09976505!3d-6.35526885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184b51314869cc13%3A0xa57195f81d5e0c50!2sTanzania!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "hue-rotate(120deg) saturate(0.7)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ORE Location - Tanzania"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
