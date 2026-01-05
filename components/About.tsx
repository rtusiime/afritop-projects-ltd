import React, { useState } from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-tl-3xl z-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/trucks-fleet-hd.png"
                alt="Afritop Cargo Transportation Fleet"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
              <p className="text-brand-gold text-4xl font-bold mb-2">2009</p>
              <p className="text-white font-medium">{t('about.established')}</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">{t('about.sectionTitle')}</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">{t('about.heading')}</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Tabs */}
            <div className="bg-gray-50 rounded-xl p-2 mb-8 inline-flex flex-wrap">
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'vision' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {t('about.tabs.vision')}
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'mission' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {t('about.tabs.mission')}
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'values' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {t('about.tabs.values')}
              </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm min-h-[200px]">
              {activeTab === 'vision' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center mb-4">
                    <Eye className="w-8 h-8 text-brand-gold mr-4" />
                    <h4 className="text-xl font-bold text-gray-900">{t('about.visionTitle')}</h4>
                  </div>
                  <p className="text-gray-600">
                    {t('about.visionText')}
                  </p>
                </div>
              )}
              {activeTab === 'mission' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-brand-gold mr-4" />
                    <h4 className="text-xl font-bold text-gray-900">{t('about.missionTitle')}</h4>
                  </div>
                  <p className="text-gray-600">
                    {t('about.missionText')}
                  </p>
                </div>
              )}
              {activeTab === 'values' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-brand-gold mr-4" />
                    <h4 className="text-xl font-bold text-gray-900">{t('about.valuesTitle')}</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>{t('about.value1')}</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>{t('about.value2')}</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>{t('about.value3')}</li>
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