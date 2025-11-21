import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className={`p-2 rounded-lg ${scrolled ? 'bg-brand-blue text-white' : 'bg-brand-gold text-brand-blue'}`}>
              <HardHat size={28} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
                AFRITOP
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-semibold ${scrolled ? 'text-gray-500' : 'text-gray-200'}`}>
                Projects Ltd
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                  scrolled ? 'text-gray-700' : 'text-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
                scrolled 
                  ? 'bg-brand-blue text-white hover:bg-brand-blue/90' 
                  : 'bg-brand-gold text-brand-blue hover:bg-yellow-400'
              }`}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-lg font-bold bg-brand-gold text-brand-blue"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};