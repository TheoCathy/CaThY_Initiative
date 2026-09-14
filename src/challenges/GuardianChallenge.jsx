import { useState } from "react";
import { ArrowRight } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";

const EMAILS = [
  { from: "IT-Support@theschool-portal-help.com", subj: "Account LOCKED in 1 hour", bad: true },
  { from: "sarah.jones@theschool.ac.uk", subj: "Notes from today's meeting", bad: false },
  { from: "no-reply@examboard.org.uk", subj: "Results day reminder", bad: false },
  { from: "admin@theschoo1.ac.uk", subj: "Urgent: password reset required", bad: true },
  { from: "canteen@theschool.ac.uk", subj: "Menu change next week", bad: false },
  { from: "p.owusu@theschool.ac.uk", subj: "PE kit reminder", bad: false },
];

export default function GuardianChallenge({ onDone }) {
  const [sel, setSel] = useState(new Set());
  const [checked, setChecked] = useState(false);

  const toggle = (i) => {
    if (checked) return;
    const next = new Set(sel);
    if (next.has(i)) next.delete(i);
    else if (next.size < 2) next.add(i);
    setSel(next);
  };

  const correct = [...sel].every((i) => EMAILS[i].bad) && sel.size === 2;

  return (
    <TerminalWindow title="inbox — school office">
      <p className="text-sm text-white/70 mb-4 font-mono">
        Click the 2 phishing emails. Look closely at the sender address.
      </p>
      <div className="grid sm:grid-cols-2 gap-2 mb-4">
        {EMAILS.map((e, i) => {
          const isSel = sel.has(i);
          let border = "border-white/10";
          if (checked && e.bad) border = "border-emerald-500";
          else if (checked && isSel) border = "border-red-500";
          else if (isSel) border = "border-white";

          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              className={`text-left px-3 py-2 rounded-lg border bg-white/5 hover:bg-white/10 transition ${border}`}
            >
              <div className="text-xs font-mono text-white/50">FROM</div>
              <div className="text-xs font-mono text-white/90 mb-1 break-all">
                {e.from}
              </div>
              <div className="text-xs font-mono text-white/70">{e.subj}</div>
            </button>
          );
        })}
      </div>
      {!checked ? (
        <button
          type="button"
          disabled={sel.size !== 2}
          onClick={() => setChecked(true)}
          className="px-4 py-2 rounded-lg font-semibold text-sm text-white bg-cathy-primary disabled:opacity-30 hover:brightness-110 transition"
        >
          Check my 2 picks
        </button>
      ) : correct ? (
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-emerald-400 text-sm font-mono">
            Phishing spotted.
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
            Not quite — the real fakes are highlighted green.
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
