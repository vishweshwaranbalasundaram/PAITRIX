export default function GiantTitle() {
  return (
    <div className="mx-auto max-w-[1200px] border-b border-hairline px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr]">
        <h2 className="font-display text-[clamp(48px,10vw,128px)] font-bold leading-[0.92] tracking-tighter">
          Autonomous
          <br />
          Commerce.
        </h2>
        <div className="text-[15px] leading-relaxed text-text-2">
          <p>
            <b className="font-medium text-text-1">The problem:</b> agents can
            already browse, compare and decide — but the moment they touch
            money, someone has to bound that power.
          </p>
          <p className="mt-3.5">
            <b className="font-medium text-text-1">The answer:</b> PAYTRIX.
            One kernel, nine checks, every rupee accounted for — whether it
            moves or doesn&apos;t.
          </p>
        </div>
      </div>
    </div>
  );
}
