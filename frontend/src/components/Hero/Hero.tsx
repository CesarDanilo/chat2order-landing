"use client";

import {
  ArrowRight,
  CirclePlay,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 fade-up delay-2">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6 text-center">

        {/* Badge */}
        <div
          className="
            mb-6
            flex
            items-center
            gap-2
            rounded-full
            border
            border-sky-500/20
            bg-sky-500/10
            px-3
            py-2
            sm:px-4
          "
        >
          <span
            className="
              flex
              items-center
              justify-center
              gap-2
              text-[11px]
              font-medium
              text-sky-300
              sm:text-xs
            "
          >
            <Sparkles size={14} />
            Automação de pedidos com IA · MVP disponível
          </span>
        </div>

        {/* Título */}
        <h1
          className="
            max-w-4xl
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Do WhatsApp para

          <span
            className="
              block
              bg-gradient-to-r
              from-sky-400
              to-cyan-300
              bg-clip-text
              text-transparent
            "
          >
            pedidos organizados
          </span>

          em segundos com IA
        </h1>

        {/* Descrição */}
        <p
          className="
            mt-6
            max-w-2xl
            text-sm
            leading-relaxed
            text-zinc-400
            sm:mt-8
            sm:text-base
            md:text-lg
          "
        >
          O Chat2Order lê, entende e estrutura cada pedido do
          WhatsApp em tempo real — sua equipe para de copiar e
          colar e volta a focar no que importa.
        </p>

        {/* Botões */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            items-center
            gap-3
            sm:mt-10
            sm:flex-row
            sm:justify-center
          "
        >
          <a
            href="https://chat2order-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-sky-500
                px-8
                py-3
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-sky-400
                sm:w-auto
              "
            >
              Acessar produto

              <ArrowRight size={18} />
            </button>
          </a>

          <button
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-8
              py-3
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-white/10
              sm:w-auto
            "
          >
            <CirclePlay size={18} />
            Ver como funciona
          </button>
        </div>

      </div>
    </section>
  );
}