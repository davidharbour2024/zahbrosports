"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const categories = [
  { name: "Boxing", items: ["Gloves", "Protection", "Punch Bags", "Footwear"] },
  { name: "MMA", items: ["MMA Gloves", "Shin Guards", "Fight Shorts", "Training Gear"] },
  { name: "Fitness", items: ["Strength", "Conditioning", "Accessories", "Recovery"] },
  { name: "Apparel", items: ["T-Shirts", "Hoodies", "Shorts", "Tracksuits"] },
  { name: "Equipment", items: ["Gym Equipment", "Coaching", "Storage", "Flooring"] },
];

const IconLink = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <a href="#" aria-label={label} className="focus-ring relative grid h-10 w-10 place-items-center text-white transition-colors hover:text-primary">{children}</a>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 100);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className={`overflow-hidden bg-primary transition-all duration-300 ${condensed ? "h-0" : "h-8"}`}>
        <div className="container-shell flex h-8 items-center justify-center text-[10px] font-bold uppercase tracking-[.14em] sm:justify-between">
          <span>Free UK delivery on orders over £75</span>
          <span className="hidden sm:block">Built for fighters. Proven in training.</span>
        </div>
      </div>

      <div className={`border-b border-line transition-all duration-300 ${condensed ? "py-2" : "py-4"}`}>
        <div className="container-shell flex items-center justify-between">
          <Logo compact={condensed} />
          <div className="flex items-center gap-1">
            <div className="hidden items-center gap-1 lg:flex">
              <IconLink label="Your account"><UserRound size={20} strokeWidth={1.7} /></IconLink>
              <IconLink label="Wishlist"><Heart size={20} strokeWidth={1.7} /><span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-primary text-[8px] font-bold">0</span></IconLink>
              <IconLink label="Shopping bag"><ShoppingBag size={20} strokeWidth={1.7} /><span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-primary text-[8px] font-bold">0</span></IconLink>
            </div>
            <button className="focus-ring grid h-11 w-11 place-items-center lg:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu /></button>
          </div>
        </div>
      </div>

      <div className={`hidden overflow-hidden border-b border-line transition-all duration-300 lg:block ${condensed ? "h-0 border-transparent" : "h-[68px]"}`}>
        <form role="search" className="container-shell flex h-[68px] items-center" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <div className="flex h-11 w-full items-center border border-line bg-charcoal transition-colors focus-within:border-primary">
            <Search className="mx-4 text-muted" size={18} />
            <input id="site-search" type="search" placeholder="Search gloves, fightwear, equipment..." className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted" />
            <button className="z-clip h-full bg-primary px-8 text-[11px] font-black uppercase tracking-[.15em] hover:bg-primary-hover" type="submit">Search</button>
          </div>
        </form>
      </div>

      <nav className="hidden h-12 lg:block" aria-label="Primary navigation">
        <div className="container-shell flex h-full items-center justify-between">
          <div className="flex h-full items-center gap-8">
            {categories.map((category) => (
              <div className="group relative flex h-full items-center" key={category.name}>
                <button className="focus-ring flex h-full items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[.12em] transition-colors group-hover:text-primary" aria-haspopup="true">{category.name}<ChevronDown size={13} /></button>
                <div className="invisible absolute left-0 top-full w-56 translate-y-2 border-t-2 border-primary bg-charcoal p-3 opacity-0 shadow-2xl transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {category.items.map((item) => <a href="#" key={item} className="focus-ring block border-b border-line px-3 py-3 text-xs font-bold uppercase tracking-wider last:border-0 hover:bg-dark hover:text-primary">{item}</a>)}
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="focus-ring text-[11px] font-black uppercase tracking-[.15em] text-primary hover:text-accent">New arrivals</a>
          <a href="#" className="z-clip bg-primary px-5 py-2 text-[11px] font-black uppercase tracking-[.15em] hover:bg-primary-hover">Sale</a>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <button aria-label="Close menu" onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/75 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
        <aside role="dialog" aria-modal="true" aria-label="Mobile navigation" className={`absolute right-0 top-0 flex h-dvh w-[min(90vw,25rem)] flex-col bg-dark transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-line p-5"><Logo compact /><button className="focus-ring grid h-10 w-10 place-items-center" aria-label="Close menu" onClick={() => setOpen(false)}><X /></button></div>
          <form className="border-b border-line p-4" role="search" onSubmit={(e) => e.preventDefault()}><label className="flex h-12 items-center gap-3 bg-charcoal px-4"><Search size={18} className="text-muted" /><span className="sr-only">Search products</span><input type="search" placeholder="Search products" className="min-w-0 flex-1 bg-transparent text-sm outline-none" /></label></form>
          <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile navigation">{categories.map((category) => <details key={category.name} className="border-b border-line"><summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-black uppercase tracking-wider">{category.name}<ChevronDown size={16} /></summary><div className="pb-3">{category.items.map(item => <a className="block px-3 py-2 text-sm text-neutral-400 hover:text-primary" href="#" key={item}>{item}</a>)}</div></details>)}</nav>
          <div className="grid grid-cols-3 border-t border-line py-3"><IconLink label="Your account"><UserRound /></IconLink><IconLink label="Wishlist"><Heart /></IconLink><IconLink label="Shopping bag"><ShoppingBag /></IconLink></div>
        </aside>
      </div>
    </header>
  );
}
