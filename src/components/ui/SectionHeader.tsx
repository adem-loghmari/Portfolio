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
    <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6" />
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
    {children}
  </div>
);

export default SectionHeader;
