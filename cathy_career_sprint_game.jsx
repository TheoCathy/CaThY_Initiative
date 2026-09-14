import React, { useState } from "react";
import {
  Code2, Palette, Search, ShieldCheck, MessageSquare,
  Check, X, ArrowRight, RotateCcw, Trophy, Terminal, Lock, Unlock,
} from "lucide-react";

const PRIMARY = "#D03737";
const SECONDARY = "#100A1C";
const SUCCESS = "#2F9E44";
const PANEL = "#17101F";

/* ---------------------------------------------------------------- */
/* Shared "terminal window" chrome — the signature visual device     */
/* ---------------------------------------------------------------- */
function TerminalWindow({ title, accent, children }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border" style={{ borderColor: "#2A2233", background: PANEL }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: accent }}>
        <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
        <span className="ml-2 font-mono text-xs tracking-widest text-white/90 uppercase">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Role definitions                                                  */
/* ---------------------------------------------------------------- */
const ROLES = [
  {
    id: "builder",
    codename: "THE BUILDER",
    job: "Software Developer",
    icon: Code2,
    tagline: "Writes the code. Builds the fix.",
    brief: "The homepage is broken. Find the 3 log lines that show what the hacker actually did.",
    info: {
      does: "Writes the code that builds and runs the apps and sites you use every day — from TikTok to your school portal.",
      gcse: "Computer Science, Maths",
      path: "A-levels in Computer Science/Maths → a Computer Science degree, OR a Software Engineering Degree Apprenticeship (earn while you train, no student debt).",
      pay: ["£24,000 – £32,000", "£45,000 – £65,000+"],
      demand: "One of the most in-demand roles in the UK — nearly every industry needs developers, not just tech companies.",
      next: "Try a free intro to coding on Scratch or code.org.",
    },
  },
  {
    id: "designer",
    codename: "THE DESIGNER",
    job: "UX / UI Designer",
    icon: Palette,
    tagline: "Makes people trust it again.",
    brief: "The app is fixed. Now design the moment that makes everyone trust it again.",
    info: {
      does: "Decides how an app or website feels to use — why a button feels satisfying to press, or why an app is easy to navigate.",
      gcse: "Art & Design, Computer Science",
      path: "A-level Art/Graphics helps but isn't essential → a UX bootcamp, or a degree in Design, Psychology or Computer Science.",
      pay: ["£22,000 – £28,000", "£45,000 – £70,000+"],
      demand: "Growing fast — every company with an app or website needs someone thinking about the user's experience.",
      next: "Try redesigning one app icon or screen you use daily, just for fun.",
    },
  },
  {
    id: "detective",
    codename: "THE DETECTIVE",
    job: "Data Analyst",
    icon: Search,
    tagline: "Finds the story in the numbers.",
    brief: "Somewhere in this login data is the evidence. Find the row that doesn't belong.",
    info: {
      does: "Finds the story hidden in numbers — like why your For You page seems to know you too well.",
      gcse: "Maths, Computer Science",
      path: "A-level Maths (strongly recommended) → a degree in Maths, Computer Science, Economics or Data Science, or a Data Analyst apprenticeship.",
      pay: ["£23,000 – £26,000", "£35,000 – £50,000+"],
      demand: "High and rising — nearly every sector (health, sport, retail, government) now hires data analysts.",
      next: "Try a free beginner course in Excel or Google's Data Analytics course.",
    },
  },
  {
    id: "guardian",
    codename: "THE GUARDIAN",
    job: "Cyber Security Analyst",
    icon: ShieldCheck,
    tagline: "Thinks like a hacker. Works for the good guys.",
    brief: "Two of these six emails let the hacker in. Spot the fakes.",
    info: {
      does: "Thinks like a hacker — but works for the good guys, so the hackers lose. Spots threats before they cause damage.",
      gcse: "Computer Science, Maths",
      path: "A-levels in Computer Science/Maths, or a Cyber Security Apprenticeship. Certifications (like CompTIA Security+) matter as much as a degree here.",
      pay: ["£25,000 – £35,000", "£45,000 – £80,000+"],
      demand: "Very high — the UK has an ongoing shortage of skilled cyber professionals, so this field genuinely needs more people.",
      next: "Try the free CyberFirst courses from the National Cyber Security Centre (built for students).",
    },
  },
  {
    id: "storyteller",
    codename: "THE STORYTELLER",
    job: "Product / Tech Communicator",
    icon: MessageSquare,
    tagline: "Translates tech into human.",
    brief: "Parents are worried. Pick the sentence that tells them the truth without causing panic.",
    info: {
      does: "Translates between the people who build the tech and the humans who use it — writing the words that explain what's happening and why it matters.",
      gcse: "English, Media Studies, Computer Science",
      path: "A-level English/Media helps → a degree in English, Communications, Journalism or Marketing, or a Marketing/Content apprenticeship.",
      pay: ["£24,000 – £27,000", "£35,000 – £56,000+"],
      demand: "Growing — as tech products multiply, companies need people who can explain them clearly to non-technical audiences.",
      next: "Try writing a 3-sentence explanation of any app for someone who's never used a smartphone.",
    },
  },
];

/* ---------------------------------------------------------------- */
/* Challenge content + components                                    */
/* ---------------------------------------------------------------- */
const LOG_LINES = [
  { text: "09:58:02  User \u201cadmin\u201d logged in \u2014 Head Office (usual)", bad: false },
  { text: "09:58:10  Password changed for user \u201cadmin\u201d", bad: false },
  { text: "10:01:12  New admin account \u201cadmin2\u201d created \u2014 approved by: nobody", bad: true },
  { text: "10:02:03  Homepage file \u201cindex.html\u201d updated", bad: false },
  { text: "10:03:15  Backup system switched OFF", bad: true },
  { text: "10:03:47  Firewall rule deleted: \u201cBlock unknown IPs\u201d", bad: true },
  { text: "10:05:00  Homepage file \u201cindex.html\u201d updated again", bad: false },
  { text: "10:06:02  Admin logged out", bad: false },
];

function BuilderChallenge({ onDone }) {
  const [sel, setSel] = useState(new Set());
  const [checked, setChecked] = useState(false);
  const toggle = (i) => {
    if (checked) return;
    const next = new Set(sel);
    next.has(i) ? next.delete(i) : next.size < 3 && next.add(i);
    setSel(next);
  };
  const correct = [...sel].every((i) => LOG_LINES[i].bad) && sel.size === 3;
  return (
    <TerminalWindow title="incident_log.txt" accent={PRIMARY}>
      <p className="text-sm text-white/70 mb-4 font-mono">Click the 3 lines that show what the hacker did. Then check your work.</p>
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
              onClick={() => toggle(i)}
              className={`w-full text-left font-mono text-xs sm:text-sm px-3 py-2 rounded-lg border transition-colors ${border} ${isSel ? "bg-white/10" : "bg-white/5"}`}
            >
              {l.text}
              {showResult && isCorrectLine && <Check className="inline w-3.5 h-3.5 ml-2 text-emerald-500" />}
            </button>
          );
        })}
      </div>
      {!checked ? (
        <button
          disabled={sel.size !== 3}
          onClick={() => setChecked(true)}
          className="px-4 py-2 rounded-lg font-semibold text-sm text-white disabled:opacity-30"
          style={{ background: PRIMARY }}
        >
          Check my 3 lines
        </button>
      ) : correct ? (
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 text-sm font-mono">Found it. That's the incident.</span>
          <button onClick={onDone} className="px-4 py-2 rounded-lg font-semibold text-sm text-white flex items-center gap-1.5" style={{ background: SUCCESS }}>
            Unlock Player Card <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-white/60 text-sm font-mono">Not quite — the correct lines are highlighted green.</span>
          <button onClick={() => { setChecked(false); setSel(new Set()); }} className="px-3 py-1.5 rounded-lg text-sm text-white/80 border border-white/20">Try again</button>
        </div>
      )}
    </TerminalWindow>
  );
}

