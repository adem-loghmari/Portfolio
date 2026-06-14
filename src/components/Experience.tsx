import { useState } from "react";
import { GraduationCap } from "lucide-react";
import ExperienceCard from "./ui/ExperienceCard";
import type { Experience } from "./ui/ExperienceCard";
import ImageModal from "./ui/ImageModal";
import SectionHeader from "./ui/SectionHeader";
import getseat1 from "./assets/getseat-1.png";
import getseat2 from "./assets/getseat-2.png";
import getseat3 from "./assets/getseat-3.png";
import getseat4 from "./assets/getseat-4.png";
import getseat5 from "./assets/getseat-5.png";
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
    images: [getseat1, getseat2, getseat3, getseat4, getseat5],
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
    <section id="experience" className="section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Work Experience"
          description="Full-stack, AI, and SaaS roles across four companies — shipping real products from day one."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/50 to-transparent" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title}
                experience={experience}
                index={index}
                onOpen={() => {
                  setSelectedExperience(index);
                  setCurrentImageIndex(0);
                }}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 pt-16 border-t border-gray-900/10 dark:border-white/[0.06]">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <GraduationCap size={16} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>

          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto hover:border-indigo-500/25 transition-colors">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              ICT Engineering Degree
            </h4>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-1">
              National School of Electronics and Telecommunications of Sfax (ENET'Com)
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">2023 – 2026</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              ICT Engineer specializing in full-stack development, cloud computing, AI, networking, and system design. Experienced in building scalable web applications and delivering real-world solutions through academic and professional projects.
            </p>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default ExperienceSection;
