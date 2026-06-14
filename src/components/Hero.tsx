import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import resume from "./assets/Adam_Hmida_Loghmari_resume.pdf";
import { scrollToSection } from "../lib/scroll";

const techStack = ["React", "Next.js", "Node.js", "TypeScript", "Laravel", "Go"];

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 overflow-hidden pt-16">
    {/* ── Gradient Orbs ── */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Indigo — top left */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[120px] animate-float animate-glow-pulse" />
      {/* Cyan — top right */}
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-cyan-400/15 dark:bg-cyan-500/15 rounded-full blur-[100px] animate-float-slow" />
      {/* Violet — bottom center */}
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-violet-400/15 dark:bg-violet-600/15 rounded-full blur-[120px] animate-float-reverse" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/60 dark:to-gray-950/60" />
    </div>

    {/* ── Content ── */}
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      {/* Available badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-600 dark:text-gray-400 mb-10 animate-fade-in-up">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
        Available for remote work &amp; relocation
      </div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
        Full‑Stack
        <br />
        <span className="gradient-text">Developer</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
        Building scalable platforms with{" "}
        <span className="text-gray-900 dark:text-gray-200 font-medium">
          React, Next.js, Node.js &amp; Laravel
        </span>
        .<br />
        Real products. Real impact.
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12 animate-fade-in-up animation-delay-600">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3.5 py-1.5 glass rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-500/50 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-800">
        <button
          onClick={() => scrollToSection("projects")}
          className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25 text-sm"
        >
          View My Work
        </button>
        <a
          href={resume}
          download="Adam_Hmida_Loghmari_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3.5 glass rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-sm text-gray-900 dark:text-white hover:border-gray-900/20 dark:hover:border-white/25"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-3 mb-20 animate-fade-in-up animation-delay-1000">
        <a
          href="https://github.com/adem-loghmari"
          target="_blank"
          rel="noreferrer"
          className="p-3 glass rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
          aria-label="GitHub"
        >
          <Github size={19} />
        </a>
        <a
          href="https://www.linkedin.com/in/adam-hmida-loghmari-8756b22b1/"
          target="_blank"
          rel="noreferrer"
          className="p-3 glass rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin size={19} />
        </a>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="animate-bounce text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 transition-colors"
        aria-label="Scroll to About"
      >
        <ArrowDown size={22} />
      </button>
    </div>
  </section>
);

export default Hero;
