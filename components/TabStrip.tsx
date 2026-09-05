const tabs = [
  { label: "01. Agent Authority", href: "#shop" },
  { label: "02. Safety Kernel", href: "#kernel" },
  { label: "03. Transactions", href: "#outcomes" },
  { label: "04. Proof", href: "#proof" },
];

export default function TabStrip() {
  return (
    <nav
      aria-label="Sections"
      className="hscroll sticky top-16 z-40 flex overflow-x-auto border-b border-hairline bg-surface"
    >
      {tabs.map((tab, i) => (
        <a
          key={tab.href}
          href={tab.href}
          className={`whitespace-nowrap border-r border-hairline px-6 py-4 font-mono text-xs text-text-2 transition-colors hover:bg-surface-2 hover:text-text-1 ${
            i === 0 ? "pl-6 md:pl-10" : ""
          }`}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
}
