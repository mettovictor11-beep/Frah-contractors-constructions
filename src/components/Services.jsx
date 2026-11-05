import React from 'react';
import { Building2, Home, Hammer, PaintBucket, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/websiteData';

const iconMap = {
  Building2,
  Home,
  Hammer,
  PaintBucket
};

export default function Services({ onOpenQuoteModal }) {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Our Contracting Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 font-heading tracking-tight mt-1">
            Core Construction Services
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From initial site excavation to final structural turnkey handover, we offer full-service general contracting for commercial, residential, and civil developments.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.icon] || Building2;
            return (
              <div 
                key={svc.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden bg-slate-100">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-800 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-navy-800" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 font-heading">
                        {svc.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {svc.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {svc.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-navy-700 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => onOpenQuoteModal(svc.title)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-navy-800 hover:text-navy-950 transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
