import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TabStrip from "@/components/TabStrip";
import IntroSlide from "@/components/IntroSlide";
import WalletSection from "@/components/WalletSection";
import KernelSection from "@/components/KernelSection";
import OutcomesSection from "@/components/OutcomesSection";
import ProofSection from "@/components/ProofSection";
import FinalAndFooter from "@/components/FinalAndFooter";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TabStrip />
      <IntroSlide />
      <WalletSection />
      <KernelSection />
      <OutcomesSection />
      <ProofSection />
      <FinalAndFooter />
    </main>
  );
}
