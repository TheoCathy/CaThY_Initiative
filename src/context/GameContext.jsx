import { createContext, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "cathy-career-sprint-session";

function loadSession() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(session) {
  try {
    if (session) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } else {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    /* ignore storage errors */
  }
}

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [session, setSession] = useState(() => loadSession());

  const value = useMemo(
    () => ({
      avatarId: session?.avatarId ?? null,
      roleId: session?.roleId ?? null,
      challengeComplete: session?.challengeComplete ?? false,
      hasSession: Boolean(session?.avatarId && session?.roleId),

      setAvatar(avatarId) {
        setSession((prev) => {
          const next = { avatarId, roleId: null, challengeComplete: false };
          saveSession(next);
          return next;
        });
      },

      setRole(roleId) {
        setSession((prev) => {
          if (!prev?.avatarId) return prev;
          const next = {
            avatarId: prev.avatarId,
            roleId,
            challengeComplete: false,
          };
          saveSession(next);
          return next;
        });
      },

      completeChallenge() {
        setSession((prev) => {
          if (!prev) return prev;
          const next = { ...prev, challengeComplete: true };
          saveSession(next);
          return next;
        });
      },

      resetSession() {
        saveSession(null);
        setSession(null);
      },
    }),
    [session]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
