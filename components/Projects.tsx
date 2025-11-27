import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

const projects: Project[] = [
  {
    id: "road-construction-grading",
    title: "Road Grading & Bituminous Surfacing",
    category: "Road Construction",
    status: "completed",
    image: "/images/projects/road-grading.png",
    gallery: ["/images/road-works.png", "/images/projects/road-earthworks.png"],
    location: "Various Districts, Uganda",
    client: "Uganda National Roads Authority (UNRA)",
    duration: "12 months",
    year: "2023",
    description: "Comprehensive road construction project involving gravel and bituminous road construction, maintenance, and improvements across multiple districts in Uganda. The project utilized state-of-the-art motor graders, compactors, and paving equipment to deliver high-quality road surfaces that meet international standards.",
    scope: [
      "Gravel and Bituminous road construction",
      "Road maintenance and improvements",
      "Construction of bridges and intersections",
      "Construction of weighbridges",
      "Street lighting installation",
      "Rehabilitation of existing roads",
      "Bulk earthworks and land preparation",
      "Pavement construction",
      "Road drainage systems"
    ],
    highlights: [
      "Completed ahead of schedule with zero safety incidents",
      "Used environmentally sustainable construction practices",
      "Created employment for over 200 local workers",
      "Improved connectivity for rural communities"
    ]
  },
  {
    id: "residential-estate-development",
    title: "Multi-Unit Residential Estate Development",
    category: "Building Construction",
    status: "ongoing",
    image: "/images/projects/residential-estate.png",
    gallery: ["/images/completed-building.png", "/images/projects/commercial-building-construction.png"],
    location: "Kampala, Uganda",
    client: "Private Developer",
    duration: "24 months",
    year: "2024-2025",
    description: "Large-scale residential estate development featuring multiple townhouse units with modern amenities. The project includes comprehensive civil works, structural construction, roofing, electrical installations, plumbing, and landscaping. Each unit is designed with contemporary architecture while incorporating local building traditions.",
    scope: [
      "Roofing works with quality materials",
      "Carpentry and joinery works",
      "Floor and wall tiling",
      "Welding and metal fabrication",
      "Terrazo works and general supplies",
      "Electrical works and installations",
      "Plumbing and mechanical works",
      "Painting and finishing works",
      "Excavation and foundation works",
      "Structural designs and consultancy services"
    ],
    highlights: [
      "Over 20 residential units under construction",
      "Modern architectural design with local aesthetics",
      "Sustainable building materials used throughout",
      "Integrated security and utility systems"
    ]
  },
  {
    id: "swimming-pool-construction",
    title: "Commercial Swimming Pool & Recreation Facility",
    category: "Building Construction",
    status: "completed",
    image: "/images/projects/swimming-pool.png",
    location: "Kampala, Uganda",
    client: "Hospitality Client",
    duration: "8 months",
    year: "2022",
    description: "Design and construction of a commercial-grade swimming pool facility including filtration systems, deck construction, landscaping, and associated recreational amenities. The project required specialized waterproofing techniques and compliance with international safety standards.",
    scope: [
      "Excavation and pool shell construction",
      "Waterproofing and tiling works",
      "Filtration system installation",
      "Pool deck construction",
      "Landscaping and outdoor areas",
      "Lighting and electrical systems",
      "Plumbing and drainage",
      "Safety equipment installation"
    ],
    highlights: [
      "Olympic-standard filtration system installed",
      "Energy-efficient pump and heating systems",
      "Fully compliant with health and safety regulations",
      "Landscaped surroundings with outdoor seating"
    ]
  },
  {
    id: "water-pipeline-installation",
    title: "Water Pipeline & Pumping Station Construction",
    category: "Water Works",
    status: "completed",
    image: "/images/water-pipe.png",
    gallery: ["/images/projects/water-pipeline.png", "/images/projects/culvert-construction.png"],
    location: "Eastern Uganda",
    client: "National Water & Sewerage Corporation",
    duration: "18 months",
    year: "2023",
    description: "Major water infrastructure project involving the construction of water pumping stations, installation of large-diameter pipelines, and development of piped water distribution schemes. The project significantly improved water access for over 50,000 residents in underserved communities.",
    scope: [
      "Construction of water-pumping stations",
      "Installation of water pumps",
      "Construction of piped-water schemes",
      "Construction of gravity-flow water schemes",
      "Bore-hole construction and rehabilitation",
      "Construction of valley dams",
      "Fish pond construction",
      "Bulk water supply systems",
      "Water distribution networks",
      "Storage reservoirs and pumping stations"
    ],
    highlights: [
      "Served over 50,000 beneficiaries",
      "Reduced water collection time by 75%",
      "Implemented sustainable water management practices",
      "Trained local technicians for ongoing maintenance"
    ]
  },
  {
    id: "culvert-bridge-construction",
    title: "Culvert & Bridge Construction",
    category: "Civil Engineering",
    status: "completed",
    image: "/images/projects/bridge-culvert.png",
    gallery: ["/images/projects/culvert-construction.png"],
    location: "Northern Uganda",
    client: "District Local Government",
    duration: "10 months",
    year: "2022",
    description: "Construction of reinforced concrete box culverts and bridge structures to improve drainage and connectivity in flood-prone areas. The project involved complex engineering solutions to manage seasonal water flows while maintaining year-round road access.",
    scope: [
      "Construction of water channels and canals",
      "Piped storm-water systems",
      "Attenuation and retention ponds",
      "Reinforced concrete culvert construction",
      "Bridge abutment construction",
      "Erosion control measures",
      "Road drainage improvements"
    ],
    highlights: [
      "Withstood major flooding events successfully",
      "Improved road accessibility during rainy seasons",
      "Reduced flood damage to surrounding areas",
      "Used locally-sourced construction materials"
    ]
  },
  {
    id: "school-infrastructure",
    title: "School Infrastructure & Paving Works",
    category: "Building Construction",
    status: "completed",
    image: "/images/road-construction.png",
    gallery: ["/images/projects/school-paving.png"],
    location: "Rural Uganda",
    client: "Ministry of Education",
    duration: "6 months",
    year: "2023",
    description: "Comprehensive school infrastructure development including construction of classroom blocks, paving of school compounds, and installation of essential facilities. The project aimed to improve learning environments and provide safe, accessible spaces for students and staff.",
    scope: [
      "Construction of classroom blocks",
      "Paving of school compounds",
      "Construction of sanitation facilities",
      "Electrical installations",
      "Water supply systems",
      "Fencing and security features",
      "Drainage systems",
      "Landscaping and outdoor areas"
    ],
    highlights: [
      "Benefited over 1,500 students",
      "Included disability-accessible facilities",
      "Solar-powered lighting installed",
      "Community involvement in construction"
    ]
  },
  {
    id: "ict-infrastructure",
    title: "ICT Network Infrastructure Installation",
    category: "ICT Infrastructure",
    status: "completed",
    image: "/images/network-cables.png",
    gallery: ["/images/ict-cables.png", "/images/cctv-install.png"],
    location: "Kampala & Surrounding Districts",
    client: "Government Ministries & Private Organizations",
    duration: "Ongoing",
    year: "2020-2024",
    description: "End-to-end ICT infrastructure solutions including network cabling, server room construction, CCTV surveillance systems, and telecommunications infrastructure. Afritop has partnered with leading technology providers to deliver cutting-edge solutions for both government and private sector clients.",
    scope: [
      "Supply and installation of software",
      "Supply and installation of hardware",
      "System and software design",
      "System integration services",
      "General ICT consulting",
      "End-to-end ICT solutions",
      "Support and maintenance for ICT projects",
      "CCTV installation and monitoring",
      "Telephone and computer networks",
      "General voice and data systems"
    ],
    highlights: [
      "Installed over 500 CCTV cameras across multiple sites",
      "Deployed enterprise-grade network infrastructure",
      "24/7 support and maintenance services",
      "Trained client staff on system operations"
    ]
  },
  {
    id: "plant-equipment-hire",
    title: "Heavy Equipment & Plant Hire Services",
    category: "Plant & Equipment",
    status: "ongoing",
    image: "/images/projects/heavy-equipment.png",
    gallery: ["/images/dump-truck.png", "/images/trucks-fleet.png"],
    location: "East Africa Region",
    client: "Various Construction Companies",
    duration: "Ongoing",
    year: "2009-Present",
    description: "Afritop maintains a comprehensive fleet of heavy construction equipment available for hire, including excavators, graders, compactors, loaders, and trucks. Our equipment is regularly maintained to ensure reliability and safety on all project sites.",
    scope: [
      "Yellow machines (excavators, loaders, graders)",
      "Construction equipment and tools",
      "Crane services for heavy lifting",
      "Truck hire for material transport",
      "Compaction equipment",
      "Concrete mixing equipment",
      "Surveying equipment",
      "Generators and power equipment"
    ],
    highlights: [
      "Fleet of over 50 heavy machines",
      "Experienced operators available",
      "Competitive hire rates",
      "Rapid deployment across East Africa"
    ]
  },
  {
    id: "commercial-building",
    title: "Multi-Storey Commercial Building",
    category: "Building Construction",
    status: "ongoing",
    image: "/images/projects/multi-storey-building.png",
    gallery: ["/images/building-construction.png"],
    location: "Kampala CBD, Uganda",
    client: "Commercial Developer",
    duration: "30 months",
    year: "2024-2026",
    description: "Construction of a modern multi-storey commercial complex featuring office spaces, retail units, and parking facilities. The project showcases Afritop's capability to handle complex structural engineering challenges and deliver premium commercial spaces.",
    scope: [
      "Structural design and engineering",
      "Foundation and substructure works",
      "Reinforced concrete frame construction",
      "Curtain wall and facade installation",
      "MEP (Mechanical, Electrical, Plumbing) systems",
      "Interior finishing works",
      "Elevator and escalator installation",
      "Fire safety systems",
      "Parking structure construction"
    ],
    highlights: [
      "8-storey structure with basement parking",
      "Green building design principles applied",
      "State-of-the-art fire suppression systems",
      "Premium finishing materials throughout"
    ]
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Delivering Excellence Across Sectors</h3>
            <p className="text-gray-300 mt-4">
              Afritop Ventures Ltd has successfully participated in competitive bidding processes for procurement, supplies, and engineering projects both locally and internationally.
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
              {cat === 'all' ? 'All Projects' : cat}
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
                {project.status}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-brand-gold text-xs font-bold uppercase mb-1">{project.category}</p>
                <h5 className="text-lg font-bold text-white mb-2">{project.title}</h5>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {project.description}
                </p>
                <span className="inline-block mt-3 text-brand-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view details →
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
              {showAll ? 'Show Less' : `View All ${filteredProjects.length} Projects`}
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
