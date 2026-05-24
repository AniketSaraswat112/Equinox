import { PRACTICE_PILLARS, GEM_SPOTLIGHT_ITEMS } from "../data";
import DisputeAnalyzer from "./DisputeAnalyzer";
import { ChevronRight } from "lucide-react";

interface PracticePageProps {
  setActiveTab: (tab: "home" | "practice") => void;
}

export default function PracticePage({ setActiveTab }: PracticePageProps) {
  return (
    <>
      <div className="bg-cream min-h-screen text-ink animate-fade-in pt-8 md:pt-12 pb-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navigation Breadcrumb back road */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-ink/10 pb-4 gap-4 mb-4">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-mute flex items-center gap-2">
            <button 
              onClick={() => setActiveTab("home")}
              className="text-burgundy hover:text-ink transition cursor-pointer font-semibold"
            >
              The Law Firm Home
            </button>
            <ChevronRight className="w-3" />
            <span className="text-ink-soft">Practice Pillars</span>
          </div>
          
          <button
            onClick={() => setActiveTab("home")}
            className="font-mono text-[10px] uppercase tracking-widest text-ink hover:text-burgundy border-b border-ink hover:border-burgundy pb-0.5 transition cursor-pointer"
          >
            ← Back to The Law Firm Overview
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 pt-8 border-t border-ink">
          <div className="space-y-4 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-burgundy flex items-center gap-3">
              <span className="font-display italic text-lg font-bold">I.</span>
              <span className="w-8 h-[1px] bg-burgundy" />
              Practice
            </div>
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight">
              Twelve pillars, <em className="italic font-normal text-burgundy">one cohesive legal brief.</em>
            </h3>
          </div>
          <div className="font-mono text-[10px] text-ink-mute text-left md:text-right uppercase tracking-widest leading-relaxed">
            § statutory sub-actions<br />
            ▦ anchor spotlight<br />
            delhi high court panel lists
          </div>
        </div>

          {/* Grid for the 12 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink max-w-7xl">
            {PRACTICE_PILLARS.map((p, idx) => (
              <div 
                key={idx} 
                className={`p-8 border-r border-b border-ink transition duration-300 relative group flex flex-col justify-between ${
                  p.featured 
                    ? "bg-ink text-cream" 
                    : "bg-transparent hover:bg-cream-dark/25"
                }`}
              >
                {p.featured && (
                  <span className="absolute top-0 right-0 bg-burgundy text-cream font-mono text-[8px] uppercase tracking-widest py-1.5 px-3">
                    Core Speciality
                  </span>
                )}
                
                <div>
                  <div className={`font-display text-4xl italic font-semibold mb-6 ${p.featured ? "text-gold" : "text-burgundy"}`}>
                    {p.num}
                  </div>
                  <h4 className="font-display text-2xl font-medium text-ink leading-tight mb-3 group-hover:text-burgundy transition">
                    <span className={p.featured ? "text-cream" : "text-ink"}>{p.name}</span>
                  </h4>
                  <p className={`font-serif italic text-sm leading-relaxed mb-6 pb-6 border-b ${
                    p.featured ? "text-gold-soft border-gold/25" : "text-ink-mute border-ink/10"
                  }`}>
                    {p.desc}
                  </p>
                </div>

                <ul className="space-y-2.5">
                  {p.list.map((item, i) => (
                    <li key={i} className="font-serif text-[14.5px] leading-relaxed flex items-start gap-2.5">
                      <span className={`font-serif italic shrink-0 ${p.featured ? "text-gold" : "text-burgundy"}`}>§</span>
                      <span className={p.featured ? "text-cream-dark/95" : "text-ink-soft"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 9. Public Procurement & GeM Spotlit Section */}
      <section id="gem" className="bg-ink text-cream border-t border-ink py-20 relative overflow-hidden -mx-4 sm:-mx-8 px-4 sm:px-8">
        {/* Watermarked bond paper seal background */}
        <div className="absolute top-[-100px] right-[-100px] w-96 h-96 border border-gold/15 rounded-full pointer-events-none select-none" />
        <div className="absolute top-[-50px] right-[-50px] w-80 h-80 border border-gold/5 rounded-full pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-gold flex items-center gap-3 select-none">
              <span className="font-display italic text-lg font-bold">II.</span>
              <span className="w-8 h-[1px] bg-gold" />
              GeM Litigation
            </div>
            <h3 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight">
              Public Procurement <em className="italic font-normal text-gold">&amp; GeM Litigation.</em>
            </h3>
            <p className="font-display text-xl sm:text-2xl text-gold-soft leading-relaxed max-w-2xl font-light">
              Arbitrary vendor disqualifications, opaque debarment proceedings, and portal suspensions severely choke commercial activities. We deploy precise statutory defenses.
            </p>
          </div>

          {/* GeM 6 highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gold/20">
            {GEM_SPOTLIGHT_ITEMS.map((item, idx) => (
              <div key={idx} className="p-8 border-r border-b border-gold/20 bg-[#15110D]">
                <h4 className="font-display text-2xl font-medium text-white mb-2">{item.title}</h4>
                <p className="font-serif text-[15px] leading-relaxed text-gold-soft/85 mb-4">{item.description}</p>
                <div className="font-mono text-[9px] uppercase tracking-widest text-gold border-t border-gold/15 pt-3">
                  {item.citation}
                </div>
              </div>
            ))}
          </div>

          {/* Procurement standing rebuttals list */}
          <div className="border border-gold/35 bg-gold/5 p-8 space-y-5 rounded-sm">
            <h5 className="font-mono text-xs uppercase tracking-[0.2em] text-gold font-semibold select-none">
              Procurement Stand-Offs · Routine Grounds Defended
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-sm font-serif">
              <div className="space-y-1 border-l border-gold/25 pl-4">
                <div className="text-white font-medium">Brand Exclusions</div>
                <div className="font-mono text-[9.5px] uppercase tracking-wider text-gold-soft/80">CEO D.O. 22/24</div>
              </div>
              <div className="space-y-1 border-l border-gold/25 pl-4">
                <div className="text-white font-medium">EMD Submission</div>
                <div className="font-mono text-[9.5px] uppercase tracking-wider text-gold-soft/80">GFR Rule 170(i)</div>
              </div>
              <div className="space-y-1 border-l border-gold/25 pl-4">
                <div className="text-white font-medium">MSME Exemptions</div>
                <div className="font-mono text-[9.5px] uppercase tracking-wider text-gold-soft/80">Circular 2016</div>
              </div>
              <div className="space-y-1 border-l border-gold/25 pl-4">
                <div className="text-white font-medium">Restrictive Experience</div>
                <div className="font-mono text-[9.5px] uppercase tracking-wider text-gold-soft/80">SC Judgements</div>
              </div>
              <div className="space-y-1 border-l border-gold/25 pl-4">
                <div className="text-white font-medium">No-reason Rejections</div>
                <div className="font-mono text-[9.5px] uppercase tracking-wider text-gold-soft/80">GFR Rule 173(iv)</div>
              </div>
            </div>
          </div>

          {/* 10. AI DISPUTE TOOL PORT LET */}
          <DisputeAnalyzer />
        </div>
      </section>
    </>
  );
}
