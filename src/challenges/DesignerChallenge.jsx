import { useState } from "react";
import { ArrowRight } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";

const TRUST_Q = [
  {
    q: "Best headline for the “We're back” screen?",
    options: [
      "WARNING: SECURITY BREACH DETECTED",
      "We're back! Everything's safe now.",
      "Nothing happened, ignore the last message",
      "Contact IT immediately if you see this",
    ],
    correct: 1,
  },
  {
    q: "Best visual to rebuild trust?",
    options: [
      "A flashing red banner",
      "A pop-up ad",
      "A calm green checkmark",
      "No visual at all",
    ],
    correct: 2,
  },
];

export default function DesignerChallenge({ onDone }) {
  const [answers, setAnswers] = useState({});
  const allAnswered = Object.keys(answers).length === TRUST_Q.length;
  const allCorrect = TRUST_Q.every((q, i) => answers[i] === q.correct);

  return (
    <TerminalWindow title="rebuild_trust.fig">
      <div className="space-y-6">
        {TRUST_Q.map((q, qi) => (
          <div key={qi}>
            <p className="text-sm text-white/80 font-mono mb-2">{q.q}</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                const picked = answers[qi] === oi;
                const showResult = answers[qi] !== undefined;
                let style = "border-white/10 bg-white/5 hover:bg-white/10";
                if (showResult && oi === q.correct)
                  style = "border-emerald-500 bg-emerald-500/10";
                else if (showResult && picked)
                  style = "border-red-500 bg-red-500/10";
                else if (picked) style = "border-white bg-white/10";

                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={`text-left px-3 py-2 rounded-lg border text-xs sm:text-sm text-white/90 font-mono transition ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {allAnswered && (
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {allCorrect ? (
            <>
              <span className="text-emerald-400 text-sm font-mono">
                Trust: rebuilt.
              </span>
              <button
                type="button"
                onClick={onDone}
                className="px-4 py-2 rounded-lg font-semibold text-sm text-white bg-cathy-success flex items-center gap-1.5 hover:brightness-110 transition"
              >
                Unlock Player Card <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <span className="text-white/60 text-sm font-mono">
                Close — check the green answers above.
              </span>
              <button
                type="button"
                onClick={() => setAnswers({})}
                className="px-3 py-1.5 rounded-lg text-sm text-white/80 border border-white/20 hover:bg-white/5"
              >
                Try again
              </button>
            </>
          )}
        </div>
      )}
    </TerminalWindow>
  );
}
