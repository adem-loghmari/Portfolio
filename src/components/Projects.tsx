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
    title: "GetSeat: seat maps and event ticketing",
    description:
      "Built from scratch at United Systema and now in production. Organizers draw their venue in a drag-and-drop seat-map editor, then sell tickets while WebSocket seat locks stop two people from buying the same seat. Includes an event dashboard, ticketing, and an embeddable iframe SDK so partners can sell seats on their own sites.",
    image: getseatImg,
    technologies: ["Next.js 16", "React 19", "Konva.js", "Laravel 12", "WebSockets", "REST API"],
    status: "Live",
    githubUrl: "",
    liveUrl: "https://getseat.app",
    featured: true,
    slides: getseatSlides,
  },
  {
    title: "DeliveryAgg: delivery management for courier companies",
    description:
      "A multi-tenant platform where businesses hand orders to a courier and track them. Separate business and admin portals, an order state machine, bulk CSV upload, monthly invoices generated as PDFs, and public tracking links. Next.js 16 front end with an Express 5, Prisma and PostgreSQL API.",
    image: deliveryaggImg,
    technologies: ["Next.js 16", "React 19", "TypeScript", "Express 5", "Prisma", "PostgreSQL", "JWT", "Tailwind CSS"],
    status: "In Development",
    githubUrl: "https://github.com/adem-loghmari/deliveryagg",
    liveUrl: "https://deliveryagg.vercel.app",
    featured: true,
  },
  {
    title: "Shopper: e-commerce store and admin",
    description:
      "A store with accounts, cart and checkout, plus an admin side for products, orders and sales charts. React and Node.js on MongoDB, with GitHub Actions CI and hosting on Render.",
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
        title="Projects"
        description="Things I have built and shipped. Each one has a live version you can click through."
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
