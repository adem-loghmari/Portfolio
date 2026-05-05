import { ReactNode } from "react";
import Badge from "./Badge";

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
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-4`}>
        {skill.icon}
      </div>
      <h4 className="text-xl font-semibold text-gray-900">{skill.category}</h4>
    </div>

    <div className="flex flex-wrap gap-2">
      {skill.technologies.map((tech) => (
        <Badge key={tech} className="bg-slate-100 text-slate-700 border-slate-200">
          {tech}
        </Badge>
      ))}
    </div>
  </div>
);

export default SkillCard;
