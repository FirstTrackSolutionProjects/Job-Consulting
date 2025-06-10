import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import bannerImg from "/images/banner-consulting.jpg";
import team1 from "/images/team-1.jpg";
import team2 from "/images/team-2.jpg";

const sectors = {
  voiceBPO: [
    'Customer Care Executive',
    'Service Desk Executive',
    'Technical Voice Executive',
    'Desktop Support Executive',
  ],
  nonVoiceBPO: [
    'Email Support Executive',
    'Chat Support Executive',
  ],
  itSector: [
    'Software Developer',
    'Automation Engineer',
    'Database Analyst',
    'Tester',
    'DevOps Engineer',
    'App Developer',
    'UI/UX Developer',
  ],
  execHiring: [
    'Team Leaders',
    'Managers',
    'Subject Matter Experts',
    'Quality Analyst',
  ]
};

const executivePositions = [
  'CEO (Chief Executive Officer)',
  'CTO (Chief Technology Officer)',
  'VP (Vice President)',
  'CXO (Chief Experience Officer)',
  'CFO (Chief Financial Officer)',
  'CHRO (Chief Human Resources Officer)',
];

const additionalPositions = [
  'Network Engineer',
  'Technical Support Specialist',
  'Business Analyst',
  'Sales Manager',
  'Operations Manager',
  'SEO Analyst',
  'Systems Administrator',
  'Project Manager',
  'Cybersecurity Analyst',
  'Marketing Manager',
  'Digital Marketing',
  'Data Scientist'
];

const tags = [
  '#ConsultancyExperts',
  '#InnovationAdvisors',
  '#StrategicConsulting',
  '#AdvisoryInsights'
];

const accordionSections = [
  {
    title: "Workforce Consulting & Staffing Solutions",
    content:
      "We offer comprehensive workforce consulting and staffing solutions tailored to meet the dynamic needs of businesses across various sectors.",
  },
  {
    title: "Temporary & Contract Staffing",
    content:
      "Our contract staffing services provide skilled professionals for short-term or project-based roles, ensuring agility and scalability for your workforce.",
  },
  {
    title: "Full-Time Permanent Hiring",
    content:
      "We help companies hire top-quality permanent employees who align with their organizational values, culture, and long-term goals.",
  },
  {
    title: "Leadership & Senior Executive Recruitment",
    content:
      "Our senior-level recruitment focuses on sourcing seasoned leaders who can drive organizational success and strategic vision.",
  },
  {
    title: "C-Suite & Executive Talent Acquisition",
    content:
      "We specialize in acquiring top-tier C-level executives with a proven track record to lead businesses towards growth and innovation.",
  },
  {
    title: "Industry-Specific Talent Solutions",
    content:
      "We understand the nuances of different industries and deliver tailored hiring solutions to meet sector-specific requirements.",
  },
  {
    title: "Client-Focused Recruitment Strategies",
    content:
      "Our recruitment strategies are fully client-centric, aimed at understanding your challenges and delivering efficient talent solutions.",
  },
  {
    title: "End-to-End Candidate Assistance",
    content:
      "From resume building to interview preparation, we support candidates at every step of the hiring journey.",
  },
  {
    title: "Skilled Talent for Manufacturing Sector",
    content:
      "We provide reliable and trained talent to meet the rigorous demands of the manufacturing industry, ensuring productivity and efficiency.",
  },
];



export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);


  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-12 py-8 space-y-12 max-w-7xl mx-auto mt-12">
      
      {/* Banner / Hero */}
      <div>
        <img src={bannerImg} alt="Consulting" className="w-full h-auto rounded-lg" />
      </div>

      {/* Intro */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold">  Empowering Businesses with Clarity, Precision & Purpose-Driven Consulting</h1>
        <p className="text-gray-700">
            At First Track Solution Technologies PVT LTD, we believe that the best solutions are simple, strategic, and easy to implement. Our consulting approach is built on clarity and impact—ensuring you receive practical, results-driven strategies that align with your business goals. With a deep understanding of industry dynamics, we help you move forward with confidence and clarity.
        </p>
      </section>

      {/* Positions & Sidebar */}
      <div className="md:flex gap-8">
        {/* Left – listings */}
        <div className="flex-1 space-y-10">
          {/* Executive Level */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Executive Level Positions</h2>
            <ul className="list-disc list-inside space-y-1">
              {executivePositions.map(pos => <li key={pos}>{pos}</li>)}
            </ul>
          </div>

          {/* Additional Positions */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Additional Positions</h2>
            <ul className="list-disc list-inside space-y-1 columns-2">
              {additionalPositions.map(pos => <li key={pos}>{pos}</li>)}
            </ul>
          </div>
        </div>

     
      {/* Right – Sidebar sectors */}
        
          <aside className="w-64 space-y-8">
            <h2 className="text-2xl font-semibold mb-4">Sector & Positions</h2>
            {Object.entries(sectors).map(([key, jobs]) => (
            <div key={key}>
            <h3 className="font-semibold text-lg mb-2">
              
              {key === 'voiceBPO' ? 'BPO Sector (Voice Process)'
                : key === 'nonVoiceBPO' ? 'BPO Sector (Non‑Voice Process)'
                : key === 'itSector' ? 'IT Sector'
                  : 'Executive Level Hiring'}
                  
            </h3>
        <ul className="space-y-2">
        {jobs.map(j => (
          <li
            key={j}
            onClick={() => setSelectedOption(j)}
            className={`cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-105 px-3 py-2 rounded-lg
              ${selectedOption === j
                ? "bg-orange-100 border border-orange-400 text-orange-700"
                : "bg-gray-100 text-gray-800"
              }`}
          >
            {j}
          </li>
        ))}
      </ul>
    </div>
  ))}
</aside>
</div>
  
     

      {/* Accordion Section */}
      <section className="space-y-6">
  <h2 className="text-2xl font-semibold text-center">Our Focus Areas</h2>
  <div className="max-w-4xl mx-auto px-4">
    {accordionSections.map(({ title, content }, index) => (
      <div key={index} className="border-t border-gray-300">
        <button
          onClick={() => toggleSection(index)}
          className={`flex justify-between items-center w-full py-5 px-2 text-left font-semibold text-lg md:text-xl transition-transform duration-200 ${
            openIndex === index ? "bg-orange-50 border-l-4 border-orange-500" : ""
          } hover:scale-105 hover:bg-gray-100`}
        >
          <span>
            <span className="font-bold text-black mr-2">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <span className="text-gray-800">{title}</span>
          </span>
          {openIndex === index ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {openIndex === index && (
          <div className="pb-5 px-4 text-gray-600 text-sm">
            {content}
          </div>
        )}
      </div>
    ))}
  </div>
</section>


      {/* Tags */}
      <aside className="text-center text-gray-600 space-y-2">
        {tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
        ))}
      </aside>

     
      
    </div>
  );
}