const TRUST_Q = [
  {
    q: "Best headline for the \u201cWe're back\u201d screen?",
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
    options: ["A flashing red banner", "A pop-up ad", "A calm green checkmark", "No visual at all"],
    correct: 2,
  },
];

function DesignerChallenge({ onDone }) {
  const [answers, setAnswers] = useState({});
  const allAnswered = Object.keys(answers).length === TRUST_Q.length;
  const allCorrect = TRUST_Q.every((q, i) => answers[i] === q.correct);
  return (
    <TerminalWindow title="rebuild_trust.fig" accent={PRIMARY}>
      <div className="space-y-6">
        {TRUST_Q.map((q, qi) => (
          <div key={qi}>
            <p className="text-sm text-white/80 font-mono mb-2">{q.q}</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                const picked = answers[qi] === oi;
                const showResult = answers[qi] !== undefined;
                let style = "border-white/10 bg-white/5";
                if (showResult && oi === q.correct) style = "border-emerald-500 bg-emerald-500/10";
                else if (showResult && picked) style = "border-red-500 bg-red-500/10";
                else if (picked) style = "border-white";
                return (
                  <button
                    key={oi}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={`text-left px-3 py-2 rounded-lg border text-xs sm:text-sm text-white/90 font-mono ${style}`}
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
        <div className="mt-5 flex items-center gap-3">
          {allCorrect ? (
            <>
              <span className="text-emerald-400 text-sm font-mono">Trust: rebuilt.</span>
              <button onClick={onDone} className="px-4 py-2 rounded-lg font-semibold text-sm text-white flex items-center gap-1.5" style={{ background: SUCCESS }}>
                Unlock Player Card <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <span className="text-white/60 text-sm font-mono">Close — check the green answers above.</span>
              <button onClick={() => setAnswers({})} className="px-3 py-1.5 rounded-lg text-sm text-white/80 border border-white/20">Try again</button>
            </>
          )}
        </div>
      )}
    </TerminalWindow>
  );
}

const LOGIN_ROWS = [
  { time: "08:02", user: "jsmith22", loc: "Newcastle, UK", bad: false },
  { time: "08:15", user: "amina.k", loc: "Newcastle, UK", bad: false },
  { time: "08:47", user: "t.wright", loc: "Leeds, UK", bad: false },
  { time: "03:14", user: "admin2", loc: "Antarctica (\u00d7400 in 2 min)", bad: true },
  { time: "09:01", user: "r.patel", loc: "Newcastle, UK", bad: false },
];

function DetectiveChallenge({ onDone }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);
  return (
    <TerminalWindow title="login_data.csv" accent={PRIMARY}>
      <p className="text-sm text-white/70 mb-4 font-mono">Click the row that doesn't belong.</p>
      <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
        <div className="grid grid-cols-3 text-xs font-mono uppercase text-white/60 px-3 py-2" style={{ background: "#221a2b" }}>
          <span>Time</span><span>User</span><span>Location</span>
        </div>
        {LOGIN_ROWS.map((r, i) => {
          const isSel = picked === i;
          let bg = i % 2 ? "bg-white/5" : "bg-white/5";
          if (checked && r.bad) bg = "bg-emerald-500/10";
          else if (checked && isSel && !r.bad) bg = "bg-red-500/10";
          return (
            <button
              key={i}
              disabled={checked}
              onClick={() => setPicked(i)}
              className={`w-full grid grid-cols-3 text-left text-xs sm:text-sm font-mono px-3 py-2 ${bg} ${isSel ? "ring-1 ring-inset ring-white" : ""}`}
            >
              <span className="text-white/80">{r.time}</span>
              <span className="text-white/80">{r.user}</span>
              <span className="text-white/80">{r.loc}</span>
            </button>
          );
        })}
      </div>
      {!checked ? (
        <button disabled={picked === null} onClick={() => setChecked(true)} className="px-4 py-2 rounded-lg font-semibold text-sm text-white disabled:opacity-30" style={{ background: PRIMARY }}>
          Check my answer
        </button>
      ) : LOGIN_ROWS[picked].bad ? (
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 text-sm font-mono">That's the evidence.</span>
          <button onClick={onDone} className="px-4 py-2 rounded-lg font-semibold text-sm text-white flex items-center gap-1.5" style={{ background: SUCCESS }}>
            Unlock Player Card <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-white/60 text-sm font-mono">Not the one — look at time AND location together.</span>
          <button onClick={() => { setChecked(false); setPicked(null); }} className="px-3 py-1.5 rounded-lg text-sm text-white/80 border border-white/20">Try again</button>
        </div>
      )}
    </TerminalWindow>
  );
}

const EMAILS = [
  { from: "IT-Support@theschool-portal-help.com", subj: "Account LOCKED in 1 hour", bad: true },
  { from: "sarah.jones@theschool.ac.uk", subj: "Notes from today's meeting", bad: false },
  { from: "no-reply@examboard.org.uk", subj: "Results day reminder", bad: false },
  { from: "admin@theschoo1.ac.uk", subj: "Urgent: password reset required", bad: true },
  { from: "canteen@theschool.ac.uk", subj: "Menu change next week", bad: false },
  { from: "p.owusu@theschool.ac.uk", subj: "PE kit reminder", bad: false },
];

function GuardianChallenge({ onDone }) {
  const [sel, setSel] = useState(new Set());
  const [checked, setChecked] = useState(false);
  const toggle = (i) => {
    if (checked) return;
    const next = new Set(sel);
    next.has(i) ? next.delete(i) : next.size < 2 && next.add(i);
    setSel(next);
  };
  const correct = [...sel].every((i) => EMAILS[i].bad) && sel.size === 2;
  return (
    <TerminalWindow title="inbox \u2014 school office" accent={PRIMARY}>
      <p className="text-sm text-white/70 mb-4 font-mono">Click the 2 phishing emails. Look closely at the sender address.</p>
      <div className="grid sm:grid-cols-2 gap-2 mb-4">
        {EMAILS.map((e, i) => {
          const isSel = sel.has(i);
          let border = "border-white/10";
          if (checked && e.bad) border = "border-emerald-500";
          else if (checked && isSel) border = "border-red-500";
          else if (isSel) border = "border-white";
          return (
            <button key={i} onClick={() => toggle(i)} className={`text-left px-3 py-2 rounded-lg border bg-white/5 ${border}`}>
              <div className="text-xs font-mono text-white/50">FROM</div>
              <div className="text-xs font-mono text-white/90 mb-1 break-all">{e.from}</div>
              <div className="text-xs font-mono text-white/70">{e.subj}</div>
            </button>
          );
        })}
      </div>
      {!checked ? (
        <button disabled={sel.size !== 2} onClick={() => setChecked(true)} className="px-4 py-2 rounded-lg font-semibold text-sm text-white disabled:opacity-30" style={{ background: PRIMARY }}>
          Check my 2 picks
        </button>
      ) : correct ? (
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 text-sm font-mono">Phishing spotted.</span>
          <button onClick={onDone} className="px-4 py-2 rounded-lg font-semibold text-sm text-white flex items-center gap-1.5" style={{ background: SUCCESS }}>
            Unlock Player Card <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-white/60 text-sm font-mono">Not quite — the real fakes are highlighted green.</span>
          <button onClick={() => { setChecked(false); setSel(new Set()); }} className="px-3 py-1.5 rounded-lg text-sm text-white/80 border border-white/20">Try again</button>
        </div>
      )}
    </TerminalWindow>
  );
}

const ANNOUNCEMENTS = [
  { text: "We have suffered a serious cyber attack and don't yet know the full extent of the damage.", bad: true },
  { text: "This morning our school app had a temporary issue, which our team is already fixing.", bad: false },
  { text: "Nothing is wrong, please ignore any strange messages you may have seen.", bad: true },
  { text: "URGENT: DO NOT USE THE APP UNTIL FURTHER NOTICE.", bad: true },
];

function StorytellerChallenge({ onDone }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);
  return (
    <TerminalWindow title="parent_announcement.draft" accent={PRIMARY}>
      <p className="text-sm text-white/70 mb-4 font-mono">Pick the sentence that's honest AND calm.</p>
      <div className="space-y-2 mb-4">
        {ANNOUNCEMENTS.map((a, i) => {
          const isSel = picked === i;
          let border = "border-white/10 bg-white/5";
          if (checked && !a.bad) border = "border-emerald-500 bg-emerald-500/10";
          else if (checked && isSel) border = "border-red-500 bg-red-500/10";
          else if (isSel) border = "border-white";
          return (
            <button key={i} disabled={checked} onClick={() => setPicked(i)} className={`w-full text-left px-3 py-2 rounded-lg border text-xs sm:text-sm font-mono text-white/90 ${border}`}>
              {a.text}
            </button>
          );
        })}
      </div>
      {!checked ? (
        <button disabled={picked === null} onClick={() => setChecked(true)} className="px-4 py-2 rounded-lg font-semibold text-sm text-white disabled:opacity-30" style={{ background: PRIMARY }}>
          Send it
        </button>
      ) : !ANNOUNCEMENTS[picked].bad ? (
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 text-sm font-mono">Parents stay calm. Nice work.</span>
          <button onClick={onDone} className="px-4 py-2 rounded-lg font-semibold text-sm text-white flex items-center gap-1.5" style={{ background: SUCCESS }}>
            Unlock Player Card <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-white/60 text-sm font-mono">That one causes panic — try the green one.</span>
          <button onClick={() => { setChecked(false); setPicked(null); }} className="px-3 py-1.5 rounded-lg text-sm text-white/80 border border-white/20">Try again</button>
        </div>
      )}
    </TerminalWindow>
  );
}

