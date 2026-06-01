import type { JSX } from "react";
import { TheProblemCards } from "../Card/TheProblemCards";
import { ClipboardX, Clock, MessageCircleX, TriangleAlert } from "lucide-react";

export interface Problem {
  title: string;
  description: string;
  icon: JSX.Element;
}

export function TheProblem() {

  const problems: Problem[] = [
    {
      title: "Caos nas conversas",
      description: "Pedidos perdidos entre centenas de mensagens não lidas todos os dias.",
      icon: <MessageCircleX
        size={24}
        className="text-sky-500" />
    },
    {
      title: "Erros que custam caro",
      description: "Itens trocados, endereços errados e adicionais esquecidos viram prejuízo.",
      icon: <TriangleAlert
        size={24}
        className="text-sky-500"
      />
    },
    {
      title: "Horas reescrevendo tudo",
      description: "Equipe copiando conversas para planilhas em vez de atender clientes.",
      icon: <Clock
        size={24}
        className="text-sky-500"
      />
    },
    {
      title: "Zero rastreabilidade",
      description: "Sem status, sem histórico, sem relatório. Só achismo e prints de tela.",
      icon: <ClipboardX
        size={24}
        className="text-sky-500"
      />
    }
  ]

  return (
    <div className="w-full mx-16" >
      <div className="flex flex-col w-2xl items-start justify-center mt-16 gap-1 fade-up delay-2 ">
        <h2 className="text-base text-sky-600 font-medium mb-4">O PROBLEMA</h2>
        <p className="max-w-4xl text-5xl font-medium leading-tight tracking-tight text-white md:text-5xl">O WhatsApp não foi feito para gerenciar sua operação.</p>
        <span className="text-lg text-zinc-400 mt-4 mb-16">
          Se você recebe pedidos por WhatsApp, está perdendo tempo e dinheiro todos os dias em um processo que quebra o tempo todo.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-fit fade-up delay-2">
        {problems.map((problem, index) => (
          <TheProblemCards
            key={index}
            title={problem.title}
            description={problem.description}
            icon={problem.icon}
          />
        ))}
      </div>
    </div>
  )
}

