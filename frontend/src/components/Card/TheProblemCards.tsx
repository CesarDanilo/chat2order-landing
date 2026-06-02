import type { Problem } from "../Resolver/TheProblem";


export function TheProblemCards({
  title,
  description,
  icon,
}: Problem) {
  return (
    <div
      className="
        w-[260px]
        rounded-2xl
        border
        border-sky-500/10
        bg-[#0B1220]
        p-5
        transition-all
        duration-300
        hover:border-sky-500/20
        hover:shadow-[0_0_40px_rgba(14,165,233,0.08)]
      "
    >
      <div className="mb-4">
        {icon}
      </div>

      <h3 className="mb-2 text-base font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
    </div>
  );
}