import { useState } from "react";
import { getAvatar } from "../data/avatars";

export default function AvatarBadge({ avatarId, size = "md", ring = false }) {
  const avatar = getAvatar(avatarId);
  const [imgFailed, setImgFailed] = useState(false);
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };
  const iconSizes = { sm: 18, md: 28, lg: 36, xl: 44 };
  const showImage = avatar.image && !imgFailed;

  return (
    <div
      className={`${sizes[size]} rounded-2xl flex items-center justify-center overflow-hidden shrink-0 transition-transform ${
        ring ? "ring-2 ring-cathy-primary ring-offset-2 ring-offset-cathy-secondary" : ""
      }`}
      style={{ background: avatar.color }}
      title={avatar.name}
    >
      {showImage ? (
        <img
          src={avatar.image}
          alt={avatar.name}
          className="w-full h-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <avatar.Icon size={iconSizes[size]} aria-label={avatar.name} />
      )}
    </div>
  );
}
