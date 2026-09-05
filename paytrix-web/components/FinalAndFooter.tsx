export default function FinalAndFooter() {
  return (
    <>
      <section className="border-t border-hairline py-32 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mb-4 font-mono text-xs text-accent">PAYTRIX</div>
          <h2 className="max-w-[800px] font-display text-[clamp(32px,6vw,64px)] font-bold leading-tight tracking-tight">
            AI can act.
            <br />
            PAYTRIX decides what&apos;s safe.
          </h2>
          <a
            href="#shop"
            className="mt-9 inline-block rounded-sm bg-accent px-6 py-3.5 text-sm font-bold text-base transition-transform hover:-translate-y-0.5"
          >
            Try the agent
          </a>
        </div>
      </section>

      <footer className="border-t border-hairline py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2.5 px-6 text-[13px] text-text-3 md:flex-row md:justify-between md:px-10">
          <span>© 2026 PAYTRIX — trust infrastructure for autonomous commerce</span>
          <span>Sandbox environment · No real payments</span>
        </div>
      </footer>
    </>
  );
}
