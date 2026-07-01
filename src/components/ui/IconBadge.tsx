import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  size: "sm" | "md";
  className?: string;
};

const badgeSizeClasses = {
  sm: "h-11 w-11",
  md: "h-12 w-12",
};

const iconSizes = {
  sm: 22,
  md: 24,
};

export function IconBadge({ icon: Icon, size, className }: IconBadgeProps) {
  return (
    <span
      className={[
        "grid place-items-center rounded-full bg-[#e8f6f3] text-[#007f6d]",
        badgeSizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Icon size={iconSizes[size]} strokeWidth={2} aria-hidden="true" />
    </span>
  );
}
