import { Hourglass, MessageSquareOff, Table2 } from "lucide-react";
import { Chapter, Reveal, SectionHeading } from "./Reveal";

const PROBLEMS = [
  {
    icon: MessageSquareOff,
    title: "Leads perdidos no WhatsApp",
    text: "Cada minuto de demora no atendimento é um cliente fechando com o concorrente. Lead quente não espera resposta amanhã.",
    stat: "78%",
    statLabel: "dos leads compram de quem responde primeiro",
  },
  {
    icon: Table2,
    title: "Horas em planilhas manuais",
    text: "Copiar, colar, conferir, corrigir. Tarefas repetitivas drenam a energia do time que deveria estar vendendo e crescendo.",
    stat: "15h+",
    statLabel: "por semana desperdiçadas em retrabalho",
  },
  {
    icon: Hourglass,
    title: "Plataformas genéricas e caras",
    text: "Mensalidades que só sobem, recursos engessados que não seguem seu processo e seus dados presos no sistema dos outros.",
    stat: "R$ 0",
    statLabel: "de valor real quando você cancela a assinatura",
  },
];

export function Problems() {
  return (
    <section id="problemas" data-testid="problems-section" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <Chapter index="01" label="O Problema" />
      </Reveal>
      <Reveal delay={0.1} className="mt-6">
        <SectionHeading
          title={
            <>
              O custo invisível da <span className="text-gradient-electric">operação manual</span>
            </>
          }
          subtitle="Enquanto sua equipe apaga incêndios, a concorrência automatiza. Reconhece algum destes sintomas?"
        />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.title} delay={0.12 * i}>
            <div
              data-testid={`problem-card-${i}`}
              className="group relative h-full overflow-hidden rounded-2xl border border-edge bg-surface/70 p-7 transition-[border-color,transform] duration-500 hover:-translate-y-1.5 hover:border-red-500/30"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-red-500/5 blur-2xl transition-opacity duration-500 group-hover:bg-red-500/10" />
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-edge bg-abyss">
                <p.icon className="h-5 w-5 text-red-400" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.text}</p>
              <div className="mt-6 border-t border-edge pt-4">
                <p className="font-display text-2xl font-bold text-red-400">{p.stat}</p>
                <p className="mt-1 text-xs text-gray-500">{p.statLabel}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
