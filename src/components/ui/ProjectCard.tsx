import { ExternalLink, Github, Play } from "lucide-react";
import Badge from "./Badge";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status?: string;
  githubUrl?: string;
  liveUrl: string;
  featured: boolean;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
      />

      {project.status && (
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 text-white border-transparent">{project.status}</Badge>
        </div>
      )}

      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Github size={20} className="text-gray-700" />
          </a>
        )}
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
          <ExternalLink size={20} className="text-gray-700" />
        </a>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Play size={16} />
          <span>Live Demo</span>
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
