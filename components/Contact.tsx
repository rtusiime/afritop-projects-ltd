import React, { useState } from 'react';
import { MapPin, Phone, Mail, X, Loader2, CheckCircle } from 'lucide-react';
import { submitInquiry } from '../lib/supabase';

const PrivacyPolicy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 overflow-y-auto">
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h2>
          <p className="text-gray-500 text-sm mb-8">Last updated: November 2024</p>

          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">1. Information We Collect</h3>
            <p className="text-gray-600 mb-4">
              Afritop Ventures Ltd ("we", "our", or "us") collects information you provide directly when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Submit a contact form or inquiry on our website</li>
              <li>Request a quote for our services</li>
              <li>Communicate with us via email or phone</li>
              <li>Enter into a business relationship with us</li>
            </ul>
            <p className="text-gray-600 mb-4">
              This information may include your name, email address, phone number, company name, and project details.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">2. How We Use Your Information</h3>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Process and fulfill service requests</li>
              <li>Send project updates and communications</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">3. Information Sharing</h3>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors (lawyers, accountants)</li>
              <li>Government authorities when required by law</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">4. Data Security</h3>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">5. Your Rights</h3>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">6. Contact Us</h3>
            <p className="text-gray-600 mb-4">
              For any privacy-related questions or requests, please contact us at:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> info@afritopventures.com<br />
              <strong>Address:</strong> Plot 213, Ntinda - Kyanja Road, Kisaasi Trading Center, Kampala, Uganda
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TermsOfService: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 overflow-y-auto">
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Terms of Service</h2>
          <p className="text-gray-500 text-sm mb-8">Last updated: November 2024</p>

          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">1. Acceptance of Terms</h3>
            <p className="text-gray-600 mb-4">
              By accessing and using the Afritop Ventures Ltd website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">2. Services</h3>
            <p className="text-gray-600 mb-4">
              Afritop Ventures Ltd provides engineering, construction, ICT infrastructure, procurement, and logistics services. Specific terms for individual projects are outlined in separate service agreements and contracts.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">3. Client Responsibilities</h3>
            <p className="text-gray-600 mb-4">Clients agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Provide accurate and complete information for project requirements</li>
              <li>Make timely payments as per agreed terms</li>
              <li>Provide necessary access and approvals for project execution</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">4. Project Quotations & Contracts</h3>
            <p className="text-gray-600 mb-4">
              All quotations are valid for 30 days unless otherwise specified. Final pricing and terms are subject to formal contract agreements. Project timelines are estimates and may vary based on site conditions and other factors.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">5. Payment Terms</h3>
            <p className="text-gray-600 mb-4">
              Payment terms are specified in individual project contracts. Standard terms may include mobilization fees, milestone payments, and retention amounts. Late payments may incur interest charges as specified in the contract.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">6. Warranty & Liability</h3>
            <p className="text-gray-600 mb-4">
              Afritop Ventures Ltd warrants that all work will be performed in a professional manner in accordance with industry standards. Specific warranty periods are outlined in individual contracts. Our liability is limited to the value of the contract unless otherwise agreed.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">7. Intellectual Property</h3>
            <p className="text-gray-600 mb-4">
              All designs, drawings, and specifications created by Afritop Ventures Ltd remain our intellectual property until full payment is received. Upon payment, rights transfer as specified in the project contract.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">8. Dispute Resolution</h3>
            <p className="text-gray-600 mb-4">
              Any disputes arising from our services shall first be attempted to be resolved through good faith negotiations. If unresolved, disputes shall be subject to arbitration in Kampala, Uganda under Ugandan law.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">9. Changes to Terms</h3>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these terms at any time. Changes will be posted on our website with an updated effective date.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">10. Contact</h3>
            <p className="text-gray-600">
              For questions about these terms, please contact us at:<br />
              <strong>Email:</strong> info@afritopventures.com<br />
              <strong>Phone:</strong> +256 773 889 613
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Contact: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_interest: 'Construction & Engineering',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await submitInquiry(formData);
      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        service_interest: 'Construction & Engineering',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <a href="mailto:info@afritopventures.com" className="text-brand-blue font-medium hover:underline">
                    info@afritopventures.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h4>

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h5>
                <p className="text-gray-600 mb-6">Thank you for your inquiry. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="text-brand-blue font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all"
                      placeholder="+256..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select
                    name="service_interest"
                    value={formData.service_interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all"
                  >
                    <option>Construction & Engineering</option>
                    <option>ICT Infrastructure</option>
                    <option>Procurement & Logistics</option>
                    <option>Plant Hire</option>
                    <option>Partnerships & Joint Ventures</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 outline-none transition-all"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Afritop Ventures Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setShowTerms(true)} className="hover:text-brand-blue transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsOfService onClose={() => setShowTerms(false)} />}
    </footer>
  );
};
