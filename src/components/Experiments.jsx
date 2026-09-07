import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================
//  SELECTED ENGINEERING BUILDS
// ============================================
const experimentsData = [
  {
    title: "Fitness Tracking Application",
    category: "Full-Stack Application",
    description: "A full-stack application for tracking fitness activities and user progress.",
    tags: ["Python", "Full-Stack", "ML"],
    status: "Public Repo",
    tier: 2,
    link: "https://github.com/Nithin-kumar-boddu/Fitness-Tracker"
  },
  {
    title: "NLP Chatbot",
    category: "AI / NLP",
    description: "An NLP-based chatbot project focused on conversational interaction and language processing.",
    tags: ["Python", "NLP", "Notebook"],
    status: "Public Repo",
    tier: 2,
    link: "https://github.com/Nithin-kumar-boddu/NLP-chatbot"
  },
  {
    title: "Number Plate Recognition",
    category: "Computer Vision",
    description: "A computer vision project for detecting and recognizing vehicle number plates.",
    tags: ["Python", "Computer Vision", "ML"],
    status: "Public Repo",
    tier: 2,
    link: "https://github.com/Nithin-kumar-boddu/Number-Plate-Recognition"
  }
];

const Experiments = () => {
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
      id="builds"
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
            <span className="text-red-500 font-bold">EPISODE 06</span>
            <span className="text-white/40">|</span>
            <span>SELECTED BUILDS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            SELECTED BUILDS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              PROJECTS I SHIPPED.
            </span>
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            A focused set of builds across full-stack development and practical AI/ML. Each one demonstrates a different dimension of how I work.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experimentsData.map((experiment, index) => (
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
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">{experiment.category}</span>
                  <span className="text-xs font-mono text-white/40">TIER 3</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/70 text-[10px] font-mono rounded">{experiment.status}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white">{experiment.title}</h3>
                <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">{experiment.description}</p>
              </div>
              
              <div className="pt-6 flex flex-wrap items-center gap-2 relative z-10">
                {experiment.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">{tag}</span>
                ))}
                {experiment.link && (
                  <a
                    href={experiment.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 hover:text-white transition-colors"
                  >
                    View Repo
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="text-center pt-8">
          <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
            Selected public builds. Additional work remains in private repositories.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experiments;