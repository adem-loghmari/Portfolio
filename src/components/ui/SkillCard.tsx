import { ReactNode } from "react";

type Skill = {
  category: string;
  icon: ReactNode;
  technologies: string[];
  color: string;
};

type SkillCardProps = {
  skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps) => (
  <div className="glass rounded-xl p-5 card-hover group">
    <div
      className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${skill.color} text-white mb-3`}
    >
      {skill.icon}
    </div>
    <h4 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm">{skill.category}</h4>
    <div className="flex flex-wrap gap-1.5">
      {skill.technologies.map((tech) => (
        <span
          key={tech}
          className="px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-900/[0.04] dark:bg-white/[0.05] rounded-full border border-gray-900/10 dark:border-white/[0.07] hover:text-gray-900 dark:hover:text-gray-300 hover:border-gray-900/20 dark:hover:border-white/20 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
