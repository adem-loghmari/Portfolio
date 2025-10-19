import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown, Link } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden pt-16 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-700">
                <img src="src/components/assets/pfp.jpg" alt="Profile" className="w-full h-full rounded-full object-cover object-top" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Full Stack
            </span>
            <br />
            <span className="text-white">MERN Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Crafting scalable web applications with modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
            {['🟢 MongoDB', '⚙️ Express.js', '⚛️ React.js', '🟩 Node.js', '🔷 TypeScript'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-800">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Projects
            </button>
            <button onClick={()=>window.open('/resume.pdf', '_blank')} className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 animate-fade-in-up animation-delay-1000">
            <a href="https://github.com/adem-loghmari" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/adam-hmida-loghmari-8756b22b1/" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ArrowDown size={32} className="text-white/60 hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;