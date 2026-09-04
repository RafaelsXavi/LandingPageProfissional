import { Chapter, Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Diagnóstico Gratuito",
    text: "Conversa de 30 minutos para mapear seus gargalos, processos e oportunidades de automação. Você sai com um plano — mesmo que não feche com a gente.",
  },
  {
    num: "02",
    title: "Desenvolvimento Ágil",
    text: "Sprints semanais com entregas visíveis. Você acompanha o progresso em tempo real e ajusta o rumo antes, não depois.",
  },
  {
    num: "03",
    title: "Implantação e Treinamento",
    text: "Sistema no ar no seu domínio, equipe treinada e documentação completa. Transição sem trauma e sem parada operacional.",
  },
  {
    num: "04",
    title: "Suporte Ativo",
    text: "3 meses de suporte gratuito com até 2 alterações por mês. Depois disso, planos opcionais — sem obrigação, sem letra miúda.",
  },
];

export function Steps() {
  return (
    <section id="como-funciona" data-testid="steps-section" className="relative border-t border-edge/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Chapter index="05" label="Como Funciona" />
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <SectionHeading
            title={
              <>
                Do caos manual à operação <span className="text-gradient-electric">no piloto automático</span>
              </>
            }
            subtitle="Processo transparente em 4 etapas. Você sabe exatamente onde está e o que vem a seguir, em cada momento."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="pointer-events-none absolute top-6 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-electric/50 via-mint/40 to-electric/50 md:block" />
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={0.12 * i}>
              <div data-testid={`step-card-${i}`} className="group relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-electric/40 bg-abyss font-mono text-sm font-bold text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.25)] transition-[box-shadow,border-color] duration-500 group-hover:border-mint/60 group-hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] group-hover:text-mint">
                  {step.num}
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-400">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
