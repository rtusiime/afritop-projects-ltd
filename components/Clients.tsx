import React from 'react';

const clientLogos = [
  { name: "Uganda Red Cross Society", logo: "/images/logos/uganda-red-cross.png" },
  { name: "PENO", logo: "/images/logos/peno.png" },
  { name: "Nella", logo: "/images/logos/nella.png" },
  { name: "GeoQuest Exploration", logo: "/images/logos/geoquest.png" },
  { name: "Maintenance Group Ltd", logo: "/images/logos/maintenance-group.png" },
  { name: "Balistque Service Limited", logo: "/images/logos/balistque.png" },
  { name: "Reynolds Construction Company", logo: "/images/logos/rcc.png" },
];

const partners = [
  "Ministry of Education & Sports",
  "Uganda National Roads Authority",
  "National Water & Sewerage Corp",
  "Kampala Capital City Authority",
  "World Bank",
  "African Development Bank",
  "UNICEF",
];

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Trusted By</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Clients & Partners</h3>
        </div>

        {/* Logo Marquee - Modern infinite scroll effect */}
        <div className="relative mb-16">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="flex animate-marquee">
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                  title={client.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Government & Development Partners */}
        <div className="text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">Government & Development Partners</p>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((partner, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm hover:bg-brand-gold hover:text-white transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
