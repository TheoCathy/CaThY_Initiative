import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ROLES } from "../data/roles";

export default function RolesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-black mb-2">Meet the roles</h1>
      <p className="text-white/55 mb-10 max-w-2xl">
        Five different tech careers, one hacked school app. In the game you play as
        one role — but here you can read about all of them before you choose.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {ROLES.map((role) => {
          const Icon = role.icon;
          return (
            <article
              key={role.id}
              className="rounded-xl border border-cathy-border bg-cathy-panel p-5 hover:border-cathy-primary/30 transition"
            >
              <div className="flex items-start gap-4 mb-4">
                {role.image ? (
                  <img
                    src={role.image}
                    alt={role.codename}
                    className="w-24 h-24 rounded-2xl object-cover shrink-0"
                    style={{ background: role.avatarAccent }}
                  />
                ) : (
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: role.avatarAccent }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                )}
                <div>
                  <h2 className="font-black text-lg text-white">{role.codename}</h2>
                  <p className="text-sm text-white/50 font-mono">{role.job}</p>
                  <p className="text-xs text-white/40 italic mt-1">
                    &quot;{role.tagline}&quot;
                  </p>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-3">
                {role.info.does}
              </p>
              <p className="text-xs font-mono text-cathy-primary">
                Challenge: {role.brief}
              </p>
            </article>
          );
        })}
      </div>

      <div className="text-center rounded-xl border border-dashed border-cathy-border p-8">
        <p className="text-white/60 mb-4">
          Ready to step into one of these roles?
        </p>
        <Link
          to="/play/avatar"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-cathy-primary hover:brightness-110 transition"
        >
          Start the mission <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
