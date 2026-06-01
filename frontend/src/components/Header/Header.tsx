// Header.tsx

"use client";

import { useState } from "react";
import { ExternalLink, Menu, MessageSquare, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#problem", label: "Problema" },
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#precos", label: "Preços" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-col items-center pt-4 px-4 fade-up delay-2 ">
      <div className="flex h-16 w-full max-w-[1280px] items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 backdrop-blur-xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500">
            <MessageSquare size={18} />
          </div>
          <span className="font-semibold text-white">Chat2Order</span>
        </div>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-10 text-sm text-zinc-400 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + menu mobile */}
        <div className="flex items-center gap-3">
          <a
            href="https://chat2order-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-sky-400">
              Acessar produto
              <ExternalLink size={16} />
            </button>
          </a>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Nav mobile */}
      {open && (
        <div className="mt-2 w-full max-w-[1280px] rounded-2xl border border-white/10 bg-black/80 px-6 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4 text-sm text-zinc-400">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}