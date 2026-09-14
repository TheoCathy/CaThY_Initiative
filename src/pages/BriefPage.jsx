import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AvatarBadge from "../components/AvatarBadge";
import TerminalWindow from "../components/TerminalWindow";
import { getRole } from "../data/roles";
import { useGame } from "../context/GameContext";

export default function BriefPage() {
  const navigate = useNavigate();
  const { avatarId, roleId } = useGame();
  const role = getRole(roleId);

  useEffect(() => {
    if (!avatarId) navigate("/play/avatar", { replace: true });
    else if (!roleId) navigate("/play/role", { replace: true });
  }, [avatarId, roleId, navigate]);

  if (!avatarId || !role) return null;

  const Icon = role.icon;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-xs font-mono text-cathy-primary uppercase tracking-widest mb-4 text-center">
        Step 3 of 3 — Mission brief
      </div>

      <TerminalWindow title="alert_system.log">
        <div className="font-mono text-sm space-y-2 text-white/80 mb-6">
          <p>
            <span className="text-cathy-primary">&gt;</span> INCIDENT: School app
            compromised
          </p>
          <p>
            <span className="text-cathy-primary">&gt;</span> TIME: 08:45 — Results
            day
          </p>
          <p>
            <span className="text-cathy-primary">&gt;</span> YOUR ROLE:{" "}
            {role.codename}
          </p>
        </div>
      </TerminalWindow>

      <div className="mt-6 rounded-2xl p-6 border border-cathy-border bg-cathy-panel">
        <div className="flex items-center gap-4 mb-4">
          <AvatarBadge avatarId={avatarId} size="lg" />
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: role.avatarAccent }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-lg font-black text-white">{role.codename}</div>
            <div className="text-xs text-white/50 font-mono">{role.job}</div>
          </div>
        </div>
        <p className="text-white/50 text-xs italic mb-2">
          &quot;{role.tagline}&quot;
        </p>
        <p className="text-white/85 text-sm leading-relaxed mb-6">{role.brief}</p>
        <button
          type="button"
          onClick={() => navigate("/play/challenge")}
          className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-white bg-cathy-primary flex items-center justify-center gap-2 hover:brightness-110 transition"
        >
          Start challenge <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 text-center">
        <Link
          to="/play/role"
          className="text-sm text-white/40 hover:text-white/60 transition"
        >
          ← Pick a different role
        </Link>
      </div>
    </div>
  );
}
