import React, { useState } from 'react';
import { X, Award, Briefcase, GraduationCap } from 'lucide-react';

interface Executive {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  education: string[];
  expertise: string[];
  majorProjects: string[];
  image: string;
}

const executives: Executive[] = [
  {
    name: "Eng. Akankwasa Justus",
    role: "Technical & Engineering Services Director",
    shortBio: "A registered Civil Engineer with the Engineers Registration Board of Uganda and a member of Uganda Institution of Professional Engineers.",
    fullBio: [
      "Eng. Justus is a construction management specialist with a Masters in Construction Management from Loughborough University in the UK. He has been at the forefront of major public and private projects under different organizations over the last 30 years building an unmatchable resume in Project Coordination and Implementation.",
      "His vast experience and impressive skill set have been key in shepherding Afritop Ventures Ltd to create systems and processes that set the company apart."
    ],
    education: [
      "Masters in Construction Management - Loughborough University, UK",
      "Registered Civil Engineer - Engineers Registration Board of Uganda",
      "Member - Uganda Institution of Professional Engineers"
    ],
    expertise: [
      "Project Coordination & Implementation",
      "Construction Management",
      "Infrastructure Development",
      "Quality Assurance"
    ],
    majorProjects: [
      "Management of maintenance of University Infrastructure (Buildings and Roads) in Makerere University",
      "Supervision of Development projects including 6 storey Senate Building, Department of Food Science and Technology, Department of Gender Studies",
      "Project Manager of Development of Infrastructure in the Ministry of Education and Sports in all Educational Institutions across the country",
      "Construction of primary schools facilities under the School Facilities Grant (SFG) with an annual budget of 50bn",
      "Project Manager of Construction of various roads under KIIDP2 in Kampala City funded by World Bank valued at 175m USD"
    ],
    image: "/images/justus-headshot.png"
  },
  {
    name: "Mr. Agaba Milton",
    role: "Managing Director",
    shortBio: "An astute businessman and industrious entrepreneur who founded multiple companies in Uganda and abroad.",
    fullBio: [
      "Milton Agaba completed a Bachelor's degree in Economics at Makerere University and immediately got an eight months contract employment with UNICEF as a researcher on a Social Research Project. He joined Uganda Railways Corporation (URC) in February 1994 after graduation, working as an Economist in the Planning & Development Department and later as an operations officer.",
      "In the Rail Operations Department, he quickly rose through the ranks to become the Principal Operations Officer at Tororo Interstate Station in January 1999. In June 2000, he became the project coordinator of a new Rail Tracker project known as Advanced Cargo Information System (ACIS) at URC headquarters. The Project was funded and executed by UNCTAD valued at one and a half million dollars (USD1.5M).",
      "In July 2001, he transitioned into private business and moved to Kigali Rwanda where he established Kigali Wholesalers, a company that specialized in countrywide distribution of goods imported from Uganda and Kenya. He returned to Uganda and established Africa Link Investments Ltd and KAM Distributors Ltd which deal in international trade, cargo transportation and wholesale distribution. He is also a co-founder of Afritop Ventures Ltd."
    ],
    education: [
      "Bachelor's Degree in Economics - Makerere University",
      "Advanced training in Rail Operations Management",
      "Project Management certification - UNCTAD"
    ],
    expertise: [
      "International Trade & Logistics",
      "Business Development",
      "Project Coordination",
      "Strategic Planning",
      "Financial Management"
    ],
    majorProjects: [
      "Coordinator of Advanced Cargo Information System (ACIS) - USD 1.5M project funded by UNCTAD",
      "Founder of Kigali Wholesalers - Countrywide distribution in Rwanda",
      "Established Africa Link Investments Ltd and KAM Distributors Ltd",
      "Co-founder of Afritop Ventures Ltd",
      "Distribution operations across Uganda, Rwanda, Kenya, and DRC"
    ],
    image: "/images/milton-headshot.png"
  },
  {
    name: "Mr. Bagyendera Moses",
    role: "CEO & Business Development Director",
    shortBio: "A self-motivated and result-oriented professional with over 27 years of development in information communications Technology (ICT).",
    fullBio: [
      "Moses Bagyendera has extensive experience in International Development and more specifically in WHO, USAID, and USAID-funded projects in Africa. He is highly specialized in Information Communication Technology (ICT) Governance at the Policy level, e-Government, Project management Implementation, Integration, and rollout.",
      "Systems developed and managed include Finance and Investment, Education, eHealth, and Geographical Information Systems (GIS) with a focus on cyber security interventions and multi-stakeholders engagement models. Moses holds an MSC in Computer science from the Central South University of Technology, China with a focus on Database Networks Development, and a Masters in Public Health Informatics (MPH) from Atlantic International University in the USA.",
      "He is a Certified Information Systems Security Professional (CISSP), Microsoft Certified Systems Engineer (MCSE), Microsoft Certified Systems Administrator (MCSA), and a BLS honors with a major in Information Science from Makerere University Kampala. Currently, he is pursuing a Ph.D. in research at Makerere University, Kampala with an interest in 'Interoperability of Data Use and Utilization in Health Care Institutions in Uganda'."
    ],
    education: [
      "MSC in Computer Science - Central South University of Technology, China",
      "Masters in Public Health Informatics (MPH) - Atlantic International University, USA",
      "BLS Honors in Information Science - Makerere University",
      "Ph.D. Candidate (ongoing) - Makerere University"
    ],
    expertise: [
      "ICT Governance & Policy",
      "e-Government Systems",
      "Digital Health Policy",
      "Cyber Security (CISSP)",
      "System Integration",
      "Database Networks"
    ],
    majorProjects: [
      "Coordinated development of Uganda Digital Health Policy and 5-year strategic plan 2016-2021",
      "Supported UNICEF to Upgrade mTrac to mTracPro (front and back-end)",
      "Rapid SMS to RapidPro SMS engines for RapidPro systems",
      "Supported Family Connect systems and migrated the Govt SMS/USSD gateway at NITA-U",
      "Developed Integrated Covid19 Alerts Management Application for MoH in Uganda",
      "Supported MoH in development of Health Sector Budget Tracker",
      "Coordinated design of national health information exchange registry services including National Health Client Registry (NHCR), National Health Facility Registry (NHFR), National Health Workers Registry (NHWR)"
    ],
    image: "/images/moses-headshot.png"
  }
];

