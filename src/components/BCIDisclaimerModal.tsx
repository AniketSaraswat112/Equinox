import { useState, useEffect } from "react";
import { Scale } from "lucide-react";

export default function BCIDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem("bci_disclaimer_agreed");
    if (!hasAgreed) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("bci_disclaimer_agreed", "true");
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 bg-ink/95 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        id="bci-modal"
        className="w-full max-w-2xl bg-cream border border-ink p-8 md:p-12 shadow-2xl relative animate-fade-in"
      >
        <div className="flex flex-col items-center text-center">
          {/* Logo Crest */}
          <div className="w-16 h-16 rounded-full border border-ink flex items-center justify-center text-burgundy mb-6">
            <Scale className="w-8 h-8 stroke-[1.25]" />
          </div>

          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-1">
            Equinox <span className="font-normal italic text-burgundy">&amp;</span> Co.
          </h2>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute mb-6 select-none">
            Statutory Disclaimer · Bar Council of India Rules
          </div>

          <div className="w-full border-t border-ink/20 my-4" />

          <div className="text-left font-serif text-[15px] leading-relaxed text-ink-soft space-y-4 max-h-[300px] overflow-y-auto pr-2 mb-8">
            <p>
              As per the rules of the Bar Council of India (BCI), advocates are strictly prohibited from soliciting work or advertising in any physical or digital form.
            </p>
            <p>
              By clicking on <strong>"I Agree"</strong> below, the user acknowledges and confirms the following stipulations:
            </p>
            <ul className="list-none space-y-3 pl-4">
              <li className="relative pl-6">
                <span className="absolute left-0 text-burgundy font-serif italic">§</span>
                There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from Equinox &amp; Co. LLP or any of its partners to solicit work through this website.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 text-burgundy font-serif italic">§</span>
                The user wishes to gain more information about the law firm, its lawyers, and its practice areas solely for their own informational benefits and active professional uses.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 text-burgundy font-serif italic">§</span>
                The information on this portal is provided entirely at the user's voluntary request. Any materials downloaded or actions initiated are completely under the user's volition.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 text-burgundy font-serif italic">§</span>
                No transmission, submission of details, or passive receipt of information creates any attorney-client relationship between the law firm and the user.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 text-burgundy font-serif italic">§</span>
                The contents of this platform must not be construed as official legal advice. The Law Firm disclaims all liability for actions taken on the basis of this website's information.
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button 
              id="decline-btn"
              onClick={handleDecline} 
              className="px-6 py-3 border border-ink/30 text-ink-mute hover:text-ink hover:border-ink font-mono text-xs uppercase tracking-widest transition duration-200"
            >
              Decline
            </button>
            <button 
              id="agree-btn"
              onClick={handleAgree} 
              className="px-8 py-3 bg-burgundy hover:bg-ink text-cream font-mono text-xs uppercase tracking-widest transition duration-200"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
