import {
  Brain,
  MessageSquare,
  LayoutDashboard,
  Activity,
  Zap,
  ShieldCheck,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: <Brain size={20} className="text-cyan-400" />,
    title: "Interpretação com IA",
    description:
      "Modelos de linguagem extraem itens, quantidades, observações e intenção — mesmo em mensagens longas e bagunçadas.",
  },
  {
    icon: <MessageSquare size={20} className="text-cyan-400" />,
    title: "WhatsApp nativo",
    description:
      "Conecta direto ao seu número comercial. O cliente continua conversando do jeito que já está acostumado.",
  },
  {
    icon: <LayoutDashboard size={20} className="text-cyan-400" />,
    title: "Painel administrativo",
    description:
      "Uma central operacional limpa para cozinha, atendimento e gestão — pensada para velocidade.",
  },
  {
    icon: <Activity size={20} className="text-cyan-400" />,
    title: "Acompanhamento de pedidos",
    description:
      "Ciclo completo: recebido, confirmado, em preparo, entregue. Cada mudança fica registrada automaticamente.",
  },
  {
    icon: <Zap size={20} className="text-cyan-400" />,
    title: "Processamento em tempo real",
    description:
      "Resposta em menos de um segundo e atualizações ao vivo. Sem polling, sem refresh.",
  },
  {
    icon: <ShieldCheck size={20} className="text-cyan-400" />,
    title: "Seguro por padrão",
    description:
      "Criptografia em repouso e em trânsito. Controle de acesso por papéis e trilha de auditoria completa.",
  },
];

function FeatureCard({
  icon,
  title,
  description,
}: Feature) {
  return (
    <div
      className="
        group
        flex
        h-full
        flex-col
        gap-4

        rounded-2xl

        border
        border-white/5

        bg-white/[0.02]

        p-6

        transition-all
        duration-300

        hover:border-cyan-400/20
        hover:bg-white/[0.04]
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-lg

          bg-cyan-400/10

          ring-1
          ring-cyan-400/20
        "
      >
        {icon}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h3
          className="
            text-base
            font-semibold
            text-white

            sm:text-lg
          "
        >
          {title}
        </h3>

        <p
          className="
            text-sm
            leading-relaxed
            text-slate-400

            sm:text-base
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function Resources() {
  return (
    <section
      id="recursos"
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
          max-w-7xl

          px-4

          sm:px-6

          lg:px-8
        "
      >
        {/* Header */}
        <div
          className="
            mx-auto
            mb-12

            max-w-3xl

            text-center

            lg:mb-16
          "
        >
          <p
            className="
              mb-4

              text-xs
              font-semibold
              uppercase

              tracking-[0.2em]

              text-sky-400
            "
          >
            Recursos
          </p>

          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white

              sm:text-4xl

              lg:text-5xl
            "
          >
            Feito para operações que
            não podem esperar.
          </h2>
        </div>

        {/* Grid */}
        <div
          className="
            grid

            grid-cols-1
            gap-5

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}