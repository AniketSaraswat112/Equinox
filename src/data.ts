import { PracticePillar, GeMSpotlightItem, RecentMatter, Insight } from "./types";

export const PRACTICE_PILLARS: PracticePillar[] = [
  {
    num: "01",
    name: "Business Setup & Incorporation",
    desc: "Choosing the right legal vehicle and putting it on the corporate register cleanly, securely, and within deadlines.",
    list: [
      "Private Limited & Public Limited Companies (SPICe+)",
      "Limited Liability Partnerships (LLP), OPC, & Section 8",
      "Partnership firms & Sole Proprietorships",
      "Memorandum (MOA), Articles (AOA), and LLP Agreements",
      "DSC, DIN, PAN, TAN, and INC-20A Commencement filings",
      "Foreign subsidiaries, liaison offices, & joint ventures",
      "Registered office alterations, structural conversions, & strike-offs"
    ]
  },
  {
    num: "02",
    name: "Tax, Licensing & Registrations",
    desc: "Structuring every certificate, permit, and standard regulatory registration an active entity is statutorily obliged to hold.",
    list: [
      "GST registrations, monthly returns, & departmental appeals",
      "Professional Tax, Shops & Establishment Act compliance",
      "EPFO & ESI registration and institutional compliance",
      "Import-Export Code (IEC), LUT for services & physical exports",
      "FSSAI, Drugs & Cosmetics, and trade municipal licenses",
      "Fire NOC, Pollution Control Boards compliance, and BIS marks",
      "Income tax compliance, TDS obligations, and transfer pricing"
    ]
  },
  {
    num: "03",
    name: "MSME, Startup & Recognitions",
    desc: "Unlocking statutory benefits, exemptions, and preferences earmarked specifically for small enterprises and emerging companies.",
    list: [
      "Udyam registration and Udyam Assist portal onboarding",
      "DPIIT Startup India recognition and compliance coaching",
      "Section 80-IAC tax holiday (Inter-Ministerial Board applications)",
      "Section 56(2)(viib) angel-tax relief filings",
      "NSIC Single-Point Registration Scheme (SPRS)",
      "ZED Certification status, GeM Vendor Assessment advice",
      "Make in India & Production Linked Incentive (PLI) advisory"
    ]
  },
  {
    num: "04",
    name: "GeM & Public Procurement",
    desc: "Flagship practice: defending client eligibility and challenging arbitrary vendor disqualifications before authorities and constitutional courts.",
    list: [
      "Bid disqualification challenges (technical, financial, OEM marks)",
      "Show Cause Notice (SCN) record-defensible representations",
      "Incident Management—suspension, debarment, and moratorium defense",
      "Applications for Personal Hearing (Delhi High Court benchmark rights)",
      "Force majeure claims and contractual execution extensions",
      "Representations directly to DPIIT, MeitY, MSME Commissioner",
      "High Court Writ Petitions under Article 226 of the Constitution"
    ],
    featured: true
  },
  {
    num: "05",
    name: "Intellectual Property",
    desc: "Securing, licensing, and aggressively defending proprietary trademarks, copyrights, industrial designs, and patents.",
    list: [
      "Trademark searching, indexing, prosecution, and statutory renewal",
      "Madrid Protocol and multi-class international filings",
      "Opposition, rectification, and cancellation actions before the IPD",
      "Copyright and industrial design registration and protection",
      "Patent searching, Drafting, and national stage patent prosecution",
      "Domain name dispute resolution (INDRP/UDRP arbitrations)",
      "IP Assignment, Technology Licensing deeds, and vendor risk audits"
    ]
  },
  {
    num: "06",
    name: "Contracts & Agreements",
    desc: "Bespoke transaction drafting, reviewing, and tactical negotiation—protecting long-term interests in operational commerce.",
    list: [
      "Founders, Shareholders (SHA) & Share Subscription Agreements",
      "Employment contracts, executive ESOP structures, and NDAs",
      "Master Services Agreements (MSA), SOW, and SLA policies",
      "Distribution, franchise, agency, and product licensing clauses",
      "Commercial lease, leave & license, sale deeds & conveyance deeds",
      "Loan agreements, hypothecation, and multi-creditor security deeds",
      "Joint Venture (JV) papers, term sheets, cross-border MoUs"
    ]
  },
  {
    num: "07",
    name: "Corporate Policies — Internal",
    desc: "Calibrating the internal administrative framework to protect people, manage liabilities, and guarantee strict regulatory compliance.",
    list: [
      "POSH Policy drafting and Internal Committee (IC) constitution",
      "Employee Handbook, Code of Conduct, and internal HR guidelines",
      "Anti-Bribery & Anti-Corruption (ABAC) procedural policies",
      "Whistleblower and secure Vigil Mechanism processes",
      "IT Administration, Cyber Hygiene, BYOD, & Remote Working rules",
      "Insider Trading prevention guidelines & Related Party Transactions list",
      "CSR Policy setup and Risk Management institutional designs"
    ]
  },
  {
    num: "08",
    name: "Corporate Policies — External",
    desc: "Drafting user and audience-facing policies to satisfy legislative standards while building sturdy operational defense points.",
    list: [
      "Privacy Policy calibration (strictly compliant with DPDP Act 2023)",
      "External Terms of Service (ToS) / Terms of Use agreements",
      "Cookie configuration Policies and modern consent banner legal text",
      "Explicit Refunds, service Cancellations & Shipping Policies",
      "Acceptable Use policies & online Community moderation guidelines",
      "Specific statutory Disclaimers & limitation of liability clauses",
      "E-commerce seller codes, platform rules, & multi-party guidelines"
    ]
  },
  {
    num: "09",
    name: "Litigation & Dispute Resolution",
    desc: "Active procedural representation across Indian courts and regulatory tribunals during corporate disputes.",
    list: [
      "Delhi High Court & Supreme Court of India counsel appearances",
      "Writ petitions filed under Articles 226 and 32 of the Constitution",
      "Commercial suits, injunctions, & Section 138 Negotiable Instruments",
      "Arbitration tribunals—domestic, institutional, and ad-hoc cases",
      "Consumer disputes (District, State Commissions, CCPA alerts)",
      "NCLT / NCLAT appearances under Insolvency & Bankruptcy (IBC)",
      "Cyber crime prosecution, white-collar crimes & economic offenses"
    ]
  },
  {
    num: "10",
    name: "Compliance & Secretarial",
    desc: "Ongoing statutory upkeep, board governance records, and calendar maintenance keeping an entity in flawless regulatory standing.",
    list: [
      "ROC / MCA annual and event-based filings (AOC-4, MGT-7, DIR-3)",
      "Board meetings, committee papers, AGM & EGM compliance",
      "Statutory Registers updating, minutes documentation, & board resolutions",
      "Secretarial audits, compliance certifications & legal reports",
      "FEMA / RBI transactions reporting (FC-GPR, FC-TRS, ODI filings)",
      "SEBI listing regulations and continuous disclosure compliance",
      "Competition Commission of India, FCRA, & PMLA compliance advisory"
    ]
  },
  {
    num: "11",
    name: "Data Protection & DPDP",
    desc: "Preparing Indian enterprises for compliance under the Digital Personal Data Protection Act, 2023 and the current Rules.",
    list: [
      "DPDP compliance gap analysis, enterprise audits & roadmap designs",
      "Secure consent managers and user-notice architecture",
      "Data Protection Officer (DPO) advisory & compliance reports",
      "Secure data breach detection, mitigation, & notification protocols",
      "Data Protection Impact Assessments (DPIA) for high-risk processes",
      "Cross-border transfer safeguards & Significant Data Fiduciary duties",
      "Internal personnel training, DPDP audits, & mock regulatory inspections"
    ]
  },
  {
    num: "12",
    name: "M&A, Investment & Restructuring",
    desc: "Guiding clients through corporate actions, equity investments, due diligence trails, and restructuring schemes.",
    list: [
      "Rigorous legal due diligence audits (for buyers and target sellers)",
      "Bespoke transaction sheets, SPA, SSA, SHA, & Business Transfer (BTA)",
      "Seed, angel, venture capital Series A/B/C investment cycles",
      "SAFE notes, CCDs, CCPS convertible instruments structuring",
      "Mergers, demergers, and slump sale schemes under NCLT supervision",
      "FEMA and FDI structuring, compliance checklists, & reporting",
      "Corporate restructuring schemes and voluntary business liquidations"
    ]
  }
];

