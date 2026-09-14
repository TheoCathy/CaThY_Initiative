import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RotateCcw, Sparkles } from "lucide-react";
import PlayerCard from "../components/PlayerCard";
import { getRole } from "../data/roles";
import { useGame } from "../context/GameContext";

export default function ResultsPage() {
  const navigate = useNavigate();
  const { avatarId, roleId, challengeComplete, resetSession } = useGame();
  const role = getRole(roleId);

  useEffect(() => {
    if (!avatarId) navigate("/play/avatar", { replace: true });
    else if (!roleId) navigate("/play/role", { replace: true });
    else if (!challengeComplete) navigate("/play/challenge", { replace: true });
  }, [avatarId, roleId, challengeComplete, navigate]);

  if (!avatarId || !role || !challengeComplete) return null;

  const handlePlayAgain = () => {
    resetSession();
    navigate("/play/avatar");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cathy-success/20 mb-4">
          <Sparkles className="w-7 h-7 text-cathy-success" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Mission complete!
        </h1>
        <p className="text-white/55 text-sm max-w-sm mx-auto">
          You might not have known this job existed an hour ago. Now you know
          what it&apos;s about — and whether it could be yours.
        </p>
      </div>

      <PlayerCard role={role} avatarId={avatarId} />

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          onClick={handlePlayAgain}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-cathy-primary hover:brightness-110 transition"
        >
          <RotateCcw className="w-4 h-4" /> Try another role
        </button>
        <Link
          to="/roles"
          className="w-full sm:w-auto text-center px-6 py-3 rounded-xl font-semibold text-white/80 border border-white/15 hover:bg-white/5 transition"
        >
          Browse all roles
        </Link>
        <Link
          to="/"
          className="text-sm text-white/40 hover:text-white/60 transition"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
