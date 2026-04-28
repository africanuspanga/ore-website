"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const subjects = [
  "Partnership",
  "Funding",
  "Media",
  "General Inquiry",
  "Other",
];

export function ContactForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!data.subject) errs.subject = "Please select a subject";
    if (!data.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...formData, [name]: value }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className={cn("", className)}>
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-deep-forest mb-1.5"
              >
                Full Name <span className="text-earth-clay">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green/20",
                  errors.name && touched.name
                    ? "border-red-400"
                    : "border-charcoal/20 focus:border-primary-green"
                )}
                placeholder="Your full name"
              />
              {errors.name && touched.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-deep-forest mb-1.5"
              >
                Email <span className="text-earth-clay">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green/20",
                  errors.email && touched.email
                    ? "border-red-400"
                    : "border-charcoal/20 focus:border-primary-green"
                )}
                placeholder="your@email.com"
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-semibold text-deep-forest mb-1.5"
              >
                Organization <span className="text-charcoal/40">(Optional)</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green"
                placeholder="Your organization"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-deep-forest mb-1.5"
              >
                Subject <span className="text-earth-clay">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green/20 appearance-none",
                  errors.subject && touched.subject
                    ? "border-red-400"
                    : "border-charcoal/20 focus:border-primary-green"
                )}
              >
                <option value="">Select a subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.subject && touched.subject && (
                <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-deep-forest mb-1.5"
              >
                Message <span className="text-earth-clay">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green/20 resize-none",
                  errors.message && touched.message
                    ? "border-red-400"
                    : "border-charcoal/20 focus:border-primary-green"
                )}
                placeholder="How can we help you?"
              />
              {errors.message && touched.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-green text-white font-semibold hover:brightness-110 hover:scale-[1.01] transition-all"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-16 h-16 text-primary-green mx-auto mb-6" />
            </motion.div>
            <h3 className="font-display text-2xl font-bold text-deep-forest mb-2">
              Thank You!
            </h3>
            <p className="text-charcoal/80">
              Your message has been sent. We will get back to you soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
