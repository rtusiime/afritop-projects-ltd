import React from 'react';
import { Monitor, Truck, Hammer, Droplets, HardHat, Building2, LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceConfig {
  key: string;
  icon: LucideIcon;
}

const serviceConfigs: ServiceConfig[] = [
  { key: 'ict', icon: Monitor },
  { key: 'civil', icon: HardHat },
  { key: 'water', icon: Droplets },
  { key: 'building', icon: Building2 },
  { key: 'plant', icon: Hammer },
  { key: 'logistics', icon: Truck }
];

export const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">{t('services.sectionTitle')}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('services.heading')}</h3>
          <p className="text-gray-600">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceConfigs.map((service, index) => {
            const details = t(`services.items.${service.key}.details`, { returnObjects: true }) as string[];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-brand-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                  <service.icon className="w-7 h-7 text-white group-hover:text-brand-blue" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t(`services.items.${service.key}.title`)}</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {t(`services.items.${service.key}.description`)}
                </p>
                <ul className="space-y-2">
                  {details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-brand-gold"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};