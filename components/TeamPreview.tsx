import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const executives = [
  {
    name: "Eng. Akankwasa Justus",
    role: "Technical Director",
    image: "/images/justus-headshot.png"
  },
  {
    name: "Mr. Agaba Milton",
    role: "Managing Director",
    image: "/images/milton-headshot.png"
  },
  {
    name: "Mr. Bagyendera Moses",
    role: "CEO",
    image: "/images/moses-headshot.png"
  }
];

export const TeamPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h3>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center mt-4 md:mt-0 text-brand-blue font-medium hover:text-brand-gold transition-colors group"
          >
            View Full Team
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {executives.map((exec, idx) => (
            <Link
              key={idx}
              to="/team"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white font-bold text-lg">{exec.name}</h4>
                  <p className="text-brand-gold text-sm">{exec.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/team"
            className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-full font-medium hover:bg-brand-blue/90 transition-colors"
          >
            Meet All 18+ Team Members
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
