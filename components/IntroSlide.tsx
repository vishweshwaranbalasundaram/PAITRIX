const tiles = [
  { tag: "WALLET", title: "Agent Authority", glyph: "₹" },
  { tag: "CHAT", title: "Conversational Shopping", glyph: "AI" },
  { tag: "KERNEL", title: "Live Safety Checks", glyph: "PX" },
  { tag: "LEDGER", title: "Immutable Audit", glyph: "#" },
];

export default function IntroSlide() {
  return (
    <section className="flex min-h-screen snap-start flex-col justify-center border-b border-hairline">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <h2 className="font-display text-[clamp(48px,10vw,128px)] font-bold leading-[0.92] tracking-tighter">
            Autonomous
            <br />
            Commerce.
          </h2>
          <div className="text-[15px] leading-relaxed text-text-2">
            <p>
              <b className="font-medium text-text-1">The problem:</b> agents
              can already browse, compare and decide — but the moment they
              touch money, someone has to bound that power.
            </p>
            <p className="mt-3.5">
              <b className="font-medium text-text-1">The answer:</b> PAYTRIX.
              One kernel, nine checks, every rupee accounted for — whether
              it moves or doesn&apos;t.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-hairline md:grid-cols-4">
        {tiles.map((tile) => (
          <div
            key={tile.tag}
            className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden bg-base p-5"
          >
            <span className="font-mono text-[11px] text-text-3">{tile.tag}</span>
            <span className="text-sm font-medium text-text-1">{tile.title}</span>
            <span className="pointer-events-none absolute bottom-3 right-3.5 font-mono text-4xl font-bold text-surface-2">
              {tile.glyph}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
