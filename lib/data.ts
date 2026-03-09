// ============================================================
// Noshtek Website Data
// ============================================================

// --- Navigation ---
export const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
    mega: true,
    items: [
      {
        label: "Financial Transformation",
        href: "/solutions/financial-transformation",
        description: "SAP S/4HANA Finance, TRM, FPSL & PaPM implementations",
        icon: "💹",
      },
      {
        label: "SAP Implementation Services",
        href: "/solutions/sap-implementation",
        description: "End-to-end SAP project delivery and system integration",
        icon: "⚙️",
      },
      {
        label: "Integration & Automation",
        href: "/solutions/integration-automation",
        description: "AI-powered process automation and system connectivity",
        icon: "🔗",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    mega: true,
    items: [
      {
        label: "Utilities",
        href: "/industries/utilities",
        description: "SAP IS-U and S/4HANA Utilities for energy & water companies",
        icon: "⚡",
      },
      {
        label: "Telecom",
        href: "/industries/telecom",
        description: "SAP BRIM and FI-CA for telecoms and subscription businesses",
        icon: "📡",
      },
      {
        label: "Insurance",
        href: "/industries/insurance",
        description: "SAP FPSL, TRM & FS-CD for compliance and reporting",
        icon: "🛡️",
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Company",
    href: "/company",
    mega: true,
    items: [
      {
        label: "About Us",
        href: "/company/about",
        description: "Our story, mission, and approach",
        icon: "🏢",
      },
      {
        label: "Leadership Team",
        href: "/company/leadership",
        description: "Meet the consultants behind Noshtek",
        icon: "👥",
      },
      {
        label: "Partners",
        href: "/company/partners",
        description: "SAP partner ecosystem and affiliates",
        icon: "🤝",
      },
      {
        label: "Global Locations",
        href: "/company/about#locations",
        description: "USA, Canada, Singapore, Taiwan, India",
        icon: "🌏",
      },
      {
        label: "Careers",
        href: "/company/careers",
        description: "Join our team of SAP experts",
        icon: "🚀",
      },
    ],
  },
];

// --- Stats ---
export const stats = [
  { value: "15+", label: "Years SAP Experience", sublabel: "Since 2009" },
  { value: "40+", label: "Enterprise Clients", sublabel: "Across 3 Industries" },
  { value: "98%", label: "Client Satisfaction", sublabel: "Based on engagements" },
  { value: "5", label: "Global Offices", sublabel: "USA, Canada, SG, TW, IN" },
];

// --- Leadership Team ---
export const leadershipTeam = [
  {
    name: "David Chen",
    title: "Chief Executive Officer",
    bio: "David brings 20+ years of SAP implementation experience across Fortune 500 utilities and telecom companies. Former SAP Global Principal Consultant, he founded Noshtek to deliver boutique-quality outcomes at enterprise scale.",
    expertise: ["SAP S/4HANA Finance", "Digital Transformation Strategy", "Enterprise Architecture"],
    linkedin: "#",
    image: "/images/team/david-chen.jpg",
    initials: "DC",
  },
  {
    name: "Priya Mehta",
    title: "Chief Technology Officer",
    bio: "Priya leads Noshtek's AI integration practice, pioneering machine learning applications in financial close automation. She holds an MS in Computer Science from MIT and has filed 3 patents in ML-driven financial reconciliation.",
    expertise: ["AI/ML Financial Applications", "SAP FPSL", "System Architecture"],
    linkedin: "#",
    image: "/images/team/priya-mehta.jpg",
    initials: "PM",
  },
  {
    name: "Michael Torres",
    title: "Managing Director, Americas",
    bio: "Michael oversees client relationships and delivery excellence across North America. With 18 years in SAP BRIM implementations for Tier-1 telecoms, he has led over 25 successful go-lives.",
    expertise: ["SAP BRIM", "Revenue Management", "Program Delivery"],
    linkedin: "#",
    image: "/images/team/michael-torres.jpg",
    initials: "MT",
  },
  {
    name: "Sarah Kim",
    title: "Insurance Practice Lead",
    bio: "Sarah is Noshtek's foremost IFRS 17 implementation specialist, having led compliance programs for 8 major insurers. She is a certified SAP FPSL expert and regular speaker at industry conferences.",
    expertise: ["IFRS 17", "SAP FPSL", "Insurance Regulatory Compliance"],
    linkedin: "#",
    image: "/images/team/sarah-kim.jpg",
    initials: "SK",
  },
  {
    name: "James Okafor",
    title: "Asia-Pacific Lead",
    bio: "James manages Noshtek's Singapore and Taiwan operations, serving regional utilities and telecoms. His expertise in SAP IS-U and smart metering integration has shaped utility transformation programs across APAC.",
    expertise: ["SAP IS-U", "Smart Grid Integration", "Utility Finance"],
    linkedin: "#",
    image: "/images/team/james-okafor.jpg",
    initials: "JO",
  },
  {
    name: "Ananya Patel",
    title: "India Delivery Head",
    bio: "Ananya leads Noshtek's India delivery center, managing a team of 60+ SAP consultants. Her process excellence frameworks have reduced project timelines by 30% across Noshtek's global portfolio.",
    expertise: ["SAP Project Delivery", "Process Excellence", "Team Leadership"],
    linkedin: "#",
    image: "/images/team/ananya-patel.jpg",
    initials: "AP",
  },
];

// --- Case Studies ---
export const caseStudies = [
  {
    slug: "utilities-financial-close-automation",
    title: "45% Faster Financial Close at a North American Utility",
    industry: "Utilities",
    solution: "Financial Transformation",
    technology: ["SAP S/4HANA Finance", "ML Cash Application", "SAP TRM"],
    client: "Regional Energy Provider (Confidential)",
    challenge:
      "A 12-day manual financial close process was creating regulatory reporting delays, with $2.3M annual cost in overtime and reconciliation errors averaging 8% monthly.",
    solution_detail:
      "Noshtek deployed SAP S/4HANA Finance with a proprietary ML-powered cash application model that achieved 94% auto-match rates on incoming payments. Custom anomaly detection flagged reconciliation exceptions in real-time, reducing the error rate to under 0.3%.",
    results: [
      { metric: "45%", label: "Reduction in close cycle time" },
      { metric: "94%", label: "Auto-match rate on payments" },
      { metric: "$1.8M", label: "Annual cost savings" },
      { metric: "0.3%", label: "Reconciliation error rate" },
    ],
    quote:
      "Noshtek didn't just implement SAP — they transformed how we think about financial operations. The AI-driven close process is a genuine competitive advantage.",
    quoteAuthor: "VP Finance, Regional Energy Provider",
    tag: "Utilities",
    featured: true,
  },
  {
    slug: "telecom-brim-digital-billing",
    title: "SAP BRIM Implementation for 8M+ Subscriber Telecom",
    industry: "Telecom",
    solution: "SAP Implementation Services",
    technology: ["SAP BRIM", "FI-CA", "S/4HANA"],
    client: "Major APAC Telecommunications Provider",
    challenge:
      "Legacy billing systems were costing $4M annually in maintenance while blocking digital product launches. Complex subscription bundles and real-time usage billing could not be handled at scale.",
    solution_detail:
      "Noshtek led a phased SAP BRIM implementation covering Convergent Charging, Invoicing, and Contract Accounts Receivable. The team built a custom integration layer connecting real-time network usage data to billing engines, enabling sub-second charge rating.",
    results: [
      { metric: "8M+", label: "Subscribers migrated" },
      { metric: "99.98%", label: "Billing system uptime" },
      { metric: "60%", label: "Reduction in billing disputes" },
      { metric: "3x", label: "Faster new product launch" },
    ],
    quote:
      "The Noshtek team's depth in BRIM is unmatched. They solved integration challenges that two previous vendors couldn't crack.",
    quoteAuthor: "CIO, Major APAC Telecom",
    tag: "Telecom",
    featured: true,
  },
  {
    slug: "insurance-ifrs17-compliance",
    title: "IFRS 17 Compliance Achieved Ahead of Deadline for Global Insurer",
    industry: "Insurance",
    solution: "Financial Transformation",
    technology: ["SAP FPSL", "SAP TRM", "FS-CD"],
    client: "Global Life & P&C Insurance Group",
    challenge:
      "Facing the IFRS 17 mandatory adoption deadline with fragmented actuarial and financial systems across 14 legal entities. Manual consolidation was error-prone and the existing SAP ECC system lacked IFRS 17 measurement models.",
    solution_detail:
      "Noshtek implemented SAP Financial Products Subledger (FPSL) with full IFRS 17 measurement support (BBA, PAA, VFA approaches). A unified data model was built to ingest actuarial data from Prophet and MoSes, automating the contract boundary calculations and CSM roll-forward.",
    results: [
      { metric: "14", label: "Legal entities migrated" },
      { metric: "6 weeks", label: "Ahead of regulatory deadline" },
      { metric: "85%", label: "Reduction in manual close tasks" },
      { metric: "100%", label: "Audit readiness score" },
    ],
    quote:
      "Noshtek's IFRS 17 accelerator methodology reduced our implementation by 4 months. Sarah Kim's expertise in insurance accounting is exceptional.",
    quoteAuthor: "CFO, Global Insurance Group",
    tag: "Insurance",
    featured: true,
  },
  {
    slug: "utility-smart-metering-integration",
    title: "Smart Metering Integration for 2M AMI Devices",
    industry: "Utilities",
    solution: "Integration & Automation",
    technology: ["SAP IS-U", "S/4HANA Utilities", "IoT Integration"],
    client: "European Electricity Distribution Company",
    challenge:
      "2 million advanced metering infrastructure (AMI) devices generating 15M daily reads needed seamless integration with SAP IS-U for automated billing and demand response programs.",
    solution_detail:
      "Noshtek architected an event-driven integration platform connecting the Itron Head-End System to SAP IS-U via RESTful APIs. Custom meter data management workflows automated validation and estimation, while a machine learning model predicted consumption patterns for proactive billing.",
    results: [
      { metric: "2M", label: "AMI devices integrated" },
      { metric: "99.5%", label: "Read success rate" },
      { metric: "40%", label: "Reduction in estimated bills" },
      { metric: "Zero", label: "Data loss incidents post-launch" },
    ],
    quote:
      "Noshtek's integration expertise and deep SAP IS-U knowledge made this complex program look straightforward. Exceptional delivery.",
    quoteAuthor: "Head of IT, European Utility",
    tag: "Utilities",
    featured: false,
  },
  {
    slug: "telecom-revenue-assurance",
    title: "Revenue Assurance Program Recovers $12M for Tier-1 Carrier",
    industry: "Telecom",
    solution: "SAP Implementation Services",
    technology: ["SAP BRIM", "FI-CA", "Custom Analytics"],
    client: "North American Tier-1 Carrier",
    challenge:
      "Revenue leakage estimated at 1.2% of annual revenues ($12M+) due to gaps between network event data and billing records. Existing revenue assurance tooling lacked SAP BRIM integration.",
    solution_detail:
      "Noshtek built a revenue assurance analytics layer on top of SAP BRIM Convergent Charging that cross-reconciled network data with billing records in near-real-time. ML anomaly detection identified charging gaps within minutes of occurrence.",
    results: [
      { metric: "$12M+", label: "Revenue recovered in year one" },
      { metric: "98.7%", label: "Revenue reconciliation accuracy" },
      { metric: "4 min", label: "Average gap detection time" },
      { metric: "ROI 850%", label: "First-year return" },
    ],
    quote:
      "The revenue assurance program paid for itself in the first quarter. Noshtek's BRIM expertise enabled capabilities we couldn't get from any other partner.",
    quoteAuthor: "VP Revenue Management, Tier-1 Carrier",
    tag: "Telecom",
    featured: false,
  },
];

// --- Insights/Blog ---
export const insights = [
  {
    slug: "ai-financial-close-utilities",
    title: "How AI is Transforming the Month-End Close in Utility Finance",
    excerpt:
      "Machine learning models are achieving 90%+ auto-match rates in payment reconciliation, slashing close cycles from 12 days to under 5. Here is the Noshtek methodology.",
    author: "Priya Mehta",
    authorTitle: "Chief Technology Officer",
    date: "2026-02-15",
    readTime: "8 min read",
    category: "AI & Finance",
    industry: "Utilities",
    featured: true,
    gated: false,
    image: "/images/insights/ai-financial-close.jpg",
    tags: ["AI", "Financial Close", "SAP S/4HANA", "Utilities"],
  },
  {
    slug: "ifrs17-sap-fpsl-guide",
    title: "IFRS 17 on SAP FPSL: Measurement Models Compared",
    excerpt:
      "A technical guide to implementing BBA, PAA, and VFA measurement approaches in SAP Financial Products Subledger, based on Noshtek's experience across 14 insurer implementations.",
    author: "Sarah Kim",
    authorTitle: "Insurance Practice Lead",
    date: "2026-01-28",
    readTime: "12 min read",
    category: "Insurance",
    industry: "Insurance",
    featured: true,
    gated: false,
    image: "/images/insights/ifrs17.jpg",
    tags: ["IFRS 17", "SAP FPSL", "Insurance", "Compliance"],
  },
  {
    slug: "sap-brim-telecom-architecture",
    title: "Designing SAP BRIM for 10M+ Subscriber Scale: Architecture Decisions",
    excerpt:
      "The critical architecture choices in SAP BRIM deployments that separate scalable implementations from costly rebuilds. Lessons from 8 major telecom go-lives.",
    author: "Michael Torres",
    authorTitle: "Managing Director, Americas",
    date: "2026-01-10",
    readTime: "10 min read",
    category: "Architecture",
    industry: "Telecom",
    featured: false,
    gated: false,
    image: "/images/insights/brim-architecture.jpg",
    tags: ["SAP BRIM", "Architecture", "Telecom", "Scalability"],
  },
  {
    slug: "ai-sap-financial-transformation-whitepaper",
    title: "The AI-Augmented Finance Function: A Practical Roadmap for SAP Clients",
    excerpt:
      "Comprehensive guide covering ML applications in financial close, anomaly detection, and predictive forecasting on SAP platforms. Includes implementation methodology and ROI framework.",
    author: "David Chen",
    authorTitle: "Chief Executive Officer",
    date: "2025-12-05",
    readTime: "25 min read",
    category: "Whitepaper",
    industry: "Cross-Industry",
    featured: true,
    gated: true,
    image: "/images/insights/ai-whitepaper.jpg",
    tags: ["AI", "Whitepaper", "SAP S/4HANA", "Finance Transformation"],
  },
  {
    slug: "smart-metering-sap-isu",
    title: "Connecting 2 Million Smart Meters to SAP IS-U: Integration Patterns",
    excerpt:
      "Deep dive into the event-driven architecture patterns Noshtek used to integrate AMI head-end systems with SAP IS-U for real-time meter data management.",
    author: "James Okafor",
    authorTitle: "Asia-Pacific Lead",
    date: "2025-11-20",
    readTime: "9 min read",
    category: "Integration",
    industry: "Utilities",
    featured: false,
    gated: false,
    image: "/images/insights/smart-meter.jpg",
    tags: ["SAP IS-U", "IoT", "Integration", "Utilities"],
  },
  {
    slug: "sap-s4hana-finance-migration",
    title: "SAP ECC to S/4HANA Finance: Migration Pitfalls and How to Avoid Them",
    excerpt:
      "The top 7 failure modes in ECC-to-S/4 finance migrations — and the validation frameworks Noshtek applies to prevent them.",
    author: "Ananya Patel",
    authorTitle: "India Delivery Head",
    date: "2025-11-05",
    readTime: "11 min read",
    category: "Migration",
    industry: "Cross-Industry",
    featured: false,
    gated: false,
    image: "/images/insights/s4hana-migration.jpg",
    tags: ["S/4HANA", "Migration", "Finance", "Best Practices"],
  },
];

// --- Locations ---
export const locations = [
  {
    city: "New York",
    country: "USA",
    role: "Americas Headquarters",
    address: "One World Trade Center, New York, NY 10007",
    flag: "🇺🇸",
  },
  {
    city: "Toronto",
    country: "Canada",
    role: "Canada Office",
    address: "100 King Street West, Toronto, ON M5X 1E4",
    flag: "🇨🇦",
  },
  {
    city: "Singapore",
    country: "Singapore",
    role: "APAC Headquarters",
    address: "1 Raffles Quay, Singapore 048583",
    flag: "🇸🇬",
  },
  {
    city: "Taipei",
    country: "Taiwan",
    role: "Taiwan Office",
    address: "No. 7, Section 5, Xinyi Road, Taipei 110",
    flag: "🇹🇼",
  },
  {
    city: "Bangalore",
    country: "India",
    role: "India Delivery Center",
    address: "Prestige Meridian II, MG Road, Bangalore 560001",
    flag: "🇮🇳",
  },
];

// --- Partners ---
export const partners = [
  {
    name: "SAP",
    description: "Gold Partner",
    tier: "gold",
  },
  {
    name: "Microsoft Azure",
    description: "Cloud Partner",
    tier: "silver",
  },
  {
    name: "AWS",
    description: "Cloud Partner",
    tier: "silver",
  },
  {
    name: "Itron",
    description: "Smart Metering Alliance",
    tier: "technology",
  },
  {
    name: "Prophet",
    description: "Actuarial Systems",
    tier: "technology",
  },
];

// --- Job Openings ---
export const careers = [
  {
    title: "Senior SAP BRIM Consultant",
    location: "New York / Remote",
    type: "Full-time",
    department: "Telecom Practice",
    level: "Senior",
    description:
      "Lead BRIM implementations for Tier-1 telecom clients, covering Convergent Charging, Invoicing, and FI-CA. 5+ years SAP BRIM required.",
  },
  {
    title: "SAP S/4HANA Finance Architect",
    location: "Toronto / Remote",
    type: "Full-time",
    department: "Financial Transformation",
    level: "Principal",
    description:
      "Design financial transformation architecture for utility clients. Deep expertise in S/4HANA Central Finance, TRM, and PaPM required.",
  },
  {
    title: "SAP FPSL / IFRS 17 Specialist",
    location: "Singapore / Remote",
    type: "Full-time",
    department: "Insurance Practice",
    level: "Senior",
    description:
      "Implement IFRS 17 measurement models in SAP FPSL for insurance clients across APAC. Actuarial data experience a strong plus.",
  },
  {
    title: "SAP Integration Developer",
    location: "Bangalore",
    type: "Full-time",
    department: "Integration & Automation",
    level: "Mid-Senior",
    description:
      "Build integrations between SAP systems and external platforms using CPI, RFC, and REST APIs. Experience with SAP BTP preferred.",
  },
  {
    title: "AI/ML Engineer (SAP Finance)",
    location: "New York / Remote",
    type: "Full-time",
    department: "Innovation Lab",
    level: "Senior",
    description:
      "Apply machine learning to SAP Finance use cases: cash application auto-matching, anomaly detection, and predictive close management. Python + SAP experience required.",
  },
];

// Industry data
export const industries = {
  utilities: {
    name: "Utilities",
    tagline: "AI-Powered Finance for the Energy Transition",
    description:
      "As utilities navigate deregulation, smart grid investments, and the energy transition, Noshtek delivers the SAP financial infrastructure to manage complexity — from AMI billing to regulatory compliance — with unmatched precision.",
    hero_stats: [
      { value: "15+", label: "Utility clients served" },
      { value: "2M+", label: "Smart meters integrated" },
      { value: "45%", label: "Average close time reduction" },
    ],
    challenges: [
      {
        title: "Smart Metering Complexity",
        description:
          "Millions of AMI devices generating real-time consumption data require seamless SAP IS-U integration for accurate billing and demand response programs.",
      },
      {
        title: "Deregulated Market Operations",
        description:
          "Complex retail energy markets demand flexible billing, customer switching management, and real-time settlement with transmission operators.",
      },
      {
        title: "Regulatory Reporting",
        description:
          "Utility-specific GAAP and FERC/NERC reporting requirements require specialized SAP finance configurations that generic implementations miss.",
      },
      {
        title: "Capital Project Finance",
        description:
          "Multi-billion-dollar infrastructure programs require sophisticated SAP Project Systems and fixed asset accounting tied to regulatory asset bases.",
      },
    ],
    solutions: [
      "SAP IS-U / S/4HANA Utilities implementation",
      "Smart metering (AMI) integration with SAP",
      "SAP S/4HANA Finance for utilities",
      "Revenue & billing transformation",
      "Regulatory reporting & FERC compliance",
      "Capital project finance (SAP PS)",
      "Treasury & risk management (TRM)",
      "ML-powered financial close",
    ],
    modules: ["SAP IS-U", "S/4HANA Utilities", "SAP TRM", "SAP PS", "SAP FI-CA", "SAP BPC"],
  },
  telecom: {
    name: "Telecom",
    tagline: "Revenue Management for the Digital Telco",
    description:
      "From 5G monetization to complex subscription bundling, Noshtek delivers SAP BRIM implementations that handle millions of real-time usage events, reduce revenue leakage, and accelerate digital product launches.",
    hero_stats: [
      { value: "12+", label: "Telecom clients served" },
      { value: "8M+", label: "Subscribers on BRIM" },
      { value: "60%", label: "Billing dispute reduction" },
    ],
    challenges: [
      {
        title: "Complex Subscription Billing",
        description:
          "5G, IoT, and convergent bundles demand real-time usage rating, flexible discount engines, and multi-play billing that legacy BSS cannot support.",
      },
      {
        title: "Revenue Leakage",
        description:
          "Gaps between network events and billing records cost telcos 1–3% of revenues annually. Real-time reconciliation requires deep BRIM expertise.",
      },
      {
        title: "Time-to-Market Pressure",
        description:
          "Rigid legacy systems block rapid product launches. SAP BRIM's product catalog flexibility enables digital telcos to launch new offers in days, not months.",
      },
      {
        title: "Wholesale Settlement",
        description:
          "Interconnect billing, roaming settlement, and MVNO management require specialized SAP BRIM configurations with partner data exchange.",
      },
    ],
    solutions: [
      "SAP BRIM end-to-end implementation",
      "Convergent Charging & Invoicing",
      "FI-CA (Contract Accounts Receivable)",
      "Revenue assurance & leakage recovery",
      "5G and IoT monetization architecture",
      "MVNO and wholesale billing",
      "Legacy BSS to SAP migration",
      "Real-time usage analytics",
    ],
    modules: ["SAP BRIM", "FI-CA", "Convergent Charging", "SOM", "S/4HANA Finance", "SAP Analytics"],
  },
  insurance: {
    name: "Insurance",
    tagline: "IFRS 17 Compliance and Beyond",
    description:
      "Noshtek's insurance practice combines deep actuarial understanding with SAP FPSL and TRM expertise to deliver compliant, auditable financial systems — enabling insurers to meet IFRS 17 requirements while improving financial close efficiency.",
    hero_stats: [
      { value: "8+", label: "Insurers served globally" },
      { value: "14", label: "Legal entities in largest program" },
      { value: "85%", label: "Manual close task reduction" },
    ],
    challenges: [
      {
        title: "IFRS 17 Measurement Complexity",
        description:
          "BBA, PAA, and VFA measurement approaches across multiple lines of business, legal entities, and currencies require specialized FPSL implementation knowledge.",
      },
      {
        title: "Actuarial-Finance Integration",
        description:
          "Bridging the gap between actuarial models (Prophet, MoSes, GGY AXIS) and SAP finance systems is a recurring challenge that Noshtek's integration accelerators solve.",
      },
      {
        title: "Multi-Entity Consolidation",
        description:
          "Global insurance groups face complex intercompany eliminations, foreign currency, and holding company reporting that requires Group Reporting expertise.",
      },
      {
        title: "Regulatory Audit Readiness",
        description:
          "Insurance regulators demand immutable audit trails and transparent calculation logic — capabilities built into Noshtek's FPSL implementation approach.",
      },
    ],
    solutions: [
      "SAP FPSL IFRS 17 implementation",
      "Actuarial data integration (Prophet, MoSes)",
      "SAP TRM (Treasury & Risk Management)",
      "FS-CD (Collections & Disbursements)",
      "Group Reporting & consolidation",
      "Regulatory reporting automation",
      "Investment accounting",
      "Solvency II compliance support",
    ],
    modules: ["SAP FPSL", "SAP TRM", "FS-CD", "S/4HANA Finance", "Group Reporting", "SAP BPC"],
  },
};
