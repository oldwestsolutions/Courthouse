import type {
  Attorney,
  AttorneyFeature,
  AttorneyStat,
  Case,
  CaseFeedFilter,
  FeatureCard,
  FooterColumn,
  NavItem,
  ProcessStep,
} from "@/types/courthouse";
import { IT_URL } from "@/lib/domains";

export const navItems: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Attorneys", href: "#for-attorneys" },
  { label: "Browse Attorneys", href: "#case-feed" },
];

export const legalCategories: string[] = [
  "Contract Dispute",
  "Family Law",
  "Employment Law",
  "Real Estate",
  "Criminal Defense",
  "Civil Litigation",
  "Immigration",
  "Intellectual Property",
  "Estate Planning",
];

export const usStates: string[] = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export const urgencyStops = ["Low", "Medium", "High", "Emergency"] as const;

export const heroContent = {
  eyebrow: "STRUCTURED LEGAL INTAKE SYSTEM",
  headlineLineOne: "Structured legal intake.",
  headlineItalic: "Precision-matched",
  headlineLineThree: "attorney access.",
  subheadline:
    "Courthouse transforms legal uncertainty into structured case intelligence, routed to qualified attorneys based on jurisdiction, specialization, and documented urgency. No ambiguity. No directories. Precision routing.",
  primaryCta: "Submit a Legal Issue",
  secondaryCta: "Browse Attorneys",
  trustSignals: [
    "Verified Attorneys Only",
    "Jurisdiction-Based Routing",
    "No Attorney-Client Relationship Formed",
  ],
};

export const howItWorksContent = {
  label: "THE COURTHOUSE PROTOCOL",
  heading: "How the System Works",
  subheading:
    "Every case submitted through Courthouse passes through a three-stage intelligence pipeline before reaching attorney attention. This is not a directory. This is structured legal routing.",
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Structured Intake",
    body: "Clients submit legal issues through a guided intake flow that eliminates ambiguity. Every field is purposeful. Every answer feeds the classification engine.",
    features: [
      "Guided category selection",
      "Plain-language description structuring",
      "Evidence and documentation upload",
    ],
  },
  {
    number: "02",
    name: "Case Intelligence",
    body: "The system classifies jurisdiction, assigns urgency weight, and identifies the applicable legal domains. The case becomes a structured data object, not a free-form message.",
    features: [
      "Jurisdiction auto-classification",
      "Urgency scoring algorithm",
      "Practice area tagging engine",
    ],
  },
  {
    number: "03",
    name: "Attorney Matching",
    body: "Verified attorneys receive ranked, relevance-weighted case opportunities matching their declared practice areas and jurisdictions. They choose engagement.",
    features: [
      "Relevance-ranked attorney feed",
      "Jurisdiction and specialty filtering",
      "Direct consultation booking",
    ],
  },
];

export const whyCourthouseContent = {
  label: "THE INFRASTRUCTURE ADVANTAGE",
  heading: "Why the Industry is Moving to Structured Intake",
  subheading:
    "The current legal marketplace is built on ambiguity, mismatched expectations, and wasted attorney time. Courthouse is built on precision.",
};

export const featureCards: FeatureCard[] = [
  {
    id: "intake",
    icon: "list",
    heading: "Structured Intake Protocol",
    body: "Removes ambiguity from client case descriptions before they ever reach an attorney. Every submission is classified, tagged, and scored before routing.",
    stat: "94%",
    descriptor: "reduction in incomplete case submissions",
  },
  {
    id: "jurisdiction",
    icon: "pin",
    heading: "Jurisdiction Precision Engine",
    body: "Attorneys only see cases within their licensed jurisdictions. Clients are matched only to attorneys authorized to practice in their state.",
    stat: "47",
    descriptor: "US jurisdictions supported at launch",
  },
  {
    id: "attention",
    icon: "dial",
    heading: "Attention Allocation System",
    body: "Attorneys control their pipeline with practice area filters, urgency thresholds, and daily intake limits. No more inbox chaos from unqualified leads.",
    stat: "3.2x",
    descriptor: "higher lead-to-consultation conversion than directory listings",
  },
  {
    id: "verified",
    icon: "shield",
    heading: "Verified Legal Ecosystem",
    body: "Every attorney on Courthouse has passed bar verification, jurisdiction licensing confirmation, and malpractice disclosure review.",
    stat: "100%",
    descriptor: "bar-verified attorneys on the platform",
  },
];

