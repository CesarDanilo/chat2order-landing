// TheProblem.tsx

import type { JSX } from "react";
import {
  ClipboardX,
  Clock,
  MessageCircleX,
  TriangleAlert,
} from "lucide-react";

import { TheProblemCards } from "../Card/TheProblemCards";

export interface Problem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const PROBLEMS: Problem[] = [
  {
    title: "Caos nas conversas",
    description:
      "Pedidos perdidos entre centenas de mensagens não lidas todos os dias.",
    icon: (
      <MessageCircleX
        size={24}
        className="text-sky-500"
      />
    ),
  },
  {
    title: "Erros que custam caro",
    description:
      "Itens trocados, endereços errados e adicionais esquecidos viram prejuízo.",
    icon: (
      <TriangleAlert
        size={24}
        className="text-sky-500"
      />
    ),
  },
  {
    title: "Horas reescrevendo tudo",
    description:
      "Equipe copiando conversas para planilhas em vez de atender clientes.",
    icon: (
      <Clock
        size={24}
        className="text-sky-500"
      />
    ),
  },
  {
    title: "Zero rastreabilidade",
    description:
      "Sem status, sem histórico, sem relatório. Só achismo e prints de tela.",
    icon: (
      <ClipboardX
        size={24}
        className="text-sky-500"
      />
    ),
  },
];

export function TheProblem() {
  return (
    <section
      id="problem"
      className="
        w-full
        py-16
        sm:py-20
        lg:py-24
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
        {/* Header */}
        <div
          className="
            mb-10
            flex
            flex-col
            items-center
            text-center

            lg:mb-14
            lg:items-start
            lg:text-left
          "
        >
          <h2
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-sky-500
            "
          >
            O Problema
          </h2>

          <p
            className="
              max-w-3xl
              text-3xl
              font-medium
              leading-tight
              tracking-tight
              text-white

              sm:text-4xl
              lg:text-5xl
            "
          >
            O WhatsApp não foi feito para
            gerenciar sua operação.
          </p>

          <span
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-relaxed
              text-zinc-400

              sm:text-base
              lg:text-lg
            "
          >
            Se você recebe pedidos por WhatsApp,
            está perdendo tempo e dinheiro todos os
            dias em um processo que quebra o tempo
            todo.
          </span>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-4
          "
        >
          {PROBLEMS.map((problem) => (
            <TheProblemCards
              key={problem.title}
              title={problem.title}
              description={problem.description}
              icon={problem.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}