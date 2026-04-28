"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  animation?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const {
    animation = "fadeUp",
    delay = 0,
    duration = 0.7,
    stagger = 0.1,
    start = "top 85%",
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.children.length > 0 ? element.children : [element];

    const animations: Record<string, gsap.TweenVars> = {
      fadeUp: { opacity: 0, y: 40 },
      fadeIn: { opacity: 0 },
      scaleIn: { opacity: 0, scale: 0.95 },
      slideLeft: { opacity: 0, x: 60 },
      slideRight: { opacity: 0, x: -60 },
    };

    gsap.set(children, animations[animation]);

    const tween = gsap.to(children, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === element) t.kill();
      });
    };
  }, [animation, delay, duration, stagger, start]);

  return ref;
}
