import React from 'react';
import { useTranslation } from 'react-i18next';
import { Handshake, Globe, Building, Shield, ArrowRight, CheckCircle, FileText, Landmark } from 'lucide-react';

const benefitConfigs = [
  { key: 'localExpertise', icon: Globe },
  { key: 'establishedPresence', icon: Building },
  { key: 'trustedRelationships', icon: Shield },
  { key: 'collaborativeApproach', icon: Handshake }
];

export const Partnerships: React.FC = () => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const consultancyServices = t('partnerships.consultancy.services', { returnObjects: true }) as string[];
  const fundedProjectTypes = t('partnerships.funded.types', { returnObjects: true }) as string[];

  return (
    <section id="partnerships" className="py-24 bg-brand-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">
            {t('partnerships.sectionTitle')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('partnerships.heading')}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            {t('partnerships.description')}
          </p>
          <div className="inline-flex items-center bg-brand-gold/20 border border-brand-gold/40 rounded-full px-6 py-3">
            <span className="text-brand-gold font-bold text-lg">{t('partnerships.projectsAbove')}</span>
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">{t('partnerships.whyPartner')}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitConfigs.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="w-14 h-14 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-brand-gold transition-colors">
                  <benefit.icon className="w-7 h-7 text-brand-gold group-hover:text-brand-blue transition-colors" />
                </div>
                <h5 className="text-white font-semibold mb-2">{t(`partnerships.benefits.${benefit.key}.title`)}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`partnerships.benefits.${benefit.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Procurement Consultancy Services */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">{t('partnerships.consultancy.title')}</h4>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              {t('partnerships.consultancy.description')}
            </p>
            <div className="space-y-3">
              {consultancyServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-6 italic">
              {t('partnerships.consultancy.note')}
            </p>
          </div>

          {/* Internationally Funded Projects */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mr-4">
                <Landmark className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">{t('partnerships.funded.title')}</h4>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              {t('partnerships.funded.description')}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full">World Bank</span>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full">African Development Bank (AfDB)</span>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full">International Monetary Fund (IMF)</span>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full">Government Financing</span>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full">Other International Funding Institutions</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm font-medium">{t('partnerships.funded.projectTypes')}</p>
            <div className="space-y-3">
              {fundedProjectTypes.map((project, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{project}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{t('partnerships.cta.title')}</h4>
              <p className="text-gray-600 max-w-2xl">
                {t('partnerships.cta.description')}
              </p>
            </div>
            <button
              onClick={handleContactClick}
              className="px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-blue/90 transition-colors whitespace-nowrap flex items-center group"
            >
              {t('partnerships.cta.button')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
