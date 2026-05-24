import { Mail, ShieldCheck, Award, Scale, BookOpen, Clock, ChevronRight } from "lucide-react";
import adityaPic from "../assets/images/regenerated_image_1779566219476.jpg";
import shwetaPic from "../assets/images/regenerated_image_1779566217962.jpg";
import amanPic from "../assets/images/regenerated_image_1779566216093.jpg";
import ambikaPic from "../assets/images/regenerated_image_1779566214908.jpg";
import rishiPic from "../assets/images/regenerated_image_1779581616486.jpg";

interface PartnersPageProps {
  setActiveTab: (tab: any) => void;
  navigateToHomeSection: (sectionId: string) => void;
}

export default function PartnersPage({ setActiveTab, navigateToHomeSection }: PartnersPageProps) {
  const partners = [
    {
      name: "Aditya Saraswat",
      role: "Partner · Contract & GeM Procurement Specialist",
      image: adityaPic,
      fallbackImage: "https://picsum.photos/seed/aditya-lawyer-pro/400/400",
      initials: "AS",
      barEnrollment: "Enrolled Practitioner, Delhi High Court & Supreme Court of India",
      education: "B.A. LL.B. (Hons.) · Specialized training in Administrative Law",
      description: "Aditya specializes in public procurement regulations, government contracts, and administrative law. He leads the team representing contractors, OEMs, and key tech service providers challenging arbitrary technical exclusions, debarments, and roll-on moratoriums on the Government e-Marketplace (GeM) system.",
      highlights: [
        "Challenged 20+ arbitrary debarment circulars before the High Court",
        "Expert strategist on natural justice rights in portal-level suspensions",
        "Advised top technology manufacturers on public tender eligibility rules"
      ],
      email: "aditya.saraswat@equinox.co.in"
    },
    {
      name: "Shweta Kumari",
      role: "Partner · Litigation Specialist",
      image: shwetaPic,
      fallbackImage: "https://picsum.photos/seed/shweta-lawyer-pro/400/400",
      initials: "SK",
      barEnrollment: "Enrolled Practitioner, Delhi High Court",
      education: "LL.B. · Expert in Civil and Commercial Litigation",
      description: "Shweta is a formidable trial lawyer who anchors our litigation wing. She focuses on civil suits, complex commercial disputes, and arbitral proceedings. She regularly represents corporate clients and high-net-worth individuals in navigating multi-jurisdictional litigation and enforcing commercial contracts.",
      highlights: [
        "Specializes in arbitration and conciliation proceedings",
        "Formidable track record in securing interim reliefs and injunctions",
        "Extensive experience in cross-border commercial litigation"
      ],
      email: "shweta.kumari@equinox.co.in"
    },
    {
      name: "Aman Kumar",
      role: "Partner · Litigation Specialist",
      image: amanPic,
      fallbackImage: "https://picsum.photos/seed/aman-lawyer-pro/400/400",
      initials: "AK",
      barEnrollment: "Enrolled Practitioner, Supreme Court of India",
      education: "LL.M. · Specialization in Corporate and Commercial Laws",
      description: "Aman brings a wealth of experience in high-stakes appellate litigation. His practice encompasses white-collar defense, regulatory investigations, and complex constitutional matters. He offers strategic counsel to corporate boards facing statutory scrutiny and compliance enforcement actions.",
      highlights: [
        "Defended major corporations in multi-state regulatory crackdowns",
        "Appellate advocacy involving complex questions of statutory interpretation",
        "Strategic counsel for high-stakes white-collar defense"
      ],
      email: "aman.kumar@equinox.co.in"
    },
    {
      name: "Ambika Negi",
      role: "Partner · GeM, Certificate & Corporate Specialist",
      image: ambikaPic,
      fallbackImage: "https://picsum.photos/seed/ambika-lawyer-pro/400/400",
      initials: "AN",
      barEnrollment: "Corporate Advisory Counsel",
      education: "LL.B. · Certified Compliance Professional",
      description: "Ambika heads the corporate compliance and certification wings. She guides enterprises through statutory licensing, MSME / Startup recognition initiatives, GeM registration protocols, and structural due diligence. She ensures strict adherence to modern corporate governance standards.",
      highlights: [
        "Pioneered GeM vendor assessment and catalog compliance frameworks",
        "Structured seed & Series-A finance acquisitions for deep-tech ventures",
        "Drafted over 400+ customized modern commercial contracts and SLA terms"
      ],
      email: "ambika.negi@equinox.co.in"
    },
    {
      name: "Rishi Raj Singh",
      role: "Partner · Litigation & Labour Law Specialist",
      image: rishiPic,
      fallbackImage: "https://picsum.photos/seed/rishi-lawyer-pro/400/400",
      initials: "RRS",
      barEnrollment: "Enrolled Practitioner, Industrial and Labour Courts",
      education: "LL.B. · Expert in Employment and Labour Regulations",
      description: "Rishi specializes in employment law, industrial disputes, and workplace compliance. He provides robust representation in labor tribunals and advises management on workforce restructuring, union negotiations, and the implementation of the new occupational safety codes.",
      highlights: [
        "Advised multinational corporations on workforce restructuring and severance",
        "Successful representation in complex industrial disputes and strikes",
        "Expertise in drafting airtight executive employment agreements"
      ],
      email: "rishi.singh@equinox.co.in"
    }
  ];

  return (
    <section className="pt-8 md:pt-12 pb-24 px-4 sm:px-8 select-text animate-fade-in animate-once">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb back road */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-ink/10 pb-4 gap-4 mb-8">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-mute flex items-center gap-2">
            <button 
              onClick={() => setActiveTab("home")}
              className="text-burgundy hover:text-ink transition cursor-pointer font-semibold"
            >
              The Law Firm Home
            </button>
            <ChevronRight className="w-3" />
            <span className="text-ink-soft">Our Partners &amp; Leadership</span>
          </div>
          
          <button
            onClick={() => setActiveTab("home")}
            className="font-mono text-[10px] uppercase tracking-widest text-ink hover:text-burgundy border-b border-ink hover:border-burgundy pb-0.5 transition cursor-pointer"
          >
            ← Back to The Law Firm Overview
          </button>
        </div>

        {/* Header Block and Brand Ethos */}
        <div className="max-w-3xl space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-burgundy flex items-center gap-3">
            <span className="font-display italic text-lg font-bold">I.</span>
            <span className="w-8 h-[1px] bg-burgundy" />
            Leadership &amp; Counsel
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight">
            Meet the minds shaping <em className="italic font-normal text-burgundy">Equinox &amp; Co.</em>
          </h2>
          <p className="font-serif text-lg md:text-xl text-ink-soft leading-relaxed">
            Our firm is anchored by legal practitioners combining rigorous trial jurisprudence with contemporary regulatory counsel. We guide clients through deep statutory complexities with modern agility.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-6">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="border border-ink/20 bg-cream/35 p-8 md:p-10 flex flex-col justify-between space-y-10 hover:border-burgundy/40 transition duration-300 relative"
            >
              <div className="space-y-8">
                {/* Header info with Photo Frame and Name/Role */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  
                  {/* Photo Frame */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 border border-ink shrink-0 group overflow-hidden bg-cream-dark/40 shadow-sm">
                    <img 
                      src={partner.image}
                      onError={(e) => {
                        // Fallback to random picsum portrait if unsplash fails, or show clean initials
                        e.currentTarget.src = partner.fallbackImage;
                      }}
                      alt={partner.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Name and Designation details */}
                  <div className="space-y-1">
                    <h3 className="font-display text-3xl font-medium tracking-tight text-ink">
                      {partner.name}
                    </h3>
                    <div className="font-display italic text-sm text-burgundy font-medium leading-relaxed">
                      {partner.role}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-ink-mute pt-1 leading-relaxed max-w-sm">
                      {partner.barEnrollment}
                    </div>
                  </div>
                </div>

                <hr className="border-t border-ink/10" />

                {/* Profile Narrative details */}
                <div className="space-y-6">
                  {/* Academics tag */}
                  <div className="flex gap-3">
                    <BookOpen className="w-4 h-4 text-burgundy shrink-0 mt-1 stroke-[1.5]" />
                    <div className="font-mono text-[10px] uppercase tracking-wider text-ink">
                      <span className="text-ink-mute mr-1">Admitted Certs |</span> {partner.education}
                    </div>
                  </div>

                  <p className="font-serif text-[15px] leading-relaxed text-ink-soft">
                    {partner.description}
                  </p>

                  <div className="space-y-3">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-burgundy font-semibold">
                      § Core Strengths &amp; Engagements Includes:
                    </div>
                    <ul className="space-y-2 pl-4">
                      {partner.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="font-serif text-sm leading-relaxed text-ink-soft flex items-start gap-2">
                          <span className="text-burgundy font-serif italic text-xs mt-0.5">·</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer contact button inside card */}
              <div className="border-t border-ink/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <a 
                  href={`mailto:${partner.email}`}
                  className="font-mono text-[10px] uppercase tracking-widest text-ink hover:text-burgundy flex items-center gap-2.5 group/link cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-burgundy stroke-[1.5]" />
                  <span>Direct Counsel: <strong className="font-medium group-hover/link:underline">{partner.email}</strong></span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveTab("engage")}
                  className="font-mono text-[9px] uppercase tracking-widest bg-ink text-cream hover:bg-burgundy px-4 py-2 transition cursor-pointer select-none"
                >
                  Brief this partner
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* The Law Firm Principles Banner */}
        <div className="border-t border-b border-ink/20 py-12 flex flex-col md:flex-row items-center justify-between gap-8 select-none text-center md:text-left">
          <div className="space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-burgundy font-semibold">Strict Profession Guidelines</div>
            <div className="font-display text-2xl font-medium text-ink">Equal Standings, Absolute Confidentiality.</div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-burgundy stroke-[1.5]" /> Professional Indemnity
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-burgundy stroke-[1.5]" /> Elite Bar Affiliates
            </span>
          </div>
        </div>

        {/* Work Model extracted from Main Page */}
        <div className="max-w-7xl mx-auto space-y-12 py-12 border-t border-ink/10">
          <div className="space-y-4 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-burgundy flex items-center gap-3 select-none">
              <span className="font-display italic text-lg font-bold">II.</span>
              <span className="w-8 h-[1px] bg-burgundy" />
              Work Model
            </div>
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight">
              How an <em className="italic font-normal text-burgundy">engagement starts.</em>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="font-display text-5xl font-extralight italic text-burgundy select-none">01</div>
              <h4 className="font-display text-2xl font-medium text-ink">Initial Consultation</h4>
              <p className="font-serif text-sm leading-relaxed text-ink-soft">
                A structured, 30-minute consultation (in chambers, or telephonically). We assess the facts, verify deadlines, audit jurisdictional parameters, and determine baseline fit.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-display text-5xl font-extralight italic text-burgundy select-none">02</div>
              <h4 className="font-display text-2xl font-medium text-ink">Scope &amp; Budgeting</h4>
              <p className="font-serif text-sm leading-relaxed text-ink-soft">
                A formal, transparent Engagement Letter defining exact scopes, key milestone deliverables, and fee structure (fixed quote, corporate milestones, or advisory retainers).
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-display text-5xl font-extralight italic text-burgundy select-none">03</div>
              <h4 className="font-display text-2xl font-medium text-ink">Drafting &amp; Filing</h4>
              <p className="font-serif text-sm leading-relaxed text-ink-soft">
                Draft papers are securely shared for client endorsement before court presentation. Every response is evidentially disciplined, complete with indices and supporting certificates.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-display text-5xl font-extralight italic text-burgundy select-none">04</div>
              <h4 className="font-display text-2xl font-medium text-ink">Advocacy &amp; Updates</h4>
              <p className="font-serif text-sm leading-relaxed text-ink-soft">
                Aditya represents your interests in personal hearings, ministerial escalations, or High Court court benches, filing status reports inside your client portal regularly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