export const caseFeedContent = {
  label: "LIVE CASE INTELLIGENCE FEED",
  heading: "Active Case Opportunities",
  subheading: "Updated continuously as new cases are structured and classified.",
  viewAll: "View All Active Cases",
};

export const caseFeedFilters: CaseFeedFilter[] = [
  { label: "All Cases", value: "all" },
  { label: "Contract", value: "Contract" },
  { label: "Family Law", value: "Family Law" },
  { label: "Real Estate", value: "Real Estate" },
  { label: "Criminal", value: "Criminal" },
  { label: "Employment", value: "Employment" },
  { label: "Civil", value: "Civil" },
];

export const cases: Case[] = [
  {
    id: "case-001",
    title: "Commercial Lease Dispute",
    category: "Contract",
    categoryShort: "Contract",
    city: "Dallas",
    state: "TX",
    urgency: "HIGH",
    description:
      "Tenant alleges breach of commercial lease terms following landlord's unilateral modification of common-area maintenance charges across a multi-tenant retail property.",
    submitted: "2 hours ago",
    documentCount: 4,
    estimatedValue: "$180,000 – $240,000",
  },
  {
    id: "case-002",
    title: "Custody Modification Proceeding",
    category: "Family Law",
    categoryShort: "Family Law",
    city: "Austin",
    state: "TX",
    urgency: "MEDIUM",
    description:
      "Petitioner seeks modification of an existing custody order citing material change in circumstances and proposed relocation of the primary residence out of county.",
    submitted: "6 hours ago",
    documentCount: 8,
    estimatedValue: "N/A",
  },
  {
    id: "case-003",
    title: "Wrongful Termination Claim",
    category: "Employment",
    categoryShort: "Employment",
    city: "Houston",
    state: "TX",
    urgency: "HIGH",
    description:
      "Former senior employee alleges retaliatory termination following a documented internal complaint, with supporting performance records and correspondence.",
    submitted: "1 day ago",
    documentCount: 6,
    estimatedValue: "$90,000 – $150,000",
  },
  {
    id: "case-004",
    title: "Trademark Infringement",
    category: "Intellectual Property",
    categoryShort: "IP",
    city: "New York",
    state: "NY",
    urgency: "MEDIUM",
    description:
      "Brand owner identifies unauthorized use of a registered mark by a competing entity across digital and retail channels, seeking injunctive relief and damages.",
    submitted: "3 hours ago",
    documentCount: 12,
    estimatedValue: "$500,000+",
  },
  {
    id: "case-005",
    title: "Landlord Entry Violation",
    category: "Real Estate",
    categoryShort: "Real Estate",
    city: "San Antonio",
    state: "TX",
    urgency: "LOW",
    description:
      "Residential tenant reports repeated unauthorized entry by property management in violation of statutory notice requirements under state landlord-tenant law.",
    submitted: "2 days ago",
    documentCount: 2,
    estimatedValue: "$8,000 – $15,000",
  },
  {
    id: "case-006",
    title: "DUI Defense",
    category: "Criminal Defense",
    categoryShort: "Criminal",
    city: "Phoenix",
    state: "AZ",
    urgency: "EMERGENCY",
    description:
      "Defendant arrested on a first-offense DUI charge with an arraignment scheduled imminently, requiring immediate counsel and evidentiary review.",
    submitted: "45 minutes ago",
    documentCount: 1,
    estimatedValue: "N/A",
  },
  {
    id: "case-007",
    title: "Business Partner Dissolution",
    category: "Contract",
    categoryShort: "Contract",
    city: "Denver",
    state: "CO",
    urgency: "HIGH",
    description:
      "Co-founder seeks dissolution of a closely held partnership amid disputes over capital contributions, valuation, and the disposition of shared intellectual assets.",
    submitted: "5 hours ago",
    documentCount: 9,
    estimatedValue: "$320,000 – $500,000",
  },
  {
    id: "case-008",
    title: "H-1B Visa Denial Appeal",
    category: "Immigration",
    categoryShort: "Immigration",
    city: "Seattle",
    state: "WA",
    urgency: "MEDIUM",
    description:
      "Specialty-occupation petition denied at adjudication; petitioner seeks appellate review and refiling strategy ahead of the applicable filing window.",
    submitted: "1 day ago",
    documentCount: 14,
    estimatedValue: "N/A",
  },
  {
    id: "case-009",
    title: "Estate Probate Contest",
    category: "Estate Planning",
    categoryShort: "Estate",
    city: "Nashville",
    state: "TN",
    urgency: "LOW",
    description:
      "Beneficiary contests the validity of a recently filed will citing concerns of undue influence and questions surrounding testamentary capacity.",
    submitted: "3 days ago",
    documentCount: 7,
    estimatedValue: "$1,200,000+",
  },
];