const CHALLENGES = {
  builder: BuilderChallenge,
  designer: DesignerChallenge,
  detective: DetectiveChallenge,
  guardian: GuardianChallenge,
  storyteller: StorytellerChallenge,
};

/* ---------------------------------------------------------------- */
/* Player card reveal                                                */
/* ---------------------------------------------------------------- */
function PlayerCard({ role, onBack }) {
  const Icon = role.icon;
  return (
    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#2A2233", background: PANEL }}>
      <div className="px-6 py-5 flex items-center gap-4" style={{ background: SECONDARY }}>
        <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: PRIMARY }}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <div className="text-xs font-mono tracking-widest text-white/50 uppercase">Player Card Unlocked</div>
          <div className="text-xl font-black text-white tracking-tight">{role.codename}</div>
          <div className="text-sm text-white/60">{role.job}</div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <Field label="What they do" value={role.info.does} />
        <Field label="GCSE foundations" value={role.info.gcse} />
        <Field label="Path in" value={role.info.path} />
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg p-3" style={{ background: "#221a2b" }}>
            <div className="text-xs font-mono uppercase text-white/40 mb-1">Starting pay</div>
            <div className="text-sm font-bold" style={{ color: PRIMARY }}>{role.info.pay[0]}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: "#221a2b" }}>
            <div className="text-xs font-mono uppercase text-white/40 mb-1">Experienced</div>
            <div className="text-sm font-bold" style={{ color: PRIMARY }}>{role.info.pay[1]}</div>
          </div>
        </div>
        <Field label="Demand" value={role.info.demand} />
        <Field label="Try this next" value={role.info.next} accent />
      </div>
      <div className="px-6 pb-6">
        <button onClick={onBack} className="w-full py-2.5 rounded-lg text-sm font-semibold text-white/90 border border-white/15">
          Back to character select
        </button>
      </div>
    </div>
  );
}