const ExecutiveModal: React.FC<{ exec: Executive | null; onClose: () => void }> = ({ exec, onClose }) => {
  if (!exec) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Header with Image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-brand-blue to-brand-blue/80 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 border-white shadow-xl shrink-0">
                <img src={exec.image} alt={exec.name} className="w-full h-full object-cover" />
              </div>
              <div className="pb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{exec.name}</h2>
                <p className="text-brand-gold font-medium">{exec.role}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Bio */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-brand-gold" />
                Professional Background
              </h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                {exec.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-gold" />
                  Education & Certifications
                </h3>
                <ul className="space-y-2">
                  {exec.education.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expertise */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-gold" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {exec.expertise.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-amber-50 text-amber-800 text-sm rounded-full border border-amber-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Major Projects */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Major Projects & Achievements</h3>
              <div className="grid gap-3">
                {exec.majorProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors"
                  >
                    <div className="w-6 h-6 bg-brand-gold/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-brand-gold text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{project}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Team: React.FC = () => {
  const [selectedExec, setSelectedExec] = useState<Executive | null>(null);

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Led by Industry Veterans</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our leadership team brings together decades of experience in engineering, business development, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedExec(exec)}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    {exec.shortBio}
                  </p>
                  <span className="inline-flex items-center text-brand-gold text-sm font-medium">
                    View Full Profile
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{exec.name}</h4>
              <p className="text-brand-gold font-medium text-sm mb-3 uppercase">{exec.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {exec.shortBio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Modal */}
      {selectedExec && (
        <ExecutiveModal exec={selectedExec} onClose={() => setSelectedExec(null)} />
      )}
    </section>
  );
};
