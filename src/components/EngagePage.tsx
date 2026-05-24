import EnquiryForm from "./EnquiryForm";
import { ChevronRight } from "lucide-react";

interface EngagePageProps {
  setActiveTab: (tab: "home" | "engage") => void;
}

export default function EngagePage({ setActiveTab }: EngagePageProps) {
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
          <span className="text-ink-soft">Engage Counsel</span>
        </div>
        
        <button
          onClick={() => setActiveTab("home")}
          className="font-mono text-[10px] uppercase tracking-widest text-ink hover:text-burgundy border-b border-ink hover:border-burgundy pb-0.5 transition cursor-pointer"
        >
          ← Back to The Law Firm Overview
        </button>
      </div>

      <EnquiryForm />
    </div>
  );
}
