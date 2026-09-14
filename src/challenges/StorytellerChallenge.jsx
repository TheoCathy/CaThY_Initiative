import { useState } from "react";
import { ArrowRight } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";

const ANNOUNCEMENTS = [
  {
    text: "We have suffered a serious cyber attack and don't yet know the full extent of the damage.",
    bad: true,
  },
  {
    text: "This morning our school app had a temporary issue, which our team is already fixing.",
    bad: false,
  },
  {
    text: "Nothing is wrong, please ignore any strange messages you may have seen.",
    bad: true,
  },
  {
    text: "URGENT: DO NOT USE THE APP UNTIL FURTHER NOTICE.",
    bad: true,
  },
];

export default function StorytellerChallenge({ onDone }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);

  return (
    <TerminalWindow title="parent_announcement.draft">
      <p className="text-sm text-white/70 mb-4 font-mono">
        Pick the sentence that&apos;s honest AND calm.
      </p>
      <div className="space-y-2 mb-4">
        {ANNOUNCEMENTS.map((a, i) => {
          const isSel = picked === i;
          let border = "border-white/10 bg-white/5 hover:bg-white/10";
          if (checked && !a.bad) border = "border-emerald-500 bg-emerald-500/10";
          else if (checked && isSel) border = "border-red-500 bg-red-500/10";
          else if (isSel) border = "border-white bg-white/10";

          return (
            <button
              key={i}
              type="button"
              disabled={checked}
              onClick={() => setPicked(i)}
              className={`w-full text-left px-3 py-2 rounded-lg border text-xs sm:text-sm font-mono text-white/90 transition ${border}`}
            >
              {a.text}
            </button>
          );
        })}
      </div>
      {!checked ? (
        <button
          type="button"
          disabled={picked === null}
          onClick={() => setChecked(true)}
          className="px-4 py-2 rounded-lg font-semibold text-sm text-white bg-cathy-primary disabled:opacity-30 hover:brightness-110 transition"
        >
          Send it
        </button>
      ) : !ANNOUNCEMENTS[picked].bad ? (
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-emerald-400 text-sm font-mono">
            Parents stay calm. Nice work.
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
            That one causes panic — try the green one.
          </span>
          <button
            type="button"
            onClick={() => {
              setChecked(false);
              setPicked(null);
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
