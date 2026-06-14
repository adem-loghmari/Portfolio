import { Calendar, MapPin, ChevronRight, Image } from "lucide-react";
import Badge from "./Badge";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  images: string[];
};

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  onOpen: () => void;
};

const ExperienceCard = ({ experience, index, onOpen }: ExperienceCardProps) => {
  const alignment = index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
  const spacing = index % 2 === 0 ? "md:pr-12" : "md:pl-12";

  return (
    <div className={`relative flex items-start ${alignment}`}>
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full border-2 border-white dark:border-gray-950 z-10 mt-9 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />

      <div className={`ml-10 md:ml-0 flex-1 ${spacing}`}>
        <button
          type="button"
          onClick={onOpen}
          className={`w-full text-left glass rounded-2xl p-7 transition-all duration-300 ${
            experience.images.length > 0
              ? "card-hover cursor-pointer"
              : "hover:border-gray-900/15 dark:hover:border-white/15"
          }`}
        >
          {/* Gallery hint */}
          {experience.images.length > 0 && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-indigo-500 dark:text-indigo-400/70 font-medium">
              <Image size={13} />
              <span>{experience.images.length} screenshots</span>
            </div>
          )}

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5 pr-20">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-snug">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {experience.company}
                </span>
                <span className="text-gray-900/20 dark:text-white/20">·</span>
                <span className="text-gray-500 dark:text-gray-500">{experience.type}</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end mt-2 sm:mt-0 gap-1">
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar size={11} />
                {experience.period}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin size={11} />
                {experience.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <ul className="space-y-1.5 mb-5">
            {experience.achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <ChevronRight
                  size={13}
                  className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
};

export type { Experience };
export default ExperienceCard;
