import React from 'react';

const projects = [
  { image: "/images/road-construction.png", title: "Road Paving & School Block Construction", category: "Civil Works" },
  { image: "/images/completed-building.png", title: "Residential Building Project", category: "Construction" },
  { image: "/images/network-cables.png", title: "ICT Network Infrastructure", category: "ICT" },
  { image: "/images/trucks-fleet.png", title: "Cargo Transportation Fleet", category: "Logistics" },
  { image: "/images/water-pipe.png", title: "Water Pipeline Installation", category: "Water Works" },
  { image: "/images/road-works.png", title: "Road Construction & Earthworks", category: "Civil Works" },
];

export const Projects: React.FC = () => {

  return (
    <section id="projects" className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Delivering Excellence Across Sectors</h3>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="px-6 py-3 border border-white/20 rounded-lg hover:bg-brand-gold hover:text-brand-blue hover:border-brand-gold transition-all text-sm font-bold">
              View All Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg bg-slate-800 aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-gold text-xs font-bold uppercase mb-1">{project.category}</p>
                <h5 className="text-lg font-bold text-white">{project.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};