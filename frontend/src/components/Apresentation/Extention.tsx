import { Puzzle } from "lucide-react";

export function Extention() {
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-8 text-center">

        {/* Badge */}
        <div className="fade-up delay-1 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2">
            <Puzzle size={16} className="text-sky-300" />

            <span className="text-xs font-medium text-sky-300">
              EXTENSÃO PARA WHATSAPP WEB
            </span>
          </div>
        </div>

        {/* Título */}
        <h2 className="fade-up delay-2 max-w-4xl text-center text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Um{" "}
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            plugin
          </span>{" "}
          que vive dentro do seu WhatsApp
        </h2>

        {/* Descrição */}
        <p className="fade-up delay-3 mt-6 max-w-2xl text-center text-lg leading-relaxed text-zinc-400">
          O Chat2Order roda como uma extensão no WhatsApp Web. Importe
          conversas inteiras, acesse o dashboard e configure tudo sem nunca
          trocar de tela.
        </p>

      </div>
    </section>
  );
}