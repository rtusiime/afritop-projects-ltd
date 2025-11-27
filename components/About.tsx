import React, { useState } from 'react';
import { Target, Eye, Award } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-tl-3xl z-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/team-meeting.png"
                alt="Afritop Engineering Team at Construction Site"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl shadow-xl z-20 max-w-[280px] hidden md:block overflow-hidden border-4 border-white">
              <img
                src="/images/trucks-fleet.png"
                alt="Afritop Cargo Fleet"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue to-transparent p-4">
                <p className="text-brand-gold text-2xl font-bold">Since 2009</p>
                <p className="text-white text-xs">Regional logistics leader</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">About Afritop</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Excellence in Every Detail</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Afritop Projects Ltd is one of Uganda’s leading companies in engineering, construction, cargo transportation, and ICT infrastructure. 
              Founded in 2009, we have evolved from a distribution company into a multi-disciplinary powerhouse serving the Great Lakes region.
            </p>

            {/* Tabs */}
            <div className="bg-gray-50 rounded-xl p-2 mb-8 inline-flex">
              <button 
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'vision' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Our Vision
              </button>
              <button 
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'mission' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Our Mission
              </button>
              <button 
                onClick={() => setActiveTab('values')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'values' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Core Values
              </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm min-h-[200px]">
              {activeTab === 'vision' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center mb-4">
                    <Eye className="w-8 h-8 text-brand-gold mr-4" />
                    <h4 className="text-xl font-bold text-gray-900">Vision Statement</h4>
                  </div>
                  <p className="text-gray-600">
                    To be the leading General Services provider in Uganda and the region, capable of delivering major projects without compromising standards, quality, and safety.
                  </p>
                </div>
              )}
              {activeTab === 'mission' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-brand-gold mr-4" />
                    <h4 className="text-xl font-bold text-gray-900">Mission Statement</h4>
                  </div>
                  <p className="text-gray-600">
                    To be the leading prime contractor in infrastructure development, procurement supplies, transportation, and related technical services organization serving industry sectors in the East African Region.
                  </p>
                </div>
              )}
              {activeTab === 'values' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-brand-gold mr-4" />
                    <h4 className="text-xl font-bold text-gray-900">Our Values</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>Highest standards of professionalism</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>Complete honesty and integrity</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>Safety and environmental responsibility</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};