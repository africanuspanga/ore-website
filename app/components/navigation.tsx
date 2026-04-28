"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "Our Story" },
  { href: "/approach/", label: "Approach" },
  { href: "/impact/", label: "Impact" },
  { href: "/programs/", label: "Programs" },
  { href: "/partners/", label: "Partners" },
  { href: "/contact/", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300",
          scrolled
            ? "bg-deep-forest/95 backdrop-blur-md shadow-subtle"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <Image
              src={scrolled ? "/ORE nav bar LOGO.png" : "/ORE footer LOGO.png"}
              alt="ORE Logo"
              width={140}
              height={48}
              className="h-10 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider transition-opacity duration-200 pb-1 border-b-2",
                  activePath === link.href
                    ? scrolled
                      ? "text-white border-sunset-gold opacity-100"
                      : "text-white border-sunset-gold opacity-100"
                    : scrolled
                    ? "text-white border-transparent opacity-70 hover:opacity-100"
                    : "text-white border-transparent opacity-80 hover:opacity-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact/"
              className={cn(
                "inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02]",
                scrolled
                  ? "bg-primary-green text-white hover:brightness-110"
                  : "bg-primary-green text-white hover:brightness-110"
              )}
            >
              Donate / Support
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative z-10 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-deep-forest flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-2xl font-medium text-white hover:text-sunset-gold transition-colors",
                      activePath === link.href && "text-sunset-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              >
                <Link
                  href="/contact/"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex items-center px-8 py-3 rounded-full bg-primary-green text-white text-lg font-semibold hover:brightness-110 transition-all"
                >
                  Donate / Support
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
