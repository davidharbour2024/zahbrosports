"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { getGSAP, prefersReducedMotion } from "@/lib/animations/gsap";

export function AnimationProvider({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap } = getGSAP();
    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-animate='section']", scope.current);
      sections.forEach((section) => {
        const targets = section.querySelectorAll("[data-reveal]");
        gsap.fromTo(targets, { y: 34, opacity: 0 }, {
          y: 0, opacity: 1, duration: .85, stagger: .09, ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 82%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((image) => {
        gsap.fromTo(image, { clipPath: "inset(0 100% 0 0)" }, {
          clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power3.inOut",
          scrollTrigger: { trigger: image, start: "top 85%", once: true },
        });
        const inner = image.firstElementChild;
        if (inner) gsap.fromTo(inner, { scale: 1.12 }, { scale: 1, duration: 1.35, ease: "power2.out", scrollTrigger: { trigger: image, start: "top 85%", once: true } });
      });
    }, scope);
    return () => context.revert();
  }, []);

  return <div ref={scope}>{children}</div>;
}
