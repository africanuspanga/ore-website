"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { Button } from "./components/button";

export default function NotFoundPage() {
  return (
    <>
      <Navigation />
      <section className="min-h-[70vh] flex items-center justify-center bg-warm-sand">
        <div className="text-center px-6">
          <motion.h1
            className="font-display text-[120px] md:text-[180px] font-bold text-deep-forest/10 leading-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            404
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="headline-section text-3xl md:text-4xl text-deep-forest mb-4 -mt-8">
              Page Not Found
            </h2>
            <p className="text-charcoal/70 text-lg max-w-[500px] mx-auto mb-8">
              The page you are looking for might have been moved, deleted, or never existed.
            </p>
            <Button variant="primary" href="/">
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
