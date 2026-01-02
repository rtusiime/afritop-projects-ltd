import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

// Project configurations with non-translatable data
const projectConfigs = [
  {
    id: "road-construction-grading",
    categoryKey: "Road Construction",
    status: "completed" as const,
    image: "/images/projects/road-grading.png",
    gallery: ["/images/road-works.png", "/images/projects/road-earthworks.png"],
    year: "2023",
  },
  {
    id: "residential-estate-development",
    categoryKey: "Building Construction",
    status: "ongoing" as const,
    image: "/images/projects/residential-estate.png",
    gallery: ["/images/completed-building.png", "/images/projects/commercial-building-construction.png"],
    year: "2024-2025",
  },
  {
    id: "swimming-pool-construction",
    categoryKey: "Building Construction",
    status: "completed" as const,
    image: "/images/projects/swimming-pool.png",
    year: "2022",
  },
  {
    id: "water-pipeline-installation",
    categoryKey: "Water Works",
    status: "completed" as const,
    image: "/images/water-pipe.png",
    gallery: ["/images/projects/water-pipeline.png", "/images/projects/culvert-construction.png"],
    year: "2023",
  },
  {
    id: "culvert-bridge-construction",
    categoryKey: "Civil Engineering",
    status: "completed" as const,
    image: "/images/projects/bridge-culvert.png",
    gallery: ["/images/projects/culvert-construction.png"],
    year: "2022",
  },
  {
    id: "school-infrastructure",
    categoryKey: "Building Construction",
    status: "completed" as const,
    image: "/images/road-construction.png",
    gallery: ["/images/projects/school-paving.png"],
    year: "2023",
  },
  {
    id: "ict-infrastructure",
    categoryKey: "ICT Infrastructure",
    status: "completed" as const,
    image: "/images/network-cables.png",
    gallery: ["/images/ict-cables.png", "/images/cctv-install.png"],
    year: "2020-2024",
  },
  {
    id: "plant-equipment-hire",
    categoryKey: "Plant & Equipment",
    status: "ongoing" as const,
    image: "/images/projects/heavy-equipment.png",
    gallery: ["/images/dump-truck.png", "/images/trucks-fleet.png"],
    year: "2009-Present",
  },
  {
    id: "commercial-building",
    categoryKey: "Building Construction",
    status: "ongoing" as const,
    image: "/images/projects/multi-storey-building.png",
    gallery: ["/images/building-construction.png"],
    year: "2024-2026",
  }
];

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  const translateCategory = (cat: string) => {
    return t(`projects.categories.${cat}`, cat);
  };

  // Build translated projects from configs
  const projects: Project[] = projectConfigs.map(config => ({
    id: config.id,
    title: t(`projects.items.${config.id}.title`),
    category: config.categoryKey,
    status: config.status,
    image: config.image,
    gallery: config.gallery,
    location: t(`projects.items.${config.id}.location`),
    client: t(`projects.items.${config.id}.client`),
    duration: t(`projects.items.${config.id}.duration`),
    year: config.year,
    description: t(`projects.items.${config.id}.description`),
    scope: t(`projects.items.${config.id}.scope`, { returnObjects: true }) as string[],
    highlights: t(`projects.items.${config.id}.highlights`, { returnObjects: true }) as string[],
  }));

  const categories = ['all', ...new Set(projectConfigs.map(p => p.categoryKey))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">{t('projects.sectionTitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">{t('projects.heading')}</h3>
            <p className="text-gray-300 mt-4">
              {t('projects.description')}
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-brand-gold text-brand-blue'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat === 'all' ? t('projects.allProjects') : translateCategory(cat)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg bg-slate-800 aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors"></div>

              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-bold uppercase ${
                project.status === 'completed' ? 'bg-green-500' : 'bg-amber-500'
              }`}>
                {t(`projects.${project.status}`)}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-brand-gold text-xs font-bold uppercase mb-1">{translateCategory(project.category)}</p>
                <h5 className="text-lg font-bold text-white mb-2">{project.title}</h5>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {project.description}
                </p>
                <span className="inline-block mt-3 text-brand-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t('projects.viewDetails')} →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-white/20 rounded-lg hover:bg-brand-gold hover:text-brand-blue hover:border-brand-gold transition-all text-sm font-bold"
            >
              {showAll ? t('projects.showLess') : `${t('projects.viewAll')} ${filteredProjects.length} ${t('projects.projectsCount')}`}
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
