import { ReactNode } from "react";

type SectionHeaderProps = {
  id?: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

const SectionHeader = ({
  id,
  title,
  description,
  children,
  className = "",
}: SectionHeaderProps) => (
  <div id={id} className={`text-center mb-16 ${className}`}>
    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h2>
    <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full" />
    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
      {description}
    </p>
    {children}
  </div>
);

export default SectionHeader;
