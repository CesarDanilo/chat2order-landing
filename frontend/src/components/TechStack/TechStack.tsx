// TechStack.tsx

import {
  Atom,
  FileCode2,
  Server,
  Database,
  Wind,
  Layers,
  Cpu,
} from "lucide-react";

interface Tech {
  icon: React.ReactNode;
  label: string;
}

const TECHS: Tech[] = [
  { icon: <Atom size={16} />, label: "React" },
  { icon: <FileCode2 size={16} />, label: "TypeScript" },
  { icon: <Server size={16} />, label: "Node.js" },
  { icon: <Database size={16} />, label: "PostgreSQL" },
  { icon: <Wind size={16} />, label: "TailwindCSS" },
  { icon: <Layers size={16} />, label: "shadcn/ui" },
  { icon: <Cpu size={16} />, label: "IA" },
];

function TechBadge({ icon, label }: Tech) {
  return (
    <div
      className="
        group
        relative
        flex
        items-center
        justify-center

        sm:justify-start

        gap-0
        sm:gap-2

        overflow-hidden

        rounded-xl
        border
        border-white/[0.08]

        px-4
        py-3

        transition-all
        duration-300

        hover:border-sky-500/30
        hover:bg-sky-500/[0.03]
      "
    >
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-sky-500/10
          via-transparent
          to-transparent

          opacity-0
          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />

      <span
        className="
          relative
          text-slate-400

          transition-colors
          duration-300

          group-hover:text-sky-400
        "
      >
        {icon}
      </span>

      <span
        className="
          relative
          hidden

          text-sm
          font-medium
          text-white

          sm:block
        "
      >
        {label}
      </span>
    </div>
  );
}

export function TechStack() {
  return (
    <section
      id="tecnologia"
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
        <div
          className="
            rounded-2xl

            border
            border-sky-500/10

            bg-[#0B1220]

            p-6
            sm:p-8
            lg:p-10

            transition-all
            duration-300

            hover:border-sky-500/20
            hover:shadow-[0_0_40px_rgba(14,165,233,0.08)]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10

              lg:flex-row
              lg:items-center
              lg:gap-16
            "
          >
            {/* Left */}
            <div
              className="
                flex
                flex-col
                gap-4

                text-center

                lg:max-w-md
                lg:text-left
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-sky-400
                "
              >
                Engenharia pronta para escalar
              </p>

              <h2
                className="
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-white

                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Stack de produção.
                <br />
                Desde o dia um.
              </h2>

              <p
                className="
                  text-sm
                  leading-relaxed
                  text-slate-400

                  sm:text-base
                "
              >
                Construído por engenheiros para operações que não
                podem parar. Tipagem ponta a ponta, arquitetura
                escalável e preparado para alto volume de pedidos
                em tempo real.
              </p>
            </div>

            {/* Right */}
            <div
              className="
                grid
                flex-1

                grid-cols-4
                gap-3

                sm:grid-cols-3
              "
            >
              {TECHS.map((tech) => (
                <TechBadge
                  key={tech.label}
                  {...tech}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}