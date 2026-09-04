const ITEMS = [
  "Sistemas Web",
  "Automação com IA (MCP)",
  "Código 100% Próprio",
  "Suporte Direto",
  "Zero Mensalidades Abusivas",
  "Domínio Próprio",
  "Segurança Máxima",
  "Alta Conversão",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative overflow-hidden border-y border-edge bg-surface/40 py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-abyss to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-abyss to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-electric/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
