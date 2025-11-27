import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { ExecutiveProfile } from '../types';

const executives: ExecutiveProfile[] = [
  {
    name: "Eng. Akankwasa Justus",
    role: "Technical & Engineering Services Director",
    bio: "A registered Civil Engineer with over 30 years of experience. Holds a Masters in Construction Management from Loughborough University, UK. Specialized in major public and private projects including World Bank funded infrastructure.",
    image: "/images/akankwasa-justus.png"
  },
  {
    name: "Mr. Agaba Milton",
    role: "Managing Director",
    bio: "An astute businessman and founder with a background in Economics from Makerere University. Has decades of experience in international trade, logistics, and project coordination across Uganda, Rwanda, and Kenya.",
    image: "/images/agaba-milton.png"
  },
  {
    name: "Mr. Bagyendera Moses",
    role: "CEO & Business Development Director",
    bio: "ICT specialist with over 27 years of experience in international development (WHO, USAID). Holds an MSC in Computer Science and MPH. Expert in e-Government, Digital Health Policy, and large-scale system integration.",
    image: "/images/bagyendera-moses.png"
  }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Led by Industry Veterans</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {executives.map((exec, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={exec.image} 
                  alt={exec.name} 
                  className="w-full h-80 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <button className="p-2 bg-white rounded-full hover:bg-brand-gold transition-colors">
                      <Linkedin className="w-5 h-5 text-brand-blue" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-brand-gold transition-colors">
                      <Mail className="w-5 h-5 text-brand-blue" />
                    </button>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900">{exec.name}</h4>
              <p className="text-brand-gold font-medium text-sm mb-3 uppercase">{exec.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {exec.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};