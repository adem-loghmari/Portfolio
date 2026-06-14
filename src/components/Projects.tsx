import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ui/ProjectCard";
import getseatImg from "./assets/getseat.png";
import deliveryaggImg from "./assets/deliveryagg.png";
import ecommerceImg from "./assets/e-comerce.png";

const projects = [
  {
    title: "GetSeat — Seat Mapping & Event Ticketing Platform",
    description:
      "Built from scratch at United Systema. A real-time event platform with an interactive drag-and-drop seat-map editor (Konva.js — 60 FPS while manipulating 1,000+ shapes), WebSocket seat locking that prevents double-booking under concurrent checkout, an event dashboard, a ticketing system, and a fully documented embeddable iframe SDK for third-party integration. Deployed on DirectAdmin via a custom CI/CD pipeline. Public launch June 2026.",
    image: getseatImg,
    technologies: ["Next.js 16", "React 19", "Konva.js", "Laravel 12", "WebSockets", "REST API"],
    status: "In Development",
    githubUrl: "",
    liveUrl: "https://getseat.dev",
    featured: true,
  },
  {
    title: "DeliveryAgg — B2B Delivery-Management SaaS",
    description:
      "A multi-tenant courier-management platform with separate business and admin portals. Includes an order-lifecycle state machine, bulk CSV order upload, automated monthly invoicing with on-the-fly PDF generation, public order tracking, and role-based access. Built on Next.js 16 (App Router + Server Actions) with an Express 5 + Prisma + PostgreSQL API, JWT auth, and rate limiting.",
    image: deliveryaggImg,
    technologies: ["Next.js 16", "React 19", "TypeScript", "Express 5", "Prisma", "PostgreSQL", "JWT", "Tailwind CSS"],
    status: "In Development",
    githubUrl: "https://github.com/adem-loghmari/deliveryagg",
    liveUrl: "https://deliveryagg.vercel.app",
    featured: true,
  },
  {
    title: "SmartShop — E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with user authentication, cart and checkout flow, product management, and an admin dashboard with analytics. Built with React, Node.js, MongoDB, and JWT authentication; deployed via GitHub Actions.",
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