export const GEM_SPOTLIGHT_ITEMS: GeMSpotlightItem[] = [
  {
    id: "bid-disq",
    title: "Bid Disqualification Challenges",
    description: "Technical, financial, brand restrictions, EMD submissions, MSE relaxation, and certifications are frequently used by buyers to arbitrarily eject competitive bidders. We provide instant tactical rebuttals constructed upon General Financial Rules and binding precedent.",
    citation: "§ GFR Rules 144, 149, 170(i), 173 · GeM GTC 13(m)(i)"
  },
  {
    id: "scn-resp",
    title: "Show Cause Notice Responses",
    description: "SCN responses must be designed as defensible administrative records. We compile factual force majeure documentation (such as global supply chain logs, statutory restrictions, certified statements) to dismantle allegations before suspension decisions are finalized.",
    citation: "§ GeM IMP Clause 6, 7 & 8 · Proportionality doctrine"
  },
  {
    id: "inc-mgmt",
    title: "Incident Management & Moratoriums",
    description: "Challenging Severe Deviation penalties. We contest the arbitrary implementation of moratoriums, ensuring compliance with the statutory 60-day ceiling and demanding exclusion of resolved incidents from rolling tallies.",
    citation: "§ GeM IMP Clause 3.4.3.2 · Clause 10(ii)"
  },
  {
    id: "pers-hearing",
    title: "Personal Hearing Entitlement",
    description: "The Delhi High Court has firmly established that the right to natural justice guarantees bidders a personal hearing before any adverse decision or blacklist is finalized. We invoke this right through strategic portal escalations and writ interventions.",
    citation: "§ W.P.(C)-IPD 9/2024 (Delhi HC, Aug 2024)"
  },
  {
    id: "min-escalation",
    title: "Ministry-Level Grievance Escalation",
    description: "When buyers act in bad faith or portal algorithms trigger systematic blocks, we escalate the matter via targeted representations to parent Ministry holding secretaries, PMO Grievances, and regulators.",
    citation: "§ DPIIT / MeitY / Ministry of MSME / GeM Board"
  },
  {
    id: "writ-jurisdiction",
    title: "Writ Jurisdiction & Court Directives",
    description: "Where administrative remedies are exhausted, we approach the Hon'ble Delhi High Court under Article 226, seeking immediate stays on suspensions and directing buyers to maintain the status quo under Articles 14 and 19(1)(g).",
    citation: "§ Article 226 of Constitution · Ramana Dayaram Shetty Doctrine"
  }
];

