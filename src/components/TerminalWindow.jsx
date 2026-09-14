export default function TerminalWindow({ title, children }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-cathy-border bg-cathy-panel">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-cathy-primary">
        <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
        <span className="ml-2 font-mono text-xs tracking-widest text-white/90 uppercase">
          {title}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
