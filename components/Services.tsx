import React from 'react';
import { Monitor, Truck, Hammer, Droplets, HardHat, Building2 } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "ICT Infrastructure",
    description: "End-to-end technological solutions including software, hardware, and network integration.",
    icon: Monitor,
    details: ["Software & Hardware Supply", "System Integration", "CCTV Installation", "Voice & Data Systems"]
  },
  {
    title: "Civil Engineering",
    description: "Construction of roads, bridges, and structural frameworks that connect communities.",
    icon: HardHat,
    details: ["Road Construction", "Bridge Construction", "Weighbridges", "Bulk Earthworks"]
  },
  {
    title: "Water Works",
    description: "Comprehensive water engineering solutions for industrial and municipal needs.",
    icon: Droplets,
    details: ["Pumping Stations", "Piped Water Schemes", "Valley Dams", "Borehole Construction"]
  },
  {
    title: "Building Construction",
    description: "Commercial and residential building projects managed from foundation to finish.",
    icon: Building2,
    details: ["Commercial Buildings", "Roofing Works", "Mechanical Works", "Structural Design"]
  },
  {
    title: "Plant & Equipment",
    description: "Rental of heavy machinery and equipment for large-scale construction projects.",
    icon: Hammer,
    details: ["Yellow Machines", "Cranes", "Trucks", "Construction Tools"]
  },
  {
    title: "Procurement & Logistics",
    description: "Efficient supply chain management and cargo transportation across East Africa.",
    icon: Truck,
    details: ["Cargo Transportation", "Material Testing", "Aggregate Supply", "General Supplies"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Solutions for Complex Projects</h3>
          <p className="text-gray-600">
            We combine technical expertise with local knowledge to deliver projects that meet international standards of quality and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-brand-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                <service.icon className="w-7 h-7 text-white group-hover:text-brand-blue" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-brand-gold"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};