import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ExperienceCard from "./ui/ExperienceCard";
import type { Experience } from "./ui/ExperienceCard";
import ImageModal from "./ui/ImageModal";
import SectionHeader from "./ui/SectionHeader";
import { getseatSlides } from "./getseatSlides";
import ecommerce1 from "./assets/e-commerce-1.png";
import ecommerce2 from "./assets/e-commerce-2.png";
import ecommerce3 from "./assets/e-commerce-3.png";

const experiences: Experience[] = [
  {
    title: "Full-Stack Software Engineer",
    company: "United Systema",
    location: "Qatar",
    period: "Feb 2026 - Present",
    type: "Full-time",
    description:
      "Built GetSeat from the ground up at an early-stage Qatar startup — a real-time event ticketing and seat-management SaaS with an interactive drag-and-drop venue designer, multi-tenant role-based access, a reservation and ticketing system, and an embeddable iframe SDK for third-party integration.",
    achievements: [
      "Engineered WebSocket seat locking (Laravel Reverb / Pusher) with pessimistic DB locking — 100% prevention of double-booking under concurrent checkout, sub-200 ms lock broadcasts",
      "Built the canvas seat editor with Konva.js, holding 60 FPS while manipulating 1,000+ interactive shapes via viewport culling and memoization",
      "Kept the seat-availability API under 100 ms average response and integrated SkipCash payments",
      "Shipped a documented REST API and embeddable iframe SDK so partners can add seat selection in minutes",
      "Deployed to production through an automated CI/CD pipeline on DirectAdmin",
    ],
    technologies: ["Next.js 16", "React 19", "Konva.js", "Laravel 12", "PHP 8.3", "WebSockets", "MySQL"],
    images: getseatSlides,
  },
  {
    title: "Software Engineering Intern",
    company: "AudaSoft",
    location: "Remote",
    period: "2025",
    type: "Internship",
    description:
      "Built and optimized the backend of an AI-powered SaaS platform that automates content creation and publishing to WordPress and Shopify. Contributed to AI pipeline development, CMS integration, and system scalability.",
    achievements: [
      "Built and optimized backend services in Go (Gin), improving async pipeline throughput and reducing latency",
      "Integrated WordPress and Shopify via custom REST plugins for hundreds of active users",
      "Developed AI engines for content and image generation",
      "Enhanced admin-dashboard features and tuned MongoDB query performance",
    ],
    technologies: ["Go (Gin)", "TypeScript", "Vue.js", "MongoDB"],
    images: [],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "VIEWS Digital Agency",
    location: "Sousse, Tunisia",
    period: "2025",
    type: "Internship",
    description:
      "Built and maintained a secure admin dashboard for an e-commerce platform, owning both frontend and backend work and ensuring stable deployments.",
    achievements: [
      "Designed and built a responsive admin dashboard with analytics, user management, and order tracking",
      "Developed Node.js/Express REST APIs and a React frontend",
      "Optimized MongoDB aggregation pipelines and indexing to cut peak query times",
      "Implemented authentication and role-based access control (JWT)",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    images: [ecommerce1, ecommerce2, ecommerce3],
  },
  {
    title: "Software Engineering Intern",
    company: "DivaSoftware",
    location: "Sousse, Tunisia",
    period: "Summer 2024",
    type: "Internship",
    description:
      "Built an OCR pipeline using PyTesseract to automate invoice data extraction, and developed a full-stack web application to host the model and expose it via an Express.js API.",
    achievements: [
      "Implemented OCR logic with PyTesseract and pdf2image, with deskew and binarization preprocessing",
      "Developed a REST API using Express.js to serve model outputs",
      "Built a web dashboard for uploading and viewing results",
      "Cut invoice processing from hours to minutes for internal use",
    ],
    technologies: ["Python", "PyTesseract", "pdf2image", "Express.js", "React", "MongoDB"],
    images: [],
  },
];

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedData =
    selectedExperience !== null ? experiences[selectedExperience] : null;

  return (
    <Box id="experience" component="section" sx={{ py: 12, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeader
          title="Work Experience"
          description="Full-stack, AI, and SaaS roles across four companies — shipping real products from day one."
        />

        {/* Timeline */}
        <Box sx={{ position: "relative" }}>
          {/* Vertical line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 16, md: "50%" },
              top: 0,
              bottom: 0,
              width: 2,
              transform: "translateX(-50%)",
              bgcolor: "divider",
            }}
          />

          <Stack spacing={5}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title + experience.company}
                experience={experience}
                index={index}
                onOpen={() => {
                  setSelectedExperience(index);
                  setCurrentImageIndex(0);
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Education */}
        <Divider sx={{ mt: 10, mb: 8 }} />
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", justifyContent: "center", mb: 5 }}>
          <Avatar
            variant="rounded"
            sx={{ width: 32, height: 32, bgcolor: "primary.main", color: "primary.contrastText" }}
          >
            <SchoolOutlinedIcon sx={{ fontSize: 18 }} />
          </Avatar>
          <Typography variant="h5" component="h3">
            Education
          </Typography>
        </Stack>

        <Card sx={{ maxWidth: 672, mx: "auto" }}>
          <CardContent sx={{ p: 4, "&:last-child": { pb: 4 } }}>
            <Typography variant="h6" component="h4" sx={{ fontSize: "1.125rem", mb: 0.5 }}>
              ICT Engineering Degree
            </Typography>
            <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600, mb: 0.5 }}>
              National School of Electronics and Telecommunications of Sfax (ENET'Com)
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              2023 – 2026
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              ICT Engineer specializing in full-stack development, cloud computing, AI, networking, and system design. Experienced in building scalable web applications and delivering real-world solutions through academic and professional projects.
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Image Modal */}
      {selectedData && selectedData.images.length > 0 && (
        <ImageModal
          title={selectedData.title}
          description={selectedData.description}
          achievements={selectedData.achievements}
          technologies={selectedData.technologies}
          images={selectedData.images}
          currentIndex={currentImageIndex}
          onClose={() => setSelectedExperience(null)}
          onPrev={() =>
            setCurrentImageIndex((prev) =>
              prev === 0 ? selectedData.images.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setCurrentImageIndex((prev) =>
              prev === selectedData.images.length - 1 ? 0 : prev + 1
            )
          }
          onSelect={(index) => setCurrentImageIndex(index)}
        />
      )}
    </Box>
  );
};

export default ExperienceSection;
