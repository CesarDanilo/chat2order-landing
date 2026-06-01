import { Download, LayoutDashboard, Puzzle, Settings2 } from "lucide-react";
import { CardExtencion } from "../Card/CardExtencion";
import type { JSX } from "react";

export interface ExtentionProps {
  title: string;
  description: string;
  icon: JSX.Element;
}



export function Extention() {
  const extencion_content: ExtentionProps[] = [
    {
      title: "Importe a conversa inteira",
      description: "Em um clique, o plugin envia todo o histórico do WhatsApp Web para dentro do Chat2Order — sem copiar e colar.",
      icon: <Download
        size={24}
        className="text-sky-500" />
    },
    {
      title: "Acesso direto ao dashboard",
      description: "Abra o painel de pedidos sem sair do WhatsApp. Tudo o que entra na conversa aparece estruturado no sistema.",
      icon: <LayoutDashboard
        size={24}
        className="text-sky-500"
      />
    },
    {
      title: "Configurações completas",
      description: "Equipe copiando conversas para planilhas em vez de atender clientes.",
      icon: <Settings2
        size={24}
        className="text-sky-500"
      />
    }
  ]
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-8 text-center">

        {/* Badge */}
        <div className="fade-up delay-2 mb-8">
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

      <div className="relative mx-auto my-16 w-4/5 ">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-sky-500/20 blur-3xl" />

        <div
          className="
          h-[550px]
          rounded-2xl
          border
          border-white/10
          bg-zinc-900/50
          backdrop-blur-xl
          shadow-[0_0_80px_rgba(14,165,233,0.2)]
          flex
          items-center
          justify-center
          fade-up delay-2 
          mb-16
        "
        >
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-8 px-8 fade-up delay-3">
        {extencion_content.map((content, index) => (
          <CardExtencion
            key={index}
            icon={content.icon}
            title={content.title}
            description={content.description}
          />
        ))}
      </div>
    </section>
  );
}