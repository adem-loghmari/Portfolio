import React from 'react';
import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Code className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-2xl">Portfolio</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Full Stack MERN Developer passionate about creating exceptional web experiences. 
            Let's build something amazing together.
          </p>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0 flex items-center">
                © 2025 Portfolio. Made with 
                <Heart className="w-4 h-4 mx-2 text-red-500" />
                by Adam Hmida Loghmari
              </p>
              
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-sm">Back to top</span>
                <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;