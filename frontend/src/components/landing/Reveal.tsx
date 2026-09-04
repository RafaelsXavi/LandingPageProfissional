import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Chapter({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3" data-testid={`chapter-${index}`}>
      <span className="font-mono text-xs tracking-widest text-blue-400">{index}</span>
      <span className="h-px w-10 bg-gradient-to-r from-blue-500/60 to-transparent" />
      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-gray-500">
        {label}
      </span>
    </div>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
