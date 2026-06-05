import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ui/ProjectCard";
import getseatImg from "./assets/getseat.png";
import ecommerceImg from "./assets/e-comerce.png";

const projects = [
  {
    title: "GetSeat — Seat Mapping & Event Ticketing Platform",
    description:
      "Built from scratch during my time at United Systema. A full event platform featuring an interactive drag-and-drop seat map editor, real-time seat locking using WebSockets, an event management dashboard, a reservation and ticketing system, and an embeddable third-party iframe SDK — fully documented. Deployed on DirectAdmin with a custom CI/CD pipeline. Public launch planned June 2026.",
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
      "Full-featured e-commerce solution with user authentication, cart and checkout flow, and an admin dashboard with analytics. Built with React, Node.js, MongoDB, and JWT authentication.",
    image: ecommerceImg,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "JWT"],
    githubUrl: "https://github.com/adem-loghmari/E-commerce",
    liveUrl: "https://smartshop-lqyf.onrender.com",
    featured: true,
  },
];

const Projects = () => (
  <section id="projects" className="section-darker">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Featured Projects"
        description="A selection of projects that showcase full-stack skills — from concept to deployment."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </div>
    </div>
  </section>
);

export default Projects;
