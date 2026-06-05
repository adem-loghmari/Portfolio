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
  <article className="group glass rounded-2xl overflow-hidden card-hover flex flex-col">
    {/* Image */}
    <div className="relative overflow-hidden bg-black/20">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {project.status && (
        <div className="absolute top-3 left-3">
          <Badge variant="solid">{project.status}</Badge>
        </div>
      )}

      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-indigo-600/80 transition-colors"
          >
            <Github size={15} />
          </a>
        )}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-indigo-600/80 transition-colors"
        >
          <ExternalLink size={15} />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-white mb-2 leading-snug">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20"
        >
          <Play size={14} />
          Live Demo
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass border border-white/[0.12] text-gray-300 rounded-lg text-sm font-medium hover:border-white/30 hover:text-white transition-all"
          >
            <Github size={14} />
            Source Code
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
