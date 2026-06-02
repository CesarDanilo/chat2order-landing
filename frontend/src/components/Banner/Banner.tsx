export function Banner() {
  return (
    <section
      className="
        relative
        mx-auto
        my-10
        w-full
        max-w-7xl
        px-4
        sm:my-12
        sm:px-6
        lg:my-16
        lg:px-8
      "
    >
      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-3xl
          bg-sky-500/20
          blur-3xl
        "
      />

      <div
        className="
          fade-up
          delay-2
          mb-10
          flex
          min-h-[250px]
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-zinc-900/50
          backdrop-blur-xl
          shadow-[0_0_80px_rgba(14,165,233,0.2)]

          sm:min-h-[350px]

          md:min-h-[450px]

          lg:min-h-[550px]
          lg:mb-16
        "
      >
        {/* Conteúdo */}
      </div>
    </section>
  );
}