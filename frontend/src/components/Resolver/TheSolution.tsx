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
    <section
      className="
        w-full
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-12
          px-4
          sm:px-6
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-20
          lg:px-8
        "
      >
        {/* Texto */}
        <div
          className="
            flex
            w-full
            max-w-xl
            flex-col
            items-center
            text-center

            lg:items-start
            lg:text-left
          "
        >
          <h2
            className="
              mb-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-sky-500
            "
          >
            A Solução
          </h2>

          <h3
            className="
              text-3xl
              font-medium
              leading-tight
              tracking-tight
              text-white

              sm:text-4xl
              lg:text-5xl
            "
          >
            Uma camada de IA entre
            seu cliente e sua operação.
          </h3>

          <p
            className="
              mb-8
              mt-4
              text-sm
              leading-relaxed
              text-zinc-400

              sm:text-base
              lg:text-lg
            "
          >
            O Chat2Order se conecta ao seu número do WhatsApp
            e transforma o caos das conversas em pedidos
            prontos para serem executados.
          </p>

          <div
            className="
              flex
              w-full
              flex-col
              gap-4
            "
          >
            {BENEFITS.map((text) => (
              <div
                key={text}
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <div
                  className="
                    mt-1
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-sky-500/30
                    bg-sky-500/20
                  "
                >
                  <Check
                    size={12}
                    className="text-sky-400"
                  />
                </div>

                <span
                  className="
                    text-left
                    text-sm
                    leading-relaxed
                    text-zinc-300

                    sm:text-base
                  "
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div
          className="
            relative
            w-full
          "
        >
          <div
            className="
              absolute
              inset-0
              -z-10
              rounded-3xl
              bg-sky-500/20
              blur-3xl
            "
          />

          <div
            className="
              flex
              w-full
              items-center
              justify-center

              rounded-2xl
              border
              border-white/10
              bg-zinc-900/90

              backdrop-blur-xl

              shadow-[0_0_80px_rgba(14,165,233,0.2)]

              aspect-[16/10]

              lg:max-w-[550px]
              lg:ml-auto
            "
          >
            <img className="rounded-3xl" src="../public/banner3.png" alt="banner"  />
          </div>
        </div>
      </div>
    </section>
  );
}