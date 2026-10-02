"use client";

import type { LucideIcon } from "lucide-react";
import { useHoverLift } from "@/lib/animations/use-hover-lift";

export function FeatureCard({ icon: Icon, number, title, copy }: { icon: LucideIcon; number: string; title: string; copy: string }) {
  const ref = useHoverLift<HTMLElement>();
  return <article ref={ref} data-reveal className="z-panel border border-line bg-charcoal p-7 sm:p-8"><div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center bg-primary"><Icon size={23} /></span><span className="font-display text-4xl font-bold text-white/10">{number}</span></div><h3 className="mt-8 font-display text-2xl font-bold uppercase">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-400">{copy}</p></article>;
}
