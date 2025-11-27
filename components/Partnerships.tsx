import React from 'react';
import { Handshake, Globe, Building, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Deep understanding of the East African market, regulatory landscape, and business culture."
  },
  {
    icon: Building,
    title: "Established Presence",
    description: "Over 15 years of operations with proven track record across Uganda and the Great Lakes region."
  },
  {
    icon: Shield,
    title: "Trusted Relationships",
    description: "Strong ties with government agencies, regulatory bodies, and industry stakeholders."
  },
  {
    icon: Handshake,
    title: "Collaborative Approach",
    description: "Flexible partnership structures including joint ventures, consortiums, and strategic alliances."
  }
];

const partnershipAreas = [
  "Electric Power Generation & Renewable Energy",
  "Large-Scale Infrastructure Development",
  "Advanced Technology & ICT Projects",
  "Heavy Civil Engineering Works",
  "Industrial Construction & Manufacturing",
  "Water & Sanitation Infrastructure"
];

export const Partnerships: React.FC = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="partnerships" className="py-24 bg-brand-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">
            Strategic Partnerships
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Joint Ventures & Partnerships
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            We invite international companies to partner with us for major projects in Africa.
            As your local partner, we provide the expertise, relationships, and on-ground presence
            needed to successfully execute large-scale projects across the region.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Value Proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold text-white mb-6">Why Partner With Us?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold transition-colors">
                    <benefit.icon className="w-6 h-6 text-brand-gold group-hover:text-brand-blue transition-colors" />
                  </div>
                  <h5 className="text-white font-semibold mb-2">{benefit.title}</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Partnership Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Partnership Opportunities</h4>
            <p className="text-gray-600 mb-6">
              We are open to joint ventures and partnerships for projects that require advanced
              technology, specialized machinery, equipment, or financial resources beyond our
              current capacity.
            </p>

            <div className="space-y-3 mb-8">
              {partnershipAreas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                <strong>For International Companies:</strong> Win tenders and execute major projects
                in Africa through partnership with a trusted local company. We become your local
                partner in a joint venture or strategic partnership arrangement.
              </p>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-gold transition-colors group"
              >
                Discuss Partnership Opportunities
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-left">
              <p className="text-white font-semibold">Ready to explore partnership opportunities?</p>
              <p className="text-gray-400 text-sm">Let's discuss how we can work together on your next African project.</p>
            </div>
            <button
              onClick={handleContactClick}
              className="px-8 py-3 bg-brand-gold text-brand-blue font-bold rounded-full hover:bg-yellow-400 transition-colors whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
