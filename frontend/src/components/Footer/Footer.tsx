export function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-800
        bg-[#020817]
        fade-up
        delay-3
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl

          px-4
          sm:px-6
          lg:px-8

          py-6
        "
      >
        <div
          className="
            flex
            flex-col

            items-center
            gap-6

            text-center

            sm:flex-row
            sm:justify-between
            sm:text-left
          "
        >
          {/* Left */}
          <div
            className="
              flex
              flex-col

              items-center
              gap-3

              sm:flex-row
              sm:items-center
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-8
                  w-8

                  items-center
                  justify-center

                  rounded-lg
                "
              >
                <img src="/icon.png" alt="Logo" />
              </div>

              <span
                className="
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Chat2Order
              </span>
            </div>

            <span
              className="
                text-xs
                text-zinc-500

                sm:text-sm
              "
            >
              © 2026 Todos os direitos reservados.
            </span>
          </div>

          {/* Right */}
          <nav
            className="
              flex
              flex-wrap

              items-center
              justify-center

              gap-4
              sm:gap-6
            "
          >
            <a
              href="#"
              className="
                text-sm
                text-zinc-400

                transition-colors

                hover:text-white
              "
            >
              Privacidade
            </a>

            <a
              href="#"
              className="
                text-sm
                text-zinc-400

                transition-colors

                hover:text-white
              "
            >
              Termos
            </a>

            <a
              href="#"
              className="
                text-sm
                text-zinc-400

                transition-colors

                hover:text-white
              "
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}