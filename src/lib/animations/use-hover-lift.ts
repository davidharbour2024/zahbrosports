"use client";

import { useLayoutEffect, useRef } from "react";
import { getGSAP, prefersReducedMotion } from "./gsap";

export function useHoverLift<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;
    const { gsap } = getGSAP();
    const enter = () => gsap.to(element, { y: -6, duration: .3, ease: "power2.out" });
    const leave = () => gsap.to(element, { y: 0, duration: .35, ease: "power2.out" });
    element.addEventListener("mouseenter", enter);
    element.addEventListener("mouseleave", leave);
    return () => { element.removeEventListener("mouseenter", enter); element.removeEventListener("mouseleave", leave); };
  }, []);
  return ref;
}
