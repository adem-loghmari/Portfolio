import React from "react";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, MongoDB, and Stripe API. With focus on backend over frontend.",
      image: "src/components/assets/e-comerce.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "chart.js", "JWT"],
      githubUrl: "https://github.com/adem-loghmari/E-commerce",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "LLM Liver Cancer Chatbot",
      description:
        "An AI-powered chatbot designed to assist patients and healthcare professionals with information and guidance related to liver cancer. Utilizes large language models to provide accurate, empathetic, and up-to-date responses.",
      image: "src/components/assets/pfa.png",
      technologies: ["React", "Node.js", "Python", "SapBert","Mistral"],
      githubUrl: "https://github.com/adem-loghmari/pfa-project",
      liveUrl: "#",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full
            stack development, from concept to deployment.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Github size={20} className="text-gray-700" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={20} className="text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Play size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Github size={16} className="text-gray-700" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={16} className="text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
