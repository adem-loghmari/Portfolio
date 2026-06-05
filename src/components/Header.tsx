import { useState, useEffect } from "react";
import { Menu, X, Code2, User, Briefcase, Mail, FolderOpen } from "lucide-react";
import { scrollToSection } from "../lib/scroll";

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-white text-sm tracking-tight">
              Adam Loghmari
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-200 text-sm font-medium"
                >
                  <Icon size={13} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Hire Me CTA */}
          <div className="hidden md:flex">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-white/[0.06]">
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all text-sm font-medium"
                  >
                    <Icon size={15} />
                    {item.label}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-xl text-sm font-semibold"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
