import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-amber-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Start Your Project With Us</h3>
            <p className="text-gray-600 mb-10">
              Whether you need complex engineering solutions, ICT infrastructure, or reliable logistics, our team is ready to assist.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-bold text-gray-900 mb-1">Head Office</h5>
                  <p className="text-gray-600">Plot 213, Ntinda - Kyanja Road</p>
                  <p className="text-gray-600">Kisaasi Trading Center</p>
                  <p className="text-gray-600">Ntinda, Kampala - Uganda</p>
                  <p className="text-gray-600">P.O. Box 180752</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-bold text-gray-900 mb-1">Call Us</h5>
                  <p className="text-gray-600">+256 773 889 613 / +256 751 580 057 (Milton)</p>
                  <p className="text-gray-600">+256 772 521 404 / +256 753 521 404 (Moses)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-bold text-gray-900 mb-1">Email Us</h5>
                  <a href="mailto:afritopprojects@gmail.com" className="text-brand-blue font-medium hover:underline">
                    afritopprojects@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all" placeholder="+256..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all">
                  <option>Construction & Engineering</option>
                  <option>ICT Infrastructure</option>
                  <option>Procurement & Logistics</option>
                  <option>Plant Hire</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Afritop Projects Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-blue">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};