export const forAttorneysContent = {
  label: "FOR LEGAL PROFESSIONALS",
  heading: "A structured pipeline for qualified legal opportunities",
  subheading:
    "Stop receiving unqualified leads from directories that do not understand practice area distinctions. Courthouse delivers pre-structured, jurisdiction-matched, urgency-classified case opportunities directly to attorneys who want them.",
  primaryCta: "Join as an Attorney",
  secondaryCta: "View Sample Case Feed",
};

export const attorneyStats: AttorneyStat[] = [
  { value: "2,847", label: "Active Attorneys" },
  { value: "94%", label: "Match Accuracy" },
  { value: "3.2x", label: "Conversion Rate versus directories" },
];

export const attorneyFeatures: AttorneyFeature[] = [
  {
    number: "01",
    title: "Practice Area Filtering",
    description:
      "Set precise filters for the legal categories you want. The system routes only matching case types to your feed.",
  },
  {
    number: "02",
    title: "Jurisdiction-Locked Routing",
    description:
      "You only see cases in jurisdictions where you are licensed to practice. No wasted review time.",
  },
  {
    number: "03",
    title: "Urgency Threshold Controls",
    description:
      "Set a minimum urgency level. Emergency and high-urgency cases can receive priority notification.",
  },
  {
    number: "04",
    title: "Attention Allocation Dashboard",
    description:
      "Control how much of your weekly intake capacity you allocate to each practice area.",
  },
  {
    number: "05",
    title: "Conversion Tracking",
    description:
      "Track your case views, expression of interest submissions, and consultation bookings in a clean analytics dashboard.",
  },
];

export const complianceItems: string[] = [
  "Not a Law Firm",
  "No Attorney-Client Relationship Formed By Submission",
  "All Attorneys Bar-Verified",
  "Jurisdiction-Based Routing Enforced",
];

export const footerBrand = {
  description:
    "Courthouse is a structured legal intake and attorney matching system. It does not provide legal advice and does not create attorney-client relationships.",
  itLink: IT_URL,
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      "Submit a Case",
      "Browse Attorneys",
      "How It Works",
      "Case Status",
      "Attorney Portal",
    ],
  },
  {
    heading: "Company",
    links: ["About Courthouse", "Careers", "Press", "Contact"],
  },
  {
    heading: "Legal",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Disclaimer",
      "Attorney Verification Policy",
    ],
  },
];

export const footerBottom = {
  left: "© 2025 Courthouse Legal Technologies, Inc. All rights reserved.",
  right: "courthouse.legal — Structured Legal Intake System",
};

export const intakeMatches: Attorney[] = [
  {
    id: "atty-1",
    name: "Marcus T. Whitfield",
    specialty: "Commercial Litigation",
    jurisdiction: "Dallas, TX",
    matchScore: 974,
  },
  {
    id: "atty-2",
    name: "Eleanor Vance",
    specialty: "Contract Disputes",
    jurisdiction: "Austin, TX",
    matchScore: 938,
  },
  {
    id: "atty-3",
    name: "Raymond Cho",
    specialty: "Business & Commercial",
    jurisdiction: "Houston, TX",
    matchScore: 902,
  },
];

export const intakeProcessingMessages = [
  "Structuring your case submission",
  "Classifying jurisdiction and practice area",
  "Matching to qualified attorneys",
];
