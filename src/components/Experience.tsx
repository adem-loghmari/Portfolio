import { Calendar, MapPin, ChevronRight, X, ChevronLeft, Image } from "lucide-react";
import { useState } from "react";
import getseat1 from "./assets/getseat-1.png";
import getseat2 from "./assets/getseat-2.png";
import getseat3 from "./assets/getseat-3.png";
import getseat4 from "./assets/getseat-4.jpeg";
import getseat5 from "./assets/getseat-5.png";
import ecommerce1 from "./assets/e-commerce-1.png";
import ecommerce2 from "./assets/e-commerce-2.png";
import ecommerce3 from "./assets/e-commerce-3.png";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const experiences = [
    {
      title: "Full-Stack Developer Intern (PFE)",
      company: "United Systema",
      location: "On-site, Sousse, Tunisia",
      period: "February 2026 - Present",
      type: "Internship",
      description:
        "Building GetSeat from scratch—a complete event platform with an interactive drag-and-drop seat map editor, real-time seat locking via WebSockets, event management dashboard, and an embeddable iframe SDK for third-party integration.",
      achievements: [
        "Architected and developed a full-stack event platform with real-time features",
        "Built an interactive drag-and-drop seat map editor",
        "Implemented WebSocket-based real-time seat locking system",
        "Developed REST APIs, event management dashboard, and ticketing system",
        "Created an embeddable third-party iframe SDK with comprehensive documentation",
        "Set up CI/CD pipeline on DirectAdmin for seamless deployment",
      ],
      technologies: [
        "Next.js",
        "Laravel",
        "PHP",
        "WebSockets",
        "REST API",
        "DirectAdmin",
      ],
      images: [getseat1, getseat2, getseat3, getseat4, getseat5],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "VIEWS Digital Agency",
      location: "On-site, Sousse, Tunisia",
      period: "2025",
      type: "Full-time",
      description:
        "Maintained and developed features for Agogo’s e-commerce platform, overseeing both frontend and backend tasks and ensuring stable deployment throughout the 9-month period.",
      achievements: [
        "Designed and built a modern admin dashboard for an internal e-commerce management platform.",
        "mplemented analytics, user management, and order tracking features with a responsive UI",
        "Developed backend REST APIs with Node.js/Express and optimized MongoDB queries",
        "Integrated authentication, real-time updates, and role-based access controlgimg",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      images: [ecommerce1, ecommerce2, ecommerce3],
    },
    {
      title: "AI Engineering Intern",
      company: "DivaSoftware",
      location: "Sousse, Tunisia",
      period: "Summer 2024",
      type: "Internship",
      description:
        "Built an OCR pipeline using PyTesseract to automate invoice data extraction, and developed a full stack web application to host the model and expose it via an Express.js API.",
      achievements: [
        "Implemented OCR logic with PyTesseract and pdf2image",
        "Developed a REST API using Express.js to serve model outputs",
        "Created a web dashboard for uploading and viewing results",
        "Streamlined invoice processing workflow for internal use",
      ],
      technologies: [
        "Python",
        "PyTesseract",
        "pdf2image",
        "Express.js",
        "React",
        "MongoDB",
        "cv2",
      ],
      images: [],
    },
    {
      title: "Software Engineering Intern",
      company: "AudaSoft",
      location: "remote",
      period: "july 2025-present",
      type: "Internship",
      description:
    "Working on the backend of an AI-powered SaaS platform that automates content creation and publishing for websites like WordPress and Shopify. Contributing to AI engine development, platform integration, and system scalability.",
      achievements: [
         "Building and optimizing backend services in Go",
    "Developing AI engines for content and image generation",
    "Integrating CMS platforms via REST APIs and custom plugins",
    "Improving internal tools and admin dashboard features",
      ],
      technologies: [
        "Go - gin",
        "TypeScript",
        "Vue.js",
        "MongoDB",
      ],
      images: [],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in web development, from junior developer to
            senior engineer, working with amazing teams and building impactful
            products.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-emerald-600 to-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 flex-1 group ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    onClick={() => {
                      if (exp.images.length > 0) {
                        setSelectedExperience(index);
                        setCurrentImageIndex(0);
                      }
                    }}
                    className={`bg-white rounded-2xl shadow-lg transition-all duration-300 p-8 relative ${
                      exp.images.length > 0
                        ? "cursor-pointer hover:shadow-2xl hover:scale-105"
                        : "hover:shadow-xl"
                    }`}
                  >
                    {/* Image Badge */}
                    {exp.images.length > 0 && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <Image size={20} />
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <span>{exp.company}</span>
                          <ChevronRight size={16} className="mx-1" />
                          <span className="text-gray-500">{exp.type}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <ChevronRight
                              size={16}
                              className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-emerald-50 text-gray-700 rounded-full text-sm font-medium border border-blue-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Education
          </h3>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow mx-auto max-w-3xl">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              ICT Engineering Degree
            </h4>
            <p className="text-blue-600 font-semibold mb-2">
              National School of Electronics and Telecommunications of Sfax
              (ENET'Com)
            </p>
            <p className="text-gray-500 mb-4">2023 - 2026</p>
            <p className="text-gray-600">
              Currently pursuing a degree in ICT Engineering with a focus on
              full-stack development, networking, cloud, AI, and system design
              through hands-on academic projects.
            </p>
          </div>
        </div>

        {/* Image Modal */}
        {selectedExperience !== null && experiences[selectedExperience].images.length > 0 && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExperience(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <X size={24} className="text-gray-800" />
              </button>

              <div className="p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {experiences[selectedExperience].title}
                </h2>

                {/* Image Slider */}
                <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-6">
                  <img
                    src={experiences[selectedExperience].images[currentImageIndex]}
                    alt={`${experiences[selectedExperience].title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto"
                  />

                  {/* Navigation Buttons */}
                  {experiences[selectedExperience].images.length > 1 && (
                    <>
                      <button
                        onClick={() => {
                          setCurrentImageIndex((prev) =>
                            prev === 0
                              ? experiences[selectedExperience].images.length - 1
                              : prev - 1
                          );
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                      >
                        <ChevronLeft size={24} className="text-gray-800" />
                      </button>

                      <button
                        onClick={() => {
                          setCurrentImageIndex((prev) =>
                            prev === experiences[selectedExperience].images.length - 1
                              ? 0
                              : prev + 1
                          );
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                      >
                        <ChevronRight size={24} className="text-gray-800" />
                      </button>
                    </>
                  )}
                </div>

                {/* Image Counter */}
                {experiences[selectedExperience].images.length > 1 && (
                  <div className="text-center text-sm text-gray-500 mb-6">
                    Image {currentImageIndex + 1} of{" "}
                    {experiences[selectedExperience].images.length}
                  </div>
                )}

                {/* Image Dots */}
                {experiences[selectedExperience].images.length > 1 && (
                  <div className="flex justify-center gap-2 mb-6">
                    {experiences[selectedExperience].images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === currentImageIndex
                            ? "bg-blue-600"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {experiences[selectedExperience].description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {experiences[selectedExperience].achievements.map(
                      (achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight
                            size={16}
                            className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[selectedExperience].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-emerald-50 text-gray-700 rounded-full text-sm font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
