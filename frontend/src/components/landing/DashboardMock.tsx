import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Bot, Check, CheckCheck } from "lucide-react";

function useCounter(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

const BARS = [38, 62, 46, 78, 55, 88, 68, 96, 58, 82, 70, 100];

const CHAT: { from: "user" | "ai"; text: string }[] = [
  { from: "user", text: "Oi! Vocês ainda têm horário disponível amanhã?" },
  { from: "ai", text: "Olá! Temos horários às 10h, 14h e 16h. Posso reservar um para você?" },
  { from: "user", text: "14h, por favor!" },
  { from: "ai", text: "Perfeito! Agendado para amanhã às 14h. Envio a confirmação por aqui. ✅" },
];

export function DashboardMock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const leads = useCounter(1284, inView);
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (chatStep >= CHAT.length) return;
    const t = setTimeout(() => setChatStep((s) => s + 1), chatStep === 0 ? 900 : 1700);
    return () => clearTimeout(t);
  }, [inView, chatStep]);

  return (
    <div
      ref={ref}
      data-testid="hero-dashboard-mock"
      className="relative overflow-hidden rounded-2xl border border-edge bg-surface/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
    >
      <div className="flex items-center justify-between border-b border-edge px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="font-mono text-[11px] tracking-wide text-gray-500">
            painel.suaempresa.com.br
          </span>
        </div>
        <span
          data-testid="ia-ativa-badge"
          className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-[11px] font-semibold text-mint"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-ring" />
          IA Ativa 24/7
        </span>
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-edge bg-abyss/60 p-3">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">Leads atendidos</p>
              <p className="mt-1 font-display text-xl font-bold text-white" data-testid="metric-leads">
                {leads.toLocaleString("pt-BR")}
              </p>
            </div>
            <div className="rounded-xl border border-edge bg-abyss/60 p-3">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">Resposta média</p>
              <p className="mt-1 font-display text-xl font-bold text-mint" data-testid="metric-response">3s</p>
            </div>
            <div className="rounded-xl border border-edge bg-abyss/60 p-3">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">Conversão</p>
              <p className="mt-1 font-display text-xl font-bold text-blue-400" data-testid="metric-conversion">+37%</p>
            </div>
          </div>

          <div className="rounded-xl border border-edge bg-abyss/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">Vendas automatizadas / mês</p>
              <span className="font-mono text-[10px] text-mint">ao vivo</span>
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {BARS.map((h, i) => (
                <motion.div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === BARS.length - 1 ? "bg-mint" : "bg-electric/70"}`}
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${h}%` } : {}}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-xl border border-edge bg-abyss/60">
          <div className="flex items-center gap-2 border-b border-edge bg-mint/10 px-3.5 py-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint/20">
              <Bot className="h-3.5 w-3.5 text-mint" />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-white">WhatsApp Bot</p>
              <p className="text-[9px] text-mint">respondendo automaticamente</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-3" data-testid="whatsapp-ai-widget">
            {CHAT.slice(0, chatStep).map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-[11px] leading-snug ${
                  m.from === "ai"
                    ? "self-start rounded-tl-sm border border-edge bg-surface text-gray-200"
                    : "self-end rounded-tr-sm bg-electric/90 text-white"
                }`}
              >
                {m.text}
                {m.from === "user" && (
                  <CheckCheck className="ml-1 inline h-3 w-3 text-blue-200" />
                )}
              </motion.div>
            ))}
            {chatStep > 0 && chatStep < CHAT.length && CHAT[chatStep].from === "ai" && (
              <div className="flex gap-1 self-start rounded-xl rounded-tl-sm border border-edge bg-surface px-3 py-2.5">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-gray-500"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="border-t border-edge px-3 py-2">
            <p className="flex items-center gap-1.5 font-mono text-[9px] text-gray-500">
              <Check className="h-3 w-3 text-mint" />
              criptografia ponta-a-ponta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
