import { MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-800
        bg-[#020817]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-6xl
          items-center
          justify-between
          px-6
        "
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-sky-500
            "
          >
            <MessageSquare
              size={14}
              className="text-white"
            />
          </div>

          <span
            className="
              text-sm
              font-medium
              text-white
            "
          >
            Chat2Order
          </span>

          <span
            className="
              text-sm
              text-zinc-500
            "
          >
            • © 2026
          </span>
        </div>

        {/* Right */}
        <nav className="flex items-center gap-8">
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
    </footer>
  );
}