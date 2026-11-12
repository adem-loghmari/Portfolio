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
      "I built GetSeat from scratch at an early-stage startup in Qatar. It is an event ticketing and seat-management SaaS: organizers draw their venue in a drag-and-drop editor, sell seats in real time, and partners can embed seat selection on their own sites.",
    achievements: [
      "Seat locking over WebSockets (Laravel Reverb / Pusher) backed by pessimistic database locks, so two buyers can never check out the same seat. Other clients see a seat lock in under 200 ms",
      "Canvas venue editor in Konva.js. Viewport culling and memoization keep it smooth with over a thousand seats on screen",
      "Seat-availability API and SkipCash payment integration",
      "Documented REST API and an embeddable iframe SDK for partner sites",
      "Multi-tenant roles and permissions, deployed to production through a CI/CD pipeline on DirectAdmin",
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
      "Backend services in Go (Gin) for the asynchronous content-generation pipeline",
      "Custom WordPress and Shopify plugins that publish the generated content to customers' sites",
      "Content and image generation features",
      "Admin dashboard features and MongoDB query tuning",
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
      "MongoDB aggregation pipelines and indexes for the analytics views",
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
      "Turned a manual invoice entry job into an upload-and-review step",
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
          description="One full-time role and three internships, newest first."
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
              2023 to 2026
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              Coursework across software engineering, networks, cloud and AI.
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
