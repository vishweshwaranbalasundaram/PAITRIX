function PathStep({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between border-b border-hairline py-3 font-mono text-[13px] text-text-2 last:border-b-0">
      <span>{label}</span>
      <span className={highlight ? "" : "text-text-1"}>{value}</span>
    </div>
  );
}

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="border-t border-hairline py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-[1200px] px-6 md:px-10">
        <div className="max-w-[640px]">
          <div className="mb-4 font-mono text-xs text-accent">TWO OUTCOMES</div>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-tight tracking-tight">
            Money moves. Or it doesn&apos;t. Either way, there&apos;s proof.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-2">
        <div className="bg-base px-6 py-11 md:px-10">
          <span className="mb-6 inline-block rounded-sm border border-pass/30 px-2.5 py-1 font-mono text-xs text-pass">
            SAFE TO PURCHASE
          </span>
          <h3 className="mb-5 font-display text-2xl font-bold">Headphones, ₹1,899</h3>
          <p className="mb-6 text-text-2">
            Within budget, price matches baseline, wallet has room. The
            kernel clears it in every step.
          </p>
          <div>
            <PathStep label="Intent" value="92% aligned" />
            <PathStep label="Price" value="₹1,899 vs ₹1,940 baseline" />
            <PathStep label="Wallet reservation" value="Held" />
            <PathStep label="Gateway" value="Invoked" />
            <PathStep label="Result" value="PURCHASE COMPLETE" />
          </div>
        </div>

        <div className="bg-base px-6 py-11 md:px-10">
          <span className="mb-6 inline-block rounded-sm border border-block/30 px-2.5 py-1 font-mono text-xs text-block">
            BLOCKED
          </span>
          <h3 className="mb-5 font-display text-2xl font-bold">Same headphones, ₹3,499</h3>
          <p className="mb-6 text-text-2">
            The agent tried to upsize past your ₹2,000 limit. Price Sentinel
            stops it before checkout.
          </p>
          <div>
            <PathStep label="Requested budget" value="₹2,000" />
            <PathStep label="Agent attempted" value="₹3,499" />
            <PathStep label="Policy" value="PRICE_SENTINEL" />
            <PathStep label="Gateway" value="NOT_CALLED" />
            <PathStep label="Result" value="BLOCKED" />
          </div>
        </div>
      </div>
    </section>
  );
}
