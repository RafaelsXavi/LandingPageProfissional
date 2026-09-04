import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Problems } from "@/components/landing/Problems";
import { Solutions } from "@/components/landing/Solutions";
import { Comparison } from "@/components/landing/Comparison";
import { Security } from "@/components/landing/Security";
import { Steps } from "@/components/landing/Steps";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { LeadSection } from "@/components/landing/LeadSection";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-svh bg-abyss text-white" data-testid="landing-page">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problems />
        <Solutions />
        <Comparison />
        <Security />
        <Steps />
        <Pricing />
        <Faq />
        <LeadSection />
      </main>
      <WhatsAppFloat />
      <Toaster theme="dark" position="bottom-center" richColors />
    </div>
  );
}
