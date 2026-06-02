import { ArrowRight, ExternalLink } from "lucide-react";

export function CtaSection() {
  return (
    <section className="px-8 py-24">
      <div
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[32px]
          border
          border-slate-800
          bg-[#030b18]
          px-8
          py-24
        "
      >
        {/* Glow Background */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[400px]
            w-[700px]
            -translate-x-1/2
            bg-sky-500/15
            blur-[140px]
          "
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2
            className="
              text-5xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Comece a automatizar
            <br />
            seus pedidos{" "}
            <span className="text-sky-500">
              hoje.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-zinc-400
            "
          >
            Acesse o produto agora — a tela de login
            do Chat2Order te espera do outro lado.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <button
              className="
                flex
                h-12
                items-center
                gap-2
                rounded-full
                bg-sky-500
                px-8
                text-sm
                font-medium
                text-white
                transition-all
                hover:bg-sky-400
              "
            >
              Acessar produto
              <ArrowRight size={16} />
            </button>

            <button
              className="
                flex
                h-12
                items-center
                gap-2
                rounded-full
                px-4
                text-sm
                font-medium
                text-zinc-200
                transition-colors
                hover:text-white
              "
            >
              Ver demo
              <ExternalLink size={15} />
            </button>
          </div>

          <p
            className="
              mt-6
              text-sm
              text-zinc-500
            "
          >
            Sem cartão de crédito. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}