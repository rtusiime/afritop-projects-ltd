import React from 'react';
import { Users } from 'lucide-react';

interface StaffMember {
  name: string;
  position: string;
  department: 'management' | 'engineering' | 'finance' | 'operations';
}

const personnel: StaffMember[] = [
  { name: "Mr. Agaba Milton", position: "Managing Director", department: "management" },
  { name: "Mr. Bagyendera Moses", position: "CEO & Business Development Director", department: "management" },
  { name: "Eng. Akankwasa Justus", position: "Technical & Engineering Services Director", department: "management" },
  { name: "Ms. Rukundo Nancy", position: "Manager - Procurement, Logistics & Supplies", department: "operations" },
  { name: "Eng. Muyinjo Edward", position: "Manager - Engineering Projects", department: "engineering" },
  { name: "Mr. Owokusiima Alex", position: "Manager - Quality Control & Quality Assurance", department: "engineering" },
  { name: "Mr. Mpuga Solomon", position: "Electro-Mechanical Engineer", department: "engineering" },
  { name: "Mr. Gideon Akampurira", position: "Legal and Contracts Manager", department: "finance" },
  { name: "Mr. Ndyowe Powell", position: "Structural Engineer", department: "engineering" },
  { name: "Mr. Tumusiime Moses", position: "Manager - Environmental, Health & Social Safeguards", department: "operations" },
  { name: "Mr. Okot Mike", position: "Quantity Surveyor", department: "engineering" },
  { name: "Mr. Lubinga Fredrick Edward", position: "Technical Staff", department: "engineering" },
  { name: "Mr. Biryabarema Nightfall", position: "Workshop Manager", department: "operations" },
  { name: "Mr. Barusya James", position: "Technical Staff", department: "engineering" },
  { name: "Ms. Akatukwasa Annet", position: "Accountant", department: "finance" },
  { name: "Mr. Akankwasa Isaac", position: "Manager - Finance & Administration", department: "finance" },
  { name: "Mr. Benjamin Ankunda", position: "Manager - Customer Care", department: "operations" },
  { name: "Mr. Sight Tisanomwe", position: "Security Manager", department: "operations" },
];

const departmentColors = {
  management: 'bg-brand-blue text-white',
  engineering: 'bg-amber-500 text-white',
  finance: 'bg-green-600 text-white',
  operations: 'bg-slate-600 text-white',
};

const departmentLabels = {
  management: 'Leadership',
  engineering: 'Engineering',
  finance: 'Finance & Legal',
  operations: 'Operations',
};

export const Personnel: React.FC = () => {
  return (
    <section id="personnel" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Personnel</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Afritop Projects Ltd employs a cross-section of staff with multi-disciplinary experience,
            both on a full-time basis as well as on contract depending on demand.
          </p>
        </div>

        {/* Department Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.entries(departmentLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${departmentColors[key as keyof typeof departmentColors].split(' ')[0]}`}></div>
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>

        {/* Personnel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {personnel.map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full ${departmentColors[person.department]} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <span className="text-lg font-bold">
                    {person.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm truncate">{person.name}</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{person.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <Users className="w-8 h-8 text-brand-gold mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900">18+</p>
            <p className="text-gray-500 text-sm">Key Staff</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-gray-900">30+</p>
            <p className="text-gray-500 text-sm">Years Combined Experience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-gray-900">5</p>
            <p className="text-gray-500 text-sm">Departments</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-gray-900">100+</p>
            <p className="text-gray-500 text-sm">Contract Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
