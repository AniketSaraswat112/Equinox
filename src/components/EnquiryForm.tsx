import { useState, FormEvent } from "react";
import { Mail, Phone, Clock, MapPin, CheckCircle, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [practiceArea, setPracticeArea] = useState("GeM & Public Procurement");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [brief, setBrief] = useState("");
  const [showBrief, setShowBrief] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      setError("Please briefly describe your legal requirements.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/gemini/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, practiceArea, description }),
      });

      if (!response.ok) {
        throw new Error("Unable to transmit enquiry. Please check your connection and try again.");
      }

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setBrief(data.brief);
        setShowBrief(true);
        // Clear input form
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setDescription("");
      } else {
        throw new Error(data.error || "Failed to catalog credentials.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start" id="engage">
      {/* Left Column - Contact credentials */}
      <div className="space-y-10">
        <div className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-burgundy flex items-center gap-2">
            <span className="font-display italic text-lg font-bold">I.</span>
            <span className="w-6 h-[1.5px] bg-burgundy" />
            Engage Counsel
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-ink leading-[1.05]">
            Secure <em className="font-normal italic text-burgundy">Counsel.</em>
          </h2>
          <p className="font-serif italic text-lg text-ink-mute max-w-md leading-relaxed">
            State your matter details in complete confidence. The Law Firm responds to all eligible commercial and procurement issues within one working day.
          </p>
        </div>

        <div className="border-t border-ink/15 pt-8 space-y-6">
          <div className="flex gap-4">
            <MapPin className="w-5 h-5 text-burgundy shrink-0 mt-1 stroke-[1.25]" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-mute mb-1">The Law Firm Location</div>
              <div className="font-display text-xl text-ink font-medium leading-relaxed">
                Ground Floor, Plot No. 78,<br />Sector 44, Gurugram, India
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="w-5 h-5 text-burgundy shrink-0 mt-1 stroke-[1.25]" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-mute mb-1">Direct Telephony</div>
              <div className="font-display text-xl text-ink font-medium hover:text-burgundy transition">
                <a href="tel:+917976948655">+91 79769 48655</a>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="w-5 h-5 text-burgundy shrink-0 mt-1 stroke-[1.25]" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-mute mb-1">Electronic Mail</div>
              <div className="font-display text-xl text-ink font-medium hover:text-burgundy transition">
                <a href="mailto:admin@equinox.co.in">admin@equinox.co.in</a>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="w-5 h-5 text-burgundy shrink-0 mt-1 stroke-[1.25]" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-mute mb-1">The Law Firm Hours</div>
              <div className="font-display text-xl text-ink font-medium leading-relaxed">
                Monday – Saturday · 10:30 – 18:30 IST<br />
                <span className="text-[14px] italic text-ink-mute font-serif">In-person consultations by strict prior appointment only.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="bg-cream-dark/40 border border-ink/20 p-8 md:p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-mute">Client Name</label>
              <input
                id="intake-name"
                type="text"
                required
                placeholder="e.g. Aditya Saraswat"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-ink/20 text-ink font-display text-lg py-2 focus:outline-none focus:border-burgundy"
              />
            </div>
            <div className="space-y-1">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-mute">Corporate Entity / Company</label>
              <input
                id="intake-company"
                type="text"
                placeholder="e.g. Equinox & Co. LLP"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-transparent border-b border-ink/20 text-ink font-display text-lg py-2 focus:outline-none focus:border-burgundy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-mute">Electronic Mail</label>
              <input
                id="intake-email"
                type="email"
                required
                placeholder="e.g. client@enterprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-ink/20 text-ink font-display text-lg py-2 focus:outline-none focus:border-burgundy"
              />
            </div>
            <div className="space-y-1">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-mute">Telephone / mobile</label>
              <input
                id="intake-phone"
                type="tel"
                placeholder="e.g. +91 98XXX XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-b border-ink/20 text-ink font-display text-lg py-2 focus:outline-none focus:border-burgundy"
              />
            </div>
          </div>

          <div className="space-y-1 col-span-2">
            <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-mute">Primary Practice Area</label>
            <select
              id="intake-practice-area"
              value={practiceArea}
              onChange={(e) => setPracticeArea(e.target.value)}
              className="w-full bg-transparent border-b border-ink/20 text-ink font-display text-lg py-2 focus:outline-none focus:border-burgundy"
            >
              <option value="Business Setup & Incorporation">Business Setup &amp; Incorporation</option>
              <option value="Tax, Licensing & Registrations">Tax, Licensing &amp; Registrations</option>
              <option value="MSME, Startup & Recognitions">MSME, Startup &amp; Recognitions</option>
              <option value="GeM & Public Procurement">GeM &amp; Public Procurement (Anchor)</option>
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Contracts & Agreements">Contracts &amp; Agreements</option>
              <option value="Litigation & Dispute Resolution">Litigation &amp; Dispute Resolution</option>
              <option value="Compliance & Secretarial">Compliance &amp; Secretarial</option>
              <option value="Data Protection & DPDP">Data Protection &amp; DPDP</option>
              <option value="Other Commercial Matter">Other Commercial Matter</option>
            </select>
          </div>

          <div className="space-y-1 col-span-2">
            <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-mute">Brief Matter Description &amp; Deadline</label>
            <textarea
              id="intake-description"
              rows={4}
              required
              placeholder="State key facts. Highlight if there is an active portal suspension or brief submission deadline..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (error) setError(null);
              }}
              className="w-full bg-transparent border-b border-ink/20 text-ink font-serif text-lg py-2 focus:outline-none focus:border-burgundy resize-none"
            />
          </div>

          {error && (
            <div className="p-3 bg-burgundy/10 border border-burgundy/30 text-ink-soft text-sm font-serif">
              {error}
            </div>
          )}

          <div className="text-[12px] font-serif italic text-ink-mute leading-relaxed">
            By clicking Submit below, you acknowledge that transmission does not generate any lawyer-client relationship under BCI guidelines, and that you have approved the statutory disclaimer.
          </div>

          <button
            id="intake-submit-btn"
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-burgundy hover:bg-ink text-cream font-mono text-xs uppercase tracking-widest transition duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Transmitting Case Details...
              </>
            ) : (
              "Submit Intake Enquiry"
            )}
          </button>
        </form>

        {/* FEEDBACK AFTER SUCCESSFUL TRANSMISSION */}
        {success && (
          <div className="border border-gold/40 bg-gold/5 p-6 space-y-4 animate-fade-in" id="intake-feedback-card">
            <div className="flex items-center gap-3 text-ink">
              <CheckCircle className="w-6 h-6 text-burgundy" />
              <div className="font-display text-xl font-medium">Enquiry Cataloged Successfully</div>
            </div>
            <p className="font-serif text-sm text-ink-soft leading-relaxed">
              Equinox &amp; Co. LLP's The Law Firm has registered your matter. Our clerk will reach out to schedule your 30-minute consultation.
            </p>

            <div className="border-t border-ink/15 pt-4">
              <button
                type="button"
                onClick={() => setShowBrief(!showBrief)}
                className="flex items-center justify-between w-full text-left font-mono text-[10px] uppercase tracking-wider text-burgundy hover:text-ink transition cursor-pointer"
              >
                <span>[ Show Automated The Law Firm Brief ]</span>
                {showBrief ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showBrief && brief && (
                <div className="mt-3 bg-cream border border-ink/15 p-4 rounded-xs max-h-[250px] overflow-y-auto">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-ink-mute mb-2">Internal Clerk Summary (Gemini-Generated)</div>
                  <div className="prose prose-sm max-w-none text-ink-soft font-serif text-sm leading-relaxed whitespace-pre-wrap">
                    {brief}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
