import {
  Activity,
  AppWindow,
  ArchiveRestore,
  BellRing,
  CloudCog,
  FileCheck2,
  Fingerprint,
  MailCheck,
  Radar,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

export const CYBER_SECURITY_SERVICES = [
  {
    icon: ScanSearch,
    title: "Security Assessment & Risk Audit",
    description:
      "Review systems, accounts, devices and processes with a prioritised risk report and fix plan.",
  },
  {
    icon: Radar,
    title: "Vulnerability Scanning & Management",
    description:
      "Schedule scans of websites, servers and networks, then track every weakness until it is fixed.",
  },
  {
    icon: Activity,
    title: "Penetration Testing",
    description:
      "Simulate attacks on web apps and networks to find exploitable gaps under signed authorisation, delivered with certified partners.",
  },
  {
    icon: AppWindow,
    title: "Website & Application Security",
    description:
      "Set up SSL and web application firewalls, harden CMS platforms, remove malware and support blacklist recovery.",
  },
  {
    icon: MailCheck,
    title: "Email Security",
    description:
      "Set up SPF, DKIM and DMARC, phishing filtering and protection against domain spoofing.",
  },
  {
    icon: ShieldCheck,
    title: "Endpoint Protection",
    description:
      "Manage antivirus and endpoint detection for laptops and servers.",
  },
  {
    icon: CloudCog,
    title: "Cloud & Workspace Security",
    description:
      "Roll out MFA, access controls, sharing policies and admin hardening for Microsoft 365 and Google Workspace.",
  },
  {
    icon: ArchiveRestore,
    title: "Backup & Disaster Recovery",
    description:
      "Set up automated backups, test restores and prepare a written recovery plan.",
  },
  {
    icon: Fingerprint,
    title: "Security Awareness Training & Phishing Simulations",
    description:
      "Train staff and run simulated phishing tests that measure security risk.",
  },
  {
    icon: BellRing,
    title: "Managed Security Monitoring",
    description:
      "Review alerts and logs on an ongoing basis and provide monthly reporting.",
  },
  {
    icon: Activity,
    title: "Incident Response & Recovery",
    description:
      "Contain, investigate and recover after a breach or ransomware attack, delivered with certified partners.",
  },
  {
    icon: FileCheck2,
    title: "Security Policies & Compliance",
    description:
      "Develop security policies, support data protection compliance and prepare for ISO 27001 readiness.",
  },
];

export const CYBER_SECURITY_PACKAGES = [
  {
    name: "Essentials",
    audience: "Up to 10 users",
    features: [
      "MFA and account hardening",
      "Email security (SPF/DKIM/DMARC)",
      "Managed endpoint protection",
      "Monthly backup check",
      "Quarterly vulnerability scan",
      "Annual awareness session",
      "Quarterly security report",
      "Best-effort incident support",
    ],
  },
  {
    name: "Business",
    audience: "10 to 50 users",
    popular: true,
    features: [
      "Everything in Essentials, plus:",
      "Weekly backup checks with quarterly restore tests",
      "Monthly vulnerability scans",
      "Quarterly training with phishing simulations",
      "Cloud and Microsoft 365 / Google Workspace security review",
      "Core security policies",
      "Monthly security report",
      "Included incident response hours",
    ],
  },
  {
    name: "Advanced",
    audience: "50+ users or regulated sectors",
    features: [
      "Everything in Business, plus:",
      "Daily backup monitoring",
      "Continuous vulnerability scanning",
      "Monthly phishing simulations",
      "Annual penetration test",
      "Full policies and compliance programme, including ISO 27001 readiness",
      "Monthly report with executive briefing",
      "Priority incident response retainer",
    ],
  },
];

export const CYBER_SECURITY_ONE_OFFS = [
  {
    name: "Security Health Check",
    description: "A fixed-scope assessment with a clear report.",
  },
  {
    name: "Website Security & Cleanup",
    description: "Security checks and cleanup for a compromised or vulnerable website.",
  },
  {
    name: "Emergency Incident Response",
    description: "Help to contain and investigate an active security incident.",
  },
];
