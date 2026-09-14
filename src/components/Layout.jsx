import { Link, Outlet, useLocation } from "react-router-dom";
import { Terminal } from "lucide-react";
import AvatarBadge from "./AvatarBadge";
import { useGame } from "../context/GameContext";
import { getRole } from "../data/roles";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/roles", label: "Meet the roles" },
];

export default function Layout() {
  const { pathname } = useLocation();
  const { avatarId, roleId } = useGame();
  const role = roleId ? getRole(roleId) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-cathy-border bg-cathy-secondary/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-cathy-primary group-hover:scale-110 transition-transform" />
            <span className="font-mono text-xs sm:text-sm tracking-widest text-white/70 uppercase">
              CaThY Career Sprint
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-1">
            {NAV.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === to
                    ? "bg-cathy-primary/20 text-cathy-primary"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {avatarId && (
            <div className="flex items-center gap-2 pl-2 border-l border-cathy-border">
              <AvatarBadge avatarId={avatarId} size="sm" />
              {role && (
                <span className="hidden md:block text-xs font-mono text-white/50 max-w-[120px] truncate">
                  {role.codename}
                </span>
              )}
            </div>
          )}
        </div>

        <nav className="sm:hidden flex border-t border-cathy-border">
          {NAV.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex-1 py-2 text-center text-xs font-medium ${
                pathname === to ? "text-cathy-primary" : "text-white/50"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-cathy-border py-6 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-2">
          <p className="text-white/40 text-xs font-mono">
            Catch Them Young (CaThY) × TekkLab
          </p>
          <p className="text-white/25 text-xs max-w-md mx-auto">
            No sign-up. No personal data collected. Your avatar lives only in this browser tab.
          </p>
        </div>
      </footer>
    </div>
  );
}
