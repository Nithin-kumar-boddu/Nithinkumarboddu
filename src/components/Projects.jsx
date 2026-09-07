import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================
//  PRODUCTS — Personal + AscendDigital client builds
// ============================================
const productsData = [
  {
    title: "CustomShare",
    category: "Software Product / MVP",
    description: "A secure file-sharing platform with temporary access controls, built as a practical software MVP.",
    tags: ["Software", "Full-Stack", "Backend", "MVP", "Product Engineering"],
    status: "MVP",
    tier: 1,
    group: "personal",
    link: "https://customshare.vercel.app"
  },
  {
    title: "Revise AI",
    category: "AI Product / Software Application",
    description: "An AI-powered study companion for conversational learning, explanations, and summarization.",
    tags: ["AI", "Software", "Product Engineering"],
    status: "DONE",
    tier: 1,
    group: "personal",
    link: null
  },
  {
    title: "Custom Website - Crochet Business",
    category: "Client Project / AscendDigital",
    description: "A customised client project website delivered through AscendDigital.",
    tags: ["Web Development", "Client Work", "AscendDigital"],
    status: "DELIVERED",
    tier: 2,
    group: "client",
    link: "https://art-isticcore.vercel.app/"
  },
  {
    title: "Food Business Website",
    category: "Client Project / AscendDigital",
    description: "A food-business client project website currently being developed through AscendDigital.",
    tags: ["Web Development", "Client Work", "AscendDigital"],
    status: "IN DEVELOPMENT",
    tier: 2,
    group: "client",
    link: null
  }
];

const Products = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative w-full bg-[#0b0b0b] text-white py-24 md:py-32 px-6 md:px-12 select-none"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 05</span>
            <span className="text-white/40">|</span>
            <span>SHIPPED BUILDS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            What I've built. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              Personal and client.
            </span>
          </h2>
        </div>

        {/* 2x2 Grid of product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productsData.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              refCallback={(el) => addToRefs(el)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const ProductCard = ({ product, refCallback }) => {
  return (
    <div
      ref={refCallback}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }}
      className="p-8 md:p-10 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden min-h-[300px] scroll-mt-32"
    >
      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(229,9,20,0.15), transparent 70%)'
        }}
      ></div>

      {/* Top: tier + status + group chip */}
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
          TIER {product.tier}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-red-400 font-bold">{product.status}</span>
          <span className="text-[10px] font-mono border border-white/30 px-1.5 py-0.5 text-white/70">
            {product.group === "personal" ? "OWNED" : "CLIENT"}
          </span>
        </div>
      </div>

      {/* Middle: title + description */}
      <div className="space-y-3 my-6 relative z-10">
        <div className="text-[11px] font-mono uppercase tracking-widest text-white/40">
          {product.category}
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Bottom: tags + optional live link */}
      <div className="pt-4 border-t border-white/10 space-y-3 relative z-10">
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((tag, tIdx) => (
            <span key={tIdx} className="text-[10px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        {product.link && (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 hover:text-white transition-colors"
          >
            View Live
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default Products;
