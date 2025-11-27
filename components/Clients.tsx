import React from 'react';
import { Handshake } from 'lucide-react';

const clients = [
  { name: "Uganda Red Cross Society", type: "NGO" },
  { name: "PENO", type: "Construction" },
  { name: "Nella", type: "Agriculture" },
  { name: "Bemuga", type: "Engineering" },
  { name: "RKA & Company", type: "Accountants" },
  { name: "Jab Lands (U) Ltd", type: "Real Estate" },
  { name: "Balistique Service Limited", type: "Services" },
  { name: "Maintenance Group Ltd", type: "Maintenance" },
  { name: "GeoQuest Exploration", type: "Mining" },
  { name: "GK Properties", type: "Real Estate" },
  { name: "IBB International Ltd", type: "Construction" },
  { name: "SBI International Holdings AG", type: "Investment" },
  { name: "Archtech Consults (U) Ltd", type: "Architecture" },
  { name: "KREG Associates", type: "Engineering" },
  { name: "Ficah Enterprises (U) Limited", type: "Supplies" },
  { name: "Reynolds Construction Company Ltd", type: "Construction" },
  { name: "Basic Group Ltd", type: "Construction" },
  { name: "District Local Governments", type: "Government" },
];

const partners = [
  "Ministry of Education and Sports",
  "Ministry of Works and Transport",
  "Uganda National Roads Authority (UNRA)",
  "National Water & Sewerage Corporation",
  "Kampala Capital City Authority (KCCA)",
  "World Bank",
  "African Development Bank (ADB)",
  "UNICEF",
  "Various District Local Governments",
];

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Trusted By</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clients, Partners & Consulting Firms</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have built strong relationships with leading organizations across government, private sector, and international development.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-4 text-center hover:bg-amber-50 hover:shadow-md transition-all group cursor-default"
            >
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-colors">
                <span className="text-brand-blue font-bold text-sm group-hover:text-white">
                  {client.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 leading-tight">{client.name}</h4>
              <p className="text-xs text-gray-400 mt-1">{client.type}</p>
            </div>
          ))}
        </div>

        {/* Government & Development Partners */}
        <div className="bg-brand-blue rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-brand-gold" />
            <h4 className="text-2xl font-bold text-white">Government & Development Partners</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/10 rounded-full text-white text-sm hover:bg-brand-gold hover:text-brand-blue transition-colors cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
