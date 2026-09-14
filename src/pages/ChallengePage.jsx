import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarBadge from "../components/AvatarBadge";
import { CHALLENGES } from "../challenges";
import { getRole } from "../data/roles";
import { useGame } from "../context/GameContext";

export default function ChallengePage() {
  const navigate = useNavigate();
  const { avatarId, roleId, completeChallenge } = useGame();
  const role = getRole(roleId);

  useEffect(() => {
    if (!avatarId) navigate("/play/avatar", { replace: true });
    else if (!roleId) navigate("/play/role", { replace: true });
  }, [avatarId, roleId, navigate]);

  if (!avatarId || !role) return null;

  const Challenge = CHALLENGES[role.id];

  const handleDone = () => {
    completeChallenge();
    navigate("/play/results");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <AvatarBadge avatarId={avatarId} size="sm" />
          <div>
            <div className="text-xs font-mono text-white/40">Playing as</div>
            <div className="text-sm font-bold text-white">{role.codename}</div>
          </div>
        </div>
        <Link
          to="/play/brief"
          className="text-white/40 text-xs font-mono hover:text-white/60"
        >
          ← brief
        </Link>
      </div>

      <Challenge onDone={handleDone} />
    </div>
  );
}
