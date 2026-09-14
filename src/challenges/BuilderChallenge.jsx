import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";

const LOG_LINES = [
  { text: "09:58:02  User “admin” logged in — Head Office (usual)", bad: false },
  { text: "09:58:10  Password changed for user “admin”", bad: false },
  { text: "10:01:12  New admin account “admin2” created — approved by: nobody", bad: true },
  { text: "10:02:03  Homepage file “index.html” updated", bad: false },
  { text: "10:03:15  Backup system switched OFF", bad: true },
  { text: "10:03:47  Firewall rule deleted: “Block unknown IPs”", bad: true },
  { text: "10:05:00  Homepage file “index.html” updated again", bad: false },
  { text: "10:06:02  Admin logged out", bad: false },
];

export default function BuilderChallenge({ onDone }) {
  const [sel, setSel] = useState(new Set());
  const [checked, setChecked] = useState(false);

  const toggle = (i) => {
    if (checked) return;
    const next = new Set(sel);
    if (next.has(i)) next.delete(i);
    else if (next.size < 3) next.add(i);
    setSel(next);
  };

  const correct =
    [...sel].every((i) => LOG_LINES[i].bad) && sel.size === 3;

  return (
    <TerminalWindow title="incident_log.txt">
      <p className="text-sm text-white/70 mb-4 font-mono">
        Click the 3 lines that show what the hacker did. Then check your work.
      </p>
      <div className="space-y-1.5 mb-4">
        {LOG_LINES.map((l, i) => {
          const isSel = sel.has(i);
          const showResult = checked;
          const isCorrectLine = LOG_LINES[i].bad;
          let border = "border-white/10";
          if (showResult && isCorrectLine) border = "border-emerald-500";
          else if (showResult && isSel && !isCorrectLine) border = "border-red-500";
          else if (isSel) border = "border-white";

          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              className={`w-full text-left font-mono text-xs sm:text-sm px-3 py-2 rounded-lg border transition-colors ${border} ${
                isSel ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {l.text}
              {showResult && isCorrectLine && (
                <Check className="inline w-3.5 h-3.5 ml-2 text-emerald-500" />
              )}
            </button>
          );
        })}
      </div>
      {!checked ? (
        <button
          type="button"
          disabled={sel.size !== 3}
          onClick={() => setChecked(true)}
          className="px-4 py-2 rounded-lg font-semibold text-sm text-white bg-cathy-primary disabled:opacity-30 hover:brightness-110 transition"
        >
          Check my 3 lines
        </button>
      ) : correct ? (
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-emerald-400 text-sm font-mono">
            Found it. That&apos;s the incident.
          </span>
          <button
            type="button"
            onClick={onDone}
            className="px-4 py-2 rounded-lg font-semibold text-sm text-white bg-cathy-success flex items-center gap-1.5 hover:brightness-110 transition"
          >
            Unlock Player Card <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-white/60 text-sm font-mono">
            Not quite — the correct lines are highlighted green.
          </span>
          <button
            type="button"
            onClick={() => {
              setChecked(false);
              setSel(new Set());
            }}
            className="px-3 py-1.5 rounded-lg text-sm text-white/80 border border-white/20 hover:bg-white/5"
          >
            Try again
          </button>
        </div>
      )}
    </TerminalWindow>
  );
}
