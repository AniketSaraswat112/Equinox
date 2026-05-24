import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  FileText, 
  Award, 
  Building2, 
  ShieldCheck, 
  Menu, 
  X,
  ExternalLink,
  Globe,
  Landmark,
  ChevronDown,
  ArrowUp
} from "lucide-react";

import BCIDisclaimerModal from "./components/BCIDisclaimerModal";
import EngagePage from "./components/EngagePage";
import PartnersPage from "./components/PartnersPage";
import PracticePage from "./components/PracticePage";
import IndustriesPage from "./components/IndustriesPage";
import ArticlePage from "./components/ArticlePage";

import { 
  GEM_SPOTLIGHT_ITEMS, 
  RECENT_MATTERS, 
  INSIGHTS 
} from "./data";

const CHAMBERS_EXPERIENCE = [
  {
    quote: "The strategic foresight demonstrated during our complex arbitration proceedings was unparalleled. A formidable team that delivers precision under pressure.",
    client: "Leading Infrastructure Enterprise",
    industry: "Heavy Construction & Engineering",
    icon: Building2
  },
  {
    quote: "Instrumental in navigating the regulatory maze of GeM procurement. Their deep understanding of administrative law safeguarded our commercial interests effectively.",
    client: "Tier-1 Technology Vendor",
    industry: "Information Technology",
    icon: ShieldCheck
  },
  {
    quote: "A rare combination of sharp litigation acumen and acute commercial awareness. We rely on their counsel for our most critical cross-border compliance matters.",
    client: "Multinational SaaS Corporation",
    industry: "Software & Cloud Services",
    icon: Globe
  },
  {
    quote: "Their meticulous preparation and bold advocacy in writ jurisdictions consistently yield favorable outcomes. A trusted partner for high-stakes corporate disputes.",
    client: "Prominent Financial Institution",
    industry: "Banking & Finance",
    icon: Landmark
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState<"home" | "partners" | "about" | "engage" | "practice" | "industries">("home");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setSelectedArticle(null);
    setMobileMenuOpen(false);
    setTimeout(() => window.scrollTo(0, 0), 10);
  };

  const navigateToHomeSection = (sectionId: string) => {
    setActiveTab("home");
    setSelectedArticle(null);
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 80);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen paper-grain font-serif text-ink select-text">
      {/* 1. Bar Council of India Mandatory Disclaimer */}
      <BCIDisclaimerModal />

      {/* 3. Sticky Main Navigation Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-ink shadow-sm border-gold/20 py-2" 
          : "bg-ink border-gold/10 py-3"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo Brand / Seal */}
          <button onClick={() => handleTabChange("home")} className="flex items-center gap-4 group text-left cursor-pointer">
            <div className="w-10 h-10 border border-gold text-gold flex items-center justify-center font-display italic text-xl font-semibold transition group-hover:bg-gold group-hover:text-ink select-none">
              E
            </div>
            <div>
              <div className="font-display text-lg md:text-xl font-medium tracking-tight text-white leading-[1]">
                Equinox <span className="font-normal italic text-gold">&amp;</span> Co.
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-soft mt-1.5 select-none">
                Advocates &amp; Legal Consultants · LLP
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-[12px] tracking-wider">
            <div className="relative group">
              <div 
                className={`transition text-left pb-0.5 border-b flex items-center gap-1.5 cursor-default ${activeTab === "about" ? "text-gold font-semibold border-gold/40" : "text-cream-dark group-hover:text-gold border-transparent"}`}
              >
                About Us
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </div>
              
              <div className="absolute top-full left-0 mt-2 w-56 bg-ink border border-gold/20 shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col group-hover:translate-y-0 translate-y-2">
                <button 
                  onClick={() => navigateToHomeSection("about")} 
                  className="text-left px-5 py-2.5 text-cream-dark hover:text-gold hover:bg-white/5 transition cursor-pointer border-b border-gold/10"
                >
                  The Law Firm
                </button>
                <button 
                  onClick={() => navigateToHomeSection("insights")} 
                  className="text-left px-5 py-2.5 text-cream-dark hover:text-gold hover:bg-white/5 transition cursor-pointer border-b border-gold/10"
                >
                  Recent Commentaries
                </button>
                <button 
                  onClick={() => navigateToHomeSection("endorsements")} 
                  className="text-left px-5 py-2.5 text-cream-dark hover:text-gold hover:bg-white/5 transition cursor-pointer"
                >
                  Endorsements
                </button>
              </div>
            </div>
            <div className="relative group">
              <button 
                className={`transition cursor-pointer text-left pb-0.5 border-b flex items-center gap-1.5 ${activeTab === "practice" || activeTab === "industries" ? "text-gold font-semibold border-gold/40" : "text-cream-dark hover:text-gold border-transparent"}`}
              >
                Expertise
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-56 bg-ink border border-gold/20 shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col group-hover:translate-y-0 translate-y-2">
                <button 
                  onClick={() => handleTabChange("practice")} 
                  className="text-left px-5 py-2.5 text-cream-dark hover:text-gold hover:bg-white/5 transition cursor-pointer border-b border-gold/10"
                >
                  Practice Areas
                </button>
                <button 
                  onClick={() => handleTabChange("industries")} 
                  className="text-left px-5 py-2.5 text-cream-dark hover:text-gold hover:bg-white/5 transition cursor-pointer"
                >
                  Industries
                </button>
              </div>
            </div>
            <button 
              onClick={() => handleTabChange("partners")} 
              className={`transition cursor-pointer text-left pb-0.5 border-b ${activeTab === "partners" ? "text-gold font-semibold border-gold/40" : "text-cream-dark hover:text-gold border-transparent"}`}
            >
              Partners
            </button>

            <button 
              onClick={() => handleTabChange("engage")} 
              className="bg-burgundy hover:bg-white text-cream hover:text-ink px-4 py-2 transition duration-200 select-none cursor-pointer"
            >
              Engage Counsel
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cream hover:text-gold p-1 transition cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* 4. Mobile Navigation Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-ink flex flex-col justify-between pt-24 pb-12 px-6 border-b border-gold/20 md:hidden"
          >
            <nav className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-gold-soft">
                About Us
              </div>
              <div className="flex flex-col gap-4 pl-4 border-l border-gold/10">
                <button 
                  onClick={() => navigateToHomeSection("about")}
                  className="text-left font-mono text-[10px] uppercase tracking-widest text-cream hover:text-gold transition cursor-pointer py-1"
                >
                  The Law Firm
                </button>
                <button 
                  onClick={() => navigateToHomeSection("insights")}
                  className="text-left font-mono text-[10px] uppercase tracking-widest text-cream hover:text-gold transition cursor-pointer py-1"
                >
                  Recent Commentaries
                </button>
                <button 
                  onClick={() => navigateToHomeSection("endorsements")}
                  className="text-left font-mono text-[10px] uppercase tracking-widest text-cream hover:text-gold transition cursor-pointer py-1"
                >
                  Endorsements
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-gold-soft">
                Expertise
              </div>
              <div className="flex flex-col gap-4 pl-4 border-l border-gold/10">
                <button 
                  onClick={() => handleTabChange("practice")}
                  className="text-left font-mono text-[10px] uppercase tracking-widest text-cream hover:text-gold transition cursor-pointer py-1"
                >
                  Practice Areas
                </button>
                <button 
                  onClick={() => handleTabChange("industries")}
                  className="text-left font-mono text-[10px] uppercase tracking-widest text-cream hover:text-gold transition cursor-pointer py-1"
                >
                  Industries
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-gold-soft">
                Leadership
              </div>
              <div className="flex flex-col gap-4 pl-4 border-l border-gold/10">
                <button 
                  onClick={() => handleTabChange("partners")}
                  className="text-left font-mono text-[10px] uppercase tracking-widest text-cream hover:text-gold transition cursor-pointer py-1"
                >
                  Partners
                </button>
              </div>
            </div>

            <button 
              onClick={() => handleTabChange("engage")}
              className="bg-burgundy text-cream text-center font-mono py-4 text-xs tracking-widest mt-4 cursor-pointer hover:bg-white hover:text-ink transition uppercase font-semibold"
            >
              Engage Counsel
            </button>
          </nav>
          
          <div className="border-t border-gold/10 pt-6 space-y-2 text-center text-xs font-mono text-gold-soft">
            <div>Gurugram Office · Delhi Counsel</div>
            <div>+91 79769 48655</div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* 5. Hero Section (Prestige layout with gorgeous asymmetrical details) */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {activeTab === "home" && selectedArticle ? (
              <ArticlePage 
                article={INSIGHTS.find(a => a.slug === selectedArticle)!} 
                setActiveTab={handleTabChange as any} 
                navigateToHomeSection={(id) => { setSelectedArticle(null); navigateToHomeSection(id); }} 
              />
            ) : activeTab === "home" ? (
              <div>
                <section className="relative px-4 sm:px-8 py-16 md:py-28 overflow-hidden select-text">
              <div className="max-w-7xl mx-auto">
                {/* Header metadata tag */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start flex-wrap gap-2 sm:gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-mute mb-8 select-none text-center sm:text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-burgundy rounded-full" />
                    <span>The Law Firm of New Delhi</span>
                  </div>
                  <span className="hidden sm:block w-12 h-[1px] bg-ink/10" />
                  <span>Registered LLP-IN-DL-XXXXXX</span>
                </div>

                {/* Asymmetrical Big Typography headers */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.05] mb-4 text-center sm:text-left"
                >
                  Equinox <span className="font-normal italic text-burgundy">&amp;</span> Co.
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold align-super ml-4 select-none">
                    LLP
                  </span>
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="font-display italic text-2xl sm:text-4xl text-ink-soft font-normal mb-8 leading-tight text-center sm:text-left"
                >
                  Advocates &amp; Legal Consultants
                </motion.div>

            {/* Classic Bookish Divider Emblem */}
            <div className="flex items-center justify-center sm:justify-start gap-4 max-w-2xl my-10 select-none mx-auto sm:mx-0">
              <hr className="flex-1 max-w-[100px] sm:max-w-none border-t border-ink/15" />
              <span className="font-display italic text-rose-800 text-2xl">§</span>
              <hr className="flex-1 max-w-[100px] sm:max-w-none border-t border-ink/15" />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="font-serif italic text-base text-ink-mute text-center sm:text-left leading-loose max-w-3xl mb-12 space-y-3 mx-auto sm:mx-0"
            >
              <p>
                A New Delhi law firm practising across corporate, commercial, and public procurement matters.
              </p>
              <p>
                Engagements span incorporation, taxation, intellectual property, contracts, data protection, and dispute resolution. Forums of practice include the Supreme Court of India, the Delhi High Court, the National Company Law Tribunal, the GeM Authority Office, and central ministry panels.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-4 mb-24 w-full sm:w-auto">
              <button 
                onClick={() => navigateToHomeSection("about")}
                className="w-full sm:w-auto px-8 py-4 border border-ink text-ink hover:bg-ink hover:text-cream rounded-none font-mono text-xs tracking-widest transition duration-300 select-none cursor-pointer"
              >
                About Us
              </button>
              <button 
                onClick={() => handleTabChange("practice")} 
                className="w-full sm:w-auto px-8 py-4 border border-ink text-ink hover:bg-ink hover:text-cream rounded-none font-mono text-xs tracking-widest transition duration-300 select-none cursor-pointer"
              >
                View Practice Areas
              </button>
              <button 
                onClick={() => handleTabChange("engage")}
                className="w-full sm:w-auto px-8 py-4 bg-burgundy hover:bg-ink text-cream rounded-none font-mono text-xs tracking-widest transition duration-300 shadow-md select-none cursor-pointer"
              >
                Engage Counsel
              </button>
            </div>

            {/* Stats strip with elegant border frame */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                show: { transition: { staggerChildren: 0.15 } }
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-ink/20 py-8 text-left select-none"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                <div className="font-display text-4xl md:text-5xl font-medium text-burgundy leading-none">
                  320<span className="font-normal italic text-gold text-2xl sm:text-3xl select-none">+</span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-ink-mute mt-3 leading-relaxed">
                  Bid Challenges &amp; Portal Grievances
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                <div className="font-display text-4xl md:text-5xl font-medium text-burgundy leading-none">
                  12
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-ink-mute mt-3 leading-relaxed">
                  Dedicated Practice Pillars
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                <div className="font-display text-4xl md:text-5xl font-medium text-burgundy leading-none">
                  40+
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-ink-mute mt-3 leading-relaxed">
                  Central Ministries Represented Before
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                <div className="font-display text-4xl md:text-5xl font-medium text-burgundy leading-none">
                  360<span className="font-normal italic text-gold text-2xl sm:text-3xl select-none">°</span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-ink-mute mt-3 leading-relaxed">
                  Cradle-to-Exit Practice Coverage
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 6. Forums / High Courts practicing strip */}
        <div className="bg-ink text-cream py-10 px-4 sm:px-8 border-t border-ink shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 select-none">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-soft md:mb-0 shrink-0">
              The Law Firm Forums of Practice
            </span>
            <div className="flex flex-row flex-nowrap items-center justify-between lg:justify-end gap-x-2 sm:gap-x-4 md:gap-x-6 font-display italic text-[9px] xs:text-[10px] sm:text-xs md:text-sm xl:text-[17px] text-cream-dark/95 whitespace-nowrap w-full lg:w-auto">
              <span>Supreme Court of India</span>
              <span className="text-gold/40">·</span>
              <span>High Courts</span>
              <span className="text-gold/40">·</span>
              <span>NCLT</span>
              <span className="text-gold/40">·</span>
              <span>Appellate Tribunals</span>
              <span className="text-gold/40">·</span>
              <span>GeM Authority Office</span>
              <span className="text-gold/40">·</span>
              <span>Ministry Panels</span>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <section id="about" className="border-t border-ink py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4 max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-widest text-burgundy flex items-center gap-3 select-none">
                <span className="font-display italic text-lg font-bold">I.</span>
                <span className="w-8 h-[1px] bg-burgundy" />
                The Law Firm
              </div>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight animate-fade-in">
                Counsel for the entire <em className="italic font-normal text-burgundy">arc of an enterprise.</em>
              </h3>
            </div>

            <div className="font-serif italic text-base text-ink-mute text-justify leading-relaxed max-w-4xl space-y-6 text-[17px]">
              <p>
                Equinox &amp; Co. LLP is a premier New Delhi-based full-service law firm providing highly integrated commercial advocacy, transactional guidance, and strategic dispute resolution to corporations, growth-stage startups, Micro, Small, and Medium Enterprises (MSMEs), OEMs, and emerging businesses across India.
              </p>
              <p>
                The Law Firm advises businesses through every stage of their lifecycle, from incorporation and SPICe+ company registration to taxation, intellectual property filings, regulatory compliance, commercial structuring, and contentious public procurement litigation, all under a single unified legal architecture designed around twelve distinct practice pillars.
              </p>
              <p>
                The Law Firm has established a strong reputation as a specialist in Indian Public Procurement Law, regularly representing and advising bidders in matters involving arbitrary disqualifications, supply delay show-cause notices, suspension proceedings, and incident moratoriums on the Government e-Marketplace (GeM) portal. The Law Firm routinely prepares high-stakes representations and pursues constitutional remedies before the Supreme Court of India, the Delhi High Court, central ministries, and other governmental authorities, with a particular focus on protecting the rights and commercial interests of MSMEs and domestic manufacturers under India’s public procurement framework.
              </p>
            </div>
            
            {/* Attorney Card Overlay */}
            <div className="border-t border-ink/20 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 max-w-4xl">
              <div>
                <div className="font-display text-2xl font-medium tracking-tight text-ink">
                  Aditya Saraswat, Advocate
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute mt-1">
                  Founder &amp; Managing Partner
                </div>
              </div>
              <div className="font-display italic text-[15px] text-ink-mute border-l border-ink/15 pl-4 py-1">
                Member, Bar Council of Delhi<br />Enrolled Practitioner, Delhi High Court
              </div>
            </div>
          </div>
        </section>

        {/* 13. The Law Firm Notes & Insights Section */}
        <section id="insights" className="border-t border-ink py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4 max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-widest text-burgundy flex items-center gap-3 select-none">
                <span className="font-display italic text-lg font-bold">II.</span>
                <span className="w-8 h-[1px] bg-burgundy" />
                Commentary
              </div>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight animate-fade-in">
                Recent <em className="italic font-normal text-burgundy">commentaries &amp; briefings.</em>
              </h3>
              <p className="font-serif italic text-base text-ink-mute">
                Working documentation and regulatory reviews authored in our Gurugram chambers. Provided strictly for study and reference — not to be construed as official legal advice.
              </p>
            </div>

            {/* Insights Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {INSIGHTS.map((item, idx) => (
                <article key={idx} className="bg-cream-dark/15 border-t-2 border-burgundy p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-ink-mute">
                      <span className="text-burgundy font-semibold">{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h4 className="font-display text-2xl font-medium text-ink leading-tight hover:text-burgundy transition">
                      {item.title}
                    </h4>
                    <p className="font-serif text-sm leading-relaxed text-ink-soft">
                      {item.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-ink/10 pt-4 font-mono text-[9px] uppercase tracking-widest">
                    <button 
                      onClick={() => { setActiveTab("home"); setSelectedArticle(item.slug); window.scrollTo(0, 0); }} 
                      className="text-ink font-medium border-b border-ink cursor-pointer hover:text-burgundy hover:border-burgundy"
                    >
                      Read Document
                    </button>
                    <span className="text-ink-mute">{item.length}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Endorsements (Client Quotes) */}
        <section id="endorsements" className="bg-cream border-t border-ink py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto space-y-24">
            
            {/* Endorsements (Client Quotes) */}
            <div className="space-y-12">
              <div className="space-y-4 max-w-2xl">
                <div className="font-mono text-xs uppercase tracking-widest text-burgundy flex items-center gap-3 select-none">
                  <span className="font-display italic text-lg font-bold">III.</span>
                  <span className="w-8 h-[1px] bg-burgundy" />
                  Endorsements
                </div>
                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight">
                  Anonymized <em className="italic font-normal text-burgundy">client references.</em>
                </h3>
                <p className="font-serif italic text-[17px] text-ink-mute max-w-xl">
                  Strict adherence to BCI rules mandates complete anonymity. The following endorsements reflect the efficacy of our counsel.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CHAMBERS_EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="border border-ink p-8 flex flex-col justify-between space-y-6 hover:bg-cream-dark/50 transition duration-300">
                    <div className="flex-1 space-y-6">
                      <div className="w-12 h-12 bg-burgundy/5 flex items-center justify-center rounded-sm border border-burgundy/10">
                        <exp.icon className="w-6 h-6 text-burgundy" strokeWidth={1.5} />
                      </div>
                      <p className="font-serif text-lg leading-relaxed text-ink-soft italic">
                        "{exp.quote}"
                      </p>
                    </div>
                    <div className="pt-6 border-t border-ink/20">
                      <div className="font-display font-medium text-ink flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                         {exp.client}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-ink-mute mt-1">
                        {exp.industry}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case History */}
            <div className="space-y-10 border-t border-ink pt-20">
              <div className="space-y-4 max-w-2xl">
                <div className="font-mono text-xs uppercase tracking-widest text-burgundy flex items-center gap-3 select-none">
                  <span className="font-display italic text-lg font-bold">IV.</span>
                  <span className="w-8 h-[1px] bg-burgundy" />
                  Case History
                </div>
                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight animate-fade-in">
                  Selected <em className="italic font-normal text-burgundy">Matter records on file.</em>
                </h3>
                <p className="font-serif italic text-[17px] text-ink-mute max-w-xl">
                  Representative briefs and statutory challenges handled by Advocate Aditya's chambers. Procuring authorities are anonymized to preserve strict lawyer-client confidentiality rules.
                </p>
              </div>

              {/* Matters list rows */}
              <div className="border-t border-ink divide-y divide-ink/15">
                {RECENT_MATTERS.map((matter, idx) => (
                  <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group">
                    <div className="font-display text-xl italic font-semibold text-burgundy md:col-span-1 select-none">
                      {matter.num}
                    </div>
                    <div className="font-display text-lg sm:text-xl font-medium text-ink group-hover:text-burgundy transition md:col-span-7">
                      {matter.title}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-ink-mute md:col-span-2">
                      {matter.category}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-burgundy-bright md:col-span-2 text-left md:text-right border-l md:border-l-0 border-ink/10 pl-3 md:pl-0">
                      {matter.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="font-serif italic text-xs text-ink-mute max-w-2xl select-none">
                Note: Past legal outcomes are no guarantee of similar results in future matters. Material descriptions are anonymized strictly adhering to Bar Council of India standards of publicity.
              </div>
            </div>
          </div>
        </section>
              </div>
            ) : activeTab === "partners" ? (
              <PartnersPage setActiveTab={handleTabChange as any} navigateToHomeSection={navigateToHomeSection} />
            ) : activeTab === "engage" ? (
              <EngagePage setActiveTab={handleTabChange as any} />
            ) : activeTab === "practice" ? (
              <PracticePage setActiveTab={handleTabChange as any} />
            ) : activeTab === "industries" ? (
              <IndustriesPage setActiveTab={handleTabChange as any} />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 16. Structural Footer */}
      <footer className="bg-ink text-cream border-t border-ink-soft pt-12 md:pt-16 pb-8 px-4 sm:px-8 select-text">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Branding Column */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h1 className="font-display text-2xl font-medium tracking-tight text-white leading-tight">
                Equinox <span className="font-normal italic text-gold">&amp;</span> Co. LLP
              </h1>
              <div className="font-mono text-[9px] uppercase tracking-widest text-gold-soft mt-1 select-none">
                Advocates &amp; Legal Consultants
              </div>
              <p className="font-serif italic text-xs text-cream-dark/65 max-w-sm leading-relaxed mt-2">
                A prestigious New Delhi-based litigation and transactional advisory representing corporate entities, MSMEs, and startups across the national legal register.
              </p>
              <div className="mt-6 flex flex-row items-center gap-6 font-mono text-[10px] text-gold-soft tracking-wider justify-start flex-wrap">
                <a href="tel:+917976948655" className="flex items-center gap-2 hover:text-white transition">
                  <Phone className="w-3.5 h-3.5" />
                  +91 79769 48655
                </a>
                <a href="mailto:admin@equinox.co.in" className="flex items-center gap-2 hover:text-white transition">
                  <Mail className="w-3.5 h-3.5" />
                  admin@equinox.co.in
                </a>
              </div>
            </div>

            {/* Legal Alerts Subscription */}
            <div className="lg:col-span-6 flex flex-col justify-start text-left mt-12 md:mt-0">
              <div className="max-w-md w-full lg:ml-auto">
                <h4 className="font-display text-2xl text-white font-medium tracking-tight mb-2 leading-tight">Subscribe to Legal Alerts</h4>
                <div className="space-y-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-gold-soft">
                    Legal Alerts · Coming Soon
                  </div>
                  <p className="font-serif italic text-xs text-cream-dark/60 leading-relaxed max-w-xs">
                    Our legal alerts subscription service is launching shortly. Write to us at admin@equinox.co.in to be added to the list.
                  </p>
                </div>
                <div className="flex items-start gap-2 font-mono text-[10px] text-gold-soft tracking-wider mt-8">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>Plot No. 100, Sector 28, Gurugram, Haryana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Statutory warning under BCI mandate */}
          <div className="border-t border-cream/15 pt-6 select-text">
            <p className="font-serif italic text-[11px] text-cream-dark/50 leading-relaxed max-w-5xl">
              <strong className="font-mono text-[9px] uppercase tracking-wider text-gold font-semibold mr-2 block sm:inline mb-1 sm:mb-0 select-none">
                Statutory Notice · Bar Council of India (BCI).
              </strong>
              The contents of this official portal are strictly designed for structural reference and general informational use. They are not intended under any circumstance to be construed as formal legal opinions. In strict adherence to Bar Council of India guidelines, advocates are prohibited from active advertisement or soliciting work. Accessing this platform or placing comments in our diagnostic portals does not form, and is not designed to create, any attorney-client retainer or legal contracts. Equinox &amp; Co. LLP disclaims all civil liabilities for decisions executed or deferred based on portal materials.
            </p>
          </div>

          {/* Bottom Bar copyright */}
          <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-cream-dark/45 select-none">
            <div>© 2026 Equinox &amp; Co. LLP · Reg. LLP-IN-DL-XXXXXX</div>
            <div className="flex items-center gap-2">
              <span>Designed for Counsel</span>
              <span>·</span>
              <span>Built for Secure Enterprise Practice</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Sticky Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-burgundy text-cream hover:bg-ink transition shadow-lg rounded-full cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
