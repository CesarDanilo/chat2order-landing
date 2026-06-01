export function Banner() {
  return (
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
  );
}