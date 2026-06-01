// HowItWorks.tsx

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "O cliente envia a mensagem",
    description:
      "No seu número de WhatsApp atual. Sem app para instalar, sem mudar o comportamento dele.",
  },
  {
    number: "02",
    title: "A IA estrutura o pedido",
    description:
      "Itens, observações, endereço e total extraídos e validados em milissegundos.",
  },
  {
    number: "03",
    title: "Seu painel atualiza ao vivo",
    description:
      "Sua equipe trabalha com pedidos limpos. O status volta ao cliente automaticamente.",
  },
];

function StepCard({ number, title, description }: Step) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl
        border
        border-sky-500/10
        bg-[#0B1220]
        p-5
        transition-all
        duration-300
        hover:border-sky-500/20
        hover:shadow-[0_0_40px_rgba(14,165,233,0.08)]">
      <span className="text-sm font-semibold text-sky-400">{number}</span>
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold leading-snug text-white">{title}</h3>
        <div className="h-px w-8 bg-white/20" />
        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Como funciona
          </p>
          <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Da mensagem ao pedido estruturado em três passos.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {STEPS.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}