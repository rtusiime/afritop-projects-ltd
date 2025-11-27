import React from 'react';
import { Team } from '../components/Team';
import { Personnel } from '../components/Personnel';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TeamPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-brand-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Meet the experienced professionals driving Afritop Projects Ltd's success across engineering,
            construction, ICT, and logistics sectors.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <Team />

      {/* All Personnel */}
      <Personnel />
    </div>
  );
};