export const RECENT_MATTERS: RecentMatter[] = [
  {
    num: "№ 01",
    title: "In re: 90-day Temporary Moratorium — Central Technical University, Madhya Pradesh · contract for computing equipment",
    category: "GeM IMP Cl. 3.4.3.2",
    status: "Pending · Mutual closure sought"
  },
  {
    num: "№ 02",
    title: "In re: Show Cause Notice — Central Government Technical Institution, Delhi NCR · purchase order for office computing equipment",
    category: "GeM Incident Mgmt.",
    status: "Active · In-person hearing requested"
  },
  {
    num: "№ 03",
    title: "In re: Bid Disqualification — West Central Railway · alleged EMD non-submission and ATC acceptance objections",
    category: "GFR 170(i) · GTC 13(m)(i)",
    status: "Representation filed"
  },
  {
    num: "№ 04",
    title: "In re: Negative Net Worth Disqualification — Public Sector Bank · MSE Relaxation set to 'No'",
    category: "MSME Policy Circular",
    status: "Representation filed"
  },
  {
    num: "№ 05",
    title: "In re: Technical Specification Mismatch — College, Kerala · three schedules contested with parameter-wise compliance tables",
    category: "GeM STC Cl. 1, 3, 4",
    status: "Representation filed"
  },
  {
    num: "№ 06",
    title: "In re: Brand-OEM Restriction — Central Government Department · IBM/HP/Dell-only condition challenged",
    category: "CEO Circular 22/2024",
    status: "Closed favourably"
  }
];

