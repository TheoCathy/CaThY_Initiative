import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import {
  ArrowRight,
  Gamepad2,
  GraduationCap,
  Shield,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";
import { ROLES } from "../data/roles";

const STEPS = [
  {
    icon: Users,
    title: "Pick your avatar",
    desc: "Choose a fun character — no name, no email, no sign-up. Just you and your avatar.",
  },
  {
    icon: Gamepad2,
    title: "Choose ONE role",
    desc: "Play as a single tech hero this mission. Builder, Designer, Detective, Guardian, or Storyteller.",
  },
  {
    icon: Sparkles,
    title: "Complete the challenge",
    desc: "Solve a real-world-style puzzle in a terminal window — like a mini job simulation.",
  },
  {
    icon: Trophy,
    title: "Unlock your Player Card",
    desc: "Learn what the job actually involves, GCSE paths, pay ranges, and what to try next.",
  },
];

const OUTCOMES = [
  {
    icon: GraduationCap,
    title: "Discover jobs you didn't know existed",
    desc: "Tech isn't just coding — design, data, security, and communication all matter.",
  },
  {
    icon: Shield,
    title: "See yourself in the story",
    desc: "The mission is set on results day when the school app gets hacked. You're on the team.",
  },
];

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cathy-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cathy-border bg-cathy-panel text-xs font-mono text-white/60 mb-6">
            <span className="w-2 h-2 rounded-full bg-cathy-primary animate-pulse" />
            Ages 8–16 · No personal data collected
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-4">
            Your tech career
            <br />
            <span className="text-gradient">starts with a mission</span>
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            CaThY Career Sprint is a short game that puts you inside a real tech
            emergency. Pick an avatar, choose one role, solve the challenge, and
            unlock a Player Card packed with career info.
          </p>

          <Link
            to="/play/avatar"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-cathy-primary hover:brightness-110 transition text-lg animate-pulse-glow"
          >
            Start your mission <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <TerminalWindow title="mission_brief.txt">
            <div className="font-mono text-sm space-y-2 text-white/80">
              <p>
                <span className="text-cathy-primary">&gt;</span> 8:45am, results day.
              </p>
              <p>
                <span className="text-cathy-primary">&gt;</span> The school app just
                got hacked.
              </p>
              <p>
                <span className="text-cathy-primary">&gt;</span> Someone on the tech
                team needs YOU.
              </p>
              <p className="text-white/50 pt-2">
                // One player. One role. One challenge. Real career insights.
              </p>
            </div>
          </TerminalWindow>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-2">
            How it works
          </h2>
          <p className="text-white/50 text-center mb-8 max-w-lg mx-auto">
            Four quick steps from avatar to career discovery — takes about 10 minutes.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-xl p-5 border border-cathy-border bg-cathy-panel hover:border-cathy-primary/40 transition group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cathy-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-cathy-primary" />
                    </div>
                    <span className="text-xs font-mono text-white/30">
                      STEP {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16 rounded-2xl border border-cathy-border bg-cathy-panel p-6 sm:p-8">
          <h2 className="text-2xl font-black mb-2">What you&apos;ll get from it</h2>
          <p className="text-white/55 mb-6 max-w-2xl">
            This isn&apos;t a quiz about memorising facts. It&apos;s a taste of what
            different tech jobs actually feel like — and a roadmap for exploring them
            further.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {OUTCOMES.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cathy-surface flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-cathy-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{o.title}</h3>
                    <p className="text-sm text-white/55">{o.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <FcApproval className="shrink-0" /> What the job actually involves day-to-day
            </li>
            <li className="flex items-center gap-2">
              <FcApproval className="shrink-0" /> GCSE subjects that help
            </li>
            <li className="flex items-center gap-2">
              <FcApproval className="shrink-0" /> Paths in (degrees, apprenticeships)
            </li>
            <li className="flex items-center gap-2">
              <FcApproval className="shrink-0" /> Pay ranges &amp; job demand in the UK
            </li>
            <li className="flex items-center gap-2">
              <FcApproval className="shrink-0" /> Free things to try next
            </li>
            <li className="flex items-center gap-2">
              <FcApproval className="shrink-0" /> Privacy-first — avatars only, nothing saved online
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-black text-center mb-6">Meet the team</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {ROLES.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-cathy-border bg-cathy-panel text-sm"
                >
                  <Icon className="w-4 h-4 text-cathy-primary" />
                  <span className="font-mono text-white/70">{r.codename}</span>
                </div>
              );
            })}
          </div>
          <p className="text-center mt-4">
            <Link
              to="/roles"
              className="text-cathy-primary text-sm font-medium hover:underline"
            >
              Browse all roles in detail →
            </Link>
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/play/avatar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-cathy-primary hover:brightness-110 transition"
          >
            Pick your avatar &amp; play <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
