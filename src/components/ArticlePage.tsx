import { ChevronRight } from "lucide-react";
import { Insight } from "../types";

export interface ArticlePageProps {
  article: Insight;
  setActiveTab: (tab: any) => void;
  navigateToHomeSection: (sectionId: string) => void;
}

export default function ArticlePage({ article, setActiveTab, navigateToHomeSection }: ArticlePageProps) {
  return (
    <section className="pt-8 md:pt-12 pb-24 px-4 sm:px-8 select-text animate-fade-in animate-once border-t border-ink/20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation Breadcrumb back road */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-ink/10 pb-4 gap-4 mb-8">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-mute flex items-center gap-2">
            <button 
              onClick={() => setActiveTab("home")}
              className="text-burgundy hover:text-ink transition cursor-pointer font-semibold"
            >
              Home
            </button>
            <ChevronRight className="w-3" />
            <span className="text-ink-soft">Insights &amp; Briefings</span>
          </div>
          
          <button
            onClick={() => navigateToHomeSection("insights")}
            className="font-mono text-[10px] uppercase tracking-widest text-ink hover:text-burgundy border-b border-ink hover:border-burgundy pb-0.5 transition cursor-pointer"
          >
            ← Back to Commentaries
          </button>
        </div>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-ink-mute border-b border-ink/10 pb-4">
            <span className="text-burgundy font-semibold">{article.category}</span>
            <span>{article.date} · {article.length}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-tight">
            {article.title}
          </h1>
          <p className="font-serif italic text-lg text-ink-soft leading-relaxed max-w-3xl">
            {article.summary}
          </p>
        </div>

        {/* Article Body */}
        <div className="space-y-12 pt-8">
          {article.content?.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {section.heading && (
                <h2 className="font-display text-2xl md:text-3xl font-medium text-ink">
                  {section.heading}
                </h2>
              )}
              
              <div className="space-y-4">
                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="font-serif text-[17px] leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.callout && (
                <div className="bg-cream-dark/30 border-l-2 border-burgundy p-6 mt-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-burgundy font-semibold mb-2">
                    § Key Finding / Citation
                  </div>
                  <p className="font-serif italic text-base text-ink-soft leading-relaxed">
                    "{section.callout}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-ink/10 pt-12 flex justify-center">
          <button
            onClick={() => navigateToHomeSection("insights")}
            className="font-mono text-[11px] uppercase tracking-widest text-cream bg-ink hover:bg-burgundy transition cursor-pointer px-8 py-3 select-none"
          >
            Return to Commentaries
          </button>
        </div>
      </div>
    </section>
  );
}
