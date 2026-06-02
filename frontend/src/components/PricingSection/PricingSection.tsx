import { Check, Zap } from "lucide-react";

export function PricingSection() {
  return (
    <section
      id="precos"
      className="
        relative
        overflow-hidden

        py-16
        sm:py-20
        lg:py-24

        fade-up
        delay-2
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-20

          h-[250px]
          w-[250px]

          -translate-x-1/2

          rounded-full
          bg-sky-500/20

          blur-[120px]

          sm:h-[400px]
          sm:w-[400px]

          lg:h-[500px]
          lg:w-[500px]
        "
      />

      <div
        className="
          relative
          mx-auto

          max-w-6xl

          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-white

              sm:text-4xl

              lg:text-5xl
            "
          >
            Comece grátis. Escale
            <br />
            quando{" "}
            <span className="text-sky-500">
              fizer sentido.
            </span>
          </h2>

          <p
            className="
              mt-5

              text-sm
              leading-relaxed

              text-zinc-400

              sm:text-base
            "
          >
            Teste a IA do Chat2Order sem compromisso.
            Quando estiver pronto, ative o plano por
            menos do que um almoço executivo.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-12

            grid
            gap-5

            lg:grid-cols-2

            lg:gap-6
          "
        >
          {/* FREE */}
          <div
            className="
              rounded-[32px]

              border
              border-slate-800

              bg-slate-950/60

              p-5
              sm:p-8

              backdrop-blur
            "
          >
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-emerald-500/10 p-2">
                <Zap
                  size={14}
                  className="text-emerald-400"
                />
              </div>

              <span className="text-sm text-zinc-300">
                Free Trial
              </span>
            </div>

            <div className="mt-8 flex items-end gap-2">
              <h3
                className="
                  text-4xl
                  font-bold
                  text-white

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                R$ 0
              </h3>

              <span className="mb-2 text-sm text-zinc-400">
                / até 7 dias
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-400">
              Ative em menos de 2 minutos.
              Sem cartão, sem pegadinha.
            </p>

            <ul className="mt-8 space-y-4">
              <Feature text="Ativação imediata, sem cartão de crédito" />
              <Feature text="Acesso completo à IA por até 7 dias" />
              <Feature text="Estruturação ilimitada durante o teste" />
              <Feature text="Suporte por chat para configurar tudo" />
            </ul>

            <button
              className="
                mt-10

                h-12
                w-full

                rounded-full

                border
                border-slate-800

                bg-slate-950

                text-sm
                font-medium
                text-white

                transition

                hover:border-slate-700
              "
            >
              Começar grátis →
            </button>

            <p className="mt-4 text-center text-xs text-zinc-500">
              Cancele com 1 clique. Seus dados ficam
              com você.
            </p>
          </div>

          {/* STARTER */}
          <div
            className="
              relative

              rounded-[32px]

              border
              border-sky-500/50

              bg-slate-950/70

              p-5
              sm:p-8

              backdrop-blur
            "
          >
            <div
              className="
                absolute

                right-5
                top-5

                sm:right-8
                sm:top-8
              "
            >
              <span
                className="
                  rounded-full

                  border
                  border-sky-500/30

                  bg-sky-500/10

                  px-3
                  py-1

                  text-xs
                  text-sky-400
                "
              >
                Mais escolhido
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-sky-500/10 p-2">
                <Zap
                  size={14}
                  className="text-sky-400"
                />
              </div>

              <span className="text-sm text-white">
                Starter
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-sm text-zinc-500 line-through">
                R$ 49
              </span>

              <span
                className="
                  rounded-full

                  bg-emerald-500/10

                  px-2
                  py-1

                  text-xs
                  text-emerald-400
                "
              >
                -60% lançamento
              </span>
            </div>

            <div className="mt-2 flex items-end gap-2">
              <h3
                className="
                  text-4xl
                  font-bold
                  text-sky-500

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                R$ 19
              </h3>

              <span className="mb-2 text-sm text-zinc-400">
                /mês
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-400">
              Menos de R$ 0,65 por dia para automatizar
              todos os seus pedidos.
            </p>

            <ul className="mt-8 space-y-4">
              <Feature text="IA estruturando pedidos do WhatsApp 24/7" />
              <Feature text="Dashboard completo em tempo real" />
              <Feature text="Histórico, status e rastreio por cliente" />
              <Feature text="Exportação CSV e integração via webhook" />
              <Feature text="Atualizações contínuas sem custo extra" />
              <Feature text="Suporte prioritário por e-mail" />
            </ul>

            <button
              className="
                mt-10

                h-12
                w-full

                rounded-full

                bg-sky-500

                text-sm
                font-medium
                text-white

                transition

                hover:bg-sky-400
              "
            >
              Ativar Starter →
            </button>

            <p className="mt-4 text-center text-xs text-zinc-500">
              7 dias grátis incluídos • Cancele quando quiser
            </p>
          </div>
        </div>

        <p
          className="
            mx-auto
            mt-10

            max-w-md

            text-center
            text-sm

            leading-relaxed

            text-zinc-500
          "
        >
          Precisa de volume maior, múltiplas lojas ou
          SLA dedicado?{" "}
          <span className="cursor-pointer text-white underline">
            Fale com a gente
          </span>
          .
        </p>
      </div>
    </section>
  );
}

type FeatureProps = {
  text: string;
};

function Feature({ text }: FeatureProps) {
  return (
    <li className="flex items-start gap-3">
      <div
        className="
          mt-0.5

          flex
          h-5
          w-5
          shrink-0

          items-center
          justify-center

          rounded-full

          bg-emerald-500/10
        "
      >
        <Check
          size={12}
          className="text-emerald-400"
        />
      </div>

      <span className="text-sm text-zinc-300">
        {text}
      </span>
    </li>
  );
}