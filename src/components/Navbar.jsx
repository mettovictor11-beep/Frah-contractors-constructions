import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/websiteData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav 
        className={`transition-all duration-300 bg-white border-b border-slate-200 ${
          isScrolled ? 'py-2.5 shadow-sm' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo on the left */}
            <a href="#hero" className="flex items-center py-1">
              <img
                src="/Frah-logo.jpg"
                alt="Frah Contractors Logo - We Build Your Dreams"
                className="h-16 sm:h-[4.5rem] md:h-20 w-auto object-contain"
              />
            </a>

            {/* Squeezed compact Navigation on the right */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* Primary Action Button */}
              <button
                onClick={onOpenQuoteModal}
                className="bg-brand-700 hover:bg-brand-800 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-all"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-navy-900" /> : <Menu className="w-6 h-6 text-navy-900" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-navy-900 hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-navy-900 text-white font-semibold py-2.5 rounded-lg text-sm"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
