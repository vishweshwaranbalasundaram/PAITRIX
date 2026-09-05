function ReceiptRow({ k, v, danger }: { k: string; v: string; danger?: boolean }) {
  return (
    <div className="flex justify-between border-b border-hairline py-3.5 text-[13px] last:border-b-0">
      <span className="text-text-2">{k}</span>
      <span className={`font-mono ${danger ? "text-block" : "text-text-1"}`}>{v}</span>
    </div>
  );
}

export default function ProofSection() {
  return (
    <section id="proof" className="min-h-screen snap-start border-t border-hairline py-24 md:py-32">
      <div className="mx-auto flex h-full max-w-[1200px] flex-col justify-center px-6 md:px-10">
        <div className="mb-16 max-w-[640px]">
          <div className="mb-4 font-mono text-xs text-accent">PROOF OF NON-EXECUTION</div>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-tight tracking-tight">
            When PAYTRIX blocks a purchase, it doesn&apos;t just say no.
          </h2>
          <p className="mt-4 max-w-[520px] text-base text-text-2">
            It generates a signed receipt proving the gateway was never
            invoked — so &ldquo;blocked&rdquo; is verifiable, not just
            claimed.
          </p>
        </div>

        <div className="mx-auto max-w-[520px] rounded-sm border border-hairline bg-surface p-10">
          <div className="mb-6 font-mono text-xs tracking-wide text-text-3">PRNE RECEIPT</div>
          <ReceiptRow k="Trace ID" v="tr_8f2a1c9d0e" />
          <ReceiptRow k="Reason" v="PRICE_SENTINEL" />
          <ReceiptRow k="Amount" v="₹3,499.00" />
          <ReceiptRow k="Gateway invocation state" v="NOT_CALLED" danger />
          <ReceiptRow k="Signature" v="HMAC-SHA256 ✓" />
          <ReceiptRow k="Timestamp" v="2026-09-05T11:42:07Z" />
        </div>
      </div>
    </section>
  );
}
