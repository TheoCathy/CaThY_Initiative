import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { ROLES } from "../data/roles";
import AvatarBadge from "../components/AvatarBadge";
import { useGame } from "../context/GameContext";

export default function RoleSelectPage() {
  const navigate = useNavigate();
  const { avatarId, setRole } = useGame();

  useEffect(() => {
    if (!avatarId) navigate("/play/avatar", { replace: true });
  }, [avatarId, navigate]);

  if (!avatarId) return null;

  const selectRole = (roleId) => {
    setRole(roleId);
    navigate("/play/brief");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <AvatarBadge avatarId={avatarId} size="md" />
        <div className="text-left">
          <div className="text-xs font-mono text-white/40 uppercase">Step 2 of 3</div>
          <h1 className="text-2xl sm:text-3xl font-black">
            Choose your <span className="text-cathy-primary">ONE</span> role
          </h1>
        </div>
      </div>

      <p className="text-white/55 text-center mb-8 max-w-lg mx-auto">
        The school app is down. Pick the team member you want to be for this
        mission — you can only play one role per run.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {ROLES.map((role) => {
          const Icon = role.icon;
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => selectRole(role.id)}
              className="text-left rounded-xl p-4 border border-cathy-border bg-cathy-panel hover:border-cathy-primary hover:-translate-y-0.5 transition group"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: role.avatarAccent }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <Lock className="w-4 h-4 text-white/20 group-hover:text-cathy-primary/50 transition" />
              </div>
              <div className="text-sm font-bold text-white">{role.codename}</div>
              <div className="text-xs text-white/45 font-mono mt-0.5">{role.job}</div>
              <p className="text-xs text-white/40 mt-2 italic">&quot;{role.tagline}&quot;</p>
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <Link
          to="/play/avatar"
          className="text-sm text-white/40 hover:text-white/60 transition"
        >
          ← Change avatar
        </Link>
      </div>
    </div>
  );
}