export const INSIGHTS: Insight[] = [
  {
    slug: "gem-clause-moratorium",
    category: "GeM Practice",
    date: "May 2026",
    title: "Reading Clause 3.4.3.2 — the case for a 60-day moratorium ceiling on severe deviations",
    summary: "How the GeM Incident Management Policy protects small contractors by capping moratorium lengths, and why reversed or settled incidents cannot feed the 180-day rolling tally.",
    length: "8 min read",
    content: [
      {
        heading: "Contextualizing the Policy Intent",
        body: [
          "The Government e-Marketplace (GeM) Incident Management Policy (IMP) regulates vendor conduct by instituting graded penal mechanisms. However, practical implementation by procuring authorities has increasingly leaned toward indiscriminate moratoriums without adherence to statutory proportionality.",
          "Clause 3.4.3.2 represents a vital safeguard, designed explicitly to cap the period of 'Severe Deviations' to a ceiling of 60 days in certain operational contexts."
        ],
        callout: "The Office Memorandum dated September 2023 clarifies that incident tallies must not calculate cumulatively if an earlier incident was formally rescinded or mutually closed."
      },
      {
        heading: "The 180-Day Rolling Tally Error",
        body: [
          "A recurring administrative error by the portal's system logic is the aggregation of settled disputes into the 180-day historical tally.",
          "When an entity files an appeal and the nodal officer resolves the incident 'favourably', the underlying infraction is substantively wiped out. However, if the algorithm tracks it purely as an 'actioned' item, the compounding effect unfairly triggers a longer suspension period on the next procedural deviation (escalating from 30 to 60 days automatically)."
        ]
      },
      {
        heading: "Structuring the Writ Defence",
        body: [
          "Constitutional courts, particularly the Delhi High Court, have recognized this automated anomaly. A successful Article 226 challenge rests on pleading arbitrary classification.",
          "Counsel must direct the Court's attention to the specific IMP Annexure clarifying that 'penal consequence must bear nexus to the survived allegations, not mere initiated incidents.'"
        ]
      }
    ]
  },
  {
    slug: "dpdp-phase-two",
    category: "Data Protection",
    date: "April 2026",
    title: "What changes on 14 November 2026 — Phase II of the DPDP Rules and what businesses should prepare",
    summary: "A practical schedule for the second phase of the Digital Personal Data Protection (DPDP) Rules, focusing on notice frameworks, consent records, and secure breach reporting workflows.",
    length: "11 min read",
    content: [
      {
        heading: "The Phase II Transition",
        body: [
          "Following the initial rollout of the Digital Personal Data Protection Act, 2023, the government structured compliance in tranches to prevent corporate gridlock.",
          "Phase II, effective November 14, 2026, activates the strict enforcement mechanisms surrounding affirmative consent architecture and Verifiable Parental Consent (VPC)."
        ],
        callout: "Under Section 33, failure to deploy an authorized Consent Manager framework during the Phase II transition carries a penalty threshold scaling up to INR 200 Crore."
      },
      {
        heading: "The Consent Manager Architecture",
        body: [
          "A significant shift is the transition from localized checkbox consent to DPIA-authorized 'Consent Managers'. Enterprise platforms handling more than 50,000 distinct data principals must integrate API-driven gateways that allow users to withdraw consent holistically.",
          "Data Fiduciaries can no longer rely on 'implied continued consent' under old Privacy Policies. Existing databases must be scrubbed or subjected to renewed Phase II Notice requirements."
        ]
      },
      {
        heading: "Board-Level Liability and Breach Protocols",
        body: [
          "The Data Protection Board (DPB) rules stipulate a mandatory 72-hour window for breach reporting. Unlike previous IT Act guidelines, the DPDP mandate does not recognize 'internal containment' as an exception to reporting.",
          "Corporate counsel are advised to rehearse mock data-leak simulations with their CISOs to establish clear chain-of-command reporting structures before the deadline."
        ]
      }
    ]
  },
  {
    slug: "mse-relaxation-prerogative",
    category: "MSME Rights",
    date: "March 2026",
    title: "'MSE Relaxation: No' is not a buyer's option—asserting mandatory statutory exemptions",
    summary: "Why marking 'MSE Relaxation: No' on government bids blatantly violates the MSME Policy Circular of 2016 and corresponding MoF Office Memorandums.",
    length: "7 min read",
    content: [
      {
        heading: "The Statutory Basis for Relaxation",
        body: [
          "Frequently, central and state procuring authorities publish high-value tenders on GeM or CPPP with a restrictive clause stipulating that 'MSE Exemption for Experience or Turnover' is 'Not Applicable'.",
          "This administrative shortcut violates the core mandate of the Public Procurement Policy for Micro and Small Enterprises (MSEs) Order, 2012 (as amended in 2018). The exemption relies on a statutory directive, not commercial buyer discretion."
        ],
        callout: "The Department of Expenditure (DoE) OM strictly limits the denial of MSE turnover/experience relaxations to highly specialized procurements involving national security or niche health machinery. Standard IT, manpower, and stationery procurements cannot be shielded."
      },
      {
        heading: "Challenging the Arbitrary Clause",
        body: [
          "When faced with a tender document that illegally curtails MSE rights, bidders must act proactively, well before the bid submission deadline.",
          "A formal representation invoking the MSME Ministry Policy Circular of 2016 must be served upon the tender issuing authority. If the authority fails to issue a corrigendum, the bidder secures locus standi to approach the High Court."
        ]
      },
      {
        heading: "A Strategic Legal Imperative",
        body: [
          "Allowing these clauses to pass unchallenged inadvertently establishes a new, illegal industry norm in specific departmental divisions.",
          "Our firm routinely initiates pre-bid litigation directing ministries to harmonize their tender conditions with overarching parliamentary intent. MSMEs hold a vested right to participate—and that right is judicially enforceable."
        ]
      }
    ]
  }
];
