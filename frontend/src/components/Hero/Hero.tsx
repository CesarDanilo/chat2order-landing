import { ArrowRight, CirclePlay, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center pt-28 text-center">

      {/* Badge */}
      <div className="fade-up delay-1 mb-8 flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2">
        <span className="flex items-center justify-center gap-2 text-xs font-medium text-sky-300">
          <Sparkles size={16} />
          Automação de pedidos com IA · MVP disponível
        </span>
      </div>

      {/* Título */}
      <h1 className="fade-up delay-2 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
        Do WhatsApp para
        <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          pedidos organizados
        </span>
        em segundos com IA
      </h1>

      {/* Descrição */}
      <p className="fade-up delay-3 mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
        O Chat2Order lê, entende e estrutura cada pedido do WhatsApp em tempo real —
        sua equipe para de copiar e colar e volta a focar no que importa.
      </p>

      {/* Botões */}
      <div className="fade-up delay-4 mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="https://chat2order-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex h-10 items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-sky-400 hover:scale-105">
            Acessar produto
            <ArrowRight size={18} />
          </button>
        </a>

        <button className="flex h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-white/10">
          <CirclePlay size={18} />
          Ver como funciona
        </button>
      </div>
    </section>
  );
}