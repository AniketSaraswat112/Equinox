import { useState, FormEvent } from "react";
import { CaseAnalysisResult } from "../types";
import { Scale, CheckCircle, Award, FileText, ArrowRight, BookOpen, AlertCircle, RefreshCw, Copy, Check } from "lucide-react";

const PROBLEMS = [
  {
    category: "Show Cause Notice (SCN) Allegation",
    placeholder: "Paste the text of the Show Cause Notice or SCN email here..."
  },
  {
    category: "Bid Disqualification Ground",
    placeholder: "Paste the bidder disqualification status comments or technical evaluation rejection text..."
  },
  {
    category: "Incident Management / Moratorium Penalty",
    placeholder: "Paste the incident management portal notification, severe deviation warning, or suspension letter..."
  },
  {
    category: "MSE Criteria & Relaxation Denial",
    placeholder: "Paste the buyer comments rejecting your MSME or startup relaxation claim..."
  },
  {
    category: "Brand or Technical Spec Restriction",
    placeholder: "Paste the restrictive qualification requirements or proprietary OEM terms from the bid documents..."
  }
];

export default function DisputeAnalyzer() {
  const [category, setCategory] = useState(PROBLEMS[0].category);
  const [text, setText] = useState("");
  const [tenderId, setTenderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<CaseAnalysisResult | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getPlaceholder = () => {
    const item = PROBLEMS.find(p => p.category === category);
    return item ? item.placeholder : "Paste raw case materials, tender conditions, or SCN logs...";
  };

  const handleCopy = (txt: string, index: number) => {
    navigator.clipboard.writeText(txt);
    setCopiedId(index);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAnalyze = async (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Please paste the notification or bid dispute text to analyze.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    // Dynamic loading interval for reassuring user experience during heavy legal analysis
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % 4;
      setLoadingStep(step);
    }, 2800);

    try {
      const response = await fetch("/api/gemini/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, text, tenderId }),
      });

      if (!response.ok) {
        throw new Error("Unable to complete analysis. Please check your text and try again.");
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred during GFR/Circular review.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const loadExample = () => {
    const examples: Record<string, { tender: string; text: string }> = {
      "Show Cause Notice (SCN) Allegation": {
        tender: "GEM/2026/B/8772391",
        text: "The seller is hereby issued this Show Cause Notice for 'Delivery Delay'. The desktop computers under Purchase Order № 11849 were not delivered within the strict 30-day timeline. Seller is directed to show cause within 3 days why action including an Incident Management Severity Deviation Moratorium of 90 days and suspension of seller account should not be initiated against them."
      },
      "Bid Disqualification Ground": {
        tender: "GEM/2026/B/9021132",
        text: "Rejected during Technical Evaluation of Bid. Reason for rejection: Bidder failed to submit physical Earned Money Deposit (EMD). Registered MSME certificate submitted but the ATC (Additional Terms and Conditions) clause 7 explicitly stated: 'NO EMD RELAXATION FOR MSME IN THIS TENDER DUE TO REQUISITE FIELD CRITICALITY'. Hence, bid stands summarily disqualified as non-compliant."
      }
    };

    const ex = examples[category];
    if (ex) {
      setTenderId(ex.tender);
      setText(ex.text);
    } else {
      setTenderId("GEM/2026/B/TEST");
      setText(`We are disqualified because we did not prove we meet the 3-year minimum sector experience requirement, but we are a DPIIT recognized startup with sufficient technical capabilities.`);
    }
  };

  return (
    <div className="bg-ink text-cream p-8 md:p-12 border border-ink relative rounded-lg" id="dispute-analyzer">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(168,138,71,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-lg" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-gold" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">The Law Firm Diagnostic Engine</span>
        </div>

        <h3 className="font-display text-3xl md:text-5xl font-medium tracking-tight mb-3">
          GeM Case <span className="font-normal italic text-gold">&amp;</span> Dispute Analyzer
        </h3>
        <p className="font-serif italic text-gold-soft text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
          Select your administrative dispute or disqualification category to run a preliminary check against General Financial Rules (GFR) and the current GeM Incident Management Policy.
        </p>

        <form onSubmit={handleAnalyze} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-gold-soft">Dispute Classification</label>
              <select
                id="dispute-classification-select"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setText("");
                }}
                className="w-full bg-[#1F1A16] border border-gold/20 text-cream font-display text-lg py-3 px-4 focus:outline-none focus:border-gold"
              >
                {PROBLEMS.map((p, idx) => (
                  <option key={idx} value={p.category}>
                    {p.category}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-gold-soft">Tender / Bid ID (Optional)</label>
              <input
                id="tender-id-input"
                type="text"
                placeholder="e.g. GEM/2026/B/877..."
                value={tenderId}
                onChange={(e) => setTenderId(e.target.value)}
                className="w-full bg-[#1F1A16] border border-gold/20 text-cream font-display text-lg py-3 px-4 placeholder:text-ink-mute focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-gold-soft">Official Notification or Allegation Text</label>
              <button
                type="button"
                onClick={loadExample}
                className="font-mono text-[10px] text-gold hover:text-white transition uppercase tracking-wider cursor-pointer"
              >
                [ Load Representative Sample ]
              </button>
            </div>
            <textarea
              id="dispute-raw-text"
              rows={6}
              placeholder={getPlaceholder()}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                if (error) setError(null);
              }}
              className="w-full bg-[#1F1A16] border border-gold/20 text-cream font-serif text-lg py-4 px-4 placeholder:text-ink-mute focus:outline-none focus:border-gold resize-y"
            />
          </div>

          {error && (
            <div className="p-4 bg-burgundy/20 border border-burgundy/40 text-cream-dark text-sm font-serif rounded-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              id="commence-analysis-btn"
              type="submit"
              disabled={loading}
              className="px-10 py-4 bg-gold hover:bg-white text-ink hover:text-ink font-mono text-xs uppercase tracking-widest transition duration-300 flex items-center gap-3 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Commence Case Analysis
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* LOADING SCREEN WITH REASSURING MESSAGES */}
        {loading && (
          <div className="mt-12 bg-[#1F1A16] border border-gold/30 p-8 text-center space-y-6">
            <div className="flex justify-center">
              <RefreshCw className="w-10 h-10 text-gold animate-spin stroke-[1.25]" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h4 className="font-display text-xl text-cream font-medium tracking-tight animate-pulse">
                {loadingStep === 0 && "Parsing bid constraints and show-cause grounds..."}
                {loadingStep === 1 && "Aligning General Financial Rules (GFR) & circular standards..."}
                {loadingStep === 2 && "Consulting relevant Hon'ble High Court precedent lines..."}
                {loadingStep === 3 && "Drafting structured argument rebuttal frames..."}
              </h4>
              <p className="font-serif italic text-gold-soft text-sm">
                Evaluating the record carefully. Please maintain this screen while Aditya's virtual clerk completes the briefing.
              </p>
            </div>
          </div>
        )}

        {/* RESULTS DISCLOSURE */}
        {result && (
          <div className="mt-12 space-y-10 border-t border-gold/20 pt-10 animate-fade-in" id="analysis-report-portal">
            
            {/* Header Report Card */}
            <div className="bg-[#1C1713] border border-gold/30 p-6 md:p-8 rounded-sm">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-gold" />
                  <span className="font-mono text-[10px] tracking-widest text-gold uppercase">Case Diagnostic Memo</span>
                </div>
                {tenderId && (
                  <span className="font-mono text-[10px] bg-gold/15 text-gold px-3 py-1 uppercase tracking-wider rounded-sm">
                    Ref: {tenderId}
                  </span>
                )}
              </div>
              <h4 className="font-display text-2xl font-medium text-white mb-3">
                Preliminary Counsel Brief
              </h4>
              <p className="font-serif leading-relaxed text-cream/90 text-[17px]">
                {result.summary}
              </p>
            </div>

            {/* Strategic Strengths */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <h5 className="font-mono text-xs uppercase tracking-widest text-gold font-medium">Strategic Defenses &amp; Strengths</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.strengths.map((str, idx) => (
                  <div key={idx} className="bg-ink-soft/40 border border-gold/10 p-5 rounded-sm flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-serif text-[16px] text-cream-dark leading-relaxed">{str}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statutory Regulations Grid */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <h5 className="font-mono text-xs uppercase tracking-widest text-gold font-medium">Relevant Statutory &amp; Precedent Anchors</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.legislativeGrounds.map((lg, idx) => (
                  <div key={idx} className="bg-[#1C1713] p-6 border-l-2 border-gold flex flex-col space-y-3">
                    <div className="font-mono text-xs text-gold font-medium uppercase tracking-wider flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {lg.citation}
                    </div>
                    <p className="font-serif text-[15.5px] leading-relaxed text-cream/80">
                      {lg.application}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Point-by-Point Counter Rebuttals */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <h5 className="font-mono text-xs uppercase tracking-widest text-gold font-medium">Point-by-Point Representations</h5>
              </div>
              <div className="space-y-6">
                {result.rebuttals.map((reb, idx) => (
                  <div key={idx} className="border border-gold/20 bg-[#1C1713] rounded-sm divide-y divide-gold/10 overflow-hidden">
                    <div className="p-5 md:p-6 bg-[#16120E] space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-burgundy-bright font-bold">Allegation</span>
                      <p className="font-serif text-cream-dark text-[16px] italic">"{reb.claim}"</p>
                    </div>
                    <div className="p-5 md:p-6 space-y-4">
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-semibold">Substantive Rebuttal Approach</span>
                        <p className="font-serif text-[16px] text-cream-dark leading-relaxed">{reb.counterclaim}</p>
                      </div>
                      
                      {/* Copyable paragraph box */}
                      <div className="bg-ink p-4 border border-gold/10 space-y-3 rounded-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-gold/60">Legally Phrased Copyable Draft</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(reb.draftParagraph, idx)}
                            className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-gold hover:text-white transition cursor-pointer"
                          >
                            {copiedId === idx ? (
                              <>
                                <Check className="w-3 h-3" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                Copy Clause
                              </>
                            )}
                          </button>
                        </div>
                        <p className="font-serif text-sm leading-relaxed text-cream/70 select-all border-l border-gold/20 pl-3">
                          {reb.draftParagraph}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Immediate Action Steps */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <h5 className="font-mono text-xs uppercase tracking-widest text-gold font-medium">Immediate Actions Suggested</h5>
              </div>
              <div className="bg-[#1C1713] p-6 border border-gold/15 space-y-4 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {result.actionSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="font-display font-medium text-3xl italic text-gold">{idx + 1}.</span>
                      <p className="font-serif text-sm leading-relaxed text-cream/80">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategic Notes */}
            <div className="border border-gold/15 bg-gold/5 p-6 rounded-sm">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gold font-semibold block">Important Strategic Warning</span>
                  <p className="font-serif text-[15px] leading-relaxed text-gold-soft">
                    {result.notes}
                  </p>
                </div>
              </div>
            </div>

            {/* Prompt to engage */}
            <div className="text-center pt-4">
              <p className="font-serif italic text-cream/75 mb-4">
                Need customized drafting support to file this official representation on your GeM Portal registry?
              </p>
              <a
                href="#engage"
                className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-wider border-b border-gold pb-1 hover:text-cream hover:border-cream transition"
              >
                Discuss with Aditya Saraswat
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
