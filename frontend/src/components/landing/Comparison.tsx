import { Check, X } from "lucide-react";
import { Chapter, Reveal, SectionHeading } from "./Reveal";

const ROWS = [
  { label: "Mensalidade", generic: "Cara e crescente, para sempre", xavier: "Investimento único, sem abusos" },
  { label: "Personalização", generic: "Engessado, mesma cara de sempre", xavier: "100% sob medida para seu processo" },
  { label: "Propriedade", generic: "Dados e código presos ao fornecedor", xavier: "Domínio, código e dados 100% seus" },
  { label: "Suporte", generic: "Ticket genérico, fila de espera", xavier: "Direto com quem construiu, 3 meses grátis" },
  { label: "Escalabilidade", generic: "Trava quando você cresce", xavier: "Arquitetura pronta para escalar" },
];

export function Comparison() {
  return (
    <section id="diferenciais" data-testid="comparison-section" className="relative border-t border-edge/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Chapter index="03" label="Diferenciais" />
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <SectionHeading
            title={
              <>
                Sistemas prontos genéricos <span className="text-gray-500">vs.</span>{" "}
                <span className="text-gradient-electric">Xavier Tech & Dev</span>
              </>
            }
            subtitle="A conta é simples: alugar ferramenta dos outros ou ser dono da sua própria tecnologia."
          />
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-edge" data-testid="comparison-table">
            <div className="grid grid-cols-[1fr_1fr] border-b border-edge sm:grid-cols-[0.8fr_1fr_1fr]">
              <div className="hidden bg-surface/60 px-6 py-5 sm:block">
                <span className="font-mono text-[11px] uppercase tracking-widest text-gray-500">Critério</span>
              </div>
              <div className="bg-surface/60 px-6 py-5">
                <span className="text-sm font-semibold text-gray-400">Sistemas Prontos Genéricos</span>
              </div>
              <div className="border-l border-electric/30 bg-electric/10 px-6 py-5">
                <span className="text-sm font-bold text-white">Xavier Tech & Dev</span>
              </div>
            </div>
            {ROWS.map((row, i) => (
              <div
                key={row.label}
                data-testid={`comparison-row-${i}`}
                className={`grid grid-cols-[1fr_1fr] sm:grid-cols-[0.8fr_1fr_1fr] ${
                  i < ROWS.length - 1 ? "border-b border-edge/70" : ""
                } transition-colors duration-300 hover:bg-surface/40`}
              >
                <div className="col-span-2 bg-abyss/40 px-6 py-3 sm:col-span-1 sm:py-5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-gray-500">{row.label}</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 sm:py-5">
                  <X className="h-4 w-4 shrink-0 text-red-400/80" />
                  <span className="text-sm text-gray-500">{row.generic}</span>
                </div>
                <div className="flex items-center gap-3 border-l border-electric/20 bg-electric/5 px-6 py-4 sm:py-5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/15">
                    <Check className="h-3 w-3 text-mint" />
                  </span>
                  <span className="text-sm font-medium text-gray-200">{row.xavier}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
