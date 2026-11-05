import React from 'react';
import { ClipboardCheck, MessageCircle, Ruler, Wrench } from 'lucide-react';

const iconMap = {
  Planning: Ruler,
  Communication: MessageCircle,
  Coordination: ClipboardCheck,
  Delivery: Wrench
};

const approach = [
  { title: 'Planning', desc: 'Start with the site, the brief and a clear understanding of the work.' },
  { title: 'Communication', desc: 'Keep decisions, changes and next steps easy to follow.' },
  { title: 'Coordination', desc: 'Bring trades, materials and milestones together on site.' },
  { title: 'Delivery', desc: 'Work through the agreed scope and keep an eye on the details.' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              A practical approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 font-heading tracking-tight">
              Good construction starts with a clear plan.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Frah Contractors works across commercial, residential and civil construction. Every project has its own requirements, so we begin by understanding the site, the scope and the people involved.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {approach.map((item) => {
              const Icon = iconMap[item.title];
              return (
                <div key={item.title} className="p-5 rounded-xl border border-slate-200 bg-[#f7f8f6]">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center text-brand-700 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
