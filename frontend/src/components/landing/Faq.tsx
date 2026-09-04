import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Chapter, Reveal, SectionHeading } from "./Reveal";

const FAQS = [
  {
    q: "Não entendo nada de tecnologia. Vou conseguir usar o sistema?",
    a: "Sim. Tudo é desenhado para quem vende, não para quem programa. Interfaces simples, treinamento completo da equipe incluso e suporte direto com quem construiu. Se você usa WhatsApp, usa nosso sistema.",
  },
  {
    q: "O sistema é realmente meu? E se eu quiser trocar de fornecedor?",
    a: "100% seu. Código-fonte, banco de dados e domínio ficam no seu nome. Você recebe documentação completa e pode continuar com qualquer outro desenvolvedor quando quiser — sem refém, sem multa, sem drama.",
  },
  {
    q: "A IA responde meus clientes com precisão? E se ela errar?",
    a: "A IA é treinada com as regras, produtos e tom de voz da sua empresa, e opera dentro de limites que você define. Situações fora do padrão são transferidas automaticamente para um atendente humano. Você sempre tem a palavra final.",
  },
  {
    q: "Como funciona o suporte depois do lançamento?",
    a: "Os primeiros 3 meses são gratuitos, com até 2 alterações por mês inclusas. Depois, você pode contratar um plano de suporte opcional — ou simplesmente não contratar nada. O sistema continua seu e funcionando do mesmo jeito.",
  },
  {
    q: "Como começo? Quanto tempo leva para ficar pronto?",
    a: "Começa com um diagnóstico gratuito de 30 minutos, onde mapeamos seus gargalos e desenhamos a solução. Projetos típicos levam de 4 a 10 semanas, dependendo do escopo, com entregas parciais toda semana para você acompanhar.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" data-testid="faq-section" className="relative border-t border-edge/60">
      <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Chapter index="07" label="FAQ" />
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <SectionHeading
            title={
              <>
                Perguntas que todo mundo faz <span className="text-gradient-electric">antes de automatizar</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 space-y-3.5">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={0.06 * i}>
                <div
                  data-testid={`faq-item-${i}`}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen ? "border-electric/40 bg-surface/80" : "border-edge bg-surface/40 hover:border-gray-700"
                  }`}
                >
                  <button
                    data-testid={`faq-question-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`text-sm font-semibold sm:text-base ${isOpen ? "text-white" : "text-gray-300"}`}>
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                        isOpen ? "border-electric/50 bg-electric/15 text-blue-400" : "border-edge text-gray-500"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-gray-400" data-testid={`faq-answer-${i}`}>
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
