import { Activity, KeyRound, Lock, ShieldCheck } from "lucide-react";
import { Chapter, Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
  {
    icon: Lock,
    title: "Criptografia ponta-a-ponta",
    text: "Dados criptografados em trânsito e em repouso. Informação da sua empresa e dos seus clientes sempre protegida.",
  },
  {
    icon: KeyRound,
    title: "Autenticação segura",
    text: "Login com padrões modernos de segurança, controle de acesso por perfil e proteção contra força bruta.",
  },
  {
    icon: Activity,
    title: "99,9% de uptime",
    text: "Infraestrutura monitorada 24/7 com alertas proativos. Seu sistema vende enquanto você dorme — sem cair.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade com LGPD",
    text: "Arquitetura pensada para privacidade desde a primeira linha de código. Seus dados, suas regras, sua lei.",
  },
];

export function Security() {
  return (
    <section id="seguranca" data-testid="security-section" className="relative border-t border-edge/60 bg-surface/20">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Chapter index="04" label="Segurança & Confiança" />
        </Reveal>
        <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal delay={0.1}>
            <SectionHeading
              title={
                <>
                  Segurança de nível bancário, <span className="text-gradient-electric">de verdade</span>
                </>
              }
              subtitle="Não é selo decorativo: é arquitetura. Cada camada do seu sistema é construída com proteção como requisito, não como extra."
            />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-mint/30 bg-mint/10 px-5 py-2.5" data-testid="uptime-badge">
              <span className="h-2 w-2 rounded-full bg-mint animate-pulse-ring" />
              <span className="font-mono text-xs font-semibold tracking-wider text-mint">
                TODOS OS SISTEMAS OPERACIONAIS
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={0.1 * i}>
              <div
                data-testid={`security-card-${i}`}
                className="group h-full rounded-2xl border border-edge bg-abyss/60 p-6 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-mint/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-mint/25 bg-mint/10">
                  <item.icon className="h-5 w-5 text-mint" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
