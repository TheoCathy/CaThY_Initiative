import AvatarBadge from "./AvatarBadge";

function Field({ label, value, accent }) {
  return (
    <div>
      <div
        className={`text-xs font-mono uppercase tracking-wider mb-1 ${
          accent ? "text-cathy-primary" : "text-cathy-muted"
        }`}
      >
        {label}
      </div>
      <p className="text-sm text-white/85 leading-relaxed">{value}</p>
    </div>
  );
}

export default function PlayerCard({ role, avatarId }) {
  const Icon = role.icon;

  return (
    <div className="rounded-2xl overflow-hidden border border-cathy-border bg-cathy-panel">
      <div className="px-6 py-5 flex items-center gap-4 bg-cathy-secondary">
        <div className="relative">
          <AvatarBadge avatarId={avatarId} size="lg" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg flex items-center justify-center bg-cathy-primary">
            <Icon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <div className="text-xs font-mono tracking-widest text-white/50 uppercase">
            Player Card Unlocked
          </div>
          <div className="text-xl font-black text-white tracking-tight">
            {role.codename}
          </div>
          <div className="text-sm text-white/60">{role.job}</div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <Field label="What they do" value={role.info.does} />
        <Field label="GCSE foundations" value={role.info.gcse} />
        <Field label="Path in" value={role.info.path} />
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg p-3 bg-cathy-surface">
            <div className="text-xs font-mono uppercase text-white/40 mb-1">
              Starting pay
            </div>
            <div className="text-sm font-bold text-cathy-primary">
              {role.info.pay[0]}
            </div>
          </div>
          <div className="rounded-lg p-3 bg-cathy-surface">
            <div className="text-xs font-mono uppercase text-white/40 mb-1">
              Experienced
            </div>
            <div className="text-sm font-bold text-cathy-primary">
              {role.info.pay[1]}
            </div>
          </div>
        </div>
        <Field label="Demand" value={role.info.demand} />
        <Field label="Try this next" value={role.info.next} accent />
      </div>
    </div>
  );
}
