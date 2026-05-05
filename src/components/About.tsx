import { Code2, Database, Server, Palette } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import SkillCard from "./ui/SkillCard";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML5/CSS3"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Express.js", "Laravel", "Symfony", "RESTful APIs", "PostgreSQL"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & DevOps",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["Git", "GitHub Actions", "DirectAdmin", "Docker", "AWS", "Jest", "Webpack", "CI/CD"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          description="I'm a full-stack developer specializing in React, Next.js, Node.js, and Laravel. I build real products — not just side projects. During my current internship I built GetSeat from the ground up: a complete event platform with a seat map editor, real-time seat locking, a ticketing system, and an SDK that lets any platform embed seat selection via iframe. I'm finishing my software engineering degree and actively looking for remote full-stack roles or freelance opportunities. I work hard, ship real things, and communicate clearly in English."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I discovered coding back in high school — and it clicked instantly. What started as a simple curiosity quickly became a passion for solving complex problems through code.
              </p>
              <p>
                After completing a full-stack development course early on, I chose to pursue two years of preparatory engineering school to strengthen my foundations. Those years sharpened my discipline and deepened my technical thinking.
              </p>
              <p>
                Once I returned to coding, I dove back in with renewed energy. I explored new technologies, built dozens of projects, and embraced a more refined approach to writing clean, efficient, and scalable code.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.category} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
