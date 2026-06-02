import { ArrowRight, ExternalLink } from "lucide-react";

export function CtaSection() {
  return (
    <section
      className="
        py-16
        sm:py-20
        lg:py-24
        fade-up
        delay-2
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
        <div
          className="
            relative
            overflow-hidden

            rounded-[28px]

            border
            border-slate-800

            bg-[#030b18]

            px-5
            py-14

            sm:px-8
            sm:py-20

            lg:px-12
            lg:py-24
          "
        >
          {/* Glow Background */}
          <div
            className="
              absolute
              left-1/2
              top-0

              h-[250px]
              w-[250px]

              -translate-x-1/2

              rounded-full

              bg-sky-500/15

              blur-[100px]

              sm:h-[350px]
              sm:w-[500px]

              lg:h-[400px]
              lg:w-[700px]
            "
          />

          <div
            className="
              relative
              z-10

              mx-auto
              max-w-3xl

              text-center
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-white

                sm:text-4xl

                lg:text-5xl
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
                mt-6

                max-w-2xl

                text-sm
                leading-relaxed

                text-zinc-400

                sm:text-base
              "
            >
              Acesse o produto agora.
              A tela de login do Chat2Order
              te espera do outro lado.
            </p>

            <div
              className="
                mt-8

                flex
                flex-col

                gap-3

                sm:flex-row
                sm:justify-center
              "
            >
              <button
                className="
                  flex
                  h-12
                  w-full

                  items-center
                  justify-center

                  gap-2

                  rounded-full

                  bg-sky-500

                  px-8

                  text-sm
                  font-medium
                  text-white

                  transition-all

                  hover:bg-sky-400

                  sm:w-auto
                "
              >
                Acessar produto

                <ArrowRight size={16} />
              </button>

              <button
                className="
                  flex
                  h-12
                  w-full

                  items-center
                  justify-center

                  gap-2

                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.03]

                  px-8

                  text-sm
                  font-medium

                  text-zinc-200

                  transition-colors

                  hover:bg-white/[0.06]
                  hover:text-white

                  sm:w-auto
                "
              >
                Ver demo

                <ExternalLink size={15} />
              </button>
            </div>

            <p
              className="
                mt-5

                text-xs
                sm:text-sm

                text-zinc-500
              "
            >
              Sem cartão de crédito.
              Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}