import React from "react";
import { ChevronRight } from "lucide-react";

interface IndustriesPageProps {
  setActiveTab: (tab: "home" | "industries") => void;
}

export default function IndustriesPage({ setActiveTab }: IndustriesPageProps) {
  const industries = [
    { name: "IT Hardware & Solutions", sub: "Computing OEMs" },
    { name: "Electronics & PCB", sub: "Semiconductors" },
    { name: "Heavy Manufacturing", sub: "MSME Vendors" },
    { name: "Healthcare & Devices", sub: "Diagnostics" },
    { name: "Fintech & UPI Rails", sub: "Regulatory APIs" },
    { name: "SaaS & Enterprise IT", sub: "SLA Arbitrations" },
    { name: "DPDP & Cloud Storage", sub: "Data Protection" },
    { name: "E-Commerce Marketplaces", sub: "FDI Structuring" },
    { name: "Drone Technologies", sub: "DGCA Compliance" },
    { name: "Renewable Solar Infrastructure", sub: "EPC Contracts" },
    { name: "Defense Equipment Procurement", sub: "MOD Bids" },
    { name: "Real Estate & Housing Projects", sub: "RERA Disputes" }
  ];

  return (
    <div className="bg-cream min-h-screen text-ink animate-fade-in pt-8 md:pt-12 pb-24 px-4 sm:px-8">
      {/* Navigation Breadcrumb back road */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-ink/10 pb-4 gap-4 mb-8">
        <div className="font-mono text-xs uppercase tracking-widest text-ink-mute flex items-center gap-2">
          <button 
            onClick={() => setActiveTab("home")}
            className="text-burgundy hover:text-ink transition cursor-pointer font-semibold"
          >
            The Law Firm Home
          </button>
          <ChevronRight className="w-3" />
          <span className="text-ink-soft">Strategic Sectors</span>
        </div>
        
        <button
          onClick={() => setActiveTab("home")}
          className="font-mono text-[10px] uppercase tracking-widest text-ink hover:text-burgundy border-b border-ink hover:border-burgundy pb-0.5 transition cursor-pointer"
        >
          ← Back to The Law Firm Overview
        </button>
      </div>

      {/* 12. Industries Familiarity Grid */}
      <section className="border-t border-ink pt-8 md:pt-12 max-w-7xl mx-auto">
        <div className="space-y-10">
          <div className="space-y-4 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-burgundy flex items-center gap-3 select-none">
              <span className="font-display italic text-lg font-bold">I.</span>
              <span className="w-8 h-[1px] bg-burgundy" />
              Experience Matrix
            </div>
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight">
              Sectors of <em className="italic font-normal text-burgundy">regulatory familiarity.</em>
            </h3>
          </div>

          {/* Industry list bento style flex cards */}
          <div className="flex flex-wrap gap-4 select-none">
            {industries.map((ind, idx) => (
              <div 
                key={idx} 
                className="bg-cream-dark/35 border border-ink/20 py-4 px-6 select-none transition duration-200 hover:bg-ink hover:text-cream hover:border-ink"
              >
                <span className="font-display text-lg font-medium">{ind.name}</span>
                <span className="font-display italic text-neutral-500 font-normal shrink-0 text-sm ml-2">({ind.sub})</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
