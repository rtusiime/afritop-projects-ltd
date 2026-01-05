import React from 'react';
import { ChevronRight, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/road-works.png"
          alt="Afritop Road Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
            {t('hero.tagline')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {t('hero.title1')} <br/>
            <span className="text-brand-gold">{t('hero.title2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex justify-center items-center px-8 py-4 rounded-lg text-base font-bold bg-brand-gold text-brand-blue hover:bg-yellow-400 transition-all hover:translate-y-[-2px] shadow-lg shadow-yellow-500/20"
            >
              {t('hero.exploreServices')}
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex justify-center items-center px-8 py-4 rounded-lg text-base font-bold border border-white text-white hover:bg-white hover:text-brand-blue transition-all"
            >
              {t('hero.aboutUs')}
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 w-full bg-white/5 border-t border-white/10 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-6">
          <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8">
            <div className="flex items-center space-x-2 lg:space-x-4">
              <ShieldCheck className="w-6 h-6 lg:w-10 lg:h-10 text-brand-gold flex-shrink-0" />
              <div>
                <p className="text-sm md:text-lg lg:text-2xl font-bold text-white">{t('hero.stats.years')}</p>
                <p className="text-xs lg:text-sm text-gray-300 hidden sm:block">{t('hero.stats.yearsLabel')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <TrendingUp className="w-6 h-6 lg:w-10 lg:h-10 text-brand-gold flex-shrink-0" />
              <div>
                <p className="text-sm md:text-lg lg:text-2xl font-bold text-white">{t('hero.stats.multiNational')}</p>
                <p className="text-xs lg:text-sm text-gray-300 hidden sm:block">{t('hero.stats.multiNationalLabel')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <Users className="w-6 h-6 lg:w-10 lg:h-10 text-brand-gold flex-shrink-0" />
              <div>
                <p className="text-sm md:text-lg lg:text-2xl font-bold text-white">{t('hero.stats.verified')}</p>
                <p className="text-xs lg:text-sm text-gray-300 hidden sm:block">{t('hero.stats.verifiedLabel')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};