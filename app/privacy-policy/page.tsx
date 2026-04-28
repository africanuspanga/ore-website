"use client";

import { motion } from "framer-motion";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionReveal } from "../components/section-reveal";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-deep-forest">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 text-white text-center">
          <motion.h1
            className="headline-display text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Last updated: April 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-warm-sand">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionReveal>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-subtle space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Introduction
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    ORE (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                    information when you visit our website. Please read this policy carefully. 
                    If you do not agree with the terms of this Privacy Policy, please do not access 
                    the site.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Information We Collect
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-3">
                    We may collect information about you in a variety of ways. The information we 
                    may collect via the website includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>
                      <strong>Personal Data:</strong> Voluntarily provided information such as your 
                      name, email address, phone number, and organization details when you contact us 
                      or subscribe to our newsletter.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Information our servers automatically collect when 
                      you access the website, such as your IP address, browser type, operating system, 
                      access times, and the pages you have viewed.
                    </li>
                    <li>
                      <strong>Cookies:</strong> We may use cookies and similar tracking technologies 
                      to enhance your experience on our website.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    How We Use Your Information
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-3">
                    Having accurate information about you permits us to provide you with a smooth, 
                    efficient, and customized experience. Specifically, we may use information 
                    collected about you via the website to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Respond to your inquiries and communicate with you</li>
                    <li>Send you newsletters, updates, and promotional materials</li>
                    <li>Improve our website and services</li>
                    <li>Monitor and analyze usage and trends to improve your experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Disclosure of Your Information
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We do not sell, trade, rent, or otherwise share your personal information with 
                    third parties for marketing purposes. We may share information we have collected 
                    about you in certain situations, including with our service providers, partners, 
                    or when required by law.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Security of Your Information
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We use administrative, technical, and physical security measures to help protect 
                    your personal information. While we have taken reasonable steps to secure the 
                    personal information you provide to us, please be aware that despite our efforts, 
                    no security measures are perfect or impenetrable.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Your Rights
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal 
                    information, including the right to access, correct, delete, or restrict the 
                    processing of your data. To exercise these rights, please contact us at 
                    info@ore-tz.org.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Contact Us
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    If you have questions or comments about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-charcoal/80 mt-2">
                    <strong>Email:</strong> info@ore-tz.org<br />
                    <strong>Address:</strong> Rural Tanzania
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
