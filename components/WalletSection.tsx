function WalletRow({
  label,
  value,
  muted,
  badge,
}: {
  label: string;
  value?: string;
  muted?: boolean;
  badge?: "on" | "off";
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-hairline py-4 last:border-b-0 last:pb-0 first:pt-0">
      <span className="text-[13px] text-text-2">{label}</span>
      {badge ? (
        <span
          className={`rounded-sm border px-2 py-0.5 font-mono text-[11px] ${
            badge === "off"
              ? "border-block/25 bg-block/10 text-block"
              : "border-pass/25 bg-pass/10 text-pass"
          }`}
        >
          {badge === "off" ? "DISABLED" : "ENABLED"}
        </span>
      ) : (
        <span className={`font-mono text-base ${muted ? "text-text-3" : "text-text-1"}`}>
          {value}
        </span>
      )}
    </div>
  );
}

export default function WalletSection() {
  return (
    <section id="shop" className="min-h-screen snap-start border-t border-hairline py-24 md:py-32">
      <div className="mx-auto flex h-full max-w-[1200px] flex-col justify-center px-6 md:px-10">
        <div className="mb-16 max-w-[640px]">
          <div className="mb-4 font-mono text-xs text-accent">AGENT AUTHORITY</div>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-tight tracking-tight">
            You give the agent authority.
            <br />
            You keep the control.
          </h2>
          <p className="mt-4 max-w-[520px] text-base text-text-2">
            Every limit below is enforced by the safety kernel, not the
            agent. It can spend within these bounds — never past them.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="rounded-sm border border-hairline bg-surface p-8">
            <WalletRow label="Available balance" value="₹10,000" />
            <WalletRow label="Reserved" value="₹1,899" />
            <WalletRow label="Daily limit" value="₹5,000" muted />
            <WalletRow label="Per-transaction limit" value="₹2,000" muted />
            <WalletRow label="Recurring subscriptions" badge="off" />
            <WalletRow label="Transactions today" value="2 / 3" />
          </div>
          <div className="space-y-4 text-base text-text-2">
            <p>
              &ldquo;Find me the best headphones under ₹2,000&rdquo; is all
              the agent needs. It compares price, trust score and rating
              across merchants, then proposes the best match — PAYTRIX
              decides whether it&apos;s allowed to buy it.
            </p>
            <p>
              Raise a limit, disable recurring payments, or pull authority
              back entirely — the agent&apos;s power exists only inside the
              boundary you draw.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
