export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden border-b border-hairline pt-40 pb-24 snap-start">
      {/* Decorative background rings — plain CSS, no scroll-linking, no 3D */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="relative h-[80vw] max-h-[700px] w-[80vw] max-w-[700px]">
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-hairline" />
          <div className="absolute inset-[15%] animate-spin-slower rounded-full border border-accent-dim" />
          <div className="absolute inset-[32%] animate-spin-slow rounded-full border border-hairline" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <p className="mb-5 font-mono text-xs tracking-wide text-accent">
          PAYTRIX — TRUST INFRASTRUCTURE FOR AUTONOMOUS COMMERCE
        </p>
        <h1 className="max-w-[920px] font-display text-[clamp(34px,6.4vw,84px)] font-bold leading-[1.02] tracking-tight">
          Let AI shop for you.
          <br />
          You set the rules.
        </h1>
        <p className="mt-5 max-w-[480px] text-base leading-relaxed text-text-2">
          An agent can discover, decide and buy on your behalf. PAYTRIX sits
          between its intent and your money — checking price, velocity and
          intent before a single rupee moves.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#outcomes"
            className="inline-block rounded-sm bg-accent px-6 py-3.5 text-sm font-bold text-base transition-transform hover:-translate-y-0.5"
          >
            Watch it block a purchase
          </a>
          <a
            href="#kernel"
            className="inline-block rounded-sm border border-hairline px-6 py-3.5 text-sm font-medium transition-colors hover:border-text-2"
          >
            View the safety kernel
          </a>
        </div>
      </div>
    </section>
  );
}
