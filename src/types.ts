export interface PracticePillar {
  num: string;
  name: string;
  desc: string;
  list: string[];
  featured?: boolean;
}

export interface GeMSpotlightItem {
  id: string;
  title: string;
  description: string;
  citation: string;
}

export interface RecentMatter {
  num: string;
  title: string;
  category: string;
  status: string;
}

export interface InsightSection {
  heading?: string;
  body: string[];
  callout?: string;
}

export interface Insight {
  slug: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  length: string;
  content?: InsightSection[];
}

export interface LegislativeGround {
  citation: string;
  application: string;
}

export interface RebuttalItem {
  claim: string;
  counterclaim: string;
  draftParagraph: string;
}

export interface CaseAnalysisResult {
  summary: string;
  strengths: string[];
  legislativeGrounds: LegislativeGround[];
  rebuttals: RebuttalItem[];
  actionSteps: string[];
  notes: string;
}
