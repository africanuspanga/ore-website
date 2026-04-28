"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";
import { SectionReveal } from "../../components/section-reveal";
import { Program } from "../../lib/programs-data";

interface ProgramDetailClientProps {
  program: Program;
}

export default function ProgramDetailClient({
  program,
}: ProgramDetailClientProps) {

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-deep-forest/70 to-transparent z-[1]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/programs/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Programs
            </Link>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-green text-white text-sm font-semibold uppercase tracking-wider mb-4">
              {program.badge}
            </span>
            <h1 className="headline-display text-4xl md:text-5xl lg:text-6xl text-white mb-3">
              {program.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-display italic">
              {program.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 md:py-24 bg-warm-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 md:p-10 shadow-subtle"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-deep-forest mb-4">
                The Challenge
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                {program.challenge}
              </p>
            </motion.div>
            <motion.div
              className="bg-primary-green rounded-2xl p-8 md:p-10 shadow-subtle"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                Our Solution
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                {program.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24 bg-sage-light">
        <div className="max-w-[900px] mx-auto px-6 space-y-16">
          {/* How It Works */}
          {program.howItWorks && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                How It Works
              </h2>
              <div className="space-y-4">
                {program.howItWorks.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-white rounded-xl p-6 shadow-subtle"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-green text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-charcoal/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Activities */}
          {program.activities && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Activities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.activities.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* What We Do / What We Solve */}
          {program.whatWeDo && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                What We Do
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed bg-white rounded-xl p-6 shadow-subtle mb-6">
                {program.whatWeDo}
              </p>
              {program.whatWeSolve && (
                <>
                  <h3 className="font-display text-xl font-bold text-deep-forest mb-4">
                    What We Solve
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {program.whatWeSolve.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-5 shadow-subtle text-center"
                      >
                        <p className="text-charcoal/80 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </SectionReveal>
          )}

          {/* Why Goats */}
          {program.whyGoats && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Why Goats?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.whyGoats.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-sunset-gold flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Beneficiaries */}
          {program.beneficiaries && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Beneficiaries
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed bg-white rounded-xl p-6 shadow-subtle">
                {program.beneficiaries}
              </p>
            </SectionReveal>
          )}

          {/* Health & Safety */}
          {program.healthSafety && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Health & Safety Measures
              </h2>
              <div className="space-y-3">
                {program.healthSafety.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Repayment System */}
          {program.repaymentSystem && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Repayment System
              </h2>
              <div className="space-y-3">
                {program.repaymentSystem.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <div className="w-8 h-8 rounded-full bg-sunset-gold text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-charcoal/80">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Steps */}
          {program.steps && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Steps to Establishment
              </h2>
              <div className="space-y-3">
                {program.steps.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-green text-white flex items-center justify-center flex-shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <p className="text-charcoal/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Success Factors */}
          {program.successFactors && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Success Factors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.successFactors.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Roles */}
          {program.roles && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Roles & Responsibilities
              </h2>
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {program.roles.map((role, i) => (
                    <div
                      key={i}
                      className="p-6 border-b border-charcoal/10 last:border-b-0"
                    >
                      <h4 className="font-semibold text-deep-forest mb-2">
                        {role.stakeholder}
                      </h4>
                      <p className="text-charcoal/70 text-sm">
                        {role.responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* Bank Management */}
          {program.bankManagement && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Bank Management
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed bg-white rounded-xl p-6 shadow-subtle">
                {program.bankManagement}
              </p>
            </SectionReveal>
          )}

          {/* Key Takeaways */}
          {program.keyTakeaways && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Key Takeaways
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.keyTakeaways.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-sunset-gold flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Approach */}
          {program.approach && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Our Approach
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed bg-white rounded-xl p-6 shadow-subtle mb-6">
                {program.approach}
              </p>
              {program.approachSteps && (
                <div className="space-y-3">
                  {program.approachSteps.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 bg-white rounded-xl p-5 shadow-subtle"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-green text-white flex items-center justify-center flex-shrink-0 font-bold">
                        {i + 1}
                      </div>
                      <p className="text-charcoal/80 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </SectionReveal>
          )}

          {/* Features */}
          {program.features && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.features.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Transformations */}
          {program.transformations && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Transformations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.transformations.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow-subtle border-l-4 border-sunset-gold"
                  >
                    <p className="text-charcoal/80 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Toolkit */}
          {program.toolkit && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                MSHIKAMANO Toolkit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.toolkit.map((section, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow-subtle"
                  >
                    <h3 className="font-semibold text-deep-forest mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-charcoal/70 text-sm"
                        >
                          <span className="text-primary-green mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Gender Equality */}
          {program.genderEquality && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Gender Equality
              </h2>
              <div className="space-y-3">
                {program.genderEquality.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Key Facts */}
          {program.keyFacts && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Key Facts & Figures
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.keyFacts.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-5 shadow-subtle border-l-4 border-earth-clay"
                  >
                    <p className="text-charcoal/80 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Focus Areas */}
          {program.focus && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Our Focus
              </h2>
              <div className="space-y-6">
                {program.focus.map((area, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-subtle">
                    <h3 className="font-display text-xl font-bold text-deep-forest mb-4">
                      {area.title}
                    </h3>
                    <ul className="space-y-2">
                      {area.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-charcoal/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary-green flex-shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Why It Matters */}
          {program.whyItMatters && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Why It Matters
              </h2>
              {Array.isArray(program.whyItMatters) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.whyItMatters.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-5 shadow-subtle border-l-4 border-primary-green"
                    >
                      <p className="text-charcoal/80 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-charcoal/80 text-lg leading-relaxed bg-white rounded-xl p-6 shadow-subtle">
                  {program.whyItMatters}
                </p>
              )}
            </SectionReveal>
          )}

          {/* Implementation */}
          {program.implementation && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Implementation Strategy
              </h2>
              <div className="space-y-6">
                {program.implementation.map((section, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow-subtle"
                  >
                    <h3 className="font-display text-xl font-bold text-deep-forest mb-3">
                      {section.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Expected Outcomes */}
          {program.expectedOutcomes && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Expected Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.expectedOutcomes.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Adoption Numbers */}
          {program.adoptionNumbers && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Current Adoption Numbers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.adoptionNumbers.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-5 shadow-subtle border-l-4 border-sunset-gold"
                  >
                    <p className="text-charcoal/80 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Impact */}
          {program.impact && (
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold text-deep-forest mb-6">
                Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.impact.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white rounded-xl p-5 shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80">{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          )}

          {/* Quote */}
          {program.quote && (
            <SectionReveal>
              <blockquote className="bg-deep-forest rounded-2xl p-8 md:p-12 text-center">
                <p className="font-display italic text-2xl md:text-3xl text-white">
                  &ldquo;{program.quote}&rdquo;
                </p>
              </blockquote>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-green">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="headline-section text-3xl md:text-4xl text-white mb-6">
              Want to Support This Program?
            </h2>
            <p className="text-white/90 text-lg max-w-[600px] mx-auto mb-8">
              Partner with us to expand this initiative and create lasting change
              in rural Tanzania.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-deep-forest font-semibold hover:scale-[1.02] transition-all"
            >
              Get In Touch
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
