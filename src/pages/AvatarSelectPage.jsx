import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { AVATARS } from "../data/avatars";
import AvatarBadge from "../components/AvatarBadge";
import { useGame } from "../context/GameContext";

export default function AvatarSelectPage() {
  const navigate = useNavigate();
  const { setAvatar, hasSession } = useGame();
  const [selected, setSelected] = useState(null);

  const handleContinue = () => {
    if (!selected) return;
    setAvatar(selected);
    navigate("/play/role");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 text-cathy-primary mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-widest">
            Step 1 of 3
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black mb-2">
          Pick your <span className="text-gradient">avatar</span>
        </h1>
        <p className="text-white/55 max-w-md mx-auto">
          This is you in the game. No name needed — just pick a character you like!
        </p>
      </div>

      {hasSession && (
        <div className="mb-6 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-sm text-amber-200/90 text-center">
          Starting fresh will replace your current mission.{" "}
          <Link to="/play/brief" className="underline font-medium">
            Continue current mission →
          </Link>
        </div>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 mb-8">
        {AVATARS.map((avatar) => {
          const isSelected = selected === avatar.id;
          return (
            <button
              key={avatar.id}
              type="button"
              onClick={() => setSelected(avatar.id)}
              className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border transition-all hover:-translate-y-1 ${
                isSelected
                  ? "border-cathy-primary bg-cathy-primary/10 scale-105 shadow-lg shadow-cathy-primary/20"
                  : "border-cathy-border bg-cathy-panel hover:border-white/20"
              }`}
            >
              <AvatarBadge avatarId={avatar.id} size="lg" ring={isSelected} />
              <span className="text-xs font-mono text-white/60">{avatar.name}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          disabled={!selected}
          onClick={handleContinue}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-cathy-primary disabled:opacity-30 hover:brightness-110 transition"
        >
          Choose role next <ArrowRight className="w-4 h-4" />
        </button>
        <Link
          to="/"
          className="text-sm text-white/40 hover:text-white/60 transition"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
