// TheSolution.tsx

import { Check } from "lucide-react";

const BENEFITS = [
  "A IA interpreta cada mensagem em itens, quantidades, observações e dados do cliente",
  "Pedidos estruturados aparecem no painel central em tempo real",
  "Sua operação trabalha em uma única fonte de verdade — sem mais prints",
  "Horas de trabalho manual eliminadas e erros próximos de zero",
];

export function TheSolution() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-20">

        {/* Texto */}
        <div className="flex w-full max-w-xl flex-col items-start">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            A Solução
          </h2>

          <h3 className="text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            Uma camada de IA entre seu cliente e sua operação.
          </h3>

          <p className="mb-8 mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
            O Chat2Order se conecta ao seu número do WhatsApp e transforma o
            caos das conversas em pedidos prontos para serem executados.
          </p>

          <div className="flex flex-col gap-4">
            {BENEFITS.map((text) => (
              <div key={text} className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/20">
                  <Check size={12} className="text-sky-400" />
                </div>
                <span className="text-base text-zinc-300">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="relative w-full lg:w-auto">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-sky-500/20 blur-3xl" />
          <div className="
            flex
            h-[300px]
            w-full
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-zinc-900/90
            shadow-[0_0_80px_rgba(14,165,233,0.2)]
            backdrop-blur-xl
            lg:h-[350px]
            lg:w-[550px]
          " />
        </div>

      </div>
    </section>
  );
}