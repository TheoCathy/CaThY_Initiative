export const AVATARS = [
  { id: "rocket", emoji: "🚀", name: "Rocket", color: "#6366F1" },
  { id: "pixel", emoji: "👾", name: "Pixel", color: "#A855F7" },
  { id: "bolt", emoji: "⚡", name: "Bolt", color: "#F59E0B" },
  { id: "star", emoji: "⭐", name: "Star", color: "#EAB308" },
  { id: "fox", emoji: "🦊", name: "Fox", color: "#F97316" },
  { id: "panda", emoji: "🐼", name: "Panda", color: "#64748B" },
  { id: "dragon", emoji: "🐉", name: "Dragon", color: "#10B981" },
  { id: "robot", emoji: "🤖", name: "Bot", color: "#06B6D4" },
  { id: "cat", emoji: "🐱", name: "Cat", color: "#EC4899" },
  { id: "alien", emoji: "👽", name: "Alien", color: "#84CC16" },
];

export function getAvatar(id) {
  return AVATARS.find((a) => a.id === id) ?? AVATARS[0];
}
