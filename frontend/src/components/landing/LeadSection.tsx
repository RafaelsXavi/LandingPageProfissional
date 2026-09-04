import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2, Lock, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { apiPost } from "@/lib/api";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

interface Lead {
  id: string;
  nome: string;
  whatsapp: string;
  empresa?: string | null;
  desafio?: string | null;
  created_at: string;
}

export function LeadSection() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [desafio, setDesafio] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiPost<Lead>("/leads", { nome, whatsapp, empresa: empresa || null, desafio: desafio || null });
      setDone(true);
      toast.success("Diagnóstico solicitado com sucesso!");
    } catch {
      toast.error("Não foi possível enviar. Tente pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-edge bg-abyss/70 px-4 py-3.5 text-sm text-white placeholder:text-gray-600 outline-none transition-[border-color,box-shadow] duration-300 focus:border-electric/60 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]";

  return (
    <>
      <section id="diagnostico" data-testid="final-cta-section" className="relative overflow-hidden border-t border-edge/60">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-blue-400">Última chamada</p>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Sua concorrência já está automatizando.{" "}
              <span className="text-gradient-electric">E você?</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-400">
              Agende um diagnóstico gratuito de 30 minutos e descubra exatamente onde sua operação
              está vazando dinheiro — e como estancar com tecnologia própria.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-cta-whatsapp-button"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-mint/40 bg-mint/10 px-7 py-3.5 text-sm font-semibold text-mint transition-[background-color,transform] duration-300 hover:bg-mint/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              Prefere chamar direto no WhatsApp?
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative rounded-3xl border border-edge bg-surface/80 p-7 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-9" data-testid="lead-form-card">
              {done ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                  data-testid="lead-form-success"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-mint/40 bg-mint/10">
                    <CheckCircle2 className="h-8 w-8 text-mint" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">Pedido recebido!</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
                    Recebemos seu pedido de diagnóstico. Nossa equipe entra em contato pelo seu
                    WhatsApp em até 24h úteis.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" data-testid="lead-form">
                  <h3 className="font-display text-lg font-bold text-white">Agende seu Diagnóstico Gratuito</h3>
                  <p className="text-xs text-gray-500">30 minutos, sem compromisso, com plano de ação incluso.</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome *"
                      data-testid="lead-input-nome"
                      className={inputClass}
                    />
                    <input
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Seu WhatsApp *"
                      data-testid="lead-input-whatsapp"
                      className={inputClass}
                    />
                  </div>
                  <input
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Nome da empresa"
                    data-testid="lead-input-empresa"
                    className={inputClass}
                  />
                  <textarea
                    value={desafio}
                    onChange={(e) => setDesafio(e.target.value)}
                    placeholder="Qual o maior gargalo da sua operação hoje?"
                    rows={3}
                    data-testid="lead-input-desafio"
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="lead-form-submit-button"
                    className="glow-electric group flex w-full items-center justify-center gap-2 rounded-full bg-electric px-7 py-4 text-sm font-semibold text-white transition-[background-color,transform,opacity] duration-300 hover:bg-electric-deep hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Quero meu Diagnóstico Gratuito
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="flex items-center justify-center gap-1.5 text-center font-mono text-[10px] tracking-wide text-gray-600">
                    <Lock className="h-3 w-3" />
                    seus dados estão protegidos e nunca serão compartilhados
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <footer data-testid="footer" className="border-t border-edge/60 bg-abyss">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="max-w-sm">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-mint opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
                </span>
                <span className="font-display text-base font-bold text-white">
                  Xavier <span className="text-blue-400">Tech & Dev</span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Software sob medida, automação com IA e plataformas proprietárias para empresas que
                vendem todos os dias.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-gray-600">Navegação</span>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-gray-600">Confiança</span>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <ShieldCheck className="h-4 w-4 text-mint" /> Criptografia ponta-a-ponta
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Lock className="h-4 w-4 text-mint" /> Conforme LGPD
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Zap className="h-4 w-4 text-mint" /> 99,9% de uptime
              </span>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-edge/60 pt-7 sm:flex-row">
            <p className="text-xs text-gray-600" data-testid="footer-copyright">
              © 2026 Xavier Tech & Dev. Todos os direitos reservados.
            </p>
            <p className="font-mono text-[11px] tracking-wide text-gray-600">
              feito com código próprio — como tudo que entregamos
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
