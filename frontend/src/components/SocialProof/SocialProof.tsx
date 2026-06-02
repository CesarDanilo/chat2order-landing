// src/components/ui/SocialProof.tsx

type Metric = {
  value: string
  label: string
}

type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

type SocialProofProps = {
  metrics?: Metric[]
  testimonials?: Testimonial[]
}

const DEFAULT_METRICS: Metric[] = [
  { value: "–60%", label: "Tempo Operacional" },
  { value: "3×", label: "Pedidos Processados Mais Rápido" },
  { value: "99,4%", label: "Precisão da IA" },
  { value: "<400ms", label: "Tempo Médio de Resposta" },
]

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote: "A gente tinha duas pessoas só copiando pedido do WhatsApp. Hoje ninguém mais faz isso.",
    name: "Marina Costa",
    role: "Proprietária",
    company: "Sabor da Vila",
  },
  {
    quote: "Os erros de pedido caíram para quase zero na primeira semana. A cozinha finalmente confia na comanda.",
    name: "Rafael Lima",
    role: "Operações",
    company: "Lima Delivery",
  },
  {
    quote: "Parece que contratamos uma pessoa sênior de operações pelo preço de uma assinatura.",
    name: "Juliana Reis",
    role: "Fundadora",
    company: "Bowls & Co",
  },
]

export function SocialProof({
  metrics = DEFAULT_METRICS,
  testimonials = DEFAULT_TESTIMONIALS,
}: SocialProofProps) {
  return (
    <section className="w-full space-y-4 px-4 py-8">
      {/* Metrics */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <span className="font-mono text-4xl font-medium tracking-tight text-sky-400">
                {metric.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
          >
            <p className="text-sm leading-relaxed text-slate-300">"{t.quote}"</p>
            <div>
              <p className="text-sm font-semibold text-slate-100">{t.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                {t.role}
                <span className="mx-1 opacity-50">·</span>
                {t.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}