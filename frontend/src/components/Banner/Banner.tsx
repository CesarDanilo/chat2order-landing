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
        "
      >
        <img className="rounded-3xl" src="../public/banner4.png" alt="banner" />
      </div>
    </section>
  );
}