import type {
  ItFooterColumn,
  ItNavItem,
  ItProcessStep,
  KnowledgeArticle,
  SelfServiceAction,
  SlaTier,
  SupportTicket,
} from "@/types/courthouse-it";
import { LEGAL_URL } from "@/lib/domains";

export const itNavItems: ItNavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Knowledge Base", href: "#knowledge-base" },
  { label: "Active Tickets", href: "#ticket-queue" },
  { label: "Self-Service", href: "#self-service" },
];

export const ticketCategories: string[] = [
  "Hardware",
  "Software",
  "Access & Permissions",
  "Network & VPN",
  "Email & Calendar",
  "Security",
  "Application Support",
  "Other",
];

export const departments: string[] = [
  "Legal Operations",
  "Finance",
  "Human Resources",
  "Engineering",
  "Executive",
  "Marketing",
  "Client Services",
  "Facilities",
];

export const priorityStops = ["Low", "Medium", "High", "Critical"] as const;

export const itHeroContent = {
  eyebrow: "ENTERPRISE IT SERVICE MANAGEMENT",
  headlineLineOne: "Structured IT support.",
  headlineItalic: "Precision-routed",
  headlineLineThree: "ticket resolution.",
  subheadline:
    "Courthouse IT transforms support requests into classified, priority-scored service tickets — routed to the right engineers based on category, urgency, and documented SLA commitments. No email chains. No ambiguity. Structured resolution.",
  primaryCta: "Submit a Support Ticket",
  secondaryCta: "Browse Knowledge Base",
  trustSignals: [
    "24/7 Critical Incident Response",
    "SLA-Backed Resolution Times",
    "Enterprise-Grade Security",
  ],
};

export const itHowItWorksContent = {
  label: "THE IT SERVICE PROTOCOL",
  heading: "How Support Works",
  subheading:
    "Every ticket submitted through Courthouse IT passes through a three-stage service pipeline before reaching engineer attention. This is not a help desk inbox. This is structured IT service management.",
};

export const itProcessSteps: ItProcessStep[] = [
  {
    number: "01",
    name: "Ticket Intake",
    body: "Employees submit support requests through a guided intake flow that eliminates ambiguity. Every field feeds the classification and routing engine.",
    features: [
      "Guided category selection",
      "Priority scoring with SLA mapping",
      "Attachment and screenshot upload",
    ],
  },
  {
    number: "02",
    name: "Intelligent Triage",
    body: "The system classifies the issue, assigns priority weight, maps SLA commitments, and routes to the appropriate support tier and engineer queue.",
    features: [
      "Auto-categorization engine",
      "SLA tier assignment",
      "Engineer queue routing",
    ],
  },
  {
    number: "03",
    name: "Resolution & Closure",
    body: "Assigned engineers work the ticket with full context, document resolution steps, and close with satisfaction confirmation. Every action is auditable.",
    features: [
      "Real-time status tracking",
      "Resolution documentation",
      "Post-close satisfaction survey",
    ],
  },
];

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "kb-001",
    title: "Reset Your Password via Self-Service Portal",
    category: "Access & Permissions",
    summary:
      "Step-by-step guide to resetting your Courthouse network password without contacting IT. Includes MFA re-enrollment instructions.",
    readTime: "3 min",
    views: 2847,
  },
  {
    id: "kb-002",
    title: "Connect to Courthouse VPN (GlobalProtect)",
    category: "Network & VPN",
    summary:
      "Install and configure GlobalProtect VPN on Windows and macOS for secure remote access to internal systems and legal document repositories.",
    readTime: "5 min",
    views: 1923,
  },
  {
    id: "kb-003",
    title: "Request New Software Installation",
    category: "Software",
    summary:
      "How to submit a software request through the IT portal, including approved software catalog and exception request process.",
    readTime: "4 min",
    views: 1456,
  },
  {
    id: "kb-004",
    title: "Configure Outlook for Courthouse Email",
    category: "Email & Calendar",
    summary:
      "Set up Microsoft 365 email on desktop Outlook, mobile devices, and web. Includes shared mailbox and delegate access configuration.",
    readTime: "6 min",
    views: 1102,
  },
  {
    id: "kb-005",
    title: "Report a Security Incident or Phishing Email",
    category: "Security",
    summary:
      "Immediate steps for reporting suspected phishing, malware, or unauthorized access. Includes the emergency escalation path for critical incidents.",
    readTime: "2 min",
    views: 987,
  },
  {
    id: "kb-006",
    title: "New Employee IT Onboarding Checklist",
    category: "Access & Permissions",
    summary:
      "Complete checklist for managers and new hires covering account provisioning, device setup, application access, and security training requirements.",
    readTime: "8 min",
    views: 743,
  },
];

