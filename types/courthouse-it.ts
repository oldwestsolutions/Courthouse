export type TicketPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type TicketStatus = "NEW" | "IN PROGRESS" | "PENDING" | "RESOLVED";

export type TicketCategory =
  | "Hardware"
  | "Software"
  | "Access & Permissions"
  | "Network & VPN"
  | "Email & Calendar"
  | "Security"
  | "Application Support"
  | "Other";

export interface ItNavItem {
  label: string;
  href: string;
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  title: string;
  category: string;
  categoryShort: string;
  requester: string;
  department: string;
  priority: TicketPriority;
  status: TicketStatus;
  description: string;
  submitted: string;
  assignee: string;
  slaRemaining: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  views: number;
}

export interface ItProcessStep {
  number: string;
  name: string;
  body: string;
  features: string[];
}

export interface SelfServiceAction {
  id: string;
  icon: "password" | "vpn" | "software" | "access" | "device" | "status";
  title: string;
  description: string;
  action: string;
}

export interface SlaTier {
  priority: TicketPriority;
  responseTime: string;
  resolutionTime: string;
}

export interface ItFooterColumn {
  heading: string;
  links: string[];
}
