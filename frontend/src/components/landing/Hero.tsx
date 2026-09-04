import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown, Globe, ShieldCheck, Wrench } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";
import { DashboardMock } from "./DashboardMock";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADLINE_LINES = [
  <>Pare de perder clientes</>,
  <>por demora no atendimento</>,
  <>e elimine tarefas manuais com</>,
  <>
    um sistema <span className="text-gradient-electric">100% seu.</span>
  </>,
];

const BADGES = [
  { icon: ShieldCheck, label: "Criptografia & Dados Protegidos" },
  { icon: Wrench, label: "3 Meses de Suporte Grátis" },
  { icon: Globe, label: "Domínio e Código Próprios" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mockY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="noise-overlay relative overflow-hidden pt-32 pb-20 sm:pt-40"
    >
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      <HeroCanvas />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-electric/15 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full border border-edge bg-surface/70 py-1.5 pr-4 pl-1.5 backdrop-blur"
            data-testid="hero-badge"
          >
            <span className="rounded-full bg-electric px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-widest text-white">
              NOVO
            </span>
            <span className="text-xs font-medium tracking-wide text-gray-300">
              TECNOLOGIA SOB MEDIDA PARA QUEM VENDE TODOS OS DIAS
            </span>
          </motion.div>

          <h1 className="mt-7 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" data-testid="hero-headline">
            {HEADLINE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1 leading-[1.08]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.25 + i * 0.13, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
            data-testid="hero-subheadline"
          >
            Desenvolvemos sistemas web, automações inteligentes com IA (MCP) e plataformas sob
            medida para sua empresa rodar 24/7 no seu próprio domínio — com segurança máxima e
            sem mensalidades abusivas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: EASE }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row"
          >
            <a
              href="#diagnostico"
              data-testid="hero-cta-primary"
              className="glow-electric group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-300 hover:bg-electric-deep hover:-translate-y-0.5"
            >
              Quero um Diagnóstico Gratuito
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#solucoes"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-edge bg-surface/50 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur transition-[border-color,background-color,transform] duration-300 hover:border-gray-600 hover:bg-surface hover:-translate-y-0.5"
            >
              Ver Soluções
              <ChevronDown className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            data-testid="hero-badges-row"
          >
            {BADGES.map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 text-xs text-gray-400">
                <b.icon className="h-4 w-4 text-mint" />
                {b.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: mockY }}
          initial={{ opacity: 0, y: 48, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
          className="[perspective:1200px]"
        >
          <div className="animate-float-slow">
            <DashboardMock />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
