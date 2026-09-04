import { useCallback } from "react";
import { Bot, LayoutDashboard, Rocket, Store } from "lucide-react";
import { Chapter, Reveal, SectionHeading } from "./Reveal";

const SOLUTIONS = [
  {
    icon: Bot,
    title: "Atendimento Inteligente 24/7 & Automação com IA (MCP)",
    text: "Agentes de IA conectados ao seu WhatsApp e sistemas internos: qualificam leads, respondem na hora, agendam e executam tarefas enquanto você dorme.",
    tags: ["IA Generativa", "MCP", "WhatsApp API"],
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas Web & Gestão Interna Customizada",
    text: "ERPs, CRMs e painéis desenhados em volta do seu processo — não o contrário. Tudo no seu domínio, com o seu código e a sua regra de negócio.",
    tags: ["CRM", "ERP", "Dashboards"],
  },
  {
    icon: Rocket,
    title: "Landing Pages & Sites de Alta Conversão",
    text: "Páginas rápidas, bonitas e obsessivamente otimizadas para transformar visita em pedido de orçamento. Performance de ponta e SEO técnico.",
    tags: ["CRO", "SEO", "Performance"],
  },
  {
    icon: Store,
    title: "E-commerce e Plataformas SaaS Proprietárias",
    text: "Sua loja ou plataforma de assinatura sem taxas abusivas de marketplace. Você é dono do produto, dos dados e do faturamento.",
    tags: ["Checkout próprio", "Assinaturas", "Sem lock-in"],
  },
];

export function Solutions() {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section id="solucoes" data-testid="solutions-section" className="relative border-t border-edge/60 bg-surface/20">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Chapter index="02" label="Soluções" />
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <SectionHeading
            title={
              <>
                Soluções <span className="text-gradient-electric">sob medida</span>, não de prateleira
              </>
            }
            subtitle="Cada projeto nasce do zero, desenhado para o seu fluxo de vendas e de operação. Quatro frentes, um único objetivo: fazer sua empresa rodar sozinha."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={0.1 * i}>
              <div
                data-testid={`solution-card-${i}`}
                onMouseMove={onMouseMove}
                className="group relative h-full overflow-hidden rounded-2xl border border-edge bg-surface/70 p-8 backdrop-blur-xl transition-[border-color,transform] duration-500 hover:-translate-y-1.5 hover:border-electric/40"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,99,235,0.12), transparent 45%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-electric/30 bg-electric/10">
                      <s.icon className="h-5.5 w-5.5 text-blue-400" />
                    </span>
                    <span className="font-mono text-xs text-gray-600">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-white sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-edge bg-abyss/60 px-3 py-1 font-mono text-[10px] tracking-wide text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
