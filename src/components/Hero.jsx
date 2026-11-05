import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function Hero({ onOpenQuoteModal }) {
  const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Frah Contractors, I would like to discuss a project.')}`;

  return (
    <section id="hero" className="pt-28 pb-16 sm:pb-20 md:pt-36 md:pb-28 bg-[#087fbd] text-white relative isolate overflow-hidden">
      <div className="absolute -top-32 -right-24 w-[34rem] h-[34rem] rounded-full bg-sky-300/25 blur-3xl -z-10" />
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-14 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Tagline Badge from Logo */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
              <span>We Build Your Dreams</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl min-[375px]:text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.1]">
              Building with care, <span className="text-sky-200">from plan to handover.</span>
            </h1>

            {/* Description */}
            <p className="text-blue-50/85 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Frah Contractors works across commercial, residential and civil construction. We help shape the scope, coordinate the work and keep you informed as the project moves forward.
            </p>

            {/* 3 Simple Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-sm text-blue-50/90">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-200 flex-shrink-0" />
                <span>Commercial & residential</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-200 flex-shrink-0" />
                <span>Planning & coordination</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-200 flex-shrink-0" />
                <span>Clear communication</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3 pt-3 sm:pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full min-[480px]:w-auto justify-center px-5 py-3.5 rounded-lg bg-white hover:bg-blue-50 text-brand-900 font-semibold text-sm shadow-md shadow-navy-950/20 transition-all flex items-center space-x-2"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full min-[480px]:w-auto justify-center px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/30 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </a>
            </div>
            <a href="#projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-50/80 hover:text-white transition-colors">
              Explore our work <ArrowRight className="w-4 h-4" />
            </a>

          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative mx-1 sm:mx-2 lg:mx-0">
            <div className="absolute -inset-3 rounded-[1.75rem] bg-white/10 rotate-2" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-navy-900/10 border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Commercial office buildings"
                className="w-full h-64 min-[480px]:h-80 lg:h-[28rem] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 via-navy-950/35 to-transparent p-5 sm:p-6 pt-20">
                <div className="text-xs uppercase tracking-[0.18em] text-white/75 mb-1">Frah Contractors</div>
                <div className="text-lg sm:text-xl text-white font-semibold font-heading">Commercial · Residential · Civil</div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-2 sm:-left-5 bg-white rounded-xl border border-slate-200 shadow-lg px-3 sm:px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500">A considered approach</div>
                <div className="text-sm font-semibold text-navy-900">Plan · Build · Deliver</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
