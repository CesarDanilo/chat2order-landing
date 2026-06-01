// TheProblem.tsx

import type { JSX } from "react";
import { TheProblemCards } from "../Card/TheProblemCards";
import { ClipboardX, Clock, MessageCircleX, TriangleAlert } from "lucide-react";

export interface Problem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const PROBLEMS: Problem[] = [
  {
    title: "Caos nas conversas",
    description: "Pedidos perdidos entre centenas de mensagens não lidas todos os dias.",
    icon: <MessageCircleX size={24} className="text-sky-500" />,
  },
  {
    title: "Erros que custam caro",
    description: "Itens trocados, endereços errados e adicionais esquecidos viram prejuízo.",
    icon: <TriangleAlert size={24} className="text-sky-500" />,
  },
  {
    title: "Horas reescrevendo tudo",
    description: "Equipe copiando conversas para planilhas em vez de atender clientes.",
    icon: <Clock size={24} className="text-sky-500" />,
  },
  {
    title: "Zero rastreabilidade",
    description: "Sem status, sem histórico, sem relatório. Só achismo e prints de tela.",
    icon: <ClipboardX size={24} className="text-sky-500" />,
  },
];

export function TheProblem() {
  return (
    <section id="problem" className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col items-start gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 mb-2">
            O Problema
          </h2>
          <p className="max-w-3xl text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            O WhatsApp não foi feito para gerenciar sua operação.
          </p>
          <span className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Se você recebe pedidos por WhatsApp, está perdendo tempo e dinheiro
            todos os dias em um processo que quebra o tempo todo.
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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