"use client";

import { motion } from "framer-motion";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionReveal } from "../components/section-reveal";

export default function TermsOfServicePage() {
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
            Terms of Service
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
                    Agreement to Terms
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    These Terms of Service constitute a legally binding agreement made between you 
                    and ORE (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), concerning your access to and use of 
                    our website. By accessing or using the website, you agree that you have read, 
                    understood, and agree to be bound by these Terms. If you do not agree with 
                    these Terms, you are prohibited from using the website.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Intellectual Property Rights
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    Unless otherwise indicated, the website and all content, features, and 
                    functionality thereof—including but not limited to information, software, 
                    text, displays, images, video, audio, and the design, selection, and 
                    arrangement thereof—are owned by ORE, its licensors, or other providers 
                    and are protected by copyright, trademark, patent, trade secret, and other 
                    intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    User Representations
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-3">
                    By using the website, you represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>You have the legal capacity and agree to comply with these Terms</li>
                    <li>You are not a minor in the jurisdiction in which you reside</li>
                    <li>You will not access the website through automated or non-human means</li>
                    <li>You will not use the website for any illegal or unauthorized purpose</li>
                    <li>Your use of the website will not violate any applicable law or regulation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Prohibited Activities
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-3">
                    You may not access or use the website for any purpose other than that for 
                    which we make the website available. Prohibited activities include, but are 
                    not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Systematically retrieving data or content to create a collection, 
                      compilation, database, or directory without written permission from us</li>
                    <li>Making any unauthorized use of the website, including collecting 
                      usernames and/or email addresses by electronic or other means</li>
                    <li>Engaging in unauthorized framing of or linking to the website</li>
                    <li>Attempting to impersonate another user or person</li>
                    <li>Using the website in a manner inconsistent with any applicable laws 
                      or regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Limitation of Liability
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    In no event shall ORE, its directors, employees, or agents be liable to 
                    you for any direct, indirect, incidental, special, consequential, or punitive 
                    damages, including but not limited to, loss of profits, data, use, goodwill, 
                    or other intangible losses, resulting from your access to or use of or 
                    inability to access or use the website.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Disclaimer
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    The website is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. You agree 
                    that your use of the website and our services will be at your sole risk. 
                    To the fullest extent permitted by law, we disclaim all warranties, express 
                    or implied, in connection with the website and your use thereof.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Governing Law
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    These Terms shall be governed by and defined following the laws of Tanzania. 
                    ORE and yourself irrevocably consent that the courts of Tanzania shall have 
                    exclusive jurisdiction to resolve any dispute which may arise in connection 
                    with these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Changes to These Terms
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these 
                    Terms at any time. If a revision is material, we will provide at least 
                    30 days&apos; notice prior to any new terms taking effect. What constitutes 
                    a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-deep-forest mb-3">
                    Contact Us
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    If you have any questions about these Terms, please contact us at:
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
