import { getAvatar } from "../data/avatars";

export default function AvatarBadge({ avatarId, size = "md", ring = false }) {
  const avatar = getAvatar(avatarId);
  const sizes = {
    sm: "w-8 h-8 text-lg",
    md: "w-12 h-12 text-2xl",
    lg: "w-16 h-16 text-3xl",
    xl: "w-20 h-20 text-4xl",
  };

  return (
    <div
      className={`${sizes[size]} rounded-2xl flex items-center justify-center shrink-0 transition-transform ${
        ring ? "ring-2 ring-cathy-primary ring-offset-2 ring-offset-cathy-secondary" : ""
      }`}
      style={{ background: avatar.color }}
      title={avatar.name}
    >
      <span role="img" aria-label={avatar.name}>
        {avatar.emoji}
      </span>
    </div>
  );
}
