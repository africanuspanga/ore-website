"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, MessageCircle, Users, Camera } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/approach/", label: "Approach" },
  { href: "/impact/", label: "Impact" },
  { href: "/programs/", label: "Programs" },
  { href: "/contact/", label: "Contact" },
];

const getInvolved = [
  { href: "/partners/", label: "Partner With Us" },
  { href: "/contact/", label: "Donate" },
  { href: "/contact/", label: "Volunteer" },
  { href: "/contact/", label: "Media Kit" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Users, href: "#", label: "Facebook" },
  { icon: Camera, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-deep-forest text-white relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-sunset-gold/80 via-earth-clay/60 to-transparent" />

      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Stay Updated
              </h3>
              <p className="text-white/70 mt-1">
                Join our newsletter for impact stories and updates.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-sunset-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-primary-green text-white font-semibold hover:brightness-110 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/ORE footer LOGO.png"
              alt="ORE Logo"
              width={160}
              height={56}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Unlocking rural potential in Kagera Region since 2015. Co-creating
              solutions with communities for climate resilience and sustainable
              livelihoods.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-text text-white/90 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="label-text text-white/90 mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {getInvolved.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="label-text text-white/90 mb-4">Connect</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Kagera Region, Tanzania</p>
              <p>info@ore-tz.org</p>
              <p>+255 123 456 789</p>
            </div>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-primary-green hover:border-primary-green hover:text-white hover:scale-110 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; 2025 ORE. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
