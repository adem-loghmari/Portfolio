import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "soft" | "solid" | "outline";
  className?: string;
};

const Badge = ({
  children,
  variant = "soft",
  className = "",
}: BadgeProps) => {
  const base =
    "inline-flex items-center rounded-full text-xs font-medium px-2.5 py-1 border transition-colors ";

  const styles = {
    soft: "bg-gray-900/[0.04] dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-white/[0.08] hover:border-gray-900/20 dark:hover:border-white/20",
    solid: "bg-indigo-600 dark:bg-indigo-600/80 text-white dark:text-indigo-100 border-indigo-500/50",
    outline: "bg-transparent text-indigo-600 dark:text-indigo-400 border-indigo-500/40 hover:border-indigo-500/70 dark:hover:border-indigo-400/70",
  };

  return (
    <span className={`${base}${styles[variant]} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Badge;
