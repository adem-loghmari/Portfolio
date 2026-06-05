import { Code2, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="bg-[#020208] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Code2 size={15} className="text-white" />
          </div>
          <span className="font-bold text-white">Adam Hmida Loghmari</span>
        </div>

        <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Full-Stack Developer building real products. Open to remote work,
          freelance, and relocation opportunities.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-10">
          <a
            href="https://github.com/adem-loghmari"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 glass rounded-full text-gray-500 hover:text-white border border-white/[0.07] hover:border-white/20 transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/adam-hmida-loghmari-8756b22b1/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 glass rounded-full text-gray-500 hover:text-white border border-white/[0.07] hover:border-white/20 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:hamzaloghmari4@gmail.com"
            className="p-2.5 glass rounded-full text-gray-500 hover:text-white border border-white/[0.07] hover:border-white/20 transition-all"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Nav links */}
        <div className="flex justify-center gap-8 mb-10">
          {["about", "projects", "experience"].map((id) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-500 hover:text-gray-300 text-sm capitalize transition-colors"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 Adam Hmida Loghmari — All rights reserved
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-600 hover:text-gray-300 text-xs transition-colors group"
          >
            Back to top
            <ArrowUp
              size={12}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
