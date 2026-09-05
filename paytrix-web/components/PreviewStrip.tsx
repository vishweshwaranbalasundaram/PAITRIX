const tiles = [
  { tag: "WALLET", title: "Agent Authority", glyph: "₹" },
  { tag: "CHAT", title: "Conversational Shopping", glyph: "AI" },
  { tag: "KERNEL", title: "Live Safety Checks", glyph: "PX" },
  { tag: "LEDGER", title: "Immutable Audit", glyph: "#" },
];

export default function PreviewStrip() {
  return (
    <div className="grid grid-cols-2 gap-px border-b border-hairline bg-hairline md:grid-cols-4">
      {tiles.map((tile) => (
        <div
          key={tile.tag}
          className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden bg-base p-5"
        >
          <span className="font-mono text-[11px] text-text-3">{tile.tag}</span>
          <span className="text-sm font-medium text-text-1">{tile.title}</span>
          <span className="pointer-events-none absolute bottom-3 right-3.5 font-mono text-4xl font-semibold text-surface-2">
            {tile.glyph}
          </span>
        </div>
      ))}
    </div>
  );
}
