import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================
//  INTERNSHIPS — Industry exposure
// ============================================
const internshipsData = [
  {
    number: '01',
    company: 'Bluestock Fintech',
    role: 'Backend Developer Intern (Team Lead)',
    description: 'Developed REST APIs for financial data and backend workflows, working with PHP, MySQL, JSON, Postman, and Git.',
    tags: ['PHP', 'MySQL', 'REST APIs', 'Postman', 'Git']
  },
  {
    number: '02',
    company: 'Edunet Foundation x Microsoft x SAP x AICTE',
    role: 'AI Intern - TechSaksham',
    description: 'Built practical AI/ML project prototypes while developing foundations in data analytics, machine learning, deep learning, and GenAI.',
    tags: ['Python', 'ML', 'DL', 'GenAI', 'Data Analytics']
  },
  {
    number: '03',
    company: 'Edunet Foundation x Shell x AICTE',
    role: 'AI / Data Analytics Intern - Skills4Future',
    description: 'Built an NLP chatbot using Python and machine learning techniques as part of an applied AI and green-technology internship.',
    tags: ['Python', 'NLP', 'ML', 'Streamlit', 'Green Technology']
  }
];

const Internships = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="internships"
      ref={sectionRef}
      className="relative w-full bg-[#050505] text-white py-20 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">

        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 07</span>
            <span className="text-white/40">|</span>
            <span>INTERNSHIPS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            INDUSTRY EXPOSURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              PRACTICAL EXPERIENCE.
            </span>
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            Three internships across backend development, applied AI, and green-technology programmes. Each one contributed directly to the engineering work shown in the rest of this portfolio.
          </p>
        </div>

        {/* Internship cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {internshipsData.map((item, i) => (
            <div
              key={i}
              ref={addToRefs}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
              className="p-8 md:p-10 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden min-h-[320px]"
            >
              {/* Mouse spotlight */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(229,9,20,0.15), transparent 70%)'
                }}
              ></div>

              {/* Number watermark */}
              <div className="absolute top-4 right-6 text-white/5 font-mono text-6xl font-black pointer-events-none">
                {item.number}
              </div>

              {/* Top: company + relationship */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                  {item.role}
                </span>
                <h3 className="text-lg md:text-xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                  {item.company}
                </h3>
              </div>

              {/* Middle: description */}
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed relative z-10 my-6">
                {item.description}
              </p>

              {/* Bottom: tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 relative z-10">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Internships;
