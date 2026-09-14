import { useState } from "react";
import { ArrowRight } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";

const LOGIN_ROWS = [
  { time: "08:02", user: "jsmith22", loc: "Newcastle, UK", bad: false },
  { time: "08:15", user: "amina.k", loc: "Newcastle, UK", bad: false },
  { time: "08:47", user: "t.wright", loc: "Leeds, UK", bad: false },
  { time: "03:14", user: "admin2", loc: "Antarctica (×400 in 2 min)", bad: true },
  { time: "09:01", user: "r.patel", loc: "Newcastle, UK", bad: false },
];

export default function DetectiveChallenge({ onDone }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);

  return (
    <TerminalWindow title="login_data.csv">
      <p className="text-sm text-white/70 mb-4 font-mono">
        Click the row that doesn&apos;t belong.
      </p>
      <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
        <div className="grid grid-cols-3 text-xs font-mono uppercase text-white/60 px-3 py-2 bg-cathy-surface">
          <span>Time</span>
          <span>User</span>
          <span>Location</span>
        </div>
        {LOGIN_ROWS.map((r, i) => {
          const isSel = picked === i;
          let bg = "bg-white/5 hover:bg-white/10";
          if (checked && r.bad) bg = "bg-emerald-500/10";
          else if (checked && isSel && !r.bad) bg = "bg-red-500/10";

          return (
            <button
              key={i}
              type="button"
              disabled={checked}
              onClick={() => setPicked(i)}
              className={`w-full grid grid-cols-3 text-left text-xs sm:text-sm font-mono px-3 py-2 transition ${bg} ${
                isSel ? "ring-1 ring-inset ring-white" : ""
              }`}
            >
              <span className="text-white/80">{r.time}</span>
              <span className="text-white/80">{r.user}</span>
              <span className="text-white/80">{r.loc}</span>
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
          Check my answer
        </button>
      ) : LOGIN_ROWS[picked].bad ? (
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-emerald-400 text-sm font-mono">
            That&apos;s the evidence.
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
            Not the one — look at time AND location together.
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
