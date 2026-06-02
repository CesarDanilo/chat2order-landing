"use client";

import { useState } from "react";
import {
  ExternalLink,
  Menu,
  MessageSquare,
  X,
} from "lucide-react";

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
    <header
      className="
        fade-up delay-2
        px-3
        pt-3
        sm:px-4
        sm:pt-4
      "
    >
      <div
        className="
          mx-auto
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
          px-4
          backdrop-blur-xl
          sm:px-6
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              text-white
            "
          >
            <img src="../public/icon.png" alt="Logo" />
          </div>

          <span
            className="
              text-sm
              font-semibold
              text-white
              sm:text-base
            "
          >
            Chat2Order
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            items-center
            gap-8
            text-sm
            text-zinc-400
            md:flex
          "
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="
                transition-colors
                hover:text-white
              "
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://chat2order-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
                hidden
                items-center
                gap-2
                rounded-full
                bg-sky-500
                px-5
                py-2
                text-sm
                font-medium
                text-white
                transition-all
                hover:bg-sky-400
                sm:flex
              "
            >
              Acessar produto

              <ExternalLink size={16} />
            </button>
          </a>

          <button
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-white
              md:hidden
            "
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            mx-auto
            mt-2
            w-full
            max-w-[1280px]
            rounded-2xl
            border
            border-white/10
            bg-black/80
            px-5
            py-5
            backdrop-blur-xl
            md:hidden
          "
        >
          <nav
            className="
              flex
              flex-col
              gap-5
              text-sm
              text-zinc-400
            "
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="
                  transition-colors
                  hover:text-white
                "
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              href="https://chat2order-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2"
            >
              <button
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  bg-sky-500
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  hover:bg-sky-400
                  md:flex
                "
              >
                Acessar produto

                <ExternalLink size={16} />
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}