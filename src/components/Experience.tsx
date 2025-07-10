import { Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Agogo E-commerce",
      location: "Remote",
      period: "2023 - 2024",
      type: "Full-time",
      description:
        "Maintained and developed features for Agogo’s e-commerce platform, overseeing both frontend and backend tasks and ensuring stable deployment throughout the 9-month period.",
      achievements: [
        "Managed full deployment and DevOps lifecycle of the platform",
        "Optimized backend performance for faster product loading",
        "Improved UI responsiveness and shopping cart logic",
        "Maintained high uptime and handled production bug fixes",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "Docker",
        "AWS",
      ],
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
                  className={`ml-12 md:ml-0 flex-1 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
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
      </div>
    </section>
  );
};

export default Experience;
