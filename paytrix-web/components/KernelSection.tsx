"use client";

import { useEffect, useState } from "react";
import { useScrollProgress } from "@/lib/useScrollProgress";

const steps = [
  { num: "01", title: "Intent", desc: "Price fit, trust score and rating combine into one alignment score." },
  { num: "02", title: "Price", desc: "Checked against a 7-day baseline. Markup over 10% is blocked." },
  { num: "03", title: "Velocity", desc: "More than 3 purchases or ₹5,000 in 10 minutes is blocked." },
  { num: "04", title: "Subscription", desc: "Hidden recurring charges are blocked when recurring is disabled." },
  { num: "05", title: "Wallet", desc: "Confirms the spend sits inside every limit you've set." },
  { num: "06", title: "Reserve", desc: "Funds are held atomically before the gateway is ever called." },
  { num: "07", title: "Gateway", desc: "Only a fully-cleared request reaches the payment provider." },
  { num: "08", title: "Audit", desc: "Every decision is written to a hash-chained, tamper-evident ledger." },
];

export default function KernelSection() {
  const { elementRef, progressRef } = useScrollProgress<HTMLDivElement>();
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      // Scale progress so the chain finishes lighting up while the section
      // is still mostly in view, rather than exactly at its edges.
      const scaled = Math.min(progressRef.current * 1.6, 1);
      setActiveCount(Math.round(scaled * steps.length));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [progressRef]);

  return (
    <section id="kernel" className="border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-16 max-w-[640px]">
          <div className="mb-4 font-mono text-xs text-accent">SAFETY KERNEL</div>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-tight tracking-tight">
            Every purchase passes through the kernel.
          </h2>
          <p className="mt-4 max-w-[520px] text-base text-text-2">
            Nine checks, one gate. If any of them fail, the request never
            reaches the payment gateway.
          </p>
        </div>

        <div ref={elementRef} className="hscroll flex overflow-x-auto pb-2">
          {steps.map((step, i) => {
            const isActive = i < activeCount;
            return (
              <div
                key={step.num}
                className="w-[180px] flex-none border-r border-hairline p-6 transition-opacity duration-500 last:border-r-0"
                style={{ opacity: isActive ? 1 : 0.32 }}
              >
                <div className="mb-3.5 font-mono text-[11px] text-text-3">{step.num}</div>
                <div className="mb-2 text-[15px] font-medium">{step.title}</div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-pass">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  PASS
                </div>
                <div className="mt-2.5 text-xs leading-relaxed text-text-3">{step.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
