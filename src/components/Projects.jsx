import React, { useState } from 'react';
import { projectsData } from '../data/websiteData';

const categories = ["All", "Commercial", "Residential", "Civil", "Renovation"];

export default function Projects({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Project capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 font-heading tracking-tight mt-1">
              Work we take on
            </h2>
          </div>

          {/* Simple Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mt-4 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-navy-900/85 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                  {project.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-navy-900 font-heading">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
                  <span>Typical work: <strong className="text-slate-700">{project.scope}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
