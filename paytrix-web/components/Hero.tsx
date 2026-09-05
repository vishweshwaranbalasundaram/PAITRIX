"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { useDocumentScrollProgress } from "@/lib/useScrollProgress";

// CoreRings uses R3F hooks; load it only on the client, no SSR.
const CoreRings = dynamic(() => import("./CoreRings"), { ssr: false });

export default function Hero() {
  const progressRef = useDocumentScrollProgress(1200);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden border-b border-hairline">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.75]}
        >
          <CoreRings progressRef={progressRef} />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 pb-24 md:px-10">
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
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5">
        <span className="font-mono text-[11px] tracking-wider text-text-3">
          SCROLL TO SEE THE KERNEL DECIDE
        </span>
        <span className="relative h-6 w-px overflow-hidden bg-hairline">
          <span className="absolute inset-0 animate-scrolldown bg-accent" />
        </span>
      </div>
    </section>
  );
}
