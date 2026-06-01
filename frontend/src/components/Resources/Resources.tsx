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

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="group flex flex-col gap-4 rounded-xl p-8 transition-colors duration-300 hover:bg-white/[0.04]">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/20 transition-colors duration-300 group-hover:bg-cyan-400/15">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </div>
  );
}

export function Resources() {
  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Recursos
        </p>
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Feito para operações que não podem esperar.
        </h2>
      </div>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {FEATURES.slice(0, 3).map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {FEATURES.slice(3).map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}