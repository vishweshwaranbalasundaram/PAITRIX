export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-hairline bg-base/75 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2 font-mono text-[15px] font-semibold tracking-tight">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          PAYTRIX
        </div>
        <div className="hidden gap-9 text-sm text-text-2 md:flex">
          <a href="#shop" className="hover:text-text-1 transition-colors">Shop</a>
          <a href="#kernel" className="hover:text-text-1 transition-colors">Safety</a>
          <a href="#outcomes" className="hover:text-text-1 transition-colors">Transactions</a>
          <a href="#proof" className="hover:text-text-1 transition-colors">Proof</a>
        </div>
        <a
          href="#shop"
          className="rounded-sm border border-hairline px-4 py-2 text-[13px] font-medium transition-colors hover:border-accent"
        >
          Try the agent
        </a>
      </div>
    </nav>
  );
}
