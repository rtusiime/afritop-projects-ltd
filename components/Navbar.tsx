import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      if (!isHome) {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Team', href: '/team', isRoute: true },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src="/images/logo.png"
              alt="Afritop Projects Ltd"
              className={`h-14 w-auto transition-all ${scrolled || !isHome ? '' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                    scrolled || !isHome ? 'text-gray-700' : 'text-gray-100'
                  } ${location.pathname === link.href ? 'text-brand-gold' : ''}`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                    scrolled || !isHome ? 'text-gray-700' : 'text-gray-100'
                  }`}
                >
                  {link.name}
                </button>
              )
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
                scrolled || !isHome
                  ? 'bg-brand-blue text-white hover:bg-brand-blue/90'
                  : 'bg-brand-gold text-brand-blue hover:bg-yellow-400'
              }`}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled || !isHome ? 'text-gray-900' : 'text-white'}`}
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
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                >
                  {link.name}
                </button>
              )
            ))}
            <div className="mt-4 px-3">
              <button
                onClick={() => handleNavClick('#contact')}
                className="block w-full text-center px-5 py-3 rounded-lg font-bold bg-brand-gold text-brand-blue"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
