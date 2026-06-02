import { Check, Zap } from "lucide-react";

export function PricingSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold leading-tight text-white">
            Comece grátis. Escale
            <br />
            quando{" "}
            <span className="text-sky-500">
              fizer sentido.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-zinc-400">
            Teste a IA do Chat2Order sem compromisso.
            Quando estiver pronto, ative o plano por
            menos do que um almoço executivo.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* FREE */}
          <div
            className="
              rounded-[32px]
              border
              border-slate-800
              bg-slate-950/60
              p-8
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
              <h3 className="text-6xl font-bold text-white">
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

            <ul className="mt-10 space-y-5">
              <Feature text="Ativação imediata, sem cartão de crédito" />
              <Feature text="Acesso completo à IA por até 7 dias" />
              <Feature text="Estruturação ilimitada durante o teste" />
              <Feature text="Suporte por chat para configurar tudo" />
            </ul>

            <button
              className="
                mt-12
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
              p-8
              backdrop-blur
            "
          >
            <div className="absolute right-8 top-8">
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
              <h3 className="text-6xl font-bold text-sky-500">
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

            <ul className="mt-10 space-y-5">
              <Feature text="IA estruturando pedidos do WhatsApp 24/7" />
              <Feature text="Dashboard completo em tempo real" />
              <Feature text="Histórico, status e rastreio por cliente" />
              <Feature text="Exportação CSV e integração via webhook" />
              <Feature text="Atualizações contínuas sem custo extra" />
              <Feature text="Suporte prioritário por e-mail" />
            </ul>

            <button
              className="
                mt-12
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
              7 dias grátis incluídos • Cancele quando
              quiser
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-zinc-500">
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