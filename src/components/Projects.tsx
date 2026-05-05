import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ui/ProjectCard";
import getseatImg from "./assets/getseat.png";
import ecommerceImg from "./assets/e-comerce.png";
import pfaImg from "./assets/pfa.png";

const Projects = () => {
  const projects = [
    {
      title: "GetSeat — Seat Mapping & Event Ticketing Platform",
      description:
        "Built from scratch during my time at United Systema. A full event platform featuring an interactive drag-and-drop seat map editor, real-time seat locking using WebSockets, an event management dashboard, a reservation and ticketing system, and an embeddable third-party iframe SDK that lets any platform integrate seat selection — fully documented. Deployed on DirectAdmin with a custom CI/CD pipeline for seamless updates. Currently in development, with a public launch planned in June 2026.",
      image: getseatImg,
      technologies: ["Next.js", "Laravel", "PHP", "WebSockets", "REST API", "DirectAdmin"],
      status: "In Development",
      githubUrl: "",
      liveUrl: "https://getseat.dev",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, MongoDB. With focus on backend over frontend.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Express", "chart.js", "JWT"],
      githubUrl: "https://github.com/adem-loghmari/E-commerce",
      liveUrl: "https://smartshop-lqyf.onrender.com",
      featured: true,
    },
    {
      title: "LLM Liver Cancer Chatbot",
      description:
        "An AI-powered chatbot designed to assist patients and healthcare professionals with information and guidance related to liver cancer. Utilizes large language models to provide accurate, empathetic, and up-to-date responses.",
      image: pfaImg,
      technologies: ["React", "Node.js", "Python", "SapBert", "Mistral"],
      githubUrl: "https://github.com/adem-loghmari/pfa-project",
      liveUrl: "#",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          description="Here are some of my recent projects that showcase my skills in full stack development, from concept to deployment."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.filter((project) => project.featured).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
