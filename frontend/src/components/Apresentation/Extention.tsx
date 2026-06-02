import {
  Download,
  LayoutDashboard,
  Puzzle,
  Settings2,
} from "lucide-react";
import { CardExtencion } from "../Card/CardExtencion";
import type { JSX } from "react";

export interface ExtentionProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const EXTENCION_CONTENT: ExtentionProps[] = [
  {
    title: "Importe a conversa inteira",
    description:
      "Em um clique, o plugin envia todo o histórico do WhatsApp Web para dentro do Chat2Order — sem copiar e colar.",
    icon: (
      <Download
        size={24}
        className="text-sky-500"
      />
    ),
  },
  {
    title: "Acesso direto ao dashboard",
    description:
      "Abra o painel de pedidos sem sair do WhatsApp. Tudo o que entra na conversa aparece estruturado no sistema.",
    icon: (
      <LayoutDashboard
        size={24}
        className="text-sky-500"
      />
    ),
  },
  {
    title: "Configurações completas",
    description:
      "Personalize prompts, regras de extração e comportamento da IA para o seu fluxo de pedidos.",
    icon: (
      <Settings2
        size={24}
        className="text-sky-500"
      />
    ),
  },
];

export function Extention() {
  return (
    <section
    id="como-funciona"
      className="
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Header */}
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          px-4
          text-center

          sm:px-6
          lg:px-8
        "
      >
        {/* Badge */}
        <div className="fade-up delay-2 mb-8">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-sky-500/20
              bg-sky-500/10
              px-4
              py-2
            "
          >
            <Puzzle
              size={16}
              className="text-sky-300"
            />

            <span
              className="
                text-[11px]
                font-medium
                text-sky-300
                sm:text-xs
              "
            >
              EXTENSÃO PARA WHATSAPP WEB
            </span>
          </div>
        </div>

        {/* Título */}
        <h2
          className="
            fade-up
            delay-2
            max-w-4xl

            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-white

            sm:text-4xl
            lg:text-5xl
            xl:text-6xl
          "
        >
          Um{" "}
          <span
            className="
              bg-gradient-to-r
              from-sky-400
              to-cyan-300
              bg-clip-text
              text-transparent
            "
          >
            plugin
          </span>{" "}
          que vive dentro do seu WhatsApp
        </h2>

        {/* Descrição */}
        <p
          className="
            fade-up
            delay-3

            mt-6
            max-w-2xl

            text-sm
            leading-relaxed
            text-zinc-400

            sm:text-base
            lg:text-lg
          "
        >
          O Chat2Order roda como uma extensão no WhatsApp Web.
          Importe conversas inteiras, acesse o dashboard e
          configure tudo sem nunca trocar de tela.
        </p>
      </div>

      {/* Banner */}
      <div
        className="
          relative
          mx-auto
          my-10
          w-full
          max-w-7xl
          px-4

          sm:my-12
          sm:px-6

          lg:my-16
          lg:px-8
        "
      >
        <div
          className="
            absolute
            inset-0
            -z-10
            rounded-3xl
            bg-sky-500/20
            blur-3xl
          "
        />

        <div
          className="
            fade-up
            delay-2

            aspect-[16/9]
            w-full

            rounded-2xl
            border
            border-white/10
            bg-zinc-900/50

            backdrop-blur-xl

            shadow-[0_0_80px_rgba(14,165,233,0.2)]
          "
        >
          <img className="rounded-3xl" src="/banner2.png" alt="banner"  />
        </div>
      </div>

      {/* Cards */}
      <div
        className="
          fade-up
          delay-3

          mx-auto
          grid
          max-w-7xl

          grid-cols-1
          gap-6
          px-4

          sm:grid-cols-2
          sm:px-6

          lg:grid-cols-3
          lg:px-8
        "
      >
        {EXTENCION_CONTENT.map((content) => (
          <CardExtencion
            key={content.title}
            icon={content.icon}
            title={content.title}
            description={content.description}
          />
        ))}
      </div>
    </section>
  );
}