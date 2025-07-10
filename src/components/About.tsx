import React from 'react';
import { Code2, Database, Server, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Palette className="w-6 h-6" />,
      technologies: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'HTML5/CSS3'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6" />,
      technologies: ['Node.js', 'Express.js', 'Python', 'RESTful APIs', 'GraphQL', 'Microservices', 'Spring Boot'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6" />,
      technologies: ['MongoDB', 'MySQL', 'Firebase'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Tools & DevOps',
      icon: <Code2 className="w-6 h-6" />,
      technologies: ['Git', 'Docker', 'AWS', 'Jest', 'Webpack', 'CI/CD'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Full Stack Software Engineer with over 2 years of experience building scalable, user-focused web applications. I enjoy turning complex problems into elegant solutions that are both robust and intuitive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I discovered coding back in high school — and it clicked instantly. What started as a simple curiosity quickly became a passion for solving complex problems through code. I loved the logic, the creativity, and the feeling of building something from nothing.
              </p>
              <p>
                After completing a full stack development course early on, I chose to pursue two years of preparatory engineering school to strengthen my foundations. While those years temporarily pulled me away from web development, they sharpened my discipline and deepened my technical thinking.
              </p>
              <p>
                Once I returned to coding, I dove back in with renewed energy. I explored new technologies, built dozens of projects, and embraced a more refined approach to writing clean, efficient, and scalable code. Since then, I’ve been all-in — constantly learning, building, and sharing knowledge along the way.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-emerald-600 mb-2">~3</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={skill.category} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-4`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;