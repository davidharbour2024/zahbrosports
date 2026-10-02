import { ArrowDown, Dumbbell, ShieldCheck, Swords, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/preview/feature-card";

export default function Home() {
  return <main>
    <section className="relative flex min-h-[72vh] items-center overflow-hidden border-b border-line py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(214,29,37,.24),transparent_30%),linear-gradient(115deg,#050505_45%,#171719_45%)]" />
      <div className="absolute right-[-7rem] top-[-10rem] h-[38rem] w-[38rem] rotate-[20deg] border-[5rem] border-primary/10" aria-hidden="true" />
      <div className="absolute bottom-0 right-[12%] h-[75%] w-[32%] skew-x-[-12deg] border-l border-primary/40 bg-gradient-to-t from-primary/15 to-transparent" aria-hidden="true" />
      <div className="container-shell relative py-8">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">Phase 01 / Foundation</p>
          <h1 className="display-title text-[clamp(4rem,10vw,9rem)]">Built to<br/><span className="text-primary">go the distance.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">A new digital corner for athletes who refuse to settle. The Zahbro Sports experience is being rebuilt from the ground up.</p>
          <div className="mt-10 flex flex-wrap gap-3"><Button href="#foundation">Explore foundation</Button><Button href="#newsletter" variant="outline">Stay informed</Button></div>
        </div>
      </div>
      <a href="#foundation" aria-label="Scroll to foundation" className="focus-ring absolute bottom-7 right-8 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-neutral-500 sm:flex">Scroll to explore <ArrowDown size={16} className="text-primary" /></a>
    </section>

    <section id="foundation" data-animate="section" className="bg-ink py-24 sm:py-32">
      <div className="container-shell"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div data-reveal><p className="eyebrow">The new standard</p><h2 className="display-title mt-4 text-5xl sm:text-7xl">Every detail.<br/>Fight ready.</h2></div><p data-reveal className="max-w-2xl text-base leading-8 text-neutral-400 lg:justify-self-end">Our Phase 1 system combines a sharp new commerce foundation, responsive navigation, accessible interaction and a motion language designed to scale into an immersive shopping experience.</p></div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4"><FeatureCard icon={ShieldCheck} number="01" title="Performance" copy="A production-ready, strictly typed foundation engineered for speed and stability."/><FeatureCard icon={Zap} number="02" title="Motion" copy="Purposeful transitions and reveals, with reduced-motion preferences respected."/><FeatureCard icon={Swords} number="03" title="Identity" copy="Strong Z geometry, high contrast and a focused combat-sports visual system."/><FeatureCard icon={Dumbbell} number="04" title="Built to scale" copy="Reusable components ready for the complete commerce experience ahead."/></div></div>
    </section>

    <section data-animate="section" className="border-y border-line bg-off-white py-24 text-ink sm:py-32"><div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center"><div data-image-reveal className="z-panel relative min-h-[26rem] overflow-hidden bg-dark"><div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_25%,#d61d25_25%_39%,#111_39%_57%,#303034_57%_64%,#050505_64%)]"/><div className="absolute bottom-8 left-8 font-display text-7xl font-bold text-white/10 sm:text-9xl">Z</div></div><div><p data-reveal className="eyebrow">Designed with intent</p><h2 data-reveal className="display-title mt-4 text-5xl sm:text-7xl">Focused.<br/>Fast. Fearless.</h2><p data-reveal className="mt-7 max-w-xl text-base leading-8 text-muted">From clipped controls to layered movement, every element is shaped by the energy of training and the discipline of competition.</p><div data-reveal className="mt-9"><Button href="#newsletter">Follow the build</Button></div></div></div></section>
    <div id="newsletter" />
  </main>;
}
