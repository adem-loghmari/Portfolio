import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "soft" | "solid";
  className?: string;
};

const Badge = ({
  children,
  variant = "soft",
  className = "",
}: BadgeProps) => {
  const base = "inline-flex items-center rounded-full text-sm font-medium px-3 py-1 border ";
  const style =
    variant === "solid"
      ? "bg-blue-600 text-white border-transparent"
      : "bg-slate-100 text-slate-700 border-slate-200";

  return <span className={`${base}${style} ${className}`.trim()}>{children}</span>;
};

export default Badge;
