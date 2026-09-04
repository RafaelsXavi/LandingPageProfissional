import { ArrowRight, Check, Gift } from "lucide-react";
import { Chapter, Reveal, SectionHeading } from "./Reveal";

const FEATURES = [
  "Sistema 100% sob medida, no seu domínio",
  "Código-fonte e dados 100% seus",
  "Automação com IA (MCP) integrada",
  "Treinamento completo da equipe",
  "Documentação técnica incluída",
  "Sem mensalidade abusiva, sem lock-in",
];

export function Pricing() {
  return (
    <section id="investimento" data-testid="pricing-section" className="relative border-t border-edge/60 bg-surface/20">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Chapter index="06" label="Investimento" />
        </Reveal>
        <div className="mt-6 grid items-center gap-14 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <SectionHeading
              title={
                <>
                  Investimento transparente, <span className="text-gradient-electric">sem sustos</span>
                </>
              }
              subtitle="Você sabe exatamente o que está pagando e o que vai receber. Um projeto fechado, um valor fechado — e um ativo que é seu para sempre."
            />
            <ul className="mt-8 space-y-3.5">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/15">
                    <Check className="h-3 w-3 text-mint" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              data-testid="pricing-card"
              className="relative overflow-hidden rounded-3xl border border-electric/40 bg-gradient-to-b from-surface to-abyss p-8 shadow-[0_0_60px_rgba(37,99,235,0.15)] sm:p-10"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-electric/20 blur-3xl" />
              <div className="relative">
                <div
                  data-testid="pricing-bonus-badge"
                  className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5"
                >
                  <Gift className="h-3.5 w-3.5 text-mint" />
                  <span className="text-xs font-semibold text-mint">
                    BÔNUS: 3 Meses de Suporte Gratuito Incluso (até 2 alterações/mês)
                  </span>
                </div>

                <h3 className="mt-7 font-display text-xl font-bold text-white">
                  Projeto Completo Sob Medida
                </h3>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-sm text-gray-500">a partir de</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl" data-testid="pricing-value">
                    R$ 5.000
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-400">
                  Escopo fechado, cronograma claro e entrega garantida em contrato. Parcelamento
                  disponível.
                </p>

                <a
                  href="#diagnostico"
                  data-testid="pricing-cta-button"
                  className="glow-electric group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-electric px-7 py-4 text-sm font-semibold text-white transition-[background-color,transform] duration-300 hover:bg-electric-deep hover:-translate-y-0.5"
                >
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <p className="mt-4 text-center font-mono text-[11px] tracking-wide text-gray-500">
                  sem compromisso · resposta em até 24h
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
