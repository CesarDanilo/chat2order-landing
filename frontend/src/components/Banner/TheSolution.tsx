import { Check } from "lucide-react";

export function TheSolution() {
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-20 px-8">

        {/* Texto */}
        <div className="flex max-w-xl flex-col items-start fade-up delay-2">
          <h2 className="mb-4 text-base font-medium text-sky-600">
            A SOLUÇÃO
          </h2>

          <h3 className="text-5xl font-medium leading-tight tracking-tight text-white">
            Uma camada de IA entre seu cliente e sua operação.
          </h3>

          <p className="mt-4 mb-8 text-lg text-zinc-400">
            O Chat2Order se conecta ao seu número do WhatsApp e transforma o caos
            das conversas em pedidos prontos para serem executados.
          </p>

          <div className="flex flex-col gap-4">

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/20">
                <Check size={12} className="text-sky-400" />
              </div>

              <span className="text-base text-zinc-300">
                A IA interpreta cada mensagem em itens, quantidades,
                observações e dados do cliente
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/20">
                <Check size={12} className="text-sky-400" />
              </div>

              <span className="text-base text-zinc-300">
                Pedidos estruturados aparecem no painel central em tempo real
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/20">
                <Check size={12} className="text-sky-400" />
              </div>

              <span className="text-base text-zinc-300">
                Sua operação trabalha em uma única fonte de verdade — sem mais
                prints
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/20">
                <Check size={12} className="text-sky-400" />
              </div>

              <span className="text-base text-zinc-300">
                Horas de trabalho manual eliminadas e erros próximos de zero
              </span>
            </div>

          </div>
        </div>

        <div className="relative fade-up delay-2">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-sky-500/20 blur-3xl" />

          <div
            className="
              flex
              h-[350px]
              w-[550px]
              rounded-2xl
                border
                border-white/10
                bg-zinc-900/90
                backdrop-blur-xl
                shadow-[0_0_80px_rgba(14,165,233,0.2)]
                items-center
                justify-center
                fade-up delay-2 
            "
          >
          </div>
        </div>

      </div>
    </section>
  );
}