export const ticketQueueContent = {
  label: "LIVE SERVICE DESK FEED",
  heading: "Active Support Tickets",
  subheading: "Updated continuously as new tickets are triaged and assigned.",
  viewAll: "View All Open Tickets",
};

export const ticketFilters = [
  { label: "All Tickets", value: "all" },
  { label: "Hardware", value: "Hardware" },
  { label: "Software", value: "Software" },
  { label: "Access", value: "Access" },
  { label: "Network", value: "Network" },
  { label: "Security", value: "Security" },
  { label: "Email", value: "Email" },
];

export const supportTickets: SupportTicket[] = [
  {
    id: "tkt-001",
    ticketNumber: "INC-2025-0847",
    title: "Laptop Not Connecting to Docking Station",
    category: "Hardware",
    categoryShort: "Hardware",
    requester: "Sarah M.",
    department: "Legal Operations",
    priority: "HIGH",
    status: "IN PROGRESS",
    description:
      "Dell Latitude 5540 fails to detect dual-monitor setup when connected to WD19TB dock. External displays remain blank after Windows 11 update KB5034763.",
    submitted: "32 minutes ago",
    assignee: "J. Martinez",
    slaRemaining: "2h 28m",
  },
  {
    id: "tkt-002",
    ticketNumber: "INC-2025-0846",
    title: "Salesforce Access Request — New Associate",
    category: "Access & Permissions",
    categoryShort: "Access",
    requester: "David K.",
    department: "Client Services",
    priority: "MEDIUM",
    status: "NEW",
    description:
      "New associate starting Monday requires Salesforce CRM access with read-only client matter visibility and standard reporting permissions.",
    submitted: "1 hour ago",
    assignee: "Unassigned",
    slaRemaining: "7h 00m",
  },
  {
    id: "tkt-003",
    ticketNumber: "INC-2025-0845",
    title: "VPN Connection Drops Every 15 Minutes",
    category: "Network & VPN",
    categoryShort: "Network",
    requester: "Rachel T.",
    department: "Finance",
    priority: "HIGH",
    status: "IN PROGRESS",
    description:
      "GlobalProtect VPN disconnects consistently every 15 minutes on home network. Issue began after ISP router firmware update. Affects remote court filing access.",
    submitted: "2 hours ago",
    assignee: "A. Chen",
    slaRemaining: "1h 12m",
  },
  {
    id: "tkt-004",
    ticketNumber: "INC-2025-0844",
    title: "Adobe Acrobat Pro License Activation Failed",
    category: "Software",
    categoryShort: "Software",
    requester: "Michael B.",
    department: "Legal Operations",
    priority: "MEDIUM",
    status: "PENDING",
    description:
      "Adobe Acrobat Pro displays license activation error after machine reimage. User needs PDF redaction capability for active litigation matter.",
    submitted: "3 hours ago",
    assignee: "K. Williams",
    slaRemaining: "5h 45m",
  },
  {
    id: "tkt-005",
    ticketNumber: "INC-2025-0843",
    title: "Suspected Phishing Email — Urgent Wire Transfer Request",
    category: "Security",
    categoryShort: "Security",
    requester: "Jennifer L.",
    department: "Executive",
    priority: "CRITICAL",
    status: "IN PROGRESS",
    description:
      "Executive assistant received spoofed email impersonating managing partner requesting urgent wire transfer. Email forwarded for forensic analysis. No credentials compromised.",
    submitted: "45 minutes ago",
    assignee: "Security Team",
    slaRemaining: "15m",
  },
  {
    id: "tkt-006",
    ticketNumber: "INC-2025-0842",
    title: "Outlook Calendar Not Syncing on iPhone",
    category: "Email & Calendar",
    categoryShort: "Email",
    requester: "Thomas W.",
    department: "Human Resources",
    priority: "LOW",
    status: "NEW",
    description:
      "Microsoft 365 calendar events not appearing on iPhone 15 after iOS 18.2 update. Mail syncs correctly. Affects scheduling for interview panels.",
    submitted: "5 hours ago",
    assignee: "Unassigned",
    slaRemaining: "19h 00m",
  },
  {
    id: "tkt-007",
    ticketNumber: "INC-2025-0841",
    title: "Printer Jam on 4th Floor — Canon iR-ADV C5535",
    category: "Hardware",
    categoryShort: "Hardware",
    requester: "Office Admin",
    department: "Facilities",
    priority: "LOW",
    status: "IN PROGRESS",
    description:
      "Shared Canon multifunction printer on 4th floor reporting persistent paper jam error. Affects 40+ users in litigation support wing.",
    submitted: "6 hours ago",
    assignee: "J. Martinez",
    slaRemaining: "18h 30m",
  },
  {
    id: "tkt-008",
    ticketNumber: "INC-2025-0840",
    title: "DocuSign Integration Timeout in Case Management",
    category: "Application Support",
    categoryShort: "App Support",
    requester: "Amanda R.",
    department: "Legal Operations",
    priority: "HIGH",
    status: "IN PROGRESS",
    description:
      "DocuSign API calls timing out when initiating signature workflows from the internal case management platform. Affects 12 pending client engagements.",
    submitted: "4 hours ago",
    assignee: "DevOps Team",
    slaRemaining: "3h 55m",
  },
  {
    id: "tkt-009",
    ticketNumber: "INC-2025-0839",
    title: "Shared Drive Access — Matter Folder Permissions",
    category: "Access & Permissions",
    categoryShort: "Access",
    requester: "Chris P.",
    department: "Engineering",
    priority: "MEDIUM",
    status: "RESOLVED",
    description:
      "Paralegal requires read/write access to matter folder CH-2025-0147 on the secure shared drive. Manager approval attached.",
    submitted: "1 day ago",
    assignee: "A. Chen",
    slaRemaining: "Closed",
  },
];

