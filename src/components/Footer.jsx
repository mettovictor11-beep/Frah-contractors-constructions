import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { companyInfo, navLinks } from '../data/websiteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f4f6f5] border-t border-slate-200 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <a href="#hero" className="inline-block">
              <img
                src="/Frah-logo.jpg"
                alt="Frah Contractors Logo"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Commercial, residential and civil construction. We Build Your Dreams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-navy-900 uppercase text-xs tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 hover:text-navy-900 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiry */}
          <div>
            <h4 className="font-bold text-navy-900 uppercase text-xs tracking-wider mb-3">Have a project in mind?</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              Share a few details and start a conversation with Frah Contractors.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-900">
              Get in touch <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-slate-500 hover:text-brand-800 text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
