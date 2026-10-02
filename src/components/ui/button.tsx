import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = { children: ReactNode; href?: string; variant?: "primary" | "outline"; className?: string };

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const styles = `z-clip focus-ring group inline-flex min-h-12 items-center justify-center gap-3 px-7 text-xs font-black uppercase tracking-[.14em] transition-all duration-300 ${variant === "primary" ? "bg-primary text-white hover:bg-primary-hover" : "border border-line bg-transparent text-white hover:border-primary hover:text-primary"} ${className}`;
  if (href) return <Link className={styles} href={href}>{children}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></Link>;
  return <button className={styles} type="button">{children}</button>;
}
