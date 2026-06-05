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
    title: "Full-Stack Developer Intern (PFE)",
    company: "United Systema",
    location: "On-site, Sousse, Tunisia",
    period: "February 2026 - Present",
    type: "Internship",
    description:
      "Building GetSeat from scratch — a complete event platform with an interactive drag-and-drop seat map editor, real-time seat locking via WebSockets, event management dashboard, and an embeddable iframe SDK for third-party integration.",
    achievements: [
      "Architected and developed a full-stack event platform with real-time features",
      "Built an interactive drag-and-drop seat map editor",
      "Implemented WebSocket-based real-time seat locking system",
      "Developed REST APIs, event management dashboard, and ticketing system",
      "Created an embeddable third-party iframe SDK with comprehensive documentation",
      "Set up CI/CD pipeline on DirectAdmin for seamless deployment",
    ],
    technologies: ["Next.js", "Laravel", "PHP", "WebSockets", "REST API", "DirectAdmin"],
    images: [getseat1, getseat2, getseat3, getseat4, getseat5],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "VIEWS Digital Agency",
    location: "On-site, Sousse, Tunisia",
    period: "2025",
    type: "Full-time",
    description:
      "Maintained and developed features for Agogo's e-commerce platform, overseeing both frontend and backend tasks and ensuring stable deployment throughout the 9-month period.",
    achievements: [
      "Designed and built a modern admin dashboard for an internal e-commerce management platform",
      "Implemented analytics, user management, and order tracking features with a responsive UI",
      "Developed backend REST APIs with Node.js/Express and optimized MongoDB queries",
      "Integrated authentication, real-time updates, and role-based access control",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    images: [ecommerce1, ecommerce2, ecommerce3],
  },
  {
    title: "AI Engineering Intern",
    company: "DivaSoftware",
    location: "Sousse, Tunisia",
    period: "Summer 2024",
    type: "Internship",
    description:
      "Built an OCR pipeline using PyTesseract to automate invoice data extraction, and developed a full-stack web application to host the model and expose it via an Express.js API.",
    achievements: [
      "Implemented OCR logic with PyTesseract and pdf2image",
      "Developed a REST API using Express.js to serve model outputs",
      "Created a web dashboard for uploading and viewing results",
      "Streamlined invoice processing workflow for internal use",
    ],
    technologies: ["Python", "PyTesseract", "pdf2image", "Express.js", "React", "MongoDB"],
    images: [],
  },
  {
    title: "Software Engineering Intern",
    company: "AudaSoft",
    location: "Remote",
    period: "July 2025 - Present",
    type: "Internship",
    description:
      "Working on the backend of an AI-powered SaaS platform that automates content creation and publishing for websites like WordPress and Shopify. Contributing to AI engine development, platform integration, and system scalability.",
    achievements: [
      "Building and optimizing backend services in Go",
      "Developing AI engines for content and image generation",
      "Integrating CMS platforms via REST APIs and custom plugins",
      "Improving internal tools and admin dashboard features",
    ],
    technologies: ["Go - gin", "TypeScript", "Vue.js", "MongoDB"],
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
          description="Three internships across full-stack, AI, and SaaS — building real products from day one."
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
        <div className="mt-20 pt-16 border-t border-white/[0.06]">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <GraduationCap size={16} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="glass rounded-2xl p-8 border border-white/[0.06] max-w-2xl mx-auto hover:border-indigo-500/25 transition-colors">
            <h4 className="text-lg font-bold text-white mb-1">
              ICT Engineering Degree
            </h4>
            <p className="text-indigo-400 font-medium text-sm mb-1">
              National School of Electronics and Telecommunications of Sfax (ENET'Com)
            </p>
            <p className="text-gray-500 text-sm mb-4">2023 – 2026</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Currently pursuing a degree in ICT Engineering with a focus on
              full-stack development, networking, cloud, AI, and system design
              through hands-on academic projects.
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
