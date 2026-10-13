import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ui/ProjectCard";
import ImageModal from "./ui/ImageModal";
import type { Slide } from "./ui/ImageModal";
import { getseatSlides } from "./getseatSlides";
import { ecommerceSlides } from "./ecommerceSlides";
import getseatImg from "./assets/getseat.png";
import deliveryaggImg from "./assets/deliveryagg.png";
import ecommerceImg from "./assets/ecommerce/store-home.png";

type FeaturedProject = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  slides?: Slide[];
};

const projects: FeaturedProject[] = [
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
    slides: getseatSlides,
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
    title: "Shopper — E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with user authentication, cart and checkout flow, product management, and an admin dashboard with order-driven analytics. Built with React, Node.js, MongoDB, and JWT authentication; checked by GitHub Actions CI and deployed on Render.",
    image: ecommerceImg,
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
    githubUrl: "https://github.com/adem-loghmari/E-commerce",
    liveUrl: "https://smartshop-lqyf.onrender.com",
    featured: true,
    slides: ecommerceSlides,
  },
];

const Projects = () => {
  const [gallery, setGallery] = useState<FeaturedProject | null>(null);
  const [index, setIndex] = useState(0);
  const slides = gallery?.slides ?? [];

  return (
  <Box id="projects" component="section" sx={{ py: 12, bgcolor: "background.alt" }}>
    <Container maxWidth="lg">
      <SectionHeader
        title="Featured Projects"
        description="A selection of projects that showcase full-stack skills — from concept to deployment."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 4 }}>
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpenGallery={
                project.slides
                  ? () => {
                      setIndex(0);
                      setGallery(project);
                    }
                  : undefined
              }
            />
          ))}
      </Box>
    </Container>

    {gallery && (
      <ImageModal
        title={gallery.title}
        description={gallery.description}
        achievements={[]}
        technologies={gallery.technologies}
        images={slides}
        currentIndex={index}
        onClose={() => setGallery(null)}
        onPrev={() => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))}
        onNext={() => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1))}
        onSelect={setIndex}
      />
    )}
  </Box>
  );
};

export default Projects;