function Field({ label, value, accent }) {
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: accent ? PRIMARY : "#8A8296" }}>{label}</div>
      <p className="text-sm text-white/85 leading-relaxed">{value}</p>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Main app                                                          */
/* ---------------------------------------------------------------- */
export default function App() {
  const [view, setView] = useState("select"); // select | brief | challenge | card | complete
  const [activeId, setActiveId] = useState(null);
  const [unlocked, setUnlocked] = useState(new Set());

  const active = ROLES.find((r) => r.id === activeId);
  const allDone = unlocked.size === ROLES.length;

  const selectRole = (id) => { setActiveId(id); setView("brief"); };
  const startChallenge = () => setView("challenge");
  const finishChallenge = () => {
    setUnlocked((s) => new Set([...s, activeId]));
    setView("card");
  };
  const backToSelect = () => { setView(unlocked.size === ROLES.length ? "complete" : "select"); setActiveId(null); };

  return (
    <div className="min-h-screen w-full flex items-start justify-center p-4 sm:p-8" style={{ background: SECONDARY }}>
      <div className="w-full max-w-xl">
        {/* header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="font-mono text-xs tracking-widest text-white/50 uppercase">CaThY Career Sprint</span>
          </div>
          <div className="flex items-center gap-1">
            {ROLES.map((r) => (
              <span key={r.id} className="w-2 h-2 rounded-full" style={{ background: unlocked.has(r.id) ? PRIMARY : "#3A3145" }} />
            ))}
          </div>
        </div>

        {view === "select" && (
          <>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-1">PICK YOUR<br /><span style={{ color: PRIMARY }}>PLAYER</span></h1>
            <p className="text-white/50 text-sm font-mono mb-6">8:45am, results day. The school app just got hacked. Choose your role.</p>
            <div className="grid grid-cols-2 gap-3">
              {ROLES.map((r) => {
                const Icon = r.icon;
                const done = unlocked.has(r.id);
                return (
                  <button
                    key={r.id}
                    onClick={() => selectRole(r.id)}
                    className="text-left rounded-xl p-4 border transition-transform hover:-translate-y-0.5"
                    style={{ background: PANEL, borderColor: done ? PRIMARY : "#2A2233" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: done ? PRIMARY : "#2A2233" }}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {done ? <Unlock className="w-4 h-4 text-white/40" /> : <Lock className="w-4 h-4 text-white/25" />}
                    </div>
                    <div className="text-sm font-bold text-white">{r.codename}</div>
                    <div className="text-xs text-white/45 font-mono mt-0.5">{r.job}</div>
                  </button>
                );
              })}
              <div className="rounded-xl p-4 border border-dashed flex flex-col items-center justify-center text-center" style={{ borderColor: "#2A2233" }}>
                <Trophy className="w-5 h-5 mb-1" style={{ color: unlocked.size === ROLES.length ? PRIMARY : "#3A3145" }} />
                <span className="text-xs font-mono text-white/40">{unlocked.size}/5 unlocked</span>
              </div>
            </div>
          </>
        )}

        {view === "brief" && active && (
          <div>
            <button onClick={backToSelect} className="text-white/40 text-xs font-mono mb-4">&larr; back</button>
            <div className="rounded-2xl p-6 border" style={{ background: PANEL, borderColor: "#2A2233" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: PRIMARY }}>
                  <active.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-black text-white">{active.codename}</div>
                  <div className="text-xs text-white/50 font-mono">{active.job}</div>
                </div>
              </div>
              <p className="text-white/50 text-xs italic mb-2">"{active.tagline}"</p>
              <p className="text-white/85 text-sm leading-relaxed mb-6">{active.brief}</p>
              <button onClick={startChallenge} className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white flex items-center gap-2" style={{ background: PRIMARY }}>
                Start challenge <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {view === "challenge" && active && (
          <div>
            <button onClick={backToSelect} className="text-white/40 text-xs font-mono mb-4">&larr; back</button>
            {React.createElement(CHALLENGES[active.id], { onDone: finishChallenge })}
          </div>
        )}

        {view === "card" && active && (
          <div>
            <button onClick={backToSelect} className="text-white/40 text-xs font-mono mb-4">&larr; back to characters</button>
            <PlayerCard role={active} onBack={backToSelect} />
          </div>
        )}

        {view === "complete" && (
          <div className="text-center py-10">
            <Trophy className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY }} />
            <h2 className="text-2xl font-black text-white mb-2">All 5 roles unlocked!</h2>
            <p className="text-white/60 text-sm mb-6 max-w-xs mx-auto">Some of you didn't know these jobs existed an hour ago. Now you know which one might be yours.</p>
            <button
              onClick={() => { setUnlocked(new Set()); setView("select"); }}
              className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white inline-flex items-center gap-2"
              style={{ background: PRIMARY }}
            >
              <RotateCcw className="w-4 h-4" /> Play again
            </button>
          </div>
        )}

        <p className="text-center text-white/25 text-xs font-mono mt-8">Catch Them Young (CaThY) &times; Tekklab</p>
      </div>
    </div>
  );
}
