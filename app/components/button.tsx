"use client";

import { cn } from "@/app/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-dark" | "text-link" | "pill";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  showArrow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out cursor-pointer";

  const variants = {
    primary:
      "bg-primary-green text-white px-8 py-4 rounded-lg hover:brightness-110 hover:scale-[1.02] hover:shadow-elevated",
    secondary:
      "bg-white text-deep-forest px-8 py-4 rounded-lg hover:scale-[1.02] hover:shadow-elevated",
    outline:
      "bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-deep-forest hover:scale-[1.02]",
    "outline-dark":
      "bg-transparent border-2 border-primary-green text-primary-green px-8 py-4 rounded-lg hover:bg-primary-green hover:text-white hover:scale-[1.02]",
    "text-link":
      "text-primary-green hover:underline underline-offset-4 px-0 py-0",
    pill: "bg-primary-green text-white px-6 py-3 rounded-full hover:brightness-110 hover:scale-[1.02]",
  };

  const classes = cn(baseStyles, variants[variant], className);

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(classes, "group")}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(classes, "group")}>
      {content}
    </button>
  );
}