export const selfServiceActions: SelfServiceAction[] = [
  {
    id: "ss-001",
    icon: "password",
    title: "Reset Password",
    description:
      "Self-service password reset for network, email, and application accounts.",
    action: "Launch Reset Portal",
  },
  {
    id: "ss-002",
    icon: "vpn",
    title: "VPN Setup Guide",
    description:
      "Download GlobalProtect and configure secure remote access in minutes.",
    action: "View Setup Guide",
  },
  {
    id: "ss-003",
    icon: "software",
    title: "Request Software",
    description:
      "Browse the approved software catalog or submit an exception request.",
    action: "Browse Catalog",
  },
  {
    id: "ss-004",
    icon: "access",
    title: "Access Request",
    description:
      "Request access to applications, shared drives, or distribution lists.",
    action: "Submit Request",
  },
  {
    id: "ss-005",
    icon: "device",
    title: "Report Lost Device",
    description:
      "Immediately lock and wipe a lost or stolen company device remotely.",
    action: "Report Device",
  },
  {
    id: "ss-006",
    icon: "status",
    title: "Check Ticket Status",
    description:
      "Look up an existing ticket by number and view real-time progress.",
    action: "Track Ticket",
  },
];

export const slaTiers: SlaTier[] = [
  { priority: "CRITICAL", responseTime: "15 min", resolutionTime: "4 hours" },
  { priority: "HIGH", responseTime: "1 hour", resolutionTime: "8 hours" },
  { priority: "MEDIUM", responseTime: "4 hours", resolutionTime: "24 hours" },
  { priority: "LOW", responseTime: "8 hours", resolutionTime: "72 hours" },
];

export const itStats = [
  { value: "98.7%", label: "SLA Compliance Rate" },
  { value: "12m", label: "Avg. First Response Time" },
  { value: "4.8/5", label: "Employee Satisfaction" },
];

export const itComplianceItems: string[] = [
  "SOC 2 Type II Compliant",
  "All Tickets Encrypted at Rest",
  "Audit Trail on Every Action",
  "Critical Incidents Escalated Automatically",
];

export const itFooterBrand = {
  description:
    "Courthouse IT is the internal service management portal for Courthouse Legal Technologies. Submit structured support tickets, access self-service resources, and track resolution in real time.",
  legalLink: LEGAL_URL,
};

export const itFooterColumns: ItFooterColumn[] = [
  {
    heading: "Support",
    links: [
      "Submit a Ticket",
      "Track Ticket Status",
      "Knowledge Base",
      "Self-Service Portal",
      "Report Security Incident",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Approved Software Catalog",
      "VPN Setup Guide",
      "New Hire IT Checklist",
      "System Status Page",
      "Scheduled Maintenance",
    ],
  },
  {
    heading: "Policies",
    links: [
      "Acceptable Use Policy",
      "Data Security Policy",
      "Remote Access Policy",
      "Incident Response Plan",
    ],
  },
];

export const itFooterBottom = {
  left: "© 2025 Courthouse Legal Technologies, Inc. IT Services Division.",
  right: "courthouse.it.com — Enterprise IT Service Management",
};

export const ticketProcessingMessages = [
  "Creating your support ticket",
  "Classifying category and priority level",
  "Routing to assigned engineer queue",
];

export const ticketSubmissionResult = {
  ticketNumber: "INC-2025-0848",
  assignee: "Tier 1 Support Queue",
  estimatedResponse: "Within 1 hour",
  slaTier: "HIGH",
};
