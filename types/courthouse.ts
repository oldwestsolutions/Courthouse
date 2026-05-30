export type UrgencyLevel = "LOW" | "MEDIUM" | "HIGH" | "EMERGENCY";

export type PracticeArea =
  | "Contract Dispute"
  | "Family Law"
  | "Employment Law"
  | "Real Estate"
  | "Criminal Defense"
  | "Civil Litigation"
  | "Immigration"
  | "Intellectual Property"
  | "Estate Planning";

export interface NavItem {
  label: string;
  href: string;
}

export interface Case {
  id: string;
  title: string;
  category: string;
  categoryShort: string;
  city: string;
  state: string;
  urgency: UrgencyLevel;
  description: string;
  submitted: string;
  documentCount: number;
  estimatedValue: string;
}

export interface Attorney {
  id: string;
  name: string;
  specialty: string;
  jurisdiction: string;
  matchScore: number;
}

export interface ProcessStep {
  number: string;
  name: string;
  body: string;
  features: string[];
}

export interface FeatureCard {
  id: string;
  icon: "list" | "pin" | "dial" | "shield";
  heading: string;
  body: string;
  stat: string;
  descriptor: string;
}

export interface AttorneyFeature {
  number: string;
  title: string;
  description: string;
}

export interface AttorneyStat {
  value: string;
  label: string;
}

export interface FooterColumn {
  heading: string;
  links: string[];
}

export interface CaseFeedFilter {
  label: string;
  value: string;
}
