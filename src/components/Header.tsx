import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0  left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}  >Adam Hmida Loghmari</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <User size={16} />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <Code size={16} />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <Briefcase size={16} />
              <span>Experience</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <Mail size={16} />
              <span>Contact</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User size={20} />
                <span>About</span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Code size={20} />
                <span>Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Briefcase size={20} />
                <span>Experience</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} />
                <span>Contact</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center"
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