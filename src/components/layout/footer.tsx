import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const columns = [
  { title: "Shop", links: ["Boxing", "MMA", "Fitness", "Apparel", "Equipment"] },
  { title: "Help", links: ["Delivery", "Returns", "Size guide", "Contact us", "FAQs"] },
  { title: "Company", links: ["Our story", "Athletes", "Journal", "Careers", "Trade accounts"] },
];

export function Footer() {
  return <footer className="border-t border-line bg-dark">
    <section className="relative overflow-hidden border-b border-line bg-primary py-12 sm:py-16">
      <div className="absolute -right-16 -top-32 h-80 w-80 rotate-12 border-[40px] border-white/10" aria-hidden="true" />
      <div className="container-shell relative grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div><p className="text-xs font-black uppercase tracking-[.2em]">Join the Zahbro corner</p><h2 className="mt-2 font-display text-4xl font-bold uppercase leading-none sm:text-5xl">Get fight-ready updates.</h2></div>
        <form className="flex flex-col gap-3 sm:flex-row" action="#"><label htmlFor="newsletter" className="sr-only">Email address</label><input id="newsletter" type="email" required placeholder="YOUR EMAIL ADDRESS" className="min-h-14 flex-1 border border-white/35 bg-black/15 px-5 text-xs font-bold tracking-wider text-white outline-none placeholder:text-white/70 focus:border-white" /><button className="z-clip min-h-14 bg-white px-8 text-xs font-black uppercase tracking-[.14em] text-ink transition-colors hover:bg-off-white" type="submit">Join the team</button></form>
      </div>
    </section>
    <div className="container-shell py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
        <div><Logo /><p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">Premium combat sports equipment engineered for the work nobody sees. Train harder. Fight smarter.</p><div className="mt-7 flex gap-2">{[Instagram, Facebook, Youtube].map((Icon, i) => <a key={i} href="#" aria-label={["Instagram", "Facebook", "YouTube"][i]} className="focus-ring grid h-10 w-10 place-items-center border border-line text-neutral-400 hover:border-primary hover:text-primary"><Icon size={17} /></a>)}</div></div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{columns.map(column => <div key={column.title}><h3 className="font-display text-lg font-bold uppercase">{column.title}</h3><ul className="mt-5 space-y-3">{column.links.map(link => <li key={link}><a href="#" className="text-sm text-neutral-400 transition-colors hover:text-primary">{link}</a></li>)}</ul></div>)}</div>
      </div>
      <div className="mt-14 grid gap-4 border-t border-line pt-8 text-xs text-neutral-500 sm:grid-cols-2 lg:grid-cols-3"><p className="flex items-center gap-2"><MapPin size={15} /> United Kingdom</p><p className="flex items-center gap-2"><Mail size={15} /> team@zahbrosports.com</p><p className="flex items-center gap-2"><Phone size={15} /> Mon–Fri, 9am–5pm</p></div>
      <div className="mt-8 flex flex-col gap-3 border-t border-line pt-7 text-[11px] uppercase tracking-wider text-neutral-600 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Zahbro Sports. All rights reserved.</p><div className="flex gap-5"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a><a href="#" className="hover:text-white">Cookies</a></div></div>
    </div>
  </footer>;
}
