import { Code2, Database, Server, Palette } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import SkillCard from "./ui/SkillCard";

const skills = [
  {
    category: "Frontend",
    icon: <Palette className="w-5 h-5" />,
    technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML5/CSS3"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    technologies: ["Node.js", "Express.js", "Laravel", "WebSockets", "REST APIs", "Go"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Firebase"],
    color: "from-violet-500 to-purple-500",
  },
  {
    category: "Tools & DevOps",
    icon: <Code2 className="w-5 h-5" />,
    technologies: ["Git", "GitHub Actions", "Docker", "AWS", "DirectAdmin", "CI/CD"],
    color: "from-orange-500 to-rose-500",
  },
];

const About = () => (
  <section id="about" className="section-darker">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="About Me"
        description="Full-stack developer building real products — not just side projects. I ship production SaaS end to end and I'm actively looking for remote roles."
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Story */}
        <div className="glass rounded-2xl p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Journey</h3>
          </div>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            <p>
              I discovered coding back in high school — and it clicked instantly.
              What started as a simple curiosity quickly became a passion for
              solving complex problems through code.
            </p>
            <p>
              After completing a full-stack development course early on, I chose
              to pursue two years of preparatory engineering school to strengthen
              my foundations. Those years sharpened my discipline and deepened
              my technical thinking.
            </p>
            <p>
              Once I returned to coding, I dove back in with renewed energy. I
              explored new technologies, built dozens of projects, and embraced a
              refined approach to writing clean, efficient, and scalable code.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-900/10 dark:border-white/[0.06]">
            {[
              { value: "4", label: "Companies" },
              { value: "10+", label: "Projects" },
              { value: "Remote", label: "Ready" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills bento grid */}
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.category} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
