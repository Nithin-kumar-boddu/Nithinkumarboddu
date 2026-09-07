import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================
//  WORK — Commercial / Client / Business Delivery
// ============================================
const workData = [
  {
    title: "AscendDigital",
    category: "Digital Venture",
    description: "A digital venture I co-own, focused on building customised websites and digital solutions for businesses and creators. Through AscendDigital, I handle projects from requirements and development through delivery.",
    tags: ["Software Development", "Web Development", "Client Projects", "Product Delivery"],
    status: "Active",
    relationship: "Co-owner",
    tier: 1
  },
  {
    title: "Custom Website - Crochet Business",
    category: "Client Work",
    description: "A customised business website delivered through AscendDigital, built around the client's requirements and real business workflow. The project involved designing and implementing the website as a usable digital product rather than a simple static page.",
    tags: ["Web Development", "Software", "UI Implementation", "Client Work"],
    status: "Delivered",
    relationship: "AscendDigital",
    tier: 2,
    link: "https://art-isticcore.vercel.app/"
  },
  {
    title: "Food Business Website",
    category: "Client Work",
    description: "A website currently being developed through AscendDigital for a food business, translating practical business requirements into a usable digital product. Development and iteration are currently in progress.",
    tags: ["Web Development", "Software", "Business", "Client Work"],
    status: "In Progress",
    relationship: "AscendDigital",
    tier: 2
  }
];

const Work = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;

      // Stagger entrance on scroll
      gsap.fromTo(cards, 
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Magnetic mouse spotlight per card
      const handleMouseMove = (e, card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      };

      cards.forEach((card) => {
        if (!card) return;
        const listener = (e) => handleMouseMove(e, card);
        card.addEventListener('mousemove', listener);
        return () => card.removeEventListener('mousemove', listener);
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white py-20 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Background Cinematic Red Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 04</span>
            <span className="text-white/40">|</span>
            <span>CLIENT WORK</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            REAL-WORLD DELIVERY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              PROJECTS THROUGH ASCENDDIGITAL.
            </span>
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            AscendDigital is the venture I co-own. The projects below represent real business work delivered or currently being developed through it.
          </p>
        </div>

        {/* Venture Header — AscendDigital */}
        <div 
          ref={addToRefs}
          className="p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-red-600/40 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)'
            }}
          ></div>
          <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">01</div>
          
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">DIGITAL VENTURE</span>
              <span className="text-xs font-mono text-white/40">TIER 1</span>
              <span className="px-2 py-0.5 bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-mono font-bold tracking-widest rounded">CO-OWNER</span>
              <span className="px-2 py-0.5 bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-mono font-bold tracking-widest rounded">ACTIVE</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">AscendDigital</h3>
            <p className="text-sm md:text-base text-white/70 font-light leading-relaxed mb-4 max-w-2xl">
              A digital venture I co-own, through which I work on customised websites and digital projects for businesses and creators, with additional projects planned over time.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Software Development", "Web Development", "Client Projects", "Product Delivery"].map((tag, idx) => (
                <span key={idx} className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 relative z-10 text-right md:ml-8">
            <div className="text-xs font-mono text-white/40">
              More client projects coming through AscendDigital.
            </div>
          </div>
        </div>

        {/* Client Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workData.slice(1).map((project, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)'
                }}
              ></div>
              <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
                {String(index + 2).padStart(2, '0')}
              </div>
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">CLIENT WORK</span>
                  <span className="text-xs font-mono text-white/40">TIER 2</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/70 text-[10px] font-mono rounded">{project.relationship}</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/70 text-[10px] font-mono rounded">{project.status}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white">{project.title}</h3>
                <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">{project.description}</p>
              </div>
              
              <div className="pt-6 flex flex-wrap items-center gap-2 relative z-10">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">{tag}</span>
                ))}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 hover:text-white transition-colors ml-auto"
                  >
                    View Live
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;