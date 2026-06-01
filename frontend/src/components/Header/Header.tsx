import { ExternalLink, MessageSquare } from "lucide-react";

export function Header() {
  return (
<header className="flex justify-center pt-4">
  <div
    className="
      flex
      h-16
      w-full
      max-w-[1280px]
      items-center
      justify-between
      rounded-full
      border
      border-white/10
      bg-black/20
      px-8
      backdrop-blur-xl
    "
  >
    {/* Logo */}
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500">
        <MessageSquare size={18} />
      </div>

      <span className="font-semibold text-white">
        Chat2Order
      </span>
    </div>

    {/* Navegação */}
    <nav className="hidden items-center gap-10 text-sm text-zinc-400 lg:flex">
      <a href="#problema" className="hover:text-white transition-colors">
        Problema
      </a>

      <a href="#recursos" className="hover:text-white transition-colors">
        Recursos
      </a>

      <a href="#como-funciona" className="hover:text-white transition-colors">
        Como funciona
      </a>

      <a href="#tecnologia" className="hover:text-white transition-colors">
        Tecnologia
      </a>

      <a href="#precos" className="hover:text-white transition-colors">
        Preços
      </a>
    </nav>

    {/* CTA */}
    <a href="https://chat2order-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
      <button className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-sky-400">
        Acessar produto
        <ExternalLink size={16} />
      </button>
    </a>
  </div>
</header>
  );
}