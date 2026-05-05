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
    <div className={`relative flex items-center ${alignment}`}>
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />

      <div className={`ml-12 md:ml-0 flex-1 ${spacing}`}>
        <button
          type="button"
          onClick={onOpen}
          className={`w-full text-left bg-white rounded-2xl shadow-lg transition-all duration-300 p-8 relative ${
            experience.images.length > 0
              ? "cursor-pointer hover:shadow-2xl hover:scale-105"
              : "hover:shadow-xl"
          }`}
        >
          {experience.images.length > 0 && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              <Image size={20} />
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{experience.title}</h3>
              <div className="flex items-center text-blue-600 font-semibold mb-2">
                <span>{experience.company}</span>
                <ChevronRight size={16} className="mx-1" />
                <span className="text-gray-500">{experience.type}</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end text-sm text-gray-500">
              <div className="flex items-center mb-1">
                <Calendar size={14} className="mr-1" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{experience.description}</p>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight size={16} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge key={tech} className="bg-blue-50 text-slate-700 border-blue-100">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export type { Experience };
export default ExperienceCard;
