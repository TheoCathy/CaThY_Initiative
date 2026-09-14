import { Link } from "react-router-dom";
import { ArrowRight, Lock, UserCircle } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";

export default function HowItWorksPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-black mb-2">How it works</h1>
      <p className="text-white/55 mb-10 text-lg">
        Everything you need to know before you jump in.
      </p>

      <div className="space-y-8">
        <section className="rounded-xl border border-cathy-border bg-cathy-panel p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <UserCircle className="w-5 h-5 text-cathy-primary" />
            One player at a time
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Each play-through follows one avatar through one role. You pick your
            character, choose a single tech hero, complete their challenge, and
            unlock their Player Card. Want to try another role? Start a new mission
            — your previous session clears when you pick a fresh avatar.
          </p>
          <TerminalWindow title="player_rules.cfg">
            <pre className="font-mono text-xs sm:text-sm text-white/70 whitespace-pre-wrap">
{`players.max = 1
players.identify_by = avatar_only
players.collect_pii = false
players.save_to_server = false`}
            </pre>
          </TerminalWindow>
        </section>

        <section className="rounded-xl border border-cathy-border bg-cathy-panel p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-cathy-primary" />
            Your privacy
          </h2>
          <p className="text-white/70 leading-relaxed">
            We never ask for your name, email, age, or school. You choose an emoji
            avatar and that&apos;s your whole identity. Progress is stored only in
            your browser tab (session storage) and disappears when you close the tab
            or start over. Nothing is sent to a server.
          </p>
        </section>

        <section className="rounded-xl border border-cathy-border bg-cathy-panel p-6">
          <h2 className="text-xl font-bold mb-3">The story</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            It&apos;s 8:45am on GCSE results day. Students are checking grades on
            the school app — but something&apos;s wrong. A hacker has broken in.
            Each role on the tech team has a different piece of the fix: reading
            logs, rebuilding trust, spotting bad data, catching phishing emails,
            or calming worried parents.
          </p>
          <p className="text-white/70 leading-relaxed">
            The challenges are simplified puzzles based on real skills those jobs
            use. Getting it wrong is fine — you can try again, and the game shows
            you the right answers.
          </p>
        </section>

        <section className="rounded-xl border border-cathy-border bg-cathy-panel p-6">
          <h2 className="text-xl font-bold mb-3">After the mission</h2>
          <p className="text-white/70 leading-relaxed">
            Your Player Card explains the real job behind the codename: what they
            do, useful GCSEs, how people get into the field, typical UK salaries,
            how in-demand the role is, and a free &quot;try this next&quot; suggestion.
            Share it with a teacher or parent if you want to talk about next steps.
          </p>
        </section>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/play/avatar"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-cathy-primary hover:brightness-110 transition"
        >
          Ready? Pick your avatar <